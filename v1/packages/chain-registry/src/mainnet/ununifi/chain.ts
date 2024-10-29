import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'ununifi',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://ununifi.io/',
  pretty_name: 'UnUniFi',
  chain_type: 'cosmos',
  chain_id: 'ununifi-beta-v1',
  bech32_prefix: 'ununifi',
  daemon_name: 'ununifid',
  node_home: '$HOME/.ununifi',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uguu',
        fixed_min_gas_price: 0.0025,
        low_gas_price: 0.0025,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uguu'
      }],
    lock_duration: {
      time: '1209600s'
    }
  },
  codebase: {
    cosmos_sdk_version: 'ununifi/cosmos-sdk v0.47.3-custom-bank-1'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.svg'
  },
  apis: {
    rpc: [
      {
        address: 'http://a.lcd.ununifi.cauchye.net:26657',
        provider: 'CauchyE'
      },
      {
        address: 'https://rpc.ununifi.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/ununifi',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/ununifi',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://ununifi-rpc.genznodes.dev',
        provider: 'genznodes'
      }
    ],
    rest: [
      {
        address: 'https://a.lcd.ununifi.cauchye.net:1318',
        provider: 'CauchyE'
      },
      {
        address: 'https://b.lcd.ununifi.cauchye.net:1318',
        provider: 'CauchyE'
      },
      {
        address: 'https://api.ununifi.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://rest.lavenderfive.com:443/ununifi',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://ununifi-api.genznodes.dev',
        provider: 'genznodes'
      }
    ],
    grpc: [
      {
        address: 'a.lcd.ununifi.cauchye.net:9092',
        provider: 'CauchyE'
      },
      {
        address: 'b.lcd.ununifi.cauchye.net:9092',
        provider: 'CauchyE'
      },
      {
        address: 'ununifi-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc.ununifi.nodestake.top:9090',
        provider: 'NodeStake'
      },
      {
        address: 'https://grpc-ununifi.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'ununifi.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'ununifi-grpc.genznodes.dev:54090',
        provider: 'genznodes'
      }
    ]
  },
  explorers: [
    {
      kind: 'UnUniFi Explorer',
      url: 'https://ununifi.io/explorer',
      tx_page: 'https://ununifi.io/explorer/txs/${txHash}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/ununifi',
      tx_page: 'https://explorer.nodestake.top/ununifi/tx/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/ununifi',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=ununifi&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=ununifi&addr=${accountAddress}'
    },
    {
      kind: 'Nodeist Explorer',
      url: 'https://exp.nodeist.net/Ununifi',
      tx_page: 'https://exp.nodeist.net/Ununifi/tx/${txHash}'
    }
  ],
  keywords: [
    'staking',
    'wasm',
    'assets',
    'nft'
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.svg',
      theme: {
        primary_color_hex: '#546c8c'
      }
    }]
};
export default info;