import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const stride: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "stride",
  "status": "live",
  "network_type": "mainnet",
  "website": "https://stride.zone/",
  "pretty_name": "Stride",
  "chain_id": "stride-1",
  "bech32_prefix": "stride",
  "daemon_name": "strided",
  "node_home": "$HOME/.stride",
  "key_algos": [
    "ed25519"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "ustrd",
        "fixed_min_gas_price": 0.0005,
        "low_gas_price": 0.0005,
        "average_gas_price": 0.001,
        "high_gas_price": 0.002
      },
      {
        "denom": "stuatom",
        "fixed_min_gas_price": 0.0001,
        "low_gas_price": 0.0001,
        "average_gas_price": 0.0002,
        "high_gas_price": 0.0005
      },
      {
        "denom": "stuosmo",
        "fixed_min_gas_price": 0.001,
        "low_gas_price": 0.001,
        "average_gas_price": 0.002,
        "high_gas_price": 0.004
      },
      {
        "denom": "stustars",
        "fixed_min_gas_price": 1,
        "low_gas_price": 1,
        "average_gas_price": 1.1,
        "high_gas_price": 1.2
      },
      {
        "denom": "stujuno",
        "fixed_min_gas_price": 0.075,
        "low_gas_price": 0.075,
        "average_gas_price": 0.1,
        "high_gas_price": 0.125
      },
      {
        "denom": "stuluna",
        "fixed_min_gas_price": 0.0125,
        "low_gas_price": 0.0125,
        "average_gas_price": 0.015,
        "high_gas_price": 0.04
      },
      {
        "denom": "staevmos",
        "fixed_min_gas_price": 250000000,
        "low_gas_price": 20000000000,
        "average_gas_price": 25000000000,
        "high_gas_price": 40000000000
      },
      {
        "denom": "stinj",
        "fixed_min_gas_price": 500000000,
        "low_gas_price": 500000000,
        "average_gas_price": 700000000,
        "high_gas_price": 900000000
      },
      {
        "denom": "stucmdx",
        "fixed_min_gas_price": 0.02,
        "low_gas_price": 0.02,
        "average_gas_price": 0.025,
        "high_gas_price": 0.04
      },
      {
        "denom": "stuumee",
        "fixed_min_gas_price": 0.1,
        "low_gas_price": 0.1,
        "average_gas_price": 0.12,
        "high_gas_price": 0.2
      },
      {
        "denom": "stutia",
        "fixed_min_gas_price": 0.002,
        "low_gas_price": 0.01,
        "average_gas_price": 0.02,
        "high_gas_price": 0.1
      },
      {
        "denom": "stadydx",
        "fixed_min_gas_price": 15000000000,
        "low_gas_price": 15000000000,
        "average_gas_price": 15000000000,
        "high_gas_price": 20000000000
      },
      {
        "denom": "stadym",
        "fixed_min_gas_price": 15000000000,
        "low_gas_price": 15000000000,
        "average_gas_price": 15000000000,
        "high_gas_price": 20000000000
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "ustrd"
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/Stride-Labs/stride",
    "recommended_version": "v19.0.0",
    "compatible_versions": [
      "v19.0.0"
    ],
    "cosmos_sdk_version": "Stride-Labs/cosmos-sdk v0.47.5-stride-distribution-fix-0",
    "consensus": {
      "type": "cometbft",
      "version": "v0.37.4"
    },
    "ibc_go_version": "7.3.1",
    "genesis": {
      "genesis_url": "https://raw.githubusercontent.com/Stride-Labs/testnet/main/mainnet/genesis.json",
      "ics_ccv_url": "https://raw.githubusercontent.com/Stride-Labs/mainnet/main/ics-instructions/ccv.json"
    },
    "versions": [
      {
        "name": "v8",
        "recommended_version": "v8.0.0",
        "compatible_versions": [
          "v8.0.0"
        ],
        "cosmos_sdk_version": "0.46",
        "consensus": {
          "type": "tendermint",
          "version": "0.34"
        },
        "ibc_go_version": "5.1.0",
        "next_version_name": "v9"
      },
      {
        "name": "v9",
        "height": 3396933,
        "recommended_version": "v9.2.1",
        "compatible_versions": [
          "v9.0.0",
          "v9.2.1"
        ],
        "proposal": 202,
        "next_version_name": "v10"
      },
      {
        "name": "v10",
        "height": 4191914,
        "proposal": 206,
        "recommended_version": "v10.0.0",
        "compatible_versions": [
          "v10.0.0"
        ],
        "ibc_go_version": "7.1.0",
        "cosmos_sdk_version": "0.47.3",
        "next_version_name": "v11"
      },
      {
        "name": "v11",
        "tag": "v11.0.0",
        "height": 4291924,
        "proposal": 207,
        "recommended_version": "v11.0.0",
        "compatible_versions": [
          "v11.0.0"
        ],
        "ibc_go_version": "7.2.0",
        "next_version_name": "v12"
      },
      {
        "name": "v12",
        "tag": "v12.1.0",
        "height": 4616678,
        "proposal": 208,
        "recommended_version": "v12.1.0",
        "compatible_versions": [
          "v12.1.0"
        ],
        "consensus": {
          "type": "cometbft",
          "version": "0.37.2"
        },
        "ibc_go_version": "7.2.0",
        "next_version_name": "v13"
      },
      {
        "name": "v13",
        "tag": "v13.1.0",
        "height": 5044405,
        "proposal": 211,
        "recommended_version": "v13.1.0",
        "compatible_versions": [
          "v13.1.0"
        ],
        "consensus": {
          "type": "cometbft",
          "version": "0.37.2"
        },
        "ibc_go_version": "7.2.0",
        "next_version_name": "v14"
      },
      {
        "name": "v14",
        "tag": "v14.0.0",
        "height": 5223225,
        "proposal": 214,
        "recommended_version": "v14.0.0",
        "compatible_versions": [
          "v14.0.0"
        ],
        "consensus": {
          "type": "cometbft",
          "version": "0.37.2"
        },
        "ibc_go_version": "7.2.0",
        "next_version_name": "v15"
      },
      {
        "name": "v15",
        "tag": "v15.0.0",
        "height": 5532355,
        "proposal": 217,
        "recommended_version": "v15.0.0",
        "compatible_versions": [
          "v15.0.0"
        ],
        "consensus": {
          "type": "cometbft",
          "version": "0.37.2"
        },
        "ibc_go_version": "7.2.0",
        "next_version_name": "v16"
      },
      {
        "name": "v16",
        "tag": "v16.0.0",
        "recommended_version": "v16.0.0",
        "compatible_versions": [
          "v16.0.0"
        ],
        "proposal": 220,
        "height": 5932395,
        "consensus": {
          "type": "cometbft",
          "version": "0.37.2"
        },
        "ibc_go_version": "7.2.0",
        "next_version_name": "v17"
      },
      {
        "name": "v17",
        "tag": "v17.0.0",
        "recommended_version": "v17.0.0",
        "compatible_versions": [
          "v17.0.0"
        ],
        "proposal": 226,
        "height": 7244427,
        "cosmos_sdk_version": "v0.47.5-stride-distribution-fix-0",
        "consensus": {
          "type": "cometbft",
          "version": "v0.37.2"
        },
        "ibc_go_version": "7.3.1",
        "next_version_name": "v18"
      },
      {
        "name": "v18",
        "tag": "v18.0.0",
        "recommended_version": "v18.0.0",
        "compatible_versions": [
          "v18.0.0"
        ],
        "proposal": 229,
        "height": 7464647,
        "cosmos_sdk_version": "Stride-Labs/cosmos-sdk v0.47.5-stride-distribution-fix-0",
        "consensus": {
          "type": "cometbft",
          "version": "v0.37.2"
        },
        "ibc_go_version": "7.3.1",
        "next_version_name": "v19"
      },
      {
        "name": "v19",
        "tag": "v19.0.0",
        "recommended_version": "v19.0.0",
        "compatible_versions": [
          "v19.0.0"
        ],
        "proposal": 233,
        "height": 8064608,
        "cosmos_sdk_version": "Stride-Labs/cosmos-sdk v0.47.5-stride-distribution-fix-0",
        "consensus": {
          "type": "cometbft",
          "version": "v0.37.2"
        },
        "ibc_go_version": "7.3.1",
        "next_version_name": "v19"
      }
    ]
  },
  "description": "Stride is a blockchain that provides liquidity for staked tokens. Using Stride, you can earn both taking and DeFi yields across the Cosmos IBC ecosystem.",
  "peers": {
    "seeds": [
      {
        "id": "babc3f3f7804933265ec9c40ad94f4da8e9e0017",
        "address": "seed.rhinostake.com:12256",
        "provider": "RHINO"
      },
      {
        "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
        "address": "seeds.polkachu.com:12256",
        "provider": "Polkachu"
      },
      {
        "id": "cb91a11588d66cfd9c01f99541df4978a08e0e39",
        "address": "seedv1.main.stridenet.co:26656",
        "provider": "Stride"
      },
      {
        "id": "20e1000e88125698264454a884812746c2eb4807",
        "address": "seeds.lavenderfive.com:12256",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
        "address": "stride-mainnet-seed.autostake.com:26886",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "id": "400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc",
        "address": "stride.rpc.kjnodes.com:11659",
        "provider": "kjnodes"
      },
      {
        "id": "86bd5cb6e762f673f1706e5889e039d5406b4b90",
        "address": "stride.seed.node75.org:10456",
        "provider": "Pro-Nodes75"
      },
      {
        "id": "8542cd7e6bf9d260fef543bc49e59be5a3fa9074",
        "address": "seed.publicnode.com:26656",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "id": "c28827cb96c14c905b127b92065a3fb4cd77d7f6",
        "address": "seeds.whispernode.com:12256",
        "provider": "WhisperNode 🤐"
      },
      {
        "id": "ced7684f4d60399986cdbc1465ac00a420a14202",
        "address": "seed-stride-01.stakeflow.io:1807",
        "provider": "Stakeflow"
      }
    ],
    "persistent_peers": [
      {
        "id": "df3f533e6b9776c11f08da804edcb810cbdd2080",
        "address": "65.108.234.23:12256",
        "provider": "Polkachu-2"
      },
      {
        "id": "e821acdaf0c7a3c60ea3cd4eb4a98a62dad06f58",
        "address": "43.201.12.41:26656",
        "provider": "Cosmostation-2"
      },
      {
        "id": "a7b4cf6f65138ba61518c2c45402da32dc8e28b7",
        "address": "stride.peer.stavr.tech:21016",
        "provider": "🔥STAVR🔥"
      },
      {
        "id": "b5f9fa874781f975687018ae559f0d952d3a2e24",
        "address": "52.52.208.179:26656",
        "provider": "Cosmostation-3"
      },
      {
        "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
        "address": "stride-mainnet-peer.autostake.com:26886",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "id": "ced7684f4d60399986cdbc1465ac00a420a14202",
        "address": "peer-stride-01.stakeflow.io:1807",
        "provider": "Stakeflow"
      },
      {
        "id": "4d17c6e85a1e6282efee950ff3dfe85b4b043f0f",
        "address": "148.251.51.144:26656",
        "provider": "Stake-Take"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://stride-rpc.polkachu.com/",
        "provider": "Polkachu"
      },
      {
        "address": "https://stride-rpc.onivalidator.com",
        "provider": "Oni Validator ⛩️"
      },
      {
        "address": "https://stride-rpc.lavenderfive.com/",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://rpc.stride.silentvalidator.com/",
        "provider": "silent"
      },
      {
        "address": "https://rpc-stride.cosmos-spaces.cloud",
        "provider": "Cosmos Spaces"
      },
      {
        "address": "https://stride.rpc.kjnodes.com",
        "provider": "kjnodes"
      },
      {
        "address": "https://rpc-stride.pupmos.network",
        "provider": "PUPMØS"
      },
      {
        "address": "https://rpc-stride.architectnodes.com",
        "provider": "Architect Nodes"
      },
      {
        "address": "https://rpc-stride.whispernode.com:443",
        "provider": "WhisperNode 🤐"
      },
      {
        "address": "https://stride-mainnet-rpc.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "https://rpc-stride-01.stakeflow.io",
        "provider": "Stakeflow"
      },
      {
        "address": "https://stride-rpc.w3coins.io",
        "provider": "w3coins"
      },
      {
        "address": "https://stride-rpc.publicnode.com:443",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "address": "https://community.nuxian-node.ch:6797/stride/trpc",
        "provider": "PRO Delegators"
      },
      {
        "address": "https://stride-rpc.stakeandrelax.net",
        "provider": "Stake&Relax 🦥"
      },
      {
        "address": "https://rpc.stride.bronbro.io:443",
        "provider": "Bro_n_Bro"
      },
      {
        "address": "https://public.stakewolle.com/cosmos/stride/rpc",
        "provider": "Stakewolle"
      }
    ],
    "rest": [
      {
        "address": "https://stride-api.polkachu.com/",
        "provider": "Polkachu"
      },
      {
        "address": "https://api-stride.cosmos-spaces.cloud",
        "provider": "Cosmos Spaces"
      },
      {
        "address": "https://stride-api.lavenderfive.com/",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://api.stride.silentvalidator.com/",
        "provider": "silent"
      },
      {
        "address": "https://stride.api.kjnodes.com",
        "provider": "kjnodes"
      },
      {
        "address": "https://api-stride.pupmos.network",
        "provider": "PUPMØS"
      },
      {
        "address": "https://stride-mainnet-lcd.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "https://rest-stride.architectnodes.com",
        "provider": "Architect Nodes"
      },
      {
        "address": "https://lcd-stride.whispernode.com:443",
        "provider": "WhisperNode 🤐"
      },
      {
        "address": "https://api-stride-01.stakeflow.io",
        "provider": "Stakeflow"
      },
      {
        "address": "https://stride-api.w3coins.io",
        "provider": "w3coins"
      },
      {
        "address": "https://stride-rest.publicnode.com",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "address": "https://community.nuxian-node.ch:6797/stride/crpc",
        "provider": "PRO Delegators"
      },
      {
        "address": "https://stride-api.stakeandrelax.net",
        "provider": "Stake&Relax 🦥"
      },
      {
        "address": "https://lcd.stride.bronbro.io:443",
        "provider": "Bro_n_Bro"
      },
      {
        "address": "https://public.stakewolle.com/cosmos/stride/rest",
        "provider": "Stakewolle"
      }
    ],
    "grpc": [
      {
        "address": "stride.grpc.bccnodes.com:443",
        "provider": "BccNodes"
      },
      {
        "address": "stride-grpc.polkachu.com:12290",
        "provider": "Polkachu"
      },
      {
        "address": "stride-grpc.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "http://stride.grpc.m.stavr.tech:9986",
        "provider": "🔥STAVR🔥"
      },
      {
        "address": "grpc-stride.cosmos-spaces.cloud:1140",
        "provider": "Cosmos Spaces"
      },
      {
        "address": "stride-mainnet-grpc.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "stride.grpc.kjnodes.com:11690",
        "provider": "kjnodes"
      },
      {
        "address": "grpc-stride-01.stakeflow.io:1802",
        "provider": "Stakeflow"
      },
      {
        "address": "stride-grpc.w3coins.io:12290",
        "provider": "w3coins"
      },
      {
        "address": "stride-grpc.publicnode.com:443",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "address": "stride-grpc.stakeandrelax.net:12290",
        "provider": "Stake&Relax 🦥"
      },
      {
        "address": "https://grpc.stride.bronbro.io:443",
        "provider": "Bro_n_Bro"
      }
    ]
  },
  "explorers": [
    {
      "kind": "BccNodes",
      "url": "https://explorer.bccnodes.com/stride-M",
      "tx_page": "https://explorer.bccnodes.com/stride-M/tx/${txHash}",
      "account_page": "https://explorer.bccnodes.com/stride-M/account/${accountAddress}"
    },
    {
      "kind": "ezstaking",
      "url": "https://ezstaking.app/stride",
      "tx_page": "https://ezstaking.app/stride/txs/${txHash}",
      "account_page": "https://ezstaking.app/stride/account/${accountAddress}"
    },
    {
      "kind": "Apollo",
      "url": "https://apollo.chandrastation.com/stride",
      "tx_page": "https://apollo.chandrastation.com/stride/tx/${txHash}",
      "account_page": "https://apollo.chandrastation.com/stride/account/${accountAddress}"
    },
    {
      "kind": "Stride Ping Pub",
      "url": "https://explorer.stride.zone/stride",
      "tx_page": "https://explorer.stride.zone/stride/tx/${txHash}",
      "account_page": "https://explorer.stride.zone/stride/account/${accountAddress}"
    },
    {
      "kind": "🔥STAVR🔥 Explorer",
      "url": "https://explorer.stavr.tech/stride",
      "tx_page": "https://explorer.stavr.tech/stride/tx/${txHash}",
      "account_page": "https://explorer.stavr.tech/stride/account/${accountAddress}"
    },
    {
      "kind": "mintscan",
      "url": "https://www.mintscan.io/stride",
      "tx_page": "https://www.mintscan.io/stride/transactions/${txHash}",
      "account_page": "https://www.mintscan.io/stride/accounts/${accountAddress}"
    },
    {
      "kind": "bigdipper",
      "url": "https://bigdipper.live/stride",
      "tx_page": "https://bigdipper.live/stride/transactions/${txHash}",
      "account_page": "https://bigdipper.live/stride/accounts/${accountAddress}"
    },
    {
      "kind": "atomscan",
      "url": "https://atomscan.com/stride",
      "tx_page": "https://atomscan.com/stride/transactions/${txHash}",
      "account_page": "https://atomscan.com/stride/accounts/${accountAddress}"
    },
    {
      "kind": "Stakeflow",
      "url": "https://stakeflow.io/stride",
      "account_page": "https://stakeflow.io/stride/accounts/${accountAddress}"
    },
    {
      "kind": "Stake-Take",
      "url": "https://explorer.stake-take.com/stride",
      "tx_page": "https://explorer.stake-take.com/stride/tx/${txHash}",
      "account_page": "https://explorer.stake-take.com/stride/account/${accountAddress}"
    }
  ],
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stride-chain-logo.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg"
  },
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stride-chain-logo.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg"
    }
  ]
}

