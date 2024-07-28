import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'beezee',
  assets: [
    {
      description: 'BeeZee native blockchain',
      denom_units: [{
          denom: 'ubze',
          exponent: 0
        }, {
          denom: 'bze',
          exponent: 6
        }],
      base: 'ubze',
      name: 'BeeZee',
      display: 'bze',
      symbol: 'BZE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg'
      },
      coingecko_id: 'bzedge',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg',
          theme: {
            primary_color_hex: '#079fd7'
          }
        }]
    },
    {
      description: 'Vidulum App Token',
      denom_units: [{
          denom: 'factory/bze13gzq40che93tgfm9kzmkpjamah5nj0j73pyhqk/uvdl',
          exponent: 0
        }, {
          denom: 'vdl',
          exponent: 6
        }],
      base: 'factory/bze13gzq40che93tgfm9kzmkpjamah5nj0j73pyhqk/uvdl',
      name: 'Vidulum',
      display: 'vdl',
      symbol: 'VDL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/vdl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/vdl.svg'
      },
      coingecko_id: 'vidulum',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/vdl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/vdl.svg',
          theme: {
            primary_color_hex: '#3454bc'
          }
        }]
    },
    {
      description: 'OSMO from Osmosis',
      denom_units: [{
          denom: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom: 'uosmo',
            channel_id: 'channel-340'
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/uosmo'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'osmosis',
            base_denom: 'uosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
          theme: {
            primary_color_hex: '#760dbb'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      }
    },
    {
      description: 'Crypto2Mars Community Token',
      denom_units: [{
          denom: 'factory/bze15pqjgk4la0mfphwddce00d05n3th3u66n3ptcv/2MARS',
          exponent: 0
        }, {
          denom: 'C2M',
          exponent: 6
        }],
      base: 'factory/bze15pqjgk4la0mfphwddce00d05n3th3u66n3ptcv/2MARS',
      name: 'Crypto2Mars',
      display: 'C2M',
      symbol: 'C2M',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/c2m.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/c2m.png',
          theme: {
            primary_color_hex: '#FEFEFE'
          }
        }]
    },
    {
      description: 'The native token of Archway network',
      denom_units: [
        {
          denom: 'ibc/C00D101A3572A5374E23F11944463D1325319E255D7C824B33AF2F927F532348',
          exponent: 0,
          aliases: ['aarch']
        },
        {
          denom: 'uarch',
          exponent: 12
        },
        {
          denom: 'arch',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C00D101A3572A5374E23F11944463D1325319E255D7C824B33AF2F927F532348',
      name: 'Archway',
      display: 'arch',
      symbol: 'ARCH',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'archway',
            base_denom: 'aarch',
            channel_id: 'channel-147'
          },
          chain: {
            channel_id: 'channel-2',
            path: 'transfer/channel-2/aarch'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'archway',
            base_denom: 'aarch'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg',
          theme: {
            primary_color_hex: '#fc4c04'
          }
        }]
    }
  ]
};
export default info;