import { Chain } from '@chain-registry/types';
const info: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "imversed",
  "status": "live",
  "network_type": "mainnet",
  "website": "https://imversed.network/",
  "pretty_name": "Imversed",
  "chain_id": "imversed_5555555-1",
  "bech32_prefix": "imv",
  "daemon_name": "imversed",
  "node_home": "$HOME/.imversed",
  "key_algos": [
    "ethsecp256k1"
  ],
  "extra_codecs": [
    "ethermint"
  ],
  "slip44": 60,
  "fees": {
    "fee_tokens": [
      {
        "denom": "aimv",
        "fixed_min_gas_price": 250000000,
        "low_gas_price": 20000000000,
        "average_gas_price": 25000000000,
        "high_gas_price": 40000000000
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "aimv"
      }
    ]
  },
  "codebase": {},
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.svg"
  },
  "apis": {
    "rpc": [],
    "rest": [],
    "grpc": [
      {
        "address": "grpc.imversed.network:443",
        "provider": "imversed"
      }
    ],
    "evm-http-jsonrpc": [
      {
        "address": "https://jsonrpc.imversed.network:443",
        "provider": "imversed"
      }
    ]
  },
  "explorers": [
    {
      "kind": "blockscout",
      "url": "https://txe.imversed.network/",
      "tx_page": "https://txe.imversed.network/tx/${txHash}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.svg"
    }
  ]
};
export default info;