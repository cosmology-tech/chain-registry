import { AssetList, Chain, IBCInfo } from '@chain-registry/types';
export interface ChainRegistryOptions {
    assetLists?: AssetList[];
    chains?: Chain[];
    ibcData?: IBCInfo[];
    urls?: string[];
}
export interface ChainInfoOptions {
    chain_name: string;
    registry: ChainRegistry;
}
export declare class ChainInfo {
    chain_name: string;
    registry: ChainRegistry;
    protected _asset_list: AssetList;
    protected _asset_lists: AssetList[];
    protected _chain: Chain;
    protected _ibc_data: IBCInfo[];
    constructor(options: ChainInfoOptions);
    refresh(): void;
    nativeAssetLists(): AssetList;
    chain(): Chain;
    assetLists(): any[];
}
export declare class ChainRegistry {
    protected _asset_lists: AssetList[];
    protected _chains: Chain[];
    protected _ibc_data: IBCInfo[];
    urls: string[];
    constructor(options?: ChainRegistryOptions);
    assetLists(): AssetList[];
    getChainAssetList(chainName: string): AssetList;
    getGeneratedAssetLists(chainName: string): AssetList[];
    chains(): Chain[];
    getChain(chainName: string): Chain;
    ibcData(): IBCInfo[];
    getChainIbcData(chainName: string): IBCInfo[];
    getChainInfo(chainName: string): ChainInfo;
    upsertChain(data: Chain): void;
    updateAssetList(data: AssetList): void;
    upsertIbcData(data: IBCInfo): void;
    update(data: Chain | AssetList | IBCInfo): void;
    fetch(url: any): Promise<void>;
    fetchUrls(): Promise<void[]>;
}
