import { Chain } from '@chain-registry/types';
const info: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "vidulum",
  "status": "live",
  "network_type": "mainnet",
  "website": "https://vidulum.app/",
  "pretty_name": "Vidulum",
  "chain_id": "vidulum-1",
  "bech32_prefix": "vdl",
  "daemon_name": "vidulumd",
  "node_home": "$HOME/.vidulum",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 370,
  "fees": {
    "fee_tokens": [
      {
        "denom": "uvdl",
        "fixed_min_gas_price": 0.0002,
        "low_gas_price": 0.002,
        "average_gas_price": 0.005,
        "high_gas_price": 0.007
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "uvdl"
      }
    ]
  },
  "codebase": {},
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg"
  },
  "apis": {
    "rpc": [
      {
        "address": "https://mainnet-rpc.vidulum.app/",
        "provider": "vidulum"
      },
      {
        "address": "https://rpc-vidulum-ia.cosmosia.notional.ventures/",
        "provider": "Notional"
      }
    ],
    "rest": [
      {
        "address": "https://mainnet-lcd.vidulum.app",
        "provider": "vidulum"
      },
      {
        "address": "https://api-vidulum-ia.cosmosia.notional.ventures/",
        "provider": "Notional"
      },
      {
        "address": "https://api-vdl.nodine.id/",
        "provider": "Nodine.ID"
      }
    ],
    "grpc": [
      {
        "address": "grpc-vidulum-ia.cosmosia.notional.ventures:443",
        "provider": "Notional"
      }
    ]
  },
  "explorers": [
    {
      "kind": "ping.pub",
      "url": "https://explorers.vidulum.app/vidulum",
      "tx_page": "https://explorers.vidulum.app/vidulum/tx/${txHash}"
    },
    {
      "kind": "ping.pub",
      "url": "https://ping.pub/vidulum",
      "tx_page": "https://ping.pub/vidulum/tx/${txHash}"
    },
    {
      "kind": "atomscan",
      "url": "https://atomscan.com/vidulum",
      "tx_page": "https://atomscan.com/vidulum/transactions/${txHash}",
      "account_page": "https://atomscan.com/vidulum/accounts/${accountAddress}"
    },
    {
      "kind": "Nodine Explorer",
      "url": "https://explorer.co.id/vidulum",
      "tx_page": "https://explorer.co.id/vidulum/tx/${txHash}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg"
    }
  ]
};
export default info;