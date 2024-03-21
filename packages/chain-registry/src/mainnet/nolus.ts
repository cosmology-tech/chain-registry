import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const nolus: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "nolus",
  "status": "live",
  "website": "https://nolus.io/",
  "network_type": "mainnet",
  "pretty_name": "Nolus",
  "chain_id": "pirin-1",
  "bech32_prefix": "nolus",
  "daemon_name": "nolusd",
  "node_home": "$HOME/.nolus",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "unls",
        "low_gas_price": 0,
        "average_gas_price": 0.025,
        "high_gas_price": 0.05
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "unls"
      }
    ],
    "lock_duration": {
      "time": "1814400s"
    }
  },
  "codebase": {
    "git_repo": "https://github.com/nolus-protocol/nolus-core",
    "recommended_version": "v0.5.2",
    "compatible_versions": [
      "v0.5.2"
    ],
    "cosmos_sdk_version": "nolus-protocol/cosmos-sdk v0.47.6-nolus",
    "consensus": {
      "type": "cometbft",
      "version": "v0.37.2"
    },
    "cosmwasm_version": "neutron-org/wasmd v0.45.0",
    "cosmwasm_enabled": true,
    "ibc_go_version": "7.3.1",
    "ics_enabled": [
      "ics20-1",
      "ics27-1"
    ],
    "genesis": {
      "genesis_url": "https://raw.githubusercontent.com/nolus-protocol/nolus-networks/main/mainnet/pirin-1/genesis.json"
    },
    "versions": [
      {
        "name": "v0.3.0",
        "recommended_version": "v0.3.0",
        "compatible_versions": [
          "v0.3.0"
        ],
        "cosmos_sdk_version": "0.45",
        "cosmwasm_version": "0.31",
        "cosmwasm_enabled": true,
        "ibc_go_version": "4.3.0",
        "ics_enabled": [
          "ics20-1",
          "ics27-1"
        ],
        "next_version_name": "v0.4.0"
      },
      {
        "name": "v0.4.0",
        "proposal": 5,
        "height": 207300,
        "recommended_version": "v0.4.0",
        "compatible_versions": [
          "v0.4.0"
        ],
        "cosmos_sdk_version": "0.45",
        "cosmwasm_version": "0.31",
        "cosmwasm_enabled": true,
        "ibc_go_version": "4.3.0",
        "ics_enabled": [
          "ics20-1",
          "ics27-1"
        ],
        "next_version_name": "v0.4.1"
      },
      {
        "name": "v0.4.1",
        "proposal": 34,
        "height": 941000,
        "recommended_version": "v0.4.1",
        "compatible_versions": [
          "v0.4.1"
        ],
        "cosmos_sdk_version": "0.45",
        "consensus": {
          "type": "cometbft",
          "version": "0.34.27"
        },
        "cosmwasm_version": "0.31",
        "cosmwasm_enabled": true,
        "ibc_go_version": "4.3.1",
        "ics_enabled": [
          "ics20-1",
          "ics27-1"
        ],
        "next_version_name": ""
      },
      {
        "name": "v0.4.2",
        "proposal": 54,
        "height": 3044000,
        "recommended_version": "v0.4.2",
        "compatible_versions": [
          "v0.4.2"
        ],
        "cosmos_sdk_version": "v0.45.15-ics",
        "consensus": {
          "type": "cometbft",
          "version": "0.34.27"
        },
        "cosmwasm_version": "0.31",
        "cosmwasm_enabled": true,
        "ibc_go_version": "4.3.1",
        "ics_enabled": [
          "ics20-1",
          "ics27-1"
        ],
        "next_version_name": "v0.5.0"
      },
      {
        "name": "v0.5.0",
        "proposal": 72,
        "height": 3659000,
        "recommended_version": "v0.5.0",
        "compatible_versions": [
          "v0.5.0"
        ],
        "cosmos_sdk_version": "v0.47.6-nolus",
        "consensus": {
          "type": "cometbft",
          "version": "0.34.27"
        },
        "cosmwasm_version": "neutron-org/wasmd v0.45.0",
        "cosmwasm_enabled": true,
        "ibc_go_version": "7.3.1",
        "ics_enabled": [
          "ics20-1",
          "ics27-1"
        ],
        "next_version_name": "v5.0.1"
      },
      {
        "name": "v0.5.1",
        "proposal": 76,
        "height": 3958000,
        "recommended_version": "v0.5.1",
        "compatible_versions": [
          "v0.5.1"
        ],
        "cosmos_sdk_version": "nolus-protocol/cosmos-sdk v0.47.6-nolus",
        "consensus": {
          "type": "cometbft",
          "version": "v0.37.2"
        },
        "cosmwasm_version": "neutron-org/wasmd v0.45.0",
        "cosmwasm_enabled": true,
        "ibc_go_version": "7.3.1",
        "ics_enabled": [
          "ics20-1",
          "ics27-1"
        ],
        "next_version_name": "v0.5.2"
      },
      {
        "name": "v0.5.2",
        "proposal": 77,
        "height": 4059500,
        "recommended_version": "v0.5.2",
        "compatible_versions": [
          "v0.5.2"
        ],
        "cosmos_sdk_version": "nolus-protocol/cosmos-sdk v0.47.6-nolus",
        "consensus": {
          "type": "cometbft",
          "version": "v0.37.2"
        },
        "cosmwasm_version": "neutron-org/wasmd v0.45.0",
        "cosmwasm_enabled": true,
        "ibc_go_version": "7.3.1",
        "ics_enabled": [
          "ics20-1",
          "ics27-1"
        ],
        "next_version_name": ""
      }
    ]
  },
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg"
  },
  "description": "Elevate your game with up to 3x equity. Dive into a world of minimized risks and unlock the full potential of your assets.",
  "peers": {
    "seeds": [
      {
        "id": "20e1000e88125698264454a884812746c2eb4807",
        "address": "seeds.lavenderfive.com:11956",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
        "address": "nolus-mainnet-seed.autostake.com:27016",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "id": "8542cd7e6bf9d260fef543bc49e59be5a3fa9074",
        "address": "seed.publicnode.com:26656",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "id": "400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc",
        "address": "nolus.rpc.kjnodes.com:14359",
        "provider": "kjnodes"
      },
      {
        "id": "cefe4a5394dc57f318547258c511a9a96aaeaa7b",
        "address": "seed-nolus.ibs.team:16665",
        "provider": "Inter Blockchain Services"
      }
    ],
    "persistent_peers": [
      {
        "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
        "address": "nolus-mainnet-peer.autostake.com:27016",
        "provider": "AutoStake 🛡️ Slash Protected"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://pirin-cl.nolus.network:26657",
        "provider": "NolusProtocol"
      },
      {
        "address": "https://nolus-mainnet-rpc.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "https://nolus-rpc.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://nolus.rpc.liveraven.net",
        "provider": "LiveRaveN"
      },
      {
        "address": "https://rpc-nolus.architectnodes.com",
        "provider": "Architect Nodes"
      },
      {
        "address": "https://nolus.rpc.kjnodes.com",
        "provider": "kjnodes"
      },
      {
        "address": "https://nolus-rpc.enigma-validator.com/",
        "provider": "Enigma"
      },
      {
        "address": "https://nolus-rpc.w3coins.io",
        "provider": "w3coins"
      },
      {
        "address": "https://rpc-nolus.cosmos-spaces.cloud",
        "provider": "Cosmos Spaces"
      },
      {
        "address": "https://nolus-rpc.publicnode.com:443",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "address": "https://nolus-rpc.ibs.team",
        "provider": "Inter Blockchain Services"
      }
    ],
    "rest": [
      {
        "address": "https://pirin-cl.nolus.network:1317",
        "provider": "NolusProtocol"
      },
      {
        "address": "https://nolus-mainnet-lcd.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "https://nolus-api.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://api-nolus.cosmos-spaces.cloud",
        "provider": "Cosmos Spaces"
      },
      {
        "address": "https://nolus.api.liveraven.net",
        "provider": "LiveRaveN"
      },
      {
        "address": "https://rest-nolus.architectnodes.com",
        "provider": "Architect Nodes"
      },
      {
        "address": "https://nolus.api.kjnodes.com",
        "provider": "kjnodes"
      },
      {
        "address": "https://nolus-lcd.enigma-validator.com/",
        "provider": "Enigma"
      },
      {
        "address": "https://nolus-api.w3coins.io",
        "provider": "w3coins"
      },
      {
        "address": "https://nolus-rest.publicnode.com",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "address": "https://nolus-api.ibs.team",
        "provider": "Inter Blockchain Services"
      }
    ],
    "grpc": [
      {
        "address": "https://pirin-cl.nolus.network:9090",
        "provider": "NolusProtocol"
      },
      {
        "address": "nolus-mainnet-grpc.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "https://nolus-grpc.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://nolus.grpc.liveraven.net",
        "provider": "LiveRaveN"
      },
      {
        "address": "grpc-nolus.architectnodes.com:1443",
        "provider": "Architect Nodes"
      },
      {
        "address": "grpc-nolus.cosmos-spaces.cloud:1190",
        "provider": "Cosmos Spaces"
      },
      {
        "address": "nolus.grpc.kjnodes.com:14390",
        "provider": "kjnodes"
      },
      {
        "address": "nolus-grpc.w3coins.io:19790",
        "provider": "w3coins"
      },
      {
        "address": "nolus-grpc.publicnode.com:443",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      }
    ]
  },
  "explorers": [
    {
      "kind": "Nolus Explorer",
      "url": "https://explorer.nolus.io/pirin-1",
      "tx_page": "https://explorer.nolus.io/pirin-1/tx/${txHash}",
      "account_page": "https://explorer.nolus.io/pirin-1/account/${accountAddress}"
    },
    {
      "kind": "ping.pub",
      "url": "https://ping.pub/nolus",
      "tx_page": "https://ping.pub/nolus/tx/${txHash}",
      "account_page": "https://ping.pub/nolus/account/${accountAddress}"
    },
    {
      "kind": "NODEXPLORER",
      "url": "https://explorer.nodexcapital.com/nolus",
      "tx_page": "https://explorer.nodexcapital.com/nolus/tx/${txHash}",
      "account_page": "https://explorer.nodexcapital.com/nolus/account/${accountAddress}"
    },
    {
      "kind": "Nodes Guru Explorer",
      "url": "https://nolus.explorers.guru",
      "tx_page": "https://nolus.explorers.guru/transaction/${txHash}"
    },
    {
      "kind": "KJ Nodes Explorer",
      "url": "https://explorer.kjnodes.com/nolus",
      "tx_page": "https://explorer.kjnodes.com/nolus/tx/${txHash}",
      "account_page": "https://explorer.kjnodes.com/nolus/account/${accountAddress}"
    }
  ],
  "keywords": [
    "mainnet"
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg"
    }
  ]
}

