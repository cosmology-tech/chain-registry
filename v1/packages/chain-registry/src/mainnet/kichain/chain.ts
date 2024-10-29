import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'kichain',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://foundation.ki/',
  pretty_name: 'Ki',
  chain_type: 'cosmos',
  chain_id: 'kichain-2',
  bech32_prefix: 'ki',
  daemon_name: 'kid',
  node_home: '$HOME/.kid',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uxki',
        fixed_min_gas_price: 0.025,
        low_gas_price: 0.025,
        average_gas_price: 0.03,
        high_gas_price: 0.05
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uxki'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-mainnet.blockchain.ki',
        provider: 'kifoundation'
      },
      {
        address: 'https://kichain-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc-kichain-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://kichain-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc.kichain.chaintools.tech/',
        provider: 'ChainTools'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/kichain',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'http://ki-chain.statesync.nodersteam.com:14657',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://ki-rpc.ibs.team/',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://rpc.kichain-2.kichain.aviaone.com',
        provider: 'AVIAONE 🟢'
      }
    ],
    rest: [
      {
        address: 'https://api-mainnet.blockchain.ki',
        provider: 'kifoundation'
      },
      {
        address: 'https://api-kichain-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://kichain.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api.kichain.chaintools.tech/',
        provider: 'ChainTools'
      },
      {
        address: 'https://kichain-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'http://ki-chain.api.nodersteam.com:14017',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://kichain-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rest.lavenderfive.com:443/kichain',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://ki-api.ibs.team/',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://api.kichain-2.kichain.aviaone.com',
        provider: 'AVIAONE 🟢'
      }
    ],
    grpc: [
      {
        address: 'grpc-kichain-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'kichain-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'ki-chain.grpc.nodersteam.com:9410',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'kichain-grpc.polkachu.com:13590',
        provider: 'Polkachu'
      },
      {
        address: 'kichain.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'grpc.kichain-2.kichain.aviaone.com:9230',
        provider: 'AVIAONE 🟢'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/kichain',
      tx_page: 'https://ezstaking.app/kichain/txs/${txHash}',
      account_page: 'https://ezstaking.app/kichain/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/ki-chain',
      tx_page: 'https://www.mintscan.io/ki-chain/txs/${txHash}',
      account_page: 'https://www.mintscan.io/ki-chain/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Kichain-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Kichain-Mainnet/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/kichain',
      tx_page: 'https://ping.pub/kichain/tx/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/kichain',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=kichain&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=kichain&addr=${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/ki-chain',
      tx_page: 'https://atomscan.com/ki-chain/transactions/${txHash}',
      account_page: 'https://atomscan.com/ki-chain/accounts/${accountAddress}'
    },
    {
      kind: 'AVIAONE Explorer 🟢',
      url: 'https://mainnet.explorer.aviaone.com/kichain',
      tx_page: 'https://mainnet.explorer.aviaone.com/kichain/transactions/${txHash}',
      account_page: 'https://mainnet.explorer.aviaone.com/kichain/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg',
      theme: {
        primary_color_hex: '#1c04fc'
      }
    }]
};
export default info;