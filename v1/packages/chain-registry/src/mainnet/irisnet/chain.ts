import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'irisnet',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'IRISnet',
  chain_type: 'cosmos',
  chain_id: 'irishub-1',
  bech32_prefix: 'iaa',
  daemon_name: 'iris',
  node_home: '$HOME/.iris',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uiris',
        low_gas_price: 0.2,
        average_gas_price: 0.3,
        high_gas_price: 0.4
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uiris'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-irisnet-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://rpc-irisnet-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://irisnet-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://iris-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://iris-rpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://mainnet-iris-rpc.konsortech.xyz',
        provider: 'KonsorTech'
      }
    ],
    rest: [
      {
        address: 'https://api-irisnet-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://api-irisnet-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://irisnet-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://iris-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://iris-api.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://mainnet-iris-api.konsortech.xyz',
        provider: 'KonsorTech'
      }
    ],
    grpc: [
      {
        address: 'grpc-irisnet-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'grpc-irisnet-01.stakeflow.io:1902',
        provider: 'Stakeflow'
      },
      {
        address: 'irisnet-grpc.w3coins.io:22690',
        provider: 'w3coins'
      },
      {
        address: 'iris-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'iris.grpc.kjnodes.com:443',
        provider: 'kjnodes'
      },
      {
        address: 'https://grpc-irisnet.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'iris-mainnet.grpc.l0vd.com:80',
        provider: 'L0vd.com ❤️'
      },
      {
        address: 'mainnet-iris.konsortech.xyz:30090',
        provider: 'KonsorTech'
      }
    ],
    "evm-http-jsonrpc": [{
        address: 'https://iris-evm.publicnode.com',
        provider: 'Allnodes.com ⚡️ Nodes & Staking'
      }, {
        address: 'https://mainnet-iris-evm.konsortech.xyz',
        provider: 'KonsorTech'
      }]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/irisnet',
      tx_page: 'https://ezstaking.app/irisnet/txs/${txHash}',
      account_page: 'https://ezstaking.app/irisnet/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/iris',
      tx_page: 'https://www.mintscan.io/iris/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/iris/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/iris-network',
      tx_page: 'https://ping.pub/iris-network/tx/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/irisnet',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=irisnet&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=irisnet&addr=${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/iris-network',
      tx_page: 'https://atomscan.com/iris-network/transactions/${txHash}',
      account_page: 'https://atomscan.com/iris-network/accounts/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/irisnet',
      account_page: 'https://stakeflow.io/irisnet/accounts/${accountAddress}'
    },
    {
      kind: 'Nodeist Explorer',
      url: 'https://exp.nodeist.net/iris',
      tx_page: 'https://exp.nodeist.net/iris/tx/${txHash}'
    },
    {
      kind: 'L0vd.com ❤️',
      url: 'https://explorers.l0vd.com/iris-mainnet',
      tx_page: 'https://explorers.l0vd.com/iris-mainnet/tx/${txHash}'
    },
    {
      kind: 'KonsorTech',
      url: 'https://explorer.konsortech.xyz/iris',
      tx_page: 'https://explorer.konsortech.xyz/iris/tx/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg',
      theme: {
        primary_color_hex: '#5664ad'
      }
    }]
};
export default info;