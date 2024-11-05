import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'akiro',
  status: 'killed',
  networkType: 'mainnet',
  prettyName: 'Akiro',
  chainType: 'cosmos',
  chainId: 'akiro-1',
  bech32Prefix: 'akiro',
  daemonName: 'akirod',
  nodeHome: '$HOME/.akiro',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uakiro',
        fixedMinGasPrice: 0.025,
        lowGasPrice: 0.025,
        averageGasPrice: 0.035,
        highGasPrice: 0.045
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uakiro'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/akiroinu/akiro/',
    recommendedVersion: 'v0.2',
    compatibleVersions: ['v0.2'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/akiroinu/akiro/main/mainnet/genesis.json'
    },
    versions: [{
        name: 'v0.2',
        recommendedVersion: 'v0.2',
        compatibleVersions: ['v0.2'],
        consensus: {
          type: 'tendermint',
          version: 'v0.34.19'
        },
        sdk: {
          type: 'cosmos',
          version: 'v0.45.4'
        },
        ibc: {
          type: 'go',
          version: 'v3.0.0'
        }
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akiro/images/akiro.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akiro/images/akiro.svg'
  },
  apis: {
    rpc: [{
        address: 'http://213.199.36.82:26657',
        provider: 'AKIRO'
      }, {
        address: 'https://rpc-akiro.d-stake.xyz',
        provider: 'D-Stake'
      }],
    rest: [{
        address: 'http://213.199.36.82:1317',
        provider: 'AKIRO'
      }, {
        address: 'https://api-akiro.d-stake.xyz',
        provider: 'D-Stake'
      }],
    grpc: [{
        address: 'http://213.199.36.82:9090',
        provider: 'AKIRO'
      }, {
        address: 'https://grpc-akiro.d-stake.xyz',
        provider: 'D-Stake'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://ping.pub/akiro',
      txPage: 'https://ping.pub/akiro/tx/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akiro/images/akiro.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akiro/images/akiro.svg',
      theme: {
        primaryColorHex: '#f7f0e1'
      }
    }]
};
export default info;