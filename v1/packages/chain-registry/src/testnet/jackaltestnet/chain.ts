import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'jackaltestnet',
  chain_type: 'cosmos',
  chain_id: 'canine-1',
  website: 'https://jackalprotocol.com',
  pretty_name: 'Jackal',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'jkl',
  daemon_name: 'canined',
  node_home: '$HOME/.canine',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ujkl',
        fixed_min_gas_price: 0
      }]
  },
  codebase: {
    git_repo: 'https://github.com/JackalLabs/canine-chain',
    recommended_version: 'v1.2.2-alpha.1',
    compatible_versions: ['v1.2.2-alpha.1'],
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/JackalLabs/woof/master/genesis/woof-final.json'
    },
    binaries: {
      "linux/amd64": 'https://github.com/JackalLabs/canine-chain/releases/download/v1.2.2-alpha.1/canined-Linux',
      "darwin/amd64": 'https://github.com/JackalLabs/canine-chain/releases/download/v1.2.2-alpha.1/canined-macOS'
    }
  },
  apis: {
    rpc: [{
        address: 'http://jkl.rpc.t.stavr.tech:19127',
        provider: '🔥STAVR🔥'
      }, {
        address: 'https://testnet-rpc.jackalprotocol.com',
        provider: 'Jackal Labs'
      }],
    rest: [{
        address: 'https://jkl.api.t.stavr.tech',
        provider: '🔥STAVR🔥'
      }, {
        address: 'https://testnet-api.jackalprotocol.com',
        provider: 'Jackal Labs'
      }],
    grpc: [{
        address: 'http://jkl.grpc.t.stavr.tech:5913',
        provider: '🔥STAVR🔥'
      }, {
        address: 'https://testnet-grpc.jackalprotocol.com',
        provider: 'Jackal Labs'
      }]
  },
  explorers: [{
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Jackal-Testnet',
      tx_page: 'https://explorer.stavr.tech/Jackal-Testnet/tx/${txHash}',
      account_page: 'https://explorer.stavr.tech/Jackal-Testnet/account/${accountAddress}'
    }, {
      kind: 'ping.pub',
      url: 'https://testnet.ping.pub/jackal',
      tx_page: 'https://testnet.ping.pub/jackal/tx/${txHash}'
    }]
};
export default info;