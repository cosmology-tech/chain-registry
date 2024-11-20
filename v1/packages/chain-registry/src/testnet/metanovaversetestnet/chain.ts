import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'metanovaversetestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://metanovaverse.com/',
  pretty_name: 'Mnova',
  chain_type: 'cosmos',
  chain_id: 'mnova_10096-1',
  bech32_prefix: 'mnova',
  slip44: 118,
  node_home: '$HOME/.mnovad',
  daemon_name: 'mnovad',
  key_algos: ['ethsecp256k1'],
  staking: {
    staking_tokens: [{
        denom: 'amnv'
      }]
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/metanovaversetestnet/images/mnova.png'
    }]
};
export default info;