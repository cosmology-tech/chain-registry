export interface ChainOperatorInfo {
  address?: string;
}
export interface ChainInfo {
  chainName: string;
  clientId: string;
  connectionId: string;
}
export interface ChannelInfo {
  channelId: string;
  portId: string;
  clientId?: string;
  connectionId?: string;
}
export interface IBCData {
  schema?: string;
  chain1: ChainInfo;
  chain2: ChainInfo;
  channels: {
    chain1: ChannelInfo;
    chain2: ChannelInfo;
    ordering: "ordered" | "unordered";
    version: string;
    feeVersion?: string;
    description?: string;
    tags?: {
      status?: "live" | "upcoming" | "killed";
      preferred?: boolean;
      dex?: string;
      properties?: string;
    };
  }[];
  operators?: {
    chain1: ChainOperatorInfo;
    chain2: ChainOperatorInfo;
    memo: string;
    name: string;
    discordHandle?: string;
  }[];
}