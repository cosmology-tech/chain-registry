import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'bitcanna',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.bitcanna.io/',
  pretty_name: 'BitCanna',
  chain_id: 'bitcanna-1',
  bech32_prefix: 'bcna',
  daemon_name: 'bcnad',
  node_home: '$HOME/.bcna',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ubcna',
        fixed_min_gas_price: 0.001,
        low_gas_price: 0.001,
        average_gas_price: 0.0025,
        high_gas_price: 0.01
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ubcna'
      }
    ]
  },
  codebase: {},
  logo_URIs: {
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
        address: 'http://rpc.bitcanna.citizencosmos.space/',
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
      }
    ]
  },
  explorers: [
    {
      kind: 'EZStaking Tools',
      url: 'https://app.ezstaking.io/bitcanna',
      tx_page: 'https://ezstaking.tools/bitcanna/txs/${txHash}',
      account_page: 'https://ezstaking.tools/bitcanna/account/${accountAddress}'
    },
    {
      kind: 'forbole',
      url: 'https://explorer.bitcanna.io',
      tx_page: 'https://explorer.bitcanna.io/transactions/${txHash}',
      account_page: 'https://explorer.bitcanna.io/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/bitcanna',
      tx_page: 'https://ping.pub/bitcanna/tx/${txHash}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/bitcanna/',
      tx_page: 'https://www.mintscan.io/bitcanna/txs/${txHash}',
      account_page: 'https://www.mintscan.io/bitcanna/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥 Explorer',
      url: 'https://explorer.stavr.tech/bitcanna',
      tx_page: 'https://explorer.stavr.tech/bitcanna/txs/${txHash}',
      account_page:
        'https://explorer.stavr.tech/bitcanna/account/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/bitcanna',
      tx_page: 'https://atomscan.com/bitcanna/transactions/${txHash}'
    },
    {
      kind: 'ValidatorNode Explorer',
      url: 'https://explorer.validatornode.com/bitcanna',
      tx_page: 'https://explorer.validatornode.com/bitcanna/tx/${txHash}'
    },
    {
      kind: 'AlxVoy ⚡ ANODE.TEAM Explorer',
      url: 'https://main.anode.team/bitcanna',
      tx_page: 'https://main.anode.team/bitcanna/txs/${txHash}',
      account_page: 'https://main.anode.team/bitcanna/account/${accountAddress}'
    },
    {
      kind: 'Moonbys Dashboard',
      url: 'https://explorer.moonbys.com',
      tx_page: 'https://explorer.moonbys.com/tx/${txHash}',
      account_page:
        'https://explorer.moonbys.com/bitcanna/account/${accountAddress}'
    },
    {
      kind: 'Indonode',
      url: 'https://explorer.indonode.net/bitcanna',
      tx_page: 'https://explorer.indonode.net/bitcanna/tx/${txHash}'
    },
    {
      kind: 'Safe Block',
      url: 'https://explorer.safeblock.space/bitcanna',
      tx_page: 'https://explorer.safeblock.space/bitcanna/tx/${txHash}',
      account_page:
        'https://explorer.safeblock.space/bitcanna/account/${accountAddress}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
    }
  ]
};
export default info;
