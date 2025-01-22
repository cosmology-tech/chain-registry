import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'sei',
  status: 'live',
  website: 'https://www.sei.io/',
  networkType: 'mainnet',
  prettyName: 'Sei',
  chainType: 'cosmos',
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
    gitRepo: 'https://github.com/sei-protocol/sei-chain',
    recommendedVersion: 'v5.9.0',
    compatibleVersions: ['v5.9.0'],
    consensus: {
      type: 'sei-tendermint',
      version: 'v0.3.8'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/sei-protocol/testnet/main/pacific-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/sei-protocol/sei-cosmos',
      version: 'v0.3.37'
    },
    ibc: {
      type: 'go',
      repo: 'https://github.com/sei-protocol/sei-ibc-go',
      version: 'v3.3.2'
    },
    cosmwasm: {
      version: 'v0.2.4',
      repo: 'https://github.com/sei-protocol/sei-wasmd',
      path: '$HOME/.sei/wasm',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
  },
  description: 'Sei is the fastest Layer 1 blockchain, designed to scale with the industry.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.sei-apis.com',
        provider: 'Rhino Stake'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/sei',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://sei-rpc.polkachu.com',
        provider: 'polkachu.com'
      },
      {
        address: 'https://sei-rpc.brocha.in',
        provider: 'Brochain'
      },
      {
        address: 'https://rpc-sei.stingray.plus',
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
      },
      {
        address: 'https://sei.drpc.org',
        provider: 'dRPC - All chains in one place'
      }
    ],
    rest: [
      {
        address: 'https://rest.sei-apis.com',
        provider: 'Rhino Stake'
      },
      {
        address: 'https://rest.lavenderfive.com:443/sei',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://sei-api.polkachu.com',
        provider: 'polkachu.com'
      },
      {
        address: 'https://sei-rest.brocha.in',
        provider: 'Brochain'
      },
      {
        address: 'https://api-sei.stingray.plus',
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
        address: 'https://grpc.sei-apis.com:443',
        provider: 'Rhino Stake'
      },
      {
        address: 'sei.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://sei-grpc.polkachu.com:11990',
        provider: 'polkachu.com'
      },
      {
        address: 'sei-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc-sei.whispernode.com:443',
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
    ],
    evmHttpJsonrpc: [
      {
        address: 'https://evm-rpc.sei-apis.com',
        provider: 'Rhino Stake'
      },
      {
        address: 'https://seievm-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://jsonrpc.lavenderfive.com:443/sei',
        provider: 'Lavender.Five Nodes'
      }
    ]
  },
  explorers: [
    {
      kind: 'blockscout',
      url: 'https://seitrace.com',
      txPage: 'https://seitrace.com/tx/${txHash}?chain=pacific-1',
      accountPage: 'https://seitrace.com/address/${accountAddress}?chain=pacific-1'
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
      kind: 'celatone',
      url: 'https://www.seiscan.app/pacific-1',
      txPage: 'https://www.seiscan.app/pacific-1/txs/${txHash}',
      accountPage: 'https://www.seiscan.app/pacific-1/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/sei',
      txPage: 'https://staking-explorer.com/transaction.php?chain=sei&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=sei&addr=${accountAddress}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/sei',
      txPage: 'https://mainnet.whispernode.com/sei/tx/${txHash}',
      accountPage: 'https://mainnet.whispernode.com/sei/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg',
      theme: {
        primaryColorHex: '#9c1c1c'
      }
    }]
};
export default info;