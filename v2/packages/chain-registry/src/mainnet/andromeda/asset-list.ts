import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'andromeda',
  assets: [{
      description: 'The native staking and governance token of Andromeda',
      denomUnits: [{
          denom: 'uandr',
          exponent: 0
        }, {
          denom: 'andr',
          exponent: 6
        }],
      coingeckoId: 'andromeda-2',
      base: 'uandr',
      name: 'Andr',
      display: 'andr',
      symbol: 'ANDR',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/andromeda/images/andromeda-logo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/andromeda/images/andromeda-logo.png',
          theme: {
            primaryColorHex: '#040404'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;