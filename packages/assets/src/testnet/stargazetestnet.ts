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
    },
    {
      description:
        'The native EVM, governance and staking token of the Titan Chain',
      denom_units: [
        {
          denom:
            'ibc/46E49DC41B6DBA632F5F8A416AFD2EB80152500E676F28EBC90D3A9F98CFE1A7',
          exponent: 0,
          aliases: [
            'ibc/28EEF762052DB8C3D27A7BF625E9F86A1B3B689CC8D80C818CEDF2EB6CBA02A6'
          ]
        },
        {
          denom: 'utkx',
          exponent: 12,
          aliases: ['microtkx']
        },
        {
          denom: 'mtkx',
          exponent: 15,
          aliases: ['millitkx']
        },
        {
          denom: 'tkx',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/46E49DC41B6DBA632F5F8A416AFD2EB80152500E676F28EBC90D3A9F98CFE1A7',
      name: 'tkx',
      display: 'tkx',
      symbol: 'TKX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4175',
            base_denom:
              'ibc/28EEF762052DB8C3D27A7BF625E9F86A1B3B689CC8D80C818CEDF2EB6CBA02A6',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-638'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/tkx.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/tkx.png'
        }
      ]
    },
    {
      description: "Circle's stablecoin on Axelar",
      denom_units: [
        {
          denom:
            'ibc/AFDDC9E2E88E738F90E539D185B9711C7C52AF7AB527AEBFBB2E3038E26D6066',
          exponent: 0,
          aliases: [
            'ibc/2164BDB48DE5501430E71286448D87C6D2240EC0E078CF113CAB85E21A352BB0'
          ]
        },
        {
          denom: 'ausdc',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/AFDDC9E2E88E738F90E539D185B9711C7C52AF7AB527AEBFBB2E3038E26D6066',
      name: 'USD Coin (Axelar)',
      display: 'ausdc',
      symbol: 'aUSDC.axl',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4175',
            base_denom:
              'ibc/2164BDB48DE5501430E71286448D87C6D2240EC0E078CF113CAB85E21A352BB0',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-638'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereumtestnet',
            base_denom: '0x254d06f33bDc5b8ee05b2ea472107E300226659A'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      }
    },
    {
      description: 'The native token of the Titan network.',
      denom_units: [
        {
          denom:
            'ibc/9EB62C79953545C992B245713E325596D9B821539417F5BF245DE5C84C538EAE',
          exponent: 0,
          aliases: ['atkx']
        },
        {
          denom: 'utkx',
          exponent: 12,
          aliases: ['microtkx']
        },
        {
          denom: 'mtkx',
          exponent: 15,
          aliases: ['millitkx']
        },
        {
          denom: 'tkx',
          exponent: 18,
          aliases: []
        }
      ],
      base: 'ibc/9EB62C79953545C992B245713E325596D9B821539417F5BF245DE5C84C538EAE',
      display: 'tkx',
      name: 'titan tkx',
      symbol: 'TKX',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/tkx.png'
        }
      ],
      keywords: ['staking'],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'atkx',
            chain_name: 'titantestnet'
          },
          chain: {
            channel_id: 'channel-807'
          }
        }
      ]
    }
  ]
};
export default assets;
