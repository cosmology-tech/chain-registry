import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'realio',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://realio.network/',
  prettyName: 'Realio Network',
  chainType: 'cosmos',
  chainId: 'realionetwork_3301-1',
  bech32Prefix: 'realio',
  nodeHome: '$HOME/.realio-network',
  daemonName: 'realio-networkd',
  keyAlgos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'ario',
        fixedMinGasPrice: 1000000000,
        lowGasPrice: 4000000000,
        averageGasPrice: 5000000000,
        highGasPrice: 8000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ario'
      }, {
        denom: 'arst'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/realiotech/realio-network',
    recommendedVersion: 'v0.9.3',
    compatibleVersions: ['v0.9.3'],
    binaries: {
      "linux/amd64": 'https://github.com/realiotech/realio-network/releases/download/v0.9.3/realio-network_Linux_x86_64.tar.gz',
      "linux/arm64": 'https://github.com/realiotech/realio-network/releases/download/v0.9.3/realio-network_Linux_arm64.tar.gz',
      "darwin/amd64": 'https://github.com/realiotech/realio-network/releases/download/v0.9.3/realio-network_Darwin_x86_64.tar.gz',
      "darwin/arm64": 'https://github.com/realiotech/realio-network/releases/download/v0.9.3/realio-network_Darwin_arm64.tar.gz',
      "windows/amd64": 'https://github.com/realiotech/realio-network/releases/download/v0.9.3/realio-network_Windows_x86_64.zip'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.34.27'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/realiotech/mainnet/main/realionetwork_3301-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.46.12'
    },
    ibc: {
      type: 'go',
      version: 'v6.1.1'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png'
  },
  apis: {
    rpc: [
      {
        address: 'https://realio-rpc.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://realio.rpc.bccnodes.com/',
        provider: 'BccNodes'
      },
      {
        address: 'https://rpc-realio-network.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'http://realio.rpc.m.stavr.tech:21097',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc.realio.indonode.net',
        provider: 'Indonode'
      },
      {
        address: 'https://rpc-realio.vinjan.xyz',
        provider: 'vinjan'
      },
      {
        address: 'https://api-realio.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'https://rpc.realio.safeblock.space',
        provider: 'Safe Block'
      },
      {
        address: 'https://realio.declab.pro:26622',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'https://realio-rpc.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://rpc-realio.blockval.io',
        provider: 'Blockval'
      },
      {
        address: 'https://realio_rio_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    rest: [
      {
        address: 'https://realio-api.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://realio.lcd.bccnodes.com/',
        provider: 'BccNodes'
      },
      {
        address: 'https://api-realio-network.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'https://realio.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api.realio.indonode.net',
        provider: 'Indonode'
      },
      {
        address: 'https://api-realio.vinjan.xyz',
        provider: 'vinjan'
      },
      {
        address: 'https://rpc-realio.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'https://api.realio.safeblock.space',
        provider: 'Safe Block'
      },
      {
        address: 'https://realio.declab.pro:443',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'https://realio-api.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://api-realio.blockval.io',
        provider: 'Blockval'
      },
      {
        address: 'https://realio_rio_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    grpc: [
      {
        address: 'realio-grpc.genznodes.dev:30090',
        provider: 'genznodes'
      },
      {
        address: 'realio.grpc.bccnodes.com:10990',
        provider: 'BccNodes'
      },
      {
        address: 'http://realio.grpc.m.stavr.tech:9062',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://grpc-realio.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'https://grpc.realio.nodestake.org:443',
        provider: 'NodeStake'
      },
      {
        address: 'https://grpc-realio.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'grpc.realio.safeblock.space:9090',
        provider: 'Safe Block'
      },
      {
        address: 'realio.grpc.skynodejs.net',
        provider: 'skynodejs'
      },
      {
        address: 'https://realio.declab.pro:9015',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'realio-grpc.noders.services:22090',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://grpc-realio.blockval.io',
        provider: 'Blockval'
      }
    ],
    evmHttpJsonrpc: [
      {
        address: 'https://realio-rpc-evm.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://jsonrpc.realio.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://evm-realio.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'https://evm.realio.safeblock.space',
        provider: 'Safe Block'
      },
      {
        address: 'https://realio-jsonrpc.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://realio_rio_mainnet_evm.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ]
  },
  explorers: [
    {
      kind: '🔥STAVR🔥 Explorer',
      url: 'https://explorer.stavr.tech/realio-mainnet',
      txPage: 'https://explorer.stavr.tech/realio-mainnet/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/realio-mainnet/account/{$accountAddress}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.org/realio',
      txPage: 'https://explorer.nodestake.org/realio/tx/${txHash}',
      accountPage: 'https://explorer.nodestake.org/realio/account/{$accountAddress}'
    },
    {
      kind: 'Sr20de Explorer',
      url: 'https://explorer.sr20de.xyz/Realio',
      txPage: 'https://explorer.sr20de.xyz/Realio/tx/${txHash}',
      accountPage: 'https://explorer.sr20de.xyz/Realio/account/{$accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/realio',
      txPage: 'https://explorer.tcnetwork.io/realio/transaction/${txHash}',
      accountPage: 'https://explorer.tcnetwork.io/realio/account/${accountAddress}'
    },
    {
      kind: 'Safe Block',
      url: 'https://explorer.safeblock.space/realio',
      txPage: 'https://explorer.safeblock.space/realio/tx/${txHash}',
      accountPage: 'https://explorer.safeblock.space/realio/account/${accountAddress}'
    },
    {
      kind: 'Decloud Nodes Lab',
      url: 'https://explorer.declab.pro/realio',
      txPage: 'https://explorer.declab.pro/realio/tx/${txHash}',
      accountPage: 'https://explorer.declab.pro/realio/account/{$accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/realio',
      txPage: 'https://explorer.whenmoonwhenlambo.money/realio/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/realio/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
      theme: {
        primaryColorHex: '#181818'
      }
    }]
};
export default info;