import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'pryzmtestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Pryzm Testnet',
  chainType: 'cosmos',
  chainId: 'indigo-1',
  bech32Prefix: 'pryzm',
  daemonName: 'pryzmd',
  nodeHome: '$HOME/.pryzm',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'upryzm',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.015,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'upryzm'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/pryzm-finance/pryzm-core',
    recommendedVersion: 'v0.9.0',
    compatibleVersions: ['v0.9.0'],
    consensus: {
      type: 'tendermint',
      version: '0.37'
    },
    genesis: {
      genesisUrl: 'https://storage.googleapis.com/pryzm-resources/indigo-1/genesis.json'
    },
    versions: [{
        name: 'v0.9.0',
        recommendedVersion: 'v0.9.0',
        compatibleVersions: ['v0.9.0'],
        consensus: {
          type: 'tendermint',
          version: '0.37'
        },
        sdk: {
          type: 'cosmos',
          version: '0.47'
        },
        ibc: {
          type: 'go',
          version: '7.3.1'
        }
      }],
    sdk: {
      type: 'cosmos',
      version: '0.47'
    },
    ibc: {
      type: 'go',
      version: '7.3.1'
    }
  },
  apis: {
    rpc: [{
        address: 'https://testnet-rpc.pryzm.zone',
        provider: 'PRYZM'
      }, {
        address: 'https://pryzm-testnet-rpc.itrocket.net',
        provider: 'ITRocket'
      }],
    rest: [{
        address: 'https://testnet-api.pryzm.zone',
        provider: 'PRYZM'
      }, {
        address: 'https://pryzm-testnet-api.itrocket.net',
        provider: 'ITRocket'
      }],
    grpc: [{
        address: 'https://testnet-grpc.pryzm.zone',
        provider: 'PRYZM'
      }, {
        address: 'http://pryzm-testnet-grpc.itrocket.net:41090',
        provider: 'ITRocket'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pryzmtestnet/images/pryzm-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pryzmtestnet/images/pryzm-logo.svg'
  },
  explorers: [{
      kind: 'PingPub',
      url: 'https://testnets.cosmosrun.info/pryzm-indigo-1',
      txPage: 'https://testnets.cosmosrun.info/pryzm-indigo-1/tx/${txHash}',
      accountPage: 'https://testnets.cosmosrun.info/pryzm-indigo-1/account/${accountAddress}'
    }, {
      kind: 'ITRocket',
      url: 'https://testnet.itrocket.net/pryzm',
      txPage: 'https://testnet.itrocket.net/pryzm/tx/${txHash}',
      accountPage: 'https://testnet.itrocket.net/pryzm/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pryzmtestnet/images/pryzm-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pryzmtestnet/images/pryzm-logo.svg'
    }]
};
export default info;