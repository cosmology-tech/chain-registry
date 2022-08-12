import assets from './assets.json';
import chains from './chains.json';
import ibc from './ibc.json';
import ibc_assets from './ibc_assets.json';
declare const _default: {
    assets: ({
        $schema: string;
        chain_name: string;
        assets: ({
            description: string;
            denom_units: ({
                denom: string;
                exponent: number;
                aliases?: undefined;
            } | {
                denom: string;
                exponent: number;
                aliases: string[];
            })[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                svg: string;
                png?: undefined;
            };
            coingecko_id: string;
            type_asset?: undefined;
            address?: undefined;
        } | {
            description: string;
            type_asset: string;
            address: string;
            denom_units: ({
                denom: string;
                exponent: number;
                aliases: string[];
            } | {
                denom: string;
                exponent: number;
                aliases?: undefined;
            })[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                svg: string;
                png?: undefined;
            };
            coingecko_id: string;
        } | {
            description: string;
            type_asset: string;
            address: string;
            denom_units: ({
                denom: string;
                exponent: number;
                aliases: string[];
            } | {
                denom: string;
                exponent: number;
                aliases?: undefined;
            })[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                png: string;
                svg: string;
            };
            coingecko_id: string;
        })[];
        chain_id?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        assets: ({
            description: string;
            denom_units: {
                denom: string;
                exponent: number;
                aliases: string[];
            }[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                svg: string;
            };
            coingecko_id: string;
            type_asset?: undefined;
            address?: undefined;
        } | {
            description: string;
            type_asset: string;
            address: string;
            denom_units: ({
                denom: string;
                exponent: number;
                aliases: string[];
            } | {
                denom: string;
                exponent: number;
                aliases?: undefined;
            })[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                svg: string;
            };
            coingecko_id: string;
        } | {
            description: string;
            type_asset: string;
            address: string;
            denom_units: ({
                denom: string;
                exponent: number;
                aliases: string[];
            } | {
                denom: string;
                exponent: number;
                aliases?: undefined;
            })[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                svg: string;
            };
            coingecko_id?: undefined;
        })[];
        chain_id?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        assets: ({
            description: string;
            denom_units: ({
                denom: string;
                exponent: number;
                aliases?: undefined;
            } | {
                denom: string;
                exponent: number;
                aliases: string[];
            })[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                png: string;
                svg: string;
            };
            coingecko_id: string;
            type_asset?: undefined;
            address?: undefined;
        } | {
            description: string;
            type_asset: string;
            address: string;
            denom_units: {
                denom: string;
                exponent: number;
                aliases: string[];
            }[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                svg: string;
                png?: undefined;
            };
            coingecko_id: string;
        } | {
            description: string;
            type_asset: string;
            address: string;
            denom_units: ({
                denom: string;
                exponent: number;
                aliases: string[];
            } | {
                denom: string;
                exponent: number;
                aliases?: undefined;
            })[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                svg: string;
                png?: undefined;
            };
            coingecko_id?: undefined;
        })[];
        chain_id?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        assets: ({
            description: string;
            denom_units: {
                denom: string;
                exponent: number;
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
            type_asset?: undefined;
            address?: undefined;
        } | {
            description: string;
            denom_units: {
                denom: string;
                exponent: number;
            }[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                png: string;
                svg?: undefined;
            };
            coingecko_id: string;
            type_asset?: undefined;
            address?: undefined;
        } | {
            description: string;
            denom_units: {
                denom: string;
                exponent: number;
            }[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                svg: string;
                png?: undefined;
            };
            coingecko_id: string;
            type_asset?: undefined;
            address?: undefined;
        } | {
            description: string;
            type_asset: string;
            address: string;
            denom_units: {
                denom: string;
                exponent: number;
            }[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                svg: string;
                png?: undefined;
            };
            coingecko_id: string;
        })[];
        chain_id?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        assets: ({
            description: string;
            denom_units: {
                denom: string;
                exponent: number;
            }[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                png: string;
                svg: string;
            };
            type_asset: string;
            coingecko_id: string;
        } | {
            description: string;
            denom_units: {
                denom: string;
                exponent: number;
            }[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                png: string;
                svg?: undefined;
            };
            type_asset?: undefined;
            coingecko_id?: undefined;
        })[];
        chain_id?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        assets: ({
            description: string;
            denom_units: {
                denom: string;
                exponent: number;
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
        } | {
            description: string;
            denom_units: {
                denom: string;
                exponent: number;
            }[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                svg: string;
                png: string;
            };
            coingecko_id?: undefined;
        })[];
        chain_id?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        assets: ({
            description: string;
            denom_units: {
                denom: string;
                exponent: number;
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
            type_asset?: undefined;
            address?: undefined;
        } | {
            description: string;
            type_asset: string;
            address: string;
            denom_units: {
                denom: string;
                exponent: number;
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
        } | {
            description: string;
            type_asset: string;
            address: string;
            denom_units: {
                denom: string;
                exponent: number;
            }[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                png: string;
                svg: string;
            };
            coingecko_id?: undefined;
        } | {
            description: string;
            type_asset: string;
            address: string;
            denom_units: {
                denom: string;
                exponent: number;
                aliases: string[];
            }[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                png: string;
                svg: string;
            };
            coingecko_id?: undefined;
        } | {
            description: string;
            type_asset: string;
            address: string;
            denom_units: {
                denom: string;
                exponent: number;
            }[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                png: string;
                svg?: undefined;
            };
            coingecko_id: string;
        } | {
            description: string;
            type_asset: string;
            address: string;
            denom_units: {
                denom: string;
                exponent: number;
            }[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                png: string;
                svg?: undefined;
            };
            coingecko_id?: undefined;
        } | {
            description: string;
            type_asset: string;
            address: string;
            denom_units: {
                denom: string;
                exponent: number;
            }[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                svg: string;
                png?: undefined;
            };
            coingecko_id?: undefined;
        })[];
        chain_id?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        assets: ({
            description: string;
            denom_units: {
                denom: string;
                exponent: number;
                aliases: any[];
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
        } | {
            denom_units: {
                denom: string;
                exponent: number;
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
            description?: undefined;
        })[];
        chain_id?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        assets: ({
            description: string;
            denom_units: {
                denom: string;
                exponent: number;
                aliases: string[];
            }[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                svg: string;
                png: string;
            };
            coingecko_id: string;
            type_asset?: undefined;
            address?: undefined;
        } | {
            description: string;
            type_asset: string;
            address: string;
            denom_units: {
                denom: string;
                exponent: number;
            }[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                png: string;
                svg?: undefined;
            };
            coingecko_id: string;
        } | {
            denom_units: {
                denom: string;
                exponent: number;
            }[];
            type_asset: string;
            address: string;
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                png: string;
                svg?: undefined;
            };
            description?: undefined;
            coingecko_id?: undefined;
        } | {
            denom_units: {
                denom: string;
                exponent: number;
            }[];
            type_asset: string;
            address: string;
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                svg: string;
                png?: undefined;
            };
            description?: undefined;
            coingecko_id?: undefined;
        } | {
            denom_units: {
                denom: string;
                exponent: number;
            }[];
            type_asset: string;
            address: string;
            base: string;
            name: string;
            display: string;
            symbol: string;
            description?: undefined;
            logo_URIs?: undefined;
            coingecko_id?: undefined;
        } | {
            description: string;
            denom_units: {
                denom: string;
                exponent: number;
                aliases: string[];
            }[];
            base: string;
            display: string;
            name: string;
            symbol: string;
            logo_URIs: {
                svg: string;
                png: string;
            };
            coingecko_id?: undefined;
            type_asset?: undefined;
            address?: undefined;
        })[];
        chain_id?: undefined;
    } | {
        $schema: string;
        chain_id: string;
        assets: {
            description: string;
            denom_units: {
                denom: string;
                exponent: number;
                aliases: any[];
            }[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                jpeg: string;
            };
        }[];
        chain_name?: undefined;
    } | {
        $schema: string;
        chain_id: string;
        assets: {
            description: string;
            denom_units: {
                denom: string;
                exponent: number;
            }[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                png: string;
                svg: string;
            };
        }[];
        chain_name?: undefined;
    } | {
        $schema: string;
        chain_id: string;
        assets: {
            description: string;
            type_asset: string;
            address: string;
            denom_units: ({
                denom: string;
                exponent: number;
                aliases: string[];
            } | {
                denom: string;
                exponent: number;
                aliases?: undefined;
            })[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                png: string;
            };
            coingecko_id: string;
        }[];
        chain_name?: undefined;
    })[];
    chains: ({
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        slip44: number;
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries?: undefined;
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: any[];
            persistent_peers: {
                id: string;
                address: string;
            }[];
        };
        apis: {
            rpc: ({
                address: string;
                provider?: undefined;
            } | {
                address: string;
                provider: string;
            })[];
            rest: ({
                address: string;
                provider?: undefined;
            } | {
                address: string;
                provider: string;
            })[];
            grpc: {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        key_algos?: undefined;
        fees?: undefined;
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        key_algos: string[];
        slip44: number;
        fees: {
            fee_tokens: {
                denom: string;
                fixed_min_gas_price: number;
            }[];
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries: {
                "linux/amd64": string;
                "darwin/amd64": string;
                "windows/amd64": string;
                "linux/arm64"?: undefined;
                "darwin/arm64"?: undefined;
                "windows/arm64"?: undefined;
                "linux/armv6"?: undefined;
            };
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
            }[];
            persistent_peers: {
                id: string;
                address: string;
            }[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc: {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc": {
                address: string;
                provider: string;
            }[];
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        slip44: number;
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries: {
                "linux/amd64": string;
                "darwin/amd64"?: undefined;
                "windows/amd64"?: undefined;
                "linux/arm64"?: undefined;
                "darwin/arm64"?: undefined;
                "windows/arm64"?: undefined;
                "linux/armv6"?: undefined;
            };
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: ({
                id: string;
                address: string;
                provider?: undefined;
            } | {
                id: string;
                address: string;
                provider: string;
            })[];
            persistent_peers: {
                id: string;
                address: string;
            }[];
        };
        apis: {
            rpc: ({
                address: string;
                provider: string;
            } | {
                address: string;
                provider?: undefined;
            })[];
            rest: ({
                address: string;
                provider?: undefined;
            } | {
                address: string;
                provider: string;
            })[];
            grpc: {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        key_algos?: undefined;
        fees?: undefined;
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        key_algos: string[];
        slip44: number;
        fees: {
            fee_tokens: {
                denom: string;
                fixed_min_gas_price: number;
            }[];
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries: {
                "linux/amd64": string;
                "darwin/amd64": string;
                "windows/amd64"?: undefined;
                "linux/arm64"?: undefined;
                "darwin/arm64"?: undefined;
                "windows/arm64"?: undefined;
                "linux/armv6"?: undefined;
            };
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
            }[];
            persistent_peers?: undefined;
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc?: undefined;
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries?: undefined;
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            persistent_peers: ({
                id: string;
                address: string;
                provider?: undefined;
            } | {
                id: string;
                address: string;
                provider: string;
            })[];
            seeds?: undefined;
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc: {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        slip44?: undefined;
        key_algos?: undefined;
        fees?: undefined;
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        chain_id: string;
        pretty_name: string;
        status: string;
        network_type: string;
        bech32_prefix: string;
        genesis: {
            genesis_url: string;
        };
        daemon_name: string;
        node_home: string;
        key_algos: string[];
        slip44: number;
        fees: {
            fee_tokens: {
                denom: string;
                fixed_min_gas_price: number;
            }[];
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries: {
                "linux/amd64": string;
                "darwin/amd64": string;
                "windows/amd64"?: undefined;
                "linux/arm64"?: undefined;
                "darwin/arm64"?: undefined;
                "windows/arm64"?: undefined;
                "linux/armv6"?: undefined;
            };
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
                provider: string;
            }[];
            persistent_peers: {
                id: string;
                address: string;
            }[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc: {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        key_algos: string[];
        slip44: number;
        fees: {
            fee_tokens: {
                denom: string;
                fixed_min_gas_price: number;
            }[];
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries: {
                "linux/amd64": string;
                "darwin/amd64"?: undefined;
                "windows/amd64"?: undefined;
                "linux/arm64"?: undefined;
                "darwin/arm64"?: undefined;
                "windows/arm64"?: undefined;
                "linux/armv6"?: undefined;
            };
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
                provider: string;
            }[];
            persistent_peers: {
                id: string;
                address: string;
                provider: string;
            }[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            grpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        slip44: number;
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries: {
                "linux/amd64": string;
                "darwin/amd64": string;
                "windows/amd64"?: undefined;
                "linux/arm64"?: undefined;
                "darwin/arm64"?: undefined;
                "windows/arm64"?: undefined;
                "linux/armv6"?: undefined;
            };
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
                provider: string;
            }[];
            persistent_peers: {
                id: string;
                address: string;
            }[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc: {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        key_algos?: undefined;
        fees?: undefined;
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        key_algos: string[];
        slip44: number;
        fees: {
            fee_tokens: {
                denom: string;
                fixed_min_gas_price: number;
            }[];
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries: {
                "linux/amd64": string;
                "linux/arm64": string;
                "darwin/amd64"?: undefined;
                "windows/amd64"?: undefined;
                "darwin/arm64"?: undefined;
                "windows/arm64"?: undefined;
                "linux/armv6"?: undefined;
            };
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
                provider: string;
            }[];
            persistent_peers: {
                id: string;
                address: string;
                provider: string;
            }[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc?: undefined;
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries?: undefined;
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
                provider: string;
            }[];
            persistent_peers: ({
                id: string;
                address: string;
                provider?: undefined;
            } | {
                id: string;
                address: string;
                provider: string;
            })[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc: {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        slip44?: undefined;
        key_algos?: undefined;
        fees?: undefined;
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        slip44: number;
        fees: {
            fee_tokens: {
                denom: string;
                fixed_min_gas_price: number;
                low_gas_price: number;
                average_gas_price: number;
                high_gas_price: number;
            }[];
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries: {
                "linux/amd64": string;
                "darwin/amd64"?: undefined;
                "windows/amd64"?: undefined;
                "linux/arm64"?: undefined;
                "darwin/arm64"?: undefined;
                "windows/arm64"?: undefined;
                "linux/armv6"?: undefined;
            };
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
                provider: string;
            }[];
            persistent_peers: {
                id: string;
                address: string;
                provider: string;
            }[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc: {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: ({
            kind: string;
            url: string;
            tx_page: string;
            account_page?: undefined;
        } | {
            kind: string;
            url: string;
            tx_page: string;
            account_page: string;
        })[];
        key_algos?: undefined;
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries?: undefined;
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
            }[];
            persistent_peers: {
                id: string;
                address: string;
                provider: string;
            }[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc: {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        slip44?: undefined;
        key_algos?: undefined;
        fees?: undefined;
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        chain_id: string;
        pretty_name: string;
        status: string;
        network_type: string;
        bech32_prefix: string;
        genesis: {
            genesis_url: string;
        };
        daemon_name: string;
        node_home: string;
        key_algos: string[];
        slip44: number;
        fees: {
            fee_tokens: {
                denom: string;
                fixed_min_gas_price: number;
            }[];
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries: {
                "linux/amd64": string;
                "linux/arm64": string;
                "darwin/amd64": string;
                "windows/amd64": string;
                "darwin/arm64"?: undefined;
                "windows/arm64"?: undefined;
                "linux/armv6"?: undefined;
            };
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: ({
                id: string;
                address: string;
                provider: string;
            } | {
                id: string;
                address: string;
                provider?: undefined;
            })[];
            persistent_peers: ({
                id: string;
                address: string;
                provider?: undefined;
            } | {
                id: string;
                address: string;
                provider: string;
            })[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc: {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        key_algos: string[];
        slip44: number;
        fees: {
            fee_tokens: {
                denom: string;
                fixed_min_gas_price: number;
            }[];
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries: {
                "linux/amd64": string;
                "darwin/amd64": string;
                "windows/amd64"?: undefined;
                "linux/arm64"?: undefined;
                "darwin/arm64"?: undefined;
                "windows/arm64"?: undefined;
                "linux/armv6"?: undefined;
            };
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
                provider: string;
            }[];
            persistent_peers: {
                id: string;
                address: string;
                provider: string;
            }[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc: {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        slip44: number;
        fees: {
            fee_tokens: {
                denom: string;
            }[];
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries: {
                "linux/amd64": string;
                "linux/arm64": string;
                "darwin/amd64": string;
                "darwin/arm64": string;
                "windows/amd64": string;
                "windows/arm64"?: undefined;
                "linux/armv6"?: undefined;
            };
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
                provider: string;
            }[];
            persistent_peers: {
                id: string;
                address: string;
                provider: string;
            }[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc: {
                address: string;
                provider: string;
            }[];
            "evm-http-jsonrpc": {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        daemon_name?: undefined;
        key_algos?: undefined;
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        slip44: number;
        fees: {
            fee_tokens: {
                denom: string;
            }[];
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries: {
                "linux/amd64": string;
                "linux/arm64": string;
                "darwin/amd64": string;
                "darwin/arm64": string;
                "windows/amd64": string;
                "windows/arm64"?: undefined;
                "linux/armv6"?: undefined;
            };
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
                provider: string;
            }[];
            persistent_peers: {
                id: string;
                address: string;
                provider: string;
            }[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc: {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        daemon_name?: undefined;
        key_algos?: undefined;
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        genesis: {
            genesis_url: string;
        };
        key_algos: string[];
        slip44: number;
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries?: undefined;
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
                provider: string;
            }[];
            persistent_peers: {
                id: string;
                address: string;
                provider: string;
            }[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc: {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
            account_page: string;
        }[];
        daemon_name?: undefined;
        node_home?: undefined;
        fees?: undefined;
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        key_algos: string[];
        slip44: number;
        fees: {
            fee_tokens: {
                denom: string;
                fixed_min_gas_price: number;
            }[];
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries: {
                "linux/amd64": string;
                "linux/arm64": string;
                "darwin/amd64": string;
                "windows/amd64": string;
                "darwin/arm64"?: undefined;
                "windows/arm64"?: undefined;
                "linux/armv6"?: undefined;
            };
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
                provider: string;
            }[];
            persistent_peers?: undefined;
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc?: undefined;
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        key_algos: string[];
        slip44: number;
        fees: {
            fee_tokens: {
                denom: string;
            }[];
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries?: undefined;
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
            }[];
            persistent_peers: {
                id: string;
                address: string;
            }[];
        };
        apis: {
            rpc: ({
                address: string;
                provider?: undefined;
            } | {
                address: string;
                provider: string;
            })[];
            rest: ({
                address: string;
                provider?: undefined;
            } | {
                address: string;
                provider: string;
            })[];
            grpc: {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        key_algos: string[];
        slip44: number;
        fees: {
            fee_tokens: {
                denom: string;
            }[];
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries?: undefined;
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
                provider: string;
            }[];
            persistent_peers?: undefined;
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc: {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        slip44: number;
        fees: {
            fee_tokens: {
                denom: string;
            }[];
        };
        peers: {
            seeds: any[];
            persistent_peers: any[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc: {
                address: string;
                provider: string;
            }[];
            "evm-http-jsonrpc": {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: any[];
        logo_URIs: {
            png: string;
            svg: string;
        };
        codebase?: undefined;
        key_algos?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        slip44: number;
        genesis: {
            genesis_url: string;
        };
        fees: {
            fee_tokens: {
                denom: string;
                fixed_min_gas_price: number;
            }[];
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries?: undefined;
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        daemon_name: string;
        node_home: string;
        key_algos: string[];
        peers: {
            seeds: {
                id: string;
                address: string;
                provider: string;
            }[];
            persistent_peers?: undefined;
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc?: undefined;
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries: {
                "linux/amd64": string;
                "darwin/amd64": string;
                "windows/amd64"?: undefined;
                "linux/arm64"?: undefined;
                "darwin/arm64"?: undefined;
                "windows/arm64"?: undefined;
                "linux/armv6"?: undefined;
            };
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
                provider: string;
            }[];
            persistent_peers: {
                id: string;
                address: string;
                provider: string;
            }[];
        };
        apis: {
            rpc: ({
                address: string;
                provider?: undefined;
            } | {
                address: string;
                provider: string;
            })[];
            rest: ({
                address: string;
                provider?: undefined;
            } | {
                address: string;
                provider: string;
            })[];
            grpc?: undefined;
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        slip44?: undefined;
        key_algos?: undefined;
        fees?: undefined;
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        slip44: number;
        fees: {
            fee_tokens: {
                denom: string;
            }[];
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries?: undefined;
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            persistent_peers: ({
                id: string;
                address: string;
                provider: string;
            } | {
                id: string;
                address: string;
                provider?: undefined;
            })[];
            seeds?: undefined;
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc?: undefined;
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        key_algos?: undefined;
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        key_algos: string[];
        slip44: number;
        fees: {
            fee_tokens: {
                denom: string;
                fixed_min_gas_price: number;
            }[];
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries: {
                "linux/amd64": string;
                "linux/arm64": string;
                "darwin/amd64": string;
                "windows/arm64": string;
                "windows/amd64"?: undefined;
                "darwin/arm64"?: undefined;
                "linux/armv6"?: undefined;
            };
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
                provider: string;
            }[];
            persistent_peers: {
                id: string;
                address: string;
                provider: string;
            }[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc: {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        slip44: number;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries: {
                "linux/amd64": string;
                "darwin/amd64": string;
                "windows/amd64"?: undefined;
                "linux/arm64"?: undefined;
                "darwin/arm64"?: undefined;
                "windows/arm64"?: undefined;
                "linux/armv6"?: undefined;
            };
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
                provider: string;
            }[];
            persistent_peers: {
                id: string;
                address: string;
                provider: string;
            }[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc: any[];
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        key_algos?: undefined;
        fees?: undefined;
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        key_algos: string[];
        slip44: number;
        genesis: {
            genesis_url: string;
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries?: undefined;
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
            }[];
            persistent_peers: {
                id: string;
                address: string;
                provider: string;
            }[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc: {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        fees?: undefined;
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        slip44: number;
        genesis: {
            genesis_url: string;
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries?: undefined;
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        daemon_name: string;
        node_home: string;
        key_algos: string[];
        peers: {
            seeds: ({
                id: string;
                address: string;
                provider?: undefined;
            } | {
                id: string;
                address: string;
                provider: string;
            })[];
            persistent_peers: {
                id: string;
                address: string;
            }[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc: {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        fees?: undefined;
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        slip44: number;
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries?: undefined;
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
            }[];
            persistent_peers: {
                id: string;
                address: string;
            }[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc: {
                address: string;
                provider: string;
            }[];
            "evm-http-jsonrpc": {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        key_algos?: undefined;
        fees?: undefined;
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        key_algos: string[];
        slip44: number;
        fees: {
            fee_tokens: {
                denom: string;
                fixed_min_gas_price: number;
            }[];
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries?: undefined;
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
                provider: string;
            }[];
            persistent_peers: {
                id: string;
                address: string;
                provider: string;
            }[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc: {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        key_algos: string[];
        slip44: number;
        fees: {
            fee_tokens: {
                denom: string;
            }[];
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries: {
                "linux/amd64": string;
                "linux/arm64": string;
                "darwin/amd64": string;
                "darwin/arm64": string;
                "windows/amd64": string;
                "windows/arm64"?: undefined;
                "linux/armv6"?: undefined;
            };
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
                provider: string;
            }[];
            persistent_peers: {
                id: string;
                address: string;
                provider: string;
            }[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc: {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: ({
            kind: string;
            url: string;
            tx_page: string;
        } | {
            kind: string;
            url: string;
            tx_page?: undefined;
        })[];
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        key_algos: string[];
        slip44: number;
        fees: {
            fee_tokens: {
                denom: string;
                fixed_min_gas_price: number;
            }[];
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries?: undefined;
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
                provider: string;
            }[];
            persistent_peers: {
                id: string;
                address: string;
                provider: string;
            }[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc?: undefined;
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: ({
            kind: string;
            url: string;
            tx_page: string;
            account_page?: undefined;
        } | {
            kind: string;
            url: string;
            tx_page: string;
            account_page: string;
        })[];
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        genesis: {
            genesis_url: string;
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries?: undefined;
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        node_home?: undefined;
        slip44?: undefined;
        peers?: undefined;
        apis?: undefined;
        key_algos?: undefined;
        fees?: undefined;
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries: {
                "linux/amd64": string;
                "darwin/amd64"?: undefined;
                "windows/amd64"?: undefined;
                "linux/arm64"?: undefined;
                "darwin/arm64"?: undefined;
                "windows/arm64"?: undefined;
                "linux/armv6"?: undefined;
            };
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
            }[];
            persistent_peers: any[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc?: undefined;
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        slip44?: undefined;
        explorers?: undefined;
        key_algos?: undefined;
        fees?: undefined;
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        key_algos: string[];
        slip44: number;
        fees: {
            fee_tokens: {
                denom: string;
                fixed_min_gas_price: number;
            }[];
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: any[];
            binaries: {
                "linux/amd64": string;
                "linux/arm64": string;
                "darwin/amd64": string;
                "windows/amd64": string;
                "darwin/arm64"?: undefined;
                "windows/arm64"?: undefined;
                "linux/armv6"?: undefined;
            };
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
            }[];
            persistent_peers: {
                id: string;
                address: string;
                provider: string;
            }[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc?: undefined;
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        key_algos: string[];
        slip44: number;
        fees: {
            fee_tokens: {
                denom: string;
                fixed_min_gas_price: number;
            }[];
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            binaries: {
                "linux/amd64": string;
                "darwin/amd64"?: undefined;
                "windows/amd64"?: undefined;
                "linux/arm64"?: undefined;
                "darwin/arm64"?: undefined;
                "windows/arm64"?: undefined;
                "linux/armv6"?: undefined;
            };
            compatible_versions: string[];
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            persistent_peers: {
                id: string;
                address: string;
                provider: string;
            }[];
            seeds?: undefined;
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc?: undefined;
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        daemon_name: string;
        node_home: string;
        bech32_prefix: string;
        genesis: {
            genesis_url: string;
        };
        slip44: number;
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries?: undefined;
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
            }[];
            persistent_peers: {
                id: string;
                address: string;
            }[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc?: undefined;
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
            account_page: string;
        }[];
        key_algos?: undefined;
        fees?: undefined;
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        key_algos: string[];
        slip44: number;
        fees: {
            fee_tokens: {
                denom: string;
                fixed_min_gas_price: number;
            }[];
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries: {
                "linux/amd64": string;
                "darwin/amd64"?: undefined;
                "windows/amd64"?: undefined;
                "linux/arm64"?: undefined;
                "darwin/arm64"?: undefined;
                "windows/arm64"?: undefined;
                "linux/armv6"?: undefined;
            };
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
                provider: string;
            }[];
            persistent_peers: ({
                id: string;
                address: string;
                provider?: undefined;
            } | {
                id: string;
                address: string;
                provider: string;
            })[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc?: undefined;
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        updatelink: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        key_algos: string[];
        slip44: number;
        fees: {
            fee_tokens: {
                denom: string;
                fixed_min_gas_price: number;
                low_gas_price: number;
                average_gas_price: number;
                high_gas_price: number;
            }[];
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries: {
                "linux/amd64": string;
                "linux/arm64": string;
                "darwin/amd64"?: undefined;
                "windows/amd64"?: undefined;
                "darwin/arm64"?: undefined;
                "windows/arm64"?: undefined;
                "linux/armv6"?: undefined;
            };
            cosmos_sdk_version: string;
            tendermint_version: string;
            cosmwasm_version: string;
            cosmwasm_enabled: boolean;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
                provider: string;
            }[];
            persistent_peers: {
                id: string;
                address: string;
                provider: string;
            }[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc: {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: ({
            kind: string;
            url: string;
            tx_page: string;
            account_page: string;
        } | {
            kind: string;
            url: string;
            tx_page: string;
            account_page?: undefined;
        })[];
        logo_URIs: {
            png: string;
            svg?: undefined;
        };
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        key_algos: string[];
        slip44: number;
        fees: {
            fee_tokens: {
                denom: string;
                fixed_min_gas_price: number;
            }[];
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries: {
                "linux/amd64"?: undefined;
                "darwin/amd64"?: undefined;
                "windows/amd64"?: undefined;
                "linux/arm64"?: undefined;
                "darwin/arm64"?: undefined;
                "windows/arm64"?: undefined;
                "linux/armv6"?: undefined;
            };
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            persistent_peers: {
                id: string;
                address: string;
                provider: string;
            }[];
            seeds?: undefined;
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc?: undefined;
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        chain_id: string;
        pretty_name: string;
        status: string;
        network_type: string;
        bech32_prefix: string;
        genesis: {
            genesis_url: string;
        };
        daemon_name: string;
        node_home: string;
        key_algos: string[];
        slip44: number;
        fees: {
            fee_tokens: {
                denom: string;
                fixed_min_gas_price: number;
            }[];
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries: {
                "linux/amd64": string;
                "darwin/amd64"?: undefined;
                "windows/amd64"?: undefined;
                "linux/arm64"?: undefined;
                "darwin/arm64"?: undefined;
                "windows/arm64"?: undefined;
                "linux/armv6"?: undefined;
            };
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
            }[];
            persistent_peers: {
                id: string;
                address: string;
            }[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc: {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        key_algos: string[];
        slip44: number;
        fees: {
            fee_tokens: {
                denom: string;
                fixed_min_gas_price: number;
            }[];
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries: {
                "linux/amd64": string;
                "darwin/amd64": string;
                "windows/amd64"?: undefined;
                "linux/arm64"?: undefined;
                "darwin/arm64"?: undefined;
                "windows/arm64"?: undefined;
                "linux/armv6"?: undefined;
            };
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
                provider: string;
            }[];
            persistent_peers?: undefined;
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc: {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries?: undefined;
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: ({
                id: string;
                address: string;
                provider?: undefined;
            } | {
                id: string;
                address: string;
                provider: string;
            })[];
            persistent_peers: {
                id: string;
                address: string;
            }[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            grpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        slip44?: undefined;
        key_algos?: undefined;
        fees?: undefined;
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        slip44: number;
        genesis: {
            genesis_url: string;
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries?: undefined;
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        daemon_name: string;
        node_home: string;
        key_algos: string[];
        peers: {
            seeds: {
                id: string;
                address: string;
            }[];
            persistent_peers?: undefined;
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc?: undefined;
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        fees?: undefined;
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        key_algos: string[];
        slip44: number;
        fees: {
            fee_tokens: {
                denom: string;
                fixed_min_gas_price: number;
            }[];
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            binaries: {
                "linux/amd64": string;
                "darwin/amd64"?: undefined;
                "windows/amd64"?: undefined;
                "linux/arm64"?: undefined;
                "darwin/arm64"?: undefined;
                "windows/arm64"?: undefined;
                "linux/armv6"?: undefined;
            };
            compatible_versions: string[];
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
                provider: string;
            }[];
            persistent_peers?: undefined;
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            "grpc-web": {
                address: string;
                provider: string;
            }[];
            grpc?: undefined;
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        slip44: number;
        genesis: {
            genesis_url: string;
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries?: undefined;
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        daemon_name: string;
        node_home: string;
        key_algos: string[];
        peers: {
            seeds: {
                id: string;
                address: string;
            }[];
            persistent_peers: {
                id: string;
                address: string;
            }[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc: {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers?: undefined;
        fees?: undefined;
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        key_algos: string[];
        slip44: number;
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries: {
                "linux/amd64": string;
                "darwin/amd64": string;
                "windows/amd64": string;
                "linux/arm64"?: undefined;
                "darwin/arm64"?: undefined;
                "windows/arm64"?: undefined;
                "linux/armv6"?: undefined;
            };
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
                provider: string;
            }[];
            persistent_peers: {
                id: string;
                address: string;
                provider: string;
            }[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc?: undefined;
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        fees?: undefined;
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries: {
                "linux/amd64": string;
                "darwin/amd64"?: undefined;
                "windows/amd64"?: undefined;
                "linux/arm64"?: undefined;
                "darwin/arm64"?: undefined;
                "windows/arm64"?: undefined;
                "linux/armv6"?: undefined;
            };
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            persistent_peers: {
                id: string;
                address: string;
            }[];
            seeds?: undefined;
        };
        apis: {
            rpc: ({
                address: string;
                provider?: undefined;
            } | {
                address: string;
                provider: string;
            })[];
            grpc: ({
                address: string;
                provider?: undefined;
            } | {
                address: string;
                provider: string;
            })[];
            rest: ({
                address: string;
                provider?: undefined;
            } | {
                address: string;
                provider: string;
            })[];
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        slip44?: undefined;
        key_algos?: undefined;
        fees?: undefined;
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        key_algos: string[];
        slip44: number;
        fees: {
            fee_tokens: {
                denom: string;
            }[];
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries: {
                "linux/amd64": string;
                "linux/arm64": string;
                "darwin/amd64": string;
                "darwin/arm64": string;
                "windows/amd64": string;
                "windows/arm64"?: undefined;
                "linux/armv6"?: undefined;
            };
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: ({
                id: string;
                address: string;
                provider?: undefined;
            } | {
                id: string;
                address: string;
                provider: string;
            })[];
            persistent_peers: {
                id: string;
                address: string;
                provider: string;
            }[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc: {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        slip44: number;
        genesis: {
            genesis_url: string;
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries?: undefined;
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: ({
                id: string;
                address: string;
                provider?: undefined;
            } | {
                id: string;
                address: string;
                provider: string;
            })[];
            persistent_peers: ({
                id: string;
                address: string;
                provider: string;
            } | {
                id: string;
                address: string;
                provider?: undefined;
            })[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc: {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        key_algos?: undefined;
        fees?: undefined;
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        slip44: number;
        genesis: {
            genesis_url: string;
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries?: undefined;
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            persistent_peers: {
                id: string;
                address: string;
            }[];
            seeds?: undefined;
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc: {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        daemon_name?: undefined;
        node_home?: undefined;
        key_algos?: undefined;
        fees?: undefined;
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        daemon_name: string;
        node_home: string;
        bech32_prefix: string;
        genesis: {
            genesis_url: string;
        };
        slip44: number;
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries: {
                "linux/amd64": string;
                "darwin/amd64": string;
                "windows/amd64"?: undefined;
                "linux/arm64"?: undefined;
                "darwin/arm64"?: undefined;
                "windows/arm64"?: undefined;
                "linux/armv6"?: undefined;
            };
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
            }[];
            persistent_peers: {
                id: string;
                address: string;
            }[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc: {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        key_algos?: undefined;
        fees?: undefined;
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        daemon_name: string;
        node_home: string;
        bech32_prefix: string;
        genesis: {
            genesis_url: string;
        };
        slip44: number;
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries: {
                "linux/amd64": string;
                "darwin/amd64": string;
                "windows/amd64"?: undefined;
                "linux/arm64"?: undefined;
                "darwin/arm64"?: undefined;
                "windows/arm64"?: undefined;
                "linux/armv6"?: undefined;
            };
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
            }[];
            persistent_peers: {
                id: string;
                address: string;
            }[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc?: undefined;
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        key_algos?: undefined;
        fees?: undefined;
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        key_algos: string[];
        slip44: number;
        fees: {
            fee_tokens: {
                denom: string;
                fixed_min_gas_price: number;
            }[];
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries: {
                "linux/amd64": string;
                "linux/arm64": string;
                "darwin/amd64": string;
                "windows/amd64": string;
                "darwin/arm64"?: undefined;
                "windows/arm64"?: undefined;
                "linux/armv6"?: undefined;
            };
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
                provider: string;
            }[];
            persistent_peers: any[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc?: undefined;
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries?: undefined;
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc: {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        slip44?: undefined;
        peers?: undefined;
        key_algos?: undefined;
        fees?: undefined;
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        genesis: {
            genesis_url: string;
        };
        key_algos: string[];
        slip44: number;
        fees: {
            fee_tokens: {
                denom: string;
                fixed_min_gas_price: number;
                low_gas_price: number;
                average_gas_price: number;
                high_gas_price: number;
            }[];
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries?: undefined;
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
                provider: string;
            }[];
            persistent_peers: {
                id: string;
                address: string;
                provider: string;
            }[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc?: undefined;
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
            account_page: string;
        }[];
        logo_URIs: {
            png: string;
            svg?: undefined;
        };
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        slip44: number;
        genesis: {
            genesis_url: string;
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries?: undefined;
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: {
                id: string;
                address: string;
            }[];
            persistent_peers?: undefined;
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            sidechains_rpc: {
                address: string;
                provider: string;
            }[];
            grpc?: undefined;
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        key_algos?: undefined;
        fees?: undefined;
        logo_URIs?: undefined;
        updatelink?: undefined;
    } | {
        $schema: string;
        chain_name: string;
        status: string;
        network_type: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        daemon_name: string;
        node_home: string;
        slip44: number;
        genesis: {
            genesis_url: string;
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            binaries: {
                "darwin/amd64": string;
                "darwin/arm64": string;
                "linux/amd64": string;
                "linux/arm64": string;
                "linux/armv6": string;
                "windows/amd64"?: undefined;
                "windows/arm64"?: undefined;
            };
            cosmos_sdk_version?: undefined;
            tendermint_version?: undefined;
            cosmwasm_version?: undefined;
            cosmwasm_enabled?: undefined;
        };
        peers: {
            seeds: any[];
            persistent_peers: {
                id: string;
                address: string;
                provider: string;
            }[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc: {
                address: string;
                provider: string;
            }[];
            "evm-jsonrpc"?: undefined;
            "evm-http-jsonrpc"?: undefined;
            "grpc-web"?: undefined;
            sidechains_rpc?: undefined;
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
        }[];
        key_algos?: undefined;
        fees?: undefined;
        logo_URIs?: undefined;
        updatelink?: undefined;
    })[];
    ibc: ({
        $schema: string;
        "chain-1": {
            "chain-name": string;
            "client-id": string;
            "connection-id": string;
        };
        "chain-2": {
            "chain-name": string;
            "client-id": string;
            "connection-id": string;
        };
        channels: {
            "chain-1": {
                "channel-id": string;
                "port-id": string;
            };
            "chain-2": {
                "channel-id": string;
                "port-id": string;
            };
            ordering: string;
            version: string;
            tags: {};
        }[];
    } | {
        $schema: string;
        "chain-1": {
            "chain-name": string;
            "client-id": string;
            "connection-id": string;
        };
        "chain-2": {
            "chain-name": string;
            "client-id": string;
            "connection-id": string;
        };
        channels: {
            "chain-1": {
                "channel-id": string;
                "port-id": string;
            };
            "chain-2": {
                "channel-id": string;
                "port-id": string;
            };
            ordering: string;
            version: string;
        }[];
    } | {
        $schema: string;
        "chain-1": {
            "chain-name": string;
            "client-id": string;
            "connection-id": string;
        };
        "chain-2": {
            "chain-name": string;
            "client-id": string;
            "connection-id": string;
        };
        channels: {
            "chain-1": {
                "channel-id": string;
                "port-id": string;
            };
            "chain-2": {
                "channel-id": string;
                "port-id": string;
            };
            ordering: string;
            version: string;
            tags: {
                status: string;
                preferred: boolean;
            };
        }[];
    } | {
        $schema: string;
        "chain-1": {
            "chain-name": string;
            "client-id": string;
            "connection-id": string;
        };
        "chain-2": {
            "chain-name": string;
            "client-id": string;
            "connection-id": string;
        };
        channels: {
            "chain-1": {
                "channel-id": string;
                "port-id": string;
            };
            "chain-2": {
                "channel-id": string;
                "port-id": string;
            };
            ordering: string;
            version: string;
            tags: {
                status: string;
                preferred: boolean;
                dex: string;
            };
        }[];
    } | {
        $schema: string;
        "chain-1": {
            "chain-name": string;
            "client-id": string;
            "connection-id": string;
        };
        "chain-2": {
            "chain-name": string;
            "client-id": string;
            "connection-id": string;
        };
        channels: {
            "chain-1": {
                "channel-id": string;
                "port-id": string;
            };
            "chain-2": {
                "channel-id": string;
                "port-id": string;
            };
            ordering: string;
            version: string;
            tags: {
                status: string;
                preferred: boolean;
                properties: string;
            };
        }[];
    } | {
        $schema: string;
        "chain-1": {
            "chain-name": string;
            "client-id": string;
            "connection-id": string;
        };
        "chain-2": {
            "chain-name": string;
            "client-id": string;
            "connection-id": string;
        };
        channels: {
            "chain-1": {
                "channel-id": string;
                "port-id": string;
            };
            "chain-2": {
                "channel-id": string;
                "port-id": string;
            };
            ordering: string;
            version: string;
            tags: {
                status: string;
                preferred: boolean;
                dex: string;
                properties: string;
            };
        }[];
    })[];
    ibc_assets: ({
        chain: {
            "chain-name": string;
            "client-id": string;
            "connection-id": string;
            "channel-id": string;
            "port-id": string;
        };
        counterparty: {
            "chain-name": string;
            "client-id": string;
            "connection-id": string;
            "channel-id": string;
            "port-id": string;
        };
        assets: ({
            description: string;
            denom_units: {
                denom: string;
                exponent: number;
                aliases: string[];
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
        } | {
            denom_units: ({
                denom: string;
                exponent: number;
                aliases: string[];
            } | {
                denom: string;
                exponent: number;
                aliases?: undefined;
            })[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                png: string;
                svg: string;
            };
            coingecko_id: string;
            description?: undefined;
        })[];
    } | {
        chain: {
            "chain-name": string;
            "client-id": string;
            "connection-id": string;
            "channel-id": string;
            "port-id": string;
        };
        counterparty: {
            "chain-name": string;
            "client-id": string;
            "connection-id": string;
            "channel-id": string;
            "port-id": string;
        };
        assets: ({
            description: string;
            denom_units: ({
                denom: string;
                exponent: number;
                aliases: string[];
            } | {
                denom: string;
                exponent: number;
                aliases?: undefined;
            })[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                png: string;
                svg: string;
            };
            coingecko_id: string;
            type_asset?: undefined;
            address?: undefined;
        } | {
            description: string;
            denom_units: ({
                denom: string;
                exponent: number;
                aliases: string[];
            } | {
                denom: string;
                exponent: number;
                aliases?: undefined;
            })[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                png: string;
                svg?: undefined;
            };
            coingecko_id: string;
            type_asset?: undefined;
            address?: undefined;
        } | {
            description: string;
            denom_units: ({
                denom: string;
                exponent: number;
                aliases: string[];
            } | {
                denom: string;
                exponent: number;
                aliases?: undefined;
            })[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                svg: string;
                png?: undefined;
            };
            coingecko_id: string;
            type_asset?: undefined;
            address?: undefined;
        } | {
            description: string;
            type_asset: string;
            address: string;
            denom_units: ({
                denom: string;
                exponent: number;
                aliases: string[];
            } | {
                denom: string;
                exponent: number;
                aliases?: undefined;
            })[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                svg: string;
                png?: undefined;
            };
            coingecko_id: string;
        })[];
    } | {
        chain: {
            "chain-name": string;
            "client-id": string;
            "connection-id": string;
            "channel-id": string;
            "port-id": string;
        };
        counterparty: {
            "chain-name": string;
            "client-id": string;
            "connection-id": string;
            "channel-id": string;
            "port-id": string;
        };
        assets: ({
            description: string;
            denom_units: ({
                denom: string;
                exponent: number;
                aliases: string[];
            } | {
                denom: string;
                exponent: number;
                aliases?: undefined;
            })[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                png: string;
                svg: string;
            };
            type_asset: string;
            coingecko_id: string;
        } | {
            description: string;
            denom_units: ({
                denom: string;
                exponent: number;
                aliases: string[];
            } | {
                denom: string;
                exponent: number;
                aliases?: undefined;
            })[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                png: string;
                svg?: undefined;
            };
            type_asset?: undefined;
            coingecko_id?: undefined;
        })[];
    } | {
        chain: {
            "chain-name": string;
            "client-id": string;
            "connection-id": string;
            "channel-id": string;
            "port-id": string;
        };
        counterparty: {
            "chain-name": string;
            "client-id": string;
            "connection-id": string;
            "channel-id": string;
            "port-id": string;
        };
        assets: ({
            description: string;
            denom_units: ({
                denom: string;
                exponent: number;
                aliases: string[];
            } | {
                denom: string;
                exponent: number;
                aliases?: undefined;
            })[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                png: string;
                svg: string;
            };
            coingecko_id: string;
        } | {
            description: string;
            denom_units: ({
                denom: string;
                exponent: number;
                aliases: string[];
            } | {
                denom: string;
                exponent: number;
                aliases?: undefined;
            })[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                svg: string;
                png: string;
            };
            coingecko_id?: undefined;
        })[];
    })[];
};
export default _default;
export { assets, chains, ibc, ibc_assets };
