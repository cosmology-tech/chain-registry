import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const celestiatestnet: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "celestiatestnet",
  "chain_id": "blockspacerace-0",
  "pretty_name": "Blockspace Race Testnet",
  "status": "live",
  "network_type": "testnet",
  "bech32_prefix": "celestia",
  "daemon_name": "celestia-appd",
  "node_home": "$HOME/.celestia-app",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "utia",
        "fixed_min_gas_price": 0
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/celestiaorg/celestia-app",
    "recommended_version": "v1.1.0",
    "compatible_versions": [
      "v1.1.0"
    ],
    "genesis": {
      "genesis_url": "https://raw.githubusercontent.com/celestiaorg/networks/master/blockspacerace/genesis.json"
    },
    "versions": [
      {
        "name": "v1.1.0",
        "recommended_version": "v1.1.0",
        "compatible_versions": [
          "v1.1.0"
        ]
      }
    ]
  },
  "peers": {
    "seeds": [
      {
        "id": "f97a75fb69d3a5fe893dca7c8d238ccc0bd66a8f",
        "address": "celestia-blockspacerace.seed.brocha.in:30583",
        "provider": "Brochain"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc-blockspacerace.pops.one/",
        "provider": "P-OPs"
      }
    ],
    "rest": [
      {
        "address": "https://celestia-blockspacerace-rest.brocha.in",
        "provider": "Brochain"
      }
    ]
  },
  "explorers": [
    {
      "kind": "Mintscan",
      "url": "https://testnet.mintscan.io/celestia-incentivized-testnet",
      "tx_page": "https://testnet.mintscan.io/celestia-incentivized-testnet/txs/${txHash}"
    }
  ]
}

export const celestiatestnetAssetList: AssetList = {
  "$schema": "../../assetlist.schema.json",
  "chain_name": "celestiatestnet",
  "assets": [
    {
      "description": "",
      "denom_units": [
        {
          "denom": "utia",
          "exponent": 0
        },
        {
          "denom": "tia",
          "exponent": 6
        }
      ],
      "base": "utia",
      "name": "Celestia",
      "display": "tia",
      "symbol": "TIA",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet/images/celestia.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet/images/celestia.svg"
        }
      ]
    }
  ]
}

