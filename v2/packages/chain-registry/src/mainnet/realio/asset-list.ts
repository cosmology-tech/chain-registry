import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'realio',
  assets: [{
      description: 'The native currency of the Realio Network.',
      denomUnits: [{
          denom: 'ario',
          exponent: 0
        }, {
          denom: 'rio',
          exponent: 18
        }],
      base: 'ario',
      name: 'Realio Network',
      display: 'rio',
      symbol: 'RIO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg'
      },
      coingeckoId: 'realio-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg'
        }]
    }, {
      description: 'A hybrid equity token that represent ownership of the Realio Ecosystem and provides utility functions on the Network.',
      denomUnits: [{
          denom: 'arst',
          exponent: 0
        }, {
          denom: 'rst',
          exponent: 18
        }],
      base: 'arst',
      name: 'Realio Security Token',
      display: 'rst',
      symbol: 'RST',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rst.png'
      },
      coingeckoId: '',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rst.png'
        }]
    }]
};
export default info;