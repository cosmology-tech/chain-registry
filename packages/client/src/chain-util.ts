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
  chain_name: string;
  chain_info: ChainInfo;
}

export class ChainRegistryChainUtil {
  chain_name: string;
  chain_info: ChainInfo;
  _all_Asset: Asset[];

  constructor(options: ChainRegistryChainUtilOptions) {
    this.chain_name = options.chain_name;
    this.chain_info = options.chain_info;
    this._all_Asset = this.chain_info.assetLists.reduce(
      (m, it) => {
        [].push.apply(m, it.assets);
        return m;
      },
      [...this.chain_info.nativeAssetLists.assets]
    );
  }

  getAssetByDenom(denom: CoinDenom): Asset {
    return getAssetByDenom(this._all_Asset, denom);
  }

  getDenomByCoinGeckoId(coinGeckoId: string): CoinDenom {
    return getDenomByCoinGeckoId(this._all_Asset, coinGeckoId);
  }

  getSymbolByChainDenom(denom: CoinDenom): string {
    return getSymbolByChainDenom(this._all_Asset, denom);
  }

  getChainDenomBySymbol(token: string): CoinDenom {
    return getChainDenomBySymbol(this._all_Asset, token);
  }

  getExponentByDenom(denom: CoinDenom): Exponent {
    return getExponentByDenom(this._all_Asset, denom);
  }

  convertCoinGeckoPricesToDenomPriceMap(
    prices: Record<string, CoinGeckoUSD>
  ): PriceHash {
    return convertCoinGeckoPricesToDenomPriceMap(this._all_Asset, prices);
  }

  noDecimals(num: number | string): string {
    return noDecimals(num);
  }

  convertBaseUnitsToDollarValue(
    prices: PriceHash,
    symbol: string,
    amount: string | number
  ): string {
    return convertBaseUnitsToDollarValue(
      this._all_Asset,
      prices,
      symbol,
      amount
    );
  }

  convertDollarValueToDenomUnits(
    prices: PriceHash,
    symbol: string,
    value: string | number
  ): string {
    return convertDollarValueToDenomUnits(
      this._all_Asset,
      prices,
      symbol,
      value
    );
  }

  convertBaseUnitsToDisplayUnits(
    symbol: string,
    amount: string | number
  ): string {
    return convertBaseUnitsToDisplayUnits(this._all_Asset, symbol, amount);
  }
}
