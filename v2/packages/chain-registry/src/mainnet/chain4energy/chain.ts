import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'chain4energy',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://c4e.io/',
  prettyName: 'C4E',
  chainType: 'cosmos',
  chainId: 'perun-1',
  bech32Prefix: 'c4e',
  daemonName: 'c4ed',
  nodeHome: '$HOME/.c4e-chain',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uc4e',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uc4e'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/chain4energy/c4e-chain',
    recommendedVersion: 'v1.3.1',
    compatibleVersions: ['v1.3.1'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/chain4energy/c4e-chains/main/perun-1/genesis.json'
    },
    versions: [
      {
        name: 'v1.0.0',
        recommendedVersion: 'v1.0.1',
        compatibleVersions: ['v1.0.0', 'v1.0.1'],
        consensus: {
          type: 'tendermint',
          version: 'v0.34.19'
        },
        binaries: {
          "linux/amd64": 'https://github.com/chain4energy/c4e-chain/releases/download/v1.0.0/c4ed_v1.0.0_linux_amd64.tar.gz',
          "linux/arm64": 'https://github.com/chain4energy/c4e-chain/releases/download/v1.0.0/c4ed_v1.0.0_darwin_amd64.tar.gz',
          "darwin/amd64": 'https://github.com/chain4energy/c4e-chain/releases/download/v1.0.0/c4ed_v1.0.0_darwin_amd64.tar.gz'
        },
        nextVersionName: 'v1.1.0',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.5'
        },
        ibc: {
          type: 'go',
          version: 'v3.0.1'
        }
      },
      {
        name: 'v1.1.0',
        tag: 'v1.1.0',
        proposal: 1,
        height: 1952250,
        recommendedVersion: 'v1.1.0',
        compatibleVersions: ['v1.1.0'],
        consensus: {
          type: 'tendermint',
          version: 'v0.34.21'
        },
        binaries: {
          "linux/amd64": 'https://github.com/chain4energy/c4e-chain/releases/download/v1.1.0/c4ed_v1.1.0_linux_amd64.tar.gz',
          "linux/arm64": 'https://github.com/chain4energy/c4e-chain/releases/download/v1.1.0/c4ed_v1.1.0_linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/chain4energy/c4e-chain/releases/download/v1.1.0/c4ed_v1.1.0_darwin_amd64.tar.gz'
        },
        nextVersionName: 'v1.2.0',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.9'
        },
        ibc: {
          type: 'go',
          version: 'v3.0.1'
        }
      },
      {
        name: 'v1.2.0',
        tag: 'v1.2.0',
        proposal: 4,
        height: 2826500,
        recommendedVersion: 'v1.2.0',
        compatibleVersions: ['v1.2.0'],
        consensus: {
          type: 'tendermint',
          version: 'v0.34.26'
        },
        binaries: {
          "linux/amd64": 'https://github.com/chain4energy/c4e-chain/releases/download/v1.2.0/c4ed_v1.2.0_linux_amd64.tar.gz',
          "linux/arm64": 'https://github.com/chain4energy/c4e-chain/releases/download/v1.2.0/c4ed_v1.2.0_linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/chain4energy/c4e-chain/releases/download/v1.2.0/c4ed_v1.2.0_darwin_amd64.tar.gz'
        },
        nextVersionName: 'v1.2.1',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.10'
        },
        ibc: {
          type: 'go',
          version: 'v5.2.0'
        }
      },
      {
        name: 'v1.2.1',
        tag: 'v1.2.1',
        height: 3767300,
        recommendedVersion: 'v1.2.1',
        compatibleVersions: ['v1.2.1'],
        consensus: {
          type: 'cometbft',
          version: 'v0.34.28'
        },
        binaries: {
          "linux/amd64": 'https://github.com/chain4energy/c4e-chain/releases/download/v1.2.1/c4ed_v1.2.1_linux_amd64.tar.gz',
          "linux/arm64": 'https://github.com/chain4energy/c4e-chain/releases/download/v1.2.1/c4ed_v1.2.1_linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/chain4energy/c4e-chain/releases/download/v1.2.1/c4ed_v1.2.1_darwin_amd64.tar.gz'
        },
        nextVersionName: 'v1.3.0',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.13'
        },
        ibc: {
          type: 'go',
          version: 'v5.2.0'
        }
      },
      {
        name: 'v1.3.0',
        tag: 'v1.3.0',
        proposal: 7,
        height: 6283905,
        recommendedVersion: 'v1.3.0',
        compatibleVersions: ['v1.3.0'],
        consensus: {
          type: 'cometbft',
          version: 'v0.34.28'
        },
        binaries: {
          "linux/amd64": 'https://github.com/chain4energy/c4e-chain/releases/download/v1.3.0/c4ed_v1.3.0_darwin_amd64.tar.gz',
          "linux/arm64": 'https://github.com/chain4energy/c4e-chain/releases/download/v1.3.0/c4ed_v1.3.0_linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/chain4energy/c4e-chain/releases/download/v1.3.0/c4ed_v1.3.0_darwin_amd64.tar.gz'
        },
        nextVersionName: 'v1.3.1',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.13'
        },
        ibc: {
          type: 'go',
          version: 'v5.2.1'
        }
      },
      {
        name: 'v1.3.1',
        tag: 'v1.3.1',
        proposal: 8,
        height: 7372232,
        recommendedVersion: 'v1.3.1',
        compatibleVersions: ['v1.3.1'],
        consensus: {
          type: 'cometbft',
          version: 'v0.34.28'
        },
        binaries: {
          "linux/amd64": 'https://github.com/chain4energy/c4e-chain/releases/download/v1.3.1/c4ed_v1.3.1_darwin_amd64.tar.gz',
          "linux/arm64": 'https://github.com/chain4energy/c4e-chain/releases/download/v1.3.1/c4ed_v1.3.1_linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/chain4energy/c4e-chain/releases/download/v1.3.1/c4ed_v1.3.1_darwin_amd64.tar.gz'
        },
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.13'
        },
        ibc: {
          type: 'go',
          version: 'v5.2.1'
        }
      }
    ]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chain4energy/images/c4e.png'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.c4e.io/',
        provider: 'C4E'
      },
      {
        address: 'https://rpc.c4e.mainnet.dteam.tech:443',
        provider: 'DTEAM'
      },
      {
        address: 'https://rpc.c4e.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://c4e.rpc.bccnodes.com',
        provider: 'BccNodes'
      },
      {
        address: 'https://chain4energy-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://c4e.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc-c4e.takeshi.team',
        provider: 'TAKESHI'
      },
      {
        address: 'https://rpc-c4e.mzonder.com',
        provider: 'MZONDER'
      },
      {
        address: 'https://rpc.cros-nest.com/chain4energy',
        provider: 'Crosnest'
      },
      {
        address: 'https://rpc.c4e.indonode.net',
        provider: 'Indonode'
      },
      {
        address: 'https://c4e-rpc.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://rpc.c4e.silentvalidator.com',
        provider: 'silent'
      },
      {
        address: 'http://rpc.c4e.stakeup.tech',
        provider: 'StakeUp'
      },
      {
        address: 'https://chain4energy-rpc.stakeangle.com',
        provider: 'StakeAngle'
      },
      {
        address: 'https://c4e-rpc.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://rpc-c4e.theamsolutions.info',
        provider: 'AM Solutions'
      },
      {
        address: 'https://c4e.rpc.m.anode.team',
        provider: 'AlxVoy ⚡ ANODE.TEAM'
      },
      {
        address: 'http://185.245.182.192:46657',
        provider: 'Meerlabs'
      },
      {
        address: 'http://89.117.58.109:26657',
        provider: 'medes'
      },
      {
        address: 'http://c4e.rpc.node75.org:26957',
        provider: 'Pro-nodes75'
      },
      {
        address: 'http://164.68.125.243:26657',
        provider: 'Smt Network'
      },
      {
        address: 'https://c4e-rpc.antrixy.org/',
        provider: 'Antrix Validators'
      },
      {
        address: 'https://c4e.doubletop.tech/',
        provider: 'DOUBLETOP'
      },
      {
        address: 'https://c4e-rpc.kalia.network:443',
        provider: 'Kalia Network'
      },
      {
        address: 'http://38.242.220.64:16657',
        provider: 'mahof'
      },
      {
        address: 'http://209.182.239.169:46657',
        provider: 'SECARD'
      },
      {
        address: 'https://rpc.c4e.validatus.com:443',
        provider: 'Validatus'
      },
      {
        address: 'https://rpc-m-c4e.apeironnodes.com:443',
        provider: 'Apeiron Nodes'
      },
      {
        address: 'http://rpc-c4e.cryptech.com.ua:443',
        provider: 'Cryptech'
      },
      {
        address: 'http://37.60.240.43:46657',
        provider: 'NakoTurk'
      },
      {
        address: 'https://chain4energy_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    rest: [
      {
        address: 'https://lcd.c4e.io/',
        provider: 'C4E'
      },
      {
        address: 'https://api.c4e.mainnet.dteam.tech:443',
        provider: 'DTEAM'
      },
      {
        address: 'https://api.c4e.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://c4e.lcd.bccnodes.com',
        provider: 'BccNodes'
      },
      {
        address: 'https://chain4energy-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://c4e.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api-c4e.takeshi.team',
        provider: 'TAKESHI'
      },
      {
        address: 'https://api-c4e.mzonder.com',
        provider: 'MZONDER'
      },
      {
        address: 'https://rest.cros-nest.com/chain4energy',
        provider: 'Crosnest'
      },
      {
        address: 'https://api.c4e.indonode.net',
        provider: 'Indonode'
      },
      {
        address: 'https://c4e-api.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://api.c4e.silentvalidator.com',
        provider: 'silent'
      },
      {
        address: 'http://api.c4e.stakeup.tech',
        provider: 'StakeUp'
      },
      {
        address: 'http://chain4energy-rpc.stakeangle.com:1317',
        provider: 'StakeAngle'
      },
      {
        address: 'https://c4e-api.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://api-c4e.theamsolutions.info',
        provider: 'AM Solutions'
      },
      {
        address: 'https://c4e.api.m.anode.team',
        provider: 'AlxVoy ⚡ ANODE.TEAM'
      },
      {
        address: 'http://c4e.api.node75.org:1397',
        provider: 'Pro-nodes75'
      },
      {
        address: 'http://164.68.125.243:1319',
        provider: 'Smt Network'
      },
      {
        address: 'https://c4e-rest.antrixy.org/',
        provider: 'Antrix Validators'
      },
      {
        address: 'https://c4e-api.kalia.network:443',
        provider: 'Kalia Network'
      },
      {
        address: 'http://38.242.220.64:11317',
        provider: 'mahof'
      },
      {
        address: 'http://209.182.239.169:1417',
        provider: 'SECARD'
      },
      {
        address: 'https://api.c4e.validatus.com:443',
        provider: 'Validatus'
      },
      {
        address: 'https://api-c4e.cryptech.com.ua:443',
        provider: 'CrypTech'
      },
      {
        address: 'https://lcd-m-c4e.apeironnodes.com',
        provider: 'Apeiron Nodes'
      },
      {
        address: 'https://chain4energy_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    grpc: [
      {
        address: 'grpc.c4e.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'grpc.c4e.mainnet.dteam.tech:30090',
        provider: 'DTEAM'
      },
      {
        address: 'c4e.grpc.bccnodes.com:443',
        provider: 'BccNodes'
      },
      {
        address: 'chain4energy-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'c4e.grpc.bccnodes.com:443',
        provider: 'BccNodes'
      },
      {
        address: 'grpc-c4e.takeshi.team:443',
        provider: 'TAKESHI'
      },
      {
        address: 'grpc-c4e.mzonder.com:443',
        provider: 'MZONDER'
      },
      {
        address: 'http://c4e.grpc.m.stavr.tech:7029',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'c4e-grpc.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'grpc.c4e.silentvalidator.com:443',
        provider: 'silent'
      },
      {
        address: 'http://chain4energy-rpc.stakeangle.com:1317',
        provider: 'StakeAngle'
      },
      {
        address: 'c4e-grpc.genznodes.dev:52090',
        provider: 'genznodes'
      },
      {
        address: 'https://grpc-c4e.theamsolutions.info:9391',
        provider: 'AM Solutions'
      },
      {
        address: 'https://c4e.grpc.m.anode.team',
        provider: 'AlxVoy ⚡ ANODE.TEAM'
      },
      {
        address: 'https://c4e-grpc.validatrium.club',
        provider: 'Validatrium'
      },
      {
        address: 'http://185.245.182.192:1318',
        provider: 'Meerlabs'
      },
      {
        address: 'grpc-c4e.stakerun.com:1190',
        provider: 'StakeRun'
      },
      {
        address: 'https://c4e-grpc.antrixy.org/',
        provider: 'Antirx Validators'
      },
      {
        address: 'https://c4e.doubletop.tech:443',
        provider: 'DOUBLETOP'
      },
      {
        address: 'c4e-grpc.kalia.network:3090',
        provider: 'Kalia Network'
      },
      {
        address: 'https://c4e.grpc.skynodejs.net',
        provider: 'skynodejs'
      },
      {
        address: 'http://38.242.220.64:19090',
        provider: 'mahof'
      },
      {
        address: 'http://209.182.239.169:9190',
        provider: 'SECARD'
      },
      {
        address: 'https://grpc.c4e.validatus.com:443',
        provider: 'Validatus'
      },
      {
        address: 'https://grpc-c4e.cryptech.com.ua:443',
        provider: 'Cryptech'
      },
      {
        address: 'http://207.180.208.47:46657',
        provider: 'NakoTurk'
      }
    ]
  },
  explorers: [
    {
      kind: 'explorer',
      url: 'https://explorer.apeironnodes.com/chain4energy',
      txPage: 'https://explorer.apeironnodes.com/chain4energy/transactions/${txHash}'
    },
    {
      kind: 'DTEAM | Explorer',
      url: 'https://explorer.mainnet.dteam.tech/chain4energy',
      txPage: 'https://explorer.mainnet.dteam.tech/chain4energytransactions/${txHash}'
    },
    {
      kind: 'explorer',
      url: 'https://explorer.ppnv.space/c4e',
      txPage: 'https://explorer.ppnv.space/c4e/transactions/${txHash}'
    },
    {
      kind: 'explorer',
      url: 'https://explorer.c4e.io/',
      txPage: 'https://explorer.c4e.io/transactions/${txHash}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/chain4energy',
      txPage: 'https://explorer.nodestake.top/chain4energy/transactions/${txHash}'
    },
    {
      kind: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀 Explorer',
      url: 'https://exp.utsa.tech/c4e',
      txPage: 'https://exp.utsa.tech/c4e/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥 Explorer',
      url: 'https://explorer.stavr.tech/c4e',
      txPage: 'https://explorer.stavr.tech/c4e/tx/${txHash}'
    },
    {
      kind: 'BccNodes Explorer',
      url: 'https://explorer.bccnodes.com/chain4energy',
      txPage: 'https://explorer.bccnodes.com/chain4energy/transactions/${txHash}'
    },
    {
      kind: 'NODEXPLORER',
      url: 'https://explorer.nodexcapital.com/c4e',
      txPage: 'https://explorer.nodexcapital.com/c4e/transactions/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/chain4energy',
      txPage: 'https://atomscan.com/chain4energy/transactions/${txHash}',
      accountPage: 'https://atomscan.com/chain4energy/accounts/${accountAddress}'
    },
    {
      kind: 'AM Solutions Explorer',
      url: 'https://explorer.theamsolutions.info/c4e-main/staking',
      txPage: 'https://explorer.theamsolutions.info/c4e-main/transactions/${txHash}'
    },
    {
      kind: 'AlxVoy ⚡ ANODE.TEAM Explorer',
      url: 'https://main.anode.team/c4e',
      txPage: 'https://main.anode.team/c4e/tx/${txHash}'
    },
    {
      kind: 'ScanRun',
      url: 'https://scanrun.io/c4e',
      txPage: 'https://scanrun.io/c4e/transactions/${txHash}'
    },
    {
      kind: 'Cryptech',
      url: 'https://explorers.cryptech.com.ua/chain4energy',
      txPage: 'https://explorers.cryptech.com.ua/chain4energy/tx/${txHash}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/chain4energy',
      txPage: 'https://explorer.whenmoonwhenlambo.money/chain4energy/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/chain4energy/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chain4energy/images/c4e.png',
      theme: {
        primaryColorHex: '#24344c'
      }
    }]
};
export default info;