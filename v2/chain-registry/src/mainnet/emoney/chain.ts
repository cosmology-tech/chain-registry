import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'emoney',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'e-Money',
  chain_id: 'emoney-3',
  bech32_prefix: 'emoney',
  daemon_name: 'emd',
  node_home: '$HOME/.emd',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ungm',
        low_gas_price: 1,
        average_gas_price: 1,
        high_gas_price: 1
      },
      {
        denom: 'eeur',
        low_gas_price: 1,
        average_gas_price: 1,
        high_gas_price: 1
      },
      {
        denom: 'echf',
        low_gas_price: 1,
        average_gas_price: 1,
        high_gas_price: 1
      },
      {
        denom: 'enok',
        low_gas_price: 1,
        average_gas_price: 1,
        high_gas_price: 1
      },
      {
        denom: 'esek',
        low_gas_price: 1,
        average_gas_price: 1,
        high_gas_price: 1
      },
      {
        denom: 'edkk',
        low_gas_price: 1,
        average_gas_price: 1,
        high_gas_price: 1
      }
    ]
  },
  staking: {
    staking_tokens: [{
        denom: 'ungm'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://emoney.validator.network',
        provider: 'e-Money'
      },
      {
        address: 'https://rpc-emoney-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://rpc.emoney.bh.rocks',
        provider: 'BlockHunters 🎯'
      }
    ],
    rest: [
      {
        address: 'https://emoney.validator.network/api/',
        provider: 'e-Money'
      },
      {
        address: 'https://api-emoney-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://api.emoney.bh.rocks',
        provider: 'BlockHunters 🎯'
      }
    ],
    grpc: [{
        address: 'grpc-emoney-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      }, {
        address: 'emoney-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/emoney',
      tx_page: 'https://ezstaking.app/emoney/txs/${txHash}',
      account_page: 'https://ezstaking.app/emoney/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/emoney',
      tx_page: 'https://www.mintscan.io/emoney/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/emoney/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/e-money',
      tx_page: 'https://ping.pub/e-money/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/emoney',
      tx_page: 'https://atomscan.com/emoney/transactions/${txHash}',
      account_page: 'https://atomscan.com/emoney/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg'
    }]
};
export default info;