import { Asset, AssetDenomUnit, AssetList } from '@chain-registry/types';
export type CoinDenom = AssetDenomUnit['denom'];
export type Exponent = AssetDenomUnit['exponent'];
export interface CoinGeckoUSD {
    usd: number;
}
export interface PriceHash {
    [key: CoinDenom]: number;
}
export declare function getAssetByDenom(assets: AssetList[], denom: CoinDenom, chainName?: string): Asset;
export declare function getDenomByCoinGeckoId(assets: AssetList[], coinGeckoId: string, chainName?: string): CoinDenom;
type GetCoinGeckoIdByDenomOptions = {
    chainName?: string;
    allowTestnet?: boolean;
    customAssetFilter?: (asset: Asset) => boolean;
    excludedChainNames?: string[];
};
export declare function getCoinGeckoIdByDenom(assets: AssetList[], denom: CoinDenom, { chainName, allowTestnet, customAssetFilter, excludedChainNames }?: GetCoinGeckoIdByDenomOptions): string | null;
export declare function getSymbolByChainDenom(assets: AssetList[], denom: CoinDenom, chainName?: string): string;
export declare function getChainDenomBySymbol(assets: AssetList[], symbol: string, chainName?: string): CoinDenom;
export declare function getExponentByDenom(assets: AssetList[], denom: CoinDenom, chainName?: string): Exponent;
export declare function convertCoinGeckoPricesToDenomPriceMap(assets: AssetList[], prices: Record<string, CoinGeckoUSD>): PriceHash;
export declare function noDecimals(num: number | string): string;
export declare function convertBaseUnitsToDollarValue(assets: AssetList[], prices: PriceHash, symbol: string, amount: string | number, chainName?: string): string;
export declare function convertDollarValueToDenomUnits(assets: AssetList[], prices: PriceHash, symbol: string, value: string | number, chainName?: string): string;
export declare function convertBaseUnitsToDisplayUnits(assets: AssetList[], symbol: string, amount: string | number, chainName?: string): string;
export {};
