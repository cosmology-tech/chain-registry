import { Asset, AssetList, Chain } from '@chain-registry/v2-types';
import { getGasPriceRangesFromChain } from '@chain-registry/v2-utils';
import { AddChainParams } from '@cosmostation/extension-client/types/message';

const getRest = (chain: Chain): string => chain.apis?.rest[0]?.address;

// chainId: string;
// chainName: string;
// restURL: string;
// imageURL?: string;
// baseDenom: string;
// displayDenom: string;
// decimals?: number;
// coinType?: string;
// addressPrefix: string;
// coinGeckoId?: string;
// gasRate?: GasRate;
// sendGas?: string;
// type?: CosmosType;

export const chainRegistryChainToCosmostation = (
  chain: Chain,
  assets: AssetList[],
  options: {
    getRestEndpoint: (chain: Chain) => string;
  } = {
    getRestEndpoint: getRest
  }
): AddChainParams => {
  if (!options.getRestEndpoint) options.getRestEndpoint = getRest;

  const chainAssets =
    assets.find((asset) => asset.chainName === chain.chainName)?.assets || [];

  const stakingDenoms =
    chain.staking?.stakingTokens.map<string>(
      (stakingToken) => stakingToken.denom
    ) || [];

  const currencies = chainAssets.map((currency: Asset) => {
    return {
      displayDenom: currency.symbol,
      baseDenom: currency.base,
      coinGeckoId: currency.coingeckoId,
      imageURL: currency.logoURIs?.svg ?? currency.logoURIs?.png
    };
  });

  const stakeCurrency =
    currencies.find((currency) => stakingDenoms.includes(currency.baseDenom)) ??
    currencies[0];

  const gasPriceRanges = getGasPriceRangesFromChain(chain);

  const chainInfo: AddChainParams = {
    chainId: chain.chainId,
    chainName: chain.prettyName,
    restURL: options.getRestEndpoint(chain),
    imageURL: stakeCurrency.imageURL,
    baseDenom: stakeCurrency.baseDenom,
    displayDenom: stakeCurrency.displayDenom,
    coinType: chain.slip44.toString(),
    addressPrefix: chain.bech32Prefix,
    coinGeckoId: currencies[0].coinGeckoId,
    gasRate: {
      // optional (default: { average: '0.025', low: '0.0025', tiny: '0.00025' })
      average: gasPriceRanges.average.toString(),
      low: gasPriceRanges.low.toString(),
      tiny: '0.00025'
    }
    // TODO implement type
    // type: '' | 'ETHERMINT'
  };

  return chainInfo;
};
