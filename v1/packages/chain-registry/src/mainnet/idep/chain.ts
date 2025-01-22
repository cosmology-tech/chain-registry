import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'idep',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.idep.network/',
  pretty_name: 'IDEP',
  chain_type: 'cosmos',
  chain_id: 'Antora',
  bech32_prefix: 'idep',
  daemon_name: 'idep',
  node_home: '$HOME/.ion',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'idep',
        fixed_min_gas_price: 0
      }]
  },
  codebase: {
    git_repo: 'https://github.com/IDEP-network/ion',
    recommended_version: 'v1.0.0',
    compatible_versions: ['v1.0.0'],
    binaries: {
      "linux/amd64": 'https://github.com/IDEP-network/Antora/raw/main/iond'
    },
    genesis: {
      genesis_url: 'https://github.com/IDEP-network/Antora/raw/main/genesis.json'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.svg'
  },
  apis: {
    rpc: [],
    rest: [],
    grpc: [{
        address: 'idep.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      }]
  },
  explorers: [
    {
      kind: 'chadscan',
      url: 'https://chadscan.com',
      tx_page: 'https://chadscan.com/transactions/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/idep',
      tx_page: 'https://atomscan.com/idep/transactions/${txHash}',
      account_page: 'https://atomscan.com/idep/accounts/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/idep',
      tx_page: 'https://explorer.tcnetwork.io/idep/transaction/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.svg',
      theme: {
        primary_color_hex: '#c5b4cf'
      }
    }]
};
export default info;