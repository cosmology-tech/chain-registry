import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'celestiatestnet',
  chainId: 'blockspacerace-0',
  prettyName: 'Blockspace Race Testnet',
  status: 'live',
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
      url: 'https://testnet.mintscan.io/celestia-incentivized-testnet',
      txPage: 'https://testnet.mintscan.io/celestia-incentivized-testnet/txs/${txHash}'
    }]
};
export default info;