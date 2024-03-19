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

export interface ChainUtilsOptions {
  chainName: string;
  assetList?: AssetList;
  ibcAssetList?: AssetList;
}

export class ChainUtils {
  private _chainName: string;
  private _assets: AssetList[] = [];

  constructor(options: ChainUtilsOptions) {
    this._chainName = options.chainName;
    this._assets = [
      {
        assets: [
          ...(options.assetList?.assets || []),
          ...(options.ibcAssetList?.assets || [])
        ],
        chain_name: options.chainName
      }
    ];
  }

  getAssetByDenom(denom: CoinDenom): Asset {
    return getAssetByDenom(this._assets, denom, this._chainName);
  }

  getDenomByCoinGeckoId(coinGeckoId: string): CoinDenom {
    return getDenomByCoinGeckoId(this._assets, coinGeckoId, this._chainName);
  }

  getCoinGeckoIdByDenom(coinGeckoId: string): CoinDenom {
    return getCoinGeckoIdByDenom(this._assets, coinGeckoId, {
      chainName: this._chainName
    });
  }

  getSymbolByChainDenom(denom: CoinDenom): string {
    return getSymbolByChainDenom(this._assets, denom, this._chainName);
  }

  getChainDenomBySymbol(token: string): CoinDenom {
    return getChainDenomBySymbol(this._assets, token, this._chainName);
  }

  getExponentByDenom(denom: CoinDenom): Exponent {
    return getExponentByDenom(this._assets, denom, this._chainName);
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
      this._chainName
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
      this._chainName
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
      this._chainName
    );
  }
}
