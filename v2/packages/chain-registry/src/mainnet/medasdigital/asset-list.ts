import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'medasdigital',
  assets: [{
      description: 'The native token of Medas Digital Network',
      denomUnits: [{
          denom: 'umedas',
          exponent: 0
        }, {
          denom: 'medas',
          exponent: 6
        }],
      base: 'umedas',
      name: 'Medas Digital',
      display: 'medas',
      symbol: 'MEDAS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.svg'
      },
      keywords: ['medas'],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.svg'
        }]
    }]
};
export default info;