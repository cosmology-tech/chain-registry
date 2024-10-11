import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'prysm',
  assets: [{
      description: 'The native token of Prysm',
      denomUnits: [{
          denom: 'uprysm',
          exponent: 0
        }, {
          denom: 'prysm',
          exponent: 6
        }],
      base: 'uprysm',
      display: 'prysm',
      name: 'Prysm',
      symbol: 'PRYSM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/prysm/images/prysm.png',
          theme: {
            circle: true,
            primaryColorHex: '#cf654f'
          }
        }],
      socials: {
        website: 'https://www.prysm.network/',
        twitter: 'https://twitter.com/PrysmNetwork'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;