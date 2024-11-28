import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'kujira',
  chainType: 'cosmos',
  chainId: 'kaiyo-1',
  prettyName: 'Kujira',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://kujira.app/',
  bech32Prefix: 'kujira',
  daemonName: 'kujirad',
  nodeHome: '$HOME/.kujira',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [
      {
        denom: 'ukuji',
        fixedMinGasPrice: 0.0034,
        lowGasPrice: 0.0034,
        averageGasPrice: 0.0051,
        highGasPrice: 0.00681
      },
      {
        denom: 'factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk',
        fixedMinGasPrice: 0.01186,
        lowGasPrice: 0.01186,
        averageGasPrice: 0.01779,
        highGasPrice: 0.02372
      },
      {
        denom: 'ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F',
        fixedMinGasPrice: 0.0119,
        lowGasPrice: 0.0119,
        averageGasPrice: 0.01785,
        highGasPrice: 0.02379
      },
      {
        denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
        fixedMinGasPrice: 0.00129,
        lowGasPrice: 0.00129,
        averageGasPrice: 0.00193,
        highGasPrice: 0.00258
      },
      {
        denom: 'ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23',
        fixedMinGasPrice: 0.01795,
        lowGasPrice: 0.01795,
        averageGasPrice: 0.02692,
        highGasPrice: 0.0359
      },
      {
        denom: 'ibc/3607EB5B5E64DD1C0E12E07F077FF470D5BC4706AFCBC98FE1BA960E5AE4CE07',
        fixedMinGasPrice: 0.65943,
        lowGasPrice: 0.65943,
        averageGasPrice: 0.98915,
        highGasPrice: 1.31887
      },
      {
        denom: 'ibc/F3AA7EF362EC5E791FE78A0F4CCC69FEE1F9A7485EB1A8CAB3F6601C00522F10',
        fixedMinGasPrice: 160416396197,
        lowGasPrice: 160416396197,
        averageGasPrice: 240624594296,
        highGasPrice: 320832792394
      },
      {
        denom: 'ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5',
        fixedMinGasPrice: 0.02689,
        lowGasPrice: 0.02689,
        averageGasPrice: 0.04034,
        highGasPrice: 0.05379
      },
      {
        denom: 'ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986',
        fixedMinGasPrice: 0.01495,
        lowGasPrice: 0.01495,
        averageGasPrice: 0.02243,
        highGasPrice: 0.02991
      },
      {
        denom: 'ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5',
        fixedMinGasPrice: 0.03139,
        lowGasPrice: 0.03139,
        averageGasPrice: 0.04709,
        highGasPrice: 0.06278
      },
      {
        denom: 'ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602',
        fixedMinGasPrice: 0.90403,
        lowGasPrice: 0.90403,
        averageGasPrice: 1.35605,
        highGasPrice: 1.80806
      },
      {
        denom: 'ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2',
        fixedMinGasPrice: 559196837,
        lowGasPrice: 559196837,
        averageGasPrice: 838795256,
        highGasPrice: 1118393675
      },
      {
        denom: 'ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7',
        fixedMinGasPrice: 5772801,
        lowGasPrice: 5772801,
        averageGasPrice: 8659201,
        highGasPrice: 11545602
      },
      {
        denom: 'factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta',
        fixedMinGasPrice: 0.01807,
        lowGasPrice: 0.01807,
        averageGasPrice: 0.02711,
        highGasPrice: 0.03615
      },
      {
        denom: 'ibc/FE98AAD68F02F03565E9FA39A5E627946699B2B07115889ED812D8BA639576A9',
        fixedMinGasPrice: 0.01194,
        lowGasPrice: 0.01194,
        averageGasPrice: 0.01792,
        highGasPrice: 0.02389
      },
      {
        denom: 'ibc/E5CA126979E2FFB4C70C072F8094D07ECF27773B37623AD2BF7582AD0726F0F3',
        fixedMinGasPrice: 0.00019,
        lowGasPrice: 0.00019,
        averageGasPrice: 0.00029,
        highGasPrice: 0.00039
      }
    ]
  },
  staking: {
    stakingTokens: [{
        denom: 'ukuji'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/Team-Kujira/core',
    recommendedVersion: 'v1.1.0',
    compatibleVersions: ['v1.1.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.37.5'
    },
    genesis: {
      genesisUrl: 'https://github.com/Team-Kujira/networks/raw/master/mainnet/kaiyo-1.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.47.12'
    },
    ibc: {
      type: 'go',
      icsEnabled: ['ics20-1']
    },
    cosmwasm: {
      version: 'v0.45.0',
      enabled: true
    }
  },
  description: 'A decentralized ecosystem for protocols, builders and web3 users seeking sustainable FinTech.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.kaiyo.kujira.setten.io',
        provider: 'setten.io'
      },
      {
        address: 'https://kujira-rpc.polkachu.com',
        provider: 'polkachu'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/kujira',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc.kujira.chaintools.tech/',
        provider: 'ChainTools'
      },
      {
        address: 'https://rpc-kujira-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://kujira-rpc.ibs.team/',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://rpc-kujira.starsquid.io',
        provider: 'Starsquid'
      },
      {
        address: 'https://kujira.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://kuji-rpc.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://rpc-kujira.goldenratiostaking.net',
        provider: 'Golden Ratio Staking'
      },
      {
        address: 'https://kujira-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc.kujira.rektdao.club',
        provider: 'rektDAO'
      },
      {
        address: 'https://kujira-rpc.theamsolutions.info',
        provider: 'AM Solutions'
      },
      {
        address: 'https://kujira-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://rpc-kujira.mms.team',
        provider: 'MMS'
      },
      {
        address: 'https://kujira-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://kujira.interstellar-lounge.org',
        provider: 'Interstellar Lounge 🍸'
      }
    ],
    rest: [
      {
        address: 'https://lcd.kaiyo.kujira.setten.io',
        provider: 'setten.io'
      },
      {
        address: 'https://rest.lavenderfive.com:443/kujira',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://kujira-api.polkachu.com/',
        provider: 'polkachu'
      },
      {
        address: 'https://api-kujira-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://kujira-lcd.wildsage.io/',
        provider: 'WildSage Labs'
      },
      {
        address: 'https://kujira-api.ibs.team/',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://api-kujira.starsquid.io',
        provider: 'Starsquid'
      },
      {
        address: 'https://kujira.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://kuji-api.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://kujira-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://api.kujira.rektdao.club',
        provider: 'rektDAO'
      },
      {
        address: 'https://kujira-api.theamsolutions.info',
        provider: 'AM Solutions'
      },
      {
        address: 'https://kujira-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://api-kujira.mms.team',
        provider: 'MMS'
      },
      {
        address: 'https://kujira-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://kujira-rest.interstellar-lounge.org',
        provider: 'Interstellar Lounge 🍸'
      }
    ],
    grpc: [
      {
        address: 'kujira.grpcui.chaintools.host:443',
        provider: 'ChainTools'
      },
      {
        address: 'grpc-kujira-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'kujira.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'kujira-grpc.polkachu.com:11890',
        provider: 'Polkachu'
      },
      {
        address: 'kujira-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'kujira.grpc.kjnodes.com:11390',
        provider: 'kjnodes'
      },
      {
        address: 'kujira-grpc.w3coins.io:11890',
        provider: 'w3coins'
      },
      {
        address: 'grpc-kujira.mms.team:443',
        provider: 'MMS'
      },
      {
        address: 'kujira-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ]
  },
  explorers: [
    {
      kind: 'kujira',
      url: 'https://finder.kujira.app',
      txPage: 'https://finder.kujira.app/kaiyo-1/tx/${txHash}'
    },
    {
      kind: 'explorers.guru',
      url: 'https://kujira.explorers.guru',
      txPage: 'https://kujira.explorers.guru/transaction/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/kujira',
      txPage: 'https://staking-explorer.com/transaction.php?chain=kujira&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=kujira&addr=${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/kujira',
      txPage: 'https://ezstaking.app/kujira/txs/${txHash}',
      accountPage: 'https://ezstaking.app/kujira/account/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/kujira',
      txPage: 'https://atomscan.com/kujira/transactions/${txHash}',
      accountPage: 'https://atomscan.com/kujira/accounts/${accountAddress}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/kujira',
      txPage: 'https://mainnet.whispernode.com/kujira/tx/${txHash}',
      accountPage: 'https://mainnet.whispernode.com/kujira/account/${accountAddress}'
    }
  ],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kujira-chain-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kujira-chain-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg',
      theme: {
        primaryColorHex: '#e33b34'
      }
    }]
};
export default info;