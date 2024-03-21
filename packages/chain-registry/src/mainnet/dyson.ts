import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const dyson: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "dyson",
  "website": "https://dysonprotocol.com/",
  "status": "live",
  "network_type": "mainnet",
  "pretty_name": "Dyson Protocol",
  "chain_id": "dyson-mainnet-01",
  "bech32_prefix": "dys",
  "node_home": "$HOME/.dyson",
  "daemon_name": "dysond",
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "dys",
        "low_gas_price": 0.0001,
        "average_gas_price": 0.0002,
        "high_gas_price": 0.0003
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "dys"
      }
    ]
  },
  "codebase": {
    "git_repo": "https://gitlab.com/dysonproject/dyson",
    "recommended_version": "v0.0.2-bebf2e98",
    "compatible_versions": [
      "v0.0.2-bebf2e98"
    ],
    "genesis": {
      "genesis_url": "https://gitlab.com/dysonproject/dyson-deploy/-/raw/develop/genesis.json"
    },
    "versions": [
      {
        "name": "v0.0.2-bebf2e98",
        "recommended_version": "v0.0.2-bebf2e98",
        "compatible_versions": [
          "v0.0.2-bebf2e98"
        ]
      }
    ]
  },
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dyson.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dyson.svg"
  },
  "peers": {
    "seeds": [],
    "persistent_peers": [
      {
        "id": "b1fd06f7f129ad6bf66635b7068931cf0fb68497",
        "address": "161.97.91.203:27656",
        "provider": "genznodes"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://dys-tm.dysonprotocol.com:443",
        "provider": "dysonprotocol"
      },
      {
        "address": "https://dyson-rpc.cogwheel.zone:443",
        "provider": "cogwheel"
      }
    ],
    "rest": [
      {
        "address": "https://dys-api.dysonprotocol.com:443",
        "provider": "dysonprotocol"
      },
      {
        "address": "https://dyson-api.cogwheel.zone:443",
        "provider": "cogwheel"
      }
    ],
    "grpc": [
      {
        "address": "dys-grpc.dyson.lol:443",
        "provider": "lol"
      },
      {
        "address": "https://dyson-grpc.cogwheel.zone:443",
        "provider": "cogwheel"
      }
    ]
  },
  "explorers": [
    {
      "kind": "dysonprotocol",
      "url": "https://explorer.dys.dysonprotocol.com/dyson/",
      "tx_page": "https://explorer.dys.dysonprotocol.com/dyson/tx/${txHash}",
      "account_page": "https://explorer.dys.dysonprotocol.com/dyson/account/${accountAddress}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dyson.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dyson.svg"
    }
  ]
}

export const dysonAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "dyson",
  "assets": [
    {
      "description": "The native staking and governance token of the Dyson Protocol",
      "denom_units": [
        {
          "denom": "dys",
          "exponent": 0
        }
      ],
      "base": "dys",
      "name": "Dys",
      "display": "dys",
      "symbol": "DYS",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.svg"
      },
      "coingecko_id": "",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/13B2C536BB057AC79D5616B8EA1B9540EC1F2170718CAFF6F0083C966FFFED0B",
          "exponent": 0,
          "aliases": [
            "uosmo"
          ]
        },
        {
          "denom": "osmo",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/13B2C536BB057AC79D5616B8EA1B9540EC1F2170718CAFF6F0083C966FFFED0B",
      "name": "Osmosis",
      "display": "osmo",
      "description": "The native token of Osmosis",
      "symbol": "OSMO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "uosmo",
            "channel_id": "channel-526"
          },
          "chain": {
            "channel_id": "channel-2",
            "path": "transfer/channel-2/uosmo"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "uosmo"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/9BF31153F7E37F687C75A2F310E7A4DB6E0512B065F709B5EB69FE828133AFAC",
          "exponent": 0,
          "aliases": [
            "wbtc-satoshi"
          ]
        },
        {
          "denom": "wbtc",
          "exponent": 8
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/9BF31153F7E37F687C75A2F310E7A4DB6E0512B065F709B5EB69FE828133AFAC",
      "name": "Wrapped Bitcoin",
      "display": "wbtc",
      "symbol": "WBTC",
      "description": "Wrapped Bitcoin on Axelar on Osmosis",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F",
            "channel_id": "channel-526"
          },
          "chain": {
            "channel_id": "channel-2",
            "path": "transfer/channel-2/transfer/channel-208/wbtc-satoshi"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.svg"
        },
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/13DF61376C08483555C6D4C9203612086A1B23218EB5EBDBE609EEC7EFF2D82D",
          "exponent": 0,
          "aliases": [
            "uusdc"
          ]
        },
        {
          "denom": "usdc",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "description": "Circle's stablecoin on Axelar on Osmosis",
      "base": "ibc/13DF61376C08483555C6D4C9203612086A1B23218EB5EBDBE609EEC7EFF2D82D",
      "name": "USD Coin",
      "display": "usdc",
      "symbol": "USDC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858",
            "channel_id": "channel-526"
          },
          "chain": {
            "channel_id": "channel-2",
            "path": "transfer/channel-2/transfer/channel-208/uusdc"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.svg"
        },
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.svg"
      }
    }
  ]
}

