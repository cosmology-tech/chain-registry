import { Chain } from '@chain-registry/types';
const info: Chain = {
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
  "codebase": {},
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
};
export default info;