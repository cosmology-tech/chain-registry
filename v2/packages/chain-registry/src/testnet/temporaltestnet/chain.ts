import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'temporaltestnet',
  chainId: 'temporal-test-2',
  prettyName: 'Temporal Testnet',
  status: 'killed',
  networkType: 'testnet',
  bech32Prefix: 'temporal',
  daemonName: 'temporald',
  nodeHome: '$HOME/.temporal',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'utprl',
        fixedMinGasPrice: 0
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'utprl'
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://rpc.yieldmos.com/temporal-test-2',
        provider: 'Yieldmos'
      }, {
        address: 'https://testnet-temporal-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five'
      }],
    rest: [{
        address: 'https://lcd.yieldmos.com/temporal-test-2',
        provider: 'Yieldmos'
      }, {
        address: 'https://testnet-temporal-api.lavenderfive.com:443',
        provider: 'Lavender.Five'
      }],
    grpc: [{
        address: '142.132.157.153:24190',
        provider: 'Yieldmos'
      }]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://testnet.explorer.thesilverfox.pro/temporal',
      txPage: 'https://testnet.explorer.thesilverfox.pro/temporal/tx/${txHash}'
    },
    {
      kind: 'Nodes.Guru',
      url: 'https://testnet.temporal.explorers.guru',
      txPage: 'https://testnet.temporal.explorers.guru/transaction/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://testnet.ping.pub/temporal',
      txPage: 'https://testnet.ping.pub/temporal/tx/${txHash}'
    }
  ]
};
export default info;