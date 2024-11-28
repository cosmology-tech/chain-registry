import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'xiontestnet',
  chainId: 'xion-testnet-1',
  prettyName: 'Xion Testnet',
  website: 'https://burnt.com',
  status: 'live',
  networkType: 'testnet',
  chainType: 'cosmos',
  bech32Prefix: 'xion',
  daemonName: 'xiond',
  nodeHome: '$HOME/.xiond',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uxion',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uxion'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/burnt-labs/xion',
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/burnt-labs/burnt-networks/main/testnets/xion-testnet-1/genesis.json'
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://testnet-burnt-rpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://xion-testnet-rpc.polkachu.com',
        provider: 'polkachu'
      },
      {
        address: 'https://burnt-testnet-rpc.itrocket.net',
        provider: 'ITRocket'
      }
    ],
    rest: [
      {
        address: 'https://testnet-burnt-api.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://xion-testnet-api.polkachu.com',
        provider: 'polkachu'
      },
      {
        address: 'https://burnt-testnet-api.itrocket.net',
        provider: 'ITRocket'
      }
    ],
    grpc: [
      {
        address: 'testnet-burnt-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'xion-testnet-grpc.polkachu.com:22390',
        provider: 'polkachu'
      },
      {
        address: 'burnt-testnet-grpc.itrocket.net:443',
        provider: 'ITRocket'
      }
    ]
  },
  explorers: [
    {
      url: 'https://explorer.burnt.com/xion-testnet-1',
      txPage: 'https://explorer.burnt.com/xion-testnet-1/tx/${txHash}',
      accountPage: 'https://explorer.burnt.com/xion-testnet-1/account/${accountAddress}'
    },
    {
      url: 'https://testnet.xion.explorers.guru',
      txPage: 'https://testnet.xion.explorers.guru/transaction/${txHash}',
      accountPage: 'https://testnet.xion.explorers.guru/account/${accountAddress}'
    },
    {
      kind: 'ITRocket',
      url: 'https://testnet.itrocket.net/burnt',
      txPage: 'https://testnet.itrocket.net/burnt/tx/${txHash}',
      accountPage: 'https://testnet.itrocket.net/burnt/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt.png'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt.png'
  },
  keywords: [
    'xion',
    'burnt',
    'testnet'
  ]
};
export default info;