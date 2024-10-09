import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'sei',
  status: 'live',
  website: 'https://www.sei.io/',
  networkType: 'mainnet',
  prettyName: 'Sei',
  chainId: 'pacific-1',
  bech32Prefix: 'sei',
  daemonName: 'seid',
  nodeHome: '$HOME/.sei',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'usei',
        fixedMinGasPrice: 0.02,
        lowGasPrice: 0.02,
        averageGasPrice: 0.02,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'usei'
      }]
  },
  codebase: {
    cosmosSdkVersion: 'sei-cosmos v0.2.83',
    cosmwasmEnabled: true,
    cosmwasmVersion: 'sei-wasmd v0.1.1'
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
  },
  description: 'Sei is the fastest Layer 1 blockchain, designed to scale with the industry.',
  apis: {
    rpc: [
      {
        address: 'https://sei-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://sei-rpc.polkachu.com/',
        provider: 'polkachu.com'
      },
      {
        address: 'https://sei-rpc.brocha.in/',
        provider: 'Brochain'
      },
      {
        address: 'https://rpc-sei.stingray.plus/',
        provider: 'StingRay'
      },
      {
        address: 'https://rpc-sei.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://sei.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://sei-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    rest: [
      {
        address: 'https://sei-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://sei-api.polkachu.com/',
        provider: 'polkachu.com'
      },
      {
        address: 'https://sei-rest.brocha.in/',
        provider: 'Brochain'
      },
      {
        address: 'https://api-sei.stingray.plus/',
        provider: 'StingRay'
      },
      {
        address: 'https://lcd-sei.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://sei.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://sei-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    grpc: [
      {
        address: 'https://sei-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://sei-grpc.polkachu.com:11990/',
        provider: 'polkachu.com'
      },
      {
        address: 'sei-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://grpc-sei.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'sei.grpc.kjnodes.com:443',
        provider: 'kjnodes'
      },
      {
        address: 'sei-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/sei',
      txPage: 'https://ping.pub/sei/tx/${txHash}',
      accountPage: 'https://ping.pub/sei/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/sei',
      txPage: 'https://www.mintscan.io/sei/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/sei/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/sei',
      txPage: 'https://ezstaking.app/sei/txs/${txHash}',
      accountPage: 'https://ezstaking.app/sei/account/${accountAddress}'
    },
    {
      kind: 'seiscan',
      url: 'https://www.seiscan.app/pacific-1',
      txPage: 'https://www.seiscan.app/pacific-1/txs/${txHash}',
      accountPage: 'https://www.seiscan.app/pacific-1/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
    }]
};
export default info;