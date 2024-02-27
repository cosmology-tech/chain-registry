import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'neutrontestnet',
  assets: [
    {
      description: '',
      denom_units: [
        {
          denom:
            'ibc/1CA64A501480AF80A85BC663E82AA5E8C52B03417457F69A09B2A3B384AB71F8',
          exponent: 0,
          aliases: ['utia']
        },
        {
          denom: 'tia',
          exponent: 6
        }
      ],
      base: 'ibc/1CA64A501480AF80A85BC663E82AA5E8C52B03417457F69A09B2A3B384AB71F8',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.png'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'utia',
            chain_name: 'celestiatestnet3'
          },
          chain: {
            channel_id: 'channel-160'
          }
        }
      ]
    },
    {
      description: 'The native token of Nois',
      denom_units: [
        {
          denom:
            'ibc/26139E488F510BDA8DDE5614D358A38502BDA061954B8D10ADEFC4EAA58552FF',
          exponent: 0,
          aliases: ['unois']
        },
        {
          denom: 'nois',
          exponent: 6
        }
      ],
      base: 'ibc/26139E488F510BDA8DDE5614D358A38502BDA061954B8D10ADEFC4EAA58552FF',
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
            channel_id: 'channel-40',
            base_denom: 'unois',
            chain_name: 'noistestnet'
          },
          chain: {
            channel_id: 'channel-133'
          }
        }
      ]
    },
    {
      description: 'The native token of Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/C9F36A5FCF5FBD26661F9A09900301755C8B042696E4F456ACD73FAA7AFA6551',
          exponent: 0,
          aliases: ['unls']
        },
        {
          denom: 'nls',
          exponent: 6
        }
      ],
      base: 'ibc/C9F36A5FCF5FBD26661F9A09900301755C8B042696E4F456ACD73FAA7AFA6551',
      name: 'Nolus',
      display: 'nls',
      symbol: 'NLS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1990',
            base_denom: 'unls',
            chain_name: 'nolustestnet'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }
      ]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [
        {
          denom:
            'ibc/B4AD449E01839EFBA0561B18E0C2A37821DAF20EB448C7B8DAC82070A78D1B1A',
          exponent: 0,
          aliases: ['uosmo']
        },
        {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/B4AD449E01839EFBA0561B18E0C2A37821DAF20EB448C7B8DAC82070A78D1B1A',
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
            channel_id: 'channel-4172',
            base_denom: 'uosmo',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-196'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/9A4429BB4E2BBF23D7C2896EADBABEDF391B788613BBDC5265FC5452A1F56A88',
          exponent: 0,
          aliases: ['uion']
        },
        {
          denom: 'ion',
          exponent: 6
        }
      ],
      base: 'ibc/9A4429BB4E2BBF23D7C2896EADBABEDF391B788613BBDC5265FC5452A1F56A88',
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
            channel_id: 'channel-4172',
            base_denom: 'uion',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-196'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/BE9381E313C25DC9B8716E202DC0A3A27CBE8F153472A7ED710C4BBA414415BE',
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
      base: 'ibc/BE9381E313C25DC9B8716E202DC0A3A27CBE8F153472A7ED710C4BBA414415BE',
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
            channel_id: 'channel-4172',
            base_denom:
              'factory/osmo1zlkzu72774ynac53necz46u4ycqtp36wedrar0/willyz',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-196'
          }
        }
      ]
    }
  ]
};
export default assets;
