import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'mars',
  assets: [{
      description: 'Mars protocol token',
      denomUnits: [{
          denom: 'umars',
          exponent: 0
        }, {
          denom: 'mars',
          exponent: 6
        }],
      base: 'umars',
      name: 'Mars',
      display: 'mars',
      symbol: 'MARS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg'
      },
      coingeckoId: 'mars-protocol-a7fcbcfb-fd61-4017-92f0-7ee9f9cc6da3',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg'
        }],
      socials: {
        website: 'https://www.marsprotocol.io/',
        twitter: 'https://twitter.com/mars_protocol'
      }
    }]
};
export default info;