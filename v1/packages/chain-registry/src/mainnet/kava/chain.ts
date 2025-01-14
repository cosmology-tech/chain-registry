import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'kava',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.kava.io/',
  pretty_name: 'Kava',
  chain_type: 'cosmos',
  chain_id: 'kava_2222-10',
  bech32_prefix: 'kava',
  daemon_name: 'kava',
  node_home: '$HOME/.kava',
  slip44: 459,
  alternative_slip44s: [118],
  fees: {
    fee_tokens: [{
        denom: 'ukava',
        low_gas_price: 0.05,
        average_gas_price: 0.1,
        high_gas_price: 0.25
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ukava'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
  },
  description: 'Kava is a decentralized blockchain that combines the speed and interoperability of Cosmos with the developer power of Ethereum.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.data.kava.io',
        provider: 'kava'
      },
      {
        address: 'https://kava-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc-kava-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://kava-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://kava-rpc.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://rpc-kava-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://kava-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://kava.drpc.org',
        provider: 'dRPC'
      },
      {
        address: 'https://rpc.kava.nodestake.org',
        provider: 'NodeStake'
      }
    ],
    rest: [
      {
        address: 'https://api.data.kava.io/',
        provider: 'kava'
      },
      {
        address: 'https://api-kava-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://kava-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://kava-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://kava-api.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://api-kava-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://kava-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://api.kava.nodestake.org',
        provider: 'NodeStake'
      }
    ],
    grpc: [
      {
        address: 'grpc.data.kava.io:443',
        provider: 'kava'
      },
      {
        address: 'grpc-kava-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'kava-grpc.polkachu.com:13990',
        provider: 'Polkachu'
      },
      {
        address: 'kava-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc-kava-01.stakeflow.io:1202',
        provider: 'Stakeflow'
      },
      {
        address: 'kava-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://grpc.kava.nodestake.org',
        provider: 'NodeStake'
      }
    ],
    "evm-http-jsonrpc": [
      {
        address: 'https://evm.kava.io/',
        provider: 'kava'
      },
      {
        address: 'https://kava-evm.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://kava.api.onfinality.io/public',
        provider: 'OnFinality'
      },
      {
        address: 'https://evmrpc.kava.nodestake.org',
        provider: 'NodeStake'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/kava',
      tx_page: 'https://www.mintscan.io/kava/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/kava/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/kava',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=kava&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=kava&addr=${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/kava',
      tx_page: 'https://ezstaking.app/kava/txs/${txHash}',
      account_page: 'https://ezstaking.app/kava/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/kava',
      tx_page: 'https://ping.pub/kava/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/kava',
      tx_page: 'https://atomscan.com/kava/transactions/${txHash}',
      account_page: 'https://atomscan.com/kava/accounts/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/kava',
      account_page: 'https://stakeflow.io/kava/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg',
      theme: {
        primary_color_hex: '#e64942'
      }
    }]
};
export default info;