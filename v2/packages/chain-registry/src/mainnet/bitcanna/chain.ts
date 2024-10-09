import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'bitcanna',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.bitcanna.io/',
  prettyName: 'BitCanna',
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
    cosmosSdkVersion: 'v0.47.9'
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
        address: 'http://bcna.paranorm.pro/',
        provider: 'ParanormalBrothers'
      },
      {
        address: 'https://bcna-rpc.ibs.team/',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://bitcanna-rpc.panthea.eu',
        provider: 'Panthea EU'
      },
      {
        address: 'https://rpc.bitcanna.sgtstake.com/',
        provider: 'SGTstake'
      },
      {
        address: 'https://bitcanna.rpc.m.anode.team',
        provider: 'AlxVoy ⚡ ANODE.TEAM'
      },
      {
        address: 'http://bitcanna.rpc.m.stavr.tech:21327',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc-bcna.kjinc.io/',
        provider: 'KJINC.io'
      },
      {
        address: 'https://mainnet-bitcanna-rpc.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://bitcanna.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://bitcanna-rpc.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://rpc.bitcanna-1.bitcanna.aviaone.com',
        provider: 'AVIAONE 🟢'
      },
      {
        address: 'https://rpc.bitcanna-mainnet.hexnodes.co',
        provider: 'Hexnodes'
      },
      {
        address: 'https://rpc.bitcanna.citizenweb3.com:443',
        provider: 'Citizen Web3'
      },
      {
        address: 'https://bitcanna-mainnet.rpc.l0vd.com/',
        provider: 'L0vd.com'
      },
      {
        address: 'https://rpc-bitcanna-ia.cosmosia.notional.ventures',
        provider: 'Notional'
      },
      {
        address: 'https://bitcanna-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc.bitcanna.safeblock.space',
        provider: 'Safe Block'
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
        address: 'http://65.108.142.81:26683',
        provider: 'Stakely'
      },
      {
        address: 'http://93.115.25.15:26657',
        provider: 'Stakely'
      },
      {
        address: 'https://bitcanna-rpc.validatornode.com',
        provider: 'ValidatorNode'
      },
      {
        address: 'https://bcna.rpc.arcturian.tech/',
        provider: 'Arcturian Tech'
      },
      {
        address: 'https://bitcanna-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rpc.bcna.sopko.net:443',
        provider: '🐔 The Chicken Coop 🦝 Homestead'
      },
      {
        address: 'https://bitcanna_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://bitcanna.rpc.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅'
      },
      {
        address: 'https://rpc-bitcanna.cryptech.com.ua',
        provider: 'CrypTech'
      }
    ],
    grpc: [
      {
        address: 'grpc.bitcanna.io:443',
        provider: 'bitcanna'
      },
      {
        address: 'bitcanna-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'bitcanna.grpc.m.stavr.tech:9081',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'grpc.bitcanna-mainnet.hexnodes.co:27090',
        provider: 'HexNodes'
      },
      {
        address: 'grpc.bitcanna-1.bitcanna.aviaone.com:9092',
        provider: 'AVIAONE 🟢'
      },
      {
        address: 'bitcanna-mainnet.grpc.l0vd.com:80',
        provider: 'L0vd.com'
      },
      {
        address: 'grpc-bitcanna-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
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
        address: 'bitcanna.grpc.m.anode.team:443',
        provider: 'AlxVoy ⚡ ANODE.TEAM'
      },
      {
        address: 'bitcanna-grpc.panthea.eu:16710',
        provider: 'Panthea EU'
      },
      {
        address: 'https://grpc.bitcanna.indonode.net:11090',
        provider: 'Indonode'
      },
      {
        address: 'bitcanna-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'grpc.bitcanna.safeblock.space:9090',
        provider: 'Safe Block'
      },
      {
        address: 'https://bitcanna.grpc.nodeshub.online',
        provider: 'Nodes Hub'
      },
      {
        address: 'https://grpc-bitcanna.cryptech.com.ua',
        provider: 'CrypTech'
      }
    ],
    rest: [
      {
        address: 'https://lcd.bitcanna.io',
        provider: 'bitcanna'
      },
      {
        address: 'https://bitcanna-api.panthea.eu',
        provider: 'Panthea EU'
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
        address: 'https://bitcanna-api.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://bitcanna-api.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://api.bitcanna-1.bitcanna.aviaone.com/',
        provider: 'AVIAONE 🟢'
      },
      {
        address: 'https://lcd.bitcanna-mainnet.hexnodes.co',
        provider: 'Hexnodes'
      },
      {
        address: 'https://bitcanna-mainnet.api.l0vd.com',
        provider: 'L0vd.com'
      },
      {
        address: 'https://api-bitcanna-ia.cosmosia.notional.ventures',
        provider: 'Notional'
      },
      {
        address: 'https://bitcanna-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://api.bitcanna.safeblock.space',
        provider: 'Safe Block'
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
        address: 'http://65.108.142.81:1325',
        provider: 'Stakely'
      },
      {
        address: 'http://93.115.25.15:1317',
        provider: 'Stakely'
      },
      {
        address: 'https://bitcanna-api.validatornode.com',
        provider: 'ValidatorNode'
      },
      {
        address: 'https://bcna.api.arcturian.tech/',
        provider: 'Arcturian Tech'
      },
      {
        address: 'https://api.bitcanna.indonode.net/',
        provider: 'Indonode'
      },
      {
        address: 'https://bitcanna-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://bitcanna_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://bitcanna.api.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅'
      },
      {
        address: 'https://api-bitcanna.cryptech.com.ua',
        provider: 'CrypTech'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/bitcanna',
      txPage: 'https://ezstaking.tools/bitcanna/txs/${txHash}',
      accountPage: 'https://ezstaking.tools/bitcanna/account/${accountAddress}'
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
      url: 'https://explorer.stavr.tech/bitcanna',
      txPage: 'https://explorer.stavr.tech/bitcanna/txs/${txHash}',
      accountPage: 'https://explorer.stavr.tech/bitcanna/account/${accountAddress}'
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
      kind: 'AlxVoy ⚡ ANODE.TEAM Explorer',
      url: 'https://main.anode.team/bitcanna',
      txPage: 'https://main.anode.team/bitcanna/txs/${txHash}',
      accountPage: 'https://main.anode.team/bitcanna/account/${accountAddress}'
    },
    {
      kind: 'Moonbys Dashboard',
      url: 'https://explorer.moonbys.com',
      txPage: 'https://explorer.moonbys.com/tx/${txHash}',
      accountPage: 'https://explorer.moonbys.com/bitcanna/account/${accountAddress}'
    },
    {
      kind: 'Indonode',
      url: 'https://explorer.indonode.net/bitcanna',
      txPage: 'https://explorer.indonode.net/bitcanna/tx/${txHash}'
    },
    {
      kind: 'Safe Block',
      url: 'https://explorer.safeblock.space/bitcanna',
      txPage: 'https://explorer.safeblock.space/bitcanna/tx/${txHash}',
      accountPage: 'https://explorer.safeblock.space/bitcanna/account/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/bitcanna',
      txPage: 'https://explorer.whenmoonwhenlambo.money/bitcanna/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/bitcanna/account/${accountAddress}'
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      url: 'https://explorer.nodeshub.online/bitcanna/',
      txPage: 'https://explorer.nodeshub.online/bitcanna/tx/${txHash}',
      accountPage: 'https://explorer.nodeshub.online/bitcanna/accounts/${accountAddress}'
    },
    {
      kind: 'CrypTech Explorer',
      url: 'https://explorers.cryptech.com.ua/bitcanna',
      txPage: 'https://explorers.cryptech.com.ua/bitcanna/txs/${txHash}',
      accountPage: 'https://explorers.cryptech.com.ua/bitcanna/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
    }]
};
export default info;