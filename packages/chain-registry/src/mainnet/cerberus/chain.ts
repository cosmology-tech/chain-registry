import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'cerberus',
  status: 'killed',
  network_type: 'mainnet',
  website: 'https://cerberus.zone/',
  pretty_name: 'Cerberus',
  chain_id: 'cerberus-chain-1',
  bech32_prefix: 'cerberus',
  daemon_name: 'cerberusd',
  node_home: '$HOME/.cerberus',
  slip44: 118,
  codebase: {

  },
  fees: {
    fee_tokens: [{
        denom: 'ucrbrus',
        fixed_min_gas_price: 0,
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ucrbrus'
      }]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.svg'
  },
  apis: {
    rpc: [],
    rest: [],
    grpc: [{
        address: 'grpc-cerberus-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      }, {
        address: 'cerberus-grpc.polkachu.com:13890',
        provider: 'Polkachu'
      }]
  },
  explorers: [
    {
      kind: 'skynetexplorers',
      url: 'https://skynetexplorers.com/cerberus',
      tx_page: 'https://skynetexplorers.com/cerberus/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/cerberus',
      tx_page: 'https://ping.pub/cerberus/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/cerberus',
      tx_page: 'https://atomscan.com/cerberus/transactions/${txHash}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/cerberus',
      tx_page: 'https://explorer.tcnetwork.io/cerberus/transaction/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.svg',
      theme: {
        primary_color_hex: '#c6c6c9'
      }
    }]
};
export default info;