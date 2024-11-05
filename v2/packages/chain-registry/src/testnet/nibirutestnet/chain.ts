import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'nibirutestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://nibiru.fi/',
  prettyName: 'Nibiru Testnet 1',
  chainType: 'cosmos',
  chainId: 'nibiru-testnet-1',
  bech32Prefix: 'nibi',
  daemonName: 'nibid',
  nodeHome: '$HOME/.nibid',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'unibi',
        fixedMinGasPrice: 0.025,
        lowGasPrice: 0.025,
        averageGasPrice: 0.05,
        highGasPrice: 0.1
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'unibi'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/NibiruChain/nibiru',
    recommendedVersion: 'v1.0.1',
    compatibleVersions: ['v1.0.1'],
    binaries: {
      "linux/amd64": 'https://github.com/NibiruChain/nibiru/releases/download/v1.0.1/nibid_1.0.1_linux_amd64.tar.gz',
      "linux/arm64": 'https://github.com/NibiruChain/nibiru/releases/download/v1.0.1/nibid_1.0.1_linux_arm64.tar.gz',
      "darwin/amd64": 'https://github.com/NibiruChain/nibiru/releases/download/v1.0.1/nibid_1.0.1_darwin_amd64.tar.gz',
      "darwin/arm64": 'https://github.com/NibiruChain/nibiru/releases/download/v1.0.1/nibid_1.0.1_darwin_arm64.tar.gz'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.37.4'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/NibiruChain/Networks/main/Testnet/nibiru-testnet-1/genesis.json'
    },
    versions: [{
        name: 'v1.0.0',
        recommendedVersion: 'v1.0.0',
        compatibleVersions: ['v1.0.0'],
        tag: 'v1.0.0',
        height: 1,
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2'
        },
        binaries: {
          "linux/amd64": 'https://github.com/NibiruChain/nibiru/releases/download/v1.0.0/nibid_1.0.0_linux_amd64.tar.gz',
          "linux/arm64": 'https://github.com/NibiruChain/nibiru/releases/download/v1.0.0/nibid_1.0.0_linux_arm64.tar.gz'
        },
        nextVersionName: 'v1.0.1',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.5'
        },
        cosmwasm: {
          version: 'v0.44.0',
          path: '$HOME/.nibid/data/wasm',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.3.1'
        }
      }, {
        name: 'v1.0.1',
        recommendedVersion: 'v1.0.1',
        compatibleVersions: ['v1.0.1'],
        tag: 'v1.0.1',
        binaries: {
          "linux/amd64": 'https://github.com/NibiruChain/nibiru/releases/download/v1.0.1/nibid_1.0.1_linux_amd64.tar.gz',
          "linux/arm64": 'https://github.com/NibiruChain/nibiru/releases/download/v1.0.1/nibid_1.0.1_linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/NibiruChain/nibiru/releases/download/v1.0.1/nibid_1.0.1_darwin_amd64.tar.gz',
          "darwin/arm64": 'https://github.com/NibiruChain/nibiru/releases/download/v1.0.1/nibid_1.0.1_darwin_arm64.tar.gz'
        },
        proposal: 2,
        height: 2753803,
        consensus: {
          type: 'cometbft',
          version: 'v0.37.4'
        },
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.7'
        },
        cosmwasm: {
          version: 'v0.44.0',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.3.1'
        }
      }],
    sdk: {
      type: 'cosmos',
      version: 'v0.47.7'
    },
    ibc: {
      type: 'go',
      version: 'v7.3.1'
    },
    cosmwasm: {
      version: 'v0.44.0',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg'
  },
  description: 'A Web3 hub ushering in the next era of money',
  apis: {
    wss: [{
        address: 'wss://rpc.testnet-1.nibiru.fi/websocket',
        provider: 'Nibiru Foundation'
      }],
    rpc: [{
        address: 'https://rpc.testnet-1.nibiru.fi',
        provider: 'Nibiru Foundation'
      }],
    rest: [{
        address: 'https://lcd.testnet-1.nibiru.fi',
        provider: 'Nibiru Foundation'
      }],
    grpc: [{
        address: 'grpc.testnet-1.nibiru.fi:443',
        provider: 'Nibiru Foundation'
      }]
  },
  explorers: [{
      kind: 'Nibiru Foundation',
      url: 'https://explorer.nibiru.fi/nibiru-testnet-1',
      txPage: 'https://explorer.nibiru.fi/nibiru-tesnet-1/tx/${txHash}',
      accountPage: 'https://explorer.nibiru.fi/nibiru-testnet-1/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg'
    }]
};
export default info;