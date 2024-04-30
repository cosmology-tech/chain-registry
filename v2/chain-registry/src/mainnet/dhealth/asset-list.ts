import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'dhealth',
  assets: [{
      description: 'The native token of dHealth',
      denomUnits: [{
          denom: 'udhp',
          exponent: 0
        }, {
          denom: 'dhp',
          exponent: 6
        }],
      base: 'udhp',
      name: 'Digital Health Point',
      display: 'dhp',
      symbol: 'DHP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.svg'
      },
      coingeckoId: 'dhealth',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.svg'
        }]
    }]
};
export default info;