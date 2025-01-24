import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'lefeef',
  assets: [{
      description: 'A secure, scalable blockchain empowering seamless dApps and efficient token transactions.',
      denomUnits: [
        {
          denom: 'ulefeef',
          exponent: 0
        },
        {
          denom: 'mlefeef',
          exponent: 3
        },
        {
          denom: 'lefeef',
          exponent: 6
        }
      ],
      base: 'ulefeef',
      name: 'LEFEEF',
      display: 'lefeef',
      symbol: 'LEFEEF',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lefeef/images/lefeef.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lefeef/images/lefeef.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lefeef/images/lefeef.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lefeef/images/lefeef.svg',
          theme: {
            primaryColorHex: '#6439ff'
          }
        }],
      socials: {
        website: 'https://lefeef.net',
        twitter: 'https://x.com/lefeef2024'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;