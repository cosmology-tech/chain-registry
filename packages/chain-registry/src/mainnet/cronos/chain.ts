import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'cronos',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://cronos.org',
  pretty_name: 'Cronos',
  chain_id: 'cronosmainnet_25-1',
  bech32_prefix: 'crc',
  daemon_name: 'cronosd',
  node_home: '$HOME/.cronos',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: 'basecro'
      }
    ]
  },
  codebase: {},
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.cronos.org/',
        provider: 'cronos.org'
      },
      {
        address: 'https://cronos-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    rest: [
      {
        address: 'https://rest.cronos.org/',
        provider: 'cronos.org'
      },
      {
        address: 'https://cronos-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    grpc: [
      {
        address: 'grpc.cronos.org:443',
        provider: 'cronos.org'
      },
      {
        address: 'cronos-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    'evm-http-jsonrpc': [
      {
        address: 'https://evm.cronos.org/',
        provider: 'cronos.org'
      },
      {
        address: 'https://cronos-evm.publicnode.com',
        provider: 'Allnodes.com ⚡️ Nodes & Staking'
      }
    ]
  },
  explorers: [
    {
      kind: 'cronoscan',
      url: 'https://cronoscan.com',
      tx_page: 'https://cronoscan.com/tx/${txHash}'
    },
    {
      kind: 'crypto.org',
      url: 'https://cronos.org/explorer',
      tx_page: 'https://cronos.org/explorer/tx/${txHash}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/cronos',
      tx_page: 'https://ezstaking.app/cronos/txs/${txHash}',
      account_page: 'https://ezstaking.app/cronos/account/${accountAddress}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
    }
  ]
};
export default info;
