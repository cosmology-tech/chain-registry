import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'coss',
  chain_type: 'cosmos',
  chain_id: 'coss-1',
  website: 'https://coss.ink/',
  pretty_name: 'COSS',
  status: 'live',
  network_type: 'mainnet',
  bech32_prefix: 'coss',
  daemon_name: 'cossd',
  node_home: '$HOME/.coss',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ucoss',
        fixed_min_gas_price: 0.025,
        low_gas_price: 0.025,
        average_gas_price: 0.03,
        high_gas_price: 0.04
      },
      {
        denom: 'ucgas',
        fixed_min_gas_price: 0.025,
        low_gas_price: 0.025,
        average_gas_price: 0.03,
        high_gas_price: 0.04
      },
      {
        denom: 'ucias',
        fixed_min_gas_price: 0.025,
        low_gas_price: 0.025,
        average_gas_price: 0.03,
        high_gas_price: 0.04
      }
    ]
  },
  staking: {
    staking_tokens: [{
        denom: 'ucgas'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/coss-inscription/coss',
    recommended_version: 'v0.1.0',
    compatible_versions: ['v0.1.0'],
    genesis: {
      genesis_url: 'https://github.com/coss-inscription/networks/blob/main/mainnet/v1/genesis.json'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/coss.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/coss.svg'
  },
  apis: {
    rpc: [{
        address: 'https://coss-rpc.coss.ink',
        provider: 'StellarGuardian'
      }, {
        address: 'https://coss-rpc.cias.network',
        provider: 'CelestialPhoenix'
      }],
    rest: [{
        address: 'https://coss-rest.coss.ink',
        provider: 'StellarGuardian'
      }, {
        address: 'https://coss-rest.cias.network',
        provider: 'CelestialPhoenix'
      }]
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/coss.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/coss.svg',
      theme: {
        primary_color_hex: '#876317'
      }
    }]
};
export default info;