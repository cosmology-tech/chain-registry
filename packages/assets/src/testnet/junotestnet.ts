import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'junotestnet',
  assets: [
    {
      description: 'The native token of Nois',
      denom_units: [
        {
          denom:
            'ibc/035CF83FC7EA597082566DA414AA74E5D4EDAA07DA45DBBC5217EC161689FD9F',
          exponent: 0,
          aliases: ['unois']
        },
        {
          denom: 'nois',
          exponent: 6
        }
      ],
      base: 'ibc/035CF83FC7EA597082566DA414AA74E5D4EDAA07DA45DBBC5217EC161689FD9F',
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
            channel_id: 'channel-69',
            base_denom: 'unois',
            chain_name: 'noistestnet'
          },
          chain: {
            channel_id: 'channel-877'
          }
        }
      ]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [
        {
          denom:
            'ibc/74F6D894F138C7FEC1BD6AB01342B741F74032C89CB1CA265ED5186F8F9380E3',
          exponent: 0,
          aliases: ['uosmo']
        },
        {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/74F6D894F138C7FEC1BD6AB01342B741F74032C89CB1CA265ED5186F8F9380E3',
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
            channel_id: 'channel-5498',
            base_denom: 'uosmo',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-889'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/4579B1AC9FC88C4D466C2AAE027E6CECFD1B8F1523EAE424801A58B2CCE16CB4',
          exponent: 0,
          aliases: ['uion']
        },
        {
          denom: 'ion',
          exponent: 6
        }
      ],
      base: 'ibc/4579B1AC9FC88C4D466C2AAE027E6CECFD1B8F1523EAE424801A58B2CCE16CB4',
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
            channel_id: 'channel-5498',
            base_denom: 'uion',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-889'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/5A05C57440D7AB7AF7EB48E8605C7985C871E49BC6A024A5D10BBB44620A2210',
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
      base: 'ibc/5A05C57440D7AB7AF7EB48E8605C7985C871E49BC6A024A5D10BBB44620A2210',
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
            channel_id: 'channel-5498',
            base_denom:
              'factory/osmo1zlkzu72774ynac53necz46u4ycqtp36wedrar0/willyz',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-889'
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
            'ibc/1B533345FEF3EFCEE51439960592432CA95BA29BE1E16CD62BBE3CB861B368BB',
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
      base: 'ibc/1B533345FEF3EFCEE51439960592432CA95BA29BE1E16CD62BBE3CB861B368BB',
      name: 'tkx',
      display: 'tkx',
      symbol: 'TKX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5498',
            base_denom:
              'ibc/28EEF762052DB8C3D27A7BF625E9F86A1B3B689CC8D80C818CEDF2EB6CBA02A6',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-889'
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
            'ibc/55700E8959D29E3F9EF853319C45460E2E710B1C3F77F35A80A24A515002CFE3',
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
      base: 'ibc/55700E8959D29E3F9EF853319C45460E2E710B1C3F77F35A80A24A515002CFE3',
      name: 'USD Coin (Axelar)',
      display: 'ausdc',
      symbol: 'aUSDC.axl',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5498',
            base_denom:
              'ibc/2164BDB48DE5501430E71286448D87C6D2240EC0E078CF113CAB85E21A352BB0',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-889'
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
      description: 'The native token of Osmosis',
      denom_units: [
        {
          denom:
            'ibc/9FA811F0E9422B55C8E84F33F62B7286842B252784BC833C7F0C37104ED7DA47',
          exponent: 0,
          aliases: ['uosmo']
        },
        {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/9FA811F0E9422B55C8E84F33F62B7286842B252784BC833C7F0C37104ED7DA47',
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
            channel_id: 'channel-3316',
            base_denom: 'uosmo',
            chain_name: 'osmosistestnet4'
          },
          chain: {
            channel_id: 'channel-140'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/CBDB8D47D7013CE4D2974CDBDA8584433288BB62B81D2B5A86C0893CA259AB8A',
          exponent: 0,
          aliases: ['uion']
        },
        {
          denom: 'ion',
          exponent: 6
        }
      ],
      base: 'ibc/CBDB8D47D7013CE4D2974CDBDA8584433288BB62B81D2B5A86C0893CA259AB8A',
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
            channel_id: 'channel-3316',
            base_denom: 'uion',
            chain_name: 'osmosistestnet4'
          },
          chain: {
            channel_id: 'channel-140'
          }
        }
      ]
    }
  ]
};
export default assets;
