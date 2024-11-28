import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'finschia',
  chainType: 'cosmos',
  chainId: 'finschia-2',
  website: 'https://www.finschia.io/',
  prettyName: 'Finschia',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'link',
  daemonName: 'fnsad',
  nodeHome: '$HOME/.finschia',
  keyAlgos: ['secp256k1'],
  slip44: 438,
  fees: {
    feeTokens: [{
        denom: 'cony',
        fixedMinGasPrice: 0.015,
        lowGasPrice: 0.015,
        averageGasPrice: 0.015,
        highGasPrice: 0.015
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'cony'
      }],
    lockDuration: {
      time: '604800s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/finschia/finschia',
    recommendedVersion: 'v2.0.1',
    compatibleVersions: ['v2.0.0', 'v2.0.1'],
    binaries: {
      "linux/amd64": 'https://github.com/Finschia/finschia/releases/download/v2.0.1/fnsad-2.0.1-linux-amd64',
      "linux/arm64": 'https://github.com/Finschia/finschia/releases/download/v2.0.1/fnsad-2.0.1-linux-arm64',
      "darwin/amd64": 'https://github.com/Finschia/finschia/releases/download/v2.0.1/fnsad-2.0.1-darwin-amd64',
      "darwin/arm64": 'https://github.com/Finschia/finschia/releases/download/v2.0.1/fnsad-2.0.1-darwin-arm64'
    },
    genesis: {
      name: 'v2',
      genesisUrl: 'https://vos.line-scdn.net/finschia-2-fileshare/datafile/finschia-prod-2/finschia-2-genesis.tgz'
    },
    language: {
      type: 'go',
      version: '1.20'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/Finschia/finschia-sdk',
      version: 'v0.48.1'
    },
    ibc: {
      type: 'go',
      version: 'v4.3.1',
      icsEnabled: ['ics20-1']
    },
    cosmwasm: {
      version: 'v0.2.0',
      path: '$HOME/.finschia/wasm/wasm',
      enabled: true,
      repo: 'https://github.com/Finschia/wasmd'
    }
  },
  description: 'Finschia (formerly LINE Blockchain Mainnet) aims to build a sustainable token model and create token demand to become a blockchain with 1 billion users.',
  apis: {
    rpc: [{
        address: 'https://finschia-rpc.finschia.io'
      }],
    rest: [{
        address: 'https://finschia-api.finschia.io'
      }],
    grpc: [{
        address: 'finschia-grpc.finschia.io:443'
      }]
  },
  explorers: [{
      kind: 'mintscan',
      url: 'https://www.mintscan.io/finschia',
      txPage: 'https://www.mintscan.io/finschia/tx/${txHash}',
      accountPage: 'https://www.mintscan.io/finschia/address/${accountAddress}'
    }, {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/finschia',
      txPage: 'https://ezstaking.app/finschia/txs/${txHash}',
      accountPage: 'https://ezstaking.app/finschia/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.svg',
      theme: {
        primaryColorHex: '#040404'
      }
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.svg'
  }
};
export default info;