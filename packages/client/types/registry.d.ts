import { AssetList, Chain, ChainRegistry, IBCInfo } from '@chain-registry/types';
export interface ChainRegistryFetcherOptions {
    assetLists?: AssetList[];
    chains?: Chain[];
    ibcData?: IBCInfo[];
    urls?: string[];
}
export interface ChainInfoOptions {
    chain_name: string;
    fetcher: ChainRegistryFetcher;
}
export declare class ChainInfo {
    chain_name: string;
    fetcher: ChainRegistryFetcher;
    protected _asset_list: AssetList;
    protected _asset_lists: AssetList[];
    protected _chain: Chain;
    protected _ibc_data: IBCInfo[];
    constructor(options: ChainInfoOptions);
    refresh(): void;
    get nativeAssetLists(): AssetList;
    get chain(): Chain;
    get assetLists(): any[];
}
export declare class ChainRegistryFetcher implements ChainRegistry {
    protected _asset_lists: AssetList[];
    protected _chains: Chain[];
    protected _ibc_data: IBCInfo[];
    urls: string[];
    constructor(options?: ChainRegistryFetcherOptions);
    get assetLists(): AssetList[];
    getChainAssetList(chainName: string): AssetList;
    getGeneratedAssetLists(chainName: string): AssetList[];
    get chains(): Chain[];
    getChain(chainName: string): Chain;
    get ibcData(): IBCInfo[];
    getChainIbcData(chainName: string): IBCInfo[];
    getChainInfo(chainName: string): ChainInfo;
    upsertChain(data: Chain): void;
    updateAssetList(data: AssetList): void;
    upsertIbcData(data: IBCInfo): void;
    update(data: Chain | AssetList | IBCInfo): void;
    fetch(url: any): Promise<void>;
    fetchUrls(): Promise<void[]>;
}
