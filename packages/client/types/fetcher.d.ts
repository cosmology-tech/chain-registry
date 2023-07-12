import { AssetList, Chain, ChainRegistry, IBCInfo } from '@chain-registry/types';
import { ChainInfo } from './chain-info';
export interface ChainRegistryFetcherOptions {
    assetLists?: AssetList[];
    chains?: Chain[];
    ibcData?: IBCInfo[];
    urls?: string[];
}
export declare class ChainRegistryFetcher implements ChainRegistry {
    urls: string[];
    protected _asset_lists: AssetList[];
    protected _chains: Chain[];
    protected _ibc_data: IBCInfo[];
    private chainInfoList;
    constructor(options?: ChainRegistryFetcherOptions);
    get chains(): Chain[];
    get assetLists(): AssetList[];
    get ibcData(): IBCInfo[];
    getChain(chainName: string): Chain;
    getChainAssetList(chainName: string): AssetList;
    getGeneratedAssetLists(chainName: string): AssetList[];
    getChainIbcData(chainName: string): IBCInfo[];
    getChainInfo(chainName: string): ChainInfo;
    upsertChain(data: Chain): void;
    updateAssetList(data: AssetList): void;
    upsertIbcData(data: IBCInfo): void;
    update(data: Chain | AssetList | IBCInfo): void;
    fetch(url: any): Promise<void>;
    fetchUrls(): Promise<void[]>;
}
