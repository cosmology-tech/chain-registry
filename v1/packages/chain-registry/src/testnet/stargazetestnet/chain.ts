import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'stargazetestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://stargaze.zone/',
  pretty_name: 'Stargaze Testnet',
  chain_type: 'cosmos',
  chain_id: 'elgafar-1',
  bech32_prefix: 'stars',
  daemon_name: 'starsd',
  node_home: '$HOME/.starsd',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ustars',
        low_gas_price: 0.03,
        average_gas_price: 0.04,
        high_gas_price: 0.05
      }]
  },
  codebase: {
    git_repo: 'https://github.com/public-awesome/stargaze',
    recommended_version: 'v7.0.0',
    compatible_versions: ['v7.0.0'],
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    genesis: {
      genesis_url: 'https://github.com/public-awesome/testnets/blob/main/elgafar-1/genesis/genesis.tar.gz?raw=true'
    },
    sdk: {
      type: 'cosmos',
      version: '0.45'
    },
    cosmwasm: {
      version: '0.28',
      enabled: true
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.elgafar-1.stargaze-apis.com',
        provider: 'Stargaze Foundation'
      }, {
        address: 'https://stargaze-testnet-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }],
    rest: [{
        address: 'https://rest.elgafar-1.stargaze-apis.com',
        provider: 'Stargaze Foundation'
      }, {
        address: 'https://stargaze-testnet-api.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }],
    grpc: [{
        address: 'http://grpc-1.elgafar-1.stargaze-apis.com:26660',
        provider: 'Stargaze Foundation'
      }, {
        address: 'http://grpc-2.elgafar-1.stargaze-apis.com:26660',
        provider: 'Stargaze Foundation'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://testnet-explorer.publicawesome.dev/stargaze',
      tx_page: 'https://testnet-explorer.publicawesome.dev/stargaze/tx/${txHash}'
    }]
};
export default info;