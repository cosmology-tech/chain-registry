import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'routerchain',
  assets: [
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/FAC1BAAA6ECDCB88408A6EEEA13AD4736DA687F85ACD22B5BBD00D36754AC0FA',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/FAC1BAAA6ECDCB88408A6EEEA13AD4736DA687F85ACD22B5BBD00D36754AC0FA',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
          theme: {
            primary_color_hex: '#760dbb'
          }
        }],
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      socials: {
        website: 'https://osmosis.zone',
        twitter: 'https://twitter.com/osmosiszone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-79180',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/C1A2C4681159048DD4A116652D8594EC5CD1C30D9FD282A9DAEAD6328CF3CDCA',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/C1A2C4681159048DD4A116652D8594EC5CD1C30D9FD282A9DAEAD6328CF3CDCA',
      name: 'Ion DAO',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg',
          theme: {
            primary_color_hex: '#4453c7'
          }
        }],
      coingecko_id: 'ion',
      keywords: ['memecoin', 'defi'],
      socials: {
        website: 'https://ion.wtf',
        twitter: 'https://twitter.com/_IONDAO'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-79180',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/FAC1BAAA6ECDCB88408A6EEEA13AD4736DA687F85ACD22B5BBD00D36754AC0FA',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/FAC1BAAA6ECDCB88408A6EEEA13AD4736DA687F85ACD22B5BBD00D36754AC0FA',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
          theme: {
            primary_color_hex: '#760dbb'
          }
        }],
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      socials: {
        website: 'https://osmosis.zone',
        twitter: 'https://twitter.com/osmosiszone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-79180',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/C1A2C4681159048DD4A116652D8594EC5CD1C30D9FD282A9DAEAD6328CF3CDCA',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/C1A2C4681159048DD4A116652D8594EC5CD1C30D9FD282A9DAEAD6328CF3CDCA',
      name: 'Ion DAO',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg',
          theme: {
            primary_color_hex: '#4453c7'
          }
        }],
      coingecko_id: 'ion',
      keywords: ['memecoin', 'defi'],
      socials: {
        website: 'https://ion.wtf',
        twitter: 'https://twitter.com/_IONDAO'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-79180',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    }
  ]
};
export default assets;
    