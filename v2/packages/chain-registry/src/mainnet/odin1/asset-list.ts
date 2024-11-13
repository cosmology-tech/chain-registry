import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'odin1',
  assets: [
    {
      description: 'Staking and governance token for ODIN Protocol',
      denomUnits: [{
          denom: 'loki',
          exponent: 0
        }, {
          denom: 'odin',
          exponent: 6
        }],
      base: 'loki',
      name: 'ODIN',
      display: 'odin',
      symbol: 'ODIN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
      },
      coingeckoId: 'odin-protocol',
      images: [{
          imageSync: {
            chainName: 'odin',
            baseDenom: 'loki'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'GEO token for ODIN Protocol',
      denomUnits: [{
          denom: 'mGeo',
          exponent: 0
        }, {
          denom: 'geo',
          exponent: 6
        }],
      base: 'mGeo',
      name: 'GEO',
      display: 'geo',
      symbol: 'GEO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg'
      },
      images: [{
          imageSync: {
            chainName: 'odin',
            baseDenom: 'mGeo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg',
          theme: {
            primaryColorHex: '#c3ebf3'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'O9W token for ODIN Protocol',
      denomUnits: [{
          denom: 'mO9W',
          exponent: 0
        }, {
          denom: 'O9W',
          exponent: 6
        }],
      base: 'mO9W',
      name: 'O9W',
      display: 'O9W',
      symbol: 'O9W',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg'
      },
      images: [{
          imageSync: {
            chainName: 'odin',
            baseDenom: 'mO9W'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg',
          theme: {
            primaryColorHex: '#040404'
          }
        }],
      typeAsset: 'sdk.coin'
    }
  ]
};
export default info;