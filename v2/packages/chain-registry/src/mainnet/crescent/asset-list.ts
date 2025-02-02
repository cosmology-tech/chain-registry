import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'crescent',
  assets: [{
      description: 'The native token of Crescent',
      denomUnits: [{
          denom: 'ucre',
          exponent: 0
        }, {
          denom: 'cre',
          exponent: 6
        }],
      base: 'ucre',
      name: 'Crescent',
      display: 'cre',
      symbol: 'CRE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg',
          theme: {
            primaryColorHex: '#3c2832'
          }
        }],
      typeAsset: 'sdk.coin'
    }, {
      description: 'The bonded token of Crescent',
      denomUnits: [{
          denom: 'ubcre',
          exponent: 0
        }, {
          denom: 'bcre',
          exponent: 6
        }],
      base: 'ubcre',
      name: 'Bonded Crescent',
      display: 'bcre',
      symbol: 'bCRE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg',
          theme: {
            primaryColorHex: '#df969f'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;