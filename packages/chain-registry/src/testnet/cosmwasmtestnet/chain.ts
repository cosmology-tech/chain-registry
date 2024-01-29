import { Chain } from '@chain-registry/types';
const info: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "cosmwasmtestnet",
  "status": "live",
  "network_type": "testnet",
  "pretty_name": "CosmWasm Testnet",
  "chain_id": "malaga-420",
  "bech32_prefix": "wasm",
  "daemon_name": "wasmd",
  "node_home": "$HOME/.wasmd",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "umlg",
        "low_gas_price": 0.03,
        "average_gas_price": 0.04,
        "high_gas_price": 0.05
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "uand"
      }
    ]
  },
  "codebase": {
    "cosmos_sdk_version": "0.45",
    "cosmwasm_enabled": true,
    "cosmwasm_version": "0.27"
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc.malaga-420.cosmwasm.com:443",
        "provider": "Confio"
      }
    ],
    "rest": [
      {
        "address": "https://api.malaga-420.cosmwasm.com",
        "provider": "Confio"
      }
    ]
  },
  "explorers": [
    {
      "kind": "BIG DIPPER",
      "url": "https://block-explorer.malaga-420.cosmwasm.com/",
      "tx_page": "https://block-explorer.malaga-420.cosmwasm.com/transactions/${txHash}"
    }
  ]
};
export default info;