import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'sixtestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'SIX Fivenet',
  chainType: 'cosmos',
  chainId: 'fivenet',
  bech32Prefix: '6x',
  daemonName: 'sixd',
  nodeHome: '$HOME/.six',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'usix',
        fixedMinGasPrice: 1.25,
        lowGasPrice: 1.25,
        averageGasPrice: 1.5,
        highGasPrice: 1.75
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'usix'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/thesixnetwork/six-protocol',
    recommendedVersion: 'v3.1.1-fn',
    compatibleVersions: ['v3.1.1-fn'],
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    genesis: {
      genesisUrl: 'https://github.com/thesixnetwork/chain-info/genesis.json'
    },
    versions: [{
        name: 'v3.1.1-fn',
        recommendedVersion: 'v3.1.1-fn',
        compatibleVersions: ['v3.1.1-fn'],
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        sdk: {
          type: 'cosmos',
          version: '0.45'
        }
      }],
    sdk: {
      type: 'cosmos',
      version: '0.45'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc1.fivenet.sixprotocol.net:443'
      }],
    rest: [{
        address: 'https://api1.fivenet.sixprotocol.net:443'
      }]
  },
  explorers: [{
      kind: 'sixscan',
      url: 'https://sixscan.io/fivenet',
      txPage: 'https://sixscan.io/fivenet/tx/${txHash}'
    }],
  keywords: ['sixprotocol', 'testnet']
};
export default info;