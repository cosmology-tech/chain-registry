import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const odin: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "odin",
  "status": "live",
  "network_type": "mainnet",
  "website": "https://odinprotocol.io/",
  "pretty_name": "Odin Protocol",
  "chain_id": "odin-mainnet-freya",
  "pre_fork_chain_name": "odin1",
  "bech32_prefix": "odin",
  "daemon_name": "odind",
  "node_home": "$HOME/.odin",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "loki",
        "fixed_min_gas_price": 0.0125,
        "low_gas_price": 0.025,
        "average_gas_price": 0.05,
        "high_gas_price": 0.06
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "loki"
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/ODIN-PROTOCOL/odin-core",
    "recommended_version": "v0.7.11",
    "compatible_versions": [
      "v0.7.11"
    ],
    "cosmos_sdk_version": "v0.47.7",
    "consensus": {
      "type": "cometbft",
      "version": "v0.37.4"
    },
    "ibc_go_version": "v7.3.0",
    "genesis": {
      "genesis_url": "https://snapshots.polkachu.com/genesis/odin/genesis.json"
    },
    "versions": [
      {
        "name": "v0.7.9",
        "recommended_version": "v0.7.9",
        "compatible_versions": [
          "v0.7.9"
        ],
        "cosmos_sdk_version": "v0.47.7",
        "consensus": {
          "type": "cometbft",
          "version": "v0.37.4"
        },
        "ibc_go_version": "v7.3.0",
        "next_version_name": "v0.7.11"
      },
      {
        "name": "v0.7.11",
        "proposal": 22,
        "height": 13310888,
        "recommended_version": "v0.7.11",
        "compatible_versions": [
          "v0.7.11"
        ],
        "cosmos_sdk_version": "v0.47.7",
        "consensus": {
          "type": "cometbft",
          "version": "v0.37.4"
        },
        "ibc_go_version": "v7.3.0",
        "next_version_name": ""
      }
    ]
  },
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg"
  },
  "peers": {
    "seeds": [
      {
        "id": "20e1000e88125698264454a884812746c2eb4807",
        "address": "seeds.lavenderfive.com:16856",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
        "address": "odin-mainnet-seed.autostake.com:26766",
        "provider": "AutoStake.net"
      },
      {
        "id": "9a5b281c2d627cdf362f86721ced61a6228b87d1",
        "address": "odin.seed.stavr.tech:1116",
        "provider": "🔥STAVR🔥"
      },
      {
        "id": "8542cd7e6bf9d260fef543bc49e59be5a3fa9074",
        "address": "seed.publicnode.com:26656",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      }
    ],
    "persistent_peers": [
      {
        "id": "9d16b1ce74a34b869d69ad5fe34eaca614a36ecd",
        "address": "35.241.238.207:26656",
        "provider": "Odin Protocol"
      },
      {
        "id": "02e905f49e1b869f55ad010979931b542302a9e6",
        "address": "35.241.221.154:26656",
        "provider": "Odin Protocol"
      },
      {
        "id": "4847c79f1601d24d3605278a0183d416a99aa093",
        "address": "34.140.252.7:26656",
        "provider": "Odin Protocol"
      },
      {
        "id": "0165cd0d60549a37abb00b6acc8227a54609c648",
        "address": "34.79.179.216:26656",
        "provider": "Odin Protocol"
      },
      {
        "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
        "address": "odin-mainnet-peer.autostake.com:26766",
        "provider": "AutoStake.net"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc.odinprotocol.io",
        "provider": "Heimdall Gateway"
      },
      {
        "address": "https://odin.rpc.m.stavr.tech:443",
        "provider": "🔥STAVR🔥"
      },
      {
        "address": "https://odin-rpc.lavenderfive.com/",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://odin-mainnet-rpc.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      }
    ],
    "rest": [
      {
        "address": "https://api.odinprotocol.io",
        "provider": "Heimdall Gateway"
      },
      {
        "address": "https://odin.api.m.stavr.tech",
        "provider": "🔥STAVR🔥"
      },
      {
        "address": "https://odin-api.lavenderfive.com/",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://odin-mainnet-lcd.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      }
    ],
    "grpc": [
      {
        "address": "odin-grpc.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "odin.grpc.m.stavr.tech:122",
        "provider": "🔥STAVR🔥"
      },
      {
        "address": "odin-mainnet-grpc.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      }
    ]
  },
  "explorers": [
    {
      "kind": "odin web",
      "url": "https://mainnet.odinprotocol.io/",
      "tx_page": "https://mainnet.odinprotocol.io/transactions/${txHash}"
    },
    {
      "kind": "🔥STAVR🔥",
      "url": "https://explorer.stavr.tech/Odin-Mainnet",
      "tx_page": "https://explorer.stavr.tech/Odin-Mainnet/tx/${txHash}"
    },
    {
      "kind": "ping.pub",
      "url": "https://ping.pub/odin",
      "tx_page": "https://ping.pub/odin/tx/${txHash}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg"
    }
  ]
}

export const odinAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "odin",
  "assets": [
    {
      "description": "ODIN is the Staking and governance token for ODIN Protocol",
      "denom_units": [
        {
          "denom": "loki",
          "exponent": 0
        },
        {
          "denom": "odin",
          "exponent": 6
        }
      ],
      "base": "loki",
      "name": "ODIN",
      "display": "odin",
      "symbol": "ODIN",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg"
      },
      "coingecko_id": "odin-protocol",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg"
        }
      ],
      "socials": {
        "webiste": "https://odinprotocol.io/",
        "twitter": "https://twitter.com/odinprotocol"
      }
    },
    {
      "description": "GEO token for ODIN Protocol",
      "denom_units": [
        {
          "denom": "mGeo",
          "exponent": 0
        },
        {
          "denom": "geo",
          "exponent": 6
        }
      ],
      "base": "mGeo",
      "name": "GEO",
      "display": "geo",
      "symbol": "GEO",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg"
        }
      ]
    },
    {
      "description": "DOKI the last Dragon",
      "denom_units": [
        {
          "denom": "udoki",
          "exponent": 0
        },
        {
          "denom": "doki",
          "exponent": 6
        }
      ],
      "base": "udoki",
      "name": "DOKI",
      "display": "doki",
      "symbol": "DOKI",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/doki_Logo.png"
      },
      "coingecko_id": "doki",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/doki_Logo.png"
        }
      ],
      "socials": {
        "webiste": "https://dokicoin.io/",
        "twitter": "https://twitter.com/doki_coin"
      }
    },
    {
      "description": "Myrkur the leader of OLD Order",
      "denom_units": [
        {
          "denom": "umyrk",
          "exponent": 0
        },
        {
          "denom": "myrk",
          "exponent": 6
        }
      ],
      "base": "umyrk",
      "name": "MYRK",
      "display": "myrk",
      "symbol": "MYRK",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/MYRK_Logo.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/MYRK_Logo.png"
        }
      ],
      "socials": {
        "twitter": "https://twitter.com/myrkweilds"
      }
    },
    {
      "description": "O9W token for ODIN Protocol",
      "denom_units": [
        {
          "denom": "mO9W",
          "exponent": 0
        },
        {
          "denom": "O9W",
          "exponent": 6
        }
      ],
      "base": "mO9W",
      "name": "O9W",
      "display": "O9W",
      "symbol": "O9W",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg"
        }
      ],
      "socials": {
        "webiste": "https://www.odin9worlds.io/",
        "twitter": "https://twitter.com/odin9worlds"
      }
    }
  ]
}

