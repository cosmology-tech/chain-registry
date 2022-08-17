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

  const gasPriceStep: ChainInfo['gasPriceStep'] = {
    average: chain.fees?.fee_tokens?.[0]?.average_gas_price,
    high: chain.fees?.fee_tokens?.[0]?.high_gas_price,
    low: chain.fees?.fee_tokens?.[0]?.low_gas_price
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
    gasPriceStep:
      Object.keys(gasPriceStep).length > 0 ? gasPriceStep : undefined,
    bech32Config: Bech32Address.defaultBech32Config(chain.bech32_prefix),
    currencies: currencies,
    stakeCurrency: stakeCurrency || currencies[0],
    feeCurrencies: feeCurrencies.length !== 0 ? feeCurrencies : currencies
  };

  return chainInfo;
};
