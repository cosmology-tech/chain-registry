import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'mun',
  website: 'https://mun.money',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Mun',
  chainType: 'cosmos',
  chainId: 'mun-1',
  bech32Prefix: 'mun',
  daemonName: 'mund',
  nodeHome: '$HOME/.mun',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'umun',
        fixedMinGasPrice: 0.025
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'umun'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/munblockchain/mun-node',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    genesis: {
      genesisUrl: 'https://mainnet1rpc.mun.money/genesis'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mun/images/mun.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mun/images/mun.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://mainnet1rpc.mun.money',
        provider: 'Mun'
      },
      {
        address: 'https://mainnet-mun-rpc.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://rpc.mun.tcnetwork.io',
        provider: 'TC Network'
      },
      {
        address: 'https://mun_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    rest: [
      {
        address: 'https://mainnet1.mun.money',
        provider: 'Mun'
      },
      {
        address: 'https://mainnet-mun-api.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://rest.mun.tcnetwork.io',
        provider: 'TC Network'
      },
      {
        address: 'https://mun_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    grpc: []
  },
  explorers: [
    {
      url: 'https://explorer.mun.money/mun',
      txPage: 'https://explorer.mun.money/mun/${txHash}'
    },
    {
      url: 'https://explorer.indonode.net/mun/staking',
      txPage: 'https://explorer.indonode.net/mun/${txHash}'
    },
    {
      url: 'https://explorer.konsortech.xyz/mun/staking',
      txPage: 'https://explorer.konsortech.xyz/mun/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/mun',
      txPage: 'https://ping.pub/mun/${txHash}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/mun',
      txPage: 'https://explorer.tcnetwork.io/mun/transaction/${txHash}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/mun',
      txPage: 'https://explorer.whenmoonwhenlambo.money/mun/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/mun/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mun/images/mun.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mun/images/mun.svg',
      theme: {
        primaryColorHex: '#f6ba32'
      }
    }]
};
export default info;