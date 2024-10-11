import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'chain4energy',
  assets: [{
      description: 'The native token of Chain4Energy',
      extendedDescription: 'C4E is a DePIN L1 Blockchain platform, designed to support a variety of innovative energy and e-mobility applications by creating a decentralized and democratized community-powered ecosystem.',
      denomUnits: [{
          denom: 'uc4e',
          exponent: 0
        }, {
          denom: 'c4e',
          exponent: 6
        }],
      base: 'uc4e',
      name: 'Chain4Energy',
      display: 'c4e',
      symbol: 'C4E',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chain4energy/images/c4e.png'
      },
      coingeckoId: 'chain4energy',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chain4energy/images/c4e.png',
          theme: {
            primaryColorHex: '#24344c'
          }
        }],
      socials: {
        website: 'https://c4e.io/',
        twitter: 'https://twitter.com/Chain4Energy'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;