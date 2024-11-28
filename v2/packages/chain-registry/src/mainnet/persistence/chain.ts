import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'persistence',
  chainType: 'cosmos',
  chainId: 'core-1',
  prettyName: 'Persistence',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://persistence.one/',
  bech32Prefix: 'persistence',
  daemonName: 'persistenceCore',
  nodeHome: '$HOME/.persistenceCore',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  alternativeSlip44s: [750],
  fees: {
    feeTokens: [{
        denom: 'uxprt',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uxprt'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/persistenceOne/persistenceCore',
    recommendedVersion: 'v11.14.0',
    compatibleVersions: ['v11.14.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.37.4'
    },
    binaries: {
      "linux/amd64": 'https://github.com/persistenceOne/persistenceCore/releases/download/v11.14.0/persistenceCore-v11.14.0-linux-amd64.tar.gz'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/persistenceOne/genesisTransactions/master/core-1/final_genesis.json'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/persistenceOne/cosmos-sdk',
      version: 'v0.47.10',
      tag: 'v0.47.10-lsm-rc0'
    },
    ibc: {
      type: 'go',
      version: 'v7.4.0',
      icsEnabled: ['ics20-1', 'ics27-1']
    },
    cosmwasm: {
      version: 'v0.45.0',
      path: '$HOME/.persistenceCore/wasm',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
  },
  description: 'Persistence is an app chain for Liquid Staking powering an ecosystem of DeFi applications focused on unlocking the liquidity of staked assets.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.core.persistence.one',
        provider: 'Persistence'
      },
      {
        address: 'https://rpc-persistent-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://persistence.rpc.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://persistence-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://persistence-rpc.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://rpc-persistence.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://rpc-persistence.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://persistence-mainnet-rpc.cosmonautstakes.com',
        provider: 'Cosmonaut Stakes'
      },
      {
        address: 'https://persistence-rpc.quantnode.tech',
        provider: 'QuantNode'
      },
      {
        address: 'https://persistence-rpc.zenscape.one',
        provider: 'Zenscape'
      },
      {
        address: 'https://persistence-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://persistence-rpc.stakeandrelax.net',
        provider: 'Stake&Relax Validator 🦥'
      },
      {
        address: 'https://rpc.persistence.posthuman.digital:443',
        provider: 'POSTHUMAN∞DVS'
      },
      {
        address: 'https://rpc-persistence-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://persistence-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://persistence-rpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://persistence-rpc.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://rpc.persistence.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/persistence/rpc',
        provider: 'Stakewolle'
      },
      {
        address: 'https://xprt-rpc.antrixy.org/',
        provider: 'Antrix Validators'
      },
      {
        address: 'https://persistence-rpc.stake-town.com',
        provider: 'StakeTown'
      }
    ],
    rest: [
      {
        address: 'https://rest.core.persistence.one',
        provider: 'Persistence'
      },
      {
        address: 'https://api-persistent-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://persistence.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://persistence-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://api-persistence.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://persistence-api.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://rest-persistence.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://persistence-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://persistence-mainnet-rest.cosmonautstakes.com',
        provider: 'Cosmonaut Stakes'
      },
      {
        address: 'https://persistence-lcd.quantnode.tech',
        provider: 'QuantNode'
      },
      {
        address: 'https://persistence-rest.zenscape.one',
        provider: 'Zenscape'
      },
      {
        address: 'https://persistence-api.stakeandrelax.net',
        provider: 'Stake&Relax Validator 🦥'
      },
      {
        address: 'https://rest.persistence.posthuman.digital:443',
        provider: 'POSTHUMAN∞DVS'
      },
      {
        address: 'https://api-persistence-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://persistence-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://persistence-api.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://persistence-api.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://api.persistence.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/persistence/rest',
        provider: 'Stakewolle'
      },
      {
        address: 'https://xprt-rest.antrixy.org/',
        provider: 'Antrix Validators'
      },
      {
        address: 'https://persistence-api.stake-town.com',
        provider: 'StakeTown'
      }
    ],
    grpc: [
      {
        address: 'grpc.core.persistence.one:443',
        provider: 'Persistence'
      },
      {
        address: 'grpc-persistent-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'persistence.grpc.m.stavr.tech:410',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'persistence-grpc.polkachu.com:15490',
        provider: 'Polkachu'
      },
      {
        address: 'persistence-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc.persistence.posthuman.digital:80',
        provider: 'POSTHUMAN∞DVS'
      },
      {
        address: 'grpc-persistence.cosmos-spaces.cloud:1180',
        provider: 'Cosmos Spaces'
      },
      {
        address: '141.95.33.97:9090',
        provider: 'Stakewolle.com | Auto-compound'
      },
      {
        address: 'grpc-persistence-01.stakeflow.io:49090',
        provider: 'Stakeflow'
      },
      {
        address: 'persistence-grpc.w3coins.io:15490',
        provider: 'w3coins'
      },
      {
        address: 'persistence-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'persistence-grpc.stakeandrelax.net:15490',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'grpc.persistence.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://xprt-grpc.antrixy.org/',
        provider: 'Antrix Validators'
      },
      {
        address: 'persistence-grpc.stake-town.com:443',
        provider: 'StakeTown'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/persistence',
      txPage: 'https://www.mintscan.io/persistence/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/persistence/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/persistence',
      txPage: 'https://ezstaking.app/persistence/txs/${txHash}',
      accountPage: 'https://ezstaking.app/persistence/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/persistence',
      txPage: 'https://ping.pub/persistence/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Persistence-Mainnet',
      txPage: 'https://explorer.stavr.tech/Persistence-Mainnet/tx/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/persistence',
      txPage: 'https://staking-explorer.com/transaction.php?chain=persistence&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=persistence&addr=${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/persistence',
      txPage: 'https://atomscan.com/persistence/transactions/${txHash}',
      accountPage: 'https://atomscan.com/persistence/accounts/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/persistence',
      accountPage: 'https://stakeflow.io/persistence/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg',
      theme: {
        primaryColorHex: '#242424'
      }
    }]
};
export default info;