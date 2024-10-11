import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'paloma',
  assets: [{
      description: 'The native token of the Paloma chain',
      denomUnits: [{
          denom: 'ugrain',
          exponent: 0
        }, {
          denom: 'grain',
          exponent: 6
        }],
      base: 'ugrain',
      name: 'Grain',
      display: 'grain',
      symbol: 'GRAIN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/paloma/images/grain.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/paloma/images/grain.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/paloma/images/grain.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/paloma/images/grain.svg'
        }],
      socials: {
        website: 'https://palomachain.com/',
        twitter: 'https://twitter.com/paloma_chain'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;