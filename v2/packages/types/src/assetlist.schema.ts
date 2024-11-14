export interface Asset {
  deprecated?: boolean;
  description?: string;
  address?: string;
  base: string;
  name: string;
  display: string;
  symbol: string;
  traces?: (IbcTransition | IbcCw20Transition | IbcBridgeTransition | NonIbcTransition)[];
  ibc?: {
    sourceChannel: string;
    dstChannel: string;
    sourceDenom: string;
  };
  images?: {
    png?: string;
    svg?: string;
    theme?: {
      circle?: boolean;
      monochrome?: boolean;
      primaryColorHex?: string;
      backgroundColorHex?: string;
      darkMode?: boolean;
    };
    imageSync?: Pointer;
  }[];
  keywords?: string[];
  socials?: {
    website?: string;
    twitter?: string;
    telegram?: string;
    discord?: string;
    github?: string;
    medium?: string;
    reddit?: string;
  };
  assetType: "sdk.coin" | "cw20" | "erc20" | "ics20" | "snip20" | "snip25" | "bitcoin-like" | "evm-base" | "svm-base" | "substrate" | "unknown" | "sdk.factory" | "bitsong";
  extendedDescription?: string;
  denomUnits: DenomUnit[];
  logoURIs?: {
    png?: string;
    svg?: string;
  };
  coingeckoId?: string;
}
export interface Pointer {
  chainName: string;
  baseDenom?: string;
}
export interface DenomUnit {
  denom: string;
  exponent: number;
  aliases?: string[];
}
export interface IbcTransition {
  type: "ibc";
  counterparty: {
    chainName: string;
    baseDenom: string;
    channelId: string;
  };
  chain: {
    channelId: string;
    // temporarily optional (talk with Jeremy)
    path?: string;
  };
}
export interface IbcCw20Transition {
  type: "ibc-cw20";
  counterparty: {
    port: string;
    chainName: string;
    baseDenom: string;
    channelId: string;
  };
  chain: {
    port: string;
    channelId: string;
    // temporarily optional (talk with Jeremy)
    path?: string;
  };
}
export interface IbcBridgeTransition {
  type: "ibc-bridge";
  counterparty: {
    port?: string;
    chainName: string;
    baseDenom: string;
    channelId: string;
  };
  chain: {
    port?: string;
    channelId: string;
    // temporarily optional (talk with Jeremy)
    path?: string;
  };
  provider: string;
}
export interface NonIbcTransition {
  type: "bridge" | "liquid-stake" | "synthetic" | "wrapped" | "additional-mintage" | "test-mintage" | "legacy-mintage";
  counterparty: {
    contract?: string;
    chainName: string;
    baseDenom: string;
  };
  chain?: {
    contract: string;
  };
  provider: string;
}
export interface AssetList {
  $schema?: string;
  assets: Asset[];
  chainName: string;
}