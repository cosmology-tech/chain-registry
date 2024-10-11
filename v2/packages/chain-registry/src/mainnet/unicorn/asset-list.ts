import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'unicorn',
  assets: [{
      description: 'The native token of Unicorn.',
      denomUnits: [{
          denom: 'uwunicorn',
          exponent: 0
        }, {
          denom: 'unicorn',
          exponent: 6
        }],
      base: 'uwunicorn',
      name: 'Unicorn',
      display: 'unicorn',
      symbol: 'UWU',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unicorn/images/uwu.png',
          theme: {
            primaryColorHex: '#D44CE6'
          }
        }],
      socials: {
        website: 'https://unicorn.meme/',
        twitter: 'https://x.com/unicornandmemes'
      },
      keywords: ['meme'],
      typeAsset: 'sdk.coin'
    }]
};
export default info;