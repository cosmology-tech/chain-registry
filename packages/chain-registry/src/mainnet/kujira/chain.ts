import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'kujira',
  chain_type: 'cosmos',
  chain_id: 'kaiyo-1',
  pretty_name: 'Kujira',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://kujira.app/',
  bech32_prefix: 'kujira',
  daemon_name: 'kujirad',
  node_home: '$HOME/.kujira',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ukuji',
        fixed_min_gas_price: 0.0034,
        low_gas_price: 0.0034,
        average_gas_price: 0.0051,
        high_gas_price: 0.00681
      },
      {
        denom: 'factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk',
        fixed_min_gas_price: 0.01186,
        low_gas_price: 0.01186,
        average_gas_price: 0.01779,
        high_gas_price: 0.02372
      },
      {
        denom: 'ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F',
        fixed_min_gas_price: 0.0119,
        low_gas_price: 0.0119,
        average_gas_price: 0.01785,
        high_gas_price: 0.02379
      },
      {
        denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
        fixed_min_gas_price: 0.00129,
        low_gas_price: 0.00129,
        average_gas_price: 0.00193,
        high_gas_price: 0.00258
      },
      {
        denom: 'ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23',
        fixed_min_gas_price: 0.01795,
        low_gas_price: 0.01795,
        average_gas_price: 0.02692,
        high_gas_price: 0.0359
      },
      {
        denom: 'ibc/3607EB5B5E64DD1C0E12E07F077FF470D5BC4706AFCBC98FE1BA960E5AE4CE07',
        fixed_min_gas_price: 0.65943,
        low_gas_price: 0.65943,
        average_gas_price: 0.98915,
        high_gas_price: 1.31887
      },
      {
        denom: 'ibc/F3AA7EF362EC5E791FE78A0F4CCC69FEE1F9A7485EB1A8CAB3F6601C00522F10',
        fixed_min_gas_price: 160416396197,
        low_gas_price: 160416396197,
        average_gas_price: 240624594296,
        high_gas_price: 320832792394
      },
      {
        denom: 'ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5',
        fixed_min_gas_price: 0.02689,
        low_gas_price: 0.02689,
        average_gas_price: 0.04034,
        high_gas_price: 0.05379
      },
      {
        denom: 'ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986',
        fixed_min_gas_price: 0.01495,
        low_gas_price: 0.01495,
        average_gas_price: 0.02243,
        high_gas_price: 0.02991
      },
      {
        denom: 'ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5',
        fixed_min_gas_price: 0.03139,
        low_gas_price: 0.03139,
        average_gas_price: 0.04709,
        high_gas_price: 0.06278
      },
      {
        denom: 'ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602',
        fixed_min_gas_price: 0.90403,
        low_gas_price: 0.90403,
        average_gas_price: 1.35605,
        high_gas_price: 1.80806
      },
      {
        denom: 'ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2',
        fixed_min_gas_price: 559196837,
        low_gas_price: 559196837,
        average_gas_price: 838795256,
        high_gas_price: 1118393675
      },
      {
        denom: 'ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7',
        fixed_min_gas_price: 5772801,
        low_gas_price: 5772801,
        average_gas_price: 8659201,
        high_gas_price: 11545602
      },
      {
        denom: 'factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta',
        fixed_min_gas_price: 0.01807,
        low_gas_price: 0.01807,
        average_gas_price: 0.02711,
        high_gas_price: 0.03615
      },
      {
        denom: 'ibc/FE98AAD68F02F03565E9FA39A5E627946699B2B07115889ED812D8BA639576A9',
        fixed_min_gas_price: 0.01194,
        low_gas_price: 0.01194,
        average_gas_price: 0.01792,
        high_gas_price: 0.02389
      },
      {
        denom: 'ibc/E5CA126979E2FFB4C70C072F8094D07ECF27773B37623AD2BF7582AD0726F0F3',
        fixed_min_gas_price: 0.00019,
        low_gas_price: 0.00019,
        average_gas_price: 0.00029,
        high_gas_price: 0.00039
      }
    ]
  },
  staking: {
    staking_tokens: [{
        denom: 'ukuji'
      }]
  },
  codebase: {
    cosmos_sdk_version: 'v0.47.12',
    cosmwasm_enabled: true,
    cosmwasm_version: 'v0.45.0'
  },
  description: 'A decentralized ecosystem for protocols, builders and web3 users seeking sustainable FinTech.',
  apis: {
    rpc: [
      {
        address: 'https://rpc-kujira.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://rpc.kaiyo.kujira.setten.io',
        provider: 'setten.io'
      },
      {
        address: 'https://kujira-rpc.polkachu.com',
        provider: 'polkachu'
      },
      {
        address: 'https://rpc-kujira.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://kujira-rpc.lavenderfive.com:443',
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
        address: 'https://lcd-kujira.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://lcd.kaiyo.kujira.setten.io',
        provider: 'setten.io'
      },
      {
        address: 'https://kujira-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://kujira-api.polkachu.com/',
        provider: 'polkachu'
      },
      {
        address: 'https://rest-kujira.ecostake.com',
        provider: 'ecostake'
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
        address: 'kujira-grpc.lavenderfive.com:443',
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
      },
      {
        address: 'grpc-kujira.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      }
    ]
  },
  explorers: [
    {
      kind: 'kujira',
      url: 'https://finder.kujira.app',
      tx_page: 'https://finder.kujira.app/kaiyo-1/tx/${txHash}'
    },
    {
      kind: 'explorers.guru',
      url: 'https://kujira.explorers.guru',
      tx_page: 'https://kujira.explorers.guru/transaction/${txHash}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/kujira',
      tx_page: 'https://ezstaking.app/kujira/txs/${txHash}',
      account_page: 'https://ezstaking.app/kujira/account/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/kujira',
      tx_page: 'https://atomscan.com/kujira/transactions/${txHash}',
      account_page: 'https://atomscan.com/kujira/accounts/${accountAddress}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/kujira',
      tx_page: 'https://mainnet.whispernode.com/kujira/tx/${txHash}',
      account_page: 'https://mainnet.whispernode.com/kujira/account/${accountAddress}'
    }
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kujira-chain-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kujira-chain-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg',
      theme: {
        primary_color_hex: '#e33b34'
      }
    }]
};
export default info;