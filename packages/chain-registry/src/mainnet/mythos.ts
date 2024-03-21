import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const mythos: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "mythos",
  "status": "live",
  "network_type": "mainnet",
  "pretty_name": "Mythos",
  "chain_id": "mythos_7001-1",
  "bech32_prefix": "mythos",
  "daemon_name": "mythosd",
  "node_home": "$HOME/.mythosd",
  "key_algos": [
    "ethsecp256k1"
  ],
  "extra_codecs": [
    "ethermint"
  ],
  "slip44": 60,
  "fees": {
    "fee_tokens": [
      {
        "denom": "aMYT"
      }
    ]
  },
  "peers": {
    "seeds": [],
    "persistent_peers": []
  },
  "apis": {
    "rpc": [
      {
        "address": "https://mythos-rpc.provable.dev:443/",
        "provider": "laurel.provable"
      }
    ],
    "rest": [
      {
        "address": "https://mythos.provable.dev/rest/",
        "provider": "laurel.provable"
      }
    ],
    "grpc": [
      {
        "address": "mythos-grpc.provable.dev:443",
        "provider": "laurel.provable"
      }
    ],
    "evm-http-jsonrpc": []
  },
  "explorers": [],
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.svg"
  },
  "codebase": {
    "genesis": {
      "genesis_url": ""
    }
  },
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.svg"
    }
  ]
}

export const mythosAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "mythos",
  "assets": [
    {
      "description": "The native token of Mythos",
      "denom_units": [
        {
          "denom": "aMYT",
          "exponent": 0
        },
        {
          "denom": "MYT",
          "exponent": 18
        }
      ],
      "base": "aMYT",
      "name": "MYT",
      "display": "MYT",
      "symbol": "MYT",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.svg"
        }
      ]
    }
  ]
}

