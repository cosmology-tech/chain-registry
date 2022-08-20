import { AssetList, IBCInfo } from '@chain-registry/types';
export declare const ibcDenom: (paths: {
    portId: string;
    channelId: string;
}[], coinMinimalDenom: string) => string;
export declare const getIbcInfo: (ibc: IBCInfo[], chain: string, counterparty: string) => IBCInfo;
export declare const getTransferChannel: (info: IBCInfo) => {
    'chain-1': {
        'channel-id': string;
        'port-id': string;
    };
    'chain-2': {
        'channel-id': string;
        'port-id': string;
    };
    ordering: string;
    version: string;
    tags: object;
};
export declare const getNonTransferChannel: (info: IBCInfo) => {
    'chain-1': {
        'channel-id': string;
        'port-id': string;
    };
    'chain-2': {
        'channel-id': string;
        'port-id': string;
    };
    ordering: string;
    version: string;
    tags: object;
};
export declare const getWasmChannel: (info: IBCInfo) => {
    'chain-1': {
        'channel-id': string;
        'port-id': string;
    };
    'chain-2': {
        'channel-id': string;
        'port-id': string;
    };
    ordering: string;
    version: string;
    tags: object;
};
export declare const getIbcDenomByBase: (ibc: IBCInfo[], chain: string, counterparty: string, assets: AssetList[], base: string) => string;
export declare const getIbcDenomByBaseForCw20: (ibc: IBCInfo[], chain: string, counterparty: string, assets: AssetList[], base: string) => string;
export declare const getIbcAssets: (chainName: string, ibc: IBCInfo[], assets: AssetList[]) => {
    chain_name: string;
    assets: any;
}[];
export declare const getCw20Assets: (chainName: string, ibc: IBCInfo[], assets: AssetList[]) => {
    chain_name: string;
    assets: any;
}[];
export declare const getAssetLists: (chainName: string, ibc: IBCInfo[], assets: AssetList[]) => any[];
