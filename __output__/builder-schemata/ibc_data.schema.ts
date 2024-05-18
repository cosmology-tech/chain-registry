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
  $schema?: string;
  channels: {
    ordering: "ordered" | "unordered";
    version: string;
    description?: string;
    tags?: {
      status?: "live" | "upcoming" | "killed";
      preferred?: boolean;
      dex?: string;
      properties?: string;
    };
    chain1: ChannelInfo;
    chain2: ChannelInfo;
    feeVersion?: string;
  }[];
  operators?: {
    memo: string;
    name: string;
    chain1: ChainOperatorInfo;
    chain2: ChainOperatorInfo;
    discordHandle?: string;
  }[];
  chain1: ChainInfo;
  chain2: ChainInfo;
}