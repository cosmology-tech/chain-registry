import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'axelartestnet',
  chainType: 'cosmos',
  chainId: 'axelar-testnet-lisbon-3',
  prettyName: 'Axelar Testnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://axelar.network/',
  bech32Prefix: 'axelar',
  daemonName: 'axelard',
  nodeHome: '$HOME/.axelard',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uaxl',
        lowGasPrice: 0.007,
        averageGasPrice: 0.007,
        highGasPrice: 0.01
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uaxl'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/axelarnetwork/axelar-core'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-axelar-testnet.imperator.co:443',
        provider: 'Imperator.co'
      },
      {
        address: 'https://axelartest-rpc.quickapi.com/',
        provider: 'Quickapi'
      },
      {
        address: 'https://axelar-testnet-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ],
    rest: [
      {
        address: 'https://lcd-axelar-testnet.imperator.co:443',
        provider: 'Imperator.co'
      },
      {
        address: 'https://axelartest-lcd.quickapi.com/',
        provider: 'Quickapi'
      },
      {
        address: 'https://axelar-testnet-api.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ]
  },
  explorers: [{
      kind: 'axelarscan',
      url: 'https://testnet.axelarscan.io',
      txPage: 'https://testnet.axelarscan.io/tx/${txHash}'
    }, {
      kind: 'mintscan',
      url: 'https://mintscan.io/axelar-testnet',
      txPage: 'https://mintscan.io/axelar-testnet/txs/${txHash}',
      accountPage: 'https://mintscan.io/axelar-testnet/account/${accountAddress}'
    }]
};
export default info;