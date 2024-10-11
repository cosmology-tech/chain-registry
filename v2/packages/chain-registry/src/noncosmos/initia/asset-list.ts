import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'initia',
  assets: [{
      description: 'The native token of Initia',
      denomUnits: [{
          denom: 'uinit',
          exponent: 0
        }, {
          denom: 'INIT',
          exponent: 6
        }],
      base: 'uinit',
      display: 'INIT',
      name: 'Initia',
      symbol: 'INIT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/initia/images/INIT.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/initia/images/INIT.svg',
          theme: {
            circle: true,
            primaryColorHex: '#040404'
          }
        }],
      socials: {
        website: 'https://initia.xyz/',
        twitter: 'https://twitter.com/initiaFDN'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;