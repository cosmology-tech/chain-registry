import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const secretnetwork: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "secretnetwork",
  "status": "live",
  "network_type": "mainnet",
  "website": "https://scrt.network/",
  "pretty_name": "Secret Network",
  "chain_id": "secret-4",
  "bech32_prefix": "secret",
  "daemon_name": "secretd",
  "node_home": "$HOME/.secretd",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 529,
  "alternative_slip44s": [
    118
  ],
  "fees": {
    "fee_tokens": [
      {
        "denom": "uscrt",
        "fixed_min_gas_price": 0.05,
        "low_gas_price": 0.05,
        "average_gas_price": 0.1,
        "high_gas_price": 0.25
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "uscrt"
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/scrtlabs/SecretNetwork",
    "recommended_version": "v1.12.1",
    "compatible_versions": [
      "v1.12.1"
    ],
    "binaries": {
      "linux/amd64": "https://github.com/scrtlabs/SecretNetwork/releases/download/v1.12.1/secretnetwork_1.12.1_mainnet_goleveldb_amd64.deb"
    },
    "genesis": {
      "genesis_url": "https://github.com/scrtlabs/SecretNetwork/releases/download/v1.2.0/genesis.json"
    },
    "versions": [
      {
        "name": "v1.2",
        "tag": "v1.2",
        "height": 0,
        "next_version_name": "v1.3"
      },
      {
        "name": "v1.3",
        "tag": "v1.3",
        "height": 3343000,
        "next_version_name": "v1.4"
      },
      {
        "name": "v1.4",
        "tag": "v1.4",
        "height": 5309200,
        "next_version_name": "v1.5"
      },
      {
        "name": "v1.5",
        "tag": "v1.5",
        "height": 5941700,
        "next_version_name": "v1.6"
      },
      {
        "name": "v1.6",
        "tag": "v1.6",
        "height": 6537300,
        "next_version_name": "v1.7"
      },
      {
        "name": "v1.7",
        "tag": "v1.7.1",
        "height": 7719500,
        "next_version_name": "v1.8"
      },
      {
        "name": "v1.8",
        "tag": "v1.8.0",
        "height": 7760000,
        "next_version_name": "v1.9",
        "recommended_version": "v1.8.0",
        "compatible_versions": [
          "v1.8.0"
        ],
        "binaries": {
          "linux/amd64": "https://github.com/scrtlabs/SecretNetwork/releases/download/v1.8.0/secretnetwork_1.8.0_mainnet_goleveldb_amd64.deb"
        }
      },
      {
        "name": "v1.9",
        "tag": "v1.9.0",
        "height": 8861800,
        "recommended_version": "v1.9.0",
        "compatible_versions": [
          "v1.9.0"
        ],
        "binaries": {
          "linux/amd64": "https://github.com/scrtlabs/SecretNetwork/releases/download/v1.9.0/secretnetwork_1.9.0_mainnet_goleveldb_amd64.deb"
        }
      },
      {
        "name": "v1.9",
        "tag": "v1.9.2",
        "height": 8861815,
        "recommended_version": "v1.9.2",
        "compatible_versions": [
          "v1.9.2"
        ],
        "binaries": {
          "linux/amd64": "https://github.com/scrtlabs/SecretNetwork/releases/download/v1.9.2/secretnetwork_1.9.2_mainnet_goleveldb_amd64.deb"
        },
        "next_version_name": "v1.10"
      },
      {
        "name": "v1.10",
        "tag": "v1.10.0",
        "height": 10186400,
        "recommended_version": "v1.10.0",
        "compatible_versions": [
          "v1.10.0"
        ],
        "binaries": {
          "linux/amd64": "https://github.com/scrtlabs/SecretNetwork/releases/download/v1.10.0/secretnetwork_1.10.0_mainnet_goleveldb_amd64.deb"
        },
        "next_version_name": "v1.11"
      },
      {
        "name": "v1.11",
        "tag": "v1.11.0",
        "height": 10824000,
        "recommended_version": "v1.11.0",
        "compatible_versions": [
          "v1.11.0"
        ],
        "binaries": {
          "linux/amd64": "https://github.com/scrtlabs/SecretNetwork/releases/download/v1.11.0/secretnetwork_1.11.0_mainnet_goleveldb_amd64.deb"
        },
        "next_version_name": "v1.12"
      },
      {
        "name": "v1.12",
        "tag": "v1.12.1",
        "height": 11136666,
        "recommended_version": "v1.12.1",
        "compatible_versions": [
          "v1.12.1"
        ],
        "binaries": {
          "linux/amd64": "https://github.com/scrtlabs/SecretNetwork/releases/download/v1.12.1/secretnetwork_1.12.1_mainnet_goleveldb_amd64.deb"
        },
        "next_version_name": ""
      }
    ]
  },
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
  },
  "description": "Secret Network is the first blockchain with customizable privacy. You get to choose what you share, with whom, and how. This protects users, and empowers developers to build a better Web3.",
  "peers": {
    "seeds": [
      {
        "id": "6fb7169f7630da9468bf7cc0bcbbed1eb9ed0d7b",
        "address": "scrt-seed-01.scrtlabs.com:26656",
        "provider": "SCRT Labs"
      },
      {
        "id": "ab6394e953e0b570bb1deeb5a8b387aa0dc6188a",
        "address": "scrt-seed-02.scrtlabs.com:26656",
        "provider": "SCRT Labs"
      },
      {
        "id": "9cdaa5856e0245ecd73bd464308fb990fbc53b57",
        "address": "scrt-seed-03.scrtlabs.com:26656",
        "provider": "SCRT Labs"
      },
      {
        "id": "20e1000e88125698264454a884812746c2eb4807",
        "address": "seeds.lavenderfive.com:17156",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "id": "c28827cb96c14c905b127b92065a3fb4cd77d7f6",
        "address": "seeds.whispernode.com:17156",
        "provider": "WhisperNode 🤐"
      },
      {
        "id": "5b0d6ef879fe1326045fa18d5bf767c5968704e6",
        "address": "secretnetwork-mainnet-seed.autostake.com:26656",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "id": "8542cd7e6bf9d260fef543bc49e59be5a3fa9074",
        "address": "seed.publicnode.com:26656",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      }
    ],
    "persistent_peers": [
      {
        "id": "5b0d6ef879fe1326045fa18d5bf767c5968704e6",
        "address": "secretnetwork-mainnet-peer.autostake.com:26656",
        "provider": "AutoStake 🛡️ Slash Protected"
      }
    ]
  },
  "apis": {
    "grpc-web": [
      {
        "address": "https://grpc.mainnet.secretsaturn.net",
        "provider": "🪐 𝕊ecret 𝕊aturn"
      }
    ],
    "rpc": [
      {
        "address": "https://scrt.public-rpc.com",
        "provider": "ANKR"
      },
      {
        "address": "https://secretnetwork-rpc.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://1rpc.io/scrt-rpc",
        "provider": "1RPC - Automata Network"
      },
      {
        "address": "https://secretnetwork-rpc.highstakes.ch",
        "provider": "High Stakes 🇨🇭"
      },
      {
        "address": "https://rpc.mainnet.secretsaturn.net",
        "provider": "🪐 𝕊ecret 𝕊aturn"
      },
      {
        "address": "https://rpc-secret.01node.com",
        "provider": "01node"
      },
      {
        "address": "https://public.stakewolle.com/cosmos/secretnetwork/rpc",
        "provider": "Stakewolle"
      }
    ],
    "rest": [
      {
        "address": "https://secretnetwork-api.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "http://secretnetwork-mainnet-lcd.autostake.com:1317",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "https://1rpc.io/scrt-lcd",
        "provider": "1RPC - Automata Network"
      },
      {
        "address": "https://secretnetwork-api.highstakes.ch",
        "provider": "High Stakes 🇨🇭"
      },
      {
        "address": "https://lcd.mainnet.secretsaturn.net",
        "provider": "🪐 𝕊ecret 𝕊aturn"
      },
      {
        "address": "https://rest-secret.01node.com",
        "provider": "01node"
      },
      {
        "address": "https://public.stakewolle.com/cosmos/secretnetwork/rest",
        "provider": "Stakewolle"
      }
    ],
    "grpc": [
      {
        "address": "secretnetwork-grpc.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "secretnetwork-mainnet-grpc.autostake.com:9090",
        "provider": "AutoStake 🛡️ Slash Protected"
      }
    ]
  },
  "explorers": [
    {
      "kind": "ezstaking",
      "url": "https://ezstaking.app/secretnetwork",
      "tx_page": "https://ezstaking.app/secretnetwork/txs/${txHash}",
      "account_page": "https://ezstaking.app/secretnetwork/account/${accountAddress}"
    },
    {
      "kind": "ping.pub",
      "url": "https://ping.pub/secret",
      "tx_page": "https://ping.pub/secret/tx/${txHash}"
    },
    {
      "kind": "mintscan",
      "url": "https://www.mintscan.io/secret",
      "tx_page": "https://www.mintscan.io/secret/transactions/${txHash}",
      "account_page": "https://www.mintscan.io/secret/accounts/${accountAddress}"
    },
    {
      "kind": "atomscan",
      "url": "https://atomscan.com/secret-network",
      "tx_page": "https://atomscan.com/secret-network/transactions/${txHash}",
      "account_page": "https://atomscan.com/secret-network/accounts/${accountAddress}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
    }
  ]
}

