import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'babylontestnet1',
  status: 'killed',
  website: 'https://www.babylonchain.io',
  network_type: 'testnet',
  pretty_name: 'Babylon Testnet',
  chain_type: 'cosmos',
  chain_id: 'bbn-test1',
  bech32_prefix: 'bbn',
  daemon_name: 'babylond',
  node_home: '$HOME/.babylond',
  key_algos: ['secp256k1'],
  fees: {
    fee_tokens: [{
        denom: 'ubbn'
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ubbn'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
  },
  apis: {
    rpc: [{
        address: 'rpc.testnet.babylonchain.io:26657',
        provider: 'Babylon foundation'
      }],
    rest: [{
        address: 'rpc.testnet.babylonchain.io:1317',
        provider: 'Babylon foundation'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'babylonscan',
      url: 'https://babylonscan.io'
    }, {
      kind: 'explorers.guru',
      url: 'https://babylon.explorers.guru',
      tx_page: 'https://babylon.explorers.guru/transaction/${txHash}'
    }],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
    }],
  slip44: 118
};
export default info;