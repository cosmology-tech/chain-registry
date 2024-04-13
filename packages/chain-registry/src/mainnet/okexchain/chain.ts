import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'okexchain',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'OKExChain',
  chain_id: 'exchain-66',
  bech32_prefix: 'ex',
  daemon_name: 'exchaind',
  node_home: '$HOME/.exchaind',
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'wei',
        low_gas_price: 200000000,
        average_gas_price: 250000000,
        high_gas_price: 400000000
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/okexchain/images/okc.png'
  },
  apis: {
    rpc: [{
        address: 'https://exchaintmrpc.okex.org',
        provider: 'okx chain'
      }],
    rest: []
  },
  explorers: [{
      kind: 'OKLink',
      url: 'https://www.oklink.com/en/okc',
      tx_page: 'https://www.oklink.com/en/okc/tx/${txHash}',
      account_page: 'https://www.oklink.com/en/okc/address/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/okexchain/images/okc.png'
    }]
};
export default info;