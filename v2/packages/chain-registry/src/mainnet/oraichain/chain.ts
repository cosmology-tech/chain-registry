import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'oraichain',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://orai.io/',
  prettyName: 'Oraichain',
  chainType: 'cosmos',
  chainId: 'Oraichain',
  bech32Prefix: 'orai',
  daemonName: 'oraid',
  nodeHome: '$WORKSPACE/.oraid',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'orai',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.003,
        averageGasPrice: 0.005,
        highGasPrice: 0.007
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'orai'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/oraichain/orai',
    recommendedVersion: 'v0.42.4',
    compatibleVersions: [
      'v0.42.0',
      'v0.42.1',
      'v0.42.2',
      'v0.42.3',
      'v0.42.4'
    ],
    sdk: {
      type: 'cosmos',
      version: 'v0.45.16'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/oraichain/oraichain-static-files/master/genesis.json'
    },
    cosmwasm: {
      version: '0.33.0',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.orai.io',
        provider: 'oraichain-team'
      },
      {
        address: 'https://rpc.orai.pfc.zone/',
        provider: 'PFC'
      },
      {
        address: 'https://rpc-orai.nodine.id/',
        provider: 'Nodine.ID'
      },
      {
        address: 'https://oraichain-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc-oraichain.mms.team',
        provider: 'MMS'
      },
      {
        address: 'https://rpc-orai.blockval.io/',
        provider: 'Blockval'
      },
      {
        address: 'https://mainnet-orai-rpc.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://rpc.orai.mortysnode.nl',
        provider: 'Morty\'s Nodes'
      },
      {
        address: 'https://orai.rpc.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://oraichain-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://orai-rpc.imdev.app',
        provider: 'imORAI'
      },
      {
        address: 'https://orai-rpc.owallet.io',
        provider: 'OWALLET'
      }
    ],
    rest: [
      {
        address: 'http://lcd.orai.io',
        provider: 'oraichain-team'
      },
      {
        address: 'https://oraichain-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://api-oraichain.mms.team',
        provider: 'MMS'
      },
      {
        address: 'https://api-orai.blockval.io',
        provider: 'Blockval'
      },
      {
        address: 'https://mainnet-orai-api.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://orai.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://oraichain-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://orai-rest.owallet.io',
        provider: 'OWALLET'
      }
    ],
    grpc: [
      {
        address: 'grpc-oraichain.mms.team:443',
        provider: 'MMS'
      },
      {
        address: 'grpc.orai.pfc.zone:443',
        provider: 'PFC'
      },
      {
        address: 'oraichain-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc-orai.blockval.io:9390',
        provider: 'Blockval'
      },
      {
        address: 'mainnet-orai.konsortech.xyz:33090',
        provider: 'KonsorTech'
      },
      {
        address: 'orai.grpc.m.stavr.tech:110',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'oraichain-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'orai-grpc.owallet.io:9999',
        provider: 'OWALLET'
      }
    ]
  },
  explorers: [
    {
      kind: 'oraiscan',
      url: 'https://scan.orai.io',
      txPage: 'https://scan.orai.io/txs/${txHash}'
    },
    {
      kind: 'Nodine Explorer',
      url: 'https://explorer.co.id/orai',
      txPage: 'https://explorer.co.id/orai/tx/${txHash}'
    },
    {
      kind: 'Blockval Explorer',
      url: 'https://explorer.blockval.io/oraichain',
      txPage: 'https://explorer.blockval.io/oraichain/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/orai',
      txPage: 'https://atomscan.com/orai/transactions/${txHash}',
      accountPage: 'https://atomscan.com/orai/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/oraichain',
      txPage: 'https://staking-explorer.com/transaction.php?chain=oraichain&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=oraichain&addr=${accountAddress}'
    },
    {
      kind: 'KonsorTech Explorer',
      url: 'https://explorer.konsortech.xyz/oraichain',
      txPage: 'https://explorer.konsortech.xyz/oraichain/transactions/${txHash}',
      accountPage: 'https://explorer.konsortech.xyz/oraichain/accounts/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥 Explorer',
      url: 'https://explorer.stavr.tech/Orai-Mainnet',
      txPage: 'https://explorer.stavr.tech/Orai-Mainnet/transactions/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Orai-Mainnet/accounts/${accountAddress}'
    },
    {
      kind: 'imORAI ORAIchain Explorer',
      url: 'https://explorer.imdev.app/oraichain',
      txPage: 'https://explorer.imdev.app/oraichain/tx/${txHash}',
      accountPage: 'https://explorer.imdev.app/oraichain/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.svg',
      theme: {
        circle: false,
        darkMode: false,
        primaryColorHex: '#000000'
      }
    }]
};
export default info;