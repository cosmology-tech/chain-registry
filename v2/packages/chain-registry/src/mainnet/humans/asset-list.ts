import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'humans',
  assets: [{
      description: 'The native staking and governance token of Humans.ai.',
      denomUnits: [{
          denom: 'aheart',
          exponent: 0
        }, {
          denom: 'heart',
          exponent: 18
        }],
      base: 'aheart',
      name: 'HEART',
      display: 'heart',
      symbol: 'HEART',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/heart-dark-mode.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/heart-dark-mode.svg'
      },
      coingeckoId: 'humans-ai',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/heart-dark-mode.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/heart-dark-mode.svg',
          theme: {
            darkMode: true,
            primaryColorHex: '#f3f3f3'
          }
        }],
      socials: {
        website: 'https://humans.ai/',
        twitter: 'https://twitter.com/humansdotai'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;