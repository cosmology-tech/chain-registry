export interface Peer {
  id: string;
  address: string;
  provider?: string;
}
export interface Endpoint {
  address: string;
}
export interface Explorer {
  kind?: string;
  url?: string;
  txPage?: string;
  accountPage?: string;
  validatorPage?: string;
  proposalPage?: string;
  blockPage?: string;
}
export type Repo = string;
export type Version = string;
export type Tag = string;
export interface Sdk {
  type: "cosmos" | "penumbra" | "other";
  version?: Version;
  repo?: Repo;
  tag?: Tag;
}
export interface Ibc {
  type: "go" | "rust" | "other";
  version?: Version;
  repo?: Repo;
  tag?: Tag;
  icsEnabled?: ("ics20-1" | "ics27-1" | "mauth")[];
}
export interface Cosmwasm {
  version?: Version;
  repo?: Repo;
  tag?: Tag;
  enabled?: boolean;
  path?: string;
}
export interface Consensus {
  type: "tendermint" | "cometbft" | "sei-tendermint";
  version?: Version;
  repo?: Repo;
  tag?: Tag;
}
export interface Language {
  type: "go" | "rust" | "solidity" | "other";
  version?: Version;
  repo?: Repo;
  tag?: Tag;
}
export interface Binaries {
  "linux/amd64"?: string;
  "linux/arm64"?: string;
  "darwin/amd64"?: string;
  "darwin/arm64"?: string;
  "windows/amd64"?: string;
  "windows/arm64"?: string;
}
export interface Pointer {
  chainName: string;
  baseDenom?: string;
}
export interface FeeToken {
  denom: string;
  fixedMinGasPrice?: number;
  lowGasPrice?: number;
  averageGasPrice?: number;
  highGasPrice?: number;
  gasCosts?: {
    cosmosSend?: number;
    ibcTransfer?: number;
  };
}
export interface StakingToken {
  denom: string;
}
export interface Chain {
  $schema?: string;
  website?: string;
  slip44?: number;
  fees?: {
    feeTokens: FeeToken[];
  };
  staking?: {
    stakingTokens: StakingToken[];
    lockDuration?: {
      blocks?: number;
      time?: string;
    };
  };
  codebase?: {
    language?: Language;
    sdk?: Sdk;
    cosmwasm?: Cosmwasm;
    ibc?: Ibc;
    cosmosSdkVersion?: string;
    cosmwasmVersion?: string;
    cosmwasmEnabled?: boolean;
  };
  images?: {
    png?: string;
    svg?: string;
    theme?: {
      circle?: boolean;
      monochrome?: boolean;
      primaryColorHex?: string;
      backgroundColorHex?: string;
      darkMode?: boolean;
    };
    imageSync?: Pointer;
  }[];
  description?: string;
  apis?: {
    rpc?: Endpoint[];
    rest?: Endpoint[];
    grpc?: Endpoint[];
    wss?: Endpoint[];
    grpcWeb?: Endpoint[];
    evmHttpJsonrpc?: Endpoint[];
  };
  explorers?: Explorer[];
  keywords?: string[];
  chainName: string;
  chainType: "cosmos" | "eip155" | "bip122" | "polkadot" | "solana" | "algorand" | "arweave" | "ergo" | "fil" | "hedera" | "monero" | "reef" | "stacks" | "starknet" | "stellar" | "tezos" | "vechain" | "waves" | "xrpl" | "unknown";
  chainId?: string;
  preForkChainName?: string;
  prettyName?: string;
  networkType?: "mainnet" | "testnet" | "devnet";
  bech32Prefix?: string;
  nodeHome?: string;
  keyAlgos?: ("secp256k1" | "ethsecp256k1" | "ed25519" | "sr25519" | "bn254")[];
  extraCodecs?: ("ethermint" | "injective")[];
}