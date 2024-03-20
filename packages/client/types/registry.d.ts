import { ChainRegistryChainUtil } from './chain-util';
import { ChainRegistryFetcher, ChainRegistryFetcherOptions } from './fetcher';
export interface ChainRegistryClientOptions extends ChainRegistryFetcherOptions {
    chainNames: string[];
    assetListNames?: string[];
    ibcNamePairs?: string[][];
    baseUrl?: string;
}
export declare class ChainRegistryClient extends ChainRegistryFetcher {
    protected _options: ChainRegistryClientOptions;
    constructor(options: ChainRegistryClientOptions);
    generateUrls(): void;
    getChainUtil(chainName: string): ChainRegistryChainUtil;
}
