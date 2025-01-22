import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'gitopiatestnet',
  chain_type: 'cosmos',
  chain_id: 'gitopia-janus-testnet-2',
  pretty_name: 'Gitopia Testnet',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'gitopia',
  daemon_name: 'gitopiad',
  node_home: '$HOME/.gitopia',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'utlore',
        fixed_min_gas_price: 0
      }]
  },
  codebase: {
    git_repo: 'https://gitopia.com/gitopia',
    recommended_version: 'v1.2.0',
    compatible_versions: ['v1.2.0'],
    genesis: {
      genesis_url: 'https://server.gitopia.com/raw/gitopia/testnets/master/gitopia-janus-testnet-2/genesis.json.gz'
    }
  },
  apis: {
    rpc: [{
        address: 'https://gitopia-testnet.nodejumper.io',
        provider: 'NODEJUMPER'
      }],
    rest: [{
        address: 'https://gitopia-testnet.nodejumper.io:1317',
        provider: 'NODEJUMPER'
      }],
    grpc: [{
        address: 'https://gitopia-testnet.nodejumper.io:9090',
        provider: 'NODEJUMPER'
      }]
  },
  explorers: [{
      kind: 'explorer.humans.zone',
      url: 'https://gitopia.explorers.guru/',
      tx_page: 'https://gitopia.explorers.guru/transaction/${txHash}'
    }]
};
export default info;