import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const axelar: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "axelar",
  "chain_id": "axelar-dojo-1",
  "pretty_name": "Axelar",
  "status": "live",
  "network_type": "mainnet",
  "website": "https://axelar.network/",
  "bech32_prefix": "axelar",
  "daemon_name": "axelard",
  "node_home": "$HOME/.axelar",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "uaxl",
        "fixed_min_gas_price": 0.007,
        "low_gas_price": 0.007,
        "average_gas_price": 0.007,
        "high_gas_price": 0.01
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "uaxl"
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/axelarnetwork/axelar-core",
    "recommended_version": "v0.35.5",
    "compatible_versions": [
      "v0.35.5"
    ],
    "binaries": {
      "linux/amd64": "https://github.com/axelarnetwork/axelar-core/releases/download/v0.35.5/axelard-linux-amd64-v0.35.5",
      "darwin/amd64": "https://github.com/axelarnetwork/axelar-core/releases/download/v0.35.5/axelard-darwin-amd64-v0.35.5"
    },
    "cosmos_sdk_version": "axelarnetwork/cosmos-sdk v0.45.17-0.20230904150332-37fb903a6c62",
    "consensus": {
      "type": "cometbft",
      "version": "v0.34.31"
    },
    "ibc_go_version": "v4.5.1",
    "cosmwasm_version": "v0.33.0",
    "cosmwasm_enabled": true,
    "genesis": {
      "genesis_url": "https://raw.githubusercontent.com/axelarnetwork/axelarate-community/main/resources/mainnet/genesis.json"
    },
    "versions": [
      {
        "name": "v0.33.0",
        "recommended_version": "v0.33.0",
        "compatible_versions": [
          "v0.33.0"
        ],
        "binaries": {
          "linux/amd64": "https://github.com/axelarnetwork/axelar-core/releases/download/v0.33.0/axelard-linux-amd64-v0.33.0",
          "darwin/amd64": "https://github.com/axelarnetwork/axelar-core/releases/download/v0.33.0/axelard-darwin-amd64-v0.33.0"
        },
        "next_version_name": "v0.34.0"
      },
      {
        "name": "v0.34.0",
        "recommended_version": "v0.34.0",
        "compatible_versions": [
          "v0.34.0"
        ],
        "binaries": {
          "linux/amd64": "https://github.com/axelarnetwork/axelar-core/releases/download/v0.34.0/axelard-linux-amd64-v0.34.0",
          "darwin/amd64": "https://github.com/axelarnetwork/axelar-core/releases/download/v0.34.0/axelard-darwin-amd64-v0.34.0"
        },
        "next_version_name": "v0.35ps://github.com/axelarnetwork/axelar-core/releases/down"
      },
      {
        "name": "v0.35",
        "recommended_version": "v0.35.5",
        "compatible_versions": [
          "v0.35.5"
        ],
        "binaries": {
          "linux/amd64": "https://github.com/axelarnetwork/axelar-core/releases/download/v0.35.5/axelard-linux-amd64-v0.35.5",
          "darwin/amd64": "https://github.com/axelarnetwork/axelar-core/releases/download/v0.35.5/axelard-darwin-amd64-v0.35.5"
        },
        "cosmos_sdk_version": "axelarnetwork/cosmos-sdk v0.45.17-0.20230904150332-37fb903a6c62",
        "consensus": {
          "type": "cometbft",
          "version": "v0.34.31"
        },
        "ibc_go_version": "v4.5.1",
        "cosmwasm_version": "v0.33.0",
        "cosmwasm_enabled": true,
        "next_version_name": ""
      }
    ]
  },
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axelar-chain-logo.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axelar-chain-logo.svg"
  },
  "description": "Axelar delivers secure cross-chain communication for Web3. Our infrastructure enables dApp users to interact with any asset or application, on any chain, with one click.",
  "peers": {
    "seeds": [
      {
        "id": "3d67d0646cddcc203b41434aceea64ade22ba6fc",
        "address": "k8s-mainnet-axelarco-79b464ee93-f03cb16c57cf7cb2.elb.us-east-2.amazonaws.com:26656",
        "provider": "axelar-core"
      },
      {
        "id": "9c9b8eb8cad8648f31d3c9da3d14e825f11a7b52",
        "address": "public-seed.mainnet.axelar.lunanova.tech:26656",
        "provider": "lunanova"
      },
      {
        "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
        "address": "seeds.polkachu.com:15156",
        "provider": "Polkachu"
      },
      {
        "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
        "address": "axelar-mainnet-seed.autostake.com:26826",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "id": "c28827cb96c14c905b127b92065a3fb4cd77d7f6",
        "address": "seeds.whispernode.com:15156",
        "provider": "WhisperNode 🤐"
      },
      {
        "id": "3470414cd299d15911e9bb28557f6bffb8e514c6",
        "address": "seed-axelar-01.stakeflow.io:1606",
        "provider": "Stakeflow"
      },
      {
        "id": "8542cd7e6bf9d260fef543bc49e59be5a3fa9074",
        "address": "seed.publicnode.com:26656",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "id": "10ed1e176d874c8bb3c7c065685d2da6a4b86475",
        "address": "seed-axelar.ibs.team:16671",
        "provider": "Inter Blockchain Services"
      }
    ],
    "persistent_peers": [
      {
        "id": "353f7d0962594bcbfb63c81594e35e39c4c89a1a",
        "address": "18.223.127.165:26656"
      },
      {
        "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
        "address": "axelar-mainnet-peer.autostake.com:26826",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "id": "3470414cd299d15911e9bb28557f6bffb8e514c6",
        "address": "peer-axelar-01.stakeflow.io:1606",
        "provider": "Stakeflow"
      },
      {
        "id": "381d7961c9e44bc25e02d60b94c26763a42db045",
        "address": "65.21.91.99:16756",
        "provider": "Staketab"
      }
    ]
  },
  "apis": {
    "grpc-web": [
      {
        "address": "axelar-grpcweb.chainode.tech",
        "provider": "Chainode"
      },
      {
        "address": "axelar-grpcweb.quantnode.tech:9091",
        "provider": "Quantnode"
      }
    ],
    "rpc": [
      {
        "address": "https://rpc-axelar.imperator.co:443",
        "provider": "Imperator.co"
      },
      {
        "address": "https://axelar-rpc.quickapi.com:443",
        "provider": "chainlayer"
      },
      {
        "address": "https://rpc-axelar.cosmos-spaces.cloud",
        "provider": "Cosmos Spaces"
      },
      {
        "address": "https://axelar-rpc.pops.one:443",
        "provider": "p-ops"
      },
      {
        "address": "https://axelar-rpc.qubelabs.io:443",
        "provider": "Qubelabs"
      },
      {
        "address": "https://rpc-1.axelar.nodes.guru:443",
        "provider": "nodes.guru"
      },
      {
        "address": "https://rpc-axelar-ia.cosmosia.notional.ventures/",
        "provider": "Notional"
      },
      {
        "address": "https://axelar-rpc.polkachu.com",
        "provider": "Polkachu"
      },
      {
        "address": "https://axelar.rpc.stakin-nodes.com",
        "provider": "Stakin"
      },
      {
        "address": "https://rpc.axelar.bh.rocks",
        "provider": "BlockHunters 🎯"
      },
      {
        "address": "https://axelar-rpc.validatrium.club",
        "provider": "Validatrium"
      },
      {
        "address": "https://rpc-axelar.whispernode.com:443",
        "provider": "WhisperNode 🤐"
      },
      {
        "address": "https://axelar-rpc.quantnode.tech/",
        "provider": "QuantNode"
      },
      {
        "address": "https://axelar-mainnet-rpc.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "https://axelar-rpc.rockrpc.net/",
        "provider": "RockawayX Infra"
      },
      {
        "address": "https://axelar-rpc.ibs.team",
        "provider": "Inter Blockchain Services"
      },
      {
        "address": "https://rpc-axelar-01.stakeflow.io",
        "provider": "Stakeflow"
      },
      {
        "address": "https://axelar-rpc.staketab.org:443",
        "provider": "Staketab"
      },
      {
        "address": "https://axelar-rpc.w3coins.io",
        "provider": "w3coins"
      },
      {
        "address": "https://axelar-rpc.publicnode.com:443",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      }
    ],
    "rest": [
      {
        "address": "https://lcd-axelar.imperator.co:443",
        "provider": "Imperator.co"
      },
      {
        "address": "https://axelar-lcd.quickapi.com:443",
        "provider": "chainlayer"
      },
      {
        "address": "https://api-axelar.cosmos-spaces.cloud",
        "provider": "Cosmos Spaces"
      },
      {
        "address": "https://axelar-lcd.qubelabs.io:443",
        "provider": "Qubelabs"
      },
      {
        "address": "https://api-1.axelar.nodes.guru:443",
        "provider": "nodes.guru"
      },
      {
        "address": "https://api-axelar-ia.cosmosia.notional.ventures/",
        "provider": "Notional"
      },
      {
        "address": "https://axelar-api.polkachu.com",
        "provider": "Polkachu"
      },
      {
        "address": "https://axelar.rest.stakin-nodes.com",
        "provider": "Stakin"
      },
      {
        "address": "https://api.axelar.bh.rocks",
        "provider": "BlockHunters 🎯"
      },
      {
        "address": "https://axelar-api.validatrium.club",
        "provider": "Validatrium"
      },
      {
        "address": "https://lcd-axelar.whispernode.com:443",
        "provider": "WhisperNode 🤐"
      },
      {
        "address": "https://axelar-mainnet-lcd.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "https://axelar-lcd.quantnode.tech/",
        "provider": "QuantNode"
      },
      {
        "address": "https://axelar-api.ibs.team",
        "provider": "Inter Blockchain Services"
      },
      {
        "address": "https://api-axelar-01.stakeflow.io",
        "provider": "Stakeflow"
      },
      {
        "address": "https://axelar-rest.staketab.org",
        "provider": "Staketab"
      },
      {
        "address": "https://axelar-api.w3coins.io",
        "provider": "w3coins"
      },
      {
        "address": "https://axelar-rest.publicnode.com",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      }
    ],
    "grpc": [
      {
        "address": "axelar-grpc.qubelabs.io:9092",
        "provider": "Qubelabs"
      },
      {
        "address": "axelar-grpc.quantnode.tech:9090",
        "provider": "Quantnode"
      },
      {
        "address": "services.staketab.com:9080",
        "provider": "Staketab"
      },
      {
        "address": "grpc-axelar.cosmos-spaces.cloud:1590",
        "provider": "Cosmos Spaces"
      },
      {
        "address": "grpc-axelar-ia.cosmosia.notional.ventures:443",
        "provider": "Notional"
      },
      {
        "address": "axelar-grpc.polkachu.com:15190",
        "provider": "Polkachu"
      },
      {
        "address": "axelar.grpc.stakin-nodes.com:443",
        "provider": "Stakin"
      },
      {
        "address": "axelar-mainnet-grpc.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "grpc-axelar-01.stakeflow.io:1602",
        "provider": "Stakeflow"
      },
      {
        "address": "axelar-grpc.w3coins.io:15190",
        "provider": "w3coins"
      },
      {
        "address": "grpc-axelar.whispernode.com:443",
        "provider": "WhisperNode 🤐"
      },
      {
        "address": "axelar-grpc.publicnode.com:443",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      }
    ]
  },
  "explorers": [
    {
      "kind": "axelarscan",
      "url": "https://axelarscan.io",
      "tx_page": "https://axelarscan.io/tx/${txHash}"
    },
    {
      "kind": "mintscan",
      "url": "https://www.mintscan.io/axelar",
      "tx_page": "https://www.mintscan.io/axelar/transactions/${txHash}",
      "account_page": "https://www.mintscan.io/axelar/accounts/${accountAddress}"
    },
    {
      "kind": "explorers.guru",
      "url": "https://axelar.explorers.guru",
      "tx_page": "https://axelar.explorers.guru/transaction/${txHash}"
    },
    {
      "kind": "atomscan",
      "url": "https://atomscan.com/axelar",
      "tx_page": "https://atomscan.com/axelar/transactions/${txHash}",
      "account_page": "https://atomscan.com/axelar/accounts/${accountAddress}"
    },
    {
      "kind": "Stakeflow",
      "url": "https://stakeflow.io/axelar",
      "account_page": "https://stakeflow.io/axelar/accounts/${accountAddress}"
    },
    {
      "kind": "ezstaking",
      "url": "https://ezstaking.app/axelar",
      "tx_page": "https://ezstaking.app/axelar/txs/${txHash}",
      "account_page": "https://ezstaking.app/axelar/account/${accountAddress}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axelar-chain-logo.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axelar-chain-logo.svg"
    }
  ]
}

