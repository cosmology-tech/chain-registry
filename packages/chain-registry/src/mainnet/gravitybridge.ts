import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const gravitybridge: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "gravitybridge",
  "status": "live",
  "network_type": "mainnet",
  "website": "https://www.gravitybridge.net/",
  "pretty_name": "Gravity Bridge",
  "chain_id": "gravity-bridge-3",
  "bech32_prefix": "gravity",
  "daemon_name": "gravity",
  "node_home": "$HOME/.gravity",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "ugraviton",
        "fixed_min_gas_price": 0,
        "low_gas_price": 0,
        "average_gas_price": 0,
        "high_gas_price": 0.035
      },
      {
        "denom": "gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "low_gas_price": 0.0002,
        "average_gas_price": 0.0005,
        "high_gas_price": 0.0008
      },
      {
        "denom": "gravity0xdAC17F958D2ee523a2206206994597C13D831ec7",
        "low_gas_price": 0.0002,
        "average_gas_price": 0.0005,
        "high_gas_price": 0.0008
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "ugraviton"
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/Gravity-Bridge/Gravity-Bridge",
    "recommended_version": "v1.11.1",
    "compatible_versions": [
      "v1.11.1"
    ],
    "binaries": {
      "linux/amd64": "https://github.com/Gravity-Bridge/Gravity-Bridge/releases/download/v1.11.1/gravity-linux-amd64"
    },
    "genesis": {
      "genesis_url": "https://raw.githubusercontent.com/Gravity-Bridge/Gravity-Docs/main/genesis.json"
    },
    "versions": [
      {
        "name": "pleiades2",
        "recommended_version": "v1.8.0",
        "compatible_versions": [
          "v1.8.0"
        ],
        "binaries": {
          "linux/amd64": "https://github.com/Gravity-Bridge/Gravity-Bridge/releases/download/v1.8.0/gravity-linux-amd64",
          "linux/arm64": "https://github.com/Gravity-Bridge/Gravity-Bridge/releases/download/v1.8.0/gravity-linux-arm64",
          "darwin/amd64": "https://github.com/Gravity-Bridge/Gravity-Bridge/releases/download/v1.8.0/gravity-darwin-amd64",
          "windows/amd64": "https://github.com/Gravity-Bridge/Gravity-Bridge/releases/download/v1.8.0/gravity-windows-amd64.exe"
        },
        "next_version_name": "orion"
      },
      {
        "name": "orion",
        "height": 6698820,
        "recommended_version": "v1.9.1",
        "proposal": 172,
        "compatible_versions": [
          "v1.9.0",
          "v1.9.1"
        ],
        "binaries": {
          "linux/amd64": "https://github.com/Gravity-Bridge/Gravity-Bridge/releases/download/v1.9.1/gravity-linux-amd64"
        },
        "next_version_name": "antares"
      },
      {
        "name": "antares",
        "height": 7440250,
        "recommended_version": "v1.10.2",
        "proposal": 183,
        "compatible_versions": [
          "v1.10.0",
          "v1.10.2"
        ],
        "binaries": {
          "linux/amd64": "https://github.com/Gravity-Bridge/Gravity-Bridge/releases/download/v1.10.2/gravity-linux-amd64"
        },
        "next_version_name": "apollo"
      },
      {
        "name": "apollo",
        "height": 9244100,
        "recommended_version": "v1.11.1",
        "proposal": 212,
        "compatible_versions": [
          "v1.11.1"
        ],
        "binaries": {
          "linux/amd64": "https://github.com/Gravity-Bridge/Gravity-Bridge/releases/download/v1.11.1/gravity-linux-amd64"
        },
        "next_version_name": ""
      }
    ]
  },
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg"
  },
  "description": "An open, decentralized bridge that unlocks the power of interoperability & liquidity between blockchain ecosystems.",
  "peers": {
    "seeds": [
      {
        "id": "2b089bfb4c7366efb402b48376a7209632380c9c",
        "address": "65.19.136.133:26656",
        "provider": "althea"
      },
      {
        "id": "63e662f5e048d4902c7c7126291cf1fc17687e3c",
        "address": "95.211.103.175:26656",
        "provider": "amhost"
      },
      {
        "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
        "address": "seeds.polkachu.com:14256",
        "provider": "Polkachu"
      },
      {
        "id": "20e1000e88125698264454a884812746c2eb4807",
        "address": "seeds.lavenderfive.com:14256",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "id": "86bd5cb6e762f673f1706e5889e039d5406b4b90",
        "address": "gravity.seed.node75.org:10556",
        "provider": "Pro-Nodes"
      },
      {
        "id": "4e595d6781b122b2aea91b08da0ad97f708bf52a",
        "address": "seed-gravity-bridge-01.stakeflow.io:1306",
        "provider": "Stakeflow"
      },
      {
        "id": "9f4ed62cd0b60d7c4bdbdce5db5794211707528b",
        "address": "seed-gravity.ibs.team:16661",
        "provider": "Inter Blockchain Services"
      },
      {
        "id": "8542cd7e6bf9d260fef543bc49e59be5a3fa9074",
        "address": "seed.publicnode.com:26656",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      }
    ],
    "persistent_peers": [
      {
        "id": "b9180ddd3329ddaea74fe6fbdc729506b90f313b",
        "address": "gravity.ramuchi.tech:36656",
        "provider": "ramuchi.tech"
      },
      {
        "id": "4e595d6781b122b2aea91b08da0ad97f708bf52a",
        "address": "peer-gravity-bridge-01.stakeflow.io:1306",
        "provider": "Stakeflow"
      },
      {
        "id": "64a8bf0acf5385086409c1e1cc3cc9b9e5645243",
        "address": "65.21.91.99:26776",
        "provider": "Staketab"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://gravitychain.io:26657",
        "provider": "althea"
      },
      {
        "address": "http://gravity-bridge-1-08.nodes.amhost.net:26657",
        "provider": "amhost"
      },
      {
        "address": "https://gravity-rpc.polkachu.com",
        "provider": "Polkachu"
      },
      {
        "address": "https://rpc-gravitybridge-ia.cosmosia.notional.ventures/",
        "provider": "Notional"
      },
      {
        "address": "https://gravitybridge-rpc.lavenderfive.com/",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://rpc.gravity.bh.rocks/",
        "provider": "BlockHunters 🎯"
      },
      {
        "address": "https://gravity-rpc.ibs.team",
        "provider": "Inter Blockchain Services"
      },
      {
        "address": "https://gravity-rpc.ramuchi.tech",
        "provider": "ramuchi.tech"
      },
      {
        "address": "https://rpc-gravity-bridge-01.stakeflow.io",
        "provider": "Stakeflow"
      },
      {
        "address": "https://gravity-rpc.staketab.org:443",
        "provider": "Staketab"
      },
      {
        "address": "https://gravity-rpc.w3coins.io",
        "provider": "w3coins"
      },
      {
        "address": "https://rpc.g-bridge.bronbro.io:443",
        "provider": "Bro_n_Bro"
      }
    ],
    "rest": [
      {
        "address": "https://gravitychain.io:1317",
        "provider": "althea"
      },
      {
        "address": "https://api-gravitybridge-ia.cosmosia.notional.ventures/",
        "provider": "Notional"
      },
      {
        "address": "https://gravity-api.polkachu.com",
        "provider": "Polkachu"
      },
      {
        "address": "https://gravitybridge-api.lavenderfive.com/",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://api.gravity.bh.rocks/",
        "provider": "BlockHunters 🎯"
      },
      {
        "address": "https://gravity-api.ibs.team",
        "provider": "Inter Blockchain Services"
      },
      {
        "address": "https://gravity-api.ramuchi.tech",
        "provider": "ramuchi.tech"
      },
      {
        "address": "https://api-gravity-bridge-01.stakeflow.io",
        "provider": "Stakeflow"
      },
      {
        "address": "https://gravity-rest.staketab.org",
        "provider": "Staketab"
      },
      {
        "address": "https://gravity-api.w3coins.io",
        "provider": "w3coins"
      },
      {
        "address": "https://lcd.g-bridge.bronbro.io:443",
        "provider": "Bro_n_Bro"
      }
    ],
    "grpc": [
      {
        "address": "gravity-bridge-1-08.nodes.amhost.net:9090",
        "provider": "amhost"
      },
      {
        "address": "grpc-gravitybridge-ia.cosmosia.notional.ventures:443",
        "provider": "Notional"
      },
      {
        "address": "gravity-grpc.polkachu.com:14290",
        "provider": "Polkachu"
      },
      {
        "address": "gravitybridge-grpc.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://gravity-grpc.ramuchi.tech:10090",
        "provider": "ramuchi.tech"
      },
      {
        "address": "grpc-gravity-bridge-01.stakeflow.io:1302",
        "provider": "Stakeflow"
      },
      {
        "address": "services.staketab.com:9017",
        "provider": "Staketab"
      },
      {
        "address": "gravity-grpc.w3coins.io:14290",
        "provider": "w3coins"
      },
      {
        "address": "https://grpc.g-bridge.bronbro.io:443",
        "provider": "Bro_n_Bro"
      }
    ]
  },
  "explorers": [
    {
      "kind": "ezstaking",
      "url": "https://ezstaking.app/gravitybridge",
      "tx_page": "https://ezstaking.app/gravitybridge/txs/${txHash}",
      "account_page": "https://ezstaking.app/gravitybridge/account/${accountAddress}"
    },
    {
      "kind": "mintscan",
      "url": "https://www.mintscan.io/gravity-bridge",
      "tx_page": "https://www.mintscan.io/gravity-bridge/transactions/${txHash}",
      "account_page": "https://www.mintscan.io/gravity-bridge/accounts/${accountAddress}"
    },
    {
      "kind": "ping.pub",
      "url": "https://ping.pub/gravity-bridge",
      "tx_page": "https://ping.pub/gravity-bridge/tx/${txHash}"
    },
    {
      "kind": "explorers.guru",
      "url": "https://gravity.explorers.guru",
      "tx_page": "https://gravity.explorers.guru/transaction/${txHash}"
    },
    {
      "kind": "atomscan",
      "url": "https://atomscan.com/gravity-bridge",
      "tx_page": "https://atomscan.com/gravity-bridge/transactions/${txHash}",
      "account_page": "https://atomscan.com/gravity-bridge/accounts/${accountAddress}"
    },
    {
      "kind": "TC Network",
      "url": "https://explorer.tcnetwork.io/gravitybridge",
      "tx_page": "https://explorer.tcnetwork.io/gravitybridge/transaction/${txHash}"
    },
    {
      "kind": "Stakeflow",
      "url": "https://stakeflow.io/gravity-bridge",
      "account_page": "https://stakeflow.io/gravity-bridge/accounts/${accountAddress}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg"
    }
  ]
}

