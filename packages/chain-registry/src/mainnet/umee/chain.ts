import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'umee',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.ux.xyz',
  pretty_name: 'UX Chain',
  chain_id: 'umee-1',
  bech32_prefix: 'umee',
  daemon_name: 'umeed',
  node_home: '$HOME/.umee',
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uumee',
        fixed_min_gas_price: 0.1,
        low_gas_price: 0.1,
        average_gas_price: 0.12,
        high_gas_price: 0.2
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uumee'
      }
    ]
  },
  codebase: {
    cosmos_sdk_version: '0.47',
    cosmwasm_enabled: true,
    cosmwasm_version: '0.43'
  },
  logo_URIs: {
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
        address: 'https://umee-rpc.highstakes.ch:26657/',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://umee.rpc.stakevillage.net:443',
        provider: 'Stake Village'
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
        address: 'https://umee-api.highstakes.ch:1317/',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://umee.api.stakevillage.net',
        provider: 'Stake Village'
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
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/umee/',
      tx_page: 'https://www.mintscan.io/umee/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/umee/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/umee',
      tx_page: 'https://ping.pub/umee/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥 Explorer',
      url: 'https://explorer.stavr.tech/umee',
      tx_page: 'https://explorer.stavr.tech/umee/tx/${txHash}'
    },
    {
      kind: 'explorers.guru',
      url: 'https://umee.explorers.guru',
      tx_page: 'https://umee.explorers.guru/transaction/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/umee',
      tx_page: 'https://atomscan.com/umee/transactions/${txHash}',
      account_page: 'https://atomscan.com/umee/accounts/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/umee',
      account_page: 'https://stakeflow.io/umee/accounts/${accountAddress}'
    },
    {
      kind: 'Stake-Take',
      url: 'https://explorer.stake-take.com/umee',
      tx_page: 'https://explorer.stake-take.com/umee/transactions/${txHash}',
      account_page:
        'https://explorer.stake-take.com/umee/account/${accountAddress}'
    },
    {
      kind: 'Stake Village',
      url: 'https://exp.stakevillage.net/umee',
      tx_page: 'https://exp.stakevillage.net/umee/tx/${txHash}',
      account_page:
        'https://exp.stakevillage.net/umee/account/${accountAddress}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
    }
  ]
};
export default info;
