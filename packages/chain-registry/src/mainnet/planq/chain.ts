import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'planq',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://planq.network/',
  pretty_name: 'Planq',
  chain_id: 'planq_7070-2',
  bech32_prefix: 'plq',
  node_home: '$HOME/.planqd',
  daemon_name: 'planqd',
  key_algos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: 'aplanq',
        fixed_min_gas_price: 20000000000,
        low_gas_price: 30000000000,
        average_gas_price: 35000000000,
        high_gas_price: 40000000000
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'aplanq'
      }
    ]
  },
  codebase: {
    cosmos_sdk_version: 'v0.46.3'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.planq.network',
        provider: 'planq.network'
      },
      {
        address: 'https://planq.rpc.bccnodes.com',
        provider: 'BccNodes'
      },
      {
        address: 'https://rpc.planq.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://planq-rpc.kynraze.com',
        provider: 'Kynraze'
      },
      {
        address: 'https://rpc.planq.indonode.net',
        provider: 'Indonode'
      },
      {
        address: 'https://rpc.planq.roomit.xyz',
        provider: 'RoomIT'
      },
      {
        address: 'https://planq-rpc.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://rpc.planq.safeblock.space',
        provider: 'Safe Block'
      },
      {
        address: 'https://planq.rpc.skynodejs.net',
        provider: 'skynodejs'
      },
      {
        address: 'https://planq-rpc.stake-town.com',
        provider: 'StakeTown'
      }
    ],
    rest: [
      {
        address: 'https://rest.planq.network',
        provider: 'planq.network'
      },
      {
        address: 'https://api.planq.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://planq-api.kynraze.com',
        provider: 'Kynraze'
      },
      {
        address: 'https://api.planq.indonode.net',
        provider: 'Indonode'
      },
      {
        address: 'https://api.planq.roomit.xyz',
        provider: 'RoomIT'
      },
      {
        address: 'https://planq-api.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://api.planq.safeblock.space',
        provider: 'Safe Block'
      },
      {
        address: 'https://planq.api.skynodejs.net',
        provider: 'skynodejs'
      },
      {
        address: 'https://planq-api.stake-town.com',
        provider: 'StakeTown'
      }
    ],
    grpc: [
      {
        address: 'grpc.planq.network:443',
        provider: 'planq.network'
      },
      {
        address: 'planq.grpc.bccnodes.com:443',
        provider: 'BccNodes'
      },
      {
        address: 'grpc.planq.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'https://grpc-planq.nodine.id',
        provider: 'Nodine.id'
      },
      {
        address: 'https://grpc-planq.sxlzptprjkt.xyz:443',
        provider: 'sxlzptprjkt | VALIDATOR'
      },
      {
        address: 'https://grpc.planq.nodexcapital.com:443',
        provider: 'NodeX Validator'
      },
      {
        address: 'https://grpc.planq.roomit.xyz:8443',
        provider: 'RoomIT'
      },
      {
        address: 'https://grpc.planq.hexnodes.co:33090',
        provider: 'Hexnodes'
      },
      {
        address: 'planq-grpc.genznodes.dev:28090',
        provider: 'genznodes'
      },
      {
        address: 'grpc.planq.safeblock.space:9090',
        provider: 'Safe Block'
      },
      {
        address: 'https://planq.grpc.skynodejs.net',
        provider: 'skynodejs'
      },
      {
        address: 'planq-grpc.stake-town.com:443',
        provider: 'StakeTown'
      }
    ],
    'evm-http-jsonrpc': [
      {
        address: 'https://evm-rpc.planq.network',
        provider: 'planq.network'
      },
      {
        address: 'https://jsonrpc.planq.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://rpc-evm-planq.sxlzptprjkt.xyz',
        provider: 'sxlzptprjkt | VALIDATOR'
      },
      {
        address: 'https://jsonrpc.planq.nodexcapital.com',
        provider: 'NodeX Validator'
      },
      {
        address: 'https://planq-rpc-evm.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://evm.planq.safeblock.space',
        provider: 'Safe Block'
      },
      {
        address: 'https://planq-jsonrpc.stake-town.com',
        provider: 'StakeTown'
      }
    ]
  },
  explorers: [
    {
      kind: 'bigdipper',
      url: 'https://explorer.planq.network',
      tx_page: 'https://explorer.planq.network/transactions/${txHash}'
    },
    {
      kind: 'blockscout',
      url: 'https://evm.planq.network',
      tx_page: 'https://evm.planq.network/tx/${txHash}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/planq',
      tx_page: 'https://explorer.nodestake.top/planq/tx/${txHash}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/planq',
      tx_page: 'https://explorer.tcnetwork.io/planq/transaction/${txHash}'
    },
    {
      kind: 'RoomIT',
      url: 'https://explorer.tendermint.roomit.xyz/planq',
      tx_page:
        'https://explorer.tendermint.roomit.xyz/planq/transaction/${txHash}'
    },
    {
      kind: 'Kynraze',
      url: 'https://explorer.kynraze.com/planq',
      tx_page: 'https://explorer.kynraze.com/planq/tx/${txHash}'
    },
    {
      kind: 'THE EXPLORER',
      url: 'https://explorer.sxlzptprjkt.xyz/planq',
      tx_page: 'https://explorer.sxlzptprjkt.xyz/planq/tx/${txHash}'
    },
    {
      kind: 'NODEXPLORER',
      url: 'https://explorer.nodexcapital.com/planq',
      tx_page: 'https://explorer.nodexcapital.com/planq/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/planq',
      tx_page: 'https://atomscan.com/planq/transactions/${txHash}',
      account_page: 'https://atomscan.com/planq/accounts/${accountAddress}'
    },
    {
      kind: 'Indonode',
      url: 'https://explorer.indonode.net/planq',
      tx_page: 'https://explorer.indonode.net/planq/tx/${txHash}'
    },
    {
      kind: 'Safe Block',
      url: 'https://explorer.safeblock.space/planq',
      tx_page: 'https://explorer.safeblock.space/planq/tx/${txHash}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
    }
  ]
};
export default info;
