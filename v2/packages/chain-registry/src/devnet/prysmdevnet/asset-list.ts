import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'prysmdevnet',
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/prysmdevnet/images/prysm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/prysmdevnet/images/prysm.svg',
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