import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'uptick',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://uptick.network/',
  prettyName: 'Uptick',
  chainId: 'uptick_117-1',
  bech32Prefix: 'uptick',
  daemonName: 'uptickd',
  nodeHome: '$HOME/.uptickd',
  keyAlgos: ['secp256k1'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'auptick',
        fixedMinGasPrice: 10000000000,
        lowGasPrice: 10000000000,
        averageGasPrice: 25000000000,
        highGasPrice: 40000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'auptick'
      }]
  },
  codebase: {
    cosmosSdkVersion: '0.46',
    cosmwasmEnabled: false,
    cosmwasmVersion: ''
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://uptick-rpc.brocha.in:443',
        provider: 'Brochain'
      },
      {
        address: 'https://uptick.rpc.bccnodes.com:443',
        provider: 'BccNodes'
      },
      {
        address: 'https://rpc.uptick.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://uptick.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'http://uptick.rpc.m.stavr.tech:3157',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://m-uptick.rpc.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀'
      },
      {
        address: 'https://uptick-mainnet-rpc.itrocket.net:443',
        provider: 'itrocket'
      },
      {
        address: 'https://uptick.rpc.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://uptick-rpc.staketab.org:443',
        provider: 'Staketab'
      },
      {
        address: 'https://uptick-rpc.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://rpc-uptick.cakralabs.site',
        provider: 'Cakra Labs'
      },
      {
        address: 'https://rpc-uptick.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'https://uptick-rpc.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    rest: [
      {
        address: 'https://uptick-rest.brocha.in:443',
        provider: 'Brochain'
      },
      {
        address: 'https://api.uptick.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://uptick.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://uptick.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://m-uptick.api.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀'
      },
      {
        address: 'https://uptick-mainnet-api.itrocket.net:443',
        provider: 'itrocket'
      },
      {
        address: 'https://uptick.api.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://uptick-rest.staketab.org',
        provider: 'Staketab'
      },
      {
        address: 'https://uptick-rest.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://rest-uptick.cakralabs.site',
        provider: 'Cakra Labs'
      },
      {
        address: 'https://api-uptick.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'https://uptick-api.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.uptick.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'uptick.rpc.bccnodes.com:9690',
        provider: 'BccNodes'
      },
      {
        address: 'uptick.grpc.nodersteam.com:9211',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'uptick.grpc.kjnodes.com:11590',
        provider: 'kjnodes'
      },
      {
        address: 'uptick.grpc.m.stavr.tech:1901',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'uptick-mainnet-grpc.itrocket.net:10090',
        provider: 'itrocket'
      },
      {
        address: 'https://uptick.grpc.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'services.staketab.com:9190',
        provider: 'Staketab'
      },
      {
        address: 'uptick-grpc.stakerhouse.com:443',
        provider: 'StakerHouse'
      },
      {
        address: 'grpc-uptick.mms.team:443',
        provider: 'MMS'
      },
      {
        address: 'https://grpc-uptick.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'uptick-grpc.noders.services:24090',
        provider: '[NODERS]TEAM'
      }
    ],
    evmHttpJsonrpc: [
      {
        address: 'https://jsonrpc.uptick.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://uptick.jsonrpc.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://evm-uptick.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'https://uptick-jsonrpc.noders.services',
        provider: '[NODERS]TEAM'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://explorers.brocha.in/uptick',
      txPage: 'https://explorers.brocha.in/uptick/tx/${txHash}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/uptick',
      txPage: 'https://explorer.nodestake.top/uptick/tx/${txHash}'
    },
    {
      kind: 'BccNodes Explorer',
      url: 'https://explorer.bccnodes.com/uptick-M',
      txPage: 'https://explorer.bccnodes.com/uptick-M/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥 Explorer',
      url: 'https://explorer.stavr.tech/uptick-mainnet',
      txPage: 'https://explorer.stavr.tech/uptick-mainnet/tx/${txHash}'
    },
    {
      kind: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀 Explorer',
      url: 'https://exp.utsa.tech/uptick',
      txPage: 'https://exp.utsa.tech/uptick/tx/${txHash}'
    },
    {
      kind: 'cosmotracker',
      url: 'https://cosmotracker.com/uptick',
      txPage: 'https://cosmotracker.com/uptick/tx/${txHash}'
    },
    {
      kind: 'Upscan',
      url: 'https://upscan.xyz/',
      txPage: 'https://upscan.xyz/uptick_117-1/tx/${txHash}'
    },
    {
      kind: 'Sr20de',
      url: 'https://explorer.sr20de.xyz/uptick',
      txPage: 'https://explorer.sr20de.xyz/uptick/tx/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.svg'
    }]
};
export default info;