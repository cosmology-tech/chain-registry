import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const injective: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "injective",
  "status": "live",
  "network_type": "mainnet",
  "website": "https://injective.com/",
  "pretty_name": "Injective",
  "chain_id": "injective-1",
  "bech32_prefix": "inj",
  "extra_codecs": [
    "injective"
  ],
  "slip44": 60,
  "daemon_name": "injectived",
  "node_home": "$HOME/.injectived",
  "fees": {
    "fee_tokens": [
      {
        "denom": "inj",
        "fixed_min_gas_price": 160000000,
        "low_gas_price": 500000000,
        "average_gas_price": 700000000,
        "high_gas_price": 900000000
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "inj"
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/InjectiveLabs/injective-chain-releases",
    "recommended_version": "v1.12.1-1705909076",
    "compatible_versions": [
      "v1.12.0-1704530206",
      "v1.12.1-1705909076"
    ],
    "binaries": {
      "linux/amd64": "https://github.com/InjectiveLabs/injective-chain-releases/releases/download/v1.12.1-1705909076/linux-amd64.zip",
      "darwin/amd64": "https://github.com/InjectiveLabs/injective-chain-releases/releases/download/v1.12.1-1705909076/darwin-amd64.zip"
    },
    "genesis": {
      "genesis_url": "https://raw.githubusercontent.com/InjectiveLabs/mainnet-config/master/10001/genesis.json"
    },
    "versions": [
      {
        "name": "v1.10",
        "recommended_version": "v1.10",
        "compatible_versions": [
          "v1.10"
        ],
        "binaries": {
          "linux/amd64": "https://github.com/InjectiveLabs/injective-chain-releases/releases/download/v1.10.0-1679065799/linux-amd64.zip",
          "darwin/amd64": "https://github.com/InjectiveLabs/injective-chain-releases/releases/download/v1.10.0-1679065799/darwin-amd64.zip"
        },
        "next_version_name": "v1.11"
      },
      {
        "name": "v1.11",
        "proposal": 231,
        "height": 34775000,
        "recommended_version": "v1.11.5-1687535916",
        "compatible_versions": [
          "v1.11",
          "v1.11.3-1686246472",
          "v1.11.4-1686608669",
          "v1.11.5-1687535916"
        ],
        "binaries": {
          "linux/amd64": "https://github.com/InjectiveLabs/injective-chain-releases/releases/download/v1.11.5-1687535916/linux-amd64.zip",
          "darwin/amd64": "https://github.com/InjectiveLabs/injective-chain-releases/releases/download/v1.11.5-1687535916/darwin-amd64.zip"
        },
        "next_version_name": "v1.12.0"
      },
      {
        "name": "v1.12.0",
        "proposal": 314,
        "height": 57076000,
        "recommended_version": "v1.12.1-1705909076",
        "compatible_versions": [
          "v1.12.0-1704530206",
          "v1.12.1-1705909076"
        ],
        "binaries": {
          "linux/amd64": "https://github.com/InjectiveLabs/injective-chain-releases/releases/download/v1.12.1-1705909076/linux-amd64.zip",
          "darwin/amd64": "https://github.com/InjectiveLabs/injective-chain-releases/releases/download/v1.12.1-1705909076/darwin-amd64.zip"
        },
        "next_version_name": ""
      }
    ]
  },
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg"
  },
  "description": "Injective’s mission is to create a truly free and inclusive financial system through decentralization.",
  "peers": {
    "seeds": [
      {
        "id": "38c18461209694e1f667ff2c8636ba827cc01c86",
        "address": "176.9.143.252:11751",
        "provider": "injectivelabs.org"
      },
      {
        "id": "4f9025feca44211eddc26cd983372114947b2e85",
        "address": "176.9.140.49:11751",
        "provider": "injectivelabs.org"
      },
      {
        "id": "c98bb1b889ddb58b46e4ad3726c1382d37cd5609",
        "address": "65.109.51.80:11751",
        "provider": "injectivelabs.org"
      },
      {
        "id": "23d0eea9bb42316ff5ea2f8b4cd8475ef3f35209",
        "address": "65.109.36.70:11751",
        "provider": "injectivelabs.org"
      },
      {
        "id": "f9ae40fb4a37b63bea573cc0509b4a63baa1a37a",
        "address": "15.235.114.80:11751",
        "provider": "injectivelabs.org"
      },
      {
        "id": "7f3473ddab10322b63789acb4ac58647929111ba",
        "address": "15.235.13.116:11751",
        "provider": "injectivelabs.org"
      },
      {
        "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
        "address": "seeds.polkachu.com:14356",
        "provider": "polkachu.com"
      },
      {
        "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
        "address": "injective-mainnet-seed.autostake.com:26726",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "id": "20e1000e88125698264454a884812746c2eb4807",
        "address": "seeds.lavenderfive.com:14356",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "id": "1846e76e14913124a07e231586d487a0636c0296",
        "address": "tenderseed.ccvalidators.com:26007",
        "provider": "ccvalidators.com"
      },
      {
        "id": "5a1cd1a7da5aab3e3075fbae0a905c7256e48193",
        "address": "seeds.goldenratiostaking.net:1635",
        "provider": "Golden Ratio Staking"
      },
      {
        "id": "8542cd7e6bf9d260fef543bc49e59be5a3fa9074",
        "address": "seed.publicnode.com:26656",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "id": "c28827cb96c14c905b127b92065a3fb4cd77d7f6",
        "address": "seeds.whispernode.com:14356",
        "provider": "WhisperNode 🤐"
      },
      {
        "id": "858c86e2590f82934b8483ed184afd88416a7b31",
        "address": "seed-injective-01.stakeflow.io:2106",
        "provider": "Stakeflow"
      }
    ],
    "persistent_peers": [
      {
        "id": "38c18461209694e1f667ff2c8636ba827cc01c86",
        "address": "176.9.143.252:11751",
        "provider": "injectivelabs.org"
      },
      {
        "id": "4f9025feca44211eddc26cd983372114947b2e85",
        "address": "176.9.140.49:11751",
        "provider": "injectivelabs.org"
      },
      {
        "id": "c98bb1b889ddb58b46e4ad3726c1382d37cd5609",
        "address": "65.109.51.80:11751",
        "provider": "injectivelabs.org"
      },
      {
        "id": "23d0eea9bb42316ff5ea2f8b4cd8475ef3f35209",
        "address": "65.109.36.70:11751",
        "provider": "injectivelabs.org"
      },
      {
        "id": "f9ae40fb4a37b63bea573cc0509b4a63baa1a37a",
        "address": "15.235.114.80:11751",
        "provider": "injectivelabs.org"
      },
      {
        "id": "7f3473ddab10322b63789acb4ac58647929111ba",
        "address": "15.235.13.116:11751",
        "provider": "injectivelabs.org"
      },
      {
        "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
        "address": "injective-mainnet-peer.autostake.com:26726",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "id": "858c86e2590f82934b8483ed184afd88416a7b31",
        "address": "peer-injective-01.stakeflow.io:2106",
        "provider": "Stakeflow"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc-injective.goldenratiostaking.net",
        "provider": "Golden Ratio Staking"
      },
      {
        "address": "https://injective-rpc.polkachu.com",
        "provider": "Polkachu"
      },
      {
        "address": "https://injective-rpc.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://rpc-injective-ia.cosmosia.notional.ventures/",
        "provider": "Notional"
      },
      {
        "address": "https://injective-mainnet-rpc.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "https://rpc-injective.whispernode.com:443",
        "provider": "WhisperNode 🤐"
      },
      {
        "address": "https://rpc-injective-01.stakeflow.io",
        "provider": "Stakeflow"
      },
      {
        "address": "https://injective-rpc.publicnode.com:443",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "address": "https://injective-rpc.highstakes.ch",
        "provider": "High Stakes 🇨🇭"
      },
      {
        "address": "https://public.stakewolle.com/cosmos/injective/rpc",
        "provider": "Stakewolle"
      },
      {
        "address": "https://rpc.injective.bronbro.io/",
        "provider": "Bro_n_Bro"
      }
    ],
    "rest": [
      {
        "address": "https://api-injective-ia.cosmosia.notional.ventures/",
        "provider": "Notional"
      },
      {
        "address": "https://injective-api.polkachu.com",
        "provider": "Polkachu"
      },
      {
        "address": "https://injective-api.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://lcd-injective.whispernode.com:443",
        "provider": "WhisperNode 🤐"
      },
      {
        "address": "https://api-injective-01.stakeflow.io",
        "provider": "Stakeflow"
      },
      {
        "address": "https://rest-injective.goldenratiostaking.net",
        "provider": "Golden Ratio Staking"
      },
      {
        "address": "https://injective-rest.publicnode.com",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "address": "injective-mainnet-lcd.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "https://injective-api.highstakes.ch",
        "provider": "High Stakes 🇨🇭"
      },
      {
        "address": "https://public.stakewolle.com/cosmos/injective/rest",
        "provider": "Stakewolle"
      },
      {
        "address": "https://lcd.injective.bronbro.io/",
        "provider": "Bro_n_Bro"
      }
    ],
    "grpc": [
      {
        "address": "grpc-injective-ia.cosmosia.notional.ventures:443",
        "provider": "Notional"
      },
      {
        "address": "injective-grpc.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "injective-grpc.polkachu.com:14390",
        "provider": "Polkachu"
      },
      {
        "address": "injective-mainnet-grpc.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "grpc-injective.cosmos-spaces.cloud:9900",
        "provider": "Cosmos Spaces"
      },
      {
        "address": "grpc.injective.posthuman.digital:80",
        "provider": "POSTHUMAN ꝏ DVS"
      },
      {
        "address": "grpc-injective.architectnodes.com:1443",
        "provider": "Architect Nodes"
      },
      {
        "address": "grpc-injective-01.stakeflow.io:2102",
        "provider": "Stakeflow"
      },
      {
        "address": "injective-grpc.publicnode.com:443",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "address": "injective-grpc.w3coins.io:14390",
        "provider": "w3coins"
      },
      {
        "address": "grpc-injective.whispernode.com:443",
        "provider": "WhisperNode 🤐"
      },
      {
        "address": "grpc.injective.bronbro.io:443",
        "provider": "Bro_n_Bro"
      }
    ]
  },
  "explorers": [
    {
      "kind": "ezstaking",
      "url": "https://ezstaking.app/injective",
      "tx_page": "https://ezstaking.app/injective/txs/${txHash}",
      "account_page": "https://ezstaking.app/injective/account/${accountAddress}"
    },
    {
      "kind": "injectiveprotocol",
      "url": "https://explorer.injective.network/",
      "tx_page": "https://explorer.injective.network/transaction/${txHash}"
    },
    {
      "kind": "ping.pub",
      "url": "https://ping.pub/injective",
      "tx_page": "https://ping.pub/injective/tx/${txHash}"
    },
    {
      "kind": "atomscan",
      "url": "https://atomscan.com/injective",
      "tx_page": "https://atomscan.com/injective/transactions/${txHash}",
      "account_page": "https://atomscan.com/injective/accounts/${accountAddress}"
    },
    {
      "kind": "mintscan",
      "url": "https://www.mintscan.io/injective",
      "tx_page": "https://www.mintscan.io/injective/transactions/${txHash}",
      "account_page": "https://www.mintscan.io/injective/accounts/${accountAddress}"
    },
    {
      "kind": "Stakeflow",
      "url": "https://stakeflow.io/injective",
      "account_page": "https://stakeflow.io/injective/accounts/${accountAddress}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg"
    }
  ]
}

