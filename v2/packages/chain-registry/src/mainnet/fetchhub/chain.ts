import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'fetchhub',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Fetch.ai',
  chainType: 'cosmos',
  chainId: 'fetchhub-4',
  bech32Prefix: 'fetch',
  daemonName: 'fetchd',
  nodeHome: '$HOME/.fetchd',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'afet',
        lowGasPrice: 0.025,
        averageGasPrice: 0.025,
        highGasPrice: 0.035
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'afet'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/fetchai/fetchd',
    recommendedVersion: 'v0.10.5',
    compatibleVersions: ['v0.10.5'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/fetchai/genesis-fetchhub/fetchhub-4/fetchhub-4/data/genesis_migrated_5300200.json'
    }
  },
  logoURIs: {
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
      txPage: 'https://www.mintscan.io/fetchai/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/fetchai/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/fetchhub',
      txPage: 'https://ezstaking.app/fetchhub/txs/${txHash}',
      accountPage: 'https://ezstaking.app/fetchhub/account/${accountAddress}'
    },
    {
      kind: 'bigdipper',
      url: 'https://explore-fetchhub.fetch.ai',
      txPage: 'https://explore-fetchhub.fetch.ai/transactions/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/fetchhub',
      txPage: 'https://ping.pub/fetchhub/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/fetchai',
      txPage: 'https://atomscan.com/fetchai/transactions/${txHash}',
      accountPage: 'https://atomscan.com/fetchai/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/fetchhub',
      txPage: 'https://staking-explorer.com/transaction.php?chain=fetchhub&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=fetchhub&addr=${accountAddress}'
    },
    {
      kind: 'bigdipper',
      url: 'https://fetch-explorer.teasel.org',
      txPage: 'https://fetch-explorer.teasel.org/transactions/${txHash}'
    },
    {
      kind: 'azoyalabs',
      url: 'https://fetchstation.azoyalabs.com/mainnet',
      txPage: 'https://fetchstation.azoyalabs.com/mainnet/explorer/transactions/${txHash}',
      accountPage: 'https://fetchstation.azoyalabs.com/mainnet/explorer/address/${accountAddress}'
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      url: 'https://explorer.nodeshub.online/fetchhub/',
      txPage: 'https://explorer.nodeshub.online/fetchhub/tx/${txHash}',
      accountPage: 'https://explorer.nodeshub.online/fetchhub/accounts/${accountAddress}'
    },
    {
      kind: 'Blockchain Explorer by AVIAONE 🟢',
      url: 'https://mainnet.explorer.aviaone.com/fetchhub',
      txPage: 'https://mainnet.explorer.aviaone.com/fetchhub/tx/${txHash}',
      accountPage: 'https://mainnet.explorer.aviaone.com/fetchhub/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg',
      theme: {
        primaryColorHex: '#1c2444'
      }
    }]
};
export default info;