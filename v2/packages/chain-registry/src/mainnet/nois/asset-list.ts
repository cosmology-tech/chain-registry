import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'nois',
  assets: [{
      description: 'The native token of Nois',
      denomUnits: [{
          denom: 'unois',
          exponent: 0
        }, {
          denom: 'nois',
          exponent: 6
        }],
      base: 'unois',
      name: 'Nois',
      display: 'nois',
      symbol: 'NOIS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
      },
      keywords: [
        'nois',
        'randomness',
        'drand',
        'wasm'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg',
          theme: {
            primaryColorHex: '#0c0c14'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;