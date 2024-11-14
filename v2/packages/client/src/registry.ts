import { ChainRegistryChainUtil } from './chain-util';
import { ChainRegistryFetcher, ChainRegistryFetcherOptions } from './fetcher';

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
    baseUrl: 'https://raw.githubusercontent.com/chain-registry/chain-registry/main/registries/full'
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

    this.urls = [
      ...new Set([
        ...chainUrls,
        ...assetlistUrls,
        ...ibcUrls,
        ...(this.urls || [])
      ])
    ];
  }

  getChainUtil(chainName: string) {
    const chainInfo = this.getChainInfo(chainName);
    return new ChainRegistryChainUtil({
      chainName: chainName,
      chainInfo: chainInfo
    });
  }
}
