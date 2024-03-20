import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'injective',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://injective.com/',
  pretty_name: 'Injective',
  chain_id: 'injective-1',
  bech32_prefix: 'inj',
  extra_codecs: ['injective'],
  slip44: 60,
  daemon_name: 'injectived',
  node_home: '$HOME/.injectived',
  fees: {
    fee_tokens: [
      {
        denom: 'inj',
        fixed_min_gas_price: 160000000,
        low_gas_price: 500000000,
        average_gas_price: 700000000,
        high_gas_price: 900000000
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'inj'
      }
    ]
  },
  codebase: {},
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
  },
  description:
    'Injective’s mission is to create a truly free and inclusive financial system through decentralization.',
  apis: {
    rpc: [
      {
        address: 'https://rpc-injective.goldenratiostaking.net',
        provider: 'Golden Ratio Staking'
      },
      {
        address: 'https://injective-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://injective-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc-injective-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://injective-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc-injective.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://rpc-injective-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://injective-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://injective-rpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/injective/rpc',
        provider: 'Stakewolle'
      },
      {
        address: 'https://rpc.injective.bronbro.io/',
        provider: 'Bro_n_Bro'
      }
    ],
    rest: [
      {
        address: 'https://api-injective-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://injective-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://injective-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://lcd-injective.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://api-injective-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://rest-injective.goldenratiostaking.net',
        provider: 'Golden Ratio Staking'
      },
      {
        address: 'https://injective-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'injective-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://injective-api.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/injective/rest',
        provider: 'Stakewolle'
      },
      {
        address: 'https://lcd.injective.bronbro.io/',
        provider: 'Bro_n_Bro'
      }
    ],
    grpc: [
      {
        address: 'grpc-injective-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'injective-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'injective-grpc.polkachu.com:14390',
        provider: 'Polkachu'
      },
      {
        address: 'injective-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc-injective.cosmos-spaces.cloud:9900',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'grpc.injective.posthuman.digital:80',
        provider: 'POSTHUMAN ꝏ DVS'
      },
      {
        address: 'grpc-injective.architectnodes.com:1443',
        provider: 'Architect Nodes'
      },
      {
        address: 'grpc-injective-01.stakeflow.io:2102',
        provider: 'Stakeflow'
      },
      {
        address: 'injective-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'injective-grpc.w3coins.io:14390',
        provider: 'w3coins'
      },
      {
        address: 'grpc-injective.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'grpc.injective.bronbro.io:443',
        provider: 'Bro_n_Bro'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/injective',
      tx_page: 'https://ezstaking.app/injective/txs/${txHash}',
      account_page: 'https://ezstaking.app/injective/account/${accountAddress}'
    },
    {
      kind: 'injectiveprotocol',
      url: 'https://explorer.injective.network/',
      tx_page: 'https://explorer.injective.network/transaction/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/injective',
      tx_page: 'https://ping.pub/injective/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/injective',
      tx_page: 'https://atomscan.com/injective/transactions/${txHash}',
      account_page: 'https://atomscan.com/injective/accounts/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/injective',
      tx_page: 'https://www.mintscan.io/injective/transactions/${txHash}',
      account_page:
        'https://www.mintscan.io/injective/accounts/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/injective',
      account_page: 'https://stakeflow.io/injective/accounts/${accountAddress}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
    }
  ]
};
export default info;
