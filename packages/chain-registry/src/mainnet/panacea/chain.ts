import { Chain } from '@chain-registry/types';
const info: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "panacea",
  "status": "live",
  "network_type": "mainnet",
  "website": "https://medibloc.com/en/",
  "pretty_name": "Medibloc",
  "chain_id": "panacea-3",
  "bech32_prefix": "panacea",
  "daemon_name": "panacead",
  "node_home": "$HOME/.panacead",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 371,
  "fees": {
    "fee_tokens": [
      {
        "denom": "umed",
        "fixed_min_gas_price": 5,
        "low_gas_price": 5,
        "average_gas_price": 7,
        "high_gas_price": 9
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "umed"
      }
    ]
  },
  "codebase": {},
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg"
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc.gopanacea.org",
        "provider": "medibloc"
      },
      {
        "address": "https://panacea-rpc.staketab.org:443",
        "provider": "Staketab"
      }
    ],
    "rest": [
      {
        "address": "https://api.gopanacea.org",
        "provider": "medibloc"
      },
      {
        "address": "https://panacea-rest.staketab.org",
        "provider": "Staketab"
      }
    ],
    "grpc": [
      {
        "address": "services.staketab.com:9400",
        "provider": "Staketab"
      }
    ]
  },
  "explorers": [
    {
      "kind": "mintscan",
      "url": "https://www.mintscan.io/medibloc",
      "tx_page": "https://www.mintscan.io/medibloc/transactions/${txHash}",
      "account_page": "https://www.mintscan.io/medibloc/accounts/${accountAddress}"
    },
    {
      "kind": "bigdipper",
      "url": "https://explorer.gopanacea.org",
      "tx_page": "https://explorer.gopanacea.org/transactions/${txHash}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg"
    }
  ]
};
export default info;