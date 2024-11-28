import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'nomictestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Nomic Testnet',
  website: 'https://nomic.io/',
  chainType: 'cosmos',
  chainId: 'nomic-testnet-6',
  bech32Prefix: 'nomic',
  daemonName: 'nomic',
  nodeHome: '$HOME/.nomic-testnet-6',
  slip44: 118,
  keyAlgos: ['secp256k1'],
  fees: {
    feeTokens: [{
        denom: 'unom',
        lowGasPrice: 0,
        averageGasPrice: 0,
        highGasPrice: 0
      }, {
        denom: 'usat',
        lowGasPrice: 0,
        averageGasPrice: 0,
        highGasPrice: 0
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'unom'
      }],
    lockDuration: {
      time: '1209600s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/nomic-io/nomic',
    recommendedVersion: 'v9.1.0',
    compatibleVersions: ['v9.1.0'],
    consensus: {
      type: 'tendermint',
      version: 'v0.34'
    },
    genesis: {
      genesisUrl: 'https://github.com/nomic-io/nomic/blob/v9.1.0/networks/testnet.toml'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg'
  },
  description: 'The superior way to use Bitcoin in Cosmos DeFi. Use IBC to securely and efficiently bridge your BTC to Osmosis and more.',
  apis: {
    rpc: [{
        address: 'https://testnet-rpc.nomic.io:2096',
        provider: 'nomic'
      }],
    rest: [{
        address: 'https://testnet-api.nomic.io:8443',
        provider: 'nomic'
      }]
  },
  explorers: [],
  images: [{
      imageSync: {
        chainName: 'nomic',
        baseDenom: 'unom'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg',
      theme: {
        primaryColorHex: '#6404fc'
      }
    }],
  bech32Config: {
    bech32PrefixAccAddr: 'nomic',
    bech32PrefixAccPub: 'nomic',
    bech32PrefixConsAddr: 'nomic',
    bech32PrefixConsPub: 'nomic',
    bech32PrefixValAddr: 'nomic',
    bech32PrefixValPub: 'nomic'
  }
};
export default info;