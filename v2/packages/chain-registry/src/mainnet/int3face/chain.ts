import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'int3face',
  chainType: 'cosmos',
  chainId: 'int3face-1',
  prettyName: 'Int3face',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://int3face.io/',
  bech32Prefix: 'int3',
  daemonName: 'int3',
  nodeHome: '$HOME/.int3faced',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [
      {
        denom: 'uint3',
        fixedMinGasPrice: 0.01,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      },
      {
        denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/bitcoin-btc',
        fixedMinGasPrice: 1e-7,
        lowGasPrice: 1e-7,
        averageGasPrice: 0.0000025,
        highGasPrice: 0.000004
      },
      {
        denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/bitcoin-cash-bch',
        fixedMinGasPrice: 0.000001,
        lowGasPrice: 0.000001,
        averageGasPrice: 0.000025,
        highGasPrice: 0.00004
      },
      {
        denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/litecoin-ltc',
        fixedMinGasPrice: 0.000001,
        lowGasPrice: 0.000001,
        averageGasPrice: 0.000025,
        highGasPrice: 0.00004
      },
      {
        denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/dogecoin-doge',
        fixedMinGasPrice: 0.001,
        lowGasPrice: 0.001,
        averageGasPrice: 0.0025,
        highGasPrice: 0.004
      }
    ]
  },
  staking: {
    stakingTokens: [{
        denom: 'uint3'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/Int3facechain/bridge',
    recommendedVersion: 'v0.2.7',
    compatibleVersions: ['v0.2.7'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.10'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/Int3facechain/networks/main/int3face-1/genesis.json'
    },
    versions: [{
        name: 'v0.2.7',
        recommendedVersion: 'v0.2.7',
        compatibleVersions: ['v0.2.7'],
        nextVersionName: 'v0.2.8'
      }],
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/cosmos/cosmos-sdk',
      version: 'v0.50.8',
      tag: 'v0.50.8'
    },
    ibc: {
      type: 'go',
      version: 'v8.4.0'
    },
    cosmwasm: {
      version: 'v0.50.0',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3.png'
  },
  description: 'Int3face is a cross-chain bridge that connects the Cosmos ecosystem with other blockchains.',
  apis: {
    rpc: [{
        address: 'https://rpc.mainnet.int3face.zone',
        provider: 'Int3face.io'
      }],
    rest: [{
        address: 'https://api.mainnet.int3face.zone',
        provider: 'Int3face.io'
      }],
    grpc: [{
        address: 'grpc.mainnet.int3face.zone:443',
        provider: 'Int3face.io'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://explorer.int3face.zone',
      txPage: 'https://explorer.int3face.zone/int3face-1/tx/${txHash}'
    }],
  images: [{
      imageSync: {
        chainName: 'int3face',
        baseDenom: 'uint3'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3.png',
      theme: {
        primaryColorHex: '#3d3d3d'
      }
    }, {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3face-chain-logo.png',
      theme: {
        primaryColorHex: '#040404',
        circle: false
      }
    }]
};
export default info;