import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'jackaltestnet2',
  chain_type: 'cosmos',
  chain_id: 'mesomelas-1',
  website: 'https://jackalprotocol.com',
  pretty_name: 'Jackal v4',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'jkl',
  daemon_name: 'canined',
  node_home: '$HOME/.canine',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ujkl',
        fixed_min_gas_price: 0
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://jackal-testnet-v4-rpc.brocha.in',
        provider: 'Brochain'
      }],
    rest: [{
        address: 'https://jackal-testnet-v4-rest.brocha.in',
        provider: 'Brochain'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'PingPub',
      url: 'https://testnet-explorer.brocha.in/Jackal%20v4',
      tx_page: 'https://testnet-explorer.brocha.in/Jackal%20v4/tx/${txHash}',
      account_page: 'https://testnet-explorer.brocha.in/Jackal%20v4/account/${accountAddress}'
    }]
};
export default info;