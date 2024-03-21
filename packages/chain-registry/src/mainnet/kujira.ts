import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const kujira: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "kujira",
  "chain_id": "kaiyo-1",
  "pretty_name": "Kujira",
  "status": "live",
  "network_type": "mainnet",
  "website": "https://kujira.app/",
  "bech32_prefix": "kujira",
  "daemon_name": "kujirad",
  "node_home": "$HOME/.kujira",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "ukuji",
        "fixed_min_gas_price": 0.0034,
        "low_gas_price": 0.0034,
        "average_gas_price": 0.0051,
        "high_gas_price": 0.00681
      },
      {
        "denom": "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
        "fixed_min_gas_price": 0.01186,
        "low_gas_price": 0.01186,
        "average_gas_price": 0.01779,
        "high_gas_price": 0.02372
      },
      {
        "denom": "ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F",
        "fixed_min_gas_price": 0.0119,
        "low_gas_price": 0.0119,
        "average_gas_price": 0.01785,
        "high_gas_price": 0.02379
      },
      {
        "denom": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
        "fixed_min_gas_price": 0.00129,
        "low_gas_price": 0.00129,
        "average_gas_price": 0.00193,
        "high_gas_price": 0.00258
      },
      {
        "denom": "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23",
        "fixed_min_gas_price": 0.01795,
        "low_gas_price": 0.01795,
        "average_gas_price": 0.02692,
        "high_gas_price": 0.0359
      },
      {
        "denom": "ibc/3607EB5B5E64DD1C0E12E07F077FF470D5BC4706AFCBC98FE1BA960E5AE4CE07",
        "fixed_min_gas_price": 0.65943,
        "low_gas_price": 0.65943,
        "average_gas_price": 0.98915,
        "high_gas_price": 1.31887
      },
      {
        "denom": "ibc/F3AA7EF362EC5E791FE78A0F4CCC69FEE1F9A7485EB1A8CAB3F6601C00522F10",
        "fixed_min_gas_price": 160416396197,
        "low_gas_price": 160416396197,
        "average_gas_price": 240624594296,
        "high_gas_price": 320832792394
      },
      {
        "denom": "ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5",
        "fixed_min_gas_price": 0.02689,
        "low_gas_price": 0.02689,
        "average_gas_price": 0.04034,
        "high_gas_price": 0.05379
      },
      {
        "denom": "ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986",
        "fixed_min_gas_price": 0.01495,
        "low_gas_price": 0.01495,
        "average_gas_price": 0.02243,
        "high_gas_price": 0.02991
      },
      {
        "denom": "ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5",
        "fixed_min_gas_price": 0.03139,
        "low_gas_price": 0.03139,
        "average_gas_price": 0.04709,
        "high_gas_price": 0.06278
      },
      {
        "denom": "ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602",
        "fixed_min_gas_price": 0.90403,
        "low_gas_price": 0.90403,
        "average_gas_price": 1.35605,
        "high_gas_price": 1.80806
      },
      {
        "denom": "ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2",
        "fixed_min_gas_price": 559196837,
        "low_gas_price": 559196837,
        "average_gas_price": 838795256,
        "high_gas_price": 1118393675
      },
      {
        "denom": "ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7",
        "fixed_min_gas_price": 5772801,
        "low_gas_price": 5772801,
        "average_gas_price": 8659201,
        "high_gas_price": 11545602
      },
      {
        "denom": "factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta",
        "fixed_min_gas_price": 0.01807,
        "low_gas_price": 0.01807,
        "average_gas_price": 0.02711,
        "high_gas_price": 0.03615
      },
      {
        "denom": "ibc/FE98AAD68F02F03565E9FA39A5E627946699B2B07115889ED812D8BA639576A9",
        "fixed_min_gas_price": 0.01194,
        "low_gas_price": 0.01194,
        "average_gas_price": 0.01792,
        "high_gas_price": 0.02389
      },
      {
        "denom": "ibc/E5CA126979E2FFB4C70C072F8094D07ECF27773B37623AD2BF7582AD0726F0F3",
        "fixed_min_gas_price": 0.00019,
        "low_gas_price": 0.00019,
        "average_gas_price": 0.00029,
        "high_gas_price": 0.00039
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "ukuji"
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/Team-Kujira/core",
    "recommended_version": "v0.9.3-1",
    "compatible_versions": [
      "v0.9.3-1"
    ],
    "cosmos_sdk_version": "v0.47.5",
    "consensus": {
      "type": "cometbft",
      "version": "v0.37.2"
    },
    "cosmwasm_version": "v0.45.0",
    "cosmwasm_enabled": true,
    "ics_enabled": [
      "ics20-1"
    ],
    "genesis": {
      "genesis_url": "https://github.com/Team-Kujira/networks/raw/master/mainnet/kaiyo-1.json"
    },
    "versions": [
      {
        "name": "v0.8.4",
        "tag": "v0.8.4",
        "height": 9226200,
        "proposal": 302,
        "recommended_version": "v0.8.4-mainnet",
        "compatible_versions": [
          "v0.8.4",
          "v0.8.4-mainnet"
        ],
        "cosmos_sdk_version": "0.46.11",
        "consensus": {
          "type": "cometbft",
          "version": "v0.34.27"
        },
        "ics_enabled": [
          "ics20-1"
        ],
        "next_version_name": "v0.8.7"
      },
      {
        "name": "v0.8.7",
        "proposal": -1,
        "recommended_version": "v0.8.7",
        "compatible_versions": [
          "v0.8.7"
        ],
        "next_version_name": "v0.9.0"
      },
      {
        "name": "v0.9.0",
        "proposal": 483,
        "height": 14783000,
        "recommended_version": "v0.9.0",
        "compatible_versions": [
          "v0.9.0"
        ],
        "cosmos_sdk_version": "v0.47.5",
        "consensus": {
          "type": "cometbft",
          "version": "v0.37.2"
        },
        "next_version_name": "v0.9.1"
      },
      {
        "name": "v0.9.1",
        "proposal": 488,
        "height": 15205000,
        "recommended_version": "v0.9.1-1",
        "compatible_versions": [
          "v0.9.1-1"
        ],
        "cosmos_sdk_version": "v0.47.5",
        "consensus": {
          "type": "cometbft",
          "version": "v0.37.2"
        },
        "next_version_name": "v0.9.3"
      },
      {
        "name": "v0.9.3",
        "proposal": 534,
        "height": 16610000,
        "recommended_version": "v0.9.3-1",
        "compatible_versions": [
          "v0.9.3-1"
        ],
        "cosmos_sdk_version": "v0.47.5",
        "consensus": {
          "type": "cometbft",
          "version": "v0.37.2"
        },
        "cosmwasm_version": "v0.45.0",
        "cosmwasm_enabled": true,
        "next_version_name": ""
      }
    ]
  },
  "description": "A decentralized ecosystem for protocols, builders and web3 users seeking sustainable FinTech.",
  "peers": {
    "seeds": [
      {
        "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
        "address": "seeds.polkachu.com:11856",
        "provider": "Polkachu"
      },
      {
        "id": "20e1000e88125698264454a884812746c2eb4807",
        "address": "seeds.lavenderfive.com:11856",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "id": "322abfd7c0bcdf8a3d98ccb46ae2572bae0e8301",
        "address": "seed-kujira.starsquid.io:15602",
        "provider": "Starsquid"
      },
      {
        "id": "824fa337b806bd48ce9505d74ba3e5adea80da93",
        "address": "seeds.goldenratiostaking.net:1628",
        "provider": "Golden Ratio Staking"
      },
      {
        "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
        "address": "kujira-mainnet-seed.autostake.com:26796",
        "provider": "AutoStake ⚡️ 0% fee"
      },
      {
        "id": "400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc",
        "address": "kujira.rpc.kjnodes.com:11359",
        "provider": "kjnodes"
      },
      {
        "id": "8542cd7e6bf9d260fef543bc49e59be5a3fa9074",
        "address": "seed.publicnode.com:26656",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "id": "c28827cb96c14c905b127b92065a3fb4cd77d7f6",
        "address": "seeds.whispernode.com:11856",
        "provider": "WhisperNode 🤐"
      },
      {
        "id": "654ba97f74254965a80c0fac0f277f6f6e5506b6",
        "address": "seed-node.mms.team:29656",
        "provider": "MMS"
      },
      {
        "id": "10ed1e176d874c8bb3c7c065685d2da6a4b86475",
        "address": "seed-kujira.ibs.team:16678",
        "provider": "Inter Blockchain Services"
      }
    ],
    "persistent_peers": [
      {
        "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
        "address": "kujira-mainnet-peer.autostake.com:26796",
        "provider": "AutoStake ⚡️ 0% fee"
      },
      {
        "id": "c1a740841a6dc0b56730e975b1a4aa2d8c73b204",
        "address": "peer-kujira.mms.team:29656",
        "provider": "MMS"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc-kujira.whispernode.com:443",
        "provider": "WhisperNode 🤐"
      },
      {
        "address": "https://rpc.kaiyo.kujira.setten.io",
        "provider": "setten.io"
      },
      {
        "address": "https://kujira-rpc.polkachu.com",
        "provider": "polkachu"
      },
      {
        "address": "https://rpc-kujira.ecostake.com",
        "provider": "ecostake"
      },
      {
        "address": "https://kujira-rpc.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://rpc.kujira.chaintools.tech/",
        "provider": "ChainTools"
      },
      {
        "address": "https://rpc-kujira-ia.cosmosia.notional.ventures/",
        "provider": "Notional"
      },
      {
        "address": "https://kujira-rpc.ibs.team/",
        "provider": "Inter Blockchain Services"
      },
      {
        "address": "https://rpc-kujira.starsquid.io",
        "provider": "Starsquid"
      },
      {
        "address": "https://kujira.rpc.kjnodes.com",
        "provider": "kjnodes"
      },
      {
        "address": "https://kuji-rpc.kleomedes.network",
        "provider": "Kleomedes"
      },
      {
        "address": "https://rpc-kujira.goldenratiostaking.net",
        "provider": "Golden Ratio Staking"
      },
      {
        "address": "https://kujira-mainnet-rpc.autostake.com:443",
        "provider": "AutoStake ⚡️ 0% fee"
      },
      {
        "address": "https://rpc.kujira.rektdao.club",
        "provider": "rektDAO"
      },
      {
        "address": "https://kujira-rpc.theamsolutions.info",
        "provider": "AM Solutions"
      },
      {
        "address": "https://kujira-rpc.w3coins.io",
        "provider": "w3coins"
      },
      {
        "address": "https://rpc-kujira.mms.team",
        "provider": "MMS"
      },
      {
        "address": "https://kujira-rpc.publicnode.com:443",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "address": "https://kujira.interstellar-lounge.org",
        "provider": "Interstellar Lounge 🍸"
      }
    ],
    "rest": [
      {
        "address": "https://lcd-kujira.whispernode.com:443",
        "provider": "WhisperNode 🤐"
      },
      {
        "address": "https://lcd.kaiyo.kujira.setten.io",
        "provider": "setten.io"
      },
      {
        "address": "https://kujira-api.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://kujira-api.polkachu.com/",
        "provider": "polkachu"
      },
      {
        "address": "https://rest-kujira.ecostake.com",
        "provider": "ecostake"
      },
      {
        "address": "https://api-kujira-ia.cosmosia.notional.ventures/",
        "provider": "Notional"
      },
      {
        "address": "https://kujira-lcd.wildsage.io/",
        "provider": "WildSage Labs"
      },
      {
        "address": "https://kujira-api.ibs.team/",
        "provider": "Inter Blockchain Services"
      },
      {
        "address": "https://api-kujira.starsquid.io",
        "provider": "Starsquid"
      },
      {
        "address": "https://kujira.api.kjnodes.com",
        "provider": "kjnodes"
      },
      {
        "address": "https://kuji-api.kleomedes.network",
        "provider": "Kleomedes"
      },
      {
        "address": "https://kujira-mainnet-lcd.autostake.com:443",
        "provider": "AutoStake ⚡️ 0% fee"
      },
      {
        "address": "https://api.kujira.rektdao.club",
        "provider": "rektDAO"
      },
      {
        "address": "https://kujira-api.theamsolutions.info",
        "provider": "AM Solutions"
      },
      {
        "address": "https://kujira-api.w3coins.io",
        "provider": "w3coins"
      },
      {
        "address": "https://api-kujira.mms.team",
        "provider": "MMS"
      },
      {
        "address": "https://kujira-rest.publicnode.com",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "address": "https://kujira-rest.interstellar-lounge.org",
        "provider": "Interstellar Lounge 🍸"
      }
    ],
    "grpc": [
      {
        "address": "kujira.grpcui.chaintools.host:443",
        "provider": "ChainTools"
      },
      {
        "address": "grpc-kujira-ia.cosmosia.notional.ventures:443",
        "provider": "Notional"
      },
      {
        "address": "kujira-grpc.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "kujira-grpc.polkachu.com:11890",
        "provider": "Polkachu"
      },
      {
        "address": "kujira-mainnet-grpc.autostake.com:443",
        "provider": "AutoStake ⚡️ 0% fee"
      },
      {
        "address": "kujira.grpc.kjnodes.com:11390",
        "provider": "kjnodes"
      },
      {
        "address": "kujira-grpc.w3coins.io:11890",
        "provider": "w3coins"
      },
      {
        "address": "grpc-kujira.mms.team:443",
        "provider": "MMS"
      },
      {
        "address": "kujira-grpc.publicnode.com:443",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "address": "grpc-kujira.whispernode.com:443",
        "provider": "WhisperNode 🤐"
      }
    ]
  },
  "explorers": [
    {
      "kind": "kujira",
      "url": "https://finder.kujira.app",
      "tx_page": "https://finder.kujira.app/kaiyo-1/tx/${txHash}"
    },
    {
      "kind": "explorers.guru",
      "url": "https://kujira.explorers.guru",
      "tx_page": "https://kujira.explorers.guru/transaction/${txHash}"
    },
    {
      "kind": "ezstaking",
      "url": "https://ezstaking.app/kujira",
      "tx_page": "https://ezstaking.app/kujira/txs/${txHash}",
      "account_page": "https://ezstaking.app/kujira/account/${accountAddress}"
    },
    {
      "kind": "atomscan",
      "url": "https://atomscan.com/kujira",
      "tx_page": "https://atomscan.com/kujira/transactions/${txHash}",
      "account_page": "https://atomscan.com/kujira/accounts/${accountAddress}"
    }
  ],
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kujira-chain-logo.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg"
  },
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kujira-chain-logo.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg"
    }
  ]
}

