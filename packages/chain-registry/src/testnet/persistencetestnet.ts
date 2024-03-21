import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const persistencetestnet: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "persistencetestnet",
  "chain_id": "test-core-1",
  "pretty_name": "Persistence Testnet",
  "status": "live",
  "network_type": "testnet",
  "website": "https://persistence.one/",
  "bech32_prefix": "persistence",
  "daemon_name": "persistenceCore",
  "node_home": "$HOME/.persistenceCore",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "uxprt",
        "fixed_min_gas_price": 0,
        "low_gas_price": 0.05,
        "average_gas_price": 0.125,
        "high_gas_price": 0.2
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "uxprt"
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/persistenceOne/persistenceCore",
    "recommended_version": "v6.0.0-rc5",
    "compatible_versions": [
      "v6.0.0-rc5"
    ],
    "binaries": {
      "linux/amd64": "https://github.com/persistenceOne/persistenceCore/archive/refs/tags/v6.0.0-rc5.tar.gz"
    },
    "genesis": {
      "genesis_url": "https://raw.githubusercontent.com/persistenceOne/genesisTransactions/master/test-core-1/final_genesis.json"
    },
    "versions": [
      {
        "name": "v6.0.0-rc5",
        "recommended_version": "v6.0.0-rc5",
        "compatible_versions": [
          "v6.0.0-rc5"
        ],
        "binaries": {
          "linux/amd64": "https://github.com/persistenceOne/persistenceCore/archive/refs/tags/v6.0.0-rc5.tar.gz"
        }
      }
    ]
  },
  "peers": {
    "seeds": [
      {
        "id": "5c2a752c9b1952dbed075c56c600c3a79b58c395",
        "address": "persistence.testnet.seed.autostake.net:26896",
        "provider": "Auto Stake"
      },
      {
        "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
        "address": "testnet-seeds.polkachu.com:15456",
        "provider": "AutoStake"
      }
    ],
    "persistent_peers": [
      {
        "id": "5c2a752c9b1952dbed075c56c600c3a79b58c395",
        "address": "persistence.testnet.peer.autostake.net:26896",
        "provider": "AutoStake"
      },
      {
        "id": "14ecdc5126ea8d93c7d3a863d9d38e380e46fc06",
        "address": "185.225.233.30:26656",
        "provider": "Cosmonaut Stakes"
      },
      {
        "id": "987c7cd05003194334f55ed5cbcc0fe8cd9df021",
        "address": "65.108.233.109:15456",
        "provider": "Polkachu"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc-testnet-persistence.architectnodes.com/",
        "provider": "Architect Nodes"
      },
      {
        "address": "https://persistence-testnet-rpc.baryon.dev/",
        "provider": "Baryon"
      },
      {
        "address": "https://persistence-testnet-rpc.cosmonautstakes.com/",
        "provider": "Cosmonaut Stakes"
      },
      {
        "address": "https://rpc.testnet.persistence.one/",
        "provider": "Persistence"
      },
      {
        "address": "https://persistence-testnet-rpc.polkachu.com/",
        "provider": "Polkachu"
      }
    ],
    "rest": [
      {
        "address": "https://rest-testnet-persistence.architectnodes.com/",
        "provider": "Architect Nodes"
      },
      {
        "address": "https://persistence-testnet-api.baryon.dev/",
        "provider": "Baryon"
      },
      {
        "address": "https://persistence-testnet-rest.cosmonautstakes.com/",
        "provider": "Cosmonaut Stakes"
      },
      {
        "address": "https://rest.testnet.persistence.one/",
        "provider": "Persistence"
      },
      {
        "address": "https://persistence-testnet-api.polkachu.com/",
        "provider": "Polkachu"
      }
    ],
    "grpc": [
      {
        "address": "persistence-testnet-grpc.polkachu.com:15490",
        "provider": "Polkachu"
      }
    ]
  },
  "explorers": [
    {
      "kind": "ping.pub",
      "url": "https://testnet.ping.pub/test-core-1/",
      "tx_page": "https://testnet.ping.pub/test-core-1/tx/${txHash}"
    },
    {
      "kind": "mintscan",
      "url": "https://testnet.mintscan.io/persistence-testnet",
      "tx_page": "https://testnet.mintscan.io/persistence-testnet/txs/${txHash}",
      "account_page": "https://testnet.mintscan.io/persistence-testnet/account/${accountAddress}"
    }
  ]
}


export const persistencetestnetAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "persistencetestnet",
  "assets": [
    {
      "description": "The XPRT token is primarily a governance token for the Persistence chain.",
      "denom_units": [
        {
          "denom": "uxprt",
          "exponent": 0
        },
        {
          "denom": "xprt",
          "exponent": 6
        }
      ],
      "base": "uxprt",
      "name": "Persistence",
      "display": "xprt",
      "symbol": "XPRT",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg"
      },
      "coingecko_id": "persistence",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg"
        }
      ]
    },
    {
      "description": "PSTAKE Liquid-Staked ATOM",
      "denom_units": [
        {
          "denom": "stk/uatom",
          "exponent": 0,
          "aliases": []
        },
        {
          "denom": "stkatom",
          "exponent": 6,
          "aliases": [
            "stk/atom"
          ]
        }
      ],
      "base": "stk/uatom",
      "name": "PSTAKE staked ATOM",
      "display": "stkatom",
      "symbol": "stkATOM",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg"
        }
      ]
    }
  ]
}

