import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'dydx',
  status: 'live',
  website: 'https://dydx.trade/',
  networkType: 'mainnet',
  prettyName: 'dYdX Protocol',
  chainId: 'dydx-mainnet-1',
  bech32Prefix: 'dydx',
  daemonName: 'dydxprotocold',
  nodeHome: '$HOME/.dydxprotocol',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'adydx',
        fixedMinGasPrice: 12500000000,
        lowGasPrice: 12500000000,
        averageGasPrice: 12500000000,
        highGasPrice: 20000000000
      }, {
        denom: 'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
        fixedMinGasPrice: 0.025,
        lowGasPrice: 0.025,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'adydx'
      }]
  },
  codebase: {
    cosmosSdkVersion: 'dydxprotocol/cosmos-sdk v0.50.5-0.20240220212824-35f31482370c'
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
  },
  description: 'Our goal is to build open source code that can power a first class product and trading experience.',
  apis: {
    rpc: [
      {
        address: 'https://dydx-rpc.kingnodes.com:443',
        provider: 'Kingnodes 👑'
      },
      {
        address: 'https://dydx-dao-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://dydx-mainnet-full-rpc.public.blastapi.io',
        provider: 'Bware Labs'
      },
      {
        address: 'https://dydx-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://dydx-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake | StakeDrops'
      },
      {
        address: 'https://rpc-dydx.ecostake.com:443',
        provider: 'ecostake'
      },
      {
        address: 'https://rpc.dydx.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'https://rpc-dydx.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://dydx-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rpc-dydx.cros-nest.com:443',
        provider: 'Crosnest'
      },
      {
        address: 'https://dydx-rpc.enigma-validator.com',
        provider: 'Enigma'
      },
      {
        address: 'https://community.nuxian-node.ch:6797/dydx/trpc',
        provider: 'PRO Delegators'
      }
    ],
    rest: [
      {
        address: 'https://community.nuxian-node.ch:6797/dydx/crpc',
        provider: 'PRO Delegators'
      },
      {
        address: 'https://dydx-dao-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://dydx-mainnet-full-lcd.public.blastapi.io',
        provider: 'Bware Labs'
      },
      {
        address: 'https://dydx-rest.kingnodes.com:443',
        provider: 'Kingnodes 👑'
      },
      {
        address: 'https://dydx-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://dydx-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake | StakeDrops'
      },
      {
        address: 'https://rest-dydx.ecostake.com:443',
        provider: 'ecostake'
      },
      {
        address: 'https://api-dydx.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://api.dydx.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'https://dydx-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rest-dydx.cros-nest.com:443',
        provider: 'Crosnest'
      },
      {
        address: 'https://dydx-lcd.enigma-validator.com',
        provider: 'Enigma'
      }
    ],
    grpc: [
      {
        address: 'dydx-dao-grpc-1.polkachu.com:23890',
        provider: 'Polkachu (1)'
      },
      {
        address: 'dydx-dao-grpc-2.polkachu.com:23890',
        provider: 'Polkachu (2)'
      },
      {
        address: 'dydx-dao-grpc-3.polkachu.com:23890',
        provider: 'Polkachu (3)'
      },
      {
        address: 'dydx-dao-grpc-4.polkachu.com:23890',
        provider: 'Polkachu (4)'
      },
      {
        address: 'dydx-dao-grpc-5.polkachu.com:23890',
        provider: 'Polkachu (5)'
      },
      {
        address: 'dydx-mainnet-full-grpc.public.blastapi.io:443',
        provider: 'Bware Labs'
      },
      {
        address: 'https://dydx-grpc.kingnodes.com:443',
        provider: 'Kingnodes 👑'
      },
      {
        address: 'https://dydx-grpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'dydx-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake | StakeDrops'
      },
      {
        address: 'https://grpc.dydx.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'dydx.grpc.kjnodes.com:443',
        provider: 'kjnodes'
      },
      {
        address: 'grpc-dydx.cosmos-spaces.cloud:4990',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'dydx-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/dydx',
      txPage: 'https://www.mintscan.io/dydx/txs/${txHash}',
      accountPage: 'https://www.mintscan.io/dydx/account/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/dydx',
      txPage: 'https://ezstaking.app/dydx/txs/${txHash}',
      accountPage: 'https://ezstaking.app/dydx/account/${accountAddress}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.top/dydx/',
      txPage: 'https://explorer.nodestake.top/dydx/txs/${txHash}',
      accountPage: 'https://explorer.nodestake.top/dydx/account/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/dydx',
      txPage: 'https://explorer.tcnetwork.io/dydx/transaction/${txHash}',
      accountPage: 'https://explorer.tcnetwork.io/dydx/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
    }]
};
export default info;