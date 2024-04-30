import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'hypersigntestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Hypersign Testnet',
  chainId: 'prajna-1',
  bech32Prefix: 'hid',
  daemonName: 'hid-noded',
  nodeHome: '$HOME/.hid-node',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uhid',
        fixedMinGasPrice: 0
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://rpc.prajna.hypersign.id',
        provider: 'Hypersign'
      }],
    rest: [{
        address: 'https://api.prajna.hypersign.id',
        provider: 'Hypersign'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'Hypersign',
      url: 'https://explorer.hypersign.id/hypersign-prajna-testnet',
      txPage: 'https://explorer.hypersign.id/hypersign-prajna-testnet/tx/${txHash}'
    }]
};
export default info;