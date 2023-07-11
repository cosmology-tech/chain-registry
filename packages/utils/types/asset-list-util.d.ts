import { Asset, AssetDenomUnit } from '@chain-registry/types';

export type CoinDenom = AssetDenomUnit['denom'];

export type Exponent = AssetDenomUnit['exponent'];

export interface CoinGeckoUSD {
  usd: number;
}

export interface PriceHash {
  [key: CoinDenom]: number;
}

export declare function getAssetByDenom(
  assets: Asset[],
  denom: CoinDenom
): Asset;

export declare function getDenomByCoinGeckoId(
  assets: Asset[],
  coinGeckoId: string
): CoinDenom;

export declare function getSymbolByChainDenom(
  assets: Asset[],
  denom: CoinDenom
): string;

export declare function getChainDenomBySymbol(
  assets: Asset[],
  token: string
): CoinDenom;

export declare function getExponentByDenom(
  assets: Asset[],
  denom: CoinDenom
): Exponent;

export declare function convertCoinGeckoPricesToDenomPriceMap(
  assets: Asset[],
  prices: Record<string, CoinGeckoUSD>
): PriceHash;

export declare function noDecimals(num: number | string): string;

export declare function convertBaseUnitsToDollarValue(
  assets: Asset[],
  prices: PriceHash,
  symbol: string,
  amount: string | number
): string;

export declare function convertDollarValueToDenomUnits(
  assets: Asset[],
  prices: PriceHash,
  symbol: string,
  value: string | number
): string;

export declare function convertBaseUnitsToDisplayUnits(
  assets: Asset[],
  symbol: string,
  amount: string | number
): string;
