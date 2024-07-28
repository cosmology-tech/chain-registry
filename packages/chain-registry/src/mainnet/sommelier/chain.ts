import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'sommelier',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://sommelier.finance/',
  pretty_name: 'Sommelier',
  chain_type: 'cosmos',
  chain_id: 'sommelier-3',
  bech32_prefix: 'somm',
  daemon_name: 'sommelier',
  node_home: '$HOME/.sommelier',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'usomm',
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'usomm'
      }]
  },
  codebase: {
    cosmos_sdk_version: 'v0.46.14'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg'
  },
  description: 'Automated vaults find best-in-class yields while mitigating risk.',
  apis: {
    rpc: [
      {
        address: 'https://sommelier-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc-sommelier.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://somm.rpc.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://sommelier-rpc.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://sommelier-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://somm-rpc.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://sommelier-rpc.w3coins.io',
        provider: 'w3coins'
      }
    ],
    rest: [
      {
        address: 'https://api-sommelier.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://sommelier-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://som.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://sommelier-api.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://sommelier-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://somm-api.kleomedes.network',
        provider: 'Kleomedes'
      }
    ],
    grpc: [
      {
        address: 'sommelier-grpc.polkachu.com:14190',
        provider: 'Polkachu'
      },
      {
        address: 'somm.grpc.m.stavr.tech:114',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'sommelier-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'sommelier-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://grpc.sommelier.nodexcapital.com',
        provider: '⚡NodeX Validator⚡'
      },
      {
        address: 'sommelier-grpc.w3coins.io:14190',
        provider: 'w3coins'
      },
      {
        address: 'grpc.sommelier.validatus.com',
        provider: 'Validatus'
      }
    ]
  },
  explorers: [
    {
      kind: 'sommscan',
      url: 'https://sommscan.io',
      tx_page: 'https://sommscan.io'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/sommelier',
      tx_page: 'https://www.mintscan.io/sommelier/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/sommelier/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/sommelier',
      tx_page: 'https://ezstaking.app/sommelier/txs/${txHash}',
      account_page: 'https://ezstaking.app/sommelier/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Sommelier-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Sommelier-Mainnet/tx/${txHash}',
      account_page: 'https://explorer.stavr.tech/Sommelier-Mainnet/account/${accountAddress}'
    },
    {
      kind: 'NODEXPLORER',
      url: 'https://explorer.nodexcapital.com/sommelier',
      tx_page: 'https://explorer.nodexcapital.com/sommelier/tx/${txHash}',
      account_page: 'https://explorer.nodexcapital.com/sommelier/account/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/sommelier',
      tx_page: 'https://atomscan.com/sommelier/transactions/${txHash}',
      account_page: 'https://atomscan.com/sommelier/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg',
      theme: {
        primary_color_hex: '#f36353'
      }
    }]
};
export default info;