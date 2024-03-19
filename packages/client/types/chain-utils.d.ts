import { Asset, AssetList } from '@chain-registry/types';
import type { CoinDenom, CoinGeckoUSD, Exponent, PriceHash } from '@chain-registry/utils';
export interface ChainUtilsOptions {
    chainName: string;
    assetList?: AssetList;
    ibcAssetList?: AssetList;
}
export declare class ChainUtils {
    private _chainName;
    private _assets;
    constructor(options: ChainUtilsOptions);
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
