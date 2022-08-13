export interface Chain {
  $schema: string;
  chain_name: string;
  status: string;
  network_type: string;
  pretty_name: string;
  chain_id: string;
  bech32_prefix: string;
  daemon_name?: string;
  node_home?: string;
  genesis?: {
    genesis_url: string;
  };
  slip44: number;
  explorers: {
    kind: string;
    url: string;
    tx_page: string;
  }[];
  codebase?: {
    git_repo: string;
    recommended_version: string;
    compatible_versions: string[];
  };
  peers?: {
    seeds: any[];
    persistent_peers: {
      id: string;
      address: string;
    }[];
  };
  apis?: {
    rpc: {
      address: string;
      provider?: string;
    }[];
    rest: {
      address: string;
      provider?: string;
    }[];
    grpc: {
      address: string;
      provider?: string;
    }[];
  };
}

export type Chains = Chain[];
