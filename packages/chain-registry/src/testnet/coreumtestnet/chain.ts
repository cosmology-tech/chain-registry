import { Chain } from '@chain-registry/types';
const info: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "coreumtestnet",
  "status": "live",
  "network_type": "testnet",
  "website": "https://www.coreum.com",
  "pretty_name": "Coreum",
  "chain_id": "coreum-testnet-1",
  "bech32_prefix": "testcore",
  "daemon_name": "cored",
  "node_home": "$HOME/.core/coreum-testnet-1",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 990,
  "fees": {
    "fee_tokens": [
      {
        "denom": "utestcore",
        "fixed_min_gas_price": 0.03125,
        "low_gas_price": 0.0625,
        "average_gas_price": 0.0625,
        "high_gas_price": 62.5
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "utestcore"
      }
    ],
    "lock_duration": {
      "time": "168h"
    }
  },
  "codebase": {
    "cosmos_sdk_version": "0.45",
    "cosmwasm_enabled": true,
    "cosmwasm_version": "0.30"
  },
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png",
      "theme": {
        "primary_color_hex": "#25d695"
      }
    }
  ],
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png"
  },
  "apis": {
    "rpc": [
      {
        "address": "https://full-node-pluto.testnet-1.coreum.dev:26657",
        "provider": "Coreum Foundation"
      },
      {
        "address": "https://full-node-eris.testnet-1.coreum.dev:26657",
        "provider": "Coreum Foundation"
      }
    ],
    "grpc": [
      {
        "address": "https://full-node-pluto.testnet-1.coreum.dev:9090",
        "provider": "Coreum Foundation"
      },
      {
        "address": "https://full-node-eris.testnet-1.coreum.dev:9090",
        "provider": "Coreum Foundation"
      }
    ],
    "rest": [
      {
        "address": "https://full-node.testnet-1.coreum.dev:1317",
        "provider": "Coreum"
      }
    ]
  },
  "explorers": [
    {
      "kind": "Coreum",
      "url": "https://explorer.testnet-1.coreum.dev/coreum",
      "tx_page": "https://explorer.testnet-1.coreum.dev/coreum/transactions/${txHash}",
      "account_page": "https://explorer.testnet-1.coreum.dev/coreum/account/${accountAddress}"
    }
  ],
  "keywords": [
    "dex",
    "staking",
    "wasm",
    "assets",
    "nft"
  ]
};
export default info;