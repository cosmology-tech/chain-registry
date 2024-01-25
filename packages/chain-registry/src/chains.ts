import { Chain } from '@chain-registry/types';
const chains: Chain[] = [
  {
    "$schema": "../chain.schema.json",
    "chain_name": "8ball",
    "status": "live",
    "website": "https://8ball.info/",
    "network_type": "mainnet",
    "pretty_name": "8ball",
    "chain_id": "eightball-1",
    "bech32_prefix": "8ball",
    "daemon_name": "8ball",
    "node_home": "$HOME/.8ball",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uebl",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uebl"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.46.7",
      "cosmwasm_enabled": true
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.8ball.info/",
          "provider": "8ball"
        },
        {
          "address": "https://rpc.8ball.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://8ball-rpc.genznodes.dev/",
          "provider": "genznodes"
        }
      ],
      "rest": [
        {
          "address": "https://rest.8ball.info",
          "provider": "8ball"
        },
        {
          "address": "https://api.8ball.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://8ball-api.genznodes.dev/",
          "provider": "genznodes"
        },
        {
          "address": "https://api-8ball.nodine.id/",
          "provider": "Nodine.ID"
        }
      ],
      "grpc": [
        {
          "address": "grpc.8ball.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "8ball-grpc.genznodes.dev:31090",
          "provider": "genznodes"
        },
        {
          "address": "https://grpc.8ball.nodexcapital.com:443",
          "provider": "NodeX Validator"
        }
      ]
    },
    "explorers": [
      {
        "url": "https://explorer.8ball.info/",
        "tx_page": "https://explorer.8ball.info/8ball/tx/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/8ball",
        "tx_page": "https://ping.pub/8ball/tx/${txHash}"
      },
      {
        "kind": "NodeStake Explorer",
        "url": "https://explorer.nodestake.top/8ball/",
        "tx_page": "https://explorer.nodestake.top/8ball/tx/${txHash}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/8ball",
        "tx_page": "https://explorer.tcnetwork.io/8ball/transaction/${txHash}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.co.id/8ball",
        "tx_page": "https://explorer.co.id/8ball/tx/${txHash}"
      },
      {
        "kind": "NODEXPLORER",
        "url": "https://explorer.nodexcapital.com/8ball",
        "tx_page": "https://explorer.nodexcapital.com/8ball/tx/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "acrechain",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://arable.finance/",
    "pretty_name": "Acrechain",
    "chain_id": "acre_9052-1",
    "bech32_prefix": "acre",
    "node_home": "$HOME/.acred",
    "daemon_name": "acred",
    "key_algos": [
      "ethsecp256k1"
    ],
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "aacre",
          "fixed_min_gas_price": 250000000,
          "low_gas_price": 20000000000,
          "average_gas_price": 25000000000,
          "high_gas_price": 40000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "aacre"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.acre.nodestake.top",
          "provider": "nodestake"
        },
        {
          "address": "https://rpc-acre.synergynodes.com",
          "provider": "Synergy Nodes"
        },
        {
          "address": "https://acrechain-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rpc.acre.tcnetwork.io",
          "provider": "TC Network"
        },
        {
          "address": "https://mainnet-acre-rpc.konsortech.xyz",
          "provider": "KonsorTech"
        },
        {
          "address": "https://acred-rpc.staketab.org:443",
          "provider": "Staketab"
        }
      ],
      "rest": [
        {
          "address": "https://lcd-acre.synergynodes.com",
          "provider": "Synergy Nodes"
        },
        {
          "address": "https://acrechain-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rest.acre.tcnetwork.io",
          "provider": "TC Network"
        },
        {
          "address": "https://mainnet-acre-api.konsortech.xyz",
          "provider": "KonsorTech"
        },
        {
          "address": "https://acred-rest.staketab.org",
          "provider": "Staketab"
        }
      ],
      "grpc": [
        {
          "address": "grpc.acre.nodestake.top:443",
          "provider": "Nodestake"
        },
        {
          "address": "acrechain-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "acre-grpc.genznodes.dev:27090",
          "provider": "genznodes"
        },
        {
          "address": "services.staketab.com:9008",
          "provider": "Staketab"
        }
      ],
      "evm-http-jsonrpc": [
        {
          "address": "https://jsonrpc-acre.d-stake.xyz",
          "provider": "D-stake"
        },
        {
          "address": "https://rpc2-acre.synergynodes.com",
          "provider": "Synergy Nodes"
        },
        {
          "address": "https://jsonrpc.acre.nodestake.top",
          "provider": "Nodestake"
        },
        {
          "address": "https://acre-rpc-evm.genznodes.dev/",
          "provider": "genznodes"
        },
        {
          "address": "https://evm-acre.sr20de.xyz/",
          "provider": "Sr20de"
        },
        {
          "address": "https://evm.acrescan.com/",
          "provider": "Anonstake"
        },
        {
          "address": "https://json-rpc.acre.tcnetwork.io",
          "provider": "TC Network"
        },
        {
          "address": "https://mainnet-acre-evm.konsortech.xyz",
          "provider": "KonsorTech"
        }
      ]
    },
    "explorers": [
      {
        "kind": "blockscout",
        "url": "https://acrescout.mindheartsoul.org",
        "tx_page": "https://acrescout.mindheartsoul.org/tx/${txHash}"
      },
      {
        "kind": "blockscout",
        "url": "https://acrescan.com",
        "tx_page": "https://acrescan.com/tx/${txHash}"
      },
      {
        "kind": "blockscout",
        "url": "https://acreblockexplorer.jet-node.com",
        "tx_page": "https://acreblockexplorer.jet-node.com/tx/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://explorer.nodestake.top/acre",
        "tx_page": "https://explorer.nodestake.top/acre/tx/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://cosmosrun.info/acre-mainnet",
        "tx_page": "https://cosmosrun.info/acre-mainnet/tx/${txHash}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/acre",
        "tx_page": "https://explorer.tcnetwork.io/acre/transaction/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg"
      }
    ]
  },
  {
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
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "aioz",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://aioz.network/",
    "pretty_name": "AIOZ Network",
    "chain_id": "aioz_168-1",
    "bech32_prefix": "aioz",
    "daemon_name": "aiozd",
    "node_home": "$HOME/.aioz",
    "key_algos": [
      "ethsecp256k1"
    ],
    "extra_codecs": [
      "ethermint"
    ],
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "attoaioz",
          "fixed_min_gas_price": 1000000000,
          "low_gas_price": 1000000000,
          "average_gas_price": 1000000000,
          "high_gas_price": 1500000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "attoaioz"
        }
      ],
      "lock_duration": {
        "time": "2419200s"
      }
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.svg"
    },
    "description": "AIOZ Network is a DePIN for Web3 AI, Storage and Streaming.\n\nAIOZ empowers a faster, secure and decentralized future.\n\nPowered by a global network of DePINs, AIOZ rewards you for sharing your computational resources for storing, transcoding, and streaming digital media content and powering decentralized AI computation.",
    "apis": {
      "evm-http-jsonrpc": [
        {
          "address": "https://eth-dataseed.aioz.network",
          "provider": "AIOZ Network"
        }
      ],
      "rpc": [
        {
          "address": "https://rpc-dataseed.aioz.network:443",
          "provider": "AIOZ Network"
        }
      ],
      "rest": [
        {
          "address": "https://lcd-dataseed.aioz.network",
          "provider": "AIOZ Network"
        }
      ],
      "grpc": [
        {
          "address": "grpc-dataseed.aioz.network:443",
          "provider": "AIOZ Network"
        }
      ]
    },
    "explorers": [
      {
        "kind": "aioz",
        "url": "https://explorer.aioz.network",
        "tx_page": "https://explorer.aioz.network/tx/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "akash",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://akash.network/",
    "pretty_name": "Akash",
    "chain_id": "akashnet-2",
    "bech32_prefix": "akash",
    "daemon_name": "akash",
    "node_home": "$HOME/.akash",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uakt",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.00025,
          "average_gas_price": 0.0025,
          "high_gas_price": 0.025
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uakt"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg"
    },
    "description": "Akash is open-source Supercloud that lets users buy and sell computing resources securely and efficiently. Purpose-built for public utility.",
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.akash.forbole.com:443",
          "provider": "forbole"
        },
        {
          "address": "https://rpc-akash.ecostake.com:443",
          "provider": "ecostake"
        },
        {
          "address": "https://akash-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes"
        },
        {
          "address": "https://akash-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc-akash.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://rpc-akash-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "http://akash.c29r3.xyz:80/rpc",
          "provider": "c29r3"
        },
        {
          "address": "https://akash-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://akash-rpc.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://rpc-akash-01.stakeflow.io",
          "provider": "Stakeflow"
        },
        {
          "address": "https://akash-mainnet-rpc.cosmonautstakes.com:443",
          "provider": "Cosmonaut Stakes"
        },
        {
          "address": "https://akash-rpc.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://akash-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://akash-rpc.validatornode.com",
          "provider": "ValidatorNode"
        },
        {
          "address": "https://rpc-akash.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        }
      ],
      "rest": [
        {
          "address": "https://api.akash.forbole.com:443",
          "provider": "forbole"
        },
        {
          "address": "https://rest-akash.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://akash-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes"
        },
        {
          "address": "https://akash-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://api-akash.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://api-akash-ia.cosmosia.notional.ventures",
          "provider": "Notional"
        },
        {
          "address": "https://akash.c29r3.xyz:443/api",
          "provider": "c29r3"
        },
        {
          "address": "https://akash-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://akash-api.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://api-akash-01.stakeflow.io",
          "provider": "Stakeflow"
        },
        {
          "address": "https://akash-mainnet-rest.cosmonautstakes.com:443",
          "provider": "Cosmonaut Stakes"
        },
        {
          "address": "https://akash-api.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://akash-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://akash-api.validatornode.com",
          "provider": "ValidatorNode"
        },
        {
          "address": "https://lcd-akash.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        }
      ],
      "grpc": [
        {
          "address": "grpc-akash-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "akash-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "akash-grpc.polkachu.com:12890",
          "provider": "Polkachu"
        },
        {
          "address": "akash-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "grpc-akash.cosmos-spaces.cloud:1110",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "grpc-akash-01.stakeflow.io:1502",
          "provider": "Stakeflow"
        },
        {
          "address": "akash-grpc.w3coins.io:12890",
          "provider": "w3coins"
        },
        {
          "address": "akash-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking",
        "url": "https://app.ezstaking.io/akash",
        "tx_page": "https://app.ezstaking.io/akash/txs/${txHash}",
        "account_page": "https://app.ezstaking.io/akash/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/akash",
        "tx_page": "https://www.mintscan.io/akash/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/akash/accounts/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/akash-network",
        "tx_page": "https://ping.pub/akash-network/tx/${txHash}"
      },
      {
        "kind": "bigdipper",
        "url": "https://akash.bigdipper.live/",
        "tx_page": "https://akash.bigdipper.live/transactions/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/akash",
        "tx_page": "https://atomscan.com/akash/transactions/${txHash}",
        "account_page": "https://atomscan.com/akash/accounts/${accountAddress}"
      },
      {
        "kind": "cloudmos",
        "url": "https://cloudmos.io/blocks",
        "tx_page": "https://cloudmos.io/transactions/${txHash}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/akash",
        "account_page": "https://stakeflow.io/akash/accounts/${accountAddress}"
      },
      {
        "kind": "ValidatorNode",
        "url": "https://explorer.validatornode.com/akash-network",
        "tx_page": "https://explorer.validatornode.com/akash-network/tx/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "andromeda",
    "chain_id": "andromeda-1",
    "pretty_name": "Andromeda",
    "status": "live",
    "network_type": "mainnet",
    "bech32_prefix": "andr",
    "daemon_name": "andromedad",
    "node_home": "$HOME/.andromeda",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uandr"
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uandr"
        }
      ],
      "lock_duration": {
        "time": "1814400s"
      }
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.andromeda-1.andromeda.aviaone.com",
          "provider": "AVIAONE"
        },
        {
          "address": "https://rpc-andromeda.nodeist.net",
          "provider": "nodeist"
        },
        {
          "address": "https://andromeda.rpc.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://andromeda.rpc.nodex.one",
          "provider": "nodex"
        },
        {
          "address": "https://andro.rpc.m.stavr.tech/",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://andromeda-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://andromeda-rpc.stake-town.com:443",
          "provider": "StakeTown"
        },
        {
          "address": "https://andromeda-rpc.stakerhouse.com:443",
          "provider": "StakerHouse"
        },
        {
          "address": "https://andromeda-rpc.highstakes.ch:26657",
          "provider": "High Stakes 🇨🇭"
        },
        {
          "address": "https://andromeda-rpc.genznodes.dev",
          "provider": "genznodes"
        }
      ],
      "rest": [
        {
          "address": "https://api.andromeda-1.andromeda.aviaone.com/",
          "provider": "AVIAONE"
        },
        {
          "address": "https://api-andromeda.nodeist.net",
          "provider": "nodeist"
        },
        {
          "address": "https://andromeda.api.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://andromeda.api.nodex.one",
          "provider": "nodex"
        },
        {
          "address": "https://andro.api.m.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://andromeda-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://andromeda-api.stake-town.com:443",
          "provider": "StakeTown"
        },
        {
          "address": "https://andromeda-rest.stakerhouse.com:443",
          "provider": "StakerHouse"
        },
        {
          "address": "https://andromeda-api.highstakes.ch:1317",
          "provider": "High Stakes 🇨🇭"
        },
        {
          "address": "https://andromeda-api.genznodes.dev",
          "provider": "genznodes"
        }
      ],
      "grpc": [
        {
          "address": "andromeda-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://grpc.andromeda-1.andromeda.aviaone.com:9094",
          "provider": "AVIAONE"
        },
        {
          "address": "https://grpc-andromeda.nodeist.net:443",
          "provider": "nodeist"
        },
        {
          "address": "andromeda.grpc.kjnodes.com:443",
          "provider": "kjnodes"
        },
        {
          "address": "https://andromeda.grpc.nodex.one:443",
          "provider": "nodex"
        },
        {
          "address": "http://andromedad.grpc.t.stavr.tech:132",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "andromeda-grpc.stake-town.com:443",
          "provider": "StakeTown"
        },
        {
          "address": "andromeda-grpc.stakerhouse.com:443",
          "provider": "StakerHouse"
        },
        {
          "address": "andromeda-grpc.genznodes.dev:27090",
          "provider": "genznodes"
        }
      ]
    },
    "explorers": [
      {
        "kind": "🔥STAVR🔥 Explorer",
        "url": "https://explorer.stavr.tech/Andromeda-Mainnet",
        "tx_page": "https://explorer.stavr.tech/Andromeda-Mainnet/tx/${txHash}",
        "account_page": "https://explorer.stavr.tech/Andromeda-Mainnet/account/${accountAddress}"
      },
      {
        "kind": "exploreme.pro",
        "url": "https://andromeda.exploreme.pro",
        "tx_page": "https://andromeda.exploreme.pro/transaction/${txHash}",
        "account_page": "https://andromeda.exploreme.pro/account/${accountAddress}"
      },
      {
        "kind": "Cosmotracker",
        "url": "https://cosmotracker.com/andromeda",
        "tx_page": "https://cosmotracker.com/andromeda/tx/${txHash}",
        "account_page": "https://cosmotracker.com/andromeda/account/${accountAddress}"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/andromeda/images/andromeda-logo.png"
    },
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/andromeda/images/andromeda-logo.png"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "archway",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://archway.io/",
    "pretty_name": "Archway",
    "chain_id": "archway-1",
    "bech32_prefix": "archway",
    "daemon_name": "archwayd",
    "node_home": "$HOME/.archway",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "aarch",
          "fixed_min_gas_price": 900000000000,
          "low_gas_price": 1000000000000,
          "average_gas_price": 1500000000000,
          "high_gas_price": 2000000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "aarch"
        }
      ],
      "lock_duration": {
        "time": "1209600s"
      }
    },
    "codebase": {
      "cosmos_sdk_version": "v0.45.16",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "v0.33.0"
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg"
    },
    "description": "An incentivized L1 blockchain that allows developers to capture the value their dapps create, enabling sustainable economic models.",
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.mainnet.archway.io",
          "provider": "Archway Foundation"
        },
        {
          "address": "https://rpc-archway.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://archway-mainnet-archive.allthatnode.com:26657",
          "provider": "All That Node"
        },
        {
          "address": "https://m-archway.rpc.utsa.tech",
          "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
        },
        {
          "address": "https://rpc-1.archway.nodes.guru",
          "provider": "Nodes.Guru"
        },
        {
          "address": "https://archway.rpc.silknodes.io/",
          "provider": "Silk Nodes"
        },
        {
          "address": "https://archway.rpc.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://rpc-archway.cryptech.com.ua",
          "provider": "cryptech"
        },
        {
          "address": "https://rpc.archway.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://rpc-archway.theamsolutions.info",
          "provider": "AM Solutions"
        },
        {
          "address": "https://rpc-archway.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://archway-rpc.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://m-archway.rpc.utsa.tech",
          "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
        },
        {
          "address": "https://archway-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc-archway.mms.team",
          "provider": "MMS"
        },
        {
          "address": "https://rpc-archway.mzonder.com",
          "provider": "MZONDER"
        },
        {
          "address": "https://rpc.archway.lgns.net",
          "provider": "Luganodes"
        },
        {
          "address": "https://archway-rpc.stake-town.com",
          "provider": "StakeTown"
        },
        {
          "address": "https://archway-rpc.0base.dev",
          "provider": "0base.vc"
        },
        {
          "address": "https://archway-mainnet.rpc.l0vd.com",
          "provider": "L0vd.com"
        },
        {
          "address": "https://archway-rpc.openbitlab.com",
          "provider": "openbitlab"
        },
        {
          "address": "https://rpc-archway.mzonder.com",
          "provider": "MZONDER"
        },
        {
          "address": "https://rpc-archway.mainnet.validatrium.club",
          "provider": "Validatrium"
        },
        {
          "address": "https://rpc.archway.stakeup.tech",
          "provider": "StakeUp"
        },
        {
          "address": "https://archway.api.trivium.network:26657",
          "provider": "TriviumX | Architech"
        },
        {
          "address": "https://archway-rpc.tienthuattoan.ventures",
          "provider": "TienThuatToan"
        },
        {
          "address": "https://archway-rpc.stakeandrelax.net",
          "provider": "Stake&Relax 🦥"
        },
        {
          "address": "https://rpc.archway.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ],
      "rest": [
        {
          "address": "https://api.mainnet.archway.io",
          "provider": "Archway Foundation"
        },
        {
          "address": "https://archway-api.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://m-archway.api.utsa.tech",
          "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
        },
        {
          "address": "https://api-1.archway.nodes.guru",
          "provider": "Nodes.Guru"
        },
        {
          "address": "https://archway.api.silknodes.io/",
          "provider": "Silk Nodes"
        },
        {
          "address": "https://archway.api.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://api-archway.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://api-archway.cryptech.com.ua",
          "provider": "cryptech"
        },
        {
          "address": "https://api.archway.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://rest-archway.theamsolutions.info",
          "provider": "AM Solutions"
        },
        {
          "address": "https://lcd-archway.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://archway-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://api-archway.mms.team",
          "provider": "MMS"
        },
        {
          "address": "https://api-archway.mzonder.com",
          "provider": "MZONDER"
        },
        {
          "address": "https://rest.archway.lgns.net",
          "provider": "Luganodes"
        },
        {
          "address": "https://archway-api.stake-town.com",
          "provider": "StakeTown"
        },
        {
          "address": "https://archway-rest.0base.dev",
          "provider": "0base.vc"
        },
        {
          "address": "https://archway-mainnet.api.l0vd.com",
          "provider": "L0vd.com"
        },
        {
          "address": "https://archway-api.openbitlab.com",
          "provider": "openbitlab"
        },
        {
          "address": "https://api-archway.mainnet.validatrium.club",
          "provider": "Validatrium"
        },
        {
          "address": "https://api.archway.stakeup.tech",
          "provider": "StakeUp"
        },
        {
          "address": "https://archway.api.trivium.network:1317",
          "provider": "TriviumX | Architech"
        },
        {
          "address": "https://archway-mainnet-archive.allthatnode.com:1317",
          "provider": "All That Node"
        },
        {
          "address": "https://archway-api.tienthuattoan.ventures",
          "provider": "TienThuatToan"
        },
        {
          "address": "https://archway-api.stakeandrelax.net",
          "provider": "Stake&Relax 🦥"
        },
        {
          "address": "https://lcd.archway.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ],
      "grpc": [
        {
          "address": "grpc.mainnet.archway.io:443",
          "provider": "Archway Foundation"
        },
        {
          "address": "grpc-1.archway.nodes.guru:10690",
          "provider": "Nodes.Guru"
        },
        {
          "address": "archway.grpc.kjnodes.com:15690",
          "provider": "kjnodes"
        },
        {
          "address": "https://grpc-archway.cryptech.com.ua",
          "provider": "cryptech"
        },
        {
          "address": "https://grpc.archway.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "grpc-archway.theamsolutions.info:443",
          "provider": "AM Solutions"
        },
        {
          "address": "archway-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "archway.grpc.nodersteam.com:9090",
          "provider": "[NODERS]TEAM"
        },
        {
          "address": "grpc-archway.mms.team:443",
          "provider": "MMS"
        },
        {
          "address": "grpc-archway.mzonder.com:443",
          "provider": "MZONDER"
        },
        {
          "address": "grpc.archway.lgns.net:443",
          "provider": "Luganodes"
        },
        {
          "address": "archway-grpc.stake-town.com:443",
          "provider": "StakeTown"
        },
        {
          "address": "archway-grpc.huginn.tech:4090",
          "provider": "Huginn"
        },
        {
          "address": "archway-mainnet.grpc.l0vd.com:80",
          "provider": "L0vd.com"
        },
        {
          "address": "archway-grpc.openbitlab.com:443",
          "provider": "openbitlab"
        },
        {
          "address": "grpc-archway.mainnet.validatrium.club:27490",
          "provider": "Validatrium"
        },
        {
          "address": "grpc.archway.stakeup.tech:443",
          "provider": "StakeUp"
        },
        {
          "address": "grpc-archway.cosmos-spaces.cloud:4820",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "grpc-archway-mainnet.testnet-pride.com:9096",
          "provider": "TestnetPride"
        },
        {
          "address": "archway.api.trivium.network:9090",
          "provider": "TriviumX | Architech"
        },
        {
          "address": "archway-grpc.tienthuattoan.ventures:9290",
          "provider": "TienThuatToan"
        },
        {
          "address": "archway-grpc.stakeandrelax.net:11590",
          "provider": "Stake&Relax 🦥"
        },
        {
          "address": "https://grpc.archway.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Nodes Guru",
        "url": "https://archway.explorers.guru/",
        "tx_page": "https://archway.explorers.guru/transaction/${txHash}",
        "account_page": "https://archway.explorers.guru/account/${accountAddress}"
      },
      {
        "kind": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀",
        "url": "https://exp.utsa.tech/archway",
        "tx_page": "https://exp.utsa.tech/archway/tx/${txHash}",
        "account_page": "https://exp.utsa.tech/archway/account/${accountAddress}"
      },
      {
        "kind": "Mintscan",
        "url": "https://mintscan.io/archway/",
        "tx_page": "https://mintscan.io/archway/transactions/${txHash}",
        "account_page": "https://mintscan.io/archway/accounts/${accountAddress}"
      },
      {
        "kind": "Silk Nodes",
        "url": "https://explorer.silknodes.io/archway",
        "tx_page": "https://explorer.silknodes.io/archway/tx/${txHash}",
        "account_page": "https://explorer.silknodes.io/archway/account/${accountAddress}"
      },
      {
        "kind": "NodeStake Explorer",
        "url": "https://explorer.nodestake.top/archway/",
        "tx_page": "https://explorer.nodestake.top/archway/txs/${txHash}",
        "account_page": "https://explorer.nodestake.top/archway/account/${accountAddress}"
      },
      {
        "kind": "Exploreme",
        "url": "https://archway.exploreme.pro/",
        "tx_page": "https://archway.exploreme.pro/transaction/${txHash}",
        "account_page": "https://archway.exploreme.pro/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/archway",
        "tx_page": "https://ping.pub/archway/tx/${txHash}"
      },
      {
        "kind": "Big Dipper",
        "url": "https://bigdipper.live/archway",
        "tx_page": "https://bigdipper.live/archway/transactions/${txHash}",
        "account_page": "https://bigdipper.live/archway/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "arkh",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://arkhadian.com/",
    "pretty_name": "Arkhadian",
    "chain_id": "arkh",
    "bech32_prefix": "arkh",
    "daemon_name": "arkhd",
    "node_home": "$HOME/.arkh",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "arkh",
          "fixed_min_gas_price": 0.01,
          "low_gas_price": 0.01,
          "average_gas_price": 0.025,
          "high_gas_price": 0.03
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "arkh"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://asc-dataseed.arkhadian.com/",
          "provider": "arkhnetwork"
        },
        {
          "address": "https://rpc.arkh.nodestake.top",
          "provider": "NodeStake"
        }
      ],
      "rest": [
        {
          "address": "https://asc-blockchain-api.arkhadian.com/",
          "provider": "arkhnetwork"
        },
        {
          "address": "https://api.arkh.nodestake.top",
          "provider": "NodeStake"
        }
      ],
      "grpc": [
        {
          "address": "grpc.arkh.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "https://grpc.arkh.nodexcapital.com:443",
          "provider": "NodeX Validator"
        }
      ]
    },
    "explorers": [
      {
        "kind": "NodeStake Explorer",
        "url": "https://explorer.nodestake.top/arkh",
        "tx_page": "https://explorer.nodestake.top/arkh/tx/${txHash}"
      },
      {
        "kind": "Kynraze Explorer",
        "url": "https://explorer.kynraze.com/arkhadian",
        "tx_page": "https://explorer.kynraze.com/arkhadian/tx/${txHash}"
      },
      {
        "kind": "NODEXPLORER",
        "url": "https://explorer.nodexcapital.com/arkhadian",
        "tx_page": "https://explorer.nodexcapital.com/arkhadian/tx/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "assetmantle",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://assetmantle.one/",
    "pretty_name": "AssetMantle",
    "chain_id": "mantle-1",
    "bech32_prefix": "mantle",
    "daemon_name": "mantleNode",
    "node_home": "$HOME/.mantleNode",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "umntl",
          "low_gas_price": 0.01,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "umntl"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/AM_Logo.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/AM_Logo_Dark.svg"
    },
    "description": "AssetMantle’s suite of products is focused on the NFT ecosystem, helping you up your game with digital asset ownership.",
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.assetmantle.one",
          "provider": "AssetMantle"
        },
        {
          "address": "https://rpc-assetmantle.blockpower.capital",
          "provider": "Blockpower"
        },
        {
          "address": "https://rpc-assetmantle.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://assetmantle-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc.assetmantle.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://rpc-assetmantle-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://rpc-assetmantle.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://rpc.mantle.paranorm.pro:443",
          "provider": "paranorm"
        },
        {
          "address": "https://assetmantle-rpc.stakerhouse.com",
          "provider": "StakerHouse"
        },
        {
          "address": "https://assetmantle-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ],
      "rest": [
        {
          "address": "https://rest.assetmantle.one",
          "provider": "AssetMantle"
        },
        {
          "address": "https://rest-assetmantle.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://api.assetmantle.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://api-assetmantle-ia.cosmosia.notional.ventures",
          "provider": "Notional"
        },
        {
          "address": "https://assetmantle-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://lcd-assetmantle.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://api.mantle.paranorm.pro:443",
          "provider": "paranorm"
        },
        {
          "address": "https://assetmantle-rest.stakerhouse.com",
          "provider": "StakerHouse"
        },
        {
          "address": "https://assetmantle-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ],
      "grpc": [
        {
          "address": "grpc.assetmantle.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "grpc-assetmantle-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "assetmantle-grpc.polkachu.com:14690",
          "provider": "Polkachu"
        },
        {
          "address": "assetmantle-grpc.stakerhouse.com:443",
          "provider": "StakerHouse"
        },
        {
          "address": "assetmantle-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking",
        "url": "https://app.ezstaking.io/assetmantle",
        "tx_page": "https://app.ezstaking.io/assetmantle/txs/${txHash}",
        "account_page": "https://app.ezstaking.io/assetmantle/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/asset-mantle",
        "tx_page": "https://www.mintscan.io/asset-mantle/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/asset-mantle/accounts/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://explorer.postcapitalist.io/AssetMantle",
        "tx_page": "https://explorer.postcapitalist.io/AssetMantle/tx/${txHash}"
      },
      {
        "kind": "other",
        "url": "https://explorer.assetmantle.one",
        "tx_page": "https://explorer.assetmantle.one/transactions/${txHash}"
      },
      {
        "kind": "explorers.guru",
        "url": "https://assetmantle.explorers.guru",
        "tx_page": "https://assetmantle.explorers.guru/transaction/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/assetmantle",
        "tx_page": "https://atomscan.com/assetmantle/transactions/${txHash}",
        "account_page": "https://atomscan.com/assetmantle/accounts/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/assetmantle",
        "tx_page": "https://bigdipper.live/assetmantle/transactions/${txHash}",
        "account_page": "https://bigdipper.live/assetmantle/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/AM_Logo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/AM_Logo_Dark.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "aura",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://aura.network/",
    "pretty_name": "Aura Network",
    "chain_id": "xstaxy-1",
    "bech32_prefix": "aura",
    "daemon_name": "aurad",
    "node_home": "$HOME/.aura",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uaura",
          "fixed_min_gas_price": 0.001,
          "low_gas_price": 0.001,
          "average_gas_price": 0.002,
          "high_gas_price": 0.0025
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uaura"
        }
      ],
      "lock_duration": {
        "time": "1209600s"
      }
    },
    "codebase": {
      "cosmos_sdk_version": "0.47.4",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "0.41.0"
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.aura.network/",
          "provider": "Aura Network Foundation"
        },
        {
          "address": "https://m-aura.rpc.utsa.tech",
          "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
        },
        {
          "address": "https://rpc.aura.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "http://aura.rpc.m.stavr.tech:11047",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://aura-rpc.ramuchi.tech",
          "provider": "ramuchi.tech"
        },
        {
          "address": "https://aura.rpc.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://mainnet-aura-rpc.konsortech.xyz",
          "provider": "KonsorTech"
        },
        {
          "address": "https://aura-rpc.tienthuattoan.ventures",
          "provider": "TienThuatToan"
        },
        {
          "address": "https://aura-rpc.lavenderfive.com",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://aura-rpc.staketab.org:443",
          "provider": "Staketab"
        },
        {
          "address": "https://rpc.aura.safeblock.space",
          "provider": "Safe Block"
        },
        {
          "address": "https://rpc.aura.silentvalidator.com",
          "provider": "silent"
        },
        {
          "address": "https://aura-rpc.sergo.dev",
          "provider": "SerGo"
        },
        {
          "address": "https://rpc-aura.mms.team",
          "provider": "MMS"
        },
        {
          "address": "https://aura-rpc.stake-town.com",
          "provider": "StakeTown"
        }
      ],
      "rest": [
        {
          "address": "https://lcd.aura.network/",
          "provider": "Aura Network Foundation"
        },
        {
          "address": "https://m-aura.api.utsa.tech",
          "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
        },
        {
          "address": "https://aura.api.m.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://api.aura.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://aura-api.ramuchi.tech",
          "provider": "ramuchi.tech"
        },
        {
          "address": "https://aura.api.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://mainnet-aura-api.konsortech.xyz",
          "provider": "KonsorTech"
        },
        {
          "address": "https://aura-api.tienthuattoan.ventures",
          "provider": "TienThuatToan"
        },
        {
          "address": "https://aura-api.lavenderfive.com",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://aura-rest.staketab.org",
          "provider": "Staketab"
        },
        {
          "address": "https://api.aura.safeblock.space",
          "provider": "Safe Block"
        },
        {
          "address": "https://api.aura.silentvalidator.com",
          "provider": "silent"
        },
        {
          "address": "https://aura-api.sergo.dev",
          "provider": "SerGo"
        },
        {
          "address": "https://api-aura.mms.team",
          "provider": "MMS"
        },
        {
          "address": "https://aura-api.stake-town.com",
          "provider": "StakeTown"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc.aura.network",
          "provider": "Aura Network Foundation"
        },
        {
          "address": "auranetwork-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://grpc.aura.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "aura.mainnet.grpc.nodersteam.com:9100/",
          "provider": "[NODERS]TEAM"
        },
        {
          "address": "https://aura-grpc.ramuchi.tech:15000",
          "provider": "ramuchi.tech"
        },
        {
          "address": "http://aura.grpc.m.stavr.tech:9901",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "aura.grpc.kjnodes.com:11790",
          "provider": "kjnodes"
        },
        {
          "address": "aura-grpc.tienthuattoan.ventures:9090",
          "provider": "TienThuatToan"
        },
        {
          "address": "aura-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "services.staketab.com:9021",
          "provider": "Staketab"
        },
        {
          "address": "grpc.aura.silentvalidator.com:443",
          "provider": "silent"
        },
        {
          "address": "grpc-aura.mms.team:443",
          "provider": "MMS"
        },
        {
          "address": "aura-grpc.stake-town.com:443",
          "provider": "StakeTown"
        },
        {
          "address": "grpc.aura.safeblock.space:9090",
          "provider": "Safe Block"
        }
      ]
    },
    "explorers": [
      {
        "kind": "aurascan",
        "url": "https://aurascan.io",
        "tx_page": "https://aurascan.io/transaction/${txHash}",
        "account_page": "https://aurascan.io/account/${accountAddress}"
      },
      {
        "kind": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀 Explorer",
        "url": "https://exp.utsa.tech/aura",
        "tx_page": "https://exp.utsa.tech/aura/tx/${txHash}",
        "account_page": "https://exp.utsa.tech/aura/account/${accountAddress}"
      },
      {
        "kind": "🔥STAVR🔥 Explorer",
        "url": "https://explorer.stavr.tech/Aura-Mainnet",
        "tx_page": "https://explorer.stavr.tech/aura-mainnet/tx/${txHash}",
        "account_page": "https://explorer.stavr.tech/aura-mainnet/account/${accountAddress}"
      },
      {
        "kind": "NodeStake Explorer",
        "url": "https://explorer.nodestake.top/aura",
        "tx_page": "https://explorer.nodestake.top/aura/tx/${txHash}",
        "account_page": "https://explorer.nodestake.top/aura/account/${accountAddress}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/aura",
        "tx_page": "https://explorer.tcnetwork.io/aura/transaction/${txHash}",
        "account_page": "https://explorer.tcnetwork.io/aura/account/${accountAddress}"
      },
      {
        "kind": "Stake-Take",
        "url": "https://explorer.stake-take.com/aura",
        "tx_page": "https://explorer.stake-take.com/aura/tx/${txHash}",
        "account_page": "https://explorer.stake-take.com/aura/account/${accountAddress}"
      },
      {
        "kind": "Safe Block",
        "url": "https://explorer.safeblock.space/aura",
        "tx_page": "https://explorer.safeblock.space/aura/tx/${txHash}",
        "account_page": "https://explorer.safeblock.space/aura/account/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "axelar",
    "chain_id": "axelar-dojo-1",
    "pretty_name": "Axelar",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://axelar.network/",
    "bech32_prefix": "axelar",
    "daemon_name": "axelard",
    "node_home": "$HOME/.axelar",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uaxl",
          "fixed_min_gas_price": 0.007,
          "low_gas_price": 0.007,
          "average_gas_price": 0.007,
          "high_gas_price": 0.01
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uaxl"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axelar-chain-logo.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axelar-chain-logo.svg"
    },
    "description": "Axelar delivers secure cross-chain communication for Web3. Our infrastructure enables dApp users to interact with any asset or application, on any chain, with one click.",
    "apis": {
      "grpc-web": [
        {
          "address": "axelar-grpcweb.chainode.tech",
          "provider": "Chainode"
        },
        {
          "address": "axelar-grpcweb.quantnode.tech:9091",
          "provider": "Quantnode"
        }
      ],
      "rpc": [
        {
          "address": "https://rpc-axelar.imperator.co:443",
          "provider": "Imperator.co"
        },
        {
          "address": "https://axelar-rpc.quickapi.com:443",
          "provider": "chainlayer"
        },
        {
          "address": "https://rpc-axelar.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://axelar-rpc.pops.one:443",
          "provider": "p-ops"
        },
        {
          "address": "https://axelar-rpc.qubelabs.io:443",
          "provider": "Qubelabs"
        },
        {
          "address": "https://rpc-1.axelar.nodes.guru:443",
          "provider": "nodes.guru"
        },
        {
          "address": "https://rpc-axelar-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://axelar-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://axelar.rpc.stakin-nodes.com",
          "provider": "Stakin"
        },
        {
          "address": "https://rpc.axelar.bh.rocks",
          "provider": "BlockHunters 🎯"
        },
        {
          "address": "https://axelar-rpc.validatrium.club",
          "provider": "Validatrium"
        },
        {
          "address": "https://rpc-axelar.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://axelar-rpc.quantnode.tech/",
          "provider": "QuantNode"
        },
        {
          "address": "https://axelar-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://axelar-rpc.rockrpc.net/",
          "provider": "RockawayX Infra"
        },
        {
          "address": "https://axelar-rpc.ibs.team",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://rpc-axelar-01.stakeflow.io",
          "provider": "Stakeflow"
        },
        {
          "address": "https://axelar-rpc.staketab.org:443",
          "provider": "Staketab"
        },
        {
          "address": "https://axelar-rpc.w3coins.io",
          "provider": "w3coins"
        }
      ],
      "rest": [
        {
          "address": "https://lcd-axelar.imperator.co:443",
          "provider": "Imperator.co"
        },
        {
          "address": "https://axelar-lcd.quickapi.com:443",
          "provider": "chainlayer"
        },
        {
          "address": "https://api-axelar.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://axelar-lcd.qubelabs.io:443",
          "provider": "Qubelabs"
        },
        {
          "address": "https://api-1.axelar.nodes.guru:443",
          "provider": "nodes.guru"
        },
        {
          "address": "https://api-axelar-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://axelar-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://axelar.rest.stakin-nodes.com",
          "provider": "Stakin"
        },
        {
          "address": "https://api.axelar.bh.rocks",
          "provider": "BlockHunters 🎯"
        },
        {
          "address": "https://axelar-api.validatrium.club",
          "provider": "Validatrium"
        },
        {
          "address": "https://lcd-axelar.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://axelar-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://axelar-lcd.quantnode.tech/",
          "provider": "QuantNode"
        },
        {
          "address": "https://axelar-api.ibs.team",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://api-axelar-01.stakeflow.io",
          "provider": "Stakeflow"
        },
        {
          "address": "https://axelar-rest.staketab.org",
          "provider": "Staketab"
        },
        {
          "address": "https://axelar-api.w3coins.io",
          "provider": "w3coins"
        }
      ],
      "grpc": [
        {
          "address": "axelar-grpc.qubelabs.io:9092",
          "provider": "Qubelabs"
        },
        {
          "address": "axelar-grpc.quantnode.tech:9090",
          "provider": "Quantnode"
        },
        {
          "address": "services.staketab.com:9080",
          "provider": "Staketab"
        },
        {
          "address": "grpc-axelar.cosmos-spaces.cloud:1590",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "grpc-axelar-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "axelar-grpc.polkachu.com:15190",
          "provider": "Polkachu"
        },
        {
          "address": "axelar.grpc.stakin-nodes.com:443",
          "provider": "Stakin"
        },
        {
          "address": "axelar-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "grpc-axelar-01.stakeflow.io:1602",
          "provider": "Stakeflow"
        },
        {
          "address": "axelar-grpc.w3coins.io:15190",
          "provider": "w3coins"
        },
        {
          "address": "grpc-axelar.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        }
      ]
    },
    "explorers": [
      {
        "kind": "axelarscan",
        "url": "https://axelarscan.io",
        "tx_page": "https://axelarscan.io/tx/${txHash}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/axelar",
        "tx_page": "https://www.mintscan.io/axelar/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/axelar/accounts/${accountAddress}"
      },
      {
        "kind": "explorers.guru",
        "url": "https://axelar.explorers.guru",
        "tx_page": "https://axelar.explorers.guru/transaction/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/axelar",
        "tx_page": "https://atomscan.com/axelar/transactions/${txHash}",
        "account_page": "https://atomscan.com/axelar/accounts/${accountAddress}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/axelar",
        "account_page": "https://stakeflow.io/axelar/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axelar-chain-logo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axelar-chain-logo.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "bandchain",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://bandprotocol.com/",
    "pretty_name": "Band Protocol",
    "chain_id": "laozi-mainnet",
    "daemon_name": "bandd",
    "node_home": "$HOME/.band",
    "bech32_prefix": "band",
    "slip44": 494,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uband",
          "low_gas_price": 0.0025,
          "average_gas_price": 0.003,
          "high_gas_price": 0.005
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uband"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg"
    },
    "description": "Band Protocol is a cross-chain data oracle platform that aggregates and connects real-world data and APIs to smart contracts.",
    "apis": {
      "rpc": [
        {
          "address": "http://rpc.laozi1.bandchain.org:80",
          "provider": "bandprotocol"
        },
        {
          "address": "https://rpc-bandchain-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://band-rpc.ibs.team/",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://bandchain-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://band.rpc.m.stavr.tech:443",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://rpc-band-01.stakeflow.io",
          "provider": "Stakeflow"
        },
        {
          "address": "https://rpc-band.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://band-rpc.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://bandprotocol-rpc.highstakes.ch:26657/",
          "provider": "High Stakes 🇨🇭"
        },
        {
          "address": "https://band-rpc.stake-town.com",
          "provider": "StakeTown"
        }
      ],
      "rest": [
        {
          "address": "https://laozi1.bandchain.org/api",
          "provider": "bandprotocol"
        },
        {
          "address": "https://api-bandchain-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://band-api.ibs.team/",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://api-band.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://band.api.m.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://bandchain-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://api-band-01.stakeflow.io",
          "provider": "Stakeflow"
        },
        {
          "address": "https://band-api.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://bandprotocol-api.highstakes.ch:1317/",
          "provider": "High Stakes 🇨🇭"
        },
        {
          "address": "https://band-api.stake-town.com",
          "provider": "StakeTown"
        }
      ],
      "grpc": [
        {
          "address": "grpc-bandchain-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "bandchain-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "grpc-band.cosmos-spaces.cloud:2240",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "grpc-band-01.stakeflow.io:2502",
          "provider": "Stakeflow"
        },
        {
          "address": "band-grpc.w3coins.io:22990",
          "provider": "w3coins"
        },
        {
          "address": "http://band.grpc.m.stavr.tech:7803",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://grpc-band.nodeist.net",
          "provider": "Nodeist"
        },
        {
          "address": "band.grpc.kjnodes.com:443",
          "provider": "kjnodes"
        },
        {
          "address": "band-grpc.stake-town.com:443",
          "provider": "StakeTown"
        }
      ]
    },
    "explorers": [
      {
        "kind": "cosmoscan",
        "url": "https://cosmoscan.io",
        "tx_page": "https://cosmoscan.io/tx/${txHash}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/band",
        "tx_page": "https://www.mintscan.io/band/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/band/accounts/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/band-protocol",
        "tx_page": "https://ping.pub/band-protocol/tx/${txHash}"
      },
      {
        "kind": "🔥STAVR🔥",
        "url": "https://explorer.stavr.tech/Band-Mainnet",
        "tx_page": "https://explorer.stavr.tech/Band-Mainnet/tx/${txHash}"
      },
      {
        "kind": "Nodeist Explorer",
        "url": "https://exp.nodeist.net/band",
        "tx_page": "https://exp.nodeist.net/band/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/band-protocol",
        "tx_page": "https://atomscan.com/band-protocol/transactions/${txHash}",
        "account_page": "https://atomscan.com/band-protocol/accounts/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/band",
        "tx_page": "https://bigdipper.live/band/transactions/${txHash}",
        "account_page": "https://bigdipper.live/band/accounts/${accountAddress}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/band-protocol",
        "account_page": "https://stakeflow.io/band-protocol/accounts/${accountAddress}"
      },
      {
        "kind": "kjnodes Explorer",
        "url": "https://explorer.kjnodes.com/band",
        "tx_page": "https://explorer.kjnodes.com/band/tx/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "beezee",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "BeeZee",
    "chain_id": "beezee-1",
    "bech32_prefix": "bze",
    "daemon_name": "bzed",
    "node_home": "$HOME/.bze",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ubze",
          "fixed_min_gas_price": 0.01,
          "low_gas_price": 0.01,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ubze"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.getbze.com",
          "provider": "AlphaTeam"
        },
        {
          "address": "https://rpc-1.getbze.com",
          "provider": "AlphaTeam"
        },
        {
          "address": "https://rpc-2.getbze.com",
          "provider": "AlphaTeam"
        }
      ],
      "rest": [
        {
          "address": "https://rest.getbze.com",
          "provider": "AlphaTeam"
        },
        {
          "address": "https://rest-1.getbze.com",
          "provider": "AlphaTeam"
        },
        {
          "address": "https://rest-2.getbze.com",
          "provider": "AlphaTeam"
        }
      ],
      "grpc": [
        {
          "address": "grpc.getbze.com:9099",
          "provider": "AlphaTeam"
        },
        {
          "address": "grpc-1.getbze.com:9099",
          "provider": "AlphaTeam"
        },
        {
          "address": "grpc-2.getbze.com:9099",
          "provider": "AlphaTeam"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/beezee",
        "tx_page": "https://ping.pub/beezee/tx/${txHash}",
        "account_page": "https://ping.pub/beezee/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://explorer.getbze.com/beezee",
        "tx_page": "https://explorer.getbze.com/beezee/tx/${txHash}",
        "account_page": "https://explorer.getbze.com/beezee/account/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/beezee",
        "tx_page": "https://atomscan.com/beezee/transactions/${txHash}",
        "account_page": "https://atomscan.com/beezee/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "bitcanna",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.bitcanna.io/",
    "pretty_name": "BitCanna",
    "chain_id": "bitcanna-1",
    "bech32_prefix": "bcna",
    "daemon_name": "bcnad",
    "node_home": "$HOME/.bcna",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ubcna",
          "fixed_min_gas_price": 0.001,
          "low_gas_price": 0.001,
          "average_gas_price": 0.0025,
          "high_gas_price": 0.01
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ubcna"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.bitcanna.io/",
          "provider": "bitcanna"
        },
        {
          "address": "http://bcna.paranorm.pro/",
          "provider": "ParanormalBrothers"
        },
        {
          "address": "https://bcna-rpc.ibs.team/",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://bitcanna-rpc.panthea.eu",
          "provider": "Panthea EU"
        },
        {
          "address": "https://rpc.bitcanna.sgtstake.com/",
          "provider": "SGTstake"
        },
        {
          "address": "https://bitcanna.rpc.m.anode.team",
          "provider": "AlxVoy ⚡ ANODE.TEAM"
        },
        {
          "address": "http://bitcanna.rpc.m.stavr.tech:21327",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://rpc-bcna.kjinc.io/",
          "provider": "KJINC.io"
        },
        {
          "address": "https://mainnet-bitcanna-rpc.konsortech.xyz",
          "provider": "KonsorTech"
        },
        {
          "address": "https://bitcanna.rpc.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://bitcanna-rpc.genznodes.dev",
          "provider": "genznodes"
        },
        {
          "address": "https://rpc.bitcanna-1.bitcanna.aviaone.com",
          "provider": "AVIAONE 🟢"
        },
        {
          "address": "https://rpc.bitcanna-mainnet.hexnodes.co",
          "provider": "Hexnodes"
        },
        {
          "address": "http://rpc.bitcanna.citizencosmos.space/",
          "provider": "Citizen Web3"
        },
        {
          "address": "https://bitcanna-mainnet.rpc.l0vd.com/",
          "provider": "L0vd.com"
        },
        {
          "address": "https://rpc-bitcanna-ia.cosmosia.notional.ventures",
          "provider": "Notional"
        },
        {
          "address": "https://bitcanna-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc.bitcanna.safeblock.space",
          "provider": "Safe Block"
        },
        {
          "address": "https://bitcanna.nodejumper.io:443",
          "provider": "NODEJUMPER"
        },
        {
          "address": "https://rpc.bitcanna.indonode.net/",
          "provider": "Indonode"
        },
        {
          "address": "https://rpc-bitcanna.mms.team:443",
          "provider": "MMS"
        },
        {
          "address": "http://65.108.142.81:26683",
          "provider": "Stakely"
        },
        {
          "address": "http://93.115.25.15:26657",
          "provider": "Stakely"
        },
        {
          "address": "https://bitcanna-rpc.validatornode.com",
          "provider": "ValidatorNode"
        },
        {
          "address": "https://bcna.rpc.arcturian.tech/",
          "provider": "Arcturian Tech"
        },
        {
          "address": "https://bitcanna-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ],
      "grpc": [
        {
          "address": "grpc.bitcanna.io:443",
          "provider": "bitcanna"
        },
        {
          "address": "bitcanna-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "bitcanna.grpc.m.stavr.tech:9081",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "grpc.bitcanna-mainnet.hexnodes.co:27090",
          "provider": "HexNodes"
        },
        {
          "address": "grpc.bitcanna-1.bitcanna.aviaone.com:9092",
          "provider": "AVIAONE 🟢"
        },
        {
          "address": "bitcanna-mainnet.grpc.l0vd.com:80",
          "provider": "L0vd.com"
        },
        {
          "address": "grpc-bitcanna-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "bitcanna.grpc.kjnodes.com:14290",
          "provider": "kjnodes"
        },
        {
          "address": "bitcanna-grpc.polkachu.com:13090",
          "provider": "Polkachu"
        },
        {
          "address": "grpc-bitcanna.mms.team:443",
          "provider": "MMS"
        },
        {
          "address": "bitcanna.grpc.m.anode.team:443",
          "provider": "AlxVoy ⚡ ANODE.TEAM"
        },
        {
          "address": "bitcanna-grpc.panthea.eu:16710",
          "provider": "Panthea EU"
        },
        {
          "address": "https://grpc.bitcanna.indonode.net:11090",
          "provider": "Indonode"
        },
        {
          "address": "bitcanna-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "grpc.bitcanna.safeblock.space:9090",
          "provider": "Safe Block"
        }
      ],
      "rest": [
        {
          "address": "https://lcd.bitcanna.io",
          "provider": "bitcanna"
        },
        {
          "address": "https://bitcanna-api.panthea.eu",
          "provider": "Panthea EU"
        },
        {
          "address": "https://api.bitcanna.sgtstake.com/",
          "provider": "SGTstake"
        },
        {
          "address": "https://bitcanna.api.m.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://bcna-api.ibs.team/",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://bitcanna.api.m.anode.team",
          "provider": "AlxVoy ⚡ ANODE.TEAM"
        },
        {
          "address": "https://api-bcna.kjinc.io/",
          "provider": "KJINC.io"
        },
        {
          "address": "https://mainnet-bitcanna-api.konsortech.xyz",
          "provider": "KonsorTech"
        },
        {
          "address": "https://bitcanna.api.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://bitcanna-api.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://bitcanna-api.genznodes.dev",
          "provider": "genznodes"
        },
        {
          "address": "https://api.bitcanna-1.bitcanna.aviaone.com/",
          "provider": "AVIAONE 🟢"
        },
        {
          "address": "https://lcd.bitcanna-mainnet.hexnodes.co",
          "provider": "Hexnodes"
        },
        {
          "address": "https://bitcanna-mainnet.api.l0vd.com",
          "provider": "L0vd.com"
        },
        {
          "address": "https://api-bitcanna-ia.cosmosia.notional.ventures",
          "provider": "Notional"
        },
        {
          "address": "https://bitcanna-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://api.bitcanna.safeblock.space",
          "provider": "Safe Block"
        },
        {
          "address": "https://bitcanna.nodejumper.io:1317",
          "provider": "NODEJUMPER"
        },
        {
          "address": "https://api-bitcanna.mms.team:443",
          "provider": "MMS"
        },
        {
          "address": "http://65.108.142.81:1325",
          "provider": "Stakely"
        },
        {
          "address": "http://93.115.25.15:1317",
          "provider": "Stakely"
        },
        {
          "address": "https://bitcanna-api.validatornode.com",
          "provider": "ValidatorNode"
        },
        {
          "address": "https://bcna.api.arcturian.tech/",
          "provider": "Arcturian Tech"
        },
        {
          "address": "https://api.bitcanna.indonode.net/",
          "provider": "Indonode"
        },
        {
          "address": "https://bitcanna-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZStaking Tools",
        "url": "https://app.ezstaking.io/bitcanna",
        "tx_page": "https://ezstaking.tools/bitcanna/txs/${txHash}",
        "account_page": "https://ezstaking.tools/bitcanna/account/${accountAddress}"
      },
      {
        "kind": "forbole",
        "url": "https://explorer.bitcanna.io",
        "tx_page": "https://explorer.bitcanna.io/transactions/${txHash}",
        "account_page": "https://explorer.bitcanna.io/accounts/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/bitcanna",
        "tx_page": "https://ping.pub/bitcanna/tx/${txHash}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/bitcanna/",
        "tx_page": "https://www.mintscan.io/bitcanna/txs/${txHash}",
        "account_page": "https://www.mintscan.io/bitcanna/account/${accountAddress}"
      },
      {
        "kind": "🔥STAVR🔥 Explorer",
        "url": "https://explorer.stavr.tech/bitcanna",
        "tx_page": "https://explorer.stavr.tech/bitcanna/txs/${txHash}",
        "account_page": "https://explorer.stavr.tech/bitcanna/account/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/bitcanna",
        "tx_page": "https://atomscan.com/bitcanna/transactions/${txHash}"
      },
      {
        "kind": "ValidatorNode Explorer",
        "url": "https://explorer.validatornode.com/bitcanna",
        "tx_page": "https://explorer.validatornode.com/bitcanna/tx/${txHash}"
      },
      {
        "kind": "AlxVoy ⚡ ANODE.TEAM Explorer",
        "url": "https://main.anode.team/bitcanna",
        "tx_page": "https://main.anode.team/bitcanna/txs/${txHash}",
        "account_page": "https://main.anode.team/bitcanna/account/${accountAddress}"
      },
      {
        "kind": "Moonbys Dashboard",
        "url": "https://explorer.moonbys.com",
        "tx_page": "https://explorer.moonbys.com/tx/${txHash}",
        "account_page": "https://explorer.moonbys.com/bitcanna/account/${accountAddress}"
      },
      {
        "kind": "Indonode",
        "url": "https://explorer.indonode.net/bitcanna",
        "tx_page": "https://explorer.indonode.net/bitcanna/tx/${txHash}"
      },
      {
        "kind": "Safe Block",
        "url": "https://explorer.safeblock.space/bitcanna",
        "tx_page": "https://explorer.safeblock.space/bitcanna/tx/${txHash}",
        "account_page": "https://explorer.safeblock.space/bitcanna/account/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg"
      }
    ]
  },
  {
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
    "codebase": {},
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
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking",
        "url": "https://app.ezstaking.io/bitsong",
        "tx_page": "https://app.ezstaking.io/bitsong/txs/${txHash}",
        "account_page": "https://app.ezstaking.io/bitsong/account/${accountAddress}"
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
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "bluzelle",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://bluzelle.com/",
    "pretty_name": "Bluzelle",
    "chain_id": "bluzelle-9",
    "bech32_prefix": "bluzelle",
    "daemon_name": "curiumd",
    "node_home": "$HOME/.curium",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 483,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ubnt",
          "fixed_min_gas_price": 0.002,
          "low_gas_price": 0.002,
          "average_gas_price": 0.002,
          "high_gas_price": 0.025
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ubnt"
        }
      ],
      "lock_duration": {
        "time": "1814400s"
      }
    },
    "codebase": {
      "cosmos_sdk_version": "v0.45.11"
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://a.client.sentry.net.bluzelle.com:26657",
          "provider": "Bluzelle"
        },
        {
          "address": "https://b.client.sentry.net.bluzelle.com:26657",
          "provider": "Bluzelle"
        },
        {
          "address": "https://c.client.sentry.net.bluzelle.com:26657",
          "provider": "Bluzelle"
        },
        {
          "address": "https://bluzelle-rpc.genznodes.dev",
          "provider": "genznodes"
        }
      ],
      "rest": [
        {
          "address": "https://a.client.sentry.net.bluzelle.com:1317",
          "provider": "Bluzelle"
        },
        {
          "address": "https://b.client.sentry.net.bluzelle.com:1317",
          "provider": "Bluzelle"
        },
        {
          "address": "https://c.client.sentry.net.bluzelle.com:1317",
          "provider": "Bluzelle"
        },
        {
          "address": "https://bluzelle-api.genznodes.dev/",
          "provider": "genznodes"
        }
      ],
      "grpc": [
        {
          "address": "a.client.sentry.net.bluzelle.com:9090",
          "provider": "Bluzelle"
        },
        {
          "address": "b.client.sentry.net.bluzelle.com:9090",
          "provider": "Bluzelle"
        },
        {
          "address": "c.client.sentry.net.bluzelle.com:9090",
          "provider": "Bluzelle"
        },
        {
          "address": "bluzelle-grpc.genznodes.dev:34090",
          "provider": "genznodes"
        },
        {
          "address": "https://grpc-curium.nodine.id:443",
          "provider": "Nodine.ID"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://ping.explorer.net.bluzelle.com/bluzelle",
        "tx_page": "https://ping.explorer.net.bluzelle.com/bluzelle/tx/${txHash}",
        "account_page": "https://ping.explorer.net.bluzelle.com/bluzelle/account/${accountAddress}"
      },
      {
        "kind": "big dipper",
        "url": "https://bd.explorer.net.bluzelle.com",
        "tx_page": "https://bd.explorer.net.bluzelle.com/transactions/${txHash}",
        "account_page": "https://bd.explorer.net.bluzelle.com/accounts/${accountAddress}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/bluzelle",
        "tx_page": "https://explorer.tcnetwork.io/bluzelle/transaction/${txHash}"
      },
      {
        "kind": "Nodine.ID",
        "url": "https://explorer.co.id/bluzelle",
        "tx_page": "https://explorer.co.id/bluzelle/transaction/${txHash}"
      }
    ],
    "keywords": [
      "bluzelle",
      "game",
      "gamma4",
      "nft"
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "bostrom",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "bostrom",
    "chain_id": "bostrom",
    "bech32_prefix": "bostrom",
    "daemon_name": "cyber",
    "node_home": "$HOME/.cyber",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "boot",
          "low_gas_price": 0,
          "average_gas_price": 0,
          "high_gas_price": 0.01
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "boot"
        }
      ]
    },
    "codebase": {
      "cosmwasm_enabled": true
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.bostrom.cybernode.ai",
          "provider": "cybercongress"
        },
        {
          "address": "https://rpc.cyber.posthuman.digital",
          "provider": "posthuman"
        },
        {
          "address": "https://rpc-cyber-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://rpc.cyber.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ],
      "rest": [
        {
          "address": "https://lcd.bostrom.cybernode.ai",
          "provider": "cybercongress"
        },
        {
          "address": "https://lcd.cyber.posthuman.digital",
          "provider": "posthuman"
        },
        {
          "address": "https://api-cyber-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://lcd.cyber.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ],
      "grpc": [
        {
          "address": "grpc-cyber-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "https://grpc.cyber.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ]
    },
    "explorers": [
      {
        "kind": "cyb",
        "url": "https://cyb.ai/",
        "tx_page": "https://cyb.ai/network/bostrom/tx/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/bostrom",
        "tx_page": "https://ping.pub/bostrom/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/bostrom",
        "tx_page": "https://atomscan.com/bostrom/transactions/${txHash}",
        "account_page": "https://atomscan.com/bostrom/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg"
      }
    ]
  },
  {
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
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "carbon",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Carbon",
    "chain_id": "carbon-1",
    "bech32_prefix": "swth",
    "daemon_name": "carbond",
    "website": "https://www.carbon.network/",
    "node_home": "$HOME/.carbon",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "swth",
          "fixed_min_gas_price": 1,
          "low_gas_price": 1,
          "average_gas_price": 1,
          "high_gas_price": 1,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "usc",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.0001,
          "average_gas_price": 0.0001,
          "high_gas_price": 0.0001,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "bnb.1.6.773edb",
          "fixed_min_gas_price": 0,
          "low_gas_price": 1000000,
          "average_gas_price": 1000000,
          "high_gas_price": 1000000,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "bneo.1.14.e2e5f6",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.0015,
          "average_gas_price": 0.0015,
          "high_gas_price": 0.0015,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "busd.1.6.754a80",
          "fixed_min_gas_price": 0,
          "low_gas_price": 100000000,
          "average_gas_price": 100000000,
          "high_gas_price": 100000000,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "cglp.1.19.1698d3",
          "fixed_min_gas_price": 0,
          "low_gas_price": 100000000,
          "average_gas_price": 100000000,
          "high_gas_price": 100000000,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "cgt/1",
          "fixed_min_gas_price": 0,
          "low_gas_price": 100000000,
          "average_gas_price": 100000000,
          "high_gas_price": 100000000,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "eth.1.19.c3b805",
          "fixed_min_gas_price": 0,
          "low_gas_price": 100000,
          "average_gas_price": 100000,
          "high_gas_price": 100000,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "eth.1.2.942d87",
          "fixed_min_gas_price": 0,
          "low_gas_price": 100000,
          "average_gas_price": 100000,
          "high_gas_price": 100000,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "ibc/07FA7831E1920D0C87C9388F86B0108677F6ED0C9DE7E4063F05ED675192405C",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.0035,
          "average_gas_price": 0.0035,
          "high_gas_price": 0.0035,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "ibc/2B58B8C147E8718EECCB3713271DF46DEE8A3A00A27242628604E31C2F370EF5",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.00005,
          "average_gas_price": 0.00005,
          "high_gas_price": 0.00005,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "ibc/3552CECB7BCE1891DB6070D37EC6E954C972B1400141308FCD85FD148BD06DE5",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.00032,
          "average_gas_price": 0.00032,
          "high_gas_price": 0.00032,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "ibc/35E771B8682D828173F4B795F6C307780F96DC64D6F914FAE4CC9B4666F66364",
          "fixed_min_gas_price": 0,
          "low_gas_price": 300000000,
          "average_gas_price": 300000000,
          "high_gas_price": 300000000,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "ibc/4E06CF24FEBFB3F5AF645377DCC0B70AA6183BAF6B918B8B6243FCDEB7D38118",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.0006,
          "average_gas_price": 0.0006,
          "high_gas_price": 0.0006,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "ibc/662914D0C1CEBCB070C68F061D035E8B10A07C79AB286E7342C85F3BE74612C5",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.00015,
          "average_gas_price": 0.00015,
          "high_gas_price": 0.00015,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "ibc/75249A18DEFBEFE55F83B1C70CAD234DF164F174C6BC51682EE92C2C81C18C93",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.00015,
          "average_gas_price": 0.00015,
          "high_gas_price": 0.00015,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "ibc/92E974290AF9E2BC3AEEEC35305C8FD76AC5A22A74CF8D91270FDF5A1C41E861",
          "fixed_min_gas_price": 0,
          "low_gas_price": 200000000,
          "average_gas_price": 200000000,
          "high_gas_price": 200000000,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.00001,
          "average_gas_price": 0.00001,
          "high_gas_price": 0.00001,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "ibc/B7864B03E1B9FD4F049243E92ABD691586F682137037A9F3FCA5222815620B3C",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.00001,
          "average_gas_price": 0.00001,
          "high_gas_price": 0.00001,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.00015,
          "average_gas_price": 0.00015,
          "high_gas_price": 0.00015,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "usdc.1.2.343151",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.0001,
          "average_gas_price": 0.0001,
          "high_gas_price": 0.0001,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "usdc.1.6.53ff75",
          "fixed_min_gas_price": 0,
          "low_gas_price": 100000000,
          "average_gas_price": 100000000,
          "high_gas_price": 100000000,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        },
        {
          "denom": "zil.1.18.1a4a06",
          "fixed_min_gas_price": 0,
          "low_gas_price": 6000,
          "average_gas_price": 6000,
          "high_gas_price": 6000,
          "gas_costs": {
            "cosmos_send": 100000000,
            "ibc_transfer": 100000000
          }
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "swth"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://tm-api.carbon.network",
          "provider": "switcheo-labs"
        },
        {
          "address": "https://carbon-rpc.lavenderfive.com",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://carbon-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rpc.carbon.blockhunters.org",
          "provider": "BlockHunters"
        }
      ],
      "rest": [
        {
          "address": "https://api.carbon.network",
          "provider": "switcheo-labs"
        },
        {
          "address": "https://carbon-api.lavenderfive.com",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://carbon-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rest.carbon.blockhunters.org",
          "provider": "BlockHunters"
        }
      ],
      "grpc": [
        {
          "address": "https://carbon-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "carbon-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ]
    },
    "explorers": [
      {
        "kind": "carbonscan",
        "url": "https://scan.carbon.network",
        "tx_page": "https://scan.carbon.network/transaction/${txHash}?net=main"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/carbon",
        "tx_page": "https://ping.pub/carbon/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/carbon",
        "tx_page": "https://atomscan.com/carbon/transactions/${txHash}",
        "account_page": "https://atomscan.com/carbon/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "celestia",
    "chain_id": "celestia",
    "pretty_name": "Celestia",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://celestia.org/",
    "bech32_prefix": "celestia",
    "daemon_name": "celestia-appd",
    "node_home": "$HOME/.celestia-app",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "utia",
          "fixed_min_gas_price": 0.002,
          "low_gas_price": 0.01,
          "average_gas_price": 0.02,
          "high_gas_price": 0.1
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "utia"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg"
    },
    "description": "Celestia is a modular data availability network that securely scales with the number of users, making it easy for anyone to launch their own blockchain.",
    "apis": {
      "rpc": [
        {
          "address": "https://public-celestia-rpc.numia.xyz",
          "provider": "Numia"
        },
        {
          "address": "https://celestia-rpc.mesa.newmetric.xyz",
          "provider": "Newmetric"
        },
        {
          "address": "https://rpc.lunaroasis.net",
          "provider": "Lunar Oasis"
        },
        {
          "address": "https://rpc.celestia.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://celestia-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc-celestia-01.stakeflow.io",
          "provider": "Stakeflow"
        },
        {
          "address": "https://rpc-celestia.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "http://celestia.rpc.nodersteam.com:29657",
          "provider": "[NODERS]TEAM"
        },
        {
          "address": "https://celestia-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://celestia.rpc.stakin-nodes.com",
          "provider": "Stakin"
        },
        {
          "address": "https://celestia.rpc.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://celestia-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc-celestia.mzonder.com",
          "provider": "MZONDER"
        },
        {
          "address": "https://celestia-rpc.enigma-validator.com",
          "provider": "Enigma"
        },
        {
          "address": "https://rpc-celestia.theamsolutions.info",
          "provider": "AM Solutions"
        }
      ],
      "rest": [
        {
          "address": "https://public-celestia-lcd.numia.xyz",
          "provider": "Numia"
        },
        {
          "address": "https://celestia-rest.mesa.newmetric.xyz",
          "provider": "Newmetric"
        },
        {
          "address": "http://celestia.rpc.nodersteam.com:1617",
          "provider": "[NODERS]TEAM"
        },
        {
          "address": "https://api.lunaroasis.net",
          "provider": "Lunar Oasis"
        },
        {
          "address": "https://api.celestia.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://celestia-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://api-celestia-01.stakeflow.io",
          "provider": "Stakeflow"
        },
        {
          "address": "https://api-celestia.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://celestia-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://celestia.rest.stakin-nodes.com",
          "provider": "Stakin"
        },
        {
          "address": "https://celestia.api.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://api-celestia.mzonder.com",
          "provider": "MZONDER"
        },
        {
          "address": "https://celestia-lcd.enigma-validator.com",
          "provider": "Enigma"
        },
        {
          "address": "https://rest-celestia.theamsolutions.info",
          "provider": "AM Solutions"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc.celestia.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "celestia-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://celestia-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "celestia.grpc.nodersteam.com:9690",
          "provider": "[NODERS]TEAM"
        },
        {
          "address": "grpc-celestia-01.stakeflow.io:15002",
          "provider": "Stakeflow"
        },
        {
          "address": "grpc-celestia.cosmos-spaces.cloud:5190",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "celestia-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "celestia.grpc.stakin-nodes.com:443",
          "provider": "Stakin"
        },
        {
          "address": "celestia.grpc.kjnodes.com:443",
          "provider": "kjnodes"
        },
        {
          "address": "grpc-celestia.mzonder.com:443",
          "provider": "MZONDER"
        },
        {
          "address": "grpc-celestia.theamsolutions.info:443",
          "provider": "AM Solutions"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Mintscan",
        "url": "https://mintscan.io/celestia",
        "tx_page": "https://mintscan.io/celestia/txs/${txHash}",
        "account_page": "https://mintscan.io/celestia/address/${accountAddress}"
      },
      {
        "kind": "NodeStake",
        "url": "https://explorer.nodestake.top/celestia/",
        "tx_page": "https://explorer.nodestake.top/celestia/txs/${txHash}",
        "account_page": "https://explorer.nodestake.top/celestia/account/${accountAddress}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/celestia",
        "tx_page": "https://stakeflow.io/celestia/transactions/${txHash}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/celestia",
        "tx_page": "https://explorer.tcnetwork.io/celestia/transaction/${txHash}",
        "account_page": "https://explorer.tcnetwork.io/celestia/account/${accountAddress}"
      },
      {
        "kind": "🔥STAVR🔥",
        "url": "https://explorer.stavr.tech/Celestia-Mainnet",
        "tx_page": "https://explorer.stavr.tech/Celestia-Mainnet/transaction/${txHash}",
        "account_page": "https://explorer.stavr.tech/Celestia-Mainnet/account/${accountAddress}"
      },
      {
        "kind": "AM Solutions",
        "url": "https://explorer.theamsolutions.info/celestia-main",
        "tx_page": "https://explorer.theamsolutions.info/celestia-main/transaction/${txHash}",
        "account_page": "https://explorer.theamsolutions.info/celestia-main/account/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "cerberus",
    "status": "killed",
    "network_type": "mainnet",
    "website": "https://cerberus.zone/",
    "pretty_name": "Cerberus",
    "chain_id": "cerberus-chain-1",
    "bech32_prefix": "cerberus",
    "daemon_name": "cerberusd",
    "node_home": "$HOME/.cerberus",
    "slip44": 118,
    "codebase": {},
    "fees": {
      "fee_tokens": [
        {
          "denom": "ucrbrus",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.01,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ucrbrus"
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.svg"
    },
    "apis": {
      "rpc": [],
      "rest": [],
      "grpc": [
        {
          "address": "grpc-cerberus-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "cerberus-grpc.polkachu.com:13890",
          "provider": "Polkachu"
        }
      ]
    },
    "explorers": [
      {
        "kind": "skynetexplorers",
        "url": "https://skynetexplorers.com/cerberus",
        "tx_page": "https://skynetexplorers.com/cerberus/tx/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/cerberus",
        "tx_page": "https://ping.pub/cerberus/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/cerberus",
        "tx_page": "https://atomscan.com/cerberus/transactions/${txHash}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/cerberus",
        "tx_page": "https://explorer.tcnetwork.io/cerberus/transaction/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "chain4energy",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://c4e.io/",
    "pretty_name": "Chain4Energy",
    "chain_id": "perun-1",
    "bech32_prefix": "c4e",
    "daemon_name": "c4ed",
    "node_home": "$HOME/.c4e-chain",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 4444,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uc4e",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chain4energy/images/c4e.png"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.c4e.io/",
          "provider": "C4E"
        },
        {
          "address": "https://rpc.c4e.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://chain4energy-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "http://c4e.rpc.m.stavr.tech:17097",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://rpc-c4e.d-stake.xyz",
          "provider": "D-Stake"
        },
        {
          "address": "https://c4e.rpc.bccnodes.com",
          "provider": "BccNodes"
        },
        {
          "address": "https://rpc-m.c4e.hexnodes.co",
          "provider": "Hexnodes"
        },
        {
          "address": "https://rpc-c4e.takeshi.team",
          "provider": "TAKESHI"
        },
        {
          "address": "https://rpc-c4e.mzonder.com",
          "provider": "MZONDER"
        },
        {
          "address": "https://rpc.cros-nest.com/chain4energy",
          "provider": "Crosnest"
        },
        {
          "address": "https://rpc.c4e.indonode.net",
          "provider": "Indonode"
        },
        {
          "address": "https://c4e-rpc.stake-town.com",
          "provider": "StakeTown"
        },
        {
          "address": "https://rpc.c4e.silentvalidator.com",
          "provider": "silent"
        },
        {
          "address": "http://rpc.c4e.stakeup.tech",
          "provider": "StakeUp"
        },
        {
          "address": "https://chain4energy-rpc.stakeangle.com",
          "provider": "StakeAngle"
        },
        {
          "address": "https://c4e-rpc.genznodes.dev",
          "provider": "genznodes"
        },
        {
          "address": "https://rpc-c4e.theamsolutions.info",
          "provider": "AM Solutions"
        },
        {
          "address": "https://c4e.rpc.m.anode.team",
          "provider": "AlxVoy ⚡ ANODE.TEAM"
        },
        {
          "address": "https://c4e-rpc.validatrium.club",
          "provider": "Validatrium"
        },
        {
          "address": "http://185.245.182.192:46657",
          "provider": "Meerlabs"
        },
        {
          "address": "http://89.117.58.109:26657",
          "provider": "medes"
        },
        {
          "address": "http://c4e.rpc.node75.org:26957",
          "provider": "Pro-nodes75"
        },
        {
          "address": "https://rpc-c4e.stakerun.com:443",
          "provider": "StakeRun"
        },
        {
          "address": "http://164.68.125.243:26657",
          "provider": "Smt Network"
        },
        {
          "address": "https://c4e-rpc.antrixy.org/",
          "provider": "Antrix Validators"
        },
        {
          "address": "https://c4e.doubletop.tech/",
          "provider": "DOUBLETOP"
        },
        {
          "address": "https://c4e-rpc.kalia.network:443",
          "provider": "Kalia Network"
        },
        {
          "address": "https://c4e.rpc.skynodejs.net",
          "provider": "skynodejs"
        },
        {
          "address": "http://38.242.220.64:16657",
          "provider": "mahof"
        },
        {
          "address": "http://209.182.239.169:46657",
          "provider": "SECARD"
        },
        {
          "address": "https://rpc.c4e.validatus.com:443",
          "provider": "Validatus"
        }
      ],
      "rest": [
        {
          "address": "https://lcd.c4e.io/",
          "provider": "C4E"
        },
        {
          "address": "https://api.c4e.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://chain4energy-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://c4e.api.m.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://api-m.c4e.hexnodes.co",
          "provider": "Hexnodes"
        },
        {
          "address": "https://api-c4e.takeshi.team",
          "provider": "TAKESHI"
        },
        {
          "address": "https://api-c4e.mzonder.com",
          "provider": "MZONDER"
        },
        {
          "address": "https://rest.cros-nest.com/chain4energy",
          "provider": "Crosnest"
        },
        {
          "address": "https://api.c4e.indonode.net",
          "provider": "Indonode"
        },
        {
          "address": "https://c4e-api.stake-town.com",
          "provider": "StakeTown"
        },
        {
          "address": "https://api.c4e.silentvalidator.com",
          "provider": "silent"
        },
        {
          "address": "http://api.c4e.stakeup.tech",
          "provider": "StakeUp"
        },
        {
          "address": "http://chain4energy-rpc.stakeangle.com:1317",
          "provider": "StakeAngle"
        },
        {
          "address": "https://c4e-api.genznodes.dev",
          "provider": "genznodes"
        },
        {
          "address": "https://api-c4e.theamsolutions.info",
          "provider": "AM Solutions"
        },
        {
          "address": "https://c4e.api.m.anode.team",
          "provider": "AlxVoy ⚡ ANODE.TEAM"
        },
        {
          "address": "https://c4e-api.validatrium.club",
          "provider": "Validatrium"
        },
        {
          "address": "http://c4e.api.node75.org:1397",
          "provider": "Pro-nodes75"
        },
        {
          "address": "https://lcd-c4e.stakerun.com:443",
          "provider": "StakeRun"
        },
        {
          "address": "http://164.68.125.243:1319",
          "provider": "Smt Network"
        },
        {
          "address": "https://c4e-rest.antrixy.org/",
          "provider": "Antrix Validators"
        },
        {
          "address": "https://c4e-api.kalia.network:443",
          "provider": "Kalia Network"
        },
        {
          "address": "https://c4e.api.skynodejs.net",
          "provider": "skynodejs"
        },
        {
          "address": "http://38.242.220.64:11317",
          "provider": "mahof"
        },
        {
          "address": "http://209.182.239.169:1417",
          "provider": "SECARD"
        },
        {
          "address": "https://api.c4e.validatus.com:443",
          "provider": "Validatus"
        }
      ],
      "grpc": [
        {
          "address": "grpc.c4e.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "chain4energy-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "c4e.grpc.bccnodes.com:443",
          "provider": "BccNodes"
        },
        {
          "address": "grpc-c4e.takeshi.team:443",
          "provider": "TAKESHI"
        },
        {
          "address": "grpc-c4e.mzonder.com:443",
          "provider": "MZONDER"
        },
        {
          "address": "http://c4e.grpc.m.stavr.tech:7029",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "c4e-grpc.stake-town.com:443",
          "provider": "StakeTown"
        },
        {
          "address": "grpc.c4e.silentvalidator.com:443",
          "provider": "silent"
        },
        {
          "address": "http://chain4energy-rpc.stakeangle.com:1317",
          "provider": "StakeAngle"
        },
        {
          "address": "c4e-grpc.genznodes.dev:52090",
          "provider": "genznodes"
        },
        {
          "address": "https://grpc-c4e.theamsolutions.info:9391",
          "provider": "AM Solutions"
        },
        {
          "address": "https://c4e.grpc.m.anode.team",
          "provider": "AlxVoy ⚡ ANODE.TEAM"
        },
        {
          "address": "https://c4e-grpc.validatrium.club",
          "provider": "Validatrium"
        },
        {
          "address": "http://185.245.182.192:1318",
          "provider": "Meerlabs"
        },
        {
          "address": "grpc-c4e.stakerun.com:1190",
          "provider": "StakeRun"
        },
        {
          "address": "https://c4e-grpc.antrixy.org/",
          "provider": "Antirx Validators"
        },
        {
          "address": "https://c4e.doubletop.tech:443",
          "provider": "DOUBLETOP"
        },
        {
          "address": "c4e-grpc.kalia.network:3090",
          "provider": "Kalia Network"
        },
        {
          "address": "https://c4e.grpc.skynodejs.net",
          "provider": "skynodejs"
        },
        {
          "address": "http://38.242.220.64:19090",
          "provider": "mahof"
        },
        {
          "address": "http://209.182.239.169:9190",
          "provider": "SECARD"
        },
        {
          "address": "https://grpc.c4e.validatus.com:443",
          "provider": "Validatus"
        }
      ]
    },
    "explorers": [
      {
        "kind": "explorer",
        "url": "https://explorer.apeironnodes.com/chain4energy",
        "tx_page": "https://explorer.apeironnodes.com/chain4energy/transactions/${txHash}"
      },
      {
        "kind": "explorer",
        "url": "https://explorer.ppnv.space/c4e",
        "tx_page": "https://explorer.ppnv.space/c4e/transactions/${txHash}"
      },
      {
        "kind": "explorer",
        "url": "https://explorer.c4e.io/",
        "tx_page": "https://explorer.c4e.io/transactions/${txHash}"
      },
      {
        "kind": "NodeStake Explorer",
        "url": "https://explorer.nodestake.top/chain4energy",
        "tx_page": "https://explorer.nodestake.top/chain4energy/transactions/${txHash}"
      },
      {
        "kind": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀 Explorer",
        "url": "https://exp.utsa.tech/c4e",
        "tx_page": "https://exp.utsa.tech/c4e/tx/${txHash}"
      },
      {
        "kind": "🔥STAVR🔥 Explorer",
        "url": "https://explorer.stavr.tech/c4e",
        "tx_page": "https://explorer.stavr.tech/c4e/tx/${txHash}"
      },
      {
        "kind": "BccNodes Explorer",
        "url": "https://explorer.bccnodes.com/chain4energy",
        "tx_page": "https://explorer.bccnodes.com/chain4energy/transactions/${txHash}"
      },
      {
        "kind": "NODEXPLORER",
        "url": "https://explorer.nodexcapital.com/c4e",
        "tx_page": "https://explorer.nodexcapital.com/c4e/transactions/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/chain4energy",
        "tx_page": "https://atomscan.com/chain4energy/transactions/${txHash}",
        "account_page": "https://atomscan.com/chain4energy/accounts/${accountAddress}"
      },
      {
        "kind": "AM Solutions Explorer",
        "url": "https://explorer.theamsolutions.info/c4e-main/staking",
        "tx_page": "https://explorer.theamsolutions.info/c4e-main/transactions/${txHash}"
      },
      {
        "kind": "AlxVoy ⚡ ANODE.TEAM Explorer",
        "url": "https://main.anode.team/c4e",
        "tx_page": "https://main.anode.team/c4e/tx/${txHash}"
      },
      {
        "kind": "ScanRun",
        "url": "https://scanrun.io/c4e",
        "tx_page": "https://scanrun.io/c4e/transactions/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chain4energy/images/c4e.png"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "cheqd",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.cheqd.io/",
    "pretty_name": "Cheqd",
    "chain_id": "cheqd-mainnet-1",
    "bech32_prefix": "cheqd",
    "daemon_name": "cheqd-noded",
    "node_home": "$HOME/.cheqdnode",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ncheq",
          "fixed_min_gas_price": 25,
          "low_gas_price": 50,
          "average_gas_price": 75,
          "high_gas_price": 100
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ncheq"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.46.10"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.cheqd.net",
          "provider": "cheqd"
        },
        {
          "address": "https://cheqd-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes"
        },
        {
          "address": "https://rpc-cheqd-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://rpc.cheqd.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://rpc-cheqd.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://cheqd-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rpc-cheqd.blockval.io",
          "provider": "Blockval"
        }
      ],
      "rest": [
        {
          "address": "https://api.cheqd.net",
          "provider": "cheqd"
        },
        {
          "address": "https://cheqd-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes"
        },
        {
          "address": "https://api-cheqd-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://cheqd-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://api.cheqd.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://lcd-cheqd.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://api-cheqd.blockval.io",
          "provider": "Blockval"
        }
      ],
      "grpc": [
        {
          "address": "grpc.cheqd.net:443",
          "provider": "cheqd"
        },
        {
          "address": "cheqd-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "cheqd-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "grpc-cheqd-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "grpc.cheqd.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "grpc-cheqd.blockval.io:9290",
          "provider": "Blockval"
        }
      ]
    },
    "explorers": [
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/cheqd",
        "tx_page": "https://bigdipper.live/cheqd/transactions/${txHash}",
        "account_page": "https://bigdipper.live/cheqd/accounts/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/cheqd",
        "tx_page": "https://ping.pub/cheqd/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/cheqd",
        "tx_page": "https://atomscan.com/cheqd/transactions/${txHash}",
        "account_page": "https://atomscan.com/cheqd/accounts/${accountAddress}"
      },
      {
        "kind": "EZ Staking",
        "url": "https://app.ezstaking.io/cheqd",
        "tx_page": "https://app.ezstaking.io/cheqd/txs/${txHash}",
        "account_page": "https://app.ezstaking.io/cheqd/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://look.chillvalidation.com/cheqd",
        "tx_page": "https://look.chillvalidation.com/cheqd/tx/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.wildsage.io/cheqd",
        "tx_page": "https://ping.wildsage.io/cheqd/tx/${txHash}"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg"
    },
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "chihuahua",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://chihuahua.wtf/",
    "pretty_name": "Chihuahua",
    "chain_id": "chihuahua-1",
    "bech32_prefix": "chihuahua",
    "daemon_name": "chihuahuad",
    "node_home": "$HOME/.chihuahuad",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uhuahua",
          "fixed_min_gas_price": 0,
          "low_gas_price": 500,
          "average_gas_price": 1250,
          "high_gas_price": 2000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uhuahua"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "v0.47.5",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "v0.41.0"
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.chihuahua.wtf",
          "provider": "Chihuahua"
        },
        {
          "address": "https://rpc-chihuahua.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://chihuahua-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc-chihuahua-ia.cosmosia.notional.ventures",
          "provider": "Notional"
        },
        {
          "address": "https://chihuahua-rpc.lavenderfive.com",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc.huahua.bh.rocks",
          "provider": "BlockHunters 🎯"
        },
        {
          "address": "https://chihuahua-rpc.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://rpc-chihuahua.pupmos.network",
          "provider": "PUPMØS"
        },
        {
          "address": "https://chihuahua-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://chihuahua-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ],
      "rest": [
        {
          "address": "https://api.chihuahua.wtf",
          "provider": "Chihuahua"
        },
        {
          "address": "https://rest-chihuahua.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://api-chihuahua-ia.cosmosia.notional.ventures",
          "provider": "Notional"
        },
        {
          "address": "https://chihuahua-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://chihuahua-api.lavenderfive.com",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://chihuahua-api.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://api-chihuahua.pupmos.network",
          "provider": "PUPMØS"
        },
        {
          "address": "https://chihuahua-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://chihuahua-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ],
      "grpc": [
        {
          "address": "grpc-chihuahua-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "chihuahua-grpc.polkachu.com:12990",
          "provider": "Polkachu"
        },
        {
          "address": "chihuahua-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "grpc-chihuahua.cosmos-spaces.cloud:2290",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "chihuahua-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "chihuahua-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/chihuahua",
        "tx_page": "https://ping.pub/chihuahua/tx/${txHash}"
      },
      {
        "kind": "mintscan",
        "url": "https://mintscan.io/chihuahua",
        "tx_page": "https://mintscan.io/chihuahua/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/chihuahua/accounts/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/chihuahua",
        "tx_page": "https://atomscan.com/chihuahua/transactions/${txHash}",
        "account_page": "https://atomscan.com/chihuahua/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "chimba",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://chimba.ooo/",
    "pretty_name": "Chimba",
    "chain_id": "chimba",
    "bech32_prefix": "chimba",
    "daemon_name": "chimbad",
    "node_home": "$HOME/.chimbad",
    "fees": {
      "fee_tokens": [
        {
          "denom": "ucmba",
          "fixed_min_gas_price": 0.25,
          "low_gas_price": 1,
          "average_gas_price": 5,
          "high_gas_price": 10
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "chimba"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.mainnet.chimba.ooo",
          "provider": "chimba"
        }
      ],
      "rest": [
        {
          "address": "https://mainnet.chimba.ooo",
          "provider": "chimba"
        }
      ]
    },
    "explorers": [
      {
        "kind": "bigdipper",
        "url": "https://explorer.chimba.ooo/",
        "tx_page": "https://explorer.chimba.ooo/transactions/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.svg"
      }
    ],
    "slip44": 118
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "chronicnetwork",
    "status": "killed",
    "network_type": "mainnet",
    "pretty_name": "Chronic Chain",
    "chain_id": "morocco-1",
    "bech32_prefix": "chronic",
    "daemon_name": "chtd",
    "node_home": "$HOME/.cht",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ucgas",
          "fixed_min_gas_price": 0.001
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-chronic.zenchainlabs.io/",
          "provider": "ZenChainLabs"
        }
      ],
      "rest": [
        {
          "address": "https://api-chronic.zenchainlabs.io/",
          "provider": "ZenChainLabs"
        }
      ],
      "grpc": []
    },
    "explorers": [
      {
        "kind": "skynetexplorers",
        "url": "https://www.skynetexplorers.com/chronic-token",
        "tx_page": ""
      },
      {
        "kind": "Zenscan.io",
        "url": "https://www.chronic.zenscan.io",
        "tx_page": ""
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/chronicnetwork",
        "tx_page": "https://atomscan.com/chronicnetwork/transactions/${txHash}",
        "account_page": "https://atomscan.com/chronicnetwork/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "comdex",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://comdex.one/",
    "pretty_name": "Comdex",
    "chain_id": "comdex-1",
    "bech32_prefix": "comdex",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ucmdx",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ucmdx"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "v0.47.5",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "v0.41.0"
    },
    "daemon_name": "comdex",
    "node_home": "$HOME/.comdex",
    "key_algos": [
      "secp256k1"
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.comdex.one",
          "provider": "comdex"
        },
        {
          "address": "https://comdex-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc.comdex.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://comdex-rpc.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc-comdex.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://rpc-comdex.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://comdex-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://comdex-rpc.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://comdex-rpc.stakerhouse.com",
          "provider": "StakerHouse"
        },
        {
          "address": "https://comdex-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://rpc-comdex-01.stakeflow.io",
          "provider": "Stakeflow"
        },
        {
          "address": "https://comdex-rpc.validatornode.com",
          "provider": "ValidatorNode"
        }
      ],
      "rest": [
        {
          "address": "https://rest.comdex.one",
          "provider": "comdex"
        },
        {
          "address": "https://api.comdex.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://comdex-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://comdex-api.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://api-comdex.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://comdex-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://lcd-comdex.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://comdex-api.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://comdex-rest.stakerhouse.com",
          "provider": "StakerHouse"
        },
        {
          "address": "https://comdex-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://api-comdex-01.stakeflow.io",
          "provider": "Stakeflow"
        },
        {
          "address": "https://comdex-api.validatornode.com",
          "provider": "ValidatorNode"
        }
      ],
      "grpc": [
        {
          "address": "grpc-comdex-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "comdex.grpcui.chaintools.host:443",
          "provider": "ChainTools"
        },
        {
          "address": "comdex-grpc.polkachu.com:13190",
          "provider": "Polkachu"
        },
        {
          "address": "grpc-comdex.cosmos-spaces.cloud:2300",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "comdex-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "comdex-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "comdex-grpc.w3coins.io:13190",
          "provider": "w3coins"
        },
        {
          "address": "comdex-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "grpc-comdex-01.stakeflow.io:10002",
          "provider": "Stakeflow"
        },
        {
          "address": "comdex-grpc.stakerhouse.com:443",
          "provider": "StakerHouse"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking",
        "url": "https://app.ezstaking.io/comdex",
        "tx_page": "https://app.ezstaking.io/comdex/txs/${txHash}",
        "account_page": "https://app.ezstaking.io/comdex/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/comdex",
        "tx_page": "https://www.mintscan.io/comdex/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/comdex/accounts/${accountAddress}"
      },
      {
        "kind": "aneka",
        "url": "https://comdex.aneka.io/",
        "tx_page": "https://comdex.aneka.io/txs/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/comdex",
        "tx_page": "https://ping.pub/comdex/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/comdex",
        "tx_page": "https://atomscan.com/comdex/transactions/${txHash}",
        "account_page": "https://atomscan.com/comdex/accounts/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/comdex",
        "tx_page": "https://bigdipper.live/comdex/transactions/${txHash}",
        "account_page": "https://bigdipper.live/comdex/accounts/${accountAddress}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/comdex",
        "account_page": "https://stakeflow.io/comdex/accounts/${accountAddress}"
      },
      {
        "kind": "ValidatorNode",
        "url": "https://explorer.validatornode.com/comdex",
        "tx_page": "https://explorer.validatornode.com/comdex/tx/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "commercionetwork",
    "chain_id": "commercio-3",
    "pretty_name": "Commercio.network",
    "status": "live",
    "network_type": "mainnet",
    "bech32_prefix": "did:com:",
    "daemon_name": "commercionetworkd",
    "node_home": "$HOME/.commercionetwork",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 701,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ucommercio"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-mainnet.commercio.network"
        }
      ],
      "rest": [
        {
          "address": "https://lcd-mainnet.commercio.network"
        }
      ]
    },
    "explorers": [
      {
        "kind": "almerico",
        "url": "https://mainnet.commercio.network",
        "tx_page": "https://mainnet.commercio.network/transactions/detail/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "composable",
    "chain_id": "centauri-1",
    "website": "https://www.composable.finance/",
    "pretty_name": "Composable",
    "status": "live",
    "network_type": "mainnet",
    "bech32_prefix": "centauri",
    "daemon_name": "centaurid",
    "node_home": "$HOME/.banksy",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ppica",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0,
          "average_gas_price": 0,
          "high_gas_price": 0
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ppica"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/composable.svg"
    },
    "description": "Composable is the base layer connecting L1s and L2s. We are scaling IBC to other ecosystems, pushing the boundaries of trust-minimized interoperability. We abstract the cross-chain experience for users, delivering seamless chain-agnostic execution of user intentions.",
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-composable-ia.cosmosia.notional.ventures",
          "provider": "Notional"
        },
        {
          "address": "https://composable-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://composable-rpc.cogwheel.zone:443",
          "provider": "Cogwheel"
        },
        {
          "address": "https://rpc-centauri.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://composable-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://composable-rpc.genznodes.dev",
          "provider": "genznodes"
        },
        {
          "address": "https://rpc-composable.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://composable-rpc.stake-town.com",
          "provider": "StakeTown"
        },
        {
          "address": "https://composable.rpc.stakevillage.net:443",
          "provider": "Stake Village"
        },
        {
          "address": "https://composable-rpc.stakeandrelax.net",
          "provider": "Stake&Relax 🦥"
        },
        {
          "address": "https://rpc.centauri.bronbro.io:443",
          "provider": "Bro_n_Bro"
        },
        {
          "address": "https://composable.rpc.moonbridge.team",
          "provider": "Moonbridge"
        }
      ],
      "rest": [
        {
          "address": "https://api-composable-ia.cosmosia.notional.ventures",
          "provider": "Notional"
        },
        {
          "address": "https://composable-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://composable-api.cogwheel.zone:443",
          "provider": "Cogwheel"
        },
        {
          "address": "https://api-centauri.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://composable-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://composable-api.genznodes.dev",
          "provider": "genznodes"
        },
        {
          "address": "https://lcd-composable.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://composable-api.stake-town.com",
          "provider": "StakeTown"
        },
        {
          "address": "https://composable.api.stakevillage.net",
          "provider": "Stake Village"
        },
        {
          "address": "https://composable-api.stakeandrelax.net",
          "provider": "Stake&Relax 🦥"
        },
        {
          "address": "https://lcd.centauri.bronbro.io:443",
          "provider": "Bro_n_Bro"
        },
        {
          "address": "https://composable.api.moonbridge.team",
          "provider": "Moonbridge"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc-composable-ia.cosmosia.notional.ventures",
          "provider": "Notional"
        },
        {
          "address": "grpc.composable.nodestake.top:9090",
          "provider": "NodeStake"
        },
        {
          "address": "composable-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "grpc-centauri.cosmos-spaces.cloud:1120",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://composable-grpc.cogwheel.zone:443",
          "provider": "Cogwheel"
        },
        {
          "address": "https://composable-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "composable-grpc.genznodes.dev:53090",
          "provider": "genznodes"
        },
        {
          "address": "composable-grpc.stake-town.com:443",
          "provider": "StakeTown"
        },
        {
          "address": "grpc-composable.vinjan.xyz:36090",
          "provider": "vinjan"
        },
        {
          "address": "composable.grpc.skynodejs.net",
          "provider": "skynodejs"
        },
        {
          "address": "composable.grpc.stakevillage.net:16190",
          "provider": "Stake Village"
        },
        {
          "address": "composable-rpc.stakeandrelax.net:22290",
          "provider": "Stake&Relax 🦥"
        },
        {
          "address": "https://grpc.centauri.bronbro.io:443",
          "provider": "Bro_n_Bro"
        },
        {
          "address": "https://composable.grpc.moonbridge.team",
          "provider": "Moonbridge"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/centauri",
        "tx_page": "https://ping.pub/centauri/tx/${txHash}"
      },
      {
        "kind": "NodeStake Explorer",
        "url": "https://explorer.nodestake.top/composable",
        "tx_page": "https://explorer.nodestake.top/composable/tx/${txHash}"
      },
      {
        "kind": "Stake Village",
        "url": "https://exp.stakevillage.net/composable",
        "tx_page": "https://exp.stakevillage.net/composable/tx/${txHash}",
        "account_page": "https://exp.stakevillage.net/composable/account/${accountAddress}"
      }
    ],
    "images": [
      {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/composable.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "conscious",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.consciousdao.com/",
    "pretty_name": "ConsciousDAO",
    "chain_id": "cvn_2032-1",
    "bech32_prefix": "cvn",
    "node_home": "$HOME/.cvnd",
    "daemon_name": "cvnd",
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "acvnt",
          "fixed_min_gas_price": 100000000,
          "low_gas_price": 100000000,
          "average_gas_price": 200000000,
          "high_gas_price": 300000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "acvnt"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.cvn.io/",
          "provider": "cvn.io"
        }
      ],
      "rest": [
        {
          "address": "https://api.consciousdao.com",
          "provider": "consciousdao.com"
        }
      ],
      "grpc": [
        {
          "address": "https://rest.consciousdao.com",
          "provider": "consciousdao.com"
        }
      ],
      "evm-http-jsonrpc": [
        {
          "address": "https://node.cvn.io/",
          "provider": "cvn"
        },
        {
          "address": "https://node.consciousdao.io/",
          "provider": "consciousdao"
        }
      ]
    },
    "explorers": [
      {
        "kind": "blockscout",
        "url": "https://explore.consciousdao.com/",
        "tx_page": "https://explore.consciousdao.com/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "coreum",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.coreum.com",
    "pretty_name": "Coreum",
    "chain_id": "coreum-mainnet-1",
    "bech32_prefix": "core",
    "daemon_name": "cored",
    "node_home": "$HOME/.core/coreum-mainnet-1",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 990,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ucore",
          "fixed_min_gas_price": 0.03125,
          "low_gas_price": 0.0625,
          "average_gas_price": 0.0625,
          "high_gas_price": 62.5
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ucore"
        }
      ],
      "lock_duration": {
        "time": "168h"
      }
    },
    "codebase": {
      "cosmos_sdk_version": "0.47",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "0.30"
    },
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png",
        "theme": {
          "primary_color_hex": "#25d695"
        }
      },
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://full-node.mainnet-1.coreum.dev:26657",
          "provider": "Coreum Foundation"
        },
        {
          "address": "https://full-node-californium.mainnet-1.coreum.dev:26657",
          "provider": "Coreum Foundation"
        },
        {
          "address": "https://full-node-curium.mainnet-1.coreum.dev:26657",
          "provider": "Coreum Foundation"
        },
        {
          "address": "https://full-node-uranium.mainnet-1.coreum.dev:26657",
          "provider": "Coreum Foundation"
        },
        {
          "address": "https://rpc-coreum.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://coreum.rpc.silknodes.io",
          "provider": "Silk Nodes"
        },
        {
          "address": "https://coreum-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://rpc.mainnet.solonation.cf",
          "provider": "#SoloNation"
        },
        {
          "address": "https://coreum-rpc.genznodes.dev",
          "provider": "genznodes"
        }
      ],
      "grpc": [
        {
          "address": "https://full-node.mainnet-1.coreum.dev:9090",
          "provider": "Coreum Foundation"
        },
        {
          "address": "https://full-node-californium.mainnet-1.coreum.dev:9090",
          "provider": "Coreum Foundation"
        },
        {
          "address": "https://full-node-curium.mainnet-1.coreum.dev:9090",
          "provider": "Coreum Foundation"
        },
        {
          "address": "https://full-node-uranium.mainnet-1.coreum.dev:9090",
          "provider": "Coreum Foundation"
        },
        {
          "address": "https://grpc.coreum.nodexcapital.com:444",
          "provider": "NodeX Validator"
        },
        {
          "address": "coreum-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "coreum-grpc.genznodes.dev:35090",
          "provider": "genznodes"
        }
      ],
      "rest": [
        {
          "address": "https://rest-coreum.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://coreum.api.silknodes.io",
          "provider": "Silk Nodes"
        },
        {
          "address": "https://full-node.mainnet-1.coreum.dev:1317",
          "provider": "Coreum"
        },
        {
          "address": "https://coreum-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://api.mainnet.solonation.cf",
          "provider": "#SoloNation"
        },
        {
          "address": "https://coreum-api.genznodes.dev",
          "provider": "genznodes"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Coreum",
        "url": "https://explorer.coreum.com/coreum",
        "tx_page": "https://explorer.coreum.com/coreum/transactions/${txHash}",
        "account_page": "https://explorer.coreum.com/coreum/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/coreum",
        "tx_page": "https://www.mintscan.io/coreum/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/coreum/accounts/${accountAddress}"
      },
      {
        "kind": "NODEXPLORER",
        "url": "https://explorer.nodexcapital.com/coreum",
        "tx_page": "https://explorer.nodexcapital.com/coreum/txs/${txHash}",
        "account_page": "https://explorer.nodexcapital.com/coreum/account/${accountAddress}"
      },
      {
        "kind": "Silk Nodes",
        "url": "https://explorer.silknodes.io/coreum",
        "tx_page": "https://explorer.silknodes.io/coreum/tx/${txHash}",
        "account_page": "https://explorer.silknodes.io/coreum/account/${accountAddress}"
      },
      {
        "kind": "#SoloNation",
        "url": "https://explorer.solonation.cf/core-main",
        "tx_page": "https://explorer.solonation.cf/core-main/tx/${txHash}",
        "account_page": "https://explorer.solonation.cf/core-main/account/${accountAddress}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/coreum",
        "tx_page": "https://explorer.tcnetwork.io/coreum/transaction/${txHash}",
        "account_page": "https://explorer.tcnetwork.io/coreum/account/${accountAddress}"
      }
    ],
    "keywords": [
      "dex",
      "staking",
      "wasm",
      "assets",
      "nft"
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "cosmoshub",
    "chain_id": "cosmoshub-4",
    "website": "https://cosmos.network/",
    "pretty_name": "Cosmos Hub",
    "status": "live",
    "network_type": "mainnet",
    "bech32_prefix": "cosmos",
    "daemon_name": "gaiad",
    "node_home": "$HOME/.gaia",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uatom",
          "fixed_min_gas_price": 0.005,
          "low_gas_price": 0.01,
          "average_gas_price": 0.025,
          "high_gas_price": 0.03
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uatom"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
    },
    "description": "In a nutshell, Cosmos Hub bills itself as a project that solves some of the hardest problems facing the blockchain industry. It aims to offer an antidote to slow, expensive, unscalable and environmentally harmful proof-of-work protocols, like those used by Bitcoin, by offering an ecosystem of connected blockchains.\n\nThe project’s other goals include making blockchain technology less complex and difficult for developers thanks to a modular framework that demystifies decentralized apps. Last but not least, an Inter-blockchain Communication protocol makes it easier for blockchain networks to communicate with each other — preventing fragmentation in the industry.\n\nCosmos Hub's origins can be dated back to 2014, when Tendermint, a core contributor to the network, was founded. In 2016, a white paper for Cosmos was published — and a token sale was held the following year. ATOM tokens are earned through a hybrid proof-of-stake algorithm, and they help to keep the Cosmos Hub, the project’s flagship blockchain, secure. This cryptocurrency also has a role in the network’s governance.",
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-cosmoshub.blockapsis.com",
          "provider": "chainapsis"
        },
        {
          "address": "https://cosmos-rpc.quickapi.com:443",
          "provider": "Chainlayer"
        },
        {
          "address": "https://cosmos-rpc.onivalidator.com",
          "provider": "Oni Validator ⛩️"
        },
        {
          "address": "https://rpc-cosmoshub.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://cosmoshub-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc.cosmoshub.strange.love",
          "provider": "strangelove-ventures"
        },
        {
          "address": "https://rpc-cosmoshub.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://rpc-cosmoshub.pupmos.network",
          "provider": "PUPMØS"
        },
        {
          "address": "https://rpc-cosmoshub.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://cosmos-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://cosmos-rpc.staketab.org:443",
          "provider": "Staketab"
        },
        {
          "address": "https://rpc-cosmoshub-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://rpc-cosmoshub.architectnodes.com",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://rpc.cosmos.dragonstake.io",
          "provider": "DragonStake"
        },
        {
          "address": "https://cosmoshub.rpc.stakin-nodes.com",
          "provider": "Stakin"
        },
        {
          "address": "https://cosmos-rpc.icycro.org",
          "provider": "IcyCRO 🧊"
        },
        {
          "address": "https://rpc.cosmos.bh.rocks",
          "provider": "BlockHunters 🎯"
        },
        {
          "address": "https://cosmos-rpc.rockrpc.net",
          "provider": "RockawayX Infra"
        },
        {
          "address": "http://rpc-cosmoshub.freshstaking.com:26657",
          "provider": "FreshSTAKING"
        },
        {
          "address": "https://cosmos-rpc.easy2stake.com/",
          "provider": "Easy 2 Stake"
        },
        {
          "address": "https://rpc.cosmos.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://cosmos.rpc.silknodes.io",
          "provider": "Silk Nodes"
        },
        {
          "address": "https://cosmos-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://cosmoshub.rpc.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://rpc-cosmoshub.goldenratiostaking.net",
          "provider": "Golden Ratio Staking"
        },
        {
          "address": "https://rpc-cosmos-hub-01.stakeflow.io",
          "provider": "Stakeflow"
        },
        {
          "address": "https://cosmos-rpc.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://cosmos-rpc.enigma-validator.com",
          "provider": "Enigma"
        },
        {
          "address": "https://rpc-cosmoshub.mms.team",
          "provider": "MMS"
        },
        {
          "address": "https://cosmos-rpc.tienthuattoan.ventures",
          "provider": "TienThuatToan"
        },
        {
          "address": "https://community.nuxian-node.ch:6797/gaia/trpc",
          "provider": "PRO Delegators"
        },
        {
          "address": "https://cosmos-rpc.highstakes.ch:26657/",
          "provider": "High Stakes 🇨🇭"
        },
        {
          "address": "https://cosmoshub-rpc.cosmosrescue.dev",
          "provider": "cosmosrescue"
        },
        {
          "address": "https://cosmos-rpc.stakeandrelax.net",
          "provider": "Stake&Relax 🦥"
        }
      ],
      "rest": [
        {
          "address": "https://lcd-cosmoshub.blockapsis.com",
          "provider": "chainapsis"
        },
        {
          "address": "https://cosmos-lcd.quickapi.com:443",
          "provider": "Chainlayer"
        },
        {
          "address": "https://rest-cosmoshub.goldenratiostaking.net",
          "provider": "Golden Ratio Staking"
        },
        {
          "address": "https://cosmoshub-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://api-cosmoshub.pupmos.network",
          "provider": "PUPMØS"
        },
        {
          "address": "https://api-cosmoshub.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://api-cosmoshub-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://cosmos-rest.staketab.org",
          "provider": "Staketab"
        },
        {
          "address": "https://lcd.cosmos.dragonstake.io",
          "provider": "DragonStake"
        },
        {
          "address": "https://cosmoshub.rest.stakin-nodes.com",
          "provider": "Stakin"
        },
        {
          "address": "https://rest-cosmoshub.architectnodes.com",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://rest-cosmoshub.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://lcd-cosmoshub.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://cosmos-lcd.easy2stake.com",
          "provider": "Easy 2 Stake"
        },
        {
          "address": "https://api.cosmos.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://cosmos.api.silknodes.io",
          "provider": "Silk Nodes"
        },
        {
          "address": "https://cosmos-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://cosmoshub.api.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://api-cosmos-hub-01.stakeflow.io",
          "provider": "Stakeflow"
        },
        {
          "address": "https://cosmos-api.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://api-cosmoshub.mms.team",
          "provider": "MMS"
        },
        {
          "address": "https://cosmos-api.tienthuattoan.ventures",
          "provider": "TienThuatToan"
        },
        {
          "address": "https://community.nuxian-node.ch:6797/gaia/crpc",
          "provider": "PRO Delegators"
        },
        {
          "address": "https://cosmos-api.highstakes.ch:1317/",
          "provider": "High Stakes 🇨🇭"
        },
        {
          "address": "https://cosmoshub-mainnet.api.l0vd.com",
          "provider": "L0vd.com ❤️"
        },
        {
          "address": "https://cosmos-lcd.enigma-validator.com",
          "provider": "Enigma"
        },
        {
          "address": "https://cosmoshub-api.cosmosrescue.dev",
          "provider": "cosmosrescue"
        },
        {
          "address": "https://cosmos-api.stakeandrelax.net",
          "provider": "Stake&Relax 🦥"
        }
      ],
      "grpc": [
        {
          "address": "cosmoshub-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "grpc-cosmoshub-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "cosmos-grpc.polkachu.com:14990",
          "provider": "Polkachu"
        },
        {
          "address": "grpc.cosmos.interbloc.org:443",
          "provider": "Interbloc"
        },
        {
          "address": "services.staketab.com:9030",
          "provider": "Staketab"
        },
        {
          "address": "grpc.cosmos.dragonstake.io:443",
          "provider": "DragonStake"
        },
        {
          "address": "cosmoshub.grpc.stakin-nodes.com:443",
          "provider": "Stakin"
        },
        {
          "address": "https://grpc.cosmos.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "cosmos-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "grpc-cosmoshub.cosmos-spaces.cloud:3910",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "cosmoshub.grpc.kjnodes.com:11390",
          "provider": "kjnodes"
        },
        {
          "address": "grpc-cosmos-hub-01.stakeflow.io:9090",
          "provider": "Stakeflow"
        },
        {
          "address": "grpc-cosmoshub.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "cosmos-grpc.w3coins.io:14990",
          "provider": "w3coins"
        },
        {
          "address": "grpc-cosmoshub.mms.team:443",
          "provider": "MMS"
        },
        {
          "address": "cosmos-grpc.tienthuattoan.ventures:9090",
          "provider": "TienThuatToan"
        },
        {
          "address": "cosmoshub-mainnet.grpc.l0vd.com:80",
          "provider": "L0vd.com ❤️"
        },
        {
          "address": "https://grpc-cosmos.nodeist.net",
          "provider": "Nodeist"
        },
        {
          "address": "cosmos-grpc.stakeandrelax.net:14990",
          "provider": "Stake&Relax 🦥"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking",
        "url": "https://app.ezstaking.io/cosmoshub",
        "tx_page": "https://app.ezstaking.io/cosmoshub/txs/${txHash}",
        "account_page": "https://app.ezstaking.io/cosmoshub/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/cosmos",
        "tx_page": "https://www.mintscan.io/cosmos/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/cosmos/accounts/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/cosmos",
        "tx_page": "https://ping.pub/cosmos/tx/${txHash}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/cosmos",
        "tx_page": "https://bigdipper.live/cosmos/transactions/${txHash}",
        "account_page": "https://bigdipper.live/cosmos/accounts/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com",
        "tx_page": "https://atomscan.com/transactions/${txHash}",
        "account_page": "https://atomscan.com/accounts/${accountAddress}"
      },
      {
        "kind": "unichain",
        "url": "https://unicha.in/cosmos",
        "tx_page": "https://unicha.in/cosmos/transaction/${txHash}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/cosmoshub",
        "tx_page": "https://explorer.tcnetwork.io/cosmoshub/transaction/${txHash}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/cosmos",
        "account_page": "https://stakeflow.io/cosmos/accounts/${accountAddress}"
      },
      {
        "kind": "Nodeist Explorer",
        "url": "https://exp.nodeist.net/cosmos",
        "tx_page": "https://exp.nodeist.net/cosmos/tx/${txHash}"
      },
      {
        "kind": "Inbloc",
        "url": "https://inbloc.org",
        "tx_page": "https://inbloc.org/transactions/${txHash}",
        "account_page": "https://inbloc.org/account/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "coss",
    "chain_id": "coss-1",
    "website": "https://coss.ink/",
    "pretty_name": "COSS",
    "status": "live",
    "network_type": "mainnet",
    "bech32_prefix": "coss",
    "daemon_name": "cossd",
    "node_home": "$HOME/.coss",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ucoss",
          "fixed_min_gas_price": 0.025,
          "low_gas_price": 0.025,
          "average_gas_price": 0.03,
          "high_gas_price": 0.04
        },
        {
          "denom": "ucgas",
          "fixed_min_gas_price": 0.025,
          "low_gas_price": 0.025,
          "average_gas_price": 0.03,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ucgas"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/coss.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/coss.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://coss-rpc.coss.ink",
          "provider": "StellarGuardian"
        },
        {
          "address": "https://coss-rpc.cias.network",
          "provider": "CelestialPhoenix"
        }
      ],
      "rest": [
        {
          "address": "https://coss-rest.coss.ink",
          "provider": "StellarGuardian"
        },
        {
          "address": "https://coss-rest.cias.network",
          "provider": "CelestialPhoenix"
        }
      ]
    },
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/coss.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/coss.svg"
      }
    ]
  },
  {
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
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "cronos",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://cronos.org",
    "pretty_name": "Cronos",
    "chain_id": "cronosmainnet_25-1",
    "bech32_prefix": "crc",
    "daemon_name": "cronosd",
    "node_home": "$HOME/.cronos",
    "key_algos": [
      "ethsecp256k1"
    ],
    "extra_codecs": [
      "ethermint"
    ],
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "basecro"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.cronos.org/",
          "provider": "cronos.org"
        },
        {
          "address": "https://cronos-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ],
      "rest": [
        {
          "address": "https://rest.cronos.org/",
          "provider": "cronos.org"
        },
        {
          "address": "https://cronos-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ],
      "grpc": [
        {
          "address": "grpc.cronos.org:443",
          "provider": "cronos.org"
        },
        {
          "address": "cronos-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ],
      "evm-http-jsonrpc": [
        {
          "address": "https://evm.cronos.org/",
          "provider": "cronos.org"
        },
        {
          "address": "https://cronos-evm.publicnode.com",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        }
      ]
    },
    "explorers": [
      {
        "kind": "cronoscan",
        "url": "https://cronoscan.com",
        "tx_page": "https://cronoscan.com/tx/${txHash}"
      },
      {
        "kind": "crypto.org",
        "url": "https://cronos.org/explorer",
        "tx_page": "https://cronos.org/explorer/tx/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "cryptoorgchain",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Cronos POS Chain",
    "chain_id": "crypto-org-chain-mainnet-1",
    "bech32_prefix": "cro",
    "website": "https://cronos-pos.org/",
    "daemon_name": "chain-maind",
    "node_home": "$HOME/.chain-maind",
    "slip44": 394,
    "alternative_slip44s": [
      118
    ],
    "fees": {
      "fee_tokens": [
        {
          "denom": "basecro",
          "low_gas_price": 0.025,
          "average_gas_price": 0.03,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "basecro"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cryptoorgchain/images/cronos.png"
    },
    "description": "Cronos PoS Chain is a public, open-source and permissionless blockchain - a fully decentralized network with high speed and low fees, designed to be a public good that helps drive mass adoption of blockchain technology through use cases like Payments, DeFi and NFTs.",
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.mainnet.crypto.org/",
          "provider": "cronos.org"
        },
        {
          "address": "https://rpc-cryptoorgchain-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://rpc-cryptoorgchain.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://cryptocom-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://cryptocom-rpc.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://rpc-cryptoorg.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://cro-chain-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ],
      "rest": [
        {
          "address": "https://rest.mainnet.crypto.org/",
          "provider": "cronos.org"
        },
        {
          "address": "https://api-cryptoorgchain-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://cryptocom-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rest-cryptoorgchain.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://cryptocom-api.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://api-cryptoorg.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://cro-chain-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ],
      "grpc": [
        {
          "address": "grpc.mainnet.crypto.org:443",
          "provider": "cronos.org"
        },
        {
          "address": "grpc-cryptoorgchain-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "cryptocom-grpc.polkachu.com:20290",
          "provider": "Polkachu"
        },
        {
          "address": "cryptocom-grpc.w3coins.io:20290",
          "provider": "w3coins"
        },
        {
          "address": "grpc-cryptoorg.cosmos-spaces.cloud:1160",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "cro-chain-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/crypto-org",
        "tx_page": "https://www.mintscan.io/crypto-org/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/crypto-org/accounts/${accountAddress}"
      },
      {
        "kind": "cronos.org",
        "url": "https://cronos-pos.org/explorer",
        "tx_page": "https://cronos-pos.org/explorer/tx/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/crypto-com-chain",
        "tx_page": "https://ping.pub/crypto-com-chain/tx/${txHash}"
      },
      {
        "kind": "yummy-explorer",
        "url": "https://explorer.yummy.capital",
        "tx_page": "https://explorer.yummy.capital/txs/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cryptoorgchain/images/cronos.png"
      },
      {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cryptoorgchain/images/Cronos_POS_Chain_Colour.svg"
      },
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "cudos",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Cudos",
    "chain_id": "cudos-1",
    "bech32_prefix": "cudos",
    "daemon_name": "cudos-noded",
    "website": "https://www.cudos.org/",
    "node_home": "$HOME/cudos-data",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "acudos",
          "low_gas_price": 5000000000000,
          "average_gas_price": 10000000000000,
          "high_gas_price": 20000000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "acudos"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "http://mainnet-full-node-01.hosts.cudos.org:26657",
          "provider": "cudo"
        },
        {
          "address": "https://mainnet-full-node-02.hosts.cudos.org:36657",
          "provider": "cudo"
        },
        {
          "address": "https://cudos-rpc.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://cudos-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://cudos-rpc.lavenderfive.com",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ],
      "rest": [
        {
          "address": "http://mainnet-full-node-01.hosts.cudos.org:1317",
          "provider": "cudo"
        },
        {
          "address": "https://mainnet-full-node-02.hosts.cudos.org:31317",
          "provider": "cudo"
        },
        {
          "address": "https://cudos-api.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://cudos-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://cudos-api.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ],
      "grpc": [
        {
          "address": "mainnet-full-node-01.hosts.cudos.org:9090",
          "provider": "cudo"
        },
        {
          "address": "cudos-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "cudos-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ]
    },
    "explorers": [
      {
        "kind": "bigdipper",
        "url": "https://explorer.cudos.org/",
        "tx_page": "https://explorer.cudos.org/transactions/${txHash}",
        "account_page": "https://explorer.cudos.org/accounts/${accountAddress}"
      },
      {
        "kind": "cudos-dashboard",
        "url": "https://dashboard.cudos.org/",
        "tx_page": "https://explorer.cudos.org/transactions/${txHash}",
        "account_page": "https://explorer.cudos.org/accounts/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/cudos",
        "tx_page": "https://www.mintscan.io/cudos/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/cudos/accounts/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/cudos",
        "tx_page": "https://atomscan.com/cudos/transactions/${txHash}",
        "account_page": "https://atomscan.com/cudos/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "decentr",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Decentr",
    "chain_id": "mainnet-3",
    "bech32_prefix": "decentr",
    "daemon_name": "decentrd",
    "node_home": "$HOME/.decentr",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "udec",
          "fixed_min_gas_price": 0.025,
          "low_gas_price": 0.025,
          "average_gas_price": 0.025,
          "high_gas_price": 0.025
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "udec"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://poseidon.mainnet.decentr.xyz",
          "provider": "decentr"
        },
        {
          "address": "https://rpc.decentr.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://decentr-rpc.ibs.team/",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://rpc-dcntr.nodine.id/",
          "provider": "Nodine.ID"
        },
        {
          "address": "https://rpc-decentr.mms.team/",
          "provider": "MMS"
        }
      ],
      "rest": [
        {
          "address": "https://rest.mainnet.decentr.xyz",
          "provider": "decentr"
        },
        {
          "address": "https://api.decentr.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://decentr-api.ibs.team/",
          "provider": "Inter Blockchain Services"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc-decentr.sxlzptprjkt.xyz:443",
          "provider": "sxlzptprjkt | VALIDATOR"
        },
        {
          "address": "https://grpc.decentr.hexnodes.co",
          "provider": "Hexnodes"
        },
        {
          "address": "https://grpc.decentr.nodexcapital.com:443",
          "provider": "NodeX Validator"
        },
        {
          "address": "grpc-decentr.mms.team:443",
          "provider": "MMS"
        }
      ]
    },
    "explorers": [
      {
        "kind": "decentr.net",
        "url": "https://explorer.decentr.net",
        "tx_page": "https://explorer.decentr.net/transactions/${txHash}?networkId=mainnet"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/decentr/",
        "tx_page": "https://ping.pub/decentr/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/decentr",
        "tx_page": "https://atomscan.com/decentr/transactions/${txHash}",
        "account_page": "https://atomscan.com/decentr/accounts/${accountAddress}"
      },
      {
        "kind": "Nodine.ID",
        "url": "https://explorer.co.id/decentr",
        "tx_page": "https://explorer.co.id/decentr/tx/${txHash}"
      },
      {
        "kind": "THE EXPLORER",
        "url": "https://explorer.sxlzptprjkt.xyz/decentr",
        "tx_page": "https://explorer.sxlzptprjkt.xyz/decentr/tx/${txHash}"
      },
      {
        "kind": "hexskrt EXPLORER",
        "url": "https://explorer.hexskrt.net/decentr",
        "tx_page": "https://explorer.hexskrt.net/decentr/tx/${txHash}"
      },
      {
        "kind": "NODEXPLORER",
        "url": "https://explorer.nodexcapital.com/decentr",
        "tx_page": "https://explorer.nodexcapital.com/decentr/tx/${txHash}"
      },
      {
        "kind": "Explorer ComunityNode",
        "url": "https://explorer.comunitynode.my.id/decentr",
        "tx_page": "https://explorer.comunitynode.my.id/decentr/tx/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "desmos",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://desmos.network/",
    "pretty_name": "Desmos",
    "chain_id": "desmos-mainnet",
    "bech32_prefix": "desmos",
    "daemon_name": "desmos",
    "node_home": "$HOME/.desmos",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 852,
    "fees": {
      "fee_tokens": [
        {
          "denom": "udsm",
          "fixed_min_gas_price": 0.001,
          "low_gas_price": 0.01,
          "average_gas_price": 0.03,
          "high_gas_price": 0.05
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "udsm"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.mainnet.desmos.network",
          "provider": "desmos"
        },
        {
          "address": "https://desmos-rpc.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://desmos-rpc.ibs.team/",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://desmos-rpc.staketab.org:443",
          "provider": "Staketab"
        },
        {
          "address": "https://rpc.desmos.tcnetwork.io",
          "provider": "TC Network"
        },
        {
          "address": "https://rpc.desmos.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ],
      "rest": [
        {
          "address": "https://api.mainnet.desmos.network",
          "provider": "desmos"
        },
        {
          "address": "https://desmos-api.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://desmos-api.ibs.team/",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://desmos-rest.staketab.org",
          "provider": "Staketab"
        },
        {
          "address": "https://rest.desmos.tcnetwork.io",
          "provider": "TC Network"
        },
        {
          "address": "https://lcd.desmos.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ],
      "grpc": [
        {
          "address": "desmos-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://grpc-desmos.explorer.co.id",
          "provider": "Nodine.ID"
        },
        {
          "address": "services.staketab.com:9043",
          "provider": "Staketab"
        },
        {
          "address": "desmos.grpc.nodersteam.com:9121",
          "provider": "[NODERS]TEAM"
        },
        {
          "address": "https://grpc-desmos.sr20de.xyz",
          "provider": "Sr20de"
        },
        {
          "address": "https://grpc.desmos.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking",
        "url": "https://app.ezstaking.io/desmos",
        "tx_page": "https://app.ezstaking.io/desmos/txs/${txHash}",
        "account_page": "https://app.ezstaking.io/desmos/account/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/desmos",
        "tx_page": "https://bigdipper.live/desmos/transactions/${txHash}",
        "account_page": "https://bigdipper.live/desmos/accounts/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/desmos",
        "tx_page": "https://www.mintscan.io/desmos/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/desmos/accounts/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/desmos",
        "tx_page": "https://ping.pub/desmos/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/desmos",
        "tx_page": "https://atomscan.com/desmos/transactions/${txHash}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/desmos",
        "tx_page": "https://explorer.tcnetwork.io/desmos/transaction/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "dig",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://digchain.org/",
    "pretty_name": "Dig Chain",
    "chain_id": "dig-1",
    "bech32_prefix": "dig",
    "daemon_name": "digd",
    "node_home": "$HOME/.dig",
    "key_algos": [
      "secp256k1",
      "ethsecp256k1"
    ],
    "extra_codecs": [
      "ethermint"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "udig",
          "low_gas_price": 0.025,
          "average_gas_price": 0.03,
          "high_gas_price": 0.035
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "udig"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-1-dig.notional.ventures"
        },
        {
          "address": "https://rpc-dig-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        }
      ],
      "rest": [
        {
          "address": "https://api-1-dig.notional.ventures"
        },
        {
          "address": "https://api-dig-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        }
      ],
      "grpc": [
        {
          "address": "grpc-dig-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/dig",
        "tx_page": "https://ping.pub/dig/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/dig",
        "tx_page": "https://atomscan.com/dig/transactions/${txHash}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/dig",
        "tx_page": "https://explorer.tcnetwork.io/dig/transaction/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "doravota",
    "chain_id": "vota-ash",
    "pretty_name": "Dora Vota",
    "status": "live",
    "network_type": "mainnet",
    "bech32_prefix": "dora",
    "daemon_name": "dorad",
    "node_home": "$HOME/.dora",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "peaka",
          "fixed_min_gas_price": 100000000000,
          "low_gas_price": 100000000000,
          "average_gas_price": 100000000000,
          "high_gas_price": 100000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "peaka"
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://vota-rpc.dorafactory.org/",
          "provider": "dorafactory"
        }
      ],
      "rest": [
        {
          "address": "https://vota-rest.dorafactory.org",
          "provider": "dorafactory"
        }
      ],
      "grpc": [
        {
          "address": "vota-grpc.dorafactory.org:443",
          "provider": "dorafactory"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Dora Vota Ping Pub",
        "url": "https://vota-explorer.dorafactory.org",
        "tx_page": "https://vota-explorer.dorafactory.org/doravota/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "dydx",
    "status": "live",
    "website": "https://dydx.trade/",
    "network_type": "mainnet",
    "pretty_name": "dYdX Protocol",
    "chain_id": "dydx-mainnet-1",
    "bech32_prefix": "dydx",
    "daemon_name": "dydxprotocold",
    "node_home": "$HOME/.dydxprotocol",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "adydx",
          "fixed_min_gas_price": 12500000000,
          "low_gas_price": 12500000000,
          "average_gas_price": 12500000000,
          "high_gas_price": 20000000000
        },
        {
          "denom": "ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5",
          "fixed_min_gas_price": 0.025,
          "low_gas_price": 0.025,
          "average_gas_price": 0.025,
          "high_gas_price": 0.03
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "adydx"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "v0.47.4",
      "cosmwasm_enabled": false
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg"
    },
    "description": "Our goal is to build open source code that can power a first class product and trading experience.",
    "apis": {
      "rpc": [
        {
          "address": "https://community.nuxian-node.ch:6797/dydx/trpc",
          "provider": "PRO Delegators"
        },
        {
          "address": "https://dydx-dao-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://dydx-mainnet-full-rpc.public.blastapi.io",
          "provider": "Bware Labs"
        },
        {
          "address": "https://dydx-rpc.kingnodes.com:443",
          "provider": "Kingnodes"
        },
        {
          "address": "https://dydx-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://dydx-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake ⚡ 0% fee > Airdrops 🪂💰"
        },
        {
          "address": "https://rpc-dydx.ecostake.com:443",
          "provider": "ecostake"
        },
        {
          "address": "https://rpc.dydx.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "https://rpc-dydx.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://dydx-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://rpc-dydx.cros-nest.com:443",
          "provider": "Crosnest"
        },
        {
          "address": "https://dydx-rpc.enigma-validator.com",
          "provider": "Enigma"
        }
      ],
      "rest": [
        {
          "address": "https://community.nuxian-node.ch:6797/dydx/crpc",
          "provider": "PRO Delegators"
        },
        {
          "address": "https://dydx-dao-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://dydx-mainnet-full-lcd.public.blastapi.io",
          "provider": "Bware Labs"
        },
        {
          "address": "https://dydx-rest.kingnodes.com:443",
          "provider": "Kingnodes"
        },
        {
          "address": "https://dydx-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://dydx-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake ⚡ 0% fee > Airdrops 🪂💰"
        },
        {
          "address": "https://rest-dydx.ecostake.com:443",
          "provider": "ecostake"
        },
        {
          "address": "https://api-dydx.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://api.dydx.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "https://dydx-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://rest-dydx.cros-nest.com:443",
          "provider": "Crosnest"
        },
        {
          "address": "https://dydx-lcd.enigma-validator.com",
          "provider": "Enigma"
        }
      ],
      "grpc": [
        {
          "address": "dydx-dao-grpc-1.polkachu.com:23890",
          "provider": "Polkachu (1)"
        },
        {
          "address": "dydx-dao-grpc-2.polkachu.com:23890",
          "provider": "Polkachu (2)"
        },
        {
          "address": "dydx-dao-grpc-3.polkachu.com:23890",
          "provider": "Polkachu (3)"
        },
        {
          "address": "dydx-dao-grpc-4.polkachu.com:23890",
          "provider": "Polkachu (4)"
        },
        {
          "address": "dydx-dao-grpc-5.polkachu.com:23890",
          "provider": "Polkachu (5)"
        },
        {
          "address": "dydx-mainnet-full-grpc.public.blastapi.io:443",
          "provider": "Bware Labs"
        },
        {
          "address": "https://dydx-grpc.kingnodes.com:443",
          "provider": "Kingnodes"
        },
        {
          "address": "https://dydx-grpc.lavenderfive.com",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "dydx-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake ⚡ 0% fee > Airdrops 🪂💰"
        },
        {
          "address": "https://grpc.dydx.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "dydx.grpc.kjnodes.com:443",
          "provider": "kjnodes"
        },
        {
          "address": "grpc-dydx.cosmos-spaces.cloud:4990",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "dydx-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/dydx",
        "tx_page": "https://www.mintscan.io/dydx/txs/${txHash}",
        "account_page": "https://www.mintscan.io/dydx/account/${accountAddress}"
      },
      {
        "kind": "NodeStake",
        "url": "https://explorer.nodestake.top/dydx/",
        "tx_page": "https://explorer.nodestake.top/dydx/txs/${txHash}",
        "account_page": "https://explorer.nodestake.top/dydx/account/${accountAddress}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/dydx",
        "tx_page": "https://explorer.tcnetwork.io/dydx/transaction/${txHash}",
        "account_page": "https://explorer.tcnetwork.io/dydx/account/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "dyson",
    "website": "https://dysonprotocol.com/",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Dyson Protocol",
    "chain_id": "dyson-mainnet-01",
    "bech32_prefix": "dys",
    "node_home": "$HOME/.dyson",
    "daemon_name": "dysond",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "dys",
          "low_gas_price": 0.0001,
          "average_gas_price": 0.0002,
          "high_gas_price": 0.0003
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "dys"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dyson.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dyson.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://dys-tm.dysonprotocol.com:443",
          "provider": "dysonprotocol"
        },
        {
          "address": "https://dyson-rpc.cogwheel.zone:443",
          "provider": "cogwheel"
        }
      ],
      "rest": [
        {
          "address": "https://dys-api.dysonprotocol.com:443",
          "provider": "dysonprotocol"
        },
        {
          "address": "https://dyson-api.cogwheel.zone:443",
          "provider": "cogwheel"
        }
      ],
      "grpc": [
        {
          "address": "dys-grpc.dyson.lol:443",
          "provider": "lol"
        },
        {
          "address": "https://dyson-grpc.cogwheel.zone:443",
          "provider": "cogwheel"
        }
      ]
    },
    "explorers": [
      {
        "kind": "dysonprotocol",
        "url": "https://explorer.dys.dysonprotocol.com/dyson/",
        "tx_page": "https://explorer.dys.dysonprotocol.com/dyson/tx/${txHash}",
        "account_page": "https://explorer.dys.dysonprotocol.com/dyson/account/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dyson.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dyson.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "echelon",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Echelon",
    "chain_id": "echelon_3000-3",
    "bech32_prefix": "echelon",
    "node_home": "$HOME/.echelond",
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "aechelon",
          "low_gas_price": 10000000000,
          "average_gas_price": 25000000000,
          "high_gas_price": 40000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "aechelon"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/logo.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/echelon.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://ech01trpc.mindheartsoul.org",
          "provider": "Mind Heart Soul"
        },
        {
          "address": "https://rpc.echjoker.lol",
          "provider": "⚡ Echelon Joker ⚛ 🃏"
        }
      ],
      "rest": [
        {
          "address": "https://ech01api.mindheartsoul.org",
          "provider": "Mind Heart Soul"
        },
        {
          "address": "https://api.echjoker.lol",
          "provider": "⚡ Echelon Joker ⚛ 🃏"
        }
      ],
      "grpc": [],
      "evm-http-jsonrpc": [
        {
          "address": "https://ech01jrpc.mindheartsoul.org",
          "provider": "Mind Heart Soul"
        },
        {
          "address": "https://jrpc.echjoker.lol",
          "provider": "⚡ Echelon Joker ⚛ 🃏"
        }
      ]
    },
    "explorers": [
      {
        "kind": "echelon",
        "url": "https://app.ech.network/explorer",
        "tx_page": "https://app.ech.network/explorer/tx/${txHash}"
      },
      {
        "kind": "blockscout",
        "url": "https://scout.ech.network",
        "tx_page": "https://scout.ech.network/tx/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/echelon",
        "tx_page": "https://ping.pub/echelon/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/echelon",
        "tx_page": "https://atomscan.com/echelon/transactions/${txHash}",
        "account_page": "https://atomscan.com/echelon/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/logo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/echelon.svg"
      }
    ]
  },
  {
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
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg"
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
        "kind": "EZ Staking",
        "url": "https://app.ezstaking.io/emoney",
        "tx_page": "https://app.ezstaking.io/emoney/txs/${txHash}",
        "account_page": "https://app.ezstaking.io/emoney/account/${accountAddress}"
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
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "empowerchain",
    "chain_id": "empowerchain-1",
    "pretty_name": "EmpowerChain",
    "status": "live",
    "network_type": "mainnet",
    "bech32_prefix": "empower",
    "daemon_name": "empowerd",
    "node_home": "$HOME/.empowerchain",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "umpwr",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.025,
          "average_gas_price": 0.025,
          "high_gas_price": 0.03
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "umpwr"
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-empowerchain.ecostake.com:443",
          "provider": "ecostake"
        },
        {
          "address": "https://empowerchain-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://empower.rpc.liveraven.net",
          "provider": "LiveRaveN"
        },
        {
          "address": "http://empw.rpc.m.stavr.tech:22057",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://rpc-empower.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://rpc-empowerchain.mzonder.com:443",
          "provider": "MZONDER"
        },
        {
          "address": "https://empower-rpc.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://rpc-empower.vinjan.xyz:443",
          "provider": "vinjan"
        },
        {
          "address": "https://rpc.empower.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://mainnet-empower-rpc.konsortech.xyz",
          "provider": "KonsorTech"
        },
        {
          "address": "https://empower.rpc.stakevillage.net:443",
          "provider": "Stake Village"
        },
        {
          "address": "https://rpc.empowerchain.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ],
      "rest": [
        {
          "address": "https://rest-empowerchain.ecostake.com:443",
          "provider": "ecostake"
        },
        {
          "address": "https://empowerchain-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://empower.api.liveraven.net",
          "provider": "LiveRaveN"
        },
        {
          "address": "https://empw.api.m.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://empower-api.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://lcd-empower.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://api-empower.vinjan.xyz:443",
          "provider": "vinjan"
        },
        {
          "address": "https://api.empower.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://mainnet-empower-api.konsortech.xyz",
          "provider": "KonsorTech"
        },
        {
          "address": "https://empower.api.stakevillage.net",
          "provider": "Stake Village"
        },
        {
          "address": "https://lcd.empowerchain.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ],
      "grpc": [
        {
          "address": "empowerchain-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://empower.grpc.liveraven.net",
          "provider": "LiveRaveN"
        },
        {
          "address": "empower-grpc.w3coins.io:17390",
          "provider": "w3coins"
        },
        {
          "address": "grpc-empowerchain.mzonder.com:443",
          "provider": "MZONDER"
        },
        {
          "address": "http://empw.grpc.m.stavr.tech:9141",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "grpc-empower.vinjan.xyz",
          "provider": "vinjan"
        },
        {
          "address": "https://grpc.empower.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "empower.grpc.stakevillage.net:16890",
          "provider": "Stake Village"
        },
        {
          "address": "https://grpc.empowerchain.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ]
    },
    "explorers": [
      {
        "kind": "🔥STAVR🔥",
        "url": "https://explorer.stavr.tech/Empower-Mainnet",
        "tx_page": "https://explorer.stavr.tech/Empower-Mainnet/txs/${txHash}",
        "account_page": "https://explorer.stavr.tech/Empower-Mainnet/account/${accountAddress}"
      },
      {
        "kind": "NodeStake Explorer",
        "url": "https://explorer.nodestake.top/empower",
        "tx_page": "https://explorer.nodestake.top/empower/tx/${txHash}",
        "account_page": "https://explorer.nodestake.top/empower/account/{$accountAddress}"
      },
      {
        "kind": "Stake Village",
        "url": "https://exp.stakevillage.net/empower",
        "tx_page": "https://exp.stakevillage.net/empower/tx/${txHash}",
        "account_page": "https://exp.stakevillage.net/empower/account/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "ethos",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Ethos",
    "chain_id": "ethos_7003-1",
    "bech32_prefix": "ethos",
    "daemon_name": "ethosd",
    "node_home": "$HOME/.ethos",
    "key_algos": [
      "ethsecp256k1"
    ],
    "extra_codecs": [
      "ethermint"
    ],
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "aRYT"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://ethos-rpc.provable.dev:443/",
          "provider": "laurel.provable"
        }
      ],
      "rest": [
        {
          "address": "https://ethos.provable.dev/rest/",
          "provider": "laurel.provable"
        }
      ],
      "grpc": [
        {
          "address": "ethos-grpc.provable.dev:443",
          "provider": "laurel.provable"
        }
      ],
      "evm-http-jsonrpc": [
        {
          "address": "https://ethos-evm.provable.dev/",
          "provider": "laurel.provable"
        }
      ]
    },
    "explorers": [],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.svg"
    },
    "codebase": {},
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "evmos",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://evmos.org/",
    "pretty_name": "Evmos",
    "chain_id": "evmos_9001-2",
    "bech32_prefix": "evmos",
    "node_home": "$HOME/.evmosd",
    "daemon_name": "evmosd",
    "key_algos": [
      "ethsecp256k1"
    ],
    "extra_codecs": [
      "ethermint"
    ],
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "aevmos",
          "fixed_min_gas_price": 250000000,
          "low_gas_price": 20000000000,
          "average_gas_price": 25000000000,
          "high_gas_price": 40000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "aevmos"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "v0.47.5-evmos.2"
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg"
    },
    "description": "Developers use Evmos as the Ethereum Canary Chain to deploy applications of the future. Get all the functionalities of Ethereum with the power of IBC and Interchain composability.",
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-evmos.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://evmos-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://tendermint.bd.evmos.org:26657",
          "provider": "Blockdaemon"
        },
        {
          "address": "https://rpc-evmos-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "https://rpc.evmos.testnet.run",
          "provider": "TestNetRun"
        },
        {
          "address": "https://rpc.evmos.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://rpc.evmos.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://evmos-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc.evmos.silentvalidator.com/",
          "provider": "silent"
        },
        {
          "address": "https://rpc.evmos.tcnetwork.io",
          "provider": "TC Network"
        },
        {
          "address": "https://evmos.rpc.stakin-nodes.com",
          "provider": "Stakin"
        },
        {
          "address": "https://rpc-evmos.architectnodes.com",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://evmos-rpc.validatrium.club",
          "provider": "Validatrium"
        },
        {
          "address": "https://evmos-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://rpc-evmos-01.stakeflow.io",
          "provider": "Stakeflow"
        },
        {
          "address": "https://evmos-rpc.theamsolutions.info",
          "provider": "AM Solutions"
        },
        {
          "address": "https://rpc-evmos.validavia.me",
          "provider": "Validavia"
        },
        {
          "address": "https://evmos-rpc.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://evmos-rpc.stake-town.com",
          "provider": "StakeTown"
        },
        {
          "address": "https://evmos.rpc.liveraven.net",
          "provider": "LiveRaveN"
        },
        {
          "address": "https://evmos-rpc.antrixy.org/",
          "provider": "Antrix Validators"
        },
        {
          "address": "https://evmos-mainnet.rpc.stakevillage.net:443",
          "provider": "Stake Village"
        },
        {
          "address": "https://rpc.evmos.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ],
      "rest": [
        {
          "address": "https://rest.bd.evmos.org:1317",
          "provider": "Blockdaemon"
        },
        {
          "address": "https://evmos-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://api-evmos-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://api.evmos.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://evmos-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://api.evmos.silentvalidator.com/",
          "provider": "silent"
        },
        {
          "address": "https://rest.evmos.tcnetwork.io",
          "provider": "TC Network"
        },
        {
          "address": "https://evmos.rest.stakin-nodes.com",
          "provider": "Stakin"
        },
        {
          "address": "https://rest-evmos.architectnodes.com",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://evmos-api.validatrium.club",
          "provider": "Validatrium"
        },
        {
          "address": "https://rest-evmos.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://evmos-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://api-evmos-01.stakeflow.io",
          "provider": "Stakeflow"
        },
        {
          "address": "https://evmos-api.theamsolutions.info",
          "provider": "AM Solutions"
        },
        {
          "address": "https://lcd-evmos.validavia.me",
          "provider": "Validavia"
        },
        {
          "address": "https://evmos-api.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://evmos-api.stake-town.com",
          "provider": "StakeTown"
        },
        {
          "address": "https://evmos.api.liveraven.net",
          "provider": "LiveRaveN"
        },
        {
          "address": "https://evmos-rest.antrixy.org/",
          "provider": "Antrix Validators"
        },
        {
          "address": "https://evmos-mainnet.api.stakevillage.net",
          "provider": "Stake Village"
        },
        {
          "address": "https://lcd.evmos.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ],
      "grpc": [
        {
          "address": "grpc.bd.evmos.org:9090",
          "provider": "evmos.org"
        },
        {
          "address": "grpc-evmos-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "evmos-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "grpc.evmos.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "grpc-evmos.cosmos-spaces.cloud:1190",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "evmos.grpcui.chaintools.host:443",
          "provider": "ChainTools"
        },
        {
          "address": "evmos-grpc.polkachu.com:13490",
          "provider": "Polkachu"
        },
        {
          "address": "evmos.grpc.stakin-nodes.com:443",
          "provider": "Stakin"
        },
        {
          "address": "evmos-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "evmos-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "grpc-evmos-01.stakeflow.io:1702",
          "provider": "Stakeflow"
        },
        {
          "address": "https://evmos-grpc.theamsolutions.info ",
          "provider": "AM Solutions"
        },
        {
          "address": "evmos-grpc.w3coins.io:13490",
          "provider": "w3coins"
        },
        {
          "address": "grpc-evmos.mms.team:443",
          "provider": "MMS"
        },
        {
          "address": "evmos-grpc.stake-town.com:443",
          "provider": "StakeTown"
        },
        {
          "address": "evmos.grpc.liveraven.net:443",
          "provider": "LiveRaveN"
        },
        {
          "address": "https://evmos-grpc.antrixy.org/",
          "provider": "Antrix Validators"
        },
        {
          "address": "evmos-mainnet.grpc.stakevillage.net:16990",
          "provider": "Stake Village"
        },
        {
          "address": "https://grpc.evmos.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ],
      "evm-http-jsonrpc": [
        {
          "address": "https://eth.bd.evmos.org:8545",
          "provider": "Blockdaemon"
        },
        {
          "address": "https://jsonrpc-evmos-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://evmos-json-rpc.stakely.io",
          "provider": "Stakely"
        },
        {
          "address": "https://jsonrpc.evmos.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://json-rpc.evmos.bh.rocks",
          "provider": "BlockHunters"
        },
        {
          "address": "https://evmos-json-rpc.agoranodes.com",
          "provider": "AgoraNodes"
        },
        {
          "address": "https://evm-rpc.evmos.silentvalidator.com/",
          "provider": "silent"
        },
        {
          "address": "https://json-rpc.evmos.tcnetwork.io",
          "provider": "TC Network"
        },
        {
          "address": "https://evmosevm.rpc.stakin-nodes.com",
          "provider": "Stakin"
        },
        {
          "address": "https://evmos-evm.publicnode.com",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "address": "https://evmos-jsonrpc.theamsolutions.info",
          "provider": "AM Solutions"
        },
        {
          "address": "https://jsonrpc-evmos.mms.team",
          "provider": "MMS"
        },
        {
          "address": "https://evmos-jsonrpc.stake-town.com",
          "provider": "StakeTown"
        },
        {
          "address": "https://evmos.jsonrpc.liveraven.net",
          "provider": "LiveRaveN"
        },
        {
          "address": "https://evmos.json.antrixy.org",
          "provider": "Antrix Validators"
        },
        {
          "address": "https://evmos-mainnet.jsonrpc.stakevillage.net",
          "provider": "Stake Village"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking",
        "url": "https://app.ezstaking.io/evmos",
        "tx_page": "https://app.ezstaking.io/evmos/txs/${txHash}",
        "account_page": "https://app.ezstaking.io/evmos/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/evmos",
        "tx_page": "https://www.mintscan.io/evmos/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/evmos/accounts/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/evmos",
        "tx_page": "https://bigdipper.live/evmos/transactions/${txHash}",
        "account_page": "https://bigdipper.live/evmos/accounts/${accountAddress}"
      },
      {
        "kind": "blockscout",
        "url": "https://evm.evmos.org",
        "tx_page": "https://evm.evmos.org/tx/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/evmos",
        "tx_page": "https://ping.pub/evmos/tx/${txHash}"
      },
      {
        "kind": "explorers.guru",
        "url": "https://evmos.explorers.guru",
        "tx_page": "https://evmos.explorers.guru/transaction/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/evmos",
        "tx_page": "https://atomscan.com/evmos/transactions/${txHash}",
        "account_page": "https://atomscan.com/evmos/accounts/${accountAddress}"
      },
      {
        "kind": "tcnetwork",
        "url": "https://evmos.tcnetwork.io",
        "tx_page": "https://evmos.tcnetwork.io/transaction/${txHash}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/evmos",
        "account_page": "https://stakeflow.io/evmos/accounts/${accountAddress}"
      },
      {
        "kind": "Stake Village",
        "url": "https://exp.stakevillage.net/evmos",
        "tx_page": "https://exp.stakevillage.net/evmos/tx/${txHash}",
        "account_page": "https://exp.stakevillage.net/evmos/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "fetchhub",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Fetch.ai",
    "chain_id": "fetchhub-4",
    "bech32_prefix": "fetch",
    "daemon_name": "fetchd",
    "node_home": "$HOME/.fetchd",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "afet",
          "low_gas_price": 0.025,
          "average_gas_price": 0.025,
          "high_gas_price": 0.035
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "afet"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-fetchhub.fetch.ai:443",
          "provider": "fetch.ai"
        },
        {
          "address": "https://rpc-fetchhub-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://fetch-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://fetchai-rpc.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://fetch-rpc.teasel.org",
          "provider": "𝗧𝗲𝗮𝘀𝗲𝗹"
        },
        {
          "address": "https://fetch-rpc.antrixy.org",
          "provider": "Antrix"
        },
        {
          "address": "https://rpc-fetch.architectnodes.com",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://fetchhub-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://fetch-rpc.ibs.team",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://fetch-rpc.cosmosrescue.com",
          "provider": "cosmosrescue"
        },
        {
          "address": "https://fetch-rpc.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://fetch-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://fetch-rpc.highstakes.ch:26657/",
          "provider": "High Stakes 🇨🇭"
        }
      ],
      "rest": [
        {
          "address": "https://rest-fetchhub.fetch.ai",
          "provider": "fetch.ai"
        },
        {
          "address": "https://api-fetchhub-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://fetch-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://fetchai-api.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://fetch-rest.teasel.org",
          "provider": "𝗧𝗲𝗮𝘀𝗲𝗹"
        },
        {
          "address": "https://fetch-rest.antrixy.org",
          "provider": "Antrix"
        },
        {
          "address": "https://fetchhub-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rest-fetch.architectnodes.com",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://fetch-api.ibs.team",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://fetch-api.cosmosrescue.com",
          "provider": "cosmosrescue"
        },
        {
          "address": "https://fetch-api.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://fetch-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://fetch-api.highstakes.ch:1317/",
          "provider": "High Stakes 🇨🇭"
        }
      ],
      "grpc": [
        {
          "address": "grpc-fetchhub.fetch.ai:443",
          "provider": "fetch.ai"
        },
        {
          "address": "grpc-fetchhub-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "fetch-grpc.polkachu.com:15290",
          "provider": "Polkachu"
        },
        {
          "address": "fetchhub-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "fetch-grpc.teasel.org:443",
          "provider": "𝗧𝗲𝗮𝘀𝗲𝗹"
        },
        {
          "address": "fetch-grpc.antrixy.org:443",
          "provider": "Antrix"
        },
        {
          "address": "fetch-grpc.cosmosrescue.com:9090",
          "provider": "cosmosrescue"
        },
        {
          "address": "fetch-grpc.w3coins.io:15290",
          "provider": "w3coins"
        },
        {
          "address": "fetch-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/fetchai",
        "tx_page": "https://www.mintscan.io/fetchai/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/fetchai/accounts/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://explore-fetchhub.fetch.ai",
        "tx_page": "https://explore-fetchhub.fetch.ai/transactions/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/fetchhub",
        "tx_page": "https://ping.pub/fetchhub/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/fetchai",
        "tx_page": "https://atomscan.com/fetchai/transactions/${txHash}",
        "account_page": "https://atomscan.com/fetchai/accounts/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://fetch-explorer.teasel.org",
        "tx_page": "https://fetch-explorer.teasel.org/transactions/${txHash}"
      },
      {
        "kind": "azoyalabs",
        "url": "https://fetchstation.azoyalabs.com/mainnet",
        "tx_page": "https://fetchstation.azoyalabs.com/mainnet/explorer/transactions/${txHash}",
        "account_page": "https://fetchstation.azoyalabs.com/mainnet/explorer/address/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "firmachain",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://firmachain.org/",
    "pretty_name": "FirmaChain",
    "chain_id": "colosseum-1",
    "bech32_prefix": "firma",
    "slip44": 7777777,
    "daemon_name": "firmachaind",
    "node_home": "$HOME/.firmachain",
    "key_algos": [
      "secp256k1"
    ],
    "fees": {
      "fee_tokens": [
        {
          "denom": "ufct",
          "fixed_min_gas_price": 0.1
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ufct"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://lcd-mainnet.firmachain.dev:26657",
          "provider": "FirmaChain"
        },
        {
          "address": "https://rpc.firmachain.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://firmachain-rpc.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://firmachain-rpc.ramuchi.tech",
          "provider": "ramuchi.tech"
        }
      ],
      "rest": [
        {
          "address": "https://lcd-mainnet.firmachain.dev:1317",
          "provider": "FirmaChain"
        },
        {
          "address": "https://api.firmachain.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://firmachain-api.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://firmachain-api.ramuchi.tech",
          "provider": "ramuchi.tech"
        }
      ],
      "grpc": [
        {
          "address": "firmachain-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://firmachain-grpc.ramuchi.tech:1390",
          "provider": "ramuchi.tech"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking",
        "url": "https://app.ezstaking.io/firmachain",
        "tx_page": "https://app.ezstaking.io/firmachain/txs/${txHash}",
        "account_page": "https://app.ezstaking.io/firmachain/account/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://explorer.firmachain.dev",
        "tx_page": "https://explorer.firmachain.dev/transactions/${txHash}"
      },
      {
        "kind": "explorer.ChainTools",
        "url": "https://explorer.chaintools.tech/firmachain",
        "tx_page": "https://explorer.chaintools.tech/firmachain/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/firmachain",
        "tx_page": "https://atomscan.com/firmachain/transactions/${txHash}",
        "account_page": "https://atomscan.com/firmachain/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "furya",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://furya.xyz/",
    "pretty_name": "furya",
    "chain_id": "furya-1",
    "daemon_name": "furyad",
    "node_home": "$HOME/.furyad",
    "bech32_prefix": "furya",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ufury",
          "low_gas_price": 0,
          "average_gas_price": 0.25,
          "high_gas_price": 0.5
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ufury"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/chain.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/chain.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.furya.xyz",
          "provider": "Furya Genesis Validator 🐝"
        }
      ],
      "rest": [
        {
          "address": "https://api.furya.xyz",
          "provider": "Furya Genesis Validator 🐝"
        }
      ],
      "grpc": [
        {
          "address": "grpc.furya.xyz:443",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Furya Explorer",
        "url": "https://explorer.furya.xyz/",
        "tx_page": "https://explorer.furya.xyz/txs/${txHash}",
        "account_page": "https://explorer.furya.xyz/account/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/chain.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/chain.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "fxcore",
    "chain_id": "fxcore",
    "website": "https://functionx.io",
    "pretty_name": "f(x)Core",
    "status": "live",
    "network_type": "mainnet",
    "bech32_prefix": "fx",
    "daemon_name": "fxcored",
    "node_home": "$HOME/.fxcore",
    "key_algos": [
      "ethsecp256k1"
    ],
    "extra_codecs": [
      "ethermint"
    ],
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "FX",
          "fixed_min_gas_price": 4000000000000,
          "low_gas_price": 4000000000000,
          "average_gas_price": 4200000000000,
          "high_gas_price": 5000000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "FX"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.46"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://fx-json.functionx.io",
          "provider": "Function X"
        }
      ],
      "rest": [
        {
          "address": "https://fx-rest.functionx.io",
          "provider": "Function X"
        }
      ],
      "grpc": [
        {
          "address": "https://fx-grpc.functionx.io",
          "provider": "Function X"
        },
        {
          "address": "https://fx-grpc.portfolio-x.xyz:9090",
          "provider": "Portfolio X"
        }
      ],
      "evm-http-jsonrpc": [
        {
          "address": "https://fx-web3.functionx.io",
          "provider": "Function X"
        }
      ]
    },
    "explorers": [
      {
        "kind": "starscan",
        "url": "https://starscan.io",
        "tx_page": "https://starscan.io/fxcore/tx/${txHash}",
        "account_page": "https://starscan.io/fxcore/address/${accountAddress}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/fx",
        "tx_page": "https://explorer.tcnetwork.io/fx/transaction/${txHash}",
        "account_page": "https://explorer.tcnetwork.io/fx/account/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "galaxy",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://galaxychain.zone/",
    "pretty_name": "Galaxy",
    "chain_id": "galaxy-1",
    "bech32_prefix": "galaxy",
    "daemon_name": "galaxyd",
    "node_home": "$HOME/.galaxy",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uglx",
          "low_gas_price": 0.025,
          "average_gas_price": 0.025,
          "high_gas_price": 0.035
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uglx"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg"
    },
    "apis": {
      "rpc": [],
      "rest": [],
      "grpc": []
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://explorer.postcapitalist.io/Galaxy",
        "tx_page": "https://explorer.postcapitalist.io/Galaxy/tx/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "gateway",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://wormhole.com",
    "pretty_name": "Wormhole Gateway",
    "chain_id": "wormchain",
    "bech32_prefix": "wormhole",
    "daemon_name": "wormchaind",
    "node_home": "$HOME/.wormchaind",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "utest",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0,
          "average_gas_price": 0,
          "high_gas_price": 0
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uworm"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "github.com/wormhole-foundation/cosmos-sdk@v0.45.9-wormhole-2",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "github.com/wormhole-foundation/wasmd@v0.30.0-wormchain-2"
    },
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gateway/images/gateway_logo.png",
        "theme": {
          "primary_color_hex": "#0F0C48"
        }
      },
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gateway/images/gateway_logo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gateway/images/wormhole_logo.svg"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gateway/images/gateway_logo.png"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://tncnt-eu-wormchain-main-01.rpc.p2p.world/",
          "provider": "P2P"
        },
        {
          "address": "https://wormchain-rpc.quickapi.com/",
          "provider": "ChainLayer"
        }
      ],
      "rest": [
        {
          "address": "https://tncnt-eu-wormchain-main-01.rpc.p2p.world/lcd/",
          "provider": "P2P"
        },
        {
          "address": "https://wormchain-lcd.quickapi.com/",
          "provider": "ChainLayer"
        }
      ],
      "grpc": [
        {
          "address": "tncnt-eu-wormchain-main-01-grpc.rpc.p2p.world:80",
          "provider": "P2P"
        }
      ]
    },
    "explorers": [
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/wormhole",
        "tx_page": "https://bigdipper.live/wormhole/transactions/${txHash}",
        "account_page": "https://bigdipper.live/wormhole/accounts/${accountAddress}"
      }
    ],
    "keywords": [
      "bridge"
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "genesisl1",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "GenesisL1",
    "chain_id": "genesis_29-2",
    "bech32_prefix": "genesis",
    "daemon_name": "genesisd",
    "node_home": "$HOME/.genesisd",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "el1",
          "low_gas_price": 51000000000,
          "average_gas_price": 52000000000,
          "high_gas_price": 53000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "el1"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://26657.genesisl1.org",
          "provider": "GenesisL1"
        }
      ],
      "rest": [
        {
          "address": "https://api.genesisl1.org",
          "provider": "GenesisL1"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/genesisL1",
        "tx_page": "https://ping.pub/genesisL1/tx/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://exp.utsa.tech/genesis",
        "tx_page": "https://exp.utsa.tech/genesis/tx/${txHash}"
      },
      {
        "kind": "🔥STAVR🔥",
        "url": "https://explorer.stavr.tech/Genesisl1",
        "tx_page": "https://explorer.stavr.tech/Genesisl1/tx/${txHash}",
        "account_page": "https://explorer.stavr.tech/Genesisl1/accounts/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/genesisl1",
        "tx_page": "https://atomscan.com/genesisl1/transactions/${txHash}",
        "account_page": "https://atomscan.com/genesisl1/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "gitopia",
    "status": "live",
    "website": "https://gitopia.com/",
    "network_type": "mainnet",
    "pretty_name": "Gitopia",
    "chain_id": "gitopia",
    "bech32_prefix": "gitopia",
    "daemon_name": "gitopiad",
    "node_home": "$HOME/.gitopia",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ulore",
          "fixed_min_gas_price": 0.001,
          "low_gas_price": 0.0012,
          "average_gas_price": 0.0016,
          "high_gas_price": 0.0024
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ulore"
        }
      ],
      "lock_duration": {
        "time": "1814400s"
      }
    },
    "codebase": {
      "cosmos_sdk_version": "v0.46.13"
    },
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/gitopia.png"
      }
    ],
    "description": "Gitopia is the next-generation Code Collaboration Platform fuelled by a decentralized network and interactive token economy. It is designed to optimize the open-source software development process through collaboration, transparency, and incentivization.",
    "apis": {
      "rpc": [
        {
          "address": "http://gitopia.rpc.nodersteam.com:20657",
          "provider": "[NODERS]TEAM"
        },
        {
          "address": "https://gitopia-rpc.polkachu.com:443",
          "provider": "polkachu"
        },
        {
          "address": "https://gitopia-rpc.lavenderfive.com",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc.gitopia.nodestake.top:443",
          "provider": "nodestake"
        },
        {
          "address": "https://gitopia-rpc.staketab.org:443",
          "provider": "Staketab"
        },
        {
          "address": "https://gitopia-rpc.ibs.team:443",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://m-gitopia.rpc.utsa.tech",
          "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
        },
        {
          "address": "http://gitopia.rpc.m.stavr.tech:51057",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://rpc-gitopia.nodeist.net",
          "provider": "Nodeist"
        },
        {
          "address": "https://gitopia-rpc.genznodes.dev",
          "provider": "genznodes"
        },
        {
          "address": "https://rpc-gitopia.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://gitopia.rpc.liveraven.net",
          "provider": "LiveRaveN"
        },
        {
          "address": "https://gitopia-rpc.stake-town.com",
          "provider": "StakeTown"
        },
        {
          "address": "https://rpc.gitopia.silentvalidator.com",
          "provider": "silent"
        },
        {
          "address": "https://gitopia-rpc.ramuchi.tech",
          "provider": "ramuchi.tech"
        },
        {
          "address": "https://rpc-gitopia.mzonder.com",
          "provider": "MZONDER"
        },
        {
          "address": "https://gitopia.rpc.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://rpc.gitopia.sgtstake.com",
          "provider": "SGTstake"
        },
        {
          "address": "https://mainnet-gitopia-rpc.konsortech.xyz",
          "provider": "KonsorTech"
        },
        {
          "address": "https://rpc.gitopia.quokkastake.io",
          "provider": "🐹 Quokka Stake"
        },
        {
          "address": "http://gitopia.rpc.tarabukin.work:60557",
          "provider": "tarabukinivan"
        },
        {
          "address": "https://rpc.gitopia.roomit.xyz",
          "provider": "RoomIT"
        },
        {
          "address": "https://gitopia.rpc.moonbridge.team",
          "provider": "Moonbridge"
        },
        {
          "address": "https://gitopia-rpc.stakeangle.com",
          "provider": "StakeAngle"
        },
        {
          "address": "https://gitopia.rpc.m.anode.team",
          "provider": "AlxVoy ⚡ ANODE.TEAM"
        },
        {
          "address": "https://rpc.gitopia.sbgid.com",
          "provider": "kokos"
        },
        {
          "address": "https://gitopia.rpc.stakevillage.net",
          "provider": "Stake Village"
        },
        {
          "address": "https://gitopia-rpc.enigma-validator.com/",
          "provider": "Enigma"
        },
        {
          "address": "https://rpc.gitopia.tcnetwork.io/",
          "provider": "TC Network"
        },
        {
          "address": "https://gitopia.nodejumper.io:443",
          "provider": "NODEJUMPER"
        },
        {
          "address": "https://rpc.gitopia.stakeup.tech/",
          "provider": "StakeUp"
        },
        {
          "address": "https://gitopia-mainnet.rpc.l0vd.com:443",
          "provider": "L0vd.com ❤️"
        }
      ],
      "rest": [
        {
          "address": "http://gitopia.api.nodersteam.com:20017",
          "provider": "[NODERS]TEAM"
        },
        {
          "address": "https://gitopia-api.polkachu.com:443",
          "provider": "polkachu"
        },
        {
          "address": "https://gitopia-api.lavenderfive.com",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://api.gitopia.nodestake.top:443",
          "provider": "nodestake"
        },
        {
          "address": "https://gitopia-rest.staketab.org",
          "provider": "Staketab"
        },
        {
          "address": "https://gitopia-mainnet-lcd.autostake.com:443",
          "provider": "autostake"
        },
        {
          "address": "https://gitopia-api.ibs.team:443",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://m-gitopia.api.utsa.tech",
          "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
        },
        {
          "address": "https://gitopia.api.m.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://api-gitopia.nodeist.net",
          "provider": "Nodeist"
        },
        {
          "address": "https://gitopia-api.genznodes.dev",
          "provider": "genznodes"
        },
        {
          "address": "https://lcd-gitopia.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://gitopia.api.liveraven.net",
          "provider": "LiveRaveN"
        },
        {
          "address": "https://gitopia-api.stake-town.com",
          "provider": "StakeTown"
        },
        {
          "address": "https://api.gitopia.silentvalidator.com",
          "provider": "silent"
        },
        {
          "address": "https://gitopia-api.ramuchi.tech",
          "provider": "ramuchi.tech"
        },
        {
          "address": "https://api-gitopia.mzonder.com",
          "provider": "MZONDER"
        },
        {
          "address": "https://gitopia.api.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://api.gitopia.sgtstake.com/",
          "provider": "SGTstake"
        },
        {
          "address": "https://mainnet-gitopia-api.konsortech.xyz",
          "provider": "KonsorTech"
        },
        {
          "address": "https://api.gitopia.quokkastake.io",
          "provider": "🐹 Quokka Stake"
        },
        {
          "address": "https://api.gitopia.roomit.xyz",
          "provider": "RoomIT"
        },
        {
          "address": "https://gitopia.api.moonbridge.team",
          "provider": "Moonbridge"
        },
        {
          "address": "http://gitopia-rpc.stakeangle.com:41317",
          "provider": "StakeAngle"
        },
        {
          "address": "https://gitopia.api.m.anode.team",
          "provider": "AlxVoy ⚡ ANODE.TEAM"
        },
        {
          "address": "https://api.gitopia.sbgid.com",
          "provider": "kokos"
        },
        {
          "address": "https://gitopia.api.stakevillage.net",
          "provider": "Stake Village"
        },
        {
          "address": "https://gitopia-lcd.enigma-validator.com/",
          "provider": "Enigma"
        },
        {
          "address": "https://rest.gitopia.tcnetwork.io/",
          "provider": "TC Network"
        },
        {
          "address": "https://gitopia.nodejumper.io:1317",
          "provider": "NODEJUMPER"
        },
        {
          "address": "https://api.gitopia.stakeup.tech/",
          "provider": "StakeUp"
        },
        {
          "address": "https://gitopia-mainnet.api.l0vd.com:443",
          "provider": "L0vd.com ❤️"
        }
      ],
      "grpc": [
        {
          "address": "grpc.gitopia.indonode.net:26090",
          "provider": "indonode"
        },
        {
          "address": "gitopia.grpc.nodersteam.com:9201",
          "provider": "[NODERS]TEAM"
        },
        {
          "address": "gitopia-grpc.polkachu.com:11390",
          "provider": "polkachu"
        },
        {
          "address": "services.staketab.com:9410",
          "provider": "Staketab"
        },
        {
          "address": "https://gitopia-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://grpc.gitopia.nodestake.top:443",
          "provider": "nodestake"
        },
        {
          "address": "https://grpc-gitopia.nodeist.net",
          "provider": "Nodeist"
        },
        {
          "address": "http://gitopia.grpc.m.stavr.tech:5123",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "gitopia-grpc.genznodes.dev:33090",
          "provider": "genznodes"
        },
        {
          "address": "https://grpc.gitopia.hexnodes.co:16090",
          "provider": "Hexnodes"
        },
        {
          "address": "https://gitopia.grpc.liveraven.net:443",
          "provider": "LiveRaveN"
        },
        {
          "address": "https://grpc.gitopia.indonode.net:26090",
          "provider": "Indonode"
        },
        {
          "address": "gitopia-grpc.stake-town.com:443",
          "provider": "StakeTown"
        },
        {
          "address": "grpc.gitopia.silentvalidator.com:443",
          "provider": "silent"
        },
        {
          "address": "https://gitopia-grpc.ramuchi.tech:16001",
          "provider": "ramuchi.tech"
        },
        {
          "address": "grpc-gitopia.mzonder.com:443",
          "provider": "MZONDER"
        },
        {
          "address": "gitopia.grpc.kjnodes.com:14190",
          "provider": "kjnodes"
        },
        {
          "address": "grpc.gitopia.roomit.xyz:8443",
          "provider": "RoomIT"
        },
        {
          "address": "https://gitopia.grpc.moonbridge.team",
          "provider": "Moonbridge"
        },
        {
          "address": "http://gitopia-rpc.stakeangle.com:41390",
          "provider": "StakeAngle"
        },
        {
          "address": "https://gitopia.grpc.m.anode.team",
          "provider": "AlxVoy ⚡ ANODE.TEAM"
        },
        {
          "address": "https://grpc.gitopia.sbgid.com",
          "provider": "kokos"
        },
        {
          "address": "mainnet-gitopia-grpc.konsortech.xyz:38090",
          "provider": "KonsorTech"
        },
        {
          "address": "gitopia.grpc.stakevillage.net:14190",
          "provider": "Stake Village"
        },
        {
          "address": "gitopia.nodejumper.io:9090",
          "provider": "NODEJUMPER"
        },
        {
          "address": "grpc.gitopia.stakeup.tech:443",
          "provider": "StakeUp"
        },
        {
          "address": "gitopia-mainnet.grpc.l0vd.com:80",
          "provider": "L0vd.com ❤️"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/gitopia",
        "tx_page": "https://ping.pub/gitopia/tx/${txHash}",
        "account_page": "https://ping.pub/gitopia/account/${accountAddress}"
      },
      {
        "kind": "🔥STAVR🔥",
        "url": "https://explorer.stavr.tech/Gitopia-M",
        "tx_page": "https://explorer.stavr.tech/Gitopia-M/tx/${txHash}",
        "account_page": "https://explorer.stavr.tech/Gitopia-M/account/${accountAddress}"
      },
      {
        "kind": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀",
        "url": "https://exp.utsa.tech/gitopia",
        "tx_page": "https://exp.utsa.tech/gitopia/tx/${txHash}",
        "account_page": "https://exp.utsa.tech/gitopia/account/${accountAddress}"
      },
      {
        "kind": "Nodeist",
        "url": "https://exp.nodeist.net/gitopia",
        "tx_page": "https://exp.nodeist.net/gitopia/tx/${txHash}",
        "account_page": "https://exp.nodeist.net/gitopia/account/${accountAddress}"
      },
      {
        "kind": "Stake-Take",
        "url": "https://explorer.stake-take.com/gitopia",
        "tx_page": "https://explorer.stake-take.com/gitopia/tx/${txHash}",
        "account_page": "https://explorer.stake-take.com/gitopia/account/${accountAddress}"
      },
      {
        "kind": "NODEXPLORER",
        "url": "https://explorer.nodexcapital.com/gitopia",
        "tx_page": "https://explorer.nodexcapital.com/gitopia/tx/${txHash}",
        "account_page": "https://explorer.nodexcapital.com/gitopia/account/${accountAddress}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/gitopia",
        "tx_page": "https://explorer.tcnetwork.io/gitopia/transaction/${txHash}",
        "account_page": "https://explorer.tcnetwork.io/gitopia/account/${accountAddress}"
      },
      {
        "kind": "NodeStake",
        "url": "https://explorer.nodestake.top/gitopia",
        "tx_page": "https://explorer.nodestake.top/gitopia/tx/${txHash}",
        "account_page": "https://explorer.nodestake.top/gitopia/account/${accountAddress}"
      },
      {
        "kind": "RoomIT",
        "url": "https://explorer.tendermint.roomit.xyz/gitopia",
        "tx_page": "https://explorer.tendermint.roomit.xyz/gitopia/transaction/${txHash}",
        "account_page": "https://explorer.tendermint.roomit.xyz/gitopia/account/${accountAddress}"
      },
      {
        "kind": "Moonbridge",
        "url": "https://explorer.moonbridge.team/gitopia",
        "tx_page": "https://explorer.moonbridge.team/gitopia/tx/${txHash}",
        "account_page": "https://explorer.moonbridge.team/gitopia/account/${accountAddress}"
      },
      {
        "kind": "KonsorTech",
        "url": "https://explorer.konsortech.xyz/gitopia",
        "tx_page": "https://explorer.konsortech.xyz/gitopia/tx/${txHash}",
        "account_page": "https://explorer.konsortech.xyz/gitopia/account/${accountAddress}"
      },
      {
        "kind": "Stake Village",
        "url": "https://exp.stakevillage.net/gitopia",
        "tx_page": "https://exp.stakevillage.net/gitopia/tx/${txHash}",
        "account_page": "https://exp.stakevillage.net/gitopia/account/${accountAddress}"
      },
      {
        "kind": "AlxVoy ⚡ ANODE.TEAM",
        "url": "https://main.anode.team/gitopia",
        "tx_page": "https://main.anode.team/gitopia/tx/${txHash}",
        "account_page": "https://main.anode.team/gitopia/account/${accountAddress}"
      },
      {
        "kind": "L0vd.com ❤️",
        "url": "https://chain-services.l0vd.com/mainnets/gitopia",
        "tx_page": "https://chain-services.l0vd.com/mainnets/gitopia/tx/${txHash}",
        "account_page": "https://chain-services.l0vd.com/mainnets/gitopia/account/${accountAddress}"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/gitopia.png"
    }
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "gravitybridge",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.gravitybridge.net/",
    "pretty_name": "Gravity Bridge",
    "chain_id": "gravity-bridge-3",
    "bech32_prefix": "gravity",
    "daemon_name": "gravity",
    "node_home": "$HOME/.gravity",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ugraviton",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0,
          "average_gas_price": 0,
          "high_gas_price": 0.035
        },
        {
          "denom": "gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "low_gas_price": 0.0002,
          "average_gas_price": 0.0005,
          "high_gas_price": 0.0008
        },
        {
          "denom": "gravity0xdAC17F958D2ee523a2206206994597C13D831ec7",
          "low_gas_price": 0.0002,
          "average_gas_price": 0.0005,
          "high_gas_price": 0.0008
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ugraviton"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg"
    },
    "description": "An open, decentralized bridge that unlocks the power of interoperability & liquidity between blockchain ecosystems.",
    "apis": {
      "rpc": [
        {
          "address": "https://gravitychain.io:26657",
          "provider": "althea"
        },
        {
          "address": "http://gravity-bridge-1-08.nodes.amhost.net:26657",
          "provider": "amhost"
        },
        {
          "address": "https://gravity-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc-gravitybridge-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://gravitybridge-rpc.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc.gravity.bh.rocks/",
          "provider": "BlockHunters 🎯"
        },
        {
          "address": "https://gravity-rpc.ibs.team",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://gravity-rpc.ramuchi.tech",
          "provider": "ramuchi.tech"
        },
        {
          "address": "https://rpc-gravity-bridge-01.stakeflow.io",
          "provider": "Stakeflow"
        },
        {
          "address": "https://gravity-rpc.staketab.org:443",
          "provider": "Staketab"
        },
        {
          "address": "https://gravity-rpc.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://rpc.g-bridge.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ],
      "rest": [
        {
          "address": "https://gravitychain.io:1317",
          "provider": "althea"
        },
        {
          "address": "https://api-gravitybridge-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://gravity-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://gravitybridge-api.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://api.gravity.bh.rocks/",
          "provider": "BlockHunters 🎯"
        },
        {
          "address": "https://gravity-api.ibs.team",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://gravity-api.ramuchi.tech",
          "provider": "ramuchi.tech"
        },
        {
          "address": "https://api-gravity-bridge-01.stakeflow.io",
          "provider": "Stakeflow"
        },
        {
          "address": "https://gravity-rest.staketab.org",
          "provider": "Staketab"
        },
        {
          "address": "https://gravity-api.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://lcd.g-bridge.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ],
      "grpc": [
        {
          "address": "gravity-bridge-1-08.nodes.amhost.net:9090",
          "provider": "amhost"
        },
        {
          "address": "grpc-gravitybridge-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "gravity-grpc.polkachu.com:14290",
          "provider": "Polkachu"
        },
        {
          "address": "gravitybridge-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://gravity-grpc.ramuchi.tech:10090",
          "provider": "ramuchi.tech"
        },
        {
          "address": "grpc-gravity-bridge-01.stakeflow.io:1302",
          "provider": "Stakeflow"
        },
        {
          "address": "services.staketab.com:9017",
          "provider": "Staketab"
        },
        {
          "address": "gravity-grpc.w3coins.io:14290",
          "provider": "w3coins"
        },
        {
          "address": "https://grpc.g-bridge.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking",
        "url": "https://app.ezstaking.io/gravitybridge",
        "tx_page": "https://app.ezstaking.io/gravitybridge/txs/${txHash}",
        "account_page": "https://app.ezstaking.io/gravitybridge/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/gravity-bridge",
        "tx_page": "https://www.mintscan.io/gravity-bridge/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/gravity-bridge/accounts/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/gravity-bridge",
        "tx_page": "https://ping.pub/gravity-bridge/tx/${txHash}"
      },
      {
        "kind": "explorers.guru",
        "url": "https://gravity.explorers.guru",
        "tx_page": "https://gravity.explorers.guru/transaction/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/gravity-bridge",
        "tx_page": "https://atomscan.com/gravity-bridge/transactions/${txHash}",
        "account_page": "https://atomscan.com/gravity-bridge/accounts/${accountAddress}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/gravitybridge",
        "tx_page": "https://explorer.tcnetwork.io/gravitybridge/transaction/${txHash}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/gravity-bridge",
        "account_page": "https://stakeflow.io/gravity-bridge/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "haqq",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://haqq.network/",
    "pretty_name": "Haqq Network",
    "chain_id": "haqq_11235-1",
    "bech32_prefix": "haqq",
    "node_home": "$HOME/.haqqd",
    "daemon_name": "haqqd",
    "key_algos": [
      "ethsecp256k1"
    ],
    "extra_codecs": [
      "ethermint"
    ],
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "aISLM",
          "fixed_min_gas_price": 250000000,
          "low_gas_price": 20000000000,
          "average_gas_price": 25000000000,
          "high_gas_price": 40000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "aISLM"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "v0.47.5-evmos"
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/haqq.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/haqq.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.tm.haqq.network",
          "provider": "Haqq"
        },
        {
          "address": "https://m-s1-tm.haqq.sh",
          "provider": "kioqq"
        },
        {
          "address": "http://haqq.rpc.nodersteam.com:19657",
          "provider": "[NODERS]TEAM"
        },
        {
          "address": "https://rpc.haqq.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://haqq-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://haqq-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc-haqq.sr20de.xyz:443",
          "provider": "Sr20de"
        }
      ],
      "rest": [
        {
          "address": "https://rest.cosmos.haqq.network",
          "provider": "Haqq"
        },
        {
          "address": "https://m-s1-sdk.haqq.sh",
          "provider": "kioqq"
        },
        {
          "address": "http://haqq.api.nodersteam.com:19017",
          "provider": "[NODERS]TEAM"
        },
        {
          "address": "https://api.haqq.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://haqq-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://haqq-api.lavenderfive.com",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://mainnet-haqq-api.konsortech.xyz",
          "provider": "KonsorTech"
        },
        {
          "address": "https://api-haqq.sr20de.xyz",
          "provider": "Sr20de"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc.cosmos.haqq.network",
          "provider": "Haqq"
        },
        {
          "address": "grpc://m-s1-grpc.haqq.sh:1337",
          "provider": "kioqq"
        },
        {
          "address": "haqq.grpc.nodersteam.com:9191",
          "provider": "[NODERS]TEAM"
        },
        {
          "address": "https://grpc.haqq.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "haqq-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://haqq-grpc.lavenderfive.com",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "mainnet-haqq-grpc.konsortech.xyz:11090",
          "provider": "KonsorTech"
        },
        {
          "address": "https://grpc-haqq.sr20de.xyz",
          "provider": "Sr20de"
        }
      ],
      "evm-http-jsonrpc": [
        {
          "address": "https://rpc.eth.haqq.network",
          "provider": "Haqq"
        },
        {
          "address": "https://m-s1-evm-rpc.haqq.sh",
          "provider": "kioqq"
        },
        {
          "address": "https://jsonrpc.haqq.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://haqq-evm.publicnode.com",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "address": "https://haqq-jsonrpc.lavenderfive.com",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://mainnet-haqq-evm.konsortech.xyz",
          "provider": "KonsorTech"
        },
        {
          "address": "https://evm-haqq.sr20de.xyz",
          "provider": "Sr20de"
        }
      ]
    },
    "explorers": [
      {
        "kind": "blockscout",
        "url": "https://explorer.haqq.network",
        "tx_page": "https://explorer.haqq.network/tx/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/haqq",
        "tx_page": "https://ping.pub/haqq/tx/${txHash}"
      },
      {
        "kind": "explorers.guru",
        "url": "https://haqq.explorers.guru",
        "tx_page": "https://haqq.explorers.guru/transaction/${txHash}"
      },
      {
        "kind": "NodeStake Explorer",
        "url": "https://explorer.nodestake.top/haqq",
        "tx_page": "https://explorer.nodestake.top/haqq/tx/${txHash}"
      },
      {
        "kind": "KonsorTech Explorer",
        "url": "https://explorer.konsortech.xyz/haqq",
        "tx_page": "https://explorer.konsortech.xyz/haqq/tx/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/haqq.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/haqq.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "highbury",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.fury.black/",
    "pretty_name": "Highbury",
    "chain_id": "highbury_710-1",
    "bech32_prefix": "fury",
    "daemon_name": "fury",
    "node_home": "$HOME/.fury",
    "slip44": 459,
    "alternative_slip44s": [
      710
    ],
    "fees": {
      "fee_tokens": [
        {
          "denom": "ufury",
          "low_gas_price": 0.05,
          "average_gas_price": 0.1,
          "high_gas_price": 0.25
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ufury"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/fury.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/fury.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://gridiron.furya.io",
          "provider": "fanfury"
        }
      ],
      "rest": [
        {
          "address": "https://api-mainnet.furya.io/",
          "provider": "fanfury"
        }
      ],
      "grpc": [
        {
          "address": "api-mainnet.furya.io:9090",
          "provider": "fanfury"
        }
      ],
      "evm-http-jsonrpc": [
        {
          "address": "https://rest.furya.io/",
          "provider": "fanfury"
        }
      ]
    },
    "explorers": [
      {
        "kind": "pingpub",
        "url": "https://explorer.furya.wtf/",
        "tx_page": "https://www.explorer.furya.wtf//txs/${txHash}",
        "account_page": "https://explorer.furya.wtf//account/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/fury.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/fury.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "humans",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://humans.ai/",
    "pretty_name": "Humans.ai",
    "chain_id": "humans_1089-1",
    "bech32_prefix": "human",
    "node_home": "$HOME/.humansd",
    "daemon_name": "humansd",
    "key_algos": [
      "ethsecp256k1"
    ],
    "extra_codecs": [
      "ethermint"
    ],
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "aheart",
          "fixed_min_gas_price": 250000000,
          "low_gas_price": 80000000000,
          "average_gas_price": 100000000000,
          "high_gas_price": 160000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "aheart"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.46.11"
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/humans_small_light.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/humans_small_light.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.humans.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://humans.rpc.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "http://humans.rpc.nodersteam.com:22657",
          "provider": "[NODERS]TEAM"
        },
        {
          "address": "https://rpc-humans.nodeist.net",
          "provider": "Nodeist"
        },
        {
          "address": "https://humans-mainnet-rpc.itrocket.net",
          "provider": "itrocket"
        },
        {
          "address": "https://humans-rpc.staketab.org:443",
          "provider": "Staketab"
        },
        {
          "address": "https://rpc-humansai.thenop.io:443",
          "provider": "TheNOP.io"
        },
        {
          "address": "https://humans-rpc.stakeangle.com/",
          "provider": "StakeAngle"
        },
        {
          "address": "https://rpc.humans.stakepool.dev.br",
          "provider": "StakePool"
        },
        {
          "address": "https://humans-rpc.anyvalid.com:26627",
          "provider": "AnyValid"
        },
        {
          "address": "https://mainnet-humans-rpc.konsortech.xyz",
          "provider": "KonsorTech"
        },
        {
          "address": "https://rpc.humans-mainnet.stake-take.com/",
          "provider": "Stake-Take"
        }
      ],
      "rest": [
        {
          "address": "https://api.humans.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://humans.api.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "http://humans.api.nodersteam.com:22017",
          "provider": "[NODERS]TEAM"
        },
        {
          "address": "https://api-humans.nodeist.net",
          "provider": "Nodeist"
        },
        {
          "address": "https://humans-mainnet-api.itrocket.net",
          "provider": "itrocket"
        },
        {
          "address": "https://humans-rest.staketab.org",
          "provider": "Staketab"
        },
        {
          "address": "https://api-humansai.thenop.io:443",
          "provider": "TheNOP.io"
        },
        {
          "address": "http://humans-rpc.stakeangle.com:41417",
          "provider": "StakeAngle"
        },
        {
          "address": "https://rest.humans.stakepool.dev.br",
          "provider": "StakePool"
        },
        {
          "address": "https://mainnet-humans-api.konsortech.xyz",
          "provider": "KonsorTech"
        },
        {
          "address": "https://api.humans-mainnet.stake-take.com/",
          "provider": "Stake-Take"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc.humans.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "https://humans.grpc.kjnodes.com/",
          "provider": "kjnodes"
        },
        {
          "address": "https://grpc-humans.nodeist.net/",
          "provider": "Nodeist"
        },
        {
          "address": "humans-mainnet-grpc.itrocket.net:17090",
          "provider": "itrocket"
        },
        {
          "address": "http://humans-rpc.stakeangle.com:41490/",
          "provider": "Staketab"
        },
        {
          "address": "humans.grpc.nodersteam.com:9221",
          "provider": "[NODERS]TEAM"
        },
        {
          "address": "https://grpc-humans.cosmos-spaces.cloud:1190",
          "provider": "StakePool"
        }
      ],
      "evm-http-jsonrpc": [
        {
          "address": "https://jsonrpc.humans.nodestake.top/",
          "provider": "NodeStake"
        },
        {
          "address": "https://humans-mainnet-evm.itrocket.net",
          "provider": "itrocket"
        },
        {
          "address": "https://humans-evm-rpc.staketab.org:443",
          "provider": "Staketab"
        },
        {
          "address": "https://evm.humans.stakepool.dev.br",
          "provider": "Stakepool"
        },
        {
          "address": "https://mainnet-humans-evm.konsortech.xyz",
          "provider": "KonsorTech"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://mintscan.io/humans",
        "tx_page": "https://www.mintscan.io/humans/tx/${txHash}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/humans",
        "tx_page": "https://bigdipper.live/humans/transactions/${txHash}",
        "account_page": "https://bigdipper.live/humans/accounts/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/humans",
        "tx_page": "https://ping.pub/humans/tx/${txHash}"
      },
      {
        "kind": "explorers.guru",
        "url": "https://humans.explorers.guru",
        "tx_page": "https://humans.explorers.guru/transaction/${txHash}"
      },
      {
        "kind": "exploreme",
        "url": "https://humansai.exploreme.pro/",
        "tx_page": "https://humans.exploreme.pro/transaction/${txHash}"
      },
      {
        "kind": "itrocket",
        "url": "https://mainnet.itrocket.net/humans/staking",
        "tx_page": "https://mainnet.itrocket.net/humans/tx/${txHash}",
        "account_page": "https://mainnet.itrocket.net/humans/account/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/humans_small_light.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/humans_small_light.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "idep",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.idep.network/",
    "pretty_name": "IDEP",
    "chain_id": "Antora",
    "bech32_prefix": "idep",
    "daemon_name": "idep",
    "node_home": "$HOME/.ion",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "idep",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.svg"
    },
    "apis": {
      "rpc": [],
      "rest": [],
      "grpc": [
        {
          "address": "idep-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking",
        "url": "https://app.ezstaking.io/idep",
        "tx_page": "https://app.ezstaking.io/idep/txs/${txHash}",
        "account_page": "https://app.ezstaking.io/idep/account/${accountAddress}"
      },
      {
        "kind": "chadscan",
        "url": "https://chadscan.com",
        "tx_page": "https://chadscan.com/transactions/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/idep",
        "tx_page": "https://atomscan.com/idep/transactions/${txHash}",
        "account_page": "https://atomscan.com/idep/accounts/${accountAddress}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/idep",
        "tx_page": "https://explorer.tcnetwork.io/idep/transaction/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "impacthub",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.ixo.world/",
    "pretty_name": "ixo",
    "chain_id": "ixo-5",
    "bech32_prefix": "ixo",
    "daemon_name": "ixod",
    "node_home": "$HOME/.ixod",
    "key_algos": [
      "secp256k1",
      "ed25519"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uixo",
          "fixed_min_gas_price": 0.025,
          "low_gas_price": 0.025,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uixo"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://proxies.sifchain.finance/api/impacthub-3/rpc",
          "provider": "sifchain"
        },
        {
          "address": "https://impacthub.ixo.world/rpc/",
          "provider": "ixoworld"
        },
        {
          "address": "https://rpc-ixo-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://impacthub-rpc.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://ixo-rpc.ibs.team",
          "provider": "Inter Blockchain Services"
        }
      ],
      "rest": [
        {
          "address": "https://proxies.sifchain.finance/api/impacthub-3/rest",
          "provider": "sifchain"
        },
        {
          "address": "https://impacthub.ixo.world/rest/",
          "provider": "ixoworld"
        },
        {
          "address": "https://api-ixo-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://impacthub-api.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://ixo-api.ibs.team",
          "provider": "Inter Blockchain Services"
        }
      ],
      "grpc": [
        {
          "address": "grpc-ixo-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "impacthub-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking",
        "url": "https://app.ezstaking.io/ixo",
        "tx_page": "https://app.ezstaking.io/ixo/txs/${txHash}",
        "account_page": "https://app.ezstaking.io/ixo/account/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://blockscan.ixo.world",
        "tx_page": "https://blockscan.ixo.world/transactions/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/ixo",
        "tx_page": "https://ping.pub/ixo/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/ixo",
        "tx_page": "https://atomscan.com/ixo/transactions/${txHash}",
        "account_page": "https://atomscan.com/ixo/accounts/${accountAddress}"
      },
      {
        "kind": "Mintscan",
        "url": "https://www.mintscan.io/ixo",
        "tx_page": "https://www.mintscan.io/ixo/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/ixo/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "imversed",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://imversed.network/",
    "pretty_name": "Imversed",
    "chain_id": "imversed_5555555-1",
    "bech32_prefix": "imv",
    "daemon_name": "imversed",
    "node_home": "$HOME/.imversed",
    "key_algos": [
      "ethsecp256k1"
    ],
    "extra_codecs": [
      "ethermint"
    ],
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "aimv",
          "fixed_min_gas_price": 250000000,
          "low_gas_price": 20000000000,
          "average_gas_price": 25000000000,
          "high_gas_price": 40000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "aimv"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.svg"
    },
    "apis": {
      "rpc": [],
      "rest": [],
      "grpc": [
        {
          "address": "grpc.imversed.network:443",
          "provider": "imversed"
        }
      ],
      "evm-http-jsonrpc": [
        {
          "address": "https://jsonrpc.imversed.network:443",
          "provider": "imversed"
        }
      ]
    },
    "explorers": [
      {
        "kind": "blockscout",
        "url": "https://txe.imversed.network/",
        "tx_page": "https://txe.imversed.network/tx/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.svg"
      }
    ]
  },
  {
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
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg"
    },
    "description": "Injective’s mission is to create a truly free and inclusive financial system through decentralization.",
    "apis": {
      "rpc": [
        {
          "address": "https://injective-rpc.quickapi.com:443",
          "provider": "Chainlayer"
        },
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
          "provider": "AutoStake.com"
        },
        {
          "address": "https://rpc.injective.posthuman.digital:443",
          "provider": "POSTHUMAN ꝏ DVS"
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
          "address": "https://injective-rpc.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://injective-rpc.highstakes.ch:26657/",
          "provider": "High Stakes 🇨🇭"
        }
      ],
      "rest": [
        {
          "address": "https://injective-lcd.quickapi.com:443",
          "provider": "Chainlayer"
        },
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
          "address": "https://rest.injective.posthuman.digital:443",
          "provider": "POSTHUMAN ꝏ DVS"
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
          "address": "https://injective-api.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://injective-api.highstakes.ch:1317/",
          "provider": "High Stakes 🇨🇭"
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
          "provider": "AutoStake.com"
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
        }
      ]
    },
    "explorers": [
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
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "irisnet",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "IRISnet",
    "chain_id": "irishub-1",
    "bech32_prefix": "iaa",
    "daemon_name": "iris",
    "node_home": "$HOME/.iris",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uiris",
          "low_gas_price": 0.2,
          "average_gas_price": 0.3,
          "high_gas_price": 0.4
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uiris"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-irisnet-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://rpc-irisnet-01.stakeflow.io",
          "provider": "Stakeflow"
        },
        {
          "address": "https://irisnet-rpc.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://iris-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://iris-rpc.highstakes.ch:26657/",
          "provider": "High Stakes 🇨🇭"
        },
        {
          "address": "https://iris-mainnet.rpc.l0vd.com:443",
          "provider": "L0vd.com ❤️"
        },
        {
          "address": "https://mainnet-iris-rpc.konsortech.xyz",
          "provider": "KonsorTech"
        }
      ],
      "rest": [
        {
          "address": "https://api-irisnet-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://api-irisnet-01.stakeflow.io",
          "provider": "Stakeflow"
        },
        {
          "address": "https://irisnet-api.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://iris-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://iris-api.highstakes.ch:1317/",
          "provider": "High Stakes 🇨🇭"
        },
        {
          "address": "https://iris-mainnet.api.l0vd.com:443",
          "provider": "L0vd.com ❤️"
        },
        {
          "address": "https://mainnet-iris-api.konsortech.xyz",
          "provider": "KonsorTech"
        }
      ],
      "grpc": [
        {
          "address": "grpc-irisnet-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "grpc-irisnet-01.stakeflow.io:1902",
          "provider": "Stakeflow"
        },
        {
          "address": "irisnet-grpc.w3coins.io:22690",
          "provider": "w3coins"
        },
        {
          "address": "iris-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "iris.grpc.kjnodes.com:443",
          "provider": "kjnodes"
        },
        {
          "address": "https://grpc-irisnet.nodeist.net",
          "provider": "Nodeist"
        },
        {
          "address": "iris-mainnet.grpc.l0vd.com:80",
          "provider": "L0vd.com ❤️"
        },
        {
          "address": "mainnet-iris.konsortech.xyz:30090",
          "provider": "KonsorTech"
        }
      ],
      "evm-http-jsonrpc": [
        {
          "address": "https://iris-evm.publicnode.com",
          "provider": "Allnodes.com ⚡️ Nodes & Staking"
        },
        {
          "address": "https://mainnet-iris-evm.konsortech.xyz",
          "provider": "KonsorTech"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking",
        "url": "https://app.ezstaking.io/irisnet",
        "tx_page": "https://app.ezstaking.io/irisnet/txs/${txHash}",
        "account_page": "https://app.ezstaking.io/irisnet/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/iris",
        "tx_page": "https://www.mintscan.io/iris/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/iris/accounts/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/iris-network",
        "tx_page": "https://ping.pub/iris-network/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/iris-network",
        "tx_page": "https://atomscan.com/iris-network/transactions/${txHash}",
        "account_page": "https://atomscan.com/iris-network/accounts/${accountAddress}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/irisnet",
        "account_page": "https://stakeflow.io/irisnet/accounts/${accountAddress}"
      },
      {
        "kind": "Nodeist Explorer",
        "url": "https://exp.nodeist.net/iris",
        "tx_page": "https://exp.nodeist.net/iris/tx/${txHash}"
      },
      {
        "kind": "L0vd.com ❤️",
        "url": "https://explorers.l0vd.com/iris-mainnet",
        "tx_page": "https://explorers.l0vd.com/iris-mainnet/tx/${txHash}"
      },
      {
        "kind": "KonsorTech",
        "url": "https://explorer.konsortech.xyz/iris",
        "tx_page": "https://explorer.konsortech.xyz/iris/tx/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "jackal",
    "chain_id": "jackal-1",
    "website": "https://jackalprotocol.com",
    "pretty_name": "Jackal",
    "status": "live",
    "network_type": "mainnet",
    "bech32_prefix": "jkl",
    "daemon_name": "canined",
    "node_home": "$HOME/.canine",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ujkl",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.002,
          "average_gas_price": 0.002,
          "high_gas_price": 0.02
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ujkl"
        }
      ]
    },
    "codebase": {
      "cosmwasm_enabled": true
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg"
    },
    "apis": {
      "wss": [
        {
          "address": "wss://jackal-rpc.agoranodes.com",
          "provider": "AgoraNodes"
        }
      ],
      "rpc": [
        {
          "address": "https://rpc.jackalprotocol.com",
          "provider": "Jackal Labs"
        },
        {
          "address": "https://jackal-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "http://jkl.rpc.m.stavr.tech:11127",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://jackal.rpc.bccnodes.com",
          "provider": "BccNodes"
        },
        {
          "address": "https://rpc.jackal.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://rpc-jackal.nodeist.net",
          "provider": "Nodeist"
        },
        {
          "address": "https://jackal-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://m-jackal.rpc.utsa.tech",
          "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
        },
        {
          "address": "https://rpc-jackal.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://jackal-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "http://jackal.rpc.nodersteam.com:31657",
          "provider": "[NODERS]TEAM"
        },
        {
          "address": "https://jackal.rpc.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://jackal.rpc.silknodes.io",
          "provider": "Silk Nodes"
        },
        {
          "address": "https://jackal.rpc.skynodejs.net",
          "provider": "skynodejs"
        }
      ],
      "rest": [
        {
          "address": "https://api.jackalprotocol.com",
          "provider": "Jackal Labs"
        },
        {
          "address": "https://jackal-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://jkl.api.m.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://api.jackal.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "http://jackal.api.nodersteam.com:2917",
          "provider": "[NODERS]TEAM"
        },
        {
          "address": "https://api-jackal.nodeist.net",
          "provider": "Nodeist"
        },
        {
          "address": "https://jackal-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://m-jackal.api.utsa.tech",
          "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
        },
        {
          "address": "https://jackal-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://lcd-jackal.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://jackal.api.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://jackal.api.silknodes.io",
          "provider": "Silk Nodes"
        },
        {
          "address": "https://jackal.api.skynodejs.net",
          "provider": "skynodejs"
        }
      ],
      "grpc": [
        {
          "address": "grpc.jackalprotocol.com:443",
          "provider": "Jackal Labs"
        },
        {
          "address": "jackal.grpc.bccnodes.com:9490",
          "provider": "BccNodes"
        },
        {
          "address": "jackal.grpc.nodersteam.com:9990",
          "provider": "[NODERS]TEAM"
        },
        {
          "address": "jackal-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "grpc.jackal.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "jackal-grpc.polkachu.com:17590",
          "provider": "Polkachu"
        },
        {
          "address": "http://jkl.grpc.m.stavr.tech:5013",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "jackal-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "jackal.grpc.kjnodes.com:13790",
          "provider": "kjnodes"
        },
        {
          "address": "https://jackal.grpc.skynodejs.net",
          "provider": "skynodejs"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/jackal",
        "tx_page": "https://ping.pub/jackal/tx/${txHash}"
      },
      {
        "kind": "NodeStake",
        "url": "https://explorer.nodestake.top/jackal",
        "tx_page": "https://explorer.nodestake.top/jackal/tx/${txHash}"
      },
      {
        "kind": "BccNodes",
        "url": "https://explorer.bccnodes.com/jackal",
        "tx_page": "https://explorer.bccnodes.com/jackal/tx/${txHash}"
      },
      {
        "kind": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀",
        "url": "https://exp.utsa.tech/jackal",
        "tx_page": "https://exp.utsa.tech/jackal/tx/${txHash}"
      },
      {
        "kind": "🔥STAVR🔥",
        "url": "https://explorer.stavr.tech/jackal",
        "tx_page": "https://explorer.stavr.tech/jackal/tx/${txHash}"
      },
      {
        "kind": "Nodeist Explorer",
        "url": "https://exp.nodeist.net/jackal",
        "tx_page": "https://exp.nodeist.net/jackal/tx/${txHash}"
      },
      {
        "kind": "Big Dipper",
        "url": "https://bigdipper.live/jackal",
        "tx_page": "https://bigdipper.live/jackal/transactions/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "juno",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.junonetwork.io/",
    "pretty_name": "Juno",
    "chain_id": "juno-1",
    "bech32_prefix": "juno",
    "daemon_name": "junod",
    "node_home": "$HOME/.juno",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ujuno",
          "fixed_min_gas_price": 0.075,
          "low_gas_price": 0.075,
          "average_gas_price": 0.1,
          "high_gas_price": 0.125
        },
        {
          "denom": "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
          "fixed_min_gas_price": 0.003,
          "low_gas_price": 0.003,
          "average_gas_price": 0.0035,
          "high_gas_price": 0.004
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ujuno"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.47.5",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "0.45.0"
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg"
    },
    "description": "Juno is a completely community owned and operated smart contract platform.",
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-juno.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://rpc-juno.goldenratiostaking.net",
          "provider": "Golden Ratio Staking"
        },
        {
          "address": "https://rpc-juno.itastakers.com",
          "provider": "itastakers"
        },
        {
          "address": "http://juno.rpc.m.stavr.tech:1067",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://rpc-juno.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://juno-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://juno-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc-juno.pupmos.network",
          "provider": "PUPMØS"
        },
        {
          "address": "https://rpc-juno.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://rpc-juno-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://rpc.juno.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://juno-rpc.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://juno-rpc.icycro.org",
          "provider": "IcyCRO 🧊"
        },
        {
          "address": "https://rpc.juno.bh.rocks",
          "provider": "BlockHunters 🎯"
        },
        {
          "address": "https://juno.kingnodes.com",
          "provider": "kingnodes 👑"
        },
        {
          "address": "https://juno-rpc.reece.sh",
          "provider": "Reecepbcups"
        },
        {
          "address": "https://juno-rpc.stakeandrelax.net",
          "provider": "Stake&Relax Validator 🦥"
        },
        {
          "address": "https://rpc-juno.architectnodes.com",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://rpc-juno-01.stakeflow.io",
          "provider": "Stakeflow"
        },
        {
          "address": "https://rpc-juno.validavia.me",
          "provider": "Validavia"
        },
        {
          "address": "https://juno-rpc.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://juno-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://juno-rpc.stake-town.com",
          "provider": "StakeTown"
        },
        {
          "address": "https://rpc-juno.mainnet.validatrium.club:443",
          "provider": "Validatrium"
        },
        {
          "address": "https://juno-rpc.stakeandrelax.net",
          "provider": "Stake&Relax 🦥"
        },
        {
          "address": "https://rpc.juno.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ],
      "rest": [
        {
          "address": "https://lcd-juno.itastakers.com",
          "provider": "itastakers"
        },
        {
          "address": "https://rest-juno.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://juno-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://juno.api.m.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://api-juno.pupmos.network",
          "provider": "PUPMØS"
        },
        {
          "address": "https://api-juno-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://api.juno.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://juno-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://api-juno.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://juno-api.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://api.juno.bh.rocks",
          "provider": "BlockHunters 🎯"
        },
        {
          "address": "https://juno.kingnodes.com",
          "provider": "kingnodes 👑"
        },
        {
          "address": "https://juno-api.reece.sh",
          "provider": "Reecepbcups"
        },
        {
          "address": "https://juno-api.stakeandrelax.net",
          "provider": "Stake&Relax Validator 🦥"
        },
        {
          "address": "https://rest-juno.architectnodes.com",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://rest-juno.goldenratiostaking.net",
          "provider": "Golden Ratio Staking"
        },
        {
          "address": "https://api-juno-01.stakeflow.io",
          "provider": "Stakeflow"
        },
        {
          "address": "https://lcd-juno.validavia.me",
          "provider": "Validavia"
        },
        {
          "address": "https://juno-api.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://juno-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://juno-api.stake-town.com",
          "provider": "StakeTown"
        },
        {
          "address": "https://lcd-juno.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://juno-api.stakeandrelax.net",
          "provider": "Stake&Relax 🦥"
        },
        {
          "address": "https://lcd.juno.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ],
      "grpc": [
        {
          "address": "grpc-juno-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "juno-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "juno-grpc.polkachu.com:12690",
          "provider": "Polkachu"
        },
        {
          "address": "http://juno.grpc.m.stavr.tech:504",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "grpc-juno.kingnodes.com:443",
          "provider": "kingnodes 👑"
        },
        {
          "address": "grpc-juno.cosmos-spaces.cloud:4830",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "http://juno-grpc.stakeandrelax.net:12690",
          "provider": "Stake&Relax Validator 🦥"
        },
        {
          "address": "grpc-juno.architectnodes.com:1443",
          "provider": "Architect Nodes"
        },
        {
          "address": "juno-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "http://167.235.211.168:9091",
          "provider": "CommunityStaking"
        },
        {
          "address": "grpc-juno-01.stakeflow.io:2302",
          "provider": "Stakeflow"
        },
        {
          "address": "juno-grpc.w3coins.io:12690",
          "provider": "w3coins"
        },
        {
          "address": "juno-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "juno-grpc.stake-town.com:443",
          "provider": "StakeTown"
        },
        {
          "address": "138.201.21.121:24990",
          "provider": "Validatrium"
        },
        {
          "address": "juno-grpc.stakeandrelax.net:12690",
          "provider": "Stake&Relax 🦥"
        },
        {
          "address": "https://grpc.juno.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking",
        "url": "https://app.ezstaking.io/juno",
        "tx_page": "https://app.ezstaking.io/juno/txs/${txHash}",
        "account_page": "https://app.ezstaking.io/juno/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/juno",
        "tx_page": "https://ping.pub/juno/tx/${txHash}"
      },
      {
        "kind": "explorers.guru",
        "url": "https://juno.explorers.guru",
        "tx_page": "https://juno.explorers.guru/transaction/${txHash}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/juno",
        "tx_page": "https://www.mintscan.io/juno/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/juno/accounts/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/juno",
        "tx_page": "https://atomscan.com/juno/transactions/${txHash}",
        "account_page": "https://atomscan.com/juno/accounts/${accountAddress}"
      },
      {
        "kind": "🔥STAVR🔥",
        "url": "https://explorer.stavr.tech/juno",
        "tx_page": "https://explorer.stavr.tech/juno/transactions/${txHash}",
        "account_page": "https://explorer.stavr.tech/juno/accounts/${accountAddress}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/juno",
        "tx_page": "https://explorer.tcnetwork.io/juno/transaction/${txHash}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/juno",
        "account_page": "https://stakeflow.io/juno/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "kava",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.kava.io/",
    "pretty_name": "Kava",
    "chain_id": "kava_2222-10",
    "bech32_prefix": "kava",
    "daemon_name": "kava",
    "node_home": "$HOME/.kava",
    "slip44": 459,
    "alternative_slip44s": [
      118
    ],
    "fees": {
      "fee_tokens": [
        {
          "denom": "ukava",
          "low_gas_price": 0.05,
          "average_gas_price": 0.1,
          "high_gas_price": 0.25
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ukava"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg"
    },
    "description": "Kava is a decentralized blockchain that combines the speed and interoperability of Cosmos with the developer power of Ethereum.",
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.data.kava.io",
          "provider": "kava"
        },
        {
          "address": "https://kava-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc-kava-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://kava-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://kava-rpc.ibs.team",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://rpc-kava-01.stakeflow.io",
          "provider": "Stakeflow"
        },
        {
          "address": "https://kava-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ],
      "rest": [
        {
          "address": "https://api.data.kava.io/",
          "provider": "kava"
        },
        {
          "address": "https://api-kava-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://kava-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://kava-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://kava-api.ibs.team",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://api-kava-01.stakeflow.io",
          "provider": "Stakeflow"
        },
        {
          "address": "https://kava-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ],
      "grpc": [
        {
          "address": "grpc.data.kava.io:443",
          "provider": "kava"
        },
        {
          "address": "grpc-kava-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "kava-grpc.polkachu.com:13990",
          "provider": "Polkachu"
        },
        {
          "address": "kava-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "grpc-kava-01.stakeflow.io:1202",
          "provider": "Stakeflow"
        },
        {
          "address": "kava-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ],
      "evm-http-jsonrpc": [
        {
          "address": "https://evm.kava.io/",
          "provider": "kava"
        },
        {
          "address": "https://kava-evm.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://kava.api.onfinality.io/public",
          "provider": "OnFinality"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/kava",
        "tx_page": "https://www.mintscan.io/kava/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/kava/accounts/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/kava",
        "tx_page": "https://ping.pub/kava/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/kava",
        "tx_page": "https://atomscan.com/kava/transactions/${txHash}",
        "account_page": "https://atomscan.com/kava/accounts/${accountAddress}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/kava",
        "account_page": "https://stakeflow.io/kava/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "kichain",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://foundation.ki/",
    "pretty_name": "Ki",
    "chain_id": "kichain-2",
    "bech32_prefix": "ki",
    "daemon_name": "kid",
    "node_home": "$HOME/.kid",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uxki",
          "fixed_min_gas_price": 0.025,
          "low_gas_price": 0.025,
          "average_gas_price": 0.03,
          "high_gas_price": 0.05
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uxki"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-mainnet.blockchain.ki",
          "provider": "kifoundation"
        },
        {
          "address": "https://kichain-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc-kichain-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://kichain-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rpc.kichain.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://kichain-rpc.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "http://ki-chain.statesync.nodersteam.com:14657",
          "provider": "[NODERS]TEAM"
        },
        {
          "address": "https://ki-rpc.ibs.team/",
          "provider": "Inter Blockchain Services"
        }
      ],
      "rest": [
        {
          "address": "https://api-mainnet.blockchain.ki",
          "provider": "kifoundation"
        },
        {
          "address": "https://api-kichain-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://api.kichain.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://kichain-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "http://ki-chain.api.nodersteam.com:14017",
          "provider": "[NODERS]TEAM"
        },
        {
          "address": "https://kichain-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://kichain-api.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://ki-api.ibs.team/",
          "provider": "Inter Blockchain Services"
        }
      ],
      "grpc": [
        {
          "address": "grpc-kichain-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "kichain-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "ki-chain.grpc.nodersteam.com:9410",
          "provider": "[NODERS]TEAM"
        },
        {
          "address": "kichain-grpc.polkachu.com:13590",
          "provider": "Polkachu"
        },
        {
          "address": "kichain-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking",
        "url": "https://app.ezstaking.io/kichain",
        "tx_page": "https://app.ezstaking.io/kichain/txs/${txHash}",
        "account_page": "https://app.ezstaking.io/kichain/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/ki-chain",
        "tx_page": "https://www.mintscan.io/ki-chain/txs/${txHash}",
        "account_page": "https://www.mintscan.io/ki-chain/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/kichain",
        "tx_page": "https://ping.pub/kichain/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/ki-chain",
        "tx_page": "https://atomscan.com/ki-chain/transactions/${txHash}",
        "account_page": "https://atomscan.com/ki-chain/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "konstellation",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://konstellation.tech/",
    "pretty_name": "Konstellation",
    "chain_id": "darchub",
    "bech32_prefix": "darc",
    "daemon_name": "knstld",
    "node_home": "$HOME/.knstld",
    "slip44": 118,
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/Konstellation-dark.png"
    },
    "fees": {
      "fee_tokens": [
        {
          "denom": "udarc",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.0001,
          "average_gas_price": 0.001,
          "high_gas_price": 0.01
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "udarc"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://konstellation-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc-konstellation-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://konstellation-rpc.stakerhouse.com",
          "provider": "StakerHouse"
        }
      ],
      "rest": [
        {
          "address": "https://api-konstellation-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://konstellation-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://konstellation-rest.stakerhouse.com",
          "provider": "StakerHouse"
        }
      ],
      "grpc": [
        {
          "address": "grpc-konstellation-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "konstellation-grpc.polkachu.com:13390",
          "provider": "Polkachu"
        },
        {
          "address": "konstellation-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "konstellation-grpc.stakerhouse.com:443",
          "provider": "StakerHouse"
        }
      ]
    },
    "explorers": [
      {
        "kind": "konstellation",
        "url": "https://explorer.konstellation.tech/",
        "tx_page": "https://explorer.konstellation.tech/tx/${txHash}"
      },
      {
        "kind": "cosmotracker",
        "url": "https://cosmotracker.com/konstellation",
        "tx_page": "https://cosmotracker.com/konstellation/tx/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/Konstellation-dark.png"
      }
    ]
  },
  {
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
      "cosmos_sdk_version": "v0.47.5",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "v0.45.0"
    },
    "description": "A decentralized ecosystem for protocols, builders and web3 users seeking sustainable FinTech.",
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
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "kyve",
    "chain_id": "kyve-1",
    "pretty_name": "KYVE",
    "status": "live",
    "network_type": "mainnet",
    "bech32_prefix": "kyve",
    "daemon_name": "kyved",
    "node_home": "$HOME/.kyve",
    "website": "https://www.kyve.network/",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ukyve",
          "fixed_min_gas_price": 0.02,
          "low_gas_price": 0.02,
          "average_gas_price": 0.03,
          "high_gas_price": 0.06
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ukyve"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "v0.47.6-kyve-rc0"
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve.svg"
    },
    "description": "Revolutionizing data reliability in the Web3 space, KYVE Network provides fast and easy tooling for data validation, immutability, and retrieval, ensuring trustless data for seamless scalability and eliminating data risks and roadblocks.",
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-eu-1.kyve.network",
          "provider": "kyve"
        },
        {
          "address": "https://rpc-kyve.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://kyve-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "http://kyve.rpc.m.stavr.tech:12357",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://rpc-kyve.imperator.co",
          "provider": "Imperator.co"
        },
        {
          "address": "https://kyve-rpc.ibs.team",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://rpc-kyve.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://rpc.kyve.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://kyve.rpc.liveraven.net",
          "provider": "LiveRaveN"
        },
        {
          "address": "https://rpc-kyve.mms.team",
          "provider": "MMS"
        }
      ],
      "rest": [
        {
          "address": "https://api-eu-1.kyve.network",
          "provider": "kyve"
        },
        {
          "address": "https://kyve-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rest-kyve.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://lcd-kyve.imperator.co",
          "provider": "Imperator.co"
        },
        {
          "address": "https://kyve.api.m.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://kyve-api.ibs.team",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://api.kyve.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://api-kyve.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://kyve.api.liveraven.net",
          "provider": "LiveRaveN"
        },
        {
          "address": "https://api-kyve.mms.team",
          "provider": "MMS"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc.kyve.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://kyve-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "grpc-kyve.cosmos-spaces.cloud:2590",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://grpc-kyve.nodeist.net",
          "provider": "Nodeist"
        },
        {
          "address": "http://kyve.grpc.stavr.tech:7106",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://kyve.grpc.liveraven.net",
          "provider": "LiveRaveN"
        },
        {
          "address": "grpc-kyve.mms.team:443",
          "provider": "MMS"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/kyve",
        "tx_page": "https://www.mintscan.io/kyve/txs/${txHash}",
        "account_page": "https://www.mintscan.io/kyve/account/${accountAddress}"
      },
      {
        "kind": "NodeStake Explorer",
        "url": "https://explorer.nodestake.top/kyve",
        "tx_page": "https://explorer.nodestake.top/kyve/txs/${txHash}",
        "account_page": "https://explorer.nodestake.top/kyve/account/${accountAddress}"
      },
      {
        "kind": "🔥STAVR🔥",
        "url": "https://explorer.stavr.tech/Kyve",
        "tx_page": "https://explorer.stavr.tech/Kyve/txs/${txHash}",
        "account_page": "https://explorer.stavr.tech/Kyve/account/${accountAddress}"
      },
      {
        "kind": "Stake-Take",
        "url": "https://explorer.stake-take.com/kyve",
        "tx_page": "https://explorer.stake-take.com/kyve/txs/${txHash}",
        "account_page": "https://explorer.stake-take.com/kyve/account/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "lambda",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Lambda",
    "chain_id": "lambda_92000-1",
    "bech32_prefix": "lamb",
    "node_home": "$HOME/.lambdavm",
    "daemon_name": "lambdavm",
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ulamb",
          "low_gas_price": 10000000000,
          "average_gas_price": 25000000000,
          "high_gas_price": 40000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ulamb"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.lambda.im",
          "provider": "Lambda"
        },
        {
          "address": "http://lambda.rpc.m.stavr.tech:31327",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://rpc.lambda.nodestake.top",
          "provider": "NodeStake"
        }
      ],
      "rest": [
        {
          "address": "https://rest.lambda.im",
          "provider": "Lambda"
        },
        {
          "address": "https://lambda.api.m.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://api.lambda.nodestake.top",
          "provider": "NodeStake"
        }
      ],
      "grpc": [
        {
          "address": "http://lambda.grpc.m.stavr.tech:2287",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "grpc.lambda.nodestake.top:443",
          "provider": "NodeStake"
        }
      ],
      "evm-http-jsonrpc": [
        {
          "address": "https://jsonrpc-lambda.d-stake.xyz",
          "provider": "D-stake"
        }
      ]
    },
    "explorers": [
      {
        "kind": "blockscout",
        "url": "https://explorer.lambda.im/",
        "tx_page": "https://explorer.lambda.im/tx/${txHash}"
      },
      {
        "kind": "NodeStake",
        "url": "https://explorer.nodestake.top/lambda",
        "tx_page": "https://explorer.nodestake.top/lambda/txs/${txHash}"
      },
      {
        "kind": "🔥STAVR🔥",
        "url": "https://explorer.stavr.tech/lambda",
        "tx_page": "https://explorer.stavr.tech/lambda/txs/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/lambda",
        "tx_page": "https://atomscan.com/lambda/transactions/${txHash}",
        "account_page": "https://atomscan.com/lambda/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "likecoin",
    "status": "live",
    "website": "https://like.co/",
    "network_type": "mainnet",
    "pretty_name": "LikeCoin",
    "chain_id": "likecoin-mainnet-2",
    "bech32_prefix": "like",
    "daemon_name": "liked",
    "node_home": "$HOME/.liked",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "nanolike",
          "fixed_min_gas_price": 1000,
          "low_gas_price": 1000,
          "average_gas_price": 10000,
          "high_gas_price": 1000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "nanolike"
        }
      ],
      "lock_duration": {
        "time": "1814400s"
      }
    },
    "codebase": {
      "cosmos_sdk_version": "0.46",
      "cosmwasm_enabled": false
    },
    "apis": {
      "rpc": [
        {
          "address": "https://mainnet-node.like.co/rpc/",
          "provider": "like.co"
        },
        {
          "address": "https://likecoin-node.oldcat.io:443/rpc/",
          "provider": "Oldcat"
        },
        {
          "address": "https://rpc-likecoin-mainnet.pikaser.net",
          "provider": "PikaSer"
        },
        {
          "address": "http://51.159.223.25:28657",
          "provider": "Citizen Web3"
        }
      ],
      "rest": [
        {
          "address": "https://mainnet-node.like.co",
          "provider": "like.co"
        },
        {
          "address": "https://likecoin-node.oldcat.io:443/api/",
          "provider": "Oldcat"
        },
        {
          "address": "https://rest-likecoin-mainnet.pikaser.net",
          "provider": "PikaSer"
        }
      ],
      "grpc": [
        {
          "address": "mainnet-node-grpc.like.co:80",
          "provider": "like.co"
        },
        {
          "address": "https://likecoin-node.oldcat.io:443/grpc/",
          "provider": "Oldcat"
        },
        {
          "address": "grpc-likecoin-mainnet.pikaser.net:443",
          "provider": "PikaSer"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/likecoin",
        "tx_page": "https://www.mintscan.io/likecoin/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/likecoin/accounts/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/likecoin",
        "tx_page": "https://bigdipper.live/likecoin/transactions/${txHash}",
        "account_page": "https://bigdipper.live/likecoin/accounts/${accountAddress}"
      },
      {
        "kind": "lunie-ng",
        "url": "https://stake.like.co/"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/likecoin",
        "tx_page": "https://ping.pub/likecoin/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/likecoin",
        "tx_page": "https://atomscan.com/likecoin/transactions/${txHash}",
        "account_page": "https://atomscan.com/likecoin/accounts/${accountAddress}"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.svg"
    },
    "keywords": [
      "depub",
      "publishing",
      "like",
      "book",
      "writing",
      "nft"
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "logos",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Logos",
    "chain_id": "logos_7002-1",
    "bech32_prefix": "logos",
    "daemon_name": "logosd",
    "node_home": "$HOME/.logos",
    "key_algos": [
      "ethsecp256k1"
    ],
    "extra_codecs": [
      "ethermint"
    ],
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "aLYT"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://logos-rpc.provable.dev:443/",
          "provider": "laurel.provable"
        }
      ],
      "rest": [
        {
          "address": "https://logos.provable.dev/rest/",
          "provider": "laurel.provable"
        }
      ],
      "grpc": [
        {
          "address": "logos-grpc.provable.dev:443",
          "provider": "laurel.provable"
        }
      ],
      "evm-http-jsonrpc": [
        {
          "address": "https://logos-evm.provable.dev/",
          "provider": "laurel.provable"
        }
      ]
    },
    "explorers": [],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.svg"
    },
    "codebase": {},
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "loyal",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.joinloyal.com/",
    "pretty_name": "Loyal",
    "chain_id": "loyal-main-02",
    "bech32_prefix": "loyal",
    "daemon_name": "loyald",
    "node_home": "$HOME/.loyal",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ulyl",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ulyl"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-main.joinloyal.io/"
        },
        {
          "address": "https://loyal-rpc.polkachu.com",
          "provider": "Polkachu"
        }
      ],
      "rest": [
        {
          "address": "https://lcd-main.joinloyal.io/"
        },
        {
          "address": "https://loyal-api.polkachu.com",
          "provider": "Polkachu"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc.loyal.nodestake.top",
          "provider": "NodeStake"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Loyal explorer",
        "url": "https://pingpub.joinloyal.io/loyal",
        "tx_page": "https://pingpub.joinloyal.io/loyal/tx/${txHash}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/loyal",
        "tx_page": "https://explorer.tcnetwork.io/loyal/transaction/${txHash}"
      },
      {
        "kind": "NodeStake Explorer",
        "url": "https://explorer.nodestake.top/loyal",
        "tx_page": "https://explorer.nodestake.top/loyal/tx/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "lumenx",
    "status": "killed",
    "network_type": "mainnet",
    "pretty_name": "LumenX",
    "chain_id": "LumenX",
    "bech32_prefix": "lumen",
    "daemon_name": "lumenxd",
    "node_home": "$HOME/.lumenx",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ulumen",
          "fixed_min_gas_price": 0.0025,
          "low_gas_price": 0.01,
          "average_gas_price": 0.025,
          "high_gas_price": 0.03
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ulumen"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-lumenx.cryptonet.pl/",
          "provider": "CryptoNet"
        },
        {
          "address": "https://lumenx-rpc.kynraze.com/",
          "provider": "Kynraze"
        }
      ],
      "rest": [
        {
          "address": "https://api-lumenx.cryptonet.pl/",
          "provider": "CryptoNet"
        },
        {
          "address": "https://api-lumenx.nodine.id/",
          "provider": "Nodine.ID"
        },
        {
          "address": "https://lcd.lumenx.hexnodes.co/",
          "provider": "Hexnodes"
        }
      ],
      "grpc": [
        {
          "address": "https://lumenx-grpc.kynraze.com",
          "provider": "Kynraze"
        },
        {
          "address": "https://grpc-lumenx.nodine.id",
          "provider": "Nodine.ID"
        },
        {
          "address": "https://grpc.lumenx.hexnodes.co",
          "provider": "Hexnodes"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://explorer.chaintools.tech/lumenx",
        "tx_page": "https://explorer.chaintools.tech/lumenx/tx/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://explorer.cryptonet.pl/lumenx",
        "tx_page": "https://explorer.cryptonet.pl/lumenx/tx/${txHash}"
      },
      {
        "kind": "Kynraze",
        "url": "https://explorer.kynraze.com/lumenx",
        "tx_page": "https://explorer.kynraze.com/lumenx/tx/${txHash}"
      },
      {
        "kind": "ComunityNode",
        "url": "https://explorer.comunitynode.my.id/lumenx",
        "tx_page": "https://explorer.comunitynode.my.id/lumenx/tx/${txHash}"
      },
      {
        "kind": "Nodine.ID",
        "url": "https://explorer.co.id/lumenx",
        "tx_page": "https://explorer.co.id/lumenx/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/lumenx",
        "tx_page": "https://atomscan.com/lumenx/transactions/${txHash}",
        "account_page": "https://atomscan.com/lumenx/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "lumnetwork",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://lum.network/",
    "pretty_name": "Lum Network",
    "chain_id": "lum-network-1",
    "bech32_prefix": "lum",
    "daemon_name": "lumd",
    "node_home": "$HOME/.lumd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 880,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ulum",
          "fixed_min_gas_price": 0.001,
          "low_gas_price": 0.01,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ulum"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "v0.47.5"
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://node0.mainnet.lum.network/rpc",
          "provider": "Lum Foundation"
        },
        {
          "address": "https://lumnetwork-rpc.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://lum-rpc.ibs.team",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://lum-rpc.stakerhouse.com",
          "provider": "StakerHouse"
        }
      ],
      "rest": [
        {
          "address": "https://node0.mainnet.lum.network/rest",
          "provider": "Lum Foundation"
        },
        {
          "address": "https://lumnetwork-api.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://lum-api.ibs.team",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://lum-rest.stakerhouse.com",
          "provider": "StakerHouse"
        }
      ],
      "grpc": [
        {
          "address": "lumnetwork-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "lum-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "lum-grpc.stakerhouse.com:443",
          "provider": "StakerHouse"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking",
        "url": "https://app.ezstaking.io/lumnetwork",
        "tx_page": "https://app.ezstaking.io/lumnetwork/txs/${txHash}",
        "account_page": "https://app.ezstaking.io/lumnetwork/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/lum",
        "tx_page": "https://www.mintscan.io/lum/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/lum/accounts/${accountAddress}"
      },
      {
        "kind": "lum-network",
        "url": "https://explorer.lum.network",
        "tx_page": "https://explorer.lum.network/txs/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/lum-network",
        "tx_page": "https://ping.pub/lum-network/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/lum-network",
        "tx_page": "https://atomscan.com/lum-network/transactions/${txHash}",
        "account_page": "https://atomscan.com/lum-network/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "mars",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.marsprotocol.io/",
    "pretty_name": "Mars Hub",
    "chain_id": "mars-1",
    "bech32_prefix": "mars",
    "daemon_name": "marsd",
    "node_home": "$HOME/.mars",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "alternative_slip44s": [
      330
    ],
    "fees": {
      "fee_tokens": [
        {
          "denom": "umars",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0,
          "average_gas_price": 0,
          "high_gas_price": 0.01
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "umars"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.46.7",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "0.30.0"
    },
    "description": "Lend, borrow and earn with an autonomous credit protocol in the Cosmos universe. Open to all, closed to none.",
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.marsprotocol.io:443",
          "provider": "Delphi Labs"
        },
        {
          "address": "https://mars-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://mars-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://mars-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc.expedition-mars.com",
          "provider": "Expedition Mars"
        },
        {
          "address": "https://mars-rpc.genznodes.dev:443",
          "provider": "genznodes"
        },
        {
          "address": "https://mars-rpc.stakeandrelax.net",
          "provider": "Stake&Relax Validator 🦥"
        },
        {
          "address": "https://mars-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://mars-rpc.stakeandrelax.net",
          "provider": "Stake&Relax 🦥"
        }
      ],
      "rest": [
        {
          "address": "https://rest.marsprotocol.io:443",
          "provider": "Delphi Labs"
        },
        {
          "address": "https://mars-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://mars-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://mars-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://lcd.expedition-mars.com:443",
          "provider": "Expedition Mars"
        },
        {
          "address": "https://mars-api.genznodes.dev:443",
          "provider": "genznodes"
        },
        {
          "address": "https://mars-api.stakeandrelax.net",
          "provider": "Stake&Relax Validator 🦥"
        },
        {
          "address": "https://mars-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://mars-api.stakeandrelax.net",
          "provider": "Stake&Relax 🦥"
        }
      ],
      "grpc": [
        {
          "address": "grpc.marsprotocol.io:443",
          "provider": "Delphi Labs"
        },
        {
          "address": "mars-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "mars-grpc.polkachu.com:18590",
          "provider": "Polkachu"
        },
        {
          "address": "mars-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "mars-grpc.genznodes.dev:26090",
          "provider": "genznodes"
        },
        {
          "address": "mars.grpc.kjnodes.com:14590",
          "provider": "kjnodes"
        },
        {
          "address": "grpc.mars.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "mars-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "mars-grpc.stakeandrelax.net:18590",
          "provider": "Stake&Relax 🦥"
        }
      ]
    },
    "explorers": [
      {
        "kind": "BigDipper",
        "url": "https://explorer.marsprotocol.io",
        "tx_page": "https://explorer.marsprotocol.io/transactions/${txHash}",
        "account_page": "https://explorer.marsprotocol.io/accounts/${accountAddress}"
      },
      {
        "kind": "NodeStake Explorer",
        "url": "https://explorer.nodestake.top/mars",
        "tx_page": "https://explorer.nodestake.top/mars/transactions/${txHash}",
        "account_page": "https://explorer.nodestake.top/mars/account/${accountAddress}"
      },
      {
        "kind": "Nodes.Guru",
        "url": "https://mars.explorers.guru/",
        "tx_page": "https://mars.explorers.guru/transaction/${txHash}",
        "account_page": "https://mars.explorers.guru/account/${accountAddress}"
      },
      {
        "kind": "MintScan",
        "url": "https://www.mintscan.io/mars-protocol",
        "tx_page": "https://www.mintscan.io/mars-protocol/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/mars-protocol/accounts/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/mars",
        "tx_page": "https://ping.pub/mars/tx/${txHash}",
        "account_page": "https://ping.pub/mars/account/${accountAddress}"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-protocol.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-protocol.svg"
    },
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-protocol.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-protocol.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "mayachain",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://mayaprotocol.com/",
    "pretty_name": "Maya Protocol",
    "chain_id": "mayachain-mainnet-v1",
    "bech32_prefix": "maya",
    "daemon_name": "mayanode",
    "node_home": "$HOME/.mayanode",
    "slip44": 931,
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://tendermint.mayachain.info",
          "provider": "tendermint"
        }
      ],
      "rest": [
        {
          "address": "https://mayanode.mayachain.info",
          "provider": "mayanode"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Maya Protocol explorer",
        "url": "https://www.explorer.mayachain.info",
        "tx_page": "https://www.explorer.mayachain.info/#/txs/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "medasdigital",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://medas-digital.io/",
    "pretty_name": "Medas Digital Network",
    "chain_id": "medasdigital-1",
    "bech32_prefix": "medas",
    "daemon_name": "medasdigitald",
    "node_home": "$HOME/.medasdigital",
    "slip44": 118,
    "key_algos": [
      "secp256k1"
    ],
    "fees": {
      "fee_tokens": [
        {
          "denom": "umedas",
          "low_gas_price": 0.1,
          "average_gas_price": 0.25,
          "high_gas_price": 0.4
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "umedas"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.medas-digital.io:26657/",
          "provider": "Neptun Validator"
        }
      ],
      "rest": [
        {
          "address": "https://lcd.medas-digital.io:1317/",
          "provider": "Neptun Validator"
        }
      ],
      "grpc": [
        {
          "address": "grpc.medas-digital.io:9090",
          "provider": "Neptun Validator"
        }
      ]
    },
    "explorers": [
      {
        "kind": "BigDipper",
        "url": "https://explorer.medas-digital.io:3100/medasdigital",
        "tx_page": "https://explorer.medas-digital.io:3100/medasdigital/transactions/${txHash}",
        "account_page": "explorer.medas-digital.io:3100/medasdigital/accounts/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/frontier/medasdigital",
        "tx_page": "https://atomscan.com/frontier/medasdigital/transactions/${txHash}",
        "account_page": "https://atomscan.com/frontier/medasdigital/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "meme",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "MEME",
    "chain_id": "meme-1",
    "bech32_prefix": "meme",
    "daemon_name": "memed",
    "node_home": "$HOME/.memed",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "umeme",
          "fixed_min_gas_price": 0.025,
          "low_gas_price": 0.025,
          "average_gas_price": 0.035,
          "high_gas_price": 0.045
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "umeme"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-meme-1.meme.sx/",
          "provider": "MEME Foundation"
        },
        {
          "address": "https://meme-rpc.polkachu.com/",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc-meme.pupmos.network/",
          "provider": "PUPMØS"
        },
        {
          "address": "https://meme.rpc.m.anode.team",
          "provider": "ANODE TEAM"
        }
      ],
      "rest": [
        {
          "address": "https://api-meme-1.meme.sx/",
          "provider": "MEME Foundation"
        },
        {
          "address": "https://meme-api.polkachu.com/",
          "provider": "Polkachu"
        },
        {
          "address": "https://api-meme.pupmos.network/",
          "provider": "PUPMØS"
        },
        {
          "address": "https://meme.api.m.anode.team",
          "provider": "ANODE TEAM"
        }
      ],
      "grpc": [
        {
          "address": "meme-grpc.polkachu.com:14790",
          "provider": "Polkachu"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/meme",
        "tx_page": "https://ping.pub/meme/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/meme",
        "tx_page": "https://atomscan.com/meme/transactions/${txHash}",
        "account_page": "https://atomscan.com/meme/accounts/${accountAddress}"
      },
      {
        "kind": "MEME Explorer",
        "url": "https://explorer.meme.sx/meme",
        "tx_page": "https://explorer.meme.sx/meme/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/meme",
        "tx_page": "https://atomscan.com/meme/transactions/${txHash}",
        "account_page": "https://atomscan.com/meme/accounts/${accountAddress}"
      },
      {
        "kind": "Brochain",
        "url": "https://explorer.brocha.in/meme",
        "tx_page": "https://explorer.brocha.in/meme/tx/${txHash}"
      },
      {
        "kind": "Stake-Take",
        "url": "https://explorer.stake-take.com/meme",
        "tx_page": "https://explorer.stake-take.com/meme/tx/${txHash}",
        "account_page": "https://explorer.stake-take.com/meme/account/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "microtick",
    "status": "killed",
    "network_type": "mainnet",
    "pretty_name": "Microtick",
    "chain_id": "microtick-1",
    "bech32_prefix": "micro",
    "daemon_name": "mtm",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "utick",
          "low_gas_price": 0.01,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "utick"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg"
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/microtick",
        "tx_page": "https://ping.pub/microtick/tx/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "migaloo",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.whitewhale.money/",
    "pretty_name": "Migaloo",
    "chain_id": "migaloo-1",
    "bech32_prefix": "migaloo",
    "daemon_name": "migalood",
    "node_home": "$HOME/.migalood",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uwhale",
          "fixed_min_gas_price": 1,
          "low_gas_price": 1,
          "average_gas_price": 2,
          "high_gas_price": 3
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uwhale"
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/migaloo-light.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/migaloo-light.svg"
    },
    "codebase": {
      "cosmos_sdk_version": "0.46.15",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "v0.30.1-0.20230320091624-f5072b9b04a6"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://migaloo-rpc.polkachu.com:443",
          "provider": "Polkachu"
        },
        {
          "address": "https://migaloo-rpc.lavenderfive.com",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc-migaloo.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://migaloo-rpc.kleomedes.network:443",
          "provider": "Kleomedes"
        },
        {
          "address": "https://rpc.whitewhale.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://migaloo.rpc.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://migaloo-rpc.cosmosrescue.com",
          "provider": "cosmosrescue"
        }
      ],
      "rest": [
        {
          "address": "https://migaloo-api.polkachu.com:443",
          "provider": "Polkachu"
        },
        {
          "address": "https://migaloo-api.lavenderfive.com",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://api-migaloo.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://migaloo-api.kleomedes.network:443",
          "provider": "Kleomedes"
        },
        {
          "address": "https://api.whitewhale.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://migaloo.api.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://migaloo-api.cosmosrescue.com",
          "provider": "cosmosrescue"
        }
      ],
      "grpc": [
        {
          "address": "migaloo-grpc.polkachu.com:20790",
          "provider": "Polkachu"
        },
        {
          "address": "migaloo-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "whitewhale-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "grpc-migaloo.cosmos-spaces.cloud:4810",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://grpc.whitewhale.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "migaloo.grpc.kjnodes.com:14990",
          "provider": "kjnodes"
        },
        {
          "address": "migaloo-grpc.cosmosrescue.com:9090",
          "provider": "cosmosrescue"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Migaloo Explorers Guru",
        "url": "https://migaloo.explorers.guru",
        "tx_page": "https://migaloo.explorers.guru/transaction/${txHash}",
        "account_page": "https://migaloo.explorers.guru/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/migaloo",
        "tx_page": "https://ping.pub/migaloo/tx/${txHash}"
      },
      {
        "kind": "Silk Nodes",
        "url": "https://explorer.silknodes.io/migaloo",
        "tx_page": "https://explorer.silknodes.io/migaloo/tx/${txHash}",
        "account_page": "https://explorer.silknodes.io/migaloo/account/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/migaloo",
        "tx_page": "https://atomscan.com/migaloo/transactions/${txHash}",
        "account_page": "https://atomscan.com/migaloo/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/migaloo-light.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/migaloo-light.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "mises",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://mises.site",
    "pretty_name": "Mises",
    "chain_id": "mainnet",
    "bech32_prefix": "mises",
    "node_home": "$HOME/.misestm",
    "daemon_name": "misestmd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "umis",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "umis"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mises/images/mises.png"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.gw.mises.site:443",
          "provider": "Mises-1"
        },
        {
          "address": "https://e2.mises.site:443",
          "provider": "Mises-3"
        },
        {
          "address": "https://w2.mises.site:443",
          "provider": "Mises-5"
        }
      ],
      "rest": [],
      "grpc": []
    },
    "explorers": [
      {
        "kind": "Mises-GW Explorer",
        "url": "https://gw.mises.site",
        "tx_page": "https://gw.mises.site/tx/${txHash}"
      },
      {
        "kind": "Jambulmerah ping.pub based",
        "url": "https://explorer.jambulmerah.dev/mises",
        "tx_page": "https://explorer.jambulmerah.dev/mises/tx/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mises/images/mises.png"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "mun",
    "website": "https://mun.money",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Mun",
    "chain_id": "mun-1",
    "bech32_prefix": "mun",
    "daemon_name": "mund",
    "node_home": "$HOME/.mun",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "umun",
          "fixed_min_gas_price": 0.025
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "umun"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mun/images/mun.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mun/images/mun.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://mainnet1rpc.mun.money",
          "provider": "Mun"
        },
        {
          "address": "https://mainnet-mun-rpc.konsortech.xyz",
          "provider": "KonsorTech"
        },
        {
          "address": "https://rpc.mun.tcnetwork.io",
          "provider": "TC Network"
        }
      ],
      "rest": [
        {
          "address": "https://mainnet1.mun.money",
          "provider": "Mun"
        },
        {
          "address": "https://mainnet-mun-api.konsortech.xyz",
          "provider": "KonsorTech"
        },
        {
          "address": "https://rest.mun.tcnetwork.io",
          "provider": "TC Network"
        }
      ],
      "grpc": []
    },
    "explorers": [
      {
        "url": "https://explorer.mun.money/mun",
        "tx_page": "https://explorer.mun.money/mun/${txHash}"
      },
      {
        "url": "https://explorer.indonode.net/mun/staking",
        "tx_page": "https://explorer.indonode.net/mun/${txHash}"
      },
      {
        "url": "https://explorer.konsortech.xyz/mun/staking",
        "tx_page": "https://explorer.konsortech.xyz/mun/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/mun",
        "tx_page": "https://ping.pub/mun/${txHash}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/mun",
        "tx_page": "https://explorer.tcnetwork.io/mun/transaction/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mun/images/mun.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mun/images/mun.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "mythos",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Mythos",
    "chain_id": "mythos_7001-1",
    "bech32_prefix": "mythos",
    "daemon_name": "mythosd",
    "node_home": "$HOME/.mythosd",
    "key_algos": [
      "ethsecp256k1"
    ],
    "extra_codecs": [
      "ethermint"
    ],
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "aMYT"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://mythos-rpc.provable.dev:443/",
          "provider": "laurel.provable"
        }
      ],
      "rest": [
        {
          "address": "https://mythos.provable.dev/rest/",
          "provider": "laurel.provable"
        }
      ],
      "grpc": [
        {
          "address": "mythos-grpc.provable.dev:443",
          "provider": "laurel.provable"
        }
      ],
      "evm-http-jsonrpc": []
    },
    "explorers": [],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.svg"
    },
    "codebase": {},
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "neutron",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Neutron",
    "chain_id": "neutron-1",
    "bech32_prefix": "neutron",
    "website": "https://neutron.org/",
    "daemon_name": "neutrond",
    "node_home": "$HOME/.neutrond",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "untrn",
          "low_gas_price": 0.075,
          "average_gas_price": 0.075,
          "high_gas_price": 0.1125
        },
        {
          "denom": "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
          "low_gas_price": 0.007,
          "average_gas_price": 0.007,
          "high_gas_price": 0.0105
        },
        {
          "denom": "ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349",
          "low_gas_price": 0.08,
          "average_gas_price": 0.08,
          "high_gas_price": 0.12
        },
        {
          "denom": "factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH",
          "low_gas_price": 30125586.037,
          "average_gas_price": 30125586.037,
          "high_gas_price": 45188379.0555
        },
        {
          "denom": "ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130",
          "low_gas_price": 25641025641.026,
          "average_gas_price": 25641025641.026,
          "high_gas_price": 38461538461.5
        },
        {
          "denom": "ibc/773B4D0A3CD667B2275D5A4A7A2F0909C0BA0F4059C0B9181E680DDF4965DCC7",
          "low_gas_price": 0.006,
          "average_gas_price": 0.006,
          "high_gas_price": 0.009
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "untrn"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "v0.47.6",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "v0.45.0"
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron-black-logo.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron-black-logo.svg"
    },
    "description": "The most secure CosmWasm platform in Cosmos, Neutron lets smart-contracts leverage bleeding-edge Interchain technology with minimal overhead.",
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-lb.neutron.org",
          "provider": "Neutron"
        },
        {
          "address": "https://rpc.novel.remedy.tm.p2p.org",
          "provider": "P2P"
        },
        {
          "address": "https://neutron-rpc.lavenderfive.com",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc-neutron.whispernode.com",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://rpc-neutron.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "http://rpc.neutron.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://neutron-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://community.nuxian-node.ch:6797/neutron/trpc",
          "provider": "PRO Delegators"
        },
        {
          "address": "https://rpc-neutron.in3s.com:443",
          "provider": "in3s.com"
        },
        {
          "address": "https://rpc.neutron.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ],
      "rest": [
        {
          "address": "https://rest-lb.neutron.org",
          "provider": "Neutron"
        },
        {
          "address": "https://api.novel.remedy.tm.p2p.org",
          "provider": "P2P"
        },
        {
          "address": "https://neutron-api.lavenderfive.com",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://lcd-neutron.whispernode.com",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://api-neutron.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "http://api.neutron.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://neutron-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://community.nuxian-node.ch:6797/neutron/crpc",
          "provider": "PRO Delegators"
        },
        {
          "address": "https://lcd.neutron.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ],
      "grpc": [
        {
          "address": "grpc-kralum.neutron-1.neutron.org:80",
          "provider": "Neutron"
        },
        {
          "address": "https://grpc.novel.remedy.tm.p2p.org",
          "provider": "P2P"
        },
        {
          "address": "https://grpc-web.novel.remedy.tm.p2p.org",
          "provider": "P2P"
        },
        {
          "address": "neutron-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "grpc-neutron.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "grpc-neutron.cosmos-spaces.cloud:3090",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "grpc.neutron.nodestake.top:9090",
          "provider": "NodeStake"
        },
        {
          "address": "neutron-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://grpc.neutron.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Mintscan",
        "url": "https://www.mintscan.io/neutron",
        "tx_page": "https://www.mintscan.io/neutron/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/neutron/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron-black-logo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron-black-logo.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "nibiru",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://nibiru.fi/",
    "pretty_name": "Nibiru",
    "chain_id": "cataclysm-1",
    "bech32_prefix": "nibi",
    "daemon_name": "nibid",
    "node_home": "$HOME/.nibid",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "unibi",
          "fixed_min_gas_price": 0.025,
          "low_gas_price": 0.025,
          "average_gas_price": 0.05,
          "high_gas_price": 0.1
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "unibi"
        }
      ],
      "lock_duration": {
        "time": "1814400s"
      }
    },
    "codebase": {
      "cosmos_sdk_version": "v0.45.5",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "v0.44.0"
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg"
    },
    "description": "A Web3 hub ushering in the next era of money",
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.nibiru.fi",
          "provider": "Nibiru Foundation"
        }
      ],
      "rest": [
        {
          "address": "https://lcd.nibiru.fi",
          "provider": "Nibiru Foundation"
        }
      ],
      "grpc": [
        {
          "address": "grpc.nibiru.fi:443",
          "provider": "Nibiru Foundation"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Nodes Guru",
        "url": "https://nibiru.explorers.guru/",
        "tx_page": "https://nibiru.explorers.guru/transaction/${txHash}",
        "account_page": "https://nibiru.explorers.guru/account/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "noble",
    "chain_id": "noble-1",
    "website": "https://nobleassets.xyz/",
    "pretty_name": "Noble",
    "status": "live",
    "network_type": "mainnet",
    "bech32_prefix": "noble",
    "daemon_name": "nobled",
    "node_home": "$HOME/.noble",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uusdc",
          "fixed_min_gas_price": 0.1,
          "low_gas_price": 0.1,
          "average_gas_price": 0.1,
          "high_gas_price": 0.2
        },
        {
          "denom": "ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0",
          "fixed_min_gas_price": 0.01,
          "low_gas_price": 0.01,
          "average_gas_price": 0.01,
          "high_gas_price": 0.02
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ustake"
        }
      ],
      "lock_duration": {
        "time": "1814400s"
      }
    },
    "codebase": {
      "cosmos_sdk_version": "v0.45.16",
      "cosmwasm_enabled": false
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/Noble-Logo.svg"
    },
    "description": "The most reliable, secure, and frictionless way to natively issue a digital asset in Cosmos.",
    "apis": {
      "rpc": [
        {
          "address": "https://noble-rpc.polkachu.com",
          "provider": "polkachu"
        },
        {
          "address": "https://noble-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ],
      "rest": [
        {
          "address": "https://noble-api.polkachu.com",
          "provider": "polkachu"
        },
        {
          "address": "https://noble-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ],
      "grpc": [
        {
          "address": "noble-grpc.polkachu.com:21590",
          "provider": "polkachu"
        },
        {
          "address": "https://noble-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/noble",
        "tx_page": "https://www.mintscan.io/noble/txs/${txHash}",
        "account_page": "https://www.mintscan.io/noble/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://explore.strange.love/noble-1",
        "tx_page": "https://explore.strange.love/noble-1/tx/${txHash}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/noble",
        "account_page": "https://stakeflow.io/noble/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/Noble-Logo.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "nois",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://nois.network",
    "pretty_name": "Nois",
    "chain_id": "nois-1",
    "bech32_prefix": "nois",
    "daemon_name": "noisd",
    "node_home": "$HOME/.noisd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "unois",
          "fixed_min_gas_price": 0.05,
          "low_gas_price": 0.05,
          "average_gas_price": 0.05,
          "high_gas_price": 0.1
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "unois"
        }
      ],
      "lock_duration": {
        "time": "1814400s"
      }
    },
    "codebase": {
      "cosmos_sdk_version": "v0.45.15",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "v0.31.0"
    },
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png",
        "theme": {
          "primary_color_hex": "#0C0914"
        }
      },
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://nois-rpc.nysa.network",
          "provider": "nysa.network"
        },
        {
          "address": "https://nois.rpc.bccnodes.com",
          "provider": "BccNodes"
        },
        {
          "address": "https://nois-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc-nois.mib.tech/",
          "provider": "MadeInBlock"
        },
        {
          "address": "https://m-nois.rpc.utsa.tech",
          "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
        },
        {
          "address": "http://nois.rpc.m.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://rpc-nois.ezstaking.dev",
          "provider": "EZStaking"
        },
        {
          "address": "https://nois-mainnet-rpc.itrocket.net",
          "provider": "itrocket"
        },
        {
          "address": "https://rpc.nois.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://rpc-nois.d-stake.xyz",
          "provider": "D-Stake"
        },
        {
          "address": "https://rpc-nois.sr20de.xyz",
          "provider": "SR20DE"
        },
        {
          "address": "https://nois-mainnet-rpc.autostake.com",
          "provider": "AutoStake"
        },
        {
          "address": "https://nois-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://nois.kingnodes.com",
          "provider": "Kingnodes"
        },
        {
          "address": "https://nois.rpc.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://rpc.nois.silentvalidator.com",
          "provider": "silent"
        },
        {
          "address": "https://nois-rpc.stakeandrelax.net",
          "provider": "Stake&Relax 🦥"
        }
      ],
      "grpc": [
        {
          "address": "https://nois-grpc.nysa.network",
          "provider": "nysa.network"
        },
        {
          "address": "nois.grpc.bccnodes.com:443",
          "provider": "BccNodes"
        },
        {
          "address": "https://nois-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://grpc.noismain.mcbnode.online",
          "provider": "mcbnode"
        },
        {
          "address": "http://nois.grpc.m.stavr.tech:191",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "nois-mainnet-grpc.itrocket.net:36090",
          "provider": "itrocket"
        },
        {
          "address": "nois-mainnet-grpc.itrocket.net:36090",
          "provider": "itrocket"
        },
        {
          "address": "https://grpc.nois.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://grpc-nois.d-stake.xyz",
          "provider": "D-Stake"
        },
        {
          "address": "https://grpc.nois.hexnodes.co",
          "provider": "HexNodes"
        },
        {
          "address": "https://grpc-nois.sr20de.xyz",
          "provider": "SR20DE"
        },
        {
          "address": "https://nois-testnet-grpc.autostake.com",
          "provider": "AutoStake"
        },
        {
          "address": "nois-grpc.polkachu.com:17390",
          "provider": "Polkachu"
        },
        {
          "address": "https://grpc-nois.kingnodes.com",
          "provider": "Kingnodes"
        },
        {
          "address": "nois.grpc.kjnodes.com:15190",
          "provider": "kjnodes"
        },
        {
          "address": "grpc.nois.silentvalidator.com:443",
          "provider": "silent"
        },
        {
          "address": "nois-grpc.stakeandrelax.net:17390",
          "provider": "Stake&Relax 🦥"
        }
      ],
      "rest": [
        {
          "address": "https://m-nois.api.utsa.tech",
          "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
        },
        {
          "address": "https://nois-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://lcd-nois.ezstaking.dev",
          "provider": "EZStaking"
        },
        {
          "address": "https://lcd-nois.mib.tech/",
          "provider": "MadeInBlock"
        },
        {
          "address": "https://nois.api.m.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://nois-mainnet-api.itrocket.net",
          "provider": "itrocket"
        },
        {
          "address": "https://api.nois.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://api-nois.d-stake.xyz",
          "provider": "D-Stake"
        },
        {
          "address": "https://api-nois.sr20de.xyz",
          "provider": "SR20DE"
        },
        {
          "address": "https://nois-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://nois.kingnodes.com",
          "provider": "Kingnodes"
        },
        {
          "address": "https://nois.api.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://api.nois.silentvalidator.com",
          "provider": "silent"
        },
        {
          "address": "https://nois-api.stakeandrelax.net",
          "provider": "Stake&Relax 🦥"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking",
        "url": "https://app.ezstaking.io/nois",
        "tx_page": "https://app.ezstaking.io/nois/txs/${txHash}",
        "account_page": "https://app.ezstaking.io/nois/account/${accountAddress}"
      },
      {
        "kind": "🔥STAVR🔥",
        "url": "https://explorer.stavr.tech/nois-mainnet",
        "tx_page": "https://explorer.stavr.tech/nois-mainnet/txs/${txHash}",
        "account_page": "https://explorer.stavr.tech/nois-mainnet/account/${accountAddress}"
      },
      {
        "kind": "BccNodes",
        "url": "https://explorer.stavr.tech/nois-mainnet",
        "tx_page": "https://explorer.bccnodes.com/nois-M/txs/${txHash}",
        "account_page": "https://explorer.bccnodes.com/nois-M/account/${accountAddress}"
      },
      {
        "kind": "explorers.guru",
        "url": "https://nois.explorers.guru",
        "tx_page": "https://nois.explorers.guru/transaction/${txHash}",
        "account_page": "https://nois.explorers.guru/account/${accountAddress}"
      }
    ],
    "keywords": [
      "nois",
      "randomness",
      "drand",
      "wasm"
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "nolus",
    "status": "live",
    "website": "https://nolus.io/",
    "network_type": "mainnet",
    "pretty_name": "Nolus",
    "chain_id": "pirin-1",
    "bech32_prefix": "nolus",
    "daemon_name": "nolusd",
    "node_home": "$HOME/.nolus",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "unls",
          "low_gas_price": 0,
          "average_gas_price": 0.025,
          "high_gas_price": 0.05
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "unls"
        }
      ],
      "lock_duration": {
        "time": "1814400s"
      }
    },
    "codebase": {
      "cosmos_sdk_version": "v0.47.6-nolus",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "neutron-org/wasmd v0.45.0"
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg"
    },
    "description": "Elevate your game with up to 3x equity. Dive into a world of minimized risks and unlock the full potential of your assets.",
    "apis": {
      "rpc": [
        {
          "address": "https://pirin-cl.nolus.network:26657",
          "provider": "NolusProtocol"
        },
        {
          "address": "https://nolus-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://nolus-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://nolus-rpc.sphincs.plus",
          "provider": "Sphincs.plus 🔅"
        },
        {
          "address": "https://nolus.rpc.liveraven.net",
          "provider": "LiveRaveN"
        },
        {
          "address": "https://rpc-nolus.architectnodes.com",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://nolus.rpc.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://nolus-rpc.enigma-validator.com/",
          "provider": "Enigma"
        },
        {
          "address": "https://nolus-rpc.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://rpc-nolus.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://nolus-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://nolus-rpc.ibs.team",
          "provider": "Inter Blockchain Services"
        }
      ],
      "rest": [
        {
          "address": "https://pirin-cl.nolus.network:1317",
          "provider": "NolusProtocol"
        },
        {
          "address": "https://nolus-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://nolus-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://nolus-lcd.sphincs.plus",
          "provider": "Sphincs.plus 🔅"
        },
        {
          "address": "https://api-nolus.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://nolus.api.liveraven.net",
          "provider": "LiveRaveN"
        },
        {
          "address": "https://rest-nolus.architectnodes.com",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://nolus.api.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://nolus-lcd.enigma-validator.com/",
          "provider": "Enigma"
        },
        {
          "address": "https://nolus-api.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://nolus-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://nolus-api.ibs.team",
          "provider": "Inter Blockchain Services"
        }
      ],
      "grpc": [
        {
          "address": "https://pirin-cl.nolus.network:9090",
          "provider": "NolusProtocol"
        },
        {
          "address": "nolus-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://nolus-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://nolus.grpc.liveraven.net",
          "provider": "LiveRaveN"
        },
        {
          "address": "grpc-nolus.architectnodes.com:1443",
          "provider": "Architect Nodes"
        },
        {
          "address": "grpc-nolus.cosmos-spaces.cloud:1190",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "nolus.grpc.kjnodes.com:14390",
          "provider": "kjnodes"
        },
        {
          "address": "nolus-grpc.w3coins.io:19790",
          "provider": "w3coins"
        },
        {
          "address": "nolus-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Nolus Explorer",
        "url": "https://explorer.nolus.io/pirin-1",
        "tx_page": "https://explorer.nolus.io/pirin-1/tx/${txHash}",
        "account_page": "https://explorer.nolus.io/pirin-1/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/nolus",
        "tx_page": "https://ping.pub/nolus/tx/${txHash}",
        "account_page": "https://ping.pub/nolus/account/${accountAddress}"
      },
      {
        "kind": "NODEXPLORER",
        "url": "https://explorer.nodexcapital.com/nolus",
        "tx_page": "https://explorer.nodexcapital.com/nolus/tx/${txHash}",
        "account_page": "https://explorer.nodexcapital.com/nolus/account/${accountAddress}"
      },
      {
        "kind": "Nodes Guru Explorer",
        "url": "https://nolus.explorers.guru",
        "tx_page": "https://nolus.explorers.guru/transaction/${txHash}"
      },
      {
        "kind": "KJ Nodes Explorer",
        "url": "https://explorer.kjnodes.com/nolus",
        "tx_page": "https://explorer.kjnodes.com/nolus/tx/${txHash}",
        "account_page": "https://explorer.kjnodes.com/nolus/account/${accountAddress}"
      }
    ],
    "keywords": [
      "mainnet"
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "nomic",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Nomic",
    "website": "https://nomic.io/",
    "chain_id": "nomic-stakenet-3",
    "bech32_prefix": "nomic",
    "daemon_name": "nomic",
    "node_home": "$HOME/.nomic-stakenet-3",
    "slip44": 118,
    "key_algos": [
      "secp256k1"
    ],
    "fees": {
      "fee_tokens": [
        {
          "denom": "unom",
          "low_gas_price": 0,
          "average_gas_price": 0,
          "high_gas_price": 0
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "unom"
        }
      ],
      "lock_duration": {
        "time": "1209600s"
      }
    },
    "codebase": {
      "cosmos_sdk_version": "cosmos-sdk-proto 0.19.0"
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nomic.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nomic.svg"
    },
    "description": "The superior way to use Bitcoin in Cosmos DeFi. Use IBC to securely and efficiently bridge your BTC to Osmosis and more.",
    "apis": {
      "rpc": [
        {
          "address": "https://stakenet-rpc.nomic.io:2096",
          "provider": "nomic-io"
        },
        {
          "address": "https://nomic-rpc.polkachu.com/",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc-nomic.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://rpc.nomic.basementnodes.ca:443",
          "provider": "Basement Nodes ⚡️"
        },
        {
          "address": "https://rpc.nomic.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ],
      "rest": [
        {
          "address": "https://app.nomic.io:8443",
          "provider": "nomic-io"
        },
        {
          "address": "https://rest.nomic.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ]
    },
    "explorers": [
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/nomic",
        "account_page": "https://bigdipper.live/nomic/accounts/${accountAddress}",
        "tx_page": "https://bigdipper.live/nomic/transactions/${txHash}"
      },
      {
        "kind": "Zenscan.io",
        "url": "https://nomic.zenscan.io/index.php",
        "account_page": "https://nomic.zenscan.io/address.php?address=${accountAddress}",
        "tx_page": "https://nomic.zenscan.io/transaction.php?hash=${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nomic.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nomic.svg"
      }
    ],
    "bech32_config": {
      "bech32PrefixAccAddr": "nomic",
      "bech32PrefixAccPub": "nomic",
      "bech32PrefixConsAddr": "nomic",
      "bech32PrefixConsPub": "nomic",
      "bech32PrefixValAddr": "nomic",
      "bech32PrefixValPub": "nomic"
    }
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "nyx",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://nymtech.net/",
    "pretty_name": "Nym",
    "chain_id": "nyx",
    "bech32_prefix": "n",
    "daemon_name": "nyxd",
    "node_home": "$HOME/.nyxd",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "unym",
          "fixed_min_gas_price": 0.025,
          "low_gas_price": 0.025,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        },
        {
          "denom": "unyx",
          "fixed_min_gas_price": 0.025,
          "low_gas_price": 0.025,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "unyx"
        }
      ],
      "lock_duration": {
        "time": "1814400s"
      }
    },
    "codebase": {
      "cosmwasm_enabled": true
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nyx.png"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.nyx.nodes.guru/",
          "provider": "nodes guru"
        },
        {
          "address": "https://rpc.nym.forbole.com/",
          "provider": "forbole"
        },
        {
          "address": "https://nym-mainnet-rpc.commodum.io/",
          "provider": "commodum"
        },
        {
          "address": "https://nym-rpc.polkachu.com/",
          "provider": "Polkachu"
        }
      ],
      "rest": [
        {
          "address": "https://nym-api.polkachu.com/",
          "provider": "Polkachu"
        },
        {
          "address": "https://api.nyx.nodes.guru/",
          "provider": "nodes guru"
        },
        {
          "address": "https://api.nymtech.net",
          "provider": "Nym"
        }
      ],
      "grpc": [
        {
          "address": "nym-grpc.polkachu.com:15390",
          "provider": "Polkachu"
        },
        {
          "address": "grpc.nymtech.net:443",
          "provider": "Nym"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Nodes Guru explorer",
        "url": "https://nym.explorers.guru/",
        "tx_page": "https://nym.explorers.guru/transaction/${txHash}",
        "account_page": "https://nym.explorers.guru/account/${accountAddress}"
      },
      {
        "kind": "EZ Staking",
        "url": "https://app.ezstaking.io/nyx",
        "tx_page": "https://app.ezstaking.io/nyx/txs/${txHash}",
        "account_page": "https://app.ezstaking.io/nyx/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/nyx",
        "tx_page": "https://www.mintscan.io/nyx/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/nyx/accounts/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/nyx",
        "tx_page": "https://ping.pub/nyx/tx/${txHash}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/nym",
        "tx_page": "https://bigdipper.live/nym/transactions/${txHash}",
        "account_page": "https://bigdipper.live/nym/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nyx.png"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "octa",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Octa",
    "chain_id": "octa",
    "bech32_prefix": "octa",
    "daemon_name": "octadaemon",
    "node_home": "$HOME/.octa",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uocta",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/octa/images/octa.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/octa/images/octa.svg"
    },
    "apis": {
      "rpc": [],
      "rest": []
    },
    "explorers": [
      {
        "kind": "Octa explorer",
        "url": "http://explorer.octa-coin.com/",
        "tx_page": "http://explorer.octa-coin.com/txs/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/octa/images/octa.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/octa/images/octa.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "odin",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://odinprotocol.io/",
    "pretty_name": "Odin Protocol",
    "chain_id": "odin-mainnet-freya",
    "bech32_prefix": "odin",
    "daemon_name": "odind",
    "node_home": "$HOME/.odin",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "loki",
          "fixed_min_gas_price": 0.0125,
          "low_gas_price": 0.025,
          "average_gas_price": 0.05,
          "high_gas_price": 0.06
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "loki"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "http://34.79.179.216:26657",
          "provider": "Odin Protocol"
        },
        {
          "address": "https://odin-rpc.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://odin-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ],
      "rest": [
        {
          "address": "http://34.79.179.216:1317/",
          "provider": "Odin Protocol"
        },
        {
          "address": "https://odin-api.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://odin-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ],
      "grpc": [
        {
          "address": "odin-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "odin-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ]
    },
    "explorers": [
      {
        "kind": "odin web",
        "url": "https://mainnet.odinprotocol.io/",
        "tx_page": "https://mainnet.odinprotocol.io/transactions/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/odin",
        "tx_page": "https://ping.pub/odin/tx/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "okexchain",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "OKExChain",
    "chain_id": "exchain-66",
    "bech32_prefix": "ex",
    "daemon_name": "exchaind",
    "node_home": "$HOME/.exchaind",
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "wei",
          "low_gas_price": 200000000,
          "average_gas_price": 250000000,
          "high_gas_price": 400000000
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/okexchain/images/okc.png"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://exchaintmrpc.okex.org",
          "provider": "okx chain"
        }
      ],
      "rest": []
    },
    "explorers": [
      {
        "kind": "OKLink",
        "url": "https://www.oklink.com/en/okc",
        "tx_page": "https://www.oklink.com/en/okc/tx/${txHash}",
        "account_page": "https://www.oklink.com/en/okc/address/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/okexchain/images/okc.png"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "omniflixhub",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://omniflix.network/",
    "pretty_name": "OmniFlix",
    "chain_id": "omniflixhub-1",
    "daemon_name": "omniflixhubd",
    "node_home": "$HOME/.omniflixhub",
    "bech32_prefix": "omniflix",
    "slip44": 118,
    "codebase": {
      "cosmos_sdk_version": "v0.47.5"
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg"
    },
    "fees": {
      "fee_tokens": [
        {
          "denom": "uflix",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.001,
          "average_gas_price": 0.0025,
          "high_gas_price": 0.025
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uflix"
        }
      ]
    },
    "description": "Decentralized media and network layer for Creators & Sovereign Communities powered by NFTs and related distribution protocols.",
    "apis": {
      "rpc": [
        {
          "address": "https://omniflix.kingnodes.com",
          "provider": "kingnodes"
        },
        {
          "address": "https://rpc.omniflix.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://rpc.omniflix.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://rpc-omniflixhub-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://omniflixhub-rpc.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc.omniflix.silentvalidator.com/",
          "provider": "silent"
        },
        {
          "address": "https://omniflixhub-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rpc-omniflix.architectnodes.com",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://omniflix-rpc.staketab.org:443",
          "provider": "Staketab"
        },
        {
          "address": "https://rpc-omniflixhub.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://omniflix-rpc.dakshavalidator.in",
          "provider": "Daksha Validator"
        },
        {
          "address": "https://rpc-omniflix.mzonder.com:443",
          "provider": "MZONDER"
        },
        {
          "address": "https://rpc.omniflix.stakeup.tech:443",
          "provider": "StakeUp"
        },
        {
          "address": "https://rpc.omniflix.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ],
      "rest": [
        {
          "address": "https://api.omniflix.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://api-omniflixhub-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://omniflixhub-api.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://api-omniflixhub.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://api.omniflix.silentvalidator.com/",
          "provider": "silent"
        },
        {
          "address": "https://omniflix.kingnodes.com",
          "provider": "kingnodes"
        },
        {
          "address": "https://omniflixhub-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rest-omniflix.architectnodes.com",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://omniflix-rest.staketab.org",
          "provider": "Staketab"
        },
        {
          "address": "https://omniflix-api.dakshavalidator.in",
          "provider": "Daksha Validator"
        },
        {
          "address": "http://omniflix.api.staking-explorer.com",
          "provider": "Daily $FLIX DROP 💰"
        },
        {
          "address": "https://api.omniflix.stakeup.tech",
          "provider": "StakeUp"
        },
        {
          "address": "https://lcd.omniflix.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ],
      "grpc": [
        {
          "address": "grpc-omniflix.kingnodes.com:443",
          "provider": "kingnodes"
        },
        {
          "address": "grpc.omniflix.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "grpc-omniflixhub-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "omniflixhub-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "grpc-omniflixhub.cosmos-spaces.cloud:2230",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "omniflixhub-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "grpc-omniflix.architectnodes.com:1443",
          "provider": "Architect Nodes"
        },
        {
          "address": "services.staketab.com:9015",
          "provider": "Staketab"
        },
        {
          "address": "grpc-omniflix.mzonder.com:443",
          "provider": "MZONDER"
        },
        {
          "address": "grpc.omniflix.stakeup.tech:443",
          "provider": "StakeUp"
        },
        {
          "address": "https://grpc.omniflix.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking",
        "url": "https://app.ezstaking.io/omniflixhub",
        "tx_page": "https://app.ezstaking.io/omniflixhub/txs/${txHash}",
        "account_page": "https://app.ezstaking.io/omniflixhub/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/omniflix",
        "tx_page": "https://www.mintscan.io/omniflix/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/omniflix/accounts/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/omniflixhub",
        "tx_page": "https://atomscan.com/omniflixhub/transactions/${txHash}",
        "account_page": "https://atomscan.com/omniflixhub/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "onomy",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://onomy.io/",
    "pretty_name": "Onomy",
    "chain_id": "onomy-mainnet-1",
    "bech32_prefix": "onomy",
    "daemon_name": "onomyd",
    "node_home": "$HOME/.onomyd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "anom",
          "low_gas_price": 0,
          "average_gas_price": 0.03,
          "high_gas_price": 0.06
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "anom"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.44"
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-mainnet.onomy.io",
          "provider": "onomy"
        }
      ],
      "rest": [
        {
          "address": "https://rest-mainnet.onomy.io",
          "provider": "onomy"
        }
      ],
      "grpc": []
    },
    "explorers": [
      {
        "kind": "Big Dipper",
        "url": "https://explorer.onomy.io",
        "tx_page": "https://explorer.onomy.io/transactions/${txHash}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/onomy-protocol",
        "tx_page": "https://www.mintscan.io/onomy-protocol/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/onomy-protocol/accounts/${accountAddress}"
      }
    ],
    "keywords": [
      "dex",
      "stablecoin",
      "bridge",
      "staking"
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "oraichain",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://orai.io/",
    "pretty_name": "Oraichain",
    "chain_id": "Oraichain",
    "bech32_prefix": "orai",
    "daemon_name": "oraid",
    "node_home": "$WORKSPACE/.oraid",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "orai",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.003,
          "average_gas_price": 0.005,
          "high_gas_price": 0.007
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "orai"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.orai.io",
          "provider": "oraichain-team"
        },
        {
          "address": "https://rpc-orai.nodine.id/",
          "provider": "Nodine.ID"
        },
        {
          "address": "https://oraichain-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rpc-oraichain.mms.team",
          "provider": "MMS"
        },
        {
          "address": "https://rpc-orai.blockval.io/",
          "provider": "Blockval"
        }
      ],
      "rest": [
        {
          "address": "http://lcd.orai.io",
          "provider": "oraichain-team"
        },
        {
          "address": "https://oraichain-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://api-oraichain.mms.team",
          "provider": "MMS"
        },
        {
          "address": "https://api-orai.blockval.io",
          "provider": "Blockval"
        }
      ],
      "grpc": [
        {
          "address": "grpc-oraichain.mms.team:443",
          "provider": "MMS"
        },
        {
          "address": "oraichain-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "grpc-orai.blockval.io:9390",
          "provider": "Blockval"
        }
      ]
    },
    "explorers": [
      {
        "kind": "oraiscan",
        "url": "https://scan.orai.io",
        "tx_page": "https://scan.orai.io/txs/${txHash}"
      },
      {
        "kind": "Nodine Explorer",
        "url": "https://explorer.co.id/orai",
        "tx_page": "https://explorer.co.id/orai/tx/${txHash}"
      },
      {
        "kind": "Blockval Explorer",
        "url": "https://explorer.blockval.io/oraichain",
        "tx_page": "https://explorer.blockval.io/oraichain/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/orai",
        "tx_page": "https://atomscan.com/orai/transactions/${txHash}",
        "account_page": "https://atomscan.com/orai/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "osmosis",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://osmosis.zone/",
    "update_link": "https://raw.githubusercontent.com/osmosis-labs/osmosis/main/chain.schema.json",
    "pretty_name": "Osmosis",
    "chain_id": "osmosis-1",
    "bech32_prefix": "osmo",
    "daemon_name": "osmosisd",
    "node_home": "$HOME/.osmosisd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uosmo",
          "fixed_min_gas_price": 0.0025,
          "low_gas_price": 0.0025,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uosmo"
        }
      ],
      "lock_duration": {
        "time": "1209600s"
      }
    },
    "codebase": {
      "cosmos_sdk_version": "osmosis-labs/cosmos-sdk@0.45.0-rc1.0.20230922030206-734f99fba785",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "osmosis-labs/wasmd@0.31.0-osmo-v16"
    },
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png",
        "theme": {
          "primary_color_hex": "#231D4B"
        },
        "layout": "logo",
        "text_position": "right"
      },
      {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg",
        "layout": "logomark"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png"
    },
    "description": "Osmosis (OSMO) is the premier DEX and cross-chain DeFi hub within the Cosmos ecosystem, a network of over 50 sovereign, interoperable blockchains seamlessly connected through the Inter-Blockchain Communication Protocol (IBC). Pioneering in its approach, Osmosis offers a dynamic trading and liquidity provision experience, integrating non-IBC assets from other ecosystems, including Ethereum, Solana, Avalanche, and Polkadot. Initially adopting Balancer-style pools, Osmosis now also features a concentrated liquidity model that is orders of magnitude more capital efficient, meaning that significantly less liquidity is required to handle the same amount of trading volume with minimal slippage.\n\nAs a true appchain, Osmosis has greater control over the full blockchain stack than traditional smart contract DEXs, which must follow the code of the parent chain that it is built on. This fine-grained control has enabled, for example, the development of Superfluid Staking, an extension of Proof of Stake that allows assets at the application layer to be staked to secure the chain. The customizability of appchains also allows implementing features like the Protocol Revenue module, which enables Osmosis to conduct on-chain arbitrage on behalf of OSMO stakers, balancing prices across pools while generating real yield revenue from this volume. Additionally, as a sovereign appchain, Osmosis governance can vote on upgrades to the protocol. One example of this was the introduction of a Taker Fee, which switched on the collection of exchange fees to generate diverse yield from Osmosis volume and distribute it to OSMO stakers.\n\nOsmosis is bringing the full centralized exchange experience to the decentralized world by building a cross-chain native DEX and trading suite that connects all chains over IBC, including Ethereum and Bitcoin. To reach this goal, Osmosis hosts an ever-expanding suite of DeFi applications aimed at providing a one-stop experience that includes lending, credit, margin, DeFi strategy vaults, power perps, fiat on-ramps, NFTs, stablecoins, and more — all of the functionalities that centralized exchange offer and more, in the trust-minimized environment of decentralized finance.",
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.osmosis.zone/",
          "provider": "Osmosis Foundation"
        },
        {
          "address": "https://rpc-osmosis.blockapsis.com",
          "provider": "chainapsis"
        },
        {
          "address": "https://osmosis-rpc.onivalidator.com",
          "provider": "Oni Validator ⛩️"
        },
        {
          "address": "https://osmosis-rpc.quickapi.com:443",
          "provider": "Chainlayer"
        },
        {
          "address": "https://rpc-osmosis.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://osmosis-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc-osmosis.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://rpc-osmosis.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://osmosis-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc-osmosis-ia.cosmosia.notional.ventures",
          "provider": "Notional"
        },
        {
          "address": "https://osmosis.rpc.stakin-nodes.com",
          "provider": "Stakin"
        },
        {
          "address": "https://osmosis-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://osmosis.api.onfinality.io/public",
          "provider": "OnFinality"
        },
        {
          "address": "https://rpc-osmosis-01.stakeflow.io",
          "provider": "Stakeflow"
        },
        {
          "address": "https://osmosis-rpc.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://rpc-osmosis.mms.team",
          "provider": "MMS"
        },
        {
          "address": "https://osmosis-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://community.nuxian-node.ch:6797/osmosis/trpc",
          "provider": "PRO Delegators"
        },
        {
          "address": "http://rpc-osmosis.freshstaking.com:31657",
          "provider": "FreshSTAKING"
        },
        {
          "address": "https://osmosis-rpc.stake-town.com",
          "provider": "StakeTown"
        },
        {
          "address": "https://osmosis-mainnet.rpc.l0vd.com:443",
          "provider": "L0vd.com ❤️"
        },
        {
          "address": "https://osmosis-rpc.reece.sh",
          "provider": "Reecepbcups"
        },
        {
          "address": "https://rpc.osmosis.validatus.com",
          "provider": "Validatus"
        },
        {
          "address": "https://rpc.osmosis.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ],
      "rest": [
        {
          "address": "https://lcd.osmosis.zone/",
          "provider": "Osmosis Foundation"
        },
        {
          "address": "https://osmosis-lcd.quickapi.com:443",
          "provider": "Chainlayer"
        },
        {
          "address": "https://lcd-osmosis.blockapsis.com",
          "provider": "chainapsis"
        },
        {
          "address": "https://osmosis-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rest-osmosis.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://api-osmosis-ia.cosmosia.notional.ventures",
          "provider": "Notional"
        },
        {
          "address": "https://api-osmosis.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://osmosis-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://osmosis.rest.stakin-nodes.com",
          "provider": "Stakin"
        },
        {
          "address": "https://osmosis-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://api-osmosis-01.stakeflow.io",
          "provider": "Stakeflow"
        },
        {
          "address": "https://osmosis-api.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://lcd-osmosis.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://api-osmosis.mms.team",
          "provider": "MMS"
        },
        {
          "address": "https://osmosis-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://community.nuxian-node.ch:6797/osmosis/crpc",
          "provider": "PRO Delegators"
        },
        {
          "address": "https://osmosis-api.stake-town.com",
          "provider": "StakeTown"
        },
        {
          "address": "https://osmosis-mainnet.api.l0vd.com:443",
          "provider": "L0vd.com ❤️"
        },
        {
          "address": "https://osmosis-api.reece.sh",
          "provider": "Reecepbcups"
        },
        {
          "address": "https://api.osmosis.validatus.com:443",
          "provider": "Validatus"
        },
        {
          "address": "https://lcd.osmosis.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ],
      "grpc": [
        {
          "address": "osmosis-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "grpc-osmosis-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "osmosis.grpc.stakin-nodes.com:443",
          "provider": "Stakin"
        },
        {
          "address": "osmosis-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "grpc-osmosis.cosmos-spaces.cloud:1130",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "grpc-osmosis-01.stakeflow.io:6754",
          "provider": "Stakeflow"
        },
        {
          "address": "services.staketab.com:9010",
          "provider": "Staketab"
        },
        {
          "address": "osmosis-grpc.w3coins.io:12590",
          "provider": "w3coins"
        },
        {
          "address": "grpc-osmosis.mms.team:443",
          "provider": "MMS"
        },
        {
          "address": "osmosis-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "osmosis-grpc.stake-town.com:443",
          "provider": "StakeTown"
        },
        {
          "address": "https://grpc-osmosis.nodeist.net",
          "provider": "Nodeist"
        },
        {
          "address": "osmosis-mainnet.grpc.l0vd.com:80",
          "provider": "L0vd.com ❤️"
        },
        {
          "address": "grpc-osmosis.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "grpc.osmosis.validatus.com:443",
          "provider": "Validatus"
        },
        {
          "address": "https://grpc.osmosis.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking",
        "url": "https://app.ezstaking.io/osmosis",
        "tx_page": "https://app.ezstaking.io/osmosis/txs/${txHash}",
        "account_page": "https://app.ezstaking.io/osmosis/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/osmosis",
        "tx_page": "https://www.mintscan.io/osmosis/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/osmosis/accounts/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/osmosis",
        "tx_page": "https://ping.pub/osmosis/tx/${txHash}"
      },
      {
        "kind": "explorers.guru",
        "url": "https://osmosis.explorers.guru",
        "tx_page": "https://osmosis.explorers.guru/transaction/${txHash}",
        "account_page": "https://osmosis.explorers.guru/account/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/osmosis",
        "tx_page": "https://atomscan.com/osmosis/transactions/${txHash}",
        "account_page": "https://atomscan.com/osmosis/accounts/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/osmosis",
        "tx_page": "https://bigdipper.live/osmosis/transactions/${txHash}",
        "account_page": "https://bigdipper.live/osmosis/accounts/${accountAddress}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/osmosis",
        "tx_page": "https://explorer.tcnetwork.io/osmosis/transaction/${txHash}",
        "account_page": "https://explorer.tcnetwork.io/osmosis/account/${accountAddress}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/osmosis",
        "account_page": "https://stakeflow.io/osmosis/accounts/${accountAddress}"
      },
      {
        "kind": "Nodeist Explorer",
        "url": "https://exp.nodeist.net/osmosis",
        "tx_page": "https://exp.nodeist.net/osmosis/tx/${txHash}"
      },
      {
        "kind": "L0vd.com ❤️",
        "url": "https://explorers.l0vd.com/osmosis-mainnet",
        "tx_page": "https://explorers.l0vd.com/osmosis-mainnet/tx/${txHash}"
      },
      {
        "kind": "Chainscope",
        "url": "https://chainsco.pe/osmosis",
        "tx_page": "https://chainsco.pe/osmosis/tx/${txHash}"
      }
    ],
    "keywords": [
      "dex"
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "panacea",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://medibloc.com/en/",
    "pretty_name": "Medibloc",
    "chain_id": "panacea-3",
    "bech32_prefix": "panacea",
    "daemon_name": "panacead",
    "node_home": "$HOME/.panacead",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 371,
    "fees": {
      "fee_tokens": [
        {
          "denom": "umed",
          "fixed_min_gas_price": 5,
          "low_gas_price": 5,
          "average_gas_price": 7,
          "high_gas_price": 9
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "umed"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.gopanacea.org",
          "provider": "medibloc"
        },
        {
          "address": "https://panacea-rpc.staketab.org:443",
          "provider": "Staketab"
        }
      ],
      "rest": [
        {
          "address": "https://api.gopanacea.org",
          "provider": "medibloc"
        },
        {
          "address": "https://panacea-rest.staketab.org",
          "provider": "Staketab"
        }
      ],
      "grpc": [
        {
          "address": "services.staketab.com:9400",
          "provider": "Staketab"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/medibloc",
        "tx_page": "https://www.mintscan.io/medibloc/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/medibloc/accounts/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://explorer.gopanacea.org",
        "tx_page": "https://explorer.gopanacea.org/transactions/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "passage",
    "chain_id": "passage-2",
    "pre_fork_chain_name": "passage1",
    "pretty_name": "Passage",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://passage3d.com/",
    "bech32_prefix": "pasg",
    "daemon_name": "passage",
    "node_home": "$HOME/.passage",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "upasg",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.001,
          "average_gas_price": 0.0025,
          "high_gas_price": 0.01
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "upasg"
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.passage.vitwit.com",
          "provider": "vitwit"
        },
        {
          "address": "https://passage-rpc.staketab.org:443",
          "provider": "Staketab"
        },
        {
          "address": "https://rpc-passage.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://passage-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc-passage-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://rpc-passage.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://rpc.passage.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://passage-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://passage-rpc.ibs.team/",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://rpc-passage.d-stake.xyz",
          "provider": "D-stake"
        },
        {
          "address": "https://rpc-passage.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://passage-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://passage-rpc.stakerhouse.com",
          "provider": "StakerHouse"
        },
        {
          "address": "https://passage-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://passage-rpc.stakeandrelax.net",
          "provider": "Stake&Relax 🦥"
        },
        {
          "address": "https://rpc-passage.mainnet.validatrium.club",
          "provider": "Validatrium"
        }
      ],
      "rest": [
        {
          "address": "https://api.passage.vitwit.com",
          "provider": "vitwit"
        },
        {
          "address": "https://passage-rest.staketab.org",
          "provider": "Staketab"
        },
        {
          "address": "https://rest-passage.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://passage-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://api-passage.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://api-passage-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://api.passage.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://passage-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://passage-api.ibs.team/",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://api-passage.d-stake.xyz",
          "provider": "D-stake"
        },
        {
          "address": "https://passage-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://lcd-passage.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://passage-rest.stakerhouse.com",
          "provider": "StakerHouse"
        },
        {
          "address": "https://passage-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://passage-api.stakeandrelax.net",
          "provider": "Stake&Relax 🦥"
        },
        {
          "address": "https://api-passage.mainnet.validatrium.club",
          "provider": "Validatrium"
        }
      ],
      "grpc": [
        {
          "address": "grpc-passage-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "passage-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "passage-grpc.polkachu.com:15690",
          "provider": "Polkachu"
        },
        {
          "address": "grpc-passage.cosmos-spaces.cloud:2320",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "grpc.passage.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "passage-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "services.staketab.com:9023",
          "provider": "Staketab"
        },
        {
          "address": "passage-grpc.stakerhouse.com:443",
          "provider": "StakerHouse"
        },
        {
          "address": "passage-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "passage-grpc.stakeandrelax.net:15690",
          "provider": "Stake&Relax 🦥"
        },
        {
          "address": "grpc-passage.mainnet.validatrium.club:20590",
          "provider": "Validatrium"
        }
      ]
    },
    "explorers": [
      {
        "kind": "aneka",
        "url": "https://passage.aneka.io",
        "tx_page": "https://passage.aneka.io/txs/${txHash}",
        "account_page": "https://passage.aneka.io/accounts/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/passage",
        "tx_page": "https://www.mintscan.io/passage/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/passage/accounts/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/passage",
        "tx_page": "https://atomscan.com/passage/transactions/${txHash}",
        "account_page": "https://atomscan.com/passage/accounts/${accountAddress}"
      },
      {
        "kind": "cosmotracker",
        "url": "https://cosmotracker.com/passage",
        "tx_page": "https://cosmotracker.com/passage/tx/${txHash}",
        "account_page": "https://cosmotracker.com/passage/account/${accountAddress}"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png"
    },
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "passage1",
    "chain_id": "passage-1",
    "pretty_name": "Passage",
    "status": "killed",
    "network_type": "mainnet",
    "website": "https://passage3d.com/",
    "bech32_prefix": "pasg",
    "daemon_name": "passage",
    "node_home": "$HOME/.passage",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "upasg",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "upasg"
        }
      ]
    },
    "codebase": {},
    "explorers": [
      {
        "kind": "aneka",
        "url": "https://passage.aneka.io",
        "tx_page": "https://passage.aneka.io/txs/${txHash}",
        "account_page": "https://passage.aneka.io/accounts/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/passage",
        "tx_page": "https://www.mintscan.io/passage/txs/${txHash}",
        "account_page": "https://www.mintscan.io/passage/account/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/passage",
        "tx_page": "https://atomscan.com/passage/transactions/${txHash}",
        "account_page": "https://atomscan.com/passage/accounts/${accountAddress}"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png"
    },
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "persistence",
    "chain_id": "core-1",
    "pretty_name": "Persistence",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://persistence.one/",
    "bech32_prefix": "persistence",
    "daemon_name": "persistenceCore",
    "node_home": "$HOME/.persistenceCore",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "alternative_slip44s": [
      750
    ],
    "fees": {
      "fee_tokens": [
        {
          "denom": "uxprt",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uxprt"
        }
      ],
      "lock_duration": {
        "time": "1814400s"
      }
    },
    "codebase": {
      "cosmos_sdk_version": "v0.47.3-lsm5",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "v0.40.2-lsm3"
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg"
    },
    "description": "Persistence is an app chain for Liquid Staking powering an ecosystem of DeFi applications focused on unlocking the liquidity of staked assets.",
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.core.persistence.one",
          "provider": "Persistence"
        },
        {
          "address": "https://rpc-persistent-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://persistence-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://persistence-rpc.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://rpc-persistence.architectnodes.com",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://rpc-persistence.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://persistence-mainnet-rpc.cosmonautstakes.com",
          "provider": "Cosmonaut Stakes"
        },
        {
          "address": "https://persistence-rpc.quantnode.tech",
          "provider": "QuantNode"
        },
        {
          "address": "https://persistence-rpc.zenscape.one",
          "provider": "Zenscape"
        },
        {
          "address": "https://persistence-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://persistence-rpc.stakeandrelax.net",
          "provider": "Stake&Relax Validator 🦥"
        },
        {
          "address": "https://rpc.persistence.posthuman.digital:443",
          "provider": "POSTHUMAN∞DVS"
        },
        {
          "address": "https://rpc-persistence-01.stakeflow.io",
          "provider": "Stakeflow"
        },
        {
          "address": "https://persistence-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://persistence-rpc.highstakes.ch:26657/",
          "provider": "High Stakes 🇨🇭"
        },
        {
          "address": "https://persistence-rpc.stakeandrelax.net",
          "provider": "Stake&Relax 🦥"
        }
      ],
      "rest": [
        {
          "address": "https://rest.core.persistence.one",
          "provider": "Persistence"
        },
        {
          "address": "https://api-persistent-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://persistence-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://api-persistence.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://persistence-api.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://rest-persistence.architectnodes.com",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://persistence-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://persistence-mainnet-rest.cosmonautstakes.com",
          "provider": "Cosmonaut Stakes"
        },
        {
          "address": "https://persistence-lcd.quantnode.tech",
          "provider": "QuantNode"
        },
        {
          "address": "https://persistence-rest.zenscape.one",
          "provider": "Zenscape"
        },
        {
          "address": "https://persistence-api.stakeandrelax.net",
          "provider": "Stake&Relax Validator 🦥"
        },
        {
          "address": "https://rest.persistence.posthuman.digital:443",
          "provider": "POSTHUMAN∞DVS"
        },
        {
          "address": "https://api-persistence-01.stakeflow.io",
          "provider": "Stakeflow"
        },
        {
          "address": "https://persistence-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://persistence-api.highstakes.ch:1317/",
          "provider": "High Stakes 🇨🇭"
        },
        {
          "address": "https://persistence-api.stakeandrelax.net",
          "provider": "Stake&Relax 🦥"
        }
      ],
      "grpc": [
        {
          "address": "grpc.core.persistence.one:443",
          "provider": "Persistence"
        },
        {
          "address": "grpc-persistent-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "persistence-grpc.polkachu.com:15490",
          "provider": "Polkachu"
        },
        {
          "address": "persistence-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "grpc.persistence.posthuman.digital:80",
          "provider": "POSTHUMAN∞DVS"
        },
        {
          "address": "grpc-persistence.cosmos-spaces.cloud:1180",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "141.95.33.97:9090",
          "provider": "Stakewolle.com | Auto-compound"
        },
        {
          "address": "grpc-persistence-01.stakeflow.io:49090",
          "provider": "Stakeflow"
        },
        {
          "address": "persistence-grpc.w3coins.io:15490",
          "provider": "w3coins"
        },
        {
          "address": "persistence-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "persistence-grpc.stakeandrelax.net:15490",
          "provider": "Stake&Relax 🦥"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/persistence",
        "tx_page": "https://www.mintscan.io/persistence/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/persistence/accounts/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/persistence",
        "tx_page": "https://ping.pub/persistence/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/persistence",
        "tx_page": "https://atomscan.com/persistence/transactions/${txHash}",
        "account_page": "https://atomscan.com/persistence/accounts/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/persistence",
        "tx_page": "https://bigdipper.live/persistence/transactions/${txHash}",
        "account_page": "https://bigdipper.live/persistence/accounts/${accountAddress}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/persistence",
        "account_page": "https://stakeflow.io/persistence/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "planq",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://planq.network/",
    "pretty_name": "Planq",
    "chain_id": "planq_7070-2",
    "bech32_prefix": "plq",
    "node_home": "$HOME/.planqd",
    "daemon_name": "planqd",
    "key_algos": [
      "ethsecp256k1"
    ],
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "aplanq",
          "fixed_min_gas_price": 20000000000,
          "low_gas_price": 30000000000,
          "average_gas_price": 35000000000,
          "high_gas_price": 40000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "aplanq"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "v0.46.3"
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.planq.network",
          "provider": "planq.network"
        },
        {
          "address": "https://planq.rpc.bccnodes.com",
          "provider": "BccNodes"
        },
        {
          "address": "https://rpc.planq.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://planq-rpc.kynraze.com",
          "provider": "Kynraze"
        },
        {
          "address": "https://rpc.planq.indonode.net",
          "provider": "Indonode"
        },
        {
          "address": "https://rpc.planq.roomit.xyz",
          "provider": "RoomIT"
        },
        {
          "address": "https://planq-rpc.genznodes.dev",
          "provider": "genznodes"
        },
        {
          "address": "https://rpc.planq.safeblock.space",
          "provider": "Safe Block"
        },
        {
          "address": "https://planq.rpc.skynodejs.net",
          "provider": "skynodejs"
        }
      ],
      "rest": [
        {
          "address": "https://rest.planq.network",
          "provider": "planq.network"
        },
        {
          "address": "https://api.planq.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://planq-api.kynraze.com",
          "provider": "Kynraze"
        },
        {
          "address": "https://api.planq.indonode.net",
          "provider": "Indonode"
        },
        {
          "address": "https://api.planq.roomit.xyz",
          "provider": "RoomIT"
        },
        {
          "address": "https://planq-api.genznodes.dev",
          "provider": "genznodes"
        },
        {
          "address": "https://api.planq.safeblock.space",
          "provider": "Safe Block"
        },
        {
          "address": "https://planq.api.skynodejs.net",
          "provider": "skynodejs"
        }
      ],
      "grpc": [
        {
          "address": "grpc.planq.network:443",
          "provider": "planq.network"
        },
        {
          "address": "planq.grpc.bccnodes.com:443",
          "provider": "BccNodes"
        },
        {
          "address": "grpc.planq.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "https://grpc-planq.nodine.id",
          "provider": "Nodine.id"
        },
        {
          "address": "https://grpc-planq.sxlzptprjkt.xyz:443",
          "provider": "sxlzptprjkt | VALIDATOR"
        },
        {
          "address": "https://grpc.planq.nodexcapital.com:443",
          "provider": "NodeX Validator"
        },
        {
          "address": "https://grpc.planq.roomit.xyz:8443",
          "provider": "RoomIT"
        },
        {
          "address": "https://grpc.planq.hexnodes.co:33090",
          "provider": "Hexnodes"
        },
        {
          "address": "planq-grpc.genznodes.dev:28090",
          "provider": "genznodes"
        },
        {
          "address": "grpc.planq.safeblock.space:9090",
          "provider": "Safe Block"
        },
        {
          "address": "https://planq.grpc.skynodejs.net",
          "provider": "skynodejs"
        }
      ],
      "evm-http-jsonrpc": [
        {
          "address": "https://evm-rpc.planq.network",
          "provider": "planq.network"
        },
        {
          "address": "https://jsonrpc.planq.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://rpc-evm-planq.sxlzptprjkt.xyz",
          "provider": "sxlzptprjkt | VALIDATOR"
        },
        {
          "address": "https://jsonrpc.planq.nodexcapital.com",
          "provider": "NodeX Validator"
        },
        {
          "address": "https://planq-rpc-evm.genznodes.dev",
          "provider": "genznodes"
        },
        {
          "address": "https://evm.planq.safeblock.space",
          "provider": "Safe Block"
        }
      ]
    },
    "explorers": [
      {
        "kind": "bigdipper",
        "url": "https://explorer.planq.network",
        "tx_page": "https://explorer.planq.network/transactions/${txHash}"
      },
      {
        "kind": "blockscout",
        "url": "https://evm.planq.network",
        "tx_page": "https://evm.planq.network/tx/${txHash}"
      },
      {
        "kind": "NodeStake Explorer",
        "url": "https://explorer.nodestake.top/planq",
        "tx_page": "https://explorer.nodestake.top/planq/tx/${txHash}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/planq",
        "tx_page": "https://explorer.tcnetwork.io/planq/transaction/${txHash}"
      },
      {
        "kind": "RoomIT",
        "url": "https://explorer.tendermint.roomit.xyz/planq",
        "tx_page": "https://explorer.tendermint.roomit.xyz/planq/transaction/${txHash}"
      },
      {
        "kind": "Kynraze",
        "url": "https://explorer.kynraze.com/planq",
        "tx_page": "https://explorer.kynraze.com/planq/tx/${txHash}"
      },
      {
        "kind": "THE EXPLORER",
        "url": "https://explorer.sxlzptprjkt.xyz/planq",
        "tx_page": "https://explorer.sxlzptprjkt.xyz/planq/tx/${txHash}"
      },
      {
        "kind": "NODEXPLORER",
        "url": "https://explorer.nodexcapital.com/planq",
        "tx_page": "https://explorer.nodexcapital.com/planq/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/planq",
        "tx_page": "https://atomscan.com/planq/transactions/${txHash}",
        "account_page": "https://atomscan.com/planq/accounts/${accountAddress}"
      },
      {
        "kind": "Indonode",
        "url": "https://explorer.indonode.net/planq",
        "tx_page": "https://explorer.indonode.net/planq/tx/${txHash}"
      },
      {
        "kind": "Safe Block",
        "url": "https://explorer.safeblock.space/planq",
        "tx_page": "https://explorer.safeblock.space/planq/tx/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "point",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Point Network",
    "chain_id": "point_10687-1",
    "bech32_prefix": "point",
    "node_home": "$HOME/.pointd",
    "daemon_name": "pointd",
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "apoint",
          "low_gas_price": 5000000000,
          "average_gas_price": 25000000000,
          "high_gas_price": 40000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "apoint"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-mainnet-1.point.space:26657",
          "provider": "Point Network"
        },
        {
          "address": "https://rpc.point.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://rpc.point.indonode.net",
          "provider": "Indonode"
        }
      ],
      "rest": [
        {
          "address": "https://rpc-mainnet-1.point.space:1317",
          "provider": "Point Network"
        },
        {
          "address": "https://api.point.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://api.point.indonode.net",
          "provider": "Indonode"
        }
      ],
      "grpc": [
        {
          "address": "grpc.point.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "https://grpc.point.nodexcapital.com",
          "provider": "⚡NodeX Validator⚡"
        },
        {
          "address": "https://grpc.point.indonode.net:21090",
          "provider": "Indonode"
        }
      ],
      "evm-http-jsonrpc": [
        {
          "address": "https://rpc-mainnet-1.point.space",
          "provider": "Point Network"
        },
        {
          "address": "https://jsonrpc.point.nodestake.top",
          "provider": "NodeStake"
        }
      ]
    },
    "explorers": [
      {
        "kind": "blockscout",
        "url": "https://explorer.pointnetwork.io/",
        "tx_page": "https://explorer.pointnetwork.io/tx/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://cosmos.pointnetwork.io/",
        "tx_page": "https://cosmos.pointnetwork.io/point/tx/${txHash}"
      },
      {
        "kind": "NODEXPLORER",
        "url": "https://explorer.nodexcapital.com/point",
        "tx_page": "https://explorer.nodexcapital.com/point/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/point",
        "tx_page": "https://atomscan.com/point/transactions/${txHash}",
        "account_page": "https://atomscan.com/point/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "provenance",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://provenance.io/",
    "pretty_name": "Provenance",
    "chain_id": "pio-mainnet-1",
    "bech32_prefix": "pb",
    "daemon_name": "provenanced",
    "node_home": "$HOME/Provenance",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 505,
    "fees": {
      "fee_tokens": [
        {
          "denom": "nhash",
          "fixed_min_gas_price": 1905,
          "low_gas_price": 1905,
          "average_gas_price": 2100,
          "high_gas_price": 2500
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "nhash"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.46.13",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "0.30"
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-provenance.takeshi.team/",
          "provider": "TAKESHI"
        },
        {
          "address": "https://rpc.provenance.io/",
          "provider": "Figure"
        },
        {
          "address": "https://rpc-provenance-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://provenance-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://provenance-rpc.ibs.team",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://provenance-rpc.highstakes.ch:26657/",
          "provider": "High Stakes 🇨🇭"
        },
        {
          "address": "https://rpc.provenance.blockval.io/",
          "provider": "Blockval"
        }
      ],
      "rest": [
        {
          "address": "https://api-provenance.takeshi.team",
          "provider": "TAKESHI"
        },
        {
          "address": "https://provenance-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://api.provenance.io",
          "provider": "Figure"
        },
        {
          "address": "https://api-provenance-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://provenance-api.ibs.team",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://provenance-api.highstakes.ch:1317/",
          "provider": "High Stakes 🇨🇭"
        },
        {
          "address": "https://api.provenance.blockval.io",
          "provider": "Blockval"
        }
      ],
      "grpc": [
        {
          "address": "grpc-provenance.takeshi.team:443",
          "provider": "TAKESHI"
        },
        {
          "address": "provenance-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "grpc-provenance-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "grpc.provenance.blockval.io:9290",
          "provider": "Blockval"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Provenance",
        "url": "https://explorer.provenance.io",
        "tx_page": "https://explorer.provenance.io/tx/${txHash}"
      },
      {
        "kind": "hubble",
        "url": "https://hubble.figment.io/provenance/chains/pio-mainnet-1",
        "tx_page": "https://hubble.figment.io/provenance/chains/pio-mainnet-1/${block}/transactions/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/provenance",
        "tx_page": "https://ping.pub/provenance/tx/${txHash}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/provenance",
        "tx_page": "https://www.mintscan.io/provenance/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/provenance/accounts/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/provenance",
        "tx_page": "https://atomscan.com/provenance/transactions/${txHash}",
        "account_page": "https://atomscan.com/provenance/accounts/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/provenance",
        "tx_page": "https://bigdipper.live/provenance/transactions/${txHash}",
        "account_page": "https://bigdipper.live/provenance/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "pundix",
    "chain_id": "PUNDIX",
    "website": "https://pundix.com",
    "pretty_name": "Pundi X Chain",
    "status": "live",
    "network_type": "mainnet",
    "bech32_prefix": "px",
    "daemon_name": "pundixd",
    "node_home": "$HOME/.pundix",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ibc/55367B7B6572631B78A93C66EF9FDFCE87CDE372CC4ED7848DA78C1EB1DCDD78",
          "fixed_min_gas_price": 2000000000000,
          "low_gas_price": 2000000000000,
          "average_gas_price": 2500000000000,
          "high_gas_price": 3000000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ibc/55367B7B6572631B78A93C66EF9FDFCE87CDE372CC4ED7848DA78C1EB1DCDD78"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.45.11"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://px-json.pundix.com",
          "provider": "Pundi X"
        }
      ],
      "rest": [
        {
          "address": "https://px-rest.pundix.com",
          "provider": "Pundi X"
        }
      ],
      "grpc": [
        {
          "address": "https://px-grpc.pundix.com",
          "provider": "Pundi X"
        }
      ]
    },
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-chain-logo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-chain-logo.svg"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-chain-logo.png"
    },
    "explorers": [
      {
        "kind": "starscan",
        "url": "https://starscan.io",
        "tx_page": "https://starscan.io/pundix/tx/${txHash}",
        "account_page": "https://starscan.io/pundix/address/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "quasar",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.quasar.fi/",
    "pretty_name": "Quasar",
    "chain_id": "quasar-1",
    "bech32_prefix": "quasar",
    "daemon_name": "quasarnoded",
    "node_home": "$HOME/.quasarnode",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "staking": {
      "staking_tokens": [
        {
          "denom": "uqsr"
        }
      ]
    },
    "fees": {
      "fee_tokens": [
        {
          "denom": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
          "fixed_min_gas_price": 0.01,
          "low_gas_price": 0.01,
          "average_gas_price": 0.025,
          "high_gas_price": 0.03
        },
        {
          "denom": "ibc/FA0006F056DB6719B8C16C551FC392B62F5729978FC0B125AC9A432DBB2AA1A5",
          "fixed_min_gas_price": 0.01,
          "low_gas_price": 0.01,
          "average_gas_price": 0.025,
          "high_gas_price": 0.03
        },
        {
          "denom": "ibc/FA7775734CC73176B7425910DE001A1D2AD9B6D9E93129A5D0750EAD13E4E63A",
          "fixed_min_gas_price": 0.01,
          "low_gas_price": 0.01,
          "average_gas_price": 0.025,
          "high_gas_price": 0.03
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "v0.45.16",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "v0.31.0"
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png"
    },
    "description": "Quasar is the first decentralized asset management (D.A.M.) platform enabled by IBC. A secure, permissionless, composable, and diversified interchain DeFi experience is finally here.",
    "apis": {
      "rpc": [
        {
          "address": "https://quasar-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://quasar-rpc.polkachu.com",
          "provider": "polkachu"
        },
        {
          "address": "https://rpc-quasar.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://quasar-rpc.enigma-validator.com",
          "provider": "Enigma"
        },
        {
          "address": "https://rpc-quasar.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://quasar-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://quasar.rpc.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://rpc-quasar.validavia.me",
          "provider": "Validavia"
        },
        {
          "address": "https://quasar-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://quasar-rpc.stake-town.com",
          "provider": "StakeTown"
        },
        {
          "address": "https://quasar-rpc.ibs.team",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://quasar-rpc.stakeandrelax.net",
          "provider": "Stake&Relax 🦥"
        },
        {
          "address": "https://quasar-rpc.genznodes.dev",
          "provider": "genznodes"
        }
      ],
      "rest": [
        {
          "address": "https://quasar-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://quasar-api.polkachu.com",
          "provider": "polkachu"
        },
        {
          "address": "https://lcd-quasar.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://api-quasar.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://quasar-lcd.enigma-validator.com",
          "provider": "Enigma"
        },
        {
          "address": "https://quasar-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://quasar.api.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://lcd-quasar.validavia.me",
          "provider": "Validavia"
        },
        {
          "address": "https://quasar-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://quasar-api.stake-town.com",
          "provider": "StakeTown"
        },
        {
          "address": "https://quasar-api.ibs.team",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://quasar-api.stakeandrelax.net",
          "provider": "Stake&Relax 🦥"
        },
        {
          "address": "https://quasar-api.genznodes.dev",
          "provider": "genznodes"
        }
      ],
      "grpc": [
        {
          "address": "https://quasar-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "quasar-grpc.polkachu.com:18290",
          "provider": "polkachu"
        },
        {
          "address": "grpc-quasar.cosmos-spaces.cloud:12890",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "quasar-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "quasar.grpc.kjnodes.com:14890",
          "provider": "kjnodes"
        },
        {
          "address": "quasar-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "quasar-grpc.stake-town.com:443",
          "provider": "StakeTown"
        },
        {
          "address": "quasar-grpc.stakeandrelax.net:18290",
          "provider": "Stake&Relax 🦥"
        },
        {
          "address": "quasar-grpc.genznodes.dev:29090",
          "provider": "genznodes"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/quasar",
        "tx_page": "https://www.mintscan.io/quasar/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/quasar/accounts/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/quasar",
        "tx_page": "https://bigdipper.live/quasar/transactions/${txHash}",
        "account_page": "https://bigdipper.live/quasar/accounts/${accountAddress}"
      }
    ],
    "keywords": [
      "mainnet"
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "quicksilver",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://quicksilver.zone/",
    "pretty_name": "Quicksilver",
    "chain_id": "quicksilver-2",
    "daemon_name": "quicksilverd",
    "node_home": "$HOME/.quicksilverd",
    "bech32_prefix": "quick",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uqck",
          "fixed_min_gas_price": 0.0001,
          "low_gas_price": 0.0001,
          "average_gas_price": 0.0001,
          "high_gas_price": 0.00025
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uqck"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "v0.46.16",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "notional-labs/wasmd v0.29.0-sdk46.0.20221114145317-d6e67fd50956"
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.svg"
    },
    "description": "Liquid Stake your Cosmos assets with your preferred validator and receive liquid staked assets (qASSETs) that you can use for swapping, pooling, lending, and more, all while your original stake earns staking APY from securing the network.",
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-quicksilver.takeshi.team:443",
          "provider": "TAKESHI"
        },
        {
          "address": "https://rpc.quicksilver.zone:443",
          "provider": "Quicksilver"
        },
        {
          "address": "http://quicksilver.statesync.nodersteam.com:16657",
          "provider": "[NODERS]TEAM"
        },
        {
          "address": "https://rpc-quicksilver-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "https://quicksilver-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc-quicksilver.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://m-quicksilver.rpc.utsa.tech",
          "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
        },
        {
          "address": "http://quick.rpc.m.stavr.tech:21027",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://quicksilver-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://quicksilver-rpc.ibs.team:443",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://quicksilver.rpc.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://rpc-quicksilver.architectnodes.com",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://rpc.quicksilver.indonode.net",
          "provider": "Indonode"
        },
        {
          "address": "https://quicksilver-rpc.staketab.org:443",
          "provider": "Staketab"
        },
        {
          "address": "https://quicksilver-rpc.theamsolutions.info",
          "provider": "AM Solutions"
        },
        {
          "address": "https://quicksilver-rpc.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://rpc-quicksilver.mms.team/",
          "provider": "MMS"
        },
        {
          "address": "https://quicksilver-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://quicksilver-rpc.stake-town.com",
          "provider": "StakeTown"
        },
        {
          "address": "https://mainnet-quicksilver-rpc.konsortech.xyz",
          "provider": "KonsorTech"
        },
        {
          "address": "https://quicksilver.tdrsys.com:2053",
          "provider": "TdrSys"
        }
      ],
      "rest": [
        {
          "address": "https://api-quicksilver.takeshi.team:443",
          "provider": "TAKESHI"
        },
        {
          "address": "https://api-quicksilver-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "http://quicksilver.api.nodersteam.com:16017",
          "provider": "[NODERS]TEAM"
        },
        {
          "address": "https://quicksilver-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://api-quicksilver.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://quicksilver-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://m-quicksilver.api.utsa.tech",
          "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
        },
        {
          "address": "https://quick.api.m.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://quicksilver.api.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://rest-quicksilver.architectnodes.com",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://api.quicksilver.indonode.net",
          "provider": "Indonode"
        },
        {
          "address": "https://quicksilver-rest.staketab.org",
          "provider": "Staketab"
        },
        {
          "address": "https://quicksilver-api.theamsolutions.info",
          "provider": "AM Solutions"
        },
        {
          "address": "https://quicksilver-api.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://api-quicksilver.mms.team",
          "provider": "MMS"
        },
        {
          "address": "https://quicksilver-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://quicksilver-api.stake-town.com",
          "provider": "StakeTown"
        },
        {
          "address": "https://mainnet-quicksilver-api.konsortech.xyz",
          "provider": "KonsorTech"
        },
        {
          "address": "https://quicksilver.tdrsys.com",
          "provider": "TdrSys"
        }
      ],
      "grpc": [
        {
          "address": "grpc-quicksilver.takeshi.team:443",
          "provider": "TAKESHI"
        },
        {
          "address": "grpc-quicksilver-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "quicksilver-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "quicksilver.grpc.nodersteam.com:9161",
          "provider": "[NODERS]TEAM"
        },
        {
          "address": "grpc-quicksilver.cosmos-spaces.cloud:3300",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "quicksilver-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "quicksilver.grpc.kjnodes.com:11190",
          "provider": "kjnodes"
        },
        {
          "address": "quick.grpc.m.stavr.tech:9113",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "grpc-quicksilver.architectnodes.com:1443",
          "provider": "Architect Nodes"
        },
        {
          "address": "archive-grpc-quicksilver.huginn.tech:9090",
          "provider": "Huginn"
        },
        {
          "address": "https://grpc.quicksilver.indonode.net:28090",
          "provider": "Indonode"
        },
        {
          "address": "services.staketab.com:9034",
          "provider": "Staketab"
        },
        {
          "address": "https://quicksilver-grpc.theamsolutions.info:9797",
          "provider": "AM Solutions"
        },
        {
          "address": "quicksilver-grpc.w3coins.io:11190",
          "provider": "w3coins"
        },
        {
          "address": "grpc-quicksilver.mms.team:443",
          "provider": "MMS"
        },
        {
          "address": "quicksilver-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "quicksilver-grpc.stake-town.com:443",
          "provider": "StakeTown"
        },
        {
          "address": "mainnet-quicksilver.konsortech.xyz:46090",
          "provider": "KonsorTech"
        },
        {
          "address": "https://quicksilver.tdrsys.com:2083",
          "provider": "TdrSys"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/quicksilver",
        "tx_page": "https://www.mintscan.io/quicksilver/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/quicksilver/accounts/${accountAddress}"
      },
      {
        "kind": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀 explorer",
        "url": "https://exp.utsa.tech/quicksilver",
        "tx_page": "https://exp.utsa.tech/quicksilver/tx/${txHash}"
      },
      {
        "kind": "🔥STAVR🔥 explorer",
        "url": "https://explorer.stavr.tech/quicksilver-mainnet",
        "tx_page": "https://explorer.stavr.tech/quicksilver-mainnet/tx/${txHash}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/quicksilver",
        "tx_page": "https://bigdipper.live/quicksilver/transactions/${txHash}",
        "account_page": "https://bigdipper.live/quicksilver/accounts/${accountAddress}"
      },
      {
        "kind": "Stake-Take",
        "url": "https://explorer.stake-take.com/quicksilver",
        "tx_page": "https://explorer.stake-take.com/quicksilver/tx/${txHash}"
      },
      {
        "kind": "AM Solutions Explorers",
        "url": "https://explorer.theamsolutions.info/quicksilver-main/staking",
        "tx_page": "https://explorer.theamsolutions.info/quicksilver-main/tx/${txHash}"
      },
      {
        "kind": "KonsorTech",
        "url": "https://explorer.konsortech.xyz/quicksilver/staking",
        "tx_page": "https://explorer.konsortech.xyz/quicksilver/tx/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "qwoyn",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://qwoyn.studio/",
    "pretty_name": "Qwoyn",
    "chain_id": "qwoyn-1",
    "bech32_prefix": "qwoyn",
    "daemon_name": "qwoynd",
    "node_home": "$HOME/.qwoynd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uqwoyn",
          "fixed_min_gas_price": 0.03,
          "low_gas_price": 0.03,
          "average_gas_price": 0.05,
          "high_gas_price": 0.075
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uqwoyn"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.47.6",
      "cosmwasm_version": "0.40.0"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.qwoyn.studio:443",
          "provider": "Qwoyn Studios"
        },
        {
          "address": "https://rpc-qwoyn.theamsolutions.info:443",
          "provider": "AM Solutions"
        },
        {
          "address": "https://qwoyn-rpc.staketab.org:443",
          "provider": "Staketab"
        },
        {
          "address": "https://qwoyn-rpc-archive.staketab.org:443",
          "provider": "Staketab archive"
        },
        {
          "address": "https://qwoyn-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc-qwoyn.mzonder.com:443",
          "provider": "MZONDER"
        },
        {
          "address": "https://rpc.qwoyn.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ],
      "grpc": [
        {
          "address": "services.staketab.com:9430",
          "provider": "Staketab"
        },
        {
          "address": "services.staketab.com:2000",
          "provider": "Staketab archive"
        },
        {
          "address": "https://grpc-qwoyn.theamsolutions.info:443",
          "provider": "AM Solutions"
        },
        {
          "address": "https://qwoyn-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "grpc-qwoyn.mzonder.com:443",
          "provider": "MZONDER"
        },
        {
          "address": "https://grpc.qwoyn.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ],
      "rest": [
        {
          "address": "https://rest-qwoyn.theamsolutions.info:443",
          "provider": "AM Solutions"
        },
        {
          "address": "https://qwoyn-rest.staketab.org",
          "provider": "Staketab"
        },
        {
          "address": "https://qwoyn-rest-archive.staketab.org",
          "provider": "Staketab archive"
        },
        {
          "address": "https://qwoyn-api.lavenderfive.com",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://api-qwoyn.mzonder.com",
          "provider": "MZONDER"
        },
        {
          "address": "https://lcd.qwoyn.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping",
        "url": "https://explorer.theamsolutions.info/qwoyn-main/",
        "tx_page": "https://explorer.theamsolutions.info/qwoyn-main/blocks",
        "account_page": "https://explorer.theamsolutions.info/qwoyn-main/account/${accountAddress}"
      },
      {
        "kind": "ping",
        "url": "https://explorer.theamsolutions.info/QWOYN-MAIN",
        "tx_page": "https://explorer.theamsolutions.info/QWOYN-MAIN/tx/${txHash}",
        "account_page": "https://explorer.theamsolutions.info/QWOYN-MAIN/account/${accountAddress}"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png"
    },
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "realio",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://realio.network/",
    "pretty_name": "Realio Network",
    "chain_id": "realionetwork_3301-1",
    "bech32_prefix": "realio",
    "node_home": "$HOME/.realio-network",
    "daemon_name": "realio-networkd",
    "key_algos": [
      "ethsecp256k1"
    ],
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ario",
          "fixed_min_gas_price": 1000000000,
          "low_gas_price": 4000000000,
          "average_gas_price": 5000000000,
          "high_gas_price": 8000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ario"
        },
        {
          "denom": "arst"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.46"
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://realio-rpc.genznodes.dev",
          "provider": "genznodes"
        },
        {
          "address": "https://realio.rpc.bccnodes.com/",
          "provider": "BccNodes"
        },
        {
          "address": "https://rpc-realio-network.nodeist.net",
          "provider": "Nodeist"
        },
        {
          "address": "http://realio.rpc.m.stavr.tech:21097",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://rpc.realio.indonode.net",
          "provider": "Indonode"
        },
        {
          "address": "https://rpc.realio.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://rpc-realio.vinjan.xyz",
          "provider": "vinjan"
        },
        {
          "address": "https://api-realio.sr20de.xyz",
          "provider": "Sr20de"
        },
        {
          "address": "https://rpc.realio.safeblock.space",
          "provider": "Safe Block"
        }
      ],
      "rest": [
        {
          "address": "https://realio-api.genznodes.dev",
          "provider": "genznodes"
        },
        {
          "address": "https://realio.lcd.bccnodes.com/",
          "provider": "BccNodes"
        },
        {
          "address": "https://api-realio-network.nodeist.net",
          "provider": "Nodeist"
        },
        {
          "address": "https://realio.api.m.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://api.realio.indonode.net",
          "provider": "Indonode"
        },
        {
          "address": "https://api.realio.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://api-realio.vinjan.xyz",
          "provider": "vinjan"
        },
        {
          "address": "https://rpc-realio.sr20de.xyz",
          "provider": "Sr20de"
        },
        {
          "address": "https://api.realio.safeblock.space",
          "provider": "Safe Block"
        }
      ],
      "grpc": [
        {
          "address": "realio-grpc.genznodes.dev:30090",
          "provider": "genznodes"
        },
        {
          "address": "realio.grpc.bccnodes.com:10990",
          "provider": "BccNodes"
        },
        {
          "address": "http://realio.grpc.m.stavr.tech:9062",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://grpc-realio.nodeist.net",
          "provider": "Nodeist"
        },
        {
          "address": "https://grpc.realio.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "https://grpc-realio.sr20de.xyz",
          "provider": "Sr20de"
        },
        {
          "address": "grpc.realio.safeblock.space:9090",
          "provider": "Safe Block"
        },
        {
          "address": "realio.grpc.skynodejs.net",
          "provider": "skynodejs"
        }
      ],
      "evm-http-jsonrpc": [
        {
          "address": "https://realio-rpc-evm.genznodes.dev",
          "provider": "genznodes"
        },
        {
          "address": "https://jsonrpc.realio.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://evm-realio.sr20de.xyz",
          "provider": "Sr20de"
        },
        {
          "address": "https://evm.realio.safeblock.space",
          "provider": "Safe Block"
        }
      ]
    },
    "explorers": [
      {
        "kind": "🔥STAVR🔥 Explorer",
        "url": "https://explorer.stavr.tech/realio-mainnet",
        "tx_page": "https://explorer.stavr.tech/realio-mainnet/tx/${txHash}",
        "account_page": "https://explorer.stavr.tech/realio-mainnet/account/{$accountAddress}"
      },
      {
        "kind": "NodeStake Explorer",
        "url": "https://explorer.nodestake.top/realio",
        "tx_page": "https://explorer.nodestake.top/realio/tx/${txHash}",
        "account_page": "https://explorer.nodestake.top/realio/account/{$accountAddress}"
      },
      {
        "kind": "Sr20de Explorer",
        "url": "https://explorer.sr20de.xyz/Realio",
        "tx_page": "https://explorer.sr20de.xyz/Realio/tx/${txHash}",
        "account_page": "https://explorer.sr20de.xyz/Realio/account/{$accountAddress}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/realio",
        "tx_page": "https://explorer.tcnetwork.io/realio/transaction/${txHash}",
        "account_page": "https://explorer.tcnetwork.io/realio/account/${accountAddress}"
      },
      {
        "kind": "Safe Block",
        "url": "https://explorer.safeblock.space/realio",
        "tx_page": "https://explorer.safeblock.space/realio/tx/${txHash}",
        "account_page": "https://explorer.safeblock.space/realio/account/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "rebus",
    "website": "https://www.rebuschain.com/",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Rebus",
    "chain_id": "reb_1111-1",
    "bech32_prefix": "rebus",
    "daemon_name": "rebusd",
    "node_home": "$HOME/.rebusd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "arebus",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.01,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "arebus"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://api.rebuschain.com:26657/",
          "provider": "Rebuschain"
        },
        {
          "address": "https://rebus.rpc.bccnodes.com:443",
          "provider": "BccNodes"
        },
        {
          "address": "https://rebus.rpc.manticore.team:443/",
          "provider": "MantiCore"
        },
        {
          "address": "http://rebus.statesync.nodersteam.com:18657",
          "provider": "[NODERS]TEAM"
        },
        {
          "address": "https://rpc.rebus.nodestake.top/",
          "provider": "NodeStake"
        },
        {
          "address": "http://rebus.rpc.m.stavr.tech:40107",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://rpc-1.rebus.nodes.guru",
          "provider": "Nodes.Guru"
        },
        {
          "address": "https://api.mainnet.rebus.money:26657",
          "provider": "Rebuschain"
        },
        {
          "address": "https://rebus-rpc.brocha.in",
          "provider": "Brochain"
        },
        {
          "address": "https://rebus-rpc.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://rebus-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rebus.rpc.liveraven.net",
          "provider": "LiveRaveN"
        },
        {
          "address": "https://rebus-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ],
      "rest": [
        {
          "address": "https://api.rebuschain.com:1317/",
          "provider": "Rebuschain"
        },
        {
          "address": "http://rebus.api.nodersteam.com:18017",
          "provider": "[NODERS]TEAM"
        },
        {
          "address": "https://rebus.api.manticore.team:443/",
          "provider": "MantiCore"
        },
        {
          "address": "https://api.rebus.nodestake.top/",
          "provider": "NodeStake"
        },
        {
          "address": "https://rebus.api.m.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://api-1.rebus.nodes.guru",
          "provider": "Nodes.Guru"
        },
        {
          "address": "https://api.mainnet.rebus.money:1317",
          "provider": "Rebuschain"
        },
        {
          "address": "https://rebus-rest.brocha.in",
          "provider": "Brochain"
        },
        {
          "address": "https://rebus-api.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://rebus-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rebus.api.liveraven.net",
          "provider": "LiveRaveN"
        },
        {
          "address": "https://rebus-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ],
      "grpc": [
        {
          "address": "rebus.grpc.manticore.team:443",
          "provider": "MantiCore"
        },
        {
          "address": "rebus.grpc.bccnodes.com:14090",
          "provider": "BccNodes"
        },
        {
          "address": "grpc.rebus.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "rebus.grpc.nodersteam.com:9181",
          "provider": "[NODERS]TEAM"
        },
        {
          "address": "http://rebus.grpc.m.stavr.tech:3211",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "rebus-grpc.brocha.in:443",
          "provider": "Brochain"
        },
        {
          "address": "rebus-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rebus.grpc.liveraven.net",
          "provider": "LiveRaveN"
        },
        {
          "address": "rebus-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ]
    },
    "explorers": [
      {
        "kind": "explorers.guru",
        "url": "https://rebus.explorers.guru",
        "tx_page": "https://rebus.explorers.guru/transaction/${txHash}"
      },
      {
        "kind": "NodeStake",
        "url": "https://explorer.nodestake.top/rebus",
        "tx_page": "https://explorer.nodestake.top/rebus/tx/${txHash}"
      },
      {
        "kind": "BccNodes",
        "url": "https://explorer.bccnodes.com/rebus-M",
        "tx_page": "https://explorer.bccnodes.com/rebus-M/tx/${txHash}"
      },
      {
        "kind": "Brochain",
        "url": "https://explorer.brocha.in/rebus",
        "tx_page": "https://explorer.brocha.in/rebus/tx/${txHash}"
      },
      {
        "kind": "🔥STAVR🔥 Explorer",
        "url": "https://explorer.stavr.tech/rebus",
        "tx_page": "https://explorer.stavr.tech/rebus/tx/${txHash}"
      },
      {
        "kind": "tcnetwork",
        "url": "https://rebus.tcnetwork.io",
        "tx_page": "https://rebus.tcnetwork.io/transaction/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/rebus",
        "tx_page": "https://atomscan.com/rebus/transactions/${txHash}",
        "account_page": "https://atomscan.com/rebus/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "regen",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.regen.network/",
    "pretty_name": "Regen",
    "chain_id": "regen-1",
    "bech32_prefix": "regen",
    "daemon_name": "regen",
    "node_home": "$HOME/.regen",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uregen",
          "low_gas_price": 0.015,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uregen"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.46"
    },
    "description": "Regen Network, a platform to originate and invest in high-integrity carbon and biodiversity credits from ecological regeneration projects.",
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-regen.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "http://public-rpc.regen.vitwit.com:26657",
          "provider": "vitwit"
        },
        {
          "address": "https://regen.stakesystems.io:2053",
          "provider": "stakesystems"
        },
        {
          "address": "http://rpc.regen.forbole.com:80",
          "provider": "forbole"
        },
        {
          "address": "https://rpc-regen-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://regen-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://regen-rpc.easy2stake.com",
          "provider": "Easy 2 Stake"
        },
        {
          "address": "https://regen-rpc.theamsolutions.info",
          "provider": "AM Solutions"
        },
        {
          "address": "https://regen-rpc.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://regen-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ],
      "rest": [
        {
          "address": "http://public-rpc.regen.vitwit.com:1317",
          "provider": "vitwit"
        },
        {
          "address": "https://regen.stakesystems.io",
          "provider": "stakesystems"
        },
        {
          "address": "https://api-regen-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://regen-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rest-regen.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://regen-lcd.easy2stake.com",
          "provider": "Easy 2 Stake"
        },
        {
          "address": "https://regen-api.theamsolutions.info",
          "provider": "AM Solutions"
        },
        {
          "address": "https://regen-api.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://regen-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ],
      "grpc": [
        {
          "address": "grpc-regen-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "regen-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "regen-grpc.w3coins.io:22790",
          "provider": "w3coins"
        },
        {
          "address": "regen-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/regen",
        "tx_page": "https://www.mintscan.io/regen/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/regen/accounts/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/regen",
        "tx_page": "https://ping.pub/regen/tx/${txHash}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/regen",
        "tx_page": "https://bigdipper.live/regen/transactions/${txHash}",
        "account_page": "https://bigdipper.live/regen/accounts/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/regen-network",
        "tx_page": "https://atomscan.com/regen-network/transactions/${txHash}",
        "account_page": "https://atomscan.com/regen-network/accounts/${accountAddress}"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg"
    },
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "rizon",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://rizon.world/",
    "pretty_name": "Rizon",
    "chain_id": "titan-1",
    "bech32_prefix": "rizon",
    "daemon_name": "rizond",
    "node_home": "$HOME/.rizon",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uatolo",
          "low_gas_price": 0.025,
          "average_gas_price": 0.025,
          "high_gas_price": 0.035
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uatolo"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpcapi.rizon.world/",
          "provider": "HDAC Technology AG"
        },
        {
          "address": "https://rpc.rizon.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://rizon-rpc.ibs.team/",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://rizon-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ],
      "rest": [
        {
          "address": "https://restapi.rizon.world/",
          "provider": "HDAC Technology AG"
        },
        {
          "address": "https://api.rizon.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://rizon-api.ibs.team/",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://rizon-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ],
      "grpc": [
        {
          "address": "grpc-rizon.mms.team:443",
          "provider": "MMS"
        },
        {
          "address": "rizon-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking",
        "url": "https://app.ezstaking.io/rizon",
        "tx_page": "https://app.ezstaking.io/rizon/txs/${txHash}",
        "account_page": "https://app.ezstaking.io/rizon/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/rizon",
        "tx_page": "https://www.mintscan.io/rizon/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/rizon/accounts/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/rizon",
        "tx_page": "https://ping.pub/rizon/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/rizon",
        "tx_page": "https://atomscan.com/rizon/transactions/${txHash}",
        "account_page": "https://atomscan.com/rizon/accounts/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/rizon",
        "tx_page": "https://bigdipper.live/rizon/transactions/${txHash}",
        "account_page": "https://bigdipper.live/rizon/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.svg"
      }
    ]
  },
  {
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
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
    },
    "description": "Secret Network is the first blockchain with customizable privacy. You get to choose what you share, with whom, and how. This protects users, and empowers developers to build a better Web3.",
    "apis": {
      "grpc-web": [
        {
          "address": "https://wgrpc.secret.express",
          "provider": "Secret Community API - Secret Express"
        }
      ],
      "rpc": [
        {
          "address": "https://rpc.secret.express",
          "provider": "Secret Community API - Secret Express"
        },
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
          "address": "https://secretnetwork-rpc.highstakes.ch:26657/",
          "provider": "High Stakes 🇨🇭"
        }
      ],
      "rest": [
        {
          "address": "https://lcd.secret.express",
          "provider": "Secret Community API - Secret Express"
        },
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
          "address": "https://secretnetwork-api.highstakes.ch:1317/",
          "provider": "High Stakes 🇨🇭"
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
        },
        {
          "address": "https://grpc.secret.express",
          "provider": "Secret Community API - Secret Express"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking",
        "url": "https://app.ezstaking.io/secretnetwork",
        "tx_page": "https://app.ezstaking.io/secretnetwork/txs/${txHash}",
        "account_page": "https://app.ezstaking.io/secretnetwork/account/${accountAddress}"
      },
      {
        "kind": "secret nodes",
        "url": "https://secretnodes.com/secret/chains/secret-4",
        "tx_page": "https://secretnodes.com/secret/chains/secret-4/transactions/${txHash}"
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
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "sei",
    "status": "live",
    "website": "https://www.sei.io/",
    "network_type": "mainnet",
    "pretty_name": "Sei",
    "chain_id": "pacific-1",
    "bech32_prefix": "sei",
    "daemon_name": "seid",
    "node_home": "$HOME/.sei",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "usei",
          "fixed_min_gas_price": 0.1,
          "low_gas_price": 0.1,
          "average_gas_price": 0.1,
          "high_gas_price": 0.25
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "usei"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "sei-cosmos v0.2.63",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "sei-wasmd v0.0.4"
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg"
    },
    "description": "Sei is the fastest Layer 1 blockchain, designed to scale with the industry.",
    "apis": {
      "rpc": [
        {
          "address": "https://sei-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://sei-rpc.polkachu.com/",
          "provider": "polkachu.com"
        },
        {
          "address": "https://sei-rpc.brocha.in/",
          "provider": "Brochain"
        },
        {
          "address": "https://rpc-sei.stingray.plus/",
          "provider": "StingRay"
        },
        {
          "address": "https://rpc-sei.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://sei.rpc.kjnodes.com",
          "provider": "kjnodes"
        }
      ],
      "rest": [
        {
          "address": "https://sei-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://sei-api.polkachu.com/",
          "provider": "polkachu.com"
        },
        {
          "address": "https://sei-rest.brocha.in/",
          "provider": "Brochain"
        },
        {
          "address": "https://api-sei.stingray.plus/",
          "provider": "StingRay"
        },
        {
          "address": "https://lcd-sei.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://sei.api.kjnodes.com",
          "provider": "kjnodes"
        }
      ],
      "grpc": [
        {
          "address": "https://sei-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://sei-grpc.polkachu.com:11990/",
          "provider": "polkachu.com"
        },
        {
          "address": "sei-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://grpc-sei.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "sei.grpc.kjnodes.com:443",
          "provider": "kjnodes"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/sei",
        "tx_page": "https://ping.pub/sei/tx/${txHash}",
        "account_page": "https://ping.pub/sei/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/sei",
        "tx_page": "https://www.mintscan.io/sei/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/sei/accounts/${accountAddress}"
      },
      {
        "kind": "seiscan",
        "url": "https://www.seiscan.app/pacific-1",
        "tx_page": "https://www.seiscan.app/pacific-1/txs/${txHash}",
        "account_page": "https://www.seiscan.app/pacific-1/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "sentinel",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://sentinel.co/",
    "pretty_name": "Sentinel",
    "chain_id": "sentinelhub-2",
    "bech32_prefix": "sent",
    "daemon_name": "sentinelhub",
    "node_home": "$HOME/.sentinelhub",
    "slip44": 118,
    "key_algos": [
      "secp256k1"
    ],
    "fees": {
      "fee_tokens": [
        {
          "denom": "udvpn",
          "low_gas_price": 0.1,
          "average_gas_price": 0.25,
          "high_gas_price": 0.4
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "udvpn"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg"
    },
    "description": "The Sentinel ecosystem is a global network of autonomous dVPN applications that enable private and censorship resistant internet access.",
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-sentinel-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://rpc-sentinel.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://rpc.sentinel.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://rpc.sentinel.quokkastake.io",
          "provider": "🐹 Quokka Stake"
        },
        {
          "address": "https://rpc.dvpn.roomit.xyz",
          "provider": "RoomIT"
        },
        {
          "address": "https://sentinel-rpc.badgerbite.io/",
          "provider": "BadgerBite"
        },
        {
          "address": "https://sentinel-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://sentinel-rpc.validatornode.com/",
          "provider": "ValidatorNode"
        },
        {
          "address": "https://rpc.trinityvalidator.com",
          "provider": "Trinity Validator"
        },
        {
          "address": "https://rpc.sentinelgrowthdao.com",
          "provider": "Sentinel Growth DAO"
        }
      ],
      "rest": [
        {
          "address": "https://api-sentinel-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://lcd-sentinel.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://api.sentinel.quokkastake.io",
          "provider": "🐹 Quokka Stake"
        },
        {
          "address": "https://api.dvpn.roomit.xyz",
          "provider": "RoomIT"
        },
        {
          "address": "https://sentinel-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://sentinel-api.validatornode.com",
          "provider": "ValidatorNode"
        },
        {
          "address": "https://api.trinityvalidator.com",
          "provider": "Trinity Validator"
        },
        {
          "address": "https://api.sentinelgrowthdao.com",
          "provider": "Sentinel Growth DAO"
        }
      ],
      "grpc": [
        {
          "address": "grpc-sentinel-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "sentinel.grpcui.chaintools.host:443",
          "provider": "ChainTools"
        },
        {
          "address": "sentinel-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "grpc.dvpn.roomit.xyz:8443",
          "provider": "RoomIT"
        },
        {
          "address": "sentinel-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/sentinel",
        "tx_page": "https://www.mintscan.io/sentinel/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/sentinel/accounts/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/sentinel",
        "tx_page": "https://atomscan.com/sentinel/transactions/${txHash}",
        "account_page": "https://atomscan.com/sentinel/accounts/${accountAddress}"
      },
      {
        "kind": "RoomIT",
        "url": "https://explorer.tendermint.roomit.xyz/sentinel-mainnet",
        "tx_page": "https://explorer.tendermint.roomit.xyz/sentinel-mainnet/transactions/${txHash}",
        "account_page": "https://explorer.tendermint.roomit.xyz/sentinel-mainnet/accounts/${accountAddress}"
      },
      {
        "kind": "ValidatorNode",
        "url": "https://explorer.validatornode.com/sentinel",
        "tx_page": "https://explorer.validatornode.com/sentinel/tx/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "sge",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "SGE",
    "chain_id": "sgenet-1",
    "bech32_prefix": "sge",
    "daemon_name": "sged",
    "node_home": "$HOME/.sge",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "usge",
          "fixed_min_gas_price": 0.001,
          "low_gas_price": 0.1,
          "average_gas_price": 0.25,
          "high_gas_price": 0.5
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "usge"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "v0.46.17-0.20231114190313-b9164dd660b6"
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://sge-rpc.lavenderfive.com/",
          "provider": "Lavenderfive"
        },
        {
          "address": "https://sge-rpc.polkachu.com/",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc.sge.nodestake.top/",
          "provider": "Nodestake"
        },
        {
          "address": "https://rpc.sge.roomit.xyz/",
          "provider": "RoomIT"
        },
        {
          "address": "https://sge.rpc.m.stavr.tech:443",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://rpc-sge.nodeist.net/",
          "provider": "Nodeist"
        },
        {
          "address": "https://sge-rpc.ramuchi.tech",
          "provider": "ramuchi.tech"
        },
        {
          "address": "https://sge-rpc.stakerhouse.com",
          "provider": "StakerHouse"
        },
        {
          "address": "https://rpc.sge.tcnetwork.io",
          "provider": "TC Network"
        },
        {
          "address": "https://sge-rpc.sr20de.xyz",
          "provider": "Sr20de"
        },
        {
          "address": "https://rpc.sge.safeblock.space",
          "provider": "Safe Block"
        },
        {
          "address": "https://mainnet-sge-rpc.konsortech.xyz",
          "provider": "KonsorTech"
        },
        {
          "address": "https://sge-rpc.genznodes.dev",
          "provider": "genznodes"
        }
      ],
      "rest": [
        {
          "address": "https://sge-api.lavenderfive.com/",
          "provider": "Lavenderfive"
        },
        {
          "address": "https://sge-api.polkachu.com/",
          "provider": "Polkachu"
        },
        {
          "address": "https://api.sge.nodestake.top/",
          "provider": "Nostake"
        },
        {
          "address": "https://api-sge.nodeist.net/",
          "provider": "Nodeist"
        },
        {
          "address": "https://sge.api.m.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://sge-api.ramuchi.tech/",
          "provider": "ramuchi.tech"
        },
        {
          "address": "https://sge-rest.stakerhouse.com",
          "provider": "StakerHouse"
        },
        {
          "address": "https://rest.sge.tcnetwork.io",
          "provider": "TC Network"
        },
        {
          "address": "https://sge-api.sr20de.xyz",
          "provider": "Sr20de"
        },
        {
          "address": "https://api.sge.safeblock.space",
          "provider": "Safe Block"
        },
        {
          "address": "https://mainnet-sge-api.konsortech.xyz",
          "provider": "KonsorTech"
        },
        {
          "address": "https://sge-api.genznodes.dev",
          "provider": "genznodes"
        },
        {
          "address": "https://api.sge.roomit.xyz/",
          "provider": "RoomIT"
        }
      ],
      "grpc": [
        {
          "address": "sge-grpc.lavenderfive.com:443",
          "provider": "Lavenderfive"
        },
        {
          "address": "https://grpc.sge.nodestake.top/",
          "provider": "Nodestake"
        },
        {
          "address": "https://grpc-sge.nodeist.net/",
          "provider": "Nodeist"
        },
        {
          "address": "https://sge-grpc.ramuchi.tech:443",
          "provider": "ramuchi.tech"
        },
        {
          "address": "http://sge.grpc.m.stavr.tech:543",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "sge-grpc.stakerhouse.com:443",
          "provider": "StakerHouse"
        },
        {
          "address": "https://sge-grpc.sr20de.xyz",
          "provider": "Sr20de"
        },
        {
          "address": "mainnet-sge.konsortech.xyz:22090",
          "provider": "KonsorTech"
        },
        {
          "address": "sge-grpc.genznodes.dev:5090",
          "provider": "genznodes"
        },
        {
          "address": "grpc.sge.roomit.xyz:8443",
          "provider": "RoomIT"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://blockexplorer.sgenetwork.io/sge",
        "tx_page": "https://blockexplorer.sgenetwork.io/sge/tx/${txHash}"
      },
      {
        "kind": "nodestake.top",
        "url": "https://explorer.nodestake.top/sge",
        "tx_page": "https://explorer.nodestake.top/sge/tx/${txHash}"
      },
      {
        "kind": "stakerhouse",
        "url": "https://cosmotracker.com/sge",
        "tx_page": "https://cosmotracker.com/sge/tx/${txHash}"
      },
      {
        "kind": "🔥STAVR🔥",
        "url": "https://explorer.stavr.tech/Sge-Mainnet",
        "tx_page": "https://explorer.stavr.tech/Sge-Mainnet/transaction/${txHash}",
        "account_page": "https://explorer.stavr.tech/Sge-Mainnet/account/${accountAddress}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/sge",
        "tx_page": "https://explorer.tcnetwork.io/sge/transaction/${txHash}",
        "account_page": "https://explorer.tcnetwork.io/sge/account/${accountAddress}"
      },
      {
        "kind": "Safe Block",
        "url": "https://explorer.safeblock.space/sge",
        "tx_page": "https://explorer.safeblock.space/sge/tx/${txHash}",
        "account_page": "https://explorer.safeblock.space/sge/account/${accountAddress}"
      },
      {
        "kind": "KonsorTech",
        "url": "https://explorer.konsortech.xyz/sge",
        "tx_page": "https://explorer.konsortech.xyz/sge/tx/${txHash}",
        "account_page": "https://explorer.konsortech.xyz/sge/account/${accountAddress}"
      },
      {
        "kind": "RoomIT",
        "url": "https://explorer.tendermint.roomit.xyz/sge-mainnet",
        "tx_page": "https://explorer.tendermint.roomit.xyz/sge-mainnet/tx/${txHash}",
        "account_page": "https://explorer.tendermint.roomit.xyz/sge-mainnet/account/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "shareledger",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.sharering.network/",
    "pretty_name": "Shareledger",
    "chain_id": "ShareRing-VoyagerNet",
    "bech32_prefix": "shareledger",
    "daemon_name": "shareledger",
    "node_home": "$HOME/.shareledger",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "nshr",
          "fixed_min_gas_price": 0,
          "low_gas_price": 2000,
          "average_gas_price": 3000,
          "high_gas_price": 4000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "nshr"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.45",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "0.27"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.explorer.shareri.ng",
          "provider": "ShareRing"
        }
      ],
      "rest": [
        {
          "address": "https://lcd.explorer.shareri.ng/",
          "provider": "ShareRing"
        }
      ],
      "grpc": [
        {
          "address": "rpc.explorer.shareri.ng:443",
          "provider": "ShareRing"
        }
      ]
    },
    "explorers": [
      {
        "kind": "big dipper",
        "url": "https://explorer.shareri.ng",
        "tx_page": "https://explorer.shareri.ng/transactions/${txHash}",
        "account_page": "https://explorer.shareri.ng/accounts/${accountAddress}"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/chain-logo.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/token.svg"
    },
    "keywords": [
      "id"
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/chain-logo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/token.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "shentu",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.shentu.technology/",
    "pretty_name": "Shentu",
    "chain_id": "shentu-2.2",
    "bech32_prefix": "shentu",
    "daemon_name": "shentud",
    "node_home": "$HOME/.shentud",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uctk",
          "low_gas_price": 0.01,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uctk"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://shenturpc.noopsbycertik.com/",
          "provider": "Shentu"
        },
        {
          "address": "https://shentu-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://shentu-rpc.ramuchi.tech",
          "provider": "ramuchi.tech"
        },
        {
          "address": "https://rpc-shentu-01.stakeflow.io",
          "provider": "Stakeflow"
        },
        {
          "address": "https://shentu-rpc.tienthuattoan.ventures",
          "provider": "TienThuatToan"
        },
        {
          "address": "https://shentu-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://shentu-rpc.highstakes.ch:26657/",
          "provider": "High Stakes 🇨🇭"
        }
      ],
      "rest": [
        {
          "address": "https://rest.noopsbycertik.com/",
          "provider": "Shentu"
        },
        {
          "address": "https://shentu-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://shentu-api.ramuchi.tech",
          "provider": "ramuchi.tech"
        },
        {
          "address": "https://api-shentu-01.stakeflow.io",
          "provider": "Stakeflow"
        },
        {
          "address": "https://shentu-api.tienthuattoan.ventures",
          "provider": "TienThuatToan"
        },
        {
          "address": "https://shentu-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://shentu-api.highstakes.ch:1317/",
          "provider": "High Stakes 🇨🇭"
        }
      ],
      "grpc": [
        {
          "address": "shentu-grpc.polkachu.com:14090",
          "provider": "Polkachu"
        },
        {
          "address": "https://shentu-grpc.ramuchi.tech:12090",
          "provider": "ramuchi.tech"
        },
        {
          "address": "grpc-shentu-01.stakeflow.io:2402",
          "provider": "Stakeflow"
        },
        {
          "address": "shentu-grpc.tienthuattoan.ventures:9490",
          "provider": "TienThuatToan"
        },
        {
          "address": "shentu-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking",
        "url": "https://app.ezstaking.io/shentu",
        "tx_page": "https://app.ezstaking.io/shentu/txs/${txHash}",
        "account_page": "https://app.ezstaking.io/shentu/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/shentu",
        "tx_page": "https://www.mintscan.io/shentu/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/shentu/accounts/${accountAddress}"
      },
      {
        "kind": "Shentu Explorer",
        "url": "https://explorer.shentu.technology/?net=shentu-2.2",
        "tx_page": "https://explorer.shentu.technology/transactions/${txHash}?net=shentu-2.2"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/shentu",
        "tx_page": "https://ping.pub/shentu/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/shentu",
        "tx_page": "https://atomscan.com/shentu/transactions/${txHash}",
        "account_page": "https://atomscan.com/shentu/accounts/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/shentu",
        "tx_page": "https://bigdipper.live/shentu/transactions/${txHash}",
        "account_page": "https://bigdipper.live/shentu/accounts/${accountAddress}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/shentu",
        "account_page": "https://stakeflow.io/shentu/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "sifchain",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://sifchain.finance/",
    "pretty_name": "Sifchain",
    "chain_id": "sifchain-1",
    "bech32_prefix": "sif",
    "daemon_name": "sifnoded",
    "node_home": "$HOME/.sifnoded",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "rowan",
          "low_gas_price": 1000000000000,
          "average_gas_price": 1500000000000,
          "high_gas_price": 2000000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "rowan"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://sifchain-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc-sifchain-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://sifchain-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://sifchain-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ],
      "rest": [
        {
          "address": "https://api-sifchain-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://sifchain-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://sifchain-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://sifchain-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ],
      "grpc": [
        {
          "address": "grpc-sifchain-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "sifchain-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "sifchain-grpc.polkachu.com:13290",
          "provider": "Polkachu"
        },
        {
          "address": "sifchain-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking",
        "url": "https://app.ezstaking.io/sifchain",
        "tx_page": "https://app.ezstaking.io/sifchain/txs/${txHash}",
        "account_page": "https://app.ezstaking.io/sifchain/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/sifchain",
        "tx_page": "https://ping.pub/sifchain/tx/${txHash}"
      },
      {
        "kind": "explorers.guru",
        "url": "https://sifchain.explorers.guru",
        "tx_page": "https://sifchain.explorers.guru/transaction/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/sifchain",
        "tx_page": "https://atomscan.com/sifchain/transactions/${txHash}",
        "account_page": "https://atomscan.com/sifchain/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "six",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "SIX Protocol",
    "chain_id": "sixnet",
    "bech32_prefix": "6x",
    "daemon_name": "sixd",
    "node_home": "$HOME/.six",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "usix",
          "fixed_min_gas_price": 1.25,
          "low_gas_price": 1.25,
          "average_gas_price": 1.5,
          "high_gas_price": 1.75
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "usix"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.45"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://sixnet-rpc.sixprotocol.net:443",
          "provider": ""
        }
      ],
      "rest": [
        {
          "address": "https://sixnet-api.sixprotocol.net:443",
          "provider": ""
        }
      ]
    },
    "explorers": [
      {
        "kind": "sixscan",
        "url": "https://sixscan.io/sixnet",
        "tx_page": "https://sixscan.io/sixnet/tx/${txHash}"
      }
    ],
    "keywords": [
      "sixprotocol",
      "sixnetwork",
      "sixnet",
      "six"
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "sommelier",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://sommelier.finance/",
    "pretty_name": "Sommelier",
    "chain_id": "sommelier-3",
    "bech32_prefix": "somm",
    "daemon_name": "sommelier",
    "node_home": "$HOME/.sommelier",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "usomm",
          "low_gas_price": 0.01,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "usomm"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg"
    },
    "description": "Automated vaults find best-in-class yields while mitigating risk.",
    "apis": {
      "rpc": [
        {
          "address": "https://sommelier-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc-sommelier.pupmos.network",
          "provider": "PUPMØS"
        },
        {
          "address": "https://sommelier-rpc.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://sommelier-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rpc-sommelier.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://somm-rpc.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://sommelier-rpc.w3coins.io",
          "provider": "w3coins"
        }
      ],
      "rest": [
        {
          "address": "https://api-sommelier.pupmos.network",
          "provider": "PUPMØS"
        },
        {
          "address": "https://sommelier-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://sommelier-api.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://api-sommelier.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://sommelier-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://somm-api.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://sommelier-api.w3coins.io",
          "provider": "w3coins"
        }
      ],
      "grpc": [
        {
          "address": "sommelier-grpc.polkachu.com:14190",
          "provider": "Polkachu"
        },
        {
          "address": "sommelier-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "sommelier-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "grpc-sommelier.cosmos-spaces.cloud:2310",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://grpc.sommelier.nodexcapital.com",
          "provider": "⚡NodeX Validator⚡"
        },
        {
          "address": "sommelier-grpc.w3coins.io:14190",
          "provider": "w3coins"
        }
      ]
    },
    "explorers": [
      {
        "kind": "sommscan",
        "url": "https://sommscan.io",
        "tx_page": "https://sommscan.io"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/sommelier",
        "tx_page": "https://www.mintscan.io/sommelier/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/sommelier/accounts/${accountAddress}"
      },
      {
        "kind": "NODEXPLORER",
        "url": "https://explorer.nodexcapital.com/sommelier",
        "tx_page": "https://explorer.nodexcapital.com/sommelier/tx/${txHash}",
        "account_page": "https://explorer.nodexcapital.com/sommelier/account/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/sommelier",
        "tx_page": "https://atomscan.com/sommelier/transactions/${txHash}",
        "account_page": "https://atomscan.com/sommelier/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "source",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.sourceprotocol.io/",
    "pretty_name": "Source",
    "chain_id": "source-1",
    "bech32_prefix": "source",
    "daemon_name": "sourced",
    "node_home": "$HOME/.source",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "usource",
          "fixed_min_gas_price": 0.05,
          "low_gas_price": 0.05,
          "average_gas_price": 0.075,
          "high_gas_price": 0.1
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "usource"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.45",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "0.30"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.source.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://source.rpc.moonbridge.team/",
          "provider": "MoonBridge"
        },
        {
          "address": "https://source.rpc.m.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://rpc-source.nodeist.net",
          "provider": "Nodeist"
        },
        {
          "address": "https://source-mainnet-rpc.itrocket.net:443",
          "provider": "ITRocket"
        },
        {
          "address": "https://rpc-source.sr20de.xyz:443",
          "provider": "Sr20de"
        },
        {
          "address": "https://source-rpc.stake-town.com",
          "provider": "StakeTown"
        },
        {
          "address": "https://rpc.source.tcnetwork.io",
          "provider": "TC Network"
        },
        {
          "address": "https://rpc.source.indonode.net",
          "provider": "Indonode"
        },
        {
          "address": "https://source.rpc.skynodejs.net/",
          "provider": "skynodejs"
        }
      ],
      "rest": [
        {
          "address": "https://api.source.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://api-source.nodeist.net",
          "provider": "Nodeist"
        },
        {
          "address": "https://source.api.m.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://source-mainnet-api.itrocket.net:443",
          "provider": "ITRocket"
        },
        {
          "address": "https://source.api.moonbridge.team/",
          "provider": "MoonBridge"
        },
        {
          "address": "https://api-source.sr20de.xyz",
          "provider": "Sr20de"
        },
        {
          "address": "https://source-api.stake-town.com",
          "provider": "StakeTown"
        },
        {
          "address": "https://rest.source.tcnetwork.io",
          "provider": "TC Network"
        },
        {
          "address": "https://api.source.indonode.net",
          "provider": "Indonode"
        }
      ],
      "grpc": [
        {
          "address": "source-mainnet-grpc.itrocket.net:32090",
          "provider": "ITRocket"
        },
        {
          "address": "http://source.grpc.m.stavr.tech:9590",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://grpc-source.nodeist.net:443",
          "provider": "Nodeist"
        },
        {
          "address": "https://grpc.source.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "https://grpc-source.sr20de.xyz:443",
          "provider": "Sr20de"
        },
        {
          "address": "source-grpc.stake-town.com:443",
          "provider": "StakeTown"
        },
        {
          "address": "https://source.grpc.skynodejs.net",
          "provider": "skynodejs"
        }
      ]
    },
    "explorers": [
      {
        "kind": "🔥STAVR🔥",
        "url": "https://explorer.stavr.tech/Source-Mainnet/",
        "tx_page": "https://explorer.stavr.tech/Source-Mainnet/tx/${txHash}",
        "account_page": "https://explorer.stavr.tech/Source-Mainnet/accounts/${accountAddress}"
      },
      {
        "kind": "Nodeist",
        "url": "https://exp.nodeist.net/source/",
        "tx_page": "https://exp.nodeist.net/source/tx/${txHash}",
        "account_page": "https://exp.nodeist.net/source/accounts/${accountAddress}"
      },
      {
        "kind": "MoonBridge",
        "url": "https://explorer.moonbridge.team/source",
        "tx_page": "https://explorer.moonbridge.team/source/tx/${txHash}",
        "account_page": "https://explorer.moonbridge.team/source/accounts/${accountAddress}"
      },
      {
        "kind": "NodeStake",
        "url": "https://explorer.nodestake.top/source",
        "tx_page": "https://explorer.nodestake.top/source/tx/${txHash}",
        "account_page": "https://explorer.nodestake.top/source/accounts/${accountAddress}"
      },
      {
        "kind": "Sr20de",
        "url": "https://explorer.sr20de.xyz/Source-mainnet",
        "tx_page": "https://explorer.sr20de.xyz/Source-mainnet/tx/${txHash}",
        "account_page": "https://explorer.sr20de.xyz/Source-mainnet/accounts/${accountAddress}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/source",
        "tx_page": "https://explorer.tcnetwork.io/source/transaction/${txHash}"
      },
      {
        "kind": "Indonode",
        "url": "https://explorer.indonode.net/source",
        "tx_page": "https://explorer.indonode.net/source/tx/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg"
    }
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "stafihub",
    "chain_id": "stafihub-1",
    "website": "https://stafihub.io/",
    "pretty_name": "StaFi Hub",
    "status": "live",
    "network_type": "mainnet",
    "bech32_prefix": "stafi",
    "daemon_name": "stafihubd",
    "node_home": "$HOME/.stafihub",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ufis",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ufis"
        }
      ],
      "lock_duration": {
        "time": "1209600s"
      }
    },
    "codebase": {
      "cosmos_sdk_version": "0.46"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://public-rpc1.stafihub.io:443",
          "provider": "StaFiHub"
        },
        {
          "address": "https://public-rpc2.stafihub.io:443",
          "provider": "StaFiHub"
        },
        {
          "address": "https://rpc.stafihub.nodestake.top:443",
          "provider": "NodeStake"
        }
      ],
      "rest": [
        {
          "address": "https://public-rest-rpc1.stafihub.io",
          "provider": "StaFiHub"
        },
        {
          "address": "https://public-rest-rpc2.stafihub.io",
          "provider": "StaFiHub"
        },
        {
          "address": "https://api.stafihub.nodestake.top",
          "provider": "NodeStake"
        }
      ],
      "grpc": [
        {
          "address": "public-grpc-rpc1.stafihub.io:443",
          "provider": "StaFiHub"
        },
        {
          "address": "public-grpc-rpc2.stafihub.io:443",
          "provider": "StaFiHub"
        },
        {
          "address": "grpc.stafihub.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "stafihub.nodejumper.io:9090",
          "provider": "NODEJUMPER"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/stafi",
        "tx_page": "https://www.mintscan.io/stafi/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/stafi/accounts/${accountAddress}"
      },
      {
        "kind": "ping-pub",
        "url": "https://ping.pub/stafihub",
        "tx_page": "https://ping.pub/stafihub/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/stafihub",
        "tx_page": "https://atomscan.com/stafihub/transactions/${txHash}",
        "account_page": "https://atomscan.com/stafihub/accounts/${accountAddress}"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/stafihub-chain-logo.png"
    },
    "keywords": [
      "liquid staking"
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/stafihub-chain-logo.png"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "stargaze",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://stargaze.zone/",
    "pretty_name": "Stargaze",
    "chain_id": "stargaze-1",
    "bech32_prefix": "stars",
    "daemon_name": "starsd",
    "node_home": "$HOME/.starsd",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ustars",
          "fixed_min_gas_price": 1,
          "low_gas_price": 1,
          "average_gas_price": 1.1,
          "high_gas_price": 1.2
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ustars"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg"
    },
    "description": "The premier community-focused blockchain for NFTs. Stargaze empowers creators, developers, collectors, and traders to participate on the platform. The Stargaze chain consists of various NFT-related apps such as a Launchpad, and a Marketplace with offers and auctions.",
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.stargaze-apis.com/",
          "provider": "Stargaze Foundation"
        },
        {
          "address": "https://rpc-stargaze.pupmos.network",
          "provider": "PUPMØS"
        },
        {
          "address": "https://rpc-stargaze.ezstaking.dev",
          "provider": "EZStaking.io"
        },
        {
          "address": "https://stargaze-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc-stargaze-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://stargaze.c29r3.xyz:443/rpc/",
          "provider": "c29r3"
        },
        {
          "address": "https://rpc-stargaze.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://stargaze-rpc.ibs.team",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://rpc-stargaze.d-stake.xyz",
          "provider": "D-stake"
        },
        {
          "address": "https://rpc.stargaze.silentvalidator.com/",
          "provider": "silent"
        },
        {
          "address": "https://rpc-stargaze.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://stargaze-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://stargaze-rpc.ramuchi.tech",
          "provider": "ramuchi.tech"
        },
        {
          "address": "https://stargaze-rpc.staketab.org:443",
          "provider": "Staketab"
        },
        {
          "address": "https://stargaze-rpc.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://stargaze-rpc.stakerhouse.com",
          "provider": "StakerHouse"
        },
        {
          "address": "https://stargaze-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://stargaze-rpc.reece.sh:443",
          "provider": "Reecepbcups"
        },
        {
          "address": "https://rpc.stargaze.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ],
      "rest": [
        {
          "address": "https://rest.stargaze-apis.com/",
          "provider": "Stargaze Foundation"
        },
        {
          "address": "https://api-stargaze.pupmos.network",
          "provider": "PUPMØS"
        },
        {
          "address": "https://api-stargaze.ezstaking.dev",
          "provider": "EZStaking.io"
        },
        {
          "address": "https://api-stargaze-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://stargaze.c29r3.xyz:443/api/",
          "provider": "c29r3"
        },
        {
          "address": "https://stargaze-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://stargaze-api.ibs.team",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://api-stargaze.d-stake.xyz",
          "provider": "D-stake"
        },
        {
          "address": "https://api-stargaze.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://api.stargaze.silentvalidator.com/",
          "provider": "silent"
        },
        {
          "address": "https://stargaze-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://lcd-stargaze.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://stargaze-api.ramuchi.tech",
          "provider": "ramuchi.tech"
        },
        {
          "address": "https://stargaze-rest.staketab.org",
          "provider": "Staketab"
        },
        {
          "address": "https://stargaze-api.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://stargaze-rest.stakerhouse.com",
          "provider": "StakerHouse"
        },
        {
          "address": "https://stargaze-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://stargaze-api.reece.sh:443",
          "provider": "Reecepbcups"
        },
        {
          "address": "https://lcd.stargaze.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ],
      "grpc": [
        {
          "address": "grpc-stargaze-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "stargaze-grpc.polkachu.com:13790",
          "provider": "Polkachu"
        },
        {
          "address": "stargaze-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "grpc-stargaze.cosmos-spaces.cloud:1150",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://stargaze-grpc.ramuchi.tech:9090",
          "provider": "ramuchi.tech"
        },
        {
          "address": "services.staketab.com:9092",
          "provider": "Staketab"
        },
        {
          "address": "stargaze-grpc.w3coins.io:13790",
          "provider": "w3coins"
        },
        {
          "address": "stargaze-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "stargaze-grpc.stakerhouse.com:443",
          "provider": "StakerHouse"
        },
        {
          "address": "https://grpc.stargaze.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking",
        "url": "https://app.ezstaking.io/stargaze",
        "tx_page": "https://app.ezstaking.io/stargaze/txs/${txHash}",
        "account_page": "https://app.ezstaking.io/stargaze/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/stargaze/",
        "tx_page": "https://www.mintscan.io/stargaze/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/stargaze/accounts/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/stargaze",
        "tx_page": "https://ping.pub/stargaze/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/stargaze",
        "tx_page": "https://atomscan.com/stargaze/transactions/${txHash}",
        "account_page": "https://atomscan.com/stargaze/accounts/${accountAddress}"
      },
      {
        "kind": "Starscan",
        "url": "https://starscan.net/",
        "tx_page": "https://starscan.net/stargaze-1/tx/${txHash}",
        "account_page": "https://starscan.net/stargaze-1/address/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "starname",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.starname.me/",
    "pretty_name": "Starname",
    "chain_id": "iov-mainnet-ibc",
    "bech32_prefix": "star",
    "slip44": 234,
    "alternative_slip44s": [
      118
    ],
    "fees": {
      "fee_tokens": [
        {
          "denom": "uiov",
          "low_gas_price": 1,
          "average_gas_price": 2,
          "high_gas_price": 3
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uiov"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg"
    },
    "description": "Starname is the best way to claim your part of the blockchain. You can use it for decentralized identification, payments, ownership and applications. Starname can be integrated into digital wallets, dapps and exchanges.",
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.starname.cosmos.iov.one",
          "provider": "Starname"
        },
        {
          "address": "https://rpc-starname-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://rpc.starname.cosmos.iov.one",
          "provider": "starname.me"
        }
      ],
      "rest": [
        {
          "address": "https://api.starname.cosmos.iov.one",
          "provider": "Starname"
        },
        {
          "address": "https://api-starname-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://api.starname.cosmos.iov.one",
          "provider": "starname.me"
        }
      ],
      "grpc": [
        {
          "address": "grpc-starname-ia.cosmosia.notional.ventures:443",
          "provider": "starname"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/starname",
        "tx_page": "https://ping.pub/starname/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/starname",
        "tx_page": "https://atomscan.com/starname/transactions/${txHash}",
        "account_page": "https://atomscan.com/starname/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "stratos",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.thestratos.org",
    "pretty_name": "Stratos",
    "chain_id": "stratos-1",
    "bech32_prefix": "st",
    "daemon_name": "stchaind",
    "node_home": "$HOME/.stchaind",
    "key_algos": [
      "ethsecp256k1"
    ],
    "extra_codecs": [],
    "slip44": 606,
    "fees": {
      "fee_tokens": [
        {
          "denom": "wei"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.thestratos.org",
          "provider": "thestratos.org"
        },
        {
          "address": "https://rpc.stratos.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "http://stratos.rpc.nodersteam.com:26657/",
          "provider": "[NODERS]TEAM"
        },
        {
          "address": "https://rpc-stratos.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        }
      ],
      "rest": [
        {
          "address": "https://rest.thestratos.org",
          "provider": "thestratos.org"
        },
        {
          "address": "https://api.stratos.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://lcd-stratos.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc.thestratos.org",
          "provider": "thestratos.org"
        },
        {
          "address": "https://grpc.stratos.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "stratos.grpc.nodersteam.com:9090",
          "provider": "[NODERS]TEAM"
        }
      ],
      "evm-http-jsonrpc": [
        {
          "address": "https://web3-rpc.thestratos.org",
          "provider": "thestratos.org"
        },
        {
          "address": "https://jsonrpc.stratos.nodestake.top",
          "provider": "NodeStake"
        }
      ]
    },
    "explorers": [
      {
        "kind": "bigdipper",
        "url": "https://explorer.thestratos.org",
        "tx_page": "https://explorer.thestratos.org/transactions/${txHash}",
        "account_page": "https://explorer.thestratos.org/accounts/${accountAddress}"
      },
      {
        "kind": "blockscout",
        "url": "https://web3-explorer.thestratos.org",
        "tx_page": "https://web3-explorer.thestratos.org/tx/${txHash}",
        "account_page": "https://web3-explorer.thestratos.org/address/${accountAddress}"
      },
      {
        "kind": "NodeStake",
        "url": "https://explorer.nodestake.top/stratos",
        "tx_page": "https://explorer.nodestake.top/stratos/tx/${txHash}",
        "account_page": "https://explorer.nodestake.top/stratos/accounts/${accountAddress}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/stratos",
        "tx_page": "https://explorer.tcnetwork.io/stratos/transaction/${txHash}",
        "account_page": "https://explorer.tcnetwork.io/stratos/account/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "stride",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://stride.zone/",
    "pretty_name": "Stride",
    "chain_id": "stride-1",
    "bech32_prefix": "stride",
    "daemon_name": "strided",
    "node_home": "$HOME/.stride",
    "key_algos": [
      "ed25519"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ustrd",
          "fixed_min_gas_price": 0.0005,
          "low_gas_price": 0.0005,
          "average_gas_price": 0.001,
          "high_gas_price": 0.002
        },
        {
          "denom": "stuatom",
          "fixed_min_gas_price": 0.0001,
          "low_gas_price": 0.0001,
          "average_gas_price": 0.0002,
          "high_gas_price": 0.0005
        },
        {
          "denom": "stuosmo",
          "fixed_min_gas_price": 0.001,
          "low_gas_price": 0.001,
          "average_gas_price": 0.002,
          "high_gas_price": 0.004
        },
        {
          "denom": "stustars",
          "fixed_min_gas_price": 1,
          "low_gas_price": 1,
          "average_gas_price": 1.1,
          "high_gas_price": 1.2
        },
        {
          "denom": "stujuno",
          "fixed_min_gas_price": 0.075,
          "low_gas_price": 0.075,
          "average_gas_price": 0.1,
          "high_gas_price": 0.125
        },
        {
          "denom": "stuluna",
          "fixed_min_gas_price": 0.0125,
          "low_gas_price": 0.0125,
          "average_gas_price": 0.015,
          "high_gas_price": 0.04
        },
        {
          "denom": "staevmos",
          "fixed_min_gas_price": 250000000,
          "low_gas_price": 20000000000,
          "average_gas_price": 25000000000,
          "high_gas_price": 40000000000
        },
        {
          "denom": "stinj",
          "fixed_min_gas_price": 500000000,
          "low_gas_price": 500000000,
          "average_gas_price": 700000000,
          "high_gas_price": 900000000
        },
        {
          "denom": "stucmdx",
          "fixed_min_gas_price": 0.02,
          "low_gas_price": 0.02,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        },
        {
          "denom": "stuumee",
          "fixed_min_gas_price": 0.1,
          "low_gas_price": 0.1,
          "average_gas_price": 0.12,
          "high_gas_price": 0.2
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ustrd"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "v0.47.5-stride-distribution-fix-0"
    },
    "description": "Stride is a blockchain that provides liquidity for staked tokens. Using Stride, you can earn both taking and DeFi yields across the Cosmos IBC ecosystem.",
    "apis": {
      "rpc": [
        {
          "address": "https://stride-rpc.polkachu.com/",
          "provider": "Polkachu"
        },
        {
          "address": "https://stride-rpc.onivalidator.com",
          "provider": "Oni Validator ⛩️"
        },
        {
          "address": "https://stride-rpc.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://rpc.stride.silentvalidator.com/",
          "provider": "silent"
        },
        {
          "address": "https://rpc-stride.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://stride.rpc.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://rpc-stride.pupmos.network",
          "provider": "PUPMØS"
        },
        {
          "address": "https://rpc-stride.architectnodes.com",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://rpc-stride.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://stride-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rpc-stride-01.stakeflow.io",
          "provider": "Stakeflow"
        },
        {
          "address": "https://stride-rpc.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://stride-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://community.nuxian-node.ch:6797/stride/trpc",
          "provider": "PRO Delegators"
        },
        {
          "address": "https://stride-rpc.stakeandrelax.net",
          "provider": "Stake&Relax 🦥"
        },
        {
          "address": "https://rpc.stride.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ],
      "rest": [
        {
          "address": "https://stride-api.polkachu.com/",
          "provider": "Polkachu"
        },
        {
          "address": "https://api-stride.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://stride.api.m.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://stride-api.lavenderfive.com/",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://api.stride.silentvalidator.com/",
          "provider": "silent"
        },
        {
          "address": "https://stride.api.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://api-stride.pupmos.network",
          "provider": "PUPMØS"
        },
        {
          "address": "https://stride-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rest-stride.architectnodes.com",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://lcd-stride.whispernode.com:443",
          "provider": "WhisperNode 🤐"
        },
        {
          "address": "https://api-stride-01.stakeflow.io",
          "provider": "Stakeflow"
        },
        {
          "address": "https://stride-api.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://stride-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://community.nuxian-node.ch:6797/stride/crpc",
          "provider": "PRO Delegators"
        },
        {
          "address": "https://stride-api.stakeandrelax.net",
          "provider": "Stake&Relax 🦥"
        },
        {
          "address": "https://lcd.stride.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ],
      "grpc": [
        {
          "address": "stride.grpc.bccnodes.com:443",
          "provider": "BccNodes"
        },
        {
          "address": "stride-grpc.polkachu.com:12290",
          "provider": "Polkachu"
        },
        {
          "address": "stride-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "http://stride.grpc.m.stavr.tech:9986",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "grpc-stride.cosmos-spaces.cloud:1140",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "stride-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "stride.grpc.kjnodes.com:11690",
          "provider": "kjnodes"
        },
        {
          "address": "grpc-stride-01.stakeflow.io:1802",
          "provider": "Stakeflow"
        },
        {
          "address": "stride-grpc.w3coins.io:12290",
          "provider": "w3coins"
        },
        {
          "address": "stride-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "stride-grpc.stakeandrelax.net:12290",
          "provider": "Stake&Relax 🦥"
        },
        {
          "address": "https://grpc.stride.bronbro.io:443",
          "provider": "Bro_n_Bro"
        }
      ]
    },
    "explorers": [
      {
        "kind": "BccNodes",
        "url": "https://explorer.bccnodes.com/stride-M",
        "tx_page": "https://explorer.bccnodes.com/stride-M/tx/${txHash}",
        "account_page": "https://explorer.bccnodes.com/stride-M/account/${accountAddress}"
      },
      {
        "kind": "EZ Staking",
        "url": "https://app.ezstaking.io/stride",
        "tx_page": "https://app.ezstaking.io/stride/txs/${txHash}",
        "account_page": "https://app.ezstaking.io/stride/account/${accountAddress}"
      },
      {
        "kind": "Apollo",
        "url": "https://apollo.chandrastation.com/stride",
        "tx_page": "https://apollo.chandrastation.com/stride/tx/${txHash}",
        "account_page": "https://apollo.chandrastation.com/stride/account/${accountAddress}"
      },
      {
        "kind": "Stride Ping Pub",
        "url": "https://explorer.stride.zone/stride",
        "tx_page": "https://explorer.stride.zone/stride/tx/${txHash}",
        "account_page": "https://explorer.stride.zone/stride/account/${accountAddress}"
      },
      {
        "kind": "🔥STAVR🔥 Explorer",
        "url": "https://explorer.stavr.tech/stride",
        "tx_page": "https://explorer.stavr.tech/stride/tx/${txHash}",
        "account_page": "https://explorer.stavr.tech/stride/account/${accountAddress}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/stride",
        "tx_page": "https://www.mintscan.io/stride/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/stride/accounts/${accountAddress}"
      },
      {
        "kind": "bigdipper",
        "url": "https://bigdipper.live/stride",
        "tx_page": "https://bigdipper.live/stride/transactions/${txHash}",
        "account_page": "https://bigdipper.live/stride/accounts/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/stride",
        "tx_page": "https://atomscan.com/stride/transactions/${txHash}",
        "account_page": "https://atomscan.com/stride/accounts/${accountAddress}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/stride",
        "account_page": "https://stakeflow.io/stride/accounts/${accountAddress}"
      },
      {
        "kind": "Stake-Take",
        "url": "https://explorer.stake-take.com/stride",
        "tx_page": "https://explorer.stake-take.com/stride/tx/${txHash}",
        "account_page": "https://explorer.stake-take.com/stride/account/${accountAddress}"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stride-chain-logo.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg"
    },
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stride-chain-logo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "tenet",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://tenet.org/",
    "pretty_name": "Tenet",
    "chain_id": "tenet_1559-1",
    "bech32_prefix": "tenet",
    "node_home": "$HOME/.tenetd",
    "daemon_name": "tenetd",
    "key_algos": [
      "ethsecp256k1"
    ],
    "extra_codecs": [
      "ethermint"
    ],
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "atenet",
          "fixed_min_gas_price": 250000000,
          "low_gas_price": 20000000000,
          "average_gas_price": 25000000000,
          "high_gas_price": 40000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "atenet"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.46"
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://tendermint-1.rpc.tenet.org",
          "provider": "tenet"
        },
        {
          "address": "https://tenet-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://tenet-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ],
      "rest": [
        {
          "address": "https://app.rpc.tenet.org",
          "provider": "tenet"
        },
        {
          "address": "https://tenet-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://tenet-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ],
      "grpc": [
        {
          "address": "tenet-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "kichain-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ],
      "evm-http-jsonrpc": [
        {
          "address": "https://rpc.tenet.org",
          "provider": "tenet"
        },
        {
          "address": "https://tenet-evm.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/tenet",
        "tx_page": "https://ping.pub/tenet/tx/${txHash}"
      },
      {
        "kind": "Nodeist Explorer",
        "url": "https://exp.nodeist.net/Tenet",
        "tx_page": "https://exp.nodeist.net/Tenet/tx/${txHash}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/tenet",
        "tx_page": "https://explorer.tcnetwork.io/tenet/transaction/${txHash}",
        "account_page": "https://explorer.tcnetwork.io/tenet/account/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "teritori",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://teritori.com/",
    "pretty_name": "Teritori",
    "chain_id": "teritori-1",
    "daemon_name": "teritorid",
    "node_home": "$HOME/.teritorid",
    "bech32_prefix": "tori",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "utori",
          "low_gas_price": 0,
          "average_gas_price": 0.25,
          "high_gas_price": 0.5
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "utori"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/chain.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/chain.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://teritori-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://teritori-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc.teritori.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://teritori.rpc.m.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://rpc.teritori.silentvalidator.com/",
          "provider": "silent"
        },
        {
          "address": "https://teritori-rpc.brocha.in",
          "provider": "Brochain"
        },
        {
          "address": "https://teritori-rpc.ibs.team",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://teritori.rpc.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://rpc.tori.bh.rocks",
          "provider": "BlockHunters 🎯"
        },
        {
          "address": "https://teritori-rpc.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://m-teritori.rpc.utsa.tech",
          "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
        },
        {
          "address": "https://teritori.rpc.silknodes.io",
          "provider": "Silk Nodes"
        },
        {
          "address": "https://rpc-teritori.pupmos.network",
          "provider": "PUPMØS"
        },
        {
          "address": "https://teritori-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rpc-teritori.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://teritori-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ],
      "rest": [
        {
          "address": "https://teritori-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://teritori-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://api.teritori.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://teritori.api.m.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://api.teritori.silentvalidator.com/",
          "provider": "silent"
        },
        {
          "address": "https://teritori-api.ibs.team",
          "provider": "Inter Blockchain Services"
        },
        {
          "address": "https://teritori.api.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://api.tori.bh.rocks",
          "provider": "BlockHunters 🎯"
        },
        {
          "address": "https://teritori-api.kleomedes.network",
          "provider": "Kleomedes"
        },
        {
          "address": "https://m-teritori.api.utsa.tech",
          "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
        },
        {
          "address": "https://teritori.api.silknodes.io",
          "provider": "Silk Nodes"
        },
        {
          "address": "https://api-teritori.pupmos.network",
          "provider": "PUPMØS"
        },
        {
          "address": "https://teritori-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://rest-teritori.ecostake.com",
          "provider": "ecostake"
        },
        {
          "address": "https://teritori-rest.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ],
      "grpc": [
        {
          "address": "teritori-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "grpc.teritori.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "teritori.grpc.m.stavr.tech:6705",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "teritori-grpc.brocha.in:443",
          "provider": "Brochain"
        },
        {
          "address": "teritori-grpc.polkachu.com:15990",
          "provider": "Polkachu"
        },
        {
          "address": "teritori.grpc.silknodes.io:443",
          "provider": "Silk Nodes"
        },
        {
          "address": "teritori-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "teritori.grpc.kjnodes.com:11990",
          "provider": "kjnodes"
        },
        {
          "address": "teritori-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking",
        "url": "https://app.ezstaking.io/teritori",
        "tx_page": "https://app.ezstaking.io/teritori/txs/${txHash}",
        "account_page": "https://app.ezstaking.io/teritori/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://explorer.teritori.com/teritori",
        "tx_page": "https://explorer.teritori.com/teritori/tx/${txHash}"
      },
      {
        "kind": "🔥STAVR🔥 Explorer",
        "url": "https://explorer.stavr.tech/teritori-main",
        "tx_page": "https://explorer.stavr.tech/teritori-main/tx/${txHash}"
      },
      {
        "kind": "guru",
        "url": "https://teritori.explorers.guru/",
        "tx_page": "https://teritori.explorers.guru/transaction/${txHash}"
      },
      {
        "kind": "Brochain",
        "url": "https://explorer.brocha.in/teritori",
        "tx_page": "https://explorer.brocha.in/teritori/tx/${txHash}"
      },
      {
        "kind": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀",
        "url": "https://exp.utsa.tech/teritori",
        "tx_page": "https://exp.utsa.tech/teritori/tx/${txHash}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/teritori",
        "tx_page": "https://www.mintscan.io/teritori/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/teritori/accounts/${accountAddress}"
      },
      {
        "kind": "TC Network",
        "url": "https://explorer.tcnetwork.io/teritori",
        "tx_page": "https://explorer.tcnetwork.io/teritori/transaction/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/teritori",
        "tx_page": "https://atomscan.com/teritori/transactions/${txHash}",
        "account_page": "https://atomscan.com/teritori/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/chain.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/chain.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "terpnetwork",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Terp-Network",
    "chain_id": "morocco-1",
    "bech32_prefix": "terp",
    "daemon_name": "terp",
    "node_home": "$HOME/.terp",
    "codebase": {},
    "fees": {
      "fee_tokens": [
        {
          "denom": "uthiol",
          "fixed_min_gas_price": 0.05
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uterp"
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/logo.png"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-terp.zenchainlabs.io/",
          "provider": "ZenChainLabs"
        },
        {
          "address": "https://rpc.terp.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "https://terp-mainnet-rpc.itrocket.net:443",
          "provider": "itrocket.net"
        },
        {
          "address": " https://terp.rpc.nodex.one:443",
          "provider": "nodex.one"
        }
      ],
      "rest": [
        {
          "address": "https://api-terp.zenchainlabs.io:443",
          "provider": "ZenChainLabs"
        },
        {
          "address": "https://rpc.terp.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "https://terp-mainnet-api.itrocket.net:443",
          "provider": "itrocket.net"
        },
        {
          "address": " https://terp.api.nodex.one:443",
          "provider": "nodex.one"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc.terp.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "terp-mainnet-grpc.itrocket.net:13090",
          "provider": "itrocket.net"
        },
        {
          "address": " https://terp.grpc.nodex.one:443",
          "provider": "nodex.one"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/terp",
        "tx_page": "https://ping.pub/terp/tx/${txHash}",
        "account_page": "https://ping.pub/terp/account/{$accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://explorer.nodestake.top",
        "tx_page": "https://explorer.nodestake.top/terp/tx/${txHash}",
        "account_page": "https://explorer.nodestake.top/terp/account/{$accountAddress}"
      },
      {
        "kind": "🔥STAVR🔥",
        "url": "https://explorer.stavr.tech/Terp-Mainnet",
        "tx_page": "https://explorer.stavr.tech/Terp-Mainnet/tx/${txHash}",
        "account_page": "https://explorer.stavr.tech/Terp-Mainnet/account/{$accountAddress}"
      },
      {
        "kind": "ZenChainLabs",
        "url": "https://terp.zenscan.io/",
        "tx_page": "https://terp.zenscan.io/transaction.php?hash=${txHash}",
        "account_page": "https://terp.zenscan.io/address.php?address=${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/logo.png"
      }
    ],
    "slip44": 118
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "terra",
    "status": "live",
    "network_type": "mainnet",
    "pretty_name": "Terra Classic",
    "chain_id": "columbus-5",
    "daemon_name": "terrad",
    "node_home": "$HOME/.terra",
    "bech32_prefix": "terra",
    "slip44": 330,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uluna",
          "low_gas_price": 28.325,
          "average_gas_price": 28.325,
          "high_gas_price": 50
        },
        {
          "denom": "usdr",
          "low_gas_price": 0.52469,
          "average_gas_price": 0.52469,
          "high_gas_price": 0.52469
        },
        {
          "denom": "uusd",
          "low_gas_price": 0.75,
          "average_gas_price": 0.75,
          "high_gas_price": 0.75
        },
        {
          "denom": "ukrw",
          "low_gas_price": 850,
          "average_gas_price": 850,
          "high_gas_price": 850
        },
        {
          "denom": "umnt",
          "low_gas_price": 2142.855,
          "average_gas_price": 2142.855,
          "high_gas_price": 2142.855
        },
        {
          "denom": "ueur",
          "low_gas_price": 0.625,
          "average_gas_price": 0.625,
          "high_gas_price": 0.625
        },
        {
          "denom": "ucny",
          "low_gas_price": 4.9,
          "average_gas_price": 4.9,
          "high_gas_price": 4.9
        },
        {
          "denom": "ujpy",
          "low_gas_price": 81.85,
          "average_gas_price": 81.85,
          "high_gas_price": 81.85
        },
        {
          "denom": "ugbp",
          "low_gas_price": 0.55,
          "average_gas_price": 0.55,
          "high_gas_price": 0.55
        },
        {
          "denom": "uinr",
          "low_gas_price": 54.4,
          "average_gas_price": 54.4,
          "high_gas_price": 54.4
        },
        {
          "denom": "ucad",
          "low_gas_price": 0.95,
          "average_gas_price": 0.95,
          "high_gas_price": 0.95
        },
        {
          "denom": "uchf",
          "low_gas_price": 0.7,
          "average_gas_price": 0.7,
          "high_gas_price": 0.7
        },
        {
          "denom": "uaud",
          "low_gas_price": 0.95,
          "average_gas_price": 0.95,
          "high_gas_price": 0.95
        },
        {
          "denom": "usgd",
          "low_gas_price": 1,
          "average_gas_price": 1,
          "high_gas_price": 1
        },
        {
          "denom": "uthb",
          "low_gas_price": 23.1,
          "average_gas_price": 23.1,
          "high_gas_price": 23.1
        },
        {
          "denom": "usek",
          "low_gas_price": 6.25,
          "average_gas_price": 6.25,
          "high_gas_price": 6.25
        },
        {
          "denom": "unok",
          "low_gas_price": 6.25,
          "average_gas_price": 6.25,
          "high_gas_price": 6.25
        },
        {
          "denom": "udkk",
          "low_gas_price": 4.5,
          "average_gas_price": 4.5,
          "high_gas_price": 4.5
        },
        {
          "denom": "uidr",
          "low_gas_price": 10900,
          "average_gas_price": 10900,
          "high_gas_price": 10900
        },
        {
          "denom": "uphp",
          "low_gas_price": 38,
          "average_gas_price": 38,
          "high_gas_price": 38
        },
        {
          "denom": "uhkd",
          "low_gas_price": 5.85,
          "average_gas_price": 5.85,
          "high_gas_price": 5.85
        },
        {
          "denom": "umyr",
          "low_gas_price": 3,
          "average_gas_price": 3,
          "high_gas_price": 3
        },
        {
          "denom": "utwd",
          "low_gas_price": 20,
          "average_gas_price": 20,
          "high_gas_price": 20
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
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.terrarebels.net",
          "provider": "Terra Rebels"
        },
        {
          "address": "https://terra-classic-rpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://rpc-terra-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://terraclassic-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://terraclassic-rpc-server-01.stakely.io",
          "provider": "Stakely"
        }
      ],
      "rest": [
        {
          "address": "https://lcd.terrarebels.net",
          "provider": "Terra Rebels"
        },
        {
          "address": "https://terra-classic-lcd.publicnode.com",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "https://api-terra-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://terraclassic-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://terraclassic-lcd-server-01.stakely.io",
          "provider": "Stakely"
        }
      ],
      "grpc": [
        {
          "address": "grpc.terrarebels.net",
          "provider": "Terra Rebels"
        },
        {
          "address": "terra-classic-grpc.publicnode.com:443",
          "provider": "Allnodes ⚡️ Nodes & Staking"
        },
        {
          "address": "grpc-terra-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "terraclassic-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/terra-luna",
        "tx_page": "https://ping.pub/terra-luna/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/terra",
        "tx_page": "https://atomscan.com/terra/transactions/${txHash}",
        "account_page": "https://atomscan.com/terra/accounts/${accountAddress}"
      },
      {
        "kind": "finder",
        "url": "https://finder.terra.money/classic",
        "tx_page": "https://finder.terra.money/classic/tx/${txHash}",
        "account_page": "https://finder.terra.money/classic/address/${accountAddress}"
      },
      {
        "kind": "finder",
        "url": "https://finder.terrarebels.net/classic",
        "tx_page": "https://finder.terrarebels.net/classic/tx/${txHash}",
        "account_page": "https://finder.terrarebels.net/classic/address/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg"
      }
    ]
  },
  {
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
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "akashtestnet",
    "status": "live",
    "network_type": "testnet",
    "website": "https://akash.network/",
    "pretty_name": "Sandbox",
    "chain_id": "sandbox-01",
    "bech32_prefix": "akash",
    "daemon_name": "akash",
    "node_home": "$HOME/.akash",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uakt",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.025,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uakt"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.sandbox-01.aksh.pw:443",
          "provider": "akash"
        }
      ],
      "rest": [
        {
          "address": "https://api.sandbox-01.aksh.pw:443",
          "provider": "akash"
        }
      ],
      "grpc": [
        {
          "address": "grpc.sandbox-01.aksh.pw:9090",
          "provider": "akash"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://explorer.sandbox-01.aksh.pw/akash",
        "tx_page": "https://explorer.sandbox-01.aksh.pw/akash/tx/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "archwaytestnet",
    "chain_id": "constantine-3",
    "pretty_name": "Archway Testnet",
    "status": "live",
    "network_type": "testnet",
    "website": "https://archway.io",
    "bech32_prefix": "archway",
    "daemon_name": "archwayd",
    "node_home": "$HOME/.archway",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "aconst",
          "low_gas_price": 1000000000000,
          "average_gas_price": 1500000000000,
          "high_gas_price": 2000000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "aconst"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/archwaytestnet/images/ArchwayBrandmark.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/archwaytestnet/images/ArchwayBrandmark.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.constantine.archway.tech",
          "provider": "Archway"
        },
        {
          "address": "https://archway-testnet-rpc.polkachu.com",
          "provider": "Polkachu"
        }
      ],
      "rest": [
        {
          "address": "https://api.constantine.archway.tech",
          "provider": "Archway"
        }
      ]
    },
    "explorers": [
      {
        "kind": "archwayscan",
        "url": "https://testnet.archway.explorers.guru",
        "tx_page": "https://testnet.archway.explorers.guru/transaction/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/archwaytestnet/images/ArchwayBrandmark.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/archwaytestnet/images/ArchwayBrandmark.svg"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "arkeonetworktestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Arkeo Network",
    "chain_id": "arkeo",
    "bech32_prefix": "tarkeo",
    "daemon_name": "arkeod",
    "node_home": "$HOME/.arkeo",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uarkeo"
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uarkeo"
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://arkeonetwork-testnet.nodejumper.io:26657",
          "provider": "NODEJUMPER"
        },
        {
          "address": "https://test-arkeo-rpc.kynraze.com",
          "provider": "kynraze"
        },
        {
          "address": "https://testnet-arkeo-rpc.lavenderfive.com",
          "provider": "lavenderfive"
        },
        {
          "address": "https://arkeo-rpc.siriusnodes.uk",
          "provider": "siriusnodes"
        },
        {
          "address": "http://seed.arkeo.network:26657",
          "provider": "arkeo"
        }
      ],
      "rest": [
        {
          "address": "https://arkeonetwork-testnet.nodejumper.io:1317",
          "provider": "NODEJUMPER"
        },
        {
          "address": "https://test-arkeo-api.kynraze.com",
          "provider": "kynraze"
        },
        {
          "address": "https://testnet-arkeo-api.lavenderfive.com",
          "provider": "lavenderfive"
        },
        {
          "address": "https://arkeo-api.siriusnodes.uk",
          "provider": "siriusnodes"
        },
        {
          "address": "http://seed.arkeo.network:1317",
          "provider": "arkeo"
        }
      ],
      "grpc": [
        {
          "address": "https://arkeonetwork-testnet.nodejumper.io:9090/",
          "provider": "NODEJUMPER"
        }
      ]
    },
    "explorers": [
      {
        "url": "https://explorer.nodexcapital.com/arkeo",
        "tx_page": "https://explorer.nodexcapital.com/arkeo/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "artelatestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Artela Testnet",
    "chain_id": "artela_11820-1",
    "bech32_prefix": "art",
    "daemon_name": "artelad",
    "node_home": "$HOME/.artelad",
    "key_algos": [
      "ethsecp256k1"
    ],
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uart",
          "low_gas_price": 20000000000,
          "average_gas_price": 25000000000,
          "high_gas_price": 40000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uart"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.47"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://testnet-rpc1.artela.network",
          "provider": "Artela Foundation"
        },
        {
          "address": "https://testnet-rpc2.artela.network",
          "provider": "Artela Foundation"
        }
      ],
      "rest": [
        {
          "address": "https://testnet-rpc1.artela.network",
          "provider": "Artela Foundation"
        },
        {
          "address": "https://testnet-rpc2.artela.network",
          "provider": "Artela Foundation"
        }
      ],
      "grpc": [
        {
          "address": "https://testnet-rpc1.artela.network",
          "provider": "Artela Foundation"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Artela Network",
        "url": "https://testnet-scan.artela.network",
        "tx_page": "https://testnet-scan.artela.network/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "auratestnet",
    "status": "live",
    "network_type": "testnet",
    "website": "https://aura.network/",
    "pretty_name": "Aura Euphoria Network",
    "chain_id": "euphoria-2",
    "bech32_prefix": "aura",
    "daemon_name": "aurad",
    "node_home": "$HOME/.aura",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ueaura",
          "fixed_min_gas_price": 0.001,
          "low_gas_price": 0.001,
          "average_gas_price": 0.002,
          "high_gas_price": 0.0025
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ueaura"
        }
      ],
      "lock_duration": {
        "time": "172800s"
      }
    },
    "codebase": {
      "cosmos_sdk_version": "0.47.4",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "0.41.0"
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.euphoria.aura.network/",
          "provider": "Aura Network Foundation"
        }
      ],
      "rest": [
        {
          "address": "https://lcd.euphoria.aura.network/",
          "provider": "Aura Network Foundation"
        }
      ],
      "grpc": [
        {
          "address": "http://grpc.euphoria.aura.network:9090",
          "provider": "Aura Network Foundation"
        }
      ]
    },
    "explorers": [
      {
        "kind": "aurascan",
        "url": "https://euphoria.aurascan.io",
        "tx_page": "https://euphoria.aurascan.io/transaction/${txHash}",
        "account_page": "https://euphoria.aurascan.io/account/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "axelartestnet",
    "chain_id": "axelar-testnet-lisbon-3",
    "pretty_name": "Axelar Testnet",
    "status": "live",
    "network_type": "testnet",
    "website": "https://axelar.network/",
    "bech32_prefix": "axelar",
    "daemon_name": "axelard",
    "node_home": "$HOME/.axelard",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uaxl",
          "low_gas_price": 0.007,
          "average_gas_price": 0.007,
          "high_gas_price": 0.01
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uaxl"
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-axelar-testnet.imperator.co:443",
          "provider": "Imperator.co"
        },
        {
          "address": "https://axelartest-rpc.quickapi.com/",
          "provider": "Quickapi"
        }
      ],
      "rest": [
        {
          "address": "https://lcd-axelar-testnet.imperator.co:443",
          "provider": "Imperator.co"
        },
        {
          "address": "https://axelartest-lcd.quickapi.com/",
          "provider": "Quickapi"
        }
      ]
    },
    "explorers": [
      {
        "kind": "axelarscan",
        "url": "https://testnet.axelarscan.io",
        "tx_page": "https://testnet.axelarscan.io/tx/${txHash}"
      },
      {
        "kind": "mintscan",
        "url": "https://testnet.mintscan.io/axelar-testnet",
        "tx_page": "https://testnet.mintscan.io/axelar-testnet/txs/${txHash}",
        "account_page": "https://testnet.mintscan.io/axelar-testnet/account/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "babylontestnet",
    "status": "live",
    "website": "https://www.babylonchain.io",
    "network_type": "testnet",
    "pretty_name": "Babylon Testnet",
    "chain_id": "bbn-test1",
    "bech32_prefix": "bbn",
    "daemon_name": "babylond",
    "node_home": "$HOME/.babylond",
    "key_algos": [
      "secp256k1"
    ],
    "fees": {
      "fee_tokens": [
        {
          "denom": "ubbn"
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ubbn"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/logo.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "rpc.testnet.babylonchain.io:26657",
          "provider": "Babylon foundation"
        }
      ],
      "rest": [
        {
          "address": "rpc.testnet.babylonchain.io:1317",
          "provider": "Babylon foundation"
        }
      ],
      "grpc": []
    },
    "explorers": [
      {
        "kind": "babylonscan",
        "url": "https://babylonscan.io"
      },
      {
        "kind": "explorers.guru",
        "url": "https://babylon.explorers.guru",
        "tx_page": "https://babylon.explorers.guru/transaction/${txHash}"
      }
    ],
    "images": [
      {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/logo.svg"
      }
    ],
    "slip44": 118
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "bitcannadevnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "BitCanna Devnet-1",
    "chain_id": "bitcanna-dev-1",
    "bech32_prefix": "bcna",
    "daemon_name": "bcnad",
    "node_home": "$HOME/.bcna",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ubcna",
          "fixed_min_gas_price": 0.001
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-testnet.bitcanna.io",
          "provider": "bitcanna"
        },
        {
          "address": "https://bitcanna-testnet.rpc.kjnodes.com/",
          "provider": "kjnodes.com"
        },
        {
          "address": "https://testnet-bitcanna-rpc.konsortech.xyz/",
          "provider": "konsortech.xyz"
        },
        {
          "address": "https://rpc.bitcanna-dev-1.bitcanna.aviaone.com/",
          "provider": "aviaone.com"
        },
        {
          "address": "https://bitcanna-testnet.nodejumper.io:443",
          "provider": "NODEJUMPER"
        }
      ],
      "rest": [
        {
          "address": "https://lcd-testnet.bitcanna.io",
          "provider": "bitcanna"
        },
        {
          "address": "https://testnet-bitcanna-api.konsortech.xyz/",
          "provider": "konsortech.xyz"
        },
        {
          "address": "https://bitcanna.api.dev.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://api.bitcanna-dev-1.bitcanna.aviaone.com/",
          "provider": "aviaone.com"
        },
        {
          "address": "https://bitcanna-testnet.api.kjnodes.com/",
          "provider": "kjnodes.com"
        },
        {
          "address": "https://bitcanna-testnet.nodejumper.io:1317",
          "provider": "NODEJUMPER"
        }
      ],
      "grpc": [
        {
          "address": "http://devnet-1.bitcanna.io:9090/",
          "provider": "bitcanna"
        },
        {
          "address": "http://bitcanna-testnet.grpc.kjnodes.com:42090/",
          "provider": "kjnodes.com"
        },
        {
          "address": "http://bitcanna.grpc.dev.stavr.tech:2901",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://bitcanna-testnet.nodejumper.io:9090",
          "provider": "NODEJUMPER"
        }
      ]
    },
    "explorers": [
      {
        "url": "https://explorer.thesilverfox.pro/bitcanna",
        "tx_page": "https://explorer.thesilverfox.pro/bitcanna/tx/${txHash}"
      },
      {
        "url": "https://testnets-cosmos.mintthemoon.xyz/bitcanna",
        "tx_page": "https://testnets-cosmos.mintthemoon.xyz/bitcanna/tx/${txHash}"
      },
      {
        "kind": "🔥STAVR🔥",
        "url": "https://explorer.stavr.tech/Bitcanna-DEV",
        "tx_page": "https://explorer.stavr.tech/Bitcanna-DEV/tx/${txHash}",
        "account_page": "https://explorer.stavr.tech/Bitcanna-DEV/account/${accountAddress}"
      },
      {
        "url": "https://explorer.kjnodes.com/bitcanna-testnet",
        "tx_page": "https://explorer.kjnodes.com/bitcanna-testnet/tx/${txHash}"
      },
      {
        "url": "https://explorer.stavr.tech/bitcanna-dev",
        "tx_page": "https://explorer.stavr.tech/bitcanna-dev/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "bitcannadevnet2",
    "status": "live",
    "network_type": "devnet",
    "pretty_name": "BitCanna Devnet-6 SDK v0.46.x",
    "chain_id": "bitcanna-dev-6",
    "bech32_prefix": "bcna",
    "daemon_name": "bcnad",
    "node_home": "$HOME/.bcna",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ubcna",
          "fixed_min_gas_price": 0.001
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-devnet-6.bitcanna.io/",
          "provider": "bitcanna"
        }
      ],
      "grpc": [
        {
          "address": "http://devnet-6.bitcanna.io:9090",
          "provider": "bitcanna"
        }
      ],
      "rest": [
        {
          "address": "https://lcd-devnet-6.bitcanna.io/",
          "provider": "bitcanna"
        }
      ]
    },
    "explorers": [
      {
        "url": "https://explorer-devnet-6.bitcanna.io",
        "tx_page": "https://explorer-devnet-6.bitcanna.io/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "cascadiatestnet",
    "status": "live",
    "network_type": "testnet",
    "website": "https://cascadia.foundation/",
    "pretty_name": "Cascadia",
    "chain_id": "cascadia_6102-1",
    "bech32_prefix": "cascadia",
    "daemon_name": "cascadiad",
    "node_home": "$HOME/.cascadiad",
    "key_algos": [
      "ethsecp256k1"
    ],
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "aCC",
          "fixed_min_gas_price": 0,
          "low_gas_price": 7,
          "average_gas_price": 10,
          "high_gas_price": 15
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "aCC"
        }
      ],
      "lock_duration": {
        "time": "1814400s"
      }
    },
    "codebase": {
      "cosmos_sdk_version": "0.46.10",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "0.30"
    },
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cascadiatestnet/images/cascadia.png",
        "theme": {
          "primary_color_hex": "#004A96"
        }
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cascadiatestnet/images/cascadia.png"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.cascadia.foundation:443",
          "provider": "cascadia"
        },
        {
          "address": "https://cscd-rpc.systemd.run:443",
          "provider": "systemd"
        },
        {
          "address": "https://api.cascadia-t.indonode.net:443",
          "provider": "Indonode"
        },
        {
          "address": "https://rpc-test.cascadia.hexnodes.co:443",
          "provider": "Hexnodes"
        },
        {
          "address": "https://cascadia.rpc.liveraven.net:443",
          "provider": "LiveRaveN"
        }
      ],
      "grpc": [
        {
          "address": "grpc.cascadia.foundation:443",
          "provider": "cascadia"
        },
        {
          "address": "cscd-grpc.systemd.run:443",
          "provider": "systemd"
        },
        {
          "address": "grpc.cascadia-t.indonode.net:43090",
          "provider": "Indonode"
        },
        {
          "address": "grpc-test.cascadia.hexnodes.co:19090",
          "provider": "Hexnodes"
        },
        {
          "address": "cascadia.grpc.liveraven.net:443",
          "provider": "LiveRaveN"
        }
      ],
      "rest": [
        {
          "address": "https://lcd.cascadia.foundation",
          "provider": "cascadia"
        },
        {
          "address": "https://cscd-api.systemd.run",
          "provider": "systemd"
        },
        {
          "address": "https://api.cascadia-t.indonode.net/",
          "provider": "Indonode"
        },
        {
          "address": "https://lcd-test.cascadia.hexnodes.co",
          "provider": "Hexnodes"
        },
        {
          "address": "https://cascadia.api.liveraven.net:443",
          "provider": "LiveRaveN"
        }
      ]
    },
    "explorers": [
      {
        "kind": "validator_explorer",
        "url": "https://validator.cascadia.foundation/",
        "tx_page": "https://validator.cascadia.foundation/transactions/${txHash}",
        "account_page": "https://validator.cascadia.foundation/accounts/${accountAddress}"
      },
      {
        "kind": "block_explorer",
        "url": "https://explorer.cascadia.foundation/",
        "tx_page": "https://explorer.cascadia.foundation/tx/${txHash}",
        "account_page": "https://explorer.cascadia.foundation/address/${accountAddress}"
      }
    ],
    "keywords": [
      "cascadia",
      "cosmos",
      "evm",
      "cybernetic"
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "celestiatestnet",
    "chain_id": "blockspacerace-0",
    "pretty_name": "Blockspace Race Testnet",
    "status": "live",
    "network_type": "testnet",
    "bech32_prefix": "celestia",
    "daemon_name": "celestia-appd",
    "node_home": "$HOME/.celestia-app",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "utia",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-blockspacerace.pops.one/",
          "provider": "P-OPs"
        }
      ],
      "rest": [
        {
          "address": "https://celestia-blockspacerace-rest.brocha.in",
          "provider": "Brochain"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Mintscan",
        "url": "https://testnet.mintscan.io/celestia-incentivized-testnet",
        "tx_page": "https://testnet.mintscan.io/celestia-incentivized-testnet/txs/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "celestiatestnet2",
    "chain_id": "arabica-10",
    "pretty_name": "Arabica Testnet",
    "status": "live",
    "network_type": "devnet",
    "bech32_prefix": "celestia",
    "daemon_name": "celestia-appd",
    "node_home": "$HOME/.celestia-app",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "utia",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.01,
          "average_gas_price": 0.02,
          "high_gas_price": 0.1
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://consensus-full.celestia-arabica-10.com/",
          "provider": "Celestia Labs"
        }
      ],
      "rest": [
        {
          "address": "https://api.consensus.celestia-arabica-10.com/",
          "provider": "Celestia Labs"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Ping.Pub",
        "url": "https://explorer.celestia-arabica-10.com/arabica-10",
        "tx_page": "https://explorer.celestia-arabica-10.com/arabica-10/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "celestiatestnet3",
    "chain_id": "mocha-4",
    "pretty_name": "Mocha Testnet",
    "status": "live",
    "network_type": "testnet",
    "bech32_prefix": "celestia",
    "daemon_name": "celestia-appd",
    "node_home": "$HOME/.celestia-app",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "utia",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.01,
          "average_gas_price": 0.02,
          "high_gas_price": 0.1
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-mocha.pops.one",
          "provider": "P-OPs"
        }
      ],
      "rest": [
        {
          "address": "https://api-mocha.pops.one",
          "provider": "P-OPs"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Mintscan",
        "url": "https://testnet.mintscan.io/celestia-testnet",
        "tx_page": "https://testnet.mintscan.io/celestia-testnet/txs/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "chain4energytestnet",
    "status": "live",
    "network_type": "testnet",
    "website": "https://c4e.io/",
    "pretty_name": "Chain4Energy Testnet",
    "chain_id": "babajaga-1",
    "bech32_prefix": "c4e",
    "daemon_name": "c4ed",
    "node_home": "$HOME/.c4e-chain",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uc4e",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.02,
          "average_gas_price": 0.03,
          "high_gas_price": 0.06
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uc4e"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/chain4energytestnet/images/c4e.png"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-testnet.c4e.io",
          "provider": "C4E"
        }
      ],
      "rest": [
        {
          "address": "https://c4e.api.t.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://lcd-testnet.c4e.io",
          "provider": "C4E"
        }
      ],
      "grpc": [
        {
          "address": "grpc-testnet.c4e.io:8443",
          "provider": "C4E"
        }
      ]
    },
    "explorers": [
      {
        "kind": "🔥STAVR🔥",
        "url": "https://explorer.stavr.tech/C4E-Testnet",
        "tx_page": "https://explorer.stavr.tech/C4E-Testnet/transactions/${txHash}"
      },
      {
        "kind": "explorer",
        "url": "https://explorer-testnet.c4e.io/",
        "tx_page": "https://explorer-testnet.c4e.io/transactions/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/chain4energytestnet/images/c4e.png"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "cheqdtestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "cheqd",
    "chain_id": "cheqd-testnet-6",
    "bech32_prefix": "cheqd",
    "daemon_name": "cheqd-noded",
    "node_home": "$HOME/.cheqdnode",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ncheq",
          "fixed_min_gas_price": 25,
          "low_gas_price": 50,
          "average_gas_price": 75,
          "high_gas_price": 100
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.46.10"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.cheqd.network",
          "provider": "cheqd"
        }
      ],
      "rest": [
        {
          "address": "https://api.cheqd.network",
          "provider": "cheqd"
        }
      ],
      "grpc": [
        {
          "address": "grpc.cheqd.network:443",
          "provider": "cheqd"
        }
      ]
    },
    "explorers": [
      {
        "kind": "bigdipper",
        "url": "https://testnet-explorer.cheqd.io/",
        "tx_page": "https://testnet-explorer.cheqd.io/transactions/${txHash}"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg"
    },
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "chimbatestnet",
    "status": "live",
    "network_type": "testnet",
    "website": "https://chimba.ooo/",
    "pretty_name": "Chimba",
    "chain_id": "chimba-testnet",
    "bech32_prefix": "chimba",
    "daemon_name": "chimbad",
    "node_home": "$HOME/.chimbad",
    "fees": {
      "fee_tokens": [
        {
          "denom": "ucmba",
          "fixed_min_gas_price": 0.25,
          "low_gas_price": 1,
          "average_gas_price": 5,
          "high_gas_price": 10
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "chimba"
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.testnet.chimba.ooo",
          "provider": "chimba"
        }
      ],
      "rest": [
        {
          "address": "https://testnet.chimba.ooo",
          "provider": "chimba"
        }
      ]
    },
    "explorers": [
      {
        "kind": "bigdipper",
        "url": "https://explorer.testnet.chimba.ooo/",
        "tx_page": "https://explorer.testnet.chimba.ooo/transactions/${txHash}"
      }
    ],
    "slip44": 118
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "composabletestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Composable Testnet",
    "chain_id": "banksy-testnet-3",
    "bech32_prefix": "centauri",
    "daemon_name": "centaurid",
    "node_home": "$HOME/.banksy",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "staking": {
      "staking_tokens": [
        {
          "denom": "ppica"
        }
      ]
    },
    "fees": {
      "fee_tokens": [
        {
          "denom": "ppica",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0,
          "average_gas_price": 0,
          "high_gas_price": 0
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.composable-t.indonode.net:443",
          "provider": "Indonode"
        },
        {
          "address": "https://rpc-composable-testnet.sr20de.xyz:443",
          "provider": "Sr20de"
        }
      ],
      "rest": [
        {
          "address": "https://api.composable-t.indonode.net",
          "provider": "Indonode"
        },
        {
          "address": "https://composable.api.t4.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://api-composable-testnet.sr20de.xyz",
          "provider": "Sr20de"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc.composable-t.indonode.net:47090",
          "provider": "Indonode"
        },
        {
          "address": "https://grpc-composable-testnet.sr20de.xyz",
          "provider": "Sr20de"
        }
      ]
    },
    "explorers": [
      {
        "url": "https://explorer.nodexcapital.com/composable-3",
        "tx_page": "https://explorer.nodexcapital.com/composable-3/tx/${txHash}"
      },
      {
        "kind": "🔥STAVR🔥",
        "url": "https://explorer.stavr.tech/Composable-Testnet4",
        "tx_page": "https://explorer.stavr.tech/Composable-Testnet4/tx/${txHash}"
      },
      {
        "url": "https://explorer.indonode.net/composable-testnet-3",
        "tx_page": "https://explorer.indonode.net/composable-testnet-3/tx/${txHash}"
      },
      {
        "url": "https://explorer.sr20de.xyz/Composible-3",
        "tx_page": "https://explorer.sr20de.xyz/Composible-3/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "coolcattestnet",
    "status": "live",
    "network_type": "testnet",
    "website": "https://app.coolcat.space/",
    "pretty_name": "CoolCat",
    "chain_id": "kitten-04",
    "bech32_prefix": "ccat",
    "key_algos": [
      "secp256k1"
    ],
    "fees": {
      "fee_tokens": [
        {
          "denom": "uccat",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0,
          "average_gas_price": 1,
          "high_gas_price": 2
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uccat"
        }
      ]
    },
    "daemon_name": "coolcat",
    "node_home": "$HOME/.coolcat",
    "slip44": 118,
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.coolcat.space",
          "provider": "Digital Kitchen"
        }
      ],
      "rest": [
        {
          "address": "https://lcd.coolcat.space",
          "provider": "Digital Kitchen"
        }
      ],
      "grpc": []
    },
    "explorers": []
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "coreumtestnet",
    "status": "live",
    "network_type": "testnet",
    "website": "https://www.coreum.com",
    "pretty_name": "Coreum",
    "chain_id": "coreum-testnet-1",
    "bech32_prefix": "testcore",
    "daemon_name": "cored",
    "node_home": "$HOME/.core/coreum-testnet-1",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 990,
    "fees": {
      "fee_tokens": [
        {
          "denom": "utestcore",
          "fixed_min_gas_price": 0.03125,
          "low_gas_price": 0.0625,
          "average_gas_price": 0.0625,
          "high_gas_price": 62.5
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "utestcore"
        }
      ],
      "lock_duration": {
        "time": "168h"
      }
    },
    "codebase": {
      "cosmos_sdk_version": "0.45",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "0.30"
    },
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png",
        "theme": {
          "primary_color_hex": "#25d695"
        }
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://full-node-pluto.testnet-1.coreum.dev:26657",
          "provider": "Coreum Foundation"
        },
        {
          "address": "https://full-node-eris.testnet-1.coreum.dev:26657",
          "provider": "Coreum Foundation"
        }
      ],
      "grpc": [
        {
          "address": "https://full-node-pluto.testnet-1.coreum.dev:9090",
          "provider": "Coreum Foundation"
        },
        {
          "address": "https://full-node-eris.testnet-1.coreum.dev:9090",
          "provider": "Coreum Foundation"
        }
      ],
      "rest": [
        {
          "address": "https://full-node.testnet-1.coreum.dev:1317",
          "provider": "Coreum"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Coreum",
        "url": "https://explorer.testnet-1.coreum.dev/coreum",
        "tx_page": "https://explorer.testnet-1.coreum.dev/coreum/transactions/${txHash}",
        "account_page": "https://explorer.testnet-1.coreum.dev/coreum/account/${accountAddress}"
      }
    ],
    "keywords": [
      "dex",
      "staking",
      "wasm",
      "assets",
      "nft"
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "cosmoshubtestnet",
    "chain_id": "theta-testnet-001",
    "pretty_name": "Cosmos Hub Public Testnet",
    "status": "live",
    "network_type": "testnet",
    "bech32_prefix": "cosmos",
    "daemon_name": "gaiad",
    "node_home": "$HOME/.gaia",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uatom",
          "fixed_min_gas_price": 0.005,
          "low_gas_price": 0.01,
          "average_gas_price": 0.025,
          "high_gas_price": 0.03
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uatom"
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.sentry-01.theta-testnet.polypore.xyz",
          "provider": "Hypha"
        },
        {
          "address": "https://rpc.sentry-02.theta-testnet.polypore.xyz",
          "provider": "Hypha"
        },
        {
          "address": "https://rpc.state-sync-01.theta-testnet.polypore.xyz",
          "provider": "Hypha"
        },
        {
          "address": "https://rpc.state-sync-02.theta-testnet.polypore.xyz",
          "provider": "Hypha"
        },
        {
          "address": "https://public-cosmos-theta.w3node.com",
          "provider": "Interchain.FM"
        },
        {
          "address": "https://rpc-theta.osmotest5.osmosis.zone/",
          "provider": "Osmosis"
        }
      ],
      "rest": [
        {
          "address": "https://rest.sentry-01.theta-testnet.polypore.xyz",
          "provider": "Hypha"
        },
        {
          "address": "https://rest.sentry-02.theta-testnet.polypore.xyz",
          "provider": "Hypha"
        },
        {
          "address": "https://rest.state-sync-01.theta-testnet.polypore.xyz",
          "provider": "Hypha"
        },
        {
          "address": "https://rest.state-sync-02.theta-testnet.polypore.xyz",
          "provider": "Hypha"
        },
        {
          "address": "https://public-cosmos-theta.w3node.com/rest/",
          "provider": "Interchain.FM"
        },
        {
          "address": "https://lcd-theta.osmotest5.osmosis.zone/",
          "provider": "Osmosis"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc.sentry-01.theta-testnet.polypore.xyz",
          "provider": "Hypha"
        },
        {
          "address": "https://grpc.sentry-02.theta-testnet.polypore.xyz",
          "provider": "Hypha"
        },
        {
          "address": "https://grpc.state-sync-01.theta-testnet.polypore.xyz",
          "provider": "Hypha"
        },
        {
          "address": "https://grpc.state-sync-02.theta-testnet.polypore.xyz",
          "provider": "Hypha"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Mintscan",
        "url": "https://testnet.mintscan.io/cosmoshub-testnet",
        "tx_page": "https://testnet.mintscan.io/cosmoshub-testnet/txs/${txHash}"
      },
      {
        "kind": "Big Dipper",
        "url": "https://explorer.theta-testnet.polypore.xyz/",
        "tx_page": "https://explorer.theta-testnet.polypore.xyz/transactions/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "cosmwasmtestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "CosmWasm Testnet",
    "chain_id": "malaga-420",
    "bech32_prefix": "wasm",
    "daemon_name": "wasmd",
    "node_home": "$HOME/.wasmd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "umlg",
          "low_gas_price": 0.03,
          "average_gas_price": 0.04,
          "high_gas_price": 0.05
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uand"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.45",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "0.27"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.malaga-420.cosmwasm.com:443",
          "provider": "Confio"
        }
      ],
      "rest": [
        {
          "address": "https://api.malaga-420.cosmwasm.com",
          "provider": "Confio"
        }
      ]
    },
    "explorers": [
      {
        "kind": "BIG DIPPER",
        "url": "https://block-explorer.malaga-420.cosmwasm.com/",
        "tx_page": "https://block-explorer.malaga-420.cosmwasm.com/transactions/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "cosstestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "COSS Testnet",
    "chain_id": "coss-testnet-1",
    "bech32_prefix": "coss",
    "daemon_name": "cossd",
    "node_home": "$HOME/.cossd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ucgas",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ucgas"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.50.2",
      "cosmwasm_enabled": false
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-coss-node-1.coss.ink",
          "provider": "COSS"
        },
        {
          "address": "https://rpc-coss-node-2.coss.ink/",
          "provider": "COSS"
        }
      ],
      "rest": [
        {
          "address": "https://rest-coss-node-1.coss.ink",
          "provider": "COSS"
        },
        {
          "address": "https://rest-coss-node-2.coss.ink",
          "provider": "COSS"
        }
      ]
    }
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "cudostestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Cudos Testnet",
    "chain_id": "cudos-testnet-public-3",
    "bech32_prefix": "cudos",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.testnet.cudos.org:443/",
          "provider": "cudo"
        },
        {
          "address": "http://sentry-01.hosts.testnet.cudos.org:26657",
          "provider": "cudo"
        },
        {
          "address": "http://sentry-02.hosts.testnet.cudos.org:26657",
          "provider": "cudo"
        },
        {
          "address": "http://sentry-03.hosts.testnet.cudos.org:26657",
          "provider": "cudo"
        }
      ],
      "rest": [
        {
          "address": "https://rest.testnet.cudos.org:443",
          "provider": "cudo"
        },
        {
          "address": "http://sentry-01.hosts.testnet.cudos.org:1317/",
          "provider": "cudo"
        },
        {
          "address": "http://sentry-02.hosts.testnet.cudos.org:1317/",
          "provider": "cudo"
        },
        {
          "address": "http://sentry-03.hosts.testnet.cudos.org:1317/",
          "provider": "cudo"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc.testnet.cudos.org:433",
          "provider": "cudo"
        },
        {
          "address": "http://sentry-01.hosts.testnet.cudos.org:9090",
          "provider": "cudo"
        },
        {
          "address": "http://sentry-02.hosts.testnet.cudos.org:9090",
          "provider": "cudo"
        },
        {
          "address": "http://sentry-03.hosts.testnet.cudos.org:9090",
          "provider": "cudo"
        }
      ]
    },
    "explorers": [
      {
        "kind": "bigdipper-testnet",
        "url": "https://explorer.testnet.cudos.org/",
        "tx_page": "https://explorer.testnet.cudos.org/transactions/${txHash}",
        "account_page": "https://explorer.testnet.cudos.org/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "deardogetestnet",
    "chain_id": "deardoge-testnet",
    "pretty_name": "Dear Doge Testnet",
    "status": "live",
    "network_type": "testnet",
    "bech32_prefix": "deardoge",
    "daemon_name": "dogd",
    "node_home": "$HOME/.deardoge",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "udear",
          "fixed_min_gas_price": 0.25
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "udear"
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://testnet-rpc.deardoge.org",
          "provider": "dorafactory"
        }
      ],
      "rest": [
        {
          "address": "https://testnet-rest.deardoge.org",
          "provider": "dorafactory"
        }
      ],
      "grpc": [
        {
          "address": "testnet-grpc.deardoge.org:443",
          "provider": "dorafactory"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Dear Doge Ping Pub",
        "url": "https://testnet-explorer.deardoge.org/deardoge",
        "tx_page": "https://testnet-explorer.deardoge.org/deardoge/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "desmostestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Desmos Testnet",
    "chain_id": "morpheus-apollo-3",
    "bech32_prefix": "desmos",
    "daemon_name": "desmos",
    "node_home": "$HOME/.desmos",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 852,
    "fees": {
      "fee_tokens": [
        {
          "denom": "udaric",
          "fixed_min_gas_price": 0.001,
          "low_gas_price": 0.01,
          "average_gas_price": 0.03,
          "high_gas_price": 0.05
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "udaric"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.morpheus.desmos.network",
          "provider": "desmos"
        }
      ],
      "rest": [
        {
          "address": "https://lcd.morpheus.desmos.network",
          "provider": "desmos"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc.morpheus.desmos.network:443",
          "provider": "desmos"
        }
      ]
    },
    "explorers": [
      {
        "kind": "bigdipper",
        "url": "https://testnet.bigdipper.live/desmos",
        "tx_page": "https://testnet.live/desmos/transactions/${txHash}",
        "account_page": "https://testnet.bigdipper.live/desmos/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "doravotatestnet",
    "chain_id": "vota-testnet",
    "pretty_name": "Dora Vota Testnet",
    "status": "live",
    "network_type": "testnet",
    "bech32_prefix": "dora",
    "daemon_name": "dorad",
    "node_home": "$HOME/.dora",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "peaka",
          "fixed_min_gas_price": 100000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "peaka"
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://vota-testnet-rpc.dorafactory.org/",
          "provider": "dorafactory"
        }
      ],
      "rest": [
        {
          "address": "https://vota-testnet-rest.dorafactory.org",
          "provider": "dorafactory"
        }
      ],
      "grpc": [
        {
          "address": "vota-testnet-grpc.dorafactory.org:443",
          "provider": "dorafactory"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Dora Vota Ping Pub",
        "url": "https://maci-explorer-test.dorafactory.org",
        "tx_page": "https://maci-explorer-test.dorafactory.org/dora/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "doravotatestnet2",
    "chain_id": "vota-vk",
    "pretty_name": "Dora Vota Incentive Testnet",
    "status": "live",
    "network_type": "testnet",
    "bech32_prefix": "dora",
    "daemon_name": "dorad",
    "node_home": "$HOME/.dora",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "peaka",
          "fixed_min_gas_price": 100000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "peaka"
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://vota-vk-rpc.dorafactory.org/",
          "provider": "dorafactory"
        }
      ],
      "rest": [
        {
          "address": "https://vota-vk-rest.dorafactory.org",
          "provider": "dorafactory"
        }
      ],
      "grpc": [
        {
          "address": "vota-vk-grpc.dorafactory.org:443",
          "provider": "dorafactory"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Dora Vota Ping Pub",
        "url": "https://vota-vk-explorer.dorafactory.org",
        "tx_page": "https://vota-vk-explorer.dorafactory.org/doravotaincentive/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "dydxtestnet",
    "status": "live",
    "website": "https://dydx.trade/",
    "network_type": "testnet",
    "pretty_name": "dYdX Protocol",
    "chain_id": "dydx-testnet-4",
    "bech32_prefix": "dydx",
    "daemon_name": "dydxprotocold",
    "node_home": "$HOME/.dydxprotocol",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "adydx",
          "fixed_min_gas_price": 12500000000,
          "low_gas_price": 12500000000,
          "average_gas_price": 12500000000,
          "high_gas_price": 20000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "adydx"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "v0.47.4",
      "cosmwasm_enabled": false
    },
    "description": "Our goal is to build open source code that can power a first class product and trading experience.",
    "apis": {
      "rpc": [
        {
          "address": "https://dydx-rpc-testnet.enigma-validator.com",
          "provider": "Enigma"
        },
        {
          "address": "https://testnet-dydx-rpc.lavenderfive.com",
          "provider": "Lavender Five"
        },
        {
          "address": "https://test-dydx.kingnodes.com",
          "provider": "KingNodes"
        },
        {
          "address": "https://dydx-testnet-rpc.polkachu.com",
          "provider": "Polkachu"
        }
      ],
      "rest": [
        {
          "address": "https://dydx-lcd-testnet.enigma-validator.com",
          "provider": "Enigma"
        },
        {
          "address": "https://testnet-dydx-api.lavenderfive.com",
          "provider": "Lavender Five"
        },
        {
          "address": "https://dydx-testnet-api.polkachu.com",
          "provider": "Polkachu"
        }
      ],
      "grpc": [
        {
          "address": "https://testnet-dydx-rpc.lavenderfive.com",
          "provider": "Lavender Five"
        },
        {
          "address": "https://dydx-testnet-api.polkachu.com",
          "provider": "Polkachu"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/dydx-testnet",
        "tx_page": "https://www.mintscan.io/dydx-testnet/txs/${txHash}",
        "account_page": "https://www.mintscan.io/dydx-testnet/account/${accountAddress}"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg"
    },
    "images": [
      {
        "image_sync": {
          "chain_name": "dydx"
        },
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "elystestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Elys Network",
    "chain_id": "elystestnet-1",
    "bech32_prefix": "elys",
    "daemon_name": "elysd",
    "node_home": "$HOME/.elys",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "staking": {
      "staking_tokens": [
        {
          "denom": "uelys"
        }
      ],
      "lock_duration": {
        "time": "1209600s"
      }
    },
    "codebase": {
      "cosmos_sdk_version": "v0.47",
      "cosmwasm_enabled": false
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.testnet.elys.network",
          "provider": "Elys Network"
        },
        {
          "address": "https://elys-testnet-rpc.staketab.org:443",
          "provider": "Staketab"
        }
      ],
      "rest": [
        {
          "address": "https://api.testnet.elys.network",
          "provider": "Elys Network"
        },
        {
          "address": "https://elys.api.t.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://elys-testnet-rest.staketab.org",
          "provider": "Staketab"
        }
      ],
      "grpc": [
        {
          "address": "services.staketab.com:9390",
          "provider": "Staketab"
        }
      ]
    },
    "explorers": [
      {
        "kind": "🔥STAVR🔥",
        "url": "https://explorer.stavr.tech/Elys-Testnet",
        "tx_page": "https://explorer.stavr.tech/Elys-Testnet/tx/${txHash}",
        "account_page": "https://explorer.stavr.tech/Elys-Testnet/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://testnet.elys.network/elys",
        "tx_page": "https://testnet.elys.network/elys/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "empowertestnet",
    "chain_id": "circulus-1",
    "pretty_name": "Empower Testnet",
    "status": "live",
    "network_type": "testnet",
    "bech32_prefix": "empower",
    "daemon_name": "empowerd",
    "node_home": "$HOME/.empowerchain",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "umpwr",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://empower-testnet-rpc.polkachu.com:443",
          "provider": "Polkachu"
        },
        {
          "address": "https://empower.rpc.cumulo.com.es:443",
          "provider": "Cumulo"
        },
        {
          "address": "https://rpc-t.empower.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "https://rpc-empower.nodeist.net:443",
          "provider": "Nodeist"
        },
        {
          "address": "https://empower-testnet.nodejumper.io:443",
          "provider": "NODEJUMPER"
        },
        {
          "address": "https://empower-testnet-rpc.itrocket.net:443",
          "provider": "ITRocket"
        },
        {
          "address": "https://rpc.circulus-1.empower.aviaone.com:443",
          "provider": "AviaOne"
        }
      ],
      "rest": [
        {
          "address": "https://empower-testnet-api.polkachu.com:443",
          "provider": "Polkachu"
        },
        {
          "address": "https://empower.api.cumulo.com.es:443",
          "provider": "Cumulo"
        },
        {
          "address": "https://empw.api.t.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://api-t.empower.nodestake.top:443",
          "provider": "NodeStake"
        },
        {
          "address": "https://api-empower.nodeist.net:443",
          "provider": "Nodeist"
        },
        {
          "address": "https://empower-testnet.nodejumper.io:1317",
          "provider": "NODEJUMPER"
        },
        {
          "address": "https://empower-testnet-api.itrocket.net:443",
          "provider": "ITRocket"
        },
        {
          "address": "https://api.circulus-1.empower.aviaone.com",
          "provider": "AviaOne"
        }
      ],
      "grpc": [
        {
          "address": "empower-testnet-grpc.polkachu.com:17490",
          "provider": "Polkachu"
        },
        {
          "address": "empower.grpc.cumulo.com.es:443",
          "provider": "Cumulo"
        },
        {
          "address": "grpc-t.empower.nodestake.top:9090",
          "provider": "NodeStake"
        },
        {
          "address": "empower-testnet.nodejumper.io:9090",
          "provider": "NODEJUMPER"
        },
        {
          "address": "empower-testnet-grpc.itrocket.net:16090",
          "provider": "ITRocket"
        },
        {
          "address": "grpc.circulus-1.empower.aviaone.com:443",
          "provider": "AviaOne"
        }
      ]
    },
    "explorers": [
      {
        "kind": "exploreme",
        "url": "https://empowerchain.exploreme.pro",
        "tx_page": "https://empowerchain.exploreme.pro/transaction/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://exp.nodeist.net/Empower",
        "tx_page": "https://exp.nodeist.net/Empower/tx/${txHash}"
      },
      {
        "kind": "🔥STAVR🔥",
        "url": "https://explorer.stavr.tech/Empower",
        "tx_page": "https://explorer.stavr.tech/Empower/tx/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://explorer.nodestake.top/empower-testnet",
        "tx_page": "https://explorer.nodestake.top/empower-testnet/tx/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://testnet.itrocket.net/empower/staking",
        "tx_page": "https://testnet.itrocket.net/empower/staking/tx/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://explorer.stavr.tech/empower",
        "tx_page": "https://explorer.stavr.tech/empower/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "entrypointtestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "EntryPoint Testnet",
    "chain_id": "entrypoint-pubtest-2",
    "bech32_prefix": "entrypoint",
    "daemon_name": "entrypointd",
    "node_home": "$HOME/.entrypointd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ibc/8A138BC76D0FB2665F8937EC2BF01B9F6A714F6127221A0E155106A45E09BCC5",
          "low_gas_price": 0.01,
          "average_gas_price": 0.01,
          "high_gas_price": 0.02
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uentry"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.47.4"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://testnet-rpc.entrypoint.zone",
          "provider": "Simply Staking"
        }
      ],
      "rest": [
        {
          "address": "https://entry.api.t.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://testnet-rest.entrypoint.zone",
          "provider": "Simply Staking"
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entrypoint-chain-logo.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entrypoint-chain-logo.svg"
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://explorer.entrypoint.zone/entrypoint",
        "tx_page": "https://explorer.entrypoint.zone/entrypoint/tx/${txHash}",
        "account_page": "https://explorer.entrypoint.zone/entrypoint/account/${accountAddress}"
      },
      {
        "kind": "🔥STAVR🔥",
        "url": "https://explorer.stavr.tech/Entrypoint-Testnet",
        "tx_page": "https://explorer.stavr.tech/Entrypoint-Testnet/tx/${txHash}",
        "account_page": "https://explorer.stavr.tech/Entrypoint-Testnet/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://testnet.ping.pub/entrypoint",
        "tx_page": "https://testnet.ping.pub/entrypoint/tx/${txHash}",
        "account_page": "https://testnet.ping.pub/entrypoint/account/${accountAddress}"
      }
    ],
    "keywords": [
      "testnet"
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entrypoint-chain-logo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entrypoint-chain-logo.svg"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "evmostestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Evmos Testnet",
    "chain_id": "evmos_9000-4",
    "bech32_prefix": "evmos",
    "daemon_name": "evmosd",
    "node_home": "$HOME/.evmosd",
    "key_algos": [
      "ethsecp256k1"
    ],
    "extra_codecs": [
      "ethermint"
    ],
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "atevmos",
          "low_gas_price": 20000000000,
          "average_gas_price": 25000000000,
          "high_gas_price": 40000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "atevmos"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.46"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://evmos.test.rpc.coldyvalidator.net",
          "provider": "coldy"
        },
        {
          "address": "https://evmos-testnet-rpc.polkachu.com",
          "provider": "Polkachu"
        }
      ],
      "rest": [
        {
          "address": "https://evmos.test.api.coldyvalidator.net",
          "provider": "coldy"
        },
        {
          "address": "https://evmos-testnet-api.polkachu.com",
          "provider": "Polkachu"
        }
      ],
      "grpc": [
        {
          "address": "https://evmos.test.grpc.coldyvalidator.net",
          "provider": "coldy"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Mintscan",
        "url": "https://testnet.mintscan.io/evmos-testnet",
        "tx_page": "https://testnet.mintscan.io/evmos-testnet/txs/${txHash}"
      },
      {
        "kind": "NodesGuru",
        "url": "https://testnet.evmos.explorers.guru/",
        "tx_page": "https://testnet.evmos.explorers.guru/transaction/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "fetchhubtestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Fetch.ai Testnet",
    "chain_id": "dorado-1",
    "bech32_prefix": "fetch",
    "daemon_name": "fetchd",
    "node_home": "$HOME/.fetchd",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "atestfet",
          "low_gas_price": 0.025,
          "average_gas_price": 0.025,
          "high_gas_price": 0.035
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "atestfet"
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-dorado.fetch.ai:443",
          "provider": "fetch.ai"
        }
      ],
      "rest": [
        {
          "address": "https://rest-dorado.fetch.ai",
          "provider": "fetch.ai"
        }
      ],
      "grpc": [
        {
          "address": "grpc-dorado.fetch.ai:443",
          "provider": "fetch.ai"
        }
      ]
    },
    "explorers": [
      {
        "kind": "bigdipper",
        "url": "https://explore-dorado.fetch.ai",
        "tx_page": "https://explore-dorado.fetch.ai/transactions/${txHash}"
      },
      {
        "kind": "azoyalabs",
        "url": "https://fetchstation.azoyalabs.com/testnet",
        "tx_page": "https://fetchstation.azoyalabs.com/testnet/explorer/transactions/${txHash}",
        "account_page": "https://fetchstation.azoyalabs.com/testnet/explorer/address/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "gitopiatestnet",
    "chain_id": "gitopia-janus-testnet-2",
    "pretty_name": "Gitopia Testnet",
    "status": "live",
    "network_type": "testnet",
    "bech32_prefix": "gitopia",
    "daemon_name": "gitopiad",
    "node_home": "$HOME/.gitopia",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "utlore",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://gitopia-testnet.nodejumper.io",
          "provider": "NODEJUMPER"
        }
      ],
      "rest": [
        {
          "address": "https://gitopia-testnet.nodejumper.io:1317",
          "provider": "NODEJUMPER"
        }
      ],
      "grpc": [
        {
          "address": "https://gitopia-testnet.nodejumper.io:9090",
          "provider": "NODEJUMPER"
        }
      ]
    },
    "explorers": [
      {
        "kind": "explorer.humans.zone",
        "url": "https://gitopia.explorers.guru/",
        "tx_page": "https://gitopia.explorers.guru/transaction/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "humanstestnet",
    "chain_id": "testnet-1",
    "pretty_name": "Humans AI Testnet",
    "status": "live",
    "network_type": "testnet",
    "bech32_prefix": "humans",
    "daemon_name": "humansd",
    "node_home": "$HOME/.humans",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uheart",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://humans-testnet.nodejumper.io",
          "provider": "NODEJUMPER"
        }
      ],
      "rest": [
        {
          "address": "https://humans-testnet.nodejumper.io:1317",
          "provider": "NODEJUMPER"
        }
      ],
      "grpc": [
        {
          "address": "https://humans-testnet.nodejumper.io:9090",
          "provider": "NODEJUMPER"
        }
      ]
    },
    "explorers": [
      {
        "kind": "explorer.humans.zone",
        "url": "https://explorer.humans.zone/",
        "tx_page": "https://explorer.humans.zone/humans-testnet/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "hypersigntestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "hypersign",
    "chain_id": "jagrat",
    "bech32_prefix": "hid",
    "daemon_name": "hid-noded",
    "node_home": "$HOME/.hid-node",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uhid",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0,
          "average_gas_price": 0.02,
          "high_gas_price": 0.05
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.jagrat.hypersign.id",
          "provider": "hypersign"
        },
        {
          "address": "http://hid.rpc.t.stavr.tech:11057",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://hypersign-testnet-rpc.stakerhouse.com",
          "provider": "StakerHouse"
        }
      ],
      "rest": [
        {
          "address": "https://api.jagrat.hypersign.id",
          "provider": "hypersign"
        },
        {
          "address": "https://hid.api.t.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://hypersign-testnet-rest.stakerhouse.com",
          "provider": "StakerHouse"
        }
      ],
      "grpc": [
        {
          "address": "grpc.jagrat.hypersign.id:5099",
          "provider": "hypersign"
        },
        {
          "address": "http://hid.grpc.t.stavr.tech:8022",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "hypersign-testnet-grpc.stakerhouse.com:443",
          "provider": "StakerHouse"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Ping Pub",
        "url": "https://explorer.hypersign.id/hypersign-testnet",
        "tx_page": "https://explorer.hypersign.id/hypersign-testnet/tx/${txHash}"
      },
      {
        "kind": "🔥STAVR🔥",
        "url": "https://explorer.stavr.tech/HyperSign",
        "tx_page": "https://explorer.stavr.tech/HyperSign/tx/${txHash}"
      },
      {
        "kind": "cosmotracker",
        "url": "https://cosmotracker.com/hypersign",
        "tx_page": "https://cosmotracker.com/hypersign/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "impacthubdevnet",
    "status": "live",
    "network_type": "devnet",
    "website": "https://www.ixo.world/",
    "pretty_name": "ixo",
    "chain_id": "devnet-1",
    "bech32_prefix": "ixo",
    "daemon_name": "ixod",
    "node_home": "$HOME/.ixod",
    "key_algos": [
      "secp256k1",
      "ed25519"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uixo",
          "fixed_min_gas_price": 0.015,
          "low_gas_price": 0.015,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uixo"
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://devnet.ixo.earth/rpc/",
          "provider": "ixoworld"
        }
      ],
      "rest": [
        {
          "address": "https://devnet.ixo.earth/rest/",
          "provider": "ixoworld"
        }
      ],
      "grpc": []
    },
    "explorers": [
      {
        "kind": "ixoworld",
        "url": "https://blockscan.devnet.ixo.earth/ixo",
        "tx_page": "https://blockscan.devnet.ixo.earth/ixo/transactions/${txHash}",
        "account_page": "https://blockscan.devnet.ixo.earth/ixo/accounts/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "impacthubtestnet",
    "status": "live",
    "network_type": "testnet",
    "website": "https://www.ixo.world/",
    "pretty_name": "ixo",
    "chain_id": "pandora-8",
    "bech32_prefix": "ixo",
    "daemon_name": "ixod",
    "node_home": "$HOME/.ixod",
    "key_algos": [
      "secp256k1",
      "ed25519"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uixo",
          "fixed_min_gas_price": 0.015,
          "low_gas_price": 0.015,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uixo"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.testnet.ixo.earth/",
          "provider": "ixoworld"
        }
      ],
      "rest": [
        {
          "address": "https://testnet.ixo.earth/rest/",
          "provider": "ixoworld"
        }
      ],
      "grpc": []
    },
    "explorers": [
      {
        "kind": "ixoworld",
        "url": "https://blockscan.testnet.ixo.earth/ixo",
        "tx_page": "https://blockscan.testnet.ixo.earth/ixo/transactions/${txHash}",
        "account_page": "https://blockscan.testnet.ixo.earth/ixo/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "imversedtestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Imversed Testnet",
    "chain_id": "imversed-test-1",
    "bech32_prefix": "imv",
    "daemon_name": "imversed",
    "node_home": "$HOME/.imversed",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "nimv",
          "fixed_min_gas_price": 0.001
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://tx-endpoint-test.imversed.com/",
          "provider": "imversed"
        }
      ],
      "rest": [
        {
          "address": "https://query-endpoint-test.imversed.com/",
          "provider": "imversed"
        }
      ],
      "grpc": [
        {
          "address": "http://qs.imversed.com:9090",
          "provider": "imversed"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Big Dipper",
        "url": "https://tex-s.imversed.com",
        "tx_page": "https://tex-s.imversed.com/transactions/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "injectivetestnet",
    "status": "live",
    "network_type": "testnet",
    "website": "https://injective.com",
    "pretty_name": "Injective",
    "chain_id": "injective-888",
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
          "fixed_min_gas_price": 500000000,
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
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://injective-testnet-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://k8s.testnet.tm.injective.network:443",
          "provider": "injectiveLabs"
        },
        {
          "address": "https://testnet.tm.injective.network",
          "provider": "injectiveLabs"
        }
      ],
      "rest": [
        {
          "address": "https://injective-testnet-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://k8s.testnet.lcd.injective.network",
          "provider": "injectiveLabs"
        },
        {
          "address": "https://testnet.grpc.injective.network",
          "provider": "injectiveLabs"
        }
      ],
      "grpc": [
        {
          "address": "injective-testnet-grpc.polkachu.com:14390",
          "provider": "Polkachu"
        },
        {
          "address": "k8s.testnet.chain.grpc.injective.network:443",
          "provider": "injectiveLabs"
        },
        {
          "address": "https://testnet.grpc.injective.network",
          "provider": "injectiveLabs"
        }
      ]
    },
    "explorers": [
      {
        "kind": "injectiveprotocol",
        "url": "https://testnet.explorer.injective.network/",
        "tx_page": "https://testnet.explorer.injective.network/transaction/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "jackaltestnet",
    "chain_id": "canine-1",
    "website": "https://jackalprotocol.com",
    "pretty_name": "Jackal",
    "status": "live",
    "network_type": "testnet",
    "bech32_prefix": "jkl",
    "daemon_name": "canined",
    "node_home": "$HOME/.canine",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ujkl",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "http://jkl.rpc.t.stavr.tech:19127",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://testnet-rpc.jackalprotocol.com",
          "provider": "Jackal Labs"
        }
      ],
      "rest": [
        {
          "address": "https://jkl.api.t.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://testnet-api.jackalprotocol.com",
          "provider": "Jackal Labs"
        }
      ],
      "grpc": [
        {
          "address": "http://jkl.grpc.t.stavr.tech:5913",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://testnet-grpc.jackalprotocol.com",
          "provider": "Jackal Labs"
        }
      ]
    },
    "explorers": [
      {
        "kind": "🔥STAVR🔥",
        "url": "https://explorer.stavr.tech/Jackal-Testnet",
        "tx_page": "https://explorer.stavr.tech/Jackal-Testnet/tx/${txHash}",
        "account_page": "https://explorer.stavr.tech/Jackal-Testnet/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/jackal",
        "tx_page": "https://ping.pub/jackal/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "junotestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Juno Testnet",
    "chain_id": "uni-6",
    "bech32_prefix": "juno",
    "daemon_name": "junod",
    "node_home": "$HOME/.juno",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ujunox",
          "low_gas_price": 0.003,
          "average_gas_price": 0.0045,
          "high_gas_price": 0.006
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ujunox"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.45",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "0.31"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.uni.junonetwork.io",
          "provider": "Juno"
        },
        {
          "address": "https://juno-testnet-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://uni-rpc.reece.sh",
          "provider": "Reecepbcups"
        }
      ],
      "rest": [
        {
          "address": "https://api.uni.junonetwork.io",
          "provider": "Juno"
        },
        {
          "address": "https://juno-testnet-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://juno.api.t.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://uni-api.reece.sh",
          "provider": "Reecepbcups"
        }
      ],
      "grpc": [
        {
          "address": "juno-testnet-grpc.polkachu.com:12690",
          "provider": "Polkachu"
        }
      ]
    },
    "explorers": [
      {
        "kind": "EZ Staking",
        "url": "https://testnet.app.ezstaking.io/juno-testnet",
        "tx_page": "https://testnet.app.ezstaking.io/juno-testnet/txs/${txHash}",
        "account_page": "https://testnet.app.ezstaking.io/juno-testnet/account/${accountAddress}"
      },
      {
        "kind": "🔥STAVR🔥",
        "url": "https://explorer.stavr.tech/Juno-Testnet",
        "tx_page": "https://explorer.stavr.tech/Juno-Testnet/txs/${txHash}",
        "account_page": "https://explorer.stavr.tech/Juno-Testnet/account/${accountAddress}"
      },
      {
        "kind": "Mintscan",
        "url": "https://testnet.mintscan.io/juno-testnet",
        "tx_page": "https://testnet.mintscan.io/juno-testnet/txs/${txHash}"
      },
      {
        "kind": "NodesGuru",
        "url": "https://testnet.juno.explorers.guru/",
        "tx_page": "https://testnet.juno.explorers.guru/transaction/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "kichaintestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Ki",
    "chain_id": "kichain-t-4",
    "bech32_prefix": "tki",
    "daemon_name": "kid",
    "node_home": "$HOME/.kid",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "utki",
          "fixed_min_gas_price": 0.025
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-challenge.blockchain.ki/",
          "provider": "kifoundation"
        }
      ],
      "rest": [
        {
          "address": "https://api-challenge.blockchain.ki/",
          "provider": "kifoundation"
        }
      ]
    },
    "explorers": [
      {
        "kind": "kifoundation",
        "url": "https://kichain-t-4.blockchain.ki/",
        "tx_page": "https://kichain-t-4.blockchain.ki/transactions/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "kujiratestnet",
    "chain_id": "harpoon-4",
    "pretty_name": "Kujira Harpoon",
    "status": "live",
    "network_type": "testnet",
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
          "fixed_min_gas_price": 0
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://kujira-testnet-rpc.polkachu.com",
          "provider": "polkachu"
        }
      ],
      "rest": [
        {
          "address": "https://kujira-testnet-api.polkachu.com/",
          "provider": "polkachu"
        }
      ]
    },
    "explorers": [
      {
        "kind": "explorers.guru",
        "url": "https://kujira.explorers.guru",
        "tx_page": "https://kujira.explorers.guru/transaction/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "kyvedevnet",
    "chain_id": "korellia",
    "pretty_name": "KYVE Korellia",
    "status": "live",
    "network_type": "devnet",
    "bech32_prefix": "kyve",
    "daemon_name": "chaind",
    "node_home": "$HOME/.kyve",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "tkyve",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.korellia.kyve.network",
          "provider": "kyve"
        }
      ],
      "rest": [
        {
          "address": "https://api.korellia.kyve.network",
          "provider": "kyve"
        }
      ]
    },
    "explorers": [
      {
        "kind": "explorers.guru",
        "url": "https://kyve.explorers.guru/",
        "tx_page": "https://kyve.explorers.guru/transaction/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "kyvetestnet",
    "chain_id": "kaon-1",
    "pretty_name": "KYVE Kaon",
    "status": "live",
    "network_type": "testnet",
    "bech32_prefix": "kyve",
    "daemon_name": "kyved",
    "node_home": "$HOME/.kyve",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "tkyve",
          "fixed_min_gas_price": 0.02,
          "low_gas_price": 0.02,
          "average_gas_price": 0.03,
          "high_gas_price": 0.06
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "tkyve"
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-eu-1.kaon.kyve.network",
          "provider": "kyve"
        },
        {
          "address": "https://rpc-kyve-test.ecostake.com",
          "provider": "ecostake"
        }
      ],
      "rest": [
        {
          "address": "https://api-eu-1.kaon.kyve.network",
          "provider": "kyve"
        },
        {
          "address": "https://rest-kyve-test.ecostake.com",
          "provider": "ecostake"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://testnet.mintscan.io/kyve-testnet",
        "tx_page": "https://testnet.mintscan.io/kyve-testnet/txs/${txHash}",
        "account_page": "https://testnet.mintscan.io/kyve-testnet/account/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "lavatestnet",
    "status": "live",
    "network_type": "testnet",
    "website": "https://www.lavanet.xyz/",
    "pretty_name": "Lava",
    "chain_id": "lava-testnet-2",
    "bech32_prefix": "lava@",
    "daemon_name": "lavad",
    "node_home": "$HOME/.lava",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ulava",
          "fixed_min_gas_price": 1e-9,
          "low_gas_price": 1e-9,
          "average_gas_price": 1e-9,
          "high_gas_price": 1e-9
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ulava"
        }
      ],
      "lock_duration": {
        "time": "1209600s"
      }
    },
    "codebase": {
      "cosmos_sdk_version": "0.47",
      "cosmwasm_enabled": false,
      "cosmwasm_version": "0.30"
    },
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.png",
        "theme": {
          "primary_color_hex": "#D7001F"
        }
      },
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.svg"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.png"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://https://public-rpc-testnet2.lavanet.xyz/",
          "provider": "Lava"
        },
        {
          "address": "http://lava.rpc.t.stavr.tech:198",
          "provider": "🔥STAVR🔥"
        }
      ],
      "rest": [
        {
          "address": "https://public-rpc-testnet2.lavanet.xyz/rest/",
          "provider": "Lava"
        },
        {
          "address": "https://lava.api.t.stavr.tech",
          "provider": "🔥STAVR🔥"
        }
      ]
    },
    "explorers": [
      {
        "kind": "explorers.guru",
        "url": "https://lava.explorers.guru/",
        "tx_page": "https://lava.explorers.guru//transaction/${txHash}",
        "account_page": "https://lava.explorers.guru//account/${accountAddress}"
      },
      {
        "kind": "🔥STAVR🔥",
        "url": "https://explorer.stavr.tech/Lava-Testnet",
        "tx_page": "https://explorer.stavr.tech/Lava-Testnet/tx/${txHash}",
        "account_page": "https://explorer.stavr.tech/Lava-Testnet/account/${accountAddress}"
      }
    ],
    "keywords": [
      "rpc",
      "api"
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "lavatestnet2",
    "status": "live",
    "network_type": "testnet",
    "website": "https://www.lavanet.xyz/",
    "pretty_name": "Lava Testnet",
    "chain_id": "lava-testnet-2",
    "bech32_prefix": "lava@",
    "daemon_name": "lavad",
    "node_home": "$HOME/.lava",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ulava",
          "fixed_min_gas_price": 0.000001,
          "low_gas_price": 0.000001,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ulava"
        }
      ],
      "lock_duration": {
        "time": "1209600s"
      }
    },
    "codebase": {
      "cosmos_sdk_version": "0.47.6",
      "cosmwasm_enabled": false,
      "cosmwasm_version": "0.30"
    },
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.png",
        "theme": {
          "primary_color_hex": "#D7001F"
        }
      },
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.svg"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.png"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://public-rpc.lavanet.xyz:443",
          "provider": "Lava"
        }
      ],
      "rest": [
        {
          "address": "https://public-rpc.lavanet.xyz/rest/",
          "provider": "Lava"
        }
      ]
    },
    "explorers": [
      {
        "kind": "explorers.guru",
        "url": "https://lava.explorers.guru/",
        "tx_page": "https://lava.explorers.guru//transaction/${txHash}",
        "account_page": "https://lava.explorers.guru//account/${accountAddress}"
      }
    ],
    "keywords": [
      "rpc",
      "api",
      "modular",
      "data"
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "likecointestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "LikeCoin Testnet",
    "chain_id": "likecoin-public-testnet-5",
    "bech32_prefix": "like",
    "daemon_name": "liked",
    "node_home": "$HOME/.liked",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "nanoekil",
          "fixed_min_gas_price": 1000,
          "low_gas_price": 1000,
          "average_gas_price": 10000,
          "high_gas_price": 1000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "nanoekil"
        }
      ],
      "lock_duration": {
        "time": "1814400s"
      }
    },
    "codebase": {
      "cosmos_sdk_version": "0.46",
      "cosmwasm_enabled": false
    },
    "apis": {
      "rpc": [
        {
          "address": "https://node.testnet.like.co/rpc/",
          "provider": "like.co"
        }
      ],
      "rest": [
        {
          "address": "https://node.testnet.like.co/",
          "provider": "like.co"
        }
      ],
      "grpc": [
        {
          "address": "https://node.testnet-grpc.like.co/",
          "provider": "like.co"
        }
      ]
    },
    "explorers": [
      {
        "kind": "bigdipper",
        "url": "https://testnet.bigdipper.live/likecoin",
        "tx_page": "https://testnet.bigdipper.live/likecoin/transactions/${txHash}",
        "account_page": "https://testnet.bigdipper.live/likecoin/accounts/${accountAddress}"
      },
      {
        "kind": "lunie-ng",
        "url": "https://likecoin-public-testnet-5.netlify.app/"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.svg"
    },
    "keywords": [],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "lumenxtestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "LumenX-Test",
    "chain_id": "lumenx-test",
    "bech32_prefix": "lumen",
    "daemon_name": "lumenxd",
    "node_home": "$HOME/.lumenx",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ulumen",
          "fixed_min_gas_price": 0.0025,
          "low_gas_price": 0.01,
          "average_gas_price": 0.025,
          "high_gas_price": 0.03
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ulumen"
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://testnet-rpc.lumenx.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://testrpc-lumenx.cryptonet.pl/",
          "provider": "CryptoNet"
        }
      ],
      "rest": [
        {
          "address": "https://testnet-api.lumenx.chaintools.tech/",
          "provider": "ChainTools"
        },
        {
          "address": "https://testapi-lumenx.cryptonet.pl/",
          "provider": "CryptoNet"
        }
      ],
      "grpc": []
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://testnet.explorer.chaintools.tech/lumenx",
        "tx_page": "https://testnet.explorer.chaintools.tech/lumenx/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "marstestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Mars Hub Testnet",
    "chain_id": "ares-1",
    "bech32_prefix": "mars",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "umars",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0,
          "average_gas_price": 0,
          "high_gas_price": 0.025
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "umars"
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://testnet-rpc.marsprotocol.io/",
          "provider": "Mars Protocol"
        },
        {
          "address": "https://rpc-mars.nodeist.net/",
          "provider": "Nodeist"
        }
      ],
      "rest": [
        {
          "address": "https://testnet-rest.marsprotocol.io/",
          "provider": "Mars Protocol"
        },
        {
          "address": "https://api-mars.nodeist.net/",
          "provider": "Nodeist"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Mars Protocol",
        "url": "https://testnet-explorer.marsprotocol.io",
        "tx_page": "https://testnet-explorer.marsprotocol.io/transactions/${txHash}"
      },
      {
        "kind": "Nodeist Explorer",
        "url": "https://exp.nodeist.net/t-mars/",
        "tx_page": "https://exp.nodeist.net/t-mars/transactions/${txHash}"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-icon.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-icon.svg"
    },
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-icon.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-icon.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "migalootestnet",
    "status": "live",
    "network_type": "testnet",
    "website": "https://www.whitewhale.money/",
    "pretty_name": "Migaloo Testnet",
    "chain_id": "narwhal-2",
    "bech32_prefix": "migaloo",
    "daemon_name": "migalood",
    "node_home": "$HOME/.migalood",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uwhale",
          "fixed_min_gas_price": 0.25,
          "low_gas_price": 0.25,
          "average_gas_price": 0.5,
          "high_gas_price": 0.75
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uwhale"
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/migaloo-light.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/migaloo-light.svg"
    },
    "codebase": {
      "cosmos_sdk_version": "0.45",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "0.28"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://migaloo-testnet-rpc.polkachu.com",
          "provider": "Polkachu"
        }
      ],
      "rest": [
        {
          "address": "https://migaloo-testnet-api.polkachu.com",
          "provider": "Polkachu"
        }
      ],
      "grpc": []
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://ping.pfc.zone/narwhal-testnet",
        "tx_page": "https://ping.pfc.zone/narwhal-testnet/tx/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/migaloo-light.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/migaloo-light.svg"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "neutrontestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Neutron Testnet",
    "chain_id": "pion-1",
    "bech32_prefix": "neutron",
    "daemon_name": "neutrond",
    "node_home": "$HOME/.neutrond",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "untrn",
          "low_gas_price": 0.02,
          "average_gas_price": 0.02,
          "high_gas_price": 0.02
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.47",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "0.45"
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/neutron-black-logo.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/neutron-black-logo.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-falcron.pion-1.ntrn.tech",
          "provider": "Neutron"
        },
        {
          "address": "https://neutron-testnet-rpc.polkachu.com/",
          "provider": "Polkachu"
        }
      ],
      "rest": [
        {
          "address": "https://rest-falcron.pion-1.ntrn.tech",
          "provider": "Neutron"
        },
        {
          "address": "https://api.pion.remedy.tm.p2p.org",
          "provider": "P2P.ORG"
        },
        {
          "address": "https://rest.baryon-sentry-01.rs-testnet.polypore.xyz",
          "provider": "Hypha"
        }
      ],
      "grpc": [
        {
          "address": "grpc-falcron.pion-1.ntrn.tech:80",
          "provider": "Neutron"
        },
        {
          "address": "grpc.baryon.remedy.tm.p2p.org:443",
          "provider": "P2P.ORG"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Ping.pub Explorer from Hypha",
        "url": "https://explorer.rs-testnet.polypore.xyz/pion-1",
        "tx_page": "https://explorer.rs-testnet.polypore.xyz/pion-1/tx/${txHash}",
        "account_page": "https://explorer.rs-testnet.polypore.xyz/baryon-1/account/${accountAddress}"
      },
      {
        "kind": "Mintscan",
        "url": "https://testnet.mintscan.io/neutron-testnet",
        "tx_page": "https://testnet.mintscan.io/neutron-testnet/txs/${txHash}",
        "account_page": "https://testnet.mintscan.io/neutron-testnet/account/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/neutron-black-logo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/neutron-black-logo.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "nobletestnet",
    "chain_id": "grand-1",
    "website": "https://nobleassets.xyz/",
    "pretty_name": "Noble",
    "status": "live",
    "network_type": "testnet",
    "bech32_prefix": "noble",
    "daemon_name": "nobled",
    "node_home": "$HOME/.nobled",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uusdc",
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
          "denom": "ustake"
        }
      ],
      "lock_duration": {
        "time": "1814400s"
      }
    },
    "codebase": {
      "cosmos_sdk_version": "v0.45",
      "cosmwasm_enabled": false
    },
    "apis": {
      "rpc": [
        {
          "address": "https://noble-testnet-rpc.polkachu.com",
          "provider": "polkachu"
        },
        {
          "address": "https://rpc.testnet.noble.strange.love:443",
          "provider": "strangelove"
        }
      ],
      "rest": [
        {
          "address": "https://noble-testnet-api.polkachu.com",
          "provider": "polkachu"
        },
        {
          "address": "https://api.testnet.noble.strange.love",
          "provider": "strangelove"
        }
      ],
      "grpc": [
        {
          "address": "noble-testnet-grpc.polkachu.com:21590",
          "provider": "polkachu"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://testnet.mintscan.io/noble-testnet",
        "tx_page": "https://testnet.mintscan.io/noble-testnet/txs/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://explore.strange.love/grand-1",
        "tx_page": "https://explore.strange.love/grand-1/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "noistestnet",
    "status": "live",
    "network_type": "testnet",
    "website": "https://nois.network",
    "pretty_name": "Nois",
    "chain_id": "nois-testnet-005",
    "bech32_prefix": "nois",
    "daemon_name": "noisd",
    "node_home": "$HOME/.noisd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "unois",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.05,
          "average_gas_price": 0.05,
          "high_gas_price": 0.1
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "unois"
        }
      ],
      "lock_duration": {
        "time": "1814400s"
      }
    },
    "codebase": {
      "cosmos_sdk_version": "0.45",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "0.30"
    },
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png",
        "theme": {
          "primary_color_hex": "#0C0914"
        }
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://nois-testnet-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://nois-testnet-rpc.itrocket.net:443",
          "provider": "itrocket"
        },
        {
          "address": "https://rpc.nois.mcbnode.online:443",
          "provider": "mcbnode"
        },
        {
          "address": "https://nois-testnet.rpc.kjnodes.com:443",
          "provider": "kjnodes"
        },
        {
          "address": "https://tnois-rpc.systemd.run:443",
          "provider": "systemd"
        }
      ],
      "grpc": [
        {
          "address": "tnois-grpc.systemd.run:443",
          "provider": "systemd"
        },
        {
          "address": "http://nois.grpc.t.stavr.tech:191",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "nois-testnet-grpc.itrocket.net:21090",
          "provider": "itrocket"
        }
      ],
      "rest": [
        {
          "address": "https://api.nois.mcbnode.online",
          "provider": "mcbnode"
        },
        {
          "address": "https://nois3.api.t.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://tnois-api.systemd.run:443",
          "provider": "systemd"
        }
      ]
    },
    "explorers": [
      {
        "kind": "🔥STAVR🔥",
        "url": "https://explorer.stavr.tech/Nois-Testnet",
        "tx_page": "https://explorer.stavr.tech/Nois-Testnet/tx/${txHash}",
        "account_page": "https://explorer.stavr.tech/Nois-Testnet/account/${accountAddress}"
      },
      {
        "kind": "explorers.guru",
        "url": "https://testnet.nois.explorers.guru",
        "tx_page": "https://testnet.nois.explorers.guru/transaction/${txHash}",
        "account_page": "https://testnet.nois.explorers.guru/account/${accountAddress}"
      }
    ],
    "keywords": [
      "nois",
      "randomness",
      "drand",
      "wasm"
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "nolustestnet",
    "status": "live",
    "website": "https://nolus.io/",
    "network_type": "testnet",
    "pretty_name": "Nolus Testnet",
    "chain_id": "rila-1",
    "bech32_prefix": "nolus",
    "daemon_name": "nolusd",
    "node_home": "$HOME/.nolusd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "unls",
          "low_gas_price": 0.01,
          "average_gas_price": 0.025,
          "high_gas_price": 0.05
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "unls"
        }
      ],
      "lock_duration": {
        "time": "1814400s"
      }
    },
    "codebase": {
      "cosmos_sdk_version": "0.45",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "0.31"
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rila-cl.nolus.network:26657",
          "provider": "NolusProtocol"
        }
      ],
      "rest": [
        {
          "address": "https://rila-cl.nolus.network:1317",
          "provider": "NolusProtocol"
        }
      ],
      "grpc": [
        {
          "address": "https://rila-cl.nolus.network:9090",
          "provider": "NolusProtocol"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Nolus Explorer",
        "url": "https://explorer-rila.nolus.io/rila-1/",
        "tx_page": "https://explorer-rila.nolus.io/rila-1/tx/${txHash}",
        "account_page": "https://explorer-rila.nolus.io/rila-1/account/${accountAddress}"
      }
    ],
    "keywords": [
      "testnet"
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.svg"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "okp4testnet",
    "chain_id": "okp4-nemeton-1",
    "website": "https://okp4.network/",
    "pretty_name": "OKP4 Nemeton",
    "status": "live",
    "network_type": "testnet",
    "bech32_prefix": "okp4",
    "daemon_name": "okp4d",
    "node_home": "$HOME/.okp4",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uknow",
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
          "denom": "uknow"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/okp4testnet/images/okp4.png"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://api.testnet.okp4.network/rpc",
          "provider": "OKP4"
        },
        {
          "address": "https://okptest-rpc.quickapi.com",
          "provider": "Chainlayer"
        },
        {
          "address": "https://okp4-testnet-rpc.polkachu.com",
          "provider": "Polkachu"
        }
      ],
      "rest": [
        {
          "address": "https://okptest-lcd.quickapi.com",
          "provider": "Chainlayer"
        },
        {
          "address": "https://okp4-testnet-api.polkachu.com/",
          "provider": "Polkachu"
        }
      ],
      "grpc": [
        {
          "address": "okp4-testnet-grpc.polkachu.com:17690",
          "provider": "Polkachu"
        },
        {
          "address": "grpc.testnet.okp4.network:443",
          "provider": "OKP4"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://testnet.ping.pub/OKP4%20testnet",
        "tx_page": "https://testnet.ping.pub/OKP4%20testnet/tx/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://explore.okp4.network/OKP4%20testnet",
        "tx_page": "https://explore.okp4.network/OKP4%20testnet/tx/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/okp4testnet/images/okp4.png"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "osmosistestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Osmosis Testnet",
    "chain_id": "osmo-test-5",
    "bech32_prefix": "osmo",
    "daemon_name": "osmosisd",
    "node_home": "$HOME/.osmosisd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uosmo",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.0025,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uosmo"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.45",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "0.30"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.osmotest5.osmosis.zone/",
          "provider": "Osmosis"
        },
        {
          "address": "https://rpc.testnet.osl.zone/",
          "provider": "OSL"
        }
      ],
      "rest": [
        {
          "address": "https://lcd.osmotest5.osmosis.zone/",
          "provider": "Osmosis"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc.osmotest5.osmosis.zone/",
          "provider": "Osmosis"
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png"
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://testnet.mintscan.io/osmosis-testnet",
        "tx_page": "https://testnet.mintscan.io/osmosis-testnet/txs/${txHash}",
        "account_page": "https://testnet.mintscan.io/osmosis-testnet/account/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://explorer.osmotest5.osmosis.zone",
        "tx_page": "https://explorer.osmotest5.osmosis.zone/osmo-test-5/tx/${txHash}",
        "account_page": "https://explorer.osmotest5.osmosis.zone/osmo-test-5/account/${accountAddress}"
      }
    ],
    "keywords": [
      "dex",
      "testnet"
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "osmosistestnet4",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Osmosis Testnet",
    "chain_id": "osmo-test-4",
    "bech32_prefix": "osmo",
    "daemon_name": "osmosisd",
    "node_home": "$HOME/.osmosisd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uosmo",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uosmo"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.45",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "0.29"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.osmo-test.ccvalidators.com/",
          "provider": "CryptoCrew"
        },
        {
          "address": "https://osmosistest-rpc.quickapi.com/",
          "provider": "ChainLayer"
        },
        {
          "address": "https://rpc.testnet.osmosis.zone/",
          "provider": "Osmosis"
        }
      ],
      "rest": [
        {
          "address": "https://osmosistest-lcd.quickapi.com/",
          "provider": "CryptoCrew"
        },
        {
          "address": "https://lcd.osmo-test.ccvalidators.com/",
          "provider": "ChainLayer"
        },
        {
          "address": "https://testnet-rest.osmosis.zone/",
          "provider": ""
        }
      ],
      "grpc": [
        {
          "address": "https://grpc-test.osmosis.zone:443",
          "provider": "Osmosis"
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png"
    },
    "keywords": [
      "dex",
      "testnet"
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "permtestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Perm Testnet",
    "chain_id": "testnet-1",
    "bech32_prefix": "perm",
    "daemon_name": "permd",
    "node_home": "$HOME/.perm",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uperm",
          "low_gas_price": 0.0025,
          "average_gas_price": 0.0025,
          "high_gas_price": 0.0024
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uperm"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.45",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "0.30"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.3.finance/",
          "provider": "Perm Network"
        }
      ],
      "rest": [
        {
          "address": "https://rest.3.finance/",
          "provider": "Perm Network"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc.3.finance/",
          "provider": "Perm Network"
        }
      ]
    },
    "explorers": [
      {
        "kind": "bigdipper",
        "url": "https://explorer.testnet.perm.ooo/",
        "tx_page": "https://explorer.testnet.perm.ooo/transactions/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "persistencetestnet",
    "chain_id": "test-core-1",
    "pretty_name": "Persistence Testnet",
    "status": "live",
    "network_type": "testnet",
    "website": "https://persistence.one/",
    "bech32_prefix": "persistence",
    "daemon_name": "persistenceCore",
    "node_home": "$HOME/.persistenceCore",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uxprt",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.05,
          "average_gas_price": 0.125,
          "high_gas_price": 0.2
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uxprt"
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-testnet-persistence.architectnodes.com/",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://persistence-testnet-rpc.baryon.dev/",
          "provider": "Baryon"
        },
        {
          "address": "https://persistence-testnet-rpc.cosmonautstakes.com/",
          "provider": "Cosmonaut Stakes"
        },
        {
          "address": "https://rpc.testnet.persistence.one/",
          "provider": "Persistence"
        },
        {
          "address": "https://persistence-testnet-rpc.polkachu.com/",
          "provider": "Polkachu"
        }
      ],
      "rest": [
        {
          "address": "https://rest-testnet-persistence.architectnodes.com/",
          "provider": "Architect Nodes"
        },
        {
          "address": "https://persistence-testnet-api.baryon.dev/",
          "provider": "Baryon"
        },
        {
          "address": "https://persistence-testnet-rest.cosmonautstakes.com/",
          "provider": "Cosmonaut Stakes"
        },
        {
          "address": "https://rest.testnet.persistence.one/",
          "provider": "Persistence"
        },
        {
          "address": "https://persistence-testnet-api.polkachu.com/",
          "provider": "Polkachu"
        }
      ],
      "grpc": [
        {
          "address": "persistence-testnet-grpc.polkachu.com:15490",
          "provider": "Polkachu"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://testnet.ping.pub/test-core-1/",
        "tx_page": "https://testnet.ping.pub/test-core-1/tx/${txHash}"
      },
      {
        "kind": "mintscan",
        "url": "https://testnet.mintscan.io/persistence-testnet",
        "tx_page": "https://testnet.mintscan.io/persistence-testnet/txs/${txHash}",
        "account_page": "https://testnet.mintscan.io/persistence-testnet/account/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "persistencetestnet2",
    "chain_id": "test-core-2",
    "pretty_name": "Persistence Testnet",
    "status": "live",
    "network_type": "testnet",
    "website": "https://persistence.one/",
    "bech32_prefix": "persistence",
    "daemon_name": "persistenceCore",
    "node_home": "$HOME/.persistenceCore",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uxprt",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.05,
          "average_gas_price": 0.125,
          "high_gas_price": 0.2
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uxprt"
        }
      ],
      "lock_duration": {
        "time": "1814400s"
      }
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-persistence-testnet-01.stakeflow.io/",
          "provider": "StakeFlow"
        },
        {
          "address": "https://persistence-testnet-rpc.baryon.dev/",
          "provider": "Baryon"
        },
        {
          "address": "https://persistence-testnet-rpc.cosmonautstakes.com/",
          "provider": "Cosmonaut Stakes"
        },
        {
          "address": "https://rpc.testnet2.persistence.one/",
          "provider": "Persistence"
        },
        {
          "address": "https://persistence-testnet-rpc.polkachu.com/",
          "provider": "Polkachu"
        },
        {
          "address": "https://persistencecoretest-rpc.ytwofund.pro/",
          "provider": "YTWOFUND"
        },
        {
          "address": "http://persistence-testnet.paranorm.pro:24657/",
          "provider": "Paranorm"
        }
      ],
      "rest": [
        {
          "address": "https://api-persistence-testnet-01.stakeflow.io/",
          "provider": "StakeFlow"
        },
        {
          "address": "https://persistence-testnet-api.baryon.dev/",
          "provider": "Baryon"
        },
        {
          "address": "https://persistence-testnet-rest.cosmonautstakes.com/",
          "provider": "Cosmonaut Stakes"
        },
        {
          "address": "https://rest.testnet2.persistence.one/",
          "provider": "Persistence"
        },
        {
          "address": "https://persistence-testnet-api.polkachu.com/",
          "provider": "Polkachu"
        },
        {
          "address": "https://persistenceCoreTest-rest.ytwofund.pro",
          "provider": "YTWOFUND"
        }
      ],
      "grpc": [
        {
          "address": "persistence-testnet-grpc.polkachu.com:15490",
          "provider": "Polkachu"
        },
        {
          "address": "persistenceCoreTest-grpc.ytwofund.pro:9090",
          "provider": "YTWOFUND"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://testnet.mintscan.io/persistence-testnet",
        "tx_page": "https://testnet.mintscan.io/persistence-testnet/txs/${txHash}",
        "account_page": "https://testnet.mintscan.io/persistence-testnet/account/${accountAddress}"
      },
      {
        "kind": "StakeFlow",
        "url": "https://stakeflow.io/persistence-testnet",
        "tx_page": "https://stakeflow.io/persistence-testnet/transactions/${txHash}",
        "account_page": "https://stakeflow.io/persistence-testnet/accounts/${accountAddress}"
      },
      {
        "kind": "baryon",
        "url": "https://testnet-explorer.baryon.dev/test-core-2",
        "tx_page": "https://testnet-explorer.baryon.dev/test-core-2/tx/{txHash}",
        "account_page": "https://testnet-explorer.baryon.dev/test-core-2/account/${accountAddress}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "pryzmtestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Pryzm Testnet",
    "chain_id": "indigo-1",
    "bech32_prefix": "pryzm",
    "daemon_name": "pryzmd",
    "node_home": "$HOME/.pryzm",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "upryzm",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.015,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "upryzm"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.47"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://testnet-rpc.pryzm.zone",
          "provider": "PRYZM"
        }
      ],
      "rest": [
        {
          "address": "https://testnet-api.pryzm.zone",
          "provider": "PRYZM"
        }
      ],
      "grpc": [
        {
          "address": "https://testnet-grpc.pryzm.zone",
          "provider": "PRYZM"
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pryzmtestnet/images/pryzm-logo.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pryzmtestnet/images/pryzm-logo.svg"
    },
    "explorers": [
      {
        "kind": "PingPub",
        "url": "https://testnets.cosmosrun.info/pryzm-indigo-1",
        "tx_page": "https://testnets.cosmosrun.info/pryzm-indigo-1/tx/${txHash}",
        "account_page": "https://testnets.cosmosrun.info/pryzm-indigo-1/account/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pryzmtestnet/images/pryzm-logo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pryzmtestnet/images/pryzm-logo.svg"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "quasartestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Quasar Testnet",
    "chain_id": "qsr-questnet-04",
    "bech32_prefix": "quasar",
    "daemon_name": "quasarnoded",
    "node_home": "$HOME/.quasarnoded",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "staking": {
      "staking_tokens": [
        {
          "denom": "uqsr"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.46",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "0.27"
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://quasar-testnet-rpc.polkachu.com/",
          "provider": "Polkachu"
        },
        {
          "address": "https://questnet.quasar-finance.rhinostake.com/",
          "provider": "Rhino Stake"
        },
        {
          "address": "https://quasar-testnet-rpc.swiss-staking.ch",
          "provider": "Swiss Staking"
        }
      ],
      "rest": [
        {
          "address": "https://quasar-testnet-api.polkachu.com/",
          "provider": "Polkachu"
        },
        {
          "address": "https://questnet.quasar-finance.rhinostake.com/",
          "provider": "Rhino Stake"
        },
        {
          "address": "https://quasar-testnet-api.swiss-staking.ch/",
          "provider": "Swiss Staking"
        }
      ],
      "grpc": [
        {
          "address": "quasar-testnet-grpc.polkachu.com:18290",
          "provider": "Polkachu"
        },
        {
          "address": "quasar-testnet-grpc.swiss-staking.ch:10090",
          "provider": "Swiss Staking"
        }
      ]
    },
    "keywords": [
      "testnet"
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "quicksilvertestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Quicksilver Testnet",
    "chain_id": "rhye-2",
    "bech32_prefix": "quick",
    "daemon_name": "quicksilverd",
    "node_home": "$HOME/.quicksilverd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uqck",
          "low_gas_price": 0.0001,
          "average_gas_price": 0.0001,
          "high_gas_price": 0.00025
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uqck"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.46",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "0.29"
    },
    "logo_URIs": {
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "http://quick.rpc.t.stavr.tech:20027",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://quicksilver-testnet-rpc.polkachu.com/",
          "provider": "polkachu"
        }
      ],
      "rest": [
        {
          "address": "https://quick.api.t.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://quicksilver-testnet-api.polkachu.com/",
          "provider": "polkachu"
        }
      ],
      "grpc": [
        {
          "address": "http://quick.grpc.t.stavr.tech:9112",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "quicksilver-testnet-grpc.polkachu.com:11190",
          "provider": "polkachu"
        }
      ]
    },
    "explorers": [
      {
        "kind": "🔥STAVR🔥",
        "url": "https://explorer.stavr.tech/Quicksilver",
        "tx_page": "https://explorer.stavr.tech/Quicksilver/tx/${txHash}",
        "account_page": "https://explorer.stavr.tech/Quicksilver/account/${accountAddress}"
      },
      {
        "url": "https://testnet.quicksilver.explorers.guru",
        "tx_page": "https://testnet.quicksilver.explorers.guru/transaction/${txHash}",
        "account_page": "https://testnet.quicksilver.explorers.guru/account/${accountAddress}"
      }
    ],
    "images": [
      {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "qwoyntestnet",
    "status": "live",
    "network_type": "testnet",
    "website": "https://qwoyn.studio/",
    "pretty_name": "Qwoyn",
    "chain_id": "earendel-1",
    "bech32_prefix": "qwoyn",
    "daemon_name": "qwoynd",
    "node_home": "$HOME/.qwoynd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uqwoyn"
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uqwoyn"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.47.3"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://testnet-rpc.qwoyn.studio",
          "provider": "Qwoyn Studios"
        }
      ],
      "grpc": [
        {
          "address": "http://66.42.74.12:9090",
          "provider": "Qwoyn Studios"
        }
      ],
      "rest": [
        {
          "address": "https://testnet-api.qwoyn.studio",
          "provider": "Qwoyn Studios"
        }
      ]
    },
    "explorers": [
      {
        "kind": "pingfork",
        "url": "https://explorer.theamsolutions.info/qwoyn-testnet/",
        "tx_page": "https://explorer.theamsolutions.info/qwoyn-testnet/tx/${txHash}",
        "account_page": "https://explorer.theamsolutions.info/qwoyn-testnet/account/${accountAddress}"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/qwoyntestnet/images/qwoyn.png"
    },
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/qwoyntestnet/images/qwoyn.png"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "rsprovidertestnet",
    "chain_id": "provider",
    "pretty_name": "Replicated Security Provider Testnet",
    "status": "live",
    "network_type": "testnet",
    "bech32_prefix": "cosmos",
    "daemon_name": "gaiad",
    "node_home": "$HOME/.gaia",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uatom",
          "fixed_min_gas_price": 0.005
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uatom"
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.provider-sentry-01.rs-testnet.polypore.xyz",
          "provider": "Hypha"
        },
        {
          "address": "https://rpc.provider-sentry-02.rs-testnet.polypore.xyz",
          "provider": "Hypha"
        },
        {
          "address": "https://rpc.provider-state-sync-01.rs-testnet.polypore.xyz",
          "provider": "Hypha"
        },
        {
          "address": "https://rpc.provider-state-sync-02.rs-testnet.polypore.xyz",
          "provider": "Hypha"
        }
      ],
      "rest": [
        {
          "address": "https://rest.provider-sentry-01.rs-testnet.polypore.xyz",
          "provider": "Hypha"
        },
        {
          "address": "https://rest.provider-sentry-02.rs-testnet.polypore.xyz",
          "provider": "Hypha"
        },
        {
          "address": "https://rest.provider-state-sync-01.rs-testnet.polypore.xyz",
          "provider": "Hypha"
        },
        {
          "address": "https://rest.provider-state-sync-02.rs-testnet.polypore.xyz",
          "provider": "Hypha"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc.provider-sentry-01.rs-testnet.polypore.xyz",
          "provider": "Hypha"
        },
        {
          "address": "https://grpc.provider-sentry-02.rs-testnet.polypore.xyz",
          "provider": "Hypha"
        },
        {
          "address": "https://grpc.provider-state-sync-01.rs-testnet.polypore.xyz",
          "provider": "Hypha"
        },
        {
          "address": "https://grpc.provider-state-sync-02.rs-testnet.polypore.xyz",
          "provider": "Hypha"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Mintscan",
        "url": "https://testnet.mintscan.io/ics-testnet-provider",
        "tx_page": "https://testnet.mintscan.io/ics-testnet-provider/txs/${txHash}"
      },
      {
        "kind": "Ping.pub",
        "url": "https://explorer.rs-testnet.polypore.xyz/provider",
        "tx_page": "https://explorer.rs-testnet.polypore.xyz/provider/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "sagatestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Saga Testnet",
    "chain_id": "ssc-testnet-1",
    "bech32_prefix": "saga",
    "daemon_name": "sscd",
    "node_home": "$HOME/.ssc",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "utsaga",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.0025,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "utsaga"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.47",
      "cosmwasm_enabled": false
    },
    "apis": {
      "rpc": [
        {
          "address": "https://testnet-ssc.sagarpc.io/",
          "provider": "Saga"
        }
      ],
      "rest": [
        {
          "address": "https://testnet-ssc-lcd.sagarpc.io/",
          "provider": "Saga"
        }
      ],
      "grpc": [
        {
          "address": "testnet-ssc-grpc.sagarpc.io:443",
          "provider": "Saga"
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png"
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://mintscan.io/saga-testnet",
        "tx_page": "https://www.mintscan.io/saga-testnet/tx/${txHash}",
        "account_page": "https://mintscan.io/saga-testnet/address/${accountAddress}"
      }
    ],
    "keywords": [
      "testnet",
      "chainlet"
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "secretnetworktestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Secret Network",
    "chain_id": "pulsar-3",
    "pre_fork_chain_name": "secretnetworktestnet2",
    "bech32_prefix": "secret",
    "daemon_name": "secretd",
    "node_home": "$HOME/.secretd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 529,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uscrt",
          "fixed_min_gas_price": 0.1
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.testnet.secretsaturn.net",
          "provider": "𝕊ecret 𝕊aturn"
        },
        {
          "address": "https://rpc.pulsar.scrttestnet.com",
          "provider": "SCRT Testnet Committee"
        }
      ],
      "rest": [
        {
          "address": "https://lcd.testnet.secretsaturn.net",
          "provider": "𝕊ecret 𝕊aturn"
        },
        {
          "address": "https://api.pulsar.scrttestnet.com",
          "provider": "SCRT Testnet Committee"
        }
      ],
      "grpc-web": [
        {
          "address": "https://grpc.testnet.secretsaturn.net",
          "provider": "𝕊ecret 𝕊aturn"
        },
        {
          "address": "https://grpc.pulsar.scrttestnet.com",
          "provider": "SCRT Testnet Committee"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://testnet.ping.pub/secret",
        "tx_page": "https://testnet.ping.pub/secret/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "secretnetworktestnet2",
    "status": "killed",
    "network_type": "testnet",
    "pretty_name": "Secret Network Testnet",
    "chain_id": "pulsar-2",
    "bech32_prefix": "secret",
    "daemon_name": "secretd",
    "node_home": "$HOME/.secretd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 529,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uscrt",
          "fixed_min_gas_price": 0.1
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.testnet.secretsaturn.net",
          "provider": "𝕊ecret 𝕊aturn"
        },
        {
          "address": "https://rpc.pulsar.scrttestnet.com",
          "provider": "SCRT Testnet Committee"
        }
      ],
      "rest": [
        {
          "address": "http://testnet.securesecrets.org:1317",
          "provider": "Trivium | Trivium.Network"
        },
        {
          "address": "https://lcd.testnet.secretsaturn.net",
          "provider": "𝕊ecret 𝕊aturn"
        },
        {
          "address": "https://api.pulsar.scrttestnet.com",
          "provider": "SCRT Testnet Committee"
        }
      ],
      "grpc-web": [
        {
          "address": "https://grpc.testnet.secretsaturn.net",
          "provider": "𝕊ecret 𝕊aturn"
        },
        {
          "address": "https://grpc.pulsar.scrttestnet.com",
          "provider": "SCRT Testnet Committee"
        }
      ]
    },
    "explorers": [
      {
        "kind": "secret nodes",
        "url": "https://secretnodes.com/secret/chains/pulsar-2",
        "tx_page": "https://secretnodes.com/secret/chains/pulsar-2/transactions/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://testnet.ping.pub/secret",
        "tx_page": "https://testnet.ping.pub/secret/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "seidevnet3",
    "chain_id": "sei-devnet-3",
    "pretty_name": "Sei Devnet 3",
    "status": "live",
    "network_type": "devnet",
    "bech32_prefix": "sei",
    "daemon_name": "seid",
    "node_home": "$HOME/.sei",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "usei",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.sei-devnet-3.seinetwork.io",
          "provider": "Sei Foundation"
        },
        {
          "address": "https://sei-testnet-2-rpc.brocha.in",
          "provider": "Brochain"
        }
      ],
      "rest": [
        {
          "address": "https://rest.sei-devnet-3.seinetwork.io",
          "provider": "Sei Foundation"
        },
        {
          "address": "https://sei-testnet-2-rest.brocha.in",
          "provider": "Brochain"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc.sei-devnet-3.seinetwork.io",
          "provider": "Sei Foundation"
        }
      ]
    },
    "explorers": [
      {
        "kind": "explorers.guru",
        "url": "https://devnet.sei.explorers.guru",
        "tx_page": "https://devnet.sei.explorers.guru/transaction/${txHash}"
      },
      {
        "kind": "Brochain",
        "url": "https://testnet-explorer.brocha.in/sei%20atlantic%202",
        "tx_page": "https://testnet-explorer.brocha.in/sei%20atlantic%202/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "seitestnet",
    "chain_id": "atlantic-1",
    "pretty_name": "Sei Atlantic",
    "status": "live",
    "network_type": "testnet",
    "website": "https://www.sei.io/",
    "bech32_prefix": "sei",
    "daemon_name": "seid",
    "node_home": "$HOME/.sei",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "usei",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg"
    },
    "description": "Sei is the fastest Layer 1 blockchain, designed to scale with the industry.",
    "apis": {
      "rpc": [
        {
          "address": "https://sei-testnet-rpc.brocha.in",
          "provider": "Brochain"
        }
      ],
      "rest": [
        {
          "address": "https://sei-testnet-rest.brocha.in",
          "provider": "Brochain"
        }
      ]
    },
    "explorers": [
      {
        "kind": "explorers.guru",
        "url": "https://sei.explorers.guru",
        "tx_page": "https://sei.explorers.guru/transaction/${txHash}"
      },
      {
        "kind": "Brochain",
        "url": "https://testnet-explorer.brocha.in/sei",
        "tx_page": "https://testnet-explorer.brocha.in/sei/tx/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "seitestnet2",
    "chain_id": "atlantic-2",
    "pretty_name": "Sei Atlantic 2",
    "status": "live",
    "network_type": "testnet",
    "bech32_prefix": "sei",
    "daemon_name": "seid",
    "node_home": "$HOME/.sei",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "usei",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://sei-testnet-2-rpc.brocha.in",
          "provider": "Brochain"
        }
      ],
      "rest": [
        {
          "address": "https://sei-testnet-2-rest.brocha.in",
          "provider": "Brochain"
        }
      ]
    },
    "explorers": [
      {
        "kind": "explorers.guru",
        "url": "https://testnet.sei.explorers.guru",
        "tx_page": "https://testnet.sei.explorers.guru/transaction/${txHash}"
      },
      {
        "kind": "Brochain",
        "url": "https://testnet-explorer.brocha.in/sei%20atlantic%202",
        "tx_page": "https://testnet-explorer.brocha.in/sei%20atlantic%202/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "selfchaindevnet",
    "chain_id": "self-dev-1",
    "pretty_name": "Devnet 1",
    "status": "live",
    "network_type": "testnet",
    "bech32_prefix": "self",
    "daemon_name": "selfchaind",
    "node_home": "$HOME/.selfchain",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uself",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-devnet.selfchain.xyz",
          "provider": "Selfchain"
        }
      ],
      "rest": [
        {
          "address": "https://api-devnet.selfchain.xyz/",
          "provider": "Selfchain"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Selfchain",
        "url": "https://explorer-devnet.selfchain.xyz",
        "tx_page": "https://explorer-devnet.selfchain.xyz/self/transactions/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "sgetestnet",
    "chain_id": "sge-network-3",
    "pretty_name": "SGE Testnet",
    "status": "live",
    "network_type": "testnet",
    "website": "sgenetwork.io",
    "bech32_prefix": "sge",
    "daemon_name": "usge",
    "node_home": "$HOME/.sged",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "usge",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sgetestnet/images/sge.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sgetestnet/images/sge.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.testnet.sgenetwork.io",
          "provider": "Sge Network"
        },
        {
          "address": "https://testnet-saage-rpc.lavenderfive.com/ ",
          "provider": "Lavender.Five"
        },
        {
          "address": "https://saage-testnet-rpc.polkachu.com/",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc-t.sge.nodestake.top/",
          "provider": "Nodestake.top"
        },
        {
          "address": "https://sge.rpc.t.stavr.tech:443",
          "provider": "🔥STAVR🔥"
        }
      ],
      "rest": [
        {
          "address": "https://api.testnet.sgenetwork.io",
          "provider": "Sge Network"
        },
        {
          "address": "https://api-t.sge.nodestake.top/",
          "provider": "Nodestake.top"
        },
        {
          "address": "https://saage-testnet-api.polkachu.com/",
          "provider": "Polkachu"
        },
        {
          "address": "https://sge.api.t.stavr.tech",
          "provider": "🔥STAVR🔥"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Sge BlockExplorer",
        "url": "https://blockexplorer.testnet.sgenetwork.io/",
        "tx_page": "https://blockexplorer.testnet.sgenetwork.io/sge-network/tx/${txHash}"
      },
      {
        "kind": "🔥STAVR🔥",
        "url": "https://explorer.stavr.tech/Sge-Testnet",
        "tx_page": "https://explorer.stavr.tech/Sge-Testnet/tx/${txHash}",
        "account_page": "https://explorer.stavr.tech/Sge-Testnet/account/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sgetestnet/images/sge.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sgetestnet/images/sge.svg"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "sixtestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "SIX Fivenet",
    "chain_id": "fivenet",
    "bech32_prefix": "6x",
    "daemon_name": "sixd",
    "node_home": "$HOME/.six",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "usix",
          "fixed_min_gas_price": 1.25,
          "low_gas_price": 1.25,
          "average_gas_price": 1.5,
          "high_gas_price": 1.75
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "usix"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.45"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc1.fivenet.sixprotocol.net:443",
          "provider": ""
        }
      ],
      "rest": [
        {
          "address": "https://api1.fivenet.sixprotocol.net:443",
          "provider": ""
        }
      ]
    },
    "explorers": [
      {
        "kind": "sixscan",
        "url": "https://sixscan.io/fivenet",
        "tx_page": "https://sixscan.io/fivenet/tx/${txHash}"
      }
    ],
    "keywords": [
      "sixprotocol",
      "testnet"
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "sourcetestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Source Testnet",
    "chain_id": "source-testnet",
    "bech32_prefix": "source",
    "daemon_name": "sourced",
    "node_home": "$HOME/.source",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "usource",
          "low_gas_price": 0.03,
          "average_gas_price": 0.04,
          "high_gas_price": 0.05
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "usource"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.45",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "0.25"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc-t.source.nodestake.top",
          "provider": "Nodestake"
        },
        {
          "address": "https://rpc-source.nodeist.net",
          "provider": "Nodeist"
        },
        {
          "address": "https://source-testnet.rpc.kjnodes.com",
          "provider": "kjnodes"
        }
      ],
      "rest": [
        {
          "address": "https://api-t.source.nodestake.top",
          "provider": "Nodestake"
        },
        {
          "address": "https://api-source.nodeist.net",
          "provider": "Nodeist"
        },
        {
          "address": "https://source.api.t.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://source-testnet.api.kjnodes.com",
          "provider": "kjnodes"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc-t.source.nodestake.top",
          "provider": "nodestake"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Nodestake",
        "url": "https://explorer.nodestake.top/source-testnet",
        "tx_page": "https://explorer.nodestake.top/source-testnet/tx/${txHash}"
      },
      {
        "kind": "🔥STAVR🔥",
        "url": "https://explorer.stavr.tech/Source",
        "tx_page": "https://explorer.stavr.tech/Source/tx/${txHash}"
      },
      {
        "kind": "kjnodes",
        "url": "https://explorer.kjnodes.com/source-testnet",
        "tx_page": "https://explorer.kjnodes.com/source-testnet/txs/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "stargazetestnet",
    "status": "live",
    "network_type": "testnet",
    "website": "https://stargaze.zone/",
    "pretty_name": "Stargaze Testnet",
    "chain_id": "elgafar-1",
    "bech32_prefix": "stars",
    "daemon_name": "starsd",
    "node_home": "$HOME/.starsd",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ustars",
          "low_gas_price": 0.03,
          "average_gas_price": 0.04,
          "high_gas_price": 0.05
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.45",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "0.28"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.elgafar-1.stargaze-apis.com",
          "provider": "Stargaze Foundation"
        }
      ],
      "rest": [
        {
          "address": "https://rest.elgafar-1.stargaze-apis.com",
          "provider": "Stargaze Foundation"
        }
      ],
      "grpc": [
        {
          "address": "http://grpc-1.elgafar-1.stargaze-apis.com:26660",
          "provider": "Stargaze Foundation"
        },
        {
          "address": "http://grpc-2.elgafar-1.stargaze-apis.com:26660",
          "provider": "Stargaze Foundation"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://testnet-explorer.publicawesome.dev/stargaze",
        "tx_page": "https://testnet-explorer.publicawesome.dev/stargaze/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "statesettestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Stateset Testnet",
    "chain_id": "stateset-1-testnet",
    "bech32_prefix": "stateset",
    "daemon_name": "statesetd",
    "node_home": "$HOME/.statesetd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ustate",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.stateset.zone/",
          "provider": "stateset"
        }
      ],
      "rest": [
        {
          "address": "https://rest-api.stateset.zone",
          "provider": "stateset"
        }
      ]
    },
    "explorers": [
      {
        "kind": "bigdipper",
        "url": "https://explore.stateset.zone",
        "tx_page": "https://explore.stateset.zone/transactions/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "stridetestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Stride Testnet",
    "chain_id": "stride-testnet-1",
    "bech32_prefix": "stride",
    "daemon_name": "strided",
    "node_home": "$HOME/.stride",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ustrd",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "ustrd"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.46"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://stride.testnet-1.stridenet.co",
          "provider": "Stride"
        }
      ],
      "rest": [
        {
          "address": "https://stride.testnet-1.stridenet.co/api",
          "provider": "Stride"
        }
      ],
      "grpc": []
    },
    "explorers": [
      {
        "kind": "PingPub",
        "url": "https://testnet.ping.pub/stride",
        "tx_page": "https://testnet.ping.pub/stride/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "temporaltestnet",
    "chain_id": "temporal-test-2",
    "pretty_name": "Temporal Testnet",
    "status": "killed",
    "network_type": "testnet",
    "bech32_prefix": "temporal",
    "daemon_name": "temporald",
    "node_home": "$HOME/.temporal",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "utprl",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "utprl"
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.yieldmos.com/temporal-test-2",
          "provider": "Yieldmos"
        },
        {
          "address": "https://testnet-temporal-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five"
        }
      ],
      "rest": [
        {
          "address": "https://lcd.yieldmos.com/temporal-test-2",
          "provider": "Yieldmos"
        },
        {
          "address": "https://testnet-temporal-api.lavenderfive.com:443",
          "provider": "Lavender.Five"
        }
      ],
      "grpc": [
        {
          "address": "142.132.157.153:24190",
          "provider": "Yieldmos"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://testnet.explorer.thesilverfox.pro/temporal",
        "tx_page": "https://testnet.explorer.thesilverfox.pro/temporal/tx/${txHash}"
      },
      {
        "kind": "Nodes.Guru",
        "url": "https://testnet.temporal.explorers.guru",
        "tx_page": "https://testnet.temporal.explorers.guru/transaction/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://testnet.ping.pub/temporal",
        "tx_page": "https://testnet.ping.pub/temporal/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "terpnettestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Terp-Network",
    "chain_id": "90u-2",
    "bech32_prefix": "terp",
    "daemon_name": "terpd",
    "node_home": "$HOME/.terp",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uthiolx",
          "fixed_min_gas_price": 0.5,
          "low_gas_price": 0.75,
          "average_gas_price": 1,
          "high_gas_price": 1.25
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uterpx"
        }
      ]
    },
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "https://terp-testnet-rpc.itrocket.net:443/",
          "provider": "itrocket"
        }
      ],
      "rest": [
        {
          "address": "https://terp-testnet-api.itrocket.net:443/",
          "provider": "itrocket"
        }
      ],
      "grpc": [
        {
          "address": "terp-testnet-grpc.itrocket.net/",
          "provider": "itrocket"
        }
      ]
    },
    "explorers": [
      {
        "kind": "Ping Pub",
        "url": "https://explorer.nodestake.top/terp-testnet",
        "tx_page": "https://explorer.nodestake.top/terp-testnet/tx/${txHash}"
      },
      {
        "kind": "NODEXPLORER",
        "url": "https://explorer.nodexcapital.com",
        "tx_page": "https://explorer.nodexcapital.com/terp/tx/${txHash}",
        "account_page": "https://explorer.nodexcapital.com/terp/account/{$accountAddress}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "terra2testnet",
    "status": "live",
    "network_type": "testnet",
    "website": "https://www.terra.money/",
    "pretty_name": "Terra 2.0",
    "chain_id": "pisco-1",
    "daemon_name": "terrad",
    "node_home": "$HOME/.terra",
    "bech32_prefix": "terra",
    "slip44": 330,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uluna",
          "fixed_min_gas_price": 0.0125,
          "low_gas_price": 0.0125,
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
    "apis": {
      "rpc": [
        {
          "address": "https://pisco-rpc.terra.dev:443",
          "provider": "Terraform Labs"
        },
        {
          "address": "https://terra-testnet-rpc.polkachu.com:443",
          "provider": "Polkachu"
        }
      ],
      "rest": [
        {
          "address": "https://pisco-lcd.terra.dev:443",
          "provider": "Terraform Labs"
        },
        {
          "address": "https://terra-testnet-api.polkachu.com:443",
          "provider": "Polkachu"
        }
      ],
      "grpc": [
        {
          "address": "terra-testnet-grpc.polkachu.com:11790",
          "provider": "Polkachu"
        }
      ]
    },
    "explorers": [
      {
        "kind": "finder",
        "url": "http://finder.terra.money/testnet/",
        "tx_page": "https://finder.terra.money/testnet/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "ulastestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "ULAS",
    "chain_id": "ulas",
    "bech32_prefix": "ulas",
    "daemon_name": "ulasd",
    "node_home": "$HOME/.ulas",
    "codebase": {},
    "apis": {
      "rpc": [
        {
          "address": "http://65.49.204.199:26657",
          "provider": "UlasNetwork"
        }
      ],
      "rest": [
        {
          "address": "http://65.49.204.199:1317",
          "provider": "UlasNetwork"
        }
      ],
      "grpc": [
        {
          "address": "http://65.49.204.199:9090",
          "provider": "UlasNetwork"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ulas-scan",
        "url": "https://testnet-explorer.ulas.network",
        "tx_page": "https://testnet-explorer.ulas.network/ulas/tx/${txHash}"
      }
    ],
    "slip44": 118
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "uniontestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "union Testnet",
    "chain_id": "union-testnet-4",
    "bech32_prefix": "union",
    "daemon_name": "uniond",
    "node_home": "$HOME/.uniond",
    "key_algos": [
      "bn254"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "muno",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0.0025,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "muno"
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.cryptware.io",
          "provider": "cryptware"
        },
        {
          "address": "https://union-testnet-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc-testnet-union.nodeist.net",
          "provider": "Nodeist"
        }
      ],
      "rest": [
        {
          "address": "https://api.cryptware.io",
          "provider": "cryptware"
        },
        {
          "address": "https://union-testnet-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://api-testnet-union.nodeist.net",
          "provider": "Nodeist"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc.cryptware.io",
          "provider": "cryptware"
        },
        {
          "address": "http://union-testnet-grpc.polkachu.com:24690",
          "provider": "Polkachu"
        },
        {
          "address": "https://grpc-testnet-union.nodeist.net",
          "provider": "Nodeist"
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/union/images/union.png"
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://explorer.cryptware.io/union",
        "tx_page": "https://explorer.cryptware.io/union/tx/${txHash}",
        "account_page": "https://explorer.cryptware.io/union/account/${accountAddress}"
      }
    ],
    "keywords": [
      "testnet"
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/union/images/union.png"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "upticktestnet",
    "status": "live",
    "network_type": "testnet",
    "website": "https://www.uptickproject.com/",
    "pretty_name": "Uptick",
    "chain_id": "uptick_7000-2",
    "bech32_prefix": "uptick",
    "daemon_name": "uptickd",
    "node_home": "$HOME/.uptickd",
    "key_algos": [
      "ethsecp256k1"
    ],
    "extra_codecs": [
      "ethermint"
    ],
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "auptick",
          "low_gas_price": 0,
          "average_gas_price": 0,
          "high_gas_price": 0
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.46.5"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://uptick-7000-2-rpc.staketab.org:443",
          "provider": "Staketab"
        }
      ],
      "rest": [
        {
          "address": "https://uptick-7000-2-rest.staketab.org",
          "provider": "Staketab"
        }
      ],
      "grpc": [
        {
          "address": "services.staketab.com:9004",
          "provider": "Staketab"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://explorer.testnet.uptick.network/uptick-network-testnet",
        "tx_page": "https://explorer.testnet.uptick.network/uptick-network-testnet/tx/${txHash}"
      },
      {
        "kind": "Nodes.Guru",
        "url": "https://uptick.explorers.guru/",
        "tx_page": "https://uptick.explorers.guru/transaction/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "vincechaintestnet",
    "status": "killed",
    "network_type": "testnet",
    "pretty_name": "VinceChain Testnet",
    "chain_id": "vince_1903-1",
    "bech32_prefix": "vce",
    "node_home": "$HOME/.vinced",
    "slip44": 60,
    "key_algos": [
      "ethsecp256k1"
    ],
    "extra_codecs": [
      "ethermint"
    ],
    "fees": {
      "fee_tokens": [
        {
          "denom": "avce",
          "fixed_min_gas_price": 250000000,
          "low_gas_price": 10000000000,
          "average_gas_price": 25000000000,
          "high_gas_price": 40000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "avce"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/vincechaintestnet/images/vince.png"
    },
    "apis": {
      "rpc": [
        {
          "address": "http://api-testnet.vincechain.com/:26657/",
          "provider": "vincescan.com"
        }
      ],
      "rest": [
        {
          "address": "http://lcd-testnet.vincechain.com/:1317/",
          "provider": "vincescan.com"
        }
      ],
      "grpc": [],
      "evm-http-jsonrpc": [
        {
          "address": "http://rpc-testnet.vincechain.com",
          "provider": "vincescan.com"
        }
      ]
    },
    "explorers": [
      {
        "kind": "blockscout",
        "url": "https://scan-testnet.vincechain.com",
        "tx_page": "https://scan-testnet.vincechain.com/tx/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/vincechaintestnet/images/vince.png"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "wavehashtestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "wavehash Testnet",
    "chain_id": "testnet-1",
    "bech32_prefix": "wavehash",
    "daemon_name": "wavehashd",
    "node_home": "$HOME/.wavehash",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uwahax",
          "low_gas_price": 0.0025,
          "average_gas_price": 0.0025,
          "high_gas_price": 0.0024
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uwahax"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.45",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "0.30"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.wavehash.online/",
          "provider": "WaveHash Network"
        }
      ],
      "rest": [
        {
          "address": "https://lcd.wavehash.online/",
          "provider": "WaveHash Network"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc.wavehash.online/",
          "provider": "WaveHash Network"
        }
      ]
    },
    "explorers": [
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/directory/testnet/wavehashtestnet",
        "tx_page": "https://atomscan.com/directory/testnet/wavehashtestnet/transactions/${txHash}"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "xiontestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Xion Testnet",
    "chain_id": "xion-testnet-1",
    "bech32_prefix": "xion",
    "daemon_name": "xiond",
    "node_home": "$HOME/.xiond",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uxion",
          "fixed_min_gas_price": 0,
          "low_gas_price": 0,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uxion"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.47.3",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "0.40.1"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.xion-testnet-1.burnt.com",
          "provider": "burnt-labs"
        }
      ],
      "rest": [
        {
          "address": "https://api.xion-testnet-1.burnt.com",
          "provider": "burnt-labs"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc.xion-testnet-1.burnt.com:443",
          "provider": "burnt-labs"
        }
      ]
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt.png"
    },
    "keywords": [
      "xion",
      "burnt",
      "testnet"
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt.png"
      }
    ]
  },
  {
    "$schema": "../../chain.schema.json",
    "chain_name": "zetachaintestnet",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "ZetaChain Testnet",
    "chain_id": "athens_7001-1",
    "bech32_prefix": "zeta",
    "daemon_name": "zetacored",
    "node_home": "$HOME/.zetacored",
    "key_algos": [
      "ethsecp256k1"
    ],
    "extra_codecs": [
      "ethermint"
    ],
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "azeta",
          "low_gas_price": 20000000000,
          "average_gas_price": 25000000000,
          "high_gas_price": 40000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "azeta"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.46"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://zetachain-athens.blockpi.network/rpc/v1/public",
          "provider": "BlockPI"
        }
      ],
      "rest": [
        {
          "address": "https://zetachain-athens.blockpi.network/lcd/v1/public",
          "provider": "BlockPI"
        }
      ],
      "grpc": [
        {
          "address": "https://zetachain-testnet.nodejumper.io:9090",
          "provider": "NodeJumper"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ZetaScan",
        "url": "https://explorer.zetachain.com/",
        "tx_page": "https://explorer.zetachain.com/cc/tx/${txHash}"
      },
      {
        "kind": "BlockScout",
        "url": "https://zetachain-athens-3.blockscout.com/",
        "tx_page": "https://zetachain-athens-3.blockscout.com/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "tgrade",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://tgrade.finance/",
    "pretty_name": "Tgrade",
    "chain_id": "tgrade-mainnet-1",
    "bech32_prefix": "tgrade",
    "daemon_name": "tgrade",
    "node_home": "$HOME/.tgrade",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "utgd",
          "fixed_min_gas_price": 0.05,
          "low_gas_price": 0.05,
          "average_gas_price": 0.075,
          "high_gas_price": 0.1
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "utgd"
        }
      ]
    },
    "codebase": {
      "cosmwasm_enabled": true
    },
    "apis": {
      "rpc": [
        {
          "address": "https://rpc.mainnet-1.tgrade.confio.run",
          "provider": "Confio"
        },
        {
          "address": "https://rpc.tgrade.posthuman.digital",
          "provider": "POSTHUMAN ꝏ DVS"
        }
      ],
      "rest": [
        {
          "address": "https://api.mainnet-1.tgrade.confio.run",
          "provider": "Confio"
        },
        {
          "address": "https://lcd.tgrade.posthuman.digital",
          "provider": "POSTHUMAN ꝏ DVS"
        }
      ],
      "grpc": []
    },
    "explorers": [
      {
        "kind": "aneka",
        "url": "https://tgrade.aneka.io",
        "tx_page": "https://tgrade.aneka.io/txs/${txHash}",
        "account_page": "https://tgrade.aneka.io/accounts/${accountAddress}"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-logo-gradient_h.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg"
    },
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-logo-gradient_h.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "thorchain",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://thorchain.org/",
    "pretty_name": "THORChain",
    "chain_id": "thorchain-mainnet-v1",
    "bech32_prefix": "thor",
    "daemon_name": "thord",
    "node_home": "$HOME/.thornode",
    "slip44": 931,
    "codebase": {},
    "apis": {
      "rpc": [],
      "rest": []
    },
    "explorers": [
      {
        "kind": "THORChain explorer",
        "url": "https://thorchain.net",
        "tx_page": "https://thorchain.net/#/txs/${txHash}"
      },
      {
        "kind": "viewblock",
        "url": "https://viewblock.io/thorchain",
        "tx_page": "https://viewblock.io/thorchain/tx/${txHash}"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "umee",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://www.umee.cc/",
    "pretty_name": "Umee",
    "chain_id": "umee-1",
    "bech32_prefix": "umee",
    "daemon_name": "umeed",
    "node_home": "$HOME/.umee",
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uumee",
          "fixed_min_gas_price": 0.1,
          "low_gas_price": 0.1,
          "average_gas_price": 0.12,
          "high_gas_price": 0.2
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uumee"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.46",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "0.31"
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://umee-rpc.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://rpc-umee-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://umee-mainnet-rpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "http://umee.rpc.m.stavr.tech:10457",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://rpc-umee.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "http://rpc-umee-0.node75.org:26657",
          "provider": "Pro-Nodes75"
        },
        {
          "address": "https://umee-rpc.quantnode.tech",
          "provider": "QuantNode"
        },
        {
          "address": "https://umee-rpc.tienthuattoan.ventures",
          "provider": "TienThuatToan"
        },
        {
          "address": "https://rpc-umee-01.stakeflow.io",
          "provider": "Stakeflow"
        },
        {
          "address": "https://umee-rpc.staketab.org:443",
          "provider": "Staketab"
        },
        {
          "address": "https://umee-rpc.theamsolutions.info",
          "provider": "AM Solutions"
        },
        {
          "address": "https://umee.rpc.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://umee-rpc.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://rpc-umee.mms.team",
          "provider": "MMS"
        },
        {
          "address": "https://rpc-umee.mzonder.com",
          "provider": "MZONDER"
        },
        {
          "address": "https://umee-rpc.stake-town.com",
          "provider": "StakeTown"
        },
        {
          "address": "https://umee-rpc.highstakes.ch:26657/",
          "provider": "High Stakes 🇨🇭"
        },
        {
          "address": "https://umee.rpc.stakevillage.net:443",
          "provider": "Stake Village"
        }
      ],
      "rest": [
        {
          "address": "https://api-umee-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://umee.api.m.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://api-umee.cosmos-spaces.cloud",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "https://umee-mainnet-lcd.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "https://umee-api.polkachu.com",
          "provider": "Polkachu"
        },
        {
          "address": "https://umee-lcd.quantnode.tech",
          "provider": "QuantNode"
        },
        {
          "address": "https://umee-api.tienthuattoan.ventures",
          "provider": "TienThuatToan"
        },
        {
          "address": "https://api-umee-01.stakeflow.io",
          "provider": "Stakeflow"
        },
        {
          "address": "https://umee-rest.staketab.org",
          "provider": "Staketab"
        },
        {
          "address": "https://umee-api.theamsolutions.info",
          "provider": "AM Solutions"
        },
        {
          "address": "https://umee.api.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://umee-api.w3coins.io",
          "provider": "w3coins"
        },
        {
          "address": "https://api-umee.mms.team",
          "provider": "MMS"
        },
        {
          "address": "https://api-umee.mzonder.com",
          "provider": "MZONDER"
        },
        {
          "address": "https://umee-api.stake-town.com",
          "provider": "StakeTown"
        },
        {
          "address": "https://umee-api.highstakes.ch:1317/",
          "provider": "High Stakes 🇨🇭"
        },
        {
          "address": "https://umee.api.stakevillage.net",
          "provider": "Stake Village"
        }
      ],
      "grpc": [
        {
          "address": "grpc-umee-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        },
        {
          "address": "umee-grpc.polkachu.com:13690",
          "provider": "Polkachu"
        },
        {
          "address": "umee-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "grpc-umee.cosmos-spaces.cloud:2110",
          "provider": "Cosmos Spaces"
        },
        {
          "address": "umee-grpc.quantnode.tech:9090",
          "provider": "QuantNode gRPC"
        },
        {
          "address": "umee.grpc.m.stavr.tech:9090",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "umee-grpc.quantnode.tech:9091",
          "provider": "QuantNode gRPCweb"
        },
        {
          "address": "umee-grpc.tienthuattoan.ventures:9090",
          "provider": "TienThuatToan"
        },
        {
          "address": "grpc-umee-01.stakeflow.io:9990",
          "provider": "Stakeflow"
        },
        {
          "address": "services.staketab.com:9020",
          "provider": "Staketab"
        },
        {
          "address": "umee.grpc.kjnodes.com:16290",
          "provider": "kjnodes"
        },
        {
          "address": "umee-grpc.w3coins.io:13690",
          "provider": "w3coins"
        },
        {
          "address": "grpc-umee.mms.team:443",
          "provider": "MMS"
        },
        {
          "address": "grpc-umee.mzonder.com:443",
          "provider": "MZONDER"
        },
        {
          "address": "umee-grpc.stake-town.com:443",
          "provider": "StakeTown"
        },
        {
          "address": "umee.grpc.stakevillage.net:11090",
          "provider": "Stake Village"
        }
      ]
    },
    "explorers": [
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/umee/",
        "tx_page": "https://www.mintscan.io/umee/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/umee/accounts/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/umee",
        "tx_page": "https://ping.pub/umee/tx/${txHash}"
      },
      {
        "kind": "🔥STAVR🔥 Explorer",
        "url": "https://explorer.stavr.tech/umee",
        "tx_page": "https://explorer.stavr.tech/umee/tx/${txHash}"
      },
      {
        "kind": "explorers.guru",
        "url": "https://umee.explorers.guru",
        "tx_page": "https://umee.explorers.guru/transaction/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/umee",
        "tx_page": "https://atomscan.com/umee/transactions/${txHash}",
        "account_page": "https://atomscan.com/umee/accounts/${accountAddress}"
      },
      {
        "kind": "Stakeflow",
        "url": "https://stakeflow.io/umee",
        "account_page": "https://stakeflow.io/umee/accounts/${accountAddress}"
      },
      {
        "kind": "Stake-Take",
        "url": "https://explorer.stake-take.com/umee",
        "tx_page": "https://explorer.stake-take.com/umee/transactions/${txHash}",
        "account_page": "https://explorer.stake-take.com/umee/account/${accountAddress}"
      },
      {
        "kind": "Stake Village",
        "url": "https://exp.stakevillage.net/umee",
        "tx_page": "https://exp.stakevillage.net/umee/tx/${txHash}",
        "account_page": "https://exp.stakevillage.net/umee/account/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "unification",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://unification.com/",
    "pretty_name": "Unification",
    "chain_id": "FUND-MainNet-2",
    "bech32_prefix": "und",
    "daemon_name": "und",
    "node_home": "$HOME/.und_mainchain",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 5555,
    "fees": {
      "fee_tokens": [
        {
          "denom": "nund",
          "fixed_min_gas_price": 25,
          "low_gas_price": 100,
          "average_gas_price": 200,
          "high_gas_price": 300
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "nund"
        }
      ],
      "lock_duration": {
        "time": "1814400s"
      }
    },
    "codebase": {
      "cosmos_sdk_version": "0.46.15",
      "cosmwasm_enabled": false
    },
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg"
      }
    ],
    "apis": {
      "rpc": [
        {
          "address": "https://rpc1.unification.io:443",
          "provider": "Unification"
        },
        {
          "address": "https://rpc.unification.chainmasters.ninja/",
          "provider": "Chainmasters"
        }
      ],
      "rest": [
        {
          "address": "https://rest.unification.io",
          "provider": "Unification"
        },
        {
          "address": "https://rest.unification.chainmasters.ninja/",
          "provider": "Chainmasters"
        }
      ],
      "grpc": [
        {
          "address": "grpc.unification.io:443",
          "provider": "Unification"
        },
        {
          "address": "grpc.unification.chainmasters.info",
          "provider": "Chainmasters"
        }
      ]
    },
    "explorers": [
      {
        "kind": "bigdipper",
        "url": "https://explorer.unification.io/",
        "tx_page": "https://explorer.unification.io/transactions/${txHash}",
        "account_page": "https://explorer.unification.io/accounts/${accountAddress}"
      },
      {
        "kind": "ping.pub",
        "url": "https://explorer.unification.chainmasters.ninja/unification",
        "tx_page": "https://explorer.unification.chainmasters.ninja/unification/tx/${txHash}",
        "account_page": "https://explorer.unification.chainmasters.ninja/Unification/account/${accountAddress}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/unification",
        "tx_page": "https://atomscan.com/unification/transactions/${txHash}",
        "account_page": "https://atomscan.com/unification/accounts/${accountAddress}"
      }
    ],
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg"
    }
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "ununifi",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://ununifi.io/",
    "pretty_name": "UnUniFi",
    "chain_id": "ununifi-beta-v1",
    "bech32_prefix": "ununifi",
    "daemon_name": "ununifid",
    "node_home": "$HOME/.ununifi",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uguu",
          "fixed_min_gas_price": 0.0025,
          "low_gas_price": 0.0025,
          "average_gas_price": 0.025,
          "high_gas_price": 0.04
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uguu"
        }
      ],
      "lock_duration": {
        "time": "1209600s"
      }
    },
    "codebase": {
      "cosmos_sdk_version": "v0.47.3-custom-bank-1",
      "cosmwasm_enabled": true,
      "cosmwasm_version": "v0.40.1"
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "http://a.lcd.ununifi.cauchye.net:26657",
          "provider": "CauchyE"
        },
        {
          "address": "https://rpc.ununifi.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://ununifi-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://ununifi-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://ununifi-rpc.genznodes.dev",
          "provider": "genznodes"
        }
      ],
      "rest": [
        {
          "address": "https://a.lcd.ununifi.cauchye.net:1318",
          "provider": "CauchyE"
        },
        {
          "address": "https://b.lcd.ununifi.cauchye.net:1318",
          "provider": "CauchyE"
        },
        {
          "address": "https://api.ununifi.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://ununifi-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "https://ununifi-api.genznodes.dev",
          "provider": "genznodes"
        }
      ],
      "grpc": [
        {
          "address": "a.lcd.ununifi.cauchye.net:9092",
          "provider": "CauchyE"
        },
        {
          "address": "b.lcd.ununifi.cauchye.net:9092",
          "provider": "CauchyE"
        },
        {
          "address": "ununifi-mainnet-grpc.autostake.com:443",
          "provider": "AutoStake 🛡️ Slash Protected"
        },
        {
          "address": "grpc.ununifi.nodestake.top:9090",
          "provider": "NodeStake"
        },
        {
          "address": "https://grpc-ununifi.nodeist.net",
          "provider": "Nodeist"
        },
        {
          "address": "https://ununifi-grpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "ununifi-grpc.genznodes.dev:54090",
          "provider": "genznodes"
        }
      ]
    },
    "explorers": [
      {
        "kind": "UnUniFi Explorer",
        "url": "https://ununifi.io/explorer",
        "tx_page": "https://ununifi.io/explorer/txs/${txHash}"
      },
      {
        "kind": "NodeStake Explorer",
        "url": "https://explorer.nodestake.top/ununifi",
        "tx_page": "https://explorer.nodestake.top/ununifi/tx/${txHash}"
      },
      {
        "kind": "Nodeist Explorer",
        "url": "https://exp.nodeist.net/Ununifi",
        "tx_page": "https://exp.nodeist.net/Ununifi/tx/${txHash}"
      }
    ],
    "keywords": [
      "staking",
      "wasm",
      "assets",
      "nft"
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "uptick",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://uptick.network/",
    "pretty_name": "Uptick",
    "chain_id": "uptick_117-1",
    "bech32_prefix": "uptick",
    "daemon_name": "uptickd",
    "node_home": "$HOME/.uptickd",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "auptick",
          "fixed_min_gas_price": 10000000000,
          "low_gas_price": 10000000000,
          "average_gas_price": 25000000000,
          "high_gas_price": 40000000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "auptick"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.46",
      "cosmwasm_enabled": false,
      "cosmwasm_version": ""
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://uptick-rpc.brocha.in:443",
          "provider": "Brochain"
        },
        {
          "address": "https://uptick.rpc.bccnodes.com:443",
          "provider": "BccNodes"
        },
        {
          "address": "https://rpc.uptick.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "http://uptick.rpc.nodersteam.com:21657",
          "provider": "[NODERS]TEAM"
        },
        {
          "address": "https://uptick.rpc.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "http://uptick.rpc.m.stavr.tech:3157",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://m-uptick.rpc.utsa.tech",
          "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
        },
        {
          "address": "https://uptick-mainnet-rpc.itrocket.net:443",
          "provider": "itrocket"
        },
        {
          "address": "https://uptick.rpc.liveraven.net",
          "provider": "LiveRaveN"
        },
        {
          "address": "https://uptick-rpc.staketab.org:443",
          "provider": "Staketab"
        },
        {
          "address": "https://uptick-rpc.stakerhouse.com",
          "provider": "StakerHouse"
        },
        {
          "address": "https://rpc-uptick.cakralabs.site",
          "provider": "Cakra Labs"
        },
        {
          "address": "https://rpc-uptick.sr20de.xyz",
          "provider": "Sr20de"
        }
      ],
      "rest": [
        {
          "address": "https://uptick-rest.brocha.in:443",
          "provider": "Brochain"
        },
        {
          "address": "http://uptick.api.nodersteam.com:21017",
          "provider": "[NODERS]TEAM"
        },
        {
          "address": "https://api.uptick.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://uptick.api.kjnodes.com",
          "provider": "kjnodes"
        },
        {
          "address": "https://uptick.api.m.stavr.tech",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "https://m-uptick.api.utsa.tech",
          "provider": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀"
        },
        {
          "address": "https://uptick-mainnet-api.itrocket.net:443",
          "provider": "itrocket"
        },
        {
          "address": "https://uptick.api.liveraven.net",
          "provider": "LiveRaveN"
        },
        {
          "address": "https://uptick-rest.staketab.org",
          "provider": "Staketab"
        },
        {
          "address": "https://uptick-rest.stakerhouse.com",
          "provider": "StakerHouse"
        },
        {
          "address": "https://rest-uptick.cakralabs.site",
          "provider": "Cakra Labs"
        },
        {
          "address": "https://api-uptick.sr20de.xyz",
          "provider": "Sr20de"
        }
      ],
      "grpc": [
        {
          "address": "https://grpc.uptick.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "uptick.rpc.bccnodes.com:9690",
          "provider": "BccNodes"
        },
        {
          "address": "uptick.grpc.nodersteam.com:9211",
          "provider": "[NODERS]TEAM"
        },
        {
          "address": "uptick.grpc.kjnodes.com:11590",
          "provider": "kjnodes"
        },
        {
          "address": "uptick.grpc.m.stavr.tech:1901",
          "provider": "🔥STAVR🔥"
        },
        {
          "address": "uptick-mainnet-grpc.itrocket.net:10090",
          "provider": "itrocket"
        },
        {
          "address": "https://uptick.grpc.liveraven.net",
          "provider": "LiveRaveN"
        },
        {
          "address": "services.staketab.com:9190",
          "provider": "Staketab"
        },
        {
          "address": "uptick-grpc.stakerhouse.com:443",
          "provider": "StakerHouse"
        },
        {
          "address": "grpc-uptick.mms.team:443",
          "provider": "MMS"
        },
        {
          "address": "https://grpc-uptick.sr20de.xyz",
          "provider": "Sr20de"
        }
      ],
      "evm-http-jsonrpc": [
        {
          "address": "https://jsonrpc.uptick.nodestake.top",
          "provider": "NodeStake"
        },
        {
          "address": "https://uptick.jsonrpc.liveraven.net",
          "provider": "LiveRaveN"
        },
        {
          "address": "https://evm-uptick.sr20de.xyz",
          "provider": "Sr20de"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://explorers.brocha.in/uptick",
        "tx_page": "https://explorers.brocha.in/uptick/tx/${txHash}"
      },
      {
        "kind": "NodeStake Explorer",
        "url": "https://explorer.nodestake.top/uptick",
        "tx_page": "https://explorer.nodestake.top/uptick/tx/${txHash}"
      },
      {
        "kind": "BccNodes Explorer",
        "url": "https://explorer.bccnodes.com/uptick-M",
        "tx_page": "https://explorer.bccnodes.com/uptick-M/tx/${txHash}"
      },
      {
        "kind": "🔥STAVR🔥 Explorer",
        "url": "https://explorer.stavr.tech/uptick-mainnet",
        "tx_page": "https://explorer.stavr.tech/uptick-mainnet/tx/${txHash}"
      },
      {
        "kind": "𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀 Explorer",
        "url": "https://exp.utsa.tech/uptick",
        "tx_page": "https://exp.utsa.tech/uptick/tx/${txHash}"
      },
      {
        "kind": "cosmotracker",
        "url": "https://cosmotracker.com/uptick",
        "tx_page": "https://cosmotracker.com/uptick/tx/${txHash}"
      },
      {
        "kind": "Upscan",
        "url": "https://upscan.xyz/",
        "tx_page": "https://upscan.xyz/uptick_117-1/tx/${txHash}"
      },
      {
        "kind": "Sr20de",
        "url": "https://explorer.sr20de.xyz/uptick",
        "tx_page": "https://explorer.sr20de.xyz/uptick/tx/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "vidulum",
    "status": "live",
    "network_type": "mainnet",
    "website": "https://vidulum.app/",
    "pretty_name": "Vidulum",
    "chain_id": "vidulum-1",
    "bech32_prefix": "vdl",
    "daemon_name": "vidulumd",
    "node_home": "$HOME/.vidulum",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 370,
    "fees": {
      "fee_tokens": [
        {
          "denom": "uvdl",
          "fixed_min_gas_price": 0.0002,
          "low_gas_price": 0.002,
          "average_gas_price": 0.005,
          "high_gas_price": 0.007
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "uvdl"
        }
      ]
    },
    "codebase": {},
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://mainnet-rpc.vidulum.app/",
          "provider": "vidulum"
        },
        {
          "address": "https://rpc-vidulum-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        }
      ],
      "rest": [
        {
          "address": "https://mainnet-lcd.vidulum.app",
          "provider": "vidulum"
        },
        {
          "address": "https://api-vidulum-ia.cosmosia.notional.ventures/",
          "provider": "Notional"
        },
        {
          "address": "https://api-vdl.nodine.id/",
          "provider": "Nodine.ID"
        }
      ],
      "grpc": [
        {
          "address": "grpc-vidulum-ia.cosmosia.notional.ventures:443",
          "provider": "Notional"
        }
      ]
    },
    "explorers": [
      {
        "kind": "ping.pub",
        "url": "https://explorers.vidulum.app/vidulum",
        "tx_page": "https://explorers.vidulum.app/vidulum/tx/${txHash}"
      },
      {
        "kind": "ping.pub",
        "url": "https://ping.pub/vidulum",
        "tx_page": "https://ping.pub/vidulum/tx/${txHash}"
      },
      {
        "kind": "atomscan",
        "url": "https://atomscan.com/vidulum",
        "tx_page": "https://atomscan.com/vidulum/transactions/${txHash}",
        "account_page": "https://atomscan.com/vidulum/accounts/${accountAddress}"
      },
      {
        "kind": "Nodine Explorer",
        "url": "https://explorer.co.id/vidulum",
        "tx_page": "https://explorer.co.id/vidulum/tx/${txHash}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg"
      }
    ]
  },
  {
    "$schema": "../chain.schema.json",
    "chain_name": "xpla",
    "status": "live",
    "website": "https://xpla.io",
    "network_type": "mainnet",
    "pretty_name": "XPLA",
    "chain_id": "dimension_37-1",
    "bech32_prefix": "xpla",
    "daemon_name": "xplad",
    "node_home": "$HOME/.xpla",
    "key_algos": [
      "ethsecp256k1"
    ],
    "slip44": 60,
    "fees": {
      "fee_tokens": [
        {
          "denom": "axpla",
          "fixed_min_gas_price": 850000000000,
          "low_gas_price": 850000000000,
          "average_gas_price": 1147500000000,
          "high_gas_price": 1487500000000
        }
      ]
    },
    "staking": {
      "staking_tokens": [
        {
          "denom": "axpla"
        }
      ]
    },
    "codebase": {
      "cosmos_sdk_version": "0.45.16",
      "cosmwasm_version": "0.33.0"
    },
    "logo_URIs": {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png",
      "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg"
    },
    "apis": {
      "rpc": [
        {
          "address": "https://dimension-rpc.xpla.dev",
          "provider": "Holdings"
        },
        {
          "address": "https://xpla-rpc.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        }
      ],
      "rest": [
        {
          "address": "https://dimension-lcd.xpla.io",
          "provider": "ZenaAD"
        },
        {
          "address": "https://dimension-lcd.xpla.dev",
          "provider": "Holdings"
        },
        {
          "address": "https://xpla-api.lavenderfive.com:443",
          "provider": "Lavender.Five Nodes 🐝"
        },
        {
          "address": "http://xpla.api.staking-explorer.com",
          "provider": "staking-explorer.com"
        }
      ],
      "grpc": [],
      "evm-http-jsonrpc": [
        {
          "address": "https://dimension-evm-rpc.xpla.dev",
          "provider": "Holdings"
        }
      ]
    },
    "explorers": [
      {
        "kind": "explorer.xpla",
        "url": "https://explorer.xpla.io",
        "tx_page": "https://explorer.xpla.io/mainnet/tx/${txHash}"
      },
      {
        "kind": "finder",
        "url": "https://finder.xpla.io",
        "tx_page": "https://finder.xpla.io/mainnet/tx/${txHash}"
      },
      {
        "kind": "mintscan",
        "url": "https://www.mintscan.io/xpla",
        "tx_page": "https://www.mintscan.io/xpla/transactions/${txHash}",
        "account_page": "https://www.mintscan.io/xpla/accounts/${accountAddress}"
      }
    ],
    "images": [
      {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg"
      }
    ]
  }
];
export default chains;
    