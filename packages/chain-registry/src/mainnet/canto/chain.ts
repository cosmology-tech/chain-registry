import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../chain.schema.json',
  chain_name: 'canto',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://canto.io/',
  pretty_name: 'Canto',
  chain_type: 'cosmos',
  chain_id: 'canto_7700-1',
  bech32_prefix: 'canto',
  node_home: '$HOME/.cantod',
  daemon_name: 'cantod',
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'acanto',
        fixed_min_gas_price: 1000000000000,
        low_gas_price: 1000000000000,
        average_gas_price: 2000000000000,
        high_gas_price: 3000000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'acanto'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.canto.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://canto-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc.canto.silentvalidator.com/',
        provider: 'silent'
      },
      {
        address: 'https://canto.gravitychain.io:26657',
        provider: 'Althea'
      },
      {
        address: 'https://canto-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc-canto.kewrnode.com',
        provider: 'Kewr Node'
      }
    ],
    rest: [
      {
        address: 'https://api.canto.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://canto-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://api.canto.silentvalidator.com/',
        provider: 'silent'
      },
      {
        address: 'https://canto-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rest-canto.kewrnode.com',
        provider: 'Kewr Node'
      }
    ],
    grpc: [
      {
        address: 'canto-grpc.polkachu.com:15590',
        provider: 'Polkachu'
      },
      {
        address: 'grpc.canto.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'https://grpc.canto.silentvalidator.com/',
        provider: 'silent'
      },
      {
        address: 'https://canto.gravitychain.io:9090',
        provider: 'Althea'
      },
      {
        address: 'canto-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ],
    "evm-http-jsonrpc": [
      {
        address: 'https://canto.neobase.one/',
        provider: 'NeoBase'
      },
      {
        address: 'https://canto.evm.chandrastation.com',
        provider: 'Chandra Station'
      },
      {
        address: 'https://canto.slingshot.finance',
        provider: 'Slingshot'
      },
      {
        address: 'https://jsonrpc.canto.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://evm-rpc.canto.silentvalidator.com/',
        provider: 'silent'
      },
      {
        address: 'https://canto.gravitychain.io:8545',
        provider: 'althea'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://cosmos-explorers.neobase.one/canto',
      tx_page: 'https://cosmos-explorers.neobase.one/canto/tx/${txHash}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/canto',
      tx_page: 'https://explorer.tcnetwork.io/canto/transaction/${txHash}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/canto',
      tx_page: 'https://ezstaking.app/canto/txs/${txHash}',
      account_page: 'https://ezstaking.app/canto/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Canto-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Canto-Mainnet/tx/${txHash}',
      account_page: 'https://explorer.stavr.tech/Canto-Mainnet/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg',
      theme: {
        primary_color_hex: '#1c1f1f'
      }
    }]
} as const satisfies Chain;
export default info;