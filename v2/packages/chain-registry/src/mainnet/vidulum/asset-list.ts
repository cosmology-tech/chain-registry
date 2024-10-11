import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'vidulum',
  assets: [{
      description: 'The native token of Vidulum',
      denomUnits: [{
          denom: 'uvdl',
          exponent: 0
        }, {
          denom: 'vdl',
          exponent: 6
        }],
      base: 'uvdl',
      name: 'Vidulum',
      display: 'vdl',
      symbol: 'VDL',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/vdl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/vdl.svg'
      },
      coingeckoId: 'vidulum',
      images: [{
          imageSync: {
            chainName: 'beezee',
            baseDenom: 'factory/bze13gzq40che93tgfm9kzmkpjamah5nj0j73pyhqk/uvdl'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/vdl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/vdl.svg',
          theme: {
            primaryColorHex: '#3454bc'
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg'
        }],
      traces: [{
          type: 'legacy-mintage',
          counterparty: {
            chainName: 'beezee',
            baseDenom: 'factory/bze13gzq40che93tgfm9kzmkpjamah5nj0j73pyhqk/uvdl'
          },
          provider: 'Vidulum'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;