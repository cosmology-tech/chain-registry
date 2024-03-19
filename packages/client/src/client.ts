import fetch from 'cross-fetch';
import { basename } from 'bfs-path';
import { getAssetLists } from '@chain-registry/utils';
import { AssetList, Chain, IBCInfo } from '@chain-registry/types';

import { ChainUtils } from './chain-utils';

const DEFAULT_BASE_URL =
  'https://raw.githubusercontent.com/cosmos/chain-registry/master';

export interface FetchOptions {
  urls?: string[];
  chainNames?: string[];
}

export interface ChainRegistryClientOptions extends FetchOptions {
  baseUrl?: string;
}

export class ChainRegistryClient {
  private _allUrls: string[] = [];
  private _baseUrl = DEFAULT_BASE_URL;
  private _chainNames: string[] = [];
  private _notFoundUrls: string[] = [];

  private _chains: Chain[] = [];
  private _assetLists: AssetList[] = [];
  private _ibcInfo: IBCInfo[] = [];

  constructor(options: ChainRegistryClientOptions = {}) {
    const { urls, chainNames, baseUrl } = options;

    this._baseUrl = baseUrl ?? this._baseUrl;
    this._allUrls = this.generateUrls({ urls, chainNames });
  }

  get urls(): string[] {
    return this._allUrls;
  }

  get chains(): Chain[] {
    return this._chains;
  }

  get assetLists(): AssetList[] {
    return this._assetLists;
  }

  get ibcInfo(): IBCInfo[] {
    return this._ibcInfo;
  }

  public getChain(chainName: string): Chain | undefined {
    return this._chains.find(({ chain_name }) => chain_name === chainName);
  }

  public getChainAssetList(chainName: string): AssetList | undefined {
    return this._assetLists.find(({ chain_name }) => chain_name === chainName);
  }

  public getChainIbcInfo(chainName: string): IBCInfo[] {
    return this._ibcInfo.filter(
      (info) =>
        info.chain_1.chain_name === chainName ||
        info.chain_2.chain_name === chainName
    );
  }

  public getChainIbcAssetList(chainName: string): AssetList {
    return getAssetLists(chainName, this._ibcInfo, this._assetLists)[0];
  }

  public getChainFullData(chainName: string) {
    return {
      chain: this.getChain(chainName),
      assetList: this.getChainAssetList(chainName),
      ibcInfo: this.getChainIbcInfo(chainName),
      ibcAssetList: this.getChainIbcAssetList(chainName)
    };
  }

  public getChainUtils(chainName: string) {
    return new ChainUtils({
      chainName,
      assetList: this.getChainAssetList(chainName),
      ibcAssetList: this.getChainIbcAssetList(chainName)
    });
  }

  public async fetch(options: FetchOptions = {}) {
    let urls: string[] = [];

    if (Object.keys(options).length === 0) {
      urls = this._allUrls;
    } else {
      const newUrls = this.generateUrls(options);
      urls = newUrls;
      this._allUrls = [...new Set([...this._allUrls, ...newUrls])];
    }

    const responses = await Promise.all(urls.map((url) => this.fetchUrl(url)));

    responses.filter(Boolean).forEach((data) => this.save(data));
  }

  private formatChainUrl(chainName: string) {
    return `${this._baseUrl}/${chainName}/chain.json`;
  }

  private formatAssetListUrl(chainName: string) {
    return `${this._baseUrl}/${chainName}/assetlist.json`;
  }

  private formatIbcUrl(chain1: string, chain2: string) {
    return `${this._baseUrl}/_IBC/${chain1}-${chain2}.json`;
  }

  private generateNamePairs(chainNames: string[]) {
    const pairs: string[][] = [];
    for (let i = 0; i < chainNames.length; i++) {
      for (let j = i + 1; j < chainNames.length; j++) {
        pairs.push([chainNames[i], chainNames[j]].sort());
      }
    }
    return pairs;
  }

  private generateUrls({ urls = [], chainNames = [] }: FetchOptions) {
    const chainUrls = chainNames.map((chain) => {
      return this.formatChainUrl(chain);
    });

    const assetListUrls = chainNames.map((chain) => {
      return this.formatAssetListUrl(chain);
    });

    this._chainNames = [...new Set([...this._chainNames, ...chainNames])];
    const allPairs = this.generateNamePairs(this._chainNames);
    const newPairs = allPairs.filter((pair) => {
      return !this._ibcInfo.some((info) => {
        return (
          info.chain_1.chain_name === pair[0] &&
          info.chain_2.chain_name === pair[1]
        );
      });
    });

    const ibcUrls = newPairs.map((pair) => {
      return this.formatIbcUrl(pair[0], pair[1]);
    });

    const allUrls = [
      ...new Set([...chainUrls, ...assetListUrls, ...ibcUrls, ...urls])
    ];

    return allUrls.filter((url) => !this._notFoundUrls.includes(url));
  }

  private async fetchUrl(url: string) {
    return fetch(url).then((res) => {
      if (res.status === 404) {
        console.error(`Failed to fetch ${url} with status 404`);
        this._notFoundUrls.push(url);
        return null;
      }
      if (res.status >= 400) {
        throw new Error(`Failed to fetch ${url} with status ${res.status}`);
      }
      return res.json();
    });
  }

  private upsert(array: any[], element: any, filterFn: (ele: any) => boolean) {
    const res = array.find(filterFn);

    if (!res) {
      return [...array, element];
    }

    return array.map((item) => {
      if (filterFn(item)) {
        return element;
      }
      return item;
    });
  }

  private save(data: Chain | AssetList | IBCInfo) {
    if (!data.$schema) {
      throw new Error('Invalid data: Missing $schema property');
    }

    const type = basename(data.$schema, '.schema.json');

    switch (type) {
      case 'chain':
        this._chains = this.upsert(this._chains, data, (chain: Chain) => {
          return (
            chain.chain_name === (data as Chain).chain_name &&
            chain.network_type === (data as Chain).network_type
          );
        });
        break;

      case 'assetlist':
        this._assetLists = this.upsert(
          this._assetLists,
          data,
          (assetList: AssetList) => {
            return assetList.chain_name === (data as AssetList).chain_name;
          }
        );
        break;

      case 'ibc_data':
        this._ibcInfo = this.upsert(this._ibcInfo, data, (info: IBCInfo) => {
          return (
            info.chain_1.chain_name === (data as IBCInfo).chain_1.chain_name &&
            info.chain_2.chain_name === (data as IBCInfo).chain_2.chain_name
          );
        });
        break;

      default:
        throw new Error(`Unsupported json schema: ${data.$schema}`);
    }
  }
}
