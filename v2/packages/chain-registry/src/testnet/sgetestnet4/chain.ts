import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'sgetestnet4',
  chainType: 'cosmos',
  chainId: 'sge-network-4',
  prettyName: 'SGE Testnet4',
  status: 'live',
  networkType: 'testnet',
  website: 'https://sgenetwork.io',
  bech32Prefix: 'sge',
  daemonName: 'usge',
  nodeHome: '$HOME/.sged',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'usge',
        fixedMinGasPrice: 0
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/sge-network/sge',
    recommendedVersion: 'v1.1.1',
    compatibleVersions: ['v1.1.1', 'v1.0.1']
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.testnet.sgenetwork.io',
        provider: 'Sge Network'
      },
      {
        address: 'https://testnet-saage-rpc.lavenderfive.com/ ',
        provider: 'Lavender.Five'
      },
      {
        address: 'https://saage-testnet-rpc.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc-t.sge.nodestake.top/',
        provider: 'Nodestake.top'
      }
    ],
    rest: [
      {
        address: 'https://api.testnet.sgenetwork.io',
        provider: 'Sge Network'
      },
      {
        address: 'https://api-t.sge.nodestake.top/',
        provider: 'Nodestake.top'
      },
      {
        address: 'https://saage-testnet-api.polkachu.com/',
        provider: 'Polkachu'
      }
    ]
  },
  explorers: [{
      kind: 'Sge BlockExplorer',
      url: 'https://blockexplorer.testnet.sgenetwork.io/',
      txPage: 'https://blockexplorer.testnet.sgenetwork.io/sge-network/tx/${txHash}'
    }],
  images: [{
      imageSync: {
        chainName: 'sge'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg',
      theme: {
        primaryColorHex: '#b99952'
      }
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg'
  }
};
export default info;