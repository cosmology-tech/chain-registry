import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const emoney: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "emoney",
  "status": "live",
  "network_type": "mainnet",
  "pretty_name": "e-Money",
  "chain_id": "emoney-3",
  "bech32_prefix": "emoney",
  "daemon_name": "emd",
  "node_home": "$HOME/.emd",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "ungm",
        "low_gas_price": 1,
        "average_gas_price": 1,
        "high_gas_price": 1
      },
      {
        "denom": "eeur",
        "low_gas_price": 1,
        "average_gas_price": 1,
        "high_gas_price": 1
      },
      {
        "denom": "echf",
        "low_gas_price": 1,
        "average_gas_price": 1,
        "high_gas_price": 1
      },
      {
        "denom": "enok",
        "low_gas_price": 1,
        "average_gas_price": 1,
        "high_gas_price": 1
      },
      {
        "denom": "esek",
        "low_gas_price": 1,
        "average_gas_price": 1,
        "high_gas_price": 1
      },
      {
        "denom": "edkk",
        "low_gas_price": 1,
        "average_gas_price": 1,
        "high_gas_price": 1
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "ungm"
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/e-money/em-ledger",
    "recommended_version": "v1.1.3",
    "compatible_versions": [
      "v1.1.3"
    ],
    "genesis": {
      "genesis_url": "https://raw.githubusercontent.com/e-money/networks/master/emoney-3/genesis.json"
    },
    "versions": [
      {
        "name": "v1.1.3",
        "recommended_version": "v1.1.3",
        "compatible_versions": [
          "v1.1.3"
        ]
      }
    ]
  },
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg"
  },
  "peers": {
    "seeds": [
      {
        "id": "eb491498b8f91a02090c2feb7ad875df4087772e",
        "address": "seeds.goldenratiostaking.net:1625",
        "provider": "Golden Ratio Staking"
      },
      {
        "id": "ecec8933d80da5fccda6bdd72befe7e064279fc1",
        "address": "207.180.213.123:26676",
        "provider": "easy2stake"
      },
      {
        "id": "1723e34f45f54584f44d193ce9fd9c65271ca0b3",
        "address": "13.124.62.83:26656",
        "provider": "B-Harvest"
      },
      {
        "id": "34eca4a9142bf9c087a987b572c114dad67a8cc5",
        "address": "172.105.148.191:26656",
        "provider": "Cat Boss"
      },
      {
        "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
        "address": "emoney-mainnet-seed.autostake.com:26746",
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
        "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
        "address": "emoney-mainnet-peer.autostake.com:26746",
        "provider": "AutoStake 🛡️ Slash Protected"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://emoney.validator.network",
        "provider": "e-Money"
      },
      {
        "address": "https://rpc-emoney-ia.cosmosia.notional.ventures/",
        "provider": "Notional"
      },
      {
        "address": "https://rpc.emoney.bh.rocks",
        "provider": "BlockHunters 🎯"
      }
    ],
    "rest": [
      {
        "address": "https://emoney.validator.network/api/",
        "provider": "e-Money"
      },
      {
        "address": "https://api-emoney-ia.cosmosia.notional.ventures/",
        "provider": "Notional"
      },
      {
        "address": "https://api.emoney.bh.rocks",
        "provider": "BlockHunters 🎯"
      }
    ],
    "grpc": [
      {
        "address": "grpc-emoney-ia.cosmosia.notional.ventures:443",
        "provider": "Notional"
      },
      {
        "address": "emoney-mainnet-grpc.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      }
    ]
  },
  "explorers": [
    {
      "kind": "ezstaking",
      "url": "https://ezstaking.app/emoney",
      "tx_page": "https://ezstaking.app/emoney/txs/${txHash}",
      "account_page": "https://ezstaking.app/emoney/account/${accountAddress}"
    },
    {
      "kind": "bigdipper",
      "url": "https://bigdipper.live/emoney",
      "tx_page": "https://bigdipper.live/emoney/transactions/${txHash}",
      "account_page": "https://bigdipper.live/emoney/accounts/${accountAddress}"
    },
    {
      "kind": "mintscan",
      "url": "https://www.mintscan.io/emoney",
      "tx_page": "https://www.mintscan.io/emoney/transactions/${txHash}",
      "account_page": "https://www.mintscan.io/emoney/accounts/${accountAddress}"
    },
    {
      "kind": "ping.pub",
      "url": "https://ping.pub/e-money",
      "tx_page": "https://ping.pub/e-money/tx/${txHash}"
    },
    {
      "kind": "atomscan",
      "url": "https://atomscan.com/emoney",
      "tx_page": "https://atomscan.com/emoney/transactions/${txHash}",
      "account_page": "https://atomscan.com/emoney/accounts/${accountAddress}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg"
    }
  ]
}

