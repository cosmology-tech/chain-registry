import { Chain } from '@chain-registry/types';
const info: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "celestiatestnet3",
  "chain_id": "mocha-4",
  "pretty_name": "Mocha Testnet",
  "status": "live",
  "network_type": "testnet",
  "bech32_prefix": "celestia",
  "daemon_name": "celestia-appd",
  "node_home": "$HOME/.celestia-app",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "utia",
        "fixed_min_gas_price": 0,
        "low_gas_price": 0.01,
        "average_gas_price": 0.02,
        "high_gas_price": 0.1
      }
    ]
  },
  "codebase": {},
  "apis": {
    "rpc": [
      {
        "address": "https://rpc-mocha.pops.one",
        "provider": "P-OPs"
      }
    ],
    "rest": [
      {
        "address": "https://api-mocha.pops.one",
        "provider": "P-OPs"
      }
    ]
  },
  "explorers": [
    {
      "kind": "Mintscan",
      "url": "https://testnet.mintscan.io/celestia-testnet",
      "tx_page": "https://testnet.mintscan.io/celestia-testnet/txs/${txHash}"
    }
  ]
};
export default info;