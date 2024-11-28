import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'lavatestnet',
  status: 'live',
  preForkChainName: 'lavatestnet1',
  networkType: 'testnet',
  website: 'https://www.lavanet.xyz/',
  prettyName: 'Lava Testnet',
  chainType: 'cosmos',
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
    gitRepo: 'https://github.com/lavanet/lava',
    recommendedVersion: 'v1.0.1',
    compatibleVersions: ['v1.0.1'],
    binaries: {
      "linux/amd64": 'https://github.com/lavanet/lava/releases/download/v1.0.1/lavad-v1.0.1-linux-amd64'
    },
    consensus: {
      type: 'tendermint',
      version: '0.37'
    },
    genesis: {
      name: 'v0.21.1.2',
      genesisUrl: 'https://raw.githubusercontent.com/lavanet/lava-config/main/testnet-2/genesis_json/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.47.7'
    },
    ibc: {
      type: 'go',
      version: '7.2.0',
      icsEnabled: ['ics20-1']
    },
    cosmwasm: {
      version: '0.30',
      enabled: false
    }
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
        address: 'https://lav1.tendermintrpc.lava.build:443',
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
        address: 'https://lav1.lava.build/',
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