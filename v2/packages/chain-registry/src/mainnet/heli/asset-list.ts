import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'heli',
  assets: [{
      description: 'The native token of HeliChain',
      denomUnits: [{
          denom: 'uheli',
          exponent: 0
        }, {
          denom: 'heli',
          exponent: 6
        }],
      base: 'uheli',
      name: 'Heli',
      display: 'heli',
      symbol: 'HELI',
      coingeckoId: 'helichain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/heli/images/heli.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/heli/images/heli.svg',
          theme: {
            primaryColorHex: '#fccc24'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;