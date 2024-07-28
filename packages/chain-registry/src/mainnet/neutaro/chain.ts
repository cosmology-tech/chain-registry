import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'neutaro',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://neutaro.com/',
  pretty_name: 'Neutaro',
  chain_type: 'cosmos',
  chain_id: 'Neutaro-1',
  bech32_prefix: 'neutaro',
  daemon_name: 'neutaro',
  node_home: '$HOME/.Neutaro',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uneutaro',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0,
        high_gas_price: 0.035
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uneutaro'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.svg'
  },
  description: 'The Blockchain that is Pioneering Ethical Standards, Values, and Transparency in cross chain Blockchain Technology to drive innovation',
  apis: {
    rpc: [{
        address: 'https://rpc2.neutaro.tech:443',
        provider: 'Neutaro'
      }, {
        address: 'https://rpc3.neutaro.tech:26657',
        provider: 'Neutaro'
      }],
    rest: [{
        address: 'https://api2.neutaro.tech:443',
        provider: 'Neutaro'
      }],
    grpc: [{
        address: 'https://grpc2.neutaro.tech:443',
        provider: 'Neutaro'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://explorer.neutaro.tech/Neutaro',
      tx_page: 'https://explorer.neutaro.tech/Neutaro/tx/${txHash}',
      account_page: 'https://explorer.neutaro.tech/Neutaro/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.svg',
      theme: {
        primary_color_hex: '#cbfb06'
      }
    }]
};
export default info;