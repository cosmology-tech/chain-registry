import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'mars',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.marsprotocol.io/',
  prettyName: 'Mars Hub',
  chainId: 'mars-1',
  bech32Prefix: 'mars',
  daemonName: 'marsd',
  nodeHome: '$HOME/.mars',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  alternativeSlip44s: [330],
  fees: {
    feeTokens: [{
        denom: 'umars',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0,
        highGasPrice: 0.01
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'umars'
      }]
  },
  codebase: {
    cosmosSdkVersion: '0.46.7',
    cosmwasmEnabled: true,
    cosmwasmVersion: '0.30.0'
  },
  description: 'Lend, borrow and earn with an autonomous credit protocol in the Cosmos universe. Open to all, closed to none.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.marsprotocol.io:443',
        provider: 'Delphi Labs'
      },
      {
        address: 'https://mars-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://mars-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://mars-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc.expedition-mars.com',
        provider: 'Expedition Mars'
      },
      {
        address: 'https://mars-rpc.genznodes.dev:443',
        provider: 'genznodes'
      },
      {
        address: 'https://mars-rpc.stakeandrelax.net',
        provider: 'Stake&Relax Validator 🦥'
      },
      {
        address: 'https://mars-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://mars-rpc.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      }
    ],
    rest: [
      {
        address: 'https://rest.marsprotocol.io:443',
        provider: 'Delphi Labs'
      },
      {
        address: 'https://mars-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://mars-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://mars-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://lcd.expedition-mars.com:443',
        provider: 'Expedition Mars'
      },
      {
        address: 'https://mars-api.genznodes.dev:443',
        provider: 'genznodes'
      },
      {
        address: 'https://mars-api.stakeandrelax.net',
        provider: 'Stake&Relax Validator 🦥'
      },
      {
        address: 'https://mars-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://mars-api.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      }
    ],
    grpc: [
      {
        address: 'grpc.marsprotocol.io:443',
        provider: 'Delphi Labs'
      },
      {
        address: 'mars-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'mars-grpc.polkachu.com:18590',
        provider: 'Polkachu'
      },
      {
        address: 'mars-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'mars-grpc.genznodes.dev:26090',
        provider: 'genznodes'
      },
      {
        address: 'mars.grpc.kjnodes.com:14590',
        provider: 'kjnodes'
      },
      {
        address: 'grpc.mars.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'mars-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'mars-grpc.stakeandrelax.net:18590',
        provider: 'Stake&Relax 🦥'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/mars',
      txPage: 'https://ezstaking.app/mars/txs/${txHash}',
      accountPage: 'https://ezstaking.app/mars/account/${accountAddress}'
    },
    {
      kind: 'BigDipper',
      url: 'https://explorer.marsprotocol.io',
      txPage: 'https://explorer.marsprotocol.io/transactions/${txHash}',
      accountPage: 'https://explorer.marsprotocol.io/accounts/${accountAddress}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/mars',
      txPage: 'https://explorer.nodestake.top/mars/transactions/${txHash}',
      accountPage: 'https://explorer.nodestake.top/mars/account/${accountAddress}'
    },
    {
      kind: 'Nodes.Guru',
      url: 'https://mars.explorers.guru/',
      txPage: 'https://mars.explorers.guru/transaction/${txHash}',
      accountPage: 'https://mars.explorers.guru/account/${accountAddress}'
    },
    {
      kind: 'MintScan',
      url: 'https://www.mintscan.io/mars-protocol',
      txPage: 'https://www.mintscan.io/mars-protocol/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/mars-protocol/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/mars',
      txPage: 'https://ping.pub/mars/tx/${txHash}',
      accountPage: 'https://ping.pub/mars/account/${accountAddress}'
    }
  ],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-protocol.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-protocol.svg'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-protocol.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-protocol.svg'
    }]
};
export default info;