export const strideAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "stride",
  "assets": [
    {
      "description": "The native token of Stride",
      "denom_units": [
        {
          "denom": "ustrd",
          "exponent": 0
        },
        {
          "denom": "strd",
          "exponent": 6
        }
      ],
      "base": "ustrd",
      "name": "Stride",
      "display": "strd",
      "symbol": "STRD",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg"
      },
      "coingecko_id": "stride",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg"
        }
      ],
      "socials": {
        "webiste": "https://stride.zone/",
        "twitter": "https://twitter.com/stride_zone"
      }
    },
    {
      "denom_units": [
        {
          "denom": "stuatom",
          "exponent": 0
        },
        {
          "denom": "statom",
          "exponent": 6
        }
      ],
      "base": "stuatom",
      "name": "Stride Staked ATOM",
      "display": "statom",
      "symbol": "stATOM",
      "traces": [
        {
          "type": "liquid-stake",
          "counterparty": {
            "chain_name": "cosmoshub",
            "base_denom": "uatom"
          },
          "provider": "Stride"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg"
      },
      "coingecko_id": "stride-staked-atom",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "stustars",
          "exponent": 0
        },
        {
          "denom": "ststars",
          "exponent": 6
        }
      ],
      "base": "stustars",
      "name": "Stride Staked STARS",
      "display": "ststars",
      "symbol": "stSTARS",
      "traces": [
        {
          "type": "liquid-stake",
          "counterparty": {
            "chain_name": "stargaze",
            "base_denom": "ustars"
          },
          "provider": "Stride"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg"
      },
      "coingecko_id": "stride-staked-stars",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "stuosmo",
          "exponent": 0
        },
        {
          "denom": "stosmo",
          "exponent": 6
        }
      ],
      "base": "stuosmo",
      "name": "Stride Staked OSMO",
      "display": "stosmo",
      "symbol": "stOSMO",
      "traces": [
        {
          "type": "liquid-stake",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "uosmo"
          },
          "provider": "Stride"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg"
      },
      "coingecko_id": "stride-staked-osmo",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "stujuno",
          "exponent": 0
        },
        {
          "denom": "stjuno",
          "exponent": 6
        }
      ],
      "base": "stujuno",
      "name": "Stride Staked JUNO",
      "display": "stjuno",
      "symbol": "stJUNO",
      "traces": [
        {
          "type": "liquid-stake",
          "counterparty": {
            "chain_name": "juno",
            "base_denom": "ujuno"
          },
          "provider": "Stride"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg"
      },
      "coingecko_id": "stride-staked-juno",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "stuluna",
          "exponent": 0
        },
        {
          "denom": "stluna",
          "exponent": 6
        }
      ],
      "base": "stuluna",
      "name": "Stride Staked LUNA",
      "display": "stluna",
      "symbol": "stLUNA",
      "traces": [
        {
          "type": "liquid-stake",
          "counterparty": {
            "chain_name": "terra2",
            "base_denom": "uluna"
          },
          "provider": "Stride"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.svg"
      },
      "coingecko_id": "stride-staked-luna",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "stinj",
          "exponent": 0
        },
        {
          "denom": "stINJ",
          "exponent": 18
        }
      ],
      "base": "stinj",
      "name": "Stride Staked INJ",
      "display": "stINJ",
      "symbol": "stINJ",
      "traces": [
        {
          "type": "liquid-stake",
          "counterparty": {
            "chain_name": "injective",
            "base_denom": "inj"
          },
          "provider": "Stride"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "staevmos",
          "exponent": 0
        },
        {
          "denom": "stevmos",
          "exponent": 18
        }
      ],
      "base": "staevmos",
      "name": "Stride Staked EVMOS",
      "display": "stevmos",
      "symbol": "stEVMOS",
      "traces": [
        {
          "type": "liquid-stake",
          "counterparty": {
            "chain_name": "evmos",
            "base_denom": "uaevmos"
          },
          "provider": "Stride"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.svg"
      },
      "coingecko_id": "stride-staked-evmos",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.svg"
        }
      ]
    },
    {
      "description": "Stride's liquid staked DYDX",
      "denom_units": [
        {
          "denom": "stadydx",
          "exponent": 0
        },
        {
          "denom": "stDYDX",
          "exponent": 18
        }
      ],
      "base": "stadydx",
      "name": "Stride Staked DYDX",
      "display": "stDYDX",
      "symbol": "stDYDX",
      "traces": [
        {
          "type": "liquid-stake",
          "counterparty": {
            "chain_name": "dydx",
            "base_denom": "adydx"
          },
          "provider": "Stride"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.svg"
        }
      ]
    },
    {
      "description": "Stride's liquid staked TIA",
      "denom_units": [
        {
          "denom": "stutia",
          "exponent": 0
        },
        {
          "denom": "stTIA",
          "exponent": 6
        }
      ],
      "base": "stutia",
      "name": "Stride Staked TIA",
      "display": "stTIA",
      "symbol": "stTIA",
      "traces": [
        {
          "type": "liquid-stake",
          "counterparty": {
            "chain_name": "celestia",
            "base_denom": "utia"
          },
          "provider": "Stride"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg"
        }
      ]
    },
    {
      "description": "Stride's liquid staked DYM",
      "denom_units": [
        {
          "denom": "stadym",
          "exponent": 0
        },
        {
          "denom": "stDYM",
          "exponent": 18
        }
      ],
      "base": "stadym",
      "name": "Stride Staked DYM",
      "display": "stDYM",
      "symbol": "stDYM",
      "traces": [
        {
          "type": "liquid-stake",
          "counterparty": {
            "chain_name": "dymension",
            "base_denom": "adym"
          },
          "provider": "Stride"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdym.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdym.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdym.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdym.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "stuumee",
          "exponent": 0
        },
        {
          "denom": "stumee",
          "exponent": 6
        }
      ],
      "base": "stuumee",
      "name": "Stride Staked UMEE",
      "display": "stumee",
      "symbol": "stUMEE",
      "traces": [
        {
          "type": "liquid-stake",
          "counterparty": {
            "chain_name": "umee",
            "base_denom": "uumee"
          },
          "provider": "Stride"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.svg"
      },
      "coingecko_id": "stride-staked-umee",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "stucmdx",
          "exponent": 0
        },
        {
          "denom": "stcmdx",
          "exponent": 6
        }
      ],
      "base": "stucmdx",
      "name": "Stride Staked CMDX",
      "display": "stcmdx",
      "symbol": "stCMDX",
      "traces": [
        {
          "type": "liquid-stake",
          "counterparty": {
            "chain_name": "comdex",
            "base_denom": "ucmdx"
          },
          "provider": "Stride"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stcmdx.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stcmdx.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stcmdx.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stcmdx.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "stusomm",
          "exponent": 0
        },
        {
          "denom": "stsomm",
          "exponent": 6
        }
      ],
      "base": "stusomm",
      "name": "Stride Staked SOMM",
      "display": "stsomm",
      "symbol": "stSOMM",
      "traces": [
        {
          "type": "liquid-stake",
          "counterparty": {
            "chain_name": "sommelier",
            "base_denom": "usomm"
          },
          "provider": "Stride"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.svg"
      },
      "coingecko_id": "stride-staked-sommelier",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.svg"
        }
      ]
    }
  ]
}

