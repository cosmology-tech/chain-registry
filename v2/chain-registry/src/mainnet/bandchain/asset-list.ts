import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'bandchain',
  assets: [{
      description: 'The native token of BandChain',
      denomUnits: [{
          denom: 'uband',
          exponent: 0
        }, {
          denom: 'band',
          exponent: 6
        }],
      base: 'uband',
      display: 'band',
      name: 'Band Protocol',
      symbol: 'BAND',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg'
      },
      coingeckoId: 'band-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg'
        }],
      socials: {
        website: 'https://www.bandprotocol.com/',
        twitter: 'https://twitter.com/BandProtocol'
      }
    }]
};
export default info;