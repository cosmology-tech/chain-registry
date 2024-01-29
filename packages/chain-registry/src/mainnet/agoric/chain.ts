import { Chain } from '@chain-registry/types';
const info: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "agoric",
  "status": "live",
  "network_type": "mainnet",
  "website": "https://agoric.com/",
  "pretty_name": "Agoric",
  "chain_id": "agoric-3",
  "bech32_prefix": "agoric",
  "daemon_name": "agd",
  "node_home": "$HOME/.agoric",
  "slip44": 564,
  "alternative_slip44s": [
    118
  ],
  "fees": {
    "fee_tokens": [
      {
        "denom": "ubld",
        "low_gas_price": 0.03,
        "average_gas_price": 0.05,
        "high_gas_price": 0.07
      },
      {
        "denom": "uist",
        "low_gas_price": 0.0034,
        "average_gas_price": 0.007,
        "high_gas_price": 0.02
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "ubld"
      }
    ]
  },
  "codebase": {},
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/Agoric-logo-color.png",
    "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/Agoric-logo-color.svg"
  },
  "description": "The Agoric platform makes it safe and seamless to build decentralized apps using your existing JavaScript knowledge.",
  "apis": {
    "rpc": [
      {
        "address": "https://main.rpc.agoric.net:443"
      },
      {
        "address": "https://agoric-rpc.polkachu.com",
        "provider": "Polkachu"
      },
      {
        "address": "https://rpc.agoric.nodestake.top",
        "provider": "NodeStake"
      },
      {
        "address": "https://agoric.rpc.kjnodes.com",
        "provider": "kjnodes"
      },
      {
        "address": "https://agoric-mainnet-rpc.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "https://rpc-agoric-01.stakeflow.io",
        "provider": "Stakeflow"
      },
      {
        "address": "https://agoric-rpc.0base.dev",
        "provider": "0base.vc"
      },
      {
        "address": "https://agoric-rpc.stakeangle.com",
        "provider": "StakeAngle"
      },
      {
        "address": "https://agoric-rpc.w3coins.io",
        "provider": "w3coins"
      },
      {
        "address": "https://rpc.agoric.stakewith.us",
        "provider": "StakeWithUs"
      },
      {
        "address": "https://rpc-agoric-ia.cosmosia.notional.ventures",
        "provider": "Notional"
      },
      {
        "address": "https://agoric-rpc.stakeandrelax.net",
        "provider": "Stake&Relax 🦥"
      },
      {
        "address": "https://rpc.agoric.bronbro.io:443",
        "provider": "Bro_n_Bro"
      }
    ],
    "rest": [
      {
        "address": "https://main.api.agoric.net:443"
      },
      {
        "address": "https://api.agoric.nodestake.top",
        "provider": "NodeStake"
      },
      {
        "address": "https://agoric-api.polkachu.com",
        "provider": "Polkachu"
      },
      {
        "address": "https://agoric.api.kjnodes.com",
        "provider": "kjnodes"
      },
      {
        "address": "https://agoric-mainnet-lcd.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "https://api-agoric-01.stakeflow.io",
        "provider": "Stakeflow"
      },
      {
        "address": "https://agoric-rest.0base.dev",
        "provider": "0base.vc"
      },
      {
        "address": "https://agoric-api.w3coins.io",
        "provider": "w3coins"
      },
      {
        "address": "https://api.agoric.stakewith.us",
        "provider": "StakeWithUs"
      },
      {
        "address": "https://api-agoric-ia.cosmosia.notional.ventures",
        "provider": "Notional"
      },
      {
        "address": "https://agoric-api.stakeandrelax.net",
        "provider": "Stake&Relax 🦥"
      },
      {
        "address": "https://lcd.agoric.bronbro.io:443",
        "provider": "Bro_n_Bro"
      }
    ],
    "grpc": [
      {
        "address": "grpc.agoric.nodestake.top:443",
        "provider": "NodeStake"
      },
      {
        "address": "agoric-grpc.polkachu.com:14490",
        "provider": "Polkachu"
      },
      {
        "address": "agoric-mainnet-grpc.autostake.com:443",
        "provider": "AutoStake 🛡️ Slash Protected"
      },
      {
        "address": "agoric.grpc.kjnodes.com:12790",
        "provider": "kjnodes"
      },
      {
        "address": "grpc-agoric-01.stakeflow.io:2202",
        "provider": "Stakeflow"
      },
      {
        "address": "agoric.mellifera.network:9090",
        "provider": "MELLIFERA"
      },
      {
        "address": "agoric-grpc.w3coins.io:14490",
        "provider": "w3coins"
      },
      {
        "address": "https://grpc.agoric.stakewith.us",
        "provider": "StakeWithUs"
      },
      {
        "address": "grpc-agoric-ia.cosmosia.notional.ventures:443",
        "provider": "Notional"
      },
      {
        "address": "agoric-grpc.stakeandrelax.net:14490",
        "provider": "Stake&Relax 🦥"
      },
      {
        "address": "https://grpc.agoric.bronbro.io:443",
        "provider": "Bro_n_Bro"
      }
    ]
  },
  "explorers": [
    {
      "kind": "bigdipper",
      "url": "https://agoric.bigdipper.live/",
      "tx_page": "https://agoric.bigdipper.live/transactions/${txHash}",
      "account_page": "https://agoric.bigdipper.live/accounts/${accountAddress}"
    },
    {
      "kind": "explorers.guru",
      "url": "https://agoric.explorers.guru",
      "tx_page": "https://agoric.explorers.guru/transaction/${txHash}",
      "account_page": "https://agoric.explorers.guru/account/${accountAddress}"
    },
    {
      "kind": "atomscan",
      "url": "https://atomscan.com/agoric/",
      "tx_page": "https://atomscan.com/agoric/transactions/${txHash}",
      "account_page": "https://atomscan.com/agoric/accounts/${accountAddress}"
    },
    {
      "kind": "Stakeflow",
      "url": "https://stakeflow.io/agoric",
      "account_page": "https://stakeflow.io/agoric/accounts/${accountAddress}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/Agoric-logo-color.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/Agoric-logo-color.svg"
    }
  ]
};
export default info;