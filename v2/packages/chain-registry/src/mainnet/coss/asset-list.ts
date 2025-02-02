import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'coss',
  assets: [
    {
      description: 'The native staking and governance token of the COSS.',
      denomUnits: [{
          denom: 'ucgas',
          exponent: 0
        }, {
          denom: 'cgas',
          exponent: 6
        }],
      base: 'ucgas',
      name: 'CGAS',
      display: 'cgas',
      symbol: 'CGAS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/cgas.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/cgas.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/cgas.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/cgas.svg',
          theme: {
            primaryColorHex: '#7c7c7c'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The inscription token of the COSS.',
      denomUnits: [{
          denom: 'ucoss',
          exponent: 0
        }, {
          denom: 'coss',
          exponent: 6
        }],
      base: 'ucoss',
      name: 'COSS',
      display: 'coss',
      symbol: 'COSS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/coss.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/coss.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/coss.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/coss.svg',
          theme: {
            primaryColorHex: '#876317'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The inscription token of the CIAS.',
      denomUnits: [{
          denom: 'ucias',
          exponent: 0
        }, {
          denom: 'cias',
          exponent: 6
        }],
      base: 'ucias',
      name: 'CIAS',
      display: 'cias',
      symbol: 'CIAS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/cias.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/cias.svg'
      },
      coingeckoId: 'cias',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/cias.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/cias.svg',
          theme: {
            primaryColorHex: '#4f3280'
          }
        }],
      typeAsset: 'sdk.coin'
    }
  ]
};
export default info;