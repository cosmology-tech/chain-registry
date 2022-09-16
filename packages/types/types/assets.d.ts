export interface AssetDenomUnit {
    denom: string;
    exponent: number;
    aliases?: string[];
}
export interface LiquidStakeTrace {
    type: 'liquid-stake';
    asset: {
        platform?: string;
        base_denom: string;
    };
    provider: string;
}
export interface SyntheicTrace {
    type: 'synthetic';
    asset: {
        platform?: string;
        base_denom: string;
    };
    provider: string;
}
export interface BridgeTrace {
    type: 'bridge';
    asset: {
        platform?: string;
        base_denom: string;
    };
    provider: string;
}
export interface WrapTrace {
    type: 'wrapping';
    asset: {
        platform?: string;
        base_denom: string;
    };
    provider: string;
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
export interface IBCCw20Trace {
    type: 'ibc-cw20';
    counterparty: {
        port: string;
        channel: string;
        denom: string;
        chain_name: string;
    };
    chain: {
        port: string;
        channel: string;
    };
}
export declare type AssetTrace = IBCCw20Trace | IBCTrace | SyntheicTrace | LiquidStakeTrace | BridgeTrace;
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
    traces?: AssetTrace[];
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
