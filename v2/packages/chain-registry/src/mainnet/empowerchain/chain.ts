import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'empowerchain',
  chainType: 'cosmos',
  chainId: 'empowerchain-1',
  prettyName: 'EmpowerChain',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'empower',
  daemonName: 'empowerd',
  nodeHome: '$HOME/.empowerchain',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'umpwr',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.025,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'umpwr'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/EmpowerPlastic/empowerchain',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    genesis: {
      genesisUrl: 'https://github.com/EmpowerPlastic/empowerchain/raw/main/mainnet/empowerchain-1/genesis.tar.gz'
    },
    cosmwasm: {
      version: '0.45',
      enabled: true
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-empowerchain.ecostake.com:443',
        provider: 'ecostake'
      },
      {
        address: 'https://empowerchain-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://empower.rpc.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'http://empw.rpc.m.stavr.tech:22057',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc-empowerchain.mzonder.com:443',
        provider: 'MZONDER'
      },
      {
        address: 'https://empower-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://rpc-empower.vinjan.xyz:443',
        provider: 'vinjan'
      },
      {
        address: 'https://rpc.empower.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://mainnet-empower-rpc.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://empower.rpc.stakevillage.net:443',
        provider: 'Stake Village'
      },
      {
        address: 'https://rpc.empowerchain.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://empower.declab.pro:26607',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'https://empower-rpc.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://empower-rpc.bluestake.net:443',
        provider: 'BlueStake 🚀'
      }
    ],
    rest: [
      {
        address: 'https://rest-empowerchain.ecostake.com:443',
        provider: 'ecostake'
      },
      {
        address: 'https://empowerchain-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://empower.api.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://empw.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://empower-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://api-empower.vinjan.xyz:443',
        provider: 'vinjan'
      },
      {
        address: 'https://api.empower.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://mainnet-empower-api.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://empower.api.stakevillage.net',
        provider: 'Stake Village'
      },
      {
        address: 'https://lcd.empowerchain.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://empower.declab.pro:443',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'https://empower-api.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://empower-api.bluestake.net',
        provider: 'BlueStake 🚀'
      }
    ],
    grpc: [
      {
        address: 'empowerchain-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://empower.grpc.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'empower-grpc.w3coins.io:17390',
        provider: 'w3coins'
      },
      {
        address: 'grpc-empowerchain.mzonder.com:443',
        provider: 'MZONDER'
      },
      {
        address: 'http://empw.grpc.m.stavr.tech:9141',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'grpc-empower.vinjan.xyz',
        provider: 'vinjan'
      },
      {
        address: 'https://grpc.empower.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'empower.grpc.stakevillage.net:16890',
        provider: 'Stake Village'
      },
      {
        address: 'https://grpc.empowerchain.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://empower.declab.pro:9005',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'empower-grpc.noders.services:25090',
        provider: '[NODERS]TEAM'
      }
    ]
  },
  explorers: [
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/empowerchain',
      txPage: 'https://staking-explorer.com/transaction.php?chain=empowerchain&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=empowerchain&addr=${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Empower-Mainnet',
      txPage: 'https://explorer.stavr.tech/Empower-Mainnet/txs/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Empower-Mainnet/account/${accountAddress}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/empower',
      txPage: 'https://explorer.nodestake.top/empower/tx/${txHash}',
      accountPage: 'https://explorer.nodestake.top/empower/account/{$accountAddress}'
    },
    {
      kind: 'Stake Village',
      url: 'https://exp.stakevillage.net/empower',
      txPage: 'https://exp.stakevillage.net/empower/tx/${txHash}',
      accountPage: 'https://exp.stakevillage.net/empower/account/${accountAddress}'
    },
    {
      kind: 'Decloud Nodes Lab',
      url: 'https://explorer.declab.pro/Empower',
      txPage: 'https://explorer.declab.pro/Empower/tx/${txHash}',
      accountPage: 'https://explorer.declab.pro/Empower/account/{$accountAddress}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/empowerchain',
      txPage: 'https://mainnet.whispernode.com/empowerchain/tx/${txHash}',
      accountPage: 'https://mainnet.whispernode.com/empowerchain/account/${accountAddress}'
    }
  ],
  images: [{
      imageSync: {
        chainName: 'empowerchain',
        baseDenom: 'umpwr'
      },
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg',
      theme: {
        primaryColorHex: '#00e33a',
        backgroundColorHex: '#00e33a',
        circle: true
      }
    }, {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.png',
      theme: {
        primaryColorHex: '#00e33a',
        backgroundColorHex: '#00e33a',
        circle: false
      }
    }]
};
export default info;