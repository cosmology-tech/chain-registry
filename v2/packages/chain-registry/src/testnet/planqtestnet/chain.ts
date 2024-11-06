import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'planqtestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Planq Atlas Testnet',
  chainType: 'cosmos',
  chainId: 'planq_7077-1',
  bech32Prefix: 'plq',
  daemonName: 'planqd',
  nodeHome: '$HOME/.planqd',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'atplanq',
        fixedMinGasPrice: 20000000000,
        lowGasPrice: 30000000000,
        averageGasPrice: 35000000000,
        highGasPrice: 40000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'atplanq'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/planq-network/planq',
    recommendedVersion: 'v1.1.2',
    compatibleVersions: ['v1.1.2'],
    binaries: {
      "linux/amd64": 'https://github.com/planq-network/planq/releases/download/v1.1.2/planq_1.1.2_linux_amd64.tar.gz',
      "linux/arm64": 'https://github.com/planq-network/planq/releases/download/v1.1.2/planq_1.1.2_linux_arm64.tar.gz',
      "darwin/amd64": 'https://github.com/planq-network/planq/releases/download/v1.1.2/planq_1.1.2_darwin_amd64.tar.gz',
      "darwin/arm64": 'https://github.com/planq-network/planq/releases/download/v1.1.2/planq_1.1.2_darwin_arm64.tar.gz',
      "windows/amd64": 'https://github.com/planq-network/planq/releases/download/v1.1.2/planq_1.1.2_windows_amd64.zip'
    },
    consensus: {
      type: 'cometbft',
      version: '0.34.33'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/planq-network/networks/main/atlas-testnet/genesis.json'
    },
    versions: [{
        name: 'v1.1.2',
        recommendedVersion: 'v1.1.2',
        compatibleVersions: ['v1.1.2'],
        consensus: {
          type: 'cometbft',
          version: '0.34.33'
        },
        binaries: {
          "linux/amd64": 'https://github.com/planq-network/planq/releases/download/v1.1.2/planq_1.1.2_linux_amd64.tar.gz',
          "linux/arm64": 'https://github.com/planq-network/planq/releases/download/v1.1.2/planq_1.1.2_linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/planq-network/planq/releases/download/v1.1.2/planq_1.1.2_darwin_amd64.tar.gz',
          "darwin/arm64": 'https://github.com/planq-network/planq/releases/download/v1.1.2/planq_1.1.2_darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/planq-network/planq/releases/download/v1.1.2/planq_1.1.2_windows_amd64.zip'
        },
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.3'
        },
        ibc: {
          type: 'go',
          version: '5.0.2'
        }
      }],
    sdk: {
      type: 'cosmos',
      version: 'v0.46.3'
    },
    ibc: {
      type: 'go',
      version: '5.0.2'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/planqtestnet/images/planq.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/planqtestnet/images/planq.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc-atlas.planq.network',
        provider: 'Planq Network'
      }, {
        address: 'https://planq_testnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }],
    rest: [{
        address: 'https://rest-atlas.planq.network',
        provider: 'Planq Network'
      }, {
        address: 'https://planq_testnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }],
    grpc: [{
        address: 'https://grpc-atlas.planq.network',
        provider: 'Planq Network'
      }],
    evmHttpJsonrpc: [{
        address: 'https://evm-rpc-atlas.planq.network',
        provider: 'Planq Network'
      }, {
        address: 'https://planq_testnet_evm.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }]
  },
  explorers: [
    {
      kind: 'EVM',
      url: 'https://evm-atlas.planq.network',
      txPage: 'https://evm-atlas.planq.network/tx/${txHash}'
    },
    {
      kind: 'Konsortech',
      url: 'https://testnet-explorer.konsortech.xyz/planq',
      txPage: 'https://testnet-explorer.konsortech.xyz/planq/tx/${txHash}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/planq-testnet',
      txPage: 'https://explorer.whenmoonwhenlambo.money/planq-testnet/tx/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/planqtestnet/images/planq.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/planqtestnet/images/planq.svg'
    }]
};
export default info;