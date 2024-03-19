import { AssetList, Chain, IBCInfo } from '@chain-registry/types';
import { ChainUtils } from './chain-utils';
export interface FetchOptions {
    urls?: string[];
    chainNames?: string[];
}
export interface ChainRegistryClientOptions extends FetchOptions {
    baseUrl?: string;
}
export declare class ChainRegistryClient {
    private _allUrls;
    private _baseUrl;
    private _chainNames;
    private _notFoundUrls;
    private _chains;
    private _assetLists;
    private _ibcInfo;
    constructor(options?: ChainRegistryClientOptions);
    get urls(): string[];
    get chains(): Chain[];
    get assetLists(): AssetList[];
    get ibcInfo(): IBCInfo[];
    getChain(chainName: string): Chain | undefined;
    getChainAssetList(chainName: string): AssetList | undefined;
    getChainIbcInfo(chainName: string): IBCInfo[];
    getChainIbcAssetList(chainName: string): AssetList;
    getChainFullData(chainName: string): {
        chain: Chain;
        assetList: AssetList;
        ibcInfo: IBCInfo[];
        ibcAssetList: AssetList;
    };
    getChainUtils(chainName: string): ChainUtils;
    fetch(options?: FetchOptions): Promise<void>;
    private formatChainUrl;
    private formatAssetListUrl;
    private formatIbcUrl;
    private generateNamePairs;
    private generateUrls;
    private fetchUrl;
    private upsert;
    private save;
}
