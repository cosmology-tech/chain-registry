import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'sunrisetestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Sunrise Testnet',
  chainType: 'cosmos',
  chainId: 'sunrise-test-0.1',
  bech32Prefix: 'sunrise',
  daemonName: 'sunrised',
  nodeHome: '$HOME/.sunrise',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'urise',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.0025,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uvrise'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/sunriselayer/sunrise',
    recommendedVersion: 'v0.1.2',
    compatibleVersions: ['v0.1.2'],
    binaries: {
      "linux/amd64": 'https://github.com/sunriselayer/sunrise/releases/download/v0.1.2/sunrised'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.0.5',
      repo: 'https://github.com/sunriselayer/sunrise-core',
      tag: 'v0.0.5-cmt-v0.38.2'
    },
    sdk: {
      type: 'cosmos',
      version: '0.50.2'
    },
    ibc: {
      type: 'go',
      version: '8.0.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg'
  },
  apis: {
    rpc: [{
        address: 'https://a-node.sunrise-test-1.cauchye.net/',
        provider: 'CauchyE'
      }, {
        address: 'https://b-node.sunrise-test-1.cauchye.net/',
        provider: 'CauchyE'
      }],
    rest: [{
        address: 'https://a-node.sunrise-test-1.cauchye.net:1318',
        provider: 'CauchyE'
      }, {
        address: 'https://b-node.sunrise-test-1.cauchye.net:1318',
        provider: 'CauchyE'
      }],
    grpc: [{
        address: 'https://a.sunrise-test-1.cauchye.net:9092',
        provider: 'CauchyE'
      }, {
        address: 'https://b.sunrise-test-1.cauchye.net:9092',
        provider: 'CauchyE'
      }]
  },
  explorers: [],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg',
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.png'
    }]
};
export default info;