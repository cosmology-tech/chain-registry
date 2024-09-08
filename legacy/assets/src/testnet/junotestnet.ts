import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'junotestnet',
  assets: [
    {
      description: 'The native token of Nois',
      denom_units: [{
          denom: 'ibc/035CF83FC7EA597082566DA414AA74E5D4EDAA07DA45DBBC5217EC161689FD9F',
          exponent: 0,
          aliases: ['unois']
        }, {
          denom: 'nois',
          exponent: 6
        }],
      base: 'ibc/035CF83FC7EA597082566DA414AA74E5D4EDAA07DA45DBBC5217EC161689FD9F',
      name: 'Nois',
      display: 'nois',
      symbol: 'NOIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
      },
      keywords: [
        'nois',
        'randomness',
        'drand',
        'wasm'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-69',
            base_denom: 'unois',
            chain_name: 'noistestnet'
          },
          chain: {
            channel_id: 'channel-877'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/74F6D894F138C7FEC1BD6AB01342B741F74032C89CB1CA265ED5186F8F9380E3',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/74F6D894F138C7FEC1BD6AB01342B741F74032C89CB1CA265ED5186F8F9380E3',
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
            channel_id: 'channel-5498',
            base_denom: 'uosmo',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-889'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/4579B1AC9FC88C4D466C2AAE027E6CECFD1B8F1523EAE424801A58B2CCE16CB4',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/4579B1AC9FC88C4D466C2AAE027E6CECFD1B8F1523EAE424801A58B2CCE16CB4',
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
            channel_id: 'channel-5498',
            base_denom: 'uion',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-889'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/9FA811F0E9422B55C8E84F33F62B7286842B252784BC833C7F0C37104ED7DA47',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }],
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
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3316',
            base_denom: 'uosmo',
            chain_name: 'osmosistestnet4'
          },
          chain: {
            channel_id: 'channel-140'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/CBDB8D47D7013CE4D2974CDBDA8584433288BB62B81D2B5A86C0893CA259AB8A',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
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
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3316',
            base_denom: 'uion',
            chain_name: 'osmosistestnet4'
          },
          chain: {
            channel_id: 'channel-140'
          }
        }]
    },
    {
      description: 'The native token of Symphony',
      denom_units: [{
          denom: 'ibc/653F7299E394185E3529468C5A4B5061C93E15BFD3734A24471DD483FEEF47A0',
          exponent: 0,
          aliases: ['note']
        }, {
          denom: 'mld',
          exponent: 6,
          aliases: ['melody']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/653F7299E394185E3529468C5A4B5061C93E15BFD3734A24471DD483FEEF47A0',
      name: 'Melody',
      display: 'mld',
      symbol: 'MLD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/mld.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/mld.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'note',
            chain_name: 'symphonytestnet'
          },
          chain: {
            channel_id: 'channel-942'
          }
        }]
    },
    {
      description: 'Harmonized USD',
      denom_units: [{
          denom: 'ibc/16F80AB91B92D375037AEF462B3920F45F85C15388FCAD92454BD29CB9C0CA5C',
          exponent: 0,
          aliases: ['uusd']
        }, {
          denom: 'husd',
          exponent: 6,
          aliases: ['harmony USD']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/16F80AB91B92D375037AEF462B3920F45F85C15388FCAD92454BD29CB9C0CA5C',
      name: 'Harmony USD',
      display: 'husd',
      symbol: 'HUSD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/husd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/husd.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'uusd',
            chain_name: 'symphonytestnet'
          },
          chain: {
            channel_id: 'channel-942'
          }
        }]
    },
    {
      description: 'Harmonized HKD',
      denom_units: [{
          denom: 'ibc/3B32F04934E6BB4CF4832990FE3FD05BF2E96BB0880D8E38327C3CACE205FE8E',
          exponent: 0,
          aliases: ['ukhd']
        }, {
          denom: 'hkhd',
          exponent: 6,
          aliases: ['harmony HKD']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/3B32F04934E6BB4CF4832990FE3FD05BF2E96BB0880D8E38327C3CACE205FE8E',
      name: 'Harmony HKD',
      display: 'hkhd',
      symbol: 'HKHD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/hhkd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/hhkd.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'ukhd',
            chain_name: 'symphonytestnet'
          },
          chain: {
            channel_id: 'channel-942'
          }
        }]
    },
    {
      description: 'Harmonized VND',
      denom_units: [{
          denom: 'ibc/4B227C455471136CD8CDA9C8512C139A505BE63F6FAEE72B6E839C0BB5BF5DC5',
          exponent: 0,
          aliases: ['uvnd']
        }, {
          denom: 'hvnd',
          exponent: 6,
          aliases: ['harmony VND']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/4B227C455471136CD8CDA9C8512C139A505BE63F6FAEE72B6E839C0BB5BF5DC5',
      name: 'Harmony VND',
      display: 'hvnd',
      symbol: 'HVND',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/hvnd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/hvnd.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'uvnd',
            chain_name: 'symphonytestnet'
          },
          chain: {
            channel_id: 'channel-942'
          }
        }]
    },
    {
      description: 'The native token of Nois',
      denom_units: [{
          denom: 'ibc/035CF83FC7EA597082566DA414AA74E5D4EDAA07DA45DBBC5217EC161689FD9F',
          exponent: 0,
          aliases: ['unois']
        }, {
          denom: 'nois',
          exponent: 6
        }],
      base: 'ibc/035CF83FC7EA597082566DA414AA74E5D4EDAA07DA45DBBC5217EC161689FD9F',
      name: 'Nois',
      display: 'nois',
      symbol: 'NOIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
      },
      keywords: [
        'nois',
        'randomness',
        'drand',
        'wasm'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-69',
            base_denom: 'unois',
            chain_name: 'noistestnet'
          },
          chain: {
            channel_id: 'channel-877'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/74F6D894F138C7FEC1BD6AB01342B741F74032C89CB1CA265ED5186F8F9380E3',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/74F6D894F138C7FEC1BD6AB01342B741F74032C89CB1CA265ED5186F8F9380E3',
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
            channel_id: 'channel-5498',
            base_denom: 'uosmo',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-889'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/4579B1AC9FC88C4D466C2AAE027E6CECFD1B8F1523EAE424801A58B2CCE16CB4',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/4579B1AC9FC88C4D466C2AAE027E6CECFD1B8F1523EAE424801A58B2CCE16CB4',
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
            channel_id: 'channel-5498',
            base_denom: 'uion',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-889'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/9FA811F0E9422B55C8E84F33F62B7286842B252784BC833C7F0C37104ED7DA47',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }],
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
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3316',
            base_denom: 'uosmo',
            chain_name: 'osmosistestnet4'
          },
          chain: {
            channel_id: 'channel-140'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/CBDB8D47D7013CE4D2974CDBDA8584433288BB62B81D2B5A86C0893CA259AB8A',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
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
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3316',
            base_denom: 'uion',
            chain_name: 'osmosistestnet4'
          },
          chain: {
            channel_id: 'channel-140'
          }
        }]
    },
    {
      description: 'The native token of Symphony',
      denom_units: [{
          denom: 'ibc/653F7299E394185E3529468C5A4B5061C93E15BFD3734A24471DD483FEEF47A0',
          exponent: 0,
          aliases: ['note']
        }, {
          denom: 'mld',
          exponent: 6,
          aliases: ['melody']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/653F7299E394185E3529468C5A4B5061C93E15BFD3734A24471DD483FEEF47A0',
      name: 'Melody',
      display: 'mld',
      symbol: 'MLD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/mld.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/mld.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'note',
            chain_name: 'symphonytestnet'
          },
          chain: {
            channel_id: 'channel-942'
          }
        }]
    },
    {
      description: 'Harmonized USD',
      denom_units: [{
          denom: 'ibc/16F80AB91B92D375037AEF462B3920F45F85C15388FCAD92454BD29CB9C0CA5C',
          exponent: 0,
          aliases: ['uusd']
        }, {
          denom: 'husd',
          exponent: 6,
          aliases: ['harmony USD']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/16F80AB91B92D375037AEF462B3920F45F85C15388FCAD92454BD29CB9C0CA5C',
      name: 'Harmony USD',
      display: 'husd',
      symbol: 'HUSD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/husd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/husd.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'uusd',
            chain_name: 'symphonytestnet'
          },
          chain: {
            channel_id: 'channel-942'
          }
        }]
    },
    {
      description: 'Harmonized HKD',
      denom_units: [{
          denom: 'ibc/3B32F04934E6BB4CF4832990FE3FD05BF2E96BB0880D8E38327C3CACE205FE8E',
          exponent: 0,
          aliases: ['ukhd']
        }, {
          denom: 'hkhd',
          exponent: 6,
          aliases: ['harmony HKD']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/3B32F04934E6BB4CF4832990FE3FD05BF2E96BB0880D8E38327C3CACE205FE8E',
      name: 'Harmony HKD',
      display: 'hkhd',
      symbol: 'HKHD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/hhkd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/hhkd.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'ukhd',
            chain_name: 'symphonytestnet'
          },
          chain: {
            channel_id: 'channel-942'
          }
        }]
    },
    {
      description: 'Harmonized VND',
      denom_units: [{
          denom: 'ibc/4B227C455471136CD8CDA9C8512C139A505BE63F6FAEE72B6E839C0BB5BF5DC5',
          exponent: 0,
          aliases: ['uvnd']
        }, {
          denom: 'hvnd',
          exponent: 6,
          aliases: ['harmony VND']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/4B227C455471136CD8CDA9C8512C139A505BE63F6FAEE72B6E839C0BB5BF5DC5',
      name: 'Harmony VND',
      display: 'hvnd',
      symbol: 'HVND',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/hvnd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/hvnd.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'uvnd',
            chain_name: 'symphonytestnet'
          },
          chain: {
            channel_id: 'channel-942'
          }
        }]
    }
  ]
};
export default assets;
    