import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'noistestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://nois.network',
  prettyName: 'Nois',
  chainType: 'cosmos',
  chainId: 'nois-testnet-005',
  bech32Prefix: 'nois',
  daemonName: 'noisd',
  nodeHome: '$HOME/.noisd',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'unois',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.05,
        averageGasPrice: 0.05,
        highGasPrice: 0.1
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'unois'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/noislabs/noisd',
    recommendedVersion: 'v1.0.1',
    compatibleVersions: ['v1.0.1'],
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    genesis: {
      name: 'v1',
      genesisUrl: 'https://raw.githubusercontent.com/noislabs/networks/nois-testnet-005/nois-testnet-005/genesis.json'
    },
    versions: [{
        name: 'v1',
        tag: 'v1.0.1',
        height: 0,
        recommendedVersion: 'v1.0.1',
        compatibleVersions: ['v1.0.1'],
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        sdk: {
          type: 'cosmos',
          version: '0.45'
        },
        cosmwasm: {
          version: '0.30',
          enabled: true
        }
      }],
    sdk: {
      type: 'cosmos',
      version: '0.45'
    },
    cosmwasm: {
      version: '0.30',
      enabled: true
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
      theme: {
        primaryColorHex: '#0C0914'
      }
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png'
  },
  apis: {
    rpc: [
      {
        address: 'https://nois-testnet-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://nois-testnet-rpc.itrocket.net:443',
        provider: 'itrocket'
      },
      {
        address: 'https://rpc.nois.mcbnode.online:443',
        provider: 'mcbnode'
      },
      {
        address: 'https://nois-testnet.rpc.kjnodes.com:443',
        provider: 'kjnodes'
      },
      {
        address: 'https://tnois-rpc.systemd.run:443',
        provider: 'systemd'
      }
    ],
    grpc: [
      {
        address: 'tnois-grpc.systemd.run:443',
        provider: 'systemd'
      },
      {
        address: 'http://nois.grpc.t.stavr.tech:191',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'nois-testnet-grpc.itrocket.net:21090',
        provider: 'itrocket'
      }
    ],
    rest: [
      {
        address: 'https://api.nois.mcbnode.online',
        provider: 'mcbnode'
      },
      {
        address: 'https://nois3.api.t.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://tnois-api.systemd.run:443',
        provider: 'systemd'
      }
    ]
  },
  explorers: [{
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Nois-Testnet',
      txPage: 'https://explorer.stavr.tech/Nois-Testnet/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Nois-Testnet/account/${accountAddress}'
    }, {
      kind: 'explorers.guru',
      url: 'https://testnet.nois.explorers.guru',
      txPage: 'https://testnet.nois.explorers.guru/transaction/${txHash}',
      accountPage: 'https://testnet.nois.explorers.guru/account/${accountAddress}'
    }],
  keywords: [
    'nois',
    'randomness',
    'drand',
    'wasm'
  ]
};
export default info;