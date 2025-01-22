import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'desmostestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Desmos Testnet',
  chainType: 'cosmos',
  chainId: 'morpheus-apollo-3',
  bech32Prefix: 'desmos',
  daemonName: 'desmos',
  nodeHome: '$HOME/.desmos',
  keyAlgos: ['secp256k1'],
  slip44: 852,
  fees: {
    feeTokens: [{
        denom: 'udaric',
        fixedMinGasPrice: 0.001,
        lowGasPrice: 0.01,
        averageGasPrice: 0.03,
        highGasPrice: 0.05
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'udaric'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/desmos-labs/desmos',
    recommendedVersion: '5.1.0',
    compatibleVersions: ['5.1.0'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/desmos-labs/morpheus/master/morpheus-apollo-3/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.morpheus.desmos.network',
        provider: 'desmos'
      }],
    rest: [{
        address: 'https://lcd.morpheus.desmos.network',
        provider: 'desmos'
      }],
    grpc: [{
        address: 'https://grpc.morpheus.desmos.network:443',
        provider: 'desmos'
      }]
  },
  explorers: [{
      kind: 'bigdipper',
      url: 'https://testnet.bigdipper.live/desmos',
      txPage: 'https://testnet.live/desmos/transactions/${txHash}',
      accountPage: 'https://testnet.bigdipper.live/desmos/accounts/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg'
    }]
};
export default info;