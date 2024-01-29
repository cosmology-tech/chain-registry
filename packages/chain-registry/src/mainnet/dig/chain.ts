import { Chain } from '@chain-registry/types';
const info: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "dig",
  "status": "live",
  "network_type": "mainnet",
  "website": "https://digchain.org/",
  "pretty_name": "Dig Chain",
  "chain_id": "dig-1",
  "bech32_prefix": "dig",
  "daemon_name": "digd",
  "node_home": "$HOME/.dig",
  "key_algos": [
    "secp256k1",
    "ethsecp256k1"
  ],
  "extra_codecs": [
    "ethermint"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "udig",
        "low_gas_price": 0.025,
        "average_gas_price": 0.03,
        "high_gas_price": 0.035
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "udig"
      }
    ]
  },
  "codebase": {},
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png"
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc-1-dig.notional.ventures"
      },
      {
        "address": "https://rpc-dig-ia.cosmosia.notional.ventures/",
        "provider": "Notional"
      }
    ],
    "rest": [
      {
        "address": "https://api-1-dig.notional.ventures"
      },
      {
        "address": "https://api-dig-ia.cosmosia.notional.ventures/",
        "provider": "Notional"
      }
    ],
    "grpc": [
      {
        "address": "grpc-dig-ia.cosmosia.notional.ventures:443",
        "provider": "Notional"
      }
    ]
  },
  "explorers": [
    {
      "kind": "ping.pub",
      "url": "https://ping.pub/dig",
      "tx_page": "https://ping.pub/dig/tx/${txHash}"
    },
    {
      "kind": "atomscan",
      "url": "https://atomscan.com/dig",
      "tx_page": "https://atomscan.com/dig/transactions/${txHash}"
    },
    {
      "kind": "TC Network",
      "url": "https://explorer.tcnetwork.io/dig",
      "tx_page": "https://explorer.tcnetwork.io/dig/transaction/${txHash}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png"
    }
  ]
};
export default info;