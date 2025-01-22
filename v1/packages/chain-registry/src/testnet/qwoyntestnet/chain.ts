import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'qwoyntestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://qwoyn.studio/',
  pretty_name: 'Qwoyn',
  chain_type: 'cosmos',
  chain_id: 'earendel-1',
  bech32_prefix: 'qwoyn',
  daemon_name: 'qwoynd',
  node_home: '$HOME/.qwoynd',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uqwoyn'
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uqwoyn'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/cosmic-horizon/QWOYN',
    recommended_version: 'v5.2.0',
    compatible_versions: ['v5.2.0'],
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/cosmic-horizon/testnets/main/higgs-boson-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.47.3'
    },
    ibc: {
      type: 'go',
      version: '7.0.1',
      ics_enabled: ['ics20-1', 'ics27-1']
    }
  },
  apis: {
    rpc: [{
        address: 'https://testnet-rpc.qwoyn.studio',
        provider: 'Qwoyn Studios'
      }],
    grpc: [{
        address: 'http://66.42.74.12:9090',
        provider: 'Qwoyn Studios'
      }],
    rest: [{
        address: 'https://testnet-api.qwoyn.studio',
        provider: 'Qwoyn Studios'
      }]
  },
  explorers: [{
      kind: 'pingfork',
      url: 'https://explorer.theamsolutions.info/qwoyn-testnet/',
      tx_page: 'https://explorer.theamsolutions.info/qwoyn-testnet/tx/${txHash}',
      account_page: 'https://explorer.theamsolutions.info/qwoyn-testnet/account/${accountAddress}'
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/qwoyntestnet/images/qwoyn.png'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/qwoyntestnet/images/qwoyn.png'
    }]
};
export default info;