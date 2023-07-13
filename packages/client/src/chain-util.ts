import { Asset } from '@chain-registry/types';
import type {
  CoinDenom,
  CoinGeckoUSD,
  Exponent,
  PriceHash
} from '@chain-registry/utils';
import {
  convertBaseUnitsToDisplayUnits,
  convertBaseUnitsToDollarValue,
  convertCoinGeckoPricesToDenomPriceMap,
  convertDollarValueToDenomUnits,
  getAssetByDenom,
  getChainDenomBySymbol,
  getDenomByCoinGeckoId,
  getExponentByDenom,
  getSymbolByChainDenom,
  noDecimals
} from '@chain-registry/utils';

import { ChainInfo } from './chain-info';

export interface ChainRegistryChainUtilOptions {
  chainName: string;
  chainInfo: ChainInfo;
}

export class ChainRegistryChainUtil {
  chainName: string;
  chainInfo: ChainInfo;
  allAsset: Asset[];

  constructor(options: ChainRegistryChainUtilOptions) {
    this.chainName = options.chainName;
    this.chainInfo = options.chainInfo;
    this.allAsset = this.chainInfo.assetLists.reduce(
      (m, it) => {
        [].push.apply(m, it.assets);
        return m;
      },
      [...this.chainInfo.nativeAssetLists.assets]
    );
  }

  getAssetByDenom(denom: CoinDenom): Asset {
    return getAssetByDenom(this.allAsset, denom);
  }

  getDenomByCoinGeckoId(coinGeckoId: string): CoinDenom {
    return getDenomByCoinGeckoId(this.allAsset, coinGeckoId);
  }

  getSymbolByChainDenom(denom: CoinDenom): string {
    return getSymbolByChainDenom(this.allAsset, denom);
  }

  getChainDenomBySymbol(token: string): CoinDenom {
    return getChainDenomBySymbol(this.allAsset, token);
  }

  getExponentByDenom(denom: CoinDenom): Exponent {
    return getExponentByDenom(this.allAsset, denom);
  }

  convertCoinGeckoPricesToDenomPriceMap(
    prices: Record<string, CoinGeckoUSD>
  ): PriceHash {
    return convertCoinGeckoPricesToDenomPriceMap(this.allAsset, prices);
  }

  noDecimals(num: number | string): string {
    return noDecimals(num);
  }

  convertBaseUnitsToDollarValue(
    prices: PriceHash,
    symbol: string,
    amount: string | number
  ): string {
    return convertBaseUnitsToDollarValue(this.allAsset, prices, symbol, amount);
  }

  convertDollarValueToDenomUnits(
    prices: PriceHash,
    symbol: string,
    value: string | number
  ): string {
    return convertDollarValueToDenomUnits(this.allAsset, prices, symbol, value);
  }

  convertBaseUnitsToDisplayUnits(
    symbol: string,
    amount: string | number
  ): string {
    return convertBaseUnitsToDisplayUnits(this.allAsset, symbol, amount);
  }
}
