export interface AssetDenomUnit {
    denom: string;
    exponent: number;
    aliases?: string[];
}
export interface LiquidStakeTrace {
    type: 'liquid-stake';
    counterparty: {
        chain_name: string;
        base_denom: string;
    };
    provider: string;
}
export interface SyntheicTrace {
    type: 'synthetic';
    counterparty: {
        chain_name: string;
        base_denom: string;
    };
    provider: string;
}
export interface BridgeTrace {
    type: 'bridge';
    counterparty: {
        chain_name: string;
        base_denom: string;
    };
    provider: string;
}
export interface WrapTrace {
    type: 'wrapped';
    counterparty: {
        chain_name: string;
        base_denom: string;
    };
    chain?: {
        contract: string;
    };
    provider: string;
}
export interface IBCTrace {
    type: 'ibc';
    counterparty: {
        port?: string;
        channel_id: string;
        base_denom: string;
        chain_name: string;
    };
    chain: {
        port?: string;
        channel_id: string;
        path?: string;
    };
}
export interface IBCCw20Trace {
    type: 'ibc-cw20';
    counterparty: {
        port: string;
        channel_id: string;
        base_denom: string;
        chain_name: string;
    };
    chain: {
        port: string;
        channel_id: string;
    };
}
export declare type AssetTrace = IBCCw20Trace | IBCTrace | SyntheicTrace | LiquidStakeTrace | WrapTrace | BridgeTrace;
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
        png?: string;
        svg?: string;
        jpeg?: string;
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
