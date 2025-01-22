import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'unificationtestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://unification.com/',
  pretty_name: 'Unification Testnet',
  chain_type: 'cosmos',
  chain_id: 'FUND-TestNet-2',
  bech32_prefix: 'und',
  daemon_name: 'und',
  node_home: '$HOME/.und_mainchain',
  key_algos: ['secp256k1'],
  slip44: 5555,
  fees: {
    fee_tokens: [{
        denom: 'nund',
        fixed_min_gas_price: 25,
        low_gas_price: 100,
        average_gas_price: 200,
        high_gas_price: 300
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'nund'
      }],
    lock_duration: {
      time: '1814400s'
    }
  },
  codebase: {
    git_repo: 'https://github.com/unification-com/mainchain',
    recommended_version: 'v1.10.1',
    compatible_versions: ['v1.10.0', 'v1.10.1'],
    binaries: {
      "linux/amd64": 'https://github.com/unification-com/mainchain/releases/download/v1.10.1/und_v1.10.1_linux_x86_64.tar.gz',
      "darwin/amd64": 'https://github.com/unification-com/mainchain/releases/download/v1.10.1/und_v1.10.1_darwin_x86_64.tar.gz',
      "windows/amd64": 'https://github.com/unification-com/mainchain/releases/download/v1.10.1/und_v1.10.1_windows_x86_64.tar.gz'
    },
    consensus: {
      type: 'cometbft',
      version: '0.37.5'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/unification-com/mainnet/master/latest/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.47.13'
    },
    ibc: {
      type: 'go',
      version: '7.7.0'
    },
    cosmwasm: {
      enabled: false
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg',
      theme: {
        primary_color_hex: '#2279c0'
      }
    }],
  apis: {
    rpc: [{
        address: 'https://rpc-testnet.unification.io:443',
        provider: 'Unification'
      }],
    rest: [{
        address: 'https://rest-testnet.unification.io',
        provider: 'Unification'
      }],
    wss: [{
        address: 'wss://wss-testnet.unification.io',
        provider: 'Unification'
      }],
    grpc: [{
        address: 'grpc-testnet.unification.io:443',
        provider: 'Unification'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://explorer-testnet.unification.io/u',
      tx_page: 'https://explorer-testnet.unification.io/u/tx/${txHash}',
      account_page: 'https://explorer-testnet.unification.io/u/account/${accountAddress}'
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg'
  }
};
export default info;