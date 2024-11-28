import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'permtestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Perm Testnet',
  chainType: 'cosmos',
  chainId: 'INVALID-ID-permtestnet-testnet-1',
  bech32Prefix: 'perm',
  daemonName: 'permd',
  nodeHome: '$HOME/.perm',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uperm',
        lowGasPrice: 0.0025,
        averageGasPrice: 0.0025,
        highGasPrice: 0.0024
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uperm'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/Loop-Protocol/perm.git',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/Loop-Protocol/testnet/main/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.45'
    },
    ibc: {
      type: 'go',
      version: '4.3.0'
    },
    cosmwasm: {
      version: '0.30',
      enabled: true
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.3.finance/',
        provider: 'Perm Network'
      }],
    rest: [{
        address: 'https://rest.3.finance/',
        provider: 'Perm Network'
      }],
    grpc: [{
        address: 'https://grpc.3.finance/',
        provider: 'Perm Network'
      }]
  },
  explorers: [{
      kind: 'bigdipper',
      url: 'https://explorer.testnet.perm.ooo/',
      txPage: 'https://explorer.testnet.perm.ooo/transactions/${txHash}'
    }]
};
export default info;