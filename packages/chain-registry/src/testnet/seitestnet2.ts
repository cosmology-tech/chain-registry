import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const seitestnet2: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "seitestnet2",
  "chain_id": "atlantic-2",
  "pretty_name": "Sei Atlantic 2",
  "status": "live",
  "network_type": "testnet",
  "bech32_prefix": "sei",
  "daemon_name": "seid",
  "node_home": "$HOME/.sei",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "usei",
        "fixed_min_gas_price": 0
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/sei-protocol/sei-chain",
    "recommended_version": "2.0.40beta",
    "compatible_versions": [
      "2.0.34beta",
      "2.0.37beta",
      "2.0.39beta",
      "2.0.40beta"
    ],
    "genesis": {
      "genesis_url": "https://raw.githubusercontent.com/sei-protocol/testnet/main/atlantic-2/genesis.json"
    },
    "versions": [
      {
        "name": "2.0.40beta",
        "recommended_version": "2.0.40beta",
        "compatible_versions": [
          "2.0.34beta",
          "2.0.37beta",
          "2.0.39beta",
          "2.0.40beta"
        ]
      }
    ]
  },
  "peers": {
    "seeds": [
      {
        "id": "f97a75fb69d3a5fe893dca7c8d238ccc0bd66a8f",
        "address": "sei-testnet-2-seed.p2p.brocha.in:30587",
        "provider": "Brochain"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://sei-testnet-2-rpc.brocha.in",
        "provider": "Brochain"
      }
    ],
    "rest": [
      {
        "address": "https://sei-testnet-2-rest.brocha.in",
        "provider": "Brochain"
      }
    ]
  },
  "explorers": [
    {
      "kind": "explorers.guru",
      "url": "https://testnet.sei.explorers.guru",
      "tx_page": "https://testnet.sei.explorers.guru/transaction/${txHash}"
    },
    {
      "kind": "Brochain",
      "url": "https://testnet-explorer.brocha.in/sei%20atlantic%202",
      "tx_page": "https://testnet-explorer.brocha.in/sei%20atlantic%202/tx/${txHash}"
    }
  ]
}


export const seitestnet2AssetList: AssetList = {
  "$schema": "../../assetlist.schema.json",
  "chain_name": "seitestnet2",
  "assets": [
    {
      "description": "The native staking and governance token of the Atlantic testnet version of Sei.",
      "denom_units": [
        {
          "denom": "usei",
          "exponent": 0
        },
        {
          "denom": "sei",
          "exponent": 6
        }
      ],
      "base": "usei",
      "name": "Sei",
      "display": "sei",
      "symbol": "SEI",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/seitestnet2/images/sei.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/seitestnet2/images/sei.png"
        }
      ]
    }
  ]
}

