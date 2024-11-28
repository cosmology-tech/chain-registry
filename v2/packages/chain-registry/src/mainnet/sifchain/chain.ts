import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'sifchain',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://sifchain.finance/',
  prettyName: 'Sifchain',
  chainType: 'cosmos',
  chainId: 'sifchain-1',
  bech32Prefix: 'sif',
  daemonName: 'sifnoded',
  nodeHome: '$HOME/.sifnoded',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'rowan',
        lowGasPrice: 1000000000000,
        averageGasPrice: 1500000000000,
        highGasPrice: 2000000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'rowan'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/Sifchain/sifnode.git',
    recommendedVersion: 'v1.2.0-beta',
    compatibleVersions: ['v1.2.0-beta'],
    binaries: {
      "linux/amd64": 'https://github.com/Sifchain/sifnode/releases/download/v1.2.0-beta/sifnoded-v1.2.0-beta-linux-amd64.tar.gz'
    },
    genesis: {
      genesisUrl: 'https://github.com/Sifchain/networks/blob/master/betanet/sifchain-1/genesis.json.gz?raw=true'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://sifchain-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://sifchain-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://sifchain-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://sifchain_mainnet_rpc.chain.whenmoonwhenlambo.money:443',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    rest: [
      {
        address: 'https://api-sifchain-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://sifchain-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://sifchain-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://sifchain-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://sifchain.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://sifchain_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    grpc: [
      {
        address: 'sifchain-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'sifchain-grpc.polkachu.com:13290',
        provider: 'Polkachu'
      },
      {
        address: 'sifchain-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/sifchain',
      txPage: 'https://ping.pub/sifchain/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/sifchain',
      txPage: 'https://atomscan.com/sifchain/transactions/${txHash}',
      accountPage: 'https://atomscan.com/sifchain/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/sifchain',
      txPage: 'https://staking-explorer.com/transaction.php?chain=sifchain&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=sifchain&addr=${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Sifchain',
      txPage: 'https://explorer.stavr.tech/Sifchain/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Sifchain/accounts/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/sifchain',
      txPage: 'https://explorer.whenmoonwhenlambo.money/sifchain/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/sifchain/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg',
      theme: {
        primaryColorHex: '#be9926'
      }
    }]
};
export default info;