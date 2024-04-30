import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'pylons',
  assets: [{
      description: 'The revenue token for Pylons',
      denomUnits: [{
          denom: 'ubedrock',
          exponent: 0
        }, {
          denom: 'rock',
          exponent: 6
        }],
      base: 'ubedrock',
      name: 'Pylons',
      display: 'rock',
      symbol: 'ROCK',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pylons/images/pylons.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pylons/images/pylons.png'
        }],
      socials: {
        website: 'https://pylons.tech',
        twitter: 'https://twitter.com/pylonstech'
      }
    }]
};
export default info;