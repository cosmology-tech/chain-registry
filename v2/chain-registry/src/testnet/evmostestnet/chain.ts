import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'evmostestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Evmos Testnet',
  chainId: 'evmos_9000-4',
  bech32Prefix: 'evmos',
  daemonName: 'evmosd',
  nodeHome: '$HOME/.evmosd',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'atevmos',
        lowGasPrice: 20000000000,
        averageGasPrice: 25000000000,
        highGasPrice: 40000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'atevmos'
      }]
  },
  codebase: {
    cosmosSdkVersion: '0.46'
  },
  apis: {
    rpc: [
      {
        address: 'https://evmos.test.rpc.coldyvalidator.net',
        provider: 'coldy'
      },
      {
        address: 'https://evmos-testnet-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://evmos-testnet-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    rest: [
      {
        address: 'https://evmos.test.api.coldyvalidator.net',
        provider: 'coldy'
      },
      {
        address: 'https://evmos-testnet-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://evmos-testnet-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    grpc: [{
        address: 'https://evmos.test.grpc.coldyvalidator.net',
        provider: 'coldy'
      }, {
        address: 'evmos-testnet-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }]
  },
  explorers: [{
      kind: 'Mintscan',
      url: 'https://testnet.mintscan.io/evmos-testnet',
      txPage: 'https://testnet.mintscan.io/evmos-testnet/txs/${txHash}'
    }, {
      kind: 'NodesGuru',
      url: 'https://testnet.evmos.explorers.guru/',
      txPage: 'https://testnet.evmos.explorers.guru/transaction/${txHash}'
    }]
};
export default info;