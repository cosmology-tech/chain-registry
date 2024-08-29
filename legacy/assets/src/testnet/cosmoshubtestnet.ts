import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'cosmoshubtestnet',
  assets: [
    {
      denom_units: [{
          denom: 'ibc/0171A118CC803DBD96B62593C957A8D663961DFE8E9E15AD47C252F6BB3CF308',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      base: 'ibc/0171A118CC803DBD96B62593C957A8D663961DFE8E9E15AD47C252F6BB3CF308',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'utia',
            chain_name: 'celestiatestnet3'
          },
          chain: {
            channel_id: 'channel-3152'
          }
        }]
    },
    {
      description: 'The native token of Elys Network',
      denom_units: [
        {
          denom: 'ibc/D6D41D0C0E61B1F5AED741F70F16F7A4F1C14DEE7F889D561CDBF4CF2BB99C8D',
          exponent: 0,
          aliases: ['uelys']
        },
        {
          denom: 'melys',
          exponent: 3,
          aliases: ['millielys']
        },
        {
          denom: 'elys',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/D6D41D0C0E61B1F5AED741F70F16F7A4F1C14DEE7F889D561CDBF4CF2BB99C8D',
      name: 'Elys Network',
      display: 'elys',
      symbol: 'ELYS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/elys.png'
      },
      coingecko_id: 'elys',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/elys.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'uelys',
            chain_name: 'elystestnet'
          },
          chain: {
            channel_id: 'channel-3302'
          }
        }]
    },
    {
      description: 'Eden token definition',
      denom_units: [
        {
          denom: 'ibc/D62F9AC7E2AB0D54B4C5A45139673954CCAF1FA217F820D214CC22E85A6761B7',
          exponent: 0,
          aliases: ['ueden']
        },
        {
          denom: 'meden',
          exponent: 3,
          aliases: ['millieden']
        },
        {
          denom: 'eden',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/D62F9AC7E2AB0D54B4C5A45139673954CCAF1FA217F820D214CC22E85A6761B7',
      name: 'Eden',
      display: 'eden',
      symbol: 'EDEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/eden.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/eden.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'ueden',
            chain_name: 'elystestnet'
          },
          chain: {
            channel_id: 'channel-3302'
          }
        }]
    },
    {
      description: 'The native token of Symphony',
      denom_units: [{
          denom: 'ibc/29F9192793460930B74C23C049BAB4EA0F0F7CFFAAB68AE049716078D31A1022',
          exponent: 0,
          aliases: ['note']
        }, {
          denom: 'mld',
          exponent: 6,
          aliases: ['melody']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/29F9192793460930B74C23C049BAB4EA0F0F7CFFAAB68AE049716078D31A1022',
      name: 'Melody',
      display: 'mld',
      symbol: 'MLD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/coin_icon.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/coin_icon.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'note',
            chain_name: 'symphonytestnet'
          },
          chain: {
            channel_id: 'channel-4300'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/0171A118CC803DBD96B62593C957A8D663961DFE8E9E15AD47C252F6BB3CF308',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      base: 'ibc/0171A118CC803DBD96B62593C957A8D663961DFE8E9E15AD47C252F6BB3CF308',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'utia',
            chain_name: 'celestiatestnet3'
          },
          chain: {
            channel_id: 'channel-3152'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the testnet version of Empower.',
      denom_units: [{
          denom: 'ibc/C3D75AA5082B8EEC8E6DE916F0CA9C1C71978A6BB0FA5AAE3E5ABE81BAF57B42',
          exponent: 0,
          aliases: ['umpwr']
        }, {
          denom: 'mpwr',
          exponent: 6
        }],
      base: 'ibc/C3D75AA5082B8EEC8E6DE916F0CA9C1C71978A6BB0FA5AAE3E5ABE81BAF57B42',
      name: 'MPWR',
      display: 'mpwr',
      symbol: 'MPWR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/empowertestnet/images/mpwr.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/empowertestnet/images/mpwr.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'umpwr',
            chain_name: 'empowertestnet'
          },
          chain: {
            channel_id: 'channel-2765'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Harpoon testnet version of Kujira.',
      denom_units: [{
          denom: 'ibc/E1D1BDB7784D5784980CAA320583F8D3DDBA182E01F082B0CE9E761C53C7F59B',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/E1D1BDB7784D5784980CAA320583F8D3DDBA182E01F082B0CE9E761C53C7F59B',
      name: 'Kuji',
      display: 'kuji',
      symbol: 'KUJI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kujiratestnet/images/kuji.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kujiratestnet/images/kuji.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-51',
            base_denom: 'ukuji',
            chain_name: 'kujiratestnet'
          },
          chain: {
            channel_id: 'channel-4004'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/EFC645B78840831D64CCA4674907E0A3C13258FFDF51071D0E79F12206A673F8',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/EFC645B78840831D64CCA4674907E0A3C13258FFDF51071D0E79F12206A673F8',
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
            channel_id: 'channel-4156',
            base_denom: 'uosmo',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-3306'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/DD090F9A627BB6E8DA3A2A00139F72672F1A5047D993A5CE289298C16ABD9BF5',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/DD090F9A627BB6E8DA3A2A00139F72672F1A5047D993A5CE289298C16ABD9BF5',
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
            channel_id: 'channel-4156',
            base_denom: 'uion',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-3306'
          }
        }]
    },
    {
      description: 'The XPRT token is primarily a governance token for the Persistence chain.',
      denom_units: [{
          denom: 'ibc/04623B7DE84BF8D4B37C1682401CA3B0B5DEE14881FB716A512CCC68F0ED4989',
          exponent: 0,
          aliases: ['uxprt']
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      base: 'ibc/04623B7DE84BF8D4B37C1682401CA3B0B5DEE14881FB716A512CCC68F0ED4989',
      name: 'Persistence',
      display: 'xprt',
      symbol: 'XPRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
      },
      coingecko_id: 'persistence',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uxprt',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-2777'
          }
        }]
    },
    {
      description: 'PSTAKE Liquid-Staked ATOM',
      denom_units: [{
          denom: 'ibc/BBFA165987773A8581F02DC0DBE362D3E373CCEFD6E7D151BD77FBBAB5D4886B',
          exponent: 0,
          aliases: ['stk/uatom']
        }, {
          denom: 'stkatom',
          exponent: 6,
          aliases: ['stk/atom']
        }],
      base: 'ibc/BBFA165987773A8581F02DC0DBE362D3E373CCEFD6E7D151BD77FBBAB5D4886B',
      name: 'PSTAKE staked ATOM',
      display: 'stkatom',
      symbol: 'stkATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'stk/uatom',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-2777'
          }
        }]
    },
    {
      description: 'PSTAKE Liquid-Staked OSMO',
      denom_units: [{
          denom: 'ibc/A28CE926C10943BFF39CED2343503912D9FA238D256C35686518B0D824708259',
          exponent: 0,
          aliases: ['stk/uosmo']
        }, {
          denom: 'stkosmo',
          exponent: 6,
          aliases: ['stk/osmo']
        }],
      base: 'ibc/A28CE926C10943BFF39CED2343503912D9FA238D256C35686518B0D824708259',
      name: 'PSTAKE staked OSMO',
      display: 'stkosmo',
      symbol: 'stkOSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'stk/uosmo',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-2777'
          }
        }]
    },
    {
      description: 'PSTAKE Liquid-Staked DV4TNT',
      denom_units: [{
          denom: 'ibc/13FEE46268FF7160702526D04414BE1EE225E9EACF228674094A01244921C217',
          exponent: 0,
          aliases: ['stk/adv4tnt']
        }, {
          denom: 'stkdv4tnt',
          exponent: 18,
          aliases: ['stk/dv4tnt']
        }],
      base: 'ibc/13FEE46268FF7160702526D04414BE1EE225E9EACF228674094A01244921C217',
      name: 'PSTAKE staked DV4TNT',
      display: 'stkdv4tnt',
      symbol: 'stkDV4TNT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'stk/adv4tnt',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-2777'
          }
        }]
    },
    {
      description: 'The native token of Symphony',
      denom_units: [{
          denom: 'ibc/29F9192793460930B74C23C049BAB4EA0F0F7CFFAAB68AE049716078D31A1022',
          exponent: 0,
          aliases: ['note']
        }, {
          denom: 'mld',
          exponent: 6,
          aliases: ['melody']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/29F9192793460930B74C23C049BAB4EA0F0F7CFFAAB68AE049716078D31A1022',
      name: 'Melody',
      display: 'mld',
      symbol: 'MLD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/coin_icon.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/coin_icon.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'note',
            chain_name: 'symphonytestnet'
          },
          chain: {
            channel_id: 'channel-4300'
          }
        }]
    },
    {
      description: 'The native token of the Titan network.',
      denom_units: [
        {
          denom: 'ibc/E22F3B8BFBA78A27A20077EE0CFE05BC4AA5EB40459E0593A110CB449ACD1F5E',
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
      base: 'ibc/E22F3B8BFBA78A27A20077EE0CFE05BC4AA5EB40459E0593A110CB449ACD1F5E',
      display: 'tkx',
      name: 'titan tkx',
      symbol: 'TKX',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/tkx.png'
        }],
      keywords: ['staking'],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/tkx.png'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'atkx',
            chain_name: 'titantestnet'
          },
          chain: {
            channel_id: 'channel-3910'
          }
        }]
    },
    {
      description: 'The native token of Elys Network',
      denom_units: [
        {
          denom: 'ibc/D6D41D0C0E61B1F5AED741F70F16F7A4F1C14DEE7F889D561CDBF4CF2BB99C8D',
          exponent: 0,
          aliases: ['uelys']
        },
        {
          denom: 'melys',
          exponent: 3,
          aliases: ['millielys']
        },
        {
          denom: 'elys',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/D6D41D0C0E61B1F5AED741F70F16F7A4F1C14DEE7F889D561CDBF4CF2BB99C8D',
      name: 'Elys Network',
      display: 'elys',
      symbol: 'ELYS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/elys.png'
      },
      coingecko_id: 'elys',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/elys.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'uelys',
            chain_name: 'elystestnet'
          },
          chain: {
            channel_id: 'channel-3302'
          }
        }]
    },
    {
      description: 'Eden token definition',
      denom_units: [
        {
          denom: 'ibc/D62F9AC7E2AB0D54B4C5A45139673954CCAF1FA217F820D214CC22E85A6761B7',
          exponent: 0,
          aliases: ['ueden']
        },
        {
          denom: 'meden',
          exponent: 3,
          aliases: ['millieden']
        },
        {
          denom: 'eden',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/D62F9AC7E2AB0D54B4C5A45139673954CCAF1FA217F820D214CC22E85A6761B7',
      name: 'Eden',
      display: 'eden',
      symbol: 'EDEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/eden.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/eden.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'ueden',
            chain_name: 'elystestnet'
          },
          chain: {
            channel_id: 'channel-3302'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the testnet version of Empower.',
      denom_units: [{
          denom: 'ibc/C3D75AA5082B8EEC8E6DE916F0CA9C1C71978A6BB0FA5AAE3E5ABE81BAF57B42',
          exponent: 0,
          aliases: ['umpwr']
        }, {
          denom: 'mpwr',
          exponent: 6
        }],
      base: 'ibc/C3D75AA5082B8EEC8E6DE916F0CA9C1C71978A6BB0FA5AAE3E5ABE81BAF57B42',
      name: 'MPWR',
      display: 'mpwr',
      symbol: 'MPWR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/empowertestnet/images/mpwr.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/empowertestnet/images/mpwr.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'umpwr',
            chain_name: 'empowertestnet'
          },
          chain: {
            channel_id: 'channel-2765'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Harpoon testnet version of Kujira.',
      denom_units: [{
          denom: 'ibc/E1D1BDB7784D5784980CAA320583F8D3DDBA182E01F082B0CE9E761C53C7F59B',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/E1D1BDB7784D5784980CAA320583F8D3DDBA182E01F082B0CE9E761C53C7F59B',
      name: 'Kuji',
      display: 'kuji',
      symbol: 'KUJI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kujiratestnet/images/kuji.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kujiratestnet/images/kuji.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-51',
            base_denom: 'ukuji',
            chain_name: 'kujiratestnet'
          },
          chain: {
            channel_id: 'channel-4004'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/EFC645B78840831D64CCA4674907E0A3C13258FFDF51071D0E79F12206A673F8',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/EFC645B78840831D64CCA4674907E0A3C13258FFDF51071D0E79F12206A673F8',
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
            channel_id: 'channel-4156',
            base_denom: 'uosmo',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-3306'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/DD090F9A627BB6E8DA3A2A00139F72672F1A5047D993A5CE289298C16ABD9BF5',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/DD090F9A627BB6E8DA3A2A00139F72672F1A5047D993A5CE289298C16ABD9BF5',
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
            channel_id: 'channel-4156',
            base_denom: 'uion',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-3306'
          }
        }]
    },
    {
      description: 'The XPRT token is primarily a governance token for the Persistence chain.',
      denom_units: [{
          denom: 'ibc/04623B7DE84BF8D4B37C1682401CA3B0B5DEE14881FB716A512CCC68F0ED4989',
          exponent: 0,
          aliases: ['uxprt']
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      base: 'ibc/04623B7DE84BF8D4B37C1682401CA3B0B5DEE14881FB716A512CCC68F0ED4989',
      name: 'Persistence',
      display: 'xprt',
      symbol: 'XPRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
      },
      coingecko_id: 'persistence',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uxprt',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-2777'
          }
        }]
    },
    {
      description: 'PSTAKE Liquid-Staked ATOM',
      denom_units: [{
          denom: 'ibc/BBFA165987773A8581F02DC0DBE362D3E373CCEFD6E7D151BD77FBBAB5D4886B',
          exponent: 0,
          aliases: ['stk/uatom']
        }, {
          denom: 'stkatom',
          exponent: 6,
          aliases: ['stk/atom']
        }],
      base: 'ibc/BBFA165987773A8581F02DC0DBE362D3E373CCEFD6E7D151BD77FBBAB5D4886B',
      name: 'PSTAKE staked ATOM',
      display: 'stkatom',
      symbol: 'stkATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'stk/uatom',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-2777'
          }
        }]
    },
    {
      description: 'PSTAKE Liquid-Staked OSMO',
      denom_units: [{
          denom: 'ibc/A28CE926C10943BFF39CED2343503912D9FA238D256C35686518B0D824708259',
          exponent: 0,
          aliases: ['stk/uosmo']
        }, {
          denom: 'stkosmo',
          exponent: 6,
          aliases: ['stk/osmo']
        }],
      base: 'ibc/A28CE926C10943BFF39CED2343503912D9FA238D256C35686518B0D824708259',
      name: 'PSTAKE staked OSMO',
      display: 'stkosmo',
      symbol: 'stkOSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'stk/uosmo',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-2777'
          }
        }]
    },
    {
      description: 'PSTAKE Liquid-Staked DV4TNT',
      denom_units: [{
          denom: 'ibc/13FEE46268FF7160702526D04414BE1EE225E9EACF228674094A01244921C217',
          exponent: 0,
          aliases: ['stk/adv4tnt']
        }, {
          denom: 'stkdv4tnt',
          exponent: 18,
          aliases: ['stk/dv4tnt']
        }],
      base: 'ibc/13FEE46268FF7160702526D04414BE1EE225E9EACF228674094A01244921C217',
      name: 'PSTAKE staked DV4TNT',
      display: 'stkdv4tnt',
      symbol: 'stkDV4TNT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'stk/adv4tnt',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-2777'
          }
        }]
    },
    {
      description: 'The native token of Symphony',
      denom_units: [{
          denom: 'ibc/29F9192793460930B74C23C049BAB4EA0F0F7CFFAAB68AE049716078D31A1022',
          exponent: 0,
          aliases: ['note']
        }, {
          denom: 'mld',
          exponent: 6,
          aliases: ['melody']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/29F9192793460930B74C23C049BAB4EA0F0F7CFFAAB68AE049716078D31A1022',
      name: 'Melody',
      display: 'mld',
      symbol: 'MLD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/coin_icon.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/coin_icon.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'note',
            chain_name: 'symphonytestnet'
          },
          chain: {
            channel_id: 'channel-4300'
          }
        }]
    },
    {
      description: 'The native token of Symphony',
      denom_units: [{
          denom: 'ibc/29F9192793460930B74C23C049BAB4EA0F0F7CFFAAB68AE049716078D31A1022',
          exponent: 0,
          aliases: ['note']
        }, {
          denom: 'mld',
          exponent: 6,
          aliases: ['melody']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/29F9192793460930B74C23C049BAB4EA0F0F7CFFAAB68AE049716078D31A1022',
      name: 'Melody',
      display: 'mld',
      symbol: 'MLD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/coin_icon.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/coin_icon.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'note',
            chain_name: 'symphonytestnet'
          },
          chain: {
            channel_id: 'channel-4300'
          }
        }]
    },
    {
      description: 'The native token of the Titan network.',
      denom_units: [
        {
          denom: 'ibc/E22F3B8BFBA78A27A20077EE0CFE05BC4AA5EB40459E0593A110CB449ACD1F5E',
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
      base: 'ibc/E22F3B8BFBA78A27A20077EE0CFE05BC4AA5EB40459E0593A110CB449ACD1F5E',
      display: 'tkx',
      name: 'titan tkx',
      symbol: 'TKX',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/tkx.png'
        }],
      keywords: ['staking'],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/tkx.png'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'atkx',
            chain_name: 'titantestnet'
          },
          chain: {
            channel_id: 'channel-3910'
          }
        }]
    }
  ]
};
export default assets;
    