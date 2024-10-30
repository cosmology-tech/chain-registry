import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'quicksilvertestnet',
  assets: [
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/49B196A3117545AEEC9B11A8D006A36CC439DD4B79A4C4346A895E61C46FA674',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/49B196A3117545AEEC9B11A8D006A36CC439DD4B79A4C4346A895E61C46FA674',
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
            channel_id: 'channel-13',
            base_denom: 'uosmo',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-20'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/99FBFDE656012D44445023B9868EE43AEC6279A610E3D327AB24336FE2956B31',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/99FBFDE656012D44445023B9868EE43AEC6279A610E3D327AB24336FE2956B31',
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
            channel_id: 'channel-13',
            base_denom: 'uion',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-20'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/49B196A3117545AEEC9B11A8D006A36CC439DD4B79A4C4346A895E61C46FA674',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/49B196A3117545AEEC9B11A8D006A36CC439DD4B79A4C4346A895E61C46FA674',
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
            channel_id: 'channel-13',
            base_denom: 'uosmo',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-20'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/99FBFDE656012D44445023B9868EE43AEC6279A610E3D327AB24336FE2956B31',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/99FBFDE656012D44445023B9868EE43AEC6279A610E3D327AB24336FE2956B31',
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
            channel_id: 'channel-13',
            base_denom: 'uion',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-20'
          }
        }]
    },
    {
      description: 'The native token of Prysm',
      denom_units: [{
          denom: 'ibc/740ECD9448A8468DAA0318EC61B69D72B6DF9C99907039519560813871C55246',
          exponent: 0,
          aliases: ['uprysm']
        }, {
          denom: 'prysm',
          exponent: 6
        }],
      base: 'ibc/740ECD9448A8468DAA0318EC61B69D72B6DF9C99907039519560813871C55246',
      display: 'prysm',
      name: 'Prysm',
      symbol: 'PRYSM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/prysmdevnet/images/prysm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/prysmdevnet/images/prysm.svg',
          theme: {
            circle: true,
            primary_color_hex: '#cf654f'
          }
        }],
      socials: {
        website: 'https://www.prysm.network/',
        twitter: 'https://twitter.com/PrysmNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'uprysm',
            chain_name: 'prysmdevnet'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'The native token of Prysm',
      denom_units: [{
          denom: 'ibc/740ECD9448A8468DAA0318EC61B69D72B6DF9C99907039519560813871C55246',
          exponent: 0,
          aliases: ['uprysm']
        }, {
          denom: 'prysm',
          exponent: 6
        }],
      base: 'ibc/740ECD9448A8468DAA0318EC61B69D72B6DF9C99907039519560813871C55246',
      display: 'prysm',
      name: 'Prysm',
      symbol: 'PRYSM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/prysmdevnet/images/prysm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/prysmdevnet/images/prysm.svg',
          theme: {
            circle: true,
            primary_color_hex: '#cf654f'
          }
        }],
      socials: {
        website: 'https://www.prysm.network/',
        twitter: 'https://twitter.com/PrysmNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'uprysm',
            chain_name: 'prysmdevnet'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    }
  ]
};
export default assets;
    