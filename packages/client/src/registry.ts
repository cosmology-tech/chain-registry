import {
  AssetList,
  Chain,
  ChainRegistry,
  IBCInfo
} from '@chain-registry/types';
import { getAssetLists } from '@chain-registry/utils';
import { basename } from 'bfs-path';
import fetch from 'cross-fetch';

export interface ChainRegistryFetcherOptions {
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
  fetcher: ChainRegistryFetcher;
}
export class ChainInfo {
  chain_name: string;
  fetcher: ChainRegistryFetcher;

  protected _asset_list: AssetList;
  protected _asset_lists: AssetList[];
  protected _chain: Chain;
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
  get nativeAssetLists() {
    return this._asset_list;
  }
  get chain() {
    return this._chain;
  }
  get assetLists() {
    return getAssetLists(this.chain_name, this._ibc_data, this._asset_lists);
  }
}

// QUESTION: should ChainRegistryFetcher just be ChainRegistry?
export class ChainRegistryFetcher implements ChainRegistry {
  protected _asset_lists: AssetList[] = [];
  protected _chains: Chain[] = [];
  protected _ibc_data: IBCInfo[] = [];

  urls: string[] = [];

  constructor(options: ChainRegistryFetcherOptions = {}) {
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

  get assetLists(): AssetList[] {
    return this._asset_lists;
  }

  getChainAssetList(chainName: string): AssetList {
    return this._asset_lists.find((list) => list.chain_name === chainName);
  }

  getGeneratedAssetLists(chainName: string): AssetList[] {
    return getAssetLists(chainName, this._ibc_data, this._asset_lists);
  }

  get chains() {
    return this._chains;
  }

  getChain(chainName: string) {
    return this._chains.find((chain) => chain.chain_name === chainName);
  }

  get ibcData(): IBCInfo[] {
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
      fetcher: this
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
  }

  async fetch(url): Promise<void> {
    const data = await fetchUrl(url);
    this.update(data);
  }
  async fetchUrls() {
    return Promise.all(this.urls.map((url) => this.fetch(url)));
  }
}

export interface ChainRegistryClientOptions
  extends ChainRegistryFetcherOptions {
  chainNames: string[];
  assetListNames?: string[];
  ibcNamePairs?: string[][];
  baseUrl?: string;
}

export class ChainRegistryClient extends ChainRegistryFetcher {
  protected _options: ChainRegistryClientOptions = {
    chainNames: [],
    baseUrl: 'https://raw.githubusercontent.com/cosmos/chain-registry/master'
  };

  constructor(options: ChainRegistryClientOptions) {
    const {
      chainNames,
      assetListNames,
      ibcNamePairs,
      baseUrl,
      ...restOptions
    } = options;

    super(restOptions);
    this._options = {
      ...this._options,
      chainNames: chainNames || this._options.chainNames,
      assetListNames: assetListNames || this._options.assetListNames,
      ibcNamePairs: ibcNamePairs || this._options.ibcNamePairs,
      baseUrl: baseUrl || this._options.baseUrl
    };

    this.generateUrls();
  }

  generateUrls() {
    const { chainNames, assetListNames, ibcNamePairs, baseUrl } = this._options;

    const chainUrls = chainNames.map((chain) => {
      return `${baseUrl}/${chain}/chain.json`;
    });

    const assetlistUrls = (assetListNames || chainNames).map((chain) => {
      return `${baseUrl}/${chain}/assetlist.json`;
    });

    let namePairs = ibcNamePairs;
    if (!namePairs) {
      namePairs = [];
      for (let i = 0; i < chainNames.length; i++) {
        for (let j = i + 1; j < chainNames.length; j++) {
          namePairs.push([chainNames[i], chainNames[j]]);
        }
      }
    }
    const ibcUrls = namePairs.map((namePair) => {
      const fileName =
        namePair[0].localeCompare(namePair[1]) <= 0
          ? `${namePair[0]}-${namePair[1]}.json`
          : `${namePair[1]}-${namePair[0]}.json`;
      return `${baseUrl}/_IBC/${fileName}`;
    });

    this.urls = [...chainUrls, ...assetlistUrls, ...ibcUrls];
  }
}
