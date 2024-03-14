import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'humans',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://humans.ai/',
  pretty_name: 'Humans.ai',
  chain_id: 'humans_1089-1',
  bech32_prefix: 'human',
  node_home: '$HOME/.humansd',
  daemon_name: 'humansd',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: 'aheart',
        fixed_min_gas_price: 250000000,
        low_gas_price: 80000000000,
        average_gas_price: 100000000000,
        high_gas_price: 160000000000
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'aheart'
      }
    ]
  },
  codebase: {
    cosmos_sdk_version: '0.46.11'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/heart-dark-mode.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/heart-dark-mode.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.humans.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://humans.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://humans.rpc.nodeshub.online',
        provider: 'NodesHub'
      },
      {
        address: 'https://humans-mainnet-rpc.itrocket.net',
        provider: 'itrocket'
      },
      {
        address: 'https://humans-rpc.staketab.org:443',
        provider: 'Staketab'
      },
      {
        address: 'https://rpc-humansai.thenop.io:443',
        provider: 'TheNOP.io'
      },
      {
        address: 'https://humans-rpc.stakeangle.com/',
        provider: 'StakeAngle'
      },
      {
        address: 'https://humans-rpc.anyvalid.com:26627',
        provider: 'AnyValid'
      },
      {
        address: 'https://mainnet-humans-rpc.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'http://46.4.14.172:16657',
        provider: 'PPNV Service'
      },
      {
        address: 'https://rpc.humans-mainnet.stake-take.com/',
        provider: 'Stake-Take'
      },
      {
        address: 'https://rpc.humans.posthuman.digital',
        provider: 'posthuman'
      }
    ],
    rest: [
      {
        address: 'https://api.humans.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://humans.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://humans.api.nodeshub.online',
        provider: 'NodesHub'
      },
      {
        address: 'https://humans-mainnet-api.itrocket.net',
        provider: 'itrocket'
      },
      {
        address: 'https://humans-rest.staketab.org',
        provider: 'Staketab'
      },
      {
        address: 'https://api-humansai.thenop.io:443',
        provider: 'TheNOP.io'
      },
      {
        address: 'http://humans-rpc.stakeangle.com:41417',
        provider: 'StakeAngle'
      },
      {
        address: 'https://mainnet-humans-api.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'http://46.4.14.172:16317',
        provider: 'PPNV Service'
      },
      {
        address: 'https://api.humans-mainnet.stake-take.com/',
        provider: 'Stake-Take'
      },
      {
        address: 'https://rest.humans.posthuman.digital',
        provider: 'posthuman'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.humans.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'https://humans.grpc.kjnodes.com/',
        provider: 'kjnodes'
      },
      {
        address: 'https://grpc-humans.nodeist.net/',
        provider: 'Nodeist'
      },
      {
        address: 'humans-mainnet-grpc.itrocket.net:17090',
        provider: 'itrocket'
      },
      {
        address: 'http://humans-rpc.stakeangle.com:41490/',
        provider: 'Staketab'
      },
      {
        address: 'humans.grpc.nodersteam.com:9221',
        provider: '[NODERS]TEAM'
      },
      {
        address: '46.4.14.172:16090',
        provider: 'PPNV Service'
      },
      {
        address: 'https://grpc-humans.cosmos-spaces.cloud:1190',
        provider: 'StakePool'
      }
    ],
    'evm-http-jsonrpc': [
      {
        address: 'https://jsonrpc.humans.nodestake.top/',
        provider: 'NodeStake'
      },
      {
        address: 'https://humans-mainnet-evm.itrocket.net',
        provider: 'itrocket'
      },
      {
        address: 'https://humans-evm-rpc.staketab.org:443',
        provider: 'Staketab'
      },
      {
        address: 'https://evm.humans.stakepool.dev.br',
        provider: 'Stakepool'
      },
      {
        address: 'https://mainnet-humans-evm.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://evm.humans.posthuman.digital',
        provider: 'posthuman'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://mintscan.io/humans',
      tx_page: 'https://www.mintscan.io/humans/tx/${txHash}'
    },
    {
      kind: 'bigdipper',
      url: 'https://bigdipper.live/humans',
      tx_page: 'https://bigdipper.live/humans/transactions/${txHash}',
      account_page: 'https://bigdipper.live/humans/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/humans',
      tx_page: 'https://ping.pub/humans/tx/${txHash}'
    },
    {
      kind: 'explorers.guru',
      url: 'https://humans.explorers.guru',
      tx_page: 'https://humans.explorers.guru/transaction/${txHash}'
    },
    {
      kind: 'exploreme',
      url: 'https://humansai.exploreme.pro/',
      tx_page: 'https://humans.exploreme.pro/transaction/${txHash}'
    },
    {
      kind: 'itrocket',
      url: 'https://mainnet.itrocket.net/humans/staking',
      tx_page: 'https://mainnet.itrocket.net/humans/tx/${txHash}',
      account_page:
        'https://mainnet.itrocket.net/humans/account/${accountAddress}'
    },
    {
      kind: 'posthuman',
      url: 'https://explorer.posthuman.digital/humans',
      tx_page: 'https://explorer.posthuman.digital/humans/tx/${txHash}',
      account_page:
        'https://explorer.posthuman.digital/humans/account/${accountAddress}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/heart-dark-mode.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/heart-dark-mode.svg'
    }
  ]
};
export default info;
