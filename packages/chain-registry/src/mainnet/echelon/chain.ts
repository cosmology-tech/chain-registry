import { Chain } from '@chain-registry/types';
const info: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "echelon",
  "status": "live",
  "network_type": "mainnet",
  "pretty_name": "Echelon",
  "chain_id": "echelon_3000-3",
  "bech32_prefix": "echelon",
  "node_home": "$HOME/.echelond",
  "slip44": 60,
  "fees": {
    "fee_tokens": [
      {
        "denom": "aechelon",
        "low_gas_price": 10000000000,
        "average_gas_price": 25000000000,
        "high_gas_price": 40000000000
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "aechelon"
      }
    ]
  },
  "codebase": {},
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/logo.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/echelon.svg"
  },
  "apis": {
    "rpc": [
      {
        "address": "https://ech01trpc.mindheartsoul.org",
        "provider": "Mind Heart Soul"
      },
      {
        "address": "https://rpc.echjoker.lol",
        "provider": "⚡ Echelon Joker ⚛ 🃏"
      }
    ],
    "rest": [
      {
        "address": "https://ech01api.mindheartsoul.org",
        "provider": "Mind Heart Soul"
      },
      {
        "address": "https://api.echjoker.lol",
        "provider": "⚡ Echelon Joker ⚛ 🃏"
      }
    ],
    "grpc": [],
    "evm-http-jsonrpc": [
      {
        "address": "https://ech01jrpc.mindheartsoul.org",
        "provider": "Mind Heart Soul"
      },
      {
        "address": "https://jrpc.echjoker.lol",
        "provider": "⚡ Echelon Joker ⚛ 🃏"
      }
    ]
  },
  "explorers": [
    {
      "kind": "echelon",
      "url": "https://app.ech.network/explorer",
      "tx_page": "https://app.ech.network/explorer/tx/${txHash}"
    },
    {
      "kind": "blockscout",
      "url": "https://scout.ech.network",
      "tx_page": "https://scout.ech.network/tx/${txHash}"
    },
    {
      "kind": "ping.pub",
      "url": "https://ping.pub/echelon",
      "tx_page": "https://ping.pub/echelon/tx/${txHash}"
    },
    {
      "kind": "atomscan",
      "url": "https://atomscan.com/echelon",
      "tx_page": "https://atomscan.com/echelon/transactions/${txHash}",
      "account_page": "https://atomscan.com/echelon/accounts/${accountAddress}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/logo.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/echelon.svg"
    }
  ]
};
export default info;