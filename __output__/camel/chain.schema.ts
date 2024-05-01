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
export interface Pointer {
  chainName: string;
  baseDenom?: string;
}
export interface Chain {
  schema?: string;
  chainName: string;
  chainId: string;
  preForkChainName?: string;
  prettyName?: string;
  website?: string;
  updateLink?: string;
  status?: "live" | "upcoming" | "killed";
  networkType?: "mainnet" | "testnet" | "devnet";
  bech32Prefix: string;
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
    goVersion?: string;
    compatibleVersions?: string[];
    binaries?: {
      "linux/amd64"?: string;
      "linux/arm64"?: string;
      "darwin/amd64"?: string;
      "darwin/arm64"?: string;
      "windows/amd64"?: string;
      "windows/arm64"?: string;
    };
    cosmosSdkVersion?: string;
    consensus?: {
      type: "tendermint" | "cometbft" | "sei-tendermint";
      version?: string;
    };
    cosmwasmVersion?: string;
    cosmwasmEnabled?: boolean;
    cosmwasmPath?: string;
    ibcGoVersion?: string;
    icsEnabled?: ("ics20-1" | "ics27-1" | "mauth")[];
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
      goVersion?: string;
      compatibleVersions?: string[];
      cosmosSdkVersion?: string;
      consensus?: {
        type: "tendermint" | "cometbft" | "sei-tendermint";
        version?: string;
      };
      cosmwasmVersion?: string;
      cosmwasmEnabled?: boolean;
      cosmwasmPath?: string;
      ibcGoVersion?: string;
      icsEnabled?: ("ics20-1" | "ics27-1" | "mauth")[];
      binaries?: {
        "linux/amd64"?: string;
        "linux/arm64"?: string;
        "darwin/amd64"?: string;
        "darwin/arm64"?: string;
        "windows/amd64"?: string;
        "windows/arm64"?: string;
      };
    }[];
  };
  images?: {
    imageSync?: Pointer;
    png?: string;
    svg?: string;
    theme?: {
      primaryColorHex?: string;
      circle?: boolean;
      darkMode?: boolean;
    };
    layout?: "logo" | "logomark" | "logotype";
    textPosition?: "top" | "bottom" | "left" | "right" | "integrated";
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