import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const terra2: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "terra2",
  "status": "live",
  "network_type": "mainnet",
  "website": "https://www.terra.money/",
  "pretty_name": "Terra",
  "chain_id": "phoenix-1",
  "daemon_name": "terrad",
  "node_home": "$HOME/.terra",
  "bech32_prefix": "terra",
  "slip44": 330,
  "fees": {
    "fee_tokens": [
      {
        "denom": "uluna",
        "fixed_min_gas_price": 0.015,
        "low_gas_price": 0.015,
        "average_gas_price": 0.015,
        "high_gas_price": 0.04
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "uluna"
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/terra-money/core/",
    "recommended_version": "v2.10.2",
    "compatible_versions": [
      "v2.10.2"
    ],
    "binaries": {
      "linux/arm64": "https://github.com/terra-money/core/releases/download/v2.10.2/terra_2.10.2_Linux_arm64.tar.gz",
      "linux/amd64": "https://github.com/terra-money/core/releases/download/v2.10.2/terra_2.10.2_Linux_x86_64.tar.gz"
    },
    "genesis": {
      "name": "v2.0",
      "genesis_url": "https://tfl-phoenix-1.s3.amazonaws.com/genesis.json"
    },
    "versions": [
      {
        "name": "v2.0",
        "tag": "v2.0.1",
        "recommended_version": "v2.0.1",
        "cosmos_sdk_version": "0.45.4",
        "cosmwasm_enabled": true,
        "cosmwasm_version": "0.27.0",
        "ibc_go_version": "3.0.0",
        "consensus": {
          "type": "tendermint",
          "version": "0.34.19"
        },
        "height": 1,
        "next_version_name": "v2.1",
        "binaries": {
          "linux/amd64": "https://github.com/terra-money/core/releases/download/v2.0.1/terra_2.0.1_Linux_x86_64.tar.gz?checksum=sha256:eae23aad59b36ea2adaa541a7662a6119569279d2e6c4013e3deee96e9263b30",
          "darwin/amd64": "https://github.com/terra-money/core/releases/download/v2.0.1/terra_2.0.1_Darwin_x86_64.tar.gz?checksum=sha256:c2a6b1bff922b127a31757bdb0c8f05a34f3b1f879dee1e862f9f8b748e15a54"
        }
      },
      {
        "name": "v2.1",
        "tag": "v2.1.4",
        "recommended_version": "v2.1.4",
        "cosmos_sdk_version": "0.46.9",
        "cosmwasm_enabled": true,
        "cosmwasm_version": "0.27.0",
        "ibc_go_version": "3.0.0",
        "consensus": {
          "type": "tendermint",
          "version": "0.34.21"
        },
        "height": 890000,
        "next_version_name": "v2.2",
        "binaries": {
          "linux/amd64": "https://github.com/terra-money/core/releases/download/v2.1.4/terra_2.1.4_Linux_x86_64.tar.gz?checksum=sha256:e05b85ae2eac5df886f4f9d0ecf719b82ebe4da4fc59cae93a34af7c3e89ddfb",
          "darwin/amd64": "https://github.com/terra-money/core/releases/download/v2.1.4/terra_2.1.4_Darwin_x86_64.tar.gz?checksum=sha256:4b66ebf800cb903f7b6c07686636eff43e686f5956c9fadc307f077afd7f23bb"
        }
      },
      {
        "name": "v2.2",
        "tag": "v2.2.1",
        "height": 2979805,
        "recommended_version": "v2.2.1",
        "compatible_versions": [
          "v2.2.0",
          "v2.2.1"
        ],
        "cosmos_sdk_version": "v0.46.11",
        "cosmwasm_enabled": true,
        "cosmwasm_version": "v0.27.0",
        "ibc_go_version": "v3.4.0",
        "consensus": {
          "type": "tendermint",
          "version": "v0.34.21"
        },
        "next_version_name": "v2.3",
        "binaries": {
          "linux/amd64": "https://github.com/terra-money/core/releases/download/v2.2.1/terra_2.2.1_Linux_x86_64.tar.gz?checksum=sha256:8a9353ae3c33a750ce2a9d236f00c12c5449c41fad96e9885a5c0b8678fcf8bc"
        }
      },
      {
        "name": "v2.3",
        "tag": "v2.3.5",
        "height": 4711800,
        "recommended_version": "v2.3.5",
        "compatible_versions": [
          "v2.3.0",
          "v2.3.1",
          "v2.3.2",
          "v2.3.4",
          "v2.3.5"
        ],
        "cosmos_sdk_version": "v0.46.11",
        "cosmwasm_enabled": true,
        "cosmwasm_version": "v0.30.0",
        "ibc_go_version": "v6.1.1",
        "consensus": {
          "type": "tendermint",
          "version": "v0.34.27"
        },
        "binaries": {
          "linux/arm64": "https://github.com/terra-money/core/releases/download/v2.3.5/terra_2.3.5_Linux_arm64.tar.gz?checksum=sha256:93b0c508e16f779b93f0e76629ab247ddaf5fa0db96573405b3b2b11e3eb6859",
          "linux/amd64": "https://github.com/terra-money/core/releases/download/v2.3.5/terra_2.3.5_Linux_x86_64.tar.gz?checksum=sha256:8c3ac7392436b102dcdd63fd275fa73b1e0201e65e420af71954782cee682ac6"
        },
        "next_version_name": "v2.4"
      },
      {
        "name": "v2.4",
        "tag": "v2.4.1",
        "proposal": 4737,
        "height": 5994365,
        "cosmos_sdk_version": "v0.46.11",
        "cosmwasm_enabled": true,
        "cosmwasm_version": "v0.30.0",
        "ibc_go_version": "v6.1.1",
        "consensus": {
          "type": "tendermint",
          "version": "v0.34.27"
        },
        "binaries": {
          "linux/arm64": "https://github.com/terra-money/core/releases/download/v2.4.1/terra_2.4.1_Linux_arm64.tar.gz",
          "linux/amd64": "https://github.com/terra-money/core/releases/download/v2.4.1/terra_2.4.1_Linux_x86_64.tar.gz"
        },
        "next_version_name": "v2.5"
      },
      {
        "name": "v2.5",
        "tag": "v2.5.2",
        "proposal": 4785,
        "height": 7316000,
        "cosmos_sdk_version": "v0.47.5-terra.2",
        "cosmwasm_enabled": true,
        "cosmwasm_version": "v0.41.0",
        "ibc_go_version": "v7.3.1",
        "consensus": {
          "type": "cometbft",
          "version": "v0.37.2"
        },
        "binaries": {
          "linux/arm64": "https://github.com/terra-money/core/releases/download/v2.5.2/terra_2.5.2_Linux_arm64.tar.gz",
          "linux/amd64": "https://github.com/terra-money/core/releases/download/v2.5.2/terra_2.5.2_Linux_x86_64.tar.gz"
        },
        "next_version_name": "v2.6"
      },
      {
        "name": "v2.6",
        "tag": "v2.6.4",
        "recommended_version": "v2.6.4",
        "compatible_versions": [
          "v2.6.3",
          "v2.6.4"
        ],
        "proposal": 4792,
        "height": 7722000,
        "cosmos_sdk_version": "v0.47.5-terra.2",
        "cosmwasm_enabled": true,
        "cosmwasm_version": "v0.43.0",
        "ibc_go_version": "v7.3.0",
        "consensus": {
          "type": "cometbft",
          "version": "v0.37.2"
        },
        "binaries": {
          "linux/arm64": "https://github.com/terra-money/core/releases/download/v2.6.4/terra_2.6.4_Linux_arm64.tar.gz",
          "linux/amd64": "https://github.com/terra-money/core/releases/download/v2.6.4/terra_2.6.4_Linux_x86_64.tar.gz"
        },
        "next_version_name": "v2.9"
      },
      {
        "name": "v2.9",
        "tag": "v2.9.3",
        "recommended_version": "v2.9.4",
        "compatible_versions": [
          "v2.9.4"
        ],
        "proposal": 4798,
        "height": 8782000,
        "cosmos_sdk_version": "v0.47.5-terra.2",
        "cosmwasm_enabled": true,
        "cosmwasm_version": "v0.43.0-terra",
        "ibc_go_version": "v7.3.0",
        "consensus": {
          "type": "cometbft",
          "version": "v0.37.2"
        },
        "binaries": {
          "linux/arm64": "https://github.com/terra-money/core/releases/download/v2.9.4/terra_2.9.4_Linux_arm64.tar.gz",
          "linux/amd64": "https://github.com/terra-money/core/releases/download/v2.9.4/terra_2.9.4_Linux_x86_64.tar.gz"
        },
        "next_version_name": "v2.10"
      },
      {
        "name": "v2.10",
        "tag": "v2.10.2",
        "recommended_version": "v2.10.2",
        "compatible_versions": [
          "v2.10.2"
        ],
        "proposal": 4805,
        "height": 9444000,
        "cosmos_sdk_version": "v0.47.5-terra.2",
        "cosmwasm_enabled": true,
        "cosmwasm_version": "v0.43.0-terra",
        "ibc_go_version": "v7.3.0",
        "consensus": {
          "type": "cometbft",
          "version": "v0.37.2"
        },
        "binaries": {
          "linux/arm64": "https://github.com/terra-money/core/releases/download/v2.10.2/terra_2.10.2_Linux_arm64.tar.gz",
          "linux/amd64": "https://github.com/terra-money/core/releases/download/v2.10.2/terra_2.10.2_Linux_x86_64.tar.gz"
        },
        "next_version_name": ""
      }
    ]
  },
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg"
  },
  "description": "Fueled by a passionate community and deep developer talent pool, the Terra blockchain is built to enable the next generation of Web3 products and services.",
  "peers": {
    "seeds": [
      {
        "id": "406bcf90a7b29df6ae475a1f94abe04ebde805af",
        "address": "phoenix.seed.stakebin.io:16656"
      },
      {
        "id": "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
        "address": "seeds.polkachu.com:11756",
        "provider": "Polkachu"
      },
      {
        "id": "20e1000e88125698264454a884812746c2eb4807",
        "address": "seeds.lavenderfive.com:11756",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
        "address": "terra-mainnet-seed.autostake.com:27486",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "id": "8542cd7e6bf9d260fef543bc49e59be5a3fa9074",
        "address": "seed.publicnode.com:26656",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "id": "a8d12536bdcc210ac35a9f092f3295360b97830d",
        "address": "seed-terra-01.stakeflow.io:33007",
        "provider": "Stakeflow"
      }
    ],
    "persistent_peers": [
      {
        "id": "0f1096278efafcf3f0d3bd5b6544e6b8dcc36a0e",
        "address": "206.189.129.195:26656"
      },
      {
        "id": "9038d63588e0ab421fa71582720c1efb1ee867f6",
        "address": "45.34.1.114:27656"
      },
      {
        "id": "f2069012aec5ced4e88e7e4311391eabe72bb5a3",
        "address": "node-phoenix.terra.lunastations.online:26656"
      },
      {
        "id": "ebc272824924ea1a27ea3183dd0b9ba713494f83",
        "address": "terra-mainnet-peer.autostake.com:27486",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "id": "86bd5cb6e762f673f1706e5889e039d5406b4b90",
        "address": "terra.seed.node75.org:10856",
        "provider": "Pro-Nodes75"
      },
      {
        "id": "a8d12536bdcc210ac35a9f092f3295360b97830d",
        "address": "peer-terra-01.stakeflow.io:33007",
        "provider": "Stakeflow"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://terra2-rpc.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://terra-rpc.polkachu.com",
        "provider": "polkachu"
      },
      {
        "address": "https://terra-rpc.stakely.io:443/",
        "provider": "stakely"
      },
      {
        "address": "https://phoenix-rpc.terra.dev:443",
        "provider": "Terraform Labs"
      },
      {
        "address": "https://terra-rpc.publicnode.com:443",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "address": "https://rpc-terra-01.stakeflow.io",
        "provider": "Stakeflow"
      },
      {
        "address": "https://rpc-terra.cosmos-spaces.cloud",
        "provider": "Cosmos Spaces"
      },
      {
        "address": "https://terra-phoenix-rpc.highstakes.ch",
        "provider": "High Stakes 🇨🇭"
      },
      {
        "address": "https://rpc-terra.wildsage.io",
        "provider": "🧙 WildSage Labs"
      },
      {
        "address": "https://terra.interstellar-lounge.org",
        "provider": "Interstellar Lounge 🍸"
      },
      {
        "address": "https://terra2.tdrsys.com:2053",
        "provider": "TdrSys"
      },
      {
        "address": "https://terra-rpc.cosmosrescue.dev:8443",
        "provider": "cosmosrescue"
      }
    ],
    "rest": [
      {
        "address": "https://lcd-terra.wildsage.io",
        "provider": "🧙 WildSage Labs"
      },
      {
        "address": "https://phoenix-lcd.terra.dev:443",
        "provider": "Terraform Labs"
      },
      {
        "address": "https://api-terra.cosmos-spaces.cloud",
        "provider": "Cosmos Spaces"
      },
      {
        "address": "https://terra-rest.publicnode.com",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "address": "https://api-terra-01.stakeflow.io",
        "provider": "Stakeflow"
      },
      {
        "address": "https://terra-phoenix-api.highstakes.ch",
        "provider": "High Stakes 🇨🇭"
      },
      {
        "address": "https://terra-rest.interstellar-lounge.org",
        "provider": "Interstellar Lounge 🍸"
      },
      {
        "address": "https://terra2.tdrsys.com",
        "provider": "TdrSys"
      },
      {
        "address": "https://terra-api.cosmosrescue.dev:8443",
        "provider": "cosmosrescue"
      }
    ],
    "grpc": [
      {
        "address": "terra2-grpc.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "terra-grpc.polkachu.com:11790",
        "provider": "Polkachu"
      },
      {
        "address": "terra-mainnet-grpc.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "terra-grpc.publicnode.com:443",
        "provider": "Allnodes ⚡️ Nodes & Staking"
      },
      {
        "address": "grpc-terra.cosmos-spaces.cloud:2690",
        "provider": "Cosmos Spaces"
      },
      {
        "address": "grpc-terra-01.stakeflow.io:1102",
        "provider": "Stakeflow"
      },
      {
        "address": "https://terra2.tdrsys.com:2083",
        "provider": "TdrSys"
      }
    ]
  },
  "explorers": [
    {
      "kind": "atomscan",
      "url": "https://atomscan.com/terra2",
      "tx_page": "https://atomscan.com/terra2/transactions/${txHash}",
      "account_page": "https://atomscan.com/terra2/accounts/${accountAddress}"
    },
    {
      "kind": "finder",
      "url": "http://finder.terra.money/",
      "tx_page": "https://finder.terra.money/mainnet/tx/${txHash}",
      "account_page": "https://finder.terra.money/mainnet/address/${accountAddress}"
    },
    {
      "kind": "Stakeflow",
      "url": "https://stakeflow.io/terra",
      "account_page": "https://stakeflow.io/terra/accounts/${accountAddress}"
    },
    {
      "kind": "mintscan",
      "url": "https://www.mintscan.io/terra",
      "tx_page": "https://www.mintscan.io/terra/transactions/${txHash}",
      "account_page": "https://www.mintscan.io/terra/accounts/${accountAddress}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg"
    }
  ]
}

