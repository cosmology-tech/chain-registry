import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const hypersigntestnet: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "hypersigntestnet",
  "status": "live",
  "network_type": "testnet",
  "pretty_name": "Hypersign Testnet",
  "chain_id": "prajna-1",
  "bech32_prefix": "hid",
  "daemon_name": "hid-noded",
  "node_home": "$HOME/.hid-node",
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "uhid",
        "fixed_min_gas_price": 0
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/hypersign-protocol/hid-node",
    "recommended_version": "v0.2.0",
    "compatible_versions": [
      "v0.2.0"
    ],
    "binaries": {
      "linux/amd64": "https://github.com/hypersign-protocol/hid-node/releases/download/v0.2.0/hid-noded-0.2.0-linux-amd64.tar.gz",
      "linux/arm64": "https://github.com/hypersign-protocol/hid-node/releases/download/v0.2.0/hid-noded-0.2.0-linux-arm64.tar.gz",
      "darwin/amd64": "https://github.com/hypersign-protocol/hid-node/releases/download/v0.2.0/hid-noded-0.2.0-darwin-amd64.tar.gz"
    },
    "genesis": {
      "genesis_url": "https://raw.githubusercontent.com/hypersign-protocol/networks/master/testnet/prajna/final_genesis.json"
    },
    "versions": [
      {
        "name": "v0.2.0",
        "recommended_version": "v0.2.0",
        "compatible_versions": [
          "v0.2.0"
        ],
        "binaries": {
          "linux/amd64": "https://github.com/hypersign-protocol/hid-node/releases/download/v0.2.0/hid-noded-0.2.0-linux-amd64.tar.gz",
          "linux/arm64": "https://github.com/hypersign-protocol/hid-node/releases/download/v0.2.0/hid-noded-0.2.0-linux-arm64.tar.gz",
          "darwin/amd64": "https://github.com/hypersign-protocol/hid-node/releases/download/v0.2.0/hid-noded-0.2.0-darwin-amd64.tar.gz"
        }
      }
    ]
  },
  "peers": {
    "seeds": [],
    "persistent_peers": [
      {
        "id": "1669450f3ecd9f989a30a3d050a142c7a848b723",
        "address": "34.100.151.52:26656",
        "provider": "Hypersign"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc.prajna.hypersign.id",
        "provider": "Hypersign"
      }
    ],
    "rest": [
      {
        "address": "https://api.prajna.hypersign.id",
        "provider": "Hypersign"
      }
    ],
    "grpc": []
  },
  "explorers": [
    {
      "kind": "Hypersign",
      "url": "https://explorer.hypersign.id/hypersign-prajna-testnet",
      "tx_page": "https://explorer.hypersign.id/hypersign-prajna-testnet/tx/${txHash}"
    }
  ]
}


export const hypersigntestnetAssetList: AssetList = {
  "$schema": "../../assetlist.schema.json",
  "chain_name": "hypersigntestnet",
  "assets": [
    {
      "description": "Native token for Hypersign Identity Network",
      "denom_units": [
        {
          "denom": "uhid",
          "exponent": 0
        },
        {
          "denom": "hid",
          "exponent": 6
        }
      ],
      "base": "uhid",
      "display": "hid",
      "name": "Hypersign",
      "symbol": "HID",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hypersigntestnet/images/hypersign.png"
      },
      "coingecko_id": "hypersign-identity-token",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hypersigntestnet/images/hypersign.png"
        }
      ]
    }
  ]
}

