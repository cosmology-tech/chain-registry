import { AssetList } from '@chain-registry/types';
import BigNumber from 'bignumber.js';
import {
  Denom,
  getAssetBySymbol,
  getExponentFromAsset,
  getDenomByCoinGeckoId
} from './assets';

export interface CoinGeckoUSDPrice {
  usd: number;
}

export interface DenomPriceMap {
  [key: Denom]: number;
}

export const mapCoinGeckoPricesToDenoms = (
  assets: AssetList[],
  prices: Record<string, CoinGeckoUSDPrice>
): DenomPriceMap => {
  return Object.keys(prices).reduce((res: DenomPriceMap, geckoId) => {
    const denom = getDenomByCoinGeckoId(assets, geckoId);
    if (!denom) {
      throw new Error(`No denom found for CoinGecko ID: ${geckoId}`);
    }
    res[denom] = prices[geckoId].usd;
    return res;
  }, {});
};

export const roundDown = (value: number | string): string => {
  return new BigNumber(value).decimalPlaces(0, BigNumber.ROUND_DOWN).toString();
};

const getAssetInfo = (
  assets: AssetList[],
  symbol: string,
  chainName?: string
) => {
  const asset = getAssetBySymbol(assets, symbol, chainName);
  const denom = asset?.base;
  const exponent = asset ? getExponentFromAsset(asset) : undefined;

  if (!denom || !exponent) {
    throw new Error(`No denom or exponent found for symbol: ${symbol}`);
  }

  return { denom, exponent };
};

const shiftDecimalPlaces = (
  amount: string | number,
  exponent: number,
  direction: 1 | -1 = 1
) => {
  return new BigNumber(amount).shiftedBy(exponent * direction).toString();
};

export const convertBaseUnitToDollarValue = (
  assets: AssetList[],
  prices: DenomPriceMap,
  symbol: string,
  amount: string | number,
  chainName?: string
): string => {
  const { denom, exponent } = getAssetInfo(assets, symbol, chainName);
  const baseAmount = shiftDecimalPlaces(amount, exponent, -1);
  return new BigNumber(baseAmount).multipliedBy(prices[denom]).toString();
};

export const convertDollarValueToBaseUnit = (
  assets: AssetList[],
  prices: DenomPriceMap,
  symbol: string,
  value: string | number,
  chainName?: string
): string => {
  const { denom, exponent } = getAssetInfo(assets, symbol, chainName);
  const baseAmount = new BigNumber(value).dividedBy(prices[denom]).toString();
  return roundDown(shiftDecimalPlaces(baseAmount, exponent));
};

export const convertBaseUnitToDisplayUnit = (
  assets: AssetList[],
  symbol: string,
  amount: string | number,
  chainName?: string
): string => {
  const { exponent } = getAssetInfo(assets, symbol, chainName);
  return shiftDecimalPlaces(amount, exponent, -1);
};

export const convertDisplayUnitToBaseUnit = (
  assets: AssetList[],
  symbol: string,
  amount: string | number,
  chainName?: string
): string => {
  const { exponent } = getAssetInfo(assets, symbol, chainName);
  return roundDown(shiftDecimalPlaces(amount, exponent));
};
