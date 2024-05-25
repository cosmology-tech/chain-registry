import { AssetList as IAssetList, Chain as IChain, IBCData as IIBCData} from '@chain-registry/interfaces';
import {
  AssetList,
  Chain,
  IBCData
} from '@chain-registry/v2-types';
import { getAssetLists } from '@chain-registry/v2-utils';
import { basename } from 'bfs-path';
import fetch from 'cross-fetch';

import { ChainInfo } from './chain-info';

const keysToCamel = (o: any): any => {
  if (o === Object(o) && !Array.isArray(o) && typeof o !== 'function') {
    const n: {[k: string]: any} = {};
    Object.keys(o).forEach((k) => {
      n[k.replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')] = keysToCamel(o[k]);
    });
    return n;
  } else if (Array.isArray(o)) {
    return o.map((i) => keysToCamel(i));
  }
  return o;
};

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
  ibcData?: IBCData[];
  urls?: string[];
}

// QUESTION: should ChainRegistryFetcher just be ChainRegistry?
export class ChainRegistryFetcher {
  urls: string[] = [];

  protected _assetLists: AssetList[] = [];
  protected _chains: Chain[] = [];
  protected _ibcData: IBCData[] = [];

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
  get ibcData(): IBCData[] {
    return this._ibcData;
  }

  getChain(chainName: string) {
    return this._chains.find((chain) => chain.chainName === chainName);
  }

  getChainAssetList(chainName: string): AssetList {
    return this._assetLists.find((list) => list.chainName === chainName);
  }

  getGeneratedAssetLists(chainName: string): AssetList[] {
    return getAssetLists(chainName, this._ibcData, this._assetLists);
  }

  getChainIbcData(chainName: string) {
    return this._ibcData.filter(
      (info) =>
        info.chain1.chainName === chainName ||
        info.chain2.chainName === chainName
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

  upsertChain(data: IChain) {
    const found = this._chains.find((chain) => {
      return (
        chain.chainName === data.chain_name &&
        chain.networkType === data.network_type
      );
    });

    const convertedData: Chain = keysToCamel(data);

    if (!found) {
      this._chains.push(convertedData);
      return;
    }
    
    this._chains = this._chains.map((chain) => {
      if (
        chain.chainName === data.chain_name &&
        chain.networkType === data.network_type
      ) {
        return convertedData;
      } else {
        return chain;
      }
    });
  }

  updateAssetList(data: IAssetList) {
    const found = this._assetLists.find((list) => {
      return list.chainName === data.chain_name;
    });

    const convertedData: AssetList = keysToCamel(data);

    if (!found) {
      this._assetLists.push(convertedData);
      return;
    }

    this._assetLists = this._assetLists.map((list) => {
      if (list.chainName === data.chain_name) {
        return convertedData;
      } else {
        return list;
      }
    });
  }

  upsertIbcData(data: IIBCData) {
    const found = this._ibcData.find((info) => {
      return (
        info.chain1.chainName === data.chain_1.chain_name &&
        info.chain2.chainName === data.chain_2.chain_name
      );
    });

    const convertedData: IBCData = keysToCamel(data);

    if (!found) {
      this._ibcData.push(convertedData);
      return;
    }

    this._ibcData = this._ibcData.map((info) => {
      if (
        info.chain1.chainName === data.chain_1.chain_name &&
        info.chain2.chainName === data.chain_2.chain_name
      ) {
        return convertedData;
      } else {
        return info;
      }
    });
  }

  update(data: IChain | IAssetList | IIBCData) {
    if (!data.$schema) throw new Error('not a registered JSON schema type');
    const type = basename(data.$schema, '.schema.json');
    switch (type) {
    case 'chain':
      this.upsertChain(data as IChain);
      break;
    case 'assetlist':
      this.updateAssetList(data as IAssetList);
      break;
    case 'ibc_data':
      this.upsertIbcData(data as IIBCData);
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
