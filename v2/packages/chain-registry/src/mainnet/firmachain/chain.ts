import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'firmachain',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://firmachain.org/',
  prettyName: 'FirmaChain',
  chainId: 'colosseum-1',
  bech32Prefix: 'firma',
  slip44: 7777777,
  daemonName: 'firmachaind',
  nodeHome: '$HOME/.firmachain',
  keyAlgos: ['secp256k1'],
  fees: {
    feeTokens: [{
        denom: 'ufct',
        fixedMinGasPrice: 0.1
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ufct'
      }]
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://lcd-mainnet.firmachain.dev:26657',
        provider: 'FirmaChain'
      },
      {
        address: 'https://firma.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc.firmachain.chaintools.tech/',
        provider: 'ChainTools'
      },
      {
        address: 'https://firmachain-rpc.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://firmachain-rpc.ramuchi.tech',
        provider: 'ramuchi.tech'
      },
      {
        address: 'https://firmachain.rpc.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅'
      }
    ],
    rest: [
      {
        address: 'https://lcd-mainnet.firmachain.dev:1317',
        provider: 'FirmaChain'
      },
      {
        address: 'https://firma.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api.firmachain.chaintools.tech/',
        provider: 'ChainTools'
      },
      {
        address: 'https://firmachain-api.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://firmachain-api.ramuchi.tech',
        provider: 'ramuchi.tech'
      },
      {
        address: 'https://firmachain.api.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅'
      }
    ],
    grpc: [
      {
        address: 'firmachain-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'firma.grpc.m.stavr.tech:2030',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://firmachain-grpc.ramuchi.tech:1390',
        provider: 'ramuchi.tech'
      },
      {
        address: 'firmachain.grpc.nodeshub.online',
        provider: 'Nodes Hub'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/firmachain',
      txPage: 'https://ezstaking.app/firmachain/txs/${txHash}',
      accountPage: 'https://ezstaking.app/firmachain/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Firmachain-M',
      txPage: 'https://explorer.stavr.tech/Firmachain-M/txs/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Firmachain-M/account/${accountAddress}'
    },
    {
      kind: 'bigdipper',
      url: 'https://explorer.firmachain.dev',
      txPage: 'https://explorer.firmachain.dev/transactions/${txHash}'
    },
    {
      kind: 'explorer.ChainTools',
      url: 'https://explorer.chaintools.tech/firmachain',
      txPage: 'https://explorer.chaintools.tech/firmachain/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/firmachain',
      txPage: 'https://atomscan.com/firmachain/transactions/${txHash}',
      accountPage: 'https://atomscan.com/firmachain/accounts/${accountAddress}'
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      url: 'https://explorer.nodeshub.online/firmachain/',
      txPage: 'https://explorer.nodeshub.online/firmachain/tx/${txHash}',
      accountPage: 'https://explorer.nodeshub.online/firmachain/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.svg'
    }]
};
export default info;