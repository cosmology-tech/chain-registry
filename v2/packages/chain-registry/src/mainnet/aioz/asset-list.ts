import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'aioz',
  assets: [{
      description: 'The native staking and governance token of the AIOZ Network.',
      denomUnits: [
        {
          denom: 'attoaioz',
          exponent: 0
        },
        {
          denom: 'nanoaioz',
          exponent: 9
        },
        {
          denom: 'aioz',
          exponent: 18
        }
      ],
      base: 'attoaioz',
      name: 'AIOZ',
      display: 'aioz',
      symbol: 'AIOZ',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.svg'
      },
      coingeckoId: 'aioz-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.svg',
          theme: {
            primaryColorHex: '#24241c'
          }
        }],
      socials: {
        website: 'https://aioz.network/',
        twitter: 'https://twitter.com/AIOZNetwork'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;