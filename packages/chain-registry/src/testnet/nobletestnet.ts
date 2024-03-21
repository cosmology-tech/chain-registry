import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const nobletestnet: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "nobletestnet",
  "chain_id": "grand-1",
  "website": "https://nobleassets.xyz/",
  "pretty_name": "Noble",
  "status": "live",
  "network_type": "testnet",
  "bech32_prefix": "noble",
  "daemon_name": "nobled",
  "node_home": "$HOME/.nobled",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "uusdc",
        "fixed_min_gas_price": 0,
        "low_gas_price": 0.01,
        "average_gas_price": 0.025,
        "high_gas_price": 0.03
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "ustake"
      }
    ],
    "lock_duration": {
      "time": "1814400s"
    }
  },
  "codebase": {
    "git_repo": "https://github.com/strangelove-ventures/noble",
    "recommended_version": "v4.0.0-beta1",
    "compatible_versions": [
      "v0.3.0",
      "v0.4.1",
      "v0.5.0",
      "v4.0.0-alpha1",
      "v4.0.0-alpha2",
      "v4.0.0-alpha3",
      "v4.0.0-beta1"
    ],
    "cosmos_sdk_version": "v0.45",
    "consensus": {
      "type": "tendermint",
      "version": "0.34"
    },
    "cosmwasm_enabled": false,
    "ibc_go_version": "v3.4.0",
    "ics_enabled": [
      "ics20-1"
    ],
    "genesis": {
      "name": "v0.3.0",
      "genesis_url": "https://raw.githubusercontent.com/strangelove-ventures/noble-networks/main/testnet/grand-1/genesis.json"
    },
    "versions": [
      {
        "name": "v0.3.0",
        "tag": "v0.3.0",
        "height": 0,
        "next_version_name": "v0.4.1"
      },
      {
        "name": "v0.4.1",
        "tag": "v0.4.2",
        "height": 302000,
        "recommended_version": "v0.4.1",
        "compatible_versions": [
          "v0.4.1"
        ],
        "cosmos_sdk_version": "v0.45",
        "consensus": {
          "type": "tendermint",
          "version": "0.34"
        },
        "cosmwasm_enabled": false,
        "ibc_go_version": "v3.4.0",
        "ics_enabled": [
          "ics20-1"
        ],
        "next_version_name": "radon"
      },
      {
        "name": "radon",
        "tag": "v3.0.0",
        "height": 645000,
        "recommended_version": "v0.5.1",
        "compatible_versions": [
          "v0.5.0", "v0.5.1"
        ],
        "cosmos_sdk_version": "v0.45",
        "consensus": {
          "type": "cometbft",
          "version": "0.34"
        },
        "cosmwasm_enabled": false,
        "ibc_go_version": "v3.4.0 (fork)",
        "ics_enabled": [
          "ics20-1"
        ]
      },
      {
        "name": "v3.0.0",
        "tag": "v3.0.0",
        "height": 1397000,
        "recommended_version": "v3.0.0",
        "cosmos_sdk_version": "v0.45",
        "consensus": {
          "type": "cometbft",
          "version": "0.34"
        },
        "cosmwasm_enabled": false,
        "ibc_go_version": "v3.4.0 (fork)",
        "ics_enabled": [
          "ics20-1"
        ]
      }
    ]
  },
  "peers": {
    "persistent_peers": [
      {
        "id": "38179b18853d6a8cb86b99881e02cf72f18b9d0f",
        "address": "34.127.46.223:26656",
        "provider": "Strangelove"
      },
      {
        "id": "57546d799a1cdef74b9a174052821a6e93636dfc",
        "address": "34.145.87.4:26656",
        "provider": "Strangelove"
      },
      {
        "id": "6b76ad22a73897e3c39c7d87b7d12a3b7d690bff",
        "address": "34.168.48.128:26656",
        "provider": "Strangelove"
      },
      {
        "id": "f8a0d8942bcf02b94ed875ded9cb23944a53e48a",
        "address": "141.95.97.28:15656",
        "provider": "B-Harvest"
      },
      {
        "id": "d82829d886635ffcfcef66adfaa725acb522e1c6",
        "address": "83.136.255.243:26656",
        "provider": "Everstake"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://noble-testnet-rpc.polkachu.com",
        "provider": "polkachu"
      },
      {
        "address": "https://rpc.testnet.noble.strange.love:443",
        "provider": "strangelove"
      }
    ],
    "rest": [
      {
        "address": "https://noble-testnet-api.polkachu.com",
        "provider": "polkachu"
      },
      {
        "address": "https://api.testnet.noble.strange.love",
        "provider": "strangelove"
      }
    ],
    "grpc": [
      {
        "address": "noble-testnet-grpc.polkachu.com:21590",
        "provider": "polkachu"
      }
    ]
  },
  "explorers": [
    {
      "kind": "mintscan",
      "url": "https://testnet.mintscan.io/noble-testnet",
      "tx_page": "https://testnet.mintscan.io/noble-testnet/txs/${txHash}"
    },
    {
      "kind": "ping.pub",
      "url": "https://explore.strange.love/grand-1",
      "tx_page": "https://explore.strange.love/grand-1/tx/${txHash}"
    }
  ]
}


export const nobletestnetAssetList: AssetList = {
  "$schema": "../../assetlist.schema.json",
  "chain_name": "nobletestnet",
  "assets": [
    {
      "description": "The controlled staking asset for Noble Chain",
      "denom_units": [
        {
          "denom": "ustake",
          "exponent": 0,
          "aliases": [
            "microstake"
          ]
        },
        {
          "denom": "stake",
          "exponent": 6
        }
      ],
      "base": "ustake",
      "name": "Stake",
      "display": "stake",
      "symbol": "STAKE"
    },
    {
      "description": "Love is a test tokenfactory asset controlled by the Strangelove Team",
      "denom_units": [
        {
          "denom": "ulove",
          "exponent": 0,
          "aliases": [
            "microlove"
          ]
        },
        {
          "denom": "love",
          "exponent": 6
        }
      ],
      "base": "ulove",
      "display": "love",
      "name": "Love",
      "symbol": "LOVE"
    },
    {
      "description": "USD Coin",
      "denom_units": [
        {
          "denom": "uusdc",
          "exponent": 0,
          "aliases": [
            "microusdc"
          ]
        },
        {
          "denom": "usdc",
          "exponent": 6
        }
      ],
      "base": "uusdc",
      "display": "usdc",
      "name": "USD Coin",
      "symbol": "USDC",
      "traces": [
        {
          "type": "test-mintage",
          "counterparty": {
            "chain_name": "noble",
            "base_denom": "uusdc"
          },
          "provider": "Circle"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg"
        }
      ]
    },
    {
      "description": "USDLR is a fiat-backed stablecoin issued by Stable. Stable pays DeFi protocols who distribute USDLR.",
      "denom_units": [
        {
          "denom": "uusdlr",
          "exponent": 0,
          "aliases": [
            "microusdlr"
          ]
        },
        {
          "denom": "usdlr",
          "exponent": 6
        }
      ],
      "base": "uusdlr",
      "display": "usdlr",
      "name": "USDLR by Stable",
      "symbol": "USDLR",
      "traces": [
        {
          "type": "test-mintage",
          "counterparty": {
            "chain_name": "noble",
            "base_denom": "uusdlr"
          },
          "provider": "Stable"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdlr.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdlr.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdlr.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdlr.svg"
        }
      ]
    }
  ]
}

