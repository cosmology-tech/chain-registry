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
      },
      {
        address: 'https://zeta.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://zetachain-mainnet-rpc.cosmonautstakes.com',
        provider: 'Cosmonaut Stakes'
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
      },
      {
        address: 'https://zeta.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://zetachain-mainnet-rest.cosmonautstakes.com',
        provider: 'Cosmonaut Stakes'
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
      },
      {
        address: 'zeta.grpc.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'zetachain-mainnet-grpc.cosmonautstakes.com:15190',
        provider: 'Cosmonaut Stakes'
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
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Zetachain-Mainnet',
      txPage: 'https://explorer.stavr.tech/Zetachain-Mainnet/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Zetachain-Mainnet/accounts/${accountAddress}'
    }
  ]
};
export default info;