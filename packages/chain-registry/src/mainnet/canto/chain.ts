import { Chain } from '@chain-registry/types';
const info: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "canto",
  "status": "live",
  "network_type": "mainnet",
  "website": "https://canto.io/",
  "pretty_name": "Canto",
  "chain_id": "canto_7700-1",
  "bech32_prefix": "canto",
  "node_home": "$HOME/.cantod",
  "daemon_name": "cantod",
  "slip44": 60,
  "fees": {
    "fee_tokens": [
      {
        "denom": "acanto",
        "fixed_min_gas_price": 1000000000000,
        "low_gas_price": 1000000000000,
        "average_gas_price": 2000000000000,
        "high_gas_price": 3000000000000
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "acanto"
      }
    ]
  },
  "codebase": {},
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg"
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc.canto.nodestake.top",
        "provider": "NodeStake"
      },
      {
        "address": "https://canto-rpc.polkachu.com",
        "provider": "Polkachu"
      },
      {
        "address": "https://rpc.canto.silentvalidator.com/",
        "provider": "silent"
      },
      {
        "address": "https://canto.gravitychain.io:26657",
        "provider": "Althea"
      },
      {
        "address": "https://rpc-canto.cosmos-spaces.cloud",
        "provider": "Cosmos Spaces"
      },
      {
        "address": "https://canto-mainnet-rpc.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      }
    ],
    "rest": [
      {
        "address": "https://api.canto.nodestake.top",
        "provider": "NodeStake"
      },
      {
        "address": "https://canto-api.polkachu.com",
        "provider": "Polkachu"
      },
      {
        "address": "https://api.canto.silentvalidator.com/",
        "provider": "silent"
      },
      {
        "address": "https://api-canto.cosmos-spaces.cloud",
        "provider": "Cosmos Spaces"
      },
      {
        "address": "https://canto-mainnet-lcd.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      }
    ],
    "grpc": [
      {
        "address": "canto-grpc.polkachu.com:15590",
        "provider": "Polkachu"
      },
      {
        "address": "grpc.canto.nodestake.top:443",
        "provider": "NodeStake"
      },
      {
        "address": "https://grpc.canto.silentvalidator.com/",
        "provider": "silent"
      },
      {
        "address": "grpc-canto.cosmos-spaces.cloud:2280",
        "provider": "Cosmos Spaces"
      },
      {
        "address": "https://canto.gravitychain.io:9090",
        "provider": "Althea"
      },
      {
        "address": "canto-mainnet-grpc.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      }
    ],
    "evm-http-jsonrpc": [
      {
        "address": "https://canto.neobase.one/",
        "provider": "NeoBase"
      },
      {
        "address": "https://canto.evm.chandrastation.com",
        "provider": "Chandra Station"
      },
      {
        "address": "https://canto.slingshot.finance",
        "provider": "Slingshot"
      },
      {
        "address": "https://jsonrpc.canto.nodestake.top",
        "provider": "NodeStake"
      },
      {
        "address": "https://evm-rpc.canto.silentvalidator.com/",
        "provider": "silent"
      },
      {
        "address": "https://canto.gravitychain.io:8545",
        "provider": "althea"
      }
    ]
  },
  "explorers": [
    {
      "kind": "bigdipper",
      "url": "https://cosmos.explorer.canto.io",
      "tx_page": "https://cosmos.explorer.canto.io/transactions/${txHash}"
    },
    {
      "kind": "blockscout",
      "url": "https://evm.explorer.canto.io/",
      "tx_page": "https://evm.explorer.canto.io/tx/${txHash}"
    },
    {
      "kind": "ping.pub",
      "url": "https://cosmos-explorers.neobase.one/canto",
      "tx_page": "https://cosmos-explorers.neobase.one/canto/tx/${txHash}"
    },
    {
      "kind": "mintscan",
      "url": "https://www.mintscan.io/canto",
      "tx_page": "https://www.mintscan.io/canto/transactions/${txHash}",
      "account_page": "https://www.mintscan.io/canto/accounts/${accountAddress}"
    },
    {
      "kind": "TC Network",
      "url": "https://explorer.tcnetwork.io/canto",
      "tx_page": "https://explorer.tcnetwork.io/canto/transaction/${txHash}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg"
    }
  ]
};
export default info;