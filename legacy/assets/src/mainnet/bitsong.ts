import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'bitsong',
  assets: [
    {
      description: 'The native token of Archway network',
      denom_units: [
        {
          denom: 'ibc/94D295BC0F9FFCBAA08438252040A5704EA1C88C466D10659DED3CA08C39F1A0',
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
      base: 'ibc/94D295BC0F9FFCBAA08438252040A5704EA1C88C466D10659DED3CA08C39F1A0',
      name: 'Archway',
      display: 'arch',
      symbol: 'ARCH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
      },
      coingecko_id: 'archway',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
        }],
      socials: {
        website: 'https://archway.io/',
        twitter: 'https://twitter.com/archwayHQ'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-124',
            base_denom: 'aarch',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-29'
          }
        }]
    },
    {
      description: 'The native token of Axelar',
      denom_units: [{
          denom: 'ibc/21F030105A9DBFA65943765F9B1B2E2D85293178EB0E9822E011F2695EAA98A2',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/21F030105A9DBFA65943765F9B1B2E2D85293178EB0E9822E011F2695EAA98A2',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      },
      coingecko_id: 'axelar',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
        }],
      socials: {
        website: 'https://axelar.network/',
        twitter: 'https://twitter.com/axelarnetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-145',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-30'
          }
        }]
    },
    {
      description: 'The BCNA coin is the transactional token within the BitCanna network, serving the legal cannabis industry through its payment network, supply chain and trust network.',
      denom_units: [{
          denom: 'ibc/373637BF703E7B0ACEF1E58BBCCFA4529DC6FA200CF84AD087757ED70B7A8BF2',
          exponent: 0,
          aliases: ['ubcna']
        }, {
          denom: 'bcna',
          exponent: 6
        }],
      base: 'ibc/373637BF703E7B0ACEF1E58BBCCFA4529DC6FA200CF84AD087757ED70B7A8BF2',
      display: 'bcna',
      name: 'BitCanna',
      symbol: 'BCNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
      },
      coingecko_id: 'bitcanna',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
        }],
      socials: {
        website: 'http://www.bitcanna.io/',
        twitter: 'https://twitter.com/BitCannaGlobal'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ubcna',
            chain_name: 'bitcanna'
          },
          chain: {
            channel_id: 'channel-42'
          }
        }]
    },
    {
      description: 'The native token of Archway network',
      denom_units: [
        {
          denom: 'ibc/94D295BC0F9FFCBAA08438252040A5704EA1C88C466D10659DED3CA08C39F1A0',
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
      base: 'ibc/94D295BC0F9FFCBAA08438252040A5704EA1C88C466D10659DED3CA08C39F1A0',
      name: 'Archway',
      display: 'arch',
      symbol: 'ARCH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
      },
      coingecko_id: 'archway',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
        }],
      socials: {
        website: 'https://archway.io/',
        twitter: 'https://twitter.com/archwayHQ'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-124',
            base_denom: 'aarch',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-29'
          }
        }]
    },
    {
      description: 'The native token of Axelar',
      denom_units: [{
          denom: 'ibc/21F030105A9DBFA65943765F9B1B2E2D85293178EB0E9822E011F2695EAA98A2',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/21F030105A9DBFA65943765F9B1B2E2D85293178EB0E9822E011F2695EAA98A2',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      },
      coingecko_id: 'axelar',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
        }],
      socials: {
        website: 'https://axelar.network/',
        twitter: 'https://twitter.com/axelarnetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-145',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-30'
          }
        }]
    },
    {
      description: 'The BCNA coin is the transactional token within the BitCanna network, serving the legal cannabis industry through its payment network, supply chain and trust network.',
      denom_units: [{
          denom: 'ibc/373637BF703E7B0ACEF1E58BBCCFA4529DC6FA200CF84AD087757ED70B7A8BF2',
          exponent: 0,
          aliases: ['ubcna']
        }, {
          denom: 'bcna',
          exponent: 6
        }],
      base: 'ibc/373637BF703E7B0ACEF1E58BBCCFA4529DC6FA200CF84AD087757ED70B7A8BF2',
      display: 'bcna',
      name: 'BitCanna',
      symbol: 'BCNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
      },
      coingecko_id: 'bitcanna',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
        }],
      socials: {
        website: 'http://www.bitcanna.io/',
        twitter: 'https://twitter.com/BitCannaGlobal'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ubcna',
            chain_name: 'bitcanna'
          },
          chain: {
            channel_id: 'channel-42'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Cosmos Hub.',
      denom_units: [{
          denom: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
      name: 'Cosmos Hub Atom',
      display: 'atom',
      symbol: 'ATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      coingecko_id: 'cosmos',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }],
      socials: {
        website: 'https://cosmos.network',
        twitter: 'https://twitter.com/cosmoshub'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-229',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/448C1061CE97D86CC5E86374CD914870FB8EBA16C58661B5F1D3F46729A2422D',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      base: 'ibc/448C1061CE97D86CC5E86374CD914870FB8EBA16C58661B5F1D3F46729A2422D',
      name: 'Juno',
      display: 'juno',
      symbol: 'JUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
      },
      coingecko_id: 'juno-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
        }],
      socials: {
        website: 'https://junonetwork.io/',
        twitter: 'https://twitter.com/JunoNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-17',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
      name: 'Osmosis',
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
      socials: {
        website: 'https://osmosis.zone',
        twitter: 'https://twitter.com/osmosiszone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-73',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16',
      name: 'Ion DAO',
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
      keywords: ['memecoin', 'defi'],
      socials: {
        website: 'https://ion.wtf',
        twitter: 'https://twitter.com/_IONDAO'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-73',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Cosmos Hub.',
      denom_units: [{
          denom: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
      name: 'Cosmos Hub Atom',
      display: 'atom',
      symbol: 'ATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      coingecko_id: 'cosmos',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }],
      socials: {
        website: 'https://cosmos.network',
        twitter: 'https://twitter.com/cosmoshub'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-229',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/448C1061CE97D86CC5E86374CD914870FB8EBA16C58661B5F1D3F46729A2422D',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      base: 'ibc/448C1061CE97D86CC5E86374CD914870FB8EBA16C58661B5F1D3F46729A2422D',
      name: 'Juno',
      display: 'juno',
      symbol: 'JUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
      },
      coingecko_id: 'juno-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
        }],
      socials: {
        website: 'https://junonetwork.io/',
        twitter: 'https://twitter.com/JunoNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-17',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
      name: 'Osmosis',
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
      socials: {
        website: 'https://osmosis.zone',
        twitter: 'https://twitter.com/osmosiszone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-73',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16',
      name: 'Ion DAO',
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
      keywords: ['memecoin', 'defi'],
      socials: {
        website: 'https://ion.wtf',
        twitter: 'https://twitter.com/_IONDAO'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-73',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    }
  ]
};
export default assets;
    