import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'mantrachaintestnet2',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'MANTRA Dukong Testnet',
  chain_type: 'cosmos',
  chain_id: 'mantra-dukong-1',
  bech32_prefix: 'mantra',
  daemon_name: 'mantrachaind',
  node_home: '$HOME/.mantrachain',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uom',
        fixed_min_gas_price: 0.01,
        low_gas_price: 0.01,
        average_gas_price: 0.02,
        high_gas_price: 0.03
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uom'
      }]
  },
  codebase: {
    cosmos_sdk_version: '0.50.10'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.dukong.mantrachain.io',
        provider: 'MANTRACHAIN'
      }, {
        address: 'https://mantra-testnet-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }],
    rest: [{
        address: 'https://api.dukong.mantrachain.io',
        provider: 'MANTRACHAIN'
      }, {
        address: 'https://mantra-testnet-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }],
    grpc: [{
        address: 'https://grpc.dukong.mantrachain.io',
        provider: 'MANTRACHAIN'
      }, {
        address: 'mantra-testnet-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg'
  },
  explorers: [{
      kind: 'mintscan',
      url: 'https://www.mintscan.io/mantra-testnet',
      tx_page: 'https://mintscan.io/mantra-testnet/txs/${txHash}',
      account_page: 'https://mintscan.io/mantra-testnet/account/${accountAddress}'
    }, {
      kind: 'ping.pub',
      url: 'https://explorer.mantrachain.io',
      tx_page: 'https://explorer.mantrachain.io/MANTRA-Dukong/tx/${txHash}',
      account_page: 'https://explorer.mantrachain.io/MANTRA-Dukong/account/${accountAddress}'
    }],
  keywords: [
    'rwa',
    'wasm',
    'staking',
    'testnet'
  ],
  images: [{
      image_sync: {
        chain_name: 'mantrachain',
        base_denom: 'uom'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg',
      theme: {
        circle: false,
        primary_color_hex: '#fba0c1'
      }
    }]
};
export default info;