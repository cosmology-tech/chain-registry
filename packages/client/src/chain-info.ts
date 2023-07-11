import { AssetList, Chain, IBCInfo } from '@chain-registry/types';
import { getAssetLists } from '@chain-registry/utils';

import { ChainRegistryFetcher } from './fetcher';

export interface ChainInfoOptions {
  chain_name: string;
  fetcher: ChainRegistryFetcher;
}

export class ChainInfo {
  chain_name: string;
  fetcher: ChainRegistryFetcher;

  protected _chain: Chain;
  protected _asset_list: AssetList;
  protected _asset_lists: AssetList[];
  protected _ibc_data: IBCInfo[] = [];

  constructor(options: ChainInfoOptions) {
    this.chain_name = options.chain_name;
    this.fetcher = options.fetcher;

    this.refresh();
  }

  refresh() {
    this._asset_list = this.fetcher.getChainAssetList(this.chain_name);
    this._ibc_data = this.fetcher.getChainIbcData(this.chain_name);
    this._chain = this.fetcher.getChain(this.chain_name);

    const supportedChains = this._ibc_data.reduce((m, v) => {
      if (!m.includes(v.chain_1.chain_name)) m.push(v.chain_1.chain_name);
      if (!m.includes(v.chain_2.chain_name)) m.push(v.chain_2.chain_name);
      return m;
    }, []);

    this._asset_lists = this.fetcher.assetLists.filter((list) =>
      supportedChains.includes(list.chain_name)
    );
  }

  get chain() {
    return this._chain;
  }
  get nativeAssetLists() {
    return this._asset_list;
  }
  get assetLists() {
    return getAssetLists(this.chain_name, this._ibc_data, this._asset_lists);
  }
}
