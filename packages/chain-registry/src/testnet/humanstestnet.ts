import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const humanstestnet: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "humanstestnet",
  "chain_id": "testnet-1",
  "pretty_name": "Humans AI Testnet",
  "status": "live",
  "network_type": "testnet",
  "bech32_prefix": "humans",
  "daemon_name": "humansd",
  "node_home": "$HOME/.humans",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "uheart",
        "fixed_min_gas_price": 0
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/humansdotai/humans",
    "recommended_version": "v1.0.0",
    "compatible_versions": [
      "v1.0.0"
    ],
    "genesis": {
      "genesis_url": "https://rpc-testnet.humans.zone/genesis"
    },
    "versions": [
      {
        "name": "v1.0.0",
        "recommended_version": "v1.0.0",
        "compatible_versions": [
          "v1.0.0"
        ]
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://humans-testnet.nodejumper.io",
        "provider": "NODEJUMPER"
      }
    ],
    "rest": [
      {
        "address": "https://humans-testnet.nodejumper.io:1317",
        "provider": "NODEJUMPER"
      }
    ],
    "grpc": [
      {
        "address": "https://humans-testnet.nodejumper.io:9090",
        "provider": "NODEJUMPER"
      }
    ]
  },
  "explorers": [
    {
      "kind": "explorer.humans.zone",
      "url": "https://explorer.humans.zone/",
      "tx_page": "https://explorer.humans.zone/humans-testnet/tx/${txHash}"
    }
  ]
}

export const humanstestnetAssetList: AssetList = {
  "$schema": "../../assetlist.schema.json",
  "chain_name": "humanstestnet",
  "assets": [
    {
      "description": "The native staking and governance token of the testnet version of Humans AI.",
      "denom_units": [
        {
          "denom": "uheart",
          "exponent": 0
        },
        {
          "denom": "heart",
          "exponent": 6
        }
      ],
      "base": "uheart",
      "name": "HEART",
      "display": "heart",
      "symbol": "HEART",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/humanstestnet/images/humans.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/humanstestnet/images/humans.png"
        }
      ]
    }
  ]
}