export const axelarAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "axelar",
  "assets": [
    {
      "description": "The native token of Axelar",
      "denom_units": [
        {
          "denom": "uaxl",
          "exponent": 0
        },
        {
          "denom": "axl",
          "exponent": 6
        }
      ],
      "base": "uaxl",
      "name": "Axelar",
      "display": "axl",
      "symbol": "AXL",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg"
      },
      "coingecko_id": "axelar",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg"
        }
      ],
      "socials": {
        "webiste": "https://axelar.network/",
        "twitter": "https://twitter.com/axelarnetwork"
      }
    },
    {
      "description": "Circle's stablecoin on Axelar",
      "denom_units": [
        {
          "denom": "uusdc",
          "exponent": 0
        },
        {
          "denom": "usdc",
          "exponent": 6
        }
      ],
      "base": "uusdc",
      "name": "USD Coin",
      "display": "usdc",
      "symbol": "USDC",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
          },
          "provider": "Axelar"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg"
      },
      "coingecko_id": "axlusdc",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg"
        }
      ]
    },
    {
      "description": "Frax's fractional-algorithmic stablecoin on Axelar",
      "denom_units": [
        {
          "denom": "frax-wei",
          "exponent": 0
        },
        {
          "denom": "frax",
          "exponent": 18
        }
      ],
      "base": "frax-wei",
      "name": "Frax",
      "display": "frax",
      "symbol": "FRAX",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0x853d955acef822db058eb8505911ed77f175b99e"
          },
          "provider": "Axelar"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg"
        }
      ]
    },
    {
      "description": "Dai stablecoin on Axelar",
      "denom_units": [
        {
          "denom": "dai-wei",
          "exponent": 0
        },
        {
          "denom": "dai",
          "exponent": 18
        }
      ],
      "base": "dai-wei",
      "name": "Dai Stablecoin",
      "display": "dai",
      "symbol": "DAI",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0x6b175474e89094c44da98b954eedeac495271d0f"
          },
          "provider": "Axelar"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.svg"
        }
      ]
    },
    {
      "description": "Tether's USD stablecoin on Axelar",
      "denom_units": [
        {
          "denom": "uusdt",
          "exponent": 0
        },
        {
          "denom": "usdt",
          "exponent": 6
        }
      ],
      "base": "uusdt",
      "name": "Tether USD",
      "display": "usdt",
      "symbol": "USDT",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0xdac17f958d2ee523a2206206994597c13d831ec7"
          },
          "provider": "Axelar"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.svg"
        }
      ]
    },
    {
      "description": "Wrapped Ether on Axelar",
      "denom_units": [
        {
          "denom": "weth-wei",
          "exponent": 0
        },
        {
          "denom": "weth",
          "exponent": 18
        }
      ],
      "base": "weth-wei",
      "name": "Wrapped Ether",
      "display": "weth",
      "symbol": "WETH",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
          },
          "provider": "Axelar"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png"
        }
      ]
    },
    {
      "description": "Wrapped Bitcoin on Axelar",
      "denom_units": [
        {
          "denom": "wbtc-satoshi",
          "exponent": 0
        },
        {
          "denom": "wbtc",
          "exponent": 8
        }
      ],
      "base": "wbtc-satoshi",
      "name": "Wrapped Bitcoin",
      "display": "wbtc",
      "symbol": "WBTC",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"
          },
          "provider": "Axelar"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png"
        }
      ]
    },
    {
      "description": "Aave on Axelar",
      "denom_units": [
        {
          "denom": "aave-wei",
          "exponent": 0
        },
        {
          "denom": "aave",
          "exponent": 18
        }
      ],
      "base": "aave-wei",
      "name": "Aave",
      "display": "aave",
      "symbol": "AAVE",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9"
          },
          "provider": "Axelar"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg"
        }
      ]
    },
    {
      "description": "ApeCoin on Axelar",
      "denom_units": [
        {
          "denom": "ape-wei",
          "exponent": 0
        },
        {
          "denom": "ape",
          "exponent": 18
        }
      ],
      "base": "ape-wei",
      "name": "ApeCoin",
      "display": "ape",
      "symbol": "APE",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0x4d224452801aced8b2f0aebe155379bb5d594381"
          },
          "provider": "Axelar"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg"
        }
      ]
    },
    {
      "description": "Axie Infinity Shard on Axelar",
      "denom_units": [
        {
          "denom": "axs-wei",
          "exponent": 0
        },
        {
          "denom": "axs",
          "exponent": 18
        }
      ],
      "base": "axs-wei",
      "name": "Axie Infinity Shard",
      "display": "axs",
      "symbol": "AXS",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0xbb0e17ef65f82ab018d8edd776e8dd940327b28b"
          },
          "provider": "Axelar"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/axs.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/axs.svg"
        }
      ]
    },
    {
      "description": "Chainlink on Axelar",
      "denom_units": [
        {
          "denom": "link-wei",
          "exponent": 0
        },
        {
          "denom": "link",
          "exponent": 18
        }
      ],
      "base": "link-wei",
      "name": "Chainlink",
      "display": "link",
      "symbol": "LINK",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0x514910771af9ca656af840dff83e8264ecf986ca"
          },
          "provider": "Axelar"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg"
        }
      ]
    },
    {
      "description": "Maker on Axelar",
      "denom_units": [
        {
          "denom": "mkr-wei",
          "exponent": 0
        },
        {
          "denom": "mkr",
          "exponent": 18
        }
      ],
      "base": "mkr-wei",
      "name": "Maker",
      "display": "mkr",
      "symbol": "MKR",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2"
          },
          "provider": "Axelar"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg"
        }
      ]
    },
    {
      "description": "Rai Reflex Index on Axelar",
      "denom_units": [
        {
          "denom": "rai-wei",
          "exponent": 0
        },
        {
          "denom": "rai",
          "exponent": 18
        }
      ],
      "base": "rai-wei",
      "name": "Rai Reflex Index",
      "display": "rai",
      "symbol": "RAI",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0x03ab458634910aad20ef5f1c8ee96f1d6ac54919"
          },
          "provider": "Axelar"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg"
        }
      ]
    },
    {
      "description": "Shiba Inu on Axelar",
      "denom_units": [
        {
          "denom": "shib-wei",
          "exponent": 0
        },
        {
          "denom": "shib",
          "exponent": 18
        }
      ],
      "base": "shib-wei",
      "name": "Shiba Inu",
      "display": "shib",
      "symbol": "SHIB",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce"
          },
          "provider": "Axelar"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg"
        }
      ]
    },
    {
      "description": "Lido Staked Ether on Axelar",
      "denom_units": [
        {
          "denom": "steth-wei",
          "exponent": 0
        },
        {
          "denom": "steth",
          "exponent": 18
        }
      ],
      "base": "steth-wei",
      "name": "Lido Staked Ether",
      "display": "steth",
      "symbol": "stETH",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0xae7ab96520de3a18e5e111b5eaab095312d7fe84"
          },
          "provider": "Axelar"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg"
        }
      ]
    },
    {
      "description": "Uniswap on Axelar",
      "denom_units": [
        {
          "denom": "uni-wei",
          "exponent": 0
        },
        {
          "denom": "uni",
          "exponent": 18
        }
      ],
      "base": "uni-wei",
      "name": "Uniswap",
      "display": "uni",
      "symbol": "UNI",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"
          },
          "provider": "Axelar"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg"
        }
      ]
    },
    {
      "description": "Chain on Axelar",
      "denom_units": [
        {
          "denom": "xcn-wei",
          "exponent": 0
        },
        {
          "denom": "xcn",
          "exponent": 18
        }
      ],
      "base": "xcn-wei",
      "name": "Chain",
      "display": "xcn",
      "symbol": "XCN",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18"
          },
          "provider": "Axelar"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xcn.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xcn.svg"
        }
      ]
    },
    {
      "description": "Wrapped Polkadot on Axelar",
      "denom_units": [
        {
          "denom": "dot-planck",
          "exponent": 0
        },
        {
          "denom": "dot",
          "exponent": 10
        }
      ],
      "base": "dot-planck",
      "name": "Wrapped Polkadot",
      "display": "dot",
      "symbol": "DOT",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "moonbeam",
            "base_denom": "0xffffffff1fcacbd218edc0eba20fc2308c778080"
          },
          "provider": "Axelar"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg"
        }
      ]
    },
    {
      "description": "Wrapped Moonbeam on Axelar",
      "denom_units": [
        {
          "denom": "wglmr-wei",
          "exponent": 0
        },
        {
          "denom": "wglmr",
          "exponent": 18
        }
      ],
      "base": "wglmr-wei",
      "name": "Wrapped Moonbeam",
      "display": "wglmr",
      "symbol": "WGLMR",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "moonbeam",
            "base_denom": "0xacc15dc74880c9944775448304b263d191c6077f"
          },
          "provider": "Axelar"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg"
        }
      ]
    },
    {
      "description": "Wrapped Matic on Axelar",
      "denom_units": [
        {
          "denom": "wmatic-wei",
          "exponent": 0
        },
        {
          "denom": "wmatic",
          "exponent": 18
        }
      ],
      "base": "wmatic-wei",
      "name": "Wrapped Matic",
      "display": "wmatic",
      "symbol": "WMATIC",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "polygon",
            "base_denom": "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270"
          },
          "provider": "Axelar"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg"
        }
      ]
    },
    {
      "description": "Wrapped BNB on Axelar",
      "denom_units": [
        {
          "denom": "wbnb-wei",
          "exponent": 0
        },
        {
          "denom": "wbnb",
          "exponent": 18
        }
      ],
      "base": "wbnb-wei",
      "name": "Wrapped BNB",
      "display": "wbnb",
      "symbol": "WBNB",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "binancesmartchain",
            "base_denom": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
          },
          "provider": "Axelar"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg"
        }
      ]
    },
    {
      "description": "Binance USD on Axelar.",
      "denom_units": [
        {
          "denom": "busd-wei",
          "exponent": 0
        },
        {
          "denom": "busd",
          "exponent": 18
        }
      ],
      "base": "busd-wei",
      "name": "Binance USD",
      "display": "busd",
      "symbol": "BUSD",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0x4fabb145d64652a948d72533023f6e7a623c7c53"
          },
          "provider": "Axelar"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png"
        }
      ]
    },
    {
      "description": "Wrapped AVAX on Axelar.",
      "denom_units": [
        {
          "denom": "wavax-wei",
          "exponent": 0
        },
        {
          "denom": "avax",
          "exponent": 18
        }
      ],
      "base": "wavax-wei",
      "name": "Wrapped AVAX",
      "display": "avax",
      "symbol": "WAVAX",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "avalanche",
            "base_denom": "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7"
          },
          "provider": "Axelar"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg"
        }
      ]
    },
    {
      "description": "Wrapped FTM on Axelar.",
      "denom_units": [
        {
          "denom": "wftm-wei",
          "exponent": 0
        },
        {
          "denom": "ftm",
          "exponent": 18
        }
      ],
      "base": "wftm-wei",
      "name": "Wrapped FTM",
      "display": "ftm",
      "symbol": "WFTM",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "fantom",
            "base_denom": "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83"
          },
          "provider": "Axelar"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png"
        }
      ]
    },
    {
      "description": "Circle's stablecoin from Polygon on Axelar",
      "denom_units": [
        {
          "denom": "polygon-uusdc",
          "exponent": 0
        },
        {
          "denom": "polygon-usdc",
          "exponent": 6
        }
      ],
      "base": "polygon-uusdc",
      "name": "USD Coin from Polygon",
      "display": "polygon-usdc",
      "symbol": "USDC",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "polygon",
            "base_denom": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          },
          "provider": "Axelar"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg"
        }
      ]
    },
    {
      "description": "Circle's stablecoin from Avalanche on Axelar",
      "denom_units": [
        {
          "denom": "avalanche-uusdc",
          "exponent": 0
        },
        {
          "denom": "avalanche-usdc",
          "exponent": 6
        }
      ],
      "base": "avalanche-uusdc",
      "name": "USD Coin from Avalanche",
      "display": "avalanche-usdc",
      "symbol": "USDC",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "avalanche",
            "base_denom": "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E"
          },
          "provider": "Axelar"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg"
        }
      ]
    },
    {
      "description": "Wrapped FIL on Axelar",
      "denom_units": [
        {
          "denom": "wfil-wei",
          "exponent": 0
        },
        {
          "denom": "fil",
          "exponent": 18
        }
      ],
      "base": "wfil-wei",
      "name": "Wrapped FIL from Filecoin",
      "display": "fil",
      "symbol": "axlFIL",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "filecoin",
            "base_denom": "0x60E1773636CF5E4A227d9AC24F20fEca034ee25A"
          },
          "provider": "Axelar"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.svg"
        }
      ]
    },
    {
      "description": "Arbitrum on Axelar",
      "denom_units": [
        {
          "denom": "arb-wei",
          "exponent": 0
        },
        {
          "denom": "arb",
          "exponent": 18
        }
      ],
      "base": "arb-wei",
      "name": "Arbitrum",
      "display": "arb",
      "symbol": "ARB",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "arbitrum",
            "base_denom": "0x912CE59144191C1204E64559FE8253a0e49E6548"
          },
          "provider": "Axelar"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "pepe-wei",
          "exponent": 0,
          "aliases": [
            "0x6982508145454Ce325dDbE47a25d4ec3d2311933"
          ]
        },
        {
          "denom": "pepe",
          "exponent": 18
        }
      ],
      "base": "pepe-wei",
      "name": "Pepe",
      "display": "pepe",
      "symbol": "PEPE",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0x6982508145454Ce325dDbE47a25d4ec3d2311933"
          },
          "provider": "Axelar"
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "ethereum",
            "base_denom": "0x6982508145454Ce325dDbE47a25d4ec3d2311933"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "cbeth-wei",
          "exponent": 0,
          "aliases": [
            "0xbe9895146f7af43049ca1c1ae358b0541ea49704"
          ]
        },
        {
          "denom": "cbeth",
          "exponent": 18
        }
      ],
      "base": "cbeth-wei",
      "name": "Coinbase Wrapped Staked ETH",
      "display": "cbeth",
      "symbol": "cbETH",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0xbe9895146f7af43049ca1c1ae358b0541ea49704"
          },
          "provider": "Axelar"
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "ethereum",
            "base_denom": "0xbe9895146f7af43049ca1c1ae358b0541ea49704"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png"
      }
    },
    {
      "denom_units": [
        {
          "denom": "reth-wei",
          "exponent": 0,
          "aliases": [
            "0xae78736cd615f374d3085123a210448e74fc6393"
          ]
        },
        {
          "denom": "reth",
          "exponent": 18
        }
      ],
      "base": "reth-wei",
      "name": "Rocket Pool Ether",
      "display": "reth",
      "symbol": "rETH",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0xae78736cd615f374d3085123a210448e74fc6393"
          },
          "provider": "Axelar"
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "ethereum",
            "base_denom": "0xae78736cd615f374d3085123a210448e74fc6393"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png"
      }
    },
    {
      "denom_units": [
        {
          "denom": "sfrxeth-wei",
          "exponent": 0,
          "aliases": [
            "0xac3e018457b222d93114458476f3e3416abbe38f"
          ]
        },
        {
          "denom": "sfrxeth",
          "exponent": 18
        }
      ],
      "base": "sfrxeth-wei",
      "name": "Staked Frax Ether",
      "display": "sfrxeth",
      "symbol": "sfrxETH",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0xac3e018457b222d93114458476f3e3416abbe38f"
          },
          "provider": "Axelar"
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "ethereum",
            "base_denom": "0xac3e018457b222d93114458476f3e3416abbe38f"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "wsteth-wei",
          "exponent": 0,
          "aliases": [
            "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0"
          ]
        },
        {
          "denom": "wsteth",
          "exponent": 18
        }
      ],
      "base": "wsteth-wei",
      "name": "Wrapped Lido Staked Ether",
      "display": "wsteth",
      "symbol": "wstETH",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0"
          },
          "provider": "Axelar"
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "ethereum",
            "base_denom": "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "yieldeth-wei",
          "exponent": 0,
          "aliases": [
            "0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec"
          ]
        },
        {
          "denom": "YieldETH",
          "exponent": 18
        }
      ],
      "base": "yieldeth-wei",
      "name": "Real Yield Eth",
      "display": "YieldETH",
      "symbol": "YieldETH",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec"
          },
          "provider": "Axelar"
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "ethereum",
            "base_denom": "0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ox-wei",
          "exponent": 0,
          "aliases": [
            "0x78a0A62Fba6Fb21A83FE8a3433d44C73a4017A6f"
          ]
        },
        {
          "denom": "ox",
          "exponent": 18
        }
      ],
      "base": "ox-wei",
      "name": "Open Exchange Token",
      "display": "ox",
      "symbol": "OX",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0x78a0A62Fba6Fb21A83FE8a3433d44C73a4017A6f"
          },
          "provider": "Axelar"
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "ethereum",
            "base_denom": "0x78a0A62Fba6Fb21A83FE8a3433d44C73a4017A6f"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ox.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ox.svg"
      }
    }
  ]
}

