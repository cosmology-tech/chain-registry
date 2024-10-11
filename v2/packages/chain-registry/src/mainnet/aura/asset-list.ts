import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'aura',
  assets: [{
      description: 'The native token of Aura Network',
      denomUnits: [{
          denom: 'uaura',
          exponent: 0
        }, {
          denom: 'aura',
          exponent: 6
        }],
      base: 'uaura',
      name: 'Aura',
      display: 'aura',
      symbol: 'AURA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg'
      },
      coingeckoId: 'aura-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg',
          theme: {
            primaryColorHex: '#a7c8d4'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;