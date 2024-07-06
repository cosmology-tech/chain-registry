import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'acrechain',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://arable.finance/',
  pretty_name: 'Acrechain',
  chain_id: 'acre_9052-1',
  bech32_prefix: 'acre',
  node_home: '$HOME/.acred',
  daemon_name: 'acred',
  key_algos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'aacre',
        fixed_min_gas_price: 250000000,
        low_gas_price: 20000000000,
        average_gas_price: 25000000000,
        high_gas_price: 40000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'aacre'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.acre.nodestake.top',
        provider: 'nodestake'
      },
      {
        address: 'https://rpc-acre.synergynodes.com',
        provider: 'Synergy Nodes'
      },
      {
        address: 'https://acrechain-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc.acre.tcnetwork.io',
        provider: 'TC Network'
      },
      {
        address: 'https://mainnet-acre-rpc.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://acred-rpc.staketab.org:443',
        provider: 'Staketab'
      }
    ],
    rest: [
      {
        address: 'https://lcd-acre.synergynodes.com',
        provider: 'Synergy Nodes'
      },
      {
        address: 'https://acrechain-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rest.acre.tcnetwork.io',
        provider: 'TC Network'
      },
      {
        address: 'https://mainnet-acre-api.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://acred-rest.staketab.org',
        provider: 'Staketab'
      }
    ],
    grpc: [
      {
        address: 'grpc.acre.nodestake.top:443',
        provider: 'Nodestake'
      },
      {
        address: 'acrechain-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'acre-grpc.genznodes.dev:27090',
        provider: 'genznodes'
      },
      {
        address: 'services.staketab.com:9008',
        provider: 'Staketab'
      }
    ],
    "evm-http-jsonrpc": [
      {
        address: 'https://jsonrpc-acre.d-stake.xyz',
        provider: 'D-stake'
      },
      {
        address: 'https://rpc2-acre.synergynodes.com',
        provider: 'Synergy Nodes'
      },
      {
        address: 'https://jsonrpc.acre.nodestake.top',
        provider: 'Nodestake'
      },
      {
        address: 'https://acre-rpc-evm.genznodes.dev/',
        provider: 'genznodes'
      },
      {
        address: 'https://evm-acre.sr20de.xyz/',
        provider: 'Sr20de'
      },
      {
        address: 'https://evm.acrescan.com/',
        provider: 'Anonstake'
      },
      {
        address: 'https://json-rpc.acre.tcnetwork.io',
        provider: 'TC Network'
      },
      {
        address: 'https://mainnet-acre-evm.konsortech.xyz',
        provider: 'KonsorTech'
      }
    ]
  },
  explorers: [
    {
      kind: 'blockscout',
      url: 'https://acrescout.mindheartsoul.org',
      tx_page: 'https://acrescout.mindheartsoul.org/tx/${txHash}'
    },
    {
      kind: 'blockscout',
      url: 'https://acrescan.com',
      tx_page: 'https://acrescan.com/tx/${txHash}'
    },
    {
      kind: 'blockscout',
      url: 'https://acreblockexplorer.jet-node.com',
      tx_page: 'https://acreblockexplorer.jet-node.com/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.nodestake.top/acre',
      tx_page: 'https://explorer.nodestake.top/acre/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://cosmosrun.info/acre-mainnet',
      tx_page: 'https://cosmosrun.info/acre-mainnet/tx/${txHash}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/acre',
      tx_page: 'https://explorer.tcnetwork.io/acre/transaction/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg',
      theme: {
        primary_color_hex: '#4aa29e'
      }
    }]
};
export default info;