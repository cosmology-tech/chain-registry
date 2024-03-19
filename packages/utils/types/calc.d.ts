import { AssetList } from '@chain-registry/types';
import { Denom } from './assets';
export interface CoinGeckoUSDPrice {
    usd: number;
}
export interface DenomPriceMap {
    [key: Denom]: number;
}
export declare const mapCoinGeckoPricesToDenoms: (assets: AssetList[], prices: Record<string, CoinGeckoUSDPrice>) => DenomPriceMap;
export declare const roundDown: (value: number | string) => string;
export declare const convertBaseUnitToDollarValue: (assets: AssetList[], prices: DenomPriceMap, symbol: string, amount: string | number, chainName?: string) => string;
export declare const convertDollarValueToBaseUnit: (assets: AssetList[], prices: DenomPriceMap, symbol: string, value: string | number, chainName?: string) => string;
export declare const convertBaseUnitToDisplayUnit: (assets: AssetList[], symbol: string, amount: string | number, chainName?: string) => string;
export declare const convertDisplayUnitToBaseUnit: (assets: AssetList[], symbol: string, amount: string | number, chainName?: string) => string;
