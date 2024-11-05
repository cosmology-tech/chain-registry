import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'planq',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://planq.network/',
  prettyName: 'Planq',
  chainType: 'cosmos',
  chainId: 'planq_7070-2',
  bech32Prefix: 'plq',
  nodeHome: '$HOME/.planqd',
  daemonName: 'planqd',
  keyAlgos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'aplanq',
        fixedMinGasPrice: 20000000000,
        lowGasPrice: 30000000000,
        averageGasPrice: 35000000000,
        highGasPrice: 40000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'aplanq'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/planq-network/planq',
    recommendedVersion: 'v1.1.0',
    compatibleVersions: ['v1.1.0'],
    binaries: {
      "linux/amd64": 'https://github.com/planq-network/planq/releases/download/v1.1.0/planq_1.1.0_linux_amd64.tar.gz',
      "linux/arm64": 'https://github.com/planq-network/planq/releases/download/v1.1.0/planq_1.1.0_linux_arm64.tar.gz',
      "darwin/amd64": 'https://github.com/planq-network/planq/releases/download/v1.1.0/planq_1.1.0_darwin_amd64.tar.gz',
      "darwin/arm64": 'https://github.com/planq-network/planq/releases/download/v1.1.0/planq_1.1.0_darwin_arm64.tar.gz',
      "windows/amd64": 'https://github.com/planq-network/planq/releases/download/v1.1.0/planq_1.1.0_windows_amd64.zip'
    },
    consensus: {
      type: 'cometbft',
      version: '0.34.26'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/planq-network/networks/main/mainnet/genesis.json'
    },
    versions: [{
        name: 'v1.0.3',
        recommendedVersion: 'v1.0.3',
        compatibleVersions: [
          'v1.0.0',
          'v1.0.1',
          'v1.0.2',
          'v1.0.3'
        ],
        binaries: {
          "linux/amd64": 'https://github.com/planq-network/planq/releases/download/v1.0.3/planq_1.0.3_Linux_x86_64.tar.gz',
          "linux/arm64": 'https://github.com/planq-network/planq/releases/download/v1.0.3/planq_1.0.3_Linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/planq-network/planq/releases/download/v1.0.3/planq_1.0.3_Darwin_x86_64.tar.gz',
          "darwin/arm64": 'https://github.com/planq-network/planq/releases/download/v1.0.3/planq_1.0.3_Darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/planq-network/planq/releases/download/v1.0.3/planq_1.0.3_Windows_x86_64.zip'
        }
      }, {
        name: 'v1.0.7',
        recommendedVersion: 'v1.1.0',
        compatibleVersions: ['v1.1.0'],
        consensus: {
          type: 'cometbft',
          version: '0.34.26'
        },
        binaries: {
          "linux/amd64": 'https://github.com/planq-network/planq/releases/download/v1.1.0/planq_1.1.0_linux_amd64.tar.gz',
          "linux/arm64": 'https://github.com/planq-network/planq/releases/download/v1.1.0/planq_1.1.0_linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/planq-network/planq/releases/download/v1.1.0/planq_1.1.0_darwin_amd64.tar.gz',
          "darwin/arm64": 'https://github.com/planq-network/planq/releases/download/v1.1.0/planq_1.1.0_darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/planq-network/planq/releases/download/v1.1.0/planq_1.1.0_windows_amd64.zip'
        },
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.3'
        },
        ibc: {
          type: 'go',
          version: '5.0.2'
        }
      }],
    sdk: {
      type: 'cosmos',
      version: 'v0.46.3'
    },
    ibc: {
      type: 'go',
      version: '5.0.2'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.planq.network',
        provider: 'planq.network'
      },
      {
        address: 'https://planq.rpc.bccnodes.com',
        provider: 'BccNodes'
      },
      {
        address: 'https://planq.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc.planq.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://planq-rpc.kynraze.com',
        provider: 'Kynraze'
      },
      {
        address: 'https://rpc.planq.indonode.net',
        provider: 'Indonode'
      },
      {
        address: 'https://rpc.planq.roomit.xyz',
        provider: 'Roomit'
      },
      {
        address: 'https://planq-rpc.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://rpc.planq.safeblock.space',
        provider: 'Safe Block'
      },
      {
        address: 'https://planq.rpc.skynodejs.net',
        provider: 'skynodejs'
      },
      {
        address: 'https://planq-rpc.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://mainnet-planq-rpc.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://planq_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://rpc-planq.blockval.io',
        provider: 'Blockval'
      }
    ],
    rest: [
      {
        address: 'https://rest.planq.network',
        provider: 'planq.network'
      },
      {
        address: 'https://planq.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api.planq.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://planq-api.kynraze.com',
        provider: 'Kynraze'
      },
      {
        address: 'https://api.planq.indonode.net',
        provider: 'Indonode'
      },
      {
        address: 'https://api.planq.roomit.xyz',
        provider: 'Roomit'
      },
      {
        address: 'https://planq-api.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://api.planq.safeblock.space',
        provider: 'Safe Block'
      },
      {
        address: 'https://planq.api.skynodejs.net',
        provider: 'skynodejs'
      },
      {
        address: 'https://planq-api.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://mainnet-planq-api.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://planq_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://api-planq.blockval.io',
        provider: 'Blockval'
      }
    ],
    grpc: [
      {
        address: 'grpc.planq.network:443',
        provider: 'planq.network'
      },
      {
        address: 'planq.grpc.m.stavr.tech:2070',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'planq.grpc.bccnodes.com:443',
        provider: 'BccNodes'
      },
      {
        address: 'grpc.planq.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'https://grpc-planq.nodine.id',
        provider: 'Nodine.id'
      },
      {
        address: 'https://grpc-planq.sxlzptprjkt.xyz:443',
        provider: 'sxlzptprjkt | VALIDATOR'
      },
      {
        address: 'https://grpc.planq.nodexcapital.com:443',
        provider: 'NodeX Validator'
      },
      {
        address: 'grpc.planq.roomit.xyz:8443',
        provider: 'Roomit'
      },
      {
        address: 'https://grpc.planq.hexnodes.co:33090',
        provider: 'Hexnodes'
      },
      {
        address: 'planq-grpc.genznodes.dev:28090',
        provider: 'genznodes'
      },
      {
        address: 'grpc.planq.safeblock.space:9090',
        provider: 'Safe Block'
      },
      {
        address: 'https://planq.grpc.skynodejs.net',
        provider: 'skynodejs'
      },
      {
        address: 'planq-grpc.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'mainnet-planq.konsortech.xyz:10090',
        provider: 'KonsorTech'
      },
      {
        address: 'https://grpc-planq.blockval.io',
        provider: 'Blockval'
      }
    ],
    evmHttpJsonrpc: [
      {
        address: 'https://evm-rpc.planq.network',
        provider: 'planq.network'
      },
      {
        address: 'https://jsonrpc.planq.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://rpc-evm-planq.sxlzptprjkt.xyz',
        provider: 'sxlzptprjkt | VALIDATOR'
      },
      {
        address: 'https://jsonrpc.planq.nodexcapital.com',
        provider: 'NodeX Validator'
      },
      {
        address: 'https://planq-rpc-evm.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://evm.planq.safeblock.space',
        provider: 'Safe Block'
      },
      {
        address: 'https://planq-jsonrpc.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://mainnet-planq-evmrpc.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://planq_mainnet_evm.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://evm.planq.roomit.xyz',
        provider: 'Roomit'
      }
    ]
  },
  explorers: [
    {
      kind: 'bigdipper',
      url: 'https://explorer.planq.network',
      txPage: 'https://explorer.planq.network/transactions/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Planq-Mainnet',
      txPage: 'https://explorer.stavr.tech/Planq-Mainnet/tx/${txHash}'
    },
    {
      kind: 'blockscout',
      url: 'https://evm.planq.network',
      txPage: 'https://evm.planq.network/tx/${txHash}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/planq',
      txPage: 'https://explorer.nodestake.top/planq/tx/${txHash}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/planq',
      txPage: 'https://explorer.tcnetwork.io/planq/transaction/${txHash}'
    },
    {
      kind: 'Roomit',
      url: 'https://explorer.tendermint.roomit.xyz/planq-mainnet',
      txPage: 'https://explorer.tendermint.roomit.xyz/planq-mainnet/transaction/${txHash}'
    },
    {
      kind: 'Kynraze',
      url: 'https://explorer.kynraze.com/planq',
      txPage: 'https://explorer.kynraze.com/planq/tx/${txHash}'
    },
    {
      kind: 'THE EXPLORER',
      url: 'https://explorer.sxlzptprjkt.xyz/planq',
      txPage: 'https://explorer.sxlzptprjkt.xyz/planq/tx/${txHash}'
    },
    {
      kind: 'NODEXPLORER',
      url: 'https://explorer.nodexcapital.com/planq',
      txPage: 'https://explorer.nodexcapital.com/planq/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/planq',
      txPage: 'https://atomscan.com/planq/transactions/${txHash}',
      accountPage: 'https://atomscan.com/planq/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/planq',
      txPage: 'https://staking-explorer.com/transaction.php?chain=planq&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=planq&addr=${accountAddress}'
    },
    {
      kind: 'Indonode',
      url: 'https://explorer.indonode.net/planq',
      txPage: 'https://explorer.indonode.net/planq/tx/${txHash}'
    },
    {
      kind: 'Safe Block',
      url: 'https://explorer.safeblock.space/planq',
      txPage: 'https://explorer.safeblock.space/planq/tx/${txHash}'
    },
    {
      kind: 'KonsorTech',
      url: 'https://explorer.konsortech.xyz/planq',
      txPage: 'https://explorer.konsortech.xyz/planq/tx/${txHash}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/planq',
      txPage: 'https://explorer.whenmoonwhenlambo.money/tx/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg',
      theme: {
        primaryColorHex: '#d4f3fb'
      }
    }]
};
export default info;