export const emoneyAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "emoney",
  "assets": [
    {
      "description": "e-Money NGM staking token. In addition to earning staking rewards the token is bought back and burned based on e-Money stablecoin inflation.",
      "denom_units": [
        {
          "denom": "ungm",
          "exponent": 0
        },
        {
          "denom": "ngm",
          "exponent": 6
        }
      ],
      "base": "ungm",
      "name": "e-Money",
      "display": "ngm",
      "symbol": "NGM",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg"
      },
      "coingecko_id": "e-money",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg"
        }
      ]
    },
    {
      "description": "e-Money EUR stablecoin. Audited and backed by fiat EUR deposits and government bonds.",
      "denom_units": [
        {
          "denom": "eeur",
          "exponent": 0
        },
        {
          "denom": "eur",
          "exponent": 6
        }
      ],
      "base": "eeur",
      "name": "e-Money EUR",
      "display": "eur",
      "symbol": "EEUR",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg"
      },
      "coingecko_id": "e-money-eur",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg"
        }
      ]
    },
    {
      "description": "e-Money CHF stablecoin. Audited and backed by fiat CHF deposits and government bonds.",
      "denom_units": [
        {
          "denom": "echf",
          "exponent": 0
        },
        {
          "denom": "chf",
          "exponent": 6
        }
      ],
      "base": "echf",
      "name": "e-Money CHF",
      "display": "chf",
      "symbol": "ECHF",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.svg"
      },
      "coingecko_id": "",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.svg"
        }
      ]
    },
    {
      "description": "e-Money NOK stablecoin. Audited and backed by fiat NOK deposits and government bonds.",
      "denom_units": [
        {
          "denom": "enok",
          "exponent": 0
        },
        {
          "denom": "nok",
          "exponent": 6
        }
      ],
      "base": "enok",
      "name": "e-Money NOK",
      "display": "nok",
      "symbol": "ENOK",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.svg"
      },
      "coingecko_id": "",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.svg"
        }
      ]
    },
    {
      "description": "e-Money DKK stablecoin. Audited and backed by fiat DKK deposits and government bonds.",
      "denom_units": [
        {
          "denom": "edkk",
          "exponent": 0
        },
        {
          "denom": "dkk",
          "exponent": 6
        }
      ],
      "base": "edkk",
      "name": "e-Money DKK",
      "display": "dkk",
      "symbol": "EDKK",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.svg"
      },
      "coingecko_id": "",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.svg"
        }
      ]
    },
    {
      "description": "e-Money SEK stablecoin. Audited and backed by fiat SEK deposits and government bonds.",
      "denom_units": [
        {
          "denom": "esek",
          "exponent": 0
        },
        {
          "denom": "sek",
          "exponent": 6
        }
      ],
      "base": "esek",
      "name": "e-Money SEK",
      "display": "sek",
      "symbol": "ESEK",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.svg"
      },
      "coingecko_id": "",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.svg"
        }
      ]
    }
  ]
}

