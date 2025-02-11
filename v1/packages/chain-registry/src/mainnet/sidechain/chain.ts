import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'sidechain',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://side.one/',
  pretty_name: 'Side Chain',
  chain_type: 'cosmos',
  chain_id: 'sidechain-1',
  bech32_prefix: 'side',
  daemon_name: 'sided',
  node_home: '$HOME/.side',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uside',
        fixed_min_gas_price: 0.0006,
        low_gas_price: 0.0006,
        average_gas_price: 0.0008,
        high_gas_price: 0.001
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uside'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/sideprotocol/side',
    recommended_version: 'v1.0.0',
    compatible_versions: ['v1.0.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.11'
    },
    genesis: {
      genesis_url: 'https://github.com/sideprotocol/networks/raw/main/mainnet/sidechain-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.9'
    },
    ibc: {
      type: 'go',
      version: 'v8.4.0'
    },
    cosmwasm: {
      version: 'v0.53.0',
      enabled: true
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/side.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/side.svg'
  },
  description: 'The other side of Bitcoin, a fully Bitcoin-Compatible L1 blockchain for the BTCFi',
  apis: {
    rpc: [
      {
        address: 'https://rpc.side.one',
        provider: 'Side Protocol'
      },
      {
        address: 'https://rpc.side.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://side-rpc.synergynodes.com',
        provider: 'Synergy Nodes'
      },
      {
        address: 'https://side.publicnode.com',
        provider: 'Allnodes'
      },
      {
        address: 'https://side.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://side-mainnet-rpc.itrocket.net',
        provider: 'ITRocket'
      },
      {
        address: 'https://rpc.side.bh.rocks',
        provider: 'BlockHunters'
      }
    ],
    rest: [
      {
        address: 'https://rest.side.one',
        provider: 'Side Protocol'
      },
      {
        address: 'https://api.side.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://side-api.synergynodes.com',
        provider: 'Synergy Nodes'
      },
      {
        address: 'https://side-rest.publicnode.com',
        provider: 'Allnodes'
      },
      {
        address: 'https://side.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://side-mainnet-api.itrocket.net',
        provider: 'ITRocket'
      },
      {
        address: 'https://api.side.bh.rocks',
        provider: 'BlockHunters'
      }
    ],
    grpc: [
      {
        address: 'grpc.side.one:443',
        provider: 'Side Protocol'
      },
      {
        address: 'grpc.sided.nodestake.org:443',
        provider: 'NodeStake'
      },
      {
        address: 'side-grpc.synergynodes.com:443',
        provider: 'Synergy Nodes'
      },
      {
        address: 'side-grpc.publicnode.com:443',
        provider: 'Allnodes'
      },
      {
        address: 'side.grpc.kjnodes.com:443',
        provider: 'kjnodes'
      },
      {
        address: 'side-mainnet-grpc.itrocket.net:443',
        provider: 'ITRocket'
      },
      {
        address: 'grpc.side.bh.rocks:443',
        provider: 'BlockHunters'
      }
    ]
  },
  explorers: [
    {
      kind: 'Ping Pub',
      url: 'https://ping.pub/side',
      tx_page: 'https://ping.pub/side/tx/${txHash}',
      account_page: 'https://ping.pub/side/account/${accountAddress}'
    },
    {
      kind: 'Ping Pub',
      url: 'https://explorer.nodestake.org/side',
      tx_page: 'https://explorer.nodestake.org/side/tx/${txHash}',
      account_page: 'https://explorer.nodestake.org/side/account/${accountAddress}'
    },
    {
      kind: 'Ping Pub',
      url: 'https://cosmosrun.info/side',
      tx_page: 'https://cosmosrun.info/side/tx/${txHash}',
      account_page: 'https://cosmosrun.info/side/account/${accountAddress}'
    },
    {
      kind: 'Ping Pub',
      url: 'https://explorer.kjnodes.com/side',
      tx_page: 'https://explorer.kjnodes.com/side/tx/${txHash}',
      account_page: 'https://explorer.kjnodes.com/side/account/${accountAddress}'
    },
    {
      kind: 'Ping Pub',
      url: 'https://bh.rocks/side',
      tx_page: 'https://bh.rocks/side/tx/${txHash}',
      account_page: 'https://bh.rocks/side/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/side.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/side.svg',
      theme: {
        primary_color_hex: '#f7771a'
      }
    }]
};
export default info;