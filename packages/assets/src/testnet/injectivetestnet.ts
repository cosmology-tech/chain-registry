import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'injectivetestnet',
  assets: [
    {
      description: 'The native token of Nois',
      denom_units: [{
          denom: 'ibc/A190CF3FC762D25A46A49E7CB0E998F4A494C7F64A356DA17C25A2D8B0069D3B',
          exponent: 0,
          aliases: ['unois']
        }, {
          denom: 'nois',
          exponent: 6
        }],
      base: 'ibc/A190CF3FC762D25A46A49E7CB0E998F4A494C7F64A356DA17C25A2D8B0069D3B',
      name: 'Nois',
      display: 'nois',
      symbol: 'NOIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
      },
      keywords: [
        'nois',
        'randomness',
        'drand',
        'wasm'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-33',
            base_denom: 'unois',
            chain_name: 'noistestnet'
          },
          chain: {
            channel_id: 'channel-74'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/5D1C51E9D2A3CF6F88F3796BD144CD1AE9EC26A8B7E1BF95FEA9CE2D1A4FE82D',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/5D1C51E9D2A3CF6F88F3796BD144CD1AE9EC26A8B7E1BF95FEA9CE2D1A4FE82D',
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
            channel_id: 'channel-4174',
            base_denom: 'uosmo',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-129'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/19A26C71FFF71D901C09803EF4036874344A5BD0D2B71AA96EED948B09990F3F',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      base: 'ibc/19A26C71FFF71D901C09803EF4036874344A5BD0D2B71AA96EED948B09990F3F',
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
            channel_id: 'channel-4174',
            base_denom: 'uion',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-129'
          }
        }]
    },
    {
      description: 'The native staking token of the Xion network.',
      denom_units: [{
          denom: 'ibc/6AB81EFD48DC233A206FAD0FB6F2691A456246C4A7F98D0CD37E2853DD0493EA',
          exponent: 0,
          aliases: ['uxion']
        }, {
          denom: 'XION',
          exponent: 6,
          aliases: ['xion']
        }],
      base: 'ibc/6AB81EFD48DC233A206FAD0FB6F2691A456246C4A7F98D0CD37E2853DD0493EA',
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
            channel_id: 'channel-215',
            base_denom: 'uxion',
            chain_name: 'xiontestnet'
          },
          chain: {
            channel_id: 'channel-324'
          }
        }]
    },
    {
      description: 'The native token of Nois',
      denom_units: [{
          denom: 'ibc/A190CF3FC762D25A46A49E7CB0E998F4A494C7F64A356DA17C25A2D8B0069D3B',
          exponent: 0,
          aliases: ['unois']
        }, {
          denom: 'nois',
          exponent: 6
        }],
      base: 'ibc/A190CF3FC762D25A46A49E7CB0E998F4A494C7F64A356DA17C25A2D8B0069D3B',
      name: 'Nois',
      display: 'nois',
      symbol: 'NOIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
      },
      keywords: [
        'nois',
        'randomness',
        'drand',
        'wasm'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-33',
            base_denom: 'unois',
            chain_name: 'noistestnet'
          },
          chain: {
            channel_id: 'channel-74'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/5D1C51E9D2A3CF6F88F3796BD144CD1AE9EC26A8B7E1BF95FEA9CE2D1A4FE82D',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/5D1C51E9D2A3CF6F88F3796BD144CD1AE9EC26A8B7E1BF95FEA9CE2D1A4FE82D',
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
            channel_id: 'channel-4174',
            base_denom: 'uosmo',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-129'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/19A26C71FFF71D901C09803EF4036874344A5BD0D2B71AA96EED948B09990F3F',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      base: 'ibc/19A26C71FFF71D901C09803EF4036874344A5BD0D2B71AA96EED948B09990F3F',
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
            channel_id: 'channel-4174',
            base_denom: 'uion',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-129'
          }
        }]
    },
    {
      description: 'The native staking token of the Xion network.',
      denom_units: [{
          denom: 'ibc/6AB81EFD48DC233A206FAD0FB6F2691A456246C4A7F98D0CD37E2853DD0493EA',
          exponent: 0,
          aliases: ['uxion']
        }, {
          denom: 'XION',
          exponent: 6,
          aliases: ['xion']
        }],
      base: 'ibc/6AB81EFD48DC233A206FAD0FB6F2691A456246C4A7F98D0CD37E2853DD0493EA',
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
            channel_id: 'channel-215',
            base_denom: 'uxion',
            chain_name: 'xiontestnet'
          },
          chain: {
            channel_id: 'channel-324'
          }
        }]
    }
  ]
};
export default assets;
    