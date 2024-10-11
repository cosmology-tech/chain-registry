import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'galaxy',
  assets: [{
      description: 'GLX is the staking token of the Galaxy Chain',
      denomUnits: [{
          denom: 'uglx',
          exponent: 0
        }, {
          denom: 'glx',
          exponent: 6
        }],
      base: 'uglx',
      name: 'Galaxy',
      display: 'glx',
      symbol: 'GLX',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg',
          theme: {
            primaryColorHex: '#5e3be6'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;