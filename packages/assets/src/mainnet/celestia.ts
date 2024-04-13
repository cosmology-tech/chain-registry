import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'celestia',
  assets: [
    {
      description: 'The native token of Axelar',
      denom_units: [{
          denom: 'ibc/0E1517E2771CA7C03F2ED3F9BAECCAEADF0BFD79B89679E834933BC0F179AD98',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/0E1517E2771CA7C03F2ED3F9BAECCAEADF0BFD79B89679E834933BC0F179AD98',
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
            channel_id: 'channel-125',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'The native token of Axelar',
      denom_units: [{
          denom: 'ibc/0E1517E2771CA7C03F2ED3F9BAECCAEADF0BFD79B89679E834933BC0F179AD98',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/0E1517E2771CA7C03F2ED3F9BAECCAEADF0BFD79B89679E834933BC0F179AD98',
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
            channel_id: 'channel-125',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'The native governance and staking token of the Dymension Hub',
      denom_units: [{
          denom: 'ibc/D5219DCDA4565FD7B3FD96C046854A2D4A005E895D1D2A7A5C83D8A3A279DD11',
          exponent: 0,
          aliases: ['adym']
        }, {
          denom: 'dym',
          exponent: 18
        }],
      base: 'ibc/D5219DCDA4565FD7B3FD96C046854A2D4A005E895D1D2A7A5C83D8A3A279DD11',
      name: 'Dymension',
      display: 'dym',
      symbol: 'DYM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
      },
      coingecko_id: 'dymension',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
        }],
      socials: {
        website: 'https://portal.dymension.xyz',
        twitter: 'https://twitter.com/dymension'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'adym',
            chain_name: 'dymension'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Evmos Hub',
      denom_units: [{
          denom: 'ibc/C16830930080CD417D4F9DC5D569D48E33374990A8017464CCF8ABE63AAAA52A',
          exponent: 0,
          aliases: ['aevmos']
        }, {
          denom: 'evmos',
          exponent: 18
        }],
      base: 'ibc/C16830930080CD417D4F9DC5D569D48E33374990A8017464CCF8ABE63AAAA52A',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
        }],
      socials: {
        website: 'https://evmos.org/',
        twitter: 'https://twitter.com/EvmosOrg'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-106',
            base_denom: 'aevmos',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'The token of Neokingdom DAO.',
      denom_units: [{
          denom: 'ibc/015D3BA713B814E488ACA1E411C67E467088E70E60E25D84A1CC78E19A8F45B5',
          exponent: 0,
          aliases: ['erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9']
        }, {
          denom: 'neok',
          exponent: 18
        }],
      base: 'ibc/015D3BA713B814E488ACA1E411C67E467088E70E60E25D84A1CC78E19A8F45B5',
      name: 'Neokingdom DAO',
      display: 'neok',
      symbol: 'NEOK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-106',
            base_denom: 'erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'The token of Teledisko DAO.',
      denom_units: [{
          denom: 'ibc/DB28D4D4E7FCBB7DBCCC9955213A3F3264C444BD024B25A1AD6D2A2B90BB2DB2',
          exponent: 0,
          aliases: ['erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280']
        }, {
          denom: 'berlin',
          exponent: 18
        }],
      base: 'ibc/DB28D4D4E7FCBB7DBCCC9955213A3F3264C444BD024B25A1AD6D2A2B90BB2DB2',
      name: 'Teledisko DAO',
      display: 'berlin',
      symbol: 'BERLIN',
      type_asset: 'erc20',
      address: '0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-106',
            base_denom: 'erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'The token of Crowdpunk DAO',
      denom_units: [{
          denom: 'ibc/D9E82D210741AE6724307330CB556759998C655FDE9A47B3A55C655F6ED3368D',
          exponent: 0,
          aliases: ['erc20/0xfbf4318d24a93753f11d365a6dcf8b830e98ab0f']
        }, {
          denom: 'crowdp',
          exponent: 18
        }],
      base: 'ibc/D9E82D210741AE6724307330CB556759998C655FDE9A47B3A55C655F6ED3368D',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-106',
            base_denom: 'erc20/0xfbf4318d24a93753f11d365a6dcf8b830e98ab0f',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'The INJ token is the native governance token for the Injective chain.',
      denom_units: [{
          denom: 'ibc/A39D6D491ED6349F67505000586546E68ECE05C486F07BE831871AF88A50CD19',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/A39D6D491ED6349F67505000586546E68ECE05C486F07BE831871AF88A50CD19',
      name: 'Injective',
      display: 'INJ',
      symbol: 'INJ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
      },
      coingecko_id: 'injective-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
        }],
      socials: {
        website: 'https://injective.com/',
        twitter: 'https://twitter.com/Injective_'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-152',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'The second meme coin on Injective.',
      denom_units: [{
          denom: 'ibc/F4F2DAD0CADAA922DC146C17A35DBE5B215A795D31AF89484BFA0859B23C87DC',
          exponent: 0,
          aliases: ['inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88']
        }, {
          denom: 'NINPO',
          exponent: 6
        }],
      base: 'ibc/F4F2DAD0CADAA922DC146C17A35DBE5B215A795D31AF89484BFA0859B23C87DC',
      name: 'Ninpo',
      display: 'NINPO',
      symbol: 'NINPO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-152',
            base_denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denom_units: [{
          denom: 'ibc/B0FBCFA07724F42B4C761228A2E22777B9FCCFDC797E9648A4219F768775F786',
          exponent: 0,
          aliases: ['inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h']
        }, {
          denom: 'JUDO',
          exponent: 6
        }],
      base: 'ibc/B0FBCFA07724F42B4C761228A2E22777B9FCCFDC797E9648A4219F768775F786',
      name: 'Judo',
      display: 'JUDO',
      symbol: 'JUDO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-152',
            base_denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'The native staking and governance token of Kava',
      extended_description: 'The native staking and governance token of Kava\n\nKava is a Layer-1 blockchain that combines the speed and interoperability of Cosmos with the developer power of Ethereum.\n\nThe Kava Network uses a developer-optimized co-chain architecture. The Ethereum Co-Chain enables support for EVM smart contracts while the Cosmos Co-Chain enables the lightning-fast Tendermint consensus engine and the Inter Blockchain Communication Protocol (IBC).\n\nThe two co-chains are connected by a translator module that enables them to interoperate seamlessly, bringing the two most used blockchain development environments together in a single, scalable network.\n\nThe Kava Network features a native governance and utility token, KAVA, that can be staked by validators or delegated to validator nodes. Stakers and delegators earn 37.5% of all KAVA emissions as a reward for securing the network. Kava stakers also have voting rights in network governance proposals.',
      denom_units: [{
          denom: 'ibc/147B3FF1D005512CCE4089559AF5D0C951F4211A031F15E782E505B85022DF89',
          exponent: 0,
          aliases: ['ukava']
        }, {
          denom: 'kava',
          exponent: 6
        }],
      base: 'ibc/147B3FF1D005512CCE4089559AF5D0C951F4211A031F15E782E505B85022DF89',
      name: 'Kava',
      display: 'kava',
      symbol: 'KAVA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
      },
      coingecko_id: 'kava',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
        }],
      socials: {
        website: 'https://www.kava.io/',
        twitter: 'https://twitter.com/KAVA_CHAIN'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-140',
            base_denom: 'ukava',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-13'
          }
        }]
    },
    {
      description: 'Governance token of Kava Lend Protocol',
      denom_units: [{
          denom: 'ibc/0809E9DFC6F7809E9EE4A772FE775012E398200FCFEE8F83A4419C1AB6E15DDC',
          exponent: 0,
          aliases: ['hard']
        }, {
          denom: 'HARD',
          exponent: 6
        }],
      base: 'ibc/0809E9DFC6F7809E9EE4A772FE775012E398200FCFEE8F83A4419C1AB6E15DDC',
      name: 'Kava Hard',
      display: 'HARD',
      symbol: 'HARD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
      },
      coingecko_id: 'kava-lend',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-140',
            base_denom: 'hard',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-13'
          }
        }]
    },
    {
      description: 'Governance token of Kava Swap Protocol',
      denom_units: [{
          denom: 'ibc/8D5D60499D05CB8A7A65A3931CAFFD50C9BF92ECD6EF48DD4728764873F8E27D',
          exponent: 0,
          aliases: ['swp']
        }, {
          denom: 'SWP',
          exponent: 6
        }],
      base: 'ibc/8D5D60499D05CB8A7A65A3931CAFFD50C9BF92ECD6EF48DD4728764873F8E27D',
      name: 'Kava Swap',
      display: 'SWP',
      symbol: 'SWP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
      },
      coingecko_id: 'kava-swap',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-140',
            base_denom: 'swp',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-13'
          }
        }]
    },
    {
      description: 'The native stablecoin of Kava',
      denom_units: [{
          denom: 'ibc/238BC835DDF054E3B7E37AB91BF6E48508ECB9A142E614824BAE5A61DD1D9198',
          exponent: 0,
          aliases: ['usdx']
        }, {
          denom: 'USDX',
          exponent: 6
        }],
      base: 'ibc/238BC835DDF054E3B7E37AB91BF6E48508ECB9A142E614824BAE5A61DD1D9198',
      name: 'Kava USDX',
      display: 'USDX',
      symbol: 'USDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
      },
      coingecko_id: 'usdx',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-140',
            base_denom: 'usdx',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-13'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/FAFF3F7B2FE30447544A27910DF77069763CF25472BFCF63A9E7C81F0AD545AC',
          exponent: 0,
          aliases: ['erc20/tether/usdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      base: 'ibc/FAFF3F7B2FE30447544A27910DF77069763CF25472BFCF63A9E7C81F0AD545AC',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      coingecko_id: 'tether',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-140',
            base_denom: 'erc20/tether/usdt',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-13'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    },
    {
      description: 'The native token of Neutron chain.',
      denom_units: [{
          denom: 'ibc/A020C9A03670A74D9BAD0E914FB4C0FC8AC9E762808BDB0EE4A0F6840297014B',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/A020C9A03670A74D9BAD0E914FB4C0FC8AC9E762808BDB0EE4A0F6840297014B',
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
            channel_id: 'channel-35',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-8'
          }
        }]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [{
          denom: 'ibc/9F972735788701AC6BEA3F75B25E47316DF9B6261B427557520818BB120BD648',
          exponent: 0,
          aliases: ['neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj']
        }, {
          denom: 'bitcosmos',
          exponent: 6
        }],
      base: 'ibc/9F972735788701AC6BEA3F75B25E47316DF9B6261B427557520818BB120BD648',
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
            channel_id: 'channel-35',
            base_denom: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-8'
          }
        }]
    },
    {
      description: 'What the Fuck',
      denom_units: [{
          denom: 'ibc/F45CB3152E94668155744CA84B6DF1E980B3752BBB32881DF9EDB2B1C9D02E40',
          exponent: 0,
          aliases: ['neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf']
        }, {
          denom: 'wtf',
          exponent: 6
        }],
      base: 'ibc/F45CB3152E94668155744CA84B6DF1E980B3752BBB32881DF9EDB2B1C9D02E40',
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
            channel_id: 'channel-35',
            base_denom: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-8'
          }
        }]
    },
    {
      description: 'Astro BOY',
      denom_units: [{
          denom: 'ibc/6BC14F65B2EA9111E37D3E460575C5A2A51E19E4495D9E4DA84AFF82E6F69DC8',
          exponent: 0,
          aliases: ['neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv']
        }, {
          denom: 'boy',
          exponent: 6
        }],
      base: 'ibc/6BC14F65B2EA9111E37D3E460575C5A2A51E19E4495D9E4DA84AFF82E6F69DC8',
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
            channel_id: 'channel-35',
            base_denom: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-8'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/13B2C536BB057AC79D5616B8EA1B9540EC1F2170718CAFF6F0083C966FFFED0B',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/13B2C536BB057AC79D5616B8EA1B9540EC1F2170718CAFF6F0083C966FFFED0B',
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
            channel_id: 'channel-6994',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/6FA7B62692FBCA2E51F567947035DE3C5D7333D49D13B85A25F358E80DF4E991',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/6FA7B62692FBCA2E51F567947035DE3C5D7333D49D13B85A25F358E80DF4E991',
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
            channel_id: 'channel-6994',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The native token of Secret Network',
      denom_units: [{
          denom: 'ibc/E3459360643C2555C57C7DAB0567FA762B42D5D6D45A76615EA7D99D933AEC04',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'ibc/E3459360643C2555C57C7DAB0567FA762B42D5D6D45A76615EA7D99D933AEC04',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
        }],
      socials: {
        website: 'https://scrt.network/',
        twitter: 'https://twitter.com/SecretNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-91',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-14'
          }
        }]
    },
    {
      description: 'The native token of Stargaze',
      denom_units: [{
          denom: 'ibc/924CF5AAC6E825CC79DB3A220DB0689EEFFE4DB67382622D143884E6AC73C92A',
          exponent: 0,
          aliases: ['ustars']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      base: 'ibc/924CF5AAC6E825CC79DB3A220DB0689EEFFE4DB67382622D143884E6AC73C92A',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
      },
      coingecko_id: 'stargaze',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
        }],
      socials: {
        website: 'https://www.stargaze.zone/',
        twitter: 'https://twitter.com/StargazeZone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-291',
            base_denom: 'ustars',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-33'
          }
        }]
    },
    {
      description: 'The native token of Stride',
      denom_units: [{
          denom: 'ibc/CE9455F316C89EF327D7C92B20DD3A0FC9ED0F218BE46F341C6D140104980B4F',
          exponent: 0,
          aliases: ['ustrd']
        }, {
          denom: 'strd',
          exponent: 6
        }],
      base: 'ibc/CE9455F316C89EF327D7C92B20DD3A0FC9ED0F218BE46F341C6D140104980B4F',
      name: 'Stride',
      display: 'strd',
      symbol: 'STRD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
      },
      coingecko_id: 'stride',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
        }],
      socials: {
        website: 'https://stride.zone/',
        twitter: 'https://twitter.com/stride_zone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-162',
            base_denom: 'ustrd',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }]
    },
    {
      description: 'The native staking token of Terra.',
      denom_units: [{
          denom: 'ibc/70541FE5CA74E84F51753FC9CABC86E88FBC8874EF554882F4E0407137C2E0E3',
          exponent: 0,
          aliases: ['uluna']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      base: 'ibc/70541FE5CA74E84F51753FC9CABC86E88FBC8874EF554882F4E0407137C2E0E3',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
      },
      coingecko_id: 'terra-luna-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
        }],
      socials: {
        website: 'https://www.terra.money/',
        twitter: 'https://twitter.com/terra_money'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-300',
            base_denom: 'uluna',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-15'
          }
        }]
    },
    {
      description: 'The native token of Umee',
      denom_units: [{
          denom: 'ibc/738D2E738EC4DA519DA88979D79FF7BDB893AFAA5AEC230C518863E477A8D95A',
          exponent: 0,
          aliases: ['uumee']
        }, {
          denom: 'umee',
          exponent: 6
        }],
      base: 'ibc/738D2E738EC4DA519DA88979D79FF7BDB893AFAA5AEC230C518863E477A8D95A',
      name: 'Umee',
      display: 'umee',
      symbol: 'UMEE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
      },
      coingecko_id: 'umee',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-119',
            base_denom: 'uumee',
            chain_name: 'umee'
          },
          chain: {
            channel_id: 'channel-19'
          }
        }]
    },
    {
      description: 'The native governance and staking token of the Dymension Hub',
      denom_units: [{
          denom: 'ibc/D5219DCDA4565FD7B3FD96C046854A2D4A005E895D1D2A7A5C83D8A3A279DD11',
          exponent: 0,
          aliases: ['adym']
        }, {
          denom: 'dym',
          exponent: 18
        }],
      base: 'ibc/D5219DCDA4565FD7B3FD96C046854A2D4A005E895D1D2A7A5C83D8A3A279DD11',
      name: 'Dymension',
      display: 'dym',
      symbol: 'DYM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
      },
      coingecko_id: 'dymension',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
        }],
      socials: {
        website: 'https://portal.dymension.xyz',
        twitter: 'https://twitter.com/dymension'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'adym',
            chain_name: 'dymension'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Evmos Hub',
      denom_units: [{
          denom: 'ibc/C16830930080CD417D4F9DC5D569D48E33374990A8017464CCF8ABE63AAAA52A',
          exponent: 0,
          aliases: ['aevmos']
        }, {
          denom: 'evmos',
          exponent: 18
        }],
      base: 'ibc/C16830930080CD417D4F9DC5D569D48E33374990A8017464CCF8ABE63AAAA52A',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
        }],
      socials: {
        website: 'https://evmos.org/',
        twitter: 'https://twitter.com/EvmosOrg'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-106',
            base_denom: 'aevmos',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'The token of Neokingdom DAO.',
      denom_units: [{
          denom: 'ibc/015D3BA713B814E488ACA1E411C67E467088E70E60E25D84A1CC78E19A8F45B5',
          exponent: 0,
          aliases: ['erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9']
        }, {
          denom: 'neok',
          exponent: 18
        }],
      base: 'ibc/015D3BA713B814E488ACA1E411C67E467088E70E60E25D84A1CC78E19A8F45B5',
      name: 'Neokingdom DAO',
      display: 'neok',
      symbol: 'NEOK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-106',
            base_denom: 'erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'The token of Teledisko DAO.',
      denom_units: [{
          denom: 'ibc/DB28D4D4E7FCBB7DBCCC9955213A3F3264C444BD024B25A1AD6D2A2B90BB2DB2',
          exponent: 0,
          aliases: ['erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280']
        }, {
          denom: 'berlin',
          exponent: 18
        }],
      base: 'ibc/DB28D4D4E7FCBB7DBCCC9955213A3F3264C444BD024B25A1AD6D2A2B90BB2DB2',
      name: 'Teledisko DAO',
      display: 'berlin',
      symbol: 'BERLIN',
      type_asset: 'erc20',
      address: '0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-106',
            base_denom: 'erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'The token of Crowdpunk DAO',
      denom_units: [{
          denom: 'ibc/D9E82D210741AE6724307330CB556759998C655FDE9A47B3A55C655F6ED3368D',
          exponent: 0,
          aliases: ['erc20/0xfbf4318d24a93753f11d365a6dcf8b830e98ab0f']
        }, {
          denom: 'crowdp',
          exponent: 18
        }],
      base: 'ibc/D9E82D210741AE6724307330CB556759998C655FDE9A47B3A55C655F6ED3368D',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-106',
            base_denom: 'erc20/0xfbf4318d24a93753f11d365a6dcf8b830e98ab0f',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'The INJ token is the native governance token for the Injective chain.',
      denom_units: [{
          denom: 'ibc/A39D6D491ED6349F67505000586546E68ECE05C486F07BE831871AF88A50CD19',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/A39D6D491ED6349F67505000586546E68ECE05C486F07BE831871AF88A50CD19',
      name: 'Injective',
      display: 'INJ',
      symbol: 'INJ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
      },
      coingecko_id: 'injective-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
        }],
      socials: {
        website: 'https://injective.com/',
        twitter: 'https://twitter.com/Injective_'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-152',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'The second meme coin on Injective.',
      denom_units: [{
          denom: 'ibc/F4F2DAD0CADAA922DC146C17A35DBE5B215A795D31AF89484BFA0859B23C87DC',
          exponent: 0,
          aliases: ['inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88']
        }, {
          denom: 'NINPO',
          exponent: 6
        }],
      base: 'ibc/F4F2DAD0CADAA922DC146C17A35DBE5B215A795D31AF89484BFA0859B23C87DC',
      name: 'Ninpo',
      display: 'NINPO',
      symbol: 'NINPO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-152',
            base_denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denom_units: [{
          denom: 'ibc/B0FBCFA07724F42B4C761228A2E22777B9FCCFDC797E9648A4219F768775F786',
          exponent: 0,
          aliases: ['inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h']
        }, {
          denom: 'JUDO',
          exponent: 6
        }],
      base: 'ibc/B0FBCFA07724F42B4C761228A2E22777B9FCCFDC797E9648A4219F768775F786',
      name: 'Judo',
      display: 'JUDO',
      symbol: 'JUDO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-152',
            base_denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'The native staking and governance token of Kava',
      extended_description: 'The native staking and governance token of Kava\n\nKava is a Layer-1 blockchain that combines the speed and interoperability of Cosmos with the developer power of Ethereum.\n\nThe Kava Network uses a developer-optimized co-chain architecture. The Ethereum Co-Chain enables support for EVM smart contracts while the Cosmos Co-Chain enables the lightning-fast Tendermint consensus engine and the Inter Blockchain Communication Protocol (IBC).\n\nThe two co-chains are connected by a translator module that enables them to interoperate seamlessly, bringing the two most used blockchain development environments together in a single, scalable network.\n\nThe Kava Network features a native governance and utility token, KAVA, that can be staked by validators or delegated to validator nodes. Stakers and delegators earn 37.5% of all KAVA emissions as a reward for securing the network. Kava stakers also have voting rights in network governance proposals.',
      denom_units: [{
          denom: 'ibc/147B3FF1D005512CCE4089559AF5D0C951F4211A031F15E782E505B85022DF89',
          exponent: 0,
          aliases: ['ukava']
        }, {
          denom: 'kava',
          exponent: 6
        }],
      base: 'ibc/147B3FF1D005512CCE4089559AF5D0C951F4211A031F15E782E505B85022DF89',
      name: 'Kava',
      display: 'kava',
      symbol: 'KAVA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
      },
      coingecko_id: 'kava',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
        }],
      socials: {
        website: 'https://www.kava.io/',
        twitter: 'https://twitter.com/KAVA_CHAIN'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-140',
            base_denom: 'ukava',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-13'
          }
        }]
    },
    {
      description: 'Governance token of Kava Lend Protocol',
      denom_units: [{
          denom: 'ibc/0809E9DFC6F7809E9EE4A772FE775012E398200FCFEE8F83A4419C1AB6E15DDC',
          exponent: 0,
          aliases: ['hard']
        }, {
          denom: 'HARD',
          exponent: 6
        }],
      base: 'ibc/0809E9DFC6F7809E9EE4A772FE775012E398200FCFEE8F83A4419C1AB6E15DDC',
      name: 'Kava Hard',
      display: 'HARD',
      symbol: 'HARD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
      },
      coingecko_id: 'kava-lend',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-140',
            base_denom: 'hard',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-13'
          }
        }]
    },
    {
      description: 'Governance token of Kava Swap Protocol',
      denom_units: [{
          denom: 'ibc/8D5D60499D05CB8A7A65A3931CAFFD50C9BF92ECD6EF48DD4728764873F8E27D',
          exponent: 0,
          aliases: ['swp']
        }, {
          denom: 'SWP',
          exponent: 6
        }],
      base: 'ibc/8D5D60499D05CB8A7A65A3931CAFFD50C9BF92ECD6EF48DD4728764873F8E27D',
      name: 'Kava Swap',
      display: 'SWP',
      symbol: 'SWP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
      },
      coingecko_id: 'kava-swap',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-140',
            base_denom: 'swp',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-13'
          }
        }]
    },
    {
      description: 'The native stablecoin of Kava',
      denom_units: [{
          denom: 'ibc/238BC835DDF054E3B7E37AB91BF6E48508ECB9A142E614824BAE5A61DD1D9198',
          exponent: 0,
          aliases: ['usdx']
        }, {
          denom: 'USDX',
          exponent: 6
        }],
      base: 'ibc/238BC835DDF054E3B7E37AB91BF6E48508ECB9A142E614824BAE5A61DD1D9198',
      name: 'Kava USDX',
      display: 'USDX',
      symbol: 'USDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
      },
      coingecko_id: 'usdx',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-140',
            base_denom: 'usdx',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-13'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/FAFF3F7B2FE30447544A27910DF77069763CF25472BFCF63A9E7C81F0AD545AC',
          exponent: 0,
          aliases: ['erc20/tether/usdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      base: 'ibc/FAFF3F7B2FE30447544A27910DF77069763CF25472BFCF63A9E7C81F0AD545AC',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      coingecko_id: 'tether',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-140',
            base_denom: 'erc20/tether/usdt',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-13'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    },
    {
      description: 'The native token of Neutron chain.',
      denom_units: [{
          denom: 'ibc/A020C9A03670A74D9BAD0E914FB4C0FC8AC9E762808BDB0EE4A0F6840297014B',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/A020C9A03670A74D9BAD0E914FB4C0FC8AC9E762808BDB0EE4A0F6840297014B',
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
            channel_id: 'channel-35',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-8'
          }
        }]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [{
          denom: 'ibc/9F972735788701AC6BEA3F75B25E47316DF9B6261B427557520818BB120BD648',
          exponent: 0,
          aliases: ['neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj']
        }, {
          denom: 'bitcosmos',
          exponent: 6
        }],
      base: 'ibc/9F972735788701AC6BEA3F75B25E47316DF9B6261B427557520818BB120BD648',
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
            channel_id: 'channel-35',
            base_denom: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-8'
          }
        }]
    },
    {
      description: 'What the Fuck',
      denom_units: [{
          denom: 'ibc/F45CB3152E94668155744CA84B6DF1E980B3752BBB32881DF9EDB2B1C9D02E40',
          exponent: 0,
          aliases: ['neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf']
        }, {
          denom: 'wtf',
          exponent: 6
        }],
      base: 'ibc/F45CB3152E94668155744CA84B6DF1E980B3752BBB32881DF9EDB2B1C9D02E40',
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
            channel_id: 'channel-35',
            base_denom: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-8'
          }
        }]
    },
    {
      description: 'Astro BOY',
      denom_units: [{
          denom: 'ibc/6BC14F65B2EA9111E37D3E460575C5A2A51E19E4495D9E4DA84AFF82E6F69DC8',
          exponent: 0,
          aliases: ['neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv']
        }, {
          denom: 'boy',
          exponent: 6
        }],
      base: 'ibc/6BC14F65B2EA9111E37D3E460575C5A2A51E19E4495D9E4DA84AFF82E6F69DC8',
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
            channel_id: 'channel-35',
            base_denom: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-8'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/13B2C536BB057AC79D5616B8EA1B9540EC1F2170718CAFF6F0083C966FFFED0B',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/13B2C536BB057AC79D5616B8EA1B9540EC1F2170718CAFF6F0083C966FFFED0B',
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
            channel_id: 'channel-6994',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/6FA7B62692FBCA2E51F567947035DE3C5D7333D49D13B85A25F358E80DF4E991',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/6FA7B62692FBCA2E51F567947035DE3C5D7333D49D13B85A25F358E80DF4E991',
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
            channel_id: 'channel-6994',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The native token of Secret Network',
      denom_units: [{
          denom: 'ibc/E3459360643C2555C57C7DAB0567FA762B42D5D6D45A76615EA7D99D933AEC04',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'ibc/E3459360643C2555C57C7DAB0567FA762B42D5D6D45A76615EA7D99D933AEC04',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
        }],
      socials: {
        website: 'https://scrt.network/',
        twitter: 'https://twitter.com/SecretNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-91',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-14'
          }
        }]
    },
    {
      description: 'The native token of Stargaze',
      denom_units: [{
          denom: 'ibc/924CF5AAC6E825CC79DB3A220DB0689EEFFE4DB67382622D143884E6AC73C92A',
          exponent: 0,
          aliases: ['ustars']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      base: 'ibc/924CF5AAC6E825CC79DB3A220DB0689EEFFE4DB67382622D143884E6AC73C92A',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
      },
      coingecko_id: 'stargaze',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
        }],
      socials: {
        website: 'https://www.stargaze.zone/',
        twitter: 'https://twitter.com/StargazeZone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-291',
            base_denom: 'ustars',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-33'
          }
        }]
    },
    {
      description: 'The native token of Stride',
      denom_units: [{
          denom: 'ibc/CE9455F316C89EF327D7C92B20DD3A0FC9ED0F218BE46F341C6D140104980B4F',
          exponent: 0,
          aliases: ['ustrd']
        }, {
          denom: 'strd',
          exponent: 6
        }],
      base: 'ibc/CE9455F316C89EF327D7C92B20DD3A0FC9ED0F218BE46F341C6D140104980B4F',
      name: 'Stride',
      display: 'strd',
      symbol: 'STRD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
      },
      coingecko_id: 'stride',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
        }],
      socials: {
        website: 'https://stride.zone/',
        twitter: 'https://twitter.com/stride_zone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-162',
            base_denom: 'ustrd',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }]
    },
    {
      description: 'The native staking token of Terra.',
      denom_units: [{
          denom: 'ibc/70541FE5CA74E84F51753FC9CABC86E88FBC8874EF554882F4E0407137C2E0E3',
          exponent: 0,
          aliases: ['uluna']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      base: 'ibc/70541FE5CA74E84F51753FC9CABC86E88FBC8874EF554882F4E0407137C2E0E3',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
      },
      coingecko_id: 'terra-luna-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
        }],
      socials: {
        website: 'https://www.terra.money/',
        twitter: 'https://twitter.com/terra_money'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-300',
            base_denom: 'uluna',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-15'
          }
        }]
    },
    {
      description: 'The native token of Umee',
      denom_units: [{
          denom: 'ibc/738D2E738EC4DA519DA88979D79FF7BDB893AFAA5AEC230C518863E477A8D95A',
          exponent: 0,
          aliases: ['uumee']
        }, {
          denom: 'umee',
          exponent: 6
        }],
      base: 'ibc/738D2E738EC4DA519DA88979D79FF7BDB893AFAA5AEC230C518863E477A8D95A',
      name: 'Umee',
      display: 'umee',
      symbol: 'UMEE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
      },
      coingecko_id: 'umee',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-119',
            base_denom: 'uumee',
            chain_name: 'umee'
          },
          chain: {
            channel_id: 'channel-19'
          }
        }]
    }
  ]
};
export default assets;
    