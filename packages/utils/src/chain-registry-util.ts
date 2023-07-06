import { Asset, AssetDenomUnit, AssetList } from '@chain-registry/types';
import BigNumber from 'bignumber.js';

export type Exponent = AssetDenomUnit['exponent'];

export type CoinDenom = AssetDenomUnit['denom'];

export interface CoinGeckoUSD {
  usd: number;
}

export interface PriceHash {
  [key: CoinDenom]: number;
}

export interface ChainRegistryUtilOptions {
  assetLists?: AssetList[];
}

export class ChainRegistryUtil {
  _options?: ChainRegistryUtilOptions = {};
  _asset_lists: AssetList[] = [];

  constructor(options: ChainRegistryUtilOptions = {}) {
    this._options = options;
    this._asset_lists = options.assetLists || [];
  }

  private getAllAssets(chainName: string): Asset[] {
    const targetLists = this._asset_lists.filter(
      (list) => list.chain_name === chainName
    );

    const allAssets: Asset[] = [];
    targetLists.forEach((list) => {
      [].push.apply(allAssets, list.assets);
    });

    return allAssets;
  }

  getAssetByDenom(chainName: string, denom: CoinDenom): Asset {
    const allAssets = this.getAllAssets(chainName);
    const asset = allAssets.find((asset) => asset.base === denom);
    if (!asset) {
      throw new Error(`Asset not found: ${denom}`);
    }
    return asset;
  }

  getDenomByCoinGeckoId(chainName: string, coinGeckoId: string): CoinDenom {
    const allAssets = this.getAllAssets(chainName);
    return allAssets.find((asset) => asset.coingecko_id === coinGeckoId).base;
  }

  chainDenomToSymbol(chainName: string, denom: CoinDenom): string {
    const asset = this.getAssetByDenom(chainName, denom);
    const symbol = asset.symbol;
    if (!symbol) {
      return denom;
    }
    return symbol;
  }

  getSymbolByChainDenom(chainName: string, token: string): CoinDenom {
    const allAssets = this.getAllAssets(chainName);
    const asset = allAssets.find(({ symbol }) => symbol === token);
    const base = asset?.base;
    if (!base) {
      console.log(`cannot find base for token ${token}`);
      return null;
    }
    return base;
  }

  getExponentByDenom(chainName: string, denom: CoinDenom): Exponent {
    const asset = this.getAssetByDenom(chainName, denom);
    const unit = asset.denom_units.find(({ denom }) => denom === asset.display);
    return unit?.exponent || 0;
  }

  convertCoinGeckoPricesToDenomPriceMap(
    chainName: string,
    prices: Record<string, CoinGeckoUSD>
  ): PriceHash {
    return Object.keys(prices).reduce((res, geckoId) => {
      const denom = this.getDenomByCoinGeckoId(chainName, geckoId);
      res[denom] = prices[geckoId].usd;
      return res;
    }, {});
  }

  noDecimals(num: number | string): string {
    return new BigNumber(num).decimalPlaces(0, BigNumber.ROUND_DOWN).toString();
  }

  convertBaseUnitsToDollarValue(
    chainName: string,
    prices: PriceHash,
    symbol: string,
    amount: string | number
  ): string {
    const denom = this.getSymbolByChainDenom(chainName, symbol);
    return new BigNumber(amount)
      .shiftedBy(-this.getExponentByDenom(chainName, denom))
      .multipliedBy(prices[denom])
      .toString();
  }

  convertDollarValueToDenomUnits(
    chainName: string,
    prices: PriceHash,
    symbol: string,
    value: string | number
  ): string {
    const denom = this.getSymbolByChainDenom(chainName, symbol);
    return new BigNumber(value)
      .dividedBy(prices[denom])
      .shiftedBy(this.getExponentByDenom(chainName, denom))
      .toString();
  }

  convertBaseUnitsToDisplayUnits(
    chainName: string,
    symbol: string,
    amount: string | number
  ): string {
    const denom = this.getSymbolByChainDenom(chainName, symbol);
    return new BigNumber(amount)
      .shiftedBy(-this.getExponentByDenom(chainName, denom))
      .toString();
  }
}
