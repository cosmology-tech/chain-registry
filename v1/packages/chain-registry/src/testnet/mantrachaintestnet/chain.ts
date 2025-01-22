import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'mantrachaintestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'MANTRA Hongbai Testnet',
  chain_type: 'cosmos',
  chain_id: 'mantra-hongbai-1',
  bech32_prefix: 'mantra',
  daemon_name: 'mantrachaind',
  node_home: '$HOME/.mantrachain',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uom',
        fixed_min_gas_price: 0,
        low_gas_price: 0.001,
        average_gas_price: 0.002,
        high_gas_price: 0.003
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uom'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/MANTRA-Finance',
    recommended_version: '1.0.0',
    compatible_versions: ['1.0.0'],
    consensus: {
      type: 'cometbft',
      version: '0.37'
    },
    sdk: {
      type: 'cosmos',
      version: '0.47.3'
    },
    cosmwasm: {
      version: '0.41',
      enabled: true
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.hongbai.mantrachain.io',
        provider: 'MANTRACHAIN'
      }, {
        address: 'https://mantra-testnet-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }],
    rest: [{
        address: 'https://api.hongbai.mantrachain.io',
        provider: 'MANTRACHAIN'
      }, {
        address: 'https://mantra-testnet-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }],
    grpc: [{
        address: 'https://grpc.hongbai.mantrachain.io',
        provider: 'MANTRACHAIN'
      }, {
        address: 'mantra-testnet-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }]
  },
  keywords: ['dex', 'testnet'],
  images: [{
      image_sync: {
        chain_name: 'mantrachain',
        base_denom: 'uom'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg',
      theme: {
        circle: true,
        primary_color_hex: '#fba0c1'
      }
    }]
};
export default info;