import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'dig',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://digchain.org/',
  prettyName: 'Dig Chain',
  chainId: 'dig-1',
  bech32Prefix: 'dig',
  daemonName: 'digd',
  nodeHome: '$HOME/.dig',
  keyAlgos: ['secp256k1', 'ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'udig',
        lowGasPrice: 0.025,
        averageGasPrice: 0.03,
        highGasPrice: 0.035
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'udig'
      }]
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png'
  },
  apis: {
    rpc: [{
        address: 'https://rpc-1-dig.notional.ventures'
      }, {
        address: 'https://rpc-dig-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      }],
    rest: [{
        address: 'https://api-1-dig.notional.ventures'
      }, {
        address: 'https://api-dig-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      }],
    grpc: [{
        address: 'grpc-dig-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      }]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/dig',
      txPage: 'https://ping.pub/dig/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/dig',
      txPage: 'https://atomscan.com/dig/transactions/${txHash}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/dig',
      txPage: 'https://explorer.tcnetwork.io/dig/transaction/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png'
    }]
};
export default info;