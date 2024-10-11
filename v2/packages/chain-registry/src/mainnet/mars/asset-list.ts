import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'mars',
  assets: [{
      description: 'Mars Protocol token (pre-migration)',
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
      symbol: 'MARS.old',
      traces: [{
          type: 'legacy-mintage',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1ndu2wvkrxtane8se2tr48gv7nsm46y5gcqjhux/MARS'
          },
          provider: 'Mars Hub'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token-ibc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token-ibc.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token-ibc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token-ibc.svg',
          theme: {
            primaryColorHex: '#000000'
          }
        }],
      socials: {
        website: 'https://www.marsprotocol.io/',
        twitter: 'https://twitter.com/mars_protocol'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;