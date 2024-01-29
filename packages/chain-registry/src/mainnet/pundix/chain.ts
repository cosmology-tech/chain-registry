import { Chain } from '@chain-registry/types';
const info: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "pundix",
  "chain_id": "PUNDIX",
  "website": "https://pundix.com",
  "pretty_name": "Pundi X Chain",
  "status": "live",
  "network_type": "mainnet",
  "bech32_prefix": "px",
  "daemon_name": "pundixd",
  "node_home": "$HOME/.pundix",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "ibc/55367B7B6572631B78A93C66EF9FDFCE87CDE372CC4ED7848DA78C1EB1DCDD78",
        "fixed_min_gas_price": 2000000000000,
        "low_gas_price": 2000000000000,
        "average_gas_price": 2500000000000,
        "high_gas_price": 3000000000000
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "ibc/55367B7B6572631B78A93C66EF9FDFCE87CDE372CC4ED7848DA78C1EB1DCDD78"
      }
    ]
  },
  "codebase": {
    "cosmos_sdk_version": "0.45.11"
  },
  "apis": {
    "rpc": [
      {
        "address": "https://px-json.pundix.com",
        "provider": "Pundi X"
      }
    ],
    "rest": [
      {
        "address": "https://px-rest.pundix.com",
        "provider": "Pundi X"
      }
    ],
    "grpc": [
      {
        "address": "https://px-grpc.pundix.com",
        "provider": "Pundi X"
      }
    ]
  },
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-chain-logo.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-chain-logo.svg"
    }
  ],
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-chain-logo.png"
  },
  "explorers": [
    {
      "kind": "starscan",
      "url": "https://starscan.io",
      "tx_page": "https://starscan.io/pundix/tx/${txHash}",
      "account_page": "https://starscan.io/pundix/address/${accountAddress}"
    }
  ]
};
export default info;