import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'marstestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Mars Hub Testnet',
  chainType: 'cosmos',
  chainId: 'ares-1',
  bech32Prefix: 'mars',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'umars',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0,
        highGasPrice: 0.025
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'umars'
      }]
  },
  codebase: {
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/mars-protocol/networks/main/ares-1/genesis.json'
    }
  },
  apis: {
    rpc: [{
        address: 'https://testnet-rpc.marsprotocol.io/',
        provider: 'Mars Protocol'
      }, {
        address: 'https://rpc-mars.nodeist.net/',
        provider: 'Nodeist'
      }],
    rest: [{
        address: 'https://testnet-rest.marsprotocol.io/',
        provider: 'Mars Protocol'
      }, {
        address: 'https://api-mars.nodeist.net/',
        provider: 'Nodeist'
      }]
  },
  explorers: [{
      kind: 'Mars Protocol',
      url: 'https://testnet-explorer.marsprotocol.io',
      txPage: 'https://testnet-explorer.marsprotocol.io/transactions/${txHash}'
    }, {
      kind: 'Nodeist Explorer',
      url: 'https://exp.nodeist.net/t-mars/',
      txPage: 'https://exp.nodeist.net/t-mars/transactions/${txHash}'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-icon.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-icon.svg'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-icon.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-icon.svg'
    }]
};
export default info;