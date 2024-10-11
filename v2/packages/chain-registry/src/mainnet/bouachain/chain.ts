import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'bouachain',
  chainType: 'cosmos',
  status: 'live',
  website: 'https://bouachain.com',
  networkType: 'mainnet',
  prettyName: 'Bouachain',
  chainId: 'bouachain',
  bech32Prefix: 'boua',
  daemonName: 'bouachain',
  nodeHome: '$HOME/.bouachain',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ubouacoin',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.0006,
        averageGasPrice: 0.012,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ubouacoin'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/Bouachain/bouachain.git',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v0.9.0'],
    genesis: {
      name: 'v1',
      genesisUrl: 'https://github.com/Bouachain/bouachain/raw/master/genesis.json'
    },
    versions: [{
        name: 'v1.0.0',
        recommendedVersion: 'v1.0.0',
        compatibleVersions: ['v0.9.0'],
        sdk: {
          type: 'cosmos',
          repo: 'https://github.com/rollchains/cosmos-sdk',
          version: 'v0.50.8',
          tag: 'v0.50.8'
        }
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bouachain/images/bouachain.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bouachain/images/bouachain.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.bouachain.com',
        provider: 'BouaValidator'
      }],
    rest: [{
        address: 'https://lcd.bouachain.com',
        provider: 'BouaValidator'
      }],
    grpc: [{
        address: 'https://grpc.bouachain.com',
        provider: 'BouaValidator'
      }]
  },
  explorers: [{
      kind: 'bouachain',
      url: 'https://bouascan.com',
      txPage: 'https://bouascan.com/bouachain/tx/${txHash}',
      accountPage: 'https://bouascan.com/bouachain/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bouachain/images/bouachain.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bouachain/images/bouachain.svg',
      theme: {
        primaryColorHex: '#000000'
      }
    }],
  keywords: ['bouachain', 'spawn']
};
export default info;