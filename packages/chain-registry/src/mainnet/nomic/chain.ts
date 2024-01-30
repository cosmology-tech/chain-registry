import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'nomic',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Nomic',
  website: 'https://nomic.io/',
  chain_id: 'nomic-stakenet-3',
  bech32_prefix: 'nomic',
  daemon_name: 'nomic',
  node_home: '$HOME/.nomic-stakenet-3',
  slip44: 118,
  key_algos: ['secp256k1'],
  fees: {
    fee_tokens: [
      {
        denom: 'unom',
        low_gas_price: 0,
        average_gas_price: 0,
        high_gas_price: 0
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'unom'
      }
    ],
    lock_duration: {
      time: '1209600s'
    }
  },
  codebase: {
    cosmos_sdk_version: 'cosmos-sdk-proto 0.19.0'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nomic.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nomic.svg'
  },
  description:
    'The superior way to use Bitcoin in Cosmos DeFi. Use IBC to securely and efficiently bridge your BTC to Osmosis and more.',
  apis: {
    rpc: [
      {
        address: 'https://stakenet-rpc.nomic.io:2096',
        provider: 'nomic-io'
      },
      {
        address: 'https://nomic-rpc.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc-nomic.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://rpc.nomic.basementnodes.ca:443',
        provider: 'Basement Nodes ⚡️'
      },
      {
        address: 'https://rpc.nomic.bronbro.io:443',
        provider: 'Bro_n_Bro'
      }
    ],
    rest: [
      {
        address: 'https://app.nomic.io:8443',
        provider: 'nomic-io'
      },
      {
        address: 'https://rest.nomic.bronbro.io:443',
        provider: 'Bro_n_Bro'
      }
    ]
  },
  explorers: [
    {
      kind: 'bigdipper',
      url: 'https://bigdipper.live/nomic',
      account_page: 'https://bigdipper.live/nomic/accounts/${accountAddress}',
      tx_page: 'https://bigdipper.live/nomic/transactions/${txHash}'
    },
    {
      kind: 'Zenscan.io',
      url: 'https://nomic.zenscan.io/index.php',
      account_page:
        'https://nomic.zenscan.io/address.php?address=${accountAddress}',
      tx_page: 'https://nomic.zenscan.io/transaction.php?hash=${txHash}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nomic.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nomic.svg'
    }
  ],
  bech32_config: {
    bech32PrefixAccAddr: 'nomic',
    bech32PrefixAccPub: 'nomic',
    bech32PrefixConsAddr: 'nomic',
    bech32PrefixConsPub: 'nomic',
    bech32PrefixValAddr: 'nomic',
    bech32PrefixValPub: 'nomic'
  }
};
export default info;
