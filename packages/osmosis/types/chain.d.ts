declare const _exports: {
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
  explorers: {
    kind: string;
    url: string;
    tx_page: string;
  }[];
  codebase: {
    git_repo: string;
    recommended_version: string;
    compatible_versions: string[];
  };
  peers: {
    seeds: any[];
    persistent_peers: {
      id: string;
      address: string;
    }[];
  };
  apis: {
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
};
export = _exports;
