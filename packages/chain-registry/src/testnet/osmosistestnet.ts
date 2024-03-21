import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const osmosistestnet: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "osmosistestnet",
  "status": "live",
  "network_type": "testnet",
  "pretty_name": "Osmosis Testnet",
  "chain_id": "osmo-test-5",
  "bech32_prefix": "osmo",
  "daemon_name": "osmosisd",
  "node_home": "$HOME/.osmosisd",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "uosmo",
        "fixed_min_gas_price": 0,
        "low_gas_price": 0.0025,
        "average_gas_price": 0.025,
        "high_gas_price": 0.04
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "uosmo"
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/osmosis-labs/osmosis",
    "recommended_version": "v15.0.0",
    "compatible_versions": [
      "v15.0.0"
    ],
    "cosmos_sdk_version": "0.45",
    "consensus": {
      "type": "tendermint",
      "version": "0.34"
    },
    "cosmwasm_version": "0.30",
    "cosmwasm_enabled": true,
    "genesis": {
      "genesis_url": "https://genesis.osmotest5.osmosis.zone/genesis.json"
    },
    "versions": [
      {
        "name": "v14.0.0-rc1",
        "recommended_version": "v14.0.0-rc1",
        "compatible_versions": [
          "v14.0.0-rc1"
        ],
        "cosmos_sdk_version": "0.45",
        "consensus": {
          "type": "tendermint",
          "version": "0.34"
        },
        "cosmwasm_version": "0.29",
        "cosmwasm_enabled": true
      },
      {
        "name": "v15.0.0-rc3",
        "recommended_version": "v15.0.0-rc3",
        "compatible_versions": [
          "v15.0.0-rc3"
        ],
        "cosmos_sdk_version": "0.45",
        "consensus": {
          "type": "tendermint",
          "version": "0.34"
        },
        "cosmwasm_version": "0.29",
        "cosmwasm_enabled": true
      },
      {
        "name": "v15.0.0",
        "recommended_version": "v15.0.0",
        "compatible_versions": [
          "v15.0.0-rc3"
        ],
        "cosmos_sdk_version": "0.45",
        "consensus": {
          "type": "tendermint",
          "version": "0.34"
        },
        "cosmwasm_version": "0.30",
        "cosmwasm_enabled": true
      }
    ]
  },
  "peers": {
    "seeds": [
      {
        "id": "bb197876fd952d245ef6377e3651c157e3d7ed81",
        "address": "157.245.26.231:26656",
        "provider": ""
      },
      {
        "id": "7c2b9e76be5c2142c76b429d9c29e902599ceb44",
        "address": "157.245.21.183:26656",
        "provider": ""
      }
    ],
    "persistent_peers": [
      {
        "id": "51084fccec1c309a415e89d39e6f0881c49493ed",
        "address": "95.217.144.107:12556",
        "provider": ""
      },
      {
        "id": "a5c34bdd777dd418ff7152a8646fd2f31f53f8a5",
        "address": "46.232.248.117:2000",
        "provider": ""
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc.osmotest5.osmosis.zone/",
        "provider": "Osmosis"
      },
      {
        "address": "https://rpc.testnet.osl.zone/",
        "provider": "OSL"
      }
    ],
    "rest": [
      {
        "address": "https://lcd.osmotest5.osmosis.zone/",
        "provider": "Osmosis"
      }
    ],
    "grpc": [
      {
        "address": "https://grpc.osmotest5.osmosis.zone/",
        "provider": "Osmosis"
      }
    ]
  },
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png"
  },
  "explorers": [
    {
      "kind": "mintscan",
      "url": "https://testnet.mintscan.io/osmosis-testnet",
      "tx_page": "https://testnet.mintscan.io/osmosis-testnet/txs/${txHash}",
      "account_page": "https://testnet.mintscan.io/osmosis-testnet/account/${accountAddress}"
    },
    {
      "kind": "ping.pub",
      "url": "https://explorer.osmotest5.osmosis.zone",
      "tx_page": "https://explorer.osmotest5.osmosis.zone/osmo-test-5/tx/${txHash}",
      "account_page": "https://explorer.osmotest5.osmosis.zone/osmo-test-5/account/${accountAddress}"
    }
  ],
  "keywords": [
    "dex",
    "testnet"
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png"
    }
  ]
}

