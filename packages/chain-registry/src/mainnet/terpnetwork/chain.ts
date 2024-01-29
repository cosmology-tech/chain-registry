import { Chain } from '@chain-registry/types';
const info: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "terpnetwork",
  "status": "live",
  "network_type": "mainnet",
  "pretty_name": "Terp-Network",
  "chain_id": "morocco-1",
  "bech32_prefix": "terp",
  "daemon_name": "terp",
  "node_home": "$HOME/.terp",
  "codebase": {},
  "fees": {
    "fee_tokens": [
      {
        "denom": "uthiol",
        "fixed_min_gas_price": 0.05
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "uterp"
      }
    ]
  },
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/logo.png"
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc-terp.zenchainlabs.io/",
        "provider": "ZenChainLabs"
      },
      {
        "address": "https://rpc.terp.nodestake.top:443",
        "provider": "NodeStake"
      },
      {
        "address": "https://terp-mainnet-rpc.itrocket.net:443",
        "provider": "itrocket.net"
      },
      {
        "address": " https://terp.rpc.nodex.one:443",
        "provider": "nodex.one"
      }
    ],
    "rest": [
      {
        "address": "https://api-terp.zenchainlabs.io:443",
        "provider": "ZenChainLabs"
      },
      {
        "address": "https://rpc.terp.nodestake.top:443",
        "provider": "NodeStake"
      },
      {
        "address": "https://terp-mainnet-api.itrocket.net:443",
        "provider": "itrocket.net"
      },
      {
        "address": " https://terp.api.nodex.one:443",
        "provider": "nodex.one"
      }
    ],
    "grpc": [
      {
        "address": "https://grpc.terp.nodestake.top:443",
        "provider": "NodeStake"
      },
      {
        "address": "terp-mainnet-grpc.itrocket.net:13090",
        "provider": "itrocket.net"
      },
      {
        "address": " https://terp.grpc.nodex.one:443",
        "provider": "nodex.one"
      }
    ]
  },
  "explorers": [
    {
      "kind": "ping.pub",
      "url": "https://ping.pub/terp",
      "tx_page": "https://ping.pub/terp/tx/${txHash}",
      "account_page": "https://ping.pub/terp/account/{$accountAddress}"
    },
    {
      "kind": "ping.pub",
      "url": "https://explorer.nodestake.top",
      "tx_page": "https://explorer.nodestake.top/terp/tx/${txHash}",
      "account_page": "https://explorer.nodestake.top/terp/account/{$accountAddress}"
    },
    {
      "kind": "🔥STAVR🔥",
      "url": "https://explorer.stavr.tech/Terp-Mainnet",
      "tx_page": "https://explorer.stavr.tech/Terp-Mainnet/tx/${txHash}",
      "account_page": "https://explorer.stavr.tech/Terp-Mainnet/account/{$accountAddress}"
    },
    {
      "kind": "ZenChainLabs",
      "url": "https://terp.zenscan.io/",
      "tx_page": "https://terp.zenscan.io/transaction.php?hash=${txHash}",
      "account_page": "https://terp.zenscan.io/address.php?address=${accountAddress}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/logo.png"
    }
  ],
  "slip44": 118
};
export default info;