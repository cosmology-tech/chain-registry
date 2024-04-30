import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'nyx',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://nymtech.net/',
  prettyName: 'Nym',
  chainId: 'nyx',
  bech32Prefix: 'n',
  daemonName: 'nyxd',
  nodeHome: '$HOME/.nyxd',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'unym',
        fixedMinGasPrice: 0.025,
        lowGasPrice: 0.025,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }, {
        denom: 'unyx',
        fixedMinGasPrice: 0.025,
        lowGasPrice: 0.025,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'unyx'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    cosmwasmEnabled: true
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.nymtech.net/',
        provider: 'Nym'
      },
      {
        address: 'https://rpc.nyx.nodes.guru/',
        provider: 'nodes guru'
      },
      {
        address: 'https://rpc.nym.forbole.com/',
        provider: 'forbole'
      },
      {
        address: 'https://nym-mainnet-rpc.commodum.io/',
        provider: 'commodum'
      },
      {
        address: 'https://nym-rpc.polkachu.com/',
        provider: 'Polkachu'
      }
    ],
    rest: [
      {
        address: 'https://nym-api.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://api.nyx.nodes.guru/',
        provider: 'nodes guru'
      },
      {
        address: 'https://api.nymtech.net',
        provider: 'Nym'
      }
    ],
    grpc: [{
        address: 'nym-grpc.polkachu.com:15390',
        provider: 'Polkachu'
      }, {
        address: 'grpc.nymtech.net:443',
        provider: 'Nym'
      }]
  },
  explorers: [
    {
      kind: 'Nodes Guru explorer',
      url: 'https://nym.explorers.guru/',
      txPage: 'https://nym.explorers.guru/transaction/${txHash}',
      accountPage: 'https://nym.explorers.guru/account/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/nyx',
      txPage: 'https://ezstaking.app/nyx/txs/${txHash}',
      accountPage: 'https://ezstaking.app/nyx/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/nyx',
      txPage: 'https://www.mintscan.io/nyx/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/nyx/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/nyx',
      txPage: 'https://ping.pub/nyx/tx/${txHash}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.svg',
      theme: {
        darkMode: false,
        circle: true
      }
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_dark.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_dark.svg',
      theme: {
        darkMode: true,
        circle: true
      }
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.png'
    }
  ]
};
export default info;