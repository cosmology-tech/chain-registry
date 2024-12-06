import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'xion',
  chainId: 'xion-mainnet-1',
  chainType: 'cosmos',
  prettyName: 'Xion Mainnet',
  website: 'https://burnt.com',
  networkType: 'mainnet',
  status: 'live',
  bech32Prefix: 'xion',
  daemonName: 'xiond',
  nodeHome: '$HOME/.xiond',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uxion',
        fixedMinGasPrice: 0.001,
        lowGasPrice: 0.001,
        averageGasPrice: 0.001,
        highGasPrice: 0.01
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uxion'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/burnt-labs/xion',
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/burnt-labs/burnt-networks/main/mainnets/xion-mainnet-1/genesis.json'
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.xion-mainnet-1.burnt.com',
        provider: '🔥BurntLabs🔥'
      },
      {
        address: 'https://xion-rpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc-burnt.imperator.co/',
        provider: 'Imperator.co'
      },
      {
        address: 'https://xion-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://xion-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://xion_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    rest: [
      {
        address: 'https://api.xion-mainnet-1.burnt.com',
        provider: '🔥BurntLabs🔥'
      },
      {
        address: 'https://xion-api.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://lcd-burnt.imperator.co/',
        provider: 'Imperator.co'
      },
      {
        address: 'https://xion-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://xion-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://xion_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    grpc: [
      {
        address: 'grpc.xion-mainnet-1.burnt.com:443',
        provider: '🔥BurntLabs🔥'
      },
      {
        address: 'xion-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'xion-grpc.polkachu.com:22390',
        provider: 'Polkachu'
      },
      {
        address: 'xion-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ]
  },
  explorers: [{
      url: 'https://explorer.burnt.com/xion-mainnet-1',
      txPage: 'https://explorer.burnt.com/xion-mainnet-1/tx/${txHash}',
      accountPage: 'https://explorer.burnt.com/xion-mainnet-1/account/${accountAddress}'
    }, {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/xion',
      txPage: 'https://explorer.whenmoonwhenlambo.money/xion/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/xion/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt.png'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt.png'
  },
  description: 'XION is the first walletless L1 blockchain purpose built for consumer adoption through chain abstraction.',
  keywords: [
    'xion',
    'burnt',
    'mainnet'
  ]
};
export default info;