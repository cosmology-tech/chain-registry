export interface AssetDenomUnit {
    denom: string;
    exponent: number;
    aliases?: string[];
}
export interface IBCTrace {
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
    traces?: IBCTrace[];
    ibc?: {
        source_channel?: string;
        source_denom?: string;
        dst_channel?: string;
    };
}
export declare type AssetList = {
    $schema?: string;
    chain_name: string;
    assets: Asset[];
};
