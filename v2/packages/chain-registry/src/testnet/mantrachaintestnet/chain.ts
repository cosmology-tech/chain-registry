import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'mantrachaintestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'MANTRA Hongbai Testnet',
  chainType: 'cosmos',
  chainId: 'mantra-hongbai-1',
  bech32Prefix: 'mantra',
  daemonName: 'mantrachaind',
  nodeHome: '$HOME/.mantrachain',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uom',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.001,
        averageGasPrice: 0.002,
        highGasPrice: 0.003
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uom'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/MANTRA-Finance',
    recommendedVersion: '1.0.0',
    compatibleVersions: ['1.0.0'],
    consensus: {
      type: 'cometbft',
      version: '0.37'
    },
    versions: [{
        name: '1.0.0',
        recommendedVersion: '1.0.0',
        compatibleVersions: ['1.0.0'],
        consensus: {
          type: 'cometbft',
          version: '0.37'
        },
        sdk: {
          type: 'cosmos',
          version: '0.47.3'
        },
        cosmwasm: {
          version: '0.41',
          enabled: true
        }
      }],
    sdk: {
      type: 'cosmos',
      version: '0.47.3'
    },
    cosmwasm: {
      version: '0.41',
      enabled: true
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.hongbai.mantrachain.io',
        provider: 'MANTRACHAIN'
      }, {
        address: 'https://mantra-testnet-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }],
    rest: [{
        address: 'https://api.hongbai.mantrachain.io',
        provider: 'MANTRACHAIN'
      }, {
        address: 'https://mantra-testnet-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }],
    grpc: [{
        address: 'https://grpc.hongbai.mantrachain.io',
        provider: 'MANTRACHAIN'
      }, {
        address: 'mantra-testnet-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }]
  },
  keywords: ['dex', 'testnet'],
  images: [{
      imageSync: {
        chainName: 'mantrachain',
        baseDenom: 'uom'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg',
      theme: {
        circle: true,
        primaryColorHex: '#fba0c1'
      }
    }]
};
export default info;