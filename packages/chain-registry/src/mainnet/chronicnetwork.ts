import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const chronicnetwork: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "chronicnetwork",
  "status": "killed",
  "network_type": "mainnet",
  "pretty_name": "Chronic Chain",
  "chain_id": "morocco-1",
  "bech32_prefix": "chronic",
  "daemon_name": "chtd",
  "node_home": "$HOME/.cht",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "ucgas",
        "fixed_min_gas_price": 0.001
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/ChronicNetwork/cht",
    "recommended_version": "v1.1.0",
    "compatible_versions": [
      "v1.1.0"
    ],
    "binaries": {
      "linux/amd64": "https://github.com/ChronicNetwork/cht/releases/download/v.1.1.0/cht"
    },
    "genesis": {
      "genesis_url": "https://raw.githubusercontent.com/ChronicNetwork/net/main/mainnet/v1.1/genesis.json"
    },
    "versions": [
      {
        "name": "v1.1.0",
        "recommended_version": "v1.1.0",
        "compatible_versions": [
          "v1.1.0"
        ],
        "binaries": {
          "linux/amd64": "https://github.com/ChronicNetwork/cht/releases/download/v.1.1.0/cht"
        }
      }
    ]
  },
  "peers": {
    "seeds": [
      {
        "id": "8542cd7e6bf9d260fef543bc49e59be5a3fa9074",
        "address": "seed.publicnode.com:26656",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      }
    ],
    "persistent_peers": []
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc-chronic.zenchainlabs.io/",
        "provider": "ZenChainLabs"
      }
    ],
    "rest": [
      {
        "address": "https://api-chronic.zenchainlabs.io/",
        "provider": "ZenChainLabs"
      }
    ],
    "grpc": []
  },
  "explorers": [
    {
      "kind": "skynetexplorers",
      "url": "https://www.skynetexplorers.com/chronic-token",
      "tx_page": ""
    },
    {
      "kind": "Zenscan.io",
      "url": "https://www.chronic.zenscan.io",
      "tx_page": ""
    },
    {
      "kind": "atomscan",
      "url": "https://atomscan.com/chronicnetwork",
      "tx_page": "https://atomscan.com/chronicnetwork/transactions/${txHash}",
      "account_page": "https://atomscan.com/chronicnetwork/accounts/${accountAddress}"
    }
  ]
}


export const chronicnetworkAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "chronicnetwork",
  "assets": [
    {
      "description": "The CHT coin is the governance token within the Chronic Chain network, aimed to serve the entire cannabis community through its payment network, supply chain and trust network.",
      "denom_units": [
        {
          "denom": "ucht",
          "exponent": 0
        },
        {
          "denom": "cht",
          "exponent": 6
        }
      ],
      "base": "ucht",
      "display": "cht",
      "name": "Chronic Token",
      "symbol": "CHT",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chronicnetwork/images/cht.png"
      },
      "coingecko_id": "cht",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chronicnetwork/images/cht.png"
        }
      ]
    },
    {
      "description": "The CGAS coin is the transactional token within the Chronic Chain network, aimed to serve the entire cannabis community through its payment network, supply chain and trust network.",
      "denom_units": [
        {
          "denom": "ucgas",
          "exponent": 0
        },
        {
          "denom": "cgas",
          "exponent": 6
        }
      ],
      "base": "ucgas",
      "display": "cgas",
      "name": "Chronic Gas",
      "symbol": "CGAS",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chronicnetwork/images/cgas.png"
      },
      "coingecko_id": "cgas",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chronicnetwork/images/cgas.png"
        }
      ]
    }
  ]
}

