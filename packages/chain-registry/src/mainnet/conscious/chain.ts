import { Chain } from '@chain-registry/types';
const info: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "conscious",
  "status": "live",
  "network_type": "mainnet",
  "website": "https://www.consciousdao.com/",
  "pretty_name": "ConsciousDAO",
  "chain_id": "cvn_2032-1",
  "bech32_prefix": "cvn",
  "node_home": "$HOME/.cvnd",
  "daemon_name": "cvnd",
  "slip44": 60,
  "fees": {
    "fee_tokens": [
      {
        "denom": "acvnt",
        "fixed_min_gas_price": 100000000,
        "low_gas_price": 100000000,
        "average_gas_price": 200000000,
        "high_gas_price": 300000000
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "acvnt"
      }
    ]
  },
  "codebase": {},
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.svg"
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc.cvn.io/",
        "provider": "cvn.io"
      }
    ],
    "rest": [
      {
        "address": "https://api.consciousdao.com",
        "provider": "consciousdao.com"
      }
    ],
    "grpc": [
      {
        "address": "https://rest.consciousdao.com",
        "provider": "consciousdao.com"
      }
    ],
    "evm-http-jsonrpc": [
      {
        "address": "https://node.cvn.io/",
        "provider": "cvn"
      },
      {
        "address": "https://node.consciousdao.io/",
        "provider": "consciousdao"
      }
    ]
  },
  "explorers": [
    {
      "kind": "blockscout",
      "url": "https://explore.consciousdao.com/",
      "tx_page": "https://explore.consciousdao.com/tx/${txHash}"
    }
  ]
};
export default info;