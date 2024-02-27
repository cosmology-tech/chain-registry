import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'quicksilvertestnet',
  assets: [
    {
      description: 'The native token of Osmosis',
      denom_units: [
        {
          denom:
            'ibc/49B196A3117545AEEC9B11A8D006A36CC439DD4B79A4C4346A895E61C46FA674',
          exponent: 0,
          aliases: ['uosmo']
        },
        {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/49B196A3117545AEEC9B11A8D006A36CC439DD4B79A4C4346A895E61C46FA674',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'uosmo',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-20'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/99FBFDE656012D44445023B9868EE43AEC6279A610E3D327AB24336FE2956B31',
          exponent: 0,
          aliases: ['uion']
        },
        {
          denom: 'ion',
          exponent: 6
        }
      ],
      base: 'ibc/99FBFDE656012D44445023B9868EE43AEC6279A610E3D327AB24336FE2956B31',
      name: 'Ion',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      coingecko_id: 'ion',
      keywords: ['memecoin'],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'uion',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-20'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/EB72FBC6930F8A7616520F6FE2A5509C7F8BBC1A9FB458CE7439F8DF3D855AA8',
          exponent: 0,
          aliases: [
            'factory/osmo1zlkzu72774ynac53necz46u4ycqtp36wedrar0/willyz'
          ]
        },
        {
          denom: 'willyz',
          exponent: 6
        }
      ],
      base: 'ibc/EB72FBC6930F8A7616520F6FE2A5509C7F8BBC1A9FB458CE7439F8DF3D855AA8',
      name: 'Willyz',
      display: 'willyz',
      symbol: 'WILLYZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.svg'
      },
      keywords: ['memecoin'],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom:
              'factory/osmo1zlkzu72774ynac53necz46u4ycqtp36wedrar0/willyz',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-20'
          }
        }
      ]
    }
  ]
};
export default assets;
