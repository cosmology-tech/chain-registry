import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'coreum',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.coreum.com',
  pretty_name: 'Coreum',
  chain_id: 'coreum-mainnet-1',
  bech32_prefix: 'core',
  daemon_name: 'cored',
  node_home: '$HOME/.core/coreum-mainnet-1',
  key_algos: ['secp256k1'],
  slip44: 990,
  fees: {
    fee_tokens: [{
        denom: 'ucore',
        fixed_min_gas_price: 0.03125,
        low_gas_price: 0.0625,
        average_gas_price: 0.0625,
        high_gas_price: 62.5
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ucore'
      }],
    lock_duration: {
      time: '168h'
    }
  },
  codebase: {
    cosmos_sdk_version: '0.47',
    cosmwasm_enabled: true,
    cosmwasm_version: '0.44'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
      theme: {
        primary_color_hex: '#25d695'
      }
    }, {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png'
  },
  apis: {
    rpc: [
      {
        address: 'https://full-node.mainnet-1.coreum.dev:26657',
        provider: 'Coreum Foundation'
      },
      {
        address: 'https://full-node-californium.mainnet-1.coreum.dev:26657',
        provider: 'Coreum Foundation'
      },
      {
        address: 'https://full-node-curium.mainnet-1.coreum.dev:26657',
        provider: 'Coreum Foundation'
      },
      {
        address: 'https://full-node-uranium.mainnet-1.coreum.dev:26657',
        provider: 'Coreum Foundation'
      },
      {
        address: 'https://rpc-coreum.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://coreum.rpc.silknodes.io',
        provider: 'Silk Nodes'
      },
      {
        address: 'https://coreum-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rpc.m.core.solonation.io',
        provider: '#SoloNation'
      },
      {
        address: 'https://coreum-rpc.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://coreum-rpc.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/coreum/rpc',
        provider: 'Stakewolle'
      }
    ],
    grpc: [
      {
        address: 'https://full-node.mainnet-1.coreum.dev:9090',
        provider: 'Coreum Foundation'
      },
      {
        address: 'https://full-node-californium.mainnet-1.coreum.dev:9090',
        provider: 'Coreum Foundation'
      },
      {
        address: 'https://full-node-curium.mainnet-1.coreum.dev:9090',
        provider: 'Coreum Foundation'
      },
      {
        address: 'https://full-node-uranium.mainnet-1.coreum.dev:9090',
        provider: 'Coreum Foundation'
      },
      {
        address: 'https://grpc.coreum.nodexcapital.com:444',
        provider: 'NodeX Validator'
      },
      {
        address: 'coreum-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'coreum-grpc.genznodes.dev:35090',
        provider: 'genznodes'
      }
    ],
    rest: [
      {
        address: 'https://rest-coreum.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://coreum.api.silknodes.io',
        provider: 'Silk Nodes'
      },
      {
        address: 'https://full-node.mainnet-1.coreum.dev:1317',
        provider: 'Coreum'
      },
      {
        address: 'https://coreum-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://api.m.core.solonation.io',
        provider: '#SoloNation'
      },
      {
        address: 'https://coreum-api.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://coreum-api.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/coreum/rest',
        provider: 'Stakewolle'
      }
    ]
  },
  explorers: [
    {
      kind: 'Coreum',
      url: 'https://explorer.coreum.com/coreum',
      tx_page: 'https://explorer.coreum.com/coreum/transactions/${txHash}',
      account_page: 'https://explorer.coreum.com/coreum/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/coreum',
      tx_page: 'https://www.mintscan.io/coreum/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/coreum/accounts/${accountAddress}'
    },
    {
      kind: 'NODEXPLORER',
      url: 'https://explorer.nodexcapital.com/coreum',
      tx_page: 'https://explorer.nodexcapital.com/coreum/txs/${txHash}',
      account_page: 'https://explorer.nodexcapital.com/coreum/account/${accountAddress}'
    },
    {
      kind: 'Silk Nodes',
      url: 'https://explorer.silknodes.io/coreum',
      tx_page: 'https://explorer.silknodes.io/coreum/tx/${txHash}',
      account_page: 'https://explorer.silknodes.io/coreum/account/${accountAddress}'
    },
    {
      kind: '#SoloNation',
      url: 'https://explorer.solonation.io/core-main',
      tx_page: 'https://explorer.solonation.io/core-main/tx/${txHash}',
      account_page: 'https://explorer.solonation.io/core-main/account/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/coreum',
      tx_page: 'https://explorer.tcnetwork.io/coreum/transaction/${txHash}',
      account_page: 'https://explorer.tcnetwork.io/coreum/account/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/coreum',
      tx_page: 'https://ezstaking.app/coreum/txs/${txHash}',
      account_page: 'https://ezstaking.app/coreum/account/${accountAddress}'
    }
  ],
  keywords: [
    'dex',
    'staking',
    'wasm',
    'assets',
    'nft',
    'XRPL'
  ]
};
export default info;