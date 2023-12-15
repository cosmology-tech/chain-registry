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

export function getAssetByDenom(assets: Asset[], denom: CoinDenom): Asset {
  const asset = assets.find((asset) => asset.base === denom);
  if (!asset) {
    throw new Error(`Asset not found: ${denom}`);
  }
  return asset;
}

export function getDenomByCoinGeckoId(
  assets: Asset[],
  coinGeckoId: string
): CoinDenom {
  return assets.find((asset) => asset.coingecko_id === coinGeckoId).base;
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
  assets: Asset[],
  denom: CoinDenom
): string {
  const asset = getAssetByDenom(assets, denom);
  const symbol = asset.symbol;
  if (!symbol) {
    return denom;
  }
  return symbol;
}

export function getChainDenomBySymbol(
  assets: Asset[],
  token: string
): CoinDenom {
  const asset = assets.find(({ symbol }) => symbol === token);
  const base = asset?.base;
  if (!base) {
    console.log(`cannot find base for token ${token}`);
    return null;
  }
  return base;
}

export function getExponentByDenom(
  assets: Asset[],
  denom: CoinDenom
): Exponent {
  const asset = getAssetByDenom(assets, denom);
  const unit = asset.denom_units.find(({ denom }) => denom === asset.display);
  return unit?.exponent || 0;
}

export function convertCoinGeckoPricesToDenomPriceMap(
  assets: Asset[],
  prices: Record<string, CoinGeckoUSD>
): PriceHash {
  return Object.keys(prices).reduce((res, geckoId) => {
    const denom = getDenomByCoinGeckoId(assets, geckoId);
    res[denom] = prices[geckoId].usd;
    return res;
  }, {});
}

export function noDecimals(num: number | string): string {
  return new BigNumber(num).decimalPlaces(0, BigNumber.ROUND_DOWN).toString();
}

export function convertBaseUnitsToDollarValue(
  assets: Asset[],
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
  assets: Asset[],
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
  assets: Asset[],
  symbol: string,
  amount: string | number
): string {
  const denom = getChainDenomBySymbol(assets, symbol);
  return new BigNumber(amount)
    .shiftedBy(-getExponentByDenom(assets, denom))
    .toString();
}
