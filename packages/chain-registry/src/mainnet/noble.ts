import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const noble: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "noble",
  "chain_id": "noble-1",
  "website": "https://nobleassets.xyz/",
  "pretty_name": "Noble",
  "status": "live",
  "network_type": "mainnet",
  "bech32_prefix": "noble",
  "daemon_name": "nobled",
  "node_home": "$HOME/.noble",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "uusdc",
        "fixed_min_gas_price": 0.1,
        "low_gas_price": 0.1,
        "average_gas_price": 0.1,
        "high_gas_price": 0.2
      },
      {
        "denom": "ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0",
        "fixed_min_gas_price": 0.01,
        "low_gas_price": 0.01,
        "average_gas_price": 0.01,
        "high_gas_price": 0.02
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
    "recommended_version": "v4.0.3",
    "compatible_versions": [
      "v4.0.3"
    ],
    "cosmos_sdk_version": "v0.45.16",
    "consensus": {
      "type": "cometbft",
      "version": "v0.34.27"
    },
    "cosmwasm_enabled": false,
    "ibc_go_version": "v4.5.1",
    "ics_enabled": [
      "ics20-1"
    ],
    "genesis": {
      "name": "v1.0.0",
      "genesis_url": "https://raw.githubusercontent.com/strangelove-ventures/noble-networks/main/mainnet/noble-1/genesis.json"
    },
    "versions": [
      {
        "name": "v1.0.0",
        "tag": "v1.0.0",
        "height": 0,
        "recommended_version": "v1.0.0",
        "compatible_versions": [
          "v1.0.0"
        ],
        "cosmos_sdk_version": "v0.45",
        "consensus": {
          "type": "tendermint",
          "version": "v0.34"
        },
        "cosmwasm_enabled": false,
        "ibc_go_version": "v3.4.0",
        "ics_enabled": [
          "ics20-1"
        ],
        "next_version_name": "neon"
      },
      {
        "name": "neon",
        "tag": "v2.0.0",
        "height": 119000,
        "recommended_version": "v2.0.0",
        "compatible_versions": [
          "v2.0.0"
        ],
        "cosmos_sdk_version": "v0.45",
        "consensus": {
          "type": "tendermint",
          "version": "v0.34"
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
        "height": 1296000,
        "recommended_version": "v3.0.0",
        "compatible_versions": [
          "v3.0.0"
        ],
        "cosmos_sdk_version": "v0.45.15",
        "consensus": {
          "type": "cometbft",
          "version": "v0.34.27"
        },
        "cosmwasm_enabled": false,
        "ibc_go_version": "v3.4.0",
        "ics_enabled": [
          "ics20-1"
        ],
        "next_version_name": "v3.1.0"
      },
      {
        "name": "v3.1.0",
        "tag": "v3.1.0",
        "height": 2672000,
        "recommended_version": "v3.1.0",
        "compatible_versions": [
          "v3.1.0"
        ],
        "cosmos_sdk_version": "v0.45.15",
        "consensus": {
          "type": "cometbft",
          "version": "v0.34.27"
        },
        "cosmwasm_enabled": false,
        "ibc_go_version": "v3.4.0",
        "ics_enabled": [
          "ics20-1"
        ],
        "next_version_name": "argon"
      },
      {
        "name": "argon",
        "tag": "v4.0.3",
        "height": 3408600,
        "recommended_version": "v4.0.3",
        "compatible_versions": [
          "v4.0.3"
        ],
        "cosmos_sdk_version": "v0.45.16",
        "consensus": {
          "type": "cometbft",
          "version": "v0.34.27"
        },
        "cosmwasm_enabled": false,
        "ibc_go_version": "v4.5.1",
        "ics_enabled": [
          "ics20-1"
        ],
        "next_version_name": ""
      }
    ]
  },
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg"
  },
  "description": "The most reliable, secure, and frictionless way to natively issue a digital asset in Cosmos.",
  "peers": {
    "seeds": [
      {
        "id": "20e1000e88125698264454a884812746c2eb4807",
        "address": "seeds.lavenderfive.com:21590",
        "provider": "Lavender.Five Nodes 🐝"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://noble-rpc.polkachu.com",
        "provider": "polkachu"
      },
      {
        "address": "https://noble-rpc.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      }
    ],
    "rest": [
      {
        "address": "https://noble-api.polkachu.com",
        "provider": "polkachu"
      },
      {
        "address": "https://noble-api.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      }
    ],
    "grpc": [
      {
        "address": "noble-grpc.polkachu.com:21590",
        "provider": "polkachu"
      },
      {
        "address": "https://noble-grpc.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      }
    ]
  },
  "explorers": [
    {
      "kind": "mintscan",
      "url": "https://www.mintscan.io/noble",
      "tx_page": "https://www.mintscan.io/noble/txs/${txHash}",
      "account_page": "https://www.mintscan.io/noble/account/${accountAddress}"
    },
    {
      "kind": "ezstaking",
      "url": "https://ezstaking.app/noble",
      "tx_page": "https://ezstaking.app/noble/txs/${txHash}",
      "account_page": "https://ezstaking.app/noble/account/${accountAddress}"
    },
    {
      "kind": "ping.pub",
      "url": "https://explore.strange.love/noble-1",
      "tx_page": "https://explore.strange.love/noble-1/tx/${txHash}"
    },
    {
      "kind": "Stakeflow",
      "url": "https://stakeflow.io/noble",
      "account_page": "https://stakeflow.io/noble/accounts/${accountAddress}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg"
    }
  ]
}

export const nobleAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "noble",
  "assets": [
    {
      "description": "The permissioned staking asset for Noble Chain",
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
      "symbol": "STAKE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg"
        }
      ]
    },
    {
      "description": "Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.",
      "denom_units": [
        {
          "denom": "ufrienzies",
          "exponent": 0,
          "aliases": [
            "microfrienzies"
          ]
        },
        {
          "denom": "frienzies",
          "exponent": 6
        }
      ],
      "base": "ufrienzies",
      "display": "frienzies",
      "name": "Frienzies",
      "symbol": "FRNZ",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg"
        }
      ]
    },
    {
      "description": "ATOM token on Noble",
      "denom_units": [
        {
          "denom": "ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0",
          "exponent": 0
        },
        {
          "denom": "atom",
          "exponent": 6,
          "aliases": [
            "ATOM"
          ]
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0",
      "name": "Atom Staking Coin",
      "display": "atom",
      "symbol": "ATOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "cosmoshub",
            "base_denom": "uatom",
            "channel_id": "channel-536"
          },
          "chain": {
            "channel_id": "channel-4",
            "path": "transfer/channel-4/uatom"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
        }
      ]
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
      "coingecko_id": "usd-coin",
      "traces": [
        {
          "type": "additional-mintage",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
          },
          "provider": "Circle"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg"
        }
      ]
    }
  ]
}

