export interface AssetDenomUnit {
  denom: string;
  exponent: number;
  aliases?: string[];
}

export interface IBCTransition {
  type: 'ibc';
  counterparty: {
    port?: string;
    channel: string;
    denom: string;
    chain_name: string;
  };
  chain: {
    port?: string;
    channel: string;
  };
}

export interface Asset {
  description?: string;
  type_asset?: string;
  address?: string;
  denom_units: AssetDenomUnit[];
  base: string;
  name: string;
  display: string;
  symbol: string;
  logo_URIs?: {
    svg?: string;
    png?: string;
  };
  coingecko_id?: string;
  keywords?: string[];
  transition?: IBCTransition[];
}

export type AssetList = {
  $schema: string;
  chain_name: string;
  assets: Asset[];
};
