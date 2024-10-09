import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'cifer',
  assets: [{
      description: 'Decentralized Machine Learning',
      denomUnits: [{
          denom: 'ucif',
          exponent: 0
        }, {
          denom: 'cif',
          exponent: 6
        }],
      base: 'ucif',
      name: 'Cifer',
      display: 'cif',
      symbol: 'CIF',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.svg'
      },
      coingeckoId: '',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.svg'
        }],
      socials: {
        website: 'http://cifer.ai/',
        twitter: 'https://twitter.com/cifer_ai'
      }
    }]
};
export default info;