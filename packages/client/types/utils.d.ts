import { Asset, AssetList } from '@chain-registry/types';
import type { Denom, Exponent, DenomPriceMap, CoinGeckoUSDPrice } from '@chain-registry/utils';
export interface ChainRegistryUtilsOptions {
    chainName: string;
    assetList?: AssetList;
    ibcAssetList?: AssetList;
}
export declare class ChainRegistryUtils {
    private _chainName;
    private _assets;
    constructor(options: ChainRegistryUtilsOptions);
    getAssetByDenom(denom: Denom): Asset | undefined;
    getAssetBySymbol(symbol: string): Asset | undefined;
    getDenomByCoinGeckoId(coinGeckoId: string): Denom | undefined;
    getCoinGeckoIdByDenom(coinGeckoId: string): Denom | undefined;
    getSymbolByDenom(denom: Denom): string | undefined;
    getDenomBySymbol(symbol: string): Denom | undefined;
    getExponentByDenom(denom: Denom): Exponent | undefined;
    getExponentBySymbol(symbol: string): Exponent | undefined;
    getTokenLogoByDenom(denom: Denom): string | undefined;
    getTokenNameByDenom(denom: Denom): string | undefined;
    getChainNameByDenom(denom: Denom): string | undefined;
    mapCoinGeckoPricesToDenoms(prices: Record<string, CoinGeckoUSDPrice>): DenomPriceMap;
    convertBaseUnitToDollarValue(prices: DenomPriceMap, symbol: string, amount: string | number): string;
    convertDollarValueToBaseUnit(prices: DenomPriceMap, symbol: string, value: string | number): string;
    convertBaseUnitToDisplayUnit(symbol: string, amount: string | number): string;
    convertDisplayUnitToBaseUnit(symbol: string, amount: string | number): string;
}
