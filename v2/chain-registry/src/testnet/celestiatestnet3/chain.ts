import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'celestiatestnet3',
  chainId: 'mocha-4',
  prettyName: 'Mocha Testnet',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'celestia',
  daemonName: 'celestia-appd',
  nodeHome: '$HOME/.celestia-app',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'utia',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.01,
        averageGasPrice: 0.02,
        highGasPrice: 0.1
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-mocha.pops.one',
        provider: 'P-OPs'
      },
      {
        address: 'https://celestia-testnet-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rpc-mocha-full.avril14th.org',
        provider: 'Avril 14th'
      },
      {
        address: 'https://celestia-testnet-rpc.itrocket.net',
        provider: '🚀ITRocket🚀'
      }
    ],
    rest: [
      {
        address: 'https://api-mocha.pops.one',
        provider: 'P-OPs'
      },
      {
        address: 'https://celestia-testnet-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://api-mocha-full.avril14th.org',
        provider: 'Avril 14th'
      },
      {
        address: 'https://celestia-testnet-api.itrocket.net',
        provider: '🚀ITRocket🚀'
      }
    ],
    grpc: [
      {
        address: 'celestia-testnet-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'grpc-mocha-full.avril14th.org',
        provider: 'Avril 14th'
      },
      {
        address: 'celestia-testnet-grpc.itrocket.net:11090',
        provider: '🚀ITRocket🚀'
      }
    ]
  },
  explorers: [{
      kind: 'Mintscan',
      url: 'https://testnet.mintscan.io/celestia-testnet',
      txPage: 'https://testnet.mintscan.io/celestia-testnet/txs/${txHash}'
    }, {
      kind: '🚀ITRocket🚀',
      url: 'https://testnet.itrocket.net/celestia',
      txPage: 'https://testnet.itrocket.net/celestia/tx/${txHash}',
      accountPage: 'https://testnet.itrocket.net/celestia/account/${accountAddress}'
    }]
};
export default info;