import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'stargaze',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://stargaze.zone/',
  prettyName: 'Stargaze',
  chainType: 'cosmos',
  chainId: 'stargaze-1',
  bech32Prefix: 'stars',
  daemonName: 'starsd',
  nodeHome: '$HOME/.starsd',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ustars',
        fixedMinGasPrice: 1,
        lowGasPrice: 1,
        averageGasPrice: 1.1,
        highGasPrice: 1.2
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ustars'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/public-awesome/stargaze',
    recommendedVersion: 'v14.0.0',
    compatibleVersions: ['v14.0.0'],
    cosmosSdkVersion: 'v0.47.12',
    consensus: {
      type: 'cometbft',
      version: 'v0.37.6'
    },
    cosmwasmVersion: 'v0.45.0',
    cosmwasmEnabled: true,
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/public-awesome/mainnet/main/stargaze-1/genesis.tar.gz'
    },
    versions: [
      {
        name: 'v9',
        recommendedVersion: 'v9.1.0',
        compatibleVersions: ['v9.1.0', 'v9.0.0'],
        nextVersionName: 'v10'
      },
      {
        name: 'v10',
        recommendedVersion: 'v10.0.1',
        compatibleVersions: ['v10.0.1', 'v10.0.0'],
        nextVersionName: 'v11'
      },
      {
        name: 'v11',
        recommendedVersion: 'v11.0.0',
        compatibleVersions: ['v11.0.0'],
        nextVersionName: 'v12'
      },
      {
        name: 'v12',
        recommendedVersion: 'v12.0.0',
        compatibleVersions: ['v12.0.0'],
        nextVersionName: 'v13'
      },
      {
        name: 'v13',
        proposal: 260,
        height: 12801683,
        recommendedVersion: 'v13.0.0',
        compatibleVersions: ['v13.0.0'],
        cosmosSdkVersion: 'v0.47.10',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.4'
        },
        cosmwasmVersion: 'v0.45.0',
        cosmwasmEnabled: true,
        nextVersionName: 'v14',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.10'
        },
        cosmwasm: {
          version: 'v0.45.0',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.3.2'
        }
      },
      {
        name: 'v14',
        proposal: 279,
        height: 14252867,
        recommendedVersion: 'v14.0.0',
        compatibleVersions: ['v14.0.0'],
        cosmosSdkVersion: 'v0.47.12',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.6'
        },
        cosmwasmVersion: 'v0.45.0',
        cosmwasmEnabled: true,
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.12'
        },
        cosmwasm: {
          version: 'v0.45.0',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.6.0'
        }
      }
    ],
    sdk: {
      type: 'cosmos',
      version: 'v0.47.12'
    },
    ibc: {
      type: 'go',
      version: 'v7.6.0'
    },
    cosmwasm: {
      version: 'v0.45.0',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
  },
  description: 'The premier community-focused blockchain for NFTs. Stargaze empowers creators, developers, collectors, and traders to participate on the platform. The Stargaze chain consists of various NFT-related apps such as a Launchpad, and a Marketplace with offers and auctions.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.stargaze-apis.com/',
        provider: 'Stargaze Foundation'
      },
      {
        address: 'https://rpc-stargaze.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://rpc-stargaze.ezstaking.dev',
        provider: 'EZStaking.io'
      },
      {
        address: 'https://stargaze-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc-stargaze-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://stargaze.c29r3.xyz:443/rpc/',
        provider: 'c29r3'
      },
      {
        address: 'https://rpc-stargaze.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://stargaze-rpc.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://rpc-stargaze.d-stake.xyz',
        provider: 'D-stake'
      },
      {
        address: 'https://rpc.stargaze.silentvalidator.com/',
        provider: 'silent'
      },
      {
        address: 'https://stargaze-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://stargaze-rpc.ramuchi.tech',
        provider: 'ramuchi.tech'
      },
      {
        address: 'https://stargaze-rpc.staketab.org:443',
        provider: 'Staketab'
      },
      {
        address: 'https://stargaze-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://stargaze-rpc.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://stargaze-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://stargaze-rpc.reece.sh:443',
        provider: 'Reecepbcups'
      },
      {
        address: 'https://rpc.stargaze.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://stargaze-rpc.kleomedes.network',
        provider: 'Kleomedes'
      }
    ],
    rest: [
      {
        address: 'https://rest.stargaze-apis.com/',
        provider: 'Stargaze Foundation'
      },
      {
        address: 'https://api-stargaze.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://api-stargaze.ezstaking.dev',
        provider: 'EZStaking.io'
      },
      {
        address: 'https://api-stargaze-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://stargaze.c29r3.xyz:443/api/',
        provider: 'c29r3'
      },
      {
        address: 'https://stargaze-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://stargaze-api.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://api-stargaze.d-stake.xyz',
        provider: 'D-stake'
      },
      {
        address: 'https://api-stargaze.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://api.stargaze.silentvalidator.com/',
        provider: 'silent'
      },
      {
        address: 'https://stargaze-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://stargaze-api.ramuchi.tech',
        provider: 'ramuchi.tech'
      },
      {
        address: 'https://stargaze-rest.staketab.org',
        provider: 'Staketab'
      },
      {
        address: 'https://stargaze-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://stargaze-rest.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://stargaze-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://stargaze-api.reece.sh:443',
        provider: 'Reecepbcups'
      },
      {
        address: 'https://lcd.stargaze.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://stargaze-api.kleomedes.network',
        provider: 'Kleomedes'
      }
    ],
    grpc: [
      {
        address: 'grpc-stargaze-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'stargaze-grpc.polkachu.com:13790',
        provider: 'Polkachu'
      },
      {
        address: 'stargaze-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc-stargaze.cosmos-spaces.cloud:1150',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://stargaze-grpc.ramuchi.tech:9090',
        provider: 'ramuchi.tech'
      },
      {
        address: 'services.staketab.com:9092',
        provider: 'Staketab'
      },
      {
        address: 'stargaze-grpc.w3coins.io:13790',
        provider: 'w3coins'
      },
      {
        address: 'stargaze-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'stargaze-grpc.stakerhouse.com:443',
        provider: 'StakerHouse'
      },
      {
        address: 'https://grpc.stargaze.bronbro.io:443',
        provider: 'Bro_n_Bro'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/stargaze',
      txPage: 'https://ezstaking.app/stargaze/txs/${txHash}',
      accountPage: 'https://ezstaking.app/stargaze/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/stargaze/',
      txPage: 'https://www.mintscan.io/stargaze/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/stargaze/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/stargaze',
      txPage: 'https://ping.pub/stargaze/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/stargaze',
      txPage: 'https://atomscan.com/stargaze/transactions/${txHash}',
      accountPage: 'https://atomscan.com/stargaze/accounts/${accountAddress}'
    },
    {
      kind: 'Starscan',
      url: 'https://starscan.net/',
      txPage: 'https://starscan.net/stargaze-1/tx/${txHash}',
      accountPage: 'https://starscan.net/stargaze-1/address/${accountAddress}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/stargaze',
      txPage: 'https://mainnet.whispernode.com/stargaze/tx/${txHash}',
      accountPage: 'https://mainnet.whispernode.com/stargaze/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg',
      theme: {
        primaryColorHex: '#db2777'
      }
    }]
};
export default info;