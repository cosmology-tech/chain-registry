import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const highbury: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "highbury",
  "status": "live",
  "network_type": "mainnet",
  "website": "https://www.fury.black/",
  "pretty_name": "Highbury",
  "chain_id": "highbury_710-1",
  "bech32_prefix": "fury",
  "daemon_name": "fury",
  "node_home": "$HOME/.fury",
  "slip44": 459,
  "alternative_slip44s": [
    710
  ],
  "fees": {
    "fee_tokens": [
      {
        "denom": "ufury",
        "low_gas_price": 0.05,
        "average_gas_price": 0.1,
        "high_gas_price": 0.25
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "ufury"
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/Four4Two/fury/",
    "recommended_version": "v0.4.1",
    "compatible_versions": [
      "v0.4.1"
    ],
    "genesis": {
      "genesis_url": "https://raw.githubusercontent.com/Four4Two/fury/mainnet/networks/genesis.json"
    },
    "versions": [
      {
        "name": "v0.4.1",
        "recommended_version": "v0.4.1",
        "compatible_versions": [
          "v0.4.1"
        ]
      }
    ]
  },
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/fury.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/fury.svg"
  },
  "peers": {
    "seeds": [
      {
        "id": "377132f66d6fe7eed732842b276d1d7d998e685e",
        "address": "35.200.155.236:26656",
        "provider": "Fanfury"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://gridiron.furya.io",
        "provider": "fanfury"
      }
    ],
    "rest": [
      {
        "address": "https://api-mainnet.furya.io/",
        "provider": "fanfury"
      }
    ],
    "grpc": [
      {
        "address": "api-mainnet.furya.io:9090",
        "provider": "fanfury"
      }
    ],
    "evm-http-jsonrpc": [
      {
        "address": "https://rest.furya.io/",
        "provider": "fanfury"
      }
    ]
  },
  "explorers": [
    {
      "kind": "pingpub",
      "url": "https://explorer.furya.wtf/",
      "tx_page": "https://www.explorer.furya.wtf//txs/${txHash}",
      "account_page": "https://explorer.furya.wtf//account/${accountAddress}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/fury.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/fury.svg"
    }
  ]
}

export const highburyAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "highbury",
  "assets": [
    {
      "description": "The native staking and governance token of the Blackfury ecosystem",
      "denom_units": [
        {
          "denom": "ufury",
          "exponent": 0
        },
        {
          "denom": "fury",
          "exponent": 6
        }
      ],
      "base": "ufury",
      "name": "Fury",
      "display": "fury",
      "symbol": "FURY",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/fury.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/fury.svg"
      },
      "coingecko_id": "fanfury",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/fury.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/fury.svg"
        }
      ]
    },
    {
      "description": "Governance token of Jinx Wallet and Fury Lend Protocol",
      "denom_units": [
        {
          "denom": "jinx",
          "exponent": 0
        },
        {
          "denom": "JINX",
          "exponent": 6
        }
      ],
      "base": "jinx",
      "name": "Jinx",
      "display": "JINX",
      "symbol": "JINX",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/jinx.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/jinx.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/jinx.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/jinx.svg"
        }
      ]
    },
    {
      "description": "Governance token of Fury Swap Protocol",
      "denom_units": [
        {
          "denom": "jinxy",
          "exponent": 0
        },
        {
          "denom": "JINXY",
          "exponent": 6
        }
      ],
      "base": "jinxy",
      "name": "Jinxy",
      "display": "JINXy",
      "symbol": "JINXy",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/jinxy.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/jinxy.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/jinxy.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/jinxy.svg"
        }
      ]
    }
  ]
}

