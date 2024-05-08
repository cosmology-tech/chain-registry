import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'arkh',
  assets: [
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/6AE2756AA7EAA8FA06E11472EA05CA681BD8D3FBC1AAA9F06C79D1EC1C90DC9B',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/6AE2756AA7EAA8FA06E11472EA05CA681BD8D3FBC1AAA9F06C79D1EC1C90DC9B',
      name: 'Osmosis',
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
      socials: {
        website: 'https://osmosis.zone',
        twitter: 'https://twitter.com/osmosiszone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/FBA36393A0FF23EAAD5B1A99E06F66128F20E7A78B3FD58632F0FC247167DA17',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/FBA36393A0FF23EAAD5B1A99E06F66128F20E7A78B3FD58632F0FC247167DA17',
      name: 'Ion DAO',
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
      keywords: ['memecoin', 'defi'],
      socials: {
        website: 'https://ion.wtf',
        twitter: 'https://twitter.com/_IONDAO'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/6AE2756AA7EAA8FA06E11472EA05CA681BD8D3FBC1AAA9F06C79D1EC1C90DC9B',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/6AE2756AA7EAA8FA06E11472EA05CA681BD8D3FBC1AAA9F06C79D1EC1C90DC9B',
      name: 'Osmosis',
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
      socials: {
        website: 'https://osmosis.zone',
        twitter: 'https://twitter.com/osmosiszone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/FBA36393A0FF23EAAD5B1A99E06F66128F20E7A78B3FD58632F0FC247167DA17',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/FBA36393A0FF23EAAD5B1A99E06F66128F20E7A78B3FD58632F0FC247167DA17',
      name: 'Ion DAO',
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
      keywords: ['memecoin', 'defi'],
      socials: {
        website: 'https://ion.wtf',
        twitter: 'https://twitter.com/_IONDAO'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-648',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }]
    }
  ]
};
export default assets;
    