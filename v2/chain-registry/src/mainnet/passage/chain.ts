import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'passage',
  chainId: 'passage-2',
  preForkChainName: 'passage1',
  prettyName: 'Passage',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://passage3d.com/',
  bech32Prefix: 'pasg',
  daemonName: 'passage',
  nodeHome: '$HOME/.passage',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'upasg',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.001,
        averageGasPrice: 0.0025,
        highGasPrice: 0.01
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'upasg'
      }]
  },
  codebase: {
    cosmosSdkVersion: 'v0.45.16',
    cosmwasmVersion: 'v0.31.0'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.passage.vitwit.com',
        provider: 'vitwit'
      },
      {
        address: 'https://passage-rpc.staketab.org:443',
        provider: 'Staketab'
      },
      {
        address: 'https://rpc-passage.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://passage-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc-passage-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://rpc-passage.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://rpc.passage.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://passage-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://passage-rpc.ibs.team/',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://rpc-passage.d-stake.xyz',
        provider: 'D-stake'
      },
      {
        address: 'https://rpc-passage.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://passage-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://passage-rpc.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://passage-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://passage-rpc.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://rpc-passage.mainnet.validatrium.club',
        provider: 'Validatrium'
      },
      {
        address: 'https://rpc.passage.silentvalidator.com',
        provider: 'silent'
      }
    ],
    rest: [
      {
        address: 'https://api.passage.vitwit.com',
        provider: 'vitwit'
      },
      {
        address: 'https://passage-rest.staketab.org',
        provider: 'Staketab'
      },
      {
        address: 'https://rest-passage.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://passage-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://api-passage.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://api-passage-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://api.passage.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://passage-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://passage-api.ibs.team/',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://api-passage.d-stake.xyz',
        provider: 'D-stake'
      },
      {
        address: 'https://passage-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://lcd-passage.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://passage-rest.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://passage-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://passage-api.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://api-passage.mainnet.validatrium.club',
        provider: 'Validatrium'
      },
      {
        address: 'https://api.passage.silentvalidator.com',
        provider: 'silent'
      }
    ],
    grpc: [
      {
        address: 'grpc-passage-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'passage-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'passage-grpc.polkachu.com:15690',
        provider: 'Polkachu'
      },
      {
        address: 'grpc-passage.cosmos-spaces.cloud:2320',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'grpc.passage.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'passage-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'services.staketab.com:9023',
        provider: 'Staketab'
      },
      {
        address: 'passage-grpc.stakerhouse.com:443',
        provider: 'StakerHouse'
      },
      {
        address: 'passage-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'passage-grpc.stakeandrelax.net:15690',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'grpc-passage.mainnet.validatrium.club:20590',
        provider: 'Validatrium'
      },
      {
        address: 'grpc.passage.silentvalidator.com:443',
        provider: 'silent'
      }
    ]
  },
  explorers: [
    {
      kind: 'aneka',
      url: 'https://passage.aneka.io',
      txPage: 'https://passage.aneka.io/txs/${txHash}',
      accountPage: 'https://passage.aneka.io/accounts/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/passage',
      txPage: 'https://www.mintscan.io/passage/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/passage/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/passage',
      txPage: 'https://ezstaking.app/passage/txs/${txHash}',
      accountPage: 'https://ezstaking.app/passage/account/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/passage',
      txPage: 'https://atomscan.com/passage/transactions/${txHash}',
      accountPage: 'https://atomscan.com/passage/accounts/${accountAddress}'
    },
    {
      kind: 'cosmotracker',
      url: 'https://cosmotracker.com/passage',
      txPage: 'https://cosmotracker.com/passage/tx/${txHash}',
      accountPage: 'https://cosmotracker.com/passage/account/${accountAddress}'
    }
  ],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png'
    }]
};
export default info;