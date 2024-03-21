import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const kava: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "kava",
  "status": "live",
  "network_type": "mainnet",
  "website": "https://www.kava.io/",
  "pretty_name": "Kava",
  "chain_id": "kava_2222-10",
  "bech32_prefix": "kava",
  "daemon_name": "kava",
  "node_home": "$HOME/.kava",
  "slip44": 459,
  "alternative_slip44s": [
    118
  ],
  "fees": {
    "fee_tokens": [
      {
        "denom": "ukava",
        "low_gas_price": 0.05,
        "average_gas_price": 0.1,
        "high_gas_price": 0.25
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "ukava"
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/kava-Labs/kava/",
    "recommended_version": "v0.21.0",
    "compatible_versions": [
      "v0.21.0"
    ],
    "genesis": {
      "genesis_url": "https://kava-genesis-files.s3.us-east-1.amazonaws.com/kava_2222-10/genesis.json"
    },
    "versions": [
      {
        "name": "v0.21.0",
        "recommended_version": "v0.21.0",
        "compatible_versions": [
          "v0.21.0"
        ]
      }
    ]
  },
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg"
  },
  "description": "Kava is a decentralized blockchain that combines the speed and interoperability of Cosmos with the developer power of Ethereum.",
  "peers": {
    "seeds": [
      {
        "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
        "address": "seeds.polkachu.com:13956",
        "provider": "Polkachu"
      },
      {
        "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
        "address": "kava-mainnet-seed.autostake.com:26656",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "id": "7ab4b78fbe5ee9e3777b21464a3162bd4cc17f57",
        "address": "seed-kava-01.stakeflow.io:1206",
        "provider": "Stakeflow"
      },
      {
        "id": "8542cd7e6bf9d260fef543bc49e59be5a3fa9074",
        "address": "seed.publicnode.com:26656",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "id": "10ed1e176d874c8bb3c7c065685d2da6a4b86475",
        "address": "seed-kava.ibs.team:16677",
        "provider": "Inter Blockchain Services"
      }
    ],
    "persistent_peers": [
      {
        "id": "8b5c4a890c8ae7efbbe3360af71be1c3c3a9e12e",
        "address": "121.78.241.68:46656"
      },
      {
        "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
        "address": "kava-mainnet-peer.autostake.com:26656",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "id": "7ab4b78fbe5ee9e3777b21464a3162bd4cc17f57",
        "address": "peer-kava-01.stakeflow.io:1206",
        "provider": "Stakeflow"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc.data.kava.io",
        "provider": "kava"
      },
      {
        "address": "https://kava-rpc.polkachu.com",
        "provider": "Polkachu"
      },
      {
        "address": "https://rpc-kava-ia.cosmosia.notional.ventures/",
        "provider": "Notional"
      },
      {
        "address": "https://kava-mainnet-rpc.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "https://kava-rpc.ibs.team",
        "provider": "Inter Blockchain Services"
      },
      {
        "address": "https://rpc-kava-01.stakeflow.io",
        "provider": "Stakeflow"
      },
      {
        "address": "https://kava-rpc.publicnode.com:443",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      }
    ],
    "rest": [
      {
        "address": "https://api.data.kava.io/",
        "provider": "kava"
      },
      {
        "address": "https://api-kava-ia.cosmosia.notional.ventures/",
        "provider": "Notional"
      },
      {
        "address": "https://kava-api.polkachu.com",
        "provider": "Polkachu"
      },
      {
        "address": "https://kava-mainnet-lcd.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "https://kava-api.ibs.team",
        "provider": "Inter Blockchain Services"
      },
      {
        "address": "https://api-kava-01.stakeflow.io",
        "provider": "Stakeflow"
      },
      {
        "address": "https://kava-rest.publicnode.com",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      }
    ],
    "grpc": [
      {
        "address": "grpc.data.kava.io:443",
        "provider": "kava"
      },
      {
        "address": "grpc-kava-ia.cosmosia.notional.ventures:443",
        "provider": "Notional"
      },
      {
        "address": "kava-grpc.polkachu.com:13990",
        "provider": "Polkachu"
      },
      {
        "address": "kava-mainnet-grpc.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "grpc-kava-01.stakeflow.io:1202",
        "provider": "Stakeflow"
      },
      {
        "address": "kava-grpc.publicnode.com:443",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      }
    ],
    "evm-http-jsonrpc": [
      {
        "address": "https://evm.kava.io/",
        "provider": "kava"
      },
      {
        "address": "https://kava-evm.publicnode.com",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "address": "https://kava.api.onfinality.io/public",
        "provider": "OnFinality"
      }
    ]
  },
  "explorers": [
    {
      "kind": "mintscan",
      "url": "https://www.mintscan.io/kava",
      "tx_page": "https://www.mintscan.io/kava/transactions/${txHash}",
      "account_page": "https://www.mintscan.io/kava/accounts/${accountAddress}"
    },
    {
      "kind": "ezstaking",
      "url": "https://ezstaking.app/kava",
      "tx_page": "https://ezstaking.app/kava/txs/${txHash}",
      "account_page": "https://ezstaking.app/kava/account/${accountAddress}"
    },
    {
      "kind": "ping.pub",
      "url": "https://ping.pub/kava",
      "tx_page": "https://ping.pub/kava/tx/${txHash}"
    },
    {
      "kind": "atomscan",
      "url": "https://atomscan.com/kava",
      "tx_page": "https://atomscan.com/kava/transactions/${txHash}",
      "account_page": "https://atomscan.com/kava/accounts/${accountAddress}"
    },
    {
      "kind": "Stakeflow",
      "url": "https://stakeflow.io/kava",
      "account_page": "https://stakeflow.io/kava/accounts/${accountAddress}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg"
    }
  ]
}

