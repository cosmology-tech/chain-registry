export interface AssetDenomUnit {
  denom: string;
  exponent: number;
  aliases?: string[];
}

export interface Asset {
  description: string;
  denom_units: AssetDenomUnit[];
  base: string;
  name: string;
  display: string;
  symbol: string;
  logo_URIs: {
    svg: string;
    png: string;
  };
  coingecko_id: string;
}

export type AssetList = {
  $schema: string;
  chain_name: string;
  assets: Asset[];
};
