import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'sifchain',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://sifchain.finance/',
  pretty_name: 'Sifchain',
  chain_id: 'sifchain-1',
  bech32_prefix: 'sif',
  daemon_name: 'sifnoded',
  node_home: '$HOME/.sifnoded',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'rowan',
        low_gas_price: 1000000000000,
        average_gas_price: 1500000000000,
        high_gas_price: 2000000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'rowan'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://sifchain-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://sifchain-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://sifchain-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    rest: [
      {
        address: 'https://api-sifchain-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://sifchain-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://sifchain-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://sifchain-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://sifchain.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      }
    ],
    grpc: [
      {
        address: 'sifchain-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'sifchain-grpc.polkachu.com:13290',
        provider: 'Polkachu'
      },
      {
        address: 'sifchain-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/sifchain',
      tx_page: 'https://ping.pub/sifchain/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/sifchain',
      tx_page: 'https://atomscan.com/sifchain/transactions/${txHash}',
      account_page: 'https://atomscan.com/sifchain/accounts/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Sifchain',
      tx_page: 'https://explorer.stavr.tech/Sifchain/tx/${txHash}',
      account_page: 'https://explorer.stavr.tech/Sifchain/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg',
      theme: {
        primary_color_hex: '#be9926'
      }
    }]
};
export default info;