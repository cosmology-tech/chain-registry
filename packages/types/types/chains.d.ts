export interface Chain {
    $schema?: string;
    chain_name: string;
    pre_fork_chain_name?: string;
    status: string;
    description?: string;
    network_type: string;
    update_link?: string;
    pretty_name: string;
    chain_id: string;
    website?: string;
    /**
     * The default prefix for the human-readable part of addresses that identifies the coin type. Must be registered with SLIP-0173. E.g., 'cosmos'
     */
    bech32_prefix: string;
    bech32_config?: {
        /**
         * e.g., 'cosmos'
         */
        bech32PrefixAccAddr?: string;
        /**
         * e.g., 'cosmospub'
         */
        bech32PrefixAccPub?: string;
        /**
         * e.g., 'cosmosvaloper'
         */
        bech32PrefixValAddr?: string;
        /**
         * e.g., 'cosmosvaloperpub'
         */
        bech32PrefixValPub?: string;
        /**
         * e.g., 'cosmosvalcons'
         */
        bech32PrefixConsAddr?: string;
        /**
         * e.g., 'cosmosvalconspub'
         */
        bech32PrefixConsPub?: string;
    };
    daemon_name?: string;
    key_algos?: ('secp256k1' | 'ethsecp256k1' | 'ed25519' | 'sr25519' | string)[];
    extra_codecs?: string[];
    keywords?: string[];
    node_home?: string;
    slip44?: number;
    alternative_slip44s?: number[];
    logo_URIs?: {
        png?: string;
        svg?: string;
        jpeg?: string;
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
        /**
         * logomark == icon only; logotype == text only; logo == icon + text.
         */
        layout?: 'logo' | 'logomark' | 'logotype';
        /**
         * Indicates in which position the text is placed, in case the layout is 'icon' type, it's required only in this case.
         */
        text_position?: 'top' | 'bottom' | 'left' | 'right' | 'integrated';
    }[];
    fees?: {
        fee_tokens: {
            denom: string;
            fixed_min_gas_price?: number;
            low_gas_price?: number;
            average_gas_price?: number;
            high_gas_price?: number;
            gas_costs?: {
                cosmos_send?: number;
                ibc_transfer?: number;
            };
        }[];
    };
    staking?: {
        staking_tokens: {
            denom: string;
        }[];
        lock_duration?: {
            /**
             * The number of blocks for which the staked tokens are locked.
             */
            blocks?: number;
            /**
             * The approximate time for which the staked tokens are locked.
             */
            time?: string;
        };
    };
    explorers?: {
        name?: string;
        kind?: string;
        url?: string;
        tx_page?: string;
        account_page?: string;
    }[];
    codebase?: {
        go_version?: string;
        git_repo?: string;
        recommended_version?: string;
        compatible_versions?: string[];
        binaries?: {
            'linux/amd64'?: string;
            'linux/arm64'?: string;
            'darwin/amd64'?: string;
            'darwin/arm64'?: string;
            'windows/amd64'?: string;
            'windows/arm64'?: string;
        };
        cosmos_sdk_version?: string;
        consensus?: {
            type: 'tendermint' | 'cometbft' | 'sei-tendermint';
            version?: string;
        };
        cosmwasm_version?: string;
        cosmwasm_enabled?: boolean;
        cosmwasm_path?: string;
        ibc_go_version?: string;
        /**
         * List of IBC apps (usually corresponding to a ICS standard) which have been enabled on the network.
         */
        ics_enabled?: ('ics20-1' | 'ics27-1' | 'mauth' | string)[];
        genesis?: {
            name?: string;
            genesis_url?: string;
            ics_ccv_url?: string;
        };
        versions?: {
            /**
             * Official Upgrade Name
             */
            name: string;
            /**
             * Git Upgrade Tag
             */
            tag?: string;
            /**
             * Block Height
             */
            height?: number;
            proposal?: number;
            /**
             * [Optional] Name of the previous version
             */
            previous_version_name?: string;
            /**
             * [Optional] Name of the following version
             */
            next_version_name?: string;
            /**
             * Minimum accepted go version to build the binary.
             */
            go_version?: string;
            recommended_version?: string;
            cosmwasm_path?: string;
            compatible_versions?: string[];
            cosmos_sdk_version?: string;
            consensus?: {
                type: 'tendermint' | 'cometbft' | 'sei-tendermint';
                version?: string;
            };
            cosmwasm_version?: string;
            cosmwasm_enabled?: boolean;
            ibc_go_version?: string;
            /**
             * List of IBC apps (usually corresponding to a ICS standard) which have been enabled on the network.
             */
            ics_enabled?: ('ics20-1' | 'ics27-1' | 'mauth' | string)[];
            binaries?: {
                'linux/amd64'?: string;
                'linux/arm64'?: string;
                'darwin/amd64'?: string;
                'darwin/arm64'?: string;
                'windows/amd64'?: string;
                'windows/arm64'?: string;
            };
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
        wss?: {
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
/**
 * The (primary) key used to identify an object within the Chain Registry.
 */
export interface Pointer {
    /**
     * The chain name or platform from which the object resides. E.g., 'cosmoshub', 'ethereum', 'forex', or 'nasdaq'
     */
    chain_name: string;
    /**
     * The base denom of the asset from which the object originates. E.g., when describing ATOM from Cosmos Hub, specify 'uatom', NOT 'atom' nor 'ATOM'; base units are unique per platform.
     */
    base_denom?: string;
}
  
export interface MemoKeys {
    $schema?: string;
    memo_keys: {
        key: string;
        description: string;
        git_repo: string;
        memo: {
            [k: string]: unknown;
        };
        [k: string]: unknown;
    }[];
}
export interface ChainVersions {
    $schema?: string;
    chain_name: string;
    versions: {
        /**
         * Official Upgrade Name
         */
        name: string;
        /**
         * Git Upgrade Tag
         */
        tag?: string;
        /**
         * Block Height
         */
        height?: number;
        /**
         * Proposal that will officially signal community acceptance of the upgrade.
         */
        proposal?: number;
        /**
         * [Optional] Name of the previous version
         */
        previous_version_name?: string;
        /**
         * [Optional] Name of the following version
         */
        next_version_name?: string;
        recommended_version?: string;
        compatible_versions?: string[];
        cosmos_sdk_version?: string;
        consensus?: {
            type: 'tendermint' | 'cometbft' | 'sei-tendermint';
            version?: string;
        };
        cosmwasm_version?: string;
        cosmwasm_enabled?: boolean;
        /**
         * Relative path to the cosmwasm directory. ex. $HOME/.juno/data/wasm
         */
        cosmwasm_path?: string;
        ibc_go_version?: string;
        /**
         * List of IBC apps (usually corresponding to a ICS standard) which have been enabled on the network.
         */
        ics_enabled?: ('ics20-1' | 'ics27-1' | 'mauth')[];
        binaries?: {
            'linux/amd64'?: string;
            'linux/arm64'?: string;
            'darwin/amd64'?: string;
            'darwin/arm64'?: string;
            'windows/amd64'?: string;
            'windows/arm64'?: string;
        };
    }[];
    [k: string]: unknown;
}
export type Chains = Chain[];
