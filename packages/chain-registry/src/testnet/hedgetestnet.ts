import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const hedgetestnet: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "hedgetestnet",
  "chain_id": "berberis-1",
  "pretty_name": "Hedge Testnet",
  "status": "live",
  "network_type": "testnet",
  "website": "https://hedgeblock.io",
  "bech32_prefix": "hedge",
  "daemon_name": "hedged",
  "node_home": "$HOME/.hedge",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "uhedge",
        "low_gas_price": 0.01,
        "average_gas_price": 0.025,
        "high_gas_price": 0.03
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "uhedge"
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/hedgeblock/hedge"
  },
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hedgetestnet/images/hedge.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hedgetestnet/images/hedge.svg"
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc-berberis.hedgeblock.io",
        "provider": "Hedge"
      }
    ],
    "rest": [
      {
        "address": "https://lcd-berberis.hedgeblock.io",
        "provider": "Hedge"
      }
    ]
  },
  "explorers": [
    {
      "kind": "hedgescan",
      "url": "https://berberis.hedgescan.io",
      "tx_page": "https://berberis.hedgescan.io/txs/${txHash}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hedgetestnet/images/hedge.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hedgetestnet/images/hedge.svg"
    }
  ]
}

export const hedgetestnetAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "hedgetestnet",
  "assets": [
    {
      "description": "The native staking token of the Hedge blockchain.",
      "denom_units": [
        {
          "denom": "uhedge",
          "exponent": 0
        },
        {
          "denom": "hedge",
          "exponent": 6
        }
      ],
      "base": "uhedge",
      "name": "Berberis HEDGE",
      "display": "hedge",
      "symbol": "HEDGE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hedgetestnet/images/hedge.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hedgetestnet/images/hedge.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hedgetestnet/images/hedge.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hedgetestnet/images/hedge.svg"
        }
      ]
    }
  ]
}

