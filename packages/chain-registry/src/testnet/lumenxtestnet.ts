import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const lumenxtestnet: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "lumenxtestnet",
  "status": "live",
  "network_type": "testnet",
  "pretty_name": "LumenX-Test",
  "chain_id": "lumenx-test",
  "bech32_prefix": "lumen",
  "daemon_name": "lumenxd",
  "node_home": "$HOME/.lumenx",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "ulumen",
        "fixed_min_gas_price": 0.0025,
        "low_gas_price": 0.01,
        "average_gas_price": 0.025,
        "high_gas_price": 0.03
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "ulumen"
      }
    ]
  },
  "codebase": {
    "ics_enabled": [
      "ics20-1"
    ]
  },
  "peers": {
    "seeds": [],
    "persistent_peers": [
      {
        "id": "8b66dba116f7f1feb0ff0649273ade6c9eca816c",
        "address": "38.242.237.107:26706"
      },
      {
        "id": "6e9a9670d7b156203139cb5fd547be78147565c9",
        "address": "62.171.145.215:26656"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://testnet-rpc.lumenx.chaintools.tech/",
        "provider": "ChainTools"
      },
      {
        "address": "https://testrpc-lumenx.cryptonet.pl/",
        "provider": "CryptoNet"        
      }
    ],
    "rest": [
      {
        "address": "https://testnet-api.lumenx.chaintools.tech/",
        "provider": "ChainTools"
      },
      {
        "address": "https://testapi-lumenx.cryptonet.pl/",
        "provider": "CryptoNet"
      }
    ],
    "grpc": []
  },
  "explorers": [
    {
      "kind": "ping.pub",
      "url": "https://testnet.explorer.chaintools.tech/lumenx",
      "tx_page": "https://testnet.explorer.chaintools.tech/lumenx/tx/${txHash}"
    }
  ]
}


export const lumenxtestnetAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "lumenxtestnet",
  "assets": [
    {
      "description": "The native token of Lumen Network",
      "denom_units": [
        {
          "denom": "ulumen",
          "exponent": 0
        },
        {
          "denom": "lumen",
          "exponent": 6
        }
      ],
      "base": "ulumen",
      "name": "LUMEN",
      "display": "lumen",
      "symbol": "LUMEN",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lumenxtestnet/images/lumen.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lumenxtestnet/images/lumen.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lumenxtestnet/images/lumen.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lumenxtestnet/images/lumen.svg"
        }
      ]
    }
  ]
}

