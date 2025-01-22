import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'zenrock',
  status: 'live',
  website: 'https://zenrocklabs.io',
  network_type: 'mainnet',
  chain_type: 'cosmos',
  pretty_name: 'Zenrock Mainnet',
  chain_id: 'diamond-1',
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
      genesis_url: 'https://rpc.diamond.zenrocklabs.io/genesis'
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
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zenrock/images/zenrock.png'
    }],
  apis: {
    rpc: [{
        address: 'https://rpc.diamond.zenrocklabs.io/',
        provider: 'zenrock'
      }, {
        address: 'https://rpc.zenrock.nodestake.org',
        provider: 'NodeStake'
      }],
    rest: [{
        address: 'https://api.diamond.zenrocklabs.io/',
        provider: 'zenrock'
      }, {
        address: 'https://api.zenrock.nodestake.org',
        provider: 'NodeStake'
      }],
    grpc: [{
        address: 'https://grpc.diamond.zenrocklabs.io/',
        provider: 'zenrock'
      }, {
        address: 'https://grpc.zenrock.nodestake.org',
        provider: 'NodeStake'
      }]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zenrock/images/zenrock.png'
  },
  keywords: ['mpc']
};
export default info;