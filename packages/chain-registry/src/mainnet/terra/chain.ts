import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'terra',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Terra Classic',
  chain_id: 'columbus-5',
  daemon_name: 'terrad',
  node_home: '$HOME/.terra',
  bech32_prefix: 'terra',
  slip44: 330,
  fees: {
    fee_tokens: [
      {
        denom: 'uluna',
        low_gas_price: 28.325,
        average_gas_price: 28.325,
        high_gas_price: 50
      },
      {
        denom: 'usdr',
        low_gas_price: 0.52469,
        average_gas_price: 0.52469,
        high_gas_price: 0.52469
      },
      {
        denom: 'uusd',
        low_gas_price: 0.75,
        average_gas_price: 0.75,
        high_gas_price: 0.75
      },
      {
        denom: 'ukrw',
        low_gas_price: 850,
        average_gas_price: 850,
        high_gas_price: 850
      },
      {
        denom: 'umnt',
        low_gas_price: 2142.855,
        average_gas_price: 2142.855,
        high_gas_price: 2142.855
      },
      {
        denom: 'ueur',
        low_gas_price: 0.625,
        average_gas_price: 0.625,
        high_gas_price: 0.625
      },
      {
        denom: 'ucny',
        low_gas_price: 4.9,
        average_gas_price: 4.9,
        high_gas_price: 4.9
      },
      {
        denom: 'ujpy',
        low_gas_price: 81.85,
        average_gas_price: 81.85,
        high_gas_price: 81.85
      },
      {
        denom: 'ugbp',
        low_gas_price: 0.55,
        average_gas_price: 0.55,
        high_gas_price: 0.55
      },
      {
        denom: 'uinr',
        low_gas_price: 54.4,
        average_gas_price: 54.4,
        high_gas_price: 54.4
      },
      {
        denom: 'ucad',
        low_gas_price: 0.95,
        average_gas_price: 0.95,
        high_gas_price: 0.95
      },
      {
        denom: 'uchf',
        low_gas_price: 0.7,
        average_gas_price: 0.7,
        high_gas_price: 0.7
      },
      {
        denom: 'uaud',
        low_gas_price: 0.95,
        average_gas_price: 0.95,
        high_gas_price: 0.95
      },
      {
        denom: 'usgd',
        low_gas_price: 1,
        average_gas_price: 1,
        high_gas_price: 1
      },
      {
        denom: 'uthb',
        low_gas_price: 23.1,
        average_gas_price: 23.1,
        high_gas_price: 23.1
      },
      {
        denom: 'usek',
        low_gas_price: 6.25,
        average_gas_price: 6.25,
        high_gas_price: 6.25
      },
      {
        denom: 'unok',
        low_gas_price: 6.25,
        average_gas_price: 6.25,
        high_gas_price: 6.25
      },
      {
        denom: 'udkk',
        low_gas_price: 4.5,
        average_gas_price: 4.5,
        high_gas_price: 4.5
      },
      {
        denom: 'uidr',
        low_gas_price: 10900,
        average_gas_price: 10900,
        high_gas_price: 10900
      },
      {
        denom: 'uphp',
        low_gas_price: 38,
        average_gas_price: 38,
        high_gas_price: 38
      },
      {
        denom: 'uhkd',
        low_gas_price: 5.85,
        average_gas_price: 5.85,
        high_gas_price: 5.85
      },
      {
        denom: 'umyr',
        low_gas_price: 3,
        average_gas_price: 3,
        high_gas_price: 3
      },
      {
        denom: 'utwd',
        low_gas_price: 20,
        average_gas_price: 20,
        high_gas_price: 20
      }
    ]
  },
  staking: {
    staking_tokens: [{
        denom: 'uluna'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://terra-classic-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rpc-terra-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://terraclassic-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://terraclassic-rpc-server-01.stakely.io',
        provider: 'Stakely'
      }
    ],
    rest: [
      {
        address: 'https://terra-classic-lcd.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://api-terra-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://terraclassic-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://terraclassic-lcd-server-01.stakely.io',
        provider: 'Stakely'
      }
    ],
    grpc: [
      {
        address: 'grpc.terrarebels.net',
        provider: 'Terra Rebels'
      },
      {
        address: 'terra-classic-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'grpc-terra-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'terraclassic-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/terra',
      tx_page: 'https://ezstaking.app/terra/txs/${txHash}',
      account_page: 'https://ezstaking.app/terra/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/terra-luna',
      tx_page: 'https://ping.pub/terra-luna/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/terra',
      tx_page: 'https://atomscan.com/terra/transactions/${txHash}',
      account_page: 'https://atomscan.com/terra/accounts/${accountAddress}'
    },
    {
      kind: 'finder',
      url: 'https://finder.terra.money/classic',
      tx_page: 'https://finder.terra.money/classic/tx/${txHash}',
      account_page: 'https://finder.terra.money/classic/address/${accountAddress}'
    },
    {
      kind: 'finder',
      url: 'https://finder.terrarebels.net/classic',
      tx_page: 'https://finder.terrarebels.net/classic/tx/${txHash}',
      account_page: 'https://finder.terrarebels.net/classic/address/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg',
      theme: {
        primary_color_hex: '#fcdb5b'
      }
    }]
};
export default info;