import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'impacthub',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.ixo.world/',
  pretty_name: 'Impacts Hub',
  chain_type: 'cosmos',
  chain_id: 'ixo-5',
  bech32_prefix: 'ixo',
  daemon_name: 'ixod',
  node_home: '$HOME/.ixod',
  key_algos: ['secp256k1', 'ed25519'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uixo',
        fixed_min_gas_price: 0.025,
        low_gas_price: 0.025,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uixo'
      }]
  },
  codebase: {
    cosmos_sdk_version: 'v0.45.16'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://proxies.sifchain.finance/api/impacthub-3/rpc',
        provider: 'sifchain'
      },
      {
        address: 'https://impacthub.ixo.world/rpc/',
        provider: 'ixoworld'
      },
      {
        address: 'https://ixo.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc-ixo-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://impacthub-rpc.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://ixo-rpc.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://ixo-rpc.bluestake.net:443',
        provider: 'BlueStake 🚀'
      },
      {
        address: 'https://impacthub_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    rest: [
      {
        address: 'https://proxies.sifchain.finance/api/impacthub-3/rest',
        provider: 'sifchain'
      },
      {
        address: 'https://impacthub.ixo.world/rest/',
        provider: 'ixoworld'
      },
      {
        address: 'https://ixo.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api-ixo-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://impacthub-api.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://ixo-api.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://ixo-api.bluestake.net',
        provider: 'BlueStake 🚀'
      },
      {
        address: 'https://impacthub_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    grpc: [
      {
        address: 'grpc-ixo-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'ixo.grpc.m.stavr.tech:2010',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'impacthub-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/ixo',
      tx_page: 'https://ezstaking.app/ixo/txs/${txHash}',
      account_page: 'https://ezstaking.app/ixo/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/IXO-Mainnet',
      tx_page: 'https://explorer.stavr.tech/IXO-Mainnet/txs/${txHash}',
      account_page: 'https://explorer.stavr.tech/IXO-Mainnet/account/${accountAddress}'
    },
    {
      kind: 'bigdipper',
      url: 'https://blockscan.ixo.world',
      tx_page: 'https://blockscan.ixo.world/transactions/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/ixo',
      tx_page: 'https://ping.pub/ixo/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/ixo',
      tx_page: 'https://atomscan.com/ixo/transactions/${txHash}',
      account_page: 'https://atomscan.com/ixo/accounts/${accountAddress}'
    },
    {
      kind: 'Mintscan',
      url: 'https://www.mintscan.io/ixo',
      tx_page: 'https://www.mintscan.io/ixo/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/ixo/accounts/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/ixo',
      tx_page: 'https://explorer.whenmoonwhenlambo.money/ixo/tx/${txHash}',
      account_page: 'https://explorer.whenmoonwhenlambo.money/ixo/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg',
      theme: {
        primary_color_hex: '#2c4484'
      }
    }]
};
export default info;