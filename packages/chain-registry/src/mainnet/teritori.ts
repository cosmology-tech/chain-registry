import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const teritori: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "teritori",
  "status": "live",
  "network_type": "mainnet",
  "website": "https://teritori.com/",
  "pretty_name": "Teritori",
  "chain_id": "teritori-1",
  "daemon_name": "teritorid",
  "node_home": "$HOME/.teritorid",
  "bech32_prefix": "tori",
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "utori",
        "low_gas_price": 0,
        "average_gas_price": 0.25,
        "high_gas_price": 0.5
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "utori"
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/TERITORI/teritori-chain",
    "recommended_version": "v2.0.6",
    "compatible_versions": [
      "v2.0.6"
    ],
    "ibc_go_version": "v7.3.1",
    "cosmos_sdk_version": "v0.47.6",
    "consensus": {
      "type": "cometbft",
      "version": "v0.37.2"
    },
    "cosmwasm_version": "v0.41.0",
    "cosmwasm_enabled": true,
    "cosmwasm_path": "$HOME/.teritorid/data/wasm",
    "genesis": {
      "genesis_url": "https://github.com/TERITORI/teritori-chain/raw/mainnet/mainnet/teritori-1/genesis.json"
    },
    "versions": [
      {
        "name": "v1.3.1",
        "recommended_version": "v1.3.1",
        "compatible_versions": [
          "v1.3.1"
        ],
        "next_version_name": "v1.4.0"
      },
      {
        "name": "v1.4.0",
        "proposal": 34,
        "height": 3699425,
        "recommended_version": "v1.4.0",
        "compatible_versions": [
          "v1.4.0"
        ],
        "next_version_name": "v2.0.0"
      },
      {
        "name": "v2.0.0",
        "proposal": 38,
        "height": 7199342,
        "recommended_version": "v2.0.6",
        "compatible_versions": [
          "v2.0.6"
        ],
        "ibc_go_version": "v7.3.1",
        "cosmos_sdk_version": "v0.47.6",
        "consensus": {
          "type": "cometbft",
          "version": "v0.37.2"
        },
        "cosmwasm_version": "v0.41.0",
        "cosmwasm_enabled": true,
        "cosmwasm_path": "$HOME/.teritorid/data/wasm",
        "next_version_name": ""
      }
    ]
  },
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/chain.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/chain.svg"
  },
  "peers": {
    "seeds": [
      {
        "id": "babc3f3f7804933265ec9c40ad94f4da8e9e0017",
        "address": "seed.rhinostake.com:15956",
        "provider": "RHINO"
      },
      {
        "id": "20e1000e88125698264454a884812746c2eb4807",
        "address": "seeds.lavenderfive.com:15956",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
        "address": "seeds.polkachu.com:15956",
        "provider": "Polkachu"
      },
      {
        "id": "400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc",
        "address": "teritori.rpc.kjnodes.com:11959",
        "provider": "kjnodes"
      },
      {
        "id": "8542cd7e6bf9d260fef543bc49e59be5a3fa9074",
        "address": "seed.publicnode.com:26656",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
        "address": "teritori-mainnet-seed.autostake.com:27166",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "id": "1ef268d56b79edbd0c32815f4bf9c362a0617ed4",
        "address": "seed-teritori.ibs.team:16670",
        "provider": "Inter Blockchain Services"
      },
      {
        "id": "38d107de6a22ca6e1a6bafd2041e38f5d50a6945",
        "address": "seed-node.mms.team:40656",
        "provider": "MMS"
      }
    ],
    "persistent_peers": [
      {
        "id": "8f28518afd31a42ea81bb3232a50ab0cec4dcdf7",
        "address": "10.201.190.1:26656",
        "provider": "teritori-core-1 ⛩"
      },
      {
        "id": "6046cec27c36f0a7596cb9fa9f2c5decbd4e87cb",
        "address": "10.193.255.1:26656",
        "provider": "teritori-core-2 ⛩⛩"
      },
      {
        "id": "29c218fb6d31d2316b854c1178327157fbce8aa7",
        "address": "teritori.peers.stavr.tech:38026",
        "provider": "🔥STAVR🔥"
      },
      {
        "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
        "address": "teritori-mainnet-peer.autostake.com:27166",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "id": "669470aba9778ccccd07127115dcdc30e141d7ae",
        "address": "peer-teritori.mms.team:33656",
        "provider": "MMS"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://teritori-rpc.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://teritori-rpc.polkachu.com",
        "provider": "Polkachu"
      },
      {
        "address": "https://teritori.rpc.m.stavr.tech",
        "provider": "🔥STAVR🔥"
      },
      {
        "address": "https://rpc.teritori.silentvalidator.com/",
        "provider": "silent"
      },
      {
        "address": "https://teritori-rpc.brocha.in",
        "provider": "Brochain"
      },
      {
        "address": "https://teritori-rpc.ibs.team",
        "provider": "Inter Blockchain Services"
      },
      {
        "address": "https://teritori.rpc.kjnodes.com",
        "provider": "kjnodes"
      },
      {
        "address": "https://rpc.tori.bh.rocks",
        "provider": "BlockHunters 🎯"
      },
      {
        "address": "https://teritori-rpc.kleomedes.network",
        "provider": "Kleomedes"
      },
      {
        "address": "https://m-teritori.rpc.utsa.tech",
        "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
      },
      {
        "address": "https://rpc-teritori.pupmos.network",
        "provider": "PUPMØS"
      },
      {
        "address": "https://teritori-mainnet-rpc.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "https://rpc-teritori.ecostake.com",
        "provider": "ecostake"
      },
      {
        "address": "https://teritori-rpc.publicnode.com:443",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      }
    ],
    "rest": [
      {
        "address": "https://teritori-api.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://teritori-api.polkachu.com",
        "provider": "Polkachu"
      },
      {
        "address": "https://teritori.api.m.stavr.tech",
        "provider": "🔥STAVR🔥"
      },
      {
        "address": "https://api.teritori.silentvalidator.com/",
        "provider": "silent"
      },
      {
        "address": "https://teritori-api.ibs.team",
        "provider": "Inter Blockchain Services"
      },
      {
        "address": "https://teritori.api.kjnodes.com",
        "provider": "kjnodes"
      },
      {
        "address": "https://api.tori.bh.rocks",
        "provider": "BlockHunters 🎯"
      },
      {
        "address": "https://teritori-api.kleomedes.network",
        "provider": "Kleomedes"
      },
      {
        "address": "https://m-teritori.api.utsa.tech",
        "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
      },
      {
        "address": "https://api-teritori.pupmos.network",
        "provider": "PUPMØS"
      },
      {
        "address": "https://teritori-mainnet-lcd.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "https://rest-teritori.ecostake.com",
        "provider": "ecostake"
      },
      {
        "address": "https://teritori-rest.publicnode.com",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      }
    ],
    "grpc": [
      {
        "address": "teritori-grpc.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "grpc.teritori.nodestake.top:443",
        "provider": "NodeStake"
      },
      {
        "address": "teritori.grpc.m.stavr.tech:6705",
        "provider": "🔥STAVR🔥"
      },
      {
        "address": "teritori-grpc.brocha.in:443",
        "provider": "Brochain"
      },
      {
        "address": "teritori-grpc.polkachu.com:15990",
        "provider": "Polkachu"
      },
      {
        "address": "teritori.grpc.silknodes.io:443",
        "provider": "Silk Nodes"
      },
      {
        "address": "teritori-mainnet-grpc.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "teritori.grpc.kjnodes.com:11990",
        "provider": "kjnodes"
      },
      {
        "address": "teritori-grpc.publicnode.com:443",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      }
    ]
  },
  "explorers": [
    {
      "kind": "ezstaking",
      "url": "https://ezstaking.app/teritori",
      "tx_page": "https://ezstaking.app/teritori/txs/${txHash}",
      "account_page": "https://ezstaking.app/teritori/account/${accountAddress}"
    },
    {
      "kind": "ping.pub",
      "url": "https://explorer.teritori.com/teritori",
      "tx_page": "https://explorer.teritori.com/teritori/tx/${txHash}"
    },
    {
      "kind": "🔥STAVR🔥 Explorer",
      "url": "https://explorer.stavr.tech/teritori-main",
      "tx_page": "https://explorer.stavr.tech/teritori-main/tx/${txHash}"
    },
    {
      "kind": "guru",
      "url": "https://teritori.explorers.guru/",
      "tx_page": "https://teritori.explorers.guru/transaction/${txHash}"
    },
    {
      "kind": "Brochain",
      "url": "https://explorer.brocha.in/teritori",
      "tx_page": "https://explorer.brocha.in/teritori/tx/${txHash}"
    },
    {
      "kind": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀",
      "url": "https://exp.utsa.tech/teritori",
      "tx_page": "https://exp.utsa.tech/teritori/tx/${txHash}"
    },
    {
      "kind": "mintscan",
      "url": "https://www.mintscan.io/teritori",
      "tx_page": "https://www.mintscan.io/teritori/transactions/${txHash}",
      "account_page": "https://www.mintscan.io/teritori/accounts/${accountAddress}"
    },
    {
      "kind": "TC Network",
      "url": "https://explorer.tcnetwork.io/teritori",
      "tx_page": "https://explorer.tcnetwork.io/teritori/transaction/${txHash}"
    },
    {
      "kind": "atomscan",
      "url": "https://atomscan.com/teritori",
      "tx_page": "https://atomscan.com/teritori/transactions/${txHash}",
      "account_page": "https://atomscan.com/teritori/accounts/${accountAddress}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/chain.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/chain.svg"
    }
  ]
}

