import { Chain } from '@chain-registry/types';
const info: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "elystestnet",
  "status": "live",
  "network_type": "testnet",
  "pretty_name": "Elys Network",
  "chain_id": "elystestnet-1",
  "bech32_prefix": "elys",
  "daemon_name": "elysd",
  "node_home": "$HOME/.elys",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "staking": {
    "staking_tokens": [
      {
        "denom": "uelys"
      }
    ],
    "lock_duration": {
      "time": "1209600s"
    }
  },
  "codebase": {
    "cosmos_sdk_version": "v0.47",
    "cosmwasm_enabled": false
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc.testnet.elys.network",
        "provider": "Elys Network"
      },
      {
        "address": "https://elys-testnet-rpc.staketab.org:443",
        "provider": "Staketab"
      }
    ],
    "rest": [
      {
        "address": "https://api.testnet.elys.network",
        "provider": "Elys Network"
      },
      {
        "address": "https://elys.api.t.stavr.tech",
        "provider": "🔥STAVR🔥"
      },
      {
        "address": "https://elys-testnet-rest.staketab.org",
        "provider": "Staketab"
      }
    ],
    "grpc": [
      {
        "address": "services.staketab.com:9390",
        "provider": "Staketab"
      }
    ]
  },
  "explorers": [
    {
      "kind": "🔥STAVR🔥",
      "url": "https://explorer.stavr.tech/Elys-Testnet",
      "tx_page": "https://explorer.stavr.tech/Elys-Testnet/tx/${txHash}",
      "account_page": "https://explorer.stavr.tech/Elys-Testnet/account/${accountAddress}"
    },
    {
      "kind": "ping.pub",
      "url": "https://testnet.elys.network/elys",
      "tx_page": "https://testnet.elys.network/elys/tx/${txHash}"
    }
  ]
};
export default info;