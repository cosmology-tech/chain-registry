import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'impacthubtestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://www.ixo.world/',
  pretty_name: 'ixo',
  chain_type: 'cosmos',
  chain_id: 'pandora-8',
  bech32_prefix: 'ixo',
  daemon_name: 'ixod',
  node_home: '$HOME/.ixod',
  key_algos: ['secp256k1', 'ed25519'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uixo',
        fixed_min_gas_price: 0.015,
        low_gas_price: 0.015,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uixo'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.testnet.ixo.earth/',
        provider: 'ixoworld'
      }],
    rest: [{
        address: 'https://testnet.ixo.earth/rest/',
        provider: 'ixoworld'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'ixoworld',
      url: 'https://blockscan.testnet.ixo.earth/ixo',
      tx_page: 'https://blockscan.testnet.ixo.earth/ixo/transactions/${txHash}',
      account_page: 'https://blockscan.testnet.ixo.earth/ixo/accounts/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
    }]
};
export default info;