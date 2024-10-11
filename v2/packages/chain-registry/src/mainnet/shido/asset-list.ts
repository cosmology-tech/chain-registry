import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'shido',
  assets: [{
      description: 'The native EVM and Wasm, governance and staking token of the Shido Chain',
      denomUnits: [{
          denom: 'shido',
          exponent: 0
        }, {
          denom: 'SHIDO',
          exponent: 18
        }],
      base: 'shido',
      name: 'Shido',
      display: 'SHIDO',
      symbol: 'SHIDO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.svg'
      },
      coingeckoId: 'shido-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.svg',
          theme: {
            primaryColorHex: '#046ffc'
          }
        }],
      socials: {
        website: 'https://shido.io/',
        twitter: 'https://twitter.com/ShidoGlobal'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;