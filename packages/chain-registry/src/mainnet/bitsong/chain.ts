import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../chain.schema.json',
  chain_name: 'bitsong',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://bitsong.io/',
  pretty_name: 'BitSong',
  chain_type: 'cosmos',
  chain_id: 'bitsong-2b',
  bech32_prefix: 'bitsong',
  slip44: 639,
  daemon_name: 'bitsongd',
  node_home: '$HOME/.bitsongd',
  codebase: {
    cosmos_sdk_version: 'v0.45.16',
    cosmwasm_enabled: true,
    cosmwasm_version: 'v0.33.0'
  },
  fees: {
    fee_tokens: [{
        denom: 'ubtsg',
        fixed_min_gas_price: 0,
        low_gas_price: 3,
        average_gas_price: 10,
        high_gas_price: 20
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ubtsg'
      }]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg'
  },
  description: 'Artists, Fans, Managers and Labels in One Single Holistic Ecosystem: $BTSG. Earn real-time royalties, discover exclusive content, mint and trade Fantokens, buy & sell NFTs.',
  apis: {
    rpc: [
      {
        address: 'https://rpc-bitsong-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://rpc.explorebitsong.com',
        provider: 'stake.systems'
      },
      {
        address: 'https://bitsong-rpc.validatrium.club',
        provider: 'Validatrium'
      },
      {
        address: 'https://rpc.bitsong.chaintools.tech/',
        provider: 'ChainTools'
      },
      {
        address: 'https://rpc.bitsong.quokkastake.io',
        provider: '🐹 Quokka Stake'
      },
      {
        address: 'https://rpc-bitsong.starsquid.io',
        provider: 'Starsquid'
      },
      {
        address: 'https://rpc-bitsong.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'http://bitsong.statesync.nodersteam.com:11657',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://rpc.bitsong.safeblock.space',
        provider: 'Safe Block'
      },
      {
        address: 'https://bitsong.tdrsys.com:2053',
        provider: 'TdrSys'
      },
      {
        address: 'https://bitsong-rpc.panthea.eu',
        provider: 'Panthea EU'
      },
      {
        address: 'https://rpc.bitsong.mathnodes.com',
        provider: 'MathNodes'
      },
      {
        address: 'https://bitsong-rpc.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://bitsong-rpc.bluestake.net:443',
        provider: 'BlueStake 🚀'
      },
      {
        address: 'https://bitsong.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      }
    ],
    rest: [
      {
        address: 'https://api-bitsong-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://lcd.explorebitsong.com/',
        provider: 'stake.systems'
      },
      {
        address: 'https://bitsong-api.validatrium.club',
        provider: 'Validatrium'
      },
      {
        address: 'https://api.bitsong.quokkastake.io',
        provider: '🐹 Quokka Stake'
      },
      {
        address: 'http://bitsong.api.nodersteam.com:11017',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://api-bitsong.starsquid.io',
        provider: 'Starsquid'
      },
      {
        address: 'https://rest-bitsong.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://api.bitsong.safeblock.space',
        provider: 'Safe Block'
      },
      {
        address: 'https://bitsong.tdrsys.com',
        provider: 'TdrSys'
      },
      {
        address: 'https://bitsong-api.panthea.eu',
        provider: 'Panthea EU'
      },
      {
        address: 'https://api.bitsong.mathnodes.com',
        provider: 'MathNodes'
      },
      {
        address: 'https://bitsong-api.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://bitsong.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://bitsong-api.bluestake.net',
        provider: 'BlueStake 🚀'
      }
    ],
    grpc: [
      {
        address: 'grpc-bitsong-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'bitsong.grpc.nodersteam.com:9111/',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'grpc.bitsong.safeblock.space:9090',
        provider: 'Safe Block'
      },
      {
        address: 'bitsong-grpc.panthea.eu:16750',
        provider: 'Panthea EU'
      },
      {
        address: 'grpc.bitsong.mathnodes.com:9092',
        provider: 'MathNodes'
      },
      {
        address: 'bitsong-grpc.noders.services:20090',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'bitsong.grpc.m.stavr.tech:9988',
        provider: '🔥STAVR🔥'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/bitsong',
      tx_page: 'https://ezstaking.app/bitsong/txs/${txHash}',
      account_page: 'https://ezstaking.app/bitsong/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/bitsong',
      tx_page: 'https://ping.pub/bitsong/tx/${txHash}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/bitsong',
      tx_page: 'https://www.mintscan.io/bitsong/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/bitsong/accounts/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/bitsong',
      tx_page: 'https://atomscan.com/bitsong/transactions/${txHash}',
      account_page: 'https://atomscan.com/bitsong/accounts/${accountAddress}'
    },
    {
      kind: 'Safe Block',
      url: 'https://explorer.safeblok.space/bitsong',
      tx_page: 'https://explorer.safeblock.space/bitsong/tx/${txHash}',
      account_page: 'https://explorer.safeblock.space/bitsong/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Bitsong',
      tx_page: 'https://explorer.stavr.tech/Bitsong/tx/${txHash}',
      account_page: 'https://explorer.stavr.tech/Bitsong/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg',
      theme: {
        primary_color_hex: '#c8307f'
      }
    }]
} as const satisfies Chain;
export default info;