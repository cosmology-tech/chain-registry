import { AssetList, Chain, IBCInfo } from '@chain-registry/types';

import { ChainRegistryFetcher } from './fetcher';

export interface ChainInfoOptions {
  chain_name: string;
  fetcher: ChainRegistryFetcher;
}

export declare class ChainInfo {
  chain_name: string;
  fetcher: ChainRegistryFetcher;
  protected _chain: Chain;
  protected _asset_list: AssetList;
  protected _asset_lists: AssetList[];
  protected _ibc_data: IBCInfo[];
  constructor(options: ChainInfoOptions);
  refresh(): void;
  get chain(): Chain;
  get nativeAssetLists(): AssetList;
  get assetLists(): AssetList[];
}
