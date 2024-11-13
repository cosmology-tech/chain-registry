export interface Peer {
  id: string;
  address: string;
  provider?: string;
}
export interface Endpoint {
  address: string;
  provider?: string;
  archive?: boolean;
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
export interface Chain {
  schema?: string;
  chainName: string;
  chainType: "cosmos" | "eip155" | "bip122" | "polkadot" | "solana" | "algorand" | "arweave" | "ergo" | "fil" | "hedera" | "monero" | "reef" | "stacks" | "starknet" | "stellar" | "tezos" | "vechain" | "waves" | "xrpl" | "unknown";
  chainId?: string;
  preForkChainName?: string;
  prettyName?: string;
  website?: string;
  status?: "live" | "upcoming" | "killed";
  networkType?: "mainnet" | "testnet" | "devnet";
  bech32Prefix?: string;
  bech32Config?: {
    bech32PrefixAccAddr?: string;
    bech32PrefixAccPub?: string;
    bech32PrefixValAddr?: string;
    bech32PrefixValPub?: string;
    bech32PrefixConsAddr?: string;
    bech32PrefixConsPub?: string;
  };
  daemonName?: string;
  nodeHome?: string;
  keyAlgos?: ("secp256k1" | "ethsecp256k1" | "ed25519" | "sr25519" | "bn254")[];
  slip44?: number;
  alternativeSlip44s?: number[];
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
    gitRepo?: string;
    recommendedVersion?: string;
    compatibleVersions?: string[];
    language?: Language;
    binaries?: Binaries;
    sdk?: Sdk;
    consensus?: Consensus;
    cosmwasm?: Cosmwasm;
    ibc?: Ibc;
    genesis?: {
      name?: string;
      genesisUrl: string;
      icsCcvUrl?: string;
    };
    versions?: {
      name: string;
      tag?: string;
      height?: number;
      proposal?: number;
      previousVersionName?: string;
      nextVersionName?: string;
      recommendedVersion?: string;
      compatibleVersions?: string[];
      language?: Language;
      sdk?: Sdk;
      consensus?: Consensus;
      cosmwasm?: Cosmwasm;
      ibc?: Ibc;
      binaries?: Binaries;
    }[];
  };
  images?: {
    imageSync?: Pointer;
    png?: string;
    svg?: string;
    theme?: {
      primaryColorHex?: string;
      backgroundColorHex?: string;
      circle?: boolean;
      darkMode?: boolean;
      monochrome?: boolean;
    };
  }[];
  logoURIs?: {
    png?: string;
    svg?: string;
  };
  description?: string;
  peers?: {
    seeds?: Peer[];
    persistentPeers?: Peer[];
  };
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
  extraCodecs?: ("ethermint" | "injective")[];
}