import { Asset } from '@chain-registry/types';
import type { CoinDenom, CoinGeckoUSD, Exponent, PriceHash } from '@chain-registry/utils';
import { ChainInfo } from './chain-info';
export interface ChainRegistryChainUtilOptions {
    chainName: string;
    chainInfo: ChainInfo;
}
export declare class ChainRegistryChainUtil {
    chainName: string;
    chainInfo: ChainInfo;
    private _assets;
    constructor(options: ChainRegistryChainUtilOptions);
    getAssetByDenom(denom: CoinDenom): Asset;
    getDenomByCoinGeckoId(coinGeckoId: string): CoinDenom;
    getCoinGeckoIdByDenom(coinGeckoId: string): CoinDenom;
    getSymbolByChainDenom(denom: CoinDenom): string;
    getChainDenomBySymbol(token: string): CoinDenom;
    getExponentByDenom(denom: CoinDenom): Exponent;
    convertCoinGeckoPricesToDenomPriceMap(prices: Record<string, CoinGeckoUSD>): PriceHash;
    noDecimals(num: number | string): string;
    convertBaseUnitsToDollarValue(prices: PriceHash, symbol: string, amount: string | number): string;
    convertDollarValueToDenomUnits(prices: PriceHash, symbol: string, value: string | number): string;
    convertBaseUnitsToDisplayUnits(symbol: string, amount: string | number): string;
}
