import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'symphonytestnet3',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Symphony Testnet',
  chainType: 'cosmos',
  chainId: 'symphony-testnet-3',
  bech32Prefix: 'symphony',
  daemonName: 'symphonyd',
  nodeHome: '$HOME/.symphonyd',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'note',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.0025,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'note'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/Orchestra-Labs/symphony',
    recommendedVersion: 'v23.0.5-rc1',
    compatibleVersions: ['v23.0.5', 'v23.0.5-rc1'],
    consensus: {
      type: 'tendermint',
      version: '0.37.4'
    },
    genesis: {
      genesisUrl: 'https://rpc.testnet.symphonychain.org/genesis'
    },
    sdk: {
      type: 'cosmos',
      version: '0.47.8'
    },
    cosmwasm: {
      version: '0.29',
      enabled: true
    }
  },
  apis: {
    rpc: [{
        address: 'https://symphony.test.rpc.nodeshub.online/',
        provider: 'Nodes Hub'
      }, {
        address: 'https://symphony-testnet-rpc.cogwheel.zone/',
        provider: 'Cogwheel ⚙️'
      }],
    rest: [{
        address: 'https://symphony.test.api.nodeshub.online/',
        provider: 'Nodes Hub'
      }, {
        address: 'https://symphony-testnet-api.cogwheel.zone/',
        provider: 'Cogwheel ⚙️'
      }],
    grpc: [{
        address: 'https://symphony.test.grpc.nodeshub.online/',
        provider: 'Nodes Hub'
      }, {
        address: 'https://symphony-testnet-grpc.cogwheel.zone:443',
        provider: 'Cogwheel ⚙️'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/symphony_logo.png'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/symphony_logo.png'
    }]
};
export default info;