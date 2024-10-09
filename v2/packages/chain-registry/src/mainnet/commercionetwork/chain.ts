import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'commercionetwork',
  chainId: 'commercio-3',
  prettyName: 'Commercio.network',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'did:com:',
  daemonName: 'commercionetworkd',
  nodeHome: '$HOME/.commercionetwork',
  keyAlgos: ['secp256k1'],
  slip44: 701,
  fees: {
    feeTokens: [{
        denom: 'ucommercio'
      }]
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc-mainnet.commercio.network'
      }],
    rest: [{
        address: 'https://lcd-mainnet.commercio.network'
      }]
  },
  explorers: [{
      kind: 'almerico',
      url: 'https://mainnet.commercio.network',
      txPage: 'https://mainnet.commercio.network/transactions/detail/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.svg'
    }]
};
export default info;