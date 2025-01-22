import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'zenrocktestnet',
  status: 'live',
  website: 'https://zenrocklabs.io',
  network_type: 'testnet',
  chain_type: 'cosmos',
  pretty_name: 'Zenrock Gardia Testnet',
  chain_id: 'gardia-3',
  bech32_prefix: 'zen',
  daemon_name: 'zenrockd',
  node_home: '$HOME/.zenrockd',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'urock',
        fixed_min_gas_price: 0.5,
        low_gas_price: 0.5,
        average_gas_price: 0.55,
        high_gas_price: 0.6
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'urock'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/zenrock-foundation/zrchain',
    genesis: {
      genesis_url: 'https://rpc.gardia.zenrocklabs.io/genesis'
    },
    recommended_version: '5.3.8',
    compatible_versions: ['5.3.8'],
    binaries: {
      "linux/arm64": 'https://github.com/zenrocklabs/zrchain/releases/download/v5.3.8/zenrockd'
    },
    consensus: {
      type: 'cometbft',
      version: '0.38'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/zenrocklabs/cosmos-sdk',
      version: 'v0.50.10',
      tag: 'v0.50.10-zenrock'
    },
    cosmwasm: {
      version: 'v0.53.0',
      enabled: true
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zenrocktestnet/images/zenrock.png'
    }],
  apis: {
    rpc: [{
        address: 'https://rpc.gardia.zenrocklabs.io/',
        provider: 'zenrock'
      }],
    rest: [{
        address: 'https://api.gardia.zenrocklabs.io/',
        provider: 'zenrock'
      }],
    grpc: [{
        address: 'https://grpc.gardia.zenrocklabs.io/',
        provider: 'zenrock'
      }]
  },
  explorers: [{
      kind: 'Big Dipper',
      url: 'https://explorer.gardia.zenrocklabs.io/',
      tx_page: 'https://explorer.gardia.zenrocklabs.io/tx/${txHash}',
      account_page: 'https://explorer.gardia.zenrocklabs.io/account/${accountAddress}'
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zenrocktestnet/images/zenrock.png'
  },
  keywords: ['mpc', 'testnet']
};
export default info;