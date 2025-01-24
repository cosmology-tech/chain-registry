import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'lefeef',
  assets: [{
      description: 'A secure, scalable blockchain empowering seamless dApps and efficient token transactions.',
      denom_units: [
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
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lefeef/images/lefeef.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lefeef/images/lefeef.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lefeef/images/lefeef.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lefeef/images/lefeef.svg',
          theme: {
            primary_color_hex: '#6439ff'
          }
        }],
      socials: {
        website: 'https://lefeef.net',
        twitter: 'https://x.com/lefeef2024'
      },
      type_asset: 'sdk.coin'
    }]
};
export default info;