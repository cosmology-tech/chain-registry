import { Chain } from '@chain-registry/types';
const info: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "seitestnet",
  "chain_id": "atlantic-1",
  "pretty_name": "Sei Atlantic",
  "status": "live",
  "network_type": "testnet",
  "website": "https://www.sei.io/",
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
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg"
  },
  "description": "Sei is the fastest Layer 1 blockchain, designed to scale with the industry.",
  "apis": {
    "rpc": [
      {
        "address": "https://sei-testnet-rpc.brocha.in",
        "provider": "Brochain"
      }
    ],
    "rest": [
      {
        "address": "https://sei-testnet-rest.brocha.in",
        "provider": "Brochain"
      }
    ]
  },
  "explorers": [
    {
      "kind": "explorers.guru",
      "url": "https://sei.explorers.guru",
      "tx_page": "https://sei.explorers.guru/transaction/${txHash}"
    },
    {
      "kind": "Brochain",
      "url": "https://testnet-explorer.brocha.in/sei",
      "tx_page": "https://testnet-explorer.brocha.in/sei/tx/${txHash}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg"
    }
  ]
};
export default info;