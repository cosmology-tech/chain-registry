import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'composable',
  assets: [
    {
      description: 'Ethereum is a decentralized blockchain platform for running smart contracts and dApps, with Ether (ETH) as its native cryptocurrency, enabling a versatile ecosystem beyond just digital currency.',
      denom_units: [
        {
          denom: 'ibc/F9D075D4079FC56A9C49B601E54A45292C319D8B0E8CC0F8439041130AA7166C',
          exponent: 0,
          aliases: ['wei']
        },
        {
          denom: 'gwei',
          exponent: 9
        },
        {
          denom: 'eth',
          exponent: 18,
          aliases: ['ether']
        }
      ],
      type_asset: 'evm-base',
      base: 'ibc/F9D075D4079FC56A9C49B601E54A45292C319D8B0E8CC0F8439041130AA7166C',
      name: 'Ether',
      display: 'eth',
      symbol: 'ETH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
      },
      coingecko_id: 'ethereum',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg',
          theme: {
            primary_color_hex: '#303030'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'wei',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'Aave is an Open Source and Non-Custodial protocol to earn interest on deposits & borrow assets. It also features access to highly innovative flash loans, which let developers borrow instantly and easily; no collateral needed. With 16 different assets, 5 of which are stablecoins.',
      type_asset: 'erc20',
      address: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
      denom_units: [{
          denom: 'ibc/D699577F9FD6116299F6396696B8EA9D4D1BFB7D79D63F0A5F2FF06F49DF065F',
          exponent: 0,
          aliases: ['0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9']
        }, {
          denom: 'aave',
          exponent: 18
        }],
      base: 'ibc/D699577F9FD6116299F6396696B8EA9D4D1BFB7D79D63F0A5F2FF06F49DF065F',
      name: 'Aave',
      display: 'aave',
      symbol: 'AAVE',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg'
      },
      coingecko_id: 'aave',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'ApeCoin found new expression in web3 through art, gaming, entertainment, and events. APE is a token made to support what’s next, controlled, and built on by the community. It will serve as a decentralized protocol layer for community-led initiatives that drive culture forward into the metaverse.',
      type_asset: 'erc20',
      address: '0x4d224452801aced8b2f0aebe155379bb5d594381',
      denom_units: [{
          denom: 'ibc/A663A63F05108530D073ED2117283883064D18F505DF144C4142DDB7E8659738',
          exponent: 0,
          aliases: ['0x4d224452801aced8b2f0aebe155379bb5d594381']
        }, {
          denom: 'ape',
          exponent: 18
        }],
      base: 'ibc/A663A63F05108530D073ED2117283883064D18F505DF144C4142DDB7E8659738',
      name: 'ApeCoin',
      display: 'ape',
      symbol: 'APE',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg'
      },
      coingecko_id: 'apecoin',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0x4d224452801aced8b2f0aebe155379bb5d594381',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'Axie Infinity is a Pokémon-inspired digital pet universe where anyone can earn tokens through skilled gameplay and contributions to the ecosystem. Players can battle, collect, raise, and build a land-based kingdom for their pets (known as Axies).',
      type_asset: 'erc20',
      address: '0xbb0e17ef65f82ab018d8edd776e8dd940327b28b',
      denom_units: [{
          denom: 'ibc/DC03A3B473C171CA30E799B7D69B0B7DABBE3BF5B036991720E813EA0959DDF8',
          exponent: 0,
          aliases: ['0xbb0e17ef65f82ab018d8edd776e8dd940327b28b']
        }, {
          denom: 'axs',
          exponent: 18
        }],
      base: 'ibc/DC03A3B473C171CA30E799B7D69B0B7DABBE3BF5B036991720E813EA0959DDF8',
      name: 'Axie Infinity Shard',
      display: 'axs',
      symbol: 'AXS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/axs.svg'
      },
      coingecko_id: 'axie-infinity',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/axs.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0xbb0e17ef65f82ab018d8edd776e8dd940327b28b',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'A blockchain-based middleware, acting as a bridge between cryptocurrency smart contracts, data feeds, APIs and traditional bank account payments.',
      type_asset: 'erc20',
      address: '0x514910771af9ca656af840dff83e8264ecf986ca',
      denom_units: [{
          denom: 'ibc/D18DE9EC817E5583927285DFCFB8BDA27662CAA8D1FA3D38CF84705030F6F2E8',
          exponent: 0,
          aliases: ['0x514910771af9ca656af840dff83e8264ecf986ca']
        }, {
          denom: 'link',
          exponent: 18
        }],
      base: 'ibc/D18DE9EC817E5583927285DFCFB8BDA27662CAA8D1FA3D38CF84705030F6F2E8',
      name: 'Chainlink',
      display: 'link',
      symbol: 'LINK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg'
      },
      coingecko_id: 'chainlink',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg',
          theme: {
            primary_color_hex: '#2c5cdc'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0x514910771af9ca656af840dff83e8264ecf986ca',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'Maker is a decentralized finance (DeFi) platform on the Ethereum blockchain that facilitates the creation of the stablecoin DAI, which is pegged to the US dollar.',
      type_asset: 'erc20',
      address: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
      denom_units: [{
          denom: 'ibc/A6CC40E71F564A8C273FE489417C996B3660B8241E44182B64F8E18B8269969A',
          exponent: 0,
          aliases: ['0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2']
        }, {
          denom: 'mkr',
          exponent: 18
        }],
      base: 'ibc/A6CC40E71F564A8C273FE489417C996B3660B8241E44182B64F8E18B8269969A',
      name: 'Maker',
      display: 'mkr',
      symbol: 'MKR',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg'
      },
      coingecko_id: 'maker',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'SHIBA INU is a 100% decentralized community experiment with it claims that 1/2 the tokens have been sent to Vitalik and the other half were locked to a Uniswap pool and the keys burned.',
      type_asset: 'erc20',
      address: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
      denom_units: [{
          denom: 'ibc/158F220393E7A6C7324BC89730263BF6C9079EC541B69BA9E6D7EE6C9AEDCF66',
          exponent: 0,
          aliases: ['0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce']
        }, {
          denom: 'shib',
          exponent: 18
        }],
      base: 'ibc/158F220393E7A6C7324BC89730263BF6C9079EC541B69BA9E6D7EE6C9AEDCF66',
      name: 'Shiba Inu',
      display: 'shib',
      symbol: 'SHIB',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg'
      },
      coingecko_id: 'shiba-inu',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg',
          theme: {
            primary_color_hex: '#FFA409',
            background_color_hex: '#00000000'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'UNI token served as governance token for Uniswap protocol with 1 billion UNI have been minted at genesis. 60% of the UNI genesis supply is allocated to Uniswap community members and remaining for team, investors and advisors.',
      type_asset: 'erc20',
      address: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
      denom_units: [{
          denom: 'ibc/921D7E89244C857A07BAE5D6F81F2DC62865E72CA52B1D1319D99A86705B252E',
          exponent: 0,
          aliases: ['0x1f9840a85d5af5bf1d1762f925bdaddc4201f984']
        }, {
          denom: 'uni',
          exponent: 18
        }],
      base: 'ibc/921D7E89244C857A07BAE5D6F81F2DC62865E72CA52B1D1319D99A86705B252E',
      name: 'Uniswap',
      display: 'uni',
      symbol: 'UNI',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg'
      },
      coingecko_id: 'uniswap',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'Chain is a cloud blockchain protocol that enables organizations to build better financial services from the ground up powered by Sequence and Chain Core.',
      type_asset: 'erc20',
      address: '0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18',
      denom_units: [{
          denom: 'ibc/1A81C660B7417536B5F77B7968C647AC2EF9C56AA947C03AD88C492D29E1CB09',
          exponent: 0,
          aliases: ['0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18']
        }, {
          denom: 'xcn',
          exponent: 18
        }],
      base: 'ibc/1A81C660B7417536B5F77B7968C647AC2EF9C56AA947C03AD88C492D29E1CB09',
      name: 'Chain',
      display: 'xcn',
      symbol: 'XCN',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xcn.svg'
      },
      coingecko_id: 'chain-2',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xcn.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'Pepe is a community based memecoin with one mission: to make memecoins great again. Made to honor the iconic meme we all know and love, Pepe is here to take reign as the most memeable memecoin in existence, fueled purely by memetic power. Pepe is for the people.',
      type_asset: 'erc20',
      address: '0x6982508145454Ce325dDbE47a25d4ec3d2311933',
      denom_units: [{
          denom: 'ibc/C7D82BA3545AAEDD0DEA0123C2F8DA53873AA5D99C8D46BBE79827545F0DC1E6',
          exponent: 0,
          aliases: ['0x6982508145454Ce325dDbE47a25d4ec3d2311933']
        }, {
          denom: 'pepe',
          exponent: 18
        }],
      base: 'ibc/C7D82BA3545AAEDD0DEA0123C2F8DA53873AA5D99C8D46BBE79827545F0DC1E6',
      name: 'Pepe',
      display: 'pepe',
      symbol: 'PEPE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg'
      },
      coingecko_id: 'pepe',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg',
          theme: {
            primary_color_hex: '#cc3233'
          }
        }],
      keywords: ['meme'],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0x6982508145454Ce325dDbE47a25d4ec3d2311933',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'The OCC token acts as the fuel for the OccamRazer launchpad and it is indirectly used as well on the DAO governance layer.',
      type_asset: 'erc20',
      address: '0x2F109021aFe75B949429fe30523Ee7C0D5B27207',
      denom_units: [{
          denom: 'ibc/19BF897B03066D7CCC00C6A0963E175E22E2593C21179D3F38E6411B3C9EA16B',
          exponent: 0,
          aliases: ['0x2F109021aFe75B949429fe30523Ee7C0D5B27207']
        }, {
          denom: 'occ',
          exponent: 18
        }],
      base: 'ibc/19BF897B03066D7CCC00C6A0963E175E22E2593C21179D3F38E6411B3C9EA16B',
      name: 'OccamFi',
      display: 'occ',
      symbol: 'OCC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/occamfi.png'
      },
      coingecko_id: 'occamfi',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/occamfi.png',
          theme: {
            primary_color_hex: '#313648'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0x2F109021aFe75B949429fe30523Ee7C0D5B27207',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'The PAGE token is used for actions in the PageDAO NFT literary ecosystem and for DAO governance.',
      type_asset: 'erc20',
      address: '0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e',
      denom_units: [{
          denom: 'ibc/17690D9023E45DF8AB9F7030A470C782214AA963BFD656CF9DCD800A92F3F0F6',
          exponent: 0,
          aliases: ['0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e']
        }, {
          denom: 'page',
          exponent: 8
        }],
      base: 'ibc/17690D9023E45DF8AB9F7030A470C782214AA963BFD656CF9DCD800A92F3F0F6',
      name: 'Page',
      display: 'page',
      symbol: 'PAGE',
      coingecko_id: 'page',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg',
          theme: {
            primary_color_hex: '#ebb324'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'Gelotto blends gaming, DEFI, and fun Dapps in a unique Web3 ecosystem. Join us to become part of the house, earning from all Gelotto products. Our main goal? To bring the masses into Web3 with open, accessible, and enjoyable Dapps.',
      type_asset: 'erc20',
      address: '0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2',
      denom_units: [{
          denom: 'ibc/262D63AEF61017AD67C33909E2A0B0BD97C5AF559143BA0BE085DED815B12104',
          exponent: 0,
          aliases: ['0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2']
        }, {
          denom: 'glto',
          exponent: 6
        }],
      base: 'ibc/262D63AEF61017AD67C33909E2A0B0BD97C5AF559143BA0BE085DED815B12104',
      name: 'Gelotto',
      display: 'glto',
      symbol: 'GLTO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.svg',
          theme: {
            primary_color_hex: '#501cad'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      type_asset: 'erc20',
      address: '0x78a0A62Fba6Fb21A83FE8a3433d44C73a4017A6f',
      denom_units: [{
          denom: 'ibc/86BEC3CF0E2A1BF8BC3C5AD0AD3FC46350940F07F003A3C1577BF654E808217F',
          exponent: 0,
          aliases: ['0x78a0A62Fba6Fb21A83FE8a3433d44C73a4017A6f']
        }, {
          denom: 'ox',
          exponent: 18
        }],
      base: 'ibc/86BEC3CF0E2A1BF8BC3C5AD0AD3FC46350940F07F003A3C1577BF654E808217F',
      name: 'Open Exchange Token',
      display: 'ox',
      symbol: 'OX',
      coingecko_id: 'open-exchange-token',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ox.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ox.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0x78a0A62Fba6Fb21A83FE8a3433d44C73a4017A6f',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'BEAST: Battle, Breed, and Customize unique creatures powered by Ethereum & Cosmos',
      type_asset: 'erc20',
      address: '0xA4426666addBE8c4985377d36683D17FB40c31Be',
      denom_units: [{
          denom: 'ibc/1E0E07A6EDA2FA9D8C4DFC0575561B049172CF6748C47D7494614D712BF05DF9',
          exponent: 0,
          aliases: ['0xA4426666addBE8c4985377d36683D17FB40c31Be']
        }, {
          denom: 'beast',
          exponent: 6
        }],
      base: 'ibc/1E0E07A6EDA2FA9D8C4DFC0575561B049172CF6748C47D7494614D712BF05DF9',
      name: 'Gelotto BEAST',
      display: 'beast',
      symbol: 'BEAST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/beast.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/beast.png',
          theme: {
            primary_color_hex: '#21172b'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0xA4426666addBE8c4985377d36683D17FB40c31Be',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'PUNDIX token is the native token that functions within the Pundi X ecosystem, including PundiX Chain and XPOS.',
      type_asset: 'erc20',
      address: '0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38',
      denom_units: [{
          denom: 'ibc/9141B9C2A74294F94C6861FA6B9D5B562874BD84F7C4239569BFD540D86A7E1A',
          exponent: 0,
          aliases: ['0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38']
        }, {
          denom: 'PUNDIX',
          exponent: 18
        }],
      base: 'ibc/9141B9C2A74294F94C6861FA6B9D5B562874BD84F7C4239569BFD540D86A7E1A',
      name: 'Pundi X Token',
      display: 'PUNDIX',
      symbol: 'PUNDIX',
      coingecko_id: 'pundi-x-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.svg',
          theme: {
            primary_color_hex: '#f1d20c'
          }
        }],
      socials: {
        website: 'https://pundix.com',
        twitter: 'https://x.com/PundiXLabs'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'FXS is the value accrual and governance token of the entire Frax ecosystem. Frax is a fractional-algorithmic stablecoin protocol. It aims to provide a highly scalable, decentralized, algorithmic money in place of fixed-supply assets like BTC.',
      type_asset: 'erc20',
      address: '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
      denom_units: [{
          denom: 'ibc/5F9BE030FC355733EC79307409FA98398BBFC747C9430B326C144A74F6808B29',
          exponent: 0,
          aliases: ['0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0']
        }, {
          denom: 'fxs',
          exponent: 18
        }],
      base: 'ibc/5F9BE030FC355733EC79307409FA98398BBFC747C9430B326C144A74F6808B29',
      name: 'Frax Share',
      display: 'fxs',
      symbol: 'FXS',
      coingecko_id: 'frax-share',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.svg'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'CRV is the governance token for Curve Finance.',
      type_asset: 'erc20',
      address: '0xd533a949740bb3306d119cc777fa900ba034cd52',
      denom_units: [{
          denom: 'ibc/52C8C6197989684F891076F228F20CD1659AB6E1776E3B85E65CBBEC67DA5DED',
          exponent: 0,
          aliases: ['0xd533a949740bb3306d119cc777fa900ba034cd52']
        }, {
          denom: 'crv',
          exponent: 18
        }],
      base: 'ibc/52C8C6197989684F891076F228F20CD1659AB6E1776E3B85E65CBBEC67DA5DED',
      name: 'Curve DAO',
      display: 'crv',
      symbol: 'CRV',
      coingecko_id: 'curve-dao-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/crv.png',
          theme: {
            primary_color_hex: '#1fcbdb'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/crv.png'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0xd533a949740bb3306d119cc777fa900ba034cd52',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'The native governance token of Ethena.',
      type_asset: 'erc20',
      address: '0x57e114b691db790c35207b2e685d4a43181e6061',
      denom_units: [{
          denom: 'ibc/B089810D5A6316AD5E9C7808733DC4AB11C7BA3033221D28711FC7206BACB929',
          exponent: 0,
          aliases: ['0x57e114b691db790c35207b2e685d4a43181e6061']
        }, {
          denom: 'ena',
          exponent: 18
        }],
      base: 'ibc/B089810D5A6316AD5E9C7808733DC4AB11C7BA3033221D28711FC7206BACB929',
      name: 'Ethena',
      display: 'ena',
      symbol: 'ENA',
      coingecko_id: 'ethena',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ena.png',
          theme: {
            primary_color_hex: '#1c1c1c'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ena.png'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0x57e114b691db790c35207b2e685d4a43181e6061',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'Ankr is a Web3 decentralized infrastructure provider that helps developers, dapps, and stakers easily interact with multiple blockchains. It allows you to create DApps using API and RPC, staking on Ankr Earn, and use customized blockchain solutions for businesses.',
      type_asset: 'erc20',
      address: '0x8290333ceF9e6D528dD5618Fb97a76f268f3EDD4',
      denom_units: [{
          denom: 'ibc/E64D52799D200F95FC626C49D03E685CBE99132A0A6949A151D94BA34D56862D',
          exponent: 0,
          aliases: ['0x8290333ceF9e6D528dD5618Fb97a76f268f3EDD4']
        }, {
          denom: 'ankr',
          exponent: 18
        }],
      base: 'ibc/E64D52799D200F95FC626C49D03E685CBE99132A0A6949A151D94BA34D56862D',
      name: 'Ankr Network',
      display: 'ankr',
      symbol: 'ANKR',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ankr.svg'
        }],
      coingecko_id: 'ankr',
      socials: {
        website: 'https://www.ankr.com',
        twitter: 'https://x.com/ankr'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0x8290333ceF9e6D528dD5618Fb97a76f268f3EDD4',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'YUM is the Cacao Swap token, powering decentralised rails.',
      type_asset: 'erc20',
      address: '0xcE682c89C63d2850Cb2ca898E44D6c7c30d897a6',
      denom_units: [{
          denom: 'ibc/36FEE012470D3F8906244C38F8670E1225B73FD14363B01927B00074B47AC273',
          exponent: 0,
          aliases: ['0xcE682c89C63d2850Cb2ca898E44D6c7c30d897a6']
        }, {
          denom: 'yum',
          exponent: 18
        }],
      base: 'ibc/36FEE012470D3F8906244C38F8670E1225B73FD14363B01927B00074B47AC273',
      name: 'Yum',
      display: 'yum',
      symbol: 'YUM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yum.png',
          theme: {
            primary_color_hex: '#33a6e7'
          }
        }],
      socials: {
        website: 'https://cacaoswap.app',
        twitter: 'https://x.com/CacaoSwap'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0xcE682c89C63d2850Cb2ca898E44D6c7c30d897a6',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'Solana is a high-performance blockchain platform known for its fast transaction speeds, low costs, and scalability, ideal for decentralized applications and crypto projects.',
      denom_units: [{
          denom: 'ibc/C7F9D7DFF5469F53AB878ED0FBE53CC6B8B2720CD0ED09FD65F25343B13517CC',
          exponent: 0,
          aliases: ['Lamport']
        }, {
          denom: 'SOL',
          exponent: 9
        }],
      type_asset: 'svm-base',
      base: 'ibc/C7F9D7DFF5469F53AB878ED0FBE53CC6B8B2720CD0ED09FD65F25343B13517CC',
      name: 'Solana',
      display: 'SOL',
      symbol: 'SOL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.svg'
      },
      coingecko_id: 'solana',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.png',
          theme: {
            circle: true,
            background_color_hex: '#000000'
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg',
          theme: {
            circle: false,
            background_color_hex: '#00000000'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'Lamport',
            chain_name: 'solana'
          },
          chain: {
            channel_id: 'channel-71'
          }
        }]
    },
    {
      description: 'The Official Bonk Inu token',
      type_asset: 'erc20',
      address: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
      denom_units: [{
          denom: 'ibc/A09E5A2B0DE6CB5E8EC67F1662C7EE4202CEC192923DA1D4FCAEA078B4FCF5AC',
          exponent: 0,
          aliases: ['DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263']
        }, {
          denom: 'bonk',
          exponent: 5
        }],
      base: 'ibc/A09E5A2B0DE6CB5E8EC67F1662C7EE4202CEC192923DA1D4FCAEA078B4FCF5AC',
      name: 'Bonk',
      display: 'bonk',
      symbol: 'BONK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bonk.png'
      },
      coingecko_id: 'bonk',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bonk.png',
          theme: {
            primary_color_hex: '#ee950a'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
            chain_name: 'solana'
          },
          chain: {
            channel_id: 'channel-71'
          }
        }]
    },
    {
      description: 'Pyth is a protocol that allows market participants to publish pricing information on-chain for others to use. The protocol is an interaction between three parties:\n-Publishers submit pricing information to Pyth\'s oracle program. Pyth has multiple data publishers for every product to improve the accuracy and robustness of the system.\n-Pyth\'s oracle program combines publishers\' data to produce a single aggregate price and confidence interval.\nConsumers read the price information produced by the oracle program.\n\nPyth\'s oracle program runs simultaneously on both Solana mainnet and Pythnet. Each instance of the program is responsible for its own set of price feeds. Solana Price Feeds are available for use by Solana protocols. In this case, since the oracle program itself runs on Solana, the resulting prices are immediately available to consumers without requiring any additional work. Pythnet Price Feeds are available on 12+ blockchains. The prices constructed on Pythnet are transferred cross-chain to reach consumers on these blockchains.\n\nIn both cases, the critical component of the system is the oracle program that combines the data from each individual publisher. This program maintains a number of different Solana accounts that list the products on Pyth and their current price data. Publishers publish their price and confidence by interacting with the oracle program on every slot. The program stores this information in its accounts. The first price update in a slot additionally triggers price aggregation, which combines the price data from the previous slot into a single aggregate price and confidence interval. This aggregate price is written to the Solana account where it is readable by other on-chain programs and available for transmission to other blockchains.',
      type_asset: 'erc20',
      address: 'HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3',
      denom_units: [{
          denom: 'ibc/62F989E5DC56D690987A3B633C3A86CE85C0A19260E0AB203FBDF1CB22EF0063',
          exponent: 0,
          aliases: ['HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3']
        }, {
          denom: 'pyth',
          exponent: 6
        }],
      base: 'ibc/62F989E5DC56D690987A3B633C3A86CE85C0A19260E0AB203FBDF1CB22EF0063',
      name: 'Pyth Network',
      display: 'pyth',
      symbol: 'PYTH',
      coingecko_id: 'pyth-network',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pyth.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pyth.svg'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3',
            chain_name: 'solana'
          },
          chain: {
            channel_id: 'channel-71'
          }
        }]
    },
    {
      description: 'BSKT tracks the top assets across the crypto ecosystem',
      type_asset: 'erc20',
      address: '6gnCPhXtLnUD76HjQuSYPENLSZdG8RvDB1pTLM5aLSJA',
      denom_units: [{
          denom: 'ibc/B1762780F941FD2BDD4F0564C2F1CF13710B7E0FB8DC4D77A94A71A7361115C3',
          exponent: 0,
          aliases: ['6gnCPhXtLnUD76HjQuSYPENLSZdG8RvDB1pTLM5aLSJA']
        }, {
          denom: 'bskt',
          exponent: 5
        }],
      base: 'ibc/B1762780F941FD2BDD4F0564C2F1CF13710B7E0FB8DC4D77A94A71A7361115C3',
      name: 'Basket',
      display: 'bskt',
      symbol: 'BSKT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bskt.png'
      },
      coingecko_id: 'basket',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bskt.png',
          theme: {
            primary_color_hex: '#485573'
          }
        }],
      socials: {
        website: 'https://www.bskt.fi/',
        twitter: 'https://twitter.com/bsktfi'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: '6gnCPhXtLnUD76HjQuSYPENLSZdG8RvDB1pTLM5aLSJA',
            chain_name: 'solana'
          },
          chain: {
            channel_id: 'channel-71'
          }
        }]
    },
    {
      description: 'W is the native token powering the Wormhole interoperability platform.',
      type_asset: 'erc20',
      address: '85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ',
      denom_units: [{
          denom: 'ibc/804A1A334531205A32BE4C73F071B25ED757827678C8756715ACAF8438B78AE4',
          exponent: 0,
          aliases: ['85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ']
        }, {
          denom: 'w',
          exponent: 6
        }],
      base: 'ibc/804A1A334531205A32BE4C73F071B25ED757827678C8756715ACAF8438B78AE4',
      name: 'Wormhole Token',
      display: 'w',
      symbol: 'W',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/w.png'
      },
      coingecko_id: 'wormhole',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/w.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      socials: {
        website: 'https://wormhole.com/',
        twitter: 'https://twitter.com/wormhole'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: '85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ',
            chain_name: 'solana'
          },
          chain: {
            channel_id: 'channel-71'
          }
        }]
    },
    {
      description: 'dogwifhat is a meme coin that operates on Solana.',
      type_asset: 'erc20',
      address: 'EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm',
      denom_units: [{
          denom: 'ibc/BA34EAA22BBDA46C228DC70E4ED7E42A0867D5B051D625F953CC7B1CEF58C071',
          exponent: 0,
          aliases: ['EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm']
        }, {
          denom: 'wif',
          exponent: 6
        }],
      base: 'ibc/BA34EAA22BBDA46C228DC70E4ED7E42A0867D5B051D625F953CC7B1CEF58C071',
      name: 'dogwifhat',
      display: 'wif',
      symbol: 'WIF',
      coingecko_id: 'dogwifcoin',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/wif.png',
          theme: {
            primary_color_hex: '#a29482'
          }
        }],
      socials: {
        website: 'https://dogwifcoin.org/',
        twitter: 'https://twitter.com/dogwifcoin'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm',
            chain_name: 'solana'
          },
          chain: {
            channel_id: 'channel-71'
          }
        }]
    },
    {
      address: 'ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump',
      base: 'ibc/9D5DA3720001F91DD76B8F609A93F96688EC8185B54BF9A1A1450EB34FF2D912',
      description: 'Whinecoin is an experimental memecoin by the Sommelier Finance team.',
      name: 'WHINEcoin',
      display: 'whine',
      symbol: 'WHINE',
      type_asset: 'erc20',
      denom_units: [{
          denom: 'ibc/9D5DA3720001F91DD76B8F609A93F96688EC8185B54BF9A1A1450EB34FF2D912',
          exponent: 0,
          aliases: ['ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump']
        }, {
          denom: 'whine',
          exponent: 6
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/whine.png',
          theme: {
            primary_color_hex: '#FFFFFF',
            background_color_hex: '#FFFFFF',
            circle: false
          }
        }],
      socials: {
        website: 'https://whinecoin.com/',
        twitter: 'https://twitter.com/whinecoin'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump',
            chain_name: 'solana'
          },
          chain: {
            channel_id: 'channel-71'
          }
        }]
    },
    {
      description: 'Pepe Bruce Jenner',
      type_asset: 'erc20',
      address: 'ANu4Wuq86WzRU8tykszQUJ66eQzFNfkwap2HcQ5UaFaU',
      denom_units: [{
          denom: 'ibc/42EC3E55A9B8027537550D9D029843B4A48BEFAEA21D52282EE0449A74EDBE2A',
          exponent: 0,
          aliases: ['ANu4Wuq86WzRU8tykszQUJ66eQzFNfkwap2HcQ5UaFaU']
        }, {
          denom: 'pbj',
          exponent: 5
        }],
      base: 'ibc/42EC3E55A9B8027537550D9D029843B4A48BEFAEA21D52282EE0449A74EDBE2A',
      name: 'Pepe Bruce Jenner',
      display: 'pbj',
      symbol: 'PBJ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pbj.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pbj.png',
          theme: {
            primary_color_hex: '#488000',
            background_color_hex: '#ee0000'
          }
        }],
      socials: {
        website: 'https://sandwichswap.io/',
        twitter: 'https://twitter.com/pepebjenner_sol'
      },
      keywords: [
        'meme',
        'pump.fun',
        'pumpdotfun',
        'pepe'
      ],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ANu4Wuq86WzRU8tykszQUJ66eQzFNfkwap2HcQ5UaFaU',
            chain_name: 'solana'
          },
          chain: {
            channel_id: 'channel-71'
          }
        }]
    },
    {
      description: 'Agoric is a smart contract platform that uses JavaScript to enable developers to build secure and scalable decentralized applications (dApps) easily.',
      denom_units: [{
          denom: 'ibc/6C42AE3786DF3E1C8520107A7328D268D19AD631A922FB06F7B99005304AB26D',
          exponent: 0,
          aliases: ['ubld']
        }, {
          denom: 'bld',
          exponent: 6
        }],
      base: 'ibc/6C42AE3786DF3E1C8520107A7328D268D19AD631A922FB06F7B99005304AB26D',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-55',
            base_denom: 'ubld',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-13'
          }
        }]
    },
    {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [{
          denom: 'ibc/164E955DF8598E8589024E5A4A84AA9759D19B2695AC77B626BABD867511DEC4',
          exponent: 0,
          aliases: ['uist']
        }, {
          denom: 'ist',
          exponent: 6
        }],
      base: 'ibc/164E955DF8598E8589024E5A4A84AA9759D19B2695AC77B626BABD867511DEC4',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-55',
            base_denom: 'uist',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-13'
          }
        }]
    },
    {
      description: 'Archway is a smart contract platform in the Cosmos ecosystem designed to reward developers by providing them with a share of transaction fees generated by their applications.',
      denom_units: [
        {
          denom: 'ibc/9E3125737681BAD7BCB7AD87E845B1D277CF6E25555DAE2B6604C9BBCAB2C9C4',
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
      base: 'ibc/9E3125737681BAD7BCB7AD87E845B1D277CF6E25555DAE2B6604C9BBCAB2C9C4',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-108',
            base_denom: 'aarch',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-50'
          }
        }]
    },
    {
      description: 'Architects Token',
      type_asset: 'cw20',
      address: 'archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu',
      denom_units: [{
          denom: 'ibc/C65945584E298C1DDB1F1136EACA8FB9806CBE880677E312CAF15BDB2EE8EE88',
          exponent: 0,
          aliases: ['archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu']
        }, {
          denom: 'TOKN',
          exponent: 18
        }],
      base: 'ibc/C65945584E298C1DDB1F1136EACA8FB9806CBE880677E312CAF15BDB2EE8EE88',
      name: 'Architects Token',
      display: 'TOKN',
      symbol: 'TOKN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/tokn.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/tokn.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-108',
            base_denom: 'archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-50'
          }
        }]
    },
    {
      description: 'Axelar is a decentralized interoperability network connecting multiple blockchain ecosystems, enabling seamless cross-chain communication and value transfer.',
      denom_units: [{
          denom: 'ibc/DAA33E5758BACBE5F37E6ACC1E32F1C4A721C803BC6A174CB3717B9619DACEEC',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/DAA33E5758BACBE5F37E6ACC1E32F1C4A721C803BC6A174CB3717B9619DACEEC',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-127',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-46'
          }
        }]
    },
    {
      description: 'Canto is a Layer-1 blockchain built to deliver on the promise of DeFi',
      denom_units: [{
          denom: 'ibc/F07909AA80B8A21CE9E19922CE95BF175DB76C614DBCBF01C8CB1EB56E25E42C',
          exponent: 0,
          aliases: ['acanto']
        }, {
          denom: 'canto',
          exponent: 18
        }],
      base: 'ibc/F07909AA80B8A21CE9E19922CE95BF175DB76C614DBCBF01C8CB1EB56E25E42C',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-23',
            base_denom: 'acanto',
            chain_name: 'canto'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }]
    },
    {
      description: 'Celestia is a modular blockchain network focused on data availability, allowing developers to deploy their own customizable blockchains with ease.',
      denom_units: [{
          denom: 'ibc/1A7653323C1A9E267FF7BEBF40B3EEA8065E8F069F47F2493ABC3E0B621BF793',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      base: 'ibc/1A7653323C1A9E267FF7BEBF40B3EEA8065E8F069F47F2493ABC3E0B621BF793',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'utia',
            chain_name: 'celestia'
          },
          chain: {
            channel_id: 'channel-38'
          }
        }]
    },
    {
      description: 'Agoric is a smart contract platform that uses JavaScript to enable developers to build secure and scalable decentralized applications (dApps) easily.',
      denom_units: [{
          denom: 'ibc/6C42AE3786DF3E1C8520107A7328D268D19AD631A922FB06F7B99005304AB26D',
          exponent: 0,
          aliases: ['ubld']
        }, {
          denom: 'bld',
          exponent: 6
        }],
      base: 'ibc/6C42AE3786DF3E1C8520107A7328D268D19AD631A922FB06F7B99005304AB26D',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-55',
            base_denom: 'ubld',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-13'
          }
        }]
    },
    {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [{
          denom: 'ibc/164E955DF8598E8589024E5A4A84AA9759D19B2695AC77B626BABD867511DEC4',
          exponent: 0,
          aliases: ['uist']
        }, {
          denom: 'ist',
          exponent: 6
        }],
      base: 'ibc/164E955DF8598E8589024E5A4A84AA9759D19B2695AC77B626BABD867511DEC4',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-55',
            base_denom: 'uist',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-13'
          }
        }]
    },
    {
      description: 'Archway is a smart contract platform in the Cosmos ecosystem designed to reward developers by providing them with a share of transaction fees generated by their applications.',
      denom_units: [
        {
          denom: 'ibc/9E3125737681BAD7BCB7AD87E845B1D277CF6E25555DAE2B6604C9BBCAB2C9C4',
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
      base: 'ibc/9E3125737681BAD7BCB7AD87E845B1D277CF6E25555DAE2B6604C9BBCAB2C9C4',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-108',
            base_denom: 'aarch',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-50'
          }
        }]
    },
    {
      description: 'Architects Token',
      type_asset: 'cw20',
      address: 'archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu',
      denom_units: [{
          denom: 'ibc/C65945584E298C1DDB1F1136EACA8FB9806CBE880677E312CAF15BDB2EE8EE88',
          exponent: 0,
          aliases: ['archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu']
        }, {
          denom: 'TOKN',
          exponent: 18
        }],
      base: 'ibc/C65945584E298C1DDB1F1136EACA8FB9806CBE880677E312CAF15BDB2EE8EE88',
      name: 'Architects Token',
      display: 'TOKN',
      symbol: 'TOKN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/tokn.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/tokn.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-108',
            base_denom: 'archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-50'
          }
        }]
    },
    {
      description: 'Axelar is a decentralized interoperability network connecting multiple blockchain ecosystems, enabling seamless cross-chain communication and value transfer.',
      denom_units: [{
          denom: 'ibc/DAA33E5758BACBE5F37E6ACC1E32F1C4A721C803BC6A174CB3717B9619DACEEC',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/DAA33E5758BACBE5F37E6ACC1E32F1C4A721C803BC6A174CB3717B9619DACEEC',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-127',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-46'
          }
        }]
    },
    {
      description: 'Canto is a Layer-1 blockchain built to deliver on the promise of DeFi',
      denom_units: [{
          denom: 'ibc/F07909AA80B8A21CE9E19922CE95BF175DB76C614DBCBF01C8CB1EB56E25E42C',
          exponent: 0,
          aliases: ['acanto']
        }, {
          denom: 'canto',
          exponent: 18
        }],
      base: 'ibc/F07909AA80B8A21CE9E19922CE95BF175DB76C614DBCBF01C8CB1EB56E25E42C',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-23',
            base_denom: 'acanto',
            chain_name: 'canto'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }]
    },
    {
      description: 'Celestia is a modular blockchain network focused on data availability, allowing developers to deploy their own customizable blockchains with ease.',
      denom_units: [{
          denom: 'ibc/1A7653323C1A9E267FF7BEBF40B3EEA8065E8F069F47F2493ABC3E0B621BF793',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      base: 'ibc/1A7653323C1A9E267FF7BEBF40B3EEA8065E8F069F47F2493ABC3E0B621BF793',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'utia',
            chain_name: 'celestia'
          },
          chain: {
            channel_id: 'channel-38'
          }
        }]
    },
    {
      description: 'ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.',
      denom_units: [{
          denom: 'ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-617',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }]
    },
    {
      description: 'The native token of Crescent',
      denom_units: [{
          denom: 'ibc/B5AB26FB63C08E1C14B91B4DDC15CA4FE59737052B4432D8A3B328B66F6FE7A1',
          exponent: 0,
          aliases: ['ucre']
        }, {
          denom: 'cre',
          exponent: 6
        }],
      base: 'ibc/B5AB26FB63C08E1C14B91B4DDC15CA4FE59737052B4432D8A3B328B66F6FE7A1',
      name: 'Crescent',
      display: 'cre',
      symbol: 'CRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg',
          theme: {
            primary_color_hex: '#3c2832'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-64',
            base_denom: 'ucre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-11'
          }
        }]
    },
    {
      description: 'The bonded token of Crescent',
      denom_units: [{
          denom: 'ibc/E5569AE44BD9E30C9F89FD9D22C9CCF904D0F08AD1A1CB500C0A3048331A5047',
          exponent: 0,
          aliases: ['ubcre']
        }, {
          denom: 'bcre',
          exponent: 6
        }],
      base: 'ibc/E5569AE44BD9E30C9F89FD9D22C9CCF904D0F08AD1A1CB500C0A3048331A5047',
      name: 'Bonded Crescent',
      display: 'bcre',
      symbol: 'bCRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg',
          theme: {
            primary_color_hex: '#df969f'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-64',
            base_denom: 'ubcre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-11'
          }
        }]
    },
    {
      description: 'Ethereum is a decentralized blockchain platform for running smart contracts and dApps, with Ether (ETH) as its native cryptocurrency, enabling a versatile ecosystem beyond just digital currency.',
      denom_units: [
        {
          denom: 'ibc/F9D075D4079FC56A9C49B601E54A45292C319D8B0E8CC0F8439041130AA7166C',
          exponent: 0,
          aliases: ['wei']
        },
        {
          denom: 'gwei',
          exponent: 9
        },
        {
          denom: 'eth',
          exponent: 18,
          aliases: ['ether']
        }
      ],
      type_asset: 'evm-base',
      base: 'ibc/F9D075D4079FC56A9C49B601E54A45292C319D8B0E8CC0F8439041130AA7166C',
      name: 'Ether',
      display: 'eth',
      symbol: 'ETH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
      },
      coingecko_id: 'ethereum',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg',
          theme: {
            primary_color_hex: '#303030'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'wei',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'Aave is an Open Source and Non-Custodial protocol to earn interest on deposits & borrow assets. It also features access to highly innovative flash loans, which let developers borrow instantly and easily; no collateral needed. With 16 different assets, 5 of which are stablecoins.',
      type_asset: 'erc20',
      address: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
      denom_units: [{
          denom: 'ibc/D699577F9FD6116299F6396696B8EA9D4D1BFB7D79D63F0A5F2FF06F49DF065F',
          exponent: 0,
          aliases: ['0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9']
        }, {
          denom: 'aave',
          exponent: 18
        }],
      base: 'ibc/D699577F9FD6116299F6396696B8EA9D4D1BFB7D79D63F0A5F2FF06F49DF065F',
      name: 'Aave',
      display: 'aave',
      symbol: 'AAVE',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg'
      },
      coingecko_id: 'aave',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'ApeCoin found new expression in web3 through art, gaming, entertainment, and events. APE is a token made to support what’s next, controlled, and built on by the community. It will serve as a decentralized protocol layer for community-led initiatives that drive culture forward into the metaverse.',
      type_asset: 'erc20',
      address: '0x4d224452801aced8b2f0aebe155379bb5d594381',
      denom_units: [{
          denom: 'ibc/A663A63F05108530D073ED2117283883064D18F505DF144C4142DDB7E8659738',
          exponent: 0,
          aliases: ['0x4d224452801aced8b2f0aebe155379bb5d594381']
        }, {
          denom: 'ape',
          exponent: 18
        }],
      base: 'ibc/A663A63F05108530D073ED2117283883064D18F505DF144C4142DDB7E8659738',
      name: 'ApeCoin',
      display: 'ape',
      symbol: 'APE',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg'
      },
      coingecko_id: 'apecoin',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0x4d224452801aced8b2f0aebe155379bb5d594381',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'Axie Infinity is a Pokémon-inspired digital pet universe where anyone can earn tokens through skilled gameplay and contributions to the ecosystem. Players can battle, collect, raise, and build a land-based kingdom for their pets (known as Axies).',
      type_asset: 'erc20',
      address: '0xbb0e17ef65f82ab018d8edd776e8dd940327b28b',
      denom_units: [{
          denom: 'ibc/DC03A3B473C171CA30E799B7D69B0B7DABBE3BF5B036991720E813EA0959DDF8',
          exponent: 0,
          aliases: ['0xbb0e17ef65f82ab018d8edd776e8dd940327b28b']
        }, {
          denom: 'axs',
          exponent: 18
        }],
      base: 'ibc/DC03A3B473C171CA30E799B7D69B0B7DABBE3BF5B036991720E813EA0959DDF8',
      name: 'Axie Infinity Shard',
      display: 'axs',
      symbol: 'AXS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/axs.svg'
      },
      coingecko_id: 'axie-infinity',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/axs.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0xbb0e17ef65f82ab018d8edd776e8dd940327b28b',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'A blockchain-based middleware, acting as a bridge between cryptocurrency smart contracts, data feeds, APIs and traditional bank account payments.',
      type_asset: 'erc20',
      address: '0x514910771af9ca656af840dff83e8264ecf986ca',
      denom_units: [{
          denom: 'ibc/D18DE9EC817E5583927285DFCFB8BDA27662CAA8D1FA3D38CF84705030F6F2E8',
          exponent: 0,
          aliases: ['0x514910771af9ca656af840dff83e8264ecf986ca']
        }, {
          denom: 'link',
          exponent: 18
        }],
      base: 'ibc/D18DE9EC817E5583927285DFCFB8BDA27662CAA8D1FA3D38CF84705030F6F2E8',
      name: 'Chainlink',
      display: 'link',
      symbol: 'LINK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg'
      },
      coingecko_id: 'chainlink',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg',
          theme: {
            primary_color_hex: '#2c5cdc'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0x514910771af9ca656af840dff83e8264ecf986ca',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'Maker is a decentralized finance (DeFi) platform on the Ethereum blockchain that facilitates the creation of the stablecoin DAI, which is pegged to the US dollar.',
      type_asset: 'erc20',
      address: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
      denom_units: [{
          denom: 'ibc/A6CC40E71F564A8C273FE489417C996B3660B8241E44182B64F8E18B8269969A',
          exponent: 0,
          aliases: ['0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2']
        }, {
          denom: 'mkr',
          exponent: 18
        }],
      base: 'ibc/A6CC40E71F564A8C273FE489417C996B3660B8241E44182B64F8E18B8269969A',
      name: 'Maker',
      display: 'mkr',
      symbol: 'MKR',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg'
      },
      coingecko_id: 'maker',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'SHIBA INU is a 100% decentralized community experiment with it claims that 1/2 the tokens have been sent to Vitalik and the other half were locked to a Uniswap pool and the keys burned.',
      type_asset: 'erc20',
      address: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
      denom_units: [{
          denom: 'ibc/158F220393E7A6C7324BC89730263BF6C9079EC541B69BA9E6D7EE6C9AEDCF66',
          exponent: 0,
          aliases: ['0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce']
        }, {
          denom: 'shib',
          exponent: 18
        }],
      base: 'ibc/158F220393E7A6C7324BC89730263BF6C9079EC541B69BA9E6D7EE6C9AEDCF66',
      name: 'Shiba Inu',
      display: 'shib',
      symbol: 'SHIB',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg'
      },
      coingecko_id: 'shiba-inu',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg',
          theme: {
            primary_color_hex: '#FFA409',
            background_color_hex: '#00000000'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'UNI token served as governance token for Uniswap protocol with 1 billion UNI have been minted at genesis. 60% of the UNI genesis supply is allocated to Uniswap community members and remaining for team, investors and advisors.',
      type_asset: 'erc20',
      address: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
      denom_units: [{
          denom: 'ibc/921D7E89244C857A07BAE5D6F81F2DC62865E72CA52B1D1319D99A86705B252E',
          exponent: 0,
          aliases: ['0x1f9840a85d5af5bf1d1762f925bdaddc4201f984']
        }, {
          denom: 'uni',
          exponent: 18
        }],
      base: 'ibc/921D7E89244C857A07BAE5D6F81F2DC62865E72CA52B1D1319D99A86705B252E',
      name: 'Uniswap',
      display: 'uni',
      symbol: 'UNI',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg'
      },
      coingecko_id: 'uniswap',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'Chain is a cloud blockchain protocol that enables organizations to build better financial services from the ground up powered by Sequence and Chain Core.',
      type_asset: 'erc20',
      address: '0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18',
      denom_units: [{
          denom: 'ibc/1A81C660B7417536B5F77B7968C647AC2EF9C56AA947C03AD88C492D29E1CB09',
          exponent: 0,
          aliases: ['0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18']
        }, {
          denom: 'xcn',
          exponent: 18
        }],
      base: 'ibc/1A81C660B7417536B5F77B7968C647AC2EF9C56AA947C03AD88C492D29E1CB09',
      name: 'Chain',
      display: 'xcn',
      symbol: 'XCN',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xcn.svg'
      },
      coingecko_id: 'chain-2',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xcn.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'Pepe is a community based memecoin with one mission: to make memecoins great again. Made to honor the iconic meme we all know and love, Pepe is here to take reign as the most memeable memecoin in existence, fueled purely by memetic power. Pepe is for the people.',
      type_asset: 'erc20',
      address: '0x6982508145454Ce325dDbE47a25d4ec3d2311933',
      denom_units: [{
          denom: 'ibc/C7D82BA3545AAEDD0DEA0123C2F8DA53873AA5D99C8D46BBE79827545F0DC1E6',
          exponent: 0,
          aliases: ['0x6982508145454Ce325dDbE47a25d4ec3d2311933']
        }, {
          denom: 'pepe',
          exponent: 18
        }],
      base: 'ibc/C7D82BA3545AAEDD0DEA0123C2F8DA53873AA5D99C8D46BBE79827545F0DC1E6',
      name: 'Pepe',
      display: 'pepe',
      symbol: 'PEPE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg'
      },
      coingecko_id: 'pepe',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg',
          theme: {
            primary_color_hex: '#cc3233'
          }
        }],
      keywords: ['meme'],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0x6982508145454Ce325dDbE47a25d4ec3d2311933',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'The OCC token acts as the fuel for the OccamRazer launchpad and it is indirectly used as well on the DAO governance layer.',
      type_asset: 'erc20',
      address: '0x2F109021aFe75B949429fe30523Ee7C0D5B27207',
      denom_units: [{
          denom: 'ibc/19BF897B03066D7CCC00C6A0963E175E22E2593C21179D3F38E6411B3C9EA16B',
          exponent: 0,
          aliases: ['0x2F109021aFe75B949429fe30523Ee7C0D5B27207']
        }, {
          denom: 'occ',
          exponent: 18
        }],
      base: 'ibc/19BF897B03066D7CCC00C6A0963E175E22E2593C21179D3F38E6411B3C9EA16B',
      name: 'OccamFi',
      display: 'occ',
      symbol: 'OCC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/occamfi.png'
      },
      coingecko_id: 'occamfi',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/occamfi.png',
          theme: {
            primary_color_hex: '#313648'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0x2F109021aFe75B949429fe30523Ee7C0D5B27207',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'The PAGE token is used for actions in the PageDAO NFT literary ecosystem and for DAO governance.',
      type_asset: 'erc20',
      address: '0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e',
      denom_units: [{
          denom: 'ibc/17690D9023E45DF8AB9F7030A470C782214AA963BFD656CF9DCD800A92F3F0F6',
          exponent: 0,
          aliases: ['0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e']
        }, {
          denom: 'page',
          exponent: 8
        }],
      base: 'ibc/17690D9023E45DF8AB9F7030A470C782214AA963BFD656CF9DCD800A92F3F0F6',
      name: 'Page',
      display: 'page',
      symbol: 'PAGE',
      coingecko_id: 'page',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg',
          theme: {
            primary_color_hex: '#ebb324'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'Gelotto blends gaming, DEFI, and fun Dapps in a unique Web3 ecosystem. Join us to become part of the house, earning from all Gelotto products. Our main goal? To bring the masses into Web3 with open, accessible, and enjoyable Dapps.',
      type_asset: 'erc20',
      address: '0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2',
      denom_units: [{
          denom: 'ibc/262D63AEF61017AD67C33909E2A0B0BD97C5AF559143BA0BE085DED815B12104',
          exponent: 0,
          aliases: ['0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2']
        }, {
          denom: 'glto',
          exponent: 6
        }],
      base: 'ibc/262D63AEF61017AD67C33909E2A0B0BD97C5AF559143BA0BE085DED815B12104',
      name: 'Gelotto',
      display: 'glto',
      symbol: 'GLTO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.svg',
          theme: {
            primary_color_hex: '#501cad'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      type_asset: 'erc20',
      address: '0x78a0A62Fba6Fb21A83FE8a3433d44C73a4017A6f',
      denom_units: [{
          denom: 'ibc/86BEC3CF0E2A1BF8BC3C5AD0AD3FC46350940F07F003A3C1577BF654E808217F',
          exponent: 0,
          aliases: ['0x78a0A62Fba6Fb21A83FE8a3433d44C73a4017A6f']
        }, {
          denom: 'ox',
          exponent: 18
        }],
      base: 'ibc/86BEC3CF0E2A1BF8BC3C5AD0AD3FC46350940F07F003A3C1577BF654E808217F',
      name: 'Open Exchange Token',
      display: 'ox',
      symbol: 'OX',
      coingecko_id: 'open-exchange-token',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ox.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ox.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0x78a0A62Fba6Fb21A83FE8a3433d44C73a4017A6f',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'BEAST: Battle, Breed, and Customize unique creatures powered by Ethereum & Cosmos',
      type_asset: 'erc20',
      address: '0xA4426666addBE8c4985377d36683D17FB40c31Be',
      denom_units: [{
          denom: 'ibc/1E0E07A6EDA2FA9D8C4DFC0575561B049172CF6748C47D7494614D712BF05DF9',
          exponent: 0,
          aliases: ['0xA4426666addBE8c4985377d36683D17FB40c31Be']
        }, {
          denom: 'beast',
          exponent: 6
        }],
      base: 'ibc/1E0E07A6EDA2FA9D8C4DFC0575561B049172CF6748C47D7494614D712BF05DF9',
      name: 'Gelotto BEAST',
      display: 'beast',
      symbol: 'BEAST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/beast.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/beast.png',
          theme: {
            primary_color_hex: '#21172b'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0xA4426666addBE8c4985377d36683D17FB40c31Be',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'PUNDIX token is the native token that functions within the Pundi X ecosystem, including PundiX Chain and XPOS.',
      type_asset: 'erc20',
      address: '0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38',
      denom_units: [{
          denom: 'ibc/9141B9C2A74294F94C6861FA6B9D5B562874BD84F7C4239569BFD540D86A7E1A',
          exponent: 0,
          aliases: ['0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38']
        }, {
          denom: 'PUNDIX',
          exponent: 18
        }],
      base: 'ibc/9141B9C2A74294F94C6861FA6B9D5B562874BD84F7C4239569BFD540D86A7E1A',
      name: 'Pundi X Token',
      display: 'PUNDIX',
      symbol: 'PUNDIX',
      coingecko_id: 'pundi-x-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.svg',
          theme: {
            primary_color_hex: '#f1d20c'
          }
        }],
      socials: {
        website: 'https://pundix.com',
        twitter: 'https://x.com/PundiXLabs'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'FXS is the value accrual and governance token of the entire Frax ecosystem. Frax is a fractional-algorithmic stablecoin protocol. It aims to provide a highly scalable, decentralized, algorithmic money in place of fixed-supply assets like BTC.',
      type_asset: 'erc20',
      address: '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
      denom_units: [{
          denom: 'ibc/5F9BE030FC355733EC79307409FA98398BBFC747C9430B326C144A74F6808B29',
          exponent: 0,
          aliases: ['0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0']
        }, {
          denom: 'fxs',
          exponent: 18
        }],
      base: 'ibc/5F9BE030FC355733EC79307409FA98398BBFC747C9430B326C144A74F6808B29',
      name: 'Frax Share',
      display: 'fxs',
      symbol: 'FXS',
      coingecko_id: 'frax-share',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.svg'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'CRV is the governance token for Curve Finance.',
      type_asset: 'erc20',
      address: '0xd533a949740bb3306d119cc777fa900ba034cd52',
      denom_units: [{
          denom: 'ibc/52C8C6197989684F891076F228F20CD1659AB6E1776E3B85E65CBBEC67DA5DED',
          exponent: 0,
          aliases: ['0xd533a949740bb3306d119cc777fa900ba034cd52']
        }, {
          denom: 'crv',
          exponent: 18
        }],
      base: 'ibc/52C8C6197989684F891076F228F20CD1659AB6E1776E3B85E65CBBEC67DA5DED',
      name: 'Curve DAO',
      display: 'crv',
      symbol: 'CRV',
      coingecko_id: 'curve-dao-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/crv.png',
          theme: {
            primary_color_hex: '#1fcbdb'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/crv.png'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0xd533a949740bb3306d119cc777fa900ba034cd52',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'The native governance token of Ethena.',
      type_asset: 'erc20',
      address: '0x57e114b691db790c35207b2e685d4a43181e6061',
      denom_units: [{
          denom: 'ibc/B089810D5A6316AD5E9C7808733DC4AB11C7BA3033221D28711FC7206BACB929',
          exponent: 0,
          aliases: ['0x57e114b691db790c35207b2e685d4a43181e6061']
        }, {
          denom: 'ena',
          exponent: 18
        }],
      base: 'ibc/B089810D5A6316AD5E9C7808733DC4AB11C7BA3033221D28711FC7206BACB929',
      name: 'Ethena',
      display: 'ena',
      symbol: 'ENA',
      coingecko_id: 'ethena',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ena.png',
          theme: {
            primary_color_hex: '#1c1c1c'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ena.png'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0x57e114b691db790c35207b2e685d4a43181e6061',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'Ankr is a Web3 decentralized infrastructure provider that helps developers, dapps, and stakers easily interact with multiple blockchains. It allows you to create DApps using API and RPC, staking on Ankr Earn, and use customized blockchain solutions for businesses.',
      type_asset: 'erc20',
      address: '0x8290333ceF9e6D528dD5618Fb97a76f268f3EDD4',
      denom_units: [{
          denom: 'ibc/E64D52799D200F95FC626C49D03E685CBE99132A0A6949A151D94BA34D56862D',
          exponent: 0,
          aliases: ['0x8290333ceF9e6D528dD5618Fb97a76f268f3EDD4']
        }, {
          denom: 'ankr',
          exponent: 18
        }],
      base: 'ibc/E64D52799D200F95FC626C49D03E685CBE99132A0A6949A151D94BA34D56862D',
      name: 'Ankr Network',
      display: 'ankr',
      symbol: 'ANKR',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ankr.svg'
        }],
      coingecko_id: 'ankr',
      socials: {
        website: 'https://www.ankr.com',
        twitter: 'https://x.com/ankr'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0x8290333ceF9e6D528dD5618Fb97a76f268f3EDD4',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'YUM is the Cacao Swap token, powering decentralised rails.',
      type_asset: 'erc20',
      address: '0xcE682c89C63d2850Cb2ca898E44D6c7c30d897a6',
      denom_units: [{
          denom: 'ibc/36FEE012470D3F8906244C38F8670E1225B73FD14363B01927B00074B47AC273',
          exponent: 0,
          aliases: ['0xcE682c89C63d2850Cb2ca898E44D6c7c30d897a6']
        }, {
          denom: 'yum',
          exponent: 18
        }],
      base: 'ibc/36FEE012470D3F8906244C38F8670E1225B73FD14363B01927B00074B47AC273',
      name: 'Yum',
      display: 'yum',
      symbol: 'YUM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yum.png',
          theme: {
            primary_color_hex: '#33a6e7'
          }
        }],
      socials: {
        website: 'https://cacaoswap.app',
        twitter: 'https://x.com/CacaoSwap'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: '0xcE682c89C63d2850Cb2ca898E44D6c7c30d897a6',
            chain_name: 'ethereum'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Evmos Hub',
      denom_units: [{
          denom: 'ibc/73E97EB411B29C6F989C35D277D1A7FC65083572F102AC6BD101884EE9FB2C9F',
          exponent: 0,
          aliases: ['aevmos']
        }, {
          denom: 'evmos',
          exponent: 18
        }],
      base: 'ibc/73E97EB411B29C6F989C35D277D1A7FC65083572F102AC6BD101884EE9FB2C9F',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-82',
            base_denom: 'aevmos',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'The token of Neokingdom DAO.',
      denom_units: [{
          denom: 'ibc/4DD3698C2FCEA87CDE843D3EA6228F2589A4DF6655A7C16D766010D9CA2E69FB',
          exponent: 0,
          aliases: ['erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9']
        }, {
          denom: 'neok',
          exponent: 18
        }],
      base: 'ibc/4DD3698C2FCEA87CDE843D3EA6228F2589A4DF6655A7C16D766010D9CA2E69FB',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-82',
            base_denom: 'erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'The legacy token of Teledisko DAO.',
      denom_units: [{
          denom: 'ibc/D5578DB3F2191C823DAF2381D31F83FCF7EB61FE22F457A7EBBCE04EFD036A40',
          exponent: 0,
          aliases: ['erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280']
        }, {
          denom: 'berlin-legacy',
          exponent: 18
        }],
      base: 'ibc/D5578DB3F2191C823DAF2381D31F83FCF7EB61FE22F457A7EBBCE04EFD036A40',
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
            channel_id: 'channel-82',
            base_denom: 'erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'The token of Crowdpunk DAO',
      denom_units: [{
          denom: 'ibc/9BE17980291443F276406CFE7368A720676FC06D5805C1A23AE52C2534E705F1',
          exponent: 0,
          aliases: ['erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F']
        }, {
          denom: 'crowdp',
          exponent: 18
        }],
      base: 'ibc/9BE17980291443F276406CFE7368A720676FC06D5805C1A23AE52C2534E705F1',
      name: 'Crowdpunk DAO',
      display: 'crowdp',
      address: '0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F',
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
            channel_id: 'channel-82',
            base_denom: 'erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'Injective is a decentralized exchange protocol that enables fast, secure, and fully decentralized trading of derivatives, futures, and spot markets.',
      denom_units: [{
          denom: 'ibc/E752C7ACE548AF134010F2673C348DCE5D5F8328A56C252F5B9903589F103413',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/E752C7ACE548AF134010F2673C348DCE5D5F8328A56C252F5B9903589F103413',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-145',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-29'
          }
        }]
    },
    {
      description: 'The second meme coin on Injective.',
      denom_units: [{
          denom: 'ibc/1B3638F92F76A170AFAD00FF97BC7ED9FCC3588A0591AA54FF5EF3ABD5FB7C3C',
          exponent: 0,
          aliases: ['inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88']
        }, {
          denom: 'NINPO',
          exponent: 6
        }],
      base: 'ibc/1B3638F92F76A170AFAD00FF97BC7ED9FCC3588A0591AA54FF5EF3ABD5FB7C3C',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-145',
            base_denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-29'
          }
        }]
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denom_units: [{
          denom: 'ibc/34D4798F8F5FA32DC0D8D5C12C9293C900E72B6937116669BC861BBA1F8A47AB',
          exponent: 0,
          aliases: ['inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h']
        }, {
          denom: 'JUDO',
          exponent: 6
        }],
      base: 'ibc/34D4798F8F5FA32DC0D8D5C12C9293C900E72B6937116669BC861BBA1F8A47AB',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-145',
            base_denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-29'
          }
        }]
    },
    {
      description: 'A receipt token for lent INJ issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/341CA3CAC015A8392B26749A933544535D2E200C020999B37E6C98C53CD8CC46',
          exponent: 0,
          aliases: ['inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f']
        }, {
          denom: 'nINJ',
          exponent: 18
        }],
      base: 'ibc/341CA3CAC015A8392B26749A933544535D2E200C020999B37E6C98C53CD8CC46',
      name: 'Neptune Receipt INJ',
      display: 'nINJ',
      symbol: 'nINJ',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninj.png',
          theme: {
            primary_color_hex: '#293a6f'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-145',
            base_denom: 'inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-29'
          }
        }]
    },
    {
      description: 'A receipt token for lent ATOM issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/B8705DA5A1309B47F0FC026F30620A9DDD558C14178EAA927B7E09AC7AB4846D',
          exponent: 0,
          aliases: ['inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780']
        }, {
          denom: 'nATOM',
          exponent: 6
        }],
      base: 'ibc/B8705DA5A1309B47F0FC026F30620A9DDD558C14178EAA927B7E09AC7AB4846D',
      name: 'Neptune Receipt ATOM',
      display: 'nATOM',
      symbol: 'nATOM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/natom.png',
          theme: {
            primary_color_hex: '#272f4b'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-145',
            base_denom: 'inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-29'
          }
        }]
    },
    {
      description: 'A receipt token for lent WETH issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/EDDD7F18FCA1CE7FF20ACBFFFB69DB33937FB21DF8E8BCF361F16427F0515CB2',
          exponent: 0,
          aliases: ['inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt']
        }, {
          denom: 'nWETH',
          exponent: 18
        }],
      base: 'ibc/EDDD7F18FCA1CE7FF20ACBFFFB69DB33937FB21DF8E8BCF361F16427F0515CB2',
      name: 'Neptune Receipt WETH',
      display: 'nWETH',
      symbol: 'nWETH',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nweth.png',
          theme: {
            primary_color_hex: '#2a303f'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-145',
            base_denom: 'inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-29'
          }
        }]
    },
    {
      description: 'A receipt token for lent USDT issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/1136543CC432242A6142F65AC6A551E7A964766136C046B6B8C2A017400F1D17',
          exponent: 0,
          aliases: ['inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s']
        }, {
          denom: 'nUSDT',
          exponent: 6
        }],
      base: 'ibc/1136543CC432242A6142F65AC6A551E7A964766136C046B6B8C2A017400F1D17',
      name: 'Neptune Receipt USDT',
      display: 'nUSDT',
      symbol: 'nUSDT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nusdt.png',
          theme: {
            primary_color_hex: '#54ac94'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-145',
            base_denom: 'inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-29'
          }
        }]
    },
    {
      description: 'A receipt token for lent TIA issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/2CD329EDB911B6D6F4E349BAA9D04522EEE9BDA962BFF588F8505672AAB7CC3D',
          exponent: 0,
          aliases: ['inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv']
        }, {
          denom: 'nTIA',
          exponent: 6
        }],
      base: 'ibc/2CD329EDB911B6D6F4E349BAA9D04522EEE9BDA962BFF588F8505672AAB7CC3D',
      name: 'Neptune Receipt TIA',
      display: 'nTIA',
      symbol: 'nTIA',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ntia.png',
          theme: {
            primary_color_hex: '#7931f9'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-145',
            base_denom: 'inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-29'
          }
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/DF8D00B4B31B55AFCA9BAF192BC36C67AA06D9987DCB96490661BCAB63C27006',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      base: 'ibc/DF8D00B4B31B55AFCA9BAF192BC36C67AA06D9987DCB96490661BCAB63C27006',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-280',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-8'
          }
        }]
    },
    {
      description: 'Kujira is a decentralized finance (DeFi) platform offering a suite of tools and services for managing and optimizing digital assets and investments.',
      denom_units: [{
          denom: 'ibc/4E86DB2D0F4DC03F4853FD7F6B0E622FBAD10F198B29CC1BA24C207F514B8271',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/4E86DB2D0F4DC03F4853FD7F6B0E622FBAD10F198B29CC1BA24C207F514B8271',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-101',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'Neutron is a smart contract blockchain within the Cosmos ecosystem, leveraging the Cosmos Hub\'s security to provide cross-chain DeFi applications.',
      denom_units: [{
          denom: 'ibc/43C92566AEA8C100CF924DB324BD8F699B6374CA5B93BF6BCFEC4777B62D50D1',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/43C92566AEA8C100CF924DB324BD8F699B6374CA5B93BF6BCFEC4777B62D50D1',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-17',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-18'
          }
        }]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [{
          denom: 'ibc/B8CAC5836D321728C926BF59274D3908A6C021B5E6D7C7FC3FF655C46D52FAD6',
          exponent: 0,
          aliases: ['neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj']
        }, {
          denom: 'bitcosmos',
          exponent: 6
        }],
      base: 'ibc/B8CAC5836D321728C926BF59274D3908A6C021B5E6D7C7FC3FF655C46D52FAD6',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-17',
            base_denom: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-18'
          }
        }]
    },
    {
      description: 'What the Fuck',
      denom_units: [{
          denom: 'ibc/48E082BC861105A015CAA0C8B7520A0FCE34E025F4044D960828044BCA1246D7',
          exponent: 0,
          aliases: ['neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf']
        }, {
          denom: 'wtf',
          exponent: 6
        }],
      base: 'ibc/48E082BC861105A015CAA0C8B7520A0FCE34E025F4044D960828044BCA1246D7',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-17',
            base_denom: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-18'
          }
        }]
    },
    {
      description: 'Astro BOY',
      denom_units: [{
          denom: 'ibc/E0B3D180E9876BF54CA904A30D3C6922410E477E9F8C72F7C0C537211B80C4D1',
          exponent: 0,
          aliases: ['neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv']
        }, {
          denom: 'boy',
          exponent: 6
        }],
      base: 'ibc/E0B3D180E9876BF54CA904A30D3C6922410E477E9F8C72F7C0C537211B80C4D1',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-17',
            base_denom: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-18'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23',
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
            channel_id: 'channel-1279',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/6CDA7F7E4DDB86FD275A986E78F13DF2FC500E3FEC2149E2215061FA51BB8C5D',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/6CDA7F7E4DDB86FD275A986E78F13DF2FC500E3FEC2149E2215061FA51BB8C5D',
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
            channel_id: 'channel-1279',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'The native staking and governance token of Picasso Kusama.',
      denom_units: [{
          denom: 'ibc/6517CF990493C8F3D6AE1E03FA1B5167B1E40345061104F07296D883379B4A08',
          exponent: 0,
          aliases: ['ppica']
        }, {
          denom: 'pica',
          exponent: 12
        }],
      type_asset: 'substrate',
      base: 'ibc/6517CF990493C8F3D6AE1E03FA1B5167B1E40345061104F07296D883379B4A08',
      name: 'Pica',
      display: 'pica',
      symbol: 'PICA',
      coingecko_id: 'picasso',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-17',
            base_denom: 'ppica',
            chain_name: 'picasso'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'QCK - native token of Quicksilver',
      denom_units: [{
          denom: 'ibc/E8C4BDE0CDFFA83759AD3324EEE5A1B1E39FCA6BA0791AAE67F4CCF829DB8F1F',
          exponent: 0,
          aliases: ['uqck']
        }, {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/E8C4BDE0CDFFA83759AD3324EEE5A1B1E39FCA6BA0791AAE67F4CCF829DB8F1F',
      name: 'Quicksilver',
      display: 'qck',
      symbol: 'QCK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
      },
      coingecko_id: 'quicksilver',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png',
          theme: {
            primary_color_hex: '#b2b2b2'
          }
        }],
      socials: {
        website: 'https://quicksilver.zone/',
        twitter: 'https://twitter.com/quicksilverzone'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-94',
            base_denom: 'uqck',
            chain_name: 'quicksilver'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }]
    },
    {
      description: 'Secret Network is a privacy-focused blockchain that enables private and secure smart contracts, protecting sensitive data.',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-80',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-14'
          }
        }]
    },
    {
      description: 'Solana is a high-performance blockchain platform known for its fast transaction speeds, low costs, and scalability, ideal for decentralized applications and crypto projects.',
      denom_units: [{
          denom: 'ibc/C7F9D7DFF5469F53AB878ED0FBE53CC6B8B2720CD0ED09FD65F25343B13517CC',
          exponent: 0,
          aliases: ['Lamport']
        }, {
          denom: 'SOL',
          exponent: 9
        }],
      type_asset: 'svm-base',
      base: 'ibc/C7F9D7DFF5469F53AB878ED0FBE53CC6B8B2720CD0ED09FD65F25343B13517CC',
      name: 'Solana',
      display: 'SOL',
      symbol: 'SOL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.svg'
      },
      coingecko_id: 'solana',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.png',
          theme: {
            circle: true,
            background_color_hex: '#000000'
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg',
          theme: {
            circle: false,
            background_color_hex: '#00000000'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'Lamport',
            chain_name: 'solana'
          },
          chain: {
            channel_id: 'channel-71'
          }
        }]
    },
    {
      description: 'The Official Bonk Inu token',
      type_asset: 'erc20',
      address: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
      denom_units: [{
          denom: 'ibc/A09E5A2B0DE6CB5E8EC67F1662C7EE4202CEC192923DA1D4FCAEA078B4FCF5AC',
          exponent: 0,
          aliases: ['DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263']
        }, {
          denom: 'bonk',
          exponent: 5
        }],
      base: 'ibc/A09E5A2B0DE6CB5E8EC67F1662C7EE4202CEC192923DA1D4FCAEA078B4FCF5AC',
      name: 'Bonk',
      display: 'bonk',
      symbol: 'BONK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bonk.png'
      },
      coingecko_id: 'bonk',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bonk.png',
          theme: {
            primary_color_hex: '#ee950a'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
            chain_name: 'solana'
          },
          chain: {
            channel_id: 'channel-71'
          }
        }]
    },
    {
      description: 'Pyth is a protocol that allows market participants to publish pricing information on-chain for others to use. The protocol is an interaction between three parties:\n-Publishers submit pricing information to Pyth\'s oracle program. Pyth has multiple data publishers for every product to improve the accuracy and robustness of the system.\n-Pyth\'s oracle program combines publishers\' data to produce a single aggregate price and confidence interval.\nConsumers read the price information produced by the oracle program.\n\nPyth\'s oracle program runs simultaneously on both Solana mainnet and Pythnet. Each instance of the program is responsible for its own set of price feeds. Solana Price Feeds are available for use by Solana protocols. In this case, since the oracle program itself runs on Solana, the resulting prices are immediately available to consumers without requiring any additional work. Pythnet Price Feeds are available on 12+ blockchains. The prices constructed on Pythnet are transferred cross-chain to reach consumers on these blockchains.\n\nIn both cases, the critical component of the system is the oracle program that combines the data from each individual publisher. This program maintains a number of different Solana accounts that list the products on Pyth and their current price data. Publishers publish their price and confidence by interacting with the oracle program on every slot. The program stores this information in its accounts. The first price update in a slot additionally triggers price aggregation, which combines the price data from the previous slot into a single aggregate price and confidence interval. This aggregate price is written to the Solana account where it is readable by other on-chain programs and available for transmission to other blockchains.',
      type_asset: 'erc20',
      address: 'HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3',
      denom_units: [{
          denom: 'ibc/62F989E5DC56D690987A3B633C3A86CE85C0A19260E0AB203FBDF1CB22EF0063',
          exponent: 0,
          aliases: ['HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3']
        }, {
          denom: 'pyth',
          exponent: 6
        }],
      base: 'ibc/62F989E5DC56D690987A3B633C3A86CE85C0A19260E0AB203FBDF1CB22EF0063',
      name: 'Pyth Network',
      display: 'pyth',
      symbol: 'PYTH',
      coingecko_id: 'pyth-network',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pyth.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pyth.svg'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3',
            chain_name: 'solana'
          },
          chain: {
            channel_id: 'channel-71'
          }
        }]
    },
    {
      description: 'BSKT tracks the top assets across the crypto ecosystem',
      type_asset: 'erc20',
      address: '6gnCPhXtLnUD76HjQuSYPENLSZdG8RvDB1pTLM5aLSJA',
      denom_units: [{
          denom: 'ibc/B1762780F941FD2BDD4F0564C2F1CF13710B7E0FB8DC4D77A94A71A7361115C3',
          exponent: 0,
          aliases: ['6gnCPhXtLnUD76HjQuSYPENLSZdG8RvDB1pTLM5aLSJA']
        }, {
          denom: 'bskt',
          exponent: 5
        }],
      base: 'ibc/B1762780F941FD2BDD4F0564C2F1CF13710B7E0FB8DC4D77A94A71A7361115C3',
      name: 'Basket',
      display: 'bskt',
      symbol: 'BSKT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bskt.png'
      },
      coingecko_id: 'basket',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bskt.png',
          theme: {
            primary_color_hex: '#485573'
          }
        }],
      socials: {
        website: 'https://www.bskt.fi/',
        twitter: 'https://twitter.com/bsktfi'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: '6gnCPhXtLnUD76HjQuSYPENLSZdG8RvDB1pTLM5aLSJA',
            chain_name: 'solana'
          },
          chain: {
            channel_id: 'channel-71'
          }
        }]
    },
    {
      description: 'W is the native token powering the Wormhole interoperability platform.',
      type_asset: 'erc20',
      address: '85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ',
      denom_units: [{
          denom: 'ibc/804A1A334531205A32BE4C73F071B25ED757827678C8756715ACAF8438B78AE4',
          exponent: 0,
          aliases: ['85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ']
        }, {
          denom: 'w',
          exponent: 6
        }],
      base: 'ibc/804A1A334531205A32BE4C73F071B25ED757827678C8756715ACAF8438B78AE4',
      name: 'Wormhole Token',
      display: 'w',
      symbol: 'W',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/w.png'
      },
      coingecko_id: 'wormhole',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/w.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      socials: {
        website: 'https://wormhole.com/',
        twitter: 'https://twitter.com/wormhole'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: '85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ',
            chain_name: 'solana'
          },
          chain: {
            channel_id: 'channel-71'
          }
        }]
    },
    {
      description: 'dogwifhat is a meme coin that operates on Solana.',
      type_asset: 'erc20',
      address: 'EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm',
      denom_units: [{
          denom: 'ibc/BA34EAA22BBDA46C228DC70E4ED7E42A0867D5B051D625F953CC7B1CEF58C071',
          exponent: 0,
          aliases: ['EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm']
        }, {
          denom: 'wif',
          exponent: 6
        }],
      base: 'ibc/BA34EAA22BBDA46C228DC70E4ED7E42A0867D5B051D625F953CC7B1CEF58C071',
      name: 'dogwifhat',
      display: 'wif',
      symbol: 'WIF',
      coingecko_id: 'dogwifcoin',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/wif.png',
          theme: {
            primary_color_hex: '#a29482'
          }
        }],
      socials: {
        website: 'https://dogwifcoin.org/',
        twitter: 'https://twitter.com/dogwifcoin'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm',
            chain_name: 'solana'
          },
          chain: {
            channel_id: 'channel-71'
          }
        }]
    },
    {
      address: 'ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump',
      base: 'ibc/9D5DA3720001F91DD76B8F609A93F96688EC8185B54BF9A1A1450EB34FF2D912',
      description: 'Whinecoin is an experimental memecoin by the Sommelier Finance team.',
      name: 'WHINEcoin',
      display: 'whine',
      symbol: 'WHINE',
      type_asset: 'erc20',
      denom_units: [{
          denom: 'ibc/9D5DA3720001F91DD76B8F609A93F96688EC8185B54BF9A1A1450EB34FF2D912',
          exponent: 0,
          aliases: ['ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump']
        }, {
          denom: 'whine',
          exponent: 6
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/whine.png',
          theme: {
            primary_color_hex: '#FFFFFF',
            background_color_hex: '#FFFFFF',
            circle: false
          }
        }],
      socials: {
        website: 'https://whinecoin.com/',
        twitter: 'https://twitter.com/whinecoin'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump',
            chain_name: 'solana'
          },
          chain: {
            channel_id: 'channel-71'
          }
        }]
    },
    {
      description: 'Pepe Bruce Jenner',
      type_asset: 'erc20',
      address: 'ANu4Wuq86WzRU8tykszQUJ66eQzFNfkwap2HcQ5UaFaU',
      denom_units: [{
          denom: 'ibc/42EC3E55A9B8027537550D9D029843B4A48BEFAEA21D52282EE0449A74EDBE2A',
          exponent: 0,
          aliases: ['ANu4Wuq86WzRU8tykszQUJ66eQzFNfkwap2HcQ5UaFaU']
        }, {
          denom: 'pbj',
          exponent: 5
        }],
      base: 'ibc/42EC3E55A9B8027537550D9D029843B4A48BEFAEA21D52282EE0449A74EDBE2A',
      name: 'Pepe Bruce Jenner',
      display: 'pbj',
      symbol: 'PBJ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pbj.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pbj.png',
          theme: {
            primary_color_hex: '#488000',
            background_color_hex: '#ee0000'
          }
        }],
      socials: {
        website: 'https://sandwichswap.io/',
        twitter: 'https://twitter.com/pepebjenner_sol'
      },
      keywords: [
        'meme',
        'pump.fun',
        'pumpdotfun',
        'pepe'
      ],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ANu4Wuq86WzRU8tykszQUJ66eQzFNfkwap2HcQ5UaFaU',
            chain_name: 'solana'
          },
          chain: {
            channel_id: 'channel-71'
          }
        }]
    },
    {
      description: 'Stargaze is a decentralized blockchain platform designed specifically for non-fungible tokens (NFTs), enabling creators to mint, trade, and interact with NFTs in a fully decentralized environment.',
      denom_units: [{
          denom: 'ibc/7078D8FA8BCB50A1E7855458F1E9898A3FDA0093B703DA3B3108DD35ED99E048',
          exponent: 0,
          aliases: ['ustars']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      base: 'ibc/7078D8FA8BCB50A1E7855458F1E9898A3FDA0093B703DA3B3108DD35ED99E048',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-184',
            base_denom: 'ustars',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }]
    },
    {
      description: 'Stride is a liquid staking blockchain in the Cosmos ecosystem that allows users to stake any IBC-compatible tokens and receive stTokens in return, providing liquidity while earning staking rewards.',
      denom_units: [{
          denom: 'ibc/F4EF72139CDCF526FFD520402C53FFB7A927B528BDF0C5FF60A4D8B4780D2C6B',
          exponent: 0,
          aliases: ['ustrd']
        }, {
          denom: 'strd',
          exponent: 6
        }],
      base: 'ibc/F4EF72139CDCF526FFD520402C53FFB7A927B528BDF0C5FF60A4D8B4780D2C6B',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-134',
            base_denom: 'ustrd',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.',
      denom_units: [{
          denom: 'ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-617',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }]
    },
    {
      description: 'The native token of Crescent',
      denom_units: [{
          denom: 'ibc/B5AB26FB63C08E1C14B91B4DDC15CA4FE59737052B4432D8A3B328B66F6FE7A1',
          exponent: 0,
          aliases: ['ucre']
        }, {
          denom: 'cre',
          exponent: 6
        }],
      base: 'ibc/B5AB26FB63C08E1C14B91B4DDC15CA4FE59737052B4432D8A3B328B66F6FE7A1',
      name: 'Crescent',
      display: 'cre',
      symbol: 'CRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg',
          theme: {
            primary_color_hex: '#3c2832'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-64',
            base_denom: 'ucre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-11'
          }
        }]
    },
    {
      description: 'The bonded token of Crescent',
      denom_units: [{
          denom: 'ibc/E5569AE44BD9E30C9F89FD9D22C9CCF904D0F08AD1A1CB500C0A3048331A5047',
          exponent: 0,
          aliases: ['ubcre']
        }, {
          denom: 'bcre',
          exponent: 6
        }],
      base: 'ibc/E5569AE44BD9E30C9F89FD9D22C9CCF904D0F08AD1A1CB500C0A3048331A5047',
      name: 'Bonded Crescent',
      display: 'bcre',
      symbol: 'bCRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg',
          theme: {
            primary_color_hex: '#df969f'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-64',
            base_denom: 'ubcre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-11'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Evmos Hub',
      denom_units: [{
          denom: 'ibc/73E97EB411B29C6F989C35D277D1A7FC65083572F102AC6BD101884EE9FB2C9F',
          exponent: 0,
          aliases: ['aevmos']
        }, {
          denom: 'evmos',
          exponent: 18
        }],
      base: 'ibc/73E97EB411B29C6F989C35D277D1A7FC65083572F102AC6BD101884EE9FB2C9F',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-82',
            base_denom: 'aevmos',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'The token of Neokingdom DAO.',
      denom_units: [{
          denom: 'ibc/4DD3698C2FCEA87CDE843D3EA6228F2589A4DF6655A7C16D766010D9CA2E69FB',
          exponent: 0,
          aliases: ['erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9']
        }, {
          denom: 'neok',
          exponent: 18
        }],
      base: 'ibc/4DD3698C2FCEA87CDE843D3EA6228F2589A4DF6655A7C16D766010D9CA2E69FB',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-82',
            base_denom: 'erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'The legacy token of Teledisko DAO.',
      denom_units: [{
          denom: 'ibc/D5578DB3F2191C823DAF2381D31F83FCF7EB61FE22F457A7EBBCE04EFD036A40',
          exponent: 0,
          aliases: ['erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280']
        }, {
          denom: 'berlin-legacy',
          exponent: 18
        }],
      base: 'ibc/D5578DB3F2191C823DAF2381D31F83FCF7EB61FE22F457A7EBBCE04EFD036A40',
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
            channel_id: 'channel-82',
            base_denom: 'erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'The token of Crowdpunk DAO',
      denom_units: [{
          denom: 'ibc/9BE17980291443F276406CFE7368A720676FC06D5805C1A23AE52C2534E705F1',
          exponent: 0,
          aliases: ['erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F']
        }, {
          denom: 'crowdp',
          exponent: 18
        }],
      base: 'ibc/9BE17980291443F276406CFE7368A720676FC06D5805C1A23AE52C2534E705F1',
      name: 'Crowdpunk DAO',
      display: 'crowdp',
      address: '0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F',
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
            channel_id: 'channel-82',
            base_denom: 'erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'Injective is a decentralized exchange protocol that enables fast, secure, and fully decentralized trading of derivatives, futures, and spot markets.',
      denom_units: [{
          denom: 'ibc/E752C7ACE548AF134010F2673C348DCE5D5F8328A56C252F5B9903589F103413',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/E752C7ACE548AF134010F2673C348DCE5D5F8328A56C252F5B9903589F103413',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-145',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-29'
          }
        }]
    },
    {
      description: 'The second meme coin on Injective.',
      denom_units: [{
          denom: 'ibc/1B3638F92F76A170AFAD00FF97BC7ED9FCC3588A0591AA54FF5EF3ABD5FB7C3C',
          exponent: 0,
          aliases: ['inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88']
        }, {
          denom: 'NINPO',
          exponent: 6
        }],
      base: 'ibc/1B3638F92F76A170AFAD00FF97BC7ED9FCC3588A0591AA54FF5EF3ABD5FB7C3C',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-145',
            base_denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-29'
          }
        }]
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denom_units: [{
          denom: 'ibc/34D4798F8F5FA32DC0D8D5C12C9293C900E72B6937116669BC861BBA1F8A47AB',
          exponent: 0,
          aliases: ['inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h']
        }, {
          denom: 'JUDO',
          exponent: 6
        }],
      base: 'ibc/34D4798F8F5FA32DC0D8D5C12C9293C900E72B6937116669BC861BBA1F8A47AB',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-145',
            base_denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-29'
          }
        }]
    },
    {
      description: 'A receipt token for lent INJ issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/341CA3CAC015A8392B26749A933544535D2E200C020999B37E6C98C53CD8CC46',
          exponent: 0,
          aliases: ['inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f']
        }, {
          denom: 'nINJ',
          exponent: 18
        }],
      base: 'ibc/341CA3CAC015A8392B26749A933544535D2E200C020999B37E6C98C53CD8CC46',
      name: 'Neptune Receipt INJ',
      display: 'nINJ',
      symbol: 'nINJ',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninj.png',
          theme: {
            primary_color_hex: '#293a6f'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-145',
            base_denom: 'inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-29'
          }
        }]
    },
    {
      description: 'A receipt token for lent ATOM issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/B8705DA5A1309B47F0FC026F30620A9DDD558C14178EAA927B7E09AC7AB4846D',
          exponent: 0,
          aliases: ['inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780']
        }, {
          denom: 'nATOM',
          exponent: 6
        }],
      base: 'ibc/B8705DA5A1309B47F0FC026F30620A9DDD558C14178EAA927B7E09AC7AB4846D',
      name: 'Neptune Receipt ATOM',
      display: 'nATOM',
      symbol: 'nATOM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/natom.png',
          theme: {
            primary_color_hex: '#272f4b'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-145',
            base_denom: 'inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-29'
          }
        }]
    },
    {
      description: 'A receipt token for lent WETH issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/EDDD7F18FCA1CE7FF20ACBFFFB69DB33937FB21DF8E8BCF361F16427F0515CB2',
          exponent: 0,
          aliases: ['inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt']
        }, {
          denom: 'nWETH',
          exponent: 18
        }],
      base: 'ibc/EDDD7F18FCA1CE7FF20ACBFFFB69DB33937FB21DF8E8BCF361F16427F0515CB2',
      name: 'Neptune Receipt WETH',
      display: 'nWETH',
      symbol: 'nWETH',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nweth.png',
          theme: {
            primary_color_hex: '#2a303f'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-145',
            base_denom: 'inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-29'
          }
        }]
    },
    {
      description: 'A receipt token for lent USDT issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/1136543CC432242A6142F65AC6A551E7A964766136C046B6B8C2A017400F1D17',
          exponent: 0,
          aliases: ['inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s']
        }, {
          denom: 'nUSDT',
          exponent: 6
        }],
      base: 'ibc/1136543CC432242A6142F65AC6A551E7A964766136C046B6B8C2A017400F1D17',
      name: 'Neptune Receipt USDT',
      display: 'nUSDT',
      symbol: 'nUSDT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nusdt.png',
          theme: {
            primary_color_hex: '#54ac94'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-145',
            base_denom: 'inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-29'
          }
        }]
    },
    {
      description: 'A receipt token for lent TIA issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/2CD329EDB911B6D6F4E349BAA9D04522EEE9BDA962BFF588F8505672AAB7CC3D',
          exponent: 0,
          aliases: ['inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv']
        }, {
          denom: 'nTIA',
          exponent: 6
        }],
      base: 'ibc/2CD329EDB911B6D6F4E349BAA9D04522EEE9BDA962BFF588F8505672AAB7CC3D',
      name: 'Neptune Receipt TIA',
      display: 'nTIA',
      symbol: 'nTIA',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ntia.png',
          theme: {
            primary_color_hex: '#7931f9'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-145',
            base_denom: 'inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-29'
          }
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/DF8D00B4B31B55AFCA9BAF192BC36C67AA06D9987DCB96490661BCAB63C27006',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      base: 'ibc/DF8D00B4B31B55AFCA9BAF192BC36C67AA06D9987DCB96490661BCAB63C27006',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-280',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-8'
          }
        }]
    },
    {
      description: 'Kujira is a decentralized finance (DeFi) platform offering a suite of tools and services for managing and optimizing digital assets and investments.',
      denom_units: [{
          denom: 'ibc/4E86DB2D0F4DC03F4853FD7F6B0E622FBAD10F198B29CC1BA24C207F514B8271',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/4E86DB2D0F4DC03F4853FD7F6B0E622FBAD10F198B29CC1BA24C207F514B8271',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-101',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'Neutron is a smart contract blockchain within the Cosmos ecosystem, leveraging the Cosmos Hub\'s security to provide cross-chain DeFi applications.',
      denom_units: [{
          denom: 'ibc/43C92566AEA8C100CF924DB324BD8F699B6374CA5B93BF6BCFEC4777B62D50D1',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/43C92566AEA8C100CF924DB324BD8F699B6374CA5B93BF6BCFEC4777B62D50D1',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-17',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-18'
          }
        }]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [{
          denom: 'ibc/B8CAC5836D321728C926BF59274D3908A6C021B5E6D7C7FC3FF655C46D52FAD6',
          exponent: 0,
          aliases: ['neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj']
        }, {
          denom: 'bitcosmos',
          exponent: 6
        }],
      base: 'ibc/B8CAC5836D321728C926BF59274D3908A6C021B5E6D7C7FC3FF655C46D52FAD6',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-17',
            base_denom: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-18'
          }
        }]
    },
    {
      description: 'What the Fuck',
      denom_units: [{
          denom: 'ibc/48E082BC861105A015CAA0C8B7520A0FCE34E025F4044D960828044BCA1246D7',
          exponent: 0,
          aliases: ['neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf']
        }, {
          denom: 'wtf',
          exponent: 6
        }],
      base: 'ibc/48E082BC861105A015CAA0C8B7520A0FCE34E025F4044D960828044BCA1246D7',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-17',
            base_denom: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-18'
          }
        }]
    },
    {
      description: 'Astro BOY',
      denom_units: [{
          denom: 'ibc/E0B3D180E9876BF54CA904A30D3C6922410E477E9F8C72F7C0C537211B80C4D1',
          exponent: 0,
          aliases: ['neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv']
        }, {
          denom: 'boy',
          exponent: 6
        }],
      base: 'ibc/E0B3D180E9876BF54CA904A30D3C6922410E477E9F8C72F7C0C537211B80C4D1',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-17',
            base_denom: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-18'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23',
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
            channel_id: 'channel-1279',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/6CDA7F7E4DDB86FD275A986E78F13DF2FC500E3FEC2149E2215061FA51BB8C5D',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/6CDA7F7E4DDB86FD275A986E78F13DF2FC500E3FEC2149E2215061FA51BB8C5D',
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
            channel_id: 'channel-1279',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'QCK - native token of Quicksilver',
      denom_units: [{
          denom: 'ibc/E8C4BDE0CDFFA83759AD3324EEE5A1B1E39FCA6BA0791AAE67F4CCF829DB8F1F',
          exponent: 0,
          aliases: ['uqck']
        }, {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/E8C4BDE0CDFFA83759AD3324EEE5A1B1E39FCA6BA0791AAE67F4CCF829DB8F1F',
      name: 'Quicksilver',
      display: 'qck',
      symbol: 'QCK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
      },
      coingecko_id: 'quicksilver',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png',
          theme: {
            primary_color_hex: '#b2b2b2'
          }
        }],
      socials: {
        website: 'https://quicksilver.zone/',
        twitter: 'https://twitter.com/quicksilverzone'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-94',
            base_denom: 'uqck',
            chain_name: 'quicksilver'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }]
    },
    {
      description: 'Secret Network is a privacy-focused blockchain that enables private and secure smart contracts, protecting sensitive data.',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-80',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-14'
          }
        }]
    },
    {
      description: 'Stargaze is a decentralized blockchain platform designed specifically for non-fungible tokens (NFTs), enabling creators to mint, trade, and interact with NFTs in a fully decentralized environment.',
      denom_units: [{
          denom: 'ibc/7078D8FA8BCB50A1E7855458F1E9898A3FDA0093B703DA3B3108DD35ED99E048',
          exponent: 0,
          aliases: ['ustars']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      base: 'ibc/7078D8FA8BCB50A1E7855458F1E9898A3FDA0093B703DA3B3108DD35ED99E048',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-184',
            base_denom: 'ustars',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }]
    },
    {
      description: 'Stride is a liquid staking blockchain in the Cosmos ecosystem that allows users to stake any IBC-compatible tokens and receive stTokens in return, providing liquidity while earning staking rewards.',
      denom_units: [{
          denom: 'ibc/F4EF72139CDCF526FFD520402C53FFB7A927B528BDF0C5FF60A4D8B4780D2C6B',
          exponent: 0,
          aliases: ['ustrd']
        }, {
          denom: 'strd',
          exponent: 6
        }],
      base: 'ibc/F4EF72139CDCF526FFD520402C53FFB7A927B528BDF0C5FF60A4D8B4780D2C6B',
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-134',
            base_denom: 'ustrd',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'The native staking and governance token of Picasso Kusama.',
      denom_units: [{
          denom: 'ibc/6517CF990493C8F3D6AE1E03FA1B5167B1E40345061104F07296D883379B4A08',
          exponent: 0,
          aliases: ['ppica']
        }, {
          denom: 'pica',
          exponent: 12
        }],
      type_asset: 'substrate',
      base: 'ibc/6517CF990493C8F3D6AE1E03FA1B5167B1E40345061104F07296D883379B4A08',
      name: 'Pica',
      display: 'pica',
      symbol: 'PICA',
      coingecko_id: 'picasso',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-17',
            base_denom: 'ppica',
            chain_name: 'picasso'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The native token cw20 for SIENNA on Secret Network',
      denom_units: [{
          denom: 'ibc/863C9503D03A68542016C898A95CE0FD1A52B5F58624A614D265DA4FA993F359',
          exponent: 0,
          aliases: ['cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4']
        }, {
          denom: 'sienna',
          exponent: 18
        }],
      type_asset: 'snip20',
      address: 'secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
      base: 'ibc/863C9503D03A68542016C898A95CE0FD1A52B5F58624A614D265DA4FA993F359',
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
            channel_id: 'channel-83',
            base_denom: 'cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/A0F175DE6C8AA887ED101B6E85A4F93558D0980FECC4279DA19C7EC4E0BCFB8D',
          exponent: 0,
          aliases: ['cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip20',
      address: 'secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
      base: 'ibc/A0F175DE6C8AA887ED101B6E85A4F93558D0980FECC4279DA19C7EC4E0BCFB8D',
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
            channel_id: 'channel-83',
            base_denom: 'cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/5C85AD7EBA2A29A0279ABDAE65E147ED4A7E5E8ADADC2AE9D0CF9F4137FA85C4',
          exponent: 0,
          aliases: ['cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip25',
      address: 'secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
      base: 'ibc/5C85AD7EBA2A29A0279ABDAE65E147ED4A7E5E8ADADC2AE9D0CF9F4137FA85C4',
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
            channel_id: 'channel-83',
            base_denom: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'The native token cw20 for Silk on Secret Network',
      denom_units: [{
          denom: 'ibc/3CD84AF84643D6E4479860635E0C5CE9B75AD2F051771C98BCF9BF742422BF84',
          exponent: 0,
          aliases: ['cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd']
        }, {
          denom: 'silk',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
      base: 'ibc/3CD84AF84643D6E4479860635E0C5CE9B75AD2F051771C98BCF9BF742422BF84',
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
            channel_id: 'channel-83',
            base_denom: 'cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'The native token cw20 for SCRT Staking Derivatives on Secret Network',
      denom_units: [{
          denom: 'ibc/13AD9D1CD176F98229C46CD3FAF22D588CA13A424CA28479C1E88EC9421540C2',
          exponent: 0,
          aliases: ['cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4']
        }, {
          denom: 'stkd-scrt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
      base: 'ibc/13AD9D1CD176F98229C46CD3FAF22D588CA13A424CA28479C1E88EC9421540C2',
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
            channel_id: 'channel-83',
            base_denom: 'cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'The native token cw20 for Button on Secret Network',
      denom_units: [{
          denom: 'ibc/6B001D50BCC84FE90215051D2BEE34458535EA7987CF92DBF7F3F49762B2EEE7',
          exponent: 0,
          aliases: ['cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt']
        }, {
          denom: 'butt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
      base: 'ibc/6B001D50BCC84FE90215051D2BEE34458535EA7987CF92DBF7F3F49762B2EEE7',
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
            channel_id: 'channel-83',
            base_denom: 'cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'The native token cw20 for Alter on Secret Network',
      denom_units: [{
          denom: 'ibc/2385D07ADAA9481116641343509DA07CBE287283FC9A66536E4390594574C860',
          exponent: 0,
          aliases: ['cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej']
        }, {
          denom: 'alter',
          exponent: 6
        }],
      base: 'ibc/2385D07ADAA9481116641343509DA07CBE287283FC9A66536E4390594574C860',
      type_asset: 'snip20',
      address: 'secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
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
            channel_id: 'channel-83',
            base_denom: 'cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'The native token cw20 for Amber on Secret Network',
      denom_units: [{
          denom: 'ibc/21AC0AFDFCF0DFB4C8D153670897C8E44617405E75DB9D9CA58BC8082CB504B2',
          exponent: 0,
          aliases: ['cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852']
        }, {
          denom: 'amber',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
      base: 'ibc/21AC0AFDFCF0DFB4C8D153670897C8E44617405E75DB9D9CA58BC8082CB504B2',
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
            channel_id: 'channel-83',
            base_denom: 'cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shill on Secret Network',
      denom_units: [{
          denom: 'ibc/E1A1FDFC0C393664E7DEB9AAFA3E727C28E13AA3E82EA66BF555197AD9DB54B6',
          exponent: 0,
          aliases: ['cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse']
        }, {
          denom: 'shill',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
      base: 'ibc/E1A1FDFC0C393664E7DEB9AAFA3E727C28E13AA3E82EA66BF555197AD9DB54B6',
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
            channel_id: 'channel-83',
            base_denom: 'cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'The native token cw20 for SIENNA on Secret Network',
      denom_units: [{
          denom: 'ibc/863C9503D03A68542016C898A95CE0FD1A52B5F58624A614D265DA4FA993F359',
          exponent: 0,
          aliases: ['cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4']
        }, {
          denom: 'sienna',
          exponent: 18
        }],
      type_asset: 'snip20',
      address: 'secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
      base: 'ibc/863C9503D03A68542016C898A95CE0FD1A52B5F58624A614D265DA4FA993F359',
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
            channel_id: 'channel-83',
            base_denom: 'cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/A0F175DE6C8AA887ED101B6E85A4F93558D0980FECC4279DA19C7EC4E0BCFB8D',
          exponent: 0,
          aliases: ['cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip20',
      address: 'secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
      base: 'ibc/A0F175DE6C8AA887ED101B6E85A4F93558D0980FECC4279DA19C7EC4E0BCFB8D',
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
            channel_id: 'channel-83',
            base_denom: 'cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/5C85AD7EBA2A29A0279ABDAE65E147ED4A7E5E8ADADC2AE9D0CF9F4137FA85C4',
          exponent: 0,
          aliases: ['cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip25',
      address: 'secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
      base: 'ibc/5C85AD7EBA2A29A0279ABDAE65E147ED4A7E5E8ADADC2AE9D0CF9F4137FA85C4',
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
            channel_id: 'channel-83',
            base_denom: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'The native token cw20 for Silk on Secret Network',
      denom_units: [{
          denom: 'ibc/3CD84AF84643D6E4479860635E0C5CE9B75AD2F051771C98BCF9BF742422BF84',
          exponent: 0,
          aliases: ['cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd']
        }, {
          denom: 'silk',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
      base: 'ibc/3CD84AF84643D6E4479860635E0C5CE9B75AD2F051771C98BCF9BF742422BF84',
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
            channel_id: 'channel-83',
            base_denom: 'cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'The native token cw20 for SCRT Staking Derivatives on Secret Network',
      denom_units: [{
          denom: 'ibc/13AD9D1CD176F98229C46CD3FAF22D588CA13A424CA28479C1E88EC9421540C2',
          exponent: 0,
          aliases: ['cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4']
        }, {
          denom: 'stkd-scrt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
      base: 'ibc/13AD9D1CD176F98229C46CD3FAF22D588CA13A424CA28479C1E88EC9421540C2',
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
            channel_id: 'channel-83',
            base_denom: 'cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'The native token cw20 for Button on Secret Network',
      denom_units: [{
          denom: 'ibc/6B001D50BCC84FE90215051D2BEE34458535EA7987CF92DBF7F3F49762B2EEE7',
          exponent: 0,
          aliases: ['cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt']
        }, {
          denom: 'butt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
      base: 'ibc/6B001D50BCC84FE90215051D2BEE34458535EA7987CF92DBF7F3F49762B2EEE7',
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
            channel_id: 'channel-83',
            base_denom: 'cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'The native token cw20 for Alter on Secret Network',
      denom_units: [{
          denom: 'ibc/2385D07ADAA9481116641343509DA07CBE287283FC9A66536E4390594574C860',
          exponent: 0,
          aliases: ['cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej']
        }, {
          denom: 'alter',
          exponent: 6
        }],
      base: 'ibc/2385D07ADAA9481116641343509DA07CBE287283FC9A66536E4390594574C860',
      type_asset: 'snip20',
      address: 'secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
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
            channel_id: 'channel-83',
            base_denom: 'cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'The native token cw20 for Amber on Secret Network',
      denom_units: [{
          denom: 'ibc/21AC0AFDFCF0DFB4C8D153670897C8E44617405E75DB9D9CA58BC8082CB504B2',
          exponent: 0,
          aliases: ['cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852']
        }, {
          denom: 'amber',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
      base: 'ibc/21AC0AFDFCF0DFB4C8D153670897C8E44617405E75DB9D9CA58BC8082CB504B2',
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
            channel_id: 'channel-83',
            base_denom: 'cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-26'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shill on Secret Network',
      denom_units: [{
          denom: 'ibc/E1A1FDFC0C393664E7DEB9AAFA3E727C28E13AA3E82EA66BF555197AD9DB54B6',
          exponent: 0,
          aliases: ['cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse']
        }, {
          denom: 'shill',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
      base: 'ibc/E1A1FDFC0C393664E7DEB9AAFA3E727C28E13AA3E82EA66BF555197AD9DB54B6',
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
            channel_id: 'channel-83',
            base_denom: 'cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-26'
          }
        }]
    }
  ]
};
export default assets;
    