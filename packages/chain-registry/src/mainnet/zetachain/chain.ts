import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'zetachain',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'ZetaChain',
  chain_type: 'cosmos',
  chain_id: 'zetachain_7000-1',
  bech32_prefix: 'zeta',
  daemon_name: 'zetacored',
  node_home: '$HOME/.zetacored',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'azeta',
        low_gas_price: 20000000000,
        average_gas_price: 25000000000,
        high_gas_price: 40000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'azeta'
      }]
  },
  codebase: {
    cosmos_sdk_version: 'v0.47.10'
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
      tx_page: 'https://explorer.zetachain.com/cc/tx/${txHash}'
    },
    {
      kind: 'BlockScout',
      url: 'https://zetachain.blockscout.com/',
      tx_page: 'https://zetachain.blockscout.com/tx/${txHash}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.org/zetachain',
      tx_page: 'https://explorer.nodestake.org/zetachain/tx/${txHash}'
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      url: 'https://explorer.nodeshub.online/zetachain/',
      tx_page: 'https://explorer.nodeshub.online/zetachain/tx/${txHash}',
      account_page: 'https://explorer.nodeshub.online/zetachain/accounts/${accountAddress}'
    }
  ]
};
export default info;