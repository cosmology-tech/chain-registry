import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'heli',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://helichain.com/',
  pretty_name: 'HeliChain',
  chain_type: 'cosmos',
  chain_id: 'helichain',
  bech32_prefix: 'heli',
  daemon_name: 'helichaind',
  node_home: '$HOME/.helichain',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uheli',
        fixed_min_gas_price: 0.001,
        low_gas_price: 0.001,
        average_gas_price: 0.002,
        high_gas_price: 0.0025
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uheli'
      }],
    lock_duration: {
      time: '1209600s'
    }
  },
  codebase: {
    cosmos_sdk_version: '0.47.4'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.helichain.com/',
        provider: 'HeliChain'
      }],
    rest: [{
        address: 'https://lcd.helichain.com/',
        provider: 'HeliChain'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://explorer.helichain.com/Helichain',
      tx_page: 'https://explorer.helichain.com/Helichain/tx/${txHash}',
      account_page: 'https://explorer.helichain.com/Helichain/account/${accountAddress}'
    }, {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/heli',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=heli&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=heli&addr=${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/heli/images/heli.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/heli/images/heli.svg',
      theme: {
        primary_color_hex: '#fccc24'
      }
    }]
};
export default info;