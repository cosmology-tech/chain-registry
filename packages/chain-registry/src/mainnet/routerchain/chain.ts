import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../chain.schema.json',
  chain_name: 'routerchain',
  chain_type: 'cosmos',
  chain_id: 'router_9600-1',
  pretty_name: 'Router Protocol',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.routerprotocol.com/',
  bech32_prefix: 'router',
  node_home: '$HOME/.routerd',
  daemon_name: 'routerd',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'route',
        fixed_min_gas_price: 7,
        low_gas_price: 7,
        average_gas_price: 7,
        high_gas_price: 10
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'route'
      }]
  },
  codebase: {
    cosmos_sdk_version: 'v0.47.10',
    cosmwasm_enabled: true,
    cosmwasm_version: 'v0.45.0'
  },
  apis: {
    rpc: [
      {
        address: 'https://sentry.tm.rpc.routerprotocol.com/',
        provider: 'Router'
      },
      {
        address: 'https://router-rpc.genznodes.dev/',
        provider: 'genznodes'
      },
      {
        address: 'https://router.rpc.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️'
      }
    ],
    rest: [
      {
        address: 'https://sentry.lcd.routerprotocol.com/',
        provider: 'Router'
      },
      {
        address: 'https://router-api.genznodes.dev/',
        provider: 'genznodes'
      },
      {
        address: 'https://router.api.nodeshub.online',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️'
      }
    ],
    grpc: [
      {
        address: 'sentry.grpc.routerprotocol.com:9090',
        provider: 'Router'
      },
      {
        address: 'router-grpc.genznodes.dev:3090',
        provider: 'genznodes'
      },
      {
        address: 'router.grpc.nodeshub.online',
        provider: 'Nodes Hub'
      }
    ],
    "evm-http-jsonrpc": [{
        address: 'https://sentry.evm.rpc.routerprotocol.com',
        provider: 'Router'
      }, {
        address: 'https://router-rpc-evm.genznodes.dev',
        provider: 'genznodes'
      }]
  },
  explorers: [
    {
      kind: 'Routerscan',
      url: 'https://routerscan.io/',
      tx_page: 'https://routerscan.io/transactions/${txHash}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.org/router',
      tx_page: 'https://explorer.nodestake.org/router/tx/${txHash}'
    },
    {
      kind: 'Router Explorer',
      url: 'https://router.explorers.guru/',
      tx_page: 'https://router.explorers.guru/transaction/${txHash}'
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️',
      url: 'https://explorer.nodeshub.online/router/',
      tx_page: 'https://explorer.nodeshub.online/router/tx/${txHash}',
      account_page: 'https://explorer.nodeshub.online/router/accounts/${accountAddress}'
    }
  ],
  images: [{
      image_sync: {
        chain_name: 'routerchain',
        base_denom: 'route'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/routerchain/images/router.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/routerchain/images/router.svg',
      theme: {
        primary_color_hex: '#cb0766'
      }
    }]
} as const satisfies Chain;
export default info;