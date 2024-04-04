import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'composablepolkadot',
  assets: [
    {
      description: 'The native staking and governance token of Picasso.',
      denom_units: [
        {
          denom:
            'ibc/E2DB0AB92EDF979674C7835408C801FEB11D28B4EC05C3A2EE1343176E84F681',
          exponent: 0,
          aliases: ['ppica']
        },
        {
          denom: 'pica',
          exponent: 12
        }
      ],
      type_asset: 'substrate',
      base: 'ibc/E2DB0AB92EDF979674C7835408C801FEB11D28B4EC05C3A2EE1343176E84F681',
      name: 'Pica',
      display: 'pica',
      symbol: 'PICA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'ppica',
            chain_name: 'picasso'
          },
          chain: {
            channel_id: 'channel-15'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/F1D881DE7AEE9E1D53CE632121EA93071D53726E8D9399C61BF6546AC875CB76',
          exponent: 0,
          aliases: ['4']
        },
        {
          denom: 'ksm',
          exponent: 12
        }
      ],
      type_asset: 'substrate',
      base: 'ibc/F1D881DE7AEE9E1D53CE632121EA93071D53726E8D9399C61BF6546AC875CB76',
      name: 'Kusama',
      display: 'ksm',
      symbol: 'KSM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: '4',
            chain_name: 'picasso'
          },
          chain: {
            channel_id: 'channel-15'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'kusama',
            base_denom: 'Planck'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/8AED00BB5D367661FDE01A0BF079A8249D152850776ACB46C62C1EA7A38F9852',
          exponent: 0,
          aliases: ['79228162514264337593543950342']
        },
        {
          denom: 'dot',
          exponent: 10
        }
      ],
      type_asset: 'substrate',
      base: 'ibc/8AED00BB5D367661FDE01A0BF079A8249D152850776ACB46C62C1EA7A38F9852',
      name: 'Polkadot',
      display: 'dot',
      symbol: 'DOT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: '79228162514264337593543950342',
            chain_name: 'picasso'
          },
          chain: {
            channel_id: 'channel-15'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'composablepolkadot',
            base_denom: '79228162514264337593543950342'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
      }
    },
    {
      denom_units: [
        {
          denom:
            'ibc/6EDE074B2DFE8A7F84A3745C93CF918526B98214C3414AE397BF30925E2EDB02',
          exponent: 0,
          aliases: ['130']
        },
        {
          denom: 'usdt',
          exponent: 6
        }
      ],
      type_asset: 'substrate',
      base: 'ibc/6EDE074B2DFE8A7F84A3745C93CF918526B98214C3414AE397BF30925E2EDB02',
      name: 'Statemine',
      display: 'usdt',
      symbol: 'USDT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: '130',
            chain_name: 'picasso'
          },
          chain: {
            channel_id: 'channel-15'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'statemine',
            base_denom: '130'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/496422C50CB1E12B1618C3CA706B5FF06821ACEB22DB9E834D9F55F37A644B8C',
          exponent: 0,
          aliases: ['2125']
        },
        {
          denom: 'TNKR',
          exponent: 12
        }
      ],
      base: 'ibc/496422C50CB1E12B1618C3CA706B5FF06821ACEB22DB9E834D9F55F37A644B8C',
      name: 'Tinkernet',
      display: 'TNKR',
      symbol: 'TNKR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: '2125',
            chain_name: 'picasso'
          },
          chain: {
            channel_id: 'channel-15'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'tinkernet',
            base_denom: 'Planck'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tinkernet/images/tnkr.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tinkernet/images/tnkr.svg'
      }
    }
  ]
};
export default assets;
