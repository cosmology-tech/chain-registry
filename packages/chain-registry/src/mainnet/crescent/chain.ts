import { Chain } from '@chain-registry/types';
const info: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "crescent",
  "status": "live",
  "network_type": "mainnet",
  "pretty_name": "Crescent",
  "chain_id": "crescent-1",
  "bech32_prefix": "cre",
  "daemon_name": "crescentd",
  "node_home": "$HOME/.crescent",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "ucre",
        "fixed_min_gas_price": 0,
        "low_gas_price": 0.01,
        "average_gas_price": 0.025,
        "high_gas_price": 0.03
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "ucre"
      }
    ]
  },
  "codebase": {},
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg"
  },
  "apis": {
    "rpc": [
      {
        "address": "https://mainnet.crescent.network:26657",
        "provider": "crescent"
      },
      {
        "address": "https://crescent-rpc.polkachu.com",
        "provider": "Polkachu"
      },
      {
        "address": "https://rpc-crescent.pupmos.network",
        "provider": "PUPMØS"
      },
      {
        "address": "https://crescent.rpc.stakin-nodes.com",
        "provider": "Stakin"
      },
      {
        "address": "https://crescent-mainnet-rpc.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "https://rpc-crescent.cosmos-spaces.cloud",
        "provider": "Cosmos Spaces"
      },
      {
        "address": "https://rpc-crescent-01.stakeflow.io",
        "provider": "Stakeflow"
      },
      {
        "address": "https://crescent-rpc.w3coins.io",
        "provider": "w3coins"
      },
      {
        "address": "https://rpc.crescent.bronbro.io:443",
        "provider": "Bro_n_Bro"
      }
    ],
    "rest": [
      {
        "address": "https://mainnet.crescent.network:1317",
        "provider": "crescent"
      },
      {
        "address": "https://api-crescent.pupmos.network",
        "provider": "PUPMØS"
      },
      {
        "address": "https://crescent-api.polkachu.com",
        "provider": "Polkachu"
      },
      {
        "address": "https://crescent.rest.stakin-nodes.com",
        "provider": "Stakin"
      },
      {
        "address": "https://api-crescent.cosmos-spaces.cloud",
        "provider": "Cosmos Spaces"
      },
      {
        "address": "https://crescent-mainnet-lcd.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "https://api-crescent-01.stakeflow.io",
        "provider": "Stakeflow"
      },
      {
        "address": "https://crescent-api.w3coins.io",
        "provider": "w3coins"
      },
      {
        "address": "https://lcd.crescent.bronbro.io:443",
        "provider": "Bro_n_Bro"
      }
    ],
    "grpc": [
      {
        "address": "crescent-grpc.polkachu.com:14590",
        "provider": "Polkachu"
      },
      {
        "address": "crescent.grpc.stakin-nodes.com:443",
        "provider": "Stakin"
      },
      {
        "address": "crescent-mainnet-grpc.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "grpc-crescent.cosmos-spaces.cloud:2270",
        "provider": "Cosmos Spaces"
      },
      {
        "address": "grpc-crescent-01.stakeflow.io:1402",
        "provider": "Stakeflow"
      },
      {
        "address": "crescent-grpc.w3coins.io:14590",
        "provider": "w3coins"
      },
      {
        "address": "https://grpc.crescent.bronbro.io:443",
        "provider": "Bro_n_Bro"
      }
    ]
  },
  "explorers": [
    {
      "kind": "mintscan",
      "url": "https://www.mintscan.io/crescent",
      "tx_page": "https://www.mintscan.io/crescent/transactions/${txHash}",
      "account_page": "https://www.mintscan.io/crescent/accounts/${accountAddress}"
    },
    {
      "kind": "ping.pub",
      "url": "https://ping.pub/crescent",
      "tx_page": "https://ping.pub/crescent/tx/${txHash}"
    },
    {
      "kind": "explorers.guru",
      "url": "https://crescent.explorers.guru",
      "tx_page": "https://crescent.explorers.guru/transaction/${txHash}"
    },
    {
      "kind": "atomscan",
      "url": "https://atomscan.com/crescent",
      "tx_page": "https://atomscan.com/crescent/transactions/${txHash}",
      "account_page": "https://atomscan.com/crescent/accounts/${accountAddress}"
    },
    {
      "kind": "bigdipper",
      "url": "https://bigdipper.live/crescent",
      "tx_page": "https://bigdipper.live/crescent/transactions/${txHash}",
      "account_page": "https://bigdipper.live/crescent/accounts/${accountAddress}"
    },
    {
      "kind": "Stakeflow",
      "url": "https://stakeflow.io/crescent",
      "account_page": "https://stakeflow.io/crescent/accounts/${accountAddress}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg"
    }
  ]
};
export default info;