import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'lumenx',
  assets: [{
      description: 'The native token of LumenX Network',
      denomUnits: [{
          denom: 'ulumen',
          exponent: 0
        }, {
          denom: 'lumen',
          exponent: 6
        }],
      base: 'ulumen',
      name: 'LUMEN',
      display: 'lumen',
      symbol: 'LUMEN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg',
          theme: {
            primaryColorHex: '#cb8b40'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;