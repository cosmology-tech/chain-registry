import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'bitcanna',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.bitcanna.io/',
  prettyName: 'BitCanna',
  chainType: 'cosmos',
  chainId: 'bitcanna-1',
  bech32Prefix: 'bcna',
  daemonName: 'bcnad',
  nodeHome: '$HOME/.bcna',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ubcna',
        fixedMinGasPrice: 0.001,
        lowGasPrice: 0.001,
        averageGasPrice: 0.0025,
        highGasPrice: 0.01
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ubcna'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/BitCannaGlobal/bcna',
    recommendedVersion: 'v4.0.3',
    compatibleVersions: [
      'v4.0.0',
      'v4.0.1',
      'v4.0.2',
      'v4.0.3'
    ],
    binaries: {
      "linux/amd64": 'https://github.com/BitCannaGlobal/bcna/releases/download/v4.0.1/bcnad_linux_amd64.tar.gz',
      "linux/arm64": 'https://github.com/BitCannaGlobal/bcna/releases/download/v4.0.1/bcnad_linux_arm64.tar.gz'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.15'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/BitCannaGlobal/bcna/main/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.11'
    },
    ibc: {
      type: 'go',
      version: 'v8.5.2'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.bitcanna.io/',
        provider: 'bitcanna'
      },
      {
        address: 'https://bcna-rpc.ibs.team/',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://rpc.bitcanna.sgtstake.com/',
        provider: 'SGTstake'
      },
      {
        address: 'https://bitcanna.rpc.m.anode.team/',
        provider: 'AlxVoy ⚡ ANODE.TEAM'
      },
      {
        address: 'https://bitcanna.rpc.m.stavr.tech/',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc-bcna.kjinc.io/',
        provider: 'KJINC.io'
      },
      {
        address: 'https://mainnet-bitcanna-rpc.konsortech.xyz/',
        provider: 'KonsorTech'
      },
      {
        address: 'https://bitcanna.rpc.kjnodes.com/',
        provider: 'kjnodes'
      },
      {
        address: 'https://bitcanna-rpc.genznodes.dev/',
        provider: 'genznodes'
      },
      {
        address: 'https://rpc.bitcanna-1.bitcanna.aviaone.com/',
        provider: 'AVIAONE 🟢'
      },
      {
        address: 'https://rpc.bitcanna-mainnet.hexnodes.one/',
        provider: 'Hexnodes'
      },
      {
        address: 'https://rpc.bitcanna.citizenweb3.com/',
        provider: 'Citizen Web3'
      },
      {
        address: 'https://bitcanna-mainnet.rpc.l0vd.com/',
        provider: 'L0vd.com'
      },
      {
        address: 'https://bitcanna-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://bitcanna.nodejumper.io:443',
        provider: 'NODEJUMPER'
      },
      {
        address: 'https://rpc.bitcanna.indonode.net/',
        provider: 'Indonode'
      },
      {
        address: 'https://rpc-bitcanna.mms.team:443',
        provider: 'MMS'
      },
      {
        address: 'https://bitcanna-rpc.validatornode.com',
        provider: 'ValidatorNode'
      },
      {
        address: 'https://bitcanna.rpc.nodex.one',
        provider: 'NodeX Emperor ⚡ Bitcanna'
      },
      {
        address: 'https://bcna.rpc.arcturian.tech/',
        provider: 'Arcturian Tech'
      },
      {
        address: 'https://rpc.bitcanna.bh.rocks',
        provider: 'BlockHunters 🎯'
      },
      {
        address: 'https://bitcanna-rpc.bluestake.net',
        provider: 'BlueStake'
      },
      {
        address: 'https://rpc-bitcanna.cryptech.com.ua',
        provider: 'CrypTech'
      },
      {
        address: 'https://bitcanna-rpc.kalia.network/',
        provider: 'Kalia Network'
      },
      {
        address: 'https://bitcanna.rpc.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️'
      },
      {
        address: 'https://bitcanna_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    grpc: [
      {
        address: 'grpc.bitcanna.io:443',
        provider: 'bitcanna'
      },
      {
        address: 'bitcanna.grpc.m.stavr.tech:9081',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'grpc.bitcanna-mainnet.hexnodes.one:27090',
        provider: 'HexNodes'
      },
      {
        address: 'grpc.bitcanna-1.bitcanna.aviaone.com:9102',
        provider: 'AVIAONE 🟢'
      },
      {
        address: 'bitcanna-mainnet.grpc.l0vd.com:80',
        provider: 'L0vd.com'
      },
      {
        address: 'bitcanna.grpc.kjnodes.com:14290',
        provider: 'kjnodes'
      },
      {
        address: 'bitcanna-grpc.polkachu.com:13090',
        provider: 'Polkachu'
      },
      {
        address: 'grpc-bitcanna.mms.team:443',
        provider: 'MMS'
      },
      {
        address: 'mainnet-bitcanna-grpc.konsortech.xyz:27090',
        provider: 'KonsorTech'
      },
      {
        address: 'bitcanna.grpc.m.anode.team:443',
        provider: 'AlxVoy ⚡ ANODE.TEAM'
      },
      {
        address: 'grpc-bcna.kjinc.io:443',
        provider: 'KJINC.io'
      },
      {
        address: 'bitcanna.grpc.nodex.one:443',
        provider: 'NodeX Emperor ⚡ Bitcanna'
      },
      {
        address: 'grpc.bitcanna.bh.rocks:42090',
        provider: 'BlockHunters 🎯'
      },
      {
        address: 'grpc.bitcanna.indonode.net:11090',
        provider: 'Indonode'
      },
      {
        address: 'bitcanna-grpc.validatornode.com:443',
        provider: 'ValidatorNode'
      },
      {
        address: 'grpc-bitcanna.cryptech.com.ua:443',
        provider: 'CrypTech'
      },
      {
        address: 'bitcanna-grpc.kalia.network:443',
        provider: 'Kalia Network'
      },
      {
        address: 'bitcanna.grpc.nodeshub.online:13090',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️'
      }
    ],
    rest: [
      {
        address: 'https://lcd.bitcanna.io',
        provider: 'bitcanna'
      },
      {
        address: 'https://api.bitcanna.sgtstake.com/',
        provider: 'SGTstake'
      },
      {
        address: 'https://bitcanna.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://bcna-api.ibs.team/',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://bitcanna.api.m.anode.team',
        provider: 'AlxVoy ⚡ ANODE.TEAM'
      },
      {
        address: 'https://api-bcna.kjinc.io/',
        provider: 'KJINC.io'
      },
      {
        address: 'https://mainnet-bitcanna-api.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://bitcanna.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://bitcanna-api.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://api.bitcanna-1.bitcanna.aviaone.com',
        provider: 'AVIAONE 🟢'
      },
      {
        address: 'https://lcd.bitcanna-mainnet.hexnodes.one',
        provider: 'Hexnodes'
      },
      {
        address: 'https://bitcanna-mainnet.api.l0vd.com',
        provider: 'L0vd.com'
      },
      {
        address: 'https://bitcanna-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://bitcanna.nodejumper.io:1317',
        provider: 'NODEJUMPER'
      },
      {
        address: 'https://api-bitcanna.mms.team:443',
        provider: 'MMS'
      },
      {
        address: 'https://bitcanna-api.validatornode.com',
        provider: 'ValidatorNode'
      },
      {
        address: 'https://bitcanna.api.nodex.one',
        provider: 'NodeX Emperor ⚡ Bitcanna'
      },
      {
        address: 'https://bcna.api.arcturian.tech/',
        provider: 'Arcturian Tech'
      },
      {
        address: 'https://api.bitcanna.bh.rocks',
        provider: 'BlockHunters 🎯'
      },
      {
        address: 'https://api.bitcanna.indonode.net',
        provider: 'Indonode'
      },
      {
        address: 'https://bitcanna-api.bluestake.net',
        provider: 'BlueStake'
      },
      {
        address: 'https://api-bitcanna.cryptech.com.ua',
        provider: 'CrypTech'
      },
      {
        address: 'https://bitcanna-api.kalia.network',
        provider: 'Kalia Network'
      },
      {
        address: 'https://api.bitcanna.citizenweb3.com',
        provider: 'Citizen Web3'
      },
      {
        address: 'https://bitcanna.api.nodeshub.online',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️'
      },
      {
        address: 'https://bitcanna_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ]
  },
  explorers: [
    {
      kind: 'EZStaking Tools',
      url: 'https://app.ezstaking.io/bitcanna',
      txPage: 'https://ezstaking.tools/bitcanna/txs/${txHash}',
      accountPage: 'https://ezstaking.tools/bitcanna/account/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/bitcanna',
      txPage: 'https://staking-explorer.com/transaction.php?chain=bitcanna&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=bitcanna&addr=${accountAddress}'
    },
    {
      kind: 'forbole',
      url: 'https://explorer.bitcanna.io',
      txPage: 'https://explorer.bitcanna.io/transactions/${txHash}',
      accountPage: 'https://explorer.bitcanna.io/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/bitcanna',
      txPage: 'https://ping.pub/bitcanna/tx/${txHash}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/bitcanna/',
      txPage: 'https://www.mintscan.io/bitcanna/txs/${txHash}',
      accountPage: 'https://www.mintscan.io/bitcanna/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥 Explorer',
      url: 'https://explorer.stavr.tech/Bitcanna',
      txPage: 'https://explorer.stavr.tech/Bitcanna/txs/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Bitcanna/account/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/bitcanna',
      txPage: 'https://atomscan.com/bitcanna/transactions/${txHash}'
    },
    {
      kind: 'ValidatorNode Explorer',
      url: 'https://explorer.validatornode.com/bitcanna',
      txPage: 'https://explorer.validatornode.com/bitcanna/tx/${txHash}'
    },
    {
      kind: 'AlxVoy ⚡ ANODE.TEAM',
      url: 'https://main.anode.team/bitcanna',
      txPage: 'https://main.anode.team/bitcanna/tx/${txHash}'
    },
    {
      kind: 'kjnodes',
      url: 'https://explorer.kjnodes.com/bitcanna',
      txPage: 'https://explorer.kjnodes.com/bitcanna/tx/${txHash}'
    },
    {
      kind: 'L0vd.com ❤️',
      url: 'https://explorers.l0vd.com/bitcanna-mainnet',
      txPage: 'https://explorers.l0vd.com/bitcanna-mainnet/tx/${txHash}'
    },
    {
      kind: 'NODEXPLORER',
      url: 'https://explorer.nodex.one/bitcanna',
      txPage: 'https://explorer.nodex.one/bitcanna/tx/${txHash}'
    },
    {
      kind: 'Moonbys Dashboard',
      url: 'https://explorer.moonbys.com',
      txPage: 'https://explorer.moonbys.com/${txHash}'
    },
    {
      kind: 'BlockHunters 🎯',
      url: 'https://scan.bh.rocks/bitcanna',
      txPage: 'https://scan.bh.rocks/bitcanna/tx/${txHash}'
    },
    {
      kind: 'Indonode',
      url: 'https://explorer.indonode.net/bitcanna',
      txPage: 'https://explorer.indonode.net/bitcanna/tx/${txHash}'
    },
    {
      kind: 'CrypTech Explorer',
      url: 'https://explorers.cryptech.com.ua/bitcanna',
      txPage: 'https://explorers.cryptech.com.ua/bitcanna/txs/${txHash}'
    },
    {
      kind: 'Kalia Network',
      url: 'https://explorer.kalia.network/bitcanna',
      txPage: 'https://explorer.kalia.network/bitcanna/tx/${txHash}',
      accountPage: 'https://explorer.kalia.network/bitcanna/account/${accountAddress}'
    },
    {
      kind: 'AviaOne Explorer 🟢',
      url: 'https://mainnet.explorer.aviaone.com/bitcanna',
      txPage: 'https://mainnet.explorer.aviaone.com/bitcanna/tx/${txHash}',
      accountPage: 'https://mainnet.explorer.aviaone.com/bitcanna/account/${accountAddress}'
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️',
      url: 'https://explorer.nodeshub.online/bitcanna/',
      txPage: 'https://explorer.nodeshub.online/bitcanna/tx/${txHash}',
      accountPage: 'https://explorer.nodeshub.online/bitcanna/accounts/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/bitcanna',
      txPage: 'https://explorer.whenmoonwhenlambo.money/bitcanna/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/bitcanna/account/${accountAddress}'
    },
    {
      kind: 'AviaOne Explorer 🟢',
      url: 'https://mainnet.explorer.aviaone.com/bitcanna',
      txPage: 'https://mainnet.explorer.aviaone.com/bitcanna/tx/${txHash}',
      accountPage: 'https://mainnet.explorer.aviaone.com/bitcanna/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg',
      theme: {
        primaryColorHex: '#3cc494'
      }
    }]
};
export default info;