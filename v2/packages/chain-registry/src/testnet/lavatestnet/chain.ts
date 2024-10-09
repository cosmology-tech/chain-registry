import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'lavatestnet',
  status: 'live',
  preForkChainName: 'lavatestnet1',
  networkType: 'testnet',
  website: 'https://www.lavanet.xyz/',
  prettyName: 'Lava Testnet',
  chainId: 'lava-testnet-2',
  bech32Prefix: 'lava@',
  daemonName: 'lavad',
  nodeHome: '$HOME/.lava',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ulava',
        fixedMinGasPrice: 0.000001,
        lowGasPrice: 0.000001,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ulava'
      }],
    lockDuration: {
      time: '1209600s'
    }
  },
  codebase: {
    cosmosSdkVersion: '0.47.7',
    cosmwasmEnabled: false,
    cosmwasmVersion: '0.30'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.png',
      theme: {
        primaryColorHex: '#D7001F'
      }
    }, {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.svg'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.png'
  },
  apis: {
    rpc: [
      {
        address: 'https://public-rpc-testnet2.lavanet.xyz:443/rpc/',
        provider: 'Lava'
      },
      {
        address: 'http://lava.rpc.t.stavr.tech:198',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://lava-testnet-rpc.itrocket.net:443',
        provider: '🚀ITRocket🚀'
      },
      {
        address: 'https://lava-testnet-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ],
    rest: [
      {
        address: 'https://public-rpc-testnet2.lavanet.xyz:443/rest/',
        provider: 'Lava'
      },
      {
        address: 'https://lava.api.t.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://lava-testnet-api.itrocket.net',
        provider: '🚀ITRocket🚀'
      },
      {
        address: 'https://lava-testnet-api.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ]
  },
  explorers: [
    {
      kind: 'explorers.guru',
      url: 'https://lava.explorers.guru/',
      txPage: 'https://lava.explorers.guru//transaction/${txHash}',
      accountPage: 'https://lava.explorers.guru//account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Lava-Testnet',
      txPage: 'https://explorer.stavr.tech/Lava-Testnet/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Lava-Testnet/account/${accountAddress}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.org/lava-testnet',
      txPage: 'https://explorer.nodestake.org/lava-testnet/tx/${txHash}',
      accountPage: 'https://explorer.nodestake.org/lava-testnet/account/${accountAddress}'
    },
    {
      kind: '🚀ITRocket🚀',
      url: 'https://testnet.itrocket.net/lava',
      txPage: 'https://testnet.itrocket.net/lava/tx/${txHash}',
      accountPage: 'https://testnet.itrocket.net/lava/account/${accountAddress}'
    }
  ],
  keywords: [
    'rpc',
    'api',
    'modular',
    'data'
  ]
};
export default info;