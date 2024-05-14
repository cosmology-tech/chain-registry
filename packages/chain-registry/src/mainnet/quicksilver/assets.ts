import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'quicksilver',
  assets: [
    {
      description: 'QCK - native token of Quicksilver',
      denom_units: [{
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
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
      },
      coingecko_id: 'quicksilver',
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
      denom_units: [{
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
            chain_name: 'stargaze',
            base_denom: 'ustars'
          },
          provider: 'Quicksilver'
        }],
      logo_URIs: {
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
      denom_units: [{
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
            chain_name: 'cosmoshub',
            base_denom: 'uatom'
          },
          provider: 'Quicksilver'
        }],
      logo_URIs: {
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
      denom_units: [{
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
            chain_name: 'regen',
            base_denom: 'uregen'
          },
          provider: 'Quicksilver'
        }],
      logo_URIs: {
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
      denom_units: [{
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
            chain_name: 'osmosis',
            base_denom: 'uosmo'
          },
          provider: 'Quicksilver'
        }],
      logo_URIs: {
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
      denom_units: [{
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
            chain_name: 'sommelier',
            base_denom: 'usomm'
          },
          provider: 'Quicksilver'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.svg'
        }]
    },
    {
      description: 'Quicksilver Liquid Staked JUNO',
      denom_units: [{
          denom: 'uqjuno',
          exponent: 0,
          aliases: []
        }, {
          denom: 'qjuno',
          exponent: 6,
          aliases: []
        }],
      base: 'uqjuno',
      name: 'Quicksilver Liquid Staked JUNO',
      display: 'qjuno',
      symbol: 'qJUNO',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'juno',
            base_denom: 'ujuno'
          },
          provider: 'Quicksilver'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qjuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qjuno.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qjuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qjuno.svg'
        }]
    },
    {
      description: 'Quicksilver Liquid Staked DYDX',
      denom_units: [{
          denom: 'aqdydx',
          exponent: 0,
          aliases: []
        }, {
          denom: 'qdydx',
          exponent: 18,
          aliases: []
        }],
      base: 'aqdydx',
      name: 'Quicksilver Liquid Staked DYDX',
      display: 'qdydx',
      symbol: 'qDYDX',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'dydx',
            base_denom: 'adydx'
          },
          provider: 'Quicksilver'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qdydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qdydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qdydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qdydx.svg'
        }]
    },
    {
      description: 'Quicksilver Liquid Staked SAGA',
      denom_units: [{
          denom: 'uqsaga',
          exponent: 0,
          aliases: []
        }, {
          denom: 'qsaga',
          exponent: 6,
          aliases: []
        }],
      base: 'uqsaga',
      name: 'Quicksilver Liquid Staked SAGA',
      display: 'qsaga',
      symbol: 'qSAGA',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'saga',
            base_denom: 'usaga'
          },
          provider: 'Quicksilver'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsaga.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsaga.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsaga.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsaga.svg'
        }]
    },
    {
      description: 'Quicksilver Liquid Staked BLD',
      denom_units: [{
          denom: 'uqbld',
          exponent: 0,
          aliases: []
        }, {
          denom: 'qbld',
          exponent: 6,
          aliases: []
        }],
      base: 'uqbld',
      name: 'Quicksilver Liquid Staked BLD',
      display: 'qbld',
      symbol: 'qBLD',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'agoric',
            base_denom: 'ubld'
          },
          provider: 'Quicksilver'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qbld.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qbld.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qbld.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qbld.svg'
        }]
    }
  ]
};
export default info;