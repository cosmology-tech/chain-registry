import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'octa',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Octa',
  chainType: 'cosmos',
  chainId: 'octa',
  bech32Prefix: 'octa',
  daemonName: 'octadaemon',
  nodeHome: '$HOME/.octa',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uocta',
        fixedMinGasPrice: 0
      }]
  },
  codebase: {
    genesis: {
      genesisUrl: 'https://octa-coin-assets.s3.eu-central-1.amazonaws.com/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/octa/images/octa.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/octa/images/octa.svg'
  },
  apis: {
    rpc: [],
    rest: []
  },
  explorers: [{
      kind: 'Octa explorer',
      url: 'http://explorer.octa-coin.com/',
      txPage: 'http://explorer.octa-coin.com/txs/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/octa/images/octa.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/octa/images/octa.svg',
      theme: {
        primaryColorHex: '#04a7f8'
      }
    }]
};
export default info;