import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'stratos',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.thestratos.org',
  pretty_name: 'Stratos',
  chain_id: 'stratos-1',
  bech32_prefix: 'st',
  daemon_name: 'stchaind',
  node_home: '$HOME/.stchaind',
  key_algos: ['ethsecp256k1'],
  extra_codecs: [],
  slip44: 606,
  fees: {
    fee_tokens: [
      {
        denom: 'wei'
      }
    ]
  },
  codebase: {},
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.thestratos.org',
        provider: 'thestratos.org'
      },
      {
        address: 'https://rpc.stratos.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'http://stratos.rpc.nodersteam.com:26657/',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://rpc-stratos.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      }
    ],
    rest: [
      {
        address: 'https://rest.thestratos.org',
        provider: 'thestratos.org'
      },
      {
        address: 'https://api.stratos.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://lcd-stratos.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.thestratos.org',
        provider: 'thestratos.org'
      },
      {
        address: 'https://grpc.stratos.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'stratos.grpc.nodersteam.com:9090',
        provider: '[NODERS]TEAM'
      }
    ],
    'evm-http-jsonrpc': [
      {
        address: 'https://web3-rpc.thestratos.org',
        provider: 'thestratos.org'
      },
      {
        address: 'https://jsonrpc.stratos.nodestake.top',
        provider: 'NodeStake'
      }
    ]
  },
  explorers: [
    {
      kind: 'bigdipper',
      url: 'https://explorer.thestratos.org',
      tx_page: 'https://explorer.thestratos.org/transactions/${txHash}',
      account_page: 'https://explorer.thestratos.org/accounts/${accountAddress}'
    },
    {
      kind: 'blockscout',
      url: 'https://web3-explorer.thestratos.org',
      tx_page: 'https://web3-explorer.thestratos.org/tx/${txHash}',
      account_page:
        'https://web3-explorer.thestratos.org/address/${accountAddress}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.top/stratos',
      tx_page: 'https://explorer.nodestake.top/stratos/tx/${txHash}',
      account_page:
        'https://explorer.nodestake.top/stratos/accounts/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/stratos',
      tx_page: 'https://explorer.tcnetwork.io/stratos/transaction/${txHash}',
      account_page:
        'https://explorer.tcnetwork.io/stratos/account/${accountAddress}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.svg'
    }
  ]
};
export default info;
