import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'terra2',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.terra.money/',
  prettyName: 'Terra',
  chainId: 'phoenix-1',
  daemonName: 'terrad',
  nodeHome: '$HOME/.terra',
  bech32Prefix: 'terra',
  slip44: 330,
  fees: {
    feeTokens: [{
        denom: 'uluna',
        fixedMinGasPrice: 0.015,
        lowGasPrice: 0.015,
        averageGasPrice: 0.015,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uluna'
      }]
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
  },
  description: 'Fueled by a passionate community and deep developer talent pool, the Terra blockchain is built to enable the next generation of Web3 products and services.',
  apis: {
    rpc: [
      {
        address: 'https://terra2-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://terra-rpc.polkachu.com',
        provider: 'polkachu'
      },
      {
        address: 'https://terra-rpc.stakely.io:443/',
        provider: 'stakely'
      },
      {
        address: 'https://phoenix-rpc.terra.dev:443',
        provider: 'Terraform Labs'
      },
      {
        address: 'https://terra-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rpc-terra-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://rpc-terra.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://terra-phoenix-rpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://rpc-terra.wildsage.io',
        provider: '🧙 WildSage Labs'
      },
      {
        address: 'https://terra.interstellar-lounge.org',
        provider: 'Interstellar Lounge 🍸'
      },
      {
        address: 'https://terra2.tdrsys.com:2053',
        provider: 'TdrSys'
      },
      {
        address: 'https://terra-rpc.cosmosrescue.dev:8443',
        provider: 'cosmosrescue'
      }
    ],
    rest: [
      {
        address: 'https://lcd-terra.wildsage.io',
        provider: '🧙 WildSage Labs'
      },
      {
        address: 'https://phoenix-lcd.terra.dev:443',
        provider: 'Terraform Labs'
      },
      {
        address: 'https://api-terra.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://terra-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://api-terra-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://terra-phoenix-api.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://terra-rest.interstellar-lounge.org',
        provider: 'Interstellar Lounge 🍸'
      },
      {
        address: 'https://terra2.tdrsys.com',
        provider: 'TdrSys'
      },
      {
        address: 'https://terra-api.cosmosrescue.dev:8443',
        provider: 'cosmosrescue'
      }
    ],
    grpc: [
      {
        address: 'terra2-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'terra-grpc.polkachu.com:11790',
        provider: 'Polkachu'
      },
      {
        address: 'terra-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'terra-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'grpc-terra.cosmos-spaces.cloud:2690',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'grpc-terra-01.stakeflow.io:1102',
        provider: 'Stakeflow'
      },
      {
        address: 'https://terra2.tdrsys.com:2083',
        provider: 'TdrSys'
      }
    ]
  },
  explorers: [
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/terra2',
      txPage: 'https://atomscan.com/terra2/transactions/${txHash}',
      accountPage: 'https://atomscan.com/terra2/accounts/${accountAddress}'
    },
    {
      kind: 'finder',
      url: 'http://finder.terra.money/',
      txPage: 'https://finder.terra.money/mainnet/tx/${txHash}',
      accountPage: 'https://finder.terra.money/mainnet/address/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/terra',
      accountPage: 'https://stakeflow.io/terra/accounts/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/terra',
      txPage: 'https://www.mintscan.io/terra/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/terra/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
    }]
};
export default info;