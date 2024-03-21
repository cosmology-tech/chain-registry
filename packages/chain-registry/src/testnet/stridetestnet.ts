import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const stridetestnet: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "stridetestnet",
  "status": "live",
  "network_type": "testnet",
  "pretty_name": "Stride Testnet",
  "chain_id": "stride-testnet-1",
  "bech32_prefix": "stride",
  "daemon_name": "strided",
  "node_home": "$HOME/.stride",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "ustrd",
        "fixed_min_gas_price": 0
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "ustrd"
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/Stride-Labs/stride",
    "recommended_version": "v8.0.0-testnet",
    "compatible_versions": [
      "v8.0.0-testnet"
    ],
    "cosmos_sdk_version": "0.46",
    "consensus": {
      "type": "tendermint",
      "version": "0.34"
    },
    "ibc_go_version": "5.1.0",
    "genesis": {
      "genesis_url": "https://raw.githubusercontent.com/Stride-Labs/mainnet/main/testnet/genesis.json"
    },
    "versions": [
      {
        "name": "v8.0.0-testnet",
        "recommended_version": "v8.0.0-testnet",
        "compatible_versions": [
          "v8.0.0-testnet"
        ],
        "cosmos_sdk_version": "0.46",
        "consensus": {
          "type": "tendermint",
          "version": "0.34"
        },
        "ibc_go_version": "5.1.0"
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
        "address": "https://stride.testnet-1.stridenet.co",
        "provider": "Stride"
      }
    ],
    "rest": [
      {
        "address": "https://stride.testnet-1.stridenet.co/api",
        "provider": "Stride"
      }
    ],
    "grpc": []
  },
  "explorers": [
    {
      "kind": "PingPub",
      "url": "https://testnet.ping.pub/stride",
      "tx_page": "https://testnet.ping.pub/stride/tx/${txHash}"
    }
  ]
}

export const stridetestnetAssetList: AssetList = {
  "$schema": "../../assetlist.schema.json",
  "chain_name": "stridetestnet",
  "assets": [
    {
      "description": "The native token of Stride",
      "denom_units": [
        {
          "denom": "ustrd",
          "exponent": 0
        },
        {
          "denom": "strd",
          "exponent": 6
        }
      ],
      "base": "ustrd",
      "name": "Stride",
      "display": "strd",
      "symbol": "STRD",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg"
        }
      ]
    }
  ]
}

