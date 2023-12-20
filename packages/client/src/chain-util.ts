import { Asset, AssetList } from '@chain-registry/types';
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
  getCoinGeckoIdByDenom,
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
  
  private _assets: AssetList[] = [];

  constructor(options: ChainRegistryChainUtilOptions) {
    this.chainName = options.chainName;
    this.chainInfo = options.chainInfo;
    this._assets = [
      {
        assets: [
          ...this.chainInfo.nativeAssetList.assets,
          ...this.chainInfo.assetLists.flatMap(({ assets }) => assets)
        ],
        chain_name: this.chainName
      }
    ];
  }

  getAssetByDenom(denom: CoinDenom): Asset {
    return getAssetByDenom(this._assets, denom, this.chainName);
  }

  getDenomByCoinGeckoId(coinGeckoId: string): CoinDenom {
    return getDenomByCoinGeckoId(this._assets, coinGeckoId, this.chainName);
  }

  getCoinGeckoIdByDenom(coinGeckoId: string): CoinDenom {
    return getCoinGeckoIdByDenom(this._assets, coinGeckoId, {
      chainName: this.chainName
    });
  }

  getSymbolByChainDenom(denom: CoinDenom): string {
    return getSymbolByChainDenom(this._assets, denom, this.chainName);
  }

  getChainDenomBySymbol(token: string): CoinDenom {
    return getChainDenomBySymbol(this._assets, token, this.chainName);
  }

  getExponentByDenom(denom: CoinDenom): Exponent {
    return getExponentByDenom(this._assets, denom, this.chainName);
  }

  convertCoinGeckoPricesToDenomPriceMap(
    prices: Record<string, CoinGeckoUSD>
  ): PriceHash {
    return convertCoinGeckoPricesToDenomPriceMap(this._assets, prices);
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
      this._assets,
      prices,
      symbol,
      amount,
      this.chainName
    );
  }

  convertDollarValueToDenomUnits(
    prices: PriceHash,
    symbol: string,
    value: string | number
  ): string {
    return convertDollarValueToDenomUnits(
      this._assets,
      prices,
      symbol,
      value,
      this.chainName
    );
  }

  convertBaseUnitsToDisplayUnits(
    symbol: string,
    amount: string | number
  ): string {
    return convertBaseUnitsToDisplayUnits(
      this._assets,
      symbol,
      amount,
      this.chainName
    );
  }
}
