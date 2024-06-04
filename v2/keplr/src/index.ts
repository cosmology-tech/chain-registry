import { Asset, AssetList, Chain } from '@chain-registry/v2-types';
import { Bech32Address } from '@keplr-wallet/cosmos';
import { ChainInfo, Currency, FeeCurrency } from '@keplr-wallet/types';
import semver from 'semver';

const getRpc = (chain: Chain): string => chain.apis?.rpc?.[0]?.address ?? '';
const getRest = (chain: Chain): string => chain.apis?.rest?.[0]?.address ?? '';
const getExplr = (chain: Chain): string => chain.explorers?.[0]?.url ?? '';

const cleanVer = (ver: string) => {
  if (!semver.valid(ver)) {
    // try to split by @ for repo@version
    ver = ver.split('@').pop();
    if (semver.valid(ver)) return ver;

    const spaces = ver.split('.').length;
    switch (spaces) {
      case 1:
        return ver + '.0.0';
      case 2:
        return ver + '.0';
      case 3:
        return ver;
      default:
        throw new Error(
          'contact @chain-registry/keplr maintainers: bad version'
        );
    }
  }
};

export const chainRegistryChainToKeplr = (
  chain: Chain,
  assets: AssetList[],
  options: {
    getRpcEndpoint?: (chain: Chain) => string;
    getRestEndpoint?: (chain: Chain) => string;
    getExplorer?: (chain: Chain) => string;
  } = {
      getRpcEndpoint: getRpc,
      getRestEndpoint: getRest,
      getExplorer: getExplr
    }
): ChainInfo => {
  if (!options.getRestEndpoint) options.getRestEndpoint = getRest;
  if (!options.getRpcEndpoint) options.getRpcEndpoint = getRpc;
  if (!options.getExplorer) options.getExplorer = getExplr;

  const features = [];
  // if NOT specified, we assume stargate, sorry not sorry
  const sdkVer = chain.codebase?.cosmosSdkVersion
    ? cleanVer(chain.codebase?.cosmosSdkVersion)
    : '0.40';

  // stargate
  if (semver.satisfies(sdkVer, '>=0.40')) features.push('stargate');
  // no-legacy-stdTx
  if (semver.satisfies(sdkVer, '>=0.43')) features.push('no-legacy-stdTx');
  // until further notice, assume 'ibc-transfer'
  features.push('ibc-transfer');

  // ibc-go
  if (semver.satisfies(sdkVer, '>=0.45')) features.push('ibc-go');

  if (chain.codebase?.cosmwasmEnabled) {
    features.push('cosmwasm');
    const wasmVer = cleanVer(chain.codebase.cosmwasmVersion ?? '0.24');
    if (semver.satisfies(wasmVer, '>=0.24')) features.push('wasmd_0.24+');
  }

  const chainAssets =
    assets.find((asset) => asset.chainName === chain.chainName)?.assets || [];

  const feeDenoms =
    chain.fees?.feeTokens.map<string>((feeToken) => feeToken.denom) || [];

  /**
   * FROM KEPLR chain-info.d.ts:
   * This is used to set the fee of the transaction.
   * If this field is empty, it just use the default gas price step (low: 0.01, average: 0.025, high: 0.04).
   * And, set field's type as primitive number because it is hard to restore the prototype after deserialzing if field's type is `Dec`.
   */
  interface GasPriceStep {
    low: number;
    average: number;
    high: number;
  }

  const gasPriceSteps: Record<string, GasPriceStep> = chain.fees?.feeTokens?.reduce((m, feeToken) => {
    m[feeToken.denom] = {
      low: feeToken.lowGasPrice ?? 0.01,
      average: feeToken.averageGasPrice ?? 0.025,
      high: feeToken.highGasPrice ?? 0.04
    };
    return m;
  }, {} as Record<string, GasPriceStep>);

  const stakingDenoms =
    chain.staking?.stakingTokens.map<string>(
      (stakingToken) => stakingToken.denom
    ) || [];

  const currencies: Currency[] = chainAssets.map((currency: Asset) => {
    return {
      coinDenom: currency.symbol,
      coinMinimalDenom: currency.base,
      coinDecimals: currency.denomUnits.filter(
        (denomUnit: { denom: string }) => denomUnit.denom === currency.display
      )[0]?.exponent,
      coinGeckoId: currency.coingeckoId || undefined,
      coinImageUrl: currency.logoURIs?.svg ?? currency.logoURIs?.png
    };
  });

  const stakeCurrency: Currency =
    currencies.find((currency) => stakingDenoms.includes(currency.coinDenom)) ??
    currencies[0];

  const feeCurrencies: FeeCurrency[] = currencies
    // USE THE FEE DENOMS
    .filter((currency) => feeDenoms.includes(currency.coinMinimalDenom))
    .map((feeCurrency) => {
      if (!(feeCurrency.coinMinimalDenom in gasPriceSteps)) {
        return feeCurrency;
      }

      // has gas
      const gasPriceStep = gasPriceSteps[feeCurrency.coinMinimalDenom];
      return {
        ...feeCurrency,
        gasPriceStep
      };
    });

  const feeCurrenciesDefault: FeeCurrency[] = currencies
    // USE THE STAKE CURRENCY
    .filter((currency) => stakeCurrency.coinDenom === currency.coinDenom)
    .map((feeCurrency) => {
      if (!(feeCurrency.coinMinimalDenom in gasPriceSteps)) {
        return feeCurrency;
      }

      // has gas
      const gasPriceStep = gasPriceSteps[feeCurrency.coinMinimalDenom];
      return {
        ...feeCurrency,
        gasPriceStep
      };
    });

  const chainInfo: ChainInfo = {
    rpc: options.getRpcEndpoint(chain),
    rest: options.getRestEndpoint(chain),
    chainId: chain.chainId,
    chainName: chain.prettyName,
    bip44: {
      coinType: chain.slip44
    },
    bech32Config: Bech32Address.defaultBech32Config(chain.bech32Prefix),
    currencies: currencies,
    stakeCurrency: stakeCurrency || currencies[0],
    feeCurrencies:
      feeCurrencies.length !== 0 ? feeCurrencies : feeCurrenciesDefault,
    features
  };

  return chainInfo;
};
