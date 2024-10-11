import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'tgrade',
  assets: [{
      description: 'The native token of Tgrade',
      denomUnits: [{
          denom: 'utgd',
          exponent: 0
        }, {
          denom: 'tgd',
          exponent: 6
        }],
      base: 'utgd',
      name: 'Tgrade',
      display: 'tgd',
      symbol: 'TGD',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg'
      },
      coingeckoId: 'tgrade',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg',
          theme: {
            primaryColorHex: '#a7248a'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;