import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'swisstroniktestnet',
  chainId: 'swisstronik_1291-1',
  prettyName: 'Swisstronik Testnet',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'swtr',
  daemonName: 'swisstronikd',
  nodeHome: '$HOME/.swisstronik',
  keyAlgos: ['secp256k1'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'uswtr',
        fixedMinGasPrice: 7
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uswtr'
      }]
  },
  codebase: {
    cosmosSdkVersion: '0.47'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.testnet.swisstronik.com',
        provider: 'Swisstronik'
      },
      {
        address: 'https://testnet-swisstronik-rpc.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://rpc.swisstronik.comunitynode.my.id',
        provider: 'ComunityNode'
      }
    ],
    rest: [
      {
        address: 'https://api.testnet.swisstronik.com',
        provider: 'Swisstronik'
      },
      {
        address: 'https://testnet-swisstronik-api.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://rest.swisstronik.comunitynode.my.id/',
        provider: 'Comunitynode'
      }
    ],
    grpc: [{
        address: 'testnet-swisstronik-grpc.genznodes.dev:20090',
        provider: 'genznodes'
      }],
    evmHttpJsonrpc: [
      {
        address: 'https://json-rpc.testnet.swisstronik.com',
        provider: 'Swisstronik'
      },
      {
        address: 'https://testnet-swisstronik-rpc-evm.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://evm.swisstronik.comunitynode.my.id',
        provider: 'comunitynode'
      }
    ]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://explorer-cosmos.testnet.swisstronik.com/swisstronik',
      txPage: 'https://explorer-cosmos.testnet.swisstronik.com/swisstronik/tx/${txHash}'
    }]
};
export default info;