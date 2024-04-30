import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'echelon',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Echelon',
  chainId: 'echelon_3000-3',
  bech32Prefix: 'echelon',
  nodeHome: '$HOME/.echelond',
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'aechelon',
        lowGasPrice: 10000000000,
        averageGasPrice: 25000000000,
        highGasPrice: 40000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'aechelon'
      }]
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/echelon.svg'
  },
  apis: {
    rpc: [{
        address: 'https://ech01trpc.mindheartsoul.org',
        provider: 'Mind Heart Soul'
      }, {
        address: 'https://rpc.echjoker.lol',
        provider: '⚡ Echelon Joker ⚛ 🃏'
      }],
    rest: [{
        address: 'https://ech01api.mindheartsoul.org',
        provider: 'Mind Heart Soul'
      }, {
        address: 'https://api.echjoker.lol',
        provider: '⚡ Echelon Joker ⚛ 🃏'
      }],
    grpc: [],
    evmHttpJsonrpc: [{
        address: 'https://ech01jrpc.mindheartsoul.org',
        provider: 'Mind Heart Soul'
      }, {
        address: 'https://jrpc.echjoker.lol',
        provider: '⚡ Echelon Joker ⚛ 🃏'
      }]
  },
  explorers: [
    {
      kind: 'echelon',
      url: 'https://app.ech.network/explorer',
      txPage: 'https://app.ech.network/explorer/tx/${txHash}'
    },
    {
      kind: 'blockscout',
      url: 'https://scout.ech.network',
      txPage: 'https://scout.ech.network/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/echelon',
      txPage: 'https://ping.pub/echelon/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/echelon',
      txPage: 'https://atomscan.com/echelon/transactions/${txHash}',
      accountPage: 'https://atomscan.com/echelon/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/echelon.svg'
    }]
};
export default info;