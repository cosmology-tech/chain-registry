import { AssetList } from '@chain-registry/types';
import BigNumber from 'bignumber.js';
import {
  Denom,
  getDenomByCoinGeckoId,
  getAssetBySymbol,
  getExponentFromAsset,
  getExponentBySymbol
} from './assets';

export interface CoinGeckoUSD {
  usd: number;
}

export interface PriceHash {
  [key: Denom]: number;
}

export const convertCoinGeckoPricesToDenomPriceMap = (
  assets: AssetList[],
  prices: Record<string, CoinGeckoUSD>
): PriceHash => {
  return Object.keys(prices).reduce((res: PriceHash, geckoId) => {
    const denom = getDenomByCoinGeckoId(assets, geckoId);
    if (!denom) {
      throw new Error(`No denom found for CoinGecko ID: ${geckoId}`);
    }
    res[denom] = prices[geckoId].usd;
    return res;
  }, {});
};

export const noDecimals = (num: number | string): string => {
  return new BigNumber(num).decimalPlaces(0, BigNumber.ROUND_DOWN).toString();
};

export const convertBaseUnitsToDollarValue = (
  assets: AssetList[],
  prices: PriceHash,
  symbol: string,
  amount: string | number,
  chainName?: string
): string => {
  const asset = getAssetBySymbol(assets, symbol, chainName);
  const denom = asset?.base;
  const exponent = asset ? getExponentFromAsset(asset) : undefined;

  if (!denom || !exponent) {
    throw new Error(`No denom or exponent found for symbol: ${symbol}`);
  }

  return new BigNumber(amount)
    .shiftedBy(-exponent)
    .multipliedBy(prices[denom])
    .toString();
};

export const convertDollarValueToDenomUnits = (
  assets: AssetList[],
  prices: PriceHash,
  symbol: string,
  value: string | number,
  chainName?: string
): string => {
  const asset = getAssetBySymbol(assets, symbol, chainName);
  const denom = asset?.base;
  const exponent = asset ? getExponentFromAsset(asset) : undefined;

  if (!denom || !exponent) {
    throw new Error(`No denom or exponent found for symbol: ${symbol}`);
  }

  return new BigNumber(value)
    .dividedBy(prices[denom])
    .shiftedBy(exponent)
    .toString();
};

export const convertBaseUnitsToDisplayUnits = (
  assets: AssetList[],
  symbol: string,
  amount: string | number,
  chainName?: string
): string => {
  const exponent = getExponentBySymbol(assets, symbol, chainName);

  if (!exponent) {
    throw new Error(`No exponent found for symbol: ${symbol}`);
  }

  return new BigNumber(amount).shiftedBy(-exponent).toString();
};
