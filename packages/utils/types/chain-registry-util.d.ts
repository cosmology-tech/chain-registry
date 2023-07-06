import { Asset, AssetDenomUnit, AssetList } from '@chain-registry/types';

export type Exponent = AssetDenomUnit['exponent'];

export type CoinDenom = AssetDenomUnit['denom'];

export interface CoinGeckoUSD {
  usd: number;
}

export interface PriceHash {
  [key: CoinDenom]: number;
}

export interface ChainRegistryUtilOptions {
  assetLists?: AssetList[];
}

export declare class ChainRegistryUtil {
  _options?: ChainRegistryUtilOptions;
  _asset_lists: AssetList[];
  constructor(options: ChainRegistryUtilOptions);
  private getAllAssets(chainName: string): Asset[];
  getAssetByDenom(chainName: string, denom: CoinDenom): Asset;
  getDenomByCoinGeckoId(chainName: string, coinGeckoId: string): CoinDenom;
  chainDenomToSymbol(chainName: string, denom: CoinDenom): string;
  getSymbolByChainDenom(chainName: string, token: string): CoinDenom;
  getExponentByDenom(chainName: string, denom: CoinDenom): Exponent;
  convertCoinGeckoPricesToDenomPriceMap(
    chainName: string,
    prices: Record<string, CoinGeckoUSD>
  ): PriceHash;
  noDecimals(num: number | string): string;
  convertBaseUnitsToDollarValue(
    chainName: string,
    prices: PriceHash,
    symbol: string,
    amount: string | number
  ): string;
  convertDollarValueToDenomUnits(
    chainName: string,
    prices: PriceHash,
    symbol: string,
    value: string | number
  ): string;
  convertBaseUnitsToDisplayUnits(
    chainName: string,
    symbol: string,
    amount: string | number
  ): string;
}
