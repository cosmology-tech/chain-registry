import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const elystestnet: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "elystestnet",
  "status": "live",
  "network_type": "testnet",
  "pretty_name": "Elys Network",
  "chain_id": "elystestnet-1",
  "bech32_prefix": "elys",
  "daemon_name": "elysd",
  "node_home": "$HOME/.elys",
  "key_algos": ["secp256k1"],
  "slip44": 118,
  "staking": {
    "staking_tokens": [
      {
        "denom": "uelys"
      }
    ],
    "lock_duration": {
      "time": "1209600s"
    }
  },
  "fees": {
    "fee_tokens": [
      {
        "denom": "uelys",
        "low_gas_price": 10000,
        "average_gas_price": 25000,
        "high_gas_price": 30000
      },
      {
        "denom": "ibc/2180E84E20F5679FCC760D8C165B60F42065DEF7F46A72B447CFF1B7DC6C0A65",
        "low_gas_price": 10000,
        "average_gas_price": 25000,
        "high_gas_price": 30000
      },
      {
        "denom": "ibc/E2D2F6ADCC68AA3384B2F5DFACCA437923D137C14E86FB8A10207CF3BED0C8D4",
        "low_gas_price": 10000,
        "average_gas_price": 25000,
        "high_gas_price": 30000
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/elys-network/elys",
    "recommended_version": "v0.12.0",
    "compatible_versions": ["v0.12.0"],
    "cosmos_sdk_version": "v0.47",
    "consensus": {
      "type": "cometbft",
      "version": "0.37.2"
    },
    "ibc_go_version": "v7.3.0",
    "cosmwasm_enabled": false,
    "genesis": {
      "genesis_url": "https://snapshots.polkachu.com/testnet-genesis/elys/genesis.json"
    },
    "versions": [
      {
        "name": "v0.2.3",
        "recommended_version": "v0.2.3",
        "compatible_versions": ["v0.2.3"],
        "cosmos_sdk_version": "v0.46",
        "consensus": {
          "type": "tendermint",
          "version": "0.34"
        },
        "ibc_go_version": "v6.1.0",
        "cosmwasm_enabled": false,
        "binaries": {
          "linux/amd64": "https://github.com/elys-network/elys/releases/download/v0.2.3/elys._v0.2.3_linux_amd64.tar.gz"
        }
      },
      {
        "name": "v0.3.1",
        "recommended_version": "v0.3.1",
        "compatible_versions": ["v0.3.1"],
        "binaries": {
          "linux/amd64": "https://github.com/elys-network/elys/releases/download/v0.3.1/elys._v0.3.1_linux_amd64.tar.gz"
        }
      },
      {
        "name": "v0.4.0",
        "recommended_version": "v0.4.0",
        "compatible_versions": ["v0.4.0"],
        "binaries": {
          "linux/amd64": "https://github.com/elys-network/elys/releases/download/v0.4.0/elys._v0.4.0_linux_amd64.tar.gz"
        }
      },
      {
        "name": "v0.5.0",
        "recommended_version": "v0.5.0",
        "compatible_versions": ["v0.5.0"],
        "binaries": {
          "linux/amd64": "https://github.com/elys-network/elys/releases/download/v0.5.0/elys._v0.5.0_linux_amd64.tar.gz"
        }
      },
      {
        "name": "v0.5.1",
        "recommended_version": "v0.5.1",
        "compatible_versions": ["v0.5.1"],
        "binaries": {
          "linux/amd64": "https://github.com/elys-network/elys/releases/download/v0.5.1/elys._v0.5.1_linux_amd64.tar.gz"
        }
      },
      {
        "name": "v0.5.2",
        "recommended_version": "v0.5.2",
        "compatible_versions": ["v0.5.2"],
        "binaries": {
          "linux/amd64": "https://github.com/elys-network/elys/releases/download/v0.5.0/elys._v0.5.2_linux_amd64.tar.gz"
        }
      },
      {
        "name": "v0.5.3",
        "recommended_version": "v0.5.3",
        "compatible_versions": ["v0.5.3"],
        "binaries": {
          "linux/amd64": "https://github.com/elys-network/elys/releases/download/v0.5.3/elys._v0.5.3_linux_amd64.tar.gz"
        }
      },
      {
        "name": "v0.5.4",
        "recommended_version": "v0.5.4",
        "compatible_versions": ["v0.5.4"],
        "binaries": {
          "linux/amd64": "https://github.com/elys-network/elys/releases/download/v0.5.4/elys._v0.5.4_linux_amd64.tar.gz"
        }
      },
      {
        "name": "v0.6.0",
        "recommended_version": "v0.6.0",
        "compatible_versions": ["v0.6.0"],
        "binaries": {
          "linux/amd64": "https://github.com/elys-network/elys/releases/download/v0.6.0/elys._v0.6.0_linux_amd64.tar.gz"
        }
      },
      {
        "name": "v0.7.0",
        "recommended_version": "v0.7.0",
        "compatible_versions": ["v0.7.0"],
        "binaries": {
          "linux/amd64": "https://github.com/elys-network/elys/releases/download/v0.7.0/elys._v0.7.0_linux_amd64.tar.gz"
        }
      },
      {
        "name": "v0.8.0",
        "recommended_version": "v0.8.0",
        "compatible_versions": ["v0.8.0"],
        "binaries": {
          "linux/amd64": "https://github.com/elys-network/elys/releases/download/v0.8.0/elys._v0.8.0_linux_amd64.tar.gz"
        }
      },
      {
        "name": "v0.9.0",
        "recommended_version": "v0.9.0",
        "compatible_versions": ["v0.9.0"],
        "binaries": {
          "linux/amd64": "https://github.com/elys-network/elys/releases/download/v0.9.0/elys._v0.9.0_linux_amd64.tar.gz"
        }
      },
      {
        "name": "v0.10.0",
        "recommended_version": "v0.10.0",
        "compatible_versions": ["v0.10.0"],
        "binaries": {
          "linux/amd64": "https://github.com/elys-network/elys/releases/download/v0.10.0/elysd-0.10.0-linux-amd64.tar.gz"
        }
      },
      {
        "name": "v0.11.0",
        "recommended_version": "v0.11.0",
        "compatible_versions": ["v0.11.0"],
        "binaries": {
          "linux/amd64": "https://github.com/elys-network/elys/releases/download/v0.11.0/elysd-v0.11.0-linux-amd64.tar.gz"
        }
      },
      {
        "name": "v0.12.0",
        "recommended_version": "v0.12.0",
        "compatible_versions": ["v0.12.0"],
        "binaries": {
          "linux/amd64": "https://github.com/elys-network/elys/releases/download/v0.12.0/elysd-v0.12.0-linux-amd64.tar.gz"
        },
        "cosmos_sdk_version": "v0.47",
        "consensus": {
          "type": "cometbft",
          "version": "0.37.2"
        },
        "ibc_go_version": "v7.3.0",
        "cosmwasm_enabled": false
      }
    ]
  },
  "peers": {
    "seeds": [
      {
        "id": "cdf9ae8529aa00e6e6703b28f3dcfdd37e07b27c",
        "address": "37.187.154.66:26656",
        "provider": "nirvana"
      },
      {
        "id": "86987eeff225699e67a6543de3622b8a986cce28",
        "address": "91.183.62.162:26656",
        "provider": "utopia"
      },
      {
        "id": "ae22b82b1dc34fa0b1a64854168692310f562136",
        "address": "198.27.74.140:26656",
        "provider": "shangrila"
      },
      {
        "id": "61284a4d71cd3a33771640b42f40b2afda389a1e",
        "address": "5.101.138.254:26656",
        "provider": "euphoria"
      },
      {
        "id": "ae7191b2b922c6a59456588c3a262df518b0d130",
        "address": "elys-testnet-seed.itrocket.net:54656",
        "provider": "itrocket"
      }
    ],
    "persistent_peers": [
      {
        "id": "609c64cc50fb4ebbe7cae3347545d3950ea2c018",
        "address": "65.108.195.29:23656",
        "provider": "Staketab"
      },
      {
        "id": "0977dd5475e303c99b66eaacab53c8cc28e49b05",
        "address": "elys-testnet-peer.itrocket.net:38656",
        "provider": "itrocket"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc.testnet.elys.network",
        "provider": "Elys Network"
      },
      {
        "address": "https://elys-testnet-rpc.staketab.org:443",
        "provider": "Staketab"
      },
      {
        "address": "https://elys-testnet-rpc.itrocket.net:443",
        "provider": "itrocket"
      }
    ],
    "rest": [
      {
        "address": "https://api.testnet.elys.network",
        "provider": "Elys Network"
      },
      {
        "address": "https://elys.api.t.stavr.tech",
        "provider": "🔥STAVR🔥"
      },
      {
        "address": "https://elys-testnet-rest.staketab.org",
        "provider": "Staketab"
      },
      {
        "address": "https://elys-testnet-api.itrocket.net",
        "provider": "itrocket"
      }
    ],
    "grpc": [
      {
        "address": "services.staketab.com:9390",
        "provider": "Staketab"
      },
      {
        "address": "elys-testnet-grpc.itrocket.net:38090",
        "provider": "itrocket"
      }
    ]
  },
  "explorers": [
    {
      "kind": "🔥STAVR🔥",
      "url": "https://explorer.stavr.tech/Elys-Testnet",
      "tx_page": "https://explorer.stavr.tech/Elys-Testnet/tx/${txHash}",
      "account_page": "https://explorer.stavr.tech/Elys-Testnet/account/${accountAddress}"
    },
    {
      "kind": "ping.pub",
      "url": "https://testnet.elys.network/elys",
      "tx_page": "https://testnet.elys.network/elys/tx/${txHash}"
    },
    {
      "kind": "itrocket",
      "url": "https://testnet.itrocket.net/elys",
      "tx_page": "https://testnet.itrocket.net/elys/staking/tx/${txHash}",
      "account_page": "https://testnet.itrocket.net/elys/account/${accountAddress}"
    }
  ]
}


export const elystestnetAssetList: AssetList = {
  "$schema": "../../assetlist.schema.json",
  "chain_name": "elystestnet",
  "assets": [
    {
      "description": "The native token of Elys Network",
      "denom_units": [
        {
          "denom": "uelys",
          "exponent": 0,
          "aliases": [
            "microelys"
          ]
        },
        {
          "denom": "melys",
          "exponent": 3,
          "aliases": [
            "millielys"
          ]
        },
        {
          "denom": "elys",
          "exponent": 6,
          "aliases": []
        }
      ],
      "base": "uelys",
      "name": "Elys Network",
      "display": "elys",
      "symbol": "ELYS",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/elys.png"
      },
      "coingecko_id": "elys",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/elys.png"
        }
      ]
    },
    {
      "description": "Eden token definition",
      "denom_units": [
        {
          "denom": "ueden",
          "exponent": 0,
          "aliases": [
            "microeden"
          ]
        },
        {
          "denom": "meden",
          "exponent": 3,
          "aliases": [
            "millieden"
          ]
        },
        {
          "denom": "eden",
          "exponent": 6,
          "aliases": []
        }
      ],
      "base": "ueden",
      "name": "Eden",
      "display": "eden",
      "symbol": "EDEN",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/eden.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/eden.png"
        }
      ]
    },
    {
      "description": "USDC from Noble",
      "denom_units": [
        {
          "denom": "ibc/2180E84E20F5679FCC760D8C165B60F42065DEF7F46A72B447CFF1B7DC6C0A65",
          "exponent": 0
        },
        {
          "denom": "usdc",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/2180E84E20F5679FCC760D8C165B60F42065DEF7F46A72B447CFF1B7DC6C0A65",
      "name": "Noble USD Coin",
      "display": "usdc",
      "symbol": "USDC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "nobletestnet",
            "base_denom": "uusdc",
            "channel_id": "channel-19"
          },
          "chain": {
            "channel_id": "channel-12",
            "path": "transfer/channel-12/uusdc"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "noble",
            "base_denom": "uusdc"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/E2D2F6ADCC68AA3384B2F5DFACCA437923D137C14E86FB8A10207CF3BED0C8D4",
          "exponent": 0
        },
        {
          "denom": "atom",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/E2D2F6ADCC68AA3384B2F5DFACCA437923D137C14E86FB8A10207CF3BED0C8D4",
      "name": "ATOM on Elys",
      "display": "atom",
      "symbol": "ATOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "cosmoshubtestnet",
            "base_denom": "uatom",
            "channel_id": "channel-3302"
          },
          "chain": {
            "channel_id": "channel-16",
            "path": "transfer/channel-16/uatom"
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
    }
  ]
}

