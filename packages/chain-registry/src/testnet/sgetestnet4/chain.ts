import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'sgetestnet4',
  chain_id: 'sge-network-4',
  pretty_name: 'SGE Testnet4',
  status: 'live',
  network_type: 'testnet',
  website: 'sgenetwork.io',
  bech32_prefix: 'sge',
  daemon_name: 'usge',
  node_home: '$HOME/.sged',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'usge',
        fixed_min_gas_price: 0
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.testnet.sgenetwork.io',
        provider: 'Sge Network'
      },
      {
        address: 'https://testnet-saage-rpc.lavenderfive.com/ ',
        provider: 'Lavender.Five'
      },
      {
        address: 'https://saage-testnet-rpc.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc-t.sge.nodestake.top/',
        provider: 'Nodestake.top'
      }
    ],
    rest: [
      {
        address: 'https://api.testnet.sgenetwork.io',
        provider: 'Sge Network'
      },
      {
        address: 'https://api-t.sge.nodestake.top/',
        provider: 'Nodestake.top'
      },
      {
        address: 'https://saage-testnet-api.polkachu.com/',
        provider: 'Polkachu'
      }
    ]
  },
  explorers: [{
      kind: 'Sge BlockExplorer',
      url: 'https://blockexplorer.testnet.sgenetwork.io/',
      tx_page: 'https://blockexplorer.testnet.sgenetwork.io/sge-network/tx/${txHash}'
    }],
  images: [{
      image_sync: {
        chain_name: 'sge'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg'
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg'
  }
};
export default info;