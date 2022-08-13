export declare const ibcDenom: (
  paths: {
    portId: string;
    channelId: string;
  }[],
  coinMinimalDenom: string
) => string;
export interface IBCChainInfo {
  'chain-name': string;
  'client-id': string;
  'connection-id': string;
}
export interface IBCChannelPortAndChannel {
  'channel-id': string;
  'port-id': string;
}
export interface IBCChannelInfo {
  'chain-1': IBCChannelPortAndChannel;
  'chain-2': IBCChannelPortAndChannel;
  ordering: string;
  version: string;
  tags?: {
    [key: string]: string;
  };
}
export interface IBCInfo {
  $schema: string;
  'chain-1': IBCChainInfo;
  'chain-2': IBCChainInfo;
  channels: IBCChannelInfo[];
}
export declare const getIbcInfo: (
  ibc: IBCInfo[],
  chain: string,
  counterparty: string
) => IBCInfo;
export declare const getTransferChannel: (info: IBCInfo) => IBCChannelInfo;
export declare const getIbcDenom: (
  ibc: IBCInfo[],
  chain: string,
  counterparty: string,
  assets: any[],
  symbol: string
) => string;
export declare const getIbcDenomByBase: (
  ibc: IBCInfo[],
  chain: string,
  counterparty: string,
  assets: any[],
  base: string
) => string;
export declare const getIbcAssets: (
  chainName: string,
  ibc: IBCInfo[],
  assets: any[]
) => {
  chain: {
    'channel-id': string;
    'port-id': string;
    'chain-name': string;
    'client-id': string;
    'connection-id': string;
  };
  counterparty: {
    'channel-id': string;
    'port-id': string;
    'chain-name': string;
    'client-id': string;
    'connection-id': string;
  };
  assets: any;
}[];
