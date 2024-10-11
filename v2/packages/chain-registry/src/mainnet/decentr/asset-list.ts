import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'decentr',
  assets: [{
      description: 'The native token of Decentr',
      denomUnits: [{
          denom: 'udec',
          exponent: 0
        }, {
          denom: 'dec',
          exponent: 6
        }],
      base: 'udec',
      name: 'Decentr',
      display: 'dec',
      symbol: 'DEC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg'
      },
      coingeckoId: 'decentr',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg',
          theme: {
            primaryColorHex: '#4678e9'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;