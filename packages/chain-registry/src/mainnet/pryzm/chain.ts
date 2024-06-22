import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'pryzm',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Pryzm',
  chain_id: 'pryzm-1',
  bech32_prefix: 'pryzm',
  daemon_name: 'pryzmd',
  node_home: '$HOME/.pryzm',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'factory/pryzm1jnhcsa5ddjsjq2t97v6a82z542rduxvtw6wd9h/uauuu',
        fixed_min_gas_price: 0,
        low_gas_price: 0.01,
        average_gas_price: 0.01,
        high_gas_price: 0.01
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'upryzm'
      }]
  },
  codebase: {
    cosmos_sdk_version: 'v0.47.10'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.pryzm.zone',
        provider: 'PRYZM'
      },
      {
        address: 'https://pryzm-rpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://pryzm-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ],
    rest: [
      {
        address: 'https://api.pryzm.zone',
        provider: 'PRYZM'
      },
      {
        address: 'https://pryzm-api.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://pryzm-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.pryzm.zone',
        provider: 'PRYZM'
      },
      {
        address: 'https://pryzm-grpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'pryzm-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm-logo.svg'
  },
  explorers: [{
      kind: 'Chainscope',
      url: 'https://chainsco.pe/pryzm',
      tx_page: 'https://chainsco.pe/pryzm/tx/${txHash}',
      account_page: 'https://chainsco.pe/pryzm/address/${accountAddress}'
    }, {
      kind: 'PingPub',
      url: 'https://cosmosrun.info/pryzm',
      tx_page: 'https://cosmosrun.info/pryzm/tx/${txHash}',
      account_page: 'https://cosmosrun.info/pryzm/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm-logo.svg'
    }]
};
export default info;