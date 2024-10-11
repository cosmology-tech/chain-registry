import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'selfchaindevnet',
  chainType: 'cosmos',
  chainId: 'self-dev-1',
  prettyName: 'Devnet 1',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'self',
  daemonName: 'selfchaind',
  nodeHome: '$HOME/.selfchain',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uself',
        fixedMinGasPrice: 0
      }]
  },
  codebase: {
    gitRepo: 'https://docs.selfchain.xyz/nodes-and-validators/releases',
    recommendedVersion: '0.2.2',
    compatibleVersions: ['0.2.2'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/hotcrosscom/selfchain-genesis/main/networks/devnet/genesis.json'
    },
    versions: [{
        name: '0.2.2',
        recommendedVersion: '0.2.2',
        compatibleVersions: ['0.2.2']
      }]
  },
  apis: {
    rpc: [{
        address: 'https://rpc-devnet.selfchain.xyz',
        provider: 'Selfchain'
      }],
    rest: [{
        address: 'https://api-devnet.selfchain.xyz/',
        provider: 'Selfchain'
      }]
  },
  explorers: [{
      kind: 'Selfchain',
      url: 'https://explorer-devnet.selfchain.xyz',
      txPage: 'https://explorer-devnet.selfchain.xyz/self/transactions/${txHash}'
    }]
};
export default info;