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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png',
          theme: {
            primaryColorHex: '#b2b2b2'
          }
        }],
      socials: {
        website: 'https://quicksilver.zone/',
        twitter: 'https://twitter.com/quicksilverzone'
      },
      typeAsset: 'sdk.coin'
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.svg',
          theme: {
            primaryColorHex: '#fc944c'
          }
        }],
      typeAsset: 'sdk.coin'
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.svg',
          theme: {
            primaryColorHex: '#fc944c'
          }
        }],
      typeAsset: 'sdk.coin'
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.svg',
          theme: {
            primaryColorHex: '#fc944c'
          }
        }],
      typeAsset: 'sdk.coin'
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.svg',
          theme: {
            primaryColorHex: '#fc944c'
          }
        }],
      typeAsset: 'sdk.coin'
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.svg',
          theme: {
            primaryColorHex: '#fc944c'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Quicksilver Liquid Staked JUNO',
      denomUnits: [{
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
            chainName: 'juno',
            baseDenom: 'ujuno'
          },
          provider: 'Quicksilver'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qjuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qjuno.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qjuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qjuno.svg',
          theme: {
            primaryColorHex: '#fc944c'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Quicksilver Liquid Staked DYDX',
      denomUnits: [{
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
            chainName: 'dydx',
            baseDenom: 'adydx'
          },
          provider: 'Quicksilver'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qdydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qdydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qdydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qdydx.svg',
          theme: {
            primaryColorHex: '#fc944c'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Quicksilver Liquid Staked SAGA',
      denomUnits: [{
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
            chainName: 'saga',
            baseDenom: 'usaga'
          },
          provider: 'Quicksilver'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsaga.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsaga.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsaga.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsaga.svg',
          theme: {
            primaryColorHex: '#f9924b'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Quicksilver Liquid Staked BLD',
      denomUnits: [{
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
            chainName: 'agoric',
            baseDenom: 'ubld'
          },
          provider: 'Quicksilver'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qbld.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qbld.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qbld.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qbld.svg',
          theme: {
            primaryColorHex: '#fc944c'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Noble USDC via dYdX Protocol',
      denomUnits: [{
          denom: 'ibc/5666A86DCC869C75F69A7938AD6DCFECAC4A09C73522599E7A85B10143E5FBD2',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/5666A86DCC869C75F69A7938AD6DCFECAC4A09C73522599E7A85B10143E5FBD2',
      name: 'Noble USDC',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'dydx',
            baseDenom: 'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
            channelId: 'channel-32'
          },
          chain: {
            channelId: 'channel-164',
            path: 'transfer/channel-164/transfer/channel-0/uusdc'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'noble',
            baseDenom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          theme: {
            circle: true,
            primaryColorHex: '#2775CA'
          }
        }]
    }
  ]
};
export default info;