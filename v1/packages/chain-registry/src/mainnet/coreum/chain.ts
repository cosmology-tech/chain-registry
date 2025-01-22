import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'coreum',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.coreum.com',
  pretty_name: 'Coreum',
  chain_type: 'cosmos',
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
    git_repo: 'https://github.com/CoreumFoundation/coreum',
    recommended_version: 'v3.0.3',
    compatible_versions: ['v3.0.3'],
    binaries: {
      "linux/amd64": 'https://github.com/CoreumFoundation/coreum/releases/download/v3.0.3/cored-linux-amd64?checksum=sha256:1719a32e6f8e8813d00cd86e1d8d02e893324d4f59fa7a1b8cedc5836140ecef',
      "linux/arm64": 'https://github.com/CoreumFoundation/coreum/releases/download/v3.0.3/cored-linux-arm64?checksum=sha256:cfbbad6803c0327407e4dd222a108505e6ff9e294d7c86e34b6b895b96b61bbd'
    },
    consensus: {
      type: 'cometbft',
      version: '0.37'
    },
    genesis: {
      name: 'v1',
      genesis_url: 'https://raw.githubusercontent.com/CoreumFoundation/coreum/master/genesis/coreum-mainnet-1.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.47'
    },
    cosmwasm: {
      version: '0.44',
      enabled: true
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
      theme: {
        primary_color_hex: '#25d695'
      }
    }, {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg',
      theme: {
        primary_color_hex: '#24d494'
      }
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
      },
      {
        address: 'https://coreum-rpc.chainroot.io',
        provider: 'Chainroot'
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
      },
      {
        address: 'coreum-grpc.chainroot.io:443',
        provider: 'Chainroot'
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
      },
      {
        address: 'https://coreum-api.chainroot.io',
        provider: 'Chainroot'
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
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/coreum',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=coreum&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=coreum&addr=${accountAddress}'
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
    },
    {
      kind: 'Chainroot',
      url: 'https://explorer.chainroot.io/coreum',
      tx_page: 'https://explorer.chainroot.io/coreum/transactions/${txHash}',
      account_page: 'https://explorer.chainroot.io/coreum/accounts/${accountAddress}'
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