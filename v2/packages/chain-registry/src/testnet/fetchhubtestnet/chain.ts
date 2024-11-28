import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'fetchhubtestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Fetch.ai Testnet',
  chainType: 'cosmos',
  chainId: 'dorado-1',
  bech32Prefix: 'fetch',
  daemonName: 'fetchd',
  nodeHome: '$HOME/.fetchd',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'atestfet',
        lowGasPrice: 0.025,
        averageGasPrice: 0.025,
        highGasPrice: 0.035
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'atestfet'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/fetchai/fetchd',
    recommendedVersion: 'v0.10.5',
    compatibleVersions: ['v0.10.5'],
    genesis: {
      genesisUrl: 'https://storage.googleapis.com/fetch-ai-testnet-genesis/genesis-dorado-827201.json'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc-dorado.fetch.ai:443',
        provider: 'fetch.ai'
      }],
    rest: [{
        address: 'https://rest-dorado.fetch.ai',
        provider: 'fetch.ai'
      }],
    grpc: [{
        address: 'grpc-dorado.fetch.ai:443',
        provider: 'fetch.ai'
      }]
  },
  explorers: [{
      kind: 'bigdipper',
      url: 'https://explore-dorado.fetch.ai',
      txPage: 'https://explore-dorado.fetch.ai/transactions/${txHash}'
    }, {
      kind: 'azoyalabs',
      url: 'https://fetchstation.azoyalabs.com/testnet',
      txPage: 'https://fetchstation.azoyalabs.com/testnet/explorer/transactions/${txHash}',
      accountPage: 'https://fetchstation.azoyalabs.com/testnet/explorer/address/${accountAddress}'
    }]
};
export default info;