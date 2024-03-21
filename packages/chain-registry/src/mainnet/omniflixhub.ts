import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const omniflixhub: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "omniflixhub",
  "status": "live",
  "network_type": "mainnet",
  "website": "https://omniflix.network/",
  "pretty_name": "OmniFlix",
  "chain_id": "omniflixhub-1",
  "daemon_name": "omniflixhubd",
  "node_home": "$HOME/.omniflixhub",
  "bech32_prefix": "omniflix",
  "slip44": 118,
  "codebase": {
    "git_repo": "https://github.com/OmniFlix/omniflixhub",
    "recommended_version": "v3.3.0",
    "compatible_versions": [
      "v3.3.0"
    ],
    "cosmos_sdk_version": "v0.47.10",
    "ibc_go_version": "v7.3.2",
    "consensus": {
      "type": "cometbft",
      "version": "v0.37.4"
    },
    "cosmwasm_version": "v0.45.0",
    "genesis": {
      "genesis_url": "https://raw.githubusercontent.com/OmniFlix/mainnet/main/omniflixhub-1/genesis.json"
    },
    "versions": [
      {
        "name": "v0.8.0",
        "recommended_version": "v0.8.0",
        "compatible_versions": [
          "v0.8.0"
        ],
        "cosmos_sdk_version": "v0.45.10",
        "ibc_go_version": "v3.3.1",
        "consensus": {
          "type": "tendermint",
          "version": "v0.34.22"
        },
        "next_version_name": "v0.10.0"
      },
      {
        "name": "v0.10.0",
        "proposal": 6,
        "height": 6262420,
        "recommended_version": "v0.10.0",
        "compatible_versions": [
          "v0.10.0"
        ],
        "cosmos_sdk_version": "v0.45.15",
        "ibc_go_version": "v3.4.0",
        "consensus": {
          "type": "cometbft",
          "version": "v0.34.27"
        },
        "next_version_name": "v0.11.0"
      },
      {
        "name": "v0.11.0",
        "proposal": 12,
        "height": 7339200,
        "recommended_version": "v0.11.1",
        "compatible_versions": [
          "v0.11.1"
        ],
        "cosmos_sdk_version": "v0.45.16",
        "ibc_go_version": "v4.4.2",
        "consensus": {
          "type": "cometbft",
          "version": "v0.34.28"
        },
        "next_version_name": "v0.12.x"
      },
      {
        "name": "v0.12.x",
        "proposal": 15,
        "height": 8054200,
        "recommended_version": "v0.12.1",
        "compatible_versions": [
          "v0.12.1"
        ],
        "cosmos_sdk_version": "v0.45.16",
        "ibc_go_version": "v4.4.2",
        "consensus": {
          "type": "cometbft",
          "version": "v0.34.28"
        },
        "next_version_name": "v2.0.0"
      },
      {
        "name": "v2.0.0",
        "proposal": 28,
        "height": 10428200,
        "recommended_version": "v2.0.0",
        "compatible_versions": [
          "v2.0.0"
        ],
        "cosmos_sdk_version": "v0.47.5",
        "ibc_go_version": "v7.3.1",
        "consensus": {
          "type": "cometbft",
          "version": "v0.37.2"
        },
        "next_version_name": "v2.1"
      },
      {
        "name": "v2.1",
        "proposal": 29,
        "height": 10678600,
        "recommended_version": "v2.1.0",
        "compatible_versions": [
          "v2.1.0"
        ],
        "cosmos_sdk_version": "v0.47.5",
        "ibc_go_version": "v7.3.1",
        "consensus": {
          "type": "cometbft",
          "version": "v0.37.2"
        },
        "next_version_name": "v3"
      },
      {
        "name": "v3",
        "proposal": 31,
        "height": 10872800,
        "recommended_version": "v3.3.0",
        "compatible_versions": [
          "v3.3.0"
        ],
        "cosmos_sdk_version": "v0.47.10",
        "ibc_go_version": "v7.3.2",
        "consensus": {
          "type": "cometbft",
          "version": "v0.37.4"
        },
        "cosmwasm_version": "v0.45.0",
        "next_version_name": ""
      }
    ]
  },
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg"
  },
  "fees": {
    "fee_tokens": [
      {
        "denom": "uflix",
        "fixed_min_gas_price": 0,
        "low_gas_price": 0.001,
        "average_gas_price": 0.0025,
        "high_gas_price": 0.025
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "uflix"
      }
    ]
  },
  "description": "Decentralized media and network layer for Creators & Sovereign Communities powered by NFTs and related distribution protocols.",
  "peers": {
    "seeds": [
      {
        "id": "babc3f3f7804933265ec9c40ad94f4da8e9e0017",
        "address": "seed.rhinostake.com:16956",
        "provider": "RHINO"
      },
      {
        "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
        "address": "omniflixhub-mainnet-seed.autostake.com:27306",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "id": "20e1000e88125698264454a884812746c2eb4807",
        "address": "seeds.lavenderfive.com:16956",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "id": "9aa8a73ea9364aa3cf7806d4dd25b6aed88d8152",
        "address": "omniflix.seed.mzonder.com:10656",
        "provider": "MZONDER"
      },
      {
        "id": "6b0ffcce9b59b91ceb8eea5d4599e27707e3604a",
        "address": "seeds.stakeup.tech:10215",
        "provider": "StakeUp"
      },
      {
        "id": "8542cd7e6bf9d260fef543bc49e59be5a3fa9074",
        "address": "seed.publicnode.com:26656",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      }
    ],
    "persistent_peers": [
      {
        "id": "574b37cc6e80663e70673cbe848147c2643ca48e",
        "address": "35.240.187.174:26656"
      },
      {
        "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
        "address": "omniflixhub-mainnet-peer.autostake.com:27306",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "id": "d8e371758cdb310906bc32ba0bb922642bb33536",
        "address": "65.21.91.99:26756",
        "provider": "Staketab"
      },
      {
        "id": "82feb443470ff81afa830e15fea387cac4849aac",
        "address": "mainnet.omniflix.peers.stakr.space:36656",
        "provider": "STAKR.space"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://omniflix.kingnodes.com",
        "provider": "kingnodes"
      },
      {
        "address": "https://rpc.omniflix.nodestake.top",
        "provider": "NodeStake"
      },
      {
        "address": "https://rpc.omniflix.chaintools.tech/",
        "provider": "ChainTools"
      },
      {
        "address": "https://rpc-omniflixhub-ia.cosmosia.notional.ventures/",
        "provider": "Notional"
      },
      {
        "address": "https://omniflixhub-rpc.lavenderfive.com/",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://rpc.omniflix.silentvalidator.com/",
        "provider": "silent"
      },
      {
        "address": "https://omniflixhub-mainnet-rpc.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "https://rpc-omniflix.architectnodes.com",
        "provider": "Architect Nodes"
      },
      {
        "address": "https://omniflix-rpc.staketab.org:443",
        "provider": "Staketab"
      },
      {
        "address": "https://rpc-omniflixhub.cosmos-spaces.cloud",
        "provider": "Cosmos Spaces"
      },
      {
        "address": "https://omniflix-rpc.dakshavalidator.in",
        "provider": "Daksha Validator"
      },
      {
        "address": "https://rpc-omniflix.mzonder.com:443",
        "provider": "MZONDER"
      },
      {
        "address": "https://rpc.omniflix.stakeup.tech:443",
        "provider": "StakeUp"
      },
      {
        "address": "https://rpc.omniflix.bronbro.io:443",
        "provider": "Bro_n_Bro"
      },
      {
        "address": "https://omniflix-rpc.publicnode.com:443",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "address": "https://mainnet.omniflix.rpc.srv.stakr.space",
        "provider": "STAKR.space"
      }
    ],
    "rest": [
      {
        "address": "https://api.omniflix.nodestake.top",
        "provider": "NodeStake"
      },
      {
        "address": "https://api-omniflixhub-ia.cosmosia.notional.ventures/",
        "provider": "Notional"
      },
      {
        "address": "https://omniflixhub-api.lavenderfive.com/",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://api-omniflixhub.cosmos-spaces.cloud",
        "provider": "Cosmos Spaces"
      },
      {
        "address": "https://api.omniflix.silentvalidator.com/",
        "provider": "silent"
      },
      {
        "address": "https://omniflix.kingnodes.com",
        "provider": "kingnodes"
      },
      {
        "address": "https://omniflixhub-mainnet-lcd.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "https://rest-omniflix.architectnodes.com",
        "provider": "Architect Nodes"
      },
      {
        "address": "https://omniflix-rest.staketab.org",
        "provider": "Staketab"
      },
      {
        "address": "https://omniflix-api.dakshavalidator.in",
        "provider": "Daksha Validator"
      },
      {
        "address": "http://omniflix.api.staking-explorer.com",
        "provider": "Daily DROP"
      },
      {
        "address": "https://api.omniflix.stakeup.tech",
        "provider": "StakeUp"
      },
      {
        "address": "https://lcd.omniflix.bronbro.io:443",
        "provider": "Bro_n_Bro"
      },
      {
        "address": "https://omniflix-rest.publicnode.com",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "address": "https://mainnet.omniflix.api.srv.stakr.space",
        "provider": "STAKR.space"
      }
    ],
    "grpc": [
      {
        "address": "grpc-omniflix.kingnodes.com:443",
        "provider": "kingnodes"
      },
      {
        "address": "grpc.omniflix.nodestake.top:443",
        "provider": "NodeStake"
      },
      {
        "address": "grpc-omniflixhub-ia.cosmosia.notional.ventures:443",
        "provider": "Notional"
      },
      {
        "address": "omniflixhub-grpc.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "grpc-omniflixhub.cosmos-spaces.cloud:2230",
        "provider": "Cosmos Spaces"
      },
      {
        "address": "omniflixhub-mainnet-grpc.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "grpc-omniflix.architectnodes.com:1443",
        "provider": "Architect Nodes"
      },
      {
        "address": "services.staketab.com:9015",
        "provider": "Staketab"
      },
      {
        "address": "grpc-omniflix.mzonder.com:443",
        "provider": "MZONDER"
      },
      {
        "address": "grpc.omniflix.stakeup.tech:443",
        "provider": "StakeUp"
      },
      {
        "address": "https://grpc.omniflix.bronbro.io:443",
        "provider": "Bro_n_Bro"
      },
      {
        "address": "omniflix-grpc.publicnode.com:443",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "address": "mainnet.omniflix.grpc.stakr.space:39090",
        "provider": "STAKR.space"
      }
    ]
  },
  "explorers": [
    {
      "kind": "ezstaking",
      "url": "https://ezstaking.app/omniflixhub",
      "tx_page": "https://ezstaking.app/omniflixhub/txs/${txHash}",
      "account_page": "https://ezstaking.app/omniflixhub/account/${accountAddress}"
    },
    {
      "kind": "mintscan",
      "url": "https://www.mintscan.io/omniflix",
      "tx_page": "https://www.mintscan.io/omniflix/transactions/${txHash}",
      "account_page": "https://www.mintscan.io/omniflix/accounts/${accountAddress}"
    },
    {
      "kind": "atomscan",
      "url": "https://atomscan.com/omniflixhub",
      "tx_page": "https://atomscan.com/omniflixhub/transactions/${txHash}",
      "account_page": "https://atomscan.com/omniflixhub/accounts/${accountAddress}"
    },
    {
      "kind": "STAKR.space explorer",
      "url": "https://explorer.stakr.space/omniflix/",
      "tx_page": "https://explorer.stakr.space/omniflix/tx/${txHash}",
      "account_page": "https://explorer.stakr.space/omniflix/account/${accountAddress}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg"
    }
  ]
}

