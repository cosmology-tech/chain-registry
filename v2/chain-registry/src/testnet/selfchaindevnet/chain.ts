import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'selfchaindevnet',
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