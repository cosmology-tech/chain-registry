import { Asset, AssetDenomUnit, AssetList } from '@chain-registry/types';

export type Denom = AssetDenomUnit['denom'];
export type Exponent = AssetDenomUnit['exponent'];

const getAssetByKeyValue = (
  assets: AssetList[],
  key: keyof Asset,
  value: string,
  chainName?: string
): Asset | undefined => {
  const filteredAssets = assets
    .filter(({ chain_name }) => !chainName || chain_name === chainName)
    .flatMap(({ assets }) => assets);

  const matchingAssets = filteredAssets.filter((asset) => asset[key] === value);

  if (matchingAssets.length === 0) {
    return undefined;
  }

  if (matchingAssets.length > 1) {
    throw new Error(
      `Ambiguity: ${matchingAssets.length} assets found for ${key}: ${value}`
    );
  }

  return matchingAssets[0];
};

export const getAssetByDenom = (
  assets: AssetList[],
  denom: Denom,
  chainName?: string
): Asset | undefined => {
  return getAssetByKeyValue(assets, 'base', denom, chainName);
};

export const getAssetBySymbol = (
  assets: AssetList[],
  symbol: string,
  chainName?: string
): Asset | undefined => {
  return getAssetByKeyValue(assets, 'symbol', symbol, chainName);
};

export const getDenomByCoinGeckoId = (
  assets: AssetList[],
  coinGeckoId: string,
  chainName?: string
): Denom | undefined => {
  return getAssetByKeyValue(assets, 'coingecko_id', coinGeckoId, chainName)
    ?.base;
};

type GetCoinGeckoIdByDenomOptions = {
  chainName?: string;
  allowTestnet?: boolean;
  customAssetFilter?: (asset: Asset) => boolean;
  excludedChainNames?: string[];
};

export const getCoinGeckoIdByDenom = (
  assets: AssetList[],
  denom: Denom,
  {
    chainName,
    allowTestnet = false,
    customAssetFilter = () => true,
    excludedChainNames = []
  }: GetCoinGeckoIdByDenomOptions = {}
): string | undefined => {
  const filteredAssetLists = assets.filter(({ chain_name }) => {
    return (
      (!chainName || chain_name === chainName) &&
      (allowTestnet || !chain_name.includes('testnet')) &&
      !excludedChainNames.includes(chain_name)
    );
  });

  const filteredAssets = filteredAssetLists
    .flatMap(({ assets }) => assets)
    .filter(({ coingecko_id }) => coingecko_id)
    .filter(customAssetFilter);

  const asset = filteredAssets.find(({ base }) => base === denom);

  return asset?.coingecko_id;
};

export const getSymbolByDenom = (
  assets: AssetList[],
  denom: Denom,
  chainName?: string
): string | undefined => {
  return getAssetByDenom(assets, denom, chainName)?.symbol;
};

export const getDenomBySymbol = (
  assets: AssetList[],
  symbol: string,
  chainName?: string
): Denom | undefined => {
  return getAssetByKeyValue(assets, 'symbol', symbol, chainName)?.base;
};

export const getExponentFromAsset = (asset: Asset) => {
  return asset.denom_units.find(({ denom }) => denom === asset.display)
    ?.exponent;
};

export const getExponentByDenom = (
  assets: AssetList[],
  denom: Denom,
  chainName?: string
): Exponent | undefined => {
  const asset = getAssetByDenom(assets, denom, chainName);
  return asset ? getExponentFromAsset(asset) : undefined;
};

export const getExponentBySymbol = (
  assets: AssetList[],
  symbol: string,
  chainName?: string
): Exponent | undefined => {
  const asset = getAssetBySymbol(assets, symbol, chainName);
  return asset ? getExponentFromAsset(asset) : undefined;
};