export const gravitybridgeAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "gravitybridge",
  "assets": [
    {
      "description": "The native token of Gravity Bridge",
      "denom_units": [
        {
          "denom": "ugraviton",
          "exponent": 0
        },
        {
          "denom": "graviton",
          "exponent": 6
        }
      ],
      "base": "ugraviton",
      "name": "Graviton",
      "display": "graviton",
      "symbol": "GRAV",
      "coingecko_id": "graviton",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg"
        }
      ],
      "socials": {
        "webiste": "https://www.gravitybridge.net/",
        "twitter": "https://twitter.com/gravity_bridge"
      }
    },
    {
      "description": "pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets.",
      "denom_units": [
        {
          "denom": "gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006",
          "exponent": 0
        },
        {
          "denom": "pstake",
          "exponent": 18
        }
      ],
      "base": "gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006",
      "name": "pSTAKE Finance",
      "display": "pstake",
      "symbol": "PSTAKE",
      "traces": [
        {
          "type": "liquid-stake",
          "counterparty": {
            "chain_name": "persistence",
            "base_denom": "uxprt"
          },
          "provider": "Persistence"
        },
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006"
          },
          "provider": "Gravity Bridge"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "ethereum",
            "base_denom": "0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg"
        }
      ]
    },
    {
      "description": "Gravity Bridge WETH",
      "denom_units": [
        {
          "denom": "gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          "exponent": 0
        },
        {
          "denom": "gweth",
          "exponent": 18
        }
      ],
      "base": "gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      "name": "Wrapped Ethereum",
      "display": "gweth",
      "symbol": "WETH",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg"
      },
      "traces": [
        {
          "type": "wrapped",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "wei"
          },
          "provider": "Ethereum"
        },
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
          },
          "provider": "Gravity Bridge"
        }
      ],
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg"
        }
      ]
    },
    {
      "description": "Gravity Bridge USDC",
      "denom_units": [
        {
          "denom": "gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "exponent": 0
        },
        {
          "denom": "gusdc",
          "exponent": 6
        }
      ],
      "base": "gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      "name": "USD Coin",
      "display": "gusdc",
      "symbol": "USDC",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg"
      },
      "traces": [
        {
          "type": "synthetic",
          "counterparty": {
            "chain_name": "forex",
            "base_denom": "USD"
          },
          "provider": "Circle"
        },
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
          },
          "provider": "Gravity Bridge"
        }
      ],
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg"
        }
      ]
    },
    {
      "description": "Gravity Bridge USDT",
      "denom_units": [
        {
          "denom": "gravity0xdAC17F958D2ee523a2206206994597C13D831ec7",
          "exponent": 0
        },
        {
          "denom": "gusdt",
          "exponent": 6
        }
      ],
      "base": "gravity0xdAC17F958D2ee523a2206206994597C13D831ec7",
      "name": "Tether USD",
      "display": "gusdt",
      "symbol": "USDT",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg"
      },
      "traces": [
        {
          "type": "synthetic",
          "counterparty": {
            "chain_name": "forex",
            "base_denom": "USD"
          },
          "provider": "Tether"
        },
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0xdac17f958d2ee523a2206206994597c13d831ec7"
          },
          "provider": "Gravity Bridge"
        }
      ],
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg"
        }
      ]
    },
    {
      "description": "Gravity Bridge WBTC",
      "denom_units": [
        {
          "denom": "gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
          "exponent": 0
        },
        {
          "denom": "gwbtc",
          "exponent": 8
        }
      ],
      "base": "gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
      "name": "Wrapped Bitcoin",
      "display": "gwbtc",
      "symbol": "WBTC",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg"
      },
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "bitcoin",
            "base_denom": "sat"
          },
          "provider": "BitGo, Kyber, and Ren"
        },
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"
          },
          "provider": "Gravity Bridge"
        }
      ],
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg"
        }
      ]
    },
    {
      "description": "Gravity Bridge DAI",
      "denom_units": [
        {
          "denom": "gravity0x6B175474E89094C44Da98b954EedeAC495271d0F",
          "exponent": 0
        },
        {
          "denom": "gdai",
          "exponent": 18
        }
      ],
      "base": "gravity0x6B175474E89094C44Da98b954EedeAC495271d0F",
      "name": "Dai Stablecoin",
      "display": "gdai",
      "symbol": "DAI",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg"
      },
      "traces": [
        {
          "type": "synthetic",
          "counterparty": {
            "chain_name": "forex",
            "base_denom": "USD"
          },
          "provider": "MakerDAO"
        },
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0x6b175474e89094c44da98b954eedeac495271d0f"
          },
          "provider": "Gravity Bridge"
        }
      ],
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg"
        }
      ]
    },
    {
      "description": "Gravity Bridge sDAI",
      "denom_units": [
        {
          "denom": "gravity0x83F20F44975D03b1b09e64809B757c47f942BEeA",
          "exponent": 0
        },
        {
          "denom": "gsdai",
          "exponent": 18
        }
      ],
      "base": "gravity0x83F20F44975D03b1b09e64809B757c47f942BEeA",
      "name": "Savings Dai",
      "display": "gsdai",
      "symbol": "sDAI",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sdai.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sdai.svg"
      },
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0x83F20F44975D03b1b09e64809B757c47f942BEeA"
          },
          "provider": "Gravity Bridge"
        }
      ],
      "images": [
        {
          "image_sync": {
            "base_denom": "ethereum",
            "chain_name": "0x83F20F44975D03b1b09e64809B757c47f942BEeA"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sdai.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sdai.svg"
        }
      ]
    },
    {
      "description": "Gravity Bridge OCC",
      "denom_units": [
        {
          "denom": "gravity0x2F109021aFe75B949429fe30523Ee7C0D5B27207",
          "exponent": 0
        },
        {
          "denom": "gocc",
          "exponent": 18
        }
      ],
      "base": "gravity0x2F109021aFe75B949429fe30523Ee7C0D5B27207",
      "name": "OccamFi",
      "display": "gocc",
      "symbol": "OCC",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/occamfi.png"
      },
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0x2F109021aFe75B949429fe30523Ee7C0D5B27207"
          },
          "provider": "Gravity Bridge"
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "ethereum",
            "base_denom": "0x2F109021aFe75B949429fe30523Ee7C0D5B27207"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/occamfi.png"
        }
      ]
    },
    {
      "description": "The PAGE token is used for actions in the PageDAO NFT literary ecosystem and for DAO governance.",
      "denom_units": [
        {
          "denom": "gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e",
          "exponent": 0
        },
        {
          "denom": "page",
          "exponent": 8
        }
      ],
      "base": "gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e",
      "name": "Page",
      "display": "page",
      "symbol": "PAGE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg"
      },
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e"
          },
          "provider": "Gravity Bridge"
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "ethereum",
            "base_denom": "0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg"
        }
      ]
    }
  ]
}

