import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'likecointestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'LikeCoin Testnet',
  chainType: 'cosmos',
  chainId: 'likecoin-public-testnet-5',
  bech32Prefix: 'like',
  daemonName: 'liked',
  nodeHome: '$HOME/.liked',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'nanoekil',
        fixedMinGasPrice: 1000,
        lowGasPrice: 1000,
        averageGasPrice: 10000,
        highGasPrice: 1000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'nanoekil'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/likecoin/likecoin-chain',
    recommendedVersion: 'v4.1.1',
    compatibleVersions: ['v4.1.1'],
    binaries: {
      "linux/amd64": 'https://github.com/likecoin/likecoin-chain/releases/download/v4.1.1/likecoin-chain_4.1.1_Linux_x86_64.tar.gz',
      "linux/arm64": 'https://github.com/likecoin/likecoin-chain/releases/download/v4.1.1/likecoin-chain_4.1.1_Linux_arm64.tar.gz',
      "darwin/amd64": 'https://github.com/likecoin/likecoin-chain/releases/download/v4.1.1/likecoin-chain_4.1.1_Darwin_x86_64.tar.gz',
      "darwin/arm64": 'https://github.com/likecoin/likecoin-chain/releases/download/v4.1.1/likecoin-chain_4.1.1_Darwin_arm64.tar.gz',
      "windows/amd64": 'https://github.com/likecoin/likecoin-chain/releases/download/v4.1.1/likecoin-chain_4.1.1_Windows_x86_64.zip'
    },
    cosmosSdkVersion: '0.46',
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    cosmwasmEnabled: false,
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/likecoin/testnets/aeba532ba9162a876a2180e925a49cbedba512e5/likecoin-public-testnet-5/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.46'
    },
    ibc: {
      type: 'go',
      version: '6.2.1',
      icsEnabled: ['ics20-1']
    },
    cosmwasm: {
      enabled: false
    }
  },
  apis: {
    rpc: [{
        address: 'https://node.testnet.like.co/rpc/',
        provider: 'like.co'
      }],
    rest: [{
        address: 'https://node.testnet.like.co/',
        provider: 'like.co'
      }],
    grpc: [{
        address: 'https://node.testnet-grpc.like.co/',
        provider: 'like.co'
      }]
  },
  explorers: [{
      kind: 'bigdipper',
      url: 'https://testnet.bigdipper.live/likecoin',
      txPage: 'https://testnet.bigdipper.live/likecoin/transactions/${txHash}',
      accountPage: 'https://testnet.bigdipper.live/likecoin/accounts/${accountAddress}'
    }, {
      kind: 'lunie-ng',
      url: 'https://likecoin-public-testnet-5.netlify.app/'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.svg'
  },
  keywords: [],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.svg'
    }]
};
export default info;