export const kujiraAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "kujira",
  "assets": [
    {
      "description": "The native staking and governance token of the Kujira chain.",
      "denom_units": [
        {
          "denom": "ukuji",
          "exponent": 0
        },
        {
          "denom": "kuji",
          "exponent": 6
        }
      ],
      "base": "ukuji",
      "name": "Kujira",
      "display": "kuji",
      "symbol": "KUJI",
      "coingecko_id": "kujira",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg"
        }
      ],
      "socials": {
        "webiste": "https://kujira.network/",
        "twitter": "https://twitter.com/TeamKujira"
      }
    },
    {
      "description": "The native over-collateralized stablecoin from the Kujira chain.",
      "denom_units": [
        {
          "denom": "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
          "exponent": 0
        },
        {
          "denom": "usk",
          "exponent": 6
        }
      ],
      "base": "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
      "name": "USK",
      "display": "usk",
      "symbol": "USK",
      "coingecko_id": "usk",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.svg"
        }
      ]
    },
    {
      "description": "Quark's auto-compounding KUJI derivative",
      "denom_units": [
        {
          "denom": "factory/kujira1m96ucsfpt2yy72w09z2rxjdj38y5qd8lqx5jtggnejmdua2ynpnsxyvjex/urcpt",
          "exponent": 0
        },
        {
          "denom": "qcKUJI",
          "exponent": 6
        }
      ],
      "base": "factory/kujira1m96ucsfpt2yy72w09z2rxjdj38y5qd8lqx5jtggnejmdua2ynpnsxyvjex/urcpt",
      "name": "qcKUJI",
      "display": "qcKUJI",
      "symbol": "qcKUJI",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qckuji.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qckuji.svg"
        }
      ]
    },
    {
      "description": "ampKUJI",
      "denom_units": [
        {
          "denom": "factory/kujira1n3fr5f56r2ce0s37wdvwrk98yhhq3unnxgcqus8nzsfxvllk0yxquurqty/ampKUJI",
          "exponent": 0
        },
        {
          "denom": "ampKUJI",
          "exponent": 6
        }
      ],
      "base": "factory/kujira1n3fr5f56r2ce0s37wdvwrk98yhhq3unnxgcqus8nzsfxvllk0yxquurqty/ampKUJI",
      "name": "ampKUJI",
      "display": "ampKUJI",
      "symbol": "ampKUJI",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampkuji.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampkuji.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampkuji.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampkuji.svg"
        }
      ]
    },
    {
      "description": "MantaDAO Governance Token",
      "denom_units": [
        {
          "denom": "factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta",
          "exponent": 0
        },
        {
          "denom": "mnta",
          "exponent": 6
        }
      ],
      "base": "factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta",
      "name": "MantaDAO",
      "display": "mnta",
      "symbol": "MNTA",
      "coingecko_id": "mantadao",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.svg"
        }
      ]
    },
    {
      "description": "Quark's auto-compounding MNTA derivative",
      "denom_units": [
        {
          "denom": "factory/kujira1qzu3up50auxhqyzfq56znuj8n38q2ra7daaf9ef7vg8gu66jh4fqd2wd2y/urcpt",
          "exponent": 0
        },
        {
          "denom": "qcMNTA",
          "exponent": 6
        }
      ],
      "base": "factory/kujira1qzu3up50auxhqyzfq56znuj8n38q2ra7daaf9ef7vg8gu66jh4fqd2wd2y/urcpt",
      "name": "qcMNTA",
      "display": "qcMNTA",
      "symbol": "qcMNTA",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qcmnta.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qcmnta.svg"
        }
      ]
    },
    {
      "description": "ERIS Liquid Staked MNTA",
      "denom_units": [
        {
          "denom": "factory/kujira175yatpvkpgw07w0chhzuks3zrrae9z9g2y6r7u5pzqesyau4x9eqqyv0rr/ampMNTA",
          "exponent": 0
        },
        {
          "denom": "ampMNTA",
          "exponent": 6
        }
      ],
      "base": "factory/kujira175yatpvkpgw07w0chhzuks3zrrae9z9g2y6r7u5pzqesyau4x9eqqyv0rr/ampMNTA",
      "name": "ERIS Amplified MNTA",
      "display": "ampMNTA",
      "symbol": "ampMNTA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampmnta.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampmnta.png"
        }
      ]
    },
    {
      "description": "The content house of Kujira",
      "denom_units": [
        {
          "denom": "factory/kujira12cjjeytrqcj25uv349thltcygnp9k0kukpct0e/uwink",
          "exponent": 0
        },
        {
          "denom": "wink",
          "exponent": 6
        }
      ],
      "base": "factory/kujira12cjjeytrqcj25uv349thltcygnp9k0kukpct0e/uwink",
      "name": "WINK",
      "display": "wink",
      "symbol": "WINK",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/wink.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/wink.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/wink.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/wink.svg"
        }
      ]
    },
    {
      "description": "Blend Token",
      "denom_units": [
        {
          "denom": "factory/kujira1slueerjz7mx9jp45u3y0rjwtvhcf8a68wf2mjt/ublend",
          "exponent": 0
        },
        {
          "denom": "blend",
          "exponent": 6
        }
      ],
      "base": "factory/kujira1slueerjz7mx9jp45u3y0rjwtvhcf8a68wf2mjt/ublend",
      "name": "BLEND",
      "display": "blend",
      "symbol": "BLEND",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/blend.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/blend.svg"
        }
      ]
    },
    {
      "description": "Tether USDt on Kujira",
      "denom_units": [
        {
          "denom": "ibc/20014F963CC9E6488B299622F87B60C6DE71632864859EC08B4753478DAB2BB8",
          "exponent": 0
        },
        {
          "denom": "usdt",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/20014F963CC9E6488B299622F87B60C6DE71632864859EC08B4753478DAB2BB8",
      "name": "Tether USD",
      "display": "usdt",
      "symbol": "USDT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "kava",
            "base_denom": "erc20/tether/usdt",
            "channel_id": "channel-116"
          },
          "chain": {
            "channel_id": "channel-95",
            "path": "transfer/channel-95/erc20/tether/usdt"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "kava",
            "base_denom": "erc20/tether/usdt"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg"
      }
    },
    {
      "description": "The staking and governance token of Fuzion",
      "denom_units": [
        {
          "denom": "factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/ufuzn",
          "exponent": 0
        },
        {
          "denom": "fuzn",
          "exponent": 6
        }
      ],
      "base": "factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/ufuzn",
      "name": "Fuzion",
      "display": "fuzn",
      "symbol": "FUZN",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzion.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzion.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzion.svg"
        }
      ]
    },
    {
      "description": "The receipt token of Fuzion",
      "denom_units": [
        {
          "denom": "factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/urfuzn",
          "exponent": 0
        },
        {
          "denom": "rfuzn",
          "exponent": 6
        }
      ],
      "base": "factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/urfuzn",
      "name": "Fuzion Receipt",
      "display": "rfuzn",
      "symbol": "rFUZN",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzionr.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzionr.png"
        }
      ]
    },
    {
      "description": "The yield token of Fuzion",
      "denom_units": [
        {
          "denom": "factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/uyfuzn",
          "exponent": 0
        },
        {
          "denom": "yfuzn",
          "exponent": 6
        }
      ],
      "base": "factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/uyfuzn",
      "name": "Fuzion Yield",
      "display": "yfuzn",
      "symbol": "yFUZN",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuziony.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuziony.svg"
        }
      ]
    },
    {
      "description": "Quark's auto-compounding FUZN derivative",
      "denom_units": [
        {
          "denom": "factory/kujira1l04ged98c7a7s9tllu62ld09ztylwf442qgm4thfgmadrvngeumsz4zrh2/urcpt",
          "exponent": 0
        },
        {
          "denom": "qcFUZN",
          "exponent": 6
        }
      ],
      "base": "factory/kujira1l04ged98c7a7s9tllu62ld09ztylwf442qgm4thfgmadrvngeumsz4zrh2/urcpt",
      "name": "qcFUZN",
      "display": "qcFUZN",
      "symbol": "qcFUZN",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qcfuzn.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qcfuzn.svg"
        }
      ]
    },
    {
      "description": "The Revenue & Governance token of Unstake.fi",
      "denom_units": [
        {
          "denom": "factory/kujira1aaudpfr9y23lt9d45hrmskphpdfaq9ajxd3ukh/unstk",
          "exponent": 0
        },
        {
          "denom": "nstk",
          "exponent": 6
        }
      ],
      "base": "factory/kujira1aaudpfr9y23lt9d45hrmskphpdfaq9ajxd3ukh/unstk",
      "name": "Unstake Fi",
      "display": "nstk",
      "symbol": "NSTK",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nstk.svg"
      },
      "coingecko_id": "unstake-fi",
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nstk.svg"
        }
      ]
    },
    {
      "description": "Local Money",
      "denom_units": [
        {
          "denom": "factory/kujira1swkuyt08z74n5jl7zr6hx0ru5sa2yev5v896p6/local",
          "exponent": 0
        },
        {
          "denom": "local",
          "exponent": 6
        }
      ],
      "base": "factory/kujira1swkuyt08z74n5jl7zr6hx0ru5sa2yev5v896p6/local",
      "name": "LOCAL",
      "display": "local",
      "symbol": "LOCAL",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/local.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/local.png"
        }
      ]
    },
    {
      "description": "Food for whales",
      "denom_units": [
        {
          "denom": "factory/kujira166ysf07ze5suazfzj0r05tv8amk2yn8zvsfuu7/uplnk",
          "exponent": 0
        },
        {
          "denom": "PLNK",
          "exponent": 6
        }
      ],
      "base": "factory/kujira166ysf07ze5suazfzj0r05tv8amk2yn8zvsfuu7/uplnk",
      "name": "Plankton",
      "display": "PLNK",
      "symbol": "PLNK",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/PLNK_drk.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/PLNK_drk.png"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/E5CA126979E2FFB4C70C072F8094D07ECF27773B37623AD2BF7582AD0726F0F3",
          "exponent": 0
        },
        {
          "denom": "sol",
          "exponent": 8
        }
      ],
      "base": "ibc/E5CA126979E2FFB4C70C072F8094D07ECF27773B37623AD2BF7582AD0726F0F3",
      "name": "Wormhole Solana",
      "display": "sol",
      "symbol": "whSOL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "gateway",
            "base_denom": "factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA",
            "channel_id": "channel-9"
          },
          "chain": {
            "channel_id": "channel-113",
            "path": "transfer/channel-113/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "gateway",
            "base_denom": "factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/F3AA7EF362EC5E791FE78A0F4CCC69FEE1F9A7485EB1A8CAB3F6601C00522F10",
          "exponent": 0
        },
        {
          "denom": "evmos",
          "exponent": 18
        }
      ],
      "base": "ibc/F3AA7EF362EC5E791FE78A0F4CCC69FEE1F9A7485EB1A8CAB3F6601C00522F10",
      "name": "Evmos",
      "display": "evmos",
      "symbol": "EVMOS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "evmos",
            "base_denom": "aevmos",
            "channel_id": "channel-18"
          },
          "chain": {
            "channel_id": "channel-23",
            "path": "transfer/channel-23/aevmos"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "evmos",
            "base_denom": "aevmos"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2",
          "exponent": 0
        },
        {
          "denom": "avax",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2",
      "name": "Axelar Wrapped AVAX",
      "display": "avax",
      "symbol": "wAVAX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "axelar",
            "base_denom": "wawax-wei",
            "channel_id": "channel-14"
          },
          "chain": {
            "channel_id": "channel-9",
            "path": "transfer/channel-9/wavax-wei"
          }
        }
      ],
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/FE98AAD68F02F03565E9FA39A5E627946699B2B07115889ED812D8BA639576A9",
          "exponent": 0
        },
        {
          "denom": "usdc",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/FE98AAD68F02F03565E9FA39A5E627946699B2B07115889ED812D8BA639576A9",
      "name": "Noble USD Coin",
      "display": "usdc",
      "symbol": "USDC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "noble",
            "base_denom": "uusdc",
            "channel_id": "channel-2"
          },
          "chain": {
            "channel_id": "channel-62",
            "path": "transfer/channel-62/uusdc"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "noble",
            "base_denom": "uusdc"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23",
          "exponent": 0
        },
        {
          "denom": "osmo",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23",
      "name": "Osmosis",
      "display": "osmo",
      "symbol": "OSMO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "uosmo",
            "channel_id": "channel-259"
          },
          "chain": {
            "channel_id": "channel-3",
            "path": "transfer/channel-3/uosmo"
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
          "denom": "ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F",
          "exponent": 0
        },
        {
          "denom": "usdc",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F",
      "name": "Axelar USD Coin",
      "display": "usdc",
      "symbol": "axlUSDC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "axelar",
            "base_denom": "uusdc",
            "channel_id": "channel-14"
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
            "chain_name": "axelar",
            "base_denom": "uusdc"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/3607EB5B5E64DD1C0E12E07F077FF470D5BC4706AFCBC98FE1BA960E5AE4CE07",
          "exponent": 0
        },
        {
          "denom": "cmdx",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/3607EB5B5E64DD1C0E12E07F077FF470D5BC4706AFCBC98FE1BA960E5AE4CE07",
      "name": "Comdex",
      "display": "cmdx",
      "symbol": "CMDX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "comdex",
            "base_denom": "ucmdx",
            "channel_id": "channel-31"
          },
          "chain": {
            "channel_id": "channel-18",
            "path": "transfer/channel-18/ucmdx"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "comdex",
            "base_denom": "ucmdx"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5",
          "exponent": 0
        },
        {
          "denom": "juno",
          "exponent": 6
        }
      ],
      "base": "ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5",
      "name": "Juno",
      "display": "juno",
      "symbol": "JUNO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "juno",
            "base_denom": "ujuno",
            "channel_id": "channel-87"
          },
          "chain": {
            "channel_id": "channel-1",
            "path": "transfer/channel-1/ujuno"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "juno",
            "base_denom": "ujuno"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7",
          "exponent": 0
        },
        {
          "denom": "weth",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7",
      "name": "Axelar Wrapped Ether",
      "display": "weth",
      "symbol": "wETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "axelar",
            "base_denom": "weth-wei",
            "channel_id": "channel-14"
          },
          "chain": {
            "channel_id": "channel-9",
            "path": "transfer/channel-9/weth-wei"
          }
        }
      ],
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
          "exponent": 0
        },
        {
          "denom": "atom",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
      "name": "Cosmos Hub Atom",
      "display": "atom",
      "symbol": "ATOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "cosmoshub",
            "base_denom": "uatom",
            "channel_id": "channel-343"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/uatom"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "cosmoshub",
            "base_denom": "uatom"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986",
          "exponent": 0
        },
        {
          "denom": "luna",
          "exponent": 6
        }
      ],
      "base": "ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986",
      "name": "Luna",
      "display": "luna",
      "symbol": "LUNA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "terra2",
            "base_denom": "uluna",
            "channel_id": "channel-10"
          },
          "chain": {
            "channel_id": "channel-5",
            "path": "transfer/channel-5/uluna"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "luna",
            "base_denom": "uluna"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602",
          "exponent": 0
        },
        {
          "denom": "stars",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602",
      "name": "Stargaze",
      "display": "stars",
      "symbol": "STARS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "stargaze",
            "base_denom": "ustars",
            "channel_id": "channel-49"
          },
          "chain": {
            "channel_id": "channel-7",
            "path": "transfer/channel-7/ustars"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "stargaze",
            "base_denom": "ustars"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5",
          "exponent": 0
        },
        {
          "denom": "scrt",
          "exponent": 6
        }
      ],
      "base": "ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5",
      "name": "Secret Network",
      "display": "scrt",
      "symbol": "SCRT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "secretnetwork",
            "base_denom": "uscrt",
            "channel_id": "channel-22"
          },
          "chain": {
            "channel_id": "channel-10",
            "path": "transfer/channel-10/uscrt"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "scrt",
            "base_denom": "uscrt"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
      }
    },
    {
      "denom_units": [
        {
          "denom": "ibc/086C1B2E9E611F23D3C9159C858D3F4C6A911D348DFB916A11AE306A865A77A8",
          "exponent": 0,
          "aliases": [
            "stk/uatom"
          ]
        },
        {
          "denom": "stkatom",
          "exponent": 6,
          "aliases": [
            "stk/atom"
          ]
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/086C1B2E9E611F23D3C9159C858D3F4C6A911D348DFB916A11AE306A865A77A8",
      "name": "PSTAKE staked ATOM",
      "display": "stkatom",
      "symbol": "stkATOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "persistence",
            "base_denom": "stk/uatom",
            "channel_id": "channel-152"
          },
          "chain": {
            "channel_id": "channel-158",
            "path": "transfer/channel-158/stk/uatom"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "persistence",
            "base_denom": "stk/uatom"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg"
      }
    }
  ]
}

