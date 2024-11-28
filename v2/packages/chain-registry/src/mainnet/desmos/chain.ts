import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'desmos',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://desmos.network/',
  prettyName: 'Desmos',
  chainType: 'cosmos',
  chainId: 'desmos-mainnet',
  bech32Prefix: 'desmos',
  daemonName: 'desmos',
  nodeHome: '$HOME/.desmos',
  keyAlgos: ['secp256k1'],
  slip44: 852,
  fees: {
    feeTokens: [{
        denom: 'udsm',
        fixedMinGasPrice: 0.001,
        lowGasPrice: 0.01,
        averageGasPrice: 0.03,
        highGasPrice: 0.05
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'udsm'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/desmos-labs/desmos',
    recommendedVersion: 'v7.1.0',
    compatibleVersions: ['v7.1.0'],
    binaries: {
      "linux/amd64": 'https://github.com/desmos-labs/desmos/releases/download/v7.1.0/desmos-v7.1.0-linux-amd64'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.37.4'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/desmos-labs/mainnet/main/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/desmos-labs/cosmos-sdk',
      version: 'v0.47.10',
      tag: 'v0.47.10-desmos'
    },
    ibc: {
      type: 'go',
      version: 'v7.4.0'
    },
    cosmwasm: {
      version: 'v0.45.0',
      path: '$HOME/.desmos/data/wasm',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.mainnet.desmos.network',
        provider: 'desmos'
      },
      {
        address: 'https://desmos-rpc.ibs.team/',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://desmos-rpc.staketab.org:443',
        provider: 'Staketab'
      },
      {
        address: 'https://rpc.desmos.tcnetwork.io',
        provider: 'TC Network'
      },
      {
        address: 'https://rpc.desmos.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://desmos.declab.pro:26613',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'https://desmos-rpc.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    rest: [
      {
        address: 'https://api.mainnet.desmos.network',
        provider: 'desmos'
      },
      {
        address: 'https://desmos-api.ibs.team/',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://desmos-rest.staketab.org',
        provider: 'Staketab'
      },
      {
        address: 'https://rest.desmos.tcnetwork.io',
        provider: 'TC Network'
      },
      {
        address: 'https://lcd.desmos.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://vidulum.declab.pro:443',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'https://desmos-api.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    grpc: [
      {
        address: 'https://grpc-desmos.explorer.co.id',
        provider: 'Nodine.ID'
      },
      {
        address: 'services.staketab.com:9043',
        provider: 'Staketab'
      },
      {
        address: 'desmos.grpc.nodersteam.com:9121',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://grpc-desmos.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'https://grpc.desmos.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://vidulum.declab.pro:9009',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'desmos-grpc.noders.services:27090',
        provider: '[NODERS]TEAM'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/desmos',
      txPage: 'https://ezstaking.app/desmos/txs/${txHash}',
      accountPage: 'https://ezstaking.app/desmos/account/${accountAddress}'
    },
    {
      kind: 'bigdipper',
      url: 'https://bigdipper.live/desmos',
      txPage: 'https://bigdipper.live/desmos/transactions/${txHash}',
      accountPage: 'https://bigdipper.live/desmos/accounts/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/desmos',
      txPage: 'https://www.mintscan.io/desmos/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/desmos/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/desmos',
      txPage: 'https://ping.pub/desmos/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/desmos',
      txPage: 'https://atomscan.com/desmos/transactions/${txHash}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/desmos',
      txPage: 'https://explorer.tcnetwork.io/desmos/transaction/${txHash}'
    },
    {
      kind: 'Decloud Nodes Lab',
      url: 'https://explorer.declab.pro/Desmos',
      txPage: 'https://explorer.declab.pro/Desmos/tx/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg',
      theme: {
        primaryColorHex: '#fb804e'
      }
    }]
};
export default info;