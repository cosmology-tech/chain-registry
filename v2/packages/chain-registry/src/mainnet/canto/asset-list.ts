import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'canto',
  assets: [{
      description: 'Canto is a Layer-1 blockchain built to deliver on the promise of DeFi',
      denomUnits: [{
          denom: 'acanto',
          exponent: 0
        }, {
          denom: 'canto',
          exponent: 18
        }],
      base: 'acanto',
      name: 'Canto',
      display: 'canto',
      symbol: 'CANTO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg'
      },
      coingeckoId: 'canto',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg',
          theme: {
            primaryColorHex: '#1c1f1f'
          }
        }],
      socials: {
        website: 'https://canto.io/',
        twitter: 'https://twitter.com/CantoPublic'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;