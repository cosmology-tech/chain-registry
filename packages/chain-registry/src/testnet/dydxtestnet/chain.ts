import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'dydxtestnet',
  status: 'live',
  website: 'https://dydx.trade/',
  network_type: 'testnet',
  pretty_name: 'dYdX Protocol',
  chain_id: 'dydx-testnet-4',
  bech32_prefix: 'dydx',
  daemon_name: 'dydxprotocold',
  node_home: '$HOME/.dydxprotocol',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'adv4tnt',
        fixed_min_gas_price: 12500000000,
        low_gas_price: 12500000000,
        average_gas_price: 12500000000,
        high_gas_price: 20000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'adv4tnt'
      }]
  },
  codebase: {
    cosmos_sdk_version: 'v0.47.4',
    cosmwasm_enabled: false
  },
  description: 'Our goal is to build open source code that can power a first class product and trading experience.',
  apis: {
    rpc: [
      {
        address: 'https://dydx-rpc-testnet.enigma-validator.com',
        provider: 'Enigma'
      },
      {
        address: 'https://testnet-dydx-rpc.lavenderfive.com',
        provider: 'Lavender Five'
      },
      {
        address: 'https://test-dydx-rpc.kingnodes.com',
        provider: 'kingnodes 👑'
      },
      {
        address: 'https://dydx-testnet-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://dydx-testnet-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    rest: [
      {
        address: 'https://dydx-lcd-testnet.enigma-validator.com',
        provider: 'Enigma'
      },
      {
        address: 'https://testnet-dydx-api.lavenderfive.com',
        provider: 'Lavender Five'
      },
      {
        address: 'https://dydx-testnet-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://dydx-testnet-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    grpc: [
      {
        address: 'https://testnet-dydx-rpc.lavenderfive.com',
        provider: 'Lavender Five'
      },
      {
        address: 'https://dydx-testnet-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'dydx-testnet-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ]
  },
  explorers: [{
      kind: 'mintscan',
      url: 'https://www.mintscan.io/dydx-testnet',
      tx_page: 'https://www.mintscan.io/dydx-testnet/txs/${txHash}',
      account_page: 'https://www.mintscan.io/dydx-testnet/account/${accountAddress}'
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
  },
  images: [{
      image_sync: {
        chain_name: 'dydx'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
    }]
};
export default info;