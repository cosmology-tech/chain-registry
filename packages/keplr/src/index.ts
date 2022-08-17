import { Asset, AssetList, Chain } from '@chain-registry/types';
import { Bech32Address } from '@keplr-wallet/cosmos';
import { ChainInfo, Currency } from '@keplr-wallet/types';

const getRpc = (chain: Chain): string => chain.apis?.rpc[0]?.address;
const getRest = (chain: Chain): string => chain.apis?.rest[0]?.address;
const getExplr = (chain: Chain): string => chain.explorers?.[0]?.url;

export const chainRegistryChainToKeplr = (
  chain: Chain,
  assets: AssetList[],
  options: {
    getRpcEndpoint: (chain: Chain) => string;
    getRestEndpoint: (chain: Chain) => string;
    getExplorer: (chain: Chain) => string;
  } = {
    getRpcEndpoint: getRpc,
    getRestEndpoint: getRest,
    getExplorer: getExplr
  }
): ChainInfo => {
  if (!options.getRestEndpoint) options.getRestEndpoint = getRest;
  if (!options.getRpcEndpoint) options.getRpcEndpoint = getRpc;
  if (!options.getExplorer) options.getExplorer = getExplr;

  const chainAssets =
    assets.find((asset) => asset.chain_name === chain.chain_name)?.assets || [];

  const feeDenoms =
    chain.fees?.fee_tokens.map<string>((feeToken) => feeToken.denom) || [];

  /**
   * FROM KEPLR chain-info.d.ts:
   * This is used to set the fee of the transaction.
   * If this field is empty, it just use the default gas price step (low: 0.01, average: 0.025, high: 0.04).
   * And, set field's type as primitive number because it is hard to restore the prototype after deserialzing if field's type is `Dec`.
   */
  const gasPriceStep: ChainInfo['gasPriceStep'] = {
    low: chain.fees?.fee_tokens?.[0]?.low_gas_price ?? 0.01,
    average: chain.fees?.fee_tokens?.[0]?.average_gas_price ?? 0.025,
    high: chain.fees?.fee_tokens?.[0]?.high_gas_price ?? 0.04
  };

  const stakingDenoms =
    chain.staking?.staking_tokens.map<string>(
      (stakingToken) => stakingToken.denom
    ) || [];

  const currencies: Currency[] = chainAssets.map((currency: Asset) => {
    return {
      coinDenom: currency.symbol,
      coinMinimalDenom: currency.base,
      coinDecimals: currency.denom_units.filter(
        (denomUnit: { denom: string }) => denomUnit.denom === currency.display
      )[0]?.exponent,
      coinGeckoId: currency.coingecko_id,
      coinImageUrl: currency.logo_URIs?.svg ?? currency.logo_URIs?.png
    };
  });

  const stakeCurrency: Currency =
    currencies.find((currency) => stakingDenoms.includes(currency.coinDenom)) ??
    currencies[0];

  const feeCurrencies: Currency[] = currencies.filter((currency) =>
    feeDenoms.includes(currency.coinDenom)
  );

  const chainInfo: ChainInfo = {
    rpc: options.getRpcEndpoint(chain),
    rest: options.getRestEndpoint(chain),
    chainId: chain.chain_id,
    chainName: chain.pretty_name,
    bip44: {
      coinType: chain.slip44
    },
    gasPriceStep,
    bech32Config: Bech32Address.defaultBech32Config(chain.bech32_prefix),
    currencies: currencies,
    stakeCurrency: stakeCurrency || currencies[0],
    feeCurrencies: feeCurrencies.length !== 0 ? feeCurrencies : currencies
  };

  return chainInfo;
};
