import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'commercionetwork',
  chain_id: 'commercio-3',
  pretty_name: 'Commercio.network',
  status: 'live',
  network_type: 'mainnet',
  bech32_prefix: 'did:com:',
  daemon_name: 'commercionetworkd',
  node_home: '$HOME/.commercionetwork',
  key_algos: ['secp256k1'],
  slip44: 701,
  fees: {
    fee_tokens: [{
        denom: 'ucommercio'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc-mainnet.commercio.network'
      }],
    rest: [{
        address: 'https://lcd-mainnet.commercio.network'
      }]
  },
  explorers: [{
      kind: 'almerico',
      url: 'https://mainnet.commercio.network',
      tx_page: 'https://mainnet.commercio.network/transactions/detail/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.svg',
      theme: {
        primary_color_hex: '#41a68c'
      }
    }]
};
export default info;