import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'galacticatestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Galactica Protocol Testnet',
  chainType: 'cosmos',
  chainId: 'galactica_9302-1',
  bech32Prefix: 'gala',
  daemonName: 'galacticad',
  nodeHome: '$HOME/.galactica',
  keyAlgos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'agnet',
        fixedMinGasPrice: 10,
        lowGasPrice: 10,
        averageGasPrice: 10,
        highGasPrice: 20
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'agnet'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/Galactica-corp/galactica',
    recommendedVersion: 'v0.1.1',
    compatibleVersions: ['v0.1.1'],
    consensus: {
      type: 'cometbft',
      version: '0.37'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/Galactica-corp/networks/main/galactica_9301-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.46'
    },
    cosmwasm: {
      enabled: false
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.galactica.test.pfc.zone/',
        provider: 'PFC'
      }, {
        address: 'https://galactica-testnet-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }],
    rest: [{
        address: 'https://api.galactica.test.pfc.zone/',
        provider: 'PFC'
      }, {
        address: 'https://galactica-testnet-api.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }],
    grpc: [{
        address: 'https://grpc.galactica.test.pfc.zone/',
        provider: 'PFC'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galactica/images/galactica.png'
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://ping.pfc.zone/galactica-testnet',
      txPage: 'https://ping.pfc.zone/galactica-testnet/tx/${txHash}',
      accountPage: 'https://ping.pfc.zone/galactica-testnet/account/${accountAddress}'
    }],
  keywords: ['testnet'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galactica/images/galactica.png'
    }]
};
export default info;