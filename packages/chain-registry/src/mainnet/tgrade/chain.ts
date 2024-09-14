import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../chain.schema.json',
  chain_name: 'tgrade',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://tgrade.finance/',
  pretty_name: 'Tgrade',
  chain_type: 'cosmos',
  chain_id: 'tgrade-mainnet-1',
  bech32_prefix: 'tgrade',
  daemon_name: 'tgrade',
  node_home: '$HOME/.tgrade',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'utgd',
        fixed_min_gas_price: 0.05,
        low_gas_price: 0.05,
        average_gas_price: 0.075,
        high_gas_price: 0.1
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'utgd'
      }]
  },
  codebase: {
    cosmwasm_enabled: true
  },
  apis: {
    rpc: [{
        address: 'https://rpc.mainnet-1.tgrade.confio.run',
        provider: 'Confio'
      }, {
        address: 'https://rpc.tgrade.posthuman.digital',
        provider: 'POSTHUMAN ꝏ DVS'
      }],
    rest: [{
        address: 'https://api.mainnet-1.tgrade.confio.run',
        provider: 'Confio'
      }, {
        address: 'https://lcd.tgrade.posthuman.digital',
        provider: 'POSTHUMAN ꝏ DVS'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'aneka',
      url: 'https://tgrade.aneka.io',
      tx_page: 'https://tgrade.aneka.io/txs/${txHash}',
      account_page: 'https://tgrade.aneka.io/accounts/${accountAddress}'
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-logo-gradient_h.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-logo-gradient_h.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg',
      theme: {
        primary_color_hex: '#c9167b'
      }
    }]
} as const satisfies Chain;
export default info;