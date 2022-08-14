export interface IBCAsset {
  chain_name: string;
  assets: {
    description?: string;
    type_asset?: string;
    address?: string;
    denom_units: {
      denom: string;
      exponent: number;
      aliases?: string[];
    }[];
    base: string;
    name: string;
    display: string;
    symbol: string;
    logo_URIs?: {
      png?: string;
      svg?: string;
    };
    coingecko_id?: string;
    keywords?: string[];
    ibc: {
      counterparty: {
        channel: string;
        denom: string;
        chain_name: string;
      };
      chain: {
        channel: string;
      };
    };
  }[];
}
