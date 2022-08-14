declare const _exports: {
  chain_name: string;
  assets: {
    description: string;
    denom_units: {
      denom: string;
      exponent: number;
      aliases?: string[];
    }[];
    base: string;
    name: string;
    display: string;
    symbol: string;
    logo_URIs: {
      png: string;
      svg: string;
    };
    coingecko_id: string;
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
}[];
export = _exports;
