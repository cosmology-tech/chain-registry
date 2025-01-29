import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'fetchhub',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Fetch.ai',
  chain_type: 'cosmos',
  chain_id: 'fetchhub-4',
  bech32_prefix: 'fetch',
  daemon_name: 'fetchd',
  node_home: '$HOME/.fetchd',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'afet',
        low_gas_price: 0.025,
        average_gas_price: 0.025,
        high_gas_price: 0.035
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'afet'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/fetchai/fetchd',
    recommended_version: 'v0.10.5',
    compatible_versions: ['v0.10.5'],
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/fetchai/genesis-fetchhub/fetchhub-4/fetchhub-4/data/genesis_migrated_5300200.json'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-fetchhub.fetch.ai:443',
        provider: 'fetch.ai'
      },
      {
        address: 'https://rpc-fetchhub-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://fetch-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://fetchai-rpc.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://fetch-rpc.antrixy.org',
        provider: 'Antrix'
      },
      {
        address: 'https://rpc-fetch.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://fetchhub-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://fetch-rpc.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://fetch-rpc.cosmosrescue.com',
        provider: 'cosmosrescue'
      },
      {
        address: 'https://fetch-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://fetch-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://fetch-rpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/fetchhub/rpc',
        provider: 'Stakewolle'
      },
      {
        address: 'https://fetch.rpc.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅'
      },
      {
        address: 'https://rpc.fetchhub-4.fetch.aviaone.com',
        provider: 'AVIAONE 🟢'
      },
      {
        address: 'https://fetchai-rpc.bluestake.net:443',
        provider: 'BlueStake 🚀'
      },
      {
        address: 'https://fetch-rpc.panthea.eu:443',
        provider: 'Panthea EU'
      }
    ],
    rest: [
      {
        address: 'https://rest-fetchhub.fetch.ai',
        provider: 'fetch.ai'
      },
      {
        address: 'https://api-fetchhub-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://fetch-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://fetchai-api.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://fetch-rest.antrixy.org',
        provider: 'Antrix'
      },
      {
        address: 'https://fetchhub-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rest-fetch.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://fetch-api.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://fetch-api.cosmosrescue.com',
        provider: 'cosmosrescue'
      },
      {
        address: 'https://fetch-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://fetch-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://fetch-api.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/fetchhub/rest',
        provider: 'Stakewolle'
      },
      {
        address: 'https://fetch.api.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅'
      },
      {
        address: 'https://api.fetchhub-4.fetch.aviaone.com/',
        provider: 'AVIAONE 🟢'
      },
      {
        address: 'https://fetchai-api.bluestake.net',
        provider: 'BlueStake 🚀'
      },
      {
        address: 'https://fetch-api.panthea.eu:443',
        provider: 'Panthea EU'
      }
    ],
    grpc: [
      {
        address: 'grpc-fetchhub.fetch.ai:443',
        provider: 'fetch.ai'
      },
      {
        address: 'grpc-fetchhub-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'fetch-grpc.polkachu.com:15290',
        provider: 'Polkachu'
      },
      {
        address: 'fetchhub-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'fetch-grpc.teasel.org:443',
        provider: '𝗧𝗲𝗮𝘀𝗲𝗹'
      },
      {
        address: 'fetch-grpc.antrixy.org:443',
        provider: 'Antrix'
      },
      {
        address: 'fetch-grpc.cosmosrescue.com:9090',
        provider: 'cosmosrescue'
      },
      {
        address: 'fetch-grpc.w3coins.io:15290',
        provider: 'w3coins'
      },
      {
        address: 'fetch-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'fetch.grpc.nodeshub.online',
        provider: 'Nodes Hub'
      },
      {
        address: 'grpc.fetchhub-4.fetch.aviaone.com:9094',
        provider: 'AVIAONE 🟢'
      },
      {
        address: 'fetch-grpc.panthea.eu:16710',
        provider: 'Panthea EU'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/fetchai',
      tx_page: 'https://www.mintscan.io/fetchai/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/fetchai/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/fetchhub',
      tx_page: 'https://ezstaking.app/fetchhub/txs/${txHash}',
      account_page: 'https://ezstaking.app/fetchhub/account/${accountAddress}'
    },
    {
      kind: 'bigdipper',
      url: 'https://explore-fetchhub.fetch.ai',
      tx_page: 'https://explore-fetchhub.fetch.ai/transactions/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/fetchhub',
      tx_page: 'https://ping.pub/fetchhub/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/fetchai',
      tx_page: 'https://atomscan.com/fetchai/transactions/${txHash}',
      account_page: 'https://atomscan.com/fetchai/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/fetchhub',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=fetchhub&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=fetchhub&addr=${accountAddress}'
    },
    {
      kind: 'bigdipper',
      url: 'https://fetch-explorer.teasel.org',
      tx_page: 'https://fetch-explorer.teasel.org/transactions/${txHash}'
    },
    {
      kind: 'azoyalabs',
      url: 'https://fetchstation.azoyalabs.com/mainnet',
      tx_page: 'https://fetchstation.azoyalabs.com/mainnet/explorer/transactions/${txHash}',
      account_page: 'https://fetchstation.azoyalabs.com/mainnet/explorer/address/${accountAddress}'
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      url: 'https://explorer.nodeshub.online/fetchhub/',
      tx_page: 'https://explorer.nodeshub.online/fetchhub/tx/${txHash}',
      account_page: 'https://explorer.nodeshub.online/fetchhub/accounts/${accountAddress}'
    },
    {
      kind: 'Blockchain Explorer by AVIAONE 🟢',
      url: 'https://mainnet.explorer.aviaone.com/fetchhub',
      tx_page: 'https://mainnet.explorer.aviaone.com/fetchhub/tx/${txHash}',
      account_page: 'https://mainnet.explorer.aviaone.com/fetchhub/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg',
      theme: {
        primary_color_hex: '#1c2444'
      }
    }]
};
export default info;