import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'nilliontestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Nillion Testnet',
  chainType: 'cosmos',
  chainId: 'nillion-chain-testnet-1',
  bech32Prefix: 'nillion',
  daemonName: 'nilchaind',
  nodeHome: '$HOME/.nillionapp',
  keyAlgos: ['ed25519'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'unil',
        lowGasPrice: 0.0001,
        averageGasPrice: 0.0001,
        highGasPrice: 0.00025
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'unil'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/NillionNetwork/nilchain',
    recommendedVersion: 'v0.1.1',
    compatibleVersions: ['v0.1.1'],
    cosmosSdkVersion: 'v0.50.6',
    consensus: {
      type: 'cometbft',
      version: 'v0.38.6'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/NillionNetwork/networks/main/nillion-chain-testnet-1/genesis.json'
    },
    versions: [{
        name: 'v0.1.1',
        recommendedVersion: 'v0.1.1',
        compatibleVersions: ['v0.1.1'],
        cosmosSdkVersion: 'v0.50.6',
        consensus: {
          type: 'cometbft',
          version: 'v0.38.6'
        },
        sdk: {
          type: 'cosmos',
          version: 'v0.50.6'
        },
        cosmwasm: {
          enabled: false
        },
        ibc: {
          type: 'go',
          version: 'v8.2.0'
        }
      }],
    sdk: {
      type: 'cosmos',
      version: 'v0.50.6'
    },
    ibc: {
      type: 'go',
      version: '5.3.2'
    },
    cosmwasm: {
      enabled: false
    }
  },
  apis: {
    rpc: [{
        address: 'https://nillion-testnet-rpc.polkachu.com/',
        provider: 'polkachu'
      }, {
        address: 'https://testnet-nillion-rpc.lavenderfive.com',
        provider: 'lavenderfive'
      }],
    rest: [{
        address: 'https://nillion-testnet-api.polkachu.com/',
        provider: 'polkachu'
      }, {
        address: 'https://testnet-nillion-api.lavenderfive.com',
        provider: 'lavenderfive'
      }],
    grpc: [{
        address: 'https://testnet-nillion-grpc.lavenderfive.com',
        provider: 'lavenderfive'
      }]
  },
  explorers: [{
      url: 'https://testnet.nillion.explorers.guru',
      txPage: 'https://testnet.nillion.explorers.guru/transaction/${txHash}',
      accountPage: 'https://testnet.nillion.explorers.guru/account/${accountAddress}'
    }],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nilliontestnet/images/nil.svg',
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nilliontestnet/images/nil.png'
    }]
};
export default info;