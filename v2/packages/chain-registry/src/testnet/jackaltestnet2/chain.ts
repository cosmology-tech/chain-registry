import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'jackaltestnet2',
  chainType: 'cosmos',
  chainId: 'mesomelas-1',
  website: 'https://jackalprotocol.com',
  prettyName: 'Jackal v4',
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
    recommendedVersion: 'v4.0.0-alpha.3',
    compatibleVersions: ['v4.0.0-alpha.3'],
    genesis: {
      genesisUrl: 'https://static.brocha.in/jackal-testnet-v4/genesis.json'
    },
    binaries: {
      "linux/amd64": 'https://github.com/JackalLabs/canine-chain/releases/download/v4.0.0-alpha.3/canined-Linux',
      "darwin/amd64": 'https://github.com/JackalLabs/canine-chain/releases/download/v4.0.0-alpha.3/canined-macOS'
    }
  },
  apis: {
    rpc: [{
        address: 'https://jackal-testnet-v4-rpc.brocha.in',
        provider: 'Brochain'
      }],
    rest: [{
        address: 'https://jackal-testnet-v4-rest.brocha.in',
        provider: 'Brochain'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'PingPub',
      url: 'https://testnet-explorer.brocha.in/Jackal%20v4',
      txPage: 'https://testnet-explorer.brocha.in/Jackal%20v4/tx/${txHash}',
      accountPage: 'https://testnet-explorer.brocha.in/Jackal%20v4/account/${accountAddress}'
    }]
};
export default info;