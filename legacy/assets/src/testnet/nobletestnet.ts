import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'nobletestnet',
  assets: [
    {
      description: 'The native token of Elys Network',
      denom_units: [
        {
          denom: 'ibc/AAA364B0A1B8482ED5415078451C58C907EDE7751F9C4A7F9D0C03181D97DE39',
          exponent: 0,
          aliases: ['uelys']
        },
        {
          denom: 'melys',
          exponent: 3,
          aliases: ['millielys']
        },
        {
          denom: 'elys',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/AAA364B0A1B8482ED5415078451C58C907EDE7751F9C4A7F9D0C03181D97DE39',
      name: 'Elys Network',
      display: 'elys',
      symbol: 'ELYS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/elys.png'
      },
      coingecko_id: 'elys',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/elys.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'uelys',
            chain_name: 'elystestnet'
          },
          chain: {
            channel_id: 'channel-19'
          }
        }]
    },
    {
      description: 'Eden token definition',
      denom_units: [
        {
          denom: 'ibc/A9C7A16BEEEE66019AD9A2693806C72521F502714B354324688D025F0DEF19F2',
          exponent: 0,
          aliases: ['ueden']
        },
        {
          denom: 'meden',
          exponent: 3,
          aliases: ['millieden']
        },
        {
          denom: 'eden',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/A9C7A16BEEEE66019AD9A2693806C72521F502714B354324688D025F0DEF19F2',
      name: 'Eden',
      display: 'eden',
      symbol: 'EDEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/eden.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/eden.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'ueden',
            chain_name: 'elystestnet'
          },
          chain: {
            channel_id: 'channel-19'
          }
        }]
    },
    {
      description: 'The native token of MANTRA',
      denom_units: [{
          denom: 'ibc/81B164F4C8A85A47FDC4D7E4041B5911988837212CB73E93AE5676F291602B2E',
          exponent: 0,
          aliases: ['uom']
        }, {
          denom: 'om',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/81B164F4C8A85A47FDC4D7E4041B5911988837212CB73E93AE5676F291602B2E',
      name: 'MANTRA Chain',
      display: 'om',
      symbol: 'OM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.svg'
      },
      coingecko_id: '',
      keywords: [
        'mantra',
        'staking',
        'delegating',
        'governance',
        'regulation',
        'defi'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'uom',
            chain_name: 'mantrachaintestnet'
          },
          chain: {
            channel_id: 'channel-174'
          }
        }]
    },
    {
      description: 'The native token of Elys Network',
      denom_units: [
        {
          denom: 'ibc/AAA364B0A1B8482ED5415078451C58C907EDE7751F9C4A7F9D0C03181D97DE39',
          exponent: 0,
          aliases: ['uelys']
        },
        {
          denom: 'melys',
          exponent: 3,
          aliases: ['millielys']
        },
        {
          denom: 'elys',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/AAA364B0A1B8482ED5415078451C58C907EDE7751F9C4A7F9D0C03181D97DE39',
      name: 'Elys Network',
      display: 'elys',
      symbol: 'ELYS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/elys.png'
      },
      coingecko_id: 'elys',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/elys.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'uelys',
            chain_name: 'elystestnet'
          },
          chain: {
            channel_id: 'channel-19'
          }
        }]
    },
    {
      description: 'Eden token definition',
      denom_units: [
        {
          denom: 'ibc/A9C7A16BEEEE66019AD9A2693806C72521F502714B354324688D025F0DEF19F2',
          exponent: 0,
          aliases: ['ueden']
        },
        {
          denom: 'meden',
          exponent: 3,
          aliases: ['millieden']
        },
        {
          denom: 'eden',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/A9C7A16BEEEE66019AD9A2693806C72521F502714B354324688D025F0DEF19F2',
      name: 'Eden',
      display: 'eden',
      symbol: 'EDEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/eden.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/eden.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'ueden',
            chain_name: 'elystestnet'
          },
          chain: {
            channel_id: 'channel-19'
          }
        }]
    },
    {
      description: 'The native token of MANTRA',
      denom_units: [{
          denom: 'ibc/81B164F4C8A85A47FDC4D7E4041B5911988837212CB73E93AE5676F291602B2E',
          exponent: 0,
          aliases: ['uom']
        }, {
          denom: 'om',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/81B164F4C8A85A47FDC4D7E4041B5911988837212CB73E93AE5676F291602B2E',
      name: 'MANTRA Chain',
      display: 'om',
      symbol: 'OM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.svg'
      },
      coingecko_id: '',
      keywords: [
        'mantra',
        'staking',
        'delegating',
        'governance',
        'regulation',
        'defi'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'uom',
            chain_name: 'mantrachaintestnet'
          },
          chain: {
            channel_id: 'channel-174'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/D73D168790F3C072F38CFD35BCC72C356C1B300FBA32CF7B0199C75601FCC8BA',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/D73D168790F3C072F38CFD35BCC72C356C1B300FBA32CF7B0199C75601FCC8BA',
      name: 'Osmosis Testnet',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }],
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4280',
            base_denom: 'uosmo',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-22'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/F98ED29F4531D727A51BFE81C25C84184762D208E04A3596D1FD83006EDCC58D',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/F98ED29F4531D727A51BFE81C25C84184762D208E04A3596D1FD83006EDCC58D',
      name: 'Ion',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
        }],
      coingecko_id: 'ion',
      keywords: ['memecoin'],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4280',
            base_denom: 'uion',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-22'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/05AC4BBA78C5951339A47DD1BC1E7FC922A9311DF81C85745B1C162F516FF2F1',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/05AC4BBA78C5951339A47DD1BC1E7FC922A9311DF81C85745B1C162F516FF2F1',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3651',
            base_denom: 'uosmo',
            chain_name: 'osmosistestnet4'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/B1468D7420773B5D59561CC0E91D6A5F75415E216DCF2966D657E23B97322B36',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      base: 'ibc/B1468D7420773B5D59561CC0E91D6A5F75415E216DCF2966D657E23B97322B36',
      name: 'Ion',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      coingecko_id: 'ion',
      keywords: ['memecoin'],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3651',
            base_denom: 'uion',
            chain_name: 'osmosistestnet4'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }]
    },
    {
      description: 'The native staking token of the Xion network.',
      denom_units: [{
          denom: 'ibc/475ED5117C702EF62A36D41F1EB50AF2770427251920C605CA34014895FF10EC',
          exponent: 0,
          aliases: ['uxion']
        }, {
          denom: 'XION',
          exponent: 6,
          aliases: ['xion']
        }],
      base: 'ibc/475ED5117C702EF62A36D41F1EB50AF2770427251920C605CA34014895FF10EC',
      display: 'XION',
      name: 'xion',
      symbol: 'XION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-489',
            base_denom: 'uxion',
            chain_name: 'xiontestnet'
          },
          chain: {
            channel_id: 'channel-147'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/D73D168790F3C072F38CFD35BCC72C356C1B300FBA32CF7B0199C75601FCC8BA',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/D73D168790F3C072F38CFD35BCC72C356C1B300FBA32CF7B0199C75601FCC8BA',
      name: 'Osmosis Testnet',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }],
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4280',
            base_denom: 'uosmo',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-22'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/F98ED29F4531D727A51BFE81C25C84184762D208E04A3596D1FD83006EDCC58D',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/F98ED29F4531D727A51BFE81C25C84184762D208E04A3596D1FD83006EDCC58D',
      name: 'Ion',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
        }],
      coingecko_id: 'ion',
      keywords: ['memecoin'],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4280',
            base_denom: 'uion',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-22'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/05AC4BBA78C5951339A47DD1BC1E7FC922A9311DF81C85745B1C162F516FF2F1',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/05AC4BBA78C5951339A47DD1BC1E7FC922A9311DF81C85745B1C162F516FF2F1',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3651',
            base_denom: 'uosmo',
            chain_name: 'osmosistestnet4'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/B1468D7420773B5D59561CC0E91D6A5F75415E216DCF2966D657E23B97322B36',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      base: 'ibc/B1468D7420773B5D59561CC0E91D6A5F75415E216DCF2966D657E23B97322B36',
      name: 'Ion',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      coingecko_id: 'ion',
      keywords: ['memecoin'],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3651',
            base_denom: 'uion',
            chain_name: 'osmosistestnet4'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }]
    },
    {
      description: 'The native staking token of the Xion network.',
      denom_units: [{
          denom: 'ibc/475ED5117C702EF62A36D41F1EB50AF2770427251920C605CA34014895FF10EC',
          exponent: 0,
          aliases: ['uxion']
        }, {
          denom: 'XION',
          exponent: 6,
          aliases: ['xion']
        }],
      base: 'ibc/475ED5117C702EF62A36D41F1EB50AF2770427251920C605CA34014895FF10EC',
      display: 'XION',
      name: 'xion',
      symbol: 'XION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-489',
            base_denom: 'uxion',
            chain_name: 'xiontestnet'
          },
          chain: {
            channel_id: 'channel-147'
          }
        }]
    }
  ]
};
export default assets;
    