export const osmosistestnetAssetList: AssetList = {
  "$schema": "../../assetlist.schema.json",
  "chain_name": "osmosistestnet",
  "assets": [
    {
      "description": "The native token of Osmosis",
      "denom_units": [
        {
          "denom": "uosmo",
          "exponent": 0,
          "aliases": []
        },
        {
          "denom": "osmo",
          "exponent": 6,
          "aliases": []
        }
      ],
      "base": "uosmo",
      "name": "Osmosis",
      "display": "osmo",
      "symbol": "OSMO",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
      },
      "coingecko_id": "osmosis",
      "keywords": [
        "dex",
        "staking"
      ],
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "uion",
          "exponent": 0
        },
        {
          "denom": "ion",
          "exponent": 6
        }
      ],
      "base": "uion",
      "name": "Ion",
      "display": "ion",
      "symbol": "ION",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
      },
      "coingecko_id": "ion",
      "keywords": [
        "memecoin"
      ],
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "factory/osmo1zlkzu72774ynac53necz46u4ycqtp36wedrar0/willyz",
          "exponent": 0
        },
        {
          "denom": "willyz",
          "exponent": 6
        }
      ],
      "base": "factory/osmo1zlkzu72774ynac53necz46u4ycqtp36wedrar0/willyz",
      "name": "Willyz",
      "display": "willyz",
      "symbol": "WILLYZ",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.svg"
      },
      "keywords": [
        "memecoin"
      ],
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.svg"
        }
      ]
    },
    {
      "description": "The native EVM, governance and staking token of the Titan Chain",
      "denom_units": [
        {
          "denom": "ibc/28EEF762052DB8C3D27A7BF625E9F86A1B3B689CC8D80C818CEDF2EB6CBA02A6",
          "exponent": 0,
          "aliases": [
            "atkx"
          ]
        },
        {
          "denom": "utkx",
          "exponent": 12,
          "aliases": [
            "microtkx"
          ]
        },
        {
          "denom": "mtkx",
          "exponent": 15,
          "aliases": [
            "millitkx"
          ]
        },
        {
          "denom": "tkx",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/28EEF762052DB8C3D27A7BF625E9F86A1B3B689CC8D80C818CEDF2EB6CBA02A6",
      "name": "tkx",
      "display": "tkx",
      "symbol": "TKX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "titan",
            "base_denom": "atkx",
            "channel_id": "channel-2"
          },
          "chain": {
            "channel_id": "channel-5969",
            "path": "transfer/channel-5969/atkx"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/tkx.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/tkx.png"
        }
      ]
    },
    {
      "description": "Circle's stablecoin on Axelar",
      "denom_units": [
        {
          "denom": "ibc/2164BDB48DE5501430E71286448D87C6D2240EC0E078CF113CAB85E21A352BB0",
          "exponent": 0
        },
        {
          "denom": "ausdc",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/2164BDB48DE5501430E71286448D87C6D2240EC0E078CF113CAB85E21A352BB0",
      "name": "USD Coin (Axelar)",
      "display": "ausdc",
      "symbol": "aUSDC.axl",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereumtestnet",
            "base_denom": "0x254d06f33bDc5b8ee05b2ea472107E300226659A"
          },
          "provider": "Axelar"
        },
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "axelartestnet",
            "base_denom": "uausdc",
            "channel_id": "channel-339"
          },
          "chain": {
            "channel_id": "channel-4170",
            "path": "transfer/channel-4170/uausdc"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "ethereumtestnet",
            "base_denom": "0x254d06f33bDc5b8ee05b2ea472107E300226659A"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg"
      }
    }
  ]
}

