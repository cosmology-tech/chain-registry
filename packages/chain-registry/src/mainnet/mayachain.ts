import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const mayachain: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "mayachain",
  "status": "live",
  "network_type": "mainnet",
  "website": "https://mayaprotocol.com/",
  "pretty_name": "Maya Protocol",
  "chain_id": "mayachain-mainnet-v1",
  "bech32_prefix": "maya",
  "daemon_name": "mayanode",
  "node_home": "$HOME/.mayanode",
  "slip44": 931,
  "codebase": {
    "git_repo": "https://gitlab.com/mayachain/mayanode",
    "recommended_version": "V1.103.3",
    "compatible_versions": [
      "V1.103.3"
    ],
    "genesis": {
      "genesis_url": "https://tendermint.mayachain.info/genesis"
    },
    "versions": [
      {
        "name": "V1.103.3",
        "recommended_version": "V1.103.3",
        "compatible_versions": [
          "V1.103.3"
        ]
      }
    ]
  },
  "peers": {
    "seeds": [
      {
        "id": "bd3cdc522a8db64935e6ab5509c3fe3bebc036a8",
        "address": "13.52.55.197:27146"
      },
      {
        "id": "55e511e9d3fe84cfad597b0adab98bb2e3c6efc7",
        "address": "18.194.46.101:27146"
      },
      {
        "id": "ae1713e45cb5c579fc07b7f0ff24adad1ea93aa1",
        "address": "18.221.183.211:27146"
      },
     {
        "id": "3a2c07509c1ac64de4d6d832dca7cdbfca398fc2",
        "address": "15.156.45.237:27146"
      },
      {
        "id": "b149d5ad54c7b56a3b43548e3814713f20519946",
        "address": "18.217.85.10:27146"
      },
      {
        "id": "c0f2a2a7e50b56fc92f5723dd3baf883c12048db",
        "address": "3.132.55.140:27146"
      },
      {
        "id": "8542cd7e6bf9d260fef543bc49e59be5a3fa9074",
        "address": "seed.publicnode.com:26656",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://tendermint.mayachain.info",
        "provider": "tendermint"
      }
    ],
    "rest": [
      {
        "address": "https://mayanode.mayachain.info",
        "provider": "mayanode"
      }
    ]
  },
  "explorers": [
    {
      "kind": "Maya Protocol explorer",
      "url": "https://www.explorer.mayachain.info",
      "tx_page": "https://www.explorer.mayachain.info/#/txs/${txHash}"
    }
  ]
}


export const mayachainAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "mayachain",
  "assets": [
    {
      "description": "The native token of Maya Protocol",
      "denom_units": [
        {
          "denom": "cacao",
          "exponent": 0
        },
        {
          "denom": "CACAO",
          "exponent": 10
        }
      ],
      "base": "cacao",
      "name": "Cacao",
      "display": "CACAO",
      "symbol": "CACAO",
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mayachain/images/cacao.svg"
        }
      ],
      "coingecko_id": "cacao",
      "keywords": [
        "dex"
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mayachain/images/cacao.svg"
      }
    },
    {
      "description": "The native revenue sharing token of Maya Protocol",
      "denom_units": [
        {
          "denom": "maya",
          "exponent": 0
        },
        {
          "denom": "MAYA",
          "exponent": 4
        }
      ],
      "base": "maya",
      "name": "Maya",
      "display": "MAYA",
      "symbol": "MAYA",
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mayachain/images/maya.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mayachain/images/maya.svg"
      }
    }
  ]
}

