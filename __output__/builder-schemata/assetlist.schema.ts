export interface Asset {
  deprecated?: boolean;
  description?: string;
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
      circle?: boolean;
      primaryColorHex?: string;
      darkMode?: boolean;
    };
  }[];
  keywords?: string[];
  denomUnits: DenomUnit[];
  typeAsset?: "sdk.coin" | "cw20" | "erc20" | "ics20" | "snip20" | "snip25" | "bitcoin-like" | "evm-base" | "svm-base" | "substrate" | "sdk.factory";
  coingeckoId?: string;
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
    path: string;
    channelId: string;
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
    path: string;
    channelId: string;
  };
}
export interface NonIbcTransition {
  type: "bridge" | "liquid-stake" | "synthetic" | "wrapped" | "additional-mintage" | "test-mintage";
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