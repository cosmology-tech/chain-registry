import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const permtestnet: Chain = {
    "$schema": "../../chain.schema.json",
    "chain_name": "permtestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Perm Testnet",
    "chain_id": "testnet-1",
    "bech32_prefix": "perm",
    "daemon_name": "permd",
    "node_home": "$HOME/.perm",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uperm",
          "low_gas_price": 0.0025,
          "average_gas_price": 0.0025,
          "high_gas_price": 0.0024
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uperm"
        }
      ]
    },
    "codebase": {
      "git_repo": "https://github.com/Loop-Protocol/perm.git",
      "recommended_version": "v1.0.0",
      "compatible_versions": [
        "v1.0.0"
      ],
      "cosmos_sdk_version": "0.45",
      "consensus": {
        "type": "tendermint",
        "version": "0.34"
      },
      "cosmwasm_version": "0.30",
      "cosmwasm_enabled": true,
      "ibc_go_version": "4.3.0",
      "genesis": {
        "genesis_url": "https://raw.githubusercontent.com/Loop-Protocol/testnet/main/genesis.json"
      },
      "versions": [
        {
          "name": "v1.0.0",
          "recommended_version": "v1.0.0",
          "compatible_versions": [
            "v1.0.0"
          ],
          "cosmos_sdk_version": "0.45",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "0.30",
          "cosmwasm_enabled": true,
          "ibc_go_version": "4.3.0"
        },
        {
          "name": "v1.0.0",
          "recommended_version": "v1.0.0",
          "compatible_versions": [
            "v1.0.0"
          ],
          "cosmos_sdk_version": "0.45",
          "consensus": {
            "type": "tendermint",
            "version": "0.34"
          },
          "cosmwasm_version": "0.30",
          "cosmwasm_enabled": true,
          "ibc_go_version": "4.3.0"
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
          "address": "https://rpc.3.finance/",
          "provider": "Perm Network"
        }
      ],
      "rest": [
        {
          "address": "https://rest.3.finance/",
          "provider": "Perm Network"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc.3.finance/",
          "provider": "Perm Network"
        }
      ]
    },
    "explorers": [
      {
        "kind": "bigdipper",
        "url": "https://explorer.testnet.perm.ooo/",
        "tx_page": "https://explorer.testnet.perm.ooo/transactions/${txHash}"
      }
    ]
  }


export const permtestnetAssetList: AssetList = {
  "$schema": "../../assetlist.schema.json",
  "chain_name": "permtestnet",
  "assets": [
    {
      "description": "Perm A Permissioned Blockchain",
      "denom_units": [
        {
          "denom": "uperm",
          "exponent": 0
        },
        {
          "denom": "perm",
          "exponent": 6
        }
      ],
      "base": "uperm",
      "name": "Perm",
      "display": "perm",
      "symbol": "PERM",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/permtestnet/images/Perm.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/permtestnet/images/Perm.svg"
      },
      "coingecko_id": "",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/permtestnet/images/Perm.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/permtestnet/images/Perm.svg"
        }
      ]
    }
  ]
}

