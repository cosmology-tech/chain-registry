import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const bostrom: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "bostrom",
  "status": "live",
  "network_type": "mainnet",
  "pretty_name": "bostrom",
  "chain_id": "bostrom",
  "bech32_prefix": "bostrom",
  "daemon_name": "cyber",
  "node_home": "$HOME/.cyber",
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "boot",
        "low_gas_price": 0,
        "average_gas_price": 0,
        "high_gas_price": 0.01
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "boot"
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/cybercongress/go-cyber",
    "recommended_version": "v0.3.0",
    "compatible_versions": [
      "v0.3.0"
    ],
    "binaries": {
      "linux/amd64": "https://github.com/cybercongress/go-cyber/releases/download/v0.2.0/cyber_v0.2.0_linux-amd64.tar.gz",
      "darwin/amd64": "https://github.com/cybercongress/go-cyber/releases/download/v0.2.0/cyber_v0.2.0_darwin-amd64.tar.gz"
    },
    "genesis": {
      "genesis_url": "https://cloudflare-ipfs.com/ipfs/QmYubyVNfghD4xCrTFj26zBwrF9s5GJhi1TmxvrwmJCipr"
    },
    "cosmwasm_enabled": true,
    "versions": [
      {
        "name": "v0.3.0",
        "recommended_version": "v0.3.0",
        "compatible_versions": [
          "v0.3.0"
        ],
        "cosmwasm_enabled": true,
        "binaries": {
          "linux/amd64": "https://github.com/cybercongress/go-cyber/releases/download/v0.2.0/cyber_v0.2.0_linux-amd64.tar.gz",
          "darwin/amd64": "https://github.com/cybercongress/go-cyber/releases/download/v0.2.0/cyber_v0.2.0_darwin-amd64.tar.gz"
        }
      }
    ]
  },
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg"
  },
  "peers": {
    "seeds": [
      {
        "id": "d0518ce9881a4b0c5872e5e9b7c4ea8d760dad3f",
        "address": "85.10.207.173:26656",
        "provider": "cybercongress"
      },
      {
        "id": "8542cd7e6bf9d260fef543bc49e59be5a3fa9074",
        "address": "seed.publicnode.com:26656",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      }
    ],
    "persistent_peers": []
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc.bostrom.cybernode.ai",
        "provider": "cybercongress"
      },
      {
        "address": "https://rpc-cyber-ia.cosmosia.notional.ventures/",
        "provider": "Notional"
      },
      {
        "address": "https://rpc.cyber.bronbro.io:443",
        "provider": "Bro_n_Bro"
      }
    ],
    "rest": [
      {
        "address": "https://lcd.bostrom.cybernode.ai",
        "provider": "cybercongress"
      },
      {
        "address": "https://api-cyber-ia.cosmosia.notional.ventures/",
        "provider": "Notional"
      },
      {
        "address": "https://lcd.cyber.bronbro.io:443",
        "provider": "Bro_n_Bro"
      }
    ],
    "grpc": [
      {
        "address": "grpc-cyber-ia.cosmosia.notional.ventures:443",
        "provider": "Notional"
      },
      {
        "address": "https://grpc.cyber.bronbro.io:443",
        "provider": "Bro_n_Bro"
      }
    ]
  },
  "explorers": [
    {
      "kind": "cyb",
      "url": "https://cyb.ai/",
      "tx_page": "https://cyb.ai/network/bostrom/tx/${txHash}"
    },
    {
      "kind": "ping.pub",
      "url": "https://ping.pub/bostrom",
      "tx_page": "https://ping.pub/bostrom/tx/${txHash}"
    },
    {
      "kind": "atomscan",
      "url": "https://atomscan.com/bostrom",
      "tx_page": "https://atomscan.com/bostrom/transactions/${txHash}",
      "account_page": "https://atomscan.com/bostrom/accounts/${accountAddress}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg"
    }
  ]
}

export const bostromAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "bostrom",
  "assets": [
    {
      "description": "The staking token of Bostrom",
      "denom_units": [
        {
          "denom": "boot",
          "exponent": 0,
          "aliases": [
            "boot"
          ]
        }
      ],
      "base": "boot",
      "name": "Bostrom",
      "display": "boot",
      "symbol": "BOOT",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg"
      },
      "coingecko_id": "bostrom",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg"
        }
      ]
    },
    {
      "description": "The liquid staking token of Bostrom",
      "denom_units": [
        {
          "denom": "hydrogen",
          "exponent": 0,
          "aliases": [
            "hydrogen"
          ]
        }
      ],
      "base": "hydrogen",
      "name": "Bostrom Hydrogen",
      "display": "hydrogen",
      "symbol": "HYDROGEN",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.svg"
        }
      ]
    },
    {
      "description": "The resource token of Bostrom",
      "denom_units": [
        {
          "denom": "milliampere",
          "exponent": 0,
          "aliases": [
            "milliampere"
          ]
        },
        {
          "denom": "ampere",
          "exponent": 3,
          "aliases": [
            "ampere"
          ]
        }
      ],
      "base": "milliampere",
      "name": "Bostrom Ampere",
      "display": "ampere",
      "symbol": "A",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.svg"
        }
      ]
    },
    {
      "description": "The resource token of Bostrom",
      "denom_units": [
        {
          "denom": "millivolt",
          "exponent": 0,
          "aliases": [
            "millivolt"
          ]
        },
        {
          "denom": "volt",
          "exponent": 3,
          "aliases": [
            "volt"
          ]
        }
      ],
      "base": "millivolt",
      "name": "Bostrom Volt",
      "display": "volt",
      "symbol": "V",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.svg"
        }
      ]
    },
    {
      "description": "The staking token of Cyber",
      "denom_units": [
        {
          "denom": "tocyb",
          "exponent": 0,
          "aliases": [
            "tocyb"
          ]
        }
      ],
      "base": "tocyb",
      "name": "Bostrom Tocyb",
      "display": "tocyb",
      "symbol": "TOCYB",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.svg"
        }
      ]
    }
  ]
}

