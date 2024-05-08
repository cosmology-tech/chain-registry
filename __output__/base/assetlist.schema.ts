export interface Asset {
  deprecated?: boolean;
  description?: string;
  extended_description?: string;
  denom_units: DenomUnit[];
  type_asset?: "sdk.coin" | "cw20" | "erc20" | "ics20" | "snip20" | "snip25" | "bitcoin-like" | "evm-base" | "svm-base" | "substrate";
  address?: string;
  base: string;
  name: string;
  display: string;
  symbol: string;
  traces?: (IbcTransition | IbcCw20Transition | NonIbcTransition)[];
  ibc?: {
    source_channel: string;
    dst_channel: string;
    source_denom: string;
  };
  logo_URIs?: {
    png?: string;
    svg?: string;
  };
  images?: {
    image_sync?: Pointer;
    png?: string;
    svg?: string;
    theme?: {
      primary_color_hex?: string;
      circle?: boolean;
      dark_mode?: boolean;
    };
  }[];
  coingecko_id?: string;
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
  chain_name: string;
  base_denom?: string;
}
export interface IbcTransition {
  type: "ibc";
  counterparty: {
    chain_name: string;
    base_denom: string;
    channel_id: string;
  };
  chain: {
    channel_id: string;
    path: string;
  };
}
export interface IbcCw20Transition {
  type: "ibc-cw20";
  counterparty: {
    chain_name: string;
    base_denom: string;
    port: string;
    channel_id: string;
  };
  chain: {
    port: string;
    channel_id: string;
    path: string;
  };
}
export interface NonIbcTransition {
  type: "bridge" | "liquid-stake" | "synthetic" | "wrapped" | "additional-mintage" | "test-mintage";
  counterparty: {
    chain_name: string;
    base_denom: string;
    contract?: string;
  };
  chain?: {
    contract: string;
  };
  provider: string;
}
export interface AssetList {
  $schema?: string;
  chain_name: string;
  assets: Asset[];
}