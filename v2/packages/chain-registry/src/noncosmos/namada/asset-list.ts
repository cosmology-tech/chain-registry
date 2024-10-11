import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'namada',
  assets: [{
      description: 'The native token of Namada',
      denomUnits: [{
          denom: 'unam',
          exponent: 0
        }, {
          denom: 'nam',
          exponent: 6
        }],
      base: 'unam',
      display: 'nam',
      name: 'Namada',
      symbol: 'NAM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/namada/images/nam.png',
          theme: {
            circle: true,
            primaryColorHex: '#fbfb04'
          }
        }],
      socials: {
        website: 'https://namada.net/',
        twitter: 'https://twitter.com/namada'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;