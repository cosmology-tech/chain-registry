export interface Asset {
  deprecated?: boolean;
  description?: string;
  extendedDescription?: string;
  denomUnits: DenomUnit[];
  typeAsset?: "sdk.coin" | "cw20" | "erc20" | "ics20" | "snip20" | "snip25" | "bitcoin-like" | "evm-base" | "svm-base" | "substrate" | "unknown";
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
  logoURIs?: {
    png?: string;
    svg?: string;
  };
  images?: {
    imageSync?: Pointer;
    png?: string;
    svg?: string;
    theme?: {
      primaryColorHex?: string;
      backgroundColorHex?: string;
      circle?: boolean;
      darkMode?: boolean;
      monochrome?: boolean;
    };
  }[];
  coingeckoId?: string;
  keywords?: string[];
  socials?: {
    website?: string;
    twitter?: string;
  };
}
export interface DenomUnit {
  denom: string;
  exponent: number;
  aliases?: string[];
}
export interface Pointer {
  chainName: string;
  baseDenom?: string;
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
    chainName: string;
    baseDenom: string;
    port: string;
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
    chainName: string;
    baseDenom: string;
    port?: string;
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
    chainName: string;
    baseDenom: string;
    contract?: string;
  };
  chain?: {
    contract: string;
  };
  provider: string;
}
export interface AssetList {
  $schema?: string;
  chainName: string;
  assets: Asset[];
}