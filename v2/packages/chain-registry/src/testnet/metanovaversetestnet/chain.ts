import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'metanovaversetestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://metanovaverse.com/',
  prettyName: 'Mnova',
  chainType: 'cosmos',
  chainId: 'mnova_10096-1',
  bech32Prefix: 'mnova',
  slip44: 118,
  nodeHome: '$HOME/.mnovad',
  daemonName: 'mnovad',
  keyAlgos: ['ethsecp256k1'],
  staking: {
    stakingTokens: [{
        denom: 'amnv'
      }]
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/metanovaversetestnet/images/mnova.png'
    }]
};
export default info;