import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'umee',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.ux.xyz',
  prettyName: 'UX Chain',
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
    cosmosSdkVersion: '0.47',
    cosmwasmEnabled: true,
    cosmwasmVersion: '0.43'
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
        address: 'https://umee-rpc.quantnode.tech',
        provider: 'QuantNode'
      },
      {
        address: 'https://umee-rpc.tienthuattoan.ventures',
        provider: 'TienThuatToan'
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
        address: 'https://umee-lcd.quantnode.tech',
        provider: 'QuantNode'
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
        address: 'umee-grpc.quantnode.tech:9090',
        provider: 'QuantNode gRPC'
      },
      {
        address: 'umee.grpc.m.stavr.tech:9090',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'umee-grpc.quantnode.tech:9091',
        provider: 'QuantNode gRPCweb'
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
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
    }]
};
export default info;