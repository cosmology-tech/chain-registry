import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'routerchain',
  chainType: 'cosmos',
  chainId: 'router_9600-1',
  prettyName: 'Router Protocol',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.routerprotocol.com/',
  bech32Prefix: 'router',
  nodeHome: '$HOME/.routerd',
  daemonName: 'routerd',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'route',
        fixedMinGasPrice: 7,
        lowGasPrice: 7,
        averageGasPrice: 7,
        highGasPrice: 10
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'route'
      }]
  },
  codebase: {
    recommendedVersion: 'v2.2.3',
    compatibleVersions: ['v2.2.3'],
    consensus: {
      type: 'cometbft',
      version: 'v0.37.5'
    },
    binaries: {
      "linux/amd64": 'https://raw.githubusercontent.com/router-protocol/router-chain-binary-release/v2.2.3/linux/routerd.tar.gz',
      "darwin/amd64": 'https://raw.githubusercontent.com/router-protocol/router-chain-binary-release/v2.2.3/debian/routerd.tar.gz'
    },
    genesis: {
      genesisUrl: 'https://sentry.tm.rpc.routerprotocol.com/genesis'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.47.10'
    },
    ibc: {
      type: 'go',
      version: 'v7.4.0'
    },
    cosmwasm: {
      version: 'v0.45.0',
      path: '$HOME/.routerd/wasm',
      enabled: true
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://sentry.tm.rpc.routerprotocol.com/',
        provider: 'Router'
      },
      {
        address: 'https://router-rpc.genznodes.dev/',
        provider: 'genznodes'
      },
      {
        address: 'https://router.rpc.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️'
      },
      {
        address: 'https://router-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ],
    rest: [
      {
        address: 'https://sentry.lcd.routerprotocol.com/',
        provider: 'Router'
      },
      {
        address: 'https://router-api.genznodes.dev/',
        provider: 'genznodes'
      },
      {
        address: 'https://router.api.nodeshub.online',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️'
      },
      {
        address: 'https://router-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ],
    grpc: [
      {
        address: 'sentry.grpc.routerprotocol.com:9090',
        provider: 'Router'
      },
      {
        address: 'router-grpc.genznodes.dev:3090',
        provider: 'genznodes'
      },
      {
        address: 'router.grpc.nodeshub.online',
        provider: 'Nodes Hub'
      },
      {
        address: 'router-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ],
    evmHttpJsonrpc: [{
        address: 'https://sentry.evm.rpc.routerprotocol.com',
        provider: 'Router'
      }, {
        address: 'https://router-rpc-evm.genznodes.dev',
        provider: 'genznodes'
      }]
  },
  explorers: [
    {
      kind: 'Routerscan',
      url: 'https://routerscan.io/',
      txPage: 'https://routerscan.io/transactions/${txHash}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.org/router',
      txPage: 'https://explorer.nodestake.org/router/tx/${txHash}'
    },
    {
      kind: 'Router Explorer',
      url: 'https://router.explorers.guru/',
      txPage: 'https://router.explorers.guru/transaction/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/routerchain',
      txPage: 'https://staking-explorer.com/transaction.php?chain=routerchain&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=routerchain&addr=${accountAddress}'
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️',
      url: 'https://explorer.nodeshub.online/router/',
      txPage: 'https://explorer.nodeshub.online/router/tx/${txHash}',
      accountPage: 'https://explorer.nodeshub.online/router/accounts/${accountAddress}'
    }
  ],
  images: [{
      imageSync: {
        chainName: 'routerchain',
        baseDenom: 'route'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/routerchain/images/router.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/routerchain/images/router.svg',
      theme: {
        primaryColorHex: '#cb0766'
      }
    }]
};
export default info;