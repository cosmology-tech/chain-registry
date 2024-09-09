import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'lava',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://lavanet.xyz/',
  update_link: 'https://raw.githubusercontent.com/lavanet/lava/main/chain.schema.json',
  pretty_name: 'Lava',
  chain_type: 'cosmos',
  chain_id: 'lava-mainnet-1',
  bech32_prefix: 'lava@',
  daemon_name: 'lavad',
  node_home: '$HOME/.lava',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ulava',
        fixed_min_gas_price: 0.00002,
        low_gas_price: 0.00002,
        average_gas_price: 0.025,
        high_gas_price: 0.05
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
    cosmos_sdk_version: 'lavanet/cosmos-sdk v0.47.10-lava-cosmos',
    cosmwasm_enabled: false
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava.png',
      theme: {
        primary_color_hex: '#6f043e'
      }
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava.png'
  },
  description: 'Lava (LAVA) is the data access layer of the modular stack. developers and ecosystems permissionlessly add services to be served or accessed through lava. featuring a fully decentralized open source sdk integrable in frontends and a battle tested fully scalable open source server kit and can be used locally or through managed endpoints. Lava features rpc data access, indexing services, debug apis, archive access and more. Service providers can join the network, earn rewards either in the native token of the chain via token bought subscriptions on chain or through any ibc transferred token via incentive pools created and funded by ecosystems and DAOs. Developers can use the abstraction and go multi chain in seconds, not needing to choose what tools to use, having the access aggregated for them. Build whatever, wherever.',
  apis: {
    rpc: [
      {
        address: 'https://lava.tendermintrpc.lava.build',
        provider: 'Lava Over Lava'
      },
      {
        address: 'https://lava-rpc.w3coins.io:443',
        provider: 'w3coins'
      },
      {
        address: 'https://lava-rpc.finteh.org:26657',
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
        provider: 'AVIAONE 🟢'
      },
      {
        address: 'https://rpc-lava.r93axnodes.cloud:443',
        provider: 'r93AX Nodes'
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
      },
      {
        address: 'https://lava-rpc.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'https://lava.rpc.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://lava-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://lava-rpc.bluestake.net:443',
        provider: 'BlueStake 🚀'
      },
      {
        address: 'https://lava.rpc.stakevillage.net:443',
        provider: 'Stake Village'
      }
    ],
    rest: [
      {
        address: 'https://lava-api.finteh.org:443',
        provider: 'finteh'
      },
      {
        address: 'https://lava.rest.lava.build',
        provider: 'Lava Over Lava'
      },
      {
        address: 'https://lava-api.w3coins.io:443',
        provider: 'w3coins'
      },
      {
        address: 'https://lava-api.ibs.team:443',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://api.lava-mainnet-1.lava.aviaone.com',
        provider: 'AVIAONE 🟢'
      },
      {
        address: 'https://api-lava.r93axnodes.cloud:443',
        provider: 'r93AX Nodes'
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
      },
      {
        address: 'https://lava-api.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'https://lava.api.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://lava-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://lava-api.bluestake.net',
        provider: 'BlueStake 🚀'
      },
      {
        address: 'https://lava.api.stakevillage.net:443',
        provider: 'Stake Village'
      }
    ],
    grpc: [
      {
        address: 'lava.grpc.lava.build:443',
        provider: 'Lava Over Lava'
      },
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
      },
      {
        address: 'lava-grpc.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'lava.grpc.liveraven.net:443',
        provider: 'LiveRaveN'
      },
      {
        address: 'lava-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'lava.grpc.stakevillage.net:443',
        provider: 'Stake Village'
      },
      {
        address: 'grpc-lava.r93axnodes.cloud:443',
        provider: 'r93AX Nodes'
      },
      {
        address: 'grpc.lava-mainnet-1.lava.aviaone.com:9104/',
        provider: 'AVIAONE 🟢'
      }
    ]
  },
  explorers: [
    {
      kind: 'finteh',
      url: 'https://explorer.finteh.org/lava',
      tx_page: 'https://explorer.finteh.org/lava/tx/${txHash}',
      account_page: 'https://explorer.finteh.org/lava/account/${accountAddress}'
    },
    {
      kind: 'guru',
      url: 'https://lava.explorers.guru/',
      tx_page: 'https://lava.explorers.guru/transaction/${txHash}',
      account_page: 'https://lava.explorers.guru/account/${accountAddress}'
    },
    {
      kind: 'w3coins',
      url: 'https://lava-explorer.w3coins.io/Lava',
      tx_page: 'https://lava-explorer.w3coins.io/Lava/tx/${txHash}',
      account_page: 'https://lava-explorer.w3coins.io/Lava/account/${accountAddress}'
    },
    {
      kind: 'Stake Village',
      url: 'https://exp.stakevillage.net/lava-mainnet',
      tx_page: 'https://exp.stakevillage.net/lava-mainnet/tx/${txHash}',
      account_page: 'https://exp.stakevillage.net/lava-mainnet/account/${accountAddress}'
    },
    {
      kind: 'AVIAONE 🟢',
      url: 'https://mainnet.explorer.aviaone.com/lava/',
      tx_page: 'https://mainnet.explorer.aviaone.com/lava/tx/${txHash}',
      account_page: 'https://mainnet.explorer.aviaone.com/lava/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Lava-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Lava-Mainnet/tx/${txHash}',
      account_page: 'https://explorer.stavr.tech/Lava-Mainnet/account/${accountAddress}'
    }
  ],
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