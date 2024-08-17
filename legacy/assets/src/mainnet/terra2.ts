import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'terra2',
  assets: [
    {
      description: 'The native EVM, governance and staking token of the Acrechain',
      denom_units: [{
          denom: 'ibc/9042813519C8C2C19848C0A5E6E4ABB32D219A6F850C8F0D2A9157FE17B9C2DA',
          exponent: 0,
          aliases: ['aacre']
        }, {
          denom: 'acre',
          exponent: 18
        }],
      base: 'ibc/9042813519C8C2C19848C0A5E6E4ABB32D219A6F850C8F0D2A9157FE17B9C2DA',
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
            channel_id: 'channel-9',
            base_denom: 'aacre',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-77'
          }
        }]
    },
    {
      description: 'Overcollateralized stable coin for Arable derivatives v1',
      denom_units: [{
          denom: 'ibc/F153853A2327BCB56C2935B062107C3EE083125DCBF591D4E63244367EF4ADD7',
          exponent: 0,
          aliases: ['erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c']
        }, {
          denom: 'arusd',
          exponent: 18
        }],
      base: 'ibc/F153853A2327BCB56C2935B062107C3EE083125DCBF591D4E63244367EF4ADD7',
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
            channel_id: 'channel-9',
            base_denom: 'erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-77'
          }
        }]
    },
    {
      description: 'Ciento Exchange Token',
      denom_units: [{
          denom: 'ibc/644A3695F405A67B0DD6E414602B836614BA3566ABBF4F2DA6ED0D2BB4332125',
          exponent: 0,
          aliases: ['erc20/0xAE6D3334989a22A65228732446731438672418F2']
        }, {
          denom: 'cnto',
          exponent: 18
        }],
      base: 'ibc/644A3695F405A67B0DD6E414602B836614BA3566ABBF4F2DA6ED0D2BB4332125',
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
            channel_id: 'channel-9',
            base_denom: 'erc20/0xAE6D3334989a22A65228732446731438672418F2',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-77'
          }
        }]
    },
    {
      description: 'Akash Network is a decentralized cloud computing marketplace that connects users with unused computing resources, offering a cost-effective alternative to traditional cloud providers.',
      denom_units: [{
          denom: 'ibc/6DF5BAFB08A7BBE2B9793F602864147768B2FA1A1BE9F460F224B4C41409F4EA',
          exponent: 0,
          aliases: ['uakt']
        }, {
          denom: 'akt',
          exponent: 6
        }],
      base: 'ibc/6DF5BAFB08A7BBE2B9793F602864147768B2FA1A1BE9F460F224B4C41409F4EA',
      name: 'Akash Network',
      display: 'akt',
      symbol: 'AKT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
      },
      coingecko_id: 'akash-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg',
          theme: {
            primary_color_hex: '#bc342c'
          }
        }],
      socials: {
        website: 'https://akash.network/',
        twitter: 'https://twitter.com/akashnet_'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-116',
            base_denom: 'uakt',
            chain_name: 'akash'
          },
          chain: {
            channel_id: 'channel-273'
          }
        }]
    },
    {
      description: 'The native staking and governance token of Andromeda',
      denom_units: [{
          denom: 'ibc/E83DFA7C774804925765C4EFCBFAF2088AFE8B41302AB66000CA6234BD5976E4',
          exponent: 0,
          aliases: ['uandr']
        }, {
          denom: 'andr',
          exponent: 6
        }],
      coingecko_id: 'andromeda-2',
      base: 'ibc/E83DFA7C774804925765C4EFCBFAF2088AFE8B41302AB66000CA6234BD5976E4',
      name: 'Andr',
      display: 'andr',
      symbol: 'ANDR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/andromeda/images/andromeda-logo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/andromeda/images/andromeda-logo.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'uandr',
            chain_name: 'andromeda'
          },
          chain: {
            channel_id: 'channel-351'
          }
        }]
    },
    {
      description: 'Archway is a smart contract platform in the Cosmos ecosystem designed to reward developers by providing them with a share of transaction fees generated by their applications.',
      denom_units: [
        {
          denom: 'ibc/A06709D9DE8643F5B935DC4D7A6418944F18A03B75F85FCCA5CE794523D5BA8A',
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
      base: 'ibc/A06709D9DE8643F5B935DC4D7A6418944F18A03B75F85FCCA5CE794523D5BA8A',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg',
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
            channel_id: 'channel-50',
            base_denom: 'aarch',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-265'
          }
        }]
    },
    {
      description: 'Axelar is a decentralized interoperability network connecting multiple blockchain ecosystems, enabling seamless cross-chain communication and value transfer.',
      denom_units: [{
          denom: 'ibc/3E35008738AC049C9C1A1E37F785E947A8DAA9811B3EA3B25580664294056151',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/3E35008738AC049C9C1A1E37F785E947A8DAA9811B3EA3B25580664294056151',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      socials: {
        website: 'https://axelar.network/',
        twitter: 'https://twitter.com/axelarnetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }]
    },
    {
      description: 'The native governance token of Carbon',
      denom_units: [{
          denom: 'ibc/792AAE6279F4709F66068E29A79E6F16BBC0A9B93561A91FC040606793E62D6B',
          exponent: 0,
          aliases: ['swth']
        }, {
          denom: 'dswth',
          exponent: 8,
          aliases: ['SWTH']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/792AAE6279F4709F66068E29A79E6F16BBC0A9B93561A91FC040606793E62D6B',
      name: 'Carbon',
      display: 'dswth',
      symbol: 'SWTH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
      },
      coingecko_id: 'switcheo',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg',
          theme: {
            primary_color_hex: '#a5edf2'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'swth',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }]
    },
    {
      description: 'The native stablecoin of Carbon',
      denom_units: [{
          denom: 'ibc/B9B979301D10A9CD5080723000C797392EB33DFA4C5A5CF95F2B5AB077AAF018',
          exponent: 0,
          aliases: ['usc']
        }, {
          denom: 'dusc',
          exponent: 8,
          aliases: ['USC']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/B9B979301D10A9CD5080723000C797392EB33DFA4C5A5CF95F2B5AB077AAF018',
      name: 'Carbon USD Coin',
      display: 'dusc',
      symbol: 'USC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.svg'
      },
      coingecko_id: 'carbon-usd',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.svg',
          theme: {
            primary_color_hex: '#053e4f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'usc',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }]
    },
    {
      description: 'Grouped USD on Carbon',
      denom_units: [{
          denom: 'ibc/1F84E60240ED39D5D7E679E88A9622D3FB21F2E0DD04CC6CD3962D3D566EEB35',
          exponent: 0,
          aliases: ['cgt/1']
        }, {
          denom: 'usd',
          exponent: 18,
          aliases: ['USD']
        }],
      base: 'ibc/1F84E60240ED39D5D7E679E88A9622D3FB21F2E0DD04CC6CD3962D3D566EEB35',
      name: 'Carbon Grouped USD',
      display: 'usd',
      symbol: 'USD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.svg',
          theme: {
            primary_color_hex: '#043d4d'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'cgt/1',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }]
    },
    {
      description: 'Celestia is a modular blockchain network focused on data availability, allowing developers to deploy their own customizable blockchains with ease.',
      denom_units: [{
          denom: 'ibc/19313100CB022954D65361B26AC3C5BAFB0AEEEDF7DF86D44E8CA9F5148B6B08',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      base: 'ibc/19313100CB022954D65361B26AC3C5BAFB0AEEEDF7DF86D44E8CA9F5148B6B08',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      coingecko_id: 'celestia',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
          theme: {
            primary_color_hex: '#7c2cfb'
          }
        }],
      socials: {
        website: 'https://celestia.org/',
        twitter: 'https://twitter.com/CelestiaOrg'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'utia',
            chain_name: 'celestia'
          },
          chain: {
            channel_id: 'channel-300'
          }
        }]
    },
    {
      description: 'Native token for the cheqd network',
      denom_units: [{
          denom: 'ibc/42571BCE9220896912D379C54825BB92EC8C402F8BDC9D895D83937C3DA27BDF',
          exponent: 0,
          aliases: ['ncheq']
        }, {
          denom: 'cheq',
          exponent: 9
        }],
      base: 'ibc/42571BCE9220896912D379C54825BB92EC8C402F8BDC9D895D83937C3DA27BDF',
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
            channel_id: 'channel-34',
            base_denom: 'ncheq',
            chain_name: 'cheqd'
          },
          chain: {
            channel_id: 'channel-301'
          }
        }]
    },
    {
      description: 'Native Token of Comdex Protocol',
      denom_units: [{
          denom: 'ibc/6CD39EACF052B761E3ADC709A11747CFCCA49F07DA23A26E61DB1CEF4D0CCC33',
          exponent: 0,
          aliases: ['ucmdx']
        }, {
          denom: 'cmdx',
          exponent: 6
        }],
      base: 'ibc/6CD39EACF052B761E3ADC709A11747CFCCA49F07DA23A26E61DB1CEF4D0CCC33',
      name: 'Comdex',
      display: 'cmdx',
      symbol: 'CMDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
      },
      coingecko_id: 'comdex',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg',
          theme: {
            primary_color_hex: '#fc4454'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-51',
            base_denom: 'ucmdx',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-39'
          }
        }]
    },
    {
      description: 'Governance Token of Harbor protocol on Comdex network',
      denom_units: [{
          denom: 'ibc/AF5B6C16A304BA111AE9B75342B7BAAACB018D0EA9F0978C522D9E643496B75E',
          exponent: 0,
          aliases: ['uharbor']
        }, {
          denom: 'harbor',
          exponent: 6
        }],
      base: 'ibc/AF5B6C16A304BA111AE9B75342B7BAAACB018D0EA9F0978C522D9E643496B75E',
      name: 'Harbor',
      display: 'harbor',
      symbol: 'HARBOR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
      },
      coingecko_id: 'harbor-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg',
          theme: {
            primary_color_hex: '#645ca4'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-51',
            base_denom: 'uharbor',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-39'
          }
        }]
    },
    {
      description: 'Stable Token of Harbor protocol on Comdex network',
      denom_units: [{
          denom: 'ibc/BCB139B1FB690E0AC1AD98EBAAD281949ECB341872E697717BCF95B67917C34F',
          exponent: 0,
          aliases: ['ucmst']
        }, {
          denom: 'cmst',
          exponent: 6
        }],
      base: 'ibc/BCB139B1FB690E0AC1AD98EBAAD281949ECB341872E697717BCF95B67917C34F',
      name: 'CMST',
      display: 'cmst',
      symbol: 'CMST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
      },
      coingecko_id: 'composite',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-51',
            base_denom: 'ucmst',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-39'
          }
        }]
    },
    {
      description: 'ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.',
      denom_units: [{
          denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
          theme: {
            primary_color_hex: '#272d45'
          }
        }],
      socials: {
        website: 'https://cosmos.network',
        twitter: 'https://twitter.com/cosmoshub'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-339',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'The native token of Crescent',
      denom_units: [{
          denom: 'ibc/6F45FFC7C8BF941B356DAD73B41DD3D232CBB72025A0D9B82AAA0494D107297C',
          exponent: 0,
          aliases: ['ucre']
        }, {
          denom: 'cre',
          exponent: 6
        }],
      base: 'ibc/6F45FFC7C8BF941B356DAD73B41DD3D232CBB72025A0D9B82AAA0494D107297C',
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
            channel_id: 'channel-27',
            base_denom: 'ucre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-37'
          }
        }]
    },
    {
      description: 'The bonded token of Crescent',
      denom_units: [{
          denom: 'ibc/9425A82592DAB9CEF917CCBD2381DEB240D16EBF6E860DA4D66730D84420E761',
          exponent: 0,
          aliases: ['ubcre']
        }, {
          denom: 'bcre',
          exponent: 6
        }],
      base: 'ibc/9425A82592DAB9CEF917CCBD2381DEB240D16EBF6E860DA4D66730D84420E761',
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
            channel_id: 'channel-27',
            base_denom: 'ubcre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-37'
          }
        }]
    },
    {
      description: 'The native token of Decentr',
      denom_units: [{
          denom: 'ibc/326A3BB236160881C74AD82552DD7B74BA22F34843680498FC7960859B51A89A',
          exponent: 0,
          aliases: ['udec']
        }, {
          denom: 'dec',
          exponent: 6
        }],
      base: 'ibc/326A3BB236160881C74AD82552DD7B74BA22F34843680498FC7960859B51A89A',
      name: 'Decentr',
      display: 'dec',
      symbol: 'DEC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg'
      },
      coingecko_id: 'decentr',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg',
          theme: {
            primary_color_hex: '#4678e9'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'udec',
            chain_name: 'decentr'
          },
          chain: {
            channel_id: 'channel-315'
          }
        }]
    },
    {
      description: 'DYDX is a decentralized trading platform focused on derivatives and perpetual contracts, offering a secure and efficient trading experience without intermediaries.',
      denom_units: [{
          denom: 'ibc/21F3876A6F5A1A1231768FE8A065C04B5C728632B9B8BA8CA418829E0214D8EE',
          exponent: 0,
          aliases: ['adydx']
        }, {
          denom: 'dydx',
          exponent: 18
        }],
      base: 'ibc/21F3876A6F5A1A1231768FE8A065C04B5C728632B9B8BA8CA418829E0214D8EE',
      name: 'dYdX',
      display: 'dydx',
      symbol: 'DYDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
      },
      coingecko_id: 'dydx-chain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg',
          theme: {
            primary_color_hex: '#21212f'
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://dydx.trade/',
        twitter: 'https://twitter.com/dYdX'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'adydx',
            chain_name: 'dydx'
          },
          chain: {
            channel_id: 'channel-299'
          }
        }]
    },
    {
      description: 'The native token of Furya',
      denom_units: [{
          denom: 'ibc/717ED17364D7D0C9F9049F1F38DCCB6C35AE67EB8199E490A4D6046B64F1B52D',
          exponent: 0,
          aliases: ['ufury']
        }, {
          denom: 'fury',
          exponent: 6
        }],
      base: 'ibc/717ED17364D7D0C9F9049F1F38DCCB6C35AE67EB8199E490A4D6046B64F1B52D',
      name: 'Furya',
      display: 'fury',
      symbol: 'FURY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      coingecko_id: 'fanfury',
      keywords: ['gaming', 'staking'],
      socials: {
        twitter: 'https://twitter.com/furyachain'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'ufury',
            chain_name: 'furya'
          },
          chain: {
            channel_id: 'channel-495'
          }
        }]
    },
    {
      description: 'Injective is a decentralized exchange protocol that enables fast, secure, and fully decentralized trading of derivatives, futures, and spot markets.',
      denom_units: [{
          denom: 'ibc/25BC59386BB65725F735EFC0C369BB717AA8B5DAD846EAF9CBF5D0F18F207211',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/25BC59386BB65725F735EFC0C369BB717AA8B5DAD846EAF9CBF5D0F18F207211',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg',
          theme: {
            primary_color_hex: '#04a2fc'
          }
        }],
      socials: {
        website: 'https://injective.com/',
        twitter: 'https://twitter.com/Injective_'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-151',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-255'
          }
        }]
    },
    {
      description: 'The second meme coin on Injective.',
      denom_units: [{
          denom: 'ibc/DCA52049AFBF7BC411F76A7549C56196BB74AE15F29C327DCEA20792CF67722E',
          exponent: 0,
          aliases: ['inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88']
        }, {
          denom: 'NINPO',
          exponent: 6
        }],
      base: 'ibc/DCA52049AFBF7BC411F76A7549C56196BB74AE15F29C327DCEA20792CF67722E',
      name: 'Ninpo',
      display: 'NINPO',
      symbol: 'NINPO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png',
          theme: {
            primary_color_hex: '#31292a'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-151',
            base_denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-255'
          }
        }]
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denom_units: [{
          denom: 'ibc/9D0D7D29E9731714209E2F45A193FBCAA7F135DD3874BCF6A7CFA17B16F32810',
          exponent: 0,
          aliases: ['inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h']
        }, {
          denom: 'JUDO',
          exponent: 6
        }],
      base: 'ibc/9D0D7D29E9731714209E2F45A193FBCAA7F135DD3874BCF6A7CFA17B16F32810',
      name: 'Judo',
      display: 'JUDO',
      symbol: 'JUDO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png',
          theme: {
            primary_color_hex: '#18120f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-151',
            base_denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-255'
          }
        }]
    },
    {
      description: 'A receipt token for lent INJ issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/A84E8FD65247227AF59CF55E7BA8BB5F773A9D022EB12F4B9AC397DF1BB48125',
          exponent: 0,
          aliases: ['inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f']
        }, {
          denom: 'nINJ',
          exponent: 18
        }],
      base: 'ibc/A84E8FD65247227AF59CF55E7BA8BB5F773A9D022EB12F4B9AC397DF1BB48125',
      name: 'Neptune Receipt INJ',
      display: 'nINJ',
      symbol: 'nINJ',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninj.png',
          theme: {
            primary_color_hex: '#293a6f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-151',
            base_denom: 'inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-255'
          }
        }]
    },
    {
      description: 'A receipt token for lent ATOM issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/296DE1EFC5608C9BEEBCAB9AD4CC499BA43FF512E6CBAD22B00AB76F885681D9',
          exponent: 0,
          aliases: ['inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780']
        }, {
          denom: 'nATOM',
          exponent: 6
        }],
      base: 'ibc/296DE1EFC5608C9BEEBCAB9AD4CC499BA43FF512E6CBAD22B00AB76F885681D9',
      name: 'Neptune Receipt ATOM',
      display: 'nATOM',
      symbol: 'nATOM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/natom.png',
          theme: {
            primary_color_hex: '#272f4b'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-151',
            base_denom: 'inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-255'
          }
        }]
    },
    {
      description: 'A receipt token for lent WETH issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/66114F1B1F4B4822F0AB4DC1408BD90FBD921B14E787458F0392539F27E1EBE6',
          exponent: 0,
          aliases: ['inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt']
        }, {
          denom: 'nWETH',
          exponent: 18
        }],
      base: 'ibc/66114F1B1F4B4822F0AB4DC1408BD90FBD921B14E787458F0392539F27E1EBE6',
      name: 'Neptune Receipt WETH',
      display: 'nWETH',
      symbol: 'nWETH',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nweth.png',
          theme: {
            primary_color_hex: '#2a303f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-151',
            base_denom: 'inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-255'
          }
        }]
    },
    {
      description: 'A receipt token for lent USDT issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/562C1BCF9F0C4CA6007CC498DC03799711B73CB8DB7C1107D23D5C37F3A4BCCB',
          exponent: 0,
          aliases: ['inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s']
        }, {
          denom: 'nUSDT',
          exponent: 6
        }],
      base: 'ibc/562C1BCF9F0C4CA6007CC498DC03799711B73CB8DB7C1107D23D5C37F3A4BCCB',
      name: 'Neptune Receipt USDT',
      display: 'nUSDT',
      symbol: 'nUSDT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nusdt.png',
          theme: {
            primary_color_hex: '#54ac94'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-151',
            base_denom: 'inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-255'
          }
        }]
    },
    {
      description: 'A receipt token for lent TIA issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/6199768B9CAD60EE3DE80A549298FC82D2C7CEEBA0728A47E5B27BA569C784A4',
          exponent: 0,
          aliases: ['inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv']
        }, {
          denom: 'nTIA',
          exponent: 6
        }],
      base: 'ibc/6199768B9CAD60EE3DE80A549298FC82D2C7CEEBA0728A47E5B27BA569C784A4',
      name: 'Neptune Receipt TIA',
      display: 'nTIA',
      symbol: 'nTIA',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ntia.png',
          theme: {
            primary_color_hex: '#7931f9'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-151',
            base_denom: 'inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-255'
          }
        }]
    },
    {
      description: 'DRUGS meme coin',
      denom_units: [{
          denom: 'ibc/622A5049E7AFD41C9B9BB48ECE6954B254ACD9B604BD31DE71AE931258F38507',
          exponent: 0,
          aliases: ['inj19vy83ne9tzta2yqynj8yg7dq9ghca6yqn9hyej']
        }, {
          denom: 'DRUGS',
          exponent: 6
        }],
      base: 'ibc/622A5049E7AFD41C9B9BB48ECE6954B254ACD9B604BD31DE71AE931258F38507',
      name: 'DRUGS',
      display: 'DRUGS',
      symbol: 'DRUGS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/drugs.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/drugs.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-151',
            base_denom: 'inj19vy83ne9tzta2yqynj8yg7dq9ghca6yqn9hyej',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-255'
          }
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/4CD525F166D32B0132C095F353F4C6F033B0FF5C49141470D1EFDA1D63303D04',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      base: 'ibc/4CD525F166D32B0132C095F353F4C6F033B0FF5C49141470D1EFDA1D63303D04',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg',
          theme: {
            primary_color_hex: '#fa7b7b'
          }
        }],
      socials: {
        website: 'https://junonetwork.io/',
        twitter: 'https://twitter.com/JunoNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-86',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'Kava is a decentralized finance (DeFi) platform that provides a range of financial services, including lending, borrowing, and stablecoins, leveraging the Cosmos and Ethereum ecosystems.',
      denom_units: [{
          denom: 'ibc/830107B6700EF8D76F5DB4B586C436A3D2A672939F93BDFC6543E12DD281453A',
          exponent: 0,
          aliases: ['ukava']
        }, {
          denom: 'kava',
          exponent: 6
        }],
      base: 'ibc/830107B6700EF8D76F5DB4B586C436A3D2A672939F93BDFC6543E12DD281453A',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg',
          theme: {
            primary_color_hex: '#e64942'
          }
        }],
      socials: {
        website: 'https://www.kava.io/',
        twitter: 'https://twitter.com/KAVA_CHAIN'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-138',
            base_denom: 'ukava',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-272'
          }
        }]
    },
    {
      description: 'Governance token of Kava Lend Protocol',
      denom_units: [{
          denom: 'ibc/F39424AEBEEC6AAB1EB598D363E3435BD2572D1A167EB67ECF3B5B985ADF4CAA',
          exponent: 0,
          aliases: ['hard']
        }, {
          denom: 'HARD',
          exponent: 6
        }],
      base: 'ibc/F39424AEBEEC6AAB1EB598D363E3435BD2572D1A167EB67ECF3B5B985ADF4CAA',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg',
          theme: {
            primary_color_hex: '#7b34ac'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-138',
            base_denom: 'hard',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-272'
          }
        }]
    },
    {
      description: 'Governance token of Kava Swap Protocol',
      denom_units: [{
          denom: 'ibc/F3515377D2177DE5A2D12C81926265261918E5BA2DEBAE3126AEB27BF994EDEE',
          exponent: 0,
          aliases: ['swp']
        }, {
          denom: 'SWP',
          exponent: 6
        }],
      base: 'ibc/F3515377D2177DE5A2D12C81926265261918E5BA2DEBAE3126AEB27BF994EDEE',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg',
          theme: {
            primary_color_hex: '#544cfc'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-138',
            base_denom: 'swp',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-272'
          }
        }]
    },
    {
      description: 'The native stablecoin of Kava',
      denom_units: [{
          denom: 'ibc/ECC03FD4232DF592CF086947881556FC13185FA2B905E6905C25662988B548BD',
          exponent: 0,
          aliases: ['usdx']
        }, {
          denom: 'USDX',
          exponent: 6
        }],
      base: 'ibc/ECC03FD4232DF592CF086947881556FC13185FA2B905E6905C25662988B548BD',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg',
          theme: {
            primary_color_hex: '#04d4a3'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-138',
            base_denom: 'usdx',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-272'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/9B19062D46CAB50361CE9B0A3E6D0A7A53AC9E7CB361F32A73CC733144A9A9E5',
          exponent: 0,
          aliases: ['erc20/tether/usdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      base: 'ibc/9B19062D46CAB50361CE9B0A3E6D0A7A53AC9E7CB361F32A73CC733144A9A9E5',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      coingecko_id: 'tether',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-138',
            base_denom: 'erc20/tether/usdt',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-272'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true,
            primary_color_hex: '#009393',
            background_color_hex: '#009393'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    },
    {
      description: 'Kujira is a decentralized finance (DeFi) platform offering a suite of tools and services for managing and optimizing digital assets and investments.',
      denom_units: [{
          denom: 'ibc/B22B4DD21586965DAEF42A7600BA371EA77C02E90FC8A7F2330BF9F9DE129B07',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/B22B4DD21586965DAEF42A7600BA371EA77C02E90FC8A7F2330BF9F9DE129B07',
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
            channel_id: 'channel-5',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }]
    },
    {
      description: 'Migaloo is a cosmwasm-powered, permissionless blockchain designed to build decentralized applications with a focus on interchain liquidity solutions.',
      denom_units: [{
          denom: 'ibc/36A02FFC4E74DF4F64305130C3DFA1B06BEAC775648927AA44467C76A77AB8DB',
          exponent: 0,
          aliases: ['uwhale']
        }, {
          denom: 'whale',
          exponent: 6
        }],
      base: 'ibc/36A02FFC4E74DF4F64305130C3DFA1B06BEAC775648927AA44467C76A77AB8DB',
      name: 'Whale',
      display: 'whale',
      symbol: 'WHALE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
      },
      coingecko_id: 'white-whale',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg',
          theme: {
            primary_color_hex: '#1c1c1c'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uwhale',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-86'
          }
        }]
    },
    {
      description: 'Neutron is a smart contract blockchain within the Cosmos ecosystem, leveraging the Cosmos Hub\'s security to provide cross-chain DeFi applications.',
      denom_units: [{
          denom: 'ibc/7B7831150D7A8FF2A198DF4F8BD246F1BEA8E94B9ECD3EF7F8B6497B66BB206C',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/7B7831150D7A8FF2A198DF4F8BD246F1BEA8E94B9ECD3EF7F8B6497B66BB206C',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg',
          theme: {
            primary_color_hex: '#040404',
            background_color_hex: '#000000',
            circle: true
          }
        }],
      socials: {
        website: 'https://neutron.org/',
        twitter: 'https://twitter.com/Neutron_org'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-25',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-229'
          }
        }]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [{
          denom: 'ibc/29F67D16B5CCBB3AA0A605966059F1EB786DF8F28D7CF7C6B99BB9209DD1FB65',
          exponent: 0,
          aliases: ['neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj']
        }, {
          denom: 'bitcosmos',
          exponent: 6
        }],
      base: 'ibc/29F67D16B5CCBB3AA0A605966059F1EB786DF8F28D7CF7C6B99BB9209DD1FB65',
      name: 'Bitcosmos',
      display: 'bitcosmos',
      symbol: 'BTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png',
          theme: {
            primary_color_hex: '#1b0847'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-25',
            base_denom: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-229'
          }
        }]
    },
    {
      description: 'What the Fuck',
      denom_units: [{
          denom: 'ibc/35EAB57941109C2F067623E2C5030606DCEE1989154B1E3849337C10EE9F2B54',
          exponent: 0,
          aliases: ['neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf']
        }, {
          denom: 'wtf',
          exponent: 6
        }],
      base: 'ibc/35EAB57941109C2F067623E2C5030606DCEE1989154B1E3849337C10EE9F2B54',
      name: 'wtf',
      display: 'wtf',
      symbol: 'WTF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png',
          theme: {
            primary_color_hex: '#dcd5ab'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-25',
            base_denom: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-229'
          }
        }]
    },
    {
      description: 'Astro BOY',
      denom_units: [{
          denom: 'ibc/25189652669FB4FB7D02A5AB9A2B85D2706243A63B5EC0ACDDDABF06940A233E',
          exponent: 0,
          aliases: ['neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv']
        }, {
          denom: 'boy',
          exponent: 6
        }],
      base: 'ibc/25189652669FB4FB7D02A5AB9A2B85D2706243A63B5EC0ACDDDABF06940A233E',
      name: 'boy',
      display: 'boy',
      symbol: 'BOY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png',
          theme: {
            primary_color_hex: '#333333'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-25',
            base_denom: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-229'
          }
        }]
    },
    {
      description: 'The permissioned staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/5C523C7B62C2AE6352367441E12BE3EEE9DC97E7351C7247E8679410BB6489F0',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      base: 'ibc/5C523C7B62C2AE6352367441E12BE3EEE9DC97E7351C7247E8679410BB6489F0',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg',
          theme: {
            primary_color_hex: '#a8bbfb'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-30',
            base_denom: 'ustake',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-253'
          }
        }]
    },
    {
      description: 'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denom_units: [{
          denom: 'ibc/AD488A50B66B9B4A53A331CF44A524451F691F733E23F42EB2022C288800302D',
          exponent: 0,
          aliases: ['ufrienzies']
        }, {
          denom: 'frienzies',
          exponent: 6
        }],
      base: 'ibc/AD488A50B66B9B4A53A331CF44A524451F691F733E23F42EB2022C288800302D',
      display: 'frienzies',
      name: 'Frienzies',
      symbol: 'FRNZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg',
          theme: {
            primary_color_hex: '#04041c'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-30',
            base_denom: 'ufrienzies',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-253'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/013451BC8F4457FABD61678500C7A8A57457256E923CD18C516031AF9715B66F',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/013451BC8F4457FABD61678500C7A8A57457256E923CD18C516031AF9715B66F',
      display: 'usdy',
      name: 'Ondo US Dollar Yield',
      symbol: 'USDY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.svg',
          theme: {
            primary_color_hex: '#142c5c'
          }
        }],
      coingecko_id: 'ondo-us-dollar-yield',
      socials: {
        website: 'https://ondo.finance/usdy',
        twitter: 'https://x.com/OndoFinance'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-30',
            base_denom: 'ausdy',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-253'
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
            channel_id: 'channel-251',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
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
            channel_id: 'channel-251',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'The native token of PRYZM',
      denom_units: [{
          denom: 'ibc/03FB6085AA5F4F7B30D2DBE438EFDA8B005FE9ADEDC71055D2E6B99A88D5CE8E',
          exponent: 0,
          aliases: ['upryzm']
        }, {
          denom: 'pryzm',
          exponent: 6
        }],
      base: 'ibc/03FB6085AA5F4F7B30D2DBE438EFDA8B005FE9ADEDC71055D2E6B99A88D5CE8E',
      name: 'Pryzm',
      display: 'pryzm',
      symbol: 'PRYZM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.svg',
          theme: {
            primary_color_hex: '#c6ddf5'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'upryzm',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-473'
          }
        }]
    },
    {
      description: 'Secret Network is a privacy-focused blockchain that enables private and secure smart contracts, protecting sensitive data.',
      denom_units: [{
          denom: 'ibc/10BD6ED30BA132AB96F146D71A23B46B2FC19E7D79F52707DC91F2F3A45040AD',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'ibc/10BD6ED30BA132AB96F146D71A23B46B2FC19E7D79F52707DC91F2F3A45040AD',
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
            channel_id: 'channel-16',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the StaFi Hub.',
      denom_units: [{
          denom: 'ibc/47724BE5D9F43CF5C0130939373E95EABAB3F5301A967A6651894C6420DE1016',
          exponent: 0,
          aliases: ['ufis']
        }, {
          denom: 'fis',
          exponent: 6
        }],
      base: 'ibc/47724BE5D9F43CF5C0130939373E95EABAB3F5301A967A6651894C6420DE1016',
      name: 'FIS',
      display: 'fis',
      symbol: 'FIS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
      },
      coingecko_id: 'stafi',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'ufis',
            chain_name: 'stafihub'
          },
          chain: {
            channel_id: 'channel-204'
          }
        }]
    },
    {
      description: 'Stargaze is a decentralized blockchain platform designed specifically for non-fungible tokens (NFTs), enabling creators to mint, trade, and interact with NFTs in a fully decentralized environment.',
      denom_units: [{
          denom: 'ibc/F11C82FE9BB5F210869161D4A76415218D1996A3EB2CD7FDAFE9192B78D940F8',
          exponent: 0,
          aliases: ['ustars']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      base: 'ibc/F11C82FE9BB5F210869161D4A76415218D1996A3EB2CD7FDAFE9192B78D940F8',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg',
          theme: {
            primary_color_hex: '#db2777'
          }
        }],
      socials: {
        website: 'https://www.stargaze.zone/',
        twitter: 'https://twitter.com/StargazeZone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-266',
            base_denom: 'ustars',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-324'
          }
        }]
    },
    {
      description: 'Stride is a liquid staking blockchain in the Cosmos ecosystem that allows users to stake any IBC-compatible tokens and receive stTokens in return, providing liquidity while earning staking rewards.',
      denom_units: [{
          denom: 'ibc/0EFC7B44625187BFB60AF09FF28A25FA49B68B959A505CC5313DF0498D8CF528',
          exponent: 0,
          aliases: ['ustrd']
        }, {
          denom: 'strd',
          exponent: 6
        }],
      base: 'ibc/0EFC7B44625187BFB60AF09FF28A25FA49B68B959A505CC5313DF0498D8CF528',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg',
          theme: {
            primary_color_hex: '#e4047c'
          }
        }],
      socials: {
        website: 'https://stride.zone/',
        twitter: 'https://twitter.com/stride_zone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-52',
            base_denom: 'ustrd',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-46'
          }
        }]
    },
    {
      description: 'Terra Classic is the original blockchain platform that powered the UST stablecoin and LUNA token before the launch of Terra 2.0, focusing on stablecoins and DeFi applications.',
      denom_units: [
        {
          denom: 'ibc/79B60804664911EB0B074690182CCA7332406417B1050A583BAF0904F6B54635',
          exponent: 0,
          aliases: ['uluna']
        },
        {
          denom: 'mluna',
          exponent: 3,
          aliases: ['milliluna']
        },
        {
          denom: 'luna',
          exponent: 6,
          aliases: ['lunc']
        }
      ],
      base: 'ibc/79B60804664911EB0B074690182CCA7332406417B1050A583BAF0904F6B54635',
      name: 'Luna Classic',
      display: 'luna',
      symbol: 'LUNC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg'
      },
      coingecko_id: 'terra-luna',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg',
          theme: {
            primary_color_hex: '#fcdb5b'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'uluna',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The USD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/A8C72721064D612FE3305263D387D1E31B805DA08C864C6AE28219A65850A2C0',
          exponent: 0,
          aliases: ['uusd']
        },
        {
          denom: 'musd',
          exponent: 3,
          aliases: ['milliusd']
        },
        {
          denom: 'ust',
          exponent: 6,
          aliases: ['ustc']
        }
      ],
      base: 'ibc/A8C72721064D612FE3305263D387D1E31B805DA08C864C6AE28219A65850A2C0',
      name: 'TerraClassicUSD',
      display: 'ust',
      symbol: 'USTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg'
      },
      coingecko_id: 'terrausd',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg',
          theme: {
            primary_color_hex: '#5493f2'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'uusd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The KRW stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/0C1F9AD97CA74C201028B9852C352EB332A5EEB0C388CBF04A7BC9B6527F9B59',
          exponent: 0,
          aliases: ['ukrw']
        },
        {
          denom: 'mkrw',
          exponent: 3,
          aliases: ['millikrw']
        },
        {
          denom: 'krt',
          exponent: 6,
          aliases: ['krtc']
        }
      ],
      base: 'ibc/0C1F9AD97CA74C201028B9852C352EB332A5EEB0C388CBF04A7BC9B6527F9B59',
      name: 'TerraClassicKRW',
      display: 'krt',
      symbol: 'KRTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg',
          theme: {
            primary_color_hex: '#4b83e0'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'ukrw',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The AUD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/01118C2BA3BC0B8DA603AFE19CA6311B32EB92FF0F07CDF89F0E551F8C7824A9',
          exponent: 0,
          aliases: ['uaud']
        },
        {
          denom: 'maud',
          exponent: 3,
          aliases: ['milliaud']
        },
        {
          denom: 'aut',
          exponent: 6,
          aliases: ['autc']
        }
      ],
      base: 'ibc/01118C2BA3BC0B8DA603AFE19CA6311B32EB92FF0F07CDF89F0E551F8C7824A9',
      display: 'aut',
      name: 'TerraClassicAUD',
      symbol: 'AUTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.svg',
          theme: {
            primary_color_hex: '#5981d7'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'uaud',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The CAD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/CB64685C6DA22640A032B4712C0C58A5788A89BA7FBE4A071CA80FCDB82833DD',
          exponent: 0,
          aliases: ['ucad']
        },
        {
          denom: 'mcad',
          exponent: 3,
          aliases: ['millicad']
        },
        {
          denom: 'cat',
          exponent: 6,
          aliases: ['catc']
        }
      ],
      base: 'ibc/CB64685C6DA22640A032B4712C0C58A5788A89BA7FBE4A071CA80FCDB82833DD',
      display: 'cat',
      name: 'TerraClassicCAD',
      symbol: 'CATC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.svg',
          theme: {
            primary_color_hex: '#de725b'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'ucad',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The CHF stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/8F270426A9406D0C3DD0BE3459903996E11188B3406E7BDC6387A1CBA90D22B1',
          exponent: 0,
          aliases: ['uchf']
        },
        {
          denom: 'mchf',
          exponent: 3,
          aliases: ['millichf']
        },
        {
          denom: 'cht',
          exponent: 6,
          aliases: ['chtc']
        }
      ],
      base: 'ibc/8F270426A9406D0C3DD0BE3459903996E11188B3406E7BDC6387A1CBA90D22B1',
      display: 'cht',
      name: 'TerraClassicCHF',
      symbol: 'CHTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.svg',
          theme: {
            primary_color_hex: '#c95c41'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'uchf',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The CNY stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/6C91B885C3AECF55CBD2323FA38C8D902D52C592910DDD7ADA77752C4D7B2150',
          exponent: 0,
          aliases: ['ucny']
        },
        {
          denom: 'mcny',
          exponent: 3,
          aliases: ['millicny']
        },
        {
          denom: 'cnt',
          exponent: 6,
          aliases: ['cntc']
        }
      ],
      base: 'ibc/6C91B885C3AECF55CBD2323FA38C8D902D52C592910DDD7ADA77752C4D7B2150',
      display: 'cnt',
      name: 'TerraClassicCNY',
      symbol: 'CNTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.svg',
          theme: {
            primary_color_hex: '#d3684c'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'ucny',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The DKK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/A34B641A6A265DA59DE1D95D942681D6C42F109A2CB2838B4C82C1835BF054BB',
          exponent: 0,
          aliases: ['udkk']
        },
        {
          denom: 'mdkk',
          exponent: 3,
          aliases: ['millidkk']
        },
        {
          denom: 'dkt',
          exponent: 6,
          aliases: ['dktc']
        }
      ],
      base: 'ibc/A34B641A6A265DA59DE1D95D942681D6C42F109A2CB2838B4C82C1835BF054BB',
      display: 'dkt',
      name: 'TerraClassicDKK',
      symbol: 'DKTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.svg',
          theme: {
            primary_color_hex: '#db300a'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'udkk',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The EUR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/66DBD0D880CCDE85FBEAE0A818FED8761490161403E84956B7F568A702ADBE35',
          exponent: 0,
          aliases: ['ueur']
        },
        {
          denom: 'meur',
          exponent: 3,
          aliases: ['millieur']
        },
        {
          denom: 'eut',
          exponent: 6,
          aliases: ['eutc']
        }
      ],
      base: 'ibc/66DBD0D880CCDE85FBEAE0A818FED8761490161403E84956B7F568A702ADBE35',
      display: 'eut',
      name: 'TerraClassicEUR',
      symbol: 'EUTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.svg',
          theme: {
            primary_color_hex: '#1535b2'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'ueur',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The GBP stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/0013FAB37ABC579FF23FC6BFFD0BEDD5BE2B8E05F2B10A9B909B4B30CB2F1CB0',
          exponent: 0,
          aliases: ['ugbp']
        },
        {
          denom: 'mgbp',
          exponent: 3,
          aliases: ['milligbp']
        },
        {
          denom: 'gbt',
          exponent: 6,
          aliases: ['gbtc']
        }
      ],
      base: 'ibc/0013FAB37ABC579FF23FC6BFFD0BEDD5BE2B8E05F2B10A9B909B4B30CB2F1CB0',
      display: 'gbt',
      name: 'TerraClassicGBP',
      symbol: 'GBTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.svg',
          theme: {
            primary_color_hex: '#d49b9c'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'ugbp',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The HKD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/9FF51E67D056B7AB443B6D80520649F470D469E64F6CF9D0AAD9934129504B3D',
          exponent: 0,
          aliases: ['uhkd']
        },
        {
          denom: 'mhkd',
          exponent: 3,
          aliases: ['millihkd']
        },
        {
          denom: 'hkt',
          exponent: 6,
          aliases: ['hktc']
        }
      ],
      base: 'ibc/9FF51E67D056B7AB443B6D80520649F470D469E64F6CF9D0AAD9934129504B3D',
      display: 'hkt',
      name: 'TerraClassicHKD',
      symbol: 'HKTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.svg',
          theme: {
            primary_color_hex: '#dc300a'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'uhkd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The IDR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/D63D3DF4E8C2A6A301F2345F6581AD7CEF4B9ADB264AF6F8994C84B125CD702C',
          exponent: 0,
          aliases: ['uidr']
        },
        {
          denom: 'midr',
          exponent: 3,
          aliases: ['milliidr']
        },
        {
          denom: 'idt',
          exponent: 6,
          aliases: ['idtc']
        }
      ],
      base: 'ibc/D63D3DF4E8C2A6A301F2345F6581AD7CEF4B9ADB264AF6F8994C84B125CD702C',
      display: 'idt',
      name: 'TerraClassicIDR',
      symbol: 'IDTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.svg',
          theme: {
            primary_color_hex: '#5893ed'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'uidr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The INR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/B316531980FAE1BDCD002B67F931A59C5561A95F1E1C85DA3D8CD5AAA19EA9E1',
          exponent: 0,
          aliases: ['uinr']
        },
        {
          denom: 'minr',
          exponent: 3,
          aliases: ['milliinr']
        },
        {
          denom: 'int',
          exponent: 6,
          aliases: ['intc']
        }
      ],
      base: 'ibc/B316531980FAE1BDCD002B67F931A59C5561A95F1E1C85DA3D8CD5AAA19EA9E1',
      display: 'int',
      name: 'TerraClassicINR',
      symbol: 'INTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.svg',
          theme: {
            primary_color_hex: '#4b87e6'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'uinr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The JPY stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/EFB566778CFF6EA3FC19B445D07EDF22F279C8A4E489C3A30E48452BE5F42F10',
          exponent: 0,
          aliases: ['ujpy']
        },
        {
          denom: 'mjpy',
          exponent: 3,
          aliases: ['millijpy']
        },
        {
          denom: 'jpt',
          exponent: 6,
          aliases: ['jptc']
        }
      ],
      base: 'ibc/EFB566778CFF6EA3FC19B445D07EDF22F279C8A4E489C3A30E48452BE5F42F10',
      display: 'jpt',
      name: 'TerraClassicJPY',
      symbol: 'JPTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.svg',
          theme: {
            primary_color_hex: '#cfcfcf'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'ujpy',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The MNT stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/DE79B34501AFB4C5BE8CF3875578A284EA806BBFA59F8510BEE73CA1B3F5C30A',
          exponent: 0,
          aliases: ['umnt']
        },
        {
          denom: 'mmnt',
          exponent: 3,
          aliases: ['millimnt']
        },
        {
          denom: 'mnt',
          exponent: 6,
          aliases: ['mntc']
        }
      ],
      base: 'ibc/DE79B34501AFB4C5BE8CF3875578A284EA806BBFA59F8510BEE73CA1B3F5C30A',
      display: 'mnt',
      name: 'TerraClassicMNT',
      symbol: 'MNTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.svg',
          theme: {
            primary_color_hex: '#4085f0'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'umnt',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The MYR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/D35BA681BC24C5406727D2B60D91241E927F1F12ACF715A1D5AF597D619D5A5F',
          exponent: 0,
          aliases: ['umyr']
        },
        {
          denom: 'mmyr',
          exponent: 3,
          aliases: ['millimyr']
        },
        {
          denom: 'myt',
          exponent: 6,
          aliases: ['mytc']
        }
      ],
      base: 'ibc/D35BA681BC24C5406727D2B60D91241E927F1F12ACF715A1D5AF597D619D5A5F',
      display: 'myt',
      name: 'TerraClassicMYR',
      symbol: 'MYTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.svg',
          theme: {
            primary_color_hex: '#5893ed'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'umyr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The NOK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/3B225C4587B5EF7BFBA3756810DDF251BFE378ECD6E12C6D8331CAEAE6E4904C',
          exponent: 0,
          aliases: ['unok']
        },
        {
          denom: 'mnok',
          exponent: 3,
          aliases: ['millinok']
        },
        {
          denom: 'not',
          exponent: 6,
          aliases: ['notc']
        }
      ],
      base: 'ibc/3B225C4587B5EF7BFBA3756810DDF251BFE378ECD6E12C6D8331CAEAE6E4904C',
      display: 'not',
      name: 'TerraClassicNOK',
      symbol: 'NOTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.svg',
          theme: {
            primary_color_hex: '#5493f3'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'unok',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The PHP stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/34ECD6E9DBCB013AB7ADAD41EB811BBF268087101A0F2B18FBECE13C0A573562',
          exponent: 0,
          aliases: ['uphp']
        },
        {
          denom: 'mphp',
          exponent: 3,
          aliases: ['milliphp']
        },
        {
          denom: 'pht',
          exponent: 6,
          aliases: ['phtc']
        }
      ],
      base: 'ibc/34ECD6E9DBCB013AB7ADAD41EB811BBF268087101A0F2B18FBECE13C0A573562',
      display: 'pht',
      name: 'TerraClassicPHP',
      symbol: 'PHTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.svg',
          theme: {
            primary_color_hex: '#e88057'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'uphp',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The SDR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/67CC681356C3354903C3FCBD7BA4380F038487B99B0FD4BE391ABBD0E7DABF9B',
          exponent: 0,
          aliases: ['usdr']
        },
        {
          denom: 'msdr',
          exponent: 3,
          aliases: ['millisdr']
        },
        {
          denom: 'sdt',
          exponent: 6,
          aliases: ['sdtc']
        }
      ],
      base: 'ibc/67CC681356C3354903C3FCBD7BA4380F038487B99B0FD4BE391ABBD0E7DABF9B',
      display: 'sdt',
      name: 'TerraClassicSDR',
      symbol: 'SDTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.svg',
          theme: {
            primary_color_hex: '#2fa4f1'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'usdr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The SEK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/046D79C7A412FA678D90AA4328FCB93C78BD4731A94E3CCFF710E2D107A61652',
          exponent: 0,
          aliases: ['usek']
        },
        {
          denom: 'msek',
          exponent: 3,
          aliases: ['millisek']
        },
        {
          denom: 'set',
          exponent: 6,
          aliases: ['setc']
        }
      ],
      base: 'ibc/046D79C7A412FA678D90AA4328FCB93C78BD4731A94E3CCFF710E2D107A61652',
      display: 'set',
      name: 'TerraClassicSEK',
      symbol: 'SETC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.svg',
          theme: {
            primary_color_hex: '#2e71e1'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'usek',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The SGD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/CD3858241D5F38BC1883666CFCD823A27770D74CE307E471976BF5C1D59BD468',
          exponent: 0,
          aliases: ['usgd']
        },
        {
          denom: 'msgd',
          exponent: 3,
          aliases: ['millisgd']
        },
        {
          denom: 'sgt',
          exponent: 6,
          aliases: ['sgtc']
        }
      ],
      base: 'ibc/CD3858241D5F38BC1883666CFCD823A27770D74CE307E471976BF5C1D59BD468',
      display: 'sgt',
      name: 'TerraClassicSGD',
      symbol: 'SGTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.svg',
          theme: {
            primary_color_hex: '#4886e7'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'usgd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The THB stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/C8A8089D01543C642BDF09237BACE82C8484B118A9D44E8478F4AD0A0BC73E9A',
          exponent: 0,
          aliases: ['uthb']
        },
        {
          denom: 'mthb',
          exponent: 3,
          aliases: ['millithb']
        },
        {
          denom: 'tht',
          exponent: 6,
          aliases: ['thtc']
        }
      ],
      base: 'ibc/C8A8089D01543C642BDF09237BACE82C8484B118A9D44E8478F4AD0A0BC73E9A',
      display: 'tht',
      name: 'TerraClassicTHB',
      symbol: 'THTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.svg',
          theme: {
            primary_color_hex: '#5493f3'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'uthb',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The TWD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/6A2E339AD69FBBDC6058EA60379CD71E0D384731386F68389F6C4D0F78106234',
          exponent: 0,
          aliases: ['utwd']
        },
        {
          denom: 'mtwd',
          exponent: 3,
          aliases: ['millitwd']
        },
        {
          denom: 'twt',
          exponent: 6,
          aliases: ['twtc']
        }
      ],
      base: 'ibc/6A2E339AD69FBBDC6058EA60379CD71E0D384731386F68389F6C4D0F78106234',
      display: 'twt',
      name: 'TerraClassicTWD',
      symbol: 'TWTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.svg',
          theme: {
            primary_color_hex: '#5493f3'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'utwd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Acrechain',
      denom_units: [{
          denom: 'ibc/9042813519C8C2C19848C0A5E6E4ABB32D219A6F850C8F0D2A9157FE17B9C2DA',
          exponent: 0,
          aliases: ['aacre']
        }, {
          denom: 'acre',
          exponent: 18
        }],
      base: 'ibc/9042813519C8C2C19848C0A5E6E4ABB32D219A6F850C8F0D2A9157FE17B9C2DA',
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
            channel_id: 'channel-9',
            base_denom: 'aacre',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-77'
          }
        }]
    },
    {
      description: 'Overcollateralized stable coin for Arable derivatives v1',
      denom_units: [{
          denom: 'ibc/F153853A2327BCB56C2935B062107C3EE083125DCBF591D4E63244367EF4ADD7',
          exponent: 0,
          aliases: ['erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c']
        }, {
          denom: 'arusd',
          exponent: 18
        }],
      base: 'ibc/F153853A2327BCB56C2935B062107C3EE083125DCBF591D4E63244367EF4ADD7',
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
            channel_id: 'channel-9',
            base_denom: 'erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-77'
          }
        }]
    },
    {
      description: 'Ciento Exchange Token',
      denom_units: [{
          denom: 'ibc/644A3695F405A67B0DD6E414602B836614BA3566ABBF4F2DA6ED0D2BB4332125',
          exponent: 0,
          aliases: ['erc20/0xAE6D3334989a22A65228732446731438672418F2']
        }, {
          denom: 'cnto',
          exponent: 18
        }],
      base: 'ibc/644A3695F405A67B0DD6E414602B836614BA3566ABBF4F2DA6ED0D2BB4332125',
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
            channel_id: 'channel-9',
            base_denom: 'erc20/0xAE6D3334989a22A65228732446731438672418F2',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-77'
          }
        }]
    },
    {
      description: 'Akash Network is a decentralized cloud computing marketplace that connects users with unused computing resources, offering a cost-effective alternative to traditional cloud providers.',
      denom_units: [{
          denom: 'ibc/6DF5BAFB08A7BBE2B9793F602864147768B2FA1A1BE9F460F224B4C41409F4EA',
          exponent: 0,
          aliases: ['uakt']
        }, {
          denom: 'akt',
          exponent: 6
        }],
      base: 'ibc/6DF5BAFB08A7BBE2B9793F602864147768B2FA1A1BE9F460F224B4C41409F4EA',
      name: 'Akash Network',
      display: 'akt',
      symbol: 'AKT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
      },
      coingecko_id: 'akash-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg',
          theme: {
            primary_color_hex: '#bc342c'
          }
        }],
      socials: {
        website: 'https://akash.network/',
        twitter: 'https://twitter.com/akashnet_'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-116',
            base_denom: 'uakt',
            chain_name: 'akash'
          },
          chain: {
            channel_id: 'channel-273'
          }
        }]
    },
    {
      description: 'The native staking and governance token of Andromeda',
      denom_units: [{
          denom: 'ibc/E83DFA7C774804925765C4EFCBFAF2088AFE8B41302AB66000CA6234BD5976E4',
          exponent: 0,
          aliases: ['uandr']
        }, {
          denom: 'andr',
          exponent: 6
        }],
      coingecko_id: 'andromeda-2',
      base: 'ibc/E83DFA7C774804925765C4EFCBFAF2088AFE8B41302AB66000CA6234BD5976E4',
      name: 'Andr',
      display: 'andr',
      symbol: 'ANDR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/andromeda/images/andromeda-logo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/andromeda/images/andromeda-logo.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'uandr',
            chain_name: 'andromeda'
          },
          chain: {
            channel_id: 'channel-351'
          }
        }]
    },
    {
      description: 'Archway is a smart contract platform in the Cosmos ecosystem designed to reward developers by providing them with a share of transaction fees generated by their applications.',
      denom_units: [
        {
          denom: 'ibc/A06709D9DE8643F5B935DC4D7A6418944F18A03B75F85FCCA5CE794523D5BA8A',
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
      base: 'ibc/A06709D9DE8643F5B935DC4D7A6418944F18A03B75F85FCCA5CE794523D5BA8A',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg',
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
            channel_id: 'channel-50',
            base_denom: 'aarch',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-265'
          }
        }]
    },
    {
      description: 'Axelar is a decentralized interoperability network connecting multiple blockchain ecosystems, enabling seamless cross-chain communication and value transfer.',
      denom_units: [{
          denom: 'ibc/3E35008738AC049C9C1A1E37F785E947A8DAA9811B3EA3B25580664294056151',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/3E35008738AC049C9C1A1E37F785E947A8DAA9811B3EA3B25580664294056151',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      socials: {
        website: 'https://axelar.network/',
        twitter: 'https://twitter.com/axelarnetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }]
    },
    {
      description: 'The native governance token of Carbon',
      denom_units: [{
          denom: 'ibc/792AAE6279F4709F66068E29A79E6F16BBC0A9B93561A91FC040606793E62D6B',
          exponent: 0,
          aliases: ['swth']
        }, {
          denom: 'dswth',
          exponent: 8,
          aliases: ['SWTH']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/792AAE6279F4709F66068E29A79E6F16BBC0A9B93561A91FC040606793E62D6B',
      name: 'Carbon',
      display: 'dswth',
      symbol: 'SWTH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
      },
      coingecko_id: 'switcheo',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg',
          theme: {
            primary_color_hex: '#a5edf2'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'swth',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }]
    },
    {
      description: 'The native stablecoin of Carbon',
      denom_units: [{
          denom: 'ibc/B9B979301D10A9CD5080723000C797392EB33DFA4C5A5CF95F2B5AB077AAF018',
          exponent: 0,
          aliases: ['usc']
        }, {
          denom: 'dusc',
          exponent: 8,
          aliases: ['USC']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/B9B979301D10A9CD5080723000C797392EB33DFA4C5A5CF95F2B5AB077AAF018',
      name: 'Carbon USD Coin',
      display: 'dusc',
      symbol: 'USC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.svg'
      },
      coingecko_id: 'carbon-usd',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.svg',
          theme: {
            primary_color_hex: '#053e4f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'usc',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }]
    },
    {
      description: 'Grouped USD on Carbon',
      denom_units: [{
          denom: 'ibc/1F84E60240ED39D5D7E679E88A9622D3FB21F2E0DD04CC6CD3962D3D566EEB35',
          exponent: 0,
          aliases: ['cgt/1']
        }, {
          denom: 'usd',
          exponent: 18,
          aliases: ['USD']
        }],
      base: 'ibc/1F84E60240ED39D5D7E679E88A9622D3FB21F2E0DD04CC6CD3962D3D566EEB35',
      name: 'Carbon Grouped USD',
      display: 'usd',
      symbol: 'USD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.svg',
          theme: {
            primary_color_hex: '#043d4d'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'cgt/1',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }]
    },
    {
      description: 'Celestia is a modular blockchain network focused on data availability, allowing developers to deploy their own customizable blockchains with ease.',
      denom_units: [{
          denom: 'ibc/19313100CB022954D65361B26AC3C5BAFB0AEEEDF7DF86D44E8CA9F5148B6B08',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      base: 'ibc/19313100CB022954D65361B26AC3C5BAFB0AEEEDF7DF86D44E8CA9F5148B6B08',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      coingecko_id: 'celestia',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
          theme: {
            primary_color_hex: '#7c2cfb'
          }
        }],
      socials: {
        website: 'https://celestia.org/',
        twitter: 'https://twitter.com/CelestiaOrg'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'utia',
            chain_name: 'celestia'
          },
          chain: {
            channel_id: 'channel-300'
          }
        }]
    },
    {
      description: 'Native token for the cheqd network',
      denom_units: [{
          denom: 'ibc/42571BCE9220896912D379C54825BB92EC8C402F8BDC9D895D83937C3DA27BDF',
          exponent: 0,
          aliases: ['ncheq']
        }, {
          denom: 'cheq',
          exponent: 9
        }],
      base: 'ibc/42571BCE9220896912D379C54825BB92EC8C402F8BDC9D895D83937C3DA27BDF',
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
            channel_id: 'channel-34',
            base_denom: 'ncheq',
            chain_name: 'cheqd'
          },
          chain: {
            channel_id: 'channel-301'
          }
        }]
    },
    {
      description: 'Native Token of Comdex Protocol',
      denom_units: [{
          denom: 'ibc/6CD39EACF052B761E3ADC709A11747CFCCA49F07DA23A26E61DB1CEF4D0CCC33',
          exponent: 0,
          aliases: ['ucmdx']
        }, {
          denom: 'cmdx',
          exponent: 6
        }],
      base: 'ibc/6CD39EACF052B761E3ADC709A11747CFCCA49F07DA23A26E61DB1CEF4D0CCC33',
      name: 'Comdex',
      display: 'cmdx',
      symbol: 'CMDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
      },
      coingecko_id: 'comdex',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg',
          theme: {
            primary_color_hex: '#fc4454'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-51',
            base_denom: 'ucmdx',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-39'
          }
        }]
    },
    {
      description: 'Governance Token of Harbor protocol on Comdex network',
      denom_units: [{
          denom: 'ibc/AF5B6C16A304BA111AE9B75342B7BAAACB018D0EA9F0978C522D9E643496B75E',
          exponent: 0,
          aliases: ['uharbor']
        }, {
          denom: 'harbor',
          exponent: 6
        }],
      base: 'ibc/AF5B6C16A304BA111AE9B75342B7BAAACB018D0EA9F0978C522D9E643496B75E',
      name: 'Harbor',
      display: 'harbor',
      symbol: 'HARBOR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
      },
      coingecko_id: 'harbor-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg',
          theme: {
            primary_color_hex: '#645ca4'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-51',
            base_denom: 'uharbor',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-39'
          }
        }]
    },
    {
      description: 'Stable Token of Harbor protocol on Comdex network',
      denom_units: [{
          denom: 'ibc/BCB139B1FB690E0AC1AD98EBAAD281949ECB341872E697717BCF95B67917C34F',
          exponent: 0,
          aliases: ['ucmst']
        }, {
          denom: 'cmst',
          exponent: 6
        }],
      base: 'ibc/BCB139B1FB690E0AC1AD98EBAAD281949ECB341872E697717BCF95B67917C34F',
      name: 'CMST',
      display: 'cmst',
      symbol: 'CMST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
      },
      coingecko_id: 'composite',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-51',
            base_denom: 'ucmst',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-39'
          }
        }]
    },
    {
      description: 'ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.',
      denom_units: [{
          denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
          theme: {
            primary_color_hex: '#272d45'
          }
        }],
      socials: {
        website: 'https://cosmos.network',
        twitter: 'https://twitter.com/cosmoshub'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-339',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'The native token of Crescent',
      denom_units: [{
          denom: 'ibc/6F45FFC7C8BF941B356DAD73B41DD3D232CBB72025A0D9B82AAA0494D107297C',
          exponent: 0,
          aliases: ['ucre']
        }, {
          denom: 'cre',
          exponent: 6
        }],
      base: 'ibc/6F45FFC7C8BF941B356DAD73B41DD3D232CBB72025A0D9B82AAA0494D107297C',
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
            channel_id: 'channel-27',
            base_denom: 'ucre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-37'
          }
        }]
    },
    {
      description: 'The bonded token of Crescent',
      denom_units: [{
          denom: 'ibc/9425A82592DAB9CEF917CCBD2381DEB240D16EBF6E860DA4D66730D84420E761',
          exponent: 0,
          aliases: ['ubcre']
        }, {
          denom: 'bcre',
          exponent: 6
        }],
      base: 'ibc/9425A82592DAB9CEF917CCBD2381DEB240D16EBF6E860DA4D66730D84420E761',
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
            channel_id: 'channel-27',
            base_denom: 'ubcre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-37'
          }
        }]
    },
    {
      description: 'The native token of Decentr',
      denom_units: [{
          denom: 'ibc/326A3BB236160881C74AD82552DD7B74BA22F34843680498FC7960859B51A89A',
          exponent: 0,
          aliases: ['udec']
        }, {
          denom: 'dec',
          exponent: 6
        }],
      base: 'ibc/326A3BB236160881C74AD82552DD7B74BA22F34843680498FC7960859B51A89A',
      name: 'Decentr',
      display: 'dec',
      symbol: 'DEC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg'
      },
      coingecko_id: 'decentr',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg',
          theme: {
            primary_color_hex: '#4678e9'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'udec',
            chain_name: 'decentr'
          },
          chain: {
            channel_id: 'channel-315'
          }
        }]
    },
    {
      description: 'DYDX is a decentralized trading platform focused on derivatives and perpetual contracts, offering a secure and efficient trading experience without intermediaries.',
      denom_units: [{
          denom: 'ibc/21F3876A6F5A1A1231768FE8A065C04B5C728632B9B8BA8CA418829E0214D8EE',
          exponent: 0,
          aliases: ['adydx']
        }, {
          denom: 'dydx',
          exponent: 18
        }],
      base: 'ibc/21F3876A6F5A1A1231768FE8A065C04B5C728632B9B8BA8CA418829E0214D8EE',
      name: 'dYdX',
      display: 'dydx',
      symbol: 'DYDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
      },
      coingecko_id: 'dydx-chain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg',
          theme: {
            primary_color_hex: '#21212f'
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://dydx.trade/',
        twitter: 'https://twitter.com/dYdX'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'adydx',
            chain_name: 'dydx'
          },
          chain: {
            channel_id: 'channel-299'
          }
        }]
    },
    {
      description: 'The native token of Furya',
      denom_units: [{
          denom: 'ibc/717ED17364D7D0C9F9049F1F38DCCB6C35AE67EB8199E490A4D6046B64F1B52D',
          exponent: 0,
          aliases: ['ufury']
        }, {
          denom: 'fury',
          exponent: 6
        }],
      base: 'ibc/717ED17364D7D0C9F9049F1F38DCCB6C35AE67EB8199E490A4D6046B64F1B52D',
      name: 'Furya',
      display: 'fury',
      symbol: 'FURY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      coingecko_id: 'fanfury',
      keywords: ['gaming', 'staking'],
      socials: {
        twitter: 'https://twitter.com/furyachain'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'ufury',
            chain_name: 'furya'
          },
          chain: {
            channel_id: 'channel-495'
          }
        }]
    },
    {
      description: 'Injective is a decentralized exchange protocol that enables fast, secure, and fully decentralized trading of derivatives, futures, and spot markets.',
      denom_units: [{
          denom: 'ibc/25BC59386BB65725F735EFC0C369BB717AA8B5DAD846EAF9CBF5D0F18F207211',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/25BC59386BB65725F735EFC0C369BB717AA8B5DAD846EAF9CBF5D0F18F207211',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg',
          theme: {
            primary_color_hex: '#04a2fc'
          }
        }],
      socials: {
        website: 'https://injective.com/',
        twitter: 'https://twitter.com/Injective_'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-151',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-255'
          }
        }]
    },
    {
      description: 'The second meme coin on Injective.',
      denom_units: [{
          denom: 'ibc/DCA52049AFBF7BC411F76A7549C56196BB74AE15F29C327DCEA20792CF67722E',
          exponent: 0,
          aliases: ['inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88']
        }, {
          denom: 'NINPO',
          exponent: 6
        }],
      base: 'ibc/DCA52049AFBF7BC411F76A7549C56196BB74AE15F29C327DCEA20792CF67722E',
      name: 'Ninpo',
      display: 'NINPO',
      symbol: 'NINPO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png',
          theme: {
            primary_color_hex: '#31292a'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-151',
            base_denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-255'
          }
        }]
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denom_units: [{
          denom: 'ibc/9D0D7D29E9731714209E2F45A193FBCAA7F135DD3874BCF6A7CFA17B16F32810',
          exponent: 0,
          aliases: ['inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h']
        }, {
          denom: 'JUDO',
          exponent: 6
        }],
      base: 'ibc/9D0D7D29E9731714209E2F45A193FBCAA7F135DD3874BCF6A7CFA17B16F32810',
      name: 'Judo',
      display: 'JUDO',
      symbol: 'JUDO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png',
          theme: {
            primary_color_hex: '#18120f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-151',
            base_denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-255'
          }
        }]
    },
    {
      description: 'A receipt token for lent INJ issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/A84E8FD65247227AF59CF55E7BA8BB5F773A9D022EB12F4B9AC397DF1BB48125',
          exponent: 0,
          aliases: ['inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f']
        }, {
          denom: 'nINJ',
          exponent: 18
        }],
      base: 'ibc/A84E8FD65247227AF59CF55E7BA8BB5F773A9D022EB12F4B9AC397DF1BB48125',
      name: 'Neptune Receipt INJ',
      display: 'nINJ',
      symbol: 'nINJ',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninj.png',
          theme: {
            primary_color_hex: '#293a6f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-151',
            base_denom: 'inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-255'
          }
        }]
    },
    {
      description: 'A receipt token for lent ATOM issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/296DE1EFC5608C9BEEBCAB9AD4CC499BA43FF512E6CBAD22B00AB76F885681D9',
          exponent: 0,
          aliases: ['inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780']
        }, {
          denom: 'nATOM',
          exponent: 6
        }],
      base: 'ibc/296DE1EFC5608C9BEEBCAB9AD4CC499BA43FF512E6CBAD22B00AB76F885681D9',
      name: 'Neptune Receipt ATOM',
      display: 'nATOM',
      symbol: 'nATOM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/natom.png',
          theme: {
            primary_color_hex: '#272f4b'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-151',
            base_denom: 'inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-255'
          }
        }]
    },
    {
      description: 'A receipt token for lent WETH issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/66114F1B1F4B4822F0AB4DC1408BD90FBD921B14E787458F0392539F27E1EBE6',
          exponent: 0,
          aliases: ['inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt']
        }, {
          denom: 'nWETH',
          exponent: 18
        }],
      base: 'ibc/66114F1B1F4B4822F0AB4DC1408BD90FBD921B14E787458F0392539F27E1EBE6',
      name: 'Neptune Receipt WETH',
      display: 'nWETH',
      symbol: 'nWETH',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nweth.png',
          theme: {
            primary_color_hex: '#2a303f'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-151',
            base_denom: 'inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-255'
          }
        }]
    },
    {
      description: 'A receipt token for lent USDT issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/562C1BCF9F0C4CA6007CC498DC03799711B73CB8DB7C1107D23D5C37F3A4BCCB',
          exponent: 0,
          aliases: ['inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s']
        }, {
          denom: 'nUSDT',
          exponent: 6
        }],
      base: 'ibc/562C1BCF9F0C4CA6007CC498DC03799711B73CB8DB7C1107D23D5C37F3A4BCCB',
      name: 'Neptune Receipt USDT',
      display: 'nUSDT',
      symbol: 'nUSDT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nusdt.png',
          theme: {
            primary_color_hex: '#54ac94'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-151',
            base_denom: 'inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-255'
          }
        }]
    },
    {
      description: 'A receipt token for lent TIA issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/6199768B9CAD60EE3DE80A549298FC82D2C7CEEBA0728A47E5B27BA569C784A4',
          exponent: 0,
          aliases: ['inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv']
        }, {
          denom: 'nTIA',
          exponent: 6
        }],
      base: 'ibc/6199768B9CAD60EE3DE80A549298FC82D2C7CEEBA0728A47E5B27BA569C784A4',
      name: 'Neptune Receipt TIA',
      display: 'nTIA',
      symbol: 'nTIA',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ntia.png',
          theme: {
            primary_color_hex: '#7931f9'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-151',
            base_denom: 'inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-255'
          }
        }]
    },
    {
      description: 'DRUGS meme coin',
      denom_units: [{
          denom: 'ibc/622A5049E7AFD41C9B9BB48ECE6954B254ACD9B604BD31DE71AE931258F38507',
          exponent: 0,
          aliases: ['inj19vy83ne9tzta2yqynj8yg7dq9ghca6yqn9hyej']
        }, {
          denom: 'DRUGS',
          exponent: 6
        }],
      base: 'ibc/622A5049E7AFD41C9B9BB48ECE6954B254ACD9B604BD31DE71AE931258F38507',
      name: 'DRUGS',
      display: 'DRUGS',
      symbol: 'DRUGS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/drugs.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/drugs.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-151',
            base_denom: 'inj19vy83ne9tzta2yqynj8yg7dq9ghca6yqn9hyej',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-255'
          }
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/4CD525F166D32B0132C095F353F4C6F033B0FF5C49141470D1EFDA1D63303D04',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      base: 'ibc/4CD525F166D32B0132C095F353F4C6F033B0FF5C49141470D1EFDA1D63303D04',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg',
          theme: {
            primary_color_hex: '#fa7b7b'
          }
        }],
      socials: {
        website: 'https://junonetwork.io/',
        twitter: 'https://twitter.com/JunoNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-86',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'Kava is a decentralized finance (DeFi) platform that provides a range of financial services, including lending, borrowing, and stablecoins, leveraging the Cosmos and Ethereum ecosystems.',
      denom_units: [{
          denom: 'ibc/830107B6700EF8D76F5DB4B586C436A3D2A672939F93BDFC6543E12DD281453A',
          exponent: 0,
          aliases: ['ukava']
        }, {
          denom: 'kava',
          exponent: 6
        }],
      base: 'ibc/830107B6700EF8D76F5DB4B586C436A3D2A672939F93BDFC6543E12DD281453A',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg',
          theme: {
            primary_color_hex: '#e64942'
          }
        }],
      socials: {
        website: 'https://www.kava.io/',
        twitter: 'https://twitter.com/KAVA_CHAIN'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-138',
            base_denom: 'ukava',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-272'
          }
        }]
    },
    {
      description: 'Governance token of Kava Lend Protocol',
      denom_units: [{
          denom: 'ibc/F39424AEBEEC6AAB1EB598D363E3435BD2572D1A167EB67ECF3B5B985ADF4CAA',
          exponent: 0,
          aliases: ['hard']
        }, {
          denom: 'HARD',
          exponent: 6
        }],
      base: 'ibc/F39424AEBEEC6AAB1EB598D363E3435BD2572D1A167EB67ECF3B5B985ADF4CAA',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg',
          theme: {
            primary_color_hex: '#7b34ac'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-138',
            base_denom: 'hard',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-272'
          }
        }]
    },
    {
      description: 'Governance token of Kava Swap Protocol',
      denom_units: [{
          denom: 'ibc/F3515377D2177DE5A2D12C81926265261918E5BA2DEBAE3126AEB27BF994EDEE',
          exponent: 0,
          aliases: ['swp']
        }, {
          denom: 'SWP',
          exponent: 6
        }],
      base: 'ibc/F3515377D2177DE5A2D12C81926265261918E5BA2DEBAE3126AEB27BF994EDEE',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg',
          theme: {
            primary_color_hex: '#544cfc'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-138',
            base_denom: 'swp',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-272'
          }
        }]
    },
    {
      description: 'The native stablecoin of Kava',
      denom_units: [{
          denom: 'ibc/ECC03FD4232DF592CF086947881556FC13185FA2B905E6905C25662988B548BD',
          exponent: 0,
          aliases: ['usdx']
        }, {
          denom: 'USDX',
          exponent: 6
        }],
      base: 'ibc/ECC03FD4232DF592CF086947881556FC13185FA2B905E6905C25662988B548BD',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg',
          theme: {
            primary_color_hex: '#04d4a3'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-138',
            base_denom: 'usdx',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-272'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/9B19062D46CAB50361CE9B0A3E6D0A7A53AC9E7CB361F32A73CC733144A9A9E5',
          exponent: 0,
          aliases: ['erc20/tether/usdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      base: 'ibc/9B19062D46CAB50361CE9B0A3E6D0A7A53AC9E7CB361F32A73CC733144A9A9E5',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      coingecko_id: 'tether',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-138',
            base_denom: 'erc20/tether/usdt',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-272'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true,
            primary_color_hex: '#009393',
            background_color_hex: '#009393'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    },
    {
      description: 'Kujira is a decentralized finance (DeFi) platform offering a suite of tools and services for managing and optimizing digital assets and investments.',
      denom_units: [{
          denom: 'ibc/B22B4DD21586965DAEF42A7600BA371EA77C02E90FC8A7F2330BF9F9DE129B07',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/B22B4DD21586965DAEF42A7600BA371EA77C02E90FC8A7F2330BF9F9DE129B07',
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
            channel_id: 'channel-5',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }]
    },
    {
      description: 'Migaloo is a cosmwasm-powered, permissionless blockchain designed to build decentralized applications with a focus on interchain liquidity solutions.',
      denom_units: [{
          denom: 'ibc/36A02FFC4E74DF4F64305130C3DFA1B06BEAC775648927AA44467C76A77AB8DB',
          exponent: 0,
          aliases: ['uwhale']
        }, {
          denom: 'whale',
          exponent: 6
        }],
      base: 'ibc/36A02FFC4E74DF4F64305130C3DFA1B06BEAC775648927AA44467C76A77AB8DB',
      name: 'Whale',
      display: 'whale',
      symbol: 'WHALE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
      },
      coingecko_id: 'white-whale',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg',
          theme: {
            primary_color_hex: '#1c1c1c'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uwhale',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-86'
          }
        }]
    },
    {
      description: 'Neutron is a smart contract blockchain within the Cosmos ecosystem, leveraging the Cosmos Hub\'s security to provide cross-chain DeFi applications.',
      denom_units: [{
          denom: 'ibc/7B7831150D7A8FF2A198DF4F8BD246F1BEA8E94B9ECD3EF7F8B6497B66BB206C',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/7B7831150D7A8FF2A198DF4F8BD246F1BEA8E94B9ECD3EF7F8B6497B66BB206C',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg',
          theme: {
            primary_color_hex: '#040404',
            background_color_hex: '#000000',
            circle: true
          }
        }],
      socials: {
        website: 'https://neutron.org/',
        twitter: 'https://twitter.com/Neutron_org'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-25',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-229'
          }
        }]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [{
          denom: 'ibc/29F67D16B5CCBB3AA0A605966059F1EB786DF8F28D7CF7C6B99BB9209DD1FB65',
          exponent: 0,
          aliases: ['neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj']
        }, {
          denom: 'bitcosmos',
          exponent: 6
        }],
      base: 'ibc/29F67D16B5CCBB3AA0A605966059F1EB786DF8F28D7CF7C6B99BB9209DD1FB65',
      name: 'Bitcosmos',
      display: 'bitcosmos',
      symbol: 'BTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png',
          theme: {
            primary_color_hex: '#1b0847'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-25',
            base_denom: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-229'
          }
        }]
    },
    {
      description: 'What the Fuck',
      denom_units: [{
          denom: 'ibc/35EAB57941109C2F067623E2C5030606DCEE1989154B1E3849337C10EE9F2B54',
          exponent: 0,
          aliases: ['neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf']
        }, {
          denom: 'wtf',
          exponent: 6
        }],
      base: 'ibc/35EAB57941109C2F067623E2C5030606DCEE1989154B1E3849337C10EE9F2B54',
      name: 'wtf',
      display: 'wtf',
      symbol: 'WTF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png',
          theme: {
            primary_color_hex: '#dcd5ab'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-25',
            base_denom: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-229'
          }
        }]
    },
    {
      description: 'Astro BOY',
      denom_units: [{
          denom: 'ibc/25189652669FB4FB7D02A5AB9A2B85D2706243A63B5EC0ACDDDABF06940A233E',
          exponent: 0,
          aliases: ['neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv']
        }, {
          denom: 'boy',
          exponent: 6
        }],
      base: 'ibc/25189652669FB4FB7D02A5AB9A2B85D2706243A63B5EC0ACDDDABF06940A233E',
      name: 'boy',
      display: 'boy',
      symbol: 'BOY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png',
          theme: {
            primary_color_hex: '#333333'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-25',
            base_denom: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-229'
          }
        }]
    },
    {
      description: 'The permissioned staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/5C523C7B62C2AE6352367441E12BE3EEE9DC97E7351C7247E8679410BB6489F0',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      base: 'ibc/5C523C7B62C2AE6352367441E12BE3EEE9DC97E7351C7247E8679410BB6489F0',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg',
          theme: {
            primary_color_hex: '#a8bbfb'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-30',
            base_denom: 'ustake',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-253'
          }
        }]
    },
    {
      description: 'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denom_units: [{
          denom: 'ibc/AD488A50B66B9B4A53A331CF44A524451F691F733E23F42EB2022C288800302D',
          exponent: 0,
          aliases: ['ufrienzies']
        }, {
          denom: 'frienzies',
          exponent: 6
        }],
      base: 'ibc/AD488A50B66B9B4A53A331CF44A524451F691F733E23F42EB2022C288800302D',
      display: 'frienzies',
      name: 'Frienzies',
      symbol: 'FRNZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg',
          theme: {
            primary_color_hex: '#04041c'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-30',
            base_denom: 'ufrienzies',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-253'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/013451BC8F4457FABD61678500C7A8A57457256E923CD18C516031AF9715B66F',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/013451BC8F4457FABD61678500C7A8A57457256E923CD18C516031AF9715B66F',
      display: 'usdy',
      name: 'Ondo US Dollar Yield',
      symbol: 'USDY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.svg',
          theme: {
            primary_color_hex: '#142c5c'
          }
        }],
      coingecko_id: 'ondo-us-dollar-yield',
      socials: {
        website: 'https://ondo.finance/usdy',
        twitter: 'https://x.com/OndoFinance'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-30',
            base_denom: 'ausdy',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-253'
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
            channel_id: 'channel-251',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
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
            channel_id: 'channel-251',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'The native token of PRYZM',
      denom_units: [{
          denom: 'ibc/03FB6085AA5F4F7B30D2DBE438EFDA8B005FE9ADEDC71055D2E6B99A88D5CE8E',
          exponent: 0,
          aliases: ['upryzm']
        }, {
          denom: 'pryzm',
          exponent: 6
        }],
      base: 'ibc/03FB6085AA5F4F7B30D2DBE438EFDA8B005FE9ADEDC71055D2E6B99A88D5CE8E',
      name: 'Pryzm',
      display: 'pryzm',
      symbol: 'PRYZM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.svg',
          theme: {
            primary_color_hex: '#c6ddf5'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'upryzm',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-473'
          }
        }]
    },
    {
      description: 'Secret Network is a privacy-focused blockchain that enables private and secure smart contracts, protecting sensitive data.',
      denom_units: [{
          denom: 'ibc/10BD6ED30BA132AB96F146D71A23B46B2FC19E7D79F52707DC91F2F3A45040AD',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'ibc/10BD6ED30BA132AB96F146D71A23B46B2FC19E7D79F52707DC91F2F3A45040AD',
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
            channel_id: 'channel-16',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the StaFi Hub.',
      denom_units: [{
          denom: 'ibc/47724BE5D9F43CF5C0130939373E95EABAB3F5301A967A6651894C6420DE1016',
          exponent: 0,
          aliases: ['ufis']
        }, {
          denom: 'fis',
          exponent: 6
        }],
      base: 'ibc/47724BE5D9F43CF5C0130939373E95EABAB3F5301A967A6651894C6420DE1016',
      name: 'FIS',
      display: 'fis',
      symbol: 'FIS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
      },
      coingecko_id: 'stafi',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'ufis',
            chain_name: 'stafihub'
          },
          chain: {
            channel_id: 'channel-204'
          }
        }]
    },
    {
      description: 'Stargaze is a decentralized blockchain platform designed specifically for non-fungible tokens (NFTs), enabling creators to mint, trade, and interact with NFTs in a fully decentralized environment.',
      denom_units: [{
          denom: 'ibc/F11C82FE9BB5F210869161D4A76415218D1996A3EB2CD7FDAFE9192B78D940F8',
          exponent: 0,
          aliases: ['ustars']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      base: 'ibc/F11C82FE9BB5F210869161D4A76415218D1996A3EB2CD7FDAFE9192B78D940F8',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg',
          theme: {
            primary_color_hex: '#db2777'
          }
        }],
      socials: {
        website: 'https://www.stargaze.zone/',
        twitter: 'https://twitter.com/StargazeZone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-266',
            base_denom: 'ustars',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-324'
          }
        }]
    },
    {
      description: 'Stride is a liquid staking blockchain in the Cosmos ecosystem that allows users to stake any IBC-compatible tokens and receive stTokens in return, providing liquidity while earning staking rewards.',
      denom_units: [{
          denom: 'ibc/0EFC7B44625187BFB60AF09FF28A25FA49B68B959A505CC5313DF0498D8CF528',
          exponent: 0,
          aliases: ['ustrd']
        }, {
          denom: 'strd',
          exponent: 6
        }],
      base: 'ibc/0EFC7B44625187BFB60AF09FF28A25FA49B68B959A505CC5313DF0498D8CF528',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg',
          theme: {
            primary_color_hex: '#e4047c'
          }
        }],
      socials: {
        website: 'https://stride.zone/',
        twitter: 'https://twitter.com/stride_zone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-52',
            base_denom: 'ustrd',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-46'
          }
        }]
    },
    {
      description: 'Terra Classic is the original blockchain platform that powered the UST stablecoin and LUNA token before the launch of Terra 2.0, focusing on stablecoins and DeFi applications.',
      denom_units: [
        {
          denom: 'ibc/79B60804664911EB0B074690182CCA7332406417B1050A583BAF0904F6B54635',
          exponent: 0,
          aliases: ['uluna']
        },
        {
          denom: 'mluna',
          exponent: 3,
          aliases: ['milliluna']
        },
        {
          denom: 'luna',
          exponent: 6,
          aliases: ['lunc']
        }
      ],
      base: 'ibc/79B60804664911EB0B074690182CCA7332406417B1050A583BAF0904F6B54635',
      name: 'Luna Classic',
      display: 'luna',
      symbol: 'LUNC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg'
      },
      coingecko_id: 'terra-luna',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg',
          theme: {
            primary_color_hex: '#fcdb5b'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'uluna',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The USD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/A8C72721064D612FE3305263D387D1E31B805DA08C864C6AE28219A65850A2C0',
          exponent: 0,
          aliases: ['uusd']
        },
        {
          denom: 'musd',
          exponent: 3,
          aliases: ['milliusd']
        },
        {
          denom: 'ust',
          exponent: 6,
          aliases: ['ustc']
        }
      ],
      base: 'ibc/A8C72721064D612FE3305263D387D1E31B805DA08C864C6AE28219A65850A2C0',
      name: 'TerraClassicUSD',
      display: 'ust',
      symbol: 'USTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg'
      },
      coingecko_id: 'terrausd',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg',
          theme: {
            primary_color_hex: '#5493f2'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'uusd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The KRW stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/0C1F9AD97CA74C201028B9852C352EB332A5EEB0C388CBF04A7BC9B6527F9B59',
          exponent: 0,
          aliases: ['ukrw']
        },
        {
          denom: 'mkrw',
          exponent: 3,
          aliases: ['millikrw']
        },
        {
          denom: 'krt',
          exponent: 6,
          aliases: ['krtc']
        }
      ],
      base: 'ibc/0C1F9AD97CA74C201028B9852C352EB332A5EEB0C388CBF04A7BC9B6527F9B59',
      name: 'TerraClassicKRW',
      display: 'krt',
      symbol: 'KRTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg',
          theme: {
            primary_color_hex: '#4b83e0'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'ukrw',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The AUD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/01118C2BA3BC0B8DA603AFE19CA6311B32EB92FF0F07CDF89F0E551F8C7824A9',
          exponent: 0,
          aliases: ['uaud']
        },
        {
          denom: 'maud',
          exponent: 3,
          aliases: ['milliaud']
        },
        {
          denom: 'aut',
          exponent: 6,
          aliases: ['autc']
        }
      ],
      base: 'ibc/01118C2BA3BC0B8DA603AFE19CA6311B32EB92FF0F07CDF89F0E551F8C7824A9',
      display: 'aut',
      name: 'TerraClassicAUD',
      symbol: 'AUTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.svg',
          theme: {
            primary_color_hex: '#5981d7'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'uaud',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The CAD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/CB64685C6DA22640A032B4712C0C58A5788A89BA7FBE4A071CA80FCDB82833DD',
          exponent: 0,
          aliases: ['ucad']
        },
        {
          denom: 'mcad',
          exponent: 3,
          aliases: ['millicad']
        },
        {
          denom: 'cat',
          exponent: 6,
          aliases: ['catc']
        }
      ],
      base: 'ibc/CB64685C6DA22640A032B4712C0C58A5788A89BA7FBE4A071CA80FCDB82833DD',
      display: 'cat',
      name: 'TerraClassicCAD',
      symbol: 'CATC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.svg',
          theme: {
            primary_color_hex: '#de725b'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'ucad',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The CHF stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/8F270426A9406D0C3DD0BE3459903996E11188B3406E7BDC6387A1CBA90D22B1',
          exponent: 0,
          aliases: ['uchf']
        },
        {
          denom: 'mchf',
          exponent: 3,
          aliases: ['millichf']
        },
        {
          denom: 'cht',
          exponent: 6,
          aliases: ['chtc']
        }
      ],
      base: 'ibc/8F270426A9406D0C3DD0BE3459903996E11188B3406E7BDC6387A1CBA90D22B1',
      display: 'cht',
      name: 'TerraClassicCHF',
      symbol: 'CHTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.svg',
          theme: {
            primary_color_hex: '#c95c41'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'uchf',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The CNY stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/6C91B885C3AECF55CBD2323FA38C8D902D52C592910DDD7ADA77752C4D7B2150',
          exponent: 0,
          aliases: ['ucny']
        },
        {
          denom: 'mcny',
          exponent: 3,
          aliases: ['millicny']
        },
        {
          denom: 'cnt',
          exponent: 6,
          aliases: ['cntc']
        }
      ],
      base: 'ibc/6C91B885C3AECF55CBD2323FA38C8D902D52C592910DDD7ADA77752C4D7B2150',
      display: 'cnt',
      name: 'TerraClassicCNY',
      symbol: 'CNTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.svg',
          theme: {
            primary_color_hex: '#d3684c'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'ucny',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The DKK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/A34B641A6A265DA59DE1D95D942681D6C42F109A2CB2838B4C82C1835BF054BB',
          exponent: 0,
          aliases: ['udkk']
        },
        {
          denom: 'mdkk',
          exponent: 3,
          aliases: ['millidkk']
        },
        {
          denom: 'dkt',
          exponent: 6,
          aliases: ['dktc']
        }
      ],
      base: 'ibc/A34B641A6A265DA59DE1D95D942681D6C42F109A2CB2838B4C82C1835BF054BB',
      display: 'dkt',
      name: 'TerraClassicDKK',
      symbol: 'DKTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.svg',
          theme: {
            primary_color_hex: '#db300a'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'udkk',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The EUR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/66DBD0D880CCDE85FBEAE0A818FED8761490161403E84956B7F568A702ADBE35',
          exponent: 0,
          aliases: ['ueur']
        },
        {
          denom: 'meur',
          exponent: 3,
          aliases: ['millieur']
        },
        {
          denom: 'eut',
          exponent: 6,
          aliases: ['eutc']
        }
      ],
      base: 'ibc/66DBD0D880CCDE85FBEAE0A818FED8761490161403E84956B7F568A702ADBE35',
      display: 'eut',
      name: 'TerraClassicEUR',
      symbol: 'EUTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.svg',
          theme: {
            primary_color_hex: '#1535b2'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'ueur',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The GBP stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/0013FAB37ABC579FF23FC6BFFD0BEDD5BE2B8E05F2B10A9B909B4B30CB2F1CB0',
          exponent: 0,
          aliases: ['ugbp']
        },
        {
          denom: 'mgbp',
          exponent: 3,
          aliases: ['milligbp']
        },
        {
          denom: 'gbt',
          exponent: 6,
          aliases: ['gbtc']
        }
      ],
      base: 'ibc/0013FAB37ABC579FF23FC6BFFD0BEDD5BE2B8E05F2B10A9B909B4B30CB2F1CB0',
      display: 'gbt',
      name: 'TerraClassicGBP',
      symbol: 'GBTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.svg',
          theme: {
            primary_color_hex: '#d49b9c'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'ugbp',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The HKD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/9FF51E67D056B7AB443B6D80520649F470D469E64F6CF9D0AAD9934129504B3D',
          exponent: 0,
          aliases: ['uhkd']
        },
        {
          denom: 'mhkd',
          exponent: 3,
          aliases: ['millihkd']
        },
        {
          denom: 'hkt',
          exponent: 6,
          aliases: ['hktc']
        }
      ],
      base: 'ibc/9FF51E67D056B7AB443B6D80520649F470D469E64F6CF9D0AAD9934129504B3D',
      display: 'hkt',
      name: 'TerraClassicHKD',
      symbol: 'HKTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.svg',
          theme: {
            primary_color_hex: '#dc300a'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'uhkd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The IDR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/D63D3DF4E8C2A6A301F2345F6581AD7CEF4B9ADB264AF6F8994C84B125CD702C',
          exponent: 0,
          aliases: ['uidr']
        },
        {
          denom: 'midr',
          exponent: 3,
          aliases: ['milliidr']
        },
        {
          denom: 'idt',
          exponent: 6,
          aliases: ['idtc']
        }
      ],
      base: 'ibc/D63D3DF4E8C2A6A301F2345F6581AD7CEF4B9ADB264AF6F8994C84B125CD702C',
      display: 'idt',
      name: 'TerraClassicIDR',
      symbol: 'IDTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.svg',
          theme: {
            primary_color_hex: '#5893ed'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'uidr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The INR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/B316531980FAE1BDCD002B67F931A59C5561A95F1E1C85DA3D8CD5AAA19EA9E1',
          exponent: 0,
          aliases: ['uinr']
        },
        {
          denom: 'minr',
          exponent: 3,
          aliases: ['milliinr']
        },
        {
          denom: 'int',
          exponent: 6,
          aliases: ['intc']
        }
      ],
      base: 'ibc/B316531980FAE1BDCD002B67F931A59C5561A95F1E1C85DA3D8CD5AAA19EA9E1',
      display: 'int',
      name: 'TerraClassicINR',
      symbol: 'INTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.svg',
          theme: {
            primary_color_hex: '#4b87e6'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'uinr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The JPY stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/EFB566778CFF6EA3FC19B445D07EDF22F279C8A4E489C3A30E48452BE5F42F10',
          exponent: 0,
          aliases: ['ujpy']
        },
        {
          denom: 'mjpy',
          exponent: 3,
          aliases: ['millijpy']
        },
        {
          denom: 'jpt',
          exponent: 6,
          aliases: ['jptc']
        }
      ],
      base: 'ibc/EFB566778CFF6EA3FC19B445D07EDF22F279C8A4E489C3A30E48452BE5F42F10',
      display: 'jpt',
      name: 'TerraClassicJPY',
      symbol: 'JPTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.svg',
          theme: {
            primary_color_hex: '#cfcfcf'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'ujpy',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The MNT stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/DE79B34501AFB4C5BE8CF3875578A284EA806BBFA59F8510BEE73CA1B3F5C30A',
          exponent: 0,
          aliases: ['umnt']
        },
        {
          denom: 'mmnt',
          exponent: 3,
          aliases: ['millimnt']
        },
        {
          denom: 'mnt',
          exponent: 6,
          aliases: ['mntc']
        }
      ],
      base: 'ibc/DE79B34501AFB4C5BE8CF3875578A284EA806BBFA59F8510BEE73CA1B3F5C30A',
      display: 'mnt',
      name: 'TerraClassicMNT',
      symbol: 'MNTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.svg',
          theme: {
            primary_color_hex: '#4085f0'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'umnt',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The MYR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/D35BA681BC24C5406727D2B60D91241E927F1F12ACF715A1D5AF597D619D5A5F',
          exponent: 0,
          aliases: ['umyr']
        },
        {
          denom: 'mmyr',
          exponent: 3,
          aliases: ['millimyr']
        },
        {
          denom: 'myt',
          exponent: 6,
          aliases: ['mytc']
        }
      ],
      base: 'ibc/D35BA681BC24C5406727D2B60D91241E927F1F12ACF715A1D5AF597D619D5A5F',
      display: 'myt',
      name: 'TerraClassicMYR',
      symbol: 'MYTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.svg',
          theme: {
            primary_color_hex: '#5893ed'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'umyr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The NOK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/3B225C4587B5EF7BFBA3756810DDF251BFE378ECD6E12C6D8331CAEAE6E4904C',
          exponent: 0,
          aliases: ['unok']
        },
        {
          denom: 'mnok',
          exponent: 3,
          aliases: ['millinok']
        },
        {
          denom: 'not',
          exponent: 6,
          aliases: ['notc']
        }
      ],
      base: 'ibc/3B225C4587B5EF7BFBA3756810DDF251BFE378ECD6E12C6D8331CAEAE6E4904C',
      display: 'not',
      name: 'TerraClassicNOK',
      symbol: 'NOTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.svg',
          theme: {
            primary_color_hex: '#5493f3'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'unok',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The PHP stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/34ECD6E9DBCB013AB7ADAD41EB811BBF268087101A0F2B18FBECE13C0A573562',
          exponent: 0,
          aliases: ['uphp']
        },
        {
          denom: 'mphp',
          exponent: 3,
          aliases: ['milliphp']
        },
        {
          denom: 'pht',
          exponent: 6,
          aliases: ['phtc']
        }
      ],
      base: 'ibc/34ECD6E9DBCB013AB7ADAD41EB811BBF268087101A0F2B18FBECE13C0A573562',
      display: 'pht',
      name: 'TerraClassicPHP',
      symbol: 'PHTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.svg',
          theme: {
            primary_color_hex: '#e88057'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'uphp',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The SDR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/67CC681356C3354903C3FCBD7BA4380F038487B99B0FD4BE391ABBD0E7DABF9B',
          exponent: 0,
          aliases: ['usdr']
        },
        {
          denom: 'msdr',
          exponent: 3,
          aliases: ['millisdr']
        },
        {
          denom: 'sdt',
          exponent: 6,
          aliases: ['sdtc']
        }
      ],
      base: 'ibc/67CC681356C3354903C3FCBD7BA4380F038487B99B0FD4BE391ABBD0E7DABF9B',
      display: 'sdt',
      name: 'TerraClassicSDR',
      symbol: 'SDTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.svg',
          theme: {
            primary_color_hex: '#2fa4f1'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'usdr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The SEK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/046D79C7A412FA678D90AA4328FCB93C78BD4731A94E3CCFF710E2D107A61652',
          exponent: 0,
          aliases: ['usek']
        },
        {
          denom: 'msek',
          exponent: 3,
          aliases: ['millisek']
        },
        {
          denom: 'set',
          exponent: 6,
          aliases: ['setc']
        }
      ],
      base: 'ibc/046D79C7A412FA678D90AA4328FCB93C78BD4731A94E3CCFF710E2D107A61652',
      display: 'set',
      name: 'TerraClassicSEK',
      symbol: 'SETC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.svg',
          theme: {
            primary_color_hex: '#2e71e1'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'usek',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The SGD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/CD3858241D5F38BC1883666CFCD823A27770D74CE307E471976BF5C1D59BD468',
          exponent: 0,
          aliases: ['usgd']
        },
        {
          denom: 'msgd',
          exponent: 3,
          aliases: ['millisgd']
        },
        {
          denom: 'sgt',
          exponent: 6,
          aliases: ['sgtc']
        }
      ],
      base: 'ibc/CD3858241D5F38BC1883666CFCD823A27770D74CE307E471976BF5C1D59BD468',
      display: 'sgt',
      name: 'TerraClassicSGD',
      symbol: 'SGTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.svg',
          theme: {
            primary_color_hex: '#4886e7'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'usgd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The THB stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/C8A8089D01543C642BDF09237BACE82C8484B118A9D44E8478F4AD0A0BC73E9A',
          exponent: 0,
          aliases: ['uthb']
        },
        {
          denom: 'mthb',
          exponent: 3,
          aliases: ['millithb']
        },
        {
          denom: 'tht',
          exponent: 6,
          aliases: ['thtc']
        }
      ],
      base: 'ibc/C8A8089D01543C642BDF09237BACE82C8484B118A9D44E8478F4AD0A0BC73E9A',
      display: 'tht',
      name: 'TerraClassicTHB',
      symbol: 'THTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.svg',
          theme: {
            primary_color_hex: '#5493f3'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'uthb',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'The TWD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/6A2E339AD69FBBDC6058EA60379CD71E0D384731386F68389F6C4D0F78106234',
          exponent: 0,
          aliases: ['utwd']
        },
        {
          denom: 'mtwd',
          exponent: 3,
          aliases: ['millitwd']
        },
        {
          denom: 'twt',
          exponent: 6,
          aliases: ['twtc']
        }
      ],
      base: 'ibc/6A2E339AD69FBBDC6058EA60379CD71E0D384731386F68389F6C4D0F78106234',
      display: 'twt',
      name: 'TerraClassicTWD',
      symbol: 'TWTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.svg',
          theme: {
            primary_color_hex: '#5493f3'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85',
            base_denom: 'utwd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-314'
          }
        }]
    },
    {
      description: 'Auto componded USDC despoited into Ginkou on Migaloo chain',
      denom_units: [{
          denom: 'ibc/B2B60A0A69DA9C4B98C3042B5B0BDFF269A2251C3C93D0776939FA877DD0D054',
          exponent: 0,
          aliases: ['cw20:migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v']
        }, {
          denom: 'mUSDC',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v',
      base: 'ibc/B2B60A0A69DA9C4B98C3042B5B0BDFF269A2251C3C93D0776939FA877DD0D054',
      name: 'mUSDC',
      display: 'mUSDC',
      symbol: 'mUSDC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/mUSDC.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/mUSDC.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-2',
            base_denom: 'cw20:migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v',
            chain_name: 'migaloo'
          },
          chain: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87'
          }
        }]
    },
    {
      description: 'The native token cw20 for SIENNA on Secret Network',
      denom_units: [{
          denom: 'ibc/E9426E42CB218B28A9E0513D032008C5D2C502A2F38D03D984734A7F194B7B83',
          exponent: 0,
          aliases: ['cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4']
        }, {
          denom: 'sienna',
          exponent: 18
        }],
      type_asset: 'snip20',
      address: 'secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
      base: 'ibc/E9426E42CB218B28A9E0513D032008C5D2C502A2F38D03D984734A7F194B7B83',
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
            port: 'transfer',
            channel_id: 'channel-127',
            base_denom: 'cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-382'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/E3EB36E35D0B2929B9FCD5334F37C1EA0BB51E79B5ACD07F7F2D6D942B50CF8B',
          exponent: 0,
          aliases: ['cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip20',
      address: 'secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
      base: 'ibc/E3EB36E35D0B2929B9FCD5334F37C1EA0BB51E79B5ACD07F7F2D6D942B50CF8B',
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
            port: 'transfer',
            channel_id: 'channel-127',
            base_denom: 'cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-382'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/668ED795BD27CD1D10F79288D66D11D01EFDEB115EB25FCD67263BF1F66A8832',
          exponent: 0,
          aliases: ['cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip25',
      address: 'secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
      base: 'ibc/668ED795BD27CD1D10F79288D66D11D01EFDEB115EB25FCD67263BF1F66A8832',
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
            port: 'transfer',
            channel_id: 'channel-127',
            base_denom: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-382'
          }
        }]
    },
    {
      description: 'The native token cw20 for Silk on Secret Network',
      denom_units: [{
          denom: 'ibc/BBA1216F14E8B01B31A76D05DAAF437678A53DB61C1A606748CFD584A43E7113',
          exponent: 0,
          aliases: ['cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd']
        }, {
          denom: 'silk',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
      base: 'ibc/BBA1216F14E8B01B31A76D05DAAF437678A53DB61C1A606748CFD584A43E7113',
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
            port: 'transfer',
            channel_id: 'channel-127',
            base_denom: 'cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-382'
          }
        }]
    },
    {
      description: 'The native token cw20 for SCRT Staking Derivatives on Secret Network',
      denom_units: [{
          denom: 'ibc/5A372BE43EA1E9CE4D2867A46628E075A06F787C4C4024AA5B4081F817DFD200',
          exponent: 0,
          aliases: ['cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4']
        }, {
          denom: 'stkd-scrt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
      base: 'ibc/5A372BE43EA1E9CE4D2867A46628E075A06F787C4C4024AA5B4081F817DFD200',
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
            port: 'transfer',
            channel_id: 'channel-127',
            base_denom: 'cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-382'
          }
        }]
    },
    {
      description: 'The native token cw20 for Button on Secret Network',
      denom_units: [{
          denom: 'ibc/65D1F45AA129BF98C776E270C8EA098AB01EC12D086D05D5625940D5BBE9E289',
          exponent: 0,
          aliases: ['cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt']
        }, {
          denom: 'butt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
      base: 'ibc/65D1F45AA129BF98C776E270C8EA098AB01EC12D086D05D5625940D5BBE9E289',
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
            port: 'transfer',
            channel_id: 'channel-127',
            base_denom: 'cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-382'
          }
        }]
    },
    {
      description: 'The native token cw20 for Alter on Secret Network',
      denom_units: [{
          denom: 'ibc/39A6383C31432101A28B8D92363CE01B37D39474E46675126D743B3C254A616C',
          exponent: 0,
          aliases: ['cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej']
        }, {
          denom: 'alter',
          exponent: 6
        }],
      base: 'ibc/39A6383C31432101A28B8D92363CE01B37D39474E46675126D743B3C254A616C',
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
            port: 'transfer',
            channel_id: 'channel-127',
            base_denom: 'cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-382'
          }
        }]
    },
    {
      description: 'The native token cw20 for Amber on Secret Network',
      denom_units: [{
          denom: 'ibc/F1EFAA9209365BB65C7F4611CD2C56BF4CD6BFB193D9D0E60B03A4D14F8FB0E1',
          exponent: 0,
          aliases: ['cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852']
        }, {
          denom: 'amber',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
      base: 'ibc/F1EFAA9209365BB65C7F4611CD2C56BF4CD6BFB193D9D0E60B03A4D14F8FB0E1',
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
            port: 'transfer',
            channel_id: 'channel-127',
            base_denom: 'cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-382'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shill on Secret Network',
      denom_units: [{
          denom: 'ibc/B56BA59B3B5EEE3E24DA325820B2B8CDC66E44CDF1E59FFBE80158E0A9E01B85',
          exponent: 0,
          aliases: ['cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse']
        }, {
          denom: 'shill',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
      base: 'ibc/B56BA59B3B5EEE3E24DA325820B2B8CDC66E44CDF1E59FFBE80158E0A9E01B85',
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
            port: 'transfer',
            channel_id: 'channel-127',
            base_denom: 'cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-382'
          }
        }]
    },
    {
      description: 'Auto componded USDC despoited into Ginkou on Migaloo chain',
      denom_units: [{
          denom: 'ibc/B2B60A0A69DA9C4B98C3042B5B0BDFF269A2251C3C93D0776939FA877DD0D054',
          exponent: 0,
          aliases: ['cw20:migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v']
        }, {
          denom: 'mUSDC',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v',
      base: 'ibc/B2B60A0A69DA9C4B98C3042B5B0BDFF269A2251C3C93D0776939FA877DD0D054',
      name: 'mUSDC',
      display: 'mUSDC',
      symbol: 'mUSDC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/mUSDC.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/mUSDC.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'transfer',
            channel_id: 'channel-2',
            base_denom: 'cw20:migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v',
            chain_name: 'migaloo'
          },
          chain: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87'
          }
        }]
    },
    {
      description: 'The native token cw20 for SIENNA on Secret Network',
      denom_units: [{
          denom: 'ibc/E9426E42CB218B28A9E0513D032008C5D2C502A2F38D03D984734A7F194B7B83',
          exponent: 0,
          aliases: ['cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4']
        }, {
          denom: 'sienna',
          exponent: 18
        }],
      type_asset: 'snip20',
      address: 'secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
      base: 'ibc/E9426E42CB218B28A9E0513D032008C5D2C502A2F38D03D984734A7F194B7B83',
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
            port: 'transfer',
            channel_id: 'channel-127',
            base_denom: 'cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-382'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/E3EB36E35D0B2929B9FCD5334F37C1EA0BB51E79B5ACD07F7F2D6D942B50CF8B',
          exponent: 0,
          aliases: ['cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip20',
      address: 'secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
      base: 'ibc/E3EB36E35D0B2929B9FCD5334F37C1EA0BB51E79B5ACD07F7F2D6D942B50CF8B',
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
            port: 'transfer',
            channel_id: 'channel-127',
            base_denom: 'cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-382'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/668ED795BD27CD1D10F79288D66D11D01EFDEB115EB25FCD67263BF1F66A8832',
          exponent: 0,
          aliases: ['cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip25',
      address: 'secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
      base: 'ibc/668ED795BD27CD1D10F79288D66D11D01EFDEB115EB25FCD67263BF1F66A8832',
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
            port: 'transfer',
            channel_id: 'channel-127',
            base_denom: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-382'
          }
        }]
    },
    {
      description: 'The native token cw20 for Silk on Secret Network',
      denom_units: [{
          denom: 'ibc/BBA1216F14E8B01B31A76D05DAAF437678A53DB61C1A606748CFD584A43E7113',
          exponent: 0,
          aliases: ['cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd']
        }, {
          denom: 'silk',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
      base: 'ibc/BBA1216F14E8B01B31A76D05DAAF437678A53DB61C1A606748CFD584A43E7113',
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
            port: 'transfer',
            channel_id: 'channel-127',
            base_denom: 'cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-382'
          }
        }]
    },
    {
      description: 'The native token cw20 for SCRT Staking Derivatives on Secret Network',
      denom_units: [{
          denom: 'ibc/5A372BE43EA1E9CE4D2867A46628E075A06F787C4C4024AA5B4081F817DFD200',
          exponent: 0,
          aliases: ['cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4']
        }, {
          denom: 'stkd-scrt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
      base: 'ibc/5A372BE43EA1E9CE4D2867A46628E075A06F787C4C4024AA5B4081F817DFD200',
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
            port: 'transfer',
            channel_id: 'channel-127',
            base_denom: 'cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-382'
          }
        }]
    },
    {
      description: 'The native token cw20 for Button on Secret Network',
      denom_units: [{
          denom: 'ibc/65D1F45AA129BF98C776E270C8EA098AB01EC12D086D05D5625940D5BBE9E289',
          exponent: 0,
          aliases: ['cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt']
        }, {
          denom: 'butt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
      base: 'ibc/65D1F45AA129BF98C776E270C8EA098AB01EC12D086D05D5625940D5BBE9E289',
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
            port: 'transfer',
            channel_id: 'channel-127',
            base_denom: 'cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-382'
          }
        }]
    },
    {
      description: 'The native token cw20 for Alter on Secret Network',
      denom_units: [{
          denom: 'ibc/39A6383C31432101A28B8D92363CE01B37D39474E46675126D743B3C254A616C',
          exponent: 0,
          aliases: ['cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej']
        }, {
          denom: 'alter',
          exponent: 6
        }],
      base: 'ibc/39A6383C31432101A28B8D92363CE01B37D39474E46675126D743B3C254A616C',
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
            port: 'transfer',
            channel_id: 'channel-127',
            base_denom: 'cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-382'
          }
        }]
    },
    {
      description: 'The native token cw20 for Amber on Secret Network',
      denom_units: [{
          denom: 'ibc/F1EFAA9209365BB65C7F4611CD2C56BF4CD6BFB193D9D0E60B03A4D14F8FB0E1',
          exponent: 0,
          aliases: ['cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852']
        }, {
          denom: 'amber',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
      base: 'ibc/F1EFAA9209365BB65C7F4611CD2C56BF4CD6BFB193D9D0E60B03A4D14F8FB0E1',
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
            port: 'transfer',
            channel_id: 'channel-127',
            base_denom: 'cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-382'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shill on Secret Network',
      denom_units: [{
          denom: 'ibc/B56BA59B3B5EEE3E24DA325820B2B8CDC66E44CDF1E59FFBE80158E0A9E01B85',
          exponent: 0,
          aliases: ['cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse']
        }, {
          denom: 'shill',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
      base: 'ibc/B56BA59B3B5EEE3E24DA325820B2B8CDC66E44CDF1E59FFBE80158E0A9E01B85',
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
            port: 'transfer',
            channel_id: 'channel-127',
            base_denom: 'cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-382'
          }
        }]
    }
  ]
};
export default assets;
    