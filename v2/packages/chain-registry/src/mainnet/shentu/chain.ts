import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'shentu',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.shentu.technology/',
  prettyName: 'Shentu',
  chainId: 'shentu-2.2',
  bech32Prefix: 'shentu',
  daemonName: 'shentud',
  nodeHome: '$HOME/.shentud',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uctk',
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uctk'
      }]
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://shenturpc.noopsbycertik.com/',
        provider: 'Shentu'
      },
      {
        address: 'https://shentu-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://shentu.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://shentu-rpc.ramuchi.tech',
        provider: 'ramuchi.tech'
      },
      {
        address: 'https://rpc-shentu-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://shentu-rpc.tienthuattoan.ventures',
        provider: 'TienThuatToan'
      },
      {
        address: 'https://shentu-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://shentu-rpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://shentu-rpc.panthea.eu',
        provider: 'Panthea EU'
      },
      {
        address: 'https://shentu-rpc.kleomedes.network',
        provider: 'Kleomedes'
      }
    ],
    rest: [
      {
        address: 'https://rest.noopsbycertik.com/',
        provider: 'Shentu'
      },
      {
        address: 'https://shentu-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://shentu.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://shentu-api.ramuchi.tech',
        provider: 'ramuchi.tech'
      },
      {
        address: 'https://api-shentu-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://shentu-api.tienthuattoan.ventures',
        provider: 'TienThuatToan'
      },
      {
        address: 'https://shentu-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://shentu-api.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://shentu-api.panthea.eu',
        provider: 'Panthea EU'
      },
      {
        address: 'https://shentu-api.kleomedes.network',
        provider: 'Kleomedes'
      }
    ],
    grpc: [
      {
        address: 'shentu-grpc.polkachu.com:14090',
        provider: 'Polkachu'
      },
      {
        address: 'shentu.grpc.m.stavr.tech:9593',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://shentu-grpc.ramuchi.tech:12090',
        provider: 'ramuchi.tech'
      },
      {
        address: 'grpc-shentu-01.stakeflow.io:2402',
        provider: 'Stakeflow'
      },
      {
        address: 'shentu-grpc.tienthuattoan.ventures:9490',
        provider: 'TienThuatToan'
      },
      {
        address: 'shentu-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'shentu-grpc.panthea.eu:16700',
        provider: 'Panthea EU'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/shentu',
      txPage: 'https://ezstaking.app/shentu/txs/${txHash}',
      accountPage: 'https://ezstaking.app/shentu/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Shentu-Mainnet',
      txPage: 'https://explorer.stavr.tech/Shentu-Mainnet/txs/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Shentu-Mainnet/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/shentu',
      txPage: 'https://www.mintscan.io/shentu/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/shentu/accounts/${accountAddress}'
    },
    {
      kind: 'Shentu Explorer',
      url: 'https://explorer.shentu.technology/?net=shentu-2.2',
      txPage: 'https://explorer.shentu.technology/transactions/${txHash}?net=shentu-2.2'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/shentu',
      txPage: 'https://ping.pub/shentu/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/shentu',
      txPage: 'https://atomscan.com/shentu/transactions/${txHash}',
      accountPage: 'https://atomscan.com/shentu/accounts/${accountAddress}'
    },
    {
      kind: 'bigdipper',
      url: 'https://bigdipper.live/shentu',
      txPage: 'https://bigdipper.live/shentu/transactions/${txHash}',
      accountPage: 'https://bigdipper.live/shentu/accounts/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/shentu',
      accountPage: 'https://stakeflow.io/shentu/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg'
    }]
};
export default info;