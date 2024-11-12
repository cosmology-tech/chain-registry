import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'imversed',
  assets: [{
      description: 'The native EVM, governance and staking token of the Imversed',
      denomUnits: [{
          denom: 'aimv',
          exponent: 0
        }, {
          denom: 'imv',
          exponent: 18
        }],
      base: 'aimv',
      name: 'IMV',
      display: 'imv',
      symbol: 'IMV',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.svg',
          theme: {
            primaryColorHex: '#4c54e4'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;