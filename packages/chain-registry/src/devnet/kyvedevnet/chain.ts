import { Chain } from '@chain-registry/types';
const info: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "kyvedevnet",
  "chain_id": "korellia",
  "pretty_name": "KYVE Korellia",
  "status": "live",
  "network_type": "devnet",
  "bech32_prefix": "kyve",
  "daemon_name": "chaind",
  "node_home": "$HOME/.kyve",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "tkyve",
        "fixed_min_gas_price": 0
      }
    ]
  },
  "codebase": {},
  "apis": {
    "rpc": [
      {
        "address": "https://rpc.korellia.kyve.network",
        "provider": "kyve"
      }
    ],
    "rest": [
      {
        "address": "https://api.korellia.kyve.network",
        "provider": "kyve"
      }
    ]
  },
  "explorers": [
    {
      "kind": "explorers.guru",
      "url": "https://kyve.explorers.guru/",
      "tx_page": "https://kyve.explorers.guru/transaction/${txHash}"
    }
  ]
};
export default info;