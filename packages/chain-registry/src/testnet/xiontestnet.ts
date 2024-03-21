import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const xiontestnet: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "xiontestnet",
  "status": "live",
  "network_type": "testnet",
  "pretty_name": "Xion Testnet",
  "chain_id": "xion-testnet-1",
  "bech32_prefix": "xion",
  "daemon_name": "xiond",
  "node_home": "$HOME/.xiond",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "uxion",
        "fixed_min_gas_price": 0,
        "low_gas_price": 0,
        "average_gas_price": 0.025,
        "high_gas_price": 0.04
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "uxion"
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/burnt-labs/xion",
    "recommended_version": "v0.3.4",
    "compatible_versions": [
      "v0.3.4"
    ],
    "cosmos_sdk_version": "0.47.5",
    "consensus": {
      "type": "cometbft",
      "version": "0.37.2"
    },
    "cosmwasm_version": "0.43.0",
    "cosmwasm_enabled": true,
    "genesis": {
      "genesis_url": "https://raw.githubusercontent.com/burnt-labs/burnt-networks/main/testnets/xion-testnet-1/genesis.json"
    },
    "versions": [
      {
        "name": "v0.1.0",
        "tag": "v0.1.0",
        "recommended_version": "v0.1.0",
        "cosmos_sdk_version": "0.47.0",
        "cosmwasm_enabled": true,
        "cosmwasm_version": "0.40.0-rc.0",
        "ibc_go_version": "v7.0.0",
        "consensus": {
          "type": "cometbft",
          "version": "0.37.0"
        }
      },
      {
        "name": "v0.3.2",
        "tag": "v0.3.2",
        "height": 1929544,
        "recommended_version": "v0.3.2",
        "cosmos_sdk_version": "0.47.3",
        "cosmwasm_enabled": true,
        "cosmwasm_version": "0.40.1",
        "ibc_go_version": "v7.2.0",
        "consensus": {
          "type": "cometbft",
          "version": "0.37.2"
        }
      },
      {
        "name": "v0.3.3",
        "tag": "v0.3.3",
        "height": 1929544,
        "recommended_version": "v0.3.3",
        "cosmos_sdk_version": "0.47.3",
        "cosmwasm_enabled": true,
        "cosmwasm_version": "0.40.1",
        "ibc_go_version": "v7.2.0",
        "consensus": {
          "type": "cometbft",
          "version": "0.37.2"
        }
      },
      {
        "name": "v0.3.4",
        "tag": "v0.3.4",
        "height": 1929544,
        "recommended_version": "v0.3.4",
        "cosmos_sdk_version": "0.47.5",
        "cosmwasm_enabled": true,
        "cosmwasm_version": "0.43.0",
        "ibc_go_version": "v7.3.0",
        "consensus": {
          "type": "cometbft",
          "version": "0.37.2"
        }
      }
    ]
  },
  "peers": {
    "seeds": [
      {
        "id": "7900d5f177228def24170f9631db76afab20278e",
        "address": "xion-testnet-1.burnt.com:11656",
        "provider": "burnt-labs"
      }
    ],
    "persistent_peers": [
      {
        "id": "93db3539d6cc9603bbb6b9e43bfb473bdaff7e4b",
        "address": "xion-testnet-1.burnt.com:32656",
        "provider": "burnt-labs"
      },
      {
        "id": "0f2ccb6d7e8f233c03f91dee690f5ff714319fba",
        "address": "xion-testnet-1.burnt.com:33656",
        "provider": "burnt-labs"
      },
      {
        "id": "f684e3873191d62a74e5431202581d99fe3439b7",
        "address": "xion-testnet-1.burnt.com:34656",
        "provider": "burnt-labs"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://testnet-burnt-rpc.lavenderfive.com",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://xion-testnet-rpc.polkachu.com",
        "provider": "polkachu"
      }
    ],
    "rest": [
      {
        "address": "https://testnet-burnt-api.lavenderfive.com",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://xion-testnet-api.polkachu.com",
        "provider": "polkachu"
      }
    ],
    "grpc": [
      {
        "address": "https://testnet-burnt-grpc.lavenderfive.com",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "xion-testnet-grpc.polkachu.com:22390",
        "provider": "polkachu"
      }
    ]
  },
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt.png"
  },
  "keywords": [
    "xion",
    "burnt",
    "testnet"
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt.png"
    }
  ]
}

export const xiontestnetAssetList: AssetList = {
  "$schema": "../../assetlist.schema.json",
  "chain_name": "xiontestnet",
  "assets": [
    {
      "description": "The native staking token of the Xion network.",
      "denom_units": [
        {
          "denom": "uxion",
          "exponent": 0,
          "aliases": [
            "microxion"
          ]
        },
        {
          "denom": "XION",
          "exponent": 6,
          "aliases": [
            "xion"
          ]
        }
      ],
      "base": "uxion",
      "display": "XION",
      "name": "xion",
      "symbol": "XION",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/D934516FBE457F3A98AFABD87E0EFF7F95A15325C191EA8CDD7763C702FDDEC2",
          "exponent": 0,
          "aliases": [
            "uaxl"
          ]
        },
        {
          "denom": "axl",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/D934516FBE457F3A98AFABD87E0EFF7F95A15325C191EA8CDD7763C702FDDEC2",
      "name": "Axelar AXL Token",
      "display": "axl",
      "symbol": "AXL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "axelartestnet",
            "base_denom": "uaxl",
            "channel_id": "channel-283"
          },
          "chain": {
            "channel_id": "channel-5",
            "path": "transfer/channel-5/uaxl"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "axelartestnet",
            "base_denom": "uaxl"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/92E0120F15D037353CFB73C14651FC8930ADC05B93100FD7754D3A689E53B333",
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
      "base": "ibc/6AE2756AA7EAA8FA06E11472EA05CA681BD8D3FBC1AAA9F06C79D1EC1C90DC9B",
      "name": "Osmosis OSMO Token",
      "display": "osmo",
      "symbol": "OSMO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosistestnet",
            "base_denom": "uosmo",
            "channel_id": "channel-1299"
          },
          "chain": {
            "channel_id": "channel-8",
            "path": "transfer/channel-8/uosmo"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosistestnet",
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
          "denom": "ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F",
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
      "base": "ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F",
      "name": "Noble USDC Token",
      "display": "usdc",
      "symbol": "USDC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "nobletestnet",
            "base_denom": "uusdc",
            "channel_id": "channel-17"
          },
          "chain": {
            "channel_id": "channel-9",
            "path": "transfer/channel-9/uusdc"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "nobletestnet",
            "base_denom": "uusdc"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/0166AE2224341A3F70943E315DAC6EDF012A638D0F9358794FF7525BA1DFC191",
          "exponent": 0,
          "aliases": [
            "inj"
          ]
        },
        {
          "denom": "INJ",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/0166AE2224341A3F70943E315DAC6EDF012A638D0F9358794FF7525BA1DFC191",
      "name": "Injective INJ token",
      "display": "INJ",
      "symbol": "INJ",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "injectivetestnet",
            "base_denom": "inj",
            "channel_id": "channel-324"
          },
          "chain": {
            "channel_id": "channel-215",
            "path": "transfer/channel-215/inj"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "injectivetestnet",
            "base_denom": "inj"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg"
      }
    }
  ]
}

