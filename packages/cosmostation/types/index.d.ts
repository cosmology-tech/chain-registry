import { AssetList, Chain } from '@chain-registry/types';
import { ChainInfo } from '@keplr-wallet/types';
export declare const chainRegistryChainToKeplr: (chain: Chain, assets: AssetList[], options?: {
    getRpcEndpoint: (chain: Chain) => string;
    getRestEndpoint: (chain: Chain) => string;
    getExplorer: (chain: Chain) => string;
}) => ChainInfo;
