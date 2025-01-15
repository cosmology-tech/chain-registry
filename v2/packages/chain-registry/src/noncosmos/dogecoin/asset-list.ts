import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'dogecoin',
  assets: [{
      description: 'The native token of Dogecoin.',
      extendedDescription: 'Dogecoin (DOGE) is a cryptocurrency created as a playful homage, known for its friendly community, Shiba Inu meme origins, and accessible, fast transactions.',
      denomUnits: [{
          denom: 'shibe',
          exponent: 0
        }, {
          denom: 'doge',
          exponent: 8
        }],
      typeAsset: 'bitcoin-like',
      base: 'shibe',
      name: 'Dogecoin',
      display: 'doge',
      symbol: 'DOGE',
      coingeckoId: 'dogecoin',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/dogecoin/images/doge.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/dogecoin/images/doge.png',
          theme: {
            primaryColorHex: '#bda148'
          }
        }],
      socials: {
        website: 'https://dogecoin.com/',
        twitter: 'https://x.com/dogecoin'
      }
    }]
};
export default info;