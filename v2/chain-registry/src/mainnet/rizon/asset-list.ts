import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'rizon',
  assets: [{
      description: 'Native token of Rizon Chain',
      denomUnits: [{
          denom: 'uatolo',
          exponent: 0
        }, {
          denom: 'atolo',
          exponent: 6
        }],
      base: 'uatolo',
      name: 'Rizon Chain',
      display: 'atolo',
      symbol: 'ATOLO',
      coingeckoId: 'rizon',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.svg'
        }],
      socials: {
        website: 'https://rizon.world/',
        twitter: 'https://twitter.com/hdac_rizon'
      }
    }]
};
export default info;