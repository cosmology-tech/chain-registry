import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'bandchain',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://bandprotocol.com/',
  prettyName: 'Band Protocol',
  chainType: 'cosmos',
  chainId: 'laozi-mainnet',
  daemonName: 'bandd',
  nodeHome: '$HOME/.band',
  bech32Prefix: 'band',
  slip44: 494,
  keyAlgos: ['secp256k1'],
  fees: {
    feeTokens: [{
        denom: 'uband',
        fixedMinGasPrice: 0.0025,
        lowGasPrice: 0.0025,
        averageGasPrice: 0.003,
        highGasPrice: 0.005
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uband'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/bandprotocol/chain',
    recommendedVersion: 'v2.5.4',
    compatibleVersions: [
      'v2.5.2',
      'v2.5.3',
      'v2.5.4'
    ],
    consensus: {
      type: 'cometbft',
      version: 'v0.34.29'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/bandprotocol/launch/master/laozi-mainnet/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.45.16'
    },
    ibc: {
      type: 'go',
      version: 'v4.3.1'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg'
  },
  description: 'Band Protocol is a cross-chain data oracle platform that aggregates and connects real-world data and APIs to smart contracts.',
  apis: {
    rpc: [
      {
        address: 'http://rpc.laozi1.bandchain.org:80',
        provider: 'bandprotocol'
      },
      {
        address: 'https://rpc-bandchain-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://band-rpc.ibs.team/',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://bandchain-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://band.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc-band-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://rpc-band.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://band-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://bandprotocol-rpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/bandchain/rpc',
        provider: 'Stakewolle'
      },
      {
        address: 'https://rpc.band.bronbro.io/',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://rpc.band.roomit.xyz/',
        provider: 'Roomit'
      },
      {
        address: 'https://band-rpc.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    rest: [
      {
        address: 'https://laozi1.bandchain.org/api',
        provider: 'bandprotocol'
      },
      {
        address: 'https://api-bandchain-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://band-api.ibs.team/',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://api-band.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://band.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://bandchain-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://api-band-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://band-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://bandprotocol-api.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/bandchain/rest',
        provider: 'Stakewolle'
      },
      {
        address: 'https://lcd.band.bronbro.io/',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://api.band.roomit.xyz/',
        provider: 'Roomit'
      },
      {
        address: 'https://band-api.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    grpc: [
      {
        address: 'grpc-bandchain-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'bandchain-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc-band.cosmos-spaces.cloud:2240',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'grpc-band-01.stakeflow.io:2502',
        provider: 'Stakeflow'
      },
      {
        address: 'band-grpc.w3coins.io:22990',
        provider: 'w3coins'
      },
      {
        address: 'http://band.grpc.m.stavr.tech:7803',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://grpc-band.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'band.grpc.kjnodes.com:443',
        provider: 'kjnodes'
      },
      {
        address: 'grpc.band.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'grpc.band.roomit.xyz:8443',
        provider: 'Roomit'
      },
      {
        address: 'band-grpc.noders.services:30090',
        provider: '[NODERS]TEAM'
      }
    ]
  },
  explorers: [
    {
      kind: 'cosmoscan',
      url: 'https://cosmoscan.io',
      txPage: 'https://cosmoscan.io/tx/${txHash}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/band',
      txPage: 'https://www.mintscan.io/band/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/band/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/band-protocol',
      txPage: 'https://ping.pub/band-protocol/tx/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/bandchain',
      txPage: 'https://staking-explorer.com/transaction.php?chain=bandchain&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=bandchain&addr=${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Band-Mainnet',
      txPage: 'https://explorer.stavr.tech/Band-Mainnet/tx/${txHash}'
    },
    {
      kind: 'Nodeist Explorer',
      url: 'https://exp.nodeist.net/band',
      txPage: 'https://exp.nodeist.net/band/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/band-protocol',
      txPage: 'https://atomscan.com/band-protocol/transactions/${txHash}',
      accountPage: 'https://atomscan.com/band-protocol/accounts/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/band-protocol',
      accountPage: 'https://stakeflow.io/band-protocol/accounts/${accountAddress}'
    },
    {
      kind: 'Roomit Explorer',
      url: 'https://explorer.tendermint.roomit.xyz/band-mainnet',
      accountPage: 'https://explorer.tendermint.roomit.xyz/band-mainnet/accounts/${accountAddress}'
    },
    {
      kind: 'kjnodes Explorer',
      url: 'https://explorer.kjnodes.com/band',
      txPage: 'https://explorer.kjnodes.com/band/tx/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg',
      theme: {
        primaryColorHex: '#4424e4'
      }
    }]
};
export default info;