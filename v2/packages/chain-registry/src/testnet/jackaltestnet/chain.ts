import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'jackaltestnet',
  chainType: 'cosmos',
  chainId: 'canine-1',
  website: 'https://jackalprotocol.com',
  prettyName: 'Jackal',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'jkl',
  daemonName: 'canined',
  nodeHome: '$HOME/.canine',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ujkl',
        fixedMinGasPrice: 0
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/JackalLabs/canine-chain',
    recommendedVersion: 'v1.2.2-alpha.1',
    compatibleVersions: ['v1.2.2-alpha.1'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/JackalLabs/woof/master/genesis/woof-final.json'
    },
    binaries: {
      "linux/amd64": 'https://github.com/JackalLabs/canine-chain/releases/download/v1.2.2-alpha.1/canined-Linux',
      "darwin/amd64": 'https://github.com/JackalLabs/canine-chain/releases/download/v1.2.2-alpha.1/canined-macOS'
    }
  },
  apis: {
    rpc: [{
        address: 'http://jkl.rpc.t.stavr.tech:19127',
        provider: '🔥STAVR🔥'
      }, {
        address: 'https://testnet-rpc.jackalprotocol.com',
        provider: 'Jackal Labs'
      }],
    rest: [{
        address: 'https://jkl.api.t.stavr.tech',
        provider: '🔥STAVR🔥'
      }, {
        address: 'https://testnet-api.jackalprotocol.com',
        provider: 'Jackal Labs'
      }],
    grpc: [{
        address: 'http://jkl.grpc.t.stavr.tech:5913',
        provider: '🔥STAVR🔥'
      }, {
        address: 'https://testnet-grpc.jackalprotocol.com',
        provider: 'Jackal Labs'
      }]
  },
  explorers: [{
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Jackal-Testnet',
      txPage: 'https://explorer.stavr.tech/Jackal-Testnet/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Jackal-Testnet/account/${accountAddress}'
    }, {
      kind: 'ping.pub',
      url: 'https://testnet.ping.pub/jackal',
      txPage: 'https://testnet.ping.pub/jackal/tx/${txHash}'
    }]
};
export default info;