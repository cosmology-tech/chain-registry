import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'allora',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://allora.network',
  pretty_name: 'Allora',
  chain_type: 'cosmos',
  chain_id: 'allora-mainnet-1',
  bech32_prefix: 'allo',
  daemon_name: 'allorad',
  node_home: '$HOME/.allorad',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uallo',
        fixed_min_gas_price: 10,
        low_gas_price: 10,
        average_gas_price: 10,
        high_gas_price: 12
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uallo'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/allora-network/allora-chain',
    recommended_version: 'v0.8.0',
    compatible_versions: ['v0.8.0'],
    binaries: {
      "linux/amd64": 'https://github.com/allora-network/allora-chain/releases/download/v0.8.0/allorad_linux_amd64',
      "linux/arm64": 'https://github.com/allora-network/allora-chain/releases/download/v0.8.0/allorad_linux_arm64',
      "darwin/amd64": 'https://github.com/allora-network/allora-chain/releases/download/v0.8.0/allorad_darwin_amd64',
      "darwin/arm64": 'https://github.com/allora-network/allora-chain/releases/download/v0.8.0/allorad_darwin_arm64',
      "windows/amd64": 'https://github.com/allora-network/allora-chain/releases/download/v0.8.0/allorad_windows_amd64.exe',
      "windows/arm64": 'https://github.com/allora-network/allora-chain/releases/download/v0.8.0/allorad_windows_arm64.exe'
    },
    genesis: {
      genesis_url: 'https://github.com/allora-network/networks/blob/main/allora-mainnet-1/genesis.json'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/allora/images/allora.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/allora/images/allora.svg'
  },
  apis: {
    rpc: [{
        address: 'https://allora-rpc.mainnet.allora.network',
        provider: 'allora'
      }],
    rest: [{
        address: 'https://allora-api.mainnet.allora.network',
        provider: 'allora'
      }],
    grpc: [{
        address: 'allora-grpc.mainnet.allora.network:443',
        provider: 'allora'
      }]
  },
  explorers: [{
      kind: 'Allora Studio',
      url: 'https://explorer.allora.network',
      tx_page: 'https://explorer.allora.network/explorer/transactions/${txHash}',
      account_page: 'https://explorer.allora.network/profile/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/allora/images/allora.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/allora/images/allora.svg'
    }]
};
export default info;