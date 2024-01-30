import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'fetchhub',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Fetch.ai',
  chain_id: 'fetchhub-4',
  bech32_prefix: 'fetch',
  daemon_name: 'fetchd',
  node_home: '$HOME/.fetchd',
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'afet',
        low_gas_price: 0.025,
        average_gas_price: 0.025,
        high_gas_price: 0.035
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'afet'
      }
    ]
  },
  codebase: {},
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-fetchhub.fetch.ai:443',
        provider: 'fetch.ai'
      },
      {
        address: 'https://rpc-fetchhub-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://fetch-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://fetchai-rpc.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://fetch-rpc.teasel.org',
        provider: '𝗧𝗲𝗮𝘀𝗲𝗹'
      },
      {
        address: 'https://fetch-rpc.antrixy.org',
        provider: 'Antrix'
      },
      {
        address: 'https://rpc-fetch.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://fetchhub-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://fetch-rpc.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://fetch-rpc.cosmosrescue.com',
        provider: 'cosmosrescue'
      },
      {
        address: 'https://fetch-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://fetch-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://fetch-rpc.highstakes.ch:26657/',
        provider: 'High Stakes 🇨🇭'
      }
    ],
    rest: [
      {
        address: 'https://rest-fetchhub.fetch.ai',
        provider: 'fetch.ai'
      },
      {
        address: 'https://api-fetchhub-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://fetch-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://fetchai-api.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://fetch-rest.teasel.org',
        provider: '𝗧𝗲𝗮𝘀𝗲𝗹'
      },
      {
        address: 'https://fetch-rest.antrixy.org',
        provider: 'Antrix'
      },
      {
        address: 'https://fetchhub-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rest-fetch.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://fetch-api.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://fetch-api.cosmosrescue.com',
        provider: 'cosmosrescue'
      },
      {
        address: 'https://fetch-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://fetch-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://fetch-api.highstakes.ch:1317/',
        provider: 'High Stakes 🇨🇭'
      }
    ],
    grpc: [
      {
        address: 'grpc-fetchhub.fetch.ai:443',
        provider: 'fetch.ai'
      },
      {
        address: 'grpc-fetchhub-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'fetch-grpc.polkachu.com:15290',
        provider: 'Polkachu'
      },
      {
        address: 'fetchhub-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'fetch-grpc.teasel.org:443',
        provider: '𝗧𝗲𝗮𝘀𝗲𝗹'
      },
      {
        address: 'fetch-grpc.antrixy.org:443',
        provider: 'Antrix'
      },
      {
        address: 'fetch-grpc.cosmosrescue.com:9090',
        provider: 'cosmosrescue'
      },
      {
        address: 'fetch-grpc.w3coins.io:15290',
        provider: 'w3coins'
      },
      {
        address: 'fetch-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/fetchai',
      tx_page: 'https://www.mintscan.io/fetchai/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/fetchai/accounts/${accountAddress}'
    },
    {
      kind: 'bigdipper',
      url: 'https://explore-fetchhub.fetch.ai',
      tx_page: 'https://explore-fetchhub.fetch.ai/transactions/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/fetchhub',
      tx_page: 'https://ping.pub/fetchhub/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/fetchai',
      tx_page: 'https://atomscan.com/fetchai/transactions/${txHash}',
      account_page: 'https://atomscan.com/fetchai/accounts/${accountAddress}'
    },
    {
      kind: 'bigdipper',
      url: 'https://fetch-explorer.teasel.org',
      tx_page: 'https://fetch-explorer.teasel.org/transactions/${txHash}'
    },
    {
      kind: 'azoyalabs',
      url: 'https://fetchstation.azoyalabs.com/mainnet',
      tx_page:
        'https://fetchstation.azoyalabs.com/mainnet/explorer/transactions/${txHash}',
      account_page:
        'https://fetchstation.azoyalabs.com/mainnet/explorer/address/${accountAddress}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg'
    }
  ]
};
export default info;