export const terra2AssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "terra2",
  "assets": [
    {
      "description": "The native staking token of Terra.",
      "denom_units": [
        {
          "denom": "uluna",
          "exponent": 0
        },
        {
          "denom": "luna",
          "exponent": 6
        }
      ],
      "base": "uluna",
      "name": "Luna",
      "display": "luna",
      "symbol": "LUNA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg"
      },
      "coingecko_id": "terra-luna-2",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg"
        }
      ],
      "socials": {
        "webiste": "https://www.terra.money/",
        "twitter": "https://twitter.com/terra_money"
      }
    },
    {
      "description": "Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.",
      "denom_units": [
        {
          "denom": "cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26",
          "exponent": 0
        },
        {
          "denom": "astro",
          "exponent": 6
        }
      ],
      "type_asset": "cw20",
      "address": "terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26",
      "base": "cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26",
      "name": "Astroport",
      "display": "astro",
      "symbol": "ASTRO",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro.svg"
      },
      "coingecko_id": "astroport-fi",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro.svg"
        }
      ],
      "socials": {
        "webiste": "https://astroport.finance/",
        "twitter": "https://twitter.com/astroport_fi"
      }
    },
    {
      "description": "Dinheiros is the reserve currency of dioalma.protocol, an undivisible and rare token.",
      "denom_units": [
        {
          "denom": "cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k",
          "exponent": 0
        },
        {
          "denom": "Dinheiros",
          "exponent": 0
        }
      ],
      "type_asset": "cw20",
      "address": "terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k",
      "base": "cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k",
      "name": "dinheiro",
      "display": "Dinheiros",
      "symbol": "DINHEIROS",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Dinheiros.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Dinheiros.png"
        }
      ]
    },
    {
      "description": "Reis is the king of trading, high volume high liquidity, sibling of Dinheiros, Reis and Alem, a token of dioalma.protocol.",
      "denom_units": [
        {
          "denom": "cw20:terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8",
          "exponent": 0
        },
        {
          "denom": "Reis",
          "exponent": 6
        }
      ],
      "type_asset": "cw20",
      "address": "terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8",
      "base": "cw20:terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8",
      "name": "real",
      "display": "Reis",
      "symbol": "REIS",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Reis.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Reis.png"
        }
      ]
    },
    {
      "description": "Escudos is the everyday currency of dioalma.protocol, good to send money back and foward.",
      "denom_units": [
        {
          "denom": "cw20:terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg",
          "exponent": 0
        },
        {
          "denom": "Escudos",
          "exponent": 6
        }
      ],
      "type_asset": "cw20",
      "address": "terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg",
      "base": "cw20:terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg",
      "name": "escudo",
      "display": "Escudos",
      "symbol": "ESCUDOS",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Escudos.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Escudos.png"
        }
      ]
    },
    {
      "description": "Alem is a local currency for the region of Alentejo in Portugal, sibling of Dinheiros, Reis and Alem, a token of dioalma.protocol.",
      "denom_units": [
        {
          "denom": "cw20:terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q",
          "exponent": 0
        },
        {
          "denom": "Alem",
          "exponent": 6
        }
      ],
      "type_asset": "cw20",
      "address": "terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q",
      "base": "cw20:terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q",
      "name": "alentejo.money",
      "display": "Alem",
      "symbol": "ALEM",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Alem.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Alem.png"
        }
      ]
    },
    {
      "description": "ERIS liquid staked LUNA.",
      "type_asset": "cw20",
      "address": "terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct",
      "denom_units": [
        {
          "denom": "cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct",
          "exponent": 0
        },
        {
          "denom": "ampluna",
          "exponent": 6
        }
      ],
      "base": "cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct",
      "name": "ERIS Amplified LUNA",
      "display": "ampluna",
      "symbol": "ampLUNA",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampluna.svg"
      },
      "coingecko_id": "eris-amplified-luna",
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampluna.svg"
        }
      ]
    },
    {
      "description": "Lion DAO is a community DAO that lives on the Terra blockchain with the mission to reactivate the LUNAtic community and showcase Terra protocols & tooling",
      "type_asset": "cw20",
      "address": "terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv",
      "denom_units": [
        {
          "denom": "cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv",
          "exponent": 0
        },
        {
          "denom": "roar",
          "exponent": 6
        }
      ],
      "base": "cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv",
      "name": "Lion DAO",
      "display": "roar",
      "symbol": "ROAR",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png"
      },
      "coingecko_id": "lion-dao",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png"
        }
      ]
    },
    {
      "description": "GEM DAO, building a decentralized, community-owned, low-supply store of value",
      "type_asset": "cw20",
      "address": "terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv",
      "denom_units": [
        {
          "denom": "cw20:terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv",
          "exponent": 0
        },
        {
          "denom": "gem",
          "exponent": 6
        }
      ],
      "base": "cw20:terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv",
      "name": "GEM DAO",
      "display": "gem",
      "symbol": "GEM",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gem.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gem.png"
        }
      ]
    },
    {
      "description": "Lion Cub DAO is a useless meme community DAO on Terra",
      "type_asset": "cw20",
      "address": "terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t",
      "denom_units": [
        {
          "denom": "cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t",
          "exponent": 0
        },
        {
          "denom": "cub",
          "exponent": 6
        }
      ],
      "base": "cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t",
      "name": "Lion Cub DAO",
      "display": "cub",
      "symbol": "CUB",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png"
        }
      ]
    },
    {
      "description": "BLUE CUB DAO is a community DAO on Terra",
      "type_asset": "cw20",
      "address": "terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584",
      "denom_units": [
        {
          "denom": "cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584",
          "exponent": 0
        },
        {
          "denom": "blue",
          "exponent": 6
        }
      ],
      "base": "cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584",
      "name": "BLUE CUB DAO",
      "display": "blue",
      "symbol": "BLUE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png"
        }
      ]
    },
    {
      "description": "Liquidity token, NFT, HARVEST FOR VALUE",
      "type_asset": "cw20",
      "address": "terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn",
      "denom_units": [
        {
          "denom": "cw20:terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn",
          "exponent": 0
        },
        {
          "denom": "xxx",
          "exponent": 10
        }
      ],
      "base": "cw20:terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn",
      "name": "TheOnlyOne",
      "display": "xxx",
      "symbol": "xxx",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xxx3.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xxx3.png"
        }
      ]
    },
    {
      "description": "Just a meme coin on Terra",
      "type_asset": "cw20",
      "address": "terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces",
      "denom_units": [
        {
          "denom": "cw20:terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces",
          "exponent": 0
        },
        {
          "denom": "GUGU",
          "exponent": 6
        }
      ],
      "base": "cw20:terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces",
      "name": "GUGU",
      "display": "GUGU",
      "symbol": "GUGU",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gugu.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gugu.png"
        }
      ]
    },
    {
      "description": "The GraveDigger is the Liquid Staking Product of BackBone Labs. It will have its own platform. Its liquid staking derivative (LSD) is boneLUNA.",
      "type_asset": "cw20",
      "address": "terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml",
      "denom_units": [
        {
          "denom": "cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml",
          "exponent": 0
        },
        {
          "denom": "bluna",
          "exponent": 6
        }
      ],
      "base": "cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml",
      "name": "boneLuna",
      "display": "bluna",
      "symbol": "bLUNA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/boneluna.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/boneluna.png"
        }
      ]
    },
    {
      "description": "Sayve is a revolutionary language learning app in the Web3 era that combines gamification, blockchain technology, and a Metaverse experience to motivate users to learn languages while earning rewards.",
      "type_asset": "cw20",
      "address": "terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3",
      "denom_units": [
        {
          "denom": "cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3",
          "exponent": 0
        },
        {
          "denom": "sayve",
          "exponent": 6
        }
      ],
      "base": "cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3",
      "name": "sayve",
      "display": "sayve",
      "symbol": "SAYVE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.svg"
        }
      ]
    },
    {
      "description": "ERIS Alliance Staked ampWHALE on Terra",
      "denom_units": [
        {
          "denom": "factory/terra1j35ta0llaxcf55auv2cjqau5a7aee6g8fz7md7my7005cvh23jfsaw83dy/ampWHALEt",
          "exponent": 0
        },
        {
          "denom": "ampWHALEt",
          "exponent": 6
        }
      ],
      "base": "factory/terra1j35ta0llaxcf55auv2cjqau5a7aee6g8fz7md7my7005cvh23jfsaw83dy/ampWHALEt",
      "name": "ERIS Alliance Staked ampWHALE",
      "display": "ampWHALEt",
      "symbol": "ampWHALEt",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampwhalet.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampwhalet.svg"
        }
      ]
    },
    {
      "description": "ERIS Alliance Staked boneWHALE on Terra",
      "denom_units": [
        {
          "denom": "factory/terra10j3zrymfrkta2pxe0gklc79gu06tqyuy8c3kh6tqdsrrprsjqkrqzfl4df/boneWHALEt",
          "exponent": 0
        },
        {
          "denom": "boneWHALEt",
          "exponent": 6
        }
      ],
      "base": "factory/terra10j3zrymfrkta2pxe0gklc79gu06tqyuy8c3kh6tqdsrrprsjqkrqzfl4df/boneWHALEt",
      "name": "ERIS Alliance Staked boneWHALE",
      "display": "boneWHALEt",
      "symbol": "boneWHALEt",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bonewhalet.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bonewhalet.svg"
        }
      ]
    },
    {
      "description": "ERIS Liquid Enterprise Staked ROAR",
      "denom_units": [
        {
          "denom": "factory/terra1vklefn7n6cchn0u962w3gaszr4vf52wjvd4y95t2sydwpmpdtszsqvk9wy/ampROAR",
          "exponent": 0
        },
        {
          "denom": "ampROAR",
          "exponent": 6
        }
      ],
      "base": "factory/terra1vklefn7n6cchn0u962w3gaszr4vf52wjvd4y95t2sydwpmpdtszsqvk9wy/ampROAR",
      "name": "ERIS Amplified ROAR",
      "display": "ampROAR",
      "symbol": "ampROAR",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/amproar.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/amproar.png"
        }
      ]
    },
    {
      "description": "Nico Dao Money",
      "type_asset": "cw20",
      "address": "terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3",
      "denom_units": [
        {
          "denom": "cw20:terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3",
          "exponent": 0
        },
        {
          "denom": "nico",
          "exponent": 18
        }
      ],
      "base": "cw20:terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3",
      "name": "nico",
      "display": "nico",
      "symbol": "NICO",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/nicodao.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/nicodao.png"
        }
      ]
    },
    {
      "description": "Sailing the Seas DAO is a community DAO built on Enterprise on Terra",
      "type_asset": "cw20",
      "address": "terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala",
      "denom_units": [
        {
          "denom": "cw20:terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala",
          "exponent": 0
        },
        {
          "denom": "seas",
          "exponent": 6
        }
      ],
      "base": "cw20:terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala",
      "name": "Sailing The SeaS DAO",
      "display": "seas",
      "symbol": "SEAS",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/SEAS.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/SEAS.png"
        }
      ]
    },
    {
      "description": "A community DAO built on Enterprise",
      "type_asset": "cw20",
      "address": "terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v",
      "denom_units": [
        {
          "denom": "cw20:terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v",
          "exponent": 0
        },
        {
          "denom": "bitz",
          "exponent": 6
        }
      ],
      "base": "cw20:terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v",
      "name": "BitzDAO",
      "display": "bitz",
      "symbol": "BITZ",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/BITZ.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/BITZ.png"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/A356EC90DC3AE43D485514DA7260EDC7ABB5CFAA0654CE2524C739392975AD3C",
          "exponent": 0,
          "aliases": [
            "wstETH"
          ]
        },
        {
          "denom": "factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH",
          "exponent": 18
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/A356EC90DC3AE43D485514DA7260EDC7ABB5CFAA0654CE2524C739392975AD3C",
      "name": "Wrapped Lido Staked Ether",
      "display": "wstETH",
      "symbol": "wstETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "neutron",
            "base_denom": "factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH",
            "channel_id": "channel-25"
          },
          "chain": {
            "channel_id": "channel-229",
            "path": "transfer/channel-229/factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "neutron",
            "base_denom": "factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg"
      }
    },
    {
      "description": "SEUL DAO",
      "type_asset": "cw20",
      "address": "terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l",
      "denom_units": [
        {
          "denom": "cw20:terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l",
          "exponent": 0
        },
        {
          "denom": "seul",
          "exponent": 6
        }
      ],
      "base": "cw20:terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l",
      "name": "seul",
      "display": "seul",
      "symbol": "SEUL",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/seul.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/seul.png"
        }
      ]
    },
    {
      "description": "SEUL DAO",
      "type_asset": "cw20",
      "address": "terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5",
      "denom_units": [
        {
          "denom": "cw20:terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5",
          "exponent": 0
        },
        {
          "denom": "xseul",
          "exponent": 6
        }
      ],
      "base": "cw20:terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5",
      "name": "xseul",
      "display": "xseul",
      "symbol": "xSEUL",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xseul.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xseul.png"
        }
      ]
    },
    {
      "description": "ITO DAO",
      "type_asset": "cw20",
      "address": "terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s",
      "denom_units": [
        {
          "denom": "cw20:terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s",
          "exponent": 0
        },
        {
          "denom": "ito",
          "exponent": 6
        }
      ],
      "base": "cw20:terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s",
      "name": "ito",
      "display": "ito",
      "symbol": "ITO",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/I.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/I.png"
        }
      ]
    },
    {
      "description": "Chris Armani Token",
      "type_asset": "cw20",
      "address": "terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8",
      "denom_units": [
        {
          "denom": "cw20:terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8",
          "exponent": 0
        },
        {
          "denom": "ARMANI",
          "exponent": 6
        }
      ],
      "base": "cw20:terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8",
      "name": "ARMANI",
      "display": "ARMANI",
      "symbol": "ARMANI",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/armani.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/armani.png"
        }
      ]
    },
    {
      "description": "useless meme coin",
      "type_asset": "cw20",
      "address": "terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun",
      "denom_units": [
        {
          "denom": "cw20:terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun",
          "exponent": 0
        },
        {
          "denom": "DROGO",
          "exponent": 6
        }
      ],
      "base": "cw20:terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun",
      "name": "DROGO",
      "display": "DROGO",
      "symbol": "DROGO",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/drogo.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/drogo.png"
        }
      ]
    },
    {
      "description": "ado the flower of night",
      "type_asset": "cw20",
      "address": "terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu",
      "denom_units": [
        {
          "denom": "cw20:terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu",
          "exponent": 0
        },
        {
          "denom": "ADO",
          "exponent": 6
        }
      ],
      "base": "cw20:terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu",
      "name": "ADO",
      "display": "ADO",
      "symbol": "ADO",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ADO.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ADO.png"
        }
      ]
    },
    {
      "description": "The first memecoin on osmosis.",
      "denom_units": [
        {
          "denom": "ibc/7CB33A66F90533ED1E168CB3251253C719CF4B04FF1290AFD795F14CA1D67278",
          "exponent": 0
        },
        {
          "denom": "WOSMO",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/7CB33A66F90533ED1E168CB3251253C719CF4B04FF1290AFD795F14CA1D67278",
      "name": "Wosmo",
      "display": "WOSMO",
      "symbol": "WOSMO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO",
            "channel_id": "channel-1"
          },
          "chain": {
            "channel_id": "channel-251",
            "path": "transfer/channel-251/factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO"
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
      "description": "DNA DAO",
      "type_asset": "cw20",
      "address": "terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h",
      "denom_units": [
        {
          "denom": "cw20:terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h",
          "exponent": 0
        },
        {
          "denom": "DNA",
          "exponent": 6
        }
      ],
      "base": "cw20:terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h",
      "name": "DNA",
      "display": "DNA",
      "symbol": "DNA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/DNA.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/DNA.png"
        }
      ]
    },
    {
      "description": "Bitmos opens doors for BRC20 tokens to thrive alongside established players in the Cosmos Network, revolutionizing decentralized finance (DeFi) for all.",
      "type_asset": "cw20",
      "address": "terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq",
      "denom_units": [
        {
          "denom": "cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq",
          "exponent": 0
        },
        {
          "denom": "bitmos",
          "exponent": 6
        }
      ],
      "base": "cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq",
      "name": "Bitmos",
      "display": "bitmos",
      "symbol": "BMOS",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bitmos.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bitmos.png"
        }
      ]
    }
  ]
}

