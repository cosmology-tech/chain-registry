import { Asset, AssetList } from '@chain-registry/v2-types';
import type {
  Denom,
  Exponent,
  DenomPriceMap,
  CoinGeckoUSDPrice
} from '@chain-registry/utils';
import {
  getAssetByDenom,
  getAssetBySymbol,
  getDenomByCoinGeckoId,
  getCoinGeckoIdByDenom,
  getSymbolByDenom,
  getDenomBySymbol,
  getExponentByDenom,
  getExponentBySymbol,
  getAssetLogoByDenom,
  getAssetNameByDenom,
  getChainNameByDenom,
  mapCoinGeckoPricesToDenoms,
  convertBaseUnitToDollarValue,
  convertDollarValueToBaseUnit,
  convertBaseUnitToDisplayUnit,
  convertDisplayUnitToBaseUnit
} from '@chain-registry/utils';

import { ChainInfo } from './chain-info';

export interface ChainRegistryChainUtilOptions {
  chainName: string;
  chainInfo: ChainInfo;
}

export class ChainRegistryChainUtil {
  private _assets: AssetList[] = [];
  private _chainName: string;

  constructor(options: ChainRegistryChainUtilOptions) {
    const { chainName, chainInfo } = options;
    this._chainName = options.chainName;
    this._assets = [
      {
        assets: [
          ...chainInfo.nativeAssetList.assets,
          ...chainInfo.assetLists.flatMap(({ assets }) => assets)
        ],
        chainName: chainName
      }
    ];
  }

  getAssetByDenom(denom: Denom): Asset | undefined {
    return getAssetByDenom(this._assets, denom, this._chainName);
  }

  getAssetBySymbol(symbol: string): Asset | undefined {
    return getAssetBySymbol(this._assets, symbol, this._chainName);
  }

  getDenomByCoinGeckoId(coinGeckoId: string): Denom | undefined {
    return getDenomByCoinGeckoId(this._assets, coinGeckoId, this._chainName);
  }

  getCoinGeckoIdByDenom(coinGeckoId: string): Denom | undefined {
    return getCoinGeckoIdByDenom(this._assets, coinGeckoId, {
      chainName: this._chainName
    });
  }

  getSymbolByDenom(denom: Denom): string | undefined {
    return getSymbolByDenom(this._assets, denom, this._chainName);
  }

  getDenomBySymbol(symbol: string): Denom | undefined {
    return getDenomBySymbol(this._assets, symbol, this._chainName);
  }

  getExponentByDenom(denom: Denom): Exponent | undefined {
    return getExponentByDenom(this._assets, denom, this._chainName);
  }

  getExponentBySymbol(symbol: string): Exponent | undefined {
    return getExponentBySymbol(this._assets, symbol, this._chainName);
  }

  getAssetLogoByDenom(denom: Denom): string | undefined {
    return getAssetLogoByDenom(this._assets, denom, this._chainName);
  }

  getAssetNameByDenom(denom: Denom): string | undefined {
    return getAssetNameByDenom(this._assets, denom, this._chainName);
  }

  getChainNameByDenom(denom: Denom): string | undefined {
    return getChainNameByDenom(this._assets, denom);
  }

  mapCoinGeckoPricesToDenoms(
    prices: Record<string, CoinGeckoUSDPrice>
  ): DenomPriceMap {
    return mapCoinGeckoPricesToDenoms(this._assets, prices);
  }

  convertBaseUnitToDollarValue(
    prices: DenomPriceMap,
    symbol: string,
    amount: string | number
  ): string {
    return convertBaseUnitToDollarValue(
      this._assets,
      prices,
      symbol,
      amount,
      this._chainName
    );
  }

  convertDollarValueToBaseUnit(
    prices: DenomPriceMap,
    symbol: string,
    value: string | number
  ): string {
    return convertDollarValueToBaseUnit(
      this._assets,
      prices,
      symbol,
      value,
      this._chainName
    );
  }

  convertBaseUnitToDisplayUnit(
    symbol: string,
    amount: string | number
  ): string {
    return convertBaseUnitToDisplayUnit(
      this._assets,
      symbol,
      amount,
      this._chainName
    );
  }

  convertDisplayUnitToBaseUnit(
    symbol: string,
    amount: string | number
  ): string {
    return convertDisplayUnitToBaseUnit(
      this._assets,
      symbol,
      amount,
      this._chainName
    );
  }
}