export const omniflixhubAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "omniflixhub",
  "assets": [
    {
      "description": "The native staking token of OmniFlix Hub.",
      "denom_units": [
        {
          "denom": "uflix",
          "exponent": 0
        },
        {
          "denom": "flix",
          "exponent": 6
        }
      ],
      "base": "uflix",
      "name": "Flix",
      "display": "flix",
      "symbol": "FLIX",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg"
      },
      "coingecko_id": "omniflix-network",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg"
        }
      ],
      "socials": {
        "webiste": "https://omniflix.network/",
        "twitter": "https://twitter.com/OmniFlixNetwork"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477",
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
      "base": "ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477",
      "name": "Cosmos Hub Atom",
      "display": "atom",
      "symbol": "ATOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "cosmoshub",
            "base_denom": "uatom",
            "channel_id": "channel-306"
          },
          "chain": {
            "channel_id": "channel-12",
            "path": "transfer/channel-12/uatom"
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
      "denom_units": [
        {
          "denom": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
          "exponent": 0,
          "aliases": [
            "uosmo"
          ]
        },
        {
          "denom": "osmo",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
      "name": "Osmosis osmo",
      "display": "osmo",
      "symbol": "OSMO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "uosmo",
            "channel_id": "channel-199"
          },
          "chain": {
            "channel_id": "channel-1",
            "path": "transfer/channel-1/uosmo"
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
      "denom_units": [
        {
          "denom": "ibc/43D3010F4CA111744AC8B68E460BC95E565C32928A267FA2B30609C04C10B274",
          "exponent": 0,
          "aliases": [
            "uist"
          ]
        },
        {
          "denom": "ist",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/43D3010F4CA111744AC8B68E460BC95E565C32928A267FA2B30609C04C10B274",
      "name": "Agoric IST (Inter Stable Token)",
      "display": "ist",
      "symbol": "IST",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "agoric",
            "base_denom": "uist",
            "channel_id": "channel-58"
          },
          "chain": {
            "channel_id": "channel-30",
            "path": "transfer/channel-30/uist"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "agoric",
            "base_denom": "uist"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/AC4C84DD7D3732CFA95A420247FAD5179BE4F42E5635E2BF0A62C67E2E2FA4A9",
          "exponent": 0,
          "aliases": [
            "uusdc"
          ]
        },
        {
          "denom": "usdc",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/AC4C84DD7D3732CFA95A420247FAD5179BE4F42E5635E2BF0A62C67E2E2FA4A9",
      "name": "USD Coin (Axelar)",
      "display": "usdc",
      "symbol": "USDC.axl",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "axelar",
            "base_denom": "uusdc",
            "channel_id": "channel-77"
          },
          "chain": {
            "channel_id": "channel-27",
            "path": "transfer/channel-27/uusdc"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "axelar",
            "base_denom": "uusdc"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/9F28238BDB687A86681B30764BA1437E079C3565D04FDD7862055A83F7E5C630",
          "exponent": 0
        },
        {
          "denom": "baddog",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/9F28238BDB687A86681B30764BA1437E079C3565D04FDD7862055A83F7E5C630",
      "name": "BadDog (Osmosis)",
      "display": "baddog",
      "symbol": "BADDOG.osmo",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/2FFE07C4B4EFC0DDA099A16C6AF3C9CCA653CC56077E87217A585D48794B0BC7",
            "channel_id": "channel-199"
          },
          "chain": {
            "channel_id": "channel-1",
            "path": "transfer/channel-1/transfer/channel-113/factory/chihuahua1x4q2vkrz4dfgd9hcw0p5m2f2nuv2uqmt9xr8k2/achihuahuawifhat"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/2FFE07C4B4EFC0DDA099A16C6AF3C9CCA653CC56077E87217A585D48794B0BC7"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.png"
        },
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.png"
      }
    }
  ]
}

