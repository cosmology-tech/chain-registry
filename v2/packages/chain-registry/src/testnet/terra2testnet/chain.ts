import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'terra2testnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://www.terra.money/',
  prettyName: 'Terra 2.0',
  chainType: 'cosmos',
  chainId: 'pisco-1',
  daemonName: 'terrad',
  nodeHome: '$HOME/.terra',
  bech32Prefix: 'terra',
  slip44: 330,
  fees: {
    feeTokens: [{
        denom: 'uluna',
        fixedMinGasPrice: 0.0125,
        lowGasPrice: 0.0125,
        averageGasPrice: 0.015,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uluna'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/terra-money/core/',
    recommendedVersion: 'v2.4.0-rc5',
    compatibleVersions: ['v2.4.0-rc4', 'v2.4.0-rc5'],
    genesis: {
      name: 'v2.0',
      genesisUrl: 'https://tfl-pisco-1.s3.amazonaws.com/genesis.json'
    },
    versions: [
      {
        name: 'v2.0',
        tag: 'v2.0.0-rc.1',
        height: 1,
        recommendedVersion: 'v2.0.0-rc.1',
        nextVersionName: 'v2.1',
        binaries: {
          "linux/amd64": 'https://github.com/terra-money/core/releases/download/v2.0.0-rc.0/terra_2.0.0-rc.0_Linux_x86_64.tar.gz?checksum=sha256:2427cf3aa7934f591eac0708156d424f55d3dbb6062f6f111b770bee8f414c91',
          "darwin/amd64": 'https://github.com/terra-money/core/releases/download/v2.0.0-rc.0/terra_2.0.0-rc.0_Darwin_x86_64.tar.gz?checksum=sha256:72869d7279362e8d63e2afb02c17e1eef0ad0cb6285a30dfa47c571fa5be1c30'
        }
      },
      {
        name: 'v2.1',
        tag: 'v2.1.0-beta.1',
        height: 838500,
        recommendedVersion: 'v2.1.0-beta.1',
        cosmosSdkVersion: '0.46.9',
        consensus: {
          type: 'tendermint',
          version: '0.34.21'
        },
        nextVersionName: 'v2.2',
        binaries: {
          "linux/amd64": 'https://github.com/terra-money/core/releases/download/v2.1.0-beta.1/terra_2.1.0-beta.1_Linux_x86_64.tar.gz?checksum=sha256:c6e6ace1d5b5f3f365f6d71489dbeda645f196ea10f8f03103fb9648131bfec1'
        },
        sdk: {
          type: 'cosmos',
          version: '0.46.9'
        },
        cosmwasm: {
          version: '0.27.0',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: '3.0.0'
        }
      },
      {
        name: 'v2.2',
        tag: 'v2.2.1',
        height: 2777777,
        recommendedVersion: 'v2.2.1',
        compatibleVersions: ['v2.2.0', 'v2.2.1'],
        cosmosSdkVersion: '0.46.11',
        consensus: {
          type: 'tendermint',
          version: '0.34.21'
        },
        nextVersionName: 'v2.3',
        binaries: {
          "linux/amd64": 'https://github.com/terra-money/core/releases/download/v2.2.1/terra_2.2.1_Linux_x86_64.tar.gz?checksum=sha256:8a9353ae3c33a750ce2a9d236f00c12c5449c41fad96e9885a5c0b8678fcf8bc'
        },
        sdk: {
          type: 'cosmos',
          version: '0.46.11'
        },
        cosmwasm: {
          version: '0.27.0',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: '3.4.0'
        }
      },
      {
        name: 'v2.3',
        tag: 'v2.3.4',
        height: 4712048,
        recommendedVersion: 'v2.3.4',
        compatibleVersions: [
          'v2.3.0',
          'v2.3.1',
          'v2.3.2',
          'v2.3.4'
        ],
        cosmosSdkVersion: 'v0.46.11',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.27'
        },
        binaries: {
          "linux/amd64": 'https://github.com/terra-money/core/releases/download/v2.3.4/terra_2.3.4_Linux_x86_64.tar.gz?checksum=sha256:3e737e1f1f9b8640ef0e73f412e9e11bedd494ea2c130630a1f5586e00da9ae7'
        },
        sdk: {
          type: 'cosmos',
          version: 'v0.46.11'
        },
        cosmwasm: {
          version: 'v0.30.0',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v6.1.1'
        }
      },
      {
        name: 'v2.4',
        tag: 'v2.4.0-rc5',
        height: 6272928,
        recommendedVersion: 'v2.4.0-rc5',
        compatibleVersions: ['v2.4.0-rc5'],
        cosmosSdkVersion: 'v0.46.11',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.27'
        },
        binaries: {
          "linux/amd64": 'https://github.com/terra-money/core/releases/download/v2.4.0-rc5/terra_2.4.0-rc5_Linux_x86_64.tar.gz?checksum=sha256:c61c9c4ae8a0bcb9d7f9fc2197d84ba8b75b558c2cee3438ae2142eb97e0d771'
        },
        sdk: {
          type: 'cosmos',
          version: 'v0.46.11'
        },
        cosmwasm: {
          version: 'v0.30.0',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v6.1.1'
        }
      }
    ]
  },
  apis: {
    rpc: [{
        address: 'https://pisco-rpc.terra.dev:443',
        provider: 'Terraform Labs'
      }, {
        address: 'https://terra-testnet-rpc.polkachu.com:443',
        provider: 'Polkachu'
      }],
    rest: [{
        address: 'https://pisco-lcd.terra.dev:443',
        provider: 'Terraform Labs'
      }, {
        address: 'https://terra-testnet-api.polkachu.com:443',
        provider: 'Polkachu'
      }],
    grpc: [{
        address: 'terra-testnet-grpc.polkachu.com:11790',
        provider: 'Polkachu'
      }]
  },
  explorers: [{
      kind: 'finder',
      url: 'http://finder.terra.money/testnet/',
      txPage: 'https://finder.terra.money/testnet/tx/${txHash}'
    }]
};
export default info;