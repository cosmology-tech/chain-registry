import { Chain } from '@chain-registry/types';
const info: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "composabletestnet",
  "status": "live",
  "network_type": "testnet",
  "pretty_name": "Composable Testnet",
  "chain_id": "banksy-testnet-3",
  "bech32_prefix": "centauri",
  "daemon_name": "centaurid",
  "node_home": "$HOME/.banksy",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "staking": {
    "staking_tokens": [
      {
        "denom": "ppica"
      }
    ]
  },
  "fees": {
    "fee_tokens": [
      {
        "denom": "ppica",
        "fixed_min_gas_price": 0,
        "low_gas_price": 0,
        "average_gas_price": 0,
        "high_gas_price": 0
      }
    ]
  },
  "codebase": {},
  "apis": {
    "rpc": [
      {
        "address": "https://rpc.composable-t.indonode.net:443",
        "provider": "Indonode"
      },
      {
        "address": "https://rpc-composable-testnet.sr20de.xyz:443",
        "provider": "Sr20de"
      }
    ],
    "rest": [
      {
        "address": "https://api.composable-t.indonode.net",
        "provider": "Indonode"
      },
      {
        "address": "https://composable.api.t4.stavr.tech",
        "provider": "🔥STAVR🔥"
      },
      {
        "address": "https://api-composable-testnet.sr20de.xyz",
        "provider": "Sr20de"
      }
    ],
    "grpc": [
      {
        "address": "https://grpc.composable-t.indonode.net:47090",
        "provider": "Indonode"
      },
      {
        "address": "https://grpc-composable-testnet.sr20de.xyz",
        "provider": "Sr20de"
      }
    ]
  },
  "explorers": [
    {
      "url": "https://explorer.nodexcapital.com/composable-3",
      "tx_page": "https://explorer.nodexcapital.com/composable-3/tx/${txHash}"
    },
    {
      "kind": "🔥STAVR🔥",
      "url": "https://explorer.stavr.tech/Composable-Testnet4",
      "tx_page": "https://explorer.stavr.tech/Composable-Testnet4/tx/${txHash}"
    },
    {
      "url": "https://explorer.indonode.net/composable-testnet-3",
      "tx_page": "https://explorer.indonode.net/composable-testnet-3/tx/${txHash}"
    },
    {
      "url": "https://explorer.sr20de.xyz/Composible-3",
      "tx_page": "https://explorer.sr20de.xyz/Composible-3/tx/${txHash}"
    }
  ]
};
export default info;