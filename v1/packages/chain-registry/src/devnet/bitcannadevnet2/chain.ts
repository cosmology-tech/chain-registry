import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'bitcannadevnet2',
  status: 'live',
  network_type: 'devnet',
  pretty_name: 'BitCanna Devnet-6 SDK v0.46.x',
  chain_type: 'cosmos',
  chain_id: 'bitcanna-dev-6',
  bech32_prefix: 'bcna',
  daemon_name: 'bcnad',
  node_home: '$HOME/.bcna',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ubcna',
        fixed_min_gas_price: 0.001
      }]
  },
  codebase: {
    git_repo: 'https://github.com/BitCannaGlobal/bcna',
    recommended_version: 'v2.0.0-beta',
    compatible_versions: ['v2.0.0-beta'],
    binaries: {
      "linux/amd64": 'https://github.com/BitCannaGlobal/bcna/releases/download/v2.0.0-beta/bcna_linux_amd64.tar.gz'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/BitCannaGlobal/testnet-bcna-cosmos/main/instructions/bitcanna-dev-6/genesis.json'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc-devnet-6.bitcanna.io/',
        provider: 'bitcanna'
      }],
    grpc: [{
        address: 'http://devnet-6.bitcanna.io:9090',
        provider: 'bitcanna'
      }],
    rest: [{
        address: 'https://lcd-devnet-6.bitcanna.io/',
        provider: 'bitcanna'
      }]
  },
  explorers: [{
      url: 'https://explorer-devnet-6.bitcanna.io',
      tx_page: 'https://explorer-devnet-6.bitcanna.io/tx/${txHash}'
    }]
};
export default info;