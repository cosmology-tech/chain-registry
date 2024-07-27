import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'paloma',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://palomachain.com/',
  pretty_name: 'Paloma',
  chain_id: 'tumbler',
  bech32_prefix: 'paloma',
  daemon_name: 'palomad',
  node_home: '$HOME/.paloma',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ugrain',
        fixed_min_gas_price: 0
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ugrain'
      }]
  },
  codebase: {
    cosmos_sdk_version: 'v0.50.6'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/paloma/images/paloma.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/paloma/images/paloma.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc-1.paloma.nodes.guru/',
        provider: 'Nodes.Guru'
      }]
  },
  explorers: [{
      kind: 'explorers.guru',
      url: 'https://paloma.explorers.guru/',
      tx_page: 'https://paloma.explorers.guru/transaction/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/paloma/images/paloma.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/paloma/images/paloma.svg'
    }]
};
export default info;