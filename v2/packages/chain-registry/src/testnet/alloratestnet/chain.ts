import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'alloratestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://allora.network',
  prettyName: 'Allora Testnet',
  chainType: 'cosmos',
  chainId: 'allora-testnet-1',
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
      genesisUrl: 'https://github.com/allora-network/networks/blob/main/allora-testnet-1/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/allora/images/allora.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/allora/images/allora.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://allora-rpc.testnet.allora.network',
        provider: 'allora'
      },
      {
        address: 'https://rpc.ankr.com/allora_testnet',
        provider: 'ankr'
      },
      {
        address: 'https://allora-testnet-rpc.polkachu.com',
        provider: 'polkachu'
      },
      {
        address: 'https://allora-rpc.sh.moonlet.cloud/public',
        provider: 'moonlet'
      }
    ],
    rest: [
      {
        address: 'https://allora-api.testnet.allora.network',
        provider: 'allora'
      },
      {
        address: 'https://allora-testnet-api.polkachu.com',
        provider: 'polkachu'
      },
      {
        address: 'https://testnet-allora-api.lavenderfive.com',
        provider: 'lavenderfive'
      },
      {
        address: 'https://rpc.ankr.com/http/allora_testnet',
        provider: 'ankr'
      }
    ],
    grpc: [{
        address: 'allora-grpc.testnet.allora.network:443',
        provider: 'allora'
      }, {
        address: 'allora-testnet-grpc.polkachu.com:26790',
        provider: 'polkachu'
      }]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://explorer.testnet.allora.network',
      txPage: 'https://explorer.testnet.allora.network/allora-testnet-1/tx/${txHash}',
      accountPage: 'https://explorer.testnet.allora.network/allora-testnet-1/account/${accountAddress}'
    },
    {
      kind: 'Allora Studio',
      url: 'https://explorer.testnet-1.allora.network',
      txPage: 'https://explorer.testnet-1.allora.network/explorer/transactions/${txHash}',
      accountPage: 'https://explorer.testnet-1.allora.network/profile/${accountAddress}'
    },
    {
      kind: 'Moonlet',
      url: 'https://explorer.moonlet.cloud/allora',
      txPage: 'https://explorer.moonlet.cloud/allora/tx/${txHash}',
      accountPage: 'https://explorer.moonlet.cloud/allora/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/allora/images/allora.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/allora/images/allora.svg'
    }]
};
export default info;