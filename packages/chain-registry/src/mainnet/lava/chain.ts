import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'lava',
  status: 'upcoming',
  network_type: 'mainnet',
  website: 'https://lavanet.xyz/',
  update_link: 'https://raw.githubusercontent.com/lavanet/lava/main/chain.schema.json',
  pretty_name: 'Lava',
  chain_id: 'lava-mainnet-1',
  bech32_prefix: 'lava@',
  daemon_name: 'lavad',
  node_home: '$HOME/.lava',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ulava',
        fixed_min_gas_price: 1e-9,
        low_gas_price: 1e-9,
        average_gas_price: 0.00005,
        high_gas_price: 0.0001
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ulava'
      }],
    lock_duration: {
      time: '1814400s'
    }
  },
  codebase: {
    cosmos_sdk_version: 'github.com/lavanet/cosmos-sdk@v0.47.x-lava',
    cosmwasm_enabled: false
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava-chain-logo.png',
      theme: {
        primary_color_hex: '#FF3900'
      },
      layout: 'logo',
      text_position: 'right'
    }, {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava.png',
      layout: 'logomark'
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava-chain-logo.png'
  },
  description: 'Lava (LAVA) is the data access layer of the modular stack. developers and ecosystems permissionlessly add services to be served or accessed through lava. featuring a fully decentralized open source sdk integrable in frontends and a battle tested fully scalable open source server kit and can be used locally or through managed endpoints. Lava features rpc data access, indexing services, debug apis, archive access and more. Service providers can join the network, earn rewards either in the native token of the chain via token bought subscriptions on chain or through any ibc transferred token via incentive pools created and funded by ecosystems and DAOs. Developers can use the abstraction and go multi chain in seconds, not needing to choose what tools to use, having the access aggregated for them. Build whatever, wherever.',
  apis: {
    rpc: [
      {
        address: 'https://lava-rpc.w3coins.io:443',
        provider: 'w3coins'
      },
      {
        address: 'https://lava-rpc.finteh.org:443',
        provider: 'finteh'
      },
      {
        address: 'https://lava-rpc.y2.finance:443',
        provider: 'YTWOFUND'
      },
      {
        address: 'https://lava-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://rpc.lava-mainnet-1.lava.aviaone.com:443',
        provider: 'AVIAONE'
      },
      {
        address: 'https://lava-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://lava.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://lava.rpc-archive.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      }
    ],
    rest: [
      {
        address: 'https://lava-api.w3coins.io:443',
        provider: 'w3coins'
      },
      {
        address: 'https://lava.api.staking-explorer.com',
        provider: 'Daily DROP'
      },
      {
        address: 'https://lava-api.ibs.team:443',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://api.lava-mainnet-1.lava.aviaone.com',
        provider: 'AVIAONE'
      },
      {
        address: 'https://lava-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://lava.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://lava.api-archive.m.stavr.tech',
        provider: '🔥STAVR🔥'
      }
    ],
    grpc: [
      {
        address: 'lava-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'lava.grpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'lava.grpc-archive.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      }
    ]
  },
  explorers: [{
      kind: 'w3coins',
      url: 'https://lava-explorer.w3coins.io/Lava',
      tx_page: 'https://lava-explorer.w3coins.io/Lava/tx/${txHash}',
      account_page: 'https://lava-explorer.w3coins.io/Lava/account/${accountAddress}'
    }],
  keywords: [
    'modular',
    'data',
    'data access',
    'rpc',
    'staking',
    'dual staking',
    'indexing',
    'incentivized public rpc'
  ]
};
export default info;