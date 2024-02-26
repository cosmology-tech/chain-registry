import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'noistestnet',
  assets: [
    {
      description:
        'The INJ token is the native governance token for the Injective chain.',
      denom_units: [
        {
          denom:
            'ibc/EF3A8A0642F865E753994B3CE35D6DBD2DA2E81EF83EDCBD197DDB90DD09E1DD',
          exponent: 0,
          aliases: ['inj']
        },
        {
          denom: 'INJ',
          exponent: 18
        }
      ],
      base: 'ibc/EF3A8A0642F865E753994B3CE35D6DBD2DA2E81EF83EDCBD197DDB90DD09E1DD',
      name: 'Injective',
      display: 'INJ',
      symbol: 'INJ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
      },
      coingecko_id: 'injective-protocol',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-74',
            base_denom: 'inj',
            chain_name: 'injectivetestnet'
          },
          chain: {
            channel_id: 'channel-33'
          }
        }
      ]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [
        {
          denom:
            'ibc/60997EA94A94EAAEB94A47EA84DA3E3881DDC0D362151D4ABDF21105BBDCED02',
          exponent: 0,
          aliases: ['ujunox']
        },
        {
          denom: 'junox',
          exponent: 6
        }
      ],
      base: 'ibc/60997EA94A94EAAEB94A47EA84DA3E3881DDC0D362151D4ABDF21105BBDCED02',
      name: 'Juno Testnet',
      display: 'junox',
      symbol: 'JUNOX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.svg'
      },
      coingecko_id: 'juno-network',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-877',
            base_denom: 'ujunox',
            chain_name: 'junotestnet'
          },
          chain: {
            channel_id: 'channel-69'
          }
        }
      ]
    },
    {
      description: 'The native token of NEXX GEN AI',
      denom_units: [
        {
          denom:
            'ibc/650277928BAB6A8A34AEF60BA1DB1EA866221EE1BD0F5B885350D43C0C08C854',
          exponent: 0,
          aliases: ['factory/juno12klaltyqvg2j6v034jwdxrk5n4242ttse4sdpt/NEXX']
        },
        {
          denom: 'nexx',
          exponent: 6
        }
      ],
      base: 'ibc/650277928BAB6A8A34AEF60BA1DB1EA866221EE1BD0F5B885350D43C0C08C854',
      name: 'NEXX GEN AI',
      display: 'nexx',
      symbol: 'NEXX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/nexx.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/nexx.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-877',
            base_denom:
              'factory/juno12klaltyqvg2j6v034jwdxrk5n4242ttse4sdpt/NEXX',
            chain_name: 'junotestnet'
          },
          chain: {
            channel_id: 'channel-69'
          }
        }
      ]
    },
    {
      description: 'The native token of Neutron chain',
      denom_units: [
        {
          denom:
            'ibc/873C81D14607BEF92121A341BB74A3B13CB1AD4F925A787BA6EC4B54E7C145DA',
          exponent: 0,
          aliases: ['untrn']
        },
        {
          denom: 'ntrn',
          exponent: 6
        }
      ],
      base: 'ibc/873C81D14607BEF92121A341BB74A3B13CB1AD4F925A787BA6EC4B54E7C145DA',
      name: 'Neutron Testnet',
      display: 'ntrn',
      symbol: 'NTRN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-133',
            base_denom: 'untrn',
            chain_name: 'neutrontestnet'
          },
          chain: {
            channel_id: 'channel-40'
          }
        }
      ]
    },
    {
      description: 'The native token of Stargaze',
      denom_units: [
        {
          denom:
            'ibc/E2CA6A70043DE6672D33475A3D806D289D07EA556A12BBB53602639233A2D5DF',
          exponent: 0,
          aliases: ['ustars']
        },
        {
          denom: 'stars',
          exponent: 6
        }
      ],
      base: 'ibc/E2CA6A70043DE6672D33475A3D806D289D07EA556A12BBB53602639233A2D5DF',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png'
      },
      coingecko_id: 'stargaze',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-485',
            base_denom: 'ustars',
            chain_name: 'stargazetestnet'
          },
          chain: {
            channel_id: 'channel-48'
          }
        }
      ]
    }
  ]
};
export default assets;
