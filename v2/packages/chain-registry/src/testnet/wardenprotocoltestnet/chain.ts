import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'wardenprotocoltestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Warden Protocol Buenavista',
  chainType: 'cosmos',
  chainId: 'buenavista-1',
  bech32Prefix: 'warden',
  daemonName: 'wardend',
  nodeHome: '$HOME/.warden',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uward',
        fixedMinGasPrice: 0.005,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uward'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/warden-protocol/wardenprotocol',
    recommendedVersion: 'v0.3.0',
    compatibleVersions: ['v0.3.0'],
    consensus: {
      type: 'cometbft',
      version: '0.38'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/warden-protocol/networks/main/testnets/buenavista/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.50'
    },
    cosmwasm: {
      enabled: false
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.buenavista.wardenprotocol.org/',
        provider: 'Warden Protocol'
      }],
    rest: [{
        address: 'https://api.buenavista.wardenprotocol.org/',
        provider: 'Warden Protocol'
      }],
    grpc: [{
        address: 'https://grpc.buenavista.wardenprotocol.org/',
        provider: 'Warden Protocol'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.png'
  },
  explorers: [],
  keywords: ['testnet'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.png'
    }]
};
export default info;