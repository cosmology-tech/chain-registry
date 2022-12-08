export interface Chain {
    $schema?: string;
    chain_name: string;
    status: string;
    network_type: string;
    update_link?: string;
    pretty_name: string;
    chain_id: string;
    website?: string;
    bech32_prefix: string;
    daemon_name?: string;
    key_algos?: string[];
    extra_codecs?: string[];
    keywords?: string[];
    node_home?: string;
    slip44: number;
    logo_URIs?: {
        png?: string;
        svg?: string;
        jpeg?: string;
    };
    fees?: {
        fee_tokens: {
            denom: string;
            fixed_min_gas_price?: number;
            low_gas_price?: number;
            average_gas_price?: number;
            high_gas_price?: number;
        }[];
    };
    staking?: {
        staking_tokens: {
            denom: string;
        }[];
    };
    explorers?: {
        name?: string;
        kind?: string;
        url?: string;
        tx_page?: string;
        account_page?: string;
    }[];
    codebase?: {
        git_repo?: string;
        recommended_version?: string;
        compatible_versions?: string[];
        binaries?: Record<string, string>;
        cosmos_sdk_version?: string;
        tendermint_version?: string;
        cosmwasm_version?: string;
        cosmwasm_enabled?: boolean;
        ibc_go_version?: string;
        ics_enabled?: string[];
        genesis?: {
            tag?: string;
            name?: string;
            genesis_url?: string;
        };
        versions?: {
            name?: string;
            tag?: string;
            height?: number;
            next_version_name?: string;
        }[];
    };
    peers?: {
        seeds?: any[];
        persistent_peers?: {
            id: string;
            address: string;
            provider?: string;
        }[];
    };
    apis?: {
        rpc?: {
            address: string;
            provider?: string;
            archive?: boolean;
        }[];
        rest?: {
            address: string;
            provider?: string;
            archive?: boolean;
        }[];
        grpc?: {
            address: string;
            provider?: string;
            archive?: boolean;
        }[];
        'evm-http-jsonrpc'?: {
            address: string;
            provider?: string;
            archive?: boolean;
        }[];
        'grpc-web'?: {
            address: string;
            provider?: string;
            archive?: boolean;
        }[];
        sidechains_rpc?: {
            address: string;
            provider?: string;
            archive?: boolean;
        }[];
        [key: string]: {
            address: string;
            provider?: string;
            archive?: boolean;
        }[];
    };
}
export declare type Chains = Chain[];
