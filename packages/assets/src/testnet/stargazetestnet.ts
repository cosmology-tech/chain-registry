import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'stargazetestnet',
  assets: [
    {
      description:
        'The native staking and governance token of the testnet version of Empower.',
      denom_units: [
        {
          denom:
            'ibc/B077B9DE697E073055B12CEB81C0FBF259A2D418230FDF51EB348CDAD8D65FE8',
          exponent: 0,
          aliases: ['umpwr']
        },
        {
          denom: 'mpwr',
          exponent: 6
        }
      ],
      base: 'ibc/B077B9DE697E073055B12CEB81C0FBF259A2D418230FDF51EB348CDAD8D65FE8',
      name: 'MPWR',
      display: 'mpwr',
      symbol: 'MPWR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/empowertestnet/images/mpwr.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/empowertestnet/images/mpwr.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'umpwr',
            chain_name: 'empowertestnet'
          },
          chain: {
            channel_id: 'channel-459'
          }
        }
      ]
    },
    {
      description: 'The native token of Nois',
      denom_units: [
        {
          denom:
            'ibc/ACCAF790E082E772691A20B0208FB972AD3A01C2DE0D7E8C479CCABF6C9F39B1',
          exponent: 0,
          aliases: ['unois']
        },
        {
          denom: 'nois',
          exponent: 6
        }
      ],
      base: 'ibc/ACCAF790E082E772691A20B0208FB972AD3A01C2DE0D7E8C479CCABF6C9F39B1',
      name: 'Nois',
      display: 'nois',
      symbol: 'NOIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
      },
      keywords: ['nois', 'randomness', 'drand', 'wasm'],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-48',
            base_denom: 'unois',
            chain_name: 'noistestnet'
          },
          chain: {
            channel_id: 'channel-485'
          }
        }
      ]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [
        {
          denom:
            'ibc/595E931CAD432E2AE4EBDF3C8B63150265B752C6E8410B64ABBA8875F3E1CFF3',
          exponent: 0,
          aliases: ['uosmo']
        },
        {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/595E931CAD432E2AE4EBDF3C8B63150265B752C6E8410B64ABBA8875F3E1CFF3',
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
            channel_id: 'channel-4175',
            base_denom: 'uosmo',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-638'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/6956448FB6415647C7065B983EDF76018FADDC95988F1BCC1C9B43C2354CF9BC',
          exponent: 0,
          aliases: ['uion']
        },
        {
          denom: 'ion',
          exponent: 6
        }
      ],
      base: 'ibc/6956448FB6415647C7065B983EDF76018FADDC95988F1BCC1C9B43C2354CF9BC',
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
            channel_id: 'channel-4175',
            base_denom: 'uion',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-638'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/684DB47C841165800F9D49F73E089C49BED9A9AE6E97C5BB70F5B1B7CD94E12D',
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
      base: 'ibc/684DB47C841165800F9D49F73E089C49BED9A9AE6E97C5BB70F5B1B7CD94E12D',
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
            channel_id: 'channel-4175',
            base_denom:
              'factory/osmo1zlkzu72774ynac53necz46u4ycqtp36wedrar0/willyz',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-638'
          }
        }
      ]
    }
  ]
};
export default assets;