export const kavaAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "kava",
  "assets": [
    {
      "description": "The native staking and governance token of Kava",
      "denom_units": [
        {
          "denom": "ukava",
          "exponent": 0
        },
        {
          "denom": "kava",
          "exponent": 6
        }
      ],
      "base": "ukava",
      "name": "Kava",
      "display": "kava",
      "symbol": "KAVA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg"
      },
      "coingecko_id": "kava",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg"
        }
      ],
      "socials": {
        "webiste": "https://www.kava.io/",
        "twitter": "https://twitter.com/KAVA_CHAIN"
      }
    },
    {
      "description": "Governance token of Kava Lend Protocol",
      "denom_units": [
        {
          "denom": "hard",
          "exponent": 0
        },
        {
          "denom": "HARD",
          "exponent": 6
        }
      ],
      "base": "hard",
      "name": "Kava Hard",
      "display": "HARD",
      "symbol": "HARD",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg"
      },
      "coingecko_id": "kava-lend",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg"
        }
      ]
    },
    {
      "description": "Governance token of Kava Swap Protocol",
      "denom_units": [
        {
          "denom": "swp",
          "exponent": 0
        },
        {
          "denom": "SWP",
          "exponent": 6
        }
      ],
      "base": "swp",
      "name": "Kava Swap",
      "display": "SWP",
      "symbol": "SWP",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg"
      },
      "coingecko_id": "kava-swap",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg"
        }
      ]
    },
    {
      "description": "The native stablecoin of Kava",
      "denom_units": [
        {
          "denom": "usdx",
          "exponent": 0
        },
        {
          "denom": "USDX",
          "exponent": 6
        }
      ],
      "base": "usdx",
      "name": "Kava USDX",
      "display": "USDX",
      "symbol": "USDX",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg"
      },
      "coingecko_id": "usdx",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "erc20/tether/usdt",
          "exponent": 0
        },
        {
          "denom": "usdt",
          "exponent": 6
        }
      ],
      "base": "erc20/tether/usdt",
      "name": "Tether USD",
      "display": "usdt",
      "symbol": "USDT",
      "coingecko_id": "tether",
      "traces": [
        {
          "type": "additional-mintage",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0xdac17f958d2ee523a2206206994597c13d831ec7"
          },
          "provider": "Tether"
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "ethereum",
            "base_denom": "0xdac17f958d2ee523a2206206994597c13d831ec7"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg"
      }
    }
  ]
}

