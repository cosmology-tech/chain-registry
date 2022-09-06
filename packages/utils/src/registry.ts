import { AssetList, Chain, IBCInfo } from '@chain-registry/types';
import { basename } from 'bfs-path';
import fetch from 'cross-fetch';

import { getAssetLists } from './utils';

export interface ChainRegistryOptions {
  assetLists?: AssetList[];
  chains?: Chain[];
  ibcData?: IBCInfo[];
  urls?: string[];
}

const fetchUrl = (url: string) => {
  return fetch(url).then((res) => {
    if (res.status >= 400) {
      throw new Error('Bad response');
    }
    return res.json();
  });
};

export interface ChainInfoOptions {
  chain_name: string;
  registry: ChainRegistry;
}
export class ChainInfo {
  chain_name: string;
  registry: ChainRegistry;

  protected _asset_list: AssetList;
  protected _asset_lists: AssetList[];
  protected _chain: Chain;
  protected _ibc_data: IBCInfo[] = [];

  constructor(options: ChainInfoOptions) {
    this.chain_name = options.chain_name;
    this.registry = options.registry;

    this.refresh();
  }
  refresh() {
    this._asset_list = this.registry.getChainAssetList(this.chain_name);
    this._ibc_data = this.registry.getChainIbcData(this.chain_name);
    this._chain = this.registry.getChain(this.chain_name);

    const supportedChains = this._ibc_data.reduce((m, v) => {
      if (!m.includes(v.chain_1.chain_name)) m.push(v.chain_1.chain_name);
      if (!m.includes(v.chain_2.chain_name)) m.push(v.chain_2.chain_name);
      return m;
    }, []);

    this._asset_lists = this.registry
      .assetLists()
      .filter((list) => supportedChains.includes(list.chain_name));
  }
  nativeAssetLists() {
    return this._asset_list;
  }
  chain() {
    return this._chain;
  }
  assetLists() {
    return getAssetLists(this.chain_name, this._ibc_data, this._asset_lists);
  }
}
export class ChainRegistry {
  protected _asset_lists: AssetList[] = [];
  protected _chains: Chain[] = [];
  protected _ibc_data: IBCInfo[] = [];

  urls: string[] = [];

  constructor(options: ChainRegistryOptions = {}) {
    //
    if (options.assetLists) {
      this._asset_lists = options.assetLists;
    }
    if (options.chains) {
      this._chains = options.chains;
    }
    if (options.ibcData) {
      this._ibc_data = options.ibcData;
    }
    if (options.urls) {
      this.urls = options.urls;
    }
  }

  assetLists(): AssetList[] {
    return this._asset_lists;
  }

  getChainAssetList(chainName: string): AssetList {
    return this._asset_lists.find((list) => list.chain_name === chainName);
  }

  getGeneratedAssetLists(chainName: string): AssetList[] {
    return getAssetLists(chainName, this._ibc_data, this._asset_lists);
  }

  chains() {
    return this._chains;
  }

  getChain(chainName: string) {
    return this._chains.find((chain) => chain.chain_name === chainName);
  }

  ibcData(): IBCInfo[] {
    return this._ibc_data;
  }

  getChainIbcData(chainName: string) {
    return this._ibc_data.filter(
      (info) =>
        info.chain_1.chain_name === chainName ||
        info.chain_2.chain_name === chainName
    );
  }

  getChainInfo(chainName: string) {
    return new ChainInfo({
      chain_name: chainName,
      registry: this
    });
  }

  upsertChain(data: Chain) {
    const found = this._chains.find((chain) => {
      return (
        chain.chain_name === data.chain_name &&
        chain.network_type === data.network_type
      );
    });

    if (!found) {
      this._chains.push(data);
      return;
    }

    this._chains = this._chains.map((chain) => {
      if (
        chain.chain_name === data.chain_name &&
        chain.network_type === data.network_type
      ) {
        return data;
      } else {
        return chain;
      }
    });
  }

  updateAssetList(data: AssetList) {
    const found = this._asset_lists.find((list) => {
      return list.chain_name === data.chain_name;
    });

    if (!found) {
      this._asset_lists.push(data);
      return;
    }

    this._asset_lists = this._asset_lists.map((list) => {
      if (list.chain_name === data.chain_name) {
        return data;
      } else {
        return list;
      }
    });
  }

  upsertIbcData(data: IBCInfo) {
    const found = this._ibc_data.find((info) => {
      return (
        info.chain_1.chain_name === data.chain_1.chain_name &&
        info.chain_2.chain_name === data.chain_2.chain_name
      );
    });

    if (!found) {
      this._ibc_data.push(data);
      return;
    }

    this._ibc_data = this._ibc_data.map((info) => {
      if (
        info.chain_1.chain_name === data.chain_1.chain_name &&
        info.chain_2.chain_name === data.chain_2.chain_name
      ) {
        return data;
      } else {
        return info;
      }
    });
  }

  update(data: Chain | AssetList | IBCInfo) {
    if (!data.$schema) throw new Error('not a registered JSON schema type');
    const type = basename(data.$schema, '.schema.json');

    switch (type) {
      case 'chain':
        this.upsertChain(data);
        break;
      case 'assetlist':
        this.updateAssetList(data);
        break;
      case 'ibc_data':
        this.upsertIbcData(data);
        break;
      default:
        throw new Error('unknown schema type');
    }
  }

  async fetch(url): Promise<void> {
    const data = await fetchUrl(url);
    this.update(data);
  }
  async fetchUrls() {
    return Promise.all(this.urls.map((url) => this.fetch(url)));
  }
}
