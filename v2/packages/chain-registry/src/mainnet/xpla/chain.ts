import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'xpla',
  status: 'live',
  website: 'https://xpla.io',
  networkType: 'mainnet',
  prettyName: 'XPLA',
  chainType: 'cosmos',
  chainId: 'dimension_37-1',
  bech32Prefix: 'xpla',
  daemonName: 'xplad',
  nodeHome: '$HOME/.xpla',
  keyAlgos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'axpla',
        fixedMinGasPrice: 850000000000,
        lowGasPrice: 850000000000,
        averageGasPrice: 1147500000000,
        highGasPrice: 1487500000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'axpla'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/xpladev/xpla',
    recommendedVersion: 'v1.6.0',
    compatibleVersions: ['v1.6.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.37.5'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/xpladev/mainnet/main/dimension_37-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/xpladev/cosmos-sdk',
      version: 'v0.47.13',
      tag: 'v0.47.13-xpla'
    },
    ibc: {
      type: 'go',
      version: 'v7.7.0'
    },
    cosmwasm: {
      version: 'v0.46.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://dimension-rpc.xpla.dev',
        provider: 'Holdings'
      },
      {
        address: 'https://xpla.rpc.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/xpla',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://xpla-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://xpla.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      }
    ],
    rest: [
      {
        address: 'https://dimension-lcd.xpla.io',
        provider: 'ZenaAD'
      },
      {
        address: 'https://dimension-lcd.xpla.dev',
        provider: 'Holdings'
      },
      {
        address: 'https://xpla.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rest.lavenderfive.com:443/xpla',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://xpla-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://xpla.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      }
    ],
    grpc: [{
        address: 'xpla-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }, {
        address: 'xpla.grpc.m.stavr.tech:112',
        provider: '🔥STAVR🔥'
      }],
    evmHttpJsonrpc: [{
        address: 'https://dimension-evm-rpc.xpla.dev',
        provider: 'Holdings'
      }, {
        address: 'https://xpla-evm-rpc.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }]
  },
  explorers: [
    {
      kind: 'explorer.xpla',
      url: 'https://explorer.xpla.io',
      txPage: 'https://explorer.xpla.io/mainnet/tx/${txHash}'
    },
    {
      kind: 'finder',
      url: 'https://finder.xpla.io',
      txPage: 'https://finder.xpla.io/mainnet/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Xpla-Mainnet',
      txPage: 'https://explorer.stavr.tech/Xpla-Mainnet/tx/${txHash}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/xpla',
      txPage: 'https://www.mintscan.io/xpla/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/xpla/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/xpla',
      txPage: 'https://staking-explorer.com/transaction.php?chain=xpla&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=xpla&addr=${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/xpla',
      txPage: 'https://ezstaking.app/xpla/txs/${txHash}',
      accountPage: 'https://ezstaking.app/xpla/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Xpla-Mainnet',
      txPage: 'https://explorer.stavr.tech/Xpla-Mainnet/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Xpla-Mainnet/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg',
      theme: {
        primaryColorHex: '#04b4fc'
      }
    }]
};
export default info;