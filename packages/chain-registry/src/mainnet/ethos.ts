import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const ethos: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "ethos",
  "status": "live",
  "network_type": "mainnet",
  "pretty_name": "Ethos",
  "chain_id": "ethos_7003-1",
  "bech32_prefix": "ethos",
  "daemon_name": "ethosd",
  "node_home": "$HOME/.ethos",
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
        "denom": "aRYT"
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
        "address": "https://ethos-rpc.provable.dev:443/",
        "provider": "laurel.provable"
      }
    ],
    "rest": [
      {
        "address": "https://ethos.provable.dev/rest/",
        "provider": "laurel.provable"
      }
    ],
    "grpc": [
      {
        "address": "ethos-grpc.provable.dev:443",
        "provider": "laurel.provable"
      }
    ],
    "evm-http-jsonrpc": [
      {
        "address": "https://ethos-evm.provable.dev/",
        "provider": "laurel.provable"
      }
    ]
  },
  "explorers": [],
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.svg"
  },
  "codebase": {
    "genesis": {
      "genesis_url": ""
    }
  },
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.svg"
    }
  ]
}

export const ethosAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "ethos",
  "assets": [
    {
      "description": "The native token of Ethos",
      "denom_units": [
        {
          "denom": "aRYT",
          "exponent": 0
        },
        {
          "denom": "RYT",
          "exponent": 18
        }
      ],
      "base": "aRYT",
      "name": "RYT",
      "display": "RYT",
      "symbol": "RYT",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.svg"
        }
      ]
    }
  ]
}

