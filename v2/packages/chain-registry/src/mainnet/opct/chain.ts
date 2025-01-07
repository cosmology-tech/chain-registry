import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'opct',
  chainType: 'cosmos',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'OPCT Chain',
  chainId: 'opct_1',
  bech32Prefix: 'opct',
  daemonName: 'opctd',
  nodeHome: '$HOME/.opct',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  description: 'OPCT Chain is the GRIT Protocol, established in 2020 by AI researchers and developers who recognized the need to maintain physical and mental well-being in an unpredictable and rapidly changing world. The protocol proves GRIT through exercise, creating a sustainable balance between technological advancement and personal health.',
  website: 'https://www.opct.ai',
  fees: {
    feeTokens: [{
        denom: 'opct',
        fixedMinGasPrice: 0.0001
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/OPCT-Chain/opct',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/wonseokjung/opctmainnet/main/config/genesis.json'
    }
  },
  apis: {
    rpc: [{
        address: 'https://node.opct.ai',
        provider: 'OPCT Foundation'
      }],
    rest: [{
        address: 'https://node.opct.ai/api',
        provider: 'OPCT Foundation'
      }]
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/opct/images/opct.png'
    }]
};
export default info;