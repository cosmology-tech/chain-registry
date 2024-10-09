import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'crescent',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Crescent',
  chainId: 'crescent-1',
  bech32Prefix: 'cre',
  daemonName: 'crescentd',
  nodeHome: '$HOME/.crescent',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ucre',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ucre'
      }]
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://mainnet.crescent.network:26657',
        provider: 'crescent'
      },
      {
        address: 'https://crescent-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc-crescent.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://crescent.rpc.stakin-nodes.com',
        provider: 'Stakin'
      },
      {
        address: 'https://crescent-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc-crescent.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://rpc-crescent-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://crescent-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://rpc.crescent.bronbro.io:443',
        provider: 'Bro_n_Bro'
      }
    ],
    rest: [
      {
        address: 'https://mainnet.crescent.network:1317',
        provider: 'crescent'
      },
      {
        address: 'https://api-crescent.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://crescent-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://crescent.rest.stakin-nodes.com',
        provider: 'Stakin'
      },
      {
        address: 'https://api-crescent.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://crescent-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://api-crescent-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://crescent-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://lcd.crescent.bronbro.io:443',
        provider: 'Bro_n_Bro'
      }
    ],
    grpc: [
      {
        address: 'crescent-grpc.polkachu.com:14590',
        provider: 'Polkachu'
      },
      {
        address: 'crescent.grpc.stakin-nodes.com:443',
        provider: 'Stakin'
      },
      {
        address: 'crescent-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc-crescent.cosmos-spaces.cloud:2270',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'grpc-crescent-01.stakeflow.io:1402',
        provider: 'Stakeflow'
      },
      {
        address: 'crescent-grpc.w3coins.io:14590',
        provider: 'w3coins'
      },
      {
        address: 'https://grpc.crescent.bronbro.io:443',
        provider: 'Bro_n_Bro'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/crescent',
      txPage: 'https://www.mintscan.io/crescent/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/crescent/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/crescent',
      txPage: 'https://ezstaking.app/crescent/txs/${txHash}',
      accountPage: 'https://ezstaking.app/crescent/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/crescent',
      txPage: 'https://ping.pub/crescent/tx/${txHash}'
    },
    {
      kind: 'explorers.guru',
      url: 'https://crescent.explorers.guru',
      txPage: 'https://crescent.explorers.guru/transaction/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/crescent',
      txPage: 'https://atomscan.com/crescent/transactions/${txHash}',
      accountPage: 'https://atomscan.com/crescent/accounts/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/crescent',
      accountPage: 'https://stakeflow.io/crescent/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
    }]
};
export default info;