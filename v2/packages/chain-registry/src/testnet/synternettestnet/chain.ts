import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'synternettestnet',
  chainType: 'cosmos',
  chainId: 'amber-2',
  prettyName: 'Amber Public Testnet',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'amber',
  daemonName: 'amberd',
  nodeHome: '$HOME/.amber',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uamber',
        fixedMinGasPrice: 0.01,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uamber'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/Synternet/synternet-chain-releases',
    recommendedVersion: 'v0.8.0',
    compatibleVersions: ['v0.8.0'],
    binaries: {
      "linux/amd64": 'https://github.com/Synternet/synternet-chain-releases/releases/download/v0.8.0/amberd-linux-amd64-v0.8.0-testnet'
    },
    genesis: {
      genesisUrl: 'https://github.com/Synternet/synternet-chain-releases/blob/main/networks/testnet/genesis.json'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc-testnet.synternet.com/',
        provider: 'Synternet'
      }],
    rest: [{
        address: 'https://api-testnet.synternet.com/',
        provider: 'Synternet'
      }]
  },
  explorers: [{
      kind: 'Big Dipper',
      url: 'https://explorer-testnet.synternet.com/',
      txPage: 'https://explorer-testnet.synternet.com/transactions/${txHash}'
    }]
};
export default info;