import { AssetList, Chain, IBCInfo } from '@chain-registry/types';
import { getAssetLists } from '@chain-registry/utils';

import { ChainRegistryFetcher } from './fetcher';

export interface ChainInfoOptions {
  chainName: string;
  fetcher: ChainRegistryFetcher;
}

export class ChainInfo {
  chainName: string;
  fetcher: ChainRegistryFetcher;

  protected _chain: Chain;
  protected _assetList: AssetList;
  protected _assetLists: AssetList[];
  protected _ibcData: IBCInfo[] = [];

  constructor(options: ChainInfoOptions) {
    this.chainName = options.chainName;
    this.fetcher = options.fetcher;

    this.refresh();
  }

  refresh() {
    this._assetList = this.fetcher.getChainAssetList(this.chainName);
    this._ibcData = this.fetcher.getChainIbcData(this.chainName);
    this._chain = this.fetcher.getChain(this.chainName);

    const supportedChains = this._ibcData.reduce((m, v) => {
      if (!m.includes(v.chain_1.chain_name)) m.push(v.chain_1.chain_name);
      if (!m.includes(v.chain_2.chain_name)) m.push(v.chain_2.chain_name);
      return m;
    }, []);

    this._assetLists = this.fetcher.assetLists.filter((list) =>
      supportedChains.includes(list.chain_name)
    );
  }

  get chain() {
    return this._chain;
  }
  get nativeAssetLists() {
    return this._assetList;
  }
  get assetLists() {
    return getAssetLists(this.chainName, this._ibcData, this._assetLists);
  }
}
