import { Chain } from '@chain-registry/types';
const info: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "secretnetwork",
  "status": "live",
  "network_type": "mainnet",
  "website": "https://scrt.network/",
  "pretty_name": "Secret Network",
  "chain_id": "secret-4",
  "bech32_prefix": "secret",
  "daemon_name": "secretd",
  "node_home": "$HOME/.secretd",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 529,
  "alternative_slip44s": [
    118
  ],
  "fees": {
    "fee_tokens": [
      {
        "denom": "uscrt",
        "fixed_min_gas_price": 0.05,
        "low_gas_price": 0.05,
        "average_gas_price": 0.1,
        "high_gas_price": 0.25
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "uscrt"
      }
    ]
  },
  "codebase": {},
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
  },
  "description": "Secret Network is the first blockchain with customizable privacy. You get to choose what you share, with whom, and how. This protects users, and empowers developers to build a better Web3.",
  "apis": {
    "grpc-web": [
      {
        "address": "https://wgrpc.secret.express",
        "provider": "Secret Community API - Secret Express"
      }
    ],
    "rpc": [
      {
        "address": "https://rpc.secret.express",
        "provider": "Secret Community API - Secret Express"
      },
      {
        "address": "https://scrt.public-rpc.com",
        "provider": "ANKR"
      },
      {
        "address": "https://secretnetwork-rpc.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://1rpc.io/scrt-rpc",
        "provider": "1RPC - Automata Network"
      },
      {
        "address": "https://secretnetwork-rpc.highstakes.ch:26657/",
        "provider": "High Stakes 🇨🇭"
      }
    ],
    "rest": [
      {
        "address": "https://lcd.secret.express",
        "provider": "Secret Community API - Secret Express"
      },
      {
        "address": "https://secretnetwork-api.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "http://secretnetwork-mainnet-lcd.autostake.com:1317",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "https://1rpc.io/scrt-lcd",
        "provider": "1RPC - Automata Network"
      },
      {
        "address": "https://secretnetwork-api.highstakes.ch:1317/",
        "provider": "High Stakes 🇨🇭"
      }
    ],
    "grpc": [
      {
        "address": "secretnetwork-grpc.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "secretnetwork-mainnet-grpc.autostake.com:9090",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "https://grpc.secret.express",
        "provider": "Secret Community API - Secret Express"
      }
    ]
  },
  "explorers": [
    {
      "kind": "EZ Staking",
      "url": "https://app.ezstaking.io/secretnetwork",
      "tx_page": "https://app.ezstaking.io/secretnetwork/txs/${txHash}",
      "account_page": "https://app.ezstaking.io/secretnetwork/account/${accountAddress}"
    },
    {
      "kind": "secret nodes",
      "url": "https://secretnodes.com/secret/chains/secret-4",
      "tx_page": "https://secretnodes.com/secret/chains/secret-4/transactions/${txHash}"
    },
    {
      "kind": "ping.pub",
      "url": "https://ping.pub/secret",
      "tx_page": "https://ping.pub/secret/tx/${txHash}"
    },
    {
      "kind": "mintscan",
      "url": "https://www.mintscan.io/secret",
      "tx_page": "https://www.mintscan.io/secret/transactions/${txHash}",
      "account_page": "https://www.mintscan.io/secret/accounts/${accountAddress}"
    },
    {
      "kind": "atomscan",
      "url": "https://atomscan.com/secret-network",
      "tx_page": "https://atomscan.com/secret-network/transactions/${txHash}",
      "account_page": "https://atomscan.com/secret-network/accounts/${accountAddress}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
    }
  ]
};
export default info;