export const injectiveAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "injective",
  "assets": [
    {
      "description": "The INJ token is the native governance token for the Injective chain.",
      "denom_units": [
        {
          "denom": "inj",
          "exponent": 0
        },
        {
          "denom": "INJ",
          "exponent": 18
        }
      ],
      "base": "inj",
      "name": "Injective",
      "display": "INJ",
      "symbol": "INJ",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg"
      },
      "coingecko_id": "injective-protocol",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg"
        }
      ],
      "socials": {
        "webiste": "https://injective.com/",
        "twitter": "https://twitter.com/Injective_"
      }
    },
    {
      "description": "Tether USDt on Injective",
      "denom_units": [
        {
          "denom": "ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB",
          "exponent": 0
        },
        {
          "denom": "usdt",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB",
      "name": "Tether USDt",
      "display": "usdt",
      "symbol": "USDt",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "kava",
            "base_denom": "erc20/tether/usdt",
            "channel_id": "channel-122"
          },
          "chain": {
            "channel_id": "channel-143",
            "path": "transfer/channel-143/erc20/tether/usdt"
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
      "description": "ERIS liquid staked INJ",
      "denom_units": [
        {
          "denom": "factory/inj1cdwt8g7nxgtg2k4fn8sj363mh9ahkw2qt0vrnc/ampINJ",
          "exponent": 0
        },
        {
          "denom": "ampINJ",
          "exponent": 6
        }
      ],
      "base": "factory/inj1cdwt8g7nxgtg2k4fn8sj363mh9ahkw2qt0vrnc/ampINJ",
      "name": "ERIS Amplified INJ",
      "display": "ampINJ",
      "symbol": "ampINJ",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ampinj.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ampinj.png"
        }
      ]
    },
    {
      "description": "$AUTISM exists to celebrate autism as a superior biological tech stack for a changing world",
      "denom_units": [
        {
          "denom": "factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism",
          "exponent": 0
        },
        {
          "denom": "autism",
          "exponent": 6
        }
      ],
      "base": "factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism",
      "name": "Autism",
      "display": "autism",
      "symbol": "AUTISM",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png"
      },
      "coingecko_id": "autism",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png"
        }
      ]
    },
    {
      "description": "The first meme coin on Injective. It’s a dog, but he has nunchucks",
      "denom_units": [
        {
          "denom": "factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja",
          "exponent": 0
        },
        {
          "denom": "NINJA",
          "exponent": 6
        }
      ],
      "base": "factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja",
      "name": "Dog wif nunchucks",
      "display": "NINJA",
      "symbol": "NINJA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninja.png"
      },
      "coingecko_id": "dog-wif-nuchucks",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninja.png"
        }
      ]
    },
    {
      "description": "The $WGMI Token - We Gonna Make It. Are you ready?",
      "denom_units": [
        {
          "denom": "factory/inj1rmjzj9fn47kdmfk4f3z39qr6czexxe0yjyc546/WGMI",
          "exponent": 0
        },
        {
          "denom": "WGMI",
          "exponent": 6
        }
      ],
      "base": "factory/inj1rmjzj9fn47kdmfk4f3z39qr6czexxe0yjyc546/WGMI",
      "name": "WGMI",
      "display": "WGMI",
      "symbol": "WGMI",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/wgmi.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/wgmi.png"
        }
      ]
    },
    {
      "description": "The first memecoin on osmosis.",
      "denom_units": [
        {
          "denom": "ibc/DD648F5D3CDA56D0D8D8820CF703D246B9FC4007725D8B38D23A21FF1A1477E3",
          "exponent": 0
        },
        {
          "denom": "WOSMO",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/DD648F5D3CDA56D0D8D8820CF703D246B9FC4007725D8B38D23A21FF1A1477E3",
      "name": "Wosmo",
      "display": "WOSMO",
      "symbol": "WOSMO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO",
            "channel_id": "channel-122"
          },
          "chain": {
            "channel_id": "channel-8",
            "path": "transfer/channel-8/factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png"
      }
    },
    {
      "description": "GLTO-ERC20 on injective",
      "denom_units": [
        {
          "denom": "peggy0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2",
          "exponent": 0
        },
        {
          "denom": "glto",
          "exponent": 6
        }
      ],
      "base": "peggy0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2",
      "name": "Gelotto",
      "display": "glto",
      "symbol": "GLTO",
      "traces": [
        {
          "type": "bridge",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2"
          },
          "provider": "Peggy"
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "ethereum",
            "base_denom": "0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg"
      },
      "socials": {
        "webiste": "https://gelotto.io/",
        "twitter": "https://twitter.com/Gelotto2"
      }
    },
    {
      "description": "Hava Coin is the lifeblood of the Cosmos & Injective networks, rewarding builders and welcoming supporters. https://havacoin.xyz/",
      "denom_units": [
        {
          "denom": "factory/inj1h0ypsdtjfcjynqu3m75z2zwwz5mmrj8rtk2g52/uhava",
          "exponent": 0
        },
        {
          "denom": "hava",
          "exponent": 6
        }
      ],
      "base": "factory/inj1h0ypsdtjfcjynqu3m75z2zwwz5mmrj8rtk2g52/uhava",
      "name": "Hava Coin",
      "display": "hava",
      "symbol": "HAVA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/hava.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/hava.png"
        }
      ]
    },
    {
      "description": "A clan of 11y bad kids crafting chaos on the Cosmos eco. One bad memecoin to rule them all  $BADKID. Airdropped to Badkids NFT holders and $STARS stakers. It's so bad, your wallet's throwing a tantrum for it.",
      "denom_units": [
        {
          "denom": "ibc/A0C5AD197FECAF6636F589071338DC7ECD6B0809CD3A5AB131EAAA5395E7E5E8",
          "exponent": 0
        },
        {
          "denom": "BADKID",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/A0C5AD197FECAF6636F589071338DC7ECD6B0809CD3A5AB131EAAA5395E7E5E8",
      "name": "Badkid",
      "display": "BADKID",
      "symbol": "BADKID",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID",
            "channel_id": "channel-122"
          },
          "chain": {
            "channel_id": "channel-8",
            "path": "transfer/channel-8/factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/badkid.png"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/badkid.png"
      }
    },
    {
      "description": "The second meme coin on Injective.",
      "denom_units": [
        {
          "denom": "inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88",
          "exponent": 0
        },
        {
          "denom": "NINPO",
          "exponent": 6
        }
      ],
      "base": "inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88",
      "name": "Ninpo",
      "display": "NINPO",
      "symbol": "NINPO",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png"
        }
      ]
    },
    {
      "description": "JUDO is a very futuristic meme token.",
      "denom_units": [
        {
          "denom": "inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h",
          "exponent": 0
        },
        {
          "denom": "JUDO",
          "exponent": 6
        }
      ],
      "base": "inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h",
      "name": "Judo",
      "display": "JUDO",
      "symbol": "JUDO",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png"
        }
      ]
    }
  ]
}

