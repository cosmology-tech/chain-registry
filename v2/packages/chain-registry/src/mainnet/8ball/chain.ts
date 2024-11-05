import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: '8ball',
  status: 'killed',
  website: 'https://8ball.info/',
  networkType: 'mainnet',
  prettyName: '8ball',
  chainType: 'cosmos',
  chainId: 'eightball-1',
  bech32Prefix: '8ball',
  daemonName: '8ball',
  nodeHome: '$HOME/.8ball',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uebl',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uebl'
      }]
  },
  codebase: {
    gitRepo: 'https://secp256k1.net/8ball.git',
    recommendedVersion: 'v1',
    compatibleVersions: ['v1'],
    binaries: {
      "linux/amd64": 'https://8ball.info/8ball.tar.gz'
    },
    genesis: {
      genesisUrl: 'https://8ball.info/8ball-genesis.json'
    },
    versions: [{
        name: 'v1',
        recommendedVersion: 'v1',
        compatibleVersions: ['v1'],
        binaries: {
          "linux/amd64": 'https://8ball.info/8ball.tar.gz'
        },
        sdk: {
          type: 'cosmos',
          version: '0.46.7'
        },
        cosmwasm: {
          enabled: true
        }
      }],
    sdk: {
      type: 'cosmos',
      version: '0.46.7'
    },
    cosmwasm: {
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.8ball.info/',
        provider: '8ball'
      }, {
        address: 'https://rpc.8ball.nodestake.top',
        provider: 'NodeStake'
      }],
    rest: [
      {
        address: 'https://rest.8ball.info',
        provider: '8ball'
      },
      {
        address: 'https://api.8ball.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://api-8ball.nodine.id/',
        provider: 'Nodine.ID'
      }
    ],
    grpc: [{
        address: 'grpc.8ball.nodestake.top:443',
        provider: 'NodeStake'
      }, {
        address: 'https://grpc.8ball.nodexcapital.com:443',
        provider: 'NodeX Validator'
      }]
  },
  explorers: [
    {
      url: 'https://explorer.8ball.info/',
      txPage: 'https://explorer.8ball.info/8ball/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/8ball',
      txPage: 'https://ping.pub/8ball/tx/${txHash}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/8ball/',
      txPage: 'https://explorer.nodestake.top/8ball/tx/${txHash}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/8ball',
      txPage: 'https://explorer.tcnetwork.io/8ball/transaction/${txHash}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.co.id/8ball',
      txPage: 'https://explorer.co.id/8ball/tx/${txHash}'
    },
    {
      kind: 'NODEXPLORER',
      url: 'https://explorer.nodexcapital.com/8ball',
      txPage: 'https://explorer.nodexcapital.com/8ball/tx/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg',
      theme: {
        primaryColorHex: '#dbdbdb'
      }
    }]
};
export default info;