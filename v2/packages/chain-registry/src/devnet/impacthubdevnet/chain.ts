import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'impacthubdevnet',
  status: 'live',
  networkType: 'devnet',
  website: 'https://www.ixo.world/',
  prettyName: 'ixo',
  chainType: 'cosmos',
  chainId: 'devnet-1',
  bech32Prefix: 'ixo',
  daemonName: 'ixod',
  nodeHome: '$HOME/.ixod',
  keyAlgos: ['secp256k1', 'ed25519'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uixo',
        fixedMinGasPrice: 0.015,
        lowGasPrice: 0.015,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uixo'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/ixofoundation/ixo-blockchain',
    recommendedVersion: 'v0.20.0',
    compatibleVersions: ['v0.20.0'],
    versions: [{
        name: 'v0.20.0',
        recommendedVersion: 'v0.20.0',
        compatibleVersions: ['v0.20.0']
      }]
  },
  apis: {
    rpc: [{
        address: 'https://devnet.ixo.earth/rpc/',
        provider: 'ixoworld'
      }],
    rest: [{
        address: 'https://devnet.ixo.earth/rest/',
        provider: 'ixoworld'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'ixoworld',
      url: 'https://blockscan.devnet.ixo.earth/ixo',
      txPage: 'https://blockscan.devnet.ixo.earth/ixo/transactions/${txHash}',
      accountPage: 'https://blockscan.devnet.ixo.earth/ixo/accounts/${accountAddress}'
    }]
};
export default info;