import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'arkh',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://arkhadian.com/',
  prettyName: 'Arkhadian',
  chainType: 'cosmos',
  chainId: 'arkh',
  bech32Prefix: 'arkh',
  daemonName: 'arkhd',
  nodeHome: '$HOME/.arkh',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'arkh',
        fixedMinGasPrice: 0.01,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'arkh'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/vincadian/arkh-blockchain',
    recommendedVersion: 'v2.0.0',
    compatibleVersions: ['v2.0.0'],
    binaries: {
      "linux/amd64": 'https://github.com/vincadian/arkh-blockchain/releases/download/latest/arkh-blockchain_latest_linux_amd64.tar.gz',
      "darwin/amd64": 'https://github.com/vincadian/arkh-blockchain/releases/download/latest/arkh-blockchain_latest_darwin_amd64.tar.gz'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/vincadian/arkh-blockchain/master/genesis/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.svg'
  },
  apis: {
    rpc: [{
        address: 'https://asc-dataseed.arkhadian.com/',
        provider: 'arkhnetwork'
      }, {
        address: 'https://arkh_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }],
    rest: [{
        address: 'https://asc-blockchain-api.arkhadian.com/',
        provider: 'arkhnetwork'
      }, {
        address: 'https://arkh_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }],
    grpc: [{
        address: 'grpc.arkh.nodestake.top:443',
        provider: 'NodeStake'
      }, {
        address: 'https://grpc.arkh.nodexcapital.com:443',
        provider: 'NodeX Validator'
      }]
  },
  explorers: [
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/arkh',
      txPage: 'https://explorer.nodestake.top/arkh/tx/${txHash}'
    },
    {
      kind: 'Kynraze Explorer',
      url: 'https://explorer.kynraze.com/arkhadian',
      txPage: 'https://explorer.kynraze.com/arkhadian/tx/${txHash}'
    },
    {
      kind: 'NODEXPLORER',
      url: 'https://explorer.nodexcapital.com/arkhadian',
      txPage: 'https://explorer.nodexcapital.com/arkhadian/tx/${txHash}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/arkhadian',
      txPage: 'https://explorer.whenmoonwhenlambo.money/arkhadian/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/arkhadian/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.svg',
      theme: {
        primaryColorHex: '#bdbb82'
      }
    }]
};
export default info;