import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'agoric',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://agoric.com/',
  prettyName: 'Agoric',
  chainType: 'cosmos',
  chainId: 'agoric-3',
  bech32Prefix: 'agoric',
  daemonName: 'agd',
  nodeHome: '$HOME/.agoric',
  slip44: 564,
  alternativeSlip44s: [118],
  fees: {
    feeTokens: [{
        denom: 'ubld',
        lowGasPrice: 0.03,
        averageGasPrice: 0.05,
        highGasPrice: 0.07
      }, {
        denom: 'uist',
        lowGasPrice: 0.0034,
        averageGasPrice: 0.007,
        highGasPrice: 0.02
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ubld'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/Agoric/agoric-sdk/',
    genesis: {
      genesisUrl: 'https://main.agoric.net/genesis.json'
    },
    recommendedVersion: 'agoric-upgrade-18',
    compatibleVersions: ['agoric-upgrade-18'],
    consensus: {
      type: 'cometbft',
      version: 'v0.34.30',
      repo: 'https://github.com/agoric-labs/cometbft',
      tag: 'v0.34.30-alpha.agoric.2'
    },
    cosmwasm: {
      enabled: false
    },
    language: {
      type: 'go',
      version: '1.20.2'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/agoric-labs/cosmos-sdk',
      version: 'v0.46.16',
      tag: 'v0.46.16-alpha.agoric.2.5'
    },
    ibc: {
      type: 'go',
      version: 'v6.3.1',
      repo: 'https://github.com/agoric-labs/ibc-go',
      tag: 'v6.3.1-alpha.agoric.2',
      icsEnabled: ['ics20-1']
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/Agoric-logo-color.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/Agoric-logo-color.svg'
  },
  description: 'The Agoric platform makes it safe and seamless to build decentralized apps using your existing JavaScript knowledge.',
  apis: {
    rpc: [
      {
        address: 'https://main.rpc.agoric.net:443'
      },
      {
        address: 'https://agoric-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc.agoric.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://agoric.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://agoric-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc-agoric-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://agoric-rpc.0base.dev',
        provider: '0base.vc'
      },
      {
        address: 'https://agoric-rpc.stakeangle.com',
        provider: 'StakeAngle'
      },
      {
        address: 'https://agoric-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://rpc.agoric.stakewith.us',
        provider: 'StakeWithUs'
      },
      {
        address: 'https://rpc-agoric-ia.cosmosia.notional.ventures',
        provider: 'Notional'
      },
      {
        address: 'https://agoric-rpc.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://rpc.agoric.bronbro.io:443',
        provider: 'Bro_n_Bro'
      }
    ],
    rest: [
      {
        address: 'https://main.api.agoric.net:443'
      },
      {
        address: 'https://api.agoric.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://agoric-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://agoric.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://agoric-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://api-agoric-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://agoric-rest.0base.dev',
        provider: '0base.vc'
      },
      {
        address: 'https://agoric-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://agoric.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api.agoric.stakewith.us',
        provider: 'StakeWithUs'
      },
      {
        address: 'https://api-agoric-ia.cosmosia.notional.ventures',
        provider: 'Notional'
      },
      {
        address: 'https://agoric-api.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://lcd.agoric.bronbro.io:443',
        provider: 'Bro_n_Bro'
      }
    ],
    grpc: [
      {
        address: 'grpc.agoric.nodestake.org:443',
        provider: 'NodeStake'
      },
      {
        address: 'agoric-grpc.polkachu.com:14490',
        provider: 'Polkachu'
      },
      {
        address: 'agoric-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'agoric.grpc.kjnodes.com:12790',
        provider: 'kjnodes'
      },
      {
        address: 'grpc-agoric-01.stakeflow.io:2202',
        provider: 'Stakeflow'
      },
      {
        address: 'agoric.mellifera.network:9090',
        provider: 'MELLIFERA'
      },
      {
        address: 'agoric-grpc.w3coins.io:14490',
        provider: 'w3coins'
      },
      {
        address: 'https://grpc.agoric.stakewith.us',
        provider: 'StakeWithUs'
      },
      {
        address: 'grpc-agoric-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'agoric-grpc.stakeandrelax.net:14490',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://grpc.agoric.bronbro.io:443',
        provider: 'Bro_n_Bro'
      }
    ]
  },
  explorers: [
    {
      kind: 'explorers.guru',
      url: 'https://agoric.explorers.guru',
      txPage: 'https://agoric.explorers.guru/transaction/${txHash}',
      accountPage: 'https://agoric.explorers.guru/account/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/agoric',
      txPage: 'https://staking-explorer.com/transaction.php?chain=agoric&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=agoric&addr=${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/agoric/',
      txPage: 'https://atomscan.com/agoric/transactions/${txHash}',
      accountPage: 'https://atomscan.com/agoric/accounts/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/agoric',
      accountPage: 'https://stakeflow.io/agoric/accounts/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Agoric',
      txPage: 'https://explorer.stavr.tech/Agoric/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Agoric/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/Agoric-logo-color.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/Agoric-logo-color.svg',
      theme: {
        primaryColorHex: '#bc2c44'
      }
    }]
};
export default info;