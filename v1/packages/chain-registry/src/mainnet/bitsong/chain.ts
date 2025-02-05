import { Chain } from '@chain-registry/types';
const info: Chain = {
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
    git_repo: 'https://github.com/bitsongofficial/go-bitsong',
    recommended_version: 'v0.20.4',
    compatible_versions: ['v0.20.4'],
    binaries: {
      "linux/amd64": 'https://github.com/bitsongofficial/go-bitsong/releases/download/v0.20.4/bitsongd-linux-amd64',
      "linux/arm64": 'https://github.com/bitsongofficial/go-bitsong/releases/download/v0.20.4/bitsongd-linux-arm64'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/bitsongofficial/networks/master/bitsong-2b/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.47.15'
    },
    ibc: {
      type: 'go',
      version: 'v7.4.0'
    },
    cosmwasm: {
      version: '0.45.0',
      enabled: true
    }
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
        address: 'https://rpc.explorebitsong.com',
        provider: 'stake.systems'
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
        address: 'https://rpc-bitsong.architectnodes.com',
        provider: 'Architect Nodes'
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
      },
      {
        address: 'https://bitsong-rpc.polkachu.com:443',
        provider: 'Polkachu'
      },
      {
        address: 'https://bitsong-rpc.tothemars.network:443',
        provider: 'ToTheMars'
      }
    ],
    rest: [
      {
        address: 'https://lcd.explorebitsong.com/',
        provider: 'stake.systems'
      },
      {
        address: 'https://api.bitsong.quokkastake.io',
        provider: '🐹 Quokka Stake'
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
      },
      {
        address: 'https://bitsong-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://bitsong-api.tothemars.network:443',
        provider: 'ToTheMars'
      }
    ],
    grpc: [
      {
        address: 'bitsong-grpc.polkachu.com:16090',
        provider: 'Polkachu'
      },
      {
        address: 'grpc.bitsong.safeblock.space:9090',
        provider: 'Safe Block'
      },
      {
        address: 'grpc.bitsong.mathnodes.com:9092',
        provider: 'MathNodes'
      },
      {
        address: 'bitsong-grpc.panthea.eu:16750',
        provider: 'Panthea EU'
      },
      {
        address: 'bitsong-grpc.noders.services:20090',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'bitsong.grpc.m.stavr.tech:9988',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'bitsong-grpc.tothemars.network:60290',
        provider: 'ToTheMars'
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
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/bitsong',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=bitsong&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=bitsong&addr=${accountAddress}'
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
};
export default info;