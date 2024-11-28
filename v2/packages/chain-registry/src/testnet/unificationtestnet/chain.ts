import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'unificationtestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://unification.com/',
  prettyName: 'Unification Testnet',
  chainType: 'cosmos',
  chainId: 'FUND-TestNet-2',
  bech32Prefix: 'und',
  daemonName: 'und',
  nodeHome: '$HOME/.und_mainchain',
  keyAlgos: ['secp256k1'],
  slip44: 5555,
  fees: {
    feeTokens: [{
        denom: 'nund',
        fixedMinGasPrice: 25,
        lowGasPrice: 100,
        averageGasPrice: 200,
        highGasPrice: 300
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'nund'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/unification-com/mainchain',
    recommendedVersion: 'v1.10.1',
    compatibleVersions: ['v1.10.0', 'v1.10.1'],
    binaries: {
      "linux/amd64": 'https://github.com/unification-com/mainchain/releases/download/v1.10.1/und_v1.10.1_linux_x86_64.tar.gz',
      "darwin/amd64": 'https://github.com/unification-com/mainchain/releases/download/v1.10.1/und_v1.10.1_darwin_x86_64.tar.gz',
      "windows/amd64": 'https://github.com/unification-com/mainchain/releases/download/v1.10.1/und_v1.10.1_windows_x86_64.tar.gz'
    },
    consensus: {
      type: 'cometbft',
      version: '0.37.5'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/unification-com/mainnet/master/latest/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.47.13'
    },
    ibc: {
      type: 'go',
      version: '7.7.0'
    },
    cosmwasm: {
      enabled: false
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg',
      theme: {
        primaryColorHex: '#2279c0'
      }
    }],
  apis: {
    rpc: [{
        address: 'https://rpc-testnet.unification.io:443',
        provider: 'Unification'
      }],
    rest: [{
        address: 'https://rest-testnet.unification.io',
        provider: 'Unification'
      }],
    wss: [{
        address: 'wss://wss-testnet.unification.io',
        provider: 'Unification'
      }],
    grpc: [{
        address: 'grpc-testnet.unification.io:443',
        provider: 'Unification'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://explorer-testnet.unification.io/u',
      txPage: 'https://explorer-testnet.unification.io/u/tx/${txHash}',
      accountPage: 'https://explorer-testnet.unification.io/u/account/${accountAddress}'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg'
  }
};
export default info;