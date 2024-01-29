import { Chain } from '@chain-registry/types';
const info: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "quasartestnet",
  "status": "live",
  "network_type": "testnet",
  "pretty_name": "Quasar Testnet",
  "chain_id": "qsr-questnet-04",
  "bech32_prefix": "quasar",
  "daemon_name": "quasarnoded",
  "node_home": "$HOME/.quasarnoded",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "staking": {
    "staking_tokens": [
      {
        "denom": "uqsr"
      }
    ]
  },
  "codebase": {
    "cosmos_sdk_version": "0.46",
    "cosmwasm_enabled": true,
    "cosmwasm_version": "0.27"
  },
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.svg"
  },
  "apis": {
    "rpc": [
      {
        "address": "https://quasar-testnet-rpc.polkachu.com/",
        "provider": "Polkachu"
      },
      {
        "address": "https://questnet.quasar-finance.rhinostake.com/",
        "provider": "Rhino Stake"
      },
      {
        "address": "https://quasar-testnet-rpc.swiss-staking.ch",
        "provider": "Swiss Staking"
      }
    ],
    "rest": [
      {
        "address": "https://quasar-testnet-api.polkachu.com/",
        "provider": "Polkachu"
      },
      {
        "address": "https://questnet.quasar-finance.rhinostake.com/",
        "provider": "Rhino Stake"
      },
      {
        "address": "https://quasar-testnet-api.swiss-staking.ch/",
        "provider": "Swiss Staking"
      }
    ],
    "grpc": [
      {
        "address": "quasar-testnet-grpc.polkachu.com:18290",
        "provider": "Polkachu"
      },
      {
        "address": "quasar-testnet-grpc.swiss-staking.ch:10090",
        "provider": "Swiss Staking"
      }
    ]
  },
  "keywords": [
    "testnet"
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.svg"
    }
  ]
};
export default info;