import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'quicksilver',
  assets: [
    {
      description: 'QCK - native token of Quicksilver',
      denomUnits: [{
          denom: 'uqck',
          exponent: 0,
          aliases: []
        }, {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }],
      base: 'uqck',
      name: 'Quicksilver',
      display: 'qck',
      symbol: 'QCK',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
      },
      coingeckoId: 'quicksilver',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
        }],
      socials: {
        website: 'https://quicksilver.zone/',
        twitter: 'https://twitter.com/quicksilverzone'
      }
    },
    {
      description: 'Quicksilver Liquid Staked STARS',
      denomUnits: [{
          denom: 'uqstars',
          exponent: 0,
          aliases: []
        }, {
          denom: 'qstars',
          exponent: 6,
          aliases: []
        }],
      base: 'uqstars',
      name: 'Quicksilver Liquid Staked STARS',
      display: 'qstars',
      symbol: 'qSTARS',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'stargaze',
            baseDenom: 'ustars'
          },
          provider: 'Quicksilver'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.svg'
        }]
    },
    {
      description: 'Quicksilver Liquid Staked ATOM',
      denomUnits: [{
          denom: 'uqatom',
          exponent: 0,
          aliases: []
        }, {
          denom: 'qatom',
          exponent: 6,
          aliases: []
        }],
      base: 'uqatom',
      name: 'Quicksilver Liquid Staked ATOM',
      display: 'qatom',
      symbol: 'qATOM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom'
          },
          provider: 'Quicksilver'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.svg'
        }]
    },
    {
      description: 'Quicksilver Liquid Staked REGEN',
      denomUnits: [{
          denom: 'uqregen',
          exponent: 0,
          aliases: []
        }, {
          denom: 'qregen',
          exponent: 6,
          aliases: []
        }],
      base: 'uqregen',
      name: 'Quicksilver Liquid Staked Regen',
      display: 'qregen',
      symbol: 'qREGEN',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'regen',
            baseDenom: 'uregen'
          },
          provider: 'Quicksilver'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.svg'
        }]
    },
    {
      description: 'Quicksilver Liquid Staked OSMO',
      denomUnits: [{
          denom: 'uqosmo',
          exponent: 0,
          aliases: []
        }, {
          denom: 'qosmo',
          exponent: 6,
          aliases: []
        }],
      base: 'uqosmo',
      name: 'Quicksilver Liquid Staked OSMO',
      display: 'qosmo',
      symbol: 'qOSMO',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'uosmo'
          },
          provider: 'Quicksilver'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.svg'
        }]
    },
    {
      description: 'Quicksilver Liquid Staked SOMM',
      denomUnits: [{
          denom: 'uqsomm',
          exponent: 0,
          aliases: []
        }, {
          denom: 'qsomm',
          exponent: 6,
          aliases: []
        }],
      base: 'uqsomm',
      name: 'Quicksilver Liquid Staked SOMM',
      display: 'qsomm',
      symbol: 'qSOMM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'sommelier',
            baseDenom: 'usomm'
          },
          provider: 'Quicksilver'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.svg'
        }]
    }
  ]
};
export default info;