export const secretnetworkAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "secretnetwork",
  "assets": [
    {
      "description": "The native token of Secret Network",
      "denom_units": [
        {
          "denom": "uscrt",
          "exponent": 0
        },
        {
          "denom": "scrt",
          "exponent": 6
        }
      ],
      "base": "uscrt",
      "name": "Secret Network",
      "display": "scrt",
      "symbol": "SCRT",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
      },
      "coingecko_id": "secret",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
        }
      ],
      "socials": {
        "webiste": "https://scrt.network/",
        "twitter": "https://twitter.com/SecretNetwork"
      }
    },
    {
      "description": "The native token cw20 for SIENNA on Secret Network",
      "denom_units": [
        {
          "denom": "cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4",
          "exponent": 0
        },
        {
          "denom": "sienna",
          "exponent": 18
        }
      ],
      "type_asset": "snip20",
      "address": "secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4",
      "base": "cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4",
      "name": "SIENNA",
      "display": "sienna",
      "symbol": "SIENNA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg"
      },
      "coingecko_id": "sienna",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg"
        }
      ]
    },
    {
      "description": "The native token cw20 for Shade on Secret Network",
      "denom_units": [
        {
          "denom": "cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d",
          "exponent": 0
        },
        {
          "denom": "shd",
          "exponent": 8
        }
      ],
      "type_asset": "snip20",
      "address": "secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d",
      "base": "cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d",
      "name": "Shade (old)",
      "display": "shd",
      "symbol": "SHD(old)",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg"
        }
      ]
    },
    {
      "description": "The native token cw20 for Shade on Secret Network",
      "denom_units": [
        {
          "denom": "cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm",
          "exponent": 0
        },
        {
          "denom": "shd",
          "exponent": 8
        }
      ],
      "type_asset": "snip25",
      "address": "secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm",
      "base": "cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm",
      "name": "Shade",
      "display": "shd",
      "symbol": "SHD",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg"
      },
      "coingecko_id": "shade-protocol",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg"
        }
      ]
    },
    {
      "description": "The native token cw20 for Silk on Secret Network",
      "denom_units": [
        {
          "denom": "cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd",
          "exponent": 0
        },
        {
          "denom": "silk",
          "exponent": 6
        }
      ],
      "type_asset": "snip25",
      "address": "secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd",
      "base": "cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd",
      "name": "Silk",
      "display": "silk",
      "symbol": "SILK",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg"
      },
      "coingecko_id": "silk-bcec1136-561c-4706-a42c-8b67d0d7f7d2",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg"
        }
      ]
    },
    {
      "description": "The native token cw20 for SCRT Staking Derivatives on Secret Network",
      "denom_units": [
        {
          "denom": "cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4",
          "exponent": 0
        },
        {
          "denom": "stkd-scrt",
          "exponent": 6
        }
      ],
      "type_asset": "snip20",
      "address": "secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4",
      "base": "cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4",
      "name": "SCRT Staking Derivatives",
      "display": "stkd-scrt",
      "symbol": "stkd-SCRT",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg"
      },
      "coingecko_id": "stkd-scrt",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg"
        }
      ]
    },
    {
      "description": "The native token cw20 for Button on Secret Network",
      "denom_units": [
        {
          "denom": "cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt",
          "exponent": 0
        },
        {
          "denom": "butt",
          "exponent": 6
        }
      ],
      "type_asset": "snip20",
      "address": "secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt",
      "base": "cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt",
      "name": "Button",
      "display": "butt",
      "symbol": "BUTT",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg"
      },
      "coingecko_id": "buttcoin-2",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg"
        }
      ]
    },
    {
      "description": "The native token cw20 for Alter on Secret Network",
      "denom_units": [
        {
          "denom": "cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej",
          "exponent": 0
        },
        {
          "denom": "alter",
          "exponent": 6
        }
      ],
      "base": "cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej",
      "name": "Alter",
      "display": "alter",
      "symbol": "ALTER",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg"
      },
      "coingecko_id": "alter",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg"
        }
      ]
    },
    {
      "description": "The native token cw20 for Amber on Secret Network",
      "denom_units": [
        {
          "denom": "cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852",
          "exponent": 0
        },
        {
          "denom": "amber",
          "exponent": 6
        }
      ],
      "type_asset": "snip20",
      "address": "secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852",
      "base": "cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852",
      "name": "Amber",
      "display": "amber",
      "symbol": "AMBER",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg"
        }
      ]
    },
    {
      "description": "The native token cw20 for Shill on Secret Network",
      "denom_units": [
        {
          "denom": "cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse",
          "exponent": 0
        },
        {
          "denom": "shill",
          "exponent": 6
        }
      ],
      "type_asset": "snip25",
      "address": "secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse",
      "base": "cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse",
      "name": "Shill",
      "display": "shill",
      "symbol": "SHILL",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.svg"
        }
      ]
    }
  ]
}

