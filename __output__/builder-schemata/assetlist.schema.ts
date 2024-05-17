export interface Asset {
  deprecated?: boolean;
  description?: string;
  denomUnits: DenomUnit[];
  typeAsset?: "sdk.coin" | "cw20" | "erc20" | "ics20" | "snip20" | "snip25" | "bitcoin-like" | "evm-base" | "svm-base" | "substrate" | "sdk.factory";
  address?: string;
  base: string;
  name: string;
  display: string;
  symbol: string;
  traces?: (IbcTransition | IbcCw20Transition | NonIbcTransition)[];
  images?: {
    png?: string;
    svg?: string;
    theme?: {
      primaryColorHex?: string;
      circle?: boolean;
      darkMode?: boolean;
    };
  }[];
  coingeckoId?: string;
  keywords?: string[];
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
    path: string;
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
    path: string;
  };
}
export interface NonIbcTransition {
  type: "bridge" | "liquid-stake" | "synthetic" | "wrapped" | "additional-mintage" | "test-mintage";
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
  schema?: string;
  chainName: string;
  assets: Asset[];
}