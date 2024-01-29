import { Chain } from '@chain-registry/types';
const info: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "xiontestnet",
  "status": "live",
  "network_type": "testnet",
  "pretty_name": "Xion Testnet",
  "chain_id": "xion-testnet-1",
  "bech32_prefix": "xion",
  "daemon_name": "xiond",
  "node_home": "$HOME/.xiond",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "uxion",
        "fixed_min_gas_price": 0,
        "low_gas_price": 0,
        "average_gas_price": 0.025,
        "high_gas_price": 0.04
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "uxion"
      }
    ]
  },
  "codebase": {
    "cosmos_sdk_version": "0.47.3",
    "cosmwasm_enabled": true,
    "cosmwasm_version": "0.40.1"
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc.xion-testnet-1.burnt.com",
        "provider": "burnt-labs"
      }
    ],
    "rest": [
      {
        "address": "https://api.xion-testnet-1.burnt.com",
        "provider": "burnt-labs"
      }
    ],
    "grpc": [
      {
        "address": "https://grpc.xion-testnet-1.burnt.com:443",
        "provider": "burnt-labs"
      }
    ]
  },
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt.png"
  },
  "keywords": [
    "xion",
    "burnt",
    "testnet"
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt.png"
    }
  ]
};
export default info;