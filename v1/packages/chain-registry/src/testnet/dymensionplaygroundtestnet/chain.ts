import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'dymensionplaygroundtestnet',
  chain_type: 'cosmos',
  chain_id: 'dymension_1405-1',
  pretty_name: 'Dymension Playground Testnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://playground.dymension.xyz',
  bech32_prefix: 'dym',
  daemon_name: 'dymd',
  node_home: '$HOME/.dymension',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'adym',
        low_gas_price: 5000000000,
        average_gas_price: 5500000000,
        high_gas_price: 6000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'adym'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/dymensionplaygroundtestnet/images/dymension-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/dymensionplaygroundtestnet/images/dymension-logo.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc-dym-migration-test-2.mzonder.com',
        provider: 'mzonder'
      }],
    rest: [{
        address: 'https://api-dym-migration-test-2.mzonder.com',
        provider: 'mzonder'
      }]
  },
  explorers: [{
      kind: 'dymscan',
      url: 'https://pg.dym.fyi/',
      tx_page: 'https://pg.dym.fyi//tx/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/dymensionplaygroundtestnet/images/dymension-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/dymensionplaygroundtestnet/images/dymension-logo.svg'
    }]
};
export default info;