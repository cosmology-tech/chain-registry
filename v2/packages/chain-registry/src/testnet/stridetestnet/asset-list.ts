import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'stridetestnet',
  assets: [
    {
      description: 'The native token of Stride',
      denomUnits: [{
          denom: 'ustrd',
          exponent: 0
        }, {
          denom: 'strd',
          exponent: 6
        }],
      base: 'ustrd',
      name: 'Stride',
      display: 'strd',
      symbol: 'STRD',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Stride\'s liquid staked TIA',
      denomUnits: [{
          denom: 'stutia',
          exponent: 0
        }, {
          denom: 'stTIA',
          exponent: 6
        }],
      base: 'stutia',
      name: 'Stride Staked TIA',
      display: 'stTIA',
      symbol: 'stTIA',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'celestiatestnet3',
            baseDenom: 'utia'
          },
          provider: 'Stride'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Stride\'s liquid staked DYDX',
      denomUnits: [{
          denom: 'stadv4tnt',
          exponent: 0
        }, {
          denom: 'stDV4TNT',
          exponent: 18
        }],
      base: 'stadv4tnt',
      name: 'Stride Staked DYDX',
      display: 'stDV4TNT',
      symbol: 'stDV4TNT',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'dydxtestnet',
            baseDenom: 'adv4tnt'
          },
          provider: 'Stride'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }],
      typeAsset: 'sdk.coin'
    }
  ]
};
export default info;