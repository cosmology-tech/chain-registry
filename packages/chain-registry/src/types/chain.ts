// https://app.quicktype.io/

export interface Chain {
    $schema: string;
    chain_name: string;
    status: Status;
    network_type: NetworkType;
    pretty_name: string;
    chain_id: string;
    bech32_prefix: string;
    daemon_name?: string;
    node_home?: string;
    genesis: Genesis;
    slip44?: number;
    explorers?: Explorer[];
    codebase?: Codebase;
    peers?: Peers;
    apis?: Apis;
    key_algos?: KeyAlgo[];
    fees?: Fees;
    logo_URIs?: LogoURIs;
    updatelink?: string;
}

export interface Apis {
    rpc: HTTPJsonrpc[];
    rest: HTTPJsonrpc[];
    grpc?: HTTPJsonrpc[];
    "evm-jsonrpc"?: HTTPJsonrpc[];
    "evm-http-jsonrpc"?: HTTPJsonrpc[];
    "grpc-web"?: HTTPJsonrpc[];
    sidechains_rpc?: HTTPJsonrpc[];
}

export interface HTTPJsonrpc {
    address: string;
    provider?: string;
}

export interface Codebase {
    git_repo: string;
    recommended_version: string;
    compatible_versions: string[];
    binaries?: Binaries;
    cosmos_sdk_version?: string;
    tendermint_version?: string;
    cosmwasm_version?: string;
    cosmwasm_enabled?: boolean;
}

export interface Binaries {
    "linux/amd64"?: string;
    "darwin/amd64"?: string;
    "windows/amd64"?: string;
    "linux/arm64"?: string;
    "darwin/arm64"?: string;
    "windows/arm64"?: string;
    "linux/armv6"?: string;
}

export interface Explorer {
    kind: string;
    url: string;
    tx_page?: string;
    account_page?: string;
}

export interface Fees {
    fee_tokens: FeeToken[];
}

export interface FeeToken {
    denom: string;
    fixed_min_gas_price?: number;
    low_gas_price?: number;
    average_gas_price?: number;
    high_gas_price?: number;
}

export interface Genesis {
    genesis_url: string;
}

export enum KeyAlgo {
    Ed25519 = "ed25519",
    Ethsecp256K1 = "ethsecp256k1",
    Secp256K1 = "secp256k1",
}

export interface LogoURIs {
    png: string;
    svg?: string;
}

export enum NetworkType {
    Mainnet = "mainnet",
    Testnet = "testnet",
}

export interface Peers {
    seeds?: PersistentPeer[];
    persistent_peers?: PersistentPeer[];
}

export interface PersistentPeer {
    id: string;
    address: string;
    provider?: string;
}

export enum Status {
    Live = "live",
}
