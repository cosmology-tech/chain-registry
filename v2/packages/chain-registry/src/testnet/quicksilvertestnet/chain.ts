import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'quicksilvertestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Quicksilver Testnet',
  chainType: 'cosmos',
  chainId: 'rhye-2',
  bech32Prefix: 'quick',
  daemonName: 'quicksilverd',
  nodeHome: '$HOME/.quicksilverd',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uqck',
        lowGasPrice: 0.0001,
        averageGasPrice: 0.0001,
        highGasPrice: 0.00025
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uqck'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/ingenuity-build/quicksilver',
    recommendedVersion: 'v1.4.5-rc2',
    compatibleVersions: ['v1.4.5-rc2'],
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/ingenuity-build/testnets/main/rhye-2/genesis.json'
    },
    versions: [{
        name: 'v1.4.5-rc2',
        recommendedVersion: 'v1.4.5-rc2',
        compatibleVersions: ['v1.4.5-rc2'],
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        sdk: {
          type: 'cosmos',
          version: '0.46'
        },
        cosmwasm: {
          version: '0.29',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: '5.3.2'
        }
      }],
    sdk: {
      type: 'cosmos',
      version: '0.46'
    },
    ibc: {
      type: 'go',
      version: '5.3.2'
    },
    cosmwasm: {
      version: '0.29',
      enabled: true
    }
  },
  logoURIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.svg'
  },
  apis: {
    rpc: [
      {
        address: 'http://quick.rpc.t.stavr.tech:20027',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://quicksilver-testnet-rpc.polkachu.com/',
        provider: 'polkachu'
      },
      {
        address: 'https://quicksilver-testnet-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ],
    rest: [
      {
        address: 'https://quick.api.t.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://quicksilver-testnet-api.polkachu.com/',
        provider: 'polkachu'
      },
      {
        address: 'https://quicksilver-testnet-api.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ],
    grpc: [{
        address: 'http://quick.grpc.t.stavr.tech:9112',
        provider: '🔥STAVR🔥'
      }, {
        address: 'quicksilver-testnet-grpc.polkachu.com:11190',
        provider: 'polkachu'
      }]
  },
  explorers: [{
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Quicksilver',
      txPage: 'https://explorer.stavr.tech/Quicksilver/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Quicksilver/account/${accountAddress}'
    }, {
      url: 'https://testnet.quicksilver.explorers.guru',
      txPage: 'https://testnet.quicksilver.explorers.guru/transaction/${txHash}',
      accountPage: 'https://testnet.quicksilver.explorers.guru/account/${accountAddress}'
    }],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.svg'
    }]
};
export default info;