export const teritoriAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "teritori",
  "assets": [
    {
      "description": "The native token of Teritori",
      "denom_units": [
        {
          "denom": "utori",
          "exponent": 0
        },
        {
          "denom": "tori",
          "exponent": 6
        }
      ],
      "base": "utori",
      "name": "Teritori",
      "display": "tori",
      "symbol": "TORI",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg"
      },
      "coingecko_id": "teritori",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg"
        }
      ]
    },
    {
      "description": "The native token of Osmosis",
      "denom_units": [
        {
          "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
          "exponent": 0
        },
        {
          "denom": "osmo",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
      "name": "Osmosis",
      "display": "osmo",
      "symbol": "OSMO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "uosmo",
            "channel_id": "channel-362"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/uosmo"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
      },
      "coingecko_id": "osmosis",
      "keywords": [
        "dex",
        "staking"
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "uosmo"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/A670D9568B3E399316EEDE40C1181B7AA4BD0695F0B37513CE9B95B977DFC12E",
          "exponent": 0,
          "aliases": [
            "uatom"
          ]
        },
        {
          "denom": "atom",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/A670D9568B3E399316EEDE40C1181B7AA4BD0695F0B37513CE9B95B977DFC12E",
      "name": "Cosmos Hub Atom",
      "display": "atom",
      "symbol": "ATOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "cosmoshub",
            "base_denom": "uatom",
            "channel_id": "channel-431"
          },
          "chain": {
            "channel_id": "channel-10",
            "path": "transfer/channel-10/uatom"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "cosmoshub",
            "base_denom": "uatom"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
      }
    },
    {
      "description": "The native staking and governance token of the Kujira chain.",
      "denom_units": [
        {
          "denom": "ibc/1FECA3491D88F4AD24DE0948ED96718CA6D93F6730CEE7708E621B953594BB5E",
          "exponent": 0
        },
        {
          "denom": "kuji",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ukuji",
      "name": "Kujira",
      "display": "kuji",
      "symbol": "KUJI",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "kujira",
            "base_denom": "ukuji",
            "channel_id": "channel-89"
          },
          "chain": {
            "channel_id": "channel-30",
            "path": "transfer/channel-30/ukuji"
          }
        }
      ],
      "coingecko_id": "kujira",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "kujira",
            "base_denom": "ukuji"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg"
        }
      ]
    },
    {
      "description": "USD Coin",
      "denom_units": [
        {
          "denom": "ibc/FE98AAD68F02F03565E9FA39A5E627946699B2B07115889ED812D8BA639576A9",
          "exponent": 0
        },
        {
          "denom": "usdc",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "uusdc",
      "display": "usdc",
      "name": "USD Coin",
      "symbol": "USDC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "noble",
            "base_denom": "usdc",
            "channel_id": "channel-54"
          },
          "chain": {
            "channel_id": "channel-62",
            "path": "transfer/channel-62/uusdc"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "noble",
            "base_denom": "uusdc"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg"
        }
      ]
    },
    {
      "description": "The native staking and governance token of the Secret chain.",
      "denom_units": [
        {
          "denom": "ibc/F3F6BDEE1A79664B169D742651107BF4E03FA67E931452E27380B75F5917B7E9",
          "exponent": 0
        },
        {
          "denom": "scrt",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "uscrt",
      "name": "Secret Network",
      "display": "scrt",
      "symbol": "SCRT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "secretnetwork",
            "base_denom": "uscrt",
            "channel_id": "channel-111"
          },
          "chain": {
            "channel_id": "channel-63",
            "path": "transfer/channel-63/uscrt"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "secretnetwork",
            "base_denom": "uscrt"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
        }
      ]
    }
  ]
}

