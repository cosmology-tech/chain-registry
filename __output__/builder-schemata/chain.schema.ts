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
    cosmosSdkVersion?: string;
    cosmwasmVersion?: string;
    cosmwasmEnabled?: boolean;
    ibcGoVersion?: string;
    icsEnabled?: ("ics20-1" | "ics27-1" | "mauth")[];
  };
  images?: {
    png?: string;
    svg?: string;
    theme?: {
      circle?: boolean;
      primaryColorHex?: string;
      darkMode?: boolean;
    };
    layout?: "logo" | "logomark" | "logotype";
    imageSync?: Pointer;
    textPosition?: "top" | "bottom" | "left" | "right" | "integrated";
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
  chainId: string;
  preForkChainName?: string;
  prettyName?: string;
  networkType?: "mainnet" | "testnet" | "devnet";
  bech32Prefix: string;
  nodeHome?: string;
  keyAlgos?: ("secp256k1" | "ethsecp256k1" | "ed25519" | "sr25519" | "bn254")[];
  extraCodecs?: ("ethermint" | "injective")[];
}