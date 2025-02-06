import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'umee',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.ux.xyz',
  prettyName: 'UX Chain',
  chainType: 'cosmos',
  chainId: 'umee-1',
  bech32Prefix: 'umee',
  daemonName: 'umeed',
  nodeHome: '$HOME/.umee',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uumee',
        fixedMinGasPrice: 0.1,
        lowGasPrice: 0.1,
        averageGasPrice: 0.12,
        highGasPrice: 0.2
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uumee'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/umee-network/umee',
    recommendedVersion: 'v6.3.0',
    compatibleVersions: ['v6.3.0'],
    binaries: {
      "linux/amd64": 'https://github.com/umee-network/umee/releases/download/v6.3.0/umeed-v6.3.0-linux-amd64.tar.gz'
    },
    consensus: {
      type: 'cometbft',
      version: '0.37'
    },
    genesis: {
      name: 'v1.0.1',
      genesisUrl: 'https://raw.githubusercontent.com/umee-network/mainnet/main/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.47'
    },
    ibc: {
      type: 'go',
      version: '7.3.2'
    },
    cosmwasm: {
      version: '0.43',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://umee-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc-umee-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://umee-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'http://umee.rpc.m.stavr.tech:10457',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'http://rpc-umee-0.node75.org:26657',
        provider: 'Pro-Nodes75'
      },
      {
        address: 'https://umee-rpc.tienthuattoan.com',
        provider: 'TTT 🇻🇳'
      },
      {
        address: 'https://rpc-umee-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://umee-rpc.staketab.org:443',
        provider: 'Staketab'
      },
      {
        address: 'https://umee-rpc.theamsolutions.info',
        provider: 'AM Solutions'
      },
      {
        address: 'https://umee.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://umee-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://rpc-umee.mms.team',
        provider: 'MMS'
      },
      {
        address: 'https://rpc-umee.mzonder.com',
        provider: 'MZONDER'
      },
      {
        address: 'https://umee-rpc.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://umee-rpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://umee.rpc.stakevillage.net:443',
        provider: 'Stake Village'
      },
      {
        address: 'https://umee-rpc.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://umee_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://ux-rpc.chainroot.io',
        provider: 'Chainroot'
      }
    ],
    rest: [
      {
        address: 'https://api-umee-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://umee.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://umee-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://umee-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://umee-api.tienthuattoan.ventures',
        provider: 'TienThuatToan'
      },
      {
        address: 'https://api-umee-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://umee-rest.staketab.org',
        provider: 'Staketab'
      },
      {
        address: 'https://umee-api.theamsolutions.info',
        provider: 'AM Solutions'
      },
      {
        address: 'https://umee.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://umee-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://api-umee.mms.team',
        provider: 'MMS'
      },
      {
        address: 'https://api-umee.mzonder.com',
        provider: 'MZONDER'
      },
      {
        address: 'https://umee-api.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://umee-api.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://umee.api.stakevillage.net',
        provider: 'Stake Village'
      },
      {
        address: 'https://umee-api.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://umee_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://ux-api.chainroot.io',
        provider: 'Chainroot'
      }
    ],
    grpc: [
      {
        address: 'grpc-umee-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'umee-grpc.polkachu.com:13690',
        provider: 'Polkachu'
      },
      {
        address: 'umee-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'umee.grpc.m.stavr.tech:9090',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'umee-grpc.tienthuattoan.ventures:9090',
        provider: 'TienThuatToan'
      },
      {
        address: 'grpc-umee-01.stakeflow.io:9990',
        provider: 'Stakeflow'
      },
      {
        address: 'services.staketab.com:9020',
        provider: 'Staketab'
      },
      {
        address: 'umee.grpc.kjnodes.com:16290',
        provider: 'kjnodes'
      },
      {
        address: 'umee-grpc.w3coins.io:13690',
        provider: 'w3coins'
      },
      {
        address: 'grpc-umee.mms.team:443',
        provider: 'MMS'
      },
      {
        address: 'grpc-umee.mzonder.com:443',
        provider: 'MZONDER'
      },
      {
        address: 'umee-grpc.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'umee.grpc.stakevillage.net:11090',
        provider: 'Stake Village'
      },
      {
        address: 'umee-grpc.noders.services:32090',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'umee-grpc.chainroot.io:443',
        provider: 'Chainroot'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/umee/',
      txPage: 'https://www.mintscan.io/umee/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/umee/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/umee',
      txPage: 'https://ping.pub/umee/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥 Explorer',
      url: 'https://explorer.stavr.tech/umee',
      txPage: 'https://explorer.stavr.tech/umee/tx/${txHash}'
    },
    {
      kind: 'explorers.guru',
      url: 'https://umee.explorers.guru',
      txPage: 'https://umee.explorers.guru/transaction/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/umee',
      txPage: 'https://atomscan.com/umee/transactions/${txHash}',
      accountPage: 'https://atomscan.com/umee/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/umee',
      txPage: 'https://staking-explorer.com/transaction.php?chain=umee&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=umee&addr=${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/umee',
      accountPage: 'https://stakeflow.io/umee/accounts/${accountAddress}'
    },
    {
      kind: 'Stake-Take',
      url: 'https://explorer.stake-take.com/umee',
      txPage: 'https://explorer.stake-take.com/umee/transactions/${txHash}',
      accountPage: 'https://explorer.stake-take.com/umee/account/${accountAddress}'
    },
    {
      kind: 'Stake Village',
      url: 'https://exp.stakevillage.net/umee',
      txPage: 'https://exp.stakevillage.net/umee/tx/${txHash}',
      accountPage: 'https://exp.stakevillage.net/umee/account/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/umee',
      txPage: 'https://ezstaking.app/umee/txs/${txHash}',
      accountPage: 'https://ezstaking.app/umee/account/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/umee',
      txPage: 'https://explorer.whenmoonwhenlambo.money/umee/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/umee/account/${accountAddress}'
    },
    {
      kind: 'Chainroot',
      url: 'https://explorer.chainroot.io/ux',
      txPage: 'https://explorer.chainroot.io/ux/transactions/${txHash}',
      accountPage: 'https://explorer.chainroot.io/ux/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg',
      theme: {
        primaryColorHex: '#22f2e9'
      }
    }]
};
export default info;