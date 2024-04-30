import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'idep',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.idep.network/',
  prettyName: 'IDEP',
  chainId: 'Antora',
  bech32Prefix: 'idep',
  daemonName: 'idep',
  nodeHome: '$HOME/.ion',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'idep',
        fixedMinGasPrice: 0
      }]
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.svg'
  },
  apis: {
    rpc: [],
    rest: [],
    grpc: [{
        address: 'idep-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      }]
  },
  explorers: [
    {
      kind: 'chadscan',
      url: 'https://chadscan.com',
      txPage: 'https://chadscan.com/transactions/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/idep',
      txPage: 'https://atomscan.com/idep/transactions/${txHash}',
      accountPage: 'https://atomscan.com/idep/accounts/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/idep',
      txPage: 'https://explorer.tcnetwork.io/idep/transaction/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.svg'
    }]
};
export default info;