export const nolusAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "nolus",
  "assets": [
    {
      "description": "The native token of Nolus chain",
      "denom_units": [
        {
          "denom": "unls",
          "exponent": 0
        },
        {
          "denom": "nls",
          "exponent": 6
        }
      ],
      "base": "unls",
      "name": "Nolus",
      "display": "nls",
      "symbol": "NLS",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg"
      },
      "coingecko_id": "nolus",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg"
        }
      ],
      "socials": {
        "webiste": "https://nolus.io/",
        "twitter": "https://twitter.com/NolusProtocol"
      }
    },
    {
      "description": "axlUSDC transferred from the Osmosis mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/7FBDBEEEBA9C50C4BCDF7BF438EAB99E64360833D240B32655C96E319559E911",
          "exponent": 0,
          "aliases": [
            "uusdc"
          ]
        },
        {
          "denom": "usdc",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/7FBDBEEEBA9C50C4BCDF7BF438EAB99E64360833D240B32655C96E319559E911",
      "name": "axlUSDC",
      "display": "usdc",
      "symbol": "axlUSDC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858",
            "channel_id": "channel-783"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/transfer/channel-208/uusdc"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.svg"
        },
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.svg"
      }
    },
    {
      "description": "OSMO transferred from the Osmosis mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
          "exponent": 0,
          "aliases": [
            "uosmo"
          ]
        },
        {
          "denom": "osmo",
          "exponent": 6,
          "aliases": []
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
            "channel_id": "channel-783"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/uosmo"
          }
        }
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
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
      }
    },
    {
      "description": "stOSMO transferred from the Osmosis mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/AF5559D128329B6C753F15481BEC26E533B847A471074703FA4903E7E6F61BA1",
          "exponent": 0,
          "aliases": [
            "stuosmo"
          ]
        },
        {
          "denom": "stosmo",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/AF5559D128329B6C753F15481BEC26E533B847A471074703FA4903E7E6F61BA1",
      "name": "Osmosis",
      "display": "stosmo",
      "symbol": "stOSMO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC",
            "channel_id": "channel-783"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/transfer/channel-326/stuosmo"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg"
      }
    },
    {
      "description": "ATOM transferred from the Osmosis mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/6CDD4663F2F09CD62285E2D45891FC149A3568E316CE3EBBE201A71A78A69388",
          "exponent": 0,
          "aliases": [
            "uatom"
          ]
        },
        {
          "denom": "atom",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/6CDD4663F2F09CD62285E2D45891FC149A3568E316CE3EBBE201A71A78A69388",
      "name": "Atom",
      "display": "atom",
      "symbol": "ATOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
            "channel_id": "channel-783"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/transfer/channel-0/uatom"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
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
      "description": "stATOM transferred from the Osmosis mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/FCFF8B19C61677F3B78E2A5AE3B4A34A8D23858D16905F253B8438B3AFD07FF8",
          "exponent": 0,
          "aliases": [
            "ustatom"
          ]
        },
        {
          "denom": "statom",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/FCFF8B19C61677F3B78E2A5AE3B4A34A8D23858D16905F253B8438B3AFD07FF8",
      "name": "stATOM",
      "display": "statom",
      "symbol": "stATOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901",
            "channel_id": "channel-783"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/transfer/channel-326/stuatom"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg"
      }
    },
    {
      "description": "WETH transferred from the Osmosis mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/A7C4A3FB19E88ABE60416125F9189DA680800F4CDD14E3C10C874E022BEFF04C",
          "exponent": 0,
          "aliases": [
            "weth-wei"
          ]
        },
        {
          "denom": "weth",
          "exponent": 18,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/A7C4A3FB19E88ABE60416125F9189DA680800F4CDD14E3C10C874E022BEFF04C",
      "name": "WETH",
      "display": "weth",
      "symbol": "WETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5",
            "channel_id": "channel-783"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/transfer/channel-208/weth-wei"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg"
        },
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg"
      }
    },
    {
      "description": "WBTC transferred from the Osmosis mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/84E70F4A34FB2DE135FD3A04FDDF53B7DA4206080AA785C8BAB7F8B26299A221",
          "exponent": 0,
          "aliases": [
            "wbtc-satoshi"
          ]
        },
        {
          "denom": "wbtc",
          "exponent": 8,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/84E70F4A34FB2DE135FD3A04FDDF53B7DA4206080AA785C8BAB7F8B26299A221",
      "name": "WBTC",
      "display": "wbtc",
      "symbol": "WBTC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F",
            "channel_id": "channel-783"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/transfer/channel-208/wbtc-satoshi"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.svg"
        },
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.svg"
      }
    },
    {
      "description": "AKT transferred from the Osmosis mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/ADC63C00000CA75F909D2BE3ACB5A9980BED3A73B92746E0FCE6C67414055459",
          "exponent": 0,
          "aliases": [
            "uakt"
          ]
        },
        {
          "denom": "akt",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/ADC63C00000CA75F909D2BE3ACB5A9980BED3A73B92746E0FCE6C67414055459",
      "name": "AKT",
      "display": "akt",
      "symbol": "AKT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4",
            "channel_id": "channel-783"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/transfer/channel-1/uakt"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg"
      }
    },
    {
      "description": "AXL transferred from the Osmosis mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/1B03A71B8E6F6EF424411DC9326A8E0D25D096E4D2616425CFAF2AF06F0FE717",
          "exponent": 0,
          "aliases": [
            "uaxl"
          ]
        },
        {
          "denom": "axl",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/1B03A71B8E6F6EF424411DC9326A8E0D25D096E4D2616425CFAF2AF06F0FE717",
      "name": "AXL",
      "display": "axl",
      "symbol": "AXL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E",
            "channel_id": "channel-783"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/transfer/channel-208/uaxl"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg"
      }
    },
    {
      "description": "JUNO transferred from the Osmosis mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/4F3E83AB35529435E4BFEA001F5D935E7250133347C4E1010A9C77149EF0394C",
          "exponent": 0,
          "aliases": [
            "ujuno"
          ]
        },
        {
          "denom": "juno",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/4F3E83AB35529435E4BFEA001F5D935E7250133347C4E1010A9C77149EF0394C",
      "name": "JUNO",
      "display": "juno",
      "symbol": "JUNO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED",
            "channel_id": "channel-783"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/transfer/channel-42/ujuno"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg"
      }
    },
    {
      "description": "EVMOS transferred from the Osmosis mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/A59A9C955F1AB8B76671B00C1A0482C64A6590352944BB5880E5122358F7E1CE",
          "exponent": 0,
          "aliases": [
            "aevmos"
          ]
        },
        {
          "denom": "evmos",
          "exponent": 18,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/A59A9C955F1AB8B76671B00C1A0482C64A6590352944BB5880E5122358F7E1CE",
      "name": "EVMOS",
      "display": "evmos",
      "symbol": "EVMOS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A",
            "channel_id": "channel-783"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/transfer/channel-204/aevmos"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg"
      }
    },
    {
      "description": "stkATOM transferred from the Osmosis mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/DAAD372DB7DD45BBCFA4DDD40CA9793E9D265D1530083AB41A8A0C53C3EBE865",
          "exponent": 0,
          "aliases": [
            "stk/uatom"
          ]
        },
        {
          "denom": "stk/atom",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/DAAD372DB7DD45BBCFA4DDD40CA9793E9D265D1530083AB41A8A0C53C3EBE865",
      "name": "stkATOM",
      "display": "stk/atom",
      "symbol": "stkATOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC",
            "channel_id": "channel-783"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/transfer/channel-4/stk/uatom"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg"
      }
    },
    {
      "description": "SCRT transferred from the Osmosis mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/EA00FFF0335B07B5CD1530B7EB3D2C710620AE5B168C71AFF7B50532D690E107",
          "exponent": 0,
          "aliases": [
            "uscrt"
          ]
        },
        {
          "denom": "scrt",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/EA00FFF0335B07B5CD1530B7EB3D2C710620AE5B168C71AFF7B50532D690E107",
      "name": "SCRT",
      "display": "scrt",
      "symbol": "SCRT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A",
            "channel_id": "channel-783"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/transfer/channel-88/uscrt"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
      }
    },
    {
      "description": "CRO transferred from the Osmosis mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/E1BCC0F7B932E654B1A930F72B76C0678D55095387E2A4D8F00E941A8F82EE48",
          "exponent": 0,
          "aliases": [
            "basecro"
          ]
        },
        {
          "denom": "cro",
          "exponent": 8,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/E1BCC0F7B932E654B1A930F72B76C0678D55095387E2A4D8F00E941A8F82EE48",
      "name": "CRO",
      "display": "cro",
      "symbol": "CRO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1",
            "channel_id": "channel-783"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/transfer/channel-5/basecro"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg"
      }
    },
    {
      "description": "STARS transferred from the Osmosis mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/11E3CF372E065ACB1A39C531A3C7E7E03F60B5D0653AD2139D31128ACD2772B5",
          "exponent": 0,
          "aliases": [
            "ustars"
          ]
        },
        {
          "denom": "stars",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/11E3CF372E065ACB1A39C531A3C7E7E03F60B5D0653AD2139D31128ACD2772B5",
      "name": "STARS",
      "display": "stars",
      "symbol": "STARS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4",
            "channel_id": "channel-783"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/transfer/channel-75/ustars"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg"
      }
    },
    {
      "description": "TIA transferred from the Osmosis mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/6C349F0EB135C5FA99301758F35B87DB88403D690E5E314AB080401FEE4066E5",
          "exponent": 0,
          "aliases": [
            "utia"
          ]
        },
        {
          "denom": "tia",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/6C349F0EB135C5FA99301758F35B87DB88403D690E5E314AB080401FEE4066E5",
      "name": "TIA",
      "display": "tia",
      "symbol": "TIA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877",
            "channel_id": "channel-783"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/transfer/channel-6994/utia"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg"
      }
    },
    {
      "description": "STRD transferred from the Osmosis mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/04CA9067228BB51F1C39A506DA00DF07E1496D8308DD21E8EF66AD6169FA722B",
          "exponent": 0,
          "aliases": [
            "ustrd"
          ]
        },
        {
          "denom": "strd",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/04CA9067228BB51F1C39A506DA00DF07E1496D8308DD21E8EF66AD6169FA722B",
      "name": "STRD",
      "display": "strd",
      "symbol": "STRD",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4",
            "channel_id": "channel-783"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/transfer/channel-326/ustrd"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg"
      }
    },
    {
      "description": "NTRN transferred from the Neutron mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/3D6BC6E049CAEB905AC97031A42800588C58FB471EBDC7A3530FFCD0C3DC9E09",
          "exponent": 0,
          "aliases": [
            "untrn"
          ]
        },
        {
          "denom": "ntrn",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/3D6BC6E049CAEB905AC97031A42800588C58FB471EBDC7A3530FFCD0C3DC9E09",
      "name": "NTRN",
      "display": "ntrn",
      "symbol": "NTRN",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "neutron",
            "base_denom": "untrn",
            "channel_id": "channel-44"
          },
          "chain": {
            "channel_id": "channel-3839",
            "path": "transfer/channel-3839/untrn"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "neutron",
            "base_denom": "untrn"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg"
        },
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg"
      }
    },
    {
      "description": "DYDX transferred from the Neutron mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/6DF8CF5C976851D152E2C7270B0AB25C4F9D64C0A46513A68D6CBB2662A98DF4",
          "exponent": 0,
          "aliases": [
            "adydx"
          ]
        },
        {
          "denom": "dydx",
          "exponent": 18,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/6DF8CF5C976851D152E2C7270B0AB25C4F9D64C0A46513A68D6CBB2662A98DF4",
      "name": "DYDX",
      "display": "dydx",
      "symbol": "DYDX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "neutron",
            "base_denom": "ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130",
            "channel_id": "channel-44"
          },
          "chain": {
            "channel_id": "channel-3839",
            "path": "transfer/channel-3839/transfer/channel-48/adydx"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "neutron",
            "base_denom": "ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg"
      }
    }
  ]
}

