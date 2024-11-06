import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'zetachain',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'ZetaChain',
  chainType: 'cosmos',
  chainId: 'zetachain_7000-1',
  bech32Prefix: 'zeta',
  daemonName: 'zetacored',
  nodeHome: '$HOME/.zetacored',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'azeta',
        lowGasPrice: 20000000000,
        averageGasPrice: 25000000000,
        highGasPrice: 40000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'azeta'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/zeta-chain/node',
    recommendedVersion: 'v20.0.0',
    compatibleVersions: ['v20.0.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.37.4'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/zeta-chain/network-config/main/mainnet/genesis.json'
    },
    versions: [
      {
        name: 'v11',
        recommendedVersion: 'v11.0.0',
        compatibleVersions: ['v11.0.0'],
        consensus: {
          type: 'cometbft',
          version: 'v0.34.28'
        },
        nextVersionName: 'v12',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.13'
        },
        ibc: {
          type: 'go',
          version: 'v6.1.0'
        }
      },
      {
        name: 'v12',
        recommendedVersion: 'v12.0.0',
        compatibleVersions: ['v12.0.0'],
        consensus: {
          type: 'cometbft',
          version: 'v0.34.28'
        },
        nextVersionName: 'v12.1.0',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.13'
        },
        ibc: {
          type: 'go',
          version: 'v6.1.0'
        }
      },
      {
        name: 'v12.1.0',
        recommendedVersion: 'v12.1.0',
        compatibleVersions: ['v12.1.0'],
        consensus: {
          type: 'cometbft',
          version: 'v0.34.28'
        },
        nextVersionName: 'v12.2.0',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.13'
        },
        ibc: {
          type: 'go',
          version: 'v6.1.0'
        }
      },
      {
        name: 'v12.2.0',
        recommendedVersion: 'v12.2.5',
        compatibleVersions: ['v12.2.5'],
        consensus: {
          type: 'cometbft',
          version: 'v0.34.28'
        },
        nextVersionName: 'v14.0.0',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.13'
        },
        ibc: {
          type: 'go',
          version: 'v6.1.0'
        }
      },
      {
        name: 'v14.0.1',
        recommendedVersion: 'v14.0.1',
        compatibleVersions: ['v14.0.1'],
        proposal: 21,
        height: 2074730,
        consensus: {
          type: 'cometbft',
          version: 'v0.34.28'
        },
        nextVersionName: 'v17',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.13'
        },
        ibc: {
          type: 'go',
          version: 'v6.1.0'
        }
      },
      {
        name: 'v17',
        proposal: 23,
        height: 3388200,
        recommendedVersion: 'v17.0.0',
        compatibleVersions: ['v17.0.0'],
        consensus: {
          type: 'cometbft',
          version: 'v0.34.28'
        },
        nextVersionName: 'v18',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.13'
        },
        ibc: {
          type: 'go',
          version: 'v6.1.0'
        }
      },
      {
        name: 'v18',
        proposal: 24,
        height: 4071400,
        recommendedVersion: 'v18.0.0',
        compatibleVersions: ['v18.0.0'],
        consensus: {
          type: 'cometbft',
          version: 'v0.34.28'
        },
        nextVersionName: 'v19',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.13'
        },
        ibc: {
          type: 'go',
          version: 'v6.1.0'
        }
      },
      {
        name: 'v19',
        proposal: 33,
        height: 4696150,
        recommendedVersion: 'v19.1.7',
        compatibleVersions: ['v19.1.1', 'v19.1.7'],
        consensus: {
          type: 'cometbft',
          version: 'v0.37.4'
        },
        nextVersionName: 'v20',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.10'
        },
        ibc: {
          type: 'go',
          version: 'v7.4.0'
        }
      },
      {
        name: '20',
        proposal: 37,
        height: 5089400,
        recommendedVersion: 'v20.0.0',
        compatibleVersions: ['v20.0.0'],
        consensus: {
          type: 'cometbft',
          version: 'v0.37.4'
        },
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.10'
        },
        ibc: {
          type: 'go',
          version: 'v7.4.0'
        }
      }
    ],
    sdk: {
      type: 'cosmos',
      version: 'v0.47.10'
    },
    ibc: {
      type: 'go',
      version: 'v7.4.0'
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://zetachain.blockpi.network/rpc/v1/public',
        provider: 'BlockPI'
      },
      {
        address: 'https://zetachain-mainnet-archive.allthatnode.com:26657',
        provider: 'All That Node'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/zetachain',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc.zetachain.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://zetachain-rpc.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://zetachain.rpc.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅'
      },
      {
        address: 'https://zeta-chain.drpc.org',
        provider: 'dRPC'
      }
    ],
    rest: [
      {
        address: 'https://zetachain.blockpi.network/lcd/v1/public',
        provider: 'BlockPI'
      },
      {
        address: 'https://zetachain-mainnet-archive.allthatnode.com:1317',
        provider: 'All That Node'
      },
      {
        address: 'https://rest.lavenderfive.com:443/zetachain',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://api.zetachain.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://zetachain-api.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://zetachain.api.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅'
      }
    ],
    grpc: [
      {
        address: 'zetachain.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://grpc.zetachain.nodestake.org:443',
        provider: 'NodeStake'
      },
      {
        address: 'zetachain-grpc.noders.services:28090',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://zetachain.grpc.nodeshub.online',
        provider: 'Nodes Hub'
      }
    ]
  },
  explorers: [
    {
      kind: 'ZetaScan',
      url: 'https://explorer.zetachain.com/',
      txPage: 'https://explorer.zetachain.com/cc/tx/${txHash}'
    },
    {
      kind: 'BlockScout',
      url: 'https://zetachain.blockscout.com/',
      txPage: 'https://zetachain.blockscout.com/tx/${txHash}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.org/zetachain',
      txPage: 'https://explorer.nodestake.org/zetachain/tx/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/zetachain',
      txPage: 'https://staking-explorer.com/transaction.php?chain=zetachain&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=zetachain&addr=${accountAddress}'
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      url: 'https://explorer.nodeshub.online/zetachain/',
      txPage: 'https://explorer.nodeshub.online/zetachain/tx/${txHash}',
      accountPage: 'https://explorer.nodeshub.online/zetachain/accounts/${accountAddress}'
    }
  ]
};
export default info;