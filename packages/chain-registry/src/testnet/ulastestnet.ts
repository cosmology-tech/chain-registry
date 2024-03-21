import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const ulastestnet: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "ulastestnet",
  "status": "live",
  "network_type": "testnet",
  "pretty_name": "ULAS",
  "chain_id": "ulas",
  "bech32_prefix": "ulas",
  "daemon_name": "ulasd",
  "node_home": "$HOME/.ulas",
  "codebase": {
    "git_repo": "https://github.com/ulasnetwork/ulas",
    "recommended_version": "v0.0.1",
    "compatible_versions": [
      "v0.0.1"
    ],
    "genesis": {
      "genesis_url": "https://raw.githubusercontent.com/ulasnetwork/chain-config/main/ulas/genesis.json"
    },
    "versions": [
      {
        "name": "v0.0.1",
        "recommended_version": "v0.0.1",
        "compatible_versions": [
          "v0.0.1"
        ]
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "http://65.49.204.199:26657",
        "provider": "UlasNetwork"
      }
    ],
    "rest": [
      {
        "address": "http://65.49.204.199:1317",
        "provider": "UlasNetwork"
      }
    ],
    "grpc": [
      {
        "address": "http://65.49.204.199:9090",
        "provider": "UlasNetwork"
      }
    ]
  },
  "explorers": [
    {
      "kind": "ulas-scan",
      "url": "https://testnet-explorer.ulas.network",
      "tx_page": "https://testnet-explorer.ulas.network/ulas/tx/${txHash}"
    }
  ]
}

export const ulastestnetAssetList: AssetList = {
  "$schema": "../../assetlist.schema.json",
  "chain_name": "ulastestnet",
  "assets": [
    {
      "description": "WEB3 twitter",
      "denom_units": [
        {
          "denom": "uulas",
          "exponent": 0
        },
        {
          "denom": "ulas",
          "exponent": 6
        }
      ],
      "base": "uulas",
      "name": "ULAS Network",
      "display": "ULAS",
      "symbol": "ULAS",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/ulastestnet/images/logo.png"
      },
      "coingecko_id": "ulas",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/ulastestnet/images/logo.png"
        }
      ]
    }
  ]
}

