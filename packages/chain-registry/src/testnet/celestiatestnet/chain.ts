import { Chain } from '@chain-registry/types';
const info: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "celestiatestnet",
  "chain_id": "blockspacerace-0",
  "pretty_name": "Blockspace Race Testnet",
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
        "fixed_min_gas_price": 0
      }
    ]
  },
  "codebase": {},
  "apis": {
    "rpc": [
      {
        "address": "https://rpc-blockspacerace.pops.one/",
        "provider": "P-OPs"
      }
    ],
    "rest": [
      {
        "address": "https://celestia-blockspacerace-rest.brocha.in",
        "provider": "Brochain"
      }
    ]
  },
  "explorers": [
    {
      "kind": "Mintscan",
      "url": "https://testnet.mintscan.io/celestia-incentivized-testnet",
      "tx_page": "https://testnet.mintscan.io/celestia-incentivized-testnet/txs/${txHash}"
    }
  ]
};
export default info;