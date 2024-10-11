import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'realio',
  assets: [{
      description: 'The native currency of the Realio Network.',
      extendedDescription: 'An interoperable Layer-1 multi-chain Web3 ecosystem focused on the issuance and management of digitally native real-world assets (RWAs). Its design is fully open-source, permissionless, and purpose-built.',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg',
          theme: {
            primaryColorHex: '#000000',
            backgroundColorHex: '#000000',
            circle: true
          }
        }],
      socials: {
        website: 'https://realio.network/',
        twitter: 'https://x.com/realio_network'
      },
      typeAsset: 'sdk.coin'
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
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rst.png',
          theme: {
            primaryColorHex: '#e0e0e0'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;