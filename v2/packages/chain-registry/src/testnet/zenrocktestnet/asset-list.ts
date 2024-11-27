import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'zenrocktestnet',
  assets: [{
      description: 'The native token of zenrock',
      denomUnits: [{
          denom: 'urock',
          exponent: 0,
          aliases: []
        }, {
          denom: 'rock',
          exponent: 6,
          aliases: []
        }],
      base: 'urock',
      name: 'Zenrock',
      display: 'rock',
      symbol: 'ROCK',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zenrocktestnet/images/zenrock.png'
      },
      keywords: ['mpc'],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zenrocktestnet/images/zenrock.png'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zenrocktestnet/images/zenrock.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;