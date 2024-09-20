import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'gravitybridge',
  assets: [
    {
      description: 'The native EVM, governance and staking token of the Acrechain',
      denom_units: [{
          denom: 'ibc/774E8FD332D0A0CF0D8B71E0086DDCC09820C11B400E6B1399E770936932983D',
          exponent: 0,
          aliases: ['aacre']
        }, {
          denom: 'acre',
          exponent: 18
        }],
      base: 'ibc/774E8FD332D0A0CF0D8B71E0086DDCC09820C11B400E6B1399E770936932983D',
      name: 'Acre',
      display: 'acre',
      symbol: 'ACRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
      },
      coingecko_id: 'arable-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg',
          theme: {
            primary_color_hex: '#4aa29e'
          }
        }],
      socials: {
        website: 'https://arable.finance/',
        twitter: 'https://twitter.com/ArableProtocol'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'aacre',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-106'
          }
        }]
    },
    {
      description: 'Overcollateralized stable coin for Arable derivatives v1',
      denom_units: [{
          denom: 'ibc/69D788D09B454F934095B8DB242F7F515068C2DC0163614381AFCE0F5361B5AF',
          exponent: 0,
          aliases: ['erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c']
        }, {
          denom: 'arusd',
          exponent: 18
        }],
      base: 'ibc/69D788D09B454F934095B8DB242F7F515068C2DC0163614381AFCE0F5361B5AF',
      name: 'Arable USD',
      display: 'arusd',
      symbol: 'arUSD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg'
      },
      coingecko_id: 'arable-usd',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg',
          theme: {
            primary_color_hex: '#77b64f'
          }
        }],
      socials: {
        website: 'https://arable.finance/',
        twitter: 'https://twitter.com/ArableProtocol'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-106'
          }
        }]
    },
    {
      description: 'Ciento Exchange Token',
      denom_units: [{
          denom: 'ibc/9EEE8ED497C68A9551A05439C8C384A8D1D43FDA30116E9742958639190102AB',
          exponent: 0,
          aliases: ['erc20/0xAE6D3334989a22A65228732446731438672418F2']
        }, {
          denom: 'cnto',
          exponent: 18
        }],
      base: 'ibc/9EEE8ED497C68A9551A05439C8C384A8D1D43FDA30116E9742958639190102AB',
      name: 'Ciento Token',
      display: 'cnto',
      symbol: 'CNTO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg',
          theme: {
            primary_color_hex: '#ecc53b'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'erc20/0xAE6D3334989a22A65228732446731438672418F2',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-106'
          }
        }]
    },
    {
      description: 'Agoric is a smart contract platform that uses JavaScript to enable developers to build secure and scalable decentralized applications (dApps) easily.',
      denom_units: [{
          denom: 'ibc/25DC7FDF5A05ED9F66FB17FCD9F659D97EC609B8C15A184E6258EE8E91322E50',
          exponent: 0,
          aliases: ['ubld']
        }, {
          denom: 'bld',
          exponent: 6
        }],
      base: 'ibc/25DC7FDF5A05ED9F66FB17FCD9F659D97EC609B8C15A184E6258EE8E91322E50',
      name: 'Agoric',
      display: 'bld',
      symbol: 'BLD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
      },
      coingecko_id: 'agoric',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg',
          theme: {
            primary_color_hex: '#c42b44'
          }
        }],
      socials: {
        website: 'https://agoric.com/',
        twitter: 'https://twitter.com/agoric'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'ubld',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-91'
          }
        }]
    },
    {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [{
          denom: 'ibc/AC68952014518ECAAB8672B5393A008276E9C0295C513725BF9E492A54F525F3',
          exponent: 0,
          aliases: ['uist']
        }, {
          denom: 'ist',
          exponent: 6
        }],
      base: 'ibc/AC68952014518ECAAB8672B5393A008276E9C0295C513725BF9E492A54F525F3',
      name: 'Inter Stable Token',
      display: 'ist',
      symbol: 'IST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
      },
      coingecko_id: 'inter-stable-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg',
          theme: {
            primary_color_hex: '#d485e2'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'uist',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-91'
          }
        }]
    },
    {
      description: 'Archway is a smart contract platform in the Cosmos ecosystem designed to reward developers by providing them with a share of transaction fees generated by their applications.',
      denom_units: [
        {
          denom: 'ibc/E05A4DAEA5681A09067DC213F32464639D18007215C87964EC45FF876B5EE82B',
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
      base: 'ibc/E05A4DAEA5681A09067DC213F32464639D18007215C87964EC45FF876B5EE82B',
      name: 'Archway',
      display: 'arch',
      symbol: 'ARCH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.svg'
      },
      coingecko_id: 'archway',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.svg',
          theme: {
            primary_color_hex: '#fc4c04'
          }
        }],
      socials: {
        website: 'https://archway.io/',
        twitter: 'https://twitter.com/archwayHQ'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-38',
            base_denom: 'aarch',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-145'
          }
        }]
    },
    {
      description: 'Canto is a Layer-1 blockchain built to deliver on the promise of DeFi',
      denom_units: [{
          denom: 'ibc/64BBBEB97DA04B6CF7A29A5454E43E101B29F506C117E800E128E0B32BA3FE3D',
          exponent: 0,
          aliases: ['acanto']
        }, {
          denom: 'canto',
          exponent: 18
        }],
      base: 'ibc/64BBBEB97DA04B6CF7A29A5454E43E101B29F506C117E800E128E0B32BA3FE3D',
      name: 'Canto',
      display: 'canto',
      symbol: 'CANTO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg'
      },
      coingecko_id: 'canto',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg',
          theme: {
            primary_color_hex: '#1c1f1f'
          }
        }],
      socials: {
        website: 'https://canto.io/',
        twitter: 'https://twitter.com/CantoPublic'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'acanto',
            chain_name: 'canto'
          },
          chain: {
            channel_id: 'channel-88'
          }
        }]
    },
    {
      description: 'Native token for the cheqd network',
      denom_units: [{
          denom: 'ibc/5012B1C96F286E8A6604A87037CE51241C6F1CA195B71D1E261FCACB69FB6BC2',
          exponent: 0,
          aliases: ['ncheq']
        }, {
          denom: 'cheq',
          exponent: 9
        }],
      base: 'ibc/5012B1C96F286E8A6604A87037CE51241C6F1CA195B71D1E261FCACB69FB6BC2',
      display: 'cheq',
      name: 'cheqd',
      symbol: 'CHEQ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
      },
      coingecko_id: 'cheqd-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg',
          theme: {
            primary_color_hex: '#fc5f04'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'ncheq',
            chain_name: 'cheqd'
          },
          chain: {
            channel_id: 'channel-43'
          }
        }]
    },
    {
      description: 'The native token of Coreum',
      denom_units: [{
          denom: 'ibc/3F3FBD0AAC2E301BF8461A44D4533C4C1EA8883136A9699C2E951FC643B485F9',
          exponent: 0,
          aliases: ['ucore']
        }, {
          denom: 'core',
          exponent: 6
        }],
      base: 'ibc/3F3FBD0AAC2E301BF8461A44D4533C4C1EA8883136A9699C2E951FC643B485F9',
      name: 'Coreum',
      display: 'core',
      symbol: 'COREUM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
      },
      coingecko_id: 'coreum',
      keywords: [
        'dex',
        'staking',
        'wasm',
        'assets',
        'nft',
        'XRPL'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg',
          theme: {
            primary_color_hex: '#24d494'
          }
        }],
      socials: {
        website: 'https://www.coreum.com/',
        twitter: 'https://twitter.com/CoreumOfficial'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'ucore',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-142'
          }
        }]
    },
    {
      description: 'The native token of Crescent',
      denom_units: [{
          denom: 'ibc/4CD51DA94425EB1C8D1983832E46F410528DB2AAFBFC0C646845DAC2DB7D97AE',
          exponent: 0,
          aliases: ['ucre']
        }, {
          denom: 'cre',
          exponent: 6
        }],
      base: 'ibc/4CD51DA94425EB1C8D1983832E46F410528DB2AAFBFC0C646845DAC2DB7D97AE',
      name: 'Crescent',
      display: 'cre',
      symbol: 'CRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
      },
      coingecko_id: 'crescent-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg',
          theme: {
            primary_color_hex: '#3c2832'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'ucre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-62'
          }
        }]
    },
    {
      description: 'The bonded token of Crescent',
      denom_units: [{
          denom: 'ibc/5AEBA89C7BEEF2C56EE23AC2138661C2EE7AB33C48CDE4C3C1E2E3218C4A2C41',
          exponent: 0,
          aliases: ['ubcre']
        }, {
          denom: 'bcre',
          exponent: 6
        }],
      base: 'ibc/5AEBA89C7BEEF2C56EE23AC2138661C2EE7AB33C48CDE4C3C1E2E3218C4A2C41',
      name: 'Bonded Crescent',
      display: 'bcre',
      symbol: 'bCRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg'
      },
      coingecko_id: 'liquid-staking-crescent',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg',
          theme: {
            primary_color_hex: '#df969f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'ubcre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-62'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Evmos Hub',
      denom_units: [{
          denom: 'ibc/6B207CDA2448604B83A0674AADD830C490C1AAB7D568135E52589E96A00B6EEF',
          exponent: 0,
          aliases: ['aevmos']
        }, {
          denom: 'evmos',
          exponent: 18
        }],
      base: 'ibc/6B207CDA2448604B83A0674AADD830C490C1AAB7D568135E52589E96A00B6EEF',
      name: 'Evmos',
      display: 'evmos',
      symbol: 'EVMOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
      },
      coingecko_id: 'evmos',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg',
          theme: {
            primary_color_hex: '#ec4c34'
          }
        }],
      socials: {
        website: 'https://evmos.org/',
        twitter: 'https://twitter.com/EvmosOrg'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'aevmos',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-65'
          }
        }]
    },
    {
      description: 'The token of Neokingdom DAO.',
      denom_units: [{
          denom: 'ibc/7EB9C35C16C07AC79AD76D4A0FB881CFE874F62D19F7E4F0F710E9E2557E21AE',
          exponent: 0,
          aliases: ['erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9']
        }, {
          denom: 'neok',
          exponent: 18
        }],
      base: 'ibc/7EB9C35C16C07AC79AD76D4A0FB881CFE874F62D19F7E4F0F710E9E2557E21AE',
      name: 'Neokingdom DAO',
      display: 'neok',
      symbol: 'NEOK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg',
          theme: {
            primary_color_hex: '#7f0f70'
          }
        }],
      socials: {
        website: 'https://www.neokingdom.org/',
        twitter: 'https://twitter.com/NEOKingdomDAO'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-65'
          }
        }]
    },
    {
      description: 'The legacy token of Teledisko DAO.',
      denom_units: [{
          denom: 'ibc/F8097E48981FD969A639156DE4252CC25C0E908DFF49369FD05EB895FDA32CB8',
          exponent: 0,
          aliases: ['erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280']
        }, {
          denom: 'berlin-legacy',
          exponent: 18
        }],
      base: 'ibc/F8097E48981FD969A639156DE4252CC25C0E908DFF49369FD05EB895FDA32CB8',
      name: 'Teledisko DAO - Legacy',
      display: 'berlin-legacy',
      symbol: 'BERLIN-legacy',
      type_asset: 'erc20',
      address: '0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.svg',
          theme: {
            primary_color_hex: '#bbce1a'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-65'
          }
        }]
    },
    {
      description: 'The token of Crowdpunk DAO',
      denom_units: [{
          denom: 'ibc/2D76D58225E8EE4733BB23CE921D4846404484D72EE8364DD67F3FAC7E5C1DA7',
          exponent: 0,
          aliases: ['erc20/0xfbf4318d24a93753f11d365a6dcf8b830e98ab0f']
        }, {
          denom: 'crowdp',
          exponent: 18
        }],
      base: 'ibc/2D76D58225E8EE4733BB23CE921D4846404484D72EE8364DD67F3FAC7E5C1DA7',
      name: 'Crowdpunk DAO',
      display: 'crowdp',
      address: '0xfbf4318d24a93753f11d365a6dcf8b830e98ab0f',
      symbol: 'CROWDP',
      type_asset: 'erc20',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.svg',
          theme: {
            primary_color_hex: '#04fbfb'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'erc20/0xfbf4318d24a93753f11d365a6dcf8b830e98ab0f',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-65'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Acrechain',
      denom_units: [{
          denom: 'ibc/774E8FD332D0A0CF0D8B71E0086DDCC09820C11B400E6B1399E770936932983D',
          exponent: 0,
          aliases: ['aacre']
        }, {
          denom: 'acre',
          exponent: 18
        }],
      base: 'ibc/774E8FD332D0A0CF0D8B71E0086DDCC09820C11B400E6B1399E770936932983D',
      name: 'Acre',
      display: 'acre',
      symbol: 'ACRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
      },
      coingecko_id: 'arable-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg',
          theme: {
            primary_color_hex: '#4aa29e'
          }
        }],
      socials: {
        website: 'https://arable.finance/',
        twitter: 'https://twitter.com/ArableProtocol'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'aacre',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-106'
          }
        }]
    },
    {
      description: 'Overcollateralized stable coin for Arable derivatives v1',
      denom_units: [{
          denom: 'ibc/69D788D09B454F934095B8DB242F7F515068C2DC0163614381AFCE0F5361B5AF',
          exponent: 0,
          aliases: ['erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c']
        }, {
          denom: 'arusd',
          exponent: 18
        }],
      base: 'ibc/69D788D09B454F934095B8DB242F7F515068C2DC0163614381AFCE0F5361B5AF',
      name: 'Arable USD',
      display: 'arusd',
      symbol: 'arUSD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg'
      },
      coingecko_id: 'arable-usd',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg',
          theme: {
            primary_color_hex: '#77b64f'
          }
        }],
      socials: {
        website: 'https://arable.finance/',
        twitter: 'https://twitter.com/ArableProtocol'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-106'
          }
        }]
    },
    {
      description: 'Ciento Exchange Token',
      denom_units: [{
          denom: 'ibc/9EEE8ED497C68A9551A05439C8C384A8D1D43FDA30116E9742958639190102AB',
          exponent: 0,
          aliases: ['erc20/0xAE6D3334989a22A65228732446731438672418F2']
        }, {
          denom: 'cnto',
          exponent: 18
        }],
      base: 'ibc/9EEE8ED497C68A9551A05439C8C384A8D1D43FDA30116E9742958639190102AB',
      name: 'Ciento Token',
      display: 'cnto',
      symbol: 'CNTO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg',
          theme: {
            primary_color_hex: '#ecc53b'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'erc20/0xAE6D3334989a22A65228732446731438672418F2',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-106'
          }
        }]
    },
    {
      description: 'Agoric is a smart contract platform that uses JavaScript to enable developers to build secure and scalable decentralized applications (dApps) easily.',
      denom_units: [{
          denom: 'ibc/25DC7FDF5A05ED9F66FB17FCD9F659D97EC609B8C15A184E6258EE8E91322E50',
          exponent: 0,
          aliases: ['ubld']
        }, {
          denom: 'bld',
          exponent: 6
        }],
      base: 'ibc/25DC7FDF5A05ED9F66FB17FCD9F659D97EC609B8C15A184E6258EE8E91322E50',
      name: 'Agoric',
      display: 'bld',
      symbol: 'BLD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
      },
      coingecko_id: 'agoric',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg',
          theme: {
            primary_color_hex: '#c42b44'
          }
        }],
      socials: {
        website: 'https://agoric.com/',
        twitter: 'https://twitter.com/agoric'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'ubld',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-91'
          }
        }]
    },
    {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [{
          denom: 'ibc/AC68952014518ECAAB8672B5393A008276E9C0295C513725BF9E492A54F525F3',
          exponent: 0,
          aliases: ['uist']
        }, {
          denom: 'ist',
          exponent: 6
        }],
      base: 'ibc/AC68952014518ECAAB8672B5393A008276E9C0295C513725BF9E492A54F525F3',
      name: 'Inter Stable Token',
      display: 'ist',
      symbol: 'IST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
      },
      coingecko_id: 'inter-stable-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg',
          theme: {
            primary_color_hex: '#d485e2'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'uist',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-91'
          }
        }]
    },
    {
      description: 'Archway is a smart contract platform in the Cosmos ecosystem designed to reward developers by providing them with a share of transaction fees generated by their applications.',
      denom_units: [
        {
          denom: 'ibc/E05A4DAEA5681A09067DC213F32464639D18007215C87964EC45FF876B5EE82B',
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
      base: 'ibc/E05A4DAEA5681A09067DC213F32464639D18007215C87964EC45FF876B5EE82B',
      name: 'Archway',
      display: 'arch',
      symbol: 'ARCH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.svg'
      },
      coingecko_id: 'archway',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.svg',
          theme: {
            primary_color_hex: '#fc4c04'
          }
        }],
      socials: {
        website: 'https://archway.io/',
        twitter: 'https://twitter.com/archwayHQ'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-38',
            base_denom: 'aarch',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-145'
          }
        }]
    },
    {
      description: 'Canto is a Layer-1 blockchain built to deliver on the promise of DeFi',
      denom_units: [{
          denom: 'ibc/64BBBEB97DA04B6CF7A29A5454E43E101B29F506C117E800E128E0B32BA3FE3D',
          exponent: 0,
          aliases: ['acanto']
        }, {
          denom: 'canto',
          exponent: 18
        }],
      base: 'ibc/64BBBEB97DA04B6CF7A29A5454E43E101B29F506C117E800E128E0B32BA3FE3D',
      name: 'Canto',
      display: 'canto',
      symbol: 'CANTO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg'
      },
      coingecko_id: 'canto',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg',
          theme: {
            primary_color_hex: '#1c1f1f'
          }
        }],
      socials: {
        website: 'https://canto.io/',
        twitter: 'https://twitter.com/CantoPublic'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'acanto',
            chain_name: 'canto'
          },
          chain: {
            channel_id: 'channel-88'
          }
        }]
    },
    {
      description: 'Native token for the cheqd network',
      denom_units: [{
          denom: 'ibc/5012B1C96F286E8A6604A87037CE51241C6F1CA195B71D1E261FCACB69FB6BC2',
          exponent: 0,
          aliases: ['ncheq']
        }, {
          denom: 'cheq',
          exponent: 9
        }],
      base: 'ibc/5012B1C96F286E8A6604A87037CE51241C6F1CA195B71D1E261FCACB69FB6BC2',
      display: 'cheq',
      name: 'cheqd',
      symbol: 'CHEQ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
      },
      coingecko_id: 'cheqd-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg',
          theme: {
            primary_color_hex: '#fc5f04'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'ncheq',
            chain_name: 'cheqd'
          },
          chain: {
            channel_id: 'channel-43'
          }
        }]
    },
    {
      description: 'The native token of Coreum',
      denom_units: [{
          denom: 'ibc/3F3FBD0AAC2E301BF8461A44D4533C4C1EA8883136A9699C2E951FC643B485F9',
          exponent: 0,
          aliases: ['ucore']
        }, {
          denom: 'core',
          exponent: 6
        }],
      base: 'ibc/3F3FBD0AAC2E301BF8461A44D4533C4C1EA8883136A9699C2E951FC643B485F9',
      name: 'Coreum',
      display: 'core',
      symbol: 'COREUM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
      },
      coingecko_id: 'coreum',
      keywords: [
        'dex',
        'staking',
        'wasm',
        'assets',
        'nft',
        'XRPL'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg',
          theme: {
            primary_color_hex: '#24d494'
          }
        }],
      socials: {
        website: 'https://www.coreum.com/',
        twitter: 'https://twitter.com/CoreumOfficial'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'ucore',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-142'
          }
        }]
    },
    {
      description: 'The native token of Crescent',
      denom_units: [{
          denom: 'ibc/4CD51DA94425EB1C8D1983832E46F410528DB2AAFBFC0C646845DAC2DB7D97AE',
          exponent: 0,
          aliases: ['ucre']
        }, {
          denom: 'cre',
          exponent: 6
        }],
      base: 'ibc/4CD51DA94425EB1C8D1983832E46F410528DB2AAFBFC0C646845DAC2DB7D97AE',
      name: 'Crescent',
      display: 'cre',
      symbol: 'CRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
      },
      coingecko_id: 'crescent-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg',
          theme: {
            primary_color_hex: '#3c2832'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'ucre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-62'
          }
        }]
    },
    {
      description: 'The bonded token of Crescent',
      denom_units: [{
          denom: 'ibc/5AEBA89C7BEEF2C56EE23AC2138661C2EE7AB33C48CDE4C3C1E2E3218C4A2C41',
          exponent: 0,
          aliases: ['ubcre']
        }, {
          denom: 'bcre',
          exponent: 6
        }],
      base: 'ibc/5AEBA89C7BEEF2C56EE23AC2138661C2EE7AB33C48CDE4C3C1E2E3218C4A2C41',
      name: 'Bonded Crescent',
      display: 'bcre',
      symbol: 'bCRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg'
      },
      coingecko_id: 'liquid-staking-crescent',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg',
          theme: {
            primary_color_hex: '#df969f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'ubcre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-62'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Evmos Hub',
      denom_units: [{
          denom: 'ibc/6B207CDA2448604B83A0674AADD830C490C1AAB7D568135E52589E96A00B6EEF',
          exponent: 0,
          aliases: ['aevmos']
        }, {
          denom: 'evmos',
          exponent: 18
        }],
      base: 'ibc/6B207CDA2448604B83A0674AADD830C490C1AAB7D568135E52589E96A00B6EEF',
      name: 'Evmos',
      display: 'evmos',
      symbol: 'EVMOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
      },
      coingecko_id: 'evmos',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg',
          theme: {
            primary_color_hex: '#ec4c34'
          }
        }],
      socials: {
        website: 'https://evmos.org/',
        twitter: 'https://twitter.com/EvmosOrg'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'aevmos',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-65'
          }
        }]
    },
    {
      description: 'The token of Neokingdom DAO.',
      denom_units: [{
          denom: 'ibc/7EB9C35C16C07AC79AD76D4A0FB881CFE874F62D19F7E4F0F710E9E2557E21AE',
          exponent: 0,
          aliases: ['erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9']
        }, {
          denom: 'neok',
          exponent: 18
        }],
      base: 'ibc/7EB9C35C16C07AC79AD76D4A0FB881CFE874F62D19F7E4F0F710E9E2557E21AE',
      name: 'Neokingdom DAO',
      display: 'neok',
      symbol: 'NEOK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg',
          theme: {
            primary_color_hex: '#7f0f70'
          }
        }],
      socials: {
        website: 'https://www.neokingdom.org/',
        twitter: 'https://twitter.com/NEOKingdomDAO'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-65'
          }
        }]
    },
    {
      description: 'The legacy token of Teledisko DAO.',
      denom_units: [{
          denom: 'ibc/F8097E48981FD969A639156DE4252CC25C0E908DFF49369FD05EB895FDA32CB8',
          exponent: 0,
          aliases: ['erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280']
        }, {
          denom: 'berlin-legacy',
          exponent: 18
        }],
      base: 'ibc/F8097E48981FD969A639156DE4252CC25C0E908DFF49369FD05EB895FDA32CB8',
      name: 'Teledisko DAO - Legacy',
      display: 'berlin-legacy',
      symbol: 'BERLIN-legacy',
      type_asset: 'erc20',
      address: '0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.svg',
          theme: {
            primary_color_hex: '#bbce1a'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-65'
          }
        }]
    },
    {
      description: 'The token of Crowdpunk DAO',
      denom_units: [{
          denom: 'ibc/2D76D58225E8EE4733BB23CE921D4846404484D72EE8364DD67F3FAC7E5C1DA7',
          exponent: 0,
          aliases: ['erc20/0xfbf4318d24a93753f11d365a6dcf8b830e98ab0f']
        }, {
          denom: 'crowdp',
          exponent: 18
        }],
      base: 'ibc/2D76D58225E8EE4733BB23CE921D4846404484D72EE8364DD67F3FAC7E5C1DA7',
      name: 'Crowdpunk DAO',
      display: 'crowdp',
      address: '0xfbf4318d24a93753f11d365a6dcf8b830e98ab0f',
      symbol: 'CROWDP',
      type_asset: 'erc20',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.svg',
          theme: {
            primary_color_hex: '#04fbfb'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'erc20/0xfbf4318d24a93753f11d365a6dcf8b830e98ab0f',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-65'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Haqq Network',
      denom_units: [{
          denom: 'ibc/B1EA7A319016FD4E03CA91013B0EA55875B293FBCCAC3BEB2C1B4A60197F5A64',
          exponent: 0,
          aliases: ['aISLM']
        }, {
          denom: 'ISLM',
          exponent: 18
        }],
      base: 'ibc/B1EA7A319016FD4E03CA91013B0EA55875B293FBCCAC3BEB2C1B4A60197F5A64',
      name: 'Islamic Coin',
      display: 'ISLM',
      symbol: 'ISLM',
      coingecko_id: 'islamic-coin',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg'
      },
      socials: {
        website: 'https://islamiccoin.net',
        twitter: 'https://x.com/1slamic_coin'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg',
          theme: {
            primary_color_hex: '#04cd80'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'aISLM',
            chain_name: 'haqq'
          },
          chain: {
            channel_id: 'channel-100'
          }
        }]
    },
    {
      description: 'Deenar gold-backed stablecoin',
      denom_units: [{
          denom: 'ibc/4D3E3BE7ABF8AB1C13DEE7E6773C9EA1F479EF2D84A3B2DD071475C873AA8F78',
          exponent: 0,
          aliases: ['erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE']
        }, {
          denom: 'DEEN',
          exponent: 6
        }],
      base: 'ibc/4D3E3BE7ABF8AB1C13DEE7E6773C9EA1F479EF2D84A3B2DD071475C873AA8F78',
      name: 'Deenar',
      display: 'DEEN',
      address: '0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE',
      symbol: 'DEEN',
      type_asset: 'erc20',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE',
            chain_name: 'haqq'
          },
          chain: {
            channel_id: 'channel-100'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.svg'
      },
      coingecko_id: 'deenar-gold',
      socials: {
        website: 'https://deenar.com',
        twitter: 'https://x.com/DeenarGold'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.svg',
          theme: {
            primary_color_hex: '#ffbc05',
            circle: true
          }
        }]
    },
    {
      description: 'Kujira is a decentralized finance (DeFi) platform offering a suite of tools and services for managing and optimizing digital assets and investments.',
      denom_units: [{
          denom: 'ibc/6BEE6DBC35E5CCB3C8ADA943CF446735E6A3D48B174FEE027FAB3410EDE6319C',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/6BEE6DBC35E5CCB3C8ADA943CF446735E6A3D48B174FEE027FAB3410EDE6319C',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg',
          theme: {
            primary_color_hex: '#e33b34'
          }
        }],
      socials: {
        website: 'https://kujira.network/',
        twitter: 'https://twitter.com/TeamKujira'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-50',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-107'
          }
        }]
    },
    {
      description: 'NYX Token (NYX) is the Nym Network\'s native staking and governance token.',
      denom_units: [{
          denom: 'ibc/CB4A35E5D55B3DE73C735E44FD7C23FA236A26D1335E616127FCEDFD4B9C30D0',
          exponent: 0,
          aliases: ['unyx']
        }, {
          denom: 'nyx',
          exponent: 6
        }],
      base: 'ibc/CB4A35E5D55B3DE73C735E44FD7C23FA236A26D1335E616127FCEDFD4B9C30D0',
      name: 'NYX',
      display: 'nyx',
      symbol: 'NYX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nyx.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nyx.png',
          theme: {
            primary_color_hex: '#f45135'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'unyx',
            chain_name: 'nyx'
          },
          chain: {
            channel_id: 'channel-18'
          }
        }]
    },
    {
      description: 'NYM Token (NYM) is the Nym Network\'s native utility token, used as the primary means to incentivize mixnet node operators.',
      denom_units: [{
          denom: 'ibc/0C273962C274B2C05B22D9474BFE5B84D6A6FCAD198CB9B0ACD35EA521A36606',
          exponent: 0,
          aliases: ['unym']
        }, {
          denom: 'nym',
          exponent: 6
        }],
      base: 'ibc/0C273962C274B2C05B22D9474BFE5B84D6A6FCAD198CB9B0ACD35EA521A36606',
      name: 'NYM',
      display: 'nym',
      symbol: 'NYM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.svg'
      },
      coingecko_id: 'nym',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.svg',
          theme: {
            dark_mode: false,
            circle: true,
            primary_color_hex: '#151525'
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_dark.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_dark.svg',
          theme: {
            dark_mode: true,
            circle: true,
            primary_color_hex: '#141424'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'unym',
            chain_name: 'nyx'
          },
          chain: {
            channel_id: 'channel-18'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/376222D6D9DAE23092E29740E56B758580935A6D77C24C2ABD57A6A78A1F3955',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/376222D6D9DAE23092E29740E56B758580935A6D77C24C2ABD57A6A78A1F3955',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
          theme: {
            primary_color_hex: '#760dbb'
          }
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
            channel_id: 'channel-144',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/0433997003A2CFE10E483B93743BEC37F2F13B89854FD69599482E6DB8E6CE22',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/0433997003A2CFE10E483B93743BEC37F2F13B89854FD69599482E6DB8E6CE22',
      name: 'Ion DAO',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg',
          theme: {
            primary_color_hex: '#4453c7'
          }
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
            channel_id: 'channel-144',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }]
    },
    {
      description: 'Persistence is a blockchain platform designed to facilitate institutional decentralized finance (DeFi) and real-world asset tokenization, integrating with the Cosmos ecosystem.',
      denom_units: [{
          denom: 'ibc/74A48437840E981DD7789856D97EE5E3751DF474D22EDCD66DB046AF0B725A64',
          exponent: 0,
          aliases: ['uxprt']
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      base: 'ibc/74A48437840E981DD7789856D97EE5E3751DF474D22EDCD66DB046AF0B725A64',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg',
          theme: {
            circle: true,
            primary_color_hex: '#E59636',
            background_color_hex: '#000000'
          }
        }],
      socials: {
        website: 'https://persistence.one/',
        twitter: 'https://twitter.com/PersistenceOne'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-38',
            base_denom: 'uxprt',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-24'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Planq Network',
      denom_units: [{
          denom: 'ibc/2782B87D755389B565D59F15E202E6E3B8B3E1408034D2FAA4E02A0CA10911B2',
          exponent: 0,
          aliases: ['aplanq']
        }, {
          denom: 'planq',
          exponent: 18
        }],
      base: 'ibc/2782B87D755389B565D59F15E202E6E3B8B3E1408034D2FAA4E02A0CA10911B2',
      name: 'Planq',
      display: 'planq',
      symbol: 'PLQ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
      },
      coingecko_id: 'planq',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg',
          theme: {
            primary_color_hex: '#d4f3fb'
          }
        }],
      socials: {
        website: 'https://planq.network',
        twitter: 'https://twitter.com/planqfoundation'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'aplanq',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-102'
          }
        }]
    },
    {
      description: 'The token of Source Protocol bridged from BSC.',
      denom_units: [{
          denom: 'ibc/E05B0EFAD4E4D2E42FADA678754C7076AF6B42861D362CE477108A72F61C9C7D',
          exponent: 0,
          aliases: ['erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09']
        }, {
          denom: 'srcx',
          exponent: 9
        }],
      base: 'ibc/E05B0EFAD4E4D2E42FADA678754C7076AF6B42861D362CE477108A72F61C9C7D',
      name: 'Source Token',
      display: 'srcx',
      symbol: 'SRCX',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-102'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'binancesmartchain',
            base_denom: '0x454b90716a9435e7161a9aea5cf00e0acbe565ae'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png',
          theme: {
            primary_color_hex: '#7f22bc'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png'
      }
    },
    {
      description: 'Secret Network is a privacy-focused blockchain that enables private and secure smart contracts, protecting sensitive data.',
      denom_units: [{
          denom: 'ibc/7907EA1A11FD4FC2A815FCAA54948C42F08E3F3C874EE48861386286FEB80160',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'ibc/7907EA1A11FD4FC2A815FCAA54948C42F08E3F3C874EE48861386286FEB80160',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
      },
      coingecko_id: 'secret',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      socials: {
        website: 'https://scrt.network/',
        twitter: 'https://twitter.com/SecretNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-17',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-79'
          }
        }]
    },
    {
      description: 'Staking and governance coin for the Unification Blockchain',
      denom_units: [{
          denom: 'ibc/D157AD8A50DAB0FC4EB95BBE1D9407A590FA2CDEE04C90A76C005089BF76E519',
          exponent: 0,
          aliases: ['nund']
        }, {
          denom: 'FUND',
          exponent: 9
        }],
      base: 'ibc/D157AD8A50DAB0FC4EB95BBE1D9407A590FA2CDEE04C90A76C005089BF76E519',
      name: 'Unification Network',
      display: 'FUND',
      symbol: 'FUND',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png',
          theme: {
            primary_color_hex: '#2279c0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg'
      },
      socials: {
        website: 'https://unification.com',
        twitter: 'https://twitter.com/UnificationUND'
      },
      coingecko_id: 'unification',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'nund',
            chain_name: 'unification'
          },
          chain: {
            channel_id: 'channel-98'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Haqq Network',
      denom_units: [{
          denom: 'ibc/B1EA7A319016FD4E03CA91013B0EA55875B293FBCCAC3BEB2C1B4A60197F5A64',
          exponent: 0,
          aliases: ['aISLM']
        }, {
          denom: 'ISLM',
          exponent: 18
        }],
      base: 'ibc/B1EA7A319016FD4E03CA91013B0EA55875B293FBCCAC3BEB2C1B4A60197F5A64',
      name: 'Islamic Coin',
      display: 'ISLM',
      symbol: 'ISLM',
      coingecko_id: 'islamic-coin',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg'
      },
      socials: {
        website: 'https://islamiccoin.net',
        twitter: 'https://x.com/1slamic_coin'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg',
          theme: {
            primary_color_hex: '#04cd80'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'aISLM',
            chain_name: 'haqq'
          },
          chain: {
            channel_id: 'channel-100'
          }
        }]
    },
    {
      description: 'Deenar gold-backed stablecoin',
      denom_units: [{
          denom: 'ibc/4D3E3BE7ABF8AB1C13DEE7E6773C9EA1F479EF2D84A3B2DD071475C873AA8F78',
          exponent: 0,
          aliases: ['erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE']
        }, {
          denom: 'DEEN',
          exponent: 6
        }],
      base: 'ibc/4D3E3BE7ABF8AB1C13DEE7E6773C9EA1F479EF2D84A3B2DD071475C873AA8F78',
      name: 'Deenar',
      display: 'DEEN',
      address: '0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE',
      symbol: 'DEEN',
      type_asset: 'erc20',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE',
            chain_name: 'haqq'
          },
          chain: {
            channel_id: 'channel-100'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.svg'
      },
      coingecko_id: 'deenar-gold',
      socials: {
        website: 'https://deenar.com',
        twitter: 'https://x.com/DeenarGold'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.svg',
          theme: {
            primary_color_hex: '#ffbc05',
            circle: true
          }
        }]
    },
    {
      description: 'Kujira is a decentralized finance (DeFi) platform offering a suite of tools and services for managing and optimizing digital assets and investments.',
      denom_units: [{
          denom: 'ibc/6BEE6DBC35E5CCB3C8ADA943CF446735E6A3D48B174FEE027FAB3410EDE6319C',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/6BEE6DBC35E5CCB3C8ADA943CF446735E6A3D48B174FEE027FAB3410EDE6319C',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg',
          theme: {
            primary_color_hex: '#e33b34'
          }
        }],
      socials: {
        website: 'https://kujira.network/',
        twitter: 'https://twitter.com/TeamKujira'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-50',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-107'
          }
        }]
    },
    {
      description: 'NYX Token (NYX) is the Nym Network\'s native staking and governance token.',
      denom_units: [{
          denom: 'ibc/CB4A35E5D55B3DE73C735E44FD7C23FA236A26D1335E616127FCEDFD4B9C30D0',
          exponent: 0,
          aliases: ['unyx']
        }, {
          denom: 'nyx',
          exponent: 6
        }],
      base: 'ibc/CB4A35E5D55B3DE73C735E44FD7C23FA236A26D1335E616127FCEDFD4B9C30D0',
      name: 'NYX',
      display: 'nyx',
      symbol: 'NYX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nyx.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nyx.png',
          theme: {
            primary_color_hex: '#f45135'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'unyx',
            chain_name: 'nyx'
          },
          chain: {
            channel_id: 'channel-18'
          }
        }]
    },
    {
      description: 'NYM Token (NYM) is the Nym Network\'s native utility token, used as the primary means to incentivize mixnet node operators.',
      denom_units: [{
          denom: 'ibc/0C273962C274B2C05B22D9474BFE5B84D6A6FCAD198CB9B0ACD35EA521A36606',
          exponent: 0,
          aliases: ['unym']
        }, {
          denom: 'nym',
          exponent: 6
        }],
      base: 'ibc/0C273962C274B2C05B22D9474BFE5B84D6A6FCAD198CB9B0ACD35EA521A36606',
      name: 'NYM',
      display: 'nym',
      symbol: 'NYM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.svg'
      },
      coingecko_id: 'nym',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.svg',
          theme: {
            dark_mode: false,
            circle: true,
            primary_color_hex: '#151525'
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_dark.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_dark.svg',
          theme: {
            dark_mode: true,
            circle: true,
            primary_color_hex: '#141424'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'unym',
            chain_name: 'nyx'
          },
          chain: {
            channel_id: 'channel-18'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/376222D6D9DAE23092E29740E56B758580935A6D77C24C2ABD57A6A78A1F3955',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/376222D6D9DAE23092E29740E56B758580935A6D77C24C2ABD57A6A78A1F3955',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
          theme: {
            primary_color_hex: '#760dbb'
          }
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
            channel_id: 'channel-144',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/0433997003A2CFE10E483B93743BEC37F2F13B89854FD69599482E6DB8E6CE22',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/0433997003A2CFE10E483B93743BEC37F2F13B89854FD69599482E6DB8E6CE22',
      name: 'Ion DAO',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg',
          theme: {
            primary_color_hex: '#4453c7'
          }
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
            channel_id: 'channel-144',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }]
    },
    {
      description: 'Persistence is a blockchain platform designed to facilitate institutional decentralized finance (DeFi) and real-world asset tokenization, integrating with the Cosmos ecosystem.',
      denom_units: [{
          denom: 'ibc/74A48437840E981DD7789856D97EE5E3751DF474D22EDCD66DB046AF0B725A64',
          exponent: 0,
          aliases: ['uxprt']
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      base: 'ibc/74A48437840E981DD7789856D97EE5E3751DF474D22EDCD66DB046AF0B725A64',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg',
          theme: {
            circle: true,
            primary_color_hex: '#E59636',
            background_color_hex: '#000000'
          }
        }],
      socials: {
        website: 'https://persistence.one/',
        twitter: 'https://twitter.com/PersistenceOne'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-38',
            base_denom: 'uxprt',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-24'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Planq Network',
      denom_units: [{
          denom: 'ibc/2782B87D755389B565D59F15E202E6E3B8B3E1408034D2FAA4E02A0CA10911B2',
          exponent: 0,
          aliases: ['aplanq']
        }, {
          denom: 'planq',
          exponent: 18
        }],
      base: 'ibc/2782B87D755389B565D59F15E202E6E3B8B3E1408034D2FAA4E02A0CA10911B2',
      name: 'Planq',
      display: 'planq',
      symbol: 'PLQ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
      },
      coingecko_id: 'planq',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg',
          theme: {
            primary_color_hex: '#d4f3fb'
          }
        }],
      socials: {
        website: 'https://planq.network',
        twitter: 'https://twitter.com/planqfoundation'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'aplanq',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-102'
          }
        }]
    },
    {
      description: 'The token of Source Protocol bridged from BSC.',
      denom_units: [{
          denom: 'ibc/E05B0EFAD4E4D2E42FADA678754C7076AF6B42861D362CE477108A72F61C9C7D',
          exponent: 0,
          aliases: ['erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09']
        }, {
          denom: 'srcx',
          exponent: 9
        }],
      base: 'ibc/E05B0EFAD4E4D2E42FADA678754C7076AF6B42861D362CE477108A72F61C9C7D',
      name: 'Source Token',
      display: 'srcx',
      symbol: 'SRCX',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-102'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'binancesmartchain',
            base_denom: '0x454b90716a9435e7161a9aea5cf00e0acbe565ae'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png',
          theme: {
            primary_color_hex: '#7f22bc'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png'
      }
    },
    {
      description: 'Secret Network is a privacy-focused blockchain that enables private and secure smart contracts, protecting sensitive data.',
      denom_units: [{
          denom: 'ibc/7907EA1A11FD4FC2A815FCAA54948C42F08E3F3C874EE48861386286FEB80160',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'ibc/7907EA1A11FD4FC2A815FCAA54948C42F08E3F3C874EE48861386286FEB80160',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
      },
      coingecko_id: 'secret',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      socials: {
        website: 'https://scrt.network/',
        twitter: 'https://twitter.com/SecretNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-17',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-79'
          }
        }]
    },
    {
      description: 'Staking and governance coin for the Unification Blockchain',
      denom_units: [{
          denom: 'ibc/D157AD8A50DAB0FC4EB95BBE1D9407A590FA2CDEE04C90A76C005089BF76E519',
          exponent: 0,
          aliases: ['nund']
        }, {
          denom: 'FUND',
          exponent: 9
        }],
      base: 'ibc/D157AD8A50DAB0FC4EB95BBE1D9407A590FA2CDEE04C90A76C005089BF76E519',
      name: 'Unification Network',
      display: 'FUND',
      symbol: 'FUND',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png',
          theme: {
            primary_color_hex: '#2279c0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg'
      },
      socials: {
        website: 'https://unification.com',
        twitter: 'https://twitter.com/UnificationUND'
      },
      coingecko_id: 'unification',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'nund',
            chain_name: 'unification'
          },
          chain: {
            channel_id: 'channel-98'
          }
        }]
    },
    {
      description: 'The native token cw20 for SIENNA on Secret Network',
      denom_units: [{
          denom: 'ibc/B937AE40830B72498DB6B4CD78D784DA10B5BC6297E32D5D2BC398084CEC2DCC',
          exponent: 0,
          aliases: ['cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4']
        }, {
          denom: 'sienna',
          exponent: 18
        }],
      type_asset: 'snip20',
      address: 'secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
      base: 'ibc/B937AE40830B72498DB6B4CD78D784DA10B5BC6297E32D5D2BC398084CEC2DCC',
      name: 'SIENNA',
      display: 'sienna',
      symbol: 'SIENNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
      },
      coingecko_id: 'sienna',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg',
          theme: {
            primary_color_hex: '#2c2c2c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-148',
            base_denom: 'cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-150'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/EBC01A84EF652CB40DA2837368B2F4EA52C9FD8FCD53EE2EFF90FDC742BEEC1A',
          exponent: 0,
          aliases: ['cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip20',
      address: 'secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
      base: 'ibc/EBC01A84EF652CB40DA2837368B2F4EA52C9FD8FCD53EE2EFF90FDC742BEEC1A',
      name: 'Shade (old)',
      display: 'shd',
      symbol: 'SHD(old)',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-148',
            base_denom: 'cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-150'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/897FA07A711E13EBF8418D4A648DE1DBF41E96452F7CED6F3439143F0549DD4D',
          exponent: 0,
          aliases: ['cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip25',
      address: 'secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
      base: 'ibc/897FA07A711E13EBF8418D4A648DE1DBF41E96452F7CED6F3439143F0549DD4D',
      name: 'Shade',
      display: 'shd',
      symbol: 'SHD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
      },
      coingecko_id: 'shade-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg',
          theme: {
            primary_color_hex: '#342c52'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-148',
            base_denom: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-150'
          }
        }]
    },
    {
      description: 'The native token cw20 for Silk on Secret Network',
      denom_units: [{
          denom: 'ibc/864D1718BBEAE52231247B8462FCD445D4E26C98684FF6565FBE9391075F6D7E',
          exponent: 0,
          aliases: ['cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd']
        }, {
          denom: 'silk',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
      base: 'ibc/864D1718BBEAE52231247B8462FCD445D4E26C98684FF6565FBE9391075F6D7E',
      name: 'Silk',
      display: 'silk',
      symbol: 'SILK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
      },
      coingecko_id: 'silk-bcec1136-561c-4706-a42c-8b67d0d7f7d2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg',
          theme: {
            primary_color_hex: '#3142fc'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-148',
            base_denom: 'cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-150'
          }
        }]
    },
    {
      description: 'The native token cw20 for SCRT Staking Derivatives on Secret Network',
      denom_units: [{
          denom: 'ibc/7EE5EC1550240B78E2681B05CA500DBF5B38C99F7F95EEA5E8AA93B6B041C3D9',
          exponent: 0,
          aliases: ['cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4']
        }, {
          denom: 'stkd-scrt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
      base: 'ibc/7EE5EC1550240B78E2681B05CA500DBF5B38C99F7F95EEA5E8AA93B6B041C3D9',
      name: 'SCRT Staking Derivatives',
      display: 'stkd-scrt',
      symbol: 'stkd-SCRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg'
      },
      coingecko_id: 'stkd-scrt',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg',
          theme: {
            primary_color_hex: '#b8a2dc'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-148',
            base_denom: 'cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-150'
          }
        }]
    },
    {
      description: 'The native token cw20 for Button on Secret Network',
      denom_units: [{
          denom: 'ibc/377A662E2C42A839A67E03B5680180F97D294A5C912D2490D51986C83778E9F2',
          exponent: 0,
          aliases: ['cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt']
        }, {
          denom: 'butt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
      base: 'ibc/377A662E2C42A839A67E03B5680180F97D294A5C912D2490D51986C83778E9F2',
      name: 'Button',
      display: 'butt',
      symbol: 'BUTT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg',
          theme: {
            primary_color_hex: '#7b04eb'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-148',
            base_denom: 'cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-150'
          }
        }]
    },
    {
      description: 'The native token cw20 for Alter on Secret Network',
      denom_units: [{
          denom: 'ibc/73369B05BF274404AF372096183192324607DE5098FE739AE75D4D8272E9821E',
          exponent: 0,
          aliases: ['cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej']
        }, {
          denom: 'alter',
          exponent: 6
        }],
      base: 'ibc/73369B05BF274404AF372096183192324607DE5098FE739AE75D4D8272E9821E',
      name: 'Alter',
      display: 'alter',
      symbol: 'ALTER',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg'
      },
      coingecko_id: 'alter',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg',
          theme: {
            primary_color_hex: '#694c90'
          }
        }],
      socials: {
        website: 'http://alter.network/',
        twitter: 'https://twitter.com/AlterDapp'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-148',
            base_denom: 'cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-150'
          }
        }]
    },
    {
      description: 'The native token cw20 for Amber on Secret Network',
      denom_units: [{
          denom: 'ibc/BC5BB1215B678A77722D4FA95D70D68D5F2C525F81DA39B20997F505857B451F',
          exponent: 0,
          aliases: ['cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852']
        }, {
          denom: 'amber',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
      base: 'ibc/BC5BB1215B678A77722D4FA95D70D68D5F2C525F81DA39B20997F505857B451F',
      name: 'Amber',
      display: 'amber',
      symbol: 'AMBER',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg',
          theme: {
            primary_color_hex: '#f2b854'
          }
        }],
      socials: {
        website: 'http://amber.money/',
        twitter: 'https://twitter.com/AmberDAO_'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-148',
            base_denom: 'cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-150'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shill on Secret Network',
      denom_units: [{
          denom: 'ibc/73592FD90040B180459AD8C81770E38404C1267D657C01E65122AFBFA42C8065',
          exponent: 0,
          aliases: ['cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse']
        }, {
          denom: 'shill',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
      base: 'ibc/73592FD90040B180459AD8C81770E38404C1267D657C01E65122AFBFA42C8065',
      name: 'Shill',
      display: 'shill',
      symbol: 'SHILL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.svg',
          theme: {
            primary_color_hex: '#c49df3'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-148',
            base_denom: 'cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-150'
          }
        }]
    },
    {
      description: 'The native token cw20 for SIENNA on Secret Network',
      denom_units: [{
          denom: 'ibc/B937AE40830B72498DB6B4CD78D784DA10B5BC6297E32D5D2BC398084CEC2DCC',
          exponent: 0,
          aliases: ['cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4']
        }, {
          denom: 'sienna',
          exponent: 18
        }],
      type_asset: 'snip20',
      address: 'secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
      base: 'ibc/B937AE40830B72498DB6B4CD78D784DA10B5BC6297E32D5D2BC398084CEC2DCC',
      name: 'SIENNA',
      display: 'sienna',
      symbol: 'SIENNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
      },
      coingecko_id: 'sienna',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg',
          theme: {
            primary_color_hex: '#2c2c2c'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-148',
            base_denom: 'cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-150'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/EBC01A84EF652CB40DA2837368B2F4EA52C9FD8FCD53EE2EFF90FDC742BEEC1A',
          exponent: 0,
          aliases: ['cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip20',
      address: 'secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
      base: 'ibc/EBC01A84EF652CB40DA2837368B2F4EA52C9FD8FCD53EE2EFF90FDC742BEEC1A',
      name: 'Shade (old)',
      display: 'shd',
      symbol: 'SHD(old)',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-148',
            base_denom: 'cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-150'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/897FA07A711E13EBF8418D4A648DE1DBF41E96452F7CED6F3439143F0549DD4D',
          exponent: 0,
          aliases: ['cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip25',
      address: 'secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
      base: 'ibc/897FA07A711E13EBF8418D4A648DE1DBF41E96452F7CED6F3439143F0549DD4D',
      name: 'Shade',
      display: 'shd',
      symbol: 'SHD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
      },
      coingecko_id: 'shade-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg',
          theme: {
            primary_color_hex: '#342c52'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-148',
            base_denom: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-150'
          }
        }]
    },
    {
      description: 'The native token cw20 for Silk on Secret Network',
      denom_units: [{
          denom: 'ibc/864D1718BBEAE52231247B8462FCD445D4E26C98684FF6565FBE9391075F6D7E',
          exponent: 0,
          aliases: ['cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd']
        }, {
          denom: 'silk',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
      base: 'ibc/864D1718BBEAE52231247B8462FCD445D4E26C98684FF6565FBE9391075F6D7E',
      name: 'Silk',
      display: 'silk',
      symbol: 'SILK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
      },
      coingecko_id: 'silk-bcec1136-561c-4706-a42c-8b67d0d7f7d2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg',
          theme: {
            primary_color_hex: '#3142fc'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-148',
            base_denom: 'cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-150'
          }
        }]
    },
    {
      description: 'The native token cw20 for SCRT Staking Derivatives on Secret Network',
      denom_units: [{
          denom: 'ibc/7EE5EC1550240B78E2681B05CA500DBF5B38C99F7F95EEA5E8AA93B6B041C3D9',
          exponent: 0,
          aliases: ['cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4']
        }, {
          denom: 'stkd-scrt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
      base: 'ibc/7EE5EC1550240B78E2681B05CA500DBF5B38C99F7F95EEA5E8AA93B6B041C3D9',
      name: 'SCRT Staking Derivatives',
      display: 'stkd-scrt',
      symbol: 'stkd-SCRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg'
      },
      coingecko_id: 'stkd-scrt',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg',
          theme: {
            primary_color_hex: '#b8a2dc'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-148',
            base_denom: 'cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-150'
          }
        }]
    },
    {
      description: 'The native token cw20 for Button on Secret Network',
      denom_units: [{
          denom: 'ibc/377A662E2C42A839A67E03B5680180F97D294A5C912D2490D51986C83778E9F2',
          exponent: 0,
          aliases: ['cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt']
        }, {
          denom: 'butt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
      base: 'ibc/377A662E2C42A839A67E03B5680180F97D294A5C912D2490D51986C83778E9F2',
      name: 'Button',
      display: 'butt',
      symbol: 'BUTT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg',
          theme: {
            primary_color_hex: '#7b04eb'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-148',
            base_denom: 'cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-150'
          }
        }]
    },
    {
      description: 'The native token cw20 for Alter on Secret Network',
      denom_units: [{
          denom: 'ibc/73369B05BF274404AF372096183192324607DE5098FE739AE75D4D8272E9821E',
          exponent: 0,
          aliases: ['cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej']
        }, {
          denom: 'alter',
          exponent: 6
        }],
      base: 'ibc/73369B05BF274404AF372096183192324607DE5098FE739AE75D4D8272E9821E',
      name: 'Alter',
      display: 'alter',
      symbol: 'ALTER',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg'
      },
      coingecko_id: 'alter',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg',
          theme: {
            primary_color_hex: '#694c90'
          }
        }],
      socials: {
        website: 'http://alter.network/',
        twitter: 'https://twitter.com/AlterDapp'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-148',
            base_denom: 'cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-150'
          }
        }]
    },
    {
      description: 'The native token cw20 for Amber on Secret Network',
      denom_units: [{
          denom: 'ibc/BC5BB1215B678A77722D4FA95D70D68D5F2C525F81DA39B20997F505857B451F',
          exponent: 0,
          aliases: ['cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852']
        }, {
          denom: 'amber',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
      base: 'ibc/BC5BB1215B678A77722D4FA95D70D68D5F2C525F81DA39B20997F505857B451F',
      name: 'Amber',
      display: 'amber',
      symbol: 'AMBER',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg',
          theme: {
            primary_color_hex: '#f2b854'
          }
        }],
      socials: {
        website: 'http://amber.money/',
        twitter: 'https://twitter.com/AmberDAO_'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-148',
            base_denom: 'cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-150'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shill on Secret Network',
      denom_units: [{
          denom: 'ibc/73592FD90040B180459AD8C81770E38404C1267D657C01E65122AFBFA42C8065',
          exponent: 0,
          aliases: ['cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse']
        }, {
          denom: 'shill',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
      base: 'ibc/73592FD90040B180459AD8C81770E38404C1267D657C01E65122AFBFA42C8065',
      name: 'Shill',
      display: 'shill',
      symbol: 'SHILL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.svg',
          theme: {
            primary_color_hex: '#c49df3'
          }
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-148',
            base_denom: 'cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-150'
          }
        }]
    }
  ]
};
export default assets;
    