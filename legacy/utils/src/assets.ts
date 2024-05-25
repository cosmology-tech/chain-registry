import { Asset, AssetDenomUnit, AssetList, Chain } from '@chain-registry/types';

import { customFind } from './utils';

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

  return customFind(filteredAssets, (asset) => asset[key] === value, `key:${key} value:${value} chainName:${chainName}`);
};

export const getAssetByDenom = (
  assets: AssetList[],
  denom: Denom,
  chainName?: string
): Asset | undefined => {

  const filteredAssets = assets
    .filter(({ chain_name }) => !chainName || chain_name === chainName)
    .flatMap(({ assets }) => assets);

  return customFind(filteredAssets, (asset) => {
    const found = asset.denom_units.find(unit => unit.denom === denom);
  
    return !!found;
  },`denom:${denom} chainName:${chainName}`);

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

export const getDenomsByCoinGeckoId = (
  assets: AssetList[],
  coinGeckoId: string,
  chainName?: string
): Denom[] => {
  const filteredAssets = assets
    .filter(({ chain_name }) => !chainName || chain_name === chainName)
    .flatMap(({ assets }) => assets);

  const denoms = filteredAssets
    .filter( a => a.coingecko_id === coinGeckoId)
    .map(a => a.base);

  return denoms;
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

export const getExponentFromAsset = (asset: Asset): number | undefined => {
  return asset.denom_units.find(({ denom }) => denom === asset.display)
    ?.exponent;
};

export const getExponentByDenomFromAsset = (asset: Asset, denom: string): number | undefined => {
  return asset.denom_units.find((unit) => {
    return unit.denom === denom || unit?.aliases?.find(a => a === denom);
  })
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

export const getNativeAssetByChainName = (
  assets: AssetList[],
  chainName: string
): Asset | undefined => {
  const assetList = customFind(
    assets,
    (assetList) =>
      assetList.chain_name === chainName &&
      !assetList.assets[0].base.startsWith('ibc/'),
    `chainName:${chainName}`
  );

  return assetList?.assets[0];
};

export const getAssetLogoByDenom = (
  assets: AssetList[],
  denom: Denom,
  chainName?: string
): string | undefined => {
  const asset = getAssetByDenom(assets, denom, chainName);
  return Object.values(asset?.logo_URIs || {})[0];
};

export const getChainLogo = (
  assets: AssetList[],
  chainName: string
): string | undefined => {
  const nativeAsset = getNativeAssetByChainName(assets, chainName);
  return Object.values(nativeAsset?.logo_URIs || {})[0];
};

export const getAssetNameByDenom = (
  assets: AssetList[],
  denom: Denom,
  chainName?: string
): string | undefined => {
  const asset = getAssetByDenom(assets, denom, chainName);
  return asset?.name;
};

export const getChainNameByDenom = (
  assets: AssetList[],
  denom: Denom
): string | undefined => {
  const isIbcDenom = denom.startsWith('ibc/');

  if (isIbcDenom) {
    const asset = getAssetByDenom(assets, denom);
    return asset?.traces?.find((t) => t.type === 'ibc')?.counterparty
      ?.chain_name;
  }

  return customFind(assets, (assetList) =>
    assetList.assets.some((asset) => asset.base === denom),
  `denom:${denom}`
  )?.chain_name;
};

export const getChainByStakingDenom = (
  chains: Chain[],
  denom: Denom
): Chain | undefined =>
  customFind(
    chains,
    (chain) =>
      !!chain.staking?.staking_tokens.find((token) => token.denom === denom),
    `denom:${denom}`
  );

export const getChainNameByStakingDenom = (
  chains: Chain[],
  denom: Denom
): string | undefined => getChainByStakingDenom(chains, denom)?.chain_name;
