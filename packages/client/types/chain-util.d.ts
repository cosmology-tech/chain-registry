import { Asset } from '@chain-registry/types';
import type { Denom, Exponent, DenomPriceMap, CoinGeckoUSDPrice } from '@chain-registry/utils';
import { ChainInfo } from './chain-info';
export interface ChainRegistryChainUtilOptions {
    chainName: string;
    chainInfo: ChainInfo;
}
export declare class ChainRegistryChainUtil {
    private _assets;
    private _chainName;
    constructor(options: ChainRegistryChainUtilOptions);
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
