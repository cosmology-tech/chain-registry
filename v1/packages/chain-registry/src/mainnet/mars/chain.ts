import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'mars',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.marsprotocol.io/',
  pretty_name: 'Mars Hub',
  chain_type: 'cosmos',
  chain_id: 'mars-1',
  bech32_prefix: 'mars',
  daemon_name: 'marsd',
  node_home: '$HOME/.mars',
  key_algos: ['secp256k1'],
  slip44: 118,
  alternative_slip44s: [330],
  fees: {
    fee_tokens: [{
        denom: 'umars',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0,
        high_gas_price: 0.01
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'umars'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/mars-protocol/hub',
    recommended_version: 'v1.0.2',
    compatible_versions: ['v1.0.0', 'v1.0.2'],
    consensus: {
      type: 'tendermint',
      version: '0.34.24'
    },
    genesis: {
      genesis_url: 'https://github.com/mars-protocol/networks/raw/main/mars-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.46.7'
    },
    ibc: {
      type: 'go',
      version: '6.1.0',
      ics_enabled: ['ics20-1']
    },
    cosmwasm: {
      version: '0.30.0',
      enabled: true
    }
  },
  description: 'Lend, borrow and earn with an autonomous credit protocol in the Cosmos universe. Open to all, closed to none.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.marsprotocol.io:443',
        provider: 'Delphi Labs'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/mars',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://mars-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://mars-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc.expedition-mars.com',
        provider: 'Expedition Mars'
      },
      {
        address: 'https://mars-rpc.genznodes.dev:443',
        provider: 'genznodes'
      },
      {
        address: 'https://mars-rpc.stakeandrelax.net',
        provider: 'Stake&Relax Validator 🦥'
      },
      {
        address: 'https://mars-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://mars-rpc.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      }
    ],
    rest: [
      {
        address: 'https://rest.marsprotocol.io:443',
        provider: 'Delphi Labs'
      },
      {
        address: 'https://rest.lavenderfive.com:443/mars',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://mars-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://mars-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://lcd.expedition-mars.com:443',
        provider: 'Expedition Mars'
      },
      {
        address: 'https://mars-api.genznodes.dev:443',
        provider: 'genznodes'
      },
      {
        address: 'https://mars-api.stakeandrelax.net',
        provider: 'Stake&Relax Validator 🦥'
      },
      {
        address: 'https://mars-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://mars-api.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      }
    ],
    grpc: [
      {
        address: 'grpc.marsprotocol.io:443',
        provider: 'Delphi Labs'
      },
      {
        address: 'mars.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'mars-grpc.polkachu.com:18590',
        provider: 'Polkachu'
      },
      {
        address: 'mars-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'mars-grpc.genznodes.dev:26090',
        provider: 'genznodes'
      },
      {
        address: 'mars.grpc.kjnodes.com:14590',
        provider: 'kjnodes'
      },
      {
        address: 'grpc.mars.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'mars-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'mars-grpc.stakeandrelax.net:18590',
        provider: 'Stake&Relax 🦥'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/mars-protocol',
      tx_page: 'https://ezstaking.app/mars-protocol/txs/${txHash}',
      account_page: 'https://ezstaking.app/mars-protocol/account/${accountAddress}'
    },
    {
      kind: 'BigDipper',
      url: 'https://explorer.marsprotocol.io',
      tx_page: 'https://explorer.marsprotocol.io/transactions/${txHash}',
      account_page: 'https://explorer.marsprotocol.io/accounts/${accountAddress}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/mars',
      tx_page: 'https://explorer.nodestake.top/mars/transactions/${txHash}',
      account_page: 'https://explorer.nodestake.top/mars/account/${accountAddress}'
    },
    {
      kind: 'Nodes.Guru',
      url: 'https://mars.explorers.guru/',
      tx_page: 'https://mars.explorers.guru/transaction/${txHash}',
      account_page: 'https://mars.explorers.guru/account/${accountAddress}'
    },
    {
      kind: 'MintScan',
      url: 'https://www.mintscan.io/mars-protocol',
      tx_page: 'https://www.mintscan.io/mars-protocol/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/mars-protocol/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/mars',
      tx_page: 'https://ping.pub/mars/tx/${txHash}',
      account_page: 'https://ping.pub/mars/account/${accountAddress}'
    }
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-protocol.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-protocol.svg'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-protocol.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-protocol.svg',
      theme: {
        primary_color_hex: '#040404'
      }
    }]
};
export default info;