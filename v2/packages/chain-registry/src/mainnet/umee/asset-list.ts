import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'umee',
  assets: [{
      description: 'The native token of Umee',
      denomUnits: [{
          denom: 'uumee',
          exponent: 0
        }, {
          denom: 'umee',
          exponent: 6
        }],
      base: 'uumee',
      name: 'Umee',
      display: 'umee',
      symbol: 'UMEE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
      },
      coingeckoId: 'umee',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
        }]
    }]
};
export default info;