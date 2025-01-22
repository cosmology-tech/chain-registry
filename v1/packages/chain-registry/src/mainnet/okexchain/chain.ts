import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'okexchain',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'OKExChain',
  chain_type: 'cosmos',
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
    git_repo: 'https://github.com/okex/exchain',
    recommended_version: 'v1.6.1.1',
    compatible_versions: ['v1.2.2', 'v1.6.1.1'],
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/okx/mainnet/main/genesis.json'
    }
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
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/okexchain/images/okc.png',
      theme: {
        primary_color_hex: '#bbbbbb'
      }
    }]
};
export default info;