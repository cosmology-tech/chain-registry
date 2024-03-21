import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const imversedtestnet: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "imversedtestnet",
  "status": "live",
  "network_type": "testnet",
  "pretty_name": "Imversed Testnet",
  "chain_id": "imversed-test-1",
  "bech32_prefix": "imv",
  "daemon_name": "imversed",
  "node_home": "$HOME/.imversed",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "nimv",
        "fixed_min_gas_price": 0.001
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/imversed/imversed",
    "recommended_version": "v2.4.0",
    "compatible_versions": [
      "v2.4.0"
    ],
    "binaries": {
      "linux/amd64": "https://s.imversed.com/imversed_linux_amd64.tar.gz",
      "darwin/arm64": "https://s.imversed.com/imversed_darwin_arm64.tar.gz",
      "darwin/amd64": "https://s.imversed.com/imversed_darwin_amd64.tar.gz",
      "windows/amd64": "https://s.imversed.com/imversed_windows_amd64.tar.gz"
    },
    "genesis": {
      "genesis_url": "https://s.imversed.com/test-net/genesis.json"
    },
    "versions": [
      {
        "name": "v2.4.0",
        "recommended_version": "v2.4.0",
        "compatible_versions": [
          "v2.4.0"
        ],
        "binaries": {
          "linux/amd64": "https://s.imversed.com/imversed_linux_amd64.tar.gz",
          "darwin/arm64": "https://s.imversed.com/imversed_darwin_arm64.tar.gz",
          "darwin/amd64": "https://s.imversed.com/imversed_darwin_amd64.tar.gz",
          "windows/amd64": "https://s.imversed.com/imversed_windows_amd64.tar.gz"
        }
      }
    ]
  },
  "peers": {
    "persistent_peers": [
      {
        "id": "9b1ea21b9a1d098169c19e5d6bfa1397bba5c655",
        "address": "34.133.39.91:26656",
        "provider": "imversed"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://tx-endpoint-test.imversed.com/",
        "provider": "imversed"
      }
    ],
    "rest": [
      {
        "address": "https://query-endpoint-test.imversed.com/",
        "provider": "imversed"
      }
    ],
    "grpc": [
      {
        "address": "http://qs.imversed.com:9090",
        "provider": "imversed"
      }
    ]
  },
  "explorers": [
    {
      "kind": "Big Dipper",
      "url": "https://tex-s.imversed.com",
      "tx_page": "https://tex-s.imversed.com/transactions/${txHash}"
    }
  ]
}

export const imversedtestnetAssetList: AssetList = {
  "$schema": "../../assetlist.schema.json",
  "chain_name": "imversedtestnet",
  "assets": [
    {
      "description": "The native staking and governance token of the Imversed testnet.",
      "denom_units": [
        {
          "denom": "nimv",
          "exponent": 0,
          "aliases": []
        },
        {
          "denom": "imv",
          "exponent": 6,
          "aliases": []
        }
      ],
      "base": "nimv",
      "name": "Imv",
      "display": "imv",
      "symbol": "IMV",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/imversedtestnet/images/imversed.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/imversedtestnet/images/imversed.svg"
        }
      ]
    },
    {
      "description": "The native staking and governance token of the Imversed testnet.",
      "denom_units": [
        {
          "denom": "ibc/C6438A7D613196373D939891C99CA7EEF4F78F4A78DC8590E51E62F8ED16E72B",
          "exponent": 0,
          "aliases": [
            "usaage"
          ]
        },
        {
          "denom": "imv",
          "exponent": 6
        }
      ],
      "base": "ibc/C6438A7D613196373D939891C99CA7EEF4F78F4A78DC8590E51E62F8ED16E72B",
      "name": "Imv",
      "display": "imv",
      "symbol": "IMV",
      "ibc": {
        "source_channel": "channel-1",
        "dst_channel": "channel-221",
        "source_denom": "nimv"
      },
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/imversedtestnet/images/imversed.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/imversedtestnet/images/imversed.svg"
        }
      ]
    }
  ]
}

