import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'shido',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://shido.io/',
  prettyName: 'Shido',
  chainType: 'cosmos',
  chainId: 'shido_9008-1',
  bech32Prefix: 'shido',
  nodeHome: '$HOME/.shidod',
  daemonName: 'shidod',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'shido',
        fixedMinGasPrice: 250000000,
        lowGasPrice: 20000000000,
        averageGasPrice: 25000000000,
        highGasPrice: 40000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'shido'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/ShidoGlobal/shidochain',
    recommendedVersion: 'v2.0.0',
    compatibleVersions: ['v2.0.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.37.4'
    },
    binaries: {
      "linux/amd64": 'https://github.com/ShidoGlobal/mainnetShidoNodeSync/releases/download/v2.0.0/ubuntu_22.04.tar.gz'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/ShidoGlobal/mainnetShidoNodeSync/main/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.47.4'
    },
    ibc: {
      type: 'go',
      version: 'v7.4.0'
    },
    cosmwasm: {
      version: 'v0.45.0',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.svg'
  },
  description: 'Developers use Shido as the Ethereum and Wasm Chain to deploy applications of the future. Get all the functionalities of Ethereum and Wasm with the power of IBC and Interchain composability.',
  apis: {
    rpc: [
      {
        address: 'https://tendermint.shidoscan.com',
        provider: 'Shido'
      },
      {
        address: 'https://shidochain_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://rpc.shido.256x25.tech:443',
        provider: '256x25'
      },
      {
        address: 'https://rpc.shido.indonode.net:443',
        provider: 'Indonode'
      },
      {
        address: 'https://rpc.mavnode.io',
        provider: 'MavNode'
      },
      {
        address: 'https://rpc.kenseishido.com',
        provider: 'KENSEI'
      },
      {
        address: 'https://rpc.shidoscan.net',
        provider: 'Shido'
      },
      {
        address: 'https://shido-mainnet-archive-lb-nw5es9.zeeve.net/USjg7xqUmCZ4wCsqEOOE/',
        provider: 'Zeeve'
      }
    ],
    rest: [
      {
        address: 'https://swagger.shidoscan.com',
        provider: 'Shido'
      },
      {
        address: 'https://shidochain_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://rest.shido.256x25.tech:443',
        provider: '256x25'
      },
      {
        address: 'https://api.shido.indonode.net',
        provider: 'Indonode'
      },
      {
        address: 'https://rest.mavnode.io',
        provider: 'MavNode'
      },
      {
        address: 'https://api.kenseishido.com',
        provider: 'KENSEI'
      },
      {
        address: 'https://api.shidoscan.net',
        provider: 'Shido'
      },
      {
        address: 'https://shido-mainnet-archive-lb-nw5es9.zeeve.net/USjg7xqUmCZ4wCsqEOOE/',
        provider: 'Zeeve'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.shidoscan.com',
        provider: 'shido.io'
      },
      {
        address: 'https://grpc-web.shidoscan.com',
        provider: 'shido.io'
      },
      {
        address: 'https://grpc.mavnode.io',
        provider: 'MavNode'
      },
      {
        address: 'https://grpc.kenseishido.com',
        provider: 'KENSEI'
      }
    ],
    evmHttpJsonrpc: [
      {
        address: 'https://rpc-nodes.shidoscan.com',
        provider: 'Shido'
      },
      {
        address: 'https://rpc-delta-nodes.shidoscan.com',
        provider: 'Shido'
      },
      {
        address: 'https://shidochain_mainnet_evm.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://evm.mavnode.io',
        provider: 'MavNode'
      },
      {
        address: 'https://evm.kenseishido.com',
        provider: 'KENSEI'
      },
      {
        address: 'https://shido-mainnet-archive-lb-nw5es9.zeeve.net/USjg7xqUmCZ4wCsqEOOE/rpc',
        provider: 'Zeeve'
      },
      {
        address: 'https://evm.shidoscan.net',
        provider: 'Shido'
      }
    ]
  },
  explorers: [
    {
      kind: 'shido',
      url: 'https://shidoscan.com',
      txPage: 'https://shidoscan.com/tx/${txHash}',
      accountPage: 'https://shidoscan.com/address/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/shido',
      txPage: 'https://explorer.whenmoonwhenlambo.money/shido/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/shido/account/${accountAddress}'
    },
    {
      kind: '256x25',
      url: 'https://explorer.256x25.tech/shido',
      txPage: 'https://explorer.256x25.tech/shido/tx/${txHash}',
      accountPage: 'https://explorer.256x25.tech//shido/account/${accountAddress}'
    },
    {
      kind: 'MavNode',
      url: 'https://explorer.mavnode.io/shido',
      txPage: 'https://explorer.mavnode.io/shido/tx/${txHash}',
      accountPage: 'https://explorer.mavnode.io/shido/account/${accountAddress}'
    },
    {
      kind: 'Indonode',
      url: 'https://explorer.indonode.net/shido',
      txPage: 'https://explorer.indonode.net/shido/tx/${txHash}',
      accountPage: 'https://explorer.indonode.net/shido/account/${accountAddress}'
    },
    {
      kind: 'Shido',
      url: 'https://native.shidoscan.net',
      txPage: 'https://native.shidoscan.net/shido/tx/${txHash}',
      accountPage: 'https://native.shidoscan.net/shido/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.svg',
      theme: {
        primaryColorHex: '#046ffc'
      }
    }]
};
export default info;