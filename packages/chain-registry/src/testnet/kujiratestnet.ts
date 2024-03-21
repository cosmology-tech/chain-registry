import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const kujiratestnet: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "kujiratestnet",
  "chain_id": "harpoon-4",
  "pretty_name": "Kujira Harpoon",
  "status": "live",
  "network_type": "testnet",
  "bech32_prefix": "kujira",
  "daemon_name": "kujirad",
  "node_home": "$HOME/.kujira",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "ukuji",
        "fixed_min_gas_price": 0
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/Team-Kujira/core",
    "recommended_version": "v0.4.0",
    "compatible_versions": [
      "v0.4.0"
    ],
    "genesis": {
      "genesis_url": "https://github.com/Team-Kujira/networks/raw/master/testnet/harpoon-4.json"
    },
    "versions": [
      {
        "name": "v0.4.0",
        "recommended_version": "v0.4.0",
        "compatible_versions": [
          "v0.4.0"
        ]
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://kujira-testnet-rpc.polkachu.com",
        "provider": "polkachu"
      }
    ],
    "rest": [
      {
        "address": "https://kujira-testnet-api.polkachu.com/",
        "provider": "polkachu"
      }
    ]
  },
  "explorers": [
    {
      "kind": "explorers.guru",
      "url": "https://kujira.explorers.guru",
      "tx_page": "https://kujira.explorers.guru/transaction/${txHash}"
    }
  ]
}

export const kujiratestnetAssetList: AssetList = {
  "$schema": "../../assetlist.schema.json",
  "chain_name": "kujiratestnet",
  "assets": [
    {
      "description": "The native staking and governance token of the Harpoon testnet version of Kujira.",
      "denom_units": [
        {
          "denom": "ukuji",
          "exponent": 0
        },
        {
          "denom": "kuji",
          "exponent": 6
        }
      ],
      "base": "ukuji",
      "name": "Kuji",
      "display": "kuji",
      "symbol": "KUJI",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kujiratestnet/images/kuji.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kujiratestnet/images/kuji.png"
        }
      ]
    },
    {
      "description": "The testnet token of Fuzion",
      "denom_units": [
        {
          "denom": "factory/kujira16qpvzhmawvsm8mcj4hdvtz25dadatdhhgw79xa/FUZN",
          "exponent": 0
        },
        {
          "denom": "fuzn",
          "exponent": 6
        }
      ],
      "base": "factory/kujira16qpvzhmawvsm8mcj4hdvtz25dadatdhhgw79xa/FUZN",
      "name": "Fuzion",
      "display": "fuzn",
      "symbol": "FUZN",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kujiratestnet/images/fuzn.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kujiratestnet/images/fuzn.png"
        }
      ]
    }
  ]
}

