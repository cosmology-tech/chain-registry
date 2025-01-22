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
    git_repo: 'https://github.com/zeta-chain/node',
    recommended_version: 'v20.0.0',
    compatible_versions: ['v20.0.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.37.4'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/zeta-chain/network-config/main/mainnet/genesis.json'
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
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/zetachain',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=zetachain&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=zetachain&addr=${accountAddress}'
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      url: 'https://explorer.nodeshub.online/zetachain/',
      tx_page: 'https://explorer.nodeshub.online/zetachain/tx/${txHash}',
      account_page: 'https://explorer.nodeshub.online/zetachain/accounts/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Zetachain-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Zetachain-Mainnet/tx/${txHash}',
      account_page: 'https://explorer.stavr.tech/Zetachain-Mainnet/accounts/${accountAddress}'
    }
  ]
};
export default info;