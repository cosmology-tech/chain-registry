import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'rizon',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://rizon.world/',
  pretty_name: 'Rizon',
  chain_id: 'titan-1',
  bech32_prefix: 'rizon',
  daemon_name: 'rizond',
  node_home: '$HOME/.rizon',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uatolo',
        low_gas_price: 0.025,
        average_gas_price: 0.025,
        high_gas_price: 0.035
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uatolo'
      }
    ]
  },
  codebase: {},
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpcapi.rizon.world/',
        provider: 'HDAC Technology AG'
      },
      {
        address: 'https://rpc.rizon.chaintools.tech/',
        provider: 'ChainTools'
      },
      {
        address: 'https://rizon-rpc.ibs.team/',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://rizon-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    rest: [
      {
        address: 'https://restapi.rizon.world/',
        provider: 'HDAC Technology AG'
      },
      {
        address: 'https://api.rizon.chaintools.tech/',
        provider: 'ChainTools'
      },
      {
        address: 'https://rizon-api.ibs.team/',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://rizon-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    grpc: [
      {
        address: 'grpc-rizon.mms.team:443',
        provider: 'MMS'
      },
      {
        address: 'rizon-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/rizon',
      tx_page: 'https://ezstaking.app/rizon/txs/${txHash}',
      account_page: 'https://ezstaking.app/rizon/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/rizon',
      tx_page: 'https://www.mintscan.io/rizon/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/rizon/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/rizon',
      tx_page: 'https://ping.pub/rizon/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/rizon',
      tx_page: 'https://atomscan.com/rizon/transactions/${txHash}',
      account_page: 'https://atomscan.com/rizon/accounts/${accountAddress}'
    },
    {
      kind: 'bigdipper',
      url: 'https://bigdipper.live/rizon',
      tx_page: 'https://bigdipper.live/rizon/transactions/${txHash}',
      account_page: 'https://bigdipper.live/rizon/accounts/${accountAddress}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.svg'
    }
  ]
};
export default info;
