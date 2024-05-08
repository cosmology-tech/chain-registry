import { AssetList } from '@chain-registry/types';
import BigNumber from 'bignumber.js';

import {
  Denom,
  getAssetByDenom,
  getAssetBySymbol,
  getDenomsByCoinGeckoId,
  getExponentByDenomFromAsset,
  getExponentFromAsset
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
    const denoms = getDenomsByCoinGeckoId(assets, geckoId)
    
    if (!denoms.length) {
      throw new Error(`No denom found for CoinGecko ID: ${geckoId}`);
    }

    // some tokens list same coingeckoId
    denoms.forEach(d => {
      res[d] = prices[geckoId].usd;
    })
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

  
  if (!denom || exponent === undefined) {
    throw new Error(`No denom or exponent found for symbol: ${symbol}`);
  }

  return { denom, exponent };
};

const getAssetInfoByDenom = (
  assets: AssetList[],
  denom: string,
  chainName?: string
) => {

  const asset = getAssetByDenom(assets, denom, chainName);

  const exponent = asset ? getExponentByDenomFromAsset(asset, denom) : undefined;
  if (exponent === undefined) {
    throw new Error(`No denom or exponent found for denom: ${denom}`);
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

export const convertBaseUnitToDollarValueByDenom = (
  assets: AssetList[],
  prices: DenomPriceMap,
  denom: string,
  amount: string | number,
  chainName?: string
): string => {
  const asset = getAssetByDenom(assets, denom, chainName);

  if(!asset) {
    throw new Error(`no asset found from denom:${denom}`);
  } 

  const assetBase:string = asset.base;
  const assetDisplay:string = asset.display;

  if(!(assetBase in prices)) {
    console.warn(`no price found from denom:${denom}`);
    return '0';
  }
  const exponent = getExponentByDenomFromAsset(asset, assetDisplay);
  if (exponent === undefined) {
    throw new Error(`No exponent found for denom: ${denom}`);
  }
  const baseAmount = shiftDecimalPlaces(amount, exponent, -1);

  return new BigNumber(baseAmount).multipliedBy(prices[assetBase]).toString();
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
  return shiftDecimalPlaces(baseAmount, exponent);
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

export const convertBaseUnitToDisplayUnitByDenom = (
  assets: AssetList[],
  denom: string,
  amount: string | number,
  chainName?: string
): string => {
  const asset = getAssetByDenom(assets, denom, chainName);

  if(!asset) {
    throw new Error(`no asset found from denom:${denom}`);
  } 

  const assetDisplay:string = asset.display;

  const exponent = getExponentByDenomFromAsset(asset, assetDisplay);
  if (exponent === undefined) {
    throw new Error(`No exponent found for denom: ${denom}`);
  }

  return shiftDecimalPlaces(amount, exponent, -1);
};

export const convertDisplayUnitToBaseUnit = (
  assets: AssetList[],
  symbol: string,
  amount: string | number,
  chainName?: string
): string => {
  const { exponent } = getAssetInfo(assets, symbol, chainName);
  return shiftDecimalPlaces(amount, exponent);
};

