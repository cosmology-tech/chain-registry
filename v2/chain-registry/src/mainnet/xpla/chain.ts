import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'xpla',
  status: 'live',
  website: 'https://xpla.io',
  networkType: 'mainnet',
  prettyName: 'XPLA',
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
    cosmosSdkVersion: 'xpladev/cosmos-sdk v0.45.20-xpla',
    cosmwasmVersion: 'v0.33.0'
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
        address: 'https://xpla-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
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
        address: 'https://xpla-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      }
    ],
    grpc: [],
    evmHttpJsonrpc: [{
        address: 'https://dimension-evm-rpc.xpla.dev',
        provider: 'Holdings'
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
      kind: 'ezstaking',
      url: 'https://ezstaking.app/xpla',
      txPage: 'https://ezstaking.app/xpla/txs/${txHash}',
      accountPage: 'https://ezstaking.app/xpla/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg'
    }]
};
export default info;