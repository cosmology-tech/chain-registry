import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'celestiatestnet2',
  chainType: 'cosmos',
  chainId: 'arabica-11',
  prettyName: 'Arabica Testnet',
  status: 'live',
  networkType: 'devnet',
  bech32Prefix: 'celestia',
  daemonName: 'celestia-appd',
  nodeHome: '$HOME/.celestia-app',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'utia',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.01,
        averageGasPrice: 0.02,
        highGasPrice: 0.1
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/celestiaorg/celestia-app',
    recommendedVersion: 'v3.3.1-arabica',
    compatibleVersions: [
      'v3.0.0-arabica',
      'v3.0.1-arabica',
      'v3.0.2-arabica',
      'v3.1.0-arabica',
      'v3.2.0-arabica',
      'v3.3.0-arabica',
      'v3.3.1-arabica'
    ],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/celestiaorg/networks/master/arabica-11/genesis.json'
    }
  },
  apis: {
    rpc: [{
        address: 'https://validator-1.celestia-arabica-11.com/',
        provider: 'Celestia Labs'
      }],
    rest: [{
        address: 'https://api.celestia-arabica-11.com/',
        provider: 'Celestia Labs'
      }]
  },
  explorers: [{
      kind: 'Celenium',
      url: 'https://arabica.celenium.io/',
      txPage: 'https://arabica.celenium.io/tx/${txHash}'
    }]
};
export default info;