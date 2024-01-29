import { Chain } from '@chain-registry/types';
const info: Chain = {
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
  "codebase": {},
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg"
  },
  "description": "Fueled by a passionate community and deep developer talent pool, the Terra blockchain is built to enable the next generation of Web3 products and services.",
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
        "address": "https://terra-mainnet-rpc.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
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
        "address": "https://terra-phoenix-rpc.highstakes.ch:26657/",
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
        "address": "https://terra-mainnet-lcd.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
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
        "address": "https://terra-phoenix-api.highstakes.ch:1317/",
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
};
export default info;