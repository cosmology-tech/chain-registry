import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'allora',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://allora.network',
  prettyName: 'Allora',
  chainType: 'cosmos',
  chainId: 'allora-mainnet-1',
  bech32Prefix: 'allo',
  daemonName: 'allorad',
  nodeHome: '$HOME/.allorad',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uallo',
        fixedMinGasPrice: 10,
        lowGasPrice: 10,
        averageGasPrice: 10,
        highGasPrice: 12
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uallo'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/allora-network/allora-chain',
    recommendedVersion: 'v0.8.0',
    compatibleVersions: ['v0.8.0'],
    binaries: {
      "linux/amd64": 'https://github.com/allora-network/allora-chain/releases/download/v0.8.0/allorad_linux_amd64',
      "linux/arm64": 'https://github.com/allora-network/allora-chain/releases/download/v0.8.0/allorad_linux_arm64',
      "darwin/amd64": 'https://github.com/allora-network/allora-chain/releases/download/v0.8.0/allorad_darwin_amd64',
      "darwin/arm64": 'https://github.com/allora-network/allora-chain/releases/download/v0.8.0/allorad_darwin_arm64',
      "windows/amd64": 'https://github.com/allora-network/allora-chain/releases/download/v0.8.0/allorad_windows_amd64.exe',
      "windows/arm64": 'https://github.com/allora-network/allora-chain/releases/download/v0.8.0/allorad_windows_arm64.exe'
    },
    genesis: {
      genesisUrl: 'https://github.com/allora-network/networks/blob/main/allora-mainnet-1/genesis.json'
    }
  },
  logoURIs: {
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
      txPage: 'https://explorer.allora.network/explorer/transactions/${txHash}',
      accountPage: 'https://explorer.allora.network/profile/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/allora/images/allora.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/allora/images/allora.svg'
    }]
};
export default info;