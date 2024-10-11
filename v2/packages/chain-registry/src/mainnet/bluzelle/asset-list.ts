import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'bluzelle',
  assets: [
    {
      description: 'The native token of Bluzelle',
      denomUnits: [{
          denom: 'ubnt',
          exponent: 0
        }, {
          denom: 'bnt',
          exponent: 6,
          aliases: ['blz']
        }],
      base: 'ubnt',
      name: 'Bluzelle',
      display: 'bnt',
      symbol: 'BLZ',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.svg'
      },
      coingeckoId: 'bluzelle',
      keywords: ['bluzelle', 'game'],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.svg',
          theme: {
            primaryColorHex: '#708ffc'
          }
        }],
      socials: {
        website: 'http://bluzelle.com/',
        twitter: 'https://twitter.com/BluzelleHQ'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The ELT token of Bluzelle\'s Gamma 4 Gaming Ecosystem',
      denomUnits: [{
          denom: 'uelt',
          exponent: 0
        }, {
          denom: 'elt',
          exponent: 6
        }],
      base: 'uelt',
      name: 'ELT',
      display: 'elt',
      symbol: 'ELT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/elt.png'
      },
      keywords: ['elt'],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/elt.png',
          theme: {
            primaryColorHex: '#0c3ab5'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The game token of Bluzelle\'s Gamma 4 Gaming Ecosystem',
      denomUnits: [{
          denom: 'ug4',
          exponent: 0
        }, {
          denom: 'g4',
          exponent: 6
        }],
      base: 'ug4',
      name: 'G4',
      display: 'g4',
      symbol: 'G4',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/g4.png'
      },
      keywords: ['g4'],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/g4.png',
          theme: {
            primaryColorHex: '#ee8828'
          }
        }],
      typeAsset: 'sdk.coin'
    }
  ]
};
export default info;