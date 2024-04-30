import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'cerberus',
  status: 'killed',
  networkType: 'mainnet',
  website: 'https://cerberus.zone/',
  prettyName: 'Cerberus',
  chainId: 'cerberus-chain-1',
  bech32Prefix: 'cerberus',
  daemonName: 'cerberusd',
  nodeHome: '$HOME/.cerberus',
  slip44: 118,
  codebase: {

  },
  fees: {
    feeTokens: [{
        denom: 'ucrbrus',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ucrbrus'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.svg'
  },
  apis: {
    rpc: [],
    rest: [],
    grpc: [{
        address: 'grpc-cerberus-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      }, {
        address: 'cerberus-grpc.polkachu.com:13890',
        provider: 'Polkachu'
      }]
  },
  explorers: [
    {
      kind: 'skynetexplorers',
      url: 'https://skynetexplorers.com/cerberus',
      txPage: 'https://skynetexplorers.com/cerberus/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/cerberus',
      txPage: 'https://ping.pub/cerberus/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/cerberus',
      txPage: 'https://atomscan.com/cerberus/transactions/${txHash}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/cerberus',
      txPage: 'https://explorer.tcnetwork.io/cerberus/transaction/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.svg'
    }]
};
export default info;