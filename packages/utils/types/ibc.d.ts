import { AssetList, IBCInfo } from '@chain-registry/types';
export declare const ibcDenom: (paths: {
    port_id: string;
    channel_id: string;
}[], coinMinimalDenom: string) => string;
export declare const getIbcInfo: (ibc: IBCInfo[], chain: string, counterparty: string) => IBCInfo;
export declare const getTransferChannel: (info: IBCInfo) => {
    chain_1: {
        channel_id: string;
        port_id: string;
    };
    chain_2: {
        channel_id: string;
        port_id: string;
    };
    ordering: string;
    version: string;
    tags?: object;
};
export declare const getNonTransferChannel: (info: IBCInfo) => {
    chain_1: {
        channel_id: string;
        port_id: string;
    };
    chain_2: {
        channel_id: string;
        port_id: string;
    };
    ordering: string;
    version: string;
    tags?: object;
};
export declare const getWasmChannel: (info: IBCInfo) => {
    chain_1: {
        channel_id: string;
        port_id: string;
    };
    chain_2: {
        channel_id: string;
        port_id: string;
    };
    ordering: string;
    version: string;
    tags?: object;
};
export declare const getIbcAssetPath: (ibc: IBCInfo[], chain: string, counterparty: string, assets: AssetList[], base: string) => any;
export declare const getIbcDenomByBase: (ibc: IBCInfo[], chain: string, counterparty: string, assets: AssetList[], base: string) => string;
export declare const getIbcAssets: (chainName: string, ibc: IBCInfo[], assets: AssetList[]) => {
    chain_name: string;
    assets: any;
}[];
export declare const getCw20Assets: (chainName: string, ibc: IBCInfo[], assets: AssetList[]) => {
    chain_name: string;
    assets: any;
}[];
export declare const getAssetLists: (chainName: string, ibc: IBCInfo[], assets: AssetList[]) => any[];
