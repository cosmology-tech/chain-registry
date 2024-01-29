import { Chain } from '@chain-registry/types';
const info: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "desmostestnet",
  "status": "live",
  "network_type": "testnet",
  "pretty_name": "Desmos Testnet",
  "chain_id": "morpheus-apollo-3",
  "bech32_prefix": "desmos",
  "daemon_name": "desmos",
  "node_home": "$HOME/.desmos",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 852,
  "fees": {
    "fee_tokens": [
      {
        "denom": "udaric",
        "fixed_min_gas_price": 0.001,
        "low_gas_price": 0.01,
        "average_gas_price": 0.03,
        "high_gas_price": 0.05
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "udaric"
      }
    ]
  },
  "codebase": {},
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg"
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc.morpheus.desmos.network",
        "provider": "desmos"
      }
    ],
    "rest": [
      {
        "address": "https://lcd.morpheus.desmos.network",
        "provider": "desmos"
      }
    ],
    "grpc": [
      {
        "address": "https://grpc.morpheus.desmos.network:443",
        "provider": "desmos"
      }
    ]
  },
  "explorers": [
    {
      "kind": "bigdipper",
      "url": "https://testnet.bigdipper.live/desmos",
      "tx_page": "https://testnet.live/desmos/transactions/${txHash}",
      "account_page": "https://testnet.bigdipper.live/desmos/accounts/${accountAddress}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg"
    }
  ]
};
export default info;