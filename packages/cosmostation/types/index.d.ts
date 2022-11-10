import { AssetList, Chain } from '@chain-registry/types';
import { AddChainParams } from '@cosmostation/extension-client/types/message';
export declare const chainRegistryChainToCosmostation: (chain: Chain, assets: AssetList[], options?: {
    getRestEndpoint: (chain: Chain) => string;
}) => AddChainParams;
