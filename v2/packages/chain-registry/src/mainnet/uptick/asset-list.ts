import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'uptick',
  assets: [{
      description: 'The native token of Uptick',
      denomUnits: [{
          denom: 'auptick',
          exponent: 0
        }, {
          denom: 'uptick',
          exponent: 18
        }],
      base: 'auptick',
      name: 'Uptick',
      display: 'uptick',
      symbol: 'UPTICK',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.svg',
          theme: {
            primaryColorHex: '#1f182f'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;