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
    },
    {
      description: 'The native token of Celestia',
      denomUnits: [{
          denom: 'ibc/1A7653323C1A9E267FF7BEBF40B3EEA8065E8F069F47F2493ABC3E0B621BF793',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'TIA',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/1A7653323C1A9E267FF7BEBF40B3EEA8065E8F069F47F2493ABC3E0B621BF793',
      name: 'Celestia',
      display: 'TIA',
      symbol: 'TIA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'celestiatestnet3',
            baseDenom: 'utia',
            channelId: 'channel-78'
          },
          chain: {
            channelId: 'channel-38',
            path: 'transfer/channel-38/utia'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      },
      images: [{
          imageSync: {
            chainName: 'celestiatestnet3',
            baseDenom: 'utia'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
          theme: {
            primaryColorHex: '#7c2cfb'
          }
        }]
    },
    {
      description: 'The native token of dYdX',
      denomUnits: [{
          denom: 'ibc/DFA22C0A6DD15E64B6BD164A1C748EDA8E976F3BDAC9BA7B40AD887BBEC5D2BB',
          exponent: 0,
          aliases: ['adv4tnt']
        }, {
          denom: 'DV4TNT',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/DFA22C0A6DD15E64B6BD164A1C748EDA8E976F3BDAC9BA7B40AD887BBEC5D2BB',
      name: 'dYdX',
      display: 'DV4TNT',
      symbol: 'DV4TNT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'dydxtestnet',
            baseDenom: 'adv4tnt',
            channelId: 'channel-54'
          },
          chain: {
            channelId: 'channel-40',
            path: 'transfer/channel-40/adv4tnt'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
      },
      images: [{
          imageSync: {
            chainName: 'dydxtestnet',
            baseDenom: 'adv4tnt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg',
          theme: {
            primaryColorHex: '#7c2cfb'
          }
        }]
    }
  ]
};
export default info;