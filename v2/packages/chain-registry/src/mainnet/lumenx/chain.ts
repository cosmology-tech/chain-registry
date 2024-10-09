import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'lumenx',
  status: 'killed',
  networkType: 'mainnet',
  prettyName: 'LumenX',
  chainId: 'LumenX',
  bech32Prefix: 'lumen',
  daemonName: 'lumenxd',
  nodeHome: '$HOME/.lumenx',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ulumen',
        fixedMinGasPrice: 0.0025,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ulumen'
      }]
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc-lumenx.cryptonet.pl/',
        provider: 'CryptoNet'
      }, {
        address: 'https://lumenx-rpc.kynraze.com/',
        provider: 'Kynraze'
      }],
    rest: [
      {
        address: 'https://api-lumenx.cryptonet.pl/',
        provider: 'CryptoNet'
      },
      {
        address: 'https://api-lumenx.nodine.id/',
        provider: 'Nodine.ID'
      },
      {
        address: 'https://lcd.lumenx.hexnodes.co/',
        provider: 'Hexnodes'
      }
    ],
    grpc: [
      {
        address: 'https://lumenx-grpc.kynraze.com',
        provider: 'Kynraze'
      },
      {
        address: 'https://grpc-lumenx.nodine.id',
        provider: 'Nodine.ID'
      },
      {
        address: 'https://grpc.lumenx.hexnodes.co',
        provider: 'Hexnodes'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://explorer.chaintools.tech/lumenx',
      txPage: 'https://explorer.chaintools.tech/lumenx/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.cryptonet.pl/lumenx',
      txPage: 'https://explorer.cryptonet.pl/lumenx/tx/${txHash}'
    },
    {
      kind: 'Kynraze',
      url: 'https://explorer.kynraze.com/lumenx',
      txPage: 'https://explorer.kynraze.com/lumenx/tx/${txHash}'
    },
    {
      kind: 'ComunityNode',
      url: 'https://explorer.comunitynode.my.id/lumenx',
      txPage: 'https://explorer.comunitynode.my.id/lumenx/tx/${txHash}'
    },
    {
      kind: 'Nodine.ID',
      url: 'https://explorer.co.id/lumenx',
      txPage: 'https://explorer.co.id/lumenx/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/lumenx',
      txPage: 'https://atomscan.com/lumenx/transactions/${txHash}',
      accountPage: 'https://atomscan.com/lumenx/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg'
    }]
};
export default info;