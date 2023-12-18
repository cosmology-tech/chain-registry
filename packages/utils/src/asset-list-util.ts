import { Asset, AssetList, AssetDenomUnit } from '@chain-registry/types';
import BigNumber from 'bignumber.js';

export type CoinDenom = AssetDenomUnit['denom'];

export type Exponent = AssetDenomUnit['exponent'];

export interface CoinGeckoUSD {
  usd: number;
}

export interface PriceHash {
  [key: CoinDenom]: number;
}

function getAssetByKeyValue(
  assets: AssetList[],
  key: keyof Asset,
  value: string,
  chainName?: string
): Asset {
  const filteredAssets = assets
    .filter(({ chain_name }) => !chainName || chain_name === chainName)
    .flatMap(({ assets }) => assets);

  const matchingAssets = filteredAssets.filter((asset) => asset[key] === value);

  if (matchingAssets.length === 0) {
    throw new Error(`No asset found for ${key} '${value}'`);
  }

  if (matchingAssets.length > 1) {
    throw new Error(
      `Ambiguity: ${matchingAssets.length} assets found for ${key} '${value}'`
    );
  }

  return matchingAssets[0];
}

export function getAssetByDenom(
  assets: AssetList[],
  denom: CoinDenom,
  chainName?: string
): Asset {
  return getAssetByKeyValue(assets, 'base', denom, chainName);
}

export function getDenomByCoinGeckoId(
  assets: AssetList[],
  coinGeckoId: string,
  chainName?: string
): CoinDenom {
  return getAssetByKeyValue(assets, 'coingecko_id', coinGeckoId, chainName)
    .base;
}

type GetCoinGeckoIdByDenomOptions = {
  allowTestnet?: boolean;
  customAssetFilter?: (asset: Asset) => boolean;
  excludedChainNames?: string[];
};

export function getCoinGeckoIdByDenom(
  assets: AssetList[],
  denom: CoinDenom,
  {
    allowTestnet = false,
    customAssetFilter = () => true,
    excludedChainNames = []
  }: GetCoinGeckoIdByDenomOptions = {}
): string | null {
  const filteredAssetLists = assets.filter(({ chain_name }) => {
    return (
      (allowTestnet || !chain_name.includes('testnet')) &&
      !excludedChainNames.includes(chain_name)
    );
  });

  const filteredAssets = filteredAssetLists
    .flatMap(({ assets }) => assets)
    .filter(({ coingecko_id }) => coingecko_id)
    .filter(customAssetFilter);

  const asset = filteredAssets.find(({ base }) => base === denom);

  return asset?.coingecko_id ?? null;
}

export function getSymbolByChainDenom(
  assets: AssetList[],
  denom: CoinDenom,
  chainName?: string
): string {
  return getAssetByDenom(assets, denom, chainName).symbol;
}

export function getChainDenomBySymbol(
  assets: AssetList[],
  symbol: string,
  chainName?: string
): CoinDenom {
  return getAssetByKeyValue(assets, 'symbol', symbol, chainName).base;
}

export function getExponentByDenom(
  assets: AssetList[],
  denom: CoinDenom,
  chainName?: string
): Exponent {
  const asset = getAssetByDenom(assets, denom, chainName);
  const unit = asset.denom_units.find(({ denom }) => denom === asset.display);
  return unit?.exponent ?? 0;
}

export function convertCoinGeckoPricesToDenomPriceMap(
  assets: AssetList[],
  prices: Record<string, CoinGeckoUSD>
): PriceHash {
  return Object.keys(prices).reduce((res: PriceHash, geckoId) => {
    const denom = getDenomByCoinGeckoId(assets, geckoId);
    res[denom] = prices[geckoId].usd;
    return res;
  }, {});
}

export function noDecimals(num: number | string): string {
  return new BigNumber(num).decimalPlaces(0, BigNumber.ROUND_DOWN).toString();
}

export function convertBaseUnitsToDollarValue(
  assets: AssetList[],
  prices: PriceHash,
  symbol: string,
  amount: string | number
): string {
  const denom = getChainDenomBySymbol(assets, symbol);
  return new BigNumber(amount)
    .shiftedBy(-getExponentByDenom(assets, denom))
    .multipliedBy(prices[denom])
    .toString();
}

export function convertDollarValueToDenomUnits(
  assets: AssetList[],
  prices: PriceHash,
  symbol: string,
  value: string | number
): string {
  const denom = getChainDenomBySymbol(assets, symbol);
  return new BigNumber(value)
    .dividedBy(prices[denom])
    .shiftedBy(getExponentByDenom(assets, denom))
    .toString();
}

export function convertBaseUnitsToDisplayUnits(
  assets: AssetList[],
  symbol: string,
  amount: string | number
): string {
  const denom = getChainDenomBySymbol(assets, symbol);
  return new BigNumber(amount)
    .shiftedBy(-getExponentByDenom(assets, denom))
    .toString();
}
