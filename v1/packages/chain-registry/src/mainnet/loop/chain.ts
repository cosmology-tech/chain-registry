import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'loop',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.loop.fans/',
  pretty_name: 'Loop',
  chain_type: 'cosmos',
  chain_id: 'loop-1',
  bech32_prefix: 'loop',
  daemon_name: 'loopd',
  node_home: '$HOME/.loopchain',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'token',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0,
        high_gas_price: 0
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'upoa'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/LoopFans/loop-chain',
    genesis: {
      name: 'v1',
      genesis_url: 'https://github.com/LoopFans/loop-chain/blob/main/network/loop-1/genesis.json'
    },
    recommended_version: 'v1.0.0',
    compatible_versions: ['v1.0.0'],
    binaries: {
      "linux/amd64": 'https://github.com/LoopFans/loop-chain/releases/download/v1.0.0/loopchain_1.0.0_linux_amd64.tar.gz'
    },
    language: {
      type: 'go',
      version: '1.21'
    },
    ibc: {
      type: 'go',
      version: 'v7.3.1',
      ics_enabled: ['ics20-1']
    },
    cosmwasm: {
      enabled: true
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/loop.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/loop.svg',
      theme: {
        primary_color_hex: '#4991ee'
      }
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/loop.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loop/images/loop.svg'
  },
  description: 'Empowering Artists and Superfans.',
  apis: {
    rpc: [{
        address: 'https://rpc.loop.pfc.zone/',
        provider: 'PFC'
      }],
    rest: [{
        address: 'https://api.loop.pfc.zone/',
        provider: 'PFC'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://ping.pfc.zone/loop',
      tx_page: 'https://ping.pfc.zone/loop/tx/${txHash}'
    }],
  keywords: ['fans']
};
export default info;