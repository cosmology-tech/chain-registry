import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'zetachain',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'ZetaChain',
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
    cosmosSdkVersion: 'v0.46.13'
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
        address: 'https://zetachain-rpc.lavenderfive.com:443',
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
        address: 'https://zetachain-api.lavenderfive.com:443',
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
        address: 'https://zetachain-grpc.lavenderfive.com:443',
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
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      url: 'https://explorer.nodeshub.online/zetachain/',
      txPage: 'https://explorer.nodeshub.online/zetachain/tx/${txHash}',
      accountPage: 'https://explorer.nodeshub.online/zetachain/accounts/${accountAddress}'
    }
  ]
};
export default info;