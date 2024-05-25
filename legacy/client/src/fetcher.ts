import {
  AssetList,
  Chain,
  ChainRegistry,
  IBCInfo
} from '@chain-registry/types';
import { getAssetLists } from '@chain-registry/utils';
import { basename } from 'bfs-path';
import fetch from 'cross-fetch';

import { ChainInfo } from './chain-info';

const fetchUrl = (url: string) => {
  return fetch(url).then((res) => {
    if (res.status >= 400) {
      throw new Error('Bad response');
    }
    return res.json();
  });
};

export interface ChainRegistryFetcherOptions {
  assetLists?: AssetList[];
  chains?: Chain[];
  ibcData?: IBCInfo[];
  urls?: string[];
}

// QUESTION: should ChainRegistryFetcher just be ChainRegistry?
export class ChainRegistryFetcher implements ChainRegistry {
  urls: string[] = [];

  protected _assetLists: AssetList[] = [];
  protected _chains: Chain[] = [];
  protected _ibcData: IBCInfo[] = [];

  private chainInfoList: ChainInfo[] = [];

  constructor(options: ChainRegistryFetcherOptions = {}) {
    //
    if (options.chains) {
      this._chains = options.chains;
    }
    if (options.assetLists) {
      this._assetLists = options.assetLists;
    }
    if (options.ibcData) {
      this._ibcData = options.ibcData;
    }
    if (options.urls) {
      this.urls = options.urls;
    }
  }

  get chains() {
    return this._chains;
  }
  get assetLists(): AssetList[] {
    return this._assetLists;
  }
  get ibcData(): IBCInfo[] {
    return this._ibcData;
  }

  getChain(chainName: string) {
    return this._chains.find((chain) => chain.chain_name === chainName);
  }

  getChainAssetList(chainName: string): AssetList {
    return this._assetLists.find((list) => list.chain_name === chainName);
  }

  getGeneratedAssetLists(chainName: string): AssetList[] {
    return getAssetLists(chainName, this._ibcData, this._assetLists);
  }

  getChainIbcData(chainName: string) {
    return this._ibcData.filter(
      (info) =>
        info.chain_1.chain_name === chainName ||
        info.chain_2.chain_name === chainName
    );
  }

  getChainInfo(chainName: string) {
    let chainInfo = this.chainInfoList.find((it) => it.chainName === chainName);
    if (!chainInfo) {
      chainInfo = new ChainInfo({
        chainName: chainName,
        fetcher: this
      });
      this.chainInfoList.push(chainInfo);
    }
    return chainInfo;
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
    const found = this._assetLists.find((list) => {
      return list.chain_name === data.chain_name;
    });

    if (!found) {
      this._assetLists.push(data);
      return;
    }

    this._assetLists = this._assetLists.map((list) => {
      if (list.chain_name === data.chain_name) {
        return data;
      } else {
        return list;
      }
    });
  }

  upsertIbcData(data: IBCInfo) {
    const found = this._ibcData.find((info) => {
      return (
        info.chain_1.chain_name === data.chain_1.chain_name &&
        info.chain_2.chain_name === data.chain_2.chain_name
      );
    });

    if (!found) {
      this._ibcData.push(data);
      return;
    }

    this._ibcData = this._ibcData.map((info) => {
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
      this.upsertChain(data as Chain);
      break;
    case 'assetlist':
      this.updateAssetList(data as AssetList);
      break;
    case 'ibc_data':
      this.upsertIbcData(data as IBCInfo);
      break;
    default:
      throw new Error('unknown schema type');
    }

    this.chainInfoList.forEach((chainInfo) => {
      chainInfo.refresh();
    });
  }

  async fetch(url: string): Promise<void> {
    const data = await fetchUrl(url);
    this.update(data);
  }

  async fetchUrls() {
    return Promise.all(this.urls.map((url) => this.fetch(url)));
  }
}
