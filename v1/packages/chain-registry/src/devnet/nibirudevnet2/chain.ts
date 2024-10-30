import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'nibirudevnet2',
  status: 'live',
  network_type: 'devnet',
  website: 'https://nibiru.fi/',
  pretty_name: 'Nibiru',
  chain_type: 'cosmos',
  chain_id: 'nibiru-devnet-2',
  bech32_prefix: 'nibi',
  daemon_name: 'nibid',
  node_home: '$HOME/.nibid',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'unibi',
        fixed_min_gas_price: 0.025,
        low_gas_price: 0.025,
        average_gas_price: 0.05,
        high_gas_price: 0.1
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'unibi'
      }],
    lock_duration: {
      time: '1814400s'
    }
  },
  codebase: {
    cosmos_sdk_version: 'v0.47.7'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg'
  },
  description: 'A Web3 hub ushering in the next era of money',
  apis: {
    wss: [{
        address: 'wss://rpc.devnet-2.nibiru.fi/websocket',
        provider: 'Nibiru Foundation'
      }],
    rpc: [{
        address: 'https://rpc.devnet-2.nibiru.fi',
        provider: 'Nibiru Foundation'
      }],
    rest: [{
        address: 'https://lcd.devnet-2.nibiru.fi',
        provider: 'Nibiru Foundation'
      }],
    grpc: [{
        address: 'grpc.devnet-2.nibiru.fi:443',
        provider: 'Nibiru Foundation'
      }]
  },
  explorers: [{
      kind: 'Nibiru Foundation',
      url: 'https://explorer.nibiru.fi/nibiru-devnet-2',
      tx_page: 'https://explorer.nibiru.fi/nibiru-devnet-2/tx/${txHash}',
      account_page: 'https://explorer.nibiru.fi/nibiru-devnet-2/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg'
    }]
};
export default info;