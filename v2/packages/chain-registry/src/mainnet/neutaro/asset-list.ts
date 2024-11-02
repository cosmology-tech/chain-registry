import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'neutaro',
  assets: [{
      description: 'The native token of Neutaro',
      extendedDescription: 'Neutaro (NTMPI) serves as the governance token for Timpi (www.timpi.io), a technology pioneer poised to shake up the industry through Decentralization, Web3, and AI.',
      denomUnits: [{
          denom: 'uneutaro',
          exponent: 0
        }, {
          denom: 'neutaro',
          exponent: 6
        }],
      base: 'uneutaro',
      name: 'Neutaro',
      display: 'neutaro',
      symbol: 'NTMPI',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.svg'
      },
      coingeckoId: 'neutaro',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.svg',
          theme: {
            primaryColorHex: '#cbfb06'
          }
        }],
      socials: {
        website: 'https://neutaro.com/',
        twitter: 'https://twitter.com/Timpi_TheNewWay'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;