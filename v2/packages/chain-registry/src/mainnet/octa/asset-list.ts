import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'octa',
  assets: [{
      description: 'The native token of Octa Chain',
      denomUnits: [{
          denom: 'uocta',
          exponent: 0,
          aliases: []
        }, {
          denom: 'octa',
          exponent: 6,
          aliases: []
        }],
      base: 'uocta',
      display: 'octa',
      name: 'Octa',
      symbol: 'OCTA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/octa/images/octa.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/octa/images/octa.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/octa/images/octa.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/octa/images/octa.svg',
          theme: {
            primaryColorHex: '#04a7f8'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;