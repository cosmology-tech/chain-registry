import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const bitsong: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "bitsong",
  "status": "live",
  "network_type": "mainnet",
  "website": "https://bitsong.io/",
  "pretty_name": "BitSong",
  "chain_id": "bitsong-2b",
  "bech32_prefix": "bitsong",
  "slip44": 639,
  "daemon_name": "bitsongd",
  "node_home": "$HOME/.bitsongd",
  "codebase": {
    "git_repo": "https://github.com/bitsongofficial/go-bitsong",
    "recommended_version": "v0.15.0",
    "compatible_versions": [
      "v0.15.0"
    ],
    "binaries": {
      "linux/amd64": "https://github.com/bitsongofficial/go-bitsong/releases/download/v0.15.0/bitsongd"
    },
    "cosmos_sdk_version": "v0.45.16",
    "cosmwasm_version": "v0.33.0",
    "cosmwasm_enabled": true,
    "ibc_go_version": "v4.4.2",
    "genesis": {
      "genesis_url": "https://raw.githubusercontent.com/bitsongofficial/networks/master/bitsong-2b/genesis.json"
    },
    "versions": [
      {
        "name": "v0.14.0",
        "recommended_version": "v0.14.0",
        "compatible_versions": [
          "v0.14.0"
        ],
        "cosmos_sdk_version": "0.45.11",
        "cosmwasm_version": "0.29.2",
        "cosmwasm_enabled": true,
        "ibc_go_version": "v3.3.1",
        "next_version_name": "v0.15.0"
      },
      {
        "name": "v0.15.0",
        "proposal": 34,
        "height": 15947000,
        "recommended_version": "v0.15.0",
        "compatible_versions": [
          "v0.15.0"
        ],
        "cosmos_sdk_version": "0.45.16",
        "cosmwasm_version": "0.33.0",
        "cosmwasm_enabled": true,
        "ibc_go_version": "v4.4.2",
        "next_version_name": ""
      }
    ]
  },
  "fees": {
    "fee_tokens": [
      {
        "denom": "ubtsg",
        "fixed_min_gas_price": 0,
        "low_gas_price": 3,
        "average_gas_price": 10,
        "high_gas_price": 20
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "ubtsg"
      }
    ]
  },
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg"
  },
  "description": "Artists, Fans, Managers and Labels in One Single Holistic Ecosystem: $BTSG. Earn real-time royalties, discover exclusive content, mint and trade Fantokens, buy & sell NFTs.",
  "peers": {
    "seeds": [
      {
        "id": "20e1000e88125698264454a884812746c2eb4807",
        "address": "seeds.lavenderfive.com:16056",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "id": "10de6c207e60b876bdd88571db44d29c18d0cb5d",
        "address": "seed-bitsong.starsquid.io:15605",
        "provider": "Starsquid"
      },
      {
        "id": "8542cd7e6bf9d260fef543bc49e59be5a3fa9074",
        "address": "seed.publicnode.com:26656",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "id": "8defec7d0eec97f507411e02fd2634e3efc997a2",
        "address": "bitsong-seed.panthea.eu:41656",
        "provider": "Panthea EU"
      }
    ],
    "persistent_peers": [
      {
        "id": "e9fea0509b1a2d16a10ef9fdea0a4e3edc7ca485",
        "address": "185.144.83.158:26656"
      },
      {
        "id": "0ecf202e90241ca757d25387c18e8a85abc3b5a5",
        "address": "176.9.151.17:26656",
        "provider": "[NODERS]TEAM"
      },
      {
        "id": "3ca45466430bf6e0bfebb758e689e4047f0b73c7",
        "address": "p2p.bitsong.safeblock.space:26656",
        "provider": "Safe Block"
      },
      {
        "id": "2cd6bb75fc9279c62c0ef3af82fbe08632743472",
        "address": "bitsong-peer.panthea.eu:31656",
        "provider": "Panthea EU"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc-bitsong-ia.cosmosia.notional.ventures/",
        "provider": "Notional"
      },
      {
        "address": "https://rpc.explorebitsong.com",
        "provider": "stake.systems"
      },
      {
        "address": "https://bitsong-rpc.validatrium.club",
        "provider": "Validatrium"
      },
      {
        "address": "https://rpc.bitsong.chaintools.tech/",
        "provider": "ChainTools"
      },
      {
        "address": "https://rpc.bitsong.quokkastake.io",
        "provider": "🐹 Quokka Stake"
      },
      {
        "address": "https://bitsong-rpc.lavenderfive.com/",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://rpc-bitsong.starsquid.io",
        "provider": "Starsquid"
      },
      {
        "address": "https://rpc-bitsong.architectnodes.com",
        "provider": "Architect Nodes"
      },
      {
        "address": "http://bitsong.statesync.nodersteam.com:11657",
        "provider": "[NODERS]TEAM"
      },
      {
        "address": "https://rpc.bitsong.safeblock.space",
        "provider": "Safe Block"
      },
      {
        "address": "https://bitsong.tdrsys.com:2053",
        "provider": "TdrSys"
      },
      {
        "address": "https://bitsong-rpc.panthea.eu",
        "provider": "Panthea EU"
      }
    ],
    "rest": [
      {
        "address": "https://api-bitsong-ia.cosmosia.notional.ventures/",
        "provider": "Notional"
      },
      {
        "address": "https://lcd.explorebitsong.com/",
        "provider": "stake.systems"
      },
      {
        "address": "https://bitsong-api.validatrium.club",
        "provider": "Validatrium"
      },
      {
        "address": "https://api.bitsong.quokkastake.io",
        "provider": "🐹 Quokka Stake"
      },
      {
        "address": "http://bitsong.api.nodersteam.com:11017",
        "provider": "[NODERS]TEAM"
      },
      {
        "address": "https://bitsong-api.lavenderfive.com/",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://api-bitsong.starsquid.io",
        "provider": "Starsquid"
      },
      {
        "address": "https://rest-bitsong.architectnodes.com",
        "provider": "Architect Nodes"
      },
      {
        "address": "https://api.bitsong.safeblock.space",
        "provider": "Safe Block"
      },
      {
        "address": "https://bitsong.tdrsys.com",
        "provider": "TdrSys"
      },
      {
        "address": "https://bitsong-api.panthea.eu",
        "provider": "Panthea EU"
      }
    ],
    "grpc": [
      {
        "address": "grpc-bitsong-ia.cosmosia.notional.ventures:443",
        "provider": "Notional"
      },
      {
        "address": "bitsong-grpc.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "bitsong.grpc.nodersteam.com:9111/",
        "provider": "[NODERS]TEAM"
      },
      {
        "address": "grpc.bitsong.safeblock.space:9090",
        "provider": "Safe Block"
      },
      {
        "address": "bitsong-grpc.panthea.eu:16750",
        "provider": "Panthea EU"
      }
    ]
  },
  "explorers": [
    {
      "kind": "ezstaking",
      "url": "https://ezstaking.app/bitsong",
      "tx_page": "https://ezstaking.app/bitsong/txs/${txHash}",
      "account_page": "https://ezstaking.app/bitsong/account/${accountAddress}"
    },
    {
      "kind": "ping.pub",
      "url": "https://ping.pub/bitsong",
      "tx_page": "https://ping.pub/bitsong/tx/${txHash}"
    },
    {
      "kind": "mintscan",
      "url": "https://www.mintscan.io/bitsong",
      "tx_page": "https://www.mintscan.io/bitsong/transactions/${txHash}",
      "account_page": "https://www.mintscan.io/bitsong/accounts/${accountAddress}"
    },
    {
      "kind": "bigdipper",
      "url": "https://bigdipper.live/bitsong",
      "tx_page": "https://bigdipper.live/bitsong/transactions/${txHash}",
      "account_page": "https://bigdipper.live/bitsong/accounts/${accountAddress}"
    },
    {
      "kind": "atomscan",
      "url": "https://atomscan.com/bitsong",
      "tx_page": "https://atomscan.com/bitsong/transactions/${txHash}",
      "account_page": "https://atomscan.com/bitsong/accounts/${accountAddress}"
    },
    {
      "kind": "Safe Block",
      "url": "https://explorer.safeblok.space/bitsong",
      "tx_page": "https://explorer.safeblock.space/bitsong/tx/${txHash}",
      "account_page": "https://explorer.safeblock.space/bitsong/account/${accountAddress}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg"
    }
  ]
}

export const bitsongAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "bitsong",
  "assets": [
    {
      "description": "BitSong Native Token",
      "denom_units": [
        {
          "denom": "ubtsg",
          "exponent": 0
        },
        {
          "denom": "btsg",
          "exponent": 6
        }
      ],
      "base": "ubtsg",
      "name": "BitSong",
      "display": "btsg",
      "symbol": "BTSG",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg"
      },
      "type_asset": "sdk.coin",
      "coingecko_id": "bitsong",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg"
        }
      ],
      "socials": {
        "webiste": "https://bitsong.io/",
        "twitter": "https://twitter.com/BitSongOfficial"
      }
    },
    {
      "description": "Adam Clay a BitSong Music FanToken",
      "denom_units": [
        {
          "denom": "ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09",
          "exponent": 0
        },
        {
          "denom": "clay",
          "exponent": 6
        }
      ],
      "base": "ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09",
      "name": "Adam Clay FanToken",
      "display": "clay",
      "symbol": "CLAY",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09.png"
        }
      ]
    },
    {
      "description": "Nicola Fasano a BitSong Music FanToken",
      "denom_units": [
        {
          "denom": "ft25B30C386CDDEBD1413D5AE1180956AE9EB3B9F7",
          "exponent": 0
        },
        {
          "denom": "fasano",
          "exponent": 6
        }
      ],
      "base": "ft25B30C386CDDEBD1413D5AE1180956AE9EB3B9F7",
      "name": "Nicola Fasano Fantoken",
      "display": "fasano",
      "symbol": "FASANO",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft25B30C386CDDEBD1413D5AE1180956AE9EB3B9F7.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft25B30C386CDDEBD1413D5AE1180956AE9EB3B9F7.png"
        }
      ]
    },
    {
      "description": "Delta 9 a BitSong Music FanToken",
      "denom_units": [
        {
          "denom": "ft575B10B0CEE2C164D9ED6A96313496F164A9607C",
          "exponent": 0
        },
        {
          "denom": "d9x",
          "exponent": 6
        }
      ],
      "base": "ft575B10B0CEE2C164D9ED6A96313496F164A9607C",
      "name": "Delta 9 Fantoken",
      "display": "d9x",
      "symbol": "D9X",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft575B10B0CEE2C164D9ED6A96313496F164A9607C.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft575B10B0CEE2C164D9ED6A96313496F164A9607C.png"
        }
      ]
    },
    {
      "description": "FONTI a BitSong Music FanToken",
      "denom_units": [
        {
          "denom": "ft56664FC98A2CF5F4FBAC3566D1A11D891AD88305",
          "exponent": 0
        },
        {
          "denom": "fonti",
          "exponent": 6
        }
      ],
      "base": "ft56664FC98A2CF5F4FBAC3566D1A11D891AD88305",
      "name": "FONTI Fantoken",
      "display": "fonti",
      "symbol": "FONTI",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft56664FC98A2CF5F4FBAC3566D1A11D891AD88305.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft56664FC98A2CF5F4FBAC3566D1A11D891AD88305.png"
        }
      ]
    },
    {
      "description": "BlackJack a BitSong Music FanToken",
      "denom_units": [
        {
          "denom": "ft52EEB0EE509AC546ED92EAC8591F731F213DDD16",
          "exponent": 0
        },
        {
          "denom": "bjks",
          "exponent": 6
        }
      ],
      "base": "ft52EEB0EE509AC546ED92EAC8591F731F213DDD16",
      "name": "BlackJack Fantoken",
      "display": "bjks",
      "symbol": "BJKS",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft52EEB0EE509AC546ED92EAC8591F731F213DDD16.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft52EEB0EE509AC546ED92EAC8591F731F213DDD16.png"
        }
      ]
    },
    {
      "description": "Rawanne a BitSong Music FanToken",
      "denom_units": [
        {
          "denom": "ftE4903ECC861CA45F2C2BC7EAB8255D2E6E87A33A",
          "exponent": 0
        },
        {
          "denom": "rwne",
          "exponent": 6
        }
      ],
      "base": "ftE4903ECC861CA45F2C2BC7EAB8255D2E6E87A33A",
      "name": "Rawanne Fantoken",
      "display": "rwne",
      "symbol": "RWNE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ftE4903ECC861CA45F2C2BC7EAB8255D2E6E87A33A.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ftE4903ECC861CA45F2C2BC7EAB8255D2E6E87A33A.png"
        }
      ]
    },
    {
      "description": "Enmoda a BitSong Music FanToken",
      "denom_units": [
        {
          "denom": "ft85AE1716C5E39EA6D64BBD7898C3899A7B500626",
          "exponent": 0
        },
        {
          "denom": "enmoda",
          "exponent": 6
        }
      ],
      "base": "ft85AE1716C5E39EA6D64BBD7898C3899A7B500626",
      "name": "Enmoda Fantoken",
      "display": "enmoda",
      "symbol": "ENMODA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft85AE1716C5E39EA6D64BBD7898C3899A7B500626.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft85AE1716C5E39EA6D64BBD7898C3899A7B500626.png"
        }
      ]
    },
    {
      "description": "404Deep Records a BitSong Music FanToken",
      "denom_units": [
        {
          "denom": "ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A",
          "exponent": 0
        },
        {
          "denom": "404dr",
          "exponent": 6
        }
      ],
      "base": "ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A",
      "name": "404Deep Records Fantoken",
      "display": "404dr",
      "symbol": "404DR",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A.png"
        }
      ]
    },
    {
      "description": "N43 a BitSong Music FanToken",
      "denom_units": [
        {
          "denom": "ft387C1C279D962ED80C09C1D592A92C4275FD7C5D",
          "exponent": 0
        },
        {
          "denom": "n43",
          "exponent": 6
        }
      ],
      "base": "ft387C1C279D962ED80C09C1D592A92C4275FD7C5D",
      "name": "N43 Fantoken",
      "display": "n43",
      "symbol": "N43",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft387C1C279D962ED80C09C1D592A92C4275FD7C5D.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft387C1C279D962ED80C09C1D592A92C4275FD7C5D.png"
        }
      ]
    },
    {
      "description": "Puro Lobo a BitSong Music FanToken",
      "denom_units": [
        {
          "denom": "ft24C9FA4F10B0F235F4A815B15FC774E046A2B2EB",
          "exponent": 0
        },
        {
          "denom": "lobo",
          "exponent": 6
        }
      ],
      "base": "ft24C9FA4F10B0F235F4A815B15FC774E046A2B2EB",
      "name": "Puro Lobo Fantoken",
      "display": "lobo",
      "symbol": "LOBO",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft24C9FA4F10B0F235F4A815B15FC774E046A2B2EB.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft24C9FA4F10B0F235F4A815B15FC774E046A2B2EB.png"
        }
      ]
    },
    {
      "description": "Vibranium a BitSong Music FanToken",
      "denom_units": [
        {
          "denom": "ft7020C2A8E984EEBCBB383E91CD6FBB067BB2272B",
          "exponent": 0
        },
        {
          "denom": "vibra",
          "exponent": 6
        }
      ],
      "base": "ft7020C2A8E984EEBCBB383E91CD6FBB067BB2272B",
      "name": "Vibranium Fantoken",
      "display": "vibra",
      "symbol": "VIBRA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft7020C2A8E984EEBCBB383E91CD6FBB067BB2272B.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft7020C2A8E984EEBCBB383E91CD6FBB067BB2272B.png"
        }
      ]
    },
    {
      "description": "Karina a BitSong Music FanToken",
      "denom_units": [
        {
          "denom": "ft2DD67F5D99E9A141142B48474FA7B6B3FF00A3FE",
          "exponent": 0
        },
        {
          "denom": "karina",
          "exponent": 6
        }
      ],
      "base": "ft2DD67F5D99E9A141142B48474FA7B6B3FF00A3FE",
      "name": "Karina Fantoken",
      "display": "karina",
      "symbol": "KARINA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft2DD67F5D99E9A141142B48474FA7B6B3FF00A3FE.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft2DD67F5D99E9A141142B48474FA7B6B3FF00A3FE.png"
        }
      ]
    },
    {
      "description": "Luca Testa a BitSong Music FanToken",
      "denom_units": [
        {
          "denom": "ft4B030260D99E3ABE2B604EA2B33BAF3C085CDA12",
          "exponent": 0
        },
        {
          "denom": "testa",
          "exponent": 6
        }
      ],
      "base": "ft4B030260D99E3ABE2B604EA2B33BAF3C085CDA12",
      "name": "Luca Testa Fantoken",
      "display": "testa",
      "symbol": "TESTA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft4B030260D99E3ABE2B604EA2B33BAF3C085CDA12.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft4B030260D99E3ABE2B604EA2B33BAF3C085CDA12.png"
        }
      ]
    },
    {
      "description": "Carolina Marquez a BitSong Music FanToken",
      "denom_units": [
        {
          "denom": "ftD4B6290EDEE1EC7B97AB5A1DC6C177EFD08ADCC3",
          "exponent": 0
        },
        {
          "denom": "cmqz",
          "exponent": 6
        }
      ],
      "base": "ftD4B6290EDEE1EC7B97AB5A1DC6C177EFD08ADCC3",
      "name": "Carolina Marquez Fantoken",
      "display": "cmqz",
      "symbol": "CMQZ",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ftD4B6290EDEE1EC7B97AB5A1DC6C177EFD08ADCC3.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ftD4B6290EDEE1EC7B97AB5A1DC6C177EFD08ADCC3.png"
        }
      ]
    },
    {
      "deprecated": true,
      "description": "[Redacted] a BitSong Music FanToken",
      "denom_units": [
        {
          "denom": "ft347B1612A2B7659913679CF6CD45B8B130C50A00",
          "exponent": 0
        },
        {
          "denom": "ft347B1612A2B7659913679CF6CD45B8B130C50A00/6",
          "exponent": 6
        }
      ],
      "base": "ft347B1612A2B7659913679CF6CD45B8B130C50A00",
      "name": "[Redacted] Fantoken (ft3...A00)",
      "display": "ft347B1612A2B7659913679CF6CD45B8B130C50A00/6",
      "symbol": "LDON"
    }
  ]
}

