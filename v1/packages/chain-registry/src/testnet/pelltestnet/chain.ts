import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'pelltestnet',
  chain_type: 'cosmos',
  chain_id: 'ignite_186-1',
  pretty_name: 'Pell Ignite Testnet',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'pell',
  daemon_name: 'pellcored',
  node_home: '$HOME/.pellcored',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'apell',
        fixed_min_gas_price: 0
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [
      {
        address: 'https://pell-testnet-rpc.cosmonautstakes.com',
        provider: 'Cosmonaut Stakes'
      },
      {
        address: 'https://pell-testnet-rpc.hibunode.com',
        provider: 'HibuNode'
      },
      {
        address: 'https://rpc-t.pell.nodestake.org',
        provider: 'NodeStake'
      }
    ],
    rest: [
      {
        address: 'https://pell-testnet-rest.cosmonautstakes.com',
        provider: 'Cosmonaut Stakes'
      },
      {
        address: 'https://pell-testnet-api.hibunode.com',
        provider: 'HibuNode'
      },
      {
        address: 'https://api-t.pell.nodestake.org',
        provider: 'NodeStake'
      }
    ],
    grpc: [{
        address: 'pell-testnet-grpc.cosmonautstakes.com:15290',
        provider: 'Cosmonaut Stakes'
      }, {
        address: 'https://grpc-t.pell.nodestake.org:443',
        provider: 'NodeStake'
      }],
    "evm-http-jsonrpc": [{
        address: 'pell-testnet-evm.cosmonautstakes.com:443',
        provider: 'Cosmonaut Stakes'
      }, {
        address: 'https://evmrpc-t.pell.nodestake.org',
        provider: 'NodeStake'
      }]
  },
  explorers: [{
      kind: 'testnet.pell.explorers.guru',
      url: 'https://testnet.pell.explorers.guru/',
      tx_page: 'https://testnet.pell.explorers.guru/transaction/${txHash}'
    }, {
      kind: 'explorer.hibunode.com',
      url: 'https://explorer.hibunode.com/pell',
      tx_page: 'https://explorer.hibunode.com/pell/tx/${txHash}'
    }]
};
export default info;