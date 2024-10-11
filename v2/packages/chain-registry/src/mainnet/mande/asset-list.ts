import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'mande',
  assets: [{
      description: 'The native token of Mande Network.',
      extendedDescription: 'Credibility Hub for Web3',
      denomUnits: [{
          denom: 'amand',
          exponent: 0
        }, {
          denom: 'mand',
          exponent: 18
        }],
      typeAsset: 'sdk.coin',
      base: 'amand',
      name: 'Mande Network',
      display: 'mand',
      symbol: 'MAND',
      coingeckoId: 'mande-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mande/images/mande.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mande/images/mande.svg',
          theme: {
            primaryColorHex: '#274cbf'
          }
        }],
      socials: {
        website: 'https://mande.network/',
        twitter: 'https://twitter.com/MandeNetwork'
      },
      keywords: ['credibility', 'web3'],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mande/images/mande.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mande/images/mande.svg'
      }
    }]
};
export default info;