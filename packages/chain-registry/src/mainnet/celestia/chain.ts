import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'celestia',
  chain_id: 'celestia',
  pretty_name: 'Celestia',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://celestia.org/',
  bech32_prefix: 'celestia',
  daemon_name: 'celestia-appd',
  node_home: '$HOME/.celestia-app',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'utia',
        fixed_min_gas_price: 0.002,
        low_gas_price: 0.01,
        average_gas_price: 0.02,
        high_gas_price: 0.1
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'utia'
      }
    ]
  },
  codebase: {
    cosmos_sdk_version: 'v0.46.16'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
  },
  description:
    'Celestia is a modular data availability network that securely scales with the number of users, making it easy for anyone to launch their own blockchain.',
  apis: {
    rpc: [
      {
        address: 'https://public-celestia-rpc.numia.xyz',
        provider: 'Numia'
      },
      {
        address: 'https://celestia-rpc.mesa.newmetric.xyz',
        provider: 'Newmetric'
      },
      {
        address: 'https://rpc.lunaroasis.net',
        provider: 'Lunar Oasis'
      },
      {
        address: 'https://rpc.celestia.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://celestia-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc-celestia-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://rpc-celestia.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'http://celestia.rpc.nodersteam.com:29657',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://celestia.rpc.interchain.validao.xyz',
        provider: 'ValiDAO'
      },
      {
        address: 'https://celestia-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://celestia.rpc.stakin-nodes.com',
        provider: 'Stakin'
      },
      {
        address: 'https://celestia.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://celestia-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc-celestia.mzonder.com',
        provider: 'MZONDER'
      },
      {
        address: 'https://celestia-rpc.enigma-validator.com',
        provider: 'Enigma'
      },
      {
        address: 'https://rpc-celestia.theamsolutions.info',
        provider: 'AM Solutions'
      },
      {
        address: 'https://celestia-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake | Delegate for StakeDrops'
      },
      {
        address: 'https://rpc.celestia.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://celestia-rpc.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'https://rpc-celestia-full.avril14th.org',
        provider: 'Avril 14th'
      },
      {
        address: 'https://rpc.freshstaking.com/celestia',
        provider: 'FreshSTAKING'
      },
      {
        address: 'https://celestia.cumulo.org.es/',
        provider: 'Cumulo'
      },
      {
        address: 'https://celestia-rpc.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://rpc.celestia-app.bronbro.io',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://celestia-rpc.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    rest: [
      {
        address: 'https://public-celestia-lcd.numia.xyz',
        provider: 'Numia'
      },
      {
        address: 'https://celestia-rest.mesa.newmetric.xyz',
        provider: 'Newmetric'
      },
      {
        address: 'http://celestia.rpc.nodersteam.com:1617',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://api.lunaroasis.net',
        provider: 'Lunar Oasis'
      },
      {
        address: 'https://api.celestia.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://celestia-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://api-celestia-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://api-celestia.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://celestia.rest.interchain.validao.xyz',
        provider: 'ValiDAO'
      },
      {
        address: 'https://celestia-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://celestia.rest.stakin-nodes.com',
        provider: 'Stakin'
      },
      {
        address: 'https://celestia.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://api-celestia.mzonder.com',
        provider: 'MZONDER'
      },
      {
        address: 'https://celestia-lcd.enigma-validator.com',
        provider: 'Enigma'
      },
      {
        address: 'https://rest-celestia.theamsolutions.info',
        provider: 'AM Solutions'
      },
      {
        address: 'https://api.celestia.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://celestia-api.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'https://celestia-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake | Delegate for StakeDrops'
      },
      {
        address: 'https://api-celestia-full.avril14th.org',
        provider: 'Avril 14th'
      },
      {
        address: 'https://celestia.api.cumulo.org.es',
        provider: 'Cumulo'
      },
      {
        address: 'https://celestia-api.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://lcd.celestia-app.bronbro.io',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://celestia-api.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.celestia.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'celestia-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake | Delegate for StakeDrops'
      },
      {
        address: 'https://celestia-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'celestia.grpc.nodersteam.com:9690',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'grpc-celestia-01.stakeflow.io:15002',
        provider: 'Stakeflow'
      },
      {
        address: 'grpc-celestia.cosmos-spaces.cloud:443',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'celestia.grpc.interchain.validao.xyz:443',
        provider: 'ValiDAO'
      },
      {
        address: 'celestia-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'celestia.grpc.stakin-nodes.com:443',
        provider: 'Stakin'
      },
      {
        address: 'celestia.grpc.kjnodes.com:443',
        provider: 'kjnodes'
      },
      {
        address: 'grpc-celestia.mzonder.com:443',
        provider: 'MZONDER'
      },
      {
        address: 'grpc-celestia.theamsolutions.info:443',
        provider: 'AM Solutions'
      },
      {
        address: 'grpc.celestia.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'celestia-grpc.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'grpc-celestia-full.avril14th.org',
        provider: 'Avril 14th'
      },
      {
        address: 'celestia.grpc.cumulo.org.es',
        provider: 'Cumulo'
      },
      {
        address: 'https://celestia-grpc.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'grpc.celestia-app.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'celestia-grpc.noders.services:11090',
        provider: '[NODERS]TEAM'
      }
    ]
  },
  explorers: [
    {
      kind: 'Mintscan',
      url: 'https://mintscan.io/celestia',
      tx_page: 'https://mintscan.io/celestia/txs/${txHash}',
      account_page: 'https://mintscan.io/celestia/address/${accountAddress}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.top/celestia/',
      tx_page: 'https://explorer.nodestake.top/celestia/txs/${txHash}',
      account_page:
        'https://explorer.nodestake.top/celestia/account/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/celestia',
      tx_page: 'https://stakeflow.io/celestia/transactions/${txHash}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/celestia',
      tx_page: 'https://explorer.tcnetwork.io/celestia/transaction/${txHash}',
      account_page:
        'https://explorer.tcnetwork.io/celestia/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Celestia-Mainnet',
      tx_page:
        'https://explorer.stavr.tech/Celestia-Mainnet/transaction/${txHash}',
      account_page:
        'https://explorer.stavr.tech/Celestia-Mainnet/account/${accountAddress}'
    },
    {
      kind: 'AM Solutions',
      url: 'https://explorer.theamsolutions.info/celestia-main',
      tx_page:
        'https://explorer.theamsolutions.info/celestia-main/transaction/${txHash}',
      account_page:
        'https://explorer.theamsolutions.info/celestia-main/account/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/celestia',
      tx_page: 'https://ezstaking.app/celestia/txs/${txHash}',
      account_page: 'https://ezstaking.app/celestia/account/${accountAddress}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
    }
  ]
};
export default info;
