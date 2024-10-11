import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'celestiatestnet',
  chainType: 'cosmos',
  chainId: 'blockspacerace-0',
  prettyName: 'Blockspace Race Testnet',
  status: 'killed',
  networkType: 'testnet',
  bech32Prefix: 'celestia',
  daemonName: 'celestia-appd',
  nodeHome: '$HOME/.celestia-app',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'utia',
        fixedMinGasPrice: 0
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/celestiaorg/celestia-app',
    recommendedVersion: 'v1.1.0',
    compatibleVersions: ['v1.1.0'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/celestiaorg/networks/master/blockspacerace/genesis.json'
    },
    versions: [{
        name: 'v1.1.0',
        recommendedVersion: 'v1.1.0',
        compatibleVersions: ['v1.1.0']
      }]
  },
  apis: {
    rpc: [{
        address: 'https://rpc-blockspacerace.pops.one/',
        provider: 'P-OPs'
      }],
    rest: [{
        address: 'https://celestia-blockspacerace-rest.brocha.in',
        provider: 'Brochain'
      }]
  },
  explorers: [{
      kind: 'Mintscan',
      url: 'https://mintscan.io/celestia-incentivized-testnet',
      txPage: 'https://mintscan.io/celestia-incentivized-testnet/txs/${txHash}'
    }]
};
export default info;