import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'comdex',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://comdex.one/',
  prettyName: 'Comdex',
  chainId: 'comdex-1',
  bech32Prefix: 'comdex',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ucmdx',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ucmdx'
      }]
  },
  codebase: {
    cosmosSdkVersion: 'v0.47.5',
    cosmwasmEnabled: true,
    cosmwasmVersion: 'v0.41.0'
  },
  daemonName: 'comdex',
  nodeHome: '$HOME/.comdex',
  keyAlgos: ['secp256k1'],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.comdex.one',
        provider: 'comdex'
      },
      {
        address: 'https://comdex-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://comdex.rpc.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc.comdex.chaintools.tech/',
        provider: 'ChainTools'
      },
      {
        address: 'https://comdex-rpc.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc-comdex.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://rpc-comdex.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://comdex-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://comdex-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://comdex-rpc.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://comdex-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rpc-comdex-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://comdex-rpc.validatornode.com',
        provider: 'ValidatorNode'
      }
    ],
    rest: [
      {
        address: 'https://rest.comdex.one',
        provider: 'comdex'
      },
      {
        address: 'https://api.comdex.chaintools.tech/',
        provider: 'ChainTools'
      },
      {
        address: 'https://comdex-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://comdex.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://comdex-api.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://api-comdex.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://comdex-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://lcd-comdex.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://comdex-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://comdex-rest.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://comdex-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://api-comdex-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://comdex-api.validatornode.com',
        provider: 'ValidatorNode'
      }
    ],
    grpc: [
      {
        address: 'grpc-comdex-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'comdex.grpcui.chaintools.host:443',
        provider: 'ChainTools'
      },
      {
        address: 'comdex-grpc.polkachu.com:13190',
        provider: 'Polkachu'
      },
      {
        address: 'comdex.grpc.m.stavr.tech:104',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'grpc-comdex.cosmos-spaces.cloud:2300',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'comdex-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'comdex-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'comdex-grpc.w3coins.io:13190',
        provider: 'w3coins'
      },
      {
        address: 'comdex-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'grpc-comdex-01.stakeflow.io:10002',
        provider: 'Stakeflow'
      },
      {
        address: 'comdex-grpc.stakerhouse.com:443',
        provider: 'StakerHouse'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/comdex',
      txPage: 'https://ezstaking.app/comdex/txs/${txHash}',
      accountPage: 'https://ezstaking.app/comdex/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/comdex',
      txPage: 'https://www.mintscan.io/comdex/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/comdex/accounts/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Comdex-Mainnet',
      txPage: 'https://explorer.stavr.tech/Comdex-Mainnet/txs/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Comdex-Mainnet/accounts/${accountAddress}'
    },
    {
      kind: 'aneka',
      url: 'https://comdex.aneka.io/',
      txPage: 'https://comdex.aneka.io/txs/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/comdex',
      txPage: 'https://ping.pub/comdex/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/comdex',
      txPage: 'https://atomscan.com/comdex/transactions/${txHash}',
      accountPage: 'https://atomscan.com/comdex/accounts/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/comdex',
      accountPage: 'https://stakeflow.io/comdex/accounts/${accountAddress}'
    },
    {
      kind: 'ValidatorNode',
      url: 'https://explorer.validatornode.com/comdex',
      txPage: 'https://explorer.validatornode.com/comdex/tx/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
    }]
};
export default info;