import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'bitcannadevnet2',
  status: 'live',
  networkType: 'devnet',
  prettyName: 'BitCanna Devnet-6 SDK v0.46.x',
  chainType: 'cosmos',
  chainId: 'bitcanna-dev-6',
  bech32Prefix: 'bcna',
  daemonName: 'bcnad',
  nodeHome: '$HOME/.bcna',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ubcna',
        fixedMinGasPrice: 0.001
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/BitCannaGlobal/bcna',
    recommendedVersion: 'v2.0.0-beta',
    compatibleVersions: ['v2.0.0-beta'],
    binaries: {
      "linux/amd64": 'https://github.com/BitCannaGlobal/bcna/releases/download/v2.0.0-beta/bcna_linux_amd64.tar.gz'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/BitCannaGlobal/testnet-bcna-cosmos/main/instructions/bitcanna-dev-6/genesis.json'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc-devnet-6.bitcanna.io/',
        provider: 'bitcanna'
      }],
    grpc: [{
        address: 'http://devnet-6.bitcanna.io:9090',
        provider: 'bitcanna'
      }],
    rest: [{
        address: 'https://lcd-devnet-6.bitcanna.io/',
        provider: 'bitcanna'
      }]
  },
  explorers: [{
      url: 'https://explorer-devnet-6.bitcanna.io',
      txPage: 'https://explorer-devnet-6.bitcanna.io/tx/${txHash}'
    }]
};
export default info;