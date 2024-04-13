import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'nomic',
  assets: [
    {
      description: 'The native staking and governance token of the Kujira chain.',
      denom_units: [{
          denom: 'ibc/90F27756D300141BDF07B83E65401BDC58C05269B9BAE3ECB0B20FAB166BCF8F',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/90F27756D300141BDF07B83E65401BDC58C05269B9BAE3ECB0B20FAB166BCF8F',
      name: 'Kujira',
      display: 'kuji',
      symbol: 'KUJI',
      coingecko_id: 'kujira',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
        }],
      socials: {
        website: 'https://kujira.network/',
        twitter: 'https://twitter.com/TeamKujira'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-116',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'The native token of Neutron chain.',
      denom_units: [{
          denom: 'ibc/D3D9C4C9103B38458D7C1B53C39CC6F886AA28ED028D7ACD101D4943DC7A490A',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/D3D9C4C9103B38458D7C1B53C39CC6F886AA28ED028D7ACD101D4943DC7A490A',
      name: 'Neutron',
      display: 'ntrn',
      symbol: 'NTRN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
      },
      coingecko_id: 'neutron-3',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
        }],
      socials: {
        website: 'https://neutron.org/',
        twitter: 'https://twitter.com/Neutron_org'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-42',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [{
          denom: 'ibc/64093437D8FD4936464517250BB92EDB76DCEEFED365802E74F790FE18E8C3E3',
          exponent: 0,
          aliases: ['neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj']
        }, {
          denom: 'bitcosmos',
          exponent: 6
        }],
      base: 'ibc/64093437D8FD4936464517250BB92EDB76DCEEFED365802E74F790FE18E8C3E3',
      name: 'Bitcosmos',
      display: 'bitcosmos',
      symbol: 'BTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-42',
            base_denom: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'What the Fuck',
      denom_units: [{
          denom: 'ibc/8195E529A22080A7867D3276F6F01B61B8B4D1C82A3640C87659C5B85BF6A41F',
          exponent: 0,
          aliases: ['neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf']
        }, {
          denom: 'wtf',
          exponent: 6
        }],
      base: 'ibc/8195E529A22080A7867D3276F6F01B61B8B4D1C82A3640C87659C5B85BF6A41F',
      name: 'wtf',
      display: 'wtf',
      symbol: 'WTF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-42',
            base_denom: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'Astro BOY',
      denom_units: [{
          denom: 'ibc/A56FBF93E91A6C5B8586235A9F8633FDC755D272DD3C760709C2E90E9E5C73B7',
          exponent: 0,
          aliases: ['neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv']
        }, {
          denom: 'boy',
          exponent: 6
        }],
      base: 'ibc/A56FBF93E91A6C5B8586235A9F8633FDC755D272DD3C760709C2E90E9E5C73B7',
      name: 'boy',
      display: 'boy',
      symbol: 'BOY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-42',
            base_denom: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Kujira chain.',
      denom_units: [{
          denom: 'ibc/90F27756D300141BDF07B83E65401BDC58C05269B9BAE3ECB0B20FAB166BCF8F',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/90F27756D300141BDF07B83E65401BDC58C05269B9BAE3ECB0B20FAB166BCF8F',
      name: 'Kujira',
      display: 'kuji',
      symbol: 'KUJI',
      coingecko_id: 'kujira',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
        }],
      socials: {
        website: 'https://kujira.network/',
        twitter: 'https://twitter.com/TeamKujira'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-116',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'The native token of Neutron chain.',
      denom_units: [{
          denom: 'ibc/D3D9C4C9103B38458D7C1B53C39CC6F886AA28ED028D7ACD101D4943DC7A490A',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/D3D9C4C9103B38458D7C1B53C39CC6F886AA28ED028D7ACD101D4943DC7A490A',
      name: 'Neutron',
      display: 'ntrn',
      symbol: 'NTRN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
      },
      coingecko_id: 'neutron-3',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
        }],
      socials: {
        website: 'https://neutron.org/',
        twitter: 'https://twitter.com/Neutron_org'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-42',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [{
          denom: 'ibc/64093437D8FD4936464517250BB92EDB76DCEEFED365802E74F790FE18E8C3E3',
          exponent: 0,
          aliases: ['neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj']
        }, {
          denom: 'bitcosmos',
          exponent: 6
        }],
      base: 'ibc/64093437D8FD4936464517250BB92EDB76DCEEFED365802E74F790FE18E8C3E3',
      name: 'Bitcosmos',
      display: 'bitcosmos',
      symbol: 'BTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-42',
            base_denom: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'What the Fuck',
      denom_units: [{
          denom: 'ibc/8195E529A22080A7867D3276F6F01B61B8B4D1C82A3640C87659C5B85BF6A41F',
          exponent: 0,
          aliases: ['neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf']
        }, {
          denom: 'wtf',
          exponent: 6
        }],
      base: 'ibc/8195E529A22080A7867D3276F6F01B61B8B4D1C82A3640C87659C5B85BF6A41F',
      name: 'wtf',
      display: 'wtf',
      symbol: 'WTF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-42',
            base_denom: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'Astro BOY',
      denom_units: [{
          denom: 'ibc/A56FBF93E91A6C5B8586235A9F8633FDC755D272DD3C760709C2E90E9E5C73B7',
          exponent: 0,
          aliases: ['neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv']
        }, {
          denom: 'boy',
          exponent: 6
        }],
      base: 'ibc/A56FBF93E91A6C5B8586235A9F8633FDC755D272DD3C760709C2E90E9E5C73B7',
      name: 'boy',
      display: 'boy',
      symbol: 'BOY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-42',
            base_denom: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B',
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
            channel_id: 'channel-6897',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D',
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
            channel_id: 'channel-6897',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B',
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
            channel_id: 'channel-6897',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D',
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
            channel_id: 'channel-6897',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    }
  ]
};
export default assets;
    