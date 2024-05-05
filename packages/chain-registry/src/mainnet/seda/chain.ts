import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'seda',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.seda.xyz/',
  pretty_name: 'SEDA',
  chain_id: 'seda-1',
  bech32_prefix: 'seda',
  daemon_name: 'sedad',
  node_home: '$HOME/.sedad',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'aseda',
        fixed_min_gas_price: 10000000000,
        low_gas_price: 10000000000,
        average_gas_price: 10000000000,
        high_gas_price: 14000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'aseda'
      }]
  },
  codebase: {
    cosmos_sdk_version: 'v0.50.5'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.svg'
  },
  description: 'SEDA is a standard for modular data transport and querying. Any data type, for all networks.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.mainnet.seda.xyz/',
        provider: 'SEDA'
      },
      {
        address: 'https://seda-rpc.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://seda.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://seda-rpc.synergynodes.com/',
        provider: 'Synergy Nodes'
      },
      {
        address: 'https://seda-rpc.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://seda-rpc.kleomedes.network/',
        provider: 'Kleomedes'
      }
    ],
    rest: [
      {
        address: 'https://lcd.mainnet.seda.xyz/',
        provider: 'SEDA'
      },
      {
        address: 'https://seda-api.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://seda.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://seda-api.synergynodes.com/',
        provider: 'Synergy Nodes'
      },
      {
        address: 'https://seda-api.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://seda-api.kleomedes.network/',
        provider: 'Kleomedes'
      }
    ],
    grpc: [
      {
        address: 'seda-grpc.polkachu.com:25890',
        provider: 'Polkachu'
      },
      {
        address: 'https://seda-grpc.synergynodes.com/',
        provider: 'Synergy Nodes'
      },
      {
        address: 'seda.grpc.kjnodes.com:443',
        provider: 'kjnodes'
      },
      {
        address: 'https://seda-grpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝'
      }
    ]
  },
  explorers: [{
      kind: 'sedaexplorer',
      url: 'https://explorer.seda.xyz/',
      tx_page: 'https://explorer.seda.xyz/txs/${txHash}',
      account_page: 'https://explorer.seda.xyz/account/${accountAddress}'
    }, {
      kind: 'explorers.guru',
      url: 'https://seda.explorers.guru',
      tx_page: 'https://seda.explorers.guru/transaction/${txHash}',
      account_page: 'https://seda.explorers.guru/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.svg'
    }]
};
export default info;