import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const octa: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "octa",
  "status": "live",
  "network_type": "mainnet",
  "pretty_name": "Octa",
  "chain_id": "octa",
  "bech32_prefix": "octa",
  "daemon_name": "octadaemon",
  "node_home": "$HOME/.octa",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "uocta",
        "fixed_min_gas_price": 0
      }
    ]
  },
  "codebase": {
    "git_repo": "",
    "recommended_version": "",
    "compatible_versions": [],
    "binaries": {
      "linux/amd64": "",
      "linux/arm64": "",
      "darwin/amd64": "",
      "windows/amd64": ""
    },
    "genesis": {
      "genesis_url": "https://octa-coin-assets.s3.eu-central-1.amazonaws.com/genesis.json"
    }
  },
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/octa/images/octa.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/octa/images/octa.svg"
  },
  "peers": {
    "seeds": [],
    "persistent_peers": []
  },
  "apis": {
    "rpc": [],
    "rest": []
  },
  "explorers": [
    {
      "kind": "Octa explorer",
      "url": "http://explorer.octa-coin.com/",
      "tx_page": "http://explorer.octa-coin.com/txs/${txHash}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/octa/images/octa.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/octa/images/octa.svg"
    }
  ]
}

export const octaAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "octa",
  "assets": [
    {
      "description": "The native token of Octa Chain",
      "denom_units": [
        {
          "denom": "uocta",
          "exponent": 0,
          "aliases": []
        },
        {
          "denom": "octa",
          "exponent": 6,
          "aliases": []
        }
      ],
      "base": "uocta",
      "display": "octa",
      "name": "Octa",
      "symbol": "OCTA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/octa/images/octa.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/octa/images/octa.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/octa/images/octa.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/octa/images/octa.svg"
        }
      ]
    }
  ]
}

