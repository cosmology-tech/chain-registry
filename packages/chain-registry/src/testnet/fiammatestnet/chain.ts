import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'fiammatestnet',
  status: 'live',
  website: 'https://www.fiammachain.io',
  network_type: 'testnet',
  pretty_name: 'Fiamma Testnet',
  chain_id: 'fiamma-testnet-1',
  bech32_prefix: 'fiamma',
  daemon_name: 'fiammad',
  node_home: '$HOME/.fiamma',
  key_algos: ['secp256k1'],
  fees: {
    fee_tokens: [{
        denom: 'ufia'
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ufia'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/fiammatestnet/images/fiamma.svg'
  },
  apis: {
    rpc: [{
        address: 'https://testnet-rpc.fiammachain.io',
        provider: 'Fiamma'
      }],
    rest: [{
        address: 'https://testnet-api.fiammachain.io',
        provider: 'Fiamma'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://testnet-explorer.fiammachain.io/'
    }],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/fiammatestnet/images/fiamma.svg'
    }],
  slip44: 118
};
export default info;