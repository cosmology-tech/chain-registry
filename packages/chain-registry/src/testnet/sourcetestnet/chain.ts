import { Chain } from '@chain-registry/types';
const info: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "sourcetestnet",
  "status": "live",
  "network_type": "testnet",
  "pretty_name": "Source Testnet",
  "chain_id": "source-testnet",
  "bech32_prefix": "source",
  "daemon_name": "sourced",
  "node_home": "$HOME/.source",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "usource",
        "low_gas_price": 0.03,
        "average_gas_price": 0.04,
        "high_gas_price": 0.05
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "usource"
      }
    ]
  },
  "codebase": {
    "cosmos_sdk_version": "0.45",
    "cosmwasm_enabled": true,
    "cosmwasm_version": "0.25"
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc-t.source.nodestake.top",
        "provider": "Nodestake"
      },
      {
        "address": "https://rpc-source.nodeist.net",
        "provider": "Nodeist"
      },
      {
        "address": "https://source-testnet.rpc.kjnodes.com",
        "provider": "kjnodes"
      }
    ],
    "rest": [
      {
        "address": "https://api-t.source.nodestake.top",
        "provider": "Nodestake"
      },
      {
        "address": "https://api-source.nodeist.net",
        "provider": "Nodeist"
      },
      {
        "address": "https://source.api.t.stavr.tech",
        "provider": "🔥STAVR🔥"
      },
      {
        "address": "https://source-testnet.api.kjnodes.com",
        "provider": "kjnodes"
      }
    ],
    "grpc": [
      {
        "address": "https://grpc-t.source.nodestake.top",
        "provider": "nodestake"
      }
    ]
  },
  "explorers": [
    {
      "kind": "Nodestake",
      "url": "https://explorer.nodestake.top/source-testnet",
      "tx_page": "https://explorer.nodestake.top/source-testnet/tx/${txHash}"
    },
    {
      "kind": "🔥STAVR🔥",
      "url": "https://explorer.stavr.tech/Source",
      "tx_page": "https://explorer.stavr.tech/Source/tx/${txHash}"
    },
    {
      "kind": "kjnodes",
      "url": "https://explorer.kjnodes.com/source-testnet",
      "tx_page": "https://explorer.kjnodes.com/source-testnet/txs/${txHash}"
    }
  ]
};
export default info;