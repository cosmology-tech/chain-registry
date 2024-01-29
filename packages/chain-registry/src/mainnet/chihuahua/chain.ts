import { Chain } from '@chain-registry/types';
const info: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "chihuahua",
  "status": "live",
  "network_type": "mainnet",
  "website": "https://chihuahua.wtf/",
  "pretty_name": "Chihuahua",
  "chain_id": "chihuahua-1",
  "bech32_prefix": "chihuahua",
  "daemon_name": "chihuahuad",
  "node_home": "$HOME/.chihuahuad",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "uhuahua",
        "fixed_min_gas_price": 0,
        "low_gas_price": 500,
        "average_gas_price": 1250,
        "high_gas_price": 2000
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "uhuahua"
      }
    ]
  },
  "codebase": {
    "cosmos_sdk_version": "v0.47.5",
    "cosmwasm_enabled": true,
    "cosmwasm_version": "v0.41.0"
  },
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg"
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc.chihuahua.wtf",
        "provider": "Chihuahua"
      },
      {
        "address": "https://rpc-chihuahua.ecostake.com",
        "provider": "ecostake"
      },
      {
        "address": "https://chihuahua-rpc.polkachu.com",
        "provider": "Polkachu"
      },
      {
        "address": "https://rpc-chihuahua-ia.cosmosia.notional.ventures",
        "provider": "Notional"
      },
      {
        "address": "https://chihuahua-rpc.lavenderfive.com",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://rpc.huahua.bh.rocks",
        "provider": "BlockHunters 🎯"
      },
      {
        "address": "https://chihuahua-rpc.kleomedes.network",
        "provider": "Kleomedes"
      },
      {
        "address": "https://rpc-chihuahua.pupmos.network",
        "provider": "PUPMØS"
      },
      {
        "address": "https://chihuahua-mainnet-rpc.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "https://chihuahua-rpc.publicnode.com:443",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      }
    ],
    "rest": [
      {
        "address": "https://api.chihuahua.wtf",
        "provider": "Chihuahua"
      },
      {
        "address": "https://rest-chihuahua.ecostake.com",
        "provider": "ecostake"
      },
      {
        "address": "https://api-chihuahua-ia.cosmosia.notional.ventures",
        "provider": "Notional"
      },
      {
        "address": "https://chihuahua-api.polkachu.com",
        "provider": "Polkachu"
      },
      {
        "address": "https://chihuahua-api.lavenderfive.com",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://chihuahua-api.kleomedes.network",
        "provider": "Kleomedes"
      },
      {
        "address": "https://api-chihuahua.pupmos.network",
        "provider": "PUPMØS"
      },
      {
        "address": "https://chihuahua-mainnet-lcd.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "https://chihuahua-rest.publicnode.com",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      }
    ],
    "grpc": [
      {
        "address": "grpc-chihuahua-ia.cosmosia.notional.ventures:443",
        "provider": "Notional"
      },
      {
        "address": "chihuahua-grpc.polkachu.com:12990",
        "provider": "Polkachu"
      },
      {
        "address": "chihuahua-grpc.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "grpc-chihuahua.cosmos-spaces.cloud:2290",
        "provider": "Cosmos Spaces"
      },
      {
        "address": "chihuahua-mainnet-grpc.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "chihuahua-grpc.publicnode.com:443",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      }
    ]
  },
  "explorers": [
    {
      "kind": "ping.pub",
      "url": "https://ping.pub/chihuahua",
      "tx_page": "https://ping.pub/chihuahua/tx/${txHash}"
    },
    {
      "kind": "mintscan",
      "url": "https://mintscan.io/chihuahua",
      "tx_page": "https://mintscan.io/chihuahua/transactions/${txHash}",
      "account_page": "https://www.mintscan.io/chihuahua/accounts/${accountAddress}"
    },
    {
      "kind": "atomscan",
      "url": "https://atomscan.com/chihuahua",
      "tx_page": "https://atomscan.com/chihuahua/transactions/${txHash}",
      "account_page": "https://atomscan.com/chihuahua/accounts/${accountAddress}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg"
    }
  ]
};
export default info;