import { Chain } from '@chain-registry/types';
const info: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "coss",
  "chain_id": "coss-1",
  "website": "https://coss.ink/",
  "pretty_name": "COSS",
  "status": "live",
  "network_type": "mainnet",
  "bech32_prefix": "coss",
  "daemon_name": "cossd",
  "node_home": "$HOME/.coss",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "ucoss",
        "fixed_min_gas_price": 0.025,
        "low_gas_price": 0.025,
        "average_gas_price": 0.03,
        "high_gas_price": 0.04
      },
      {
        "denom": "ucgas",
        "fixed_min_gas_price": 0.025,
        "low_gas_price": 0.025,
        "average_gas_price": 0.03,
        "high_gas_price": 0.04
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "ucgas"
      }
    ]
  },
  "codebase": {},
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/coss.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/coss.svg"
  },
  "apis": {
    "rpc": [
      {
        "address": "https://coss-rpc.coss.ink",
        "provider": "StellarGuardian"
      },
      {
        "address": "https://coss-rpc.cias.network",
        "provider": "CelestialPhoenix"
      }
    ],
    "rest": [
      {
        "address": "https://coss-rest.coss.ink",
        "provider": "StellarGuardian"
      },
      {
        "address": "https://coss-rest.cias.network",
        "provider": "CelestialPhoenix"
      }
    ]
  },
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/coss.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/coss.svg"
    }
  ]
};
export default info;