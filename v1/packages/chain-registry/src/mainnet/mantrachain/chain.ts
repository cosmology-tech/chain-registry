import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'mantrachain',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'MANTRA',
  chain_type: 'cosmos',
  chain_id: 'mantra-1',
  bech32_prefix: 'mantra',
  daemon_name: 'mantrachaind',
  node_home: '$HOME/.mantrachain',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uom',
        fixed_min_gas_price: 0.01,
        low_gas_price: 0.01,
        average_gas_price: 0.02,
        high_gas_price: 0.03
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uom'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/MANTRA-Chain/mantrachain',
    recommended_version: 'v1.0.3',
    compatible_versions: [
      'v1.0.3',
      'v1.0.1',
      'v1.0.0',
      'v1.0.0-rc3'
    ],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.15'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.8',
      repo: 'https://github.com/MANTRA-Chain/cosmos-sdk'
    },
    cosmwasm: {
      version: 'v0.53.0',
      enabled: true
    },
    ibc: {
      type: 'go',
      version: 'v8.5.1'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/MANTRA-Chain/mantrachain/refs/heads/main/networks/mantra-1/genesis.json'
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.mantrachain.io',
        provider: 'MANTRACHAIN'
      },
      {
        address: 'https://rpc-mantra.r93axnodes.cloud:443',
        provider: 'r93AX Nodes'
      },
      {
        address: 'https://mantrachain-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://mantra-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://mantra-mainnet-rpc.itrocket.net:443',
        provider: 'ITRocket'
      },
      {
        address: 'https://mantra.rpc.m.stavr.tech',
        provider: '🔥STAVR🔥'
      }
    ],
    rest: [
      {
        address: 'https://api.mantrachain.io',
        provider: 'MANTRACHAIN'
      },
      {
        address: 'https://api-mantra.r93axnodes.cloud:443',
        provider: 'r93AX Nodes'
      },
      {
        address: 'https://mantrachain-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://mantra-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://mantra-mainnet-api.itrocket.net',
        provider: 'ITRocket'
      },
      {
        address: 'https://mantra.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.mantrachain.io',
        provider: 'MANTRACHAIN'
      },
      {
        address: 'grpc-mantra.r93axnodes.cloud:443',
        provider: 'r93AX Nodes'
      },
      {
        address: 'mantrachain-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'mantra-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'mantra-mainnet-grpc.itrocket.net:443',
        provider: 'ITRocket'
      },
      {
        address: 'mantra.grpc.m.stavr.tech:3601',
        provider: '🔥STAVR🔥'
      }
    ]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg'
  },
  explorers: [{
      kind: 'ITRocket',
      url: 'https://mainnet.itrocket.net/mantra',
      tx_page: 'https://mainnet.itrocket.net/mantra/transaction/${txHash}',
      account_page: 'https://mainnet.itrocket.net/mantra/account/${accountAddress}'
    }, {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Mantra-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Mantra-Mainnet/transaction/${txHash}',
      account_page: 'https://explorer.stavr.tech/Mantra-Mainnet/account/${accountAddress}'
    }],
  keywords: [
    'rwa',
    'wasm',
    'staking'
  ],
  images: [{
      image_sync: {
        chain_name: 'mantrachain',
        base_denom: 'uom'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg',
      theme: {
        circle: true,
        primary_color_hex: '#fba0c1'
      }
    }]
};
export default info;