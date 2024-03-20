import { AssetList, Chain, IBCInfo } from '@chain-registry/types';
import { ChainRegistryFetcher } from './fetcher';
export interface ChainInfoOptions {
    chainName: string;
    fetcher: ChainRegistryFetcher;
}
export declare class ChainInfo {
    chainName: string;
    fetcher: ChainRegistryFetcher;
    protected _chain: Chain;
    protected _assetList: AssetList;
    protected _assetLists: AssetList[];
    protected _ibcData: IBCInfo[];
    constructor(options: ChainInfoOptions);
    refresh(): void;
    get chain(): Chain;
    get nativeAssetList(): AssetList;
    get assetLists(): any[];
}
