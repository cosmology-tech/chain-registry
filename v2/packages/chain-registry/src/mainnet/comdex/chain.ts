import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'comdex',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://comdex.one/',
  prettyName: 'Comdex',
  chainType: 'cosmos',
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
    gitRepo: 'https://github.com/comdex-official/comdex',
    recommendedVersion: 'v14.1.0',
    compatibleVersions: ['v14.1.0'],
    binaries: {
      "linux/amd64": 'https://github.com/comdex-official/comdex/releases/download/v14.1.0/comdex-linux-amd64.tar.gz',
      "darwin/arm64": 'https://github.com/comdex-official/comdex/releases/download/v14.1.0/comdex-darwin-arm64.tar.gz'
    },
    consensus: {
      type: 'cometbft',
      version: '0.37.5'
    },
    genesis: {
      genesisUrl: 'https://comdex-mainnet-genesis.s3.ap-southeast-1.amazonaws.com/genesis.json'
    },
    versions: [
      {
        name: 'v9.0.0',
        recommendedVersion: 'v9.0.0',
        compatibleVersions: ['v9.0.0'],
        nextVersionName: 'v10.0.0',
        cosmwasm: {
          enabled: true
        }
      },
      {
        name: 'v10.0.0',
        recommendedVersion: 'v10.0.0',
        compatibleVersions: ['v10.0.0'],
        nextVersionName: 'v11.5.0',
        cosmwasm: {
          enabled: true
        }
      },
      {
        name: 'v11.5.0',
        height: 8184000,
        proposal: 154,
        recommendedVersion: 'v11.5.2',
        compatibleVersions: ['v11.5.2'],
        nextVersionName: 'v13.3.0',
        cosmwasm: {
          enabled: true
        }
      },
      {
        name: 'v13.3.0',
        proposal: 216,
        height: 10981900,
        recommendedVersion: 'v13.4.0',
        compatibleVersions: ['v13.4.0'],
        binaries: {
          "linux/amd64": 'https://github.com/comdex-official/comdex/releases/download/v13.4.0/comdex-linux-amd64.tar.gz'
        },
        consensus: {
          type: 'cometbft',
          version: '0.37.2'
        },
        nextVersionName: 'v14.1.0',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.5'
        },
        cosmwasm: {
          version: 'v0.41.0',
          enabled: true
        }
      },
      {
        name: 'v14.1.0',
        proposal: 234,
        height: 13730000,
        recommendedVersion: 'v14.1.0',
        compatibleVersions: ['v14.1.0'],
        binaries: {
          "linux/amd64": 'https://github.com/comdex-official/comdex/releases/download/v14.1.0/comdex-linux-amd64.tar.gz',
          "darwin/arm64": 'https://github.com/comdex-official/comdex/releases/download/v14.1.0/comdex-darwin-arm64.tar.gz'
        },
        consensus: {
          type: 'cometbft',
          version: '0.37.5'
        },
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.9'
        },
        cosmwasm: {
          version: 'v0.45.0',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.4.0'
        }
      }
    ],
    sdk: {
      type: 'cosmos',
      version: 'v0.47.9'
    },
    ibc: {
      type: 'go',
      version: 'v7.4.0'
    },
    cosmwasm: {
      version: 'v0.45.0',
      enabled: true
    }
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
        address: 'https://rpc.lavenderfive.com:443/comdex',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc-comdex.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
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
      },
      {
        address: 'https://rpc-comdex.blockval.io',
        provider: 'Blockval'
      },
      {
        address: 'https://comdex-rpc.bluestake.net:443',
        provider: 'BlueStake 🚀'
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
        address: 'https://rest.lavenderfive.com:443/comdex',
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
      },
      {
        address: 'https://api-comdex.blockval.io',
        provider: 'Blockval'
      },
      {
        address: 'https://comdex-api.bluestake.net',
        provider: 'BlueStake 🚀'
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
        address: 'comdex.lavenderfive.com:443',
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
      },
      {
        address: 'https://grpc-comdex.blockval.io:443',
        provider: 'Blockval'
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
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/comdex',
      txPage: 'https://staking-explorer.com/transaction.php?chain=comdex&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=comdex&addr=${accountAddress}'
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
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/comdex',
      txPage: 'https://mainnet.whispernode.com/comdex/tx/${txHash}',
      accountPage: 'https://mainnet.whispernode.com/comdex/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg',
      theme: {
        primaryColorHex: '#fc4454'
      }
    }]
};
export default info;