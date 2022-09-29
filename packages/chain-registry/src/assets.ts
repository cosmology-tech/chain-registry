import { AssetList } from '@chain-registry/types';
const assets: AssetList[] = [
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'avalanche',
    assets: [
      {
        description:
          'AVAX is the native token of Avalanche. It is a hard-capped, scarce asset that is used to pay for fees, secure the platform through staking, and provide a basic unit of account between the multiple subnets created on Avalanche.',
        denom_units: [
          {
            denom: 'wei',
            exponent: 0
          },
          {
            denom: 'avax',
            exponent: 18
          }
        ],
        base: 'wei',
        name: 'Avalanche',
        display: 'avax',
        symbol: 'AVAX',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.svg'
        },
        coingecko_id: 'avalanche-2'
      },
      {
        description:
          'The wrapped ERC-20 representation of AVAX, the native token of Avalanche.',
        type_asset: 'erc20',
        address: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7',
        denom_units: [
          {
            denom: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7',
            exponent: 0,
            aliases: ['wavax-wei']
          },
          {
            denom: 'wavax',
            exponent: 18
          }
        ],
        base: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7',
        name: 'Wrapped AVAX',
        display: 'wavax',
        symbol: 'WAVAX',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
        },
        coingecko_id: 'wrapped-avax'
      },
      {
        description:
          'Multi-Collateral Dai, brings a lot of new and exciting features, such as support for new CDP collateral types and Dai Savings Rate.',
        type_asset: 'erc20',
        address: '0xc5fa5669e326da8b2c35540257cd48811f40a36b',
        denom_units: [
          {
            denom: '0xc5fa5669e326da8b2c35540257cd48811f40a36b',
            exponent: 0,
            aliases: ['dai-wei']
          },
          {
            denom: 'axldai',
            exponent: 18
          }
        ],
        base: '0xc5fa5669e326da8b2c35540257cd48811f40a36b',
        name: 'Axelar Wrapped DAI',
        display: 'axldai',
        symbol: 'axlDAI',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
        }
      },
      {
        description:
          'Frax is a fractional-algorithmic stablecoin protocol. It aims to provide a highly scalable, decentralized, algorithmic money in place of fixed-supply assets like BTC. Additionally, FXS is the value accrual and governance token of the entire Frax ecosystem.',
        type_asset: 'erc20',
        address: '0x4914886dbb8aad7a7456d471eaab10b06d42348d',
        denom_units: [
          {
            denom: '0x4914886dbb8aad7a7456d471eaab10b06d42348d',
            exponent: 0,
            aliases: ['frax-wei']
          },
          {
            denom: 'axlfrax',
            exponent: 18
          }
        ],
        base: '0x4914886dbb8aad7a7456d471eaab10b06d42348d',
        name: 'Axelar Wrapped Frax',
        display: 'axlfrax',
        symbol: 'axlFRAX',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
        }
      },
      {
        description:
          'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
        type_asset: 'erc20',
        address: '0xfab550568C688d5d8a52c7d794cb93edc26ec0ec',
        denom_units: [
          {
            denom: '0xfab550568C688d5d8a52c7d794cb93edc26ec0ec',
            exponent: 0,
            aliases: ['uusdc']
          },
          {
            denom: 'axlusdc',
            exponent: 6
          }
        ],
        base: '0xfab550568C688d5d8a52c7d794cb93edc26ec0ec',
        name: 'Axelar Wrapped USDC',
        display: 'axlusdc',
        symbol: 'axlUSDC',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }
      },
      {
        description:
          'Tether gives you the joint benefits of open blockchain technology and traditional currency by converting your cash into a stable digital currency equivalent.',
        type_asset: 'erc20',
        address: '0xf976ba91b6bb3468c91e4f02e68b37bc64a57e66',
        denom_units: [
          {
            denom: '0xf976ba91b6bb3468c91e4f02e68b37bc64a57e66',
            exponent: 0,
            aliases: ['uusdt']
          },
          {
            denom: 'axlusdt',
            exponent: 6
          }
        ],
        base: '0xf976ba91b6bb3468c91e4f02e68b37bc64a57e66',
        name: 'Axelar Wrapped USDT',
        display: 'axlusdt',
        symbol: 'axlUSDT',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'ethereum',
    assets: [
      {
        description: 'Ether is the native fee token of the Ethereum network.',
        denom_units: [
          {
            denom: 'wei',
            exponent: 0
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
        base: 'wei',
        name: 'Ether',
        display: 'eth',
        symbol: 'ETH',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
        },
        coingecko_id: 'ethereum'
      },
      {
        description:
          'Aave is an Open Source and Non-Custodial protocol to earn interest on deposits & borrow assets. It also features access to highly innovative flash loans, which let developers borrow instantly and easily; no collateral needed. With 16 different assets, 5 of which are stablecoins.',
        type_asset: 'erc20',
        address: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
        denom_units: [
          {
            denom: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
            exponent: 0,
            aliases: ['aave-wei']
          },
          {
            denom: 'aave',
            exponent: 18
          }
        ],
        base: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
        name: 'Aave',
        display: 'aave',
        symbol: 'AAVE',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg'
        },
        coingecko_id: 'aave'
      },
      {
        description:
          'ApeCoin found new expression in web3 through art, gaming, entertainment, and events. APE is a token made to support what’s next, controlled, and built on by the community. It will serve as a decentralized protocol layer for community-led initiatives that drive culture forward into the metaverse.',
        type_asset: 'erc20',
        address: '0x4d224452801aced8b2f0aebe155379bb5d594381',
        denom_units: [
          {
            denom: '0x4d224452801aced8b2f0aebe155379bb5d594381',
            exponent: 0,
            aliases: ['ape-wei']
          },
          {
            denom: 'ape',
            exponent: 18
          }
        ],
        base: '0x4d224452801aced8b2f0aebe155379bb5d594381',
        name: 'ApeCoin',
        display: 'ape',
        symbol: 'APE',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg'
        },
        coingecko_id: 'apecoin'
      },
      {
        description:
          'Axie Infinity is a Pokémon-inspired digital pet universe where anyone can earn tokens through skilled gameplay and contributions to the ecosystem. Players can battle, collect, raise, and build a land-based kingdom for their pets (known as Axies).',
        type_asset: 'erc20',
        address: '0xbb0e17ef65f82ab018d8edd776e8dd940327b28b',
        denom_units: [
          {
            denom: '0xbb0e17ef65f82ab018d8edd776e8dd940327b28b',
            exponent: 0,
            aliases: ['axs-wei']
          },
          {
            denom: 'axs',
            exponent: 18
          }
        ],
        base: '0xbb0e17ef65f82ab018d8edd776e8dd940327b28b',
        name: 'Axie Infinity Shard',
        display: 'axs',
        symbol: 'AXS',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/axs.svg'
        },
        coingecko_id: 'axie-infinity'
      },
      {
        description:
          'Multi-Collateral Dai, brings a lot of new and exciting features, such as support for new CDP collateral types and Dai Savings Rate.',
        type_asset: 'erc20',
        address: '0x6b175474e89094c44da98b954eedeac495271d0f',
        denom_units: [
          {
            denom: '0x6b175474e89094c44da98b954eedeac495271d0f',
            exponent: 0,
            aliases: ['dai-wei']
          },
          {
            denom: 'dai',
            exponent: 18
          }
        ],
        base: '0x6b175474e89094c44da98b954eedeac495271d0f',
        name: 'Dai Stablecoin',
        display: 'dai',
        symbol: 'DAI',
        traces: [
          {
            type: 'synthetic',
            counterparty: {
              chain_name: 'forex',
              base_denom: 'USD'
            },
            provider: 'MakerDAO'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
        },
        coingecko_id: 'dai'
      },
      {
        description:
          'Frax is a fractional-algorithmic stablecoin protocol. It aims to provide a highly scalable, decentralized, algorithmic money in place of fixed-supply assets like BTC. Additionally, FXS is the value accrual and governance token of the entire Frax ecosystem.',
        type_asset: 'erc20',
        address: '0x853d955acef822db058eb8505911ed77f175b99e',
        denom_units: [
          {
            denom: '0x853d955acef822db058eb8505911ed77f175b99e',
            exponent: 0,
            aliases: ['frax-wei']
          },
          {
            denom: 'frax',
            exponent: 18
          }
        ],
        base: '0x853d955acef822db058eb8505911ed77f175b99e',
        name: 'Frax',
        display: 'frax',
        symbol: 'FRAX',
        traces: [
          {
            type: 'synthetic',
            counterparty: {
              chain_name: 'forex',
              base_denom: 'USD'
            },
            provider: 'Frax Protocol'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
        },
        coingecko_id: 'frax'
      },
      {
        description:
          'A blockchain-based middleware, acting as a bridge between cryptocurrency smart contracts, data feeds, APIs and traditional bank account payments.',
        type_asset: 'erc20',
        address: '0x514910771af9ca656af840dff83e8264ecf986ca',
        denom_units: [
          {
            denom: '0x514910771af9ca656af840dff83e8264ecf986ca',
            exponent: 0,
            aliases: ['link-wei']
          },
          {
            denom: 'link',
            exponent: 18
          }
        ],
        base: '0x514910771af9ca656af840dff83e8264ecf986ca',
        name: 'Chainlink',
        display: 'link',
        symbol: 'LINK',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg'
        },
        coingecko_id: 'chainlink'
      },
      {
        description:
          'Maker is a Decentralized Autonomous Organization that creates and insures the dai stablecoin on the Ethereum blockchain',
        type_asset: 'erc20',
        address: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
        denom_units: [
          {
            denom: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
            exponent: 0,
            aliases: ['mkr-wei']
          },
          {
            denom: 'mkr',
            exponent: 18
          }
        ],
        base: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
        name: 'Maker',
        display: 'mkr',
        symbol: 'MKR',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg'
        },
        coingecko_id: 'maker'
      },
      {
        description:
          "RAI is a non-pegged, ETH-backed stable asset. It is useful as more 'stable' collateral for other DeFi protocols (compared to ETH or BTC) or as a stable asset with an embedded interest rate.",
        type_asset: 'erc20',
        address: '0x03ab458634910aad20ef5f1c8ee96f1d6ac54919',
        denom_units: [
          {
            denom: '0x03ab458634910aad20ef5f1c8ee96f1d6ac54919',
            exponent: 0,
            aliases: ['rai-wei']
          },
          {
            denom: 'rai',
            exponent: 18
          }
        ],
        base: '0x03ab458634910aad20ef5f1c8ee96f1d6ac54919',
        name: 'Rai Reflex Index',
        display: 'rai',
        symbol: 'RAI',
        traces: [
          {
            type: 'synthetic',
            counterparty: {
              chain_name: 'forex',
              base_denom: 'USD'
            },
            provider: 'RAI Finance'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg'
        },
        coingecko_id: 'rai'
      },
      {
        description:
          'SHIBA INU is a 100% decentralized community experiment with it claims that 1/2 the tokens have been sent to Vitalik and the other half were locked to a Uniswap pool and the keys burned.',
        type_asset: 'erc20',
        address: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
        denom_units: [
          {
            denom: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
            exponent: 0,
            aliases: ['shib-wei']
          },
          {
            denom: 'shib',
            exponent: 18
          }
        ],
        base: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
        name: 'Shiba Inu',
        display: 'shib',
        symbol: 'SHIB',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg'
        },
        coingecko_id: 'shiba-inu'
      },
      {
        description:
          'stETH is a token that represents staked ether in Lido, combining the value of initial deposit + staking rewards. stETH tokens are pegged 1:1 to the ETH staked with Lido and can be used as one would use ether, allowing users to earn Eth2 staking rewards whilst benefiting from Defi yields.',
        type_asset: 'erc20',
        address: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
        denom_units: [
          {
            denom: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
            exponent: 0,
            aliases: ['steth-wei']
          },
          {
            denom: 'steth',
            exponent: 18
          }
        ],
        base: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
        name: 'Lido Staked Ether',
        display: 'steth',
        symbol: 'stETH',
        traces: [
          {
            type: 'liquid-stake',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: 'wei'
            },
            provider: 'Lido'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg'
        },
        coingecko_id: 'staked-ether'
      },
      {
        description:
          'UNI token served as governance token for Uniswap protocol with 1 billion UNI have been minted at genesis. 60% of the UNI genesis supply is allocated to Uniswap community members and remaining for team, investors and advisors.',
        type_asset: 'erc20',
        address: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
        denom_units: [
          {
            denom: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
            exponent: 0,
            aliases: ['uni-wei']
          },
          {
            denom: 'uni',
            exponent: 18
          }
        ],
        base: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
        name: 'Uniswap',
        display: 'uni',
        symbol: 'UNI',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg'
        },
        coingecko_id: 'uniswap'
      },
      {
        description:
          'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
        type_asset: 'erc20',
        address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        denom_units: [
          {
            denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
            exponent: 0,
            aliases: ['uusdc']
          },
          {
            denom: 'usdc',
            exponent: 6
          }
        ],
        base: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        name: 'USD Coin',
        display: 'usdc',
        symbol: 'USDC',
        traces: [
          {
            type: 'synthetic',
            counterparty: {
              chain_name: 'forex',
              base_denom: 'USD'
            },
            provider: 'Circle'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        },
        coingecko_id: 'usd-coin'
      },
      {
        description:
          'Tether gives you the joint benefits of open blockchain technology and traditional currency by converting your cash into a stable digital currency equivalent.',
        type_asset: 'erc20',
        address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
        denom_units: [
          {
            denom: '0xdac17f958d2ee523a2206206994597c13d831ec7',
            exponent: 0,
            aliases: ['uusdt']
          },
          {
            denom: 'usdt',
            exponent: 6
          }
        ],
        base: '0xdac17f958d2ee523a2206206994597c13d831ec7',
        name: 'Tether USD',
        display: 'usdt',
        symbol: 'USDT',
        traces: [
          {
            type: 'synthetic',
            counterparty: {
              chain_name: 'forex',
              base_denom: 'USD'
            },
            provider: 'Tether'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        },
        coingecko_id: 'tether'
      },
      {
        description:
          'Wrapped Bitcoin (WBTC) is an ERC20 token backed 1:1 with Bitcoin. Completely transparent. 100% verifiable. Community led.',
        type_asset: 'erc20',
        address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
        denom_units: [
          {
            denom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
            exponent: 0,
            aliases: ['wbtc-satoshi']
          },
          {
            denom: 'wbtc',
            exponent: 8
          }
        ],
        base: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
        name: 'Wrapped Bitcoin',
        display: 'wbtc',
        symbol: 'WBTC',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'bitcoin',
              base_denom: 'sat'
            },
            provider: 'BitGo, Kyber, and Ren'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
        },
        coingecko_id: 'wrapped-bitcoin'
      },
      {
        description: "wETH is 'wrapped ETH'",
        type_asset: 'erc20',
        address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        denom_units: [
          {
            denom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            exponent: 0,
            aliases: ['weth-wei']
          },
          {
            denom: 'weth',
            exponent: 18
          }
        ],
        base: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        name: 'Wrapped Ether',
        display: 'weth',
        symbol: 'WETH',
        traces: [
          {
            type: 'wrapped',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: 'wei'
            },
            provider: 'Ethereum'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        },
        coingecko_id: 'weth'
      },
      {
        description:
          'Chain is a cloud blockchain protocol that enables organizations to build better financial services from the ground up powered by Sequence and Chain Core.',
        type_asset: 'erc20',
        address: '0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18',
        denom_units: [
          {
            denom: '0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18',
            exponent: 0,
            aliases: ['xcn-wei']
          },
          {
            denom: 'xcn',
            exponent: 18
          }
        ],
        base: '0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18',
        name: 'Chain',
        display: 'xcn',
        symbol: 'XCN',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xcn.svg'
        },
        coingecko_id: 'chain-2'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'moonbeam',
    assets: [
      {
        description:
          'Glimmer (GLMR) is the utility token of the Moonbeam Network, Moonbeam’s primary deployment on the Polkadot network that serves as a developer-friendly parachain.',
        denom_units: [
          {
            denom: 'Wei',
            exponent: 0,
            aliases: ['wei']
          },
          {
            denom: 'GLMR',
            exponent: 18,
            aliases: ['glmr']
          }
        ],
        base: 'Wei',
        name: 'Glimmer',
        display: 'GLMR',
        symbol: 'GLMR',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
        },
        coingecko_id: 'moonbeam'
      },
      {
        description:
          'An ERC-20 representation of GLMR, the native token of Moonbeam.',
        type_asset: 'erc20',
        address: '0xacc15dc74880c9944775448304b263d191c6077f',
        denom_units: [
          {
            denom: '0xacc15dc74880c9944775448304b263d191c6077f',
            exponent: 0,
            aliases: ['wglmr-wei']
          },
          {
            denom: 'wglmr',
            exponent: 18
          }
        ],
        base: '0xacc15dc74880c9944775448304b263d191c6077f',
        name: 'Wrapped Moonbeam',
        display: 'wglmr',
        symbol: 'WGLMR',
        traces: [
          {
            type: 'wrapped',
            counterparty: {
              chain_name: 'moonbeam',
              base_denom: 'Wei'
            },
            provider: 'Moonbeam'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
        },
        coingecko_id: 'wrapped-moonbeam'
      },
      {
        description:
          "Polkadot is a blockchain network designed to support various interconnected, application-specific sub-chains. Each chain built within Polkadot uses Parity Technologies' Substrate modular framework, which allows developers to select specific components that suit their application-specific chain best.",
        type_asset: 'erc20',
        address: '0xffffffff1fcacbd218edc0eba20fc2308c778080',
        denom_units: [
          {
            denom: '0xffffffff1fcacbd218edc0eba20fc2308c778080',
            exponent: 0,
            aliases: ['dot-planck']
          },
          {
            denom: 'xcdot',
            exponent: 10
          }
        ],
        base: '0xffffffff1fcacbd218edc0eba20fc2308c778080',
        name: 'Wrapped Polkadot',
        display: 'xcdot',
        symbol: 'xcDOT',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'polkadot',
              base_denom: 'Planck'
            },
            provider: 'Polkadot Parachain'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/dot.svg'
        }
      },
      {
        description:
          'Multi-Collateral Dai, brings a lot of new and exciting features, such as support for new CDP collateral types and Dai Savings Rate.',
        type_asset: 'erc20',
        address: '0x14df360966a1c4582d2b18edbdae432ea0a27575',
        denom_units: [
          {
            denom: '0x14df360966a1c4582d2b18edbdae432ea0a27575',
            exponent: 0,
            aliases: ['dai-wei']
          },
          {
            denom: 'axldai',
            exponent: 18
          }
        ],
        base: '0x14df360966a1c4582d2b18edbdae432ea0a27575',
        name: 'Axelar Wrapped Dai Stablecoin',
        display: 'axldai',
        symbol: 'axlDAI',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'axelar',
              base_denom: 'dai-wei'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
        }
      },
      {
        description:
          'Frax is a fractional-algorithmic stablecoin protocol. It aims to provide a highly scalable, decentralized, algorithmic money in place of fixed-supply assets like BTC. Additionally, FXS is the value accrual and governance token of the entire Frax ecosystem.',
        type_asset: 'erc20',
        address: '0x61C82805453a989E99B544DFB7031902e9bac448',
        denom_units: [
          {
            denom: '0x61C82805453a989E99B544DFB7031902e9bac448',
            exponent: 0,
            aliases: ['frax-wei']
          },
          {
            denom: 'axlfrax',
            exponent: 18
          }
        ],
        base: '0x61C82805453a989E99B544DFB7031902e9bac448',
        name: 'Axelar Wrapped Frax',
        display: 'axlfrax',
        symbol: 'axlFRAX',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'axelar',
              base_denom: 'frax-wei'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
        }
      },
      {
        description:
          'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
        type_asset: 'erc20',
        address: '0xca01a1d0993565291051daff390892518acfad3a',
        denom_units: [
          {
            denom: '0xca01a1d0993565291051daff390892518acfad3a',
            exponent: 0,
            aliases: ['uusdc']
          },
          {
            denom: 'axlusdc',
            exponent: 6
          }
        ],
        base: '0xca01a1d0993565291051daff390892518acfad3a',
        name: 'Axelar Wrapped USD Coin',
        display: 'axlusdc',
        symbol: 'axlUSDC',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'axelar',
              base_denom: 'uusdc'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }
      },
      {
        description:
          'Tether gives you the joint benefits of open blockchain technology and traditional currency by converting your cash into a stable digital currency equivalent.',
        type_asset: 'erc20',
        address: '0xdfd74af792bc6d45d1803f425ce62dd16f8ae038',
        denom_units: [
          {
            denom: '0xdfd74af792bc6d45d1803f425ce62dd16f8ae038',
            exponent: 0,
            aliases: ['uusdt']
          },
          {
            denom: 'axlusdt',
            exponent: 6
          }
        ],
        base: '0xdfd74af792bc6d45d1803f425ce62dd16f8ae038',
        name: 'Axelar Wrapped Tether USD',
        display: 'axlusdt',
        symbol: 'axlUSDT',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'axelar',
              base_denom: 'uusdt'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'polkadot',
    assets: [
      {
        description:
          'The native fee, governance, staking, and bonding token of the Polkadot platform.',
        denom_units: [
          {
            denom: 'Planck',
            exponent: 0,
            aliases: ['planck']
          },
          {
            denom: 'uDOT',
            exponent: 4,
            aliases: ['udot', 'microdot', 'Microdot']
          },
          {
            denom: 'mDOT',
            exponent: 7,
            aliases: ['millidot', 'Millidot']
          },
          {
            denom: 'DOT',
            exponent: 10,
            aliases: ['dot', 'New DOT', 'new dot']
          },
          {
            denom: 'DOT (old)',
            exponent: 12
          },
          {
            denom: 'MDOT',
            exponent: 16,
            aliases: ['million', 'Million']
          }
        ],
        base: 'Planck',
        name: 'Polkadot',
        display: 'DOT',
        symbol: 'DOT',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
        },
        coingecko_id: 'polkadot'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'polygon',
    assets: [
      {
        description:
          'Polygon (formerly Matic) Network brings massive scale to Ethereum using an adapted version of Plasma with PoS based side chains. Polygon is a well-structured, easy-to-use platform for Ethereum scaling and infrastructure development.',
        denom_units: [
          {
            denom: 'wei',
            exponent: 0
          },
          {
            denom: 'matic',
            exponent: 18,
            aliases: ['polygon']
          }
        ],
        base: 'wei',
        name: 'Matic',
        display: 'matic',
        symbol: 'MATIC',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic.svg'
        },
        coingecko_id: 'matic-network'
      },
      {
        description:
          'Polygon combines the best of Ethereum and sovereign blockchains into a full-fledged multi-chain system.',
        type_asset: 'erc20',
        address: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
        denom_units: [
          {
            denom: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
            exponent: 0,
            aliases: ['wmatic-wei']
          },
          {
            denom: 'wmatic',
            exponent: 18,
            aliases: ['polygon']
          }
        ],
        base: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
        name: 'Wrapped Matic',
        display: 'wmatic',
        symbol: 'WMATIC',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg'
        },
        coingecko_id: 'wmatic'
      },
      {
        description:
          'Multi-Collateral Dai, brings a lot of new and exciting features, such as support for new CDP collateral types and Dai Savings Rate.',
        type_asset: 'erc20',
        address: '0xddc9e2891fa11a4cc5c223145e8d14b44f3077c9',
        denom_units: [
          {
            denom: '0xddc9e2891fa11a4cc5c223145e8d14b44f3077c9',
            exponent: 0,
            aliases: ['dai-wei']
          },
          {
            denom: 'axldai',
            exponent: 18
          }
        ],
        base: '0xddc9e2891fa11a4cc5c223145e8d14b44f3077c9',
        name: 'Axelar Wrapped Dai Stablecoin',
        display: 'axldai',
        symbol: 'axlDAI',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
        }
      },
      {
        description:
          'Frax is a fractional-algorithmic stablecoin protocol. It aims to provide a highly scalable, decentralized, algorithmic money in place of fixed-supply assets like BTC. Additionally, FXS is the value accrual and governance token of the entire Frax ecosystem.',
        type_asset: 'erc20',
        address: '0x53adc464b488be8c5d7269b9abbce8ba74195c3a',
        denom_units: [
          {
            denom: '0x53adc464b488be8c5d7269b9abbce8ba74195c3a',
            exponent: 0,
            aliases: ['frax-wei']
          },
          {
            denom: 'axlfrax',
            exponent: 18
          }
        ],
        base: '0x53adc464b488be8c5d7269b9abbce8ba74195c3a',
        name: 'Axelar Wrapped Frax',
        display: 'axlfrax',
        symbol: 'axlFRAX',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
        }
      },
      {
        description:
          'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
        type_asset: 'erc20',
        address: '0x750e4c4984a9e0f12978ea6742bc1c5d248f40ed',
        denom_units: [
          {
            denom: '0x750e4c4984a9e0f12978ea6742bc1c5d248f40ed',
            exponent: 0,
            aliases: ['uusdc']
          },
          {
            denom: 'axlusdc',
            exponent: 6
          }
        ],
        base: '0x750e4c4984a9e0f12978ea6742bc1c5d248f40ed',
        name: 'Axelar Wrapped USD Coin',
        display: 'axlusdc',
        symbol: 'axlUSDC',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }
      },
      {
        description:
          'Tether gives you the joint benefits of open blockchain technology and traditional currency by converting your cash into a stable digital currency equivalent.',
        type_asset: 'erc20',
        address: '0xceed2671d8634e3ee65000edbbee66139b132fbf',
        denom_units: [
          {
            denom: '0xceed2671d8634e3ee65000edbbee66139b132fbf',
            exponent: 0,
            aliases: ['uusdt']
          },
          {
            denom: 'axlusdt',
            exponent: 6
          }
        ],
        base: '0xceed2671d8634e3ee65000edbbee66139b132fbf',
        name: 'Axelar Wrapped Tether USD',
        display: 'axlusdt',
        symbol: 'axlUSDT',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'agoric',
    assets: [
      {
        description:
          'BLD is the token used to secure the Agoric chain through staking and to backstop Inter Protocol.',
        denom_units: [
          {
            denom: 'ubld',
            exponent: 0
          },
          {
            denom: 'bld',
            exponent: 6
          }
        ],
        base: 'ubld',
        name: 'Agoric',
        display: 'bld',
        symbol: 'BLD',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png'
        },
        coingecko_id: 'agoric'
      },
      {
        description:
          'IST is the stable token used by the Agoric chain for execution fees and commerce.',
        denom_units: [
          {
            denom: 'uist',
            exponent: 0
          },
          {
            denom: 'ist',
            exponent: 6
          }
        ],
        base: 'uist',
        name: 'Inter Stable Token',
        display: 'ist',
        symbol: 'IST',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'aioz',
    assets: [
      {
        description:
          'The native staking and governance token of the AIOZ Network.',
        denom_units: [
          {
            denom: 'attoaioz',
            exponent: 0
          },
          {
            denom: 'nanoaioz',
            exponent: 9
          },
          {
            denom: 'aioz',
            exponent: 18
          }
        ],
        base: 'attoaioz',
        name: 'AIOZ',
        display: 'aioz',
        symbol: 'AIOZ',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.png'
        },
        coingecko_id: 'aioz-network'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'akash',
    assets: [
      {
        description:
          "Akash Token (AKT) is the Akash Network's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
        denom_units: [
          {
            denom: 'uakt',
            exponent: 0
          },
          {
            denom: 'akt',
            exponent: 6
          }
        ],
        base: 'uakt',
        name: 'Akash Network',
        display: 'akt',
        symbol: 'AKT',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
        },
        coingecko_id: 'akash-network'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'arkh',
    assets: [
      {
        description: 'The native token of Arkhadian',
        denom_units: [
          {
            denom: 'uarkh',
            exponent: 0
          },
          {
            denom: 'arkh',
            exponent: 6
          }
        ],
        base: 'uarkh',
        name: 'Arkh',
        display: 'arkh',
        symbol: 'ARKH',
        logo_URIs: {
          png: 'https://www.arkhadian.com/static/images/600-prism.png'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'assetmantle',
    assets: [
      {
        description: 'The native token of Asset Mantle',
        denom_units: [
          {
            denom: 'umntl',
            exponent: 0
          },
          {
            denom: 'mntl',
            exponent: 6
          }
        ],
        base: 'umntl',
        name: 'AssetMantle',
        display: 'mntl',
        symbol: 'MNTL',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png'
        },
        coingecko_id: 'assetmantle'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'axelar',
    assets: [
      {
        description: 'The native token of Axelar',
        denom_units: [
          {
            denom: 'uaxl',
            exponent: 0
          },
          {
            denom: 'axl',
            exponent: 6
          }
        ],
        base: 'uaxl',
        name: 'Axelar',
        display: 'axl',
        symbol: 'AXL',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
        },
        coingecko_id: 'axelar-network'
      },
      {
        description: "Circle's stablecoin on Axelar",
        denom_units: [
          {
            denom: 'uusdc',
            exponent: 0
          },
          {
            denom: 'usdc',
            exponent: 6
          }
        ],
        base: 'uusdc',
        name: 'USD Coin',
        display: 'usdc',
        symbol: 'USDC',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png'
        },
        coingecko_id: 'usd-coin'
      },
      {
        description: "Frax's fractional-algorithmic stablecoin on Axelar",
        denom_units: [
          {
            denom: 'frax-wei',
            exponent: 0
          },
          {
            denom: 'frax',
            exponent: 18
          }
        ],
        base: 'frax-wei',
        name: 'Frax',
        display: 'frax',
        symbol: 'FRAX',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0x853d955acef822db058eb8505911ed77f175b99e'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/frax.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/frax.png'
        },
        coingecko_id: 'frax'
      },
      {
        description: 'Dai stablecoin on Axelar',
        denom_units: [
          {
            denom: 'dai-wei',
            exponent: 0
          },
          {
            denom: 'dai',
            exponent: 18
          }
        ],
        base: 'dai-wei',
        name: 'Dai Stablecoin',
        display: 'dai',
        symbol: 'DAI',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0x6b175474e89094c44da98b954eedeac495271d0f'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.png'
        },
        coingecko_id: 'dai'
      },
      {
        description: "Tether's USD stablecoin on Axelar",
        denom_units: [
          {
            denom: 'uusdt',
            exponent: 0
          },
          {
            denom: 'usdt',
            exponent: 6
          }
        ],
        base: 'uusdt',
        name: 'Tether USD',
        display: 'usdt',
        symbol: 'USDT',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.png'
        },
        coingecko_id: 'tether'
      },
      {
        description: 'Wrapped Ether on Axelar',
        denom_units: [
          {
            denom: 'weth-wei',
            exponent: 0
          },
          {
            denom: 'weth',
            exponent: 18
          }
        ],
        base: 'weth-wei',
        name: 'Wrapped Ether',
        display: 'weth',
        symbol: 'WETH',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png'
        },
        coingecko_id: 'weth'
      },
      {
        description: 'Wrapped Bitcoin on Axelar',
        denom_units: [
          {
            denom: 'wbtc-satoshi',
            exponent: 0
          },
          {
            denom: 'wbtc',
            exponent: 8
          }
        ],
        base: 'wbtc-satoshi',
        name: 'Wrapped Bitcoin',
        display: 'wbtc',
        symbol: 'WBTC',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png'
        },
        coingecko_id: 'wrapped-bitcoin'
      },
      {
        description: 'Aave on Axelar',
        denom_units: [
          {
            denom: 'aave-wei',
            exponent: 0
          },
          {
            denom: 'aave',
            exponent: 18
          }
        ],
        base: 'aave-wei',
        name: 'Aave',
        display: 'aave',
        symbol: 'AAVE',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg'
        },
        coingecko_id: 'aave'
      },
      {
        description: 'ApeCoin on Axelar',
        denom_units: [
          {
            denom: 'ape-wei',
            exponent: 0
          },
          {
            denom: 'ape',
            exponent: 18
          }
        ],
        base: 'ape-wei',
        name: 'ApeCoin',
        display: 'ape',
        symbol: 'APE',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0x4d224452801aced8b2f0aebe155379bb5d594381'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg'
        },
        coingecko_id: 'apecoin'
      },
      {
        description: 'Axie Infinity Shard on Axelar',
        denom_units: [
          {
            denom: 'axs-wei',
            exponent: 0
          },
          {
            denom: 'axs',
            exponent: 18
          }
        ],
        base: 'axs-wei',
        name: 'Axie Infinity Shard',
        display: 'axs',
        symbol: 'AXS',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0xbb0e17ef65f82ab018d8edd776e8dd940327b28b'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/axs.svg'
        },
        coingecko_id: 'axie-infinity'
      },
      {
        description: 'Chainlink on Axelar',
        denom_units: [
          {
            denom: 'link-wei',
            exponent: 0
          },
          {
            denom: 'link',
            exponent: 18
          }
        ],
        base: 'link-wei',
        name: 'Chainlink',
        display: 'link',
        symbol: 'LINK',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0x514910771af9ca656af840dff83e8264ecf986ca'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg'
        },
        coingecko_id: 'chainlink'
      },
      {
        description: 'Maker on Axelar',
        denom_units: [
          {
            denom: 'mkr-wei',
            exponent: 0
          },
          {
            denom: 'mkr',
            exponent: 18
          }
        ],
        base: 'mkr-wei',
        name: 'Maker',
        display: 'mkr',
        symbol: 'MKR',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg'
        },
        coingecko_id: 'maker'
      },
      {
        description: 'Rai Reflex Index on Axelar',
        denom_units: [
          {
            denom: 'rai-wei',
            exponent: 0
          },
          {
            denom: 'rai',
            exponent: 18
          }
        ],
        base: 'rai-wei',
        name: 'Rai Reflex Index',
        display: 'rai',
        symbol: 'RAI',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0x03ab458634910aad20ef5f1c8ee96f1d6ac54919'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg'
        },
        coingecko_id: 'rai'
      },
      {
        description: 'Shiba Inu on Axelar',
        denom_units: [
          {
            denom: 'shib-wei',
            exponent: 0
          },
          {
            denom: 'shib',
            exponent: 18
          }
        ],
        base: 'shib-wei',
        name: 'Shiba Inu',
        display: 'shib',
        symbol: 'SHIB',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg'
        },
        coingecko_id: 'shiba-inu'
      },
      {
        description: 'Lido Staked Ether on Axelar',
        denom_units: [
          {
            denom: 'steth-wei',
            exponent: 0
          },
          {
            denom: 'steth',
            exponent: 18
          }
        ],
        base: 'steth-wei',
        name: 'Lido Staked Ether',
        display: 'steth',
        symbol: 'stETH',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg'
        },
        coingecko_id: 'staked-ether'
      },
      {
        description: 'Uniswap on Axelar',
        denom_units: [
          {
            denom: 'uni-wei',
            exponent: 0
          },
          {
            denom: 'uni',
            exponent: 18
          }
        ],
        base: 'uni-wei',
        name: 'Uniswap',
        display: 'uni',
        symbol: 'UNI',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg'
        },
        coingecko_id: 'uniswap'
      },
      {
        description: 'Chain on Axelar',
        denom_units: [
          {
            denom: 'xcn-wei',
            exponent: 0
          },
          {
            denom: 'xcn',
            exponent: 18
          }
        ],
        base: 'xcn-wei',
        name: 'Chain',
        display: 'xcn',
        symbol: 'XCN',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xcn.svg'
        },
        coingecko_id: 'chain-2'
      },
      {
        description: 'Wrapped Polkadot on Axelar',
        denom_units: [
          {
            denom: 'dot-planck',
            exponent: 0
          },
          {
            denom: 'dot',
            exponent: 10
          }
        ],
        base: 'dot-planck',
        name: 'Wrapped Polkadot',
        display: 'dot',
        symbol: 'DOT',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'moonbeam',
              base_denom: '0xffffffff1fcacbd218edc0eba20fc2308c778080'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png'
        },
        coingecko_id: 'polkadot'
      },
      {
        description: 'Wrapped Moonbeam on Axelar',
        denom_units: [
          {
            denom: 'wglmr-wei',
            exponent: 0
          },
          {
            denom: 'wglmr',
            exponent: 18
          }
        ],
        base: 'wglmr-wei',
        name: 'Wrapped Moonbeam',
        display: 'wglmr',
        symbol: 'WGLMR',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'moonbeam',
              base_denom: '0xacc15dc74880c9944775448304b263d191c6077f'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.png'
        },
        coingecko_id: 'wrapped-moonbeam'
      },
      {
        description: 'Wrapped Matic on Axelar',
        denom_units: [
          {
            denom: 'wmatic-wei',
            exponent: 0
          },
          {
            denom: 'wmatic',
            exponent: 18
          }
        ],
        base: 'wmatic-wei',
        name: 'Wrapped Matic',
        display: 'wmatic',
        symbol: 'WMATIC',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'polygon',
              base_denom: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg'
        },
        coingecko_id: 'matic-network'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'bandchain',
    assets: [
      {
        description: 'The native token of BandChain',
        denom_units: [
          {
            denom: 'uband',
            exponent: 0
          },
          {
            denom: 'band',
            exponent: 6
          }
        ],
        base: 'uband',
        display: 'band',
        name: 'Band Protocol',
        symbol: 'BAND',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg'
        },
        coingecko_id: 'band-protocol'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'beezee',
    assets: [
      {
        description: 'BeeZee native blockchain',
        denom_units: [
          {
            denom: 'ubze',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'bze',
            exponent: 6,
            aliases: []
          }
        ],
        base: 'ubze',
        name: 'BeeZee',
        display: 'bze',
        symbol: 'BZE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png'
        },
        coingecko_id: 'bzedge'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'bitcanna',
    assets: [
      {
        description:
          'The BCNA coin is the transactional token within the BitCanna network, serving the legal cannabis industry through its payment network, supply chain and trust network.',
        denom_units: [
          {
            denom: 'ubcna',
            exponent: 0
          },
          {
            denom: 'bcna',
            exponent: 6
          }
        ],
        base: 'ubcna',
        display: 'bcna',
        name: 'BitCanna',
        symbol: 'BCNA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
        },
        coingecko_id: 'bitcanna'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'bitsong',
    assets: [
      {
        description: 'BitSong Native Token',
        denom_units: [
          {
            denom: 'ubtsg',
            exponent: 0
          },
          {
            denom: 'btsg',
            exponent: 6
          }
        ],
        base: 'ubtsg',
        name: 'BitSong',
        display: 'btsg',
        symbol: 'BTSG',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg'
        },
        type_asset: 'sdk.coin',
        coingecko_id: 'bitsong'
      },
      {
        description: 'Adam Clay a BitSong Music FanToken',
        denom_units: [
          {
            denom: 'ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09',
            exponent: 0
          },
          {
            denom: 'clay',
            exponent: 6
          }
        ],
        base: 'ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09',
        name: 'Adam Clay FanToken',
        display: 'clay',
        symbol: 'CLAY',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09.png'
        }
      },
      {
        description: 'Nicola Fasano a BitSong Music FanToken',
        denom_units: [
          {
            denom: 'ft25B30C386CDDEBD1413D5AE1180956AE9EB3B9F7',
            exponent: 0
          },
          {
            denom: 'fasano',
            exponent: 6
          }
        ],
        base: 'ft25B30C386CDDEBD1413D5AE1180956AE9EB3B9F7',
        name: 'Nicola Fasano Fantoken',
        display: 'fasano',
        symbol: 'FASANO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft25B30C386CDDEBD1413D5AE1180956AE9EB3B9F7.png'
        }
      },
      {
        description: 'Delta 9 a BitSong Music FanToken',
        denom_units: [
          {
            denom: 'ft575B10B0CEE2C164D9ED6A96313496F164A9607C',
            exponent: 0
          },
          {
            denom: 'd9x',
            exponent: 6
          }
        ],
        base: 'ft575B10B0CEE2C164D9ED6A96313496F164A9607C',
        name: 'Delta 9 Fantoken',
        display: 'd9x',
        symbol: 'D9X',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft575B10B0CEE2C164D9ED6A96313496F164A9607C.png'
        }
      },
      {
        description: 'FONTI a BitSong Music FanToken',
        denom_units: [
          {
            denom: 'ft56664FC98A2CF5F4FBAC3566D1A11D891AD88305',
            exponent: 0
          },
          {
            denom: 'fonti',
            exponent: 6
          }
        ],
        base: 'ft56664FC98A2CF5F4FBAC3566D1A11D891AD88305',
        name: 'FONTI Fantoken',
        display: 'fonti',
        symbol: 'FONTI',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft56664FC98A2CF5F4FBAC3566D1A11D891AD88305.png'
        }
      },
      {
        description: 'BlackJack a BitSong Music FanToken',
        denom_units: [
          {
            denom: 'ft52EEB0EE509AC546ED92EAC8591F731F213DDD16',
            exponent: 0
          },
          {
            denom: 'bjks',
            exponent: 6
          }
        ],
        base: 'ft52EEB0EE509AC546ED92EAC8591F731F213DDD16',
        name: 'BlackJack Fantoken',
        display: 'bjks',
        symbol: 'BJKS',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft52EEB0EE509AC546ED92EAC8591F731F213DDD16.png'
        }
      },
      {
        description: 'Rawanne a BitSong Music FanToken',
        denom_units: [
          {
            denom: 'ftE4903ECC861CA45F2C2BC7EAB8255D2E6E87A33A',
            exponent: 0
          },
          {
            denom: 'rwne',
            exponent: 6
          }
        ],
        base: 'ftE4903ECC861CA45F2C2BC7EAB8255D2E6E87A33A',
        name: 'Rawanne Fantoken',
        display: 'rwne',
        symbol: 'RWNE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ftE4903ECC861CA45F2C2BC7EAB8255D2E6E87A33A.png'
        }
      },
      {
        description: 'Enmoda a BitSong Music FanToken',
        denom_units: [
          {
            denom: 'ft85AE1716C5E39EA6D64BBD7898C3899A7B500626',
            exponent: 0
          },
          {
            denom: 'enmoda',
            exponent: 6
          }
        ],
        base: 'ft85AE1716C5E39EA6D64BBD7898C3899A7B500626',
        name: 'Enmoda Fantoken',
        display: 'enmoda',
        symbol: 'ENMODA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft85AE1716C5E39EA6D64BBD7898C3899A7B500626.png'
        }
      },
      {
        description: '404Deep Records a BitSong Music FanToken',
        denom_units: [
          {
            denom: 'ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A',
            exponent: 0
          },
          {
            denom: '404dr',
            exponent: 6
          }
        ],
        base: 'ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A',
        name: '404Deep Records Fantoken',
        display: '404dr',
        symbol: '404DR',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A.png'
        }
      },
      {
        description: 'N43 a BitSong Music FanToken',
        denom_units: [
          {
            denom: 'ft387C1C279D962ED80C09C1D592A92C4275FD7C5D',
            exponent: 0
          },
          {
            denom: 'n43',
            exponent: 6
          }
        ],
        base: 'ft387C1C279D962ED80C09C1D592A92C4275FD7C5D',
        name: 'N43 Fantoken',
        display: 'n43',
        symbol: 'N43',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft387C1C279D962ED80C09C1D592A92C4275FD7C5D.png'
        }
      },
      {
        description: 'Puro Lobo a BitSong Music FanToken',
        denom_units: [
          {
            denom: 'ft24C9FA4F10B0F235F4A815B15FC774E046A2B2EB',
            exponent: 0
          },
          {
            denom: 'lobo',
            exponent: 6
          }
        ],
        base: 'ft24C9FA4F10B0F235F4A815B15FC774E046A2B2EB',
        name: 'Puro Lobo Fantoken',
        display: 'lobo',
        symbol: 'LOBO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft24C9FA4F10B0F235F4A815B15FC774E046A2B2EB.png'
        }
      },
      {
        description: 'Vibranium a BitSong Music FanToken',
        denom_units: [
          {
            denom: 'ft7020C2A8E984EEBCBB383E91CD6FBB067BB2272B',
            exponent: 0
          },
          {
            denom: 'vibra',
            exponent: 6
          }
        ],
        base: 'ft7020C2A8E984EEBCBB383E91CD6FBB067BB2272B',
        name: 'Vibranium Fantoken',
        display: 'vibra',
        symbol: 'VIBRA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft7020C2A8E984EEBCBB383E91CD6FBB067BB2272B.png'
        }
      },
      {
        description: 'Karina a BitSong Music FanToken',
        denom_units: [
          {
            denom: 'ft2DD67F5D99E9A141142B48474FA7B6B3FF00A3FE',
            exponent: 0
          },
          {
            denom: 'karina',
            exponent: 6
          }
        ],
        base: 'ft2DD67F5D99E9A141142B48474FA7B6B3FF00A3FE',
        name: 'Karina Fantoken',
        display: 'karina',
        symbol: 'KARINA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft2DD67F5D99E9A141142B48474FA7B6B3FF00A3FE.png'
        }
      },
      {
        description: 'Luca Testa a BitSong Music FanToken',
        denom_units: [
          {
            denom: 'ft4B030260D99E3ABE2B604EA2B33BAF3C085CDA12',
            exponent: 0
          },
          {
            denom: 'testa',
            exponent: 6
          }
        ],
        base: 'ft4B030260D99E3ABE2B604EA2B33BAF3C085CDA12',
        name: 'Luca Testa Fantoken',
        display: 'testa',
        symbol: 'TESTA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft4B030260D99E3ABE2B604EA2B33BAF3C085CDA12.png'
        }
      },
      {
        description: 'Carolina Marquez a BitSong Music FanToken',
        denom_units: [
          {
            denom: 'ftD4B6290EDEE1EC7B97AB5A1DC6C177EFD08ADCC3',
            exponent: 0
          },
          {
            denom: 'cmqz',
            exponent: 6
          }
        ],
        base: 'ftD4B6290EDEE1EC7B97AB5A1DC6C177EFD08ADCC3',
        name: 'Carolina Marquez Fantoken',
        display: 'cmqz',
        symbol: 'CMQZ',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ftD4B6290EDEE1EC7B97AB5A1DC6C177EFD08ADCC3.png'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'bostrom',
    assets: [
      {
        description: 'The staking token of Bostrom',
        denom_units: [
          {
            denom: 'boot',
            exponent: 0
          }
        ],
        base: 'boot',
        name: 'Bostrom',
        display: 'boot',
        symbol: 'BOOT',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png'
        },
        coingecko_id: 'bostrom'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'canto',
    assets: [
      {
        description:
          'Canto is a Layer-1 blockchain built to deliver on the promise of DeFi',
        denom_units: [
          {
            denom: 'acanto',
            exponent: 0
          },
          {
            denom: 'canto',
            exponent: 18
          }
        ],
        base: 'acanto',
        name: 'Canto',
        display: 'canto',
        symbol: 'CANTO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png'
        },
        coingecko_id: 'canto'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'carbon',
    assets: [
      {
        description: 'The native token of Carbon',
        denom_units: [
          {
            denom: 'swth',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'dswth',
            exponent: 8,
            aliases: ['SWTH']
          }
        ],
        base: 'swth',
        name: 'Carbon',
        display: 'dswth',
        symbol: 'SWTH',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
        },
        coingecko_id: 'switcheo'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'cerberus',
    assets: [
      {
        description: 'The native token of Cerberus Chain',
        denom_units: [
          {
            denom: 'ucrbrus',
            exponent: 0
          },
          {
            denom: 'crbrus',
            exponent: 6
          }
        ],
        base: 'ucrbrus',
        name: 'Cerberus',
        display: 'crbrus',
        symbol: 'CRBRUS',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png'
        },
        coingecko_id: 'cerberus-2'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'cheqd',
    assets: [
      {
        description: 'Native token for the cheqd network',
        denom_units: [
          {
            denom: 'ncheq',
            exponent: 0
          },
          {
            denom: 'cheq',
            exponent: 9
          }
        ],
        base: 'ncheq',
        display: 'cheq',
        name: 'cheqd',
        symbol: 'CHEQ',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
        },
        coingecko_id: 'cheqd-network'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'chihuahua',
    assets: [
      {
        description: 'The native token of Chihuahua Chain',
        denom_units: [
          {
            denom: 'uhuahua',
            exponent: 0
          },
          {
            denom: 'huahua',
            exponent: 6
          }
        ],
        base: 'uhuahua',
        name: 'Chihuahua',
        display: 'huahua',
        symbol: 'HUAHUA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png'
        },
        coingecko_id: 'chihuahua-token'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'chronicnetwork',
    assets: [
      {
        description:
          'The CHT coin is the governance token within the Chronic Chain network, aimed to serve the entire cannabis community through its payment network, supply chain and trust network.',
        denom_units: [
          {
            denom: 'ucht',
            exponent: 0
          },
          {
            denom: 'cht',
            exponent: 6
          }
        ],
        base: 'ucht',
        display: 'cht',
        name: 'Chronic Token',
        symbol: 'CHT',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chronicnetwork/images/cht.png'
        },
        coingecko_id: 'cht'
      },
      {
        description:
          'The CGAS coin is the transactional token within the Chronic Chain network, aimed to serve the entire cannabis community through its payment network, supply chain and trust network.',
        denom_units: [
          {
            denom: 'ucgas',
            exponent: 0
          },
          {
            denom: 'cgas',
            exponent: 6
          }
        ],
        base: 'ucgas',
        display: 'cgas',
        name: 'Chronic Gas',
        symbol: 'CGAS',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chronicnetwork/images/cgas.png'
        },
        coingecko_id: 'cgas'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'comdex',
    assets: [
      {
        description: 'Native Token of Comdex Protocol',
        denom_units: [
          {
            denom: 'ucmdx',
            exponent: 0
          },
          {
            denom: 'cmdx',
            exponent: 6
          }
        ],
        base: 'ucmdx',
        name: 'Comdex',
        display: 'cmdx',
        symbol: 'CMDX',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png'
        },
        coingecko_id: 'comdex'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'commercionetwork',
    assets: [
      {
        description: 'The native token of Commercio.network',
        denom_units: [
          {
            denom: 'ucommercio',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'commercio',
            exponent: 6,
            aliases: []
          }
        ],
        base: 'ucommercio',
        display: 'commercio',
        name: 'Commercio',
        symbol: 'COM',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.svg'
        }
      },
      {
        description: 'The cash credit token of Commercio.network',
        denom_units: [
          {
            denom: 'uccc',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'ccc',
            exponent: 6,
            aliases: []
          }
        ],
        base: 'uccc',
        display: 'ccc',
        name: 'Commercio Cash Credit',
        symbol: 'CCC',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/ccc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/ccc.svg'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'cosmoshub',
    assets: [
      {
        description:
          'The native staking and governance token of the Cosmos Hub.',
        denom_units: [
          {
            denom: 'uatom',
            exponent: 0
          },
          {
            denom: 'atom',
            exponent: 6
          }
        ],
        base: 'uatom',
        name: 'Cosmos',
        display: 'atom',
        symbol: 'ATOM',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        },
        coingecko_id: 'cosmos'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'crescent',
    assets: [
      {
        description: 'The native token of Crescent',
        denom_units: [
          {
            denom: 'ucre',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'cre',
            exponent: 6,
            aliases: []
          }
        ],
        base: 'ucre',
        name: 'Crescent',
        display: 'cre',
        symbol: 'CRE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
        },
        coingecko_id: 'crescent-network'
      },
      {
        description: 'The bonded token of Crescent',
        denom_units: [
          {
            denom: 'ubcre',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'bcre',
            exponent: 6,
            aliases: []
          }
        ],
        base: 'ubcre',
        name: 'Bonded Crescent',
        display: 'bcre',
        symbol: 'bCRE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg'
        },
        coingecko_id: 'crescent-network'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'cronos',
    assets: [
      {
        description:
          'Cronos Chain - Get Instant DApp Portability with EVM Support',
        denom_units: [
          {
            denom: 'basecro',
            exponent: 0
          },
          {
            denom: 'cro',
            exponent: 18
          }
        ],
        base: 'basecro',
        name: 'Cronos',
        display: 'cro',
        symbol: 'CRO',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/crypto-org-chain/cronos-docs/master/docs/.vuepress/public/cronos.svg',
          png: 'https://raw.githubusercontent.com/crypto-org-chain/cronos-docs/master/docs/.vuepress/public/CRO_icon.png'
        },
        coingecko_id: 'cronos'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'cryptoorgchain',
    assets: [
      {
        description: 'CRO coin is the token for the Crypto.com platform.',
        denom_units: [
          {
            denom: 'basecro',
            exponent: 0
          },
          {
            denom: 'cro',
            exponent: 8
          }
        ],
        base: 'basecro',
        name: 'Cronos',
        display: 'cro',
        symbol: 'CRO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png'
        },
        coingecko_id: 'crypto-com-chain'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'cudos',
    assets: [
      {
        description: 'The native token of the Cudos blockchain',
        denom_units: [
          {
            denom: 'acudos',
            exponent: 0,
            aliases: ['attocudos']
          },
          {
            denom: 'cudos',
            exponent: 18,
            aliases: []
          }
        ],
        base: 'acudos',
        name: 'Cudos',
        display: 'cudos',
        symbol: 'CUDOS',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.svg'
        },
        coingecko_id: 'cudos'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'decentr',
    assets: [
      {
        description: 'The native token of Decentr',
        denom_units: [
          {
            denom: 'udec',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'dec',
            exponent: 6,
            aliases: []
          }
        ],
        base: 'udec',
        name: 'Decentr',
        display: 'dec',
        symbol: 'DEC',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg'
        },
        coingecko_id: 'decentr'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'desmos',
    assets: [
      {
        description: 'The native token of Desmos',
        denom_units: [
          {
            denom: 'udsm',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'dsm',
            exponent: 6,
            aliases: []
          }
        ],
        base: 'udsm',
        name: 'Desmos',
        display: 'dsm',
        symbol: 'DSM',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg'
        },
        coingecko_id: 'desmos'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'dig',
    assets: [
      {
        description: 'Native token of Dig Chain',
        denom_units: [
          {
            denom: 'udig',
            exponent: 0
          },
          {
            denom: 'dig',
            exponent: 6
          }
        ],
        base: 'udig',
        name: 'Dig Chain',
        display: 'dig',
        symbol: 'DIG',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png'
        },
        coingecko_id: 'dig-chain'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'echelon',
    assets: [
      {
        description:
          'Echelon - a scalable EVM on Cosmos, built on Proof-of-Stake with fast-finality that prioritizes interoperability and novel economics',
        denom_units: [
          {
            denom: 'aechelon',
            exponent: 0
          },
          {
            denom: 'echelon',
            exponent: 18
          }
        ],
        base: 'aechelon',
        name: 'Echelon',
        display: 'echelon',
        symbol: 'ECH',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/echelon.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/logo.png'
        },
        coingecko_id: 'echelon'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'emoney',
    assets: [
      {
        description:
          'e-Money NGM staking token. In addition to earning staking rewards the token is bought back and burned based on e-Money stablecoin inflation.',
        denom_units: [
          {
            denom: 'ungm',
            exponent: 0
          },
          {
            denom: 'ngm',
            exponent: 6
          }
        ],
        base: 'ungm',
        name: 'e-Money',
        display: 'ngm',
        symbol: 'NGM',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png'
        },
        coingecko_id: 'e-money'
      },
      {
        description:
          'e-Money EUR stablecoin. Audited and backed by fiat EUR deposits and government bonds.',
        denom_units: [
          {
            denom: 'eeur',
            exponent: 0
          },
          {
            denom: 'eur',
            exponent: 6
          }
        ],
        base: 'eeur',
        name: 'e-Money EUR',
        display: 'eur',
        symbol: 'EEUR',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png'
        },
        coingecko_id: 'e-money-eur'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'ethos',
    assets: [
      {
        description: 'The native token of Ethos',
        denom_units: [
          {
            denom: 'aRYT',
            exponent: 0
          },
          {
            denom: 'RYT',
            exponent: 18
          }
        ],
        base: 'aRYT',
        name: 'RYT',
        display: 'RYT',
        symbol: 'RYT',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.png'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'evmos',
    assets: [
      {
        description:
          'The native EVM, governance and staking token of the Evmos Hub',
        denom_units: [
          {
            denom: 'aevmos',
            exponent: 0
          },
          {
            denom: 'evmos',
            exponent: 18
          }
        ],
        base: 'aevmos',
        name: 'Evmos',
        display: 'evmos',
        symbol: 'EVMOS',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png'
        },
        coingecko_id: 'evmos'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'fetchhub',
    assets: [
      {
        description:
          'The native staking and governance token of the Fetch Hub.',
        denom_units: [
          {
            denom: 'afet',
            exponent: 0
          },
          {
            denom: 'fet',
            exponent: 18
          }
        ],
        base: 'afet',
        name: 'fetch-ai',
        display: 'fet',
        symbol: 'FET',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg'
        },
        coingecko_id: 'fetch-ai'
      },
      {
        description:
          'The MOBX coin rewards the use of eco-friendly micromobility transportation.',
        denom_units: [
          {
            denom: 'nanomobx',
            exponent: 0
          },
          {
            denom: 'mobx',
            exponent: 9
          }
        ],
        base: 'nanomobx',
        name: 'MOBIX',
        display: 'mobx',
        symbol: 'MOBX',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/mobx.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/mobx.png'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'firmachain',
    assets: [
      {
        description: 'The native token of FirmaChain',
        denom_units: [
          {
            denom: 'ufct',
            exponent: 0
          },
          {
            denom: 'fct',
            exponent: 6
          }
        ],
        base: 'ufct',
        name: 'FirmaChain',
        display: 'fct',
        symbol: 'FCT',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.svg'
        },
        coingecko_id: 'firmachain'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'galaxy',
    assets: [
      {
        description: 'GLX is the staking token of the Galaxy Chain',
        denom_units: [
          {
            denom: 'uglx',
            exponent: 0
          },
          {
            denom: 'glx',
            exponent: 6
          }
        ],
        base: 'uglx',
        name: 'Galaxy',
        display: 'glx',
        symbol: 'GLX',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'genesisl1',
    assets: [
      {
        description:
          'L1 coin is the GenesisL1 blockchain utility, governance and EVM token',
        denom_units: [
          {
            denom: 'el1',
            exponent: 0
          },
          {
            denom: 'l1',
            exponent: 18
          }
        ],
        base: 'el1',
        name: 'GenesisL1',
        display: 'l1',
        symbol: 'L1',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'gravitybridge',
    assets: [
      {
        description: 'The native token of Gravity Bridge',
        denom_units: [
          {
            denom: 'ugraviton',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'graviton',
            exponent: 6,
            aliases: []
          }
        ],
        base: 'ugraviton',
        name: 'Graviton',
        display: 'graviton',
        symbol: 'GRAV',
        coingecko_id: 'graviton',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png'
        }
      },
      {
        description:
          'pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets.',
        denom_units: [
          {
            denom: 'gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
            exponent: 0
          }
        ],
        base: 'gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
        name: 'pSTAKE Finance',
        display: 'pstake',
        symbol: 'PSTAKE',
        traces: [
          {
            type: 'liquid-stake',
            counterparty: {
              chain_name: 'persistence',
              base_denom: 'XPRT'
            },
            provider: 'Persistence'
          },
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
            },
            provider: 'Gravity Bridge'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
        },
        coingecko_id: 'pstake-finance'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'idep',
    assets: [
      {
        description: 'The native token of IDEP chain',
        denom_units: [
          {
            denom: 'IDEP',
            exponent: 6,
            aliases: []
          },
          {
            denom: 'idep',
            exponent: 0,
            aliases: []
          }
        ],
        base: 'idep',
        name: 'IDEP',
        display: 'IDEP',
        symbol: 'IDEP',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.png'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'impacthub',
    assets: [
      {
        description: 'The native token of IXO Chain',
        denom_units: [
          {
            denom: 'uixo',
            exponent: 0
          },
          {
            denom: 'ixo',
            exponent: 6
          }
        ],
        base: 'uixo',
        name: 'IXO',
        display: 'ixo',
        symbol: 'IXO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png'
        },
        coingecko_id: 'ixo'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'injective',
    assets: [
      {
        description:
          'The INJ token is the native governance token for the Injective chain.',
        denom_units: [
          {
            denom: 'inj',
            exponent: 0
          },
          {
            denom: 'INJ',
            exponent: 18
          }
        ],
        base: 'inj',
        name: 'Injective',
        display: 'INJ',
        symbol: 'INJ',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
        },
        coingecko_id: 'injective-protocol'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'irisnet',
    assets: [
      {
        description:
          'The IRIS token is the native governance token for the IrisNet chain.',
        denom_units: [
          {
            denom: 'uiris',
            exponent: 0
          },
          {
            denom: 'iris',
            exponent: 6
          }
        ],
        base: 'uiris',
        name: 'IRISnet',
        display: 'iris',
        symbol: 'IRIS',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg'
        },
        coingecko_id: 'iris-network'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'juno',
    assets: [
      {
        description: 'The native token of JUNO Chain',
        denom_units: [
          {
            denom: 'ujuno',
            exponent: 0
          },
          {
            denom: 'juno',
            exponent: 6
          }
        ],
        base: 'ujuno',
        name: 'Juno',
        display: 'juno',
        symbol: 'JUNO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
        },
        coingecko_id: 'juno-network'
      },
      {
        description: 'The native token cw20 for Neta on Juno Chain',
        type_asset: 'cw20',
        address:
          'juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
        denom_units: [
          {
            denom:
              'cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
            exponent: 0
          },
          {
            denom: 'neta',
            exponent: 6
          }
        ],
        base: 'cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
        name: 'Neta',
        display: 'neta',
        symbol: 'NETA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.svg'
        },
        coingecko_id: 'neta'
      },
      {
        description: 'The native token cw20 for Marble DAO on Juno Chain',
        type_asset: 'cw20',
        address:
          'juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl',
        denom_units: [
          {
            denom:
              'cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl',
            exponent: 0
          },
          {
            denom: 'marble',
            exponent: 3
          }
        ],
        base: 'cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl',
        name: 'Marble',
        display: 'marble',
        symbol: 'MARBLE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg'
        },
        coingecko_id: 'marble'
      },
      {
        description:
          'Hope Galaxy is an NFT collection based on its own native Token $HOPE, a cw20 token on Juno chain.',
        type_asset: 'cw20',
        address:
          'juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z',
        denom_units: [
          {
            denom:
              'cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z',
            exponent: 0
          },
          {
            denom: 'hope',
            exponent: 6
          }
        ],
        base: 'cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z',
        name: 'Hope Galaxy',
        display: 'hope',
        symbol: 'HOPE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg'
        },
        coingecko_id: 'hope-galaxy'
      },
      {
        description:
          'Racoon aims to simplify accessibility to AI, NFTs and Gambling on the Cosmos Ecosystem',
        type_asset: 'cw20',
        address:
          'juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa',
        denom_units: [
          {
            denom:
              'cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa',
            exponent: 0
          },
          {
            denom: 'rac',
            exponent: 6
          }
        ],
        base: 'cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa',
        name: 'Racoon',
        display: 'rac',
        symbol: 'RAC',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg'
        },
        coingecko_id: 'racoon'
      },
      {
        description: 'The native token of Marble DEX on Juno Chain',
        type_asset: 'cw20',
        address:
          'juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq',
        denom_units: [
          {
            denom:
              'cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq',
            exponent: 0
          },
          {
            denom: 'block',
            exponent: 6
          }
        ],
        base: 'cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq',
        name: 'Block',
        display: 'block',
        symbol: 'BLOCK',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg'
        }
      },
      {
        description: 'The DAO token to build consensus among Hong Kong People',
        type_asset: 'cw20',
        address:
          'juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49',
        denom_units: [
          {
            denom:
              'cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49',
            exponent: 0,
            aliases: ['dhk']
          }
        ],
        base: 'cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49',
        name: 'DHK',
        display: 'dhk',
        symbol: 'DHK',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg'
        }
      },
      {
        description: 'Token governance for Junoswap',
        type_asset: 'cw20',
        address:
          'juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g',
        denom_units: [
          {
            denom:
              'cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g',
            exponent: 0
          },
          {
            denom: 'raw',
            exponent: 6
          }
        ],
        base: 'cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g',
        name: 'JunoSwap',
        display: 'raw',
        symbol: 'RAW',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png'
        },
        coingecko_id: 'junoswap-raw-dao'
      },
      {
        description:
          'Profit sharing token for Another.Software validator. Hold and receive dividends from Another.Software validator commissions!',
        type_asset: 'cw20',
        address:
          'juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w',
        denom_units: [
          {
            denom:
              'cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w',
            exponent: 0
          },
          {
            denom: 'asvt',
            exponent: 6
          }
        ],
        base: 'cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w',
        name: 'Another.Software Validator Token',
        display: 'asvt',
        symbol: 'ASVT',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png'
        }
      },
      {
        description:
          'IBC HNS is HNS, coin of Handshake, decentralized root namesystem, but wrapped to cosmos for IBC support by Another.Software through Juno netowrk.',
        type_asset: 'cw20',
        address:
          'juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k',
        denom_units: [
          {
            denom:
              'cw20:juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k',
            exponent: 0
          },
          {
            denom: 'hns',
            exponent: 6
          }
        ],
        base: 'cw20:juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k',
        name: 'IBC HNS (Handshake)',
        display: 'hns',
        symbol: 'HNS',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hns.svg'
        }
      },
      {
        description: 'DAO dedicated to building tools on the Juno Network',
        type_asset: 'cw20',
        address:
          'juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3',
        denom_units: [
          {
            denom:
              'cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3',
            exponent: 0
          },
          {
            denom: 'joe',
            exponent: 6
          }
        ],
        base: 'cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3',
        name: 'JoeDAO',
        display: 'joe',
        symbol: 'JOE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/joe.png'
        }
      },
      {
        description: 'Governance Token for Digital Land Acquisition DAO',
        type_asset: 'cw20',
        address:
          'juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr',
        denom_units: [
          {
            denom:
              'cw20:juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr',
            exponent: 0
          },
          {
            denom: 'dla',
            exponent: 6
          }
        ],
        base: 'cw20:juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr',
        name: 'Digital Land Acquisition DAO',
        display: 'dla',
        symbol: 'DLA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.svg'
        }
      },
      {
        description: 'DeFi gaming platform built on Juno',
        type_asset: 'cw20',
        address:
          'juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se',
        denom_units: [
          {
            denom:
              'cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se',
            exponent: 0
          },
          {
            denom: 'glto',
            exponent: 6
          }
        ],
        base: 'cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se',
        name: 'Gelotto',
        display: 'glto',
        symbol: 'GLTO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg'
        }
      },
      {
        description: 'Gelotto Year 1 Grand Prize Token',
        type_asset: 'cw20',
        address:
          'juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh',
        denom_units: [
          {
            denom:
              'cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh',
            exponent: 0
          },
          {
            denom: 'gkey',
            exponent: 6
          }
        ],
        base: 'cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh',
        name: 'GKey',
        display: 'gkey',
        symbol: 'GKEY',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.svg'
        }
      },
      {
        description: 'The native token cw20 for BlackHole on Juno Chain',
        type_asset: 'cw20',
        address:
          'juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m',
        denom_units: [
          {
            denom:
              'cw20:juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m',
            exponent: 0
          },
          {
            denom: 'hole',
            exponent: 6
          }
        ],
        base: 'cw20:juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m',
        name: 'BlackHole',
        display: 'hole',
        symbol: 'HOLE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.svg'
        }
      },
      {
        description: 'Staking derivative seJUNO for staked JUNO',
        type_asset: 'cw20',
        address:
          'juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv',
        denom_units: [
          {
            denom:
              'cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv',
            exponent: 0
          },
          {
            denom: 'sejuno',
            exponent: 6
          }
        ],
        base: 'cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv',
        name: 'StakeEasy seJUNO',
        display: 'sejuno',
        symbol: 'SEJUNO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.svg'
        }
      },
      {
        description: 'Staking derivative bJUNO for staked JUNO',
        type_asset: 'cw20',
        address:
          'juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3',
        denom_units: [
          {
            denom:
              'cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3',
            exponent: 0
          },
          {
            denom: 'bjuno',
            exponent: 6
          }
        ],
        base: 'cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3',
        name: 'StakeEasy bJUNO',
        display: 'bjuno',
        symbol: 'BJUNO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.svg'
        }
      },
      {
        description:
          'Solarbank DAO Governance Token for speeding up the shift to renewable and green energy',
        type_asset: 'cw20',
        address:
          'juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse',
        denom_units: [
          {
            denom:
              'cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse',
            exponent: 0
          },
          {
            denom: 'solar',
            exponent: 6
          }
        ],
        base: 'cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse',
        name: 'Solarbank DAO',
        display: 'solar',
        symbol: 'SOLAR',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.svg'
        }
      },
      {
        description: 'StakeEasy governance token',
        type_asset: 'cw20',
        address:
          'juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf',
        denom_units: [
          {
            denom:
              'cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf',
            exponent: 0
          },
          {
            denom: 'seasy',
            exponent: 6
          }
        ],
        base: 'cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf',
        name: 'StakeEasy SEASY',
        display: 'seasy',
        symbol: 'SEASY',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.svg'
        }
      },
      {
        description: 'The native token cw20 for Neta on Juno Chain',
        type_asset: 'cw20',
        address:
          'juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
        denom_units: [
          {
            denom:
              'ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A',
            exponent: 0,
            aliases: ['uneta']
          },
          {
            denom: 'neta',
            exponent: 6
          }
        ],
        base: 'ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A',
        name: 'Neta',
        display: 'neta',
        symbol: 'NETA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/neta.png'
        },
        coingecko_id: 'neta'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'kava',
    assets: [
      {
        description: 'The native staking and governance token of Kava',
        denom_units: [
          {
            denom: 'ukava',
            exponent: 0
          },
          {
            denom: 'kava',
            exponent: 6
          }
        ],
        base: 'ukava',
        name: 'Kava',
        display: 'kava',
        symbol: 'KAVA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png'
        },
        coingecko_id: 'kava'
      },
      {
        description: 'Governance token of Kava Lend Protocol',
        denom_units: [
          {
            denom: 'hard',
            exponent: 0
          },
          {
            denom: 'HARD',
            exponent: 6
          }
        ],
        base: 'hard',
        name: 'Hard',
        display: 'HARD',
        symbol: 'HARD',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
        },
        coingecko_id: 'kava-lend'
      },
      {
        description: 'Governance token of Kava Swap Protocol',
        denom_units: [
          {
            denom: 'swp',
            exponent: 0
          },
          {
            denom: 'SWP',
            exponent: 6
          }
        ],
        base: 'swp',
        name: 'Swap',
        display: 'SWP',
        symbol: 'SWP',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
        },
        coingecko_id: 'kava-swap'
      },
      {
        description: 'The native stablecoin of Kava',
        denom_units: [
          {
            denom: 'usdx',
            exponent: 0
          },
          {
            denom: 'USDX',
            exponent: 6
          }
        ],
        base: 'usdx',
        name: 'USDX',
        display: 'USDX',
        symbol: 'USDX',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png'
        },
        coingecko_id: 'usdx'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'kichain',
    assets: [
      {
        description: 'The native token of Ki Chain',
        denom_units: [
          {
            denom: 'uxki',
            exponent: 0
          },
          {
            denom: 'xki',
            exponent: 6
          }
        ],
        base: 'uxki',
        name: 'Ki',
        display: 'xki',
        symbol: 'XKI',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg'
        },
        coingecko_id: 'ki'
      },
      {
        description: 'ELEVENPARIS loyalty token on KiChain',
        type_asset: 'cw20',
        address:
          'ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy',
        denom_units: [
          {
            denom:
              'cw20:ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy',
            exponent: 0
          },
          {
            denom: 'lvn',
            exponent: 6
          }
        ],
        base: 'cw20:ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy',
        name: 'LVN',
        display: 'lvn',
        symbol: 'LVN',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/lvn.png'
        },
        coingecko_id: 'lvn'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'konstellation',
    assets: [
      {
        description: 'The native token of Konstellation Network',
        denom_units: [
          {
            denom: 'udarc',
            exponent: 0
          },
          {
            denom: 'darc',
            exponent: 6
          }
        ],
        base: 'udarc',
        name: 'DARC',
        display: 'darc',
        symbol: 'DARC',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.svg'
        },
        coingecko_id: 'darcmatter-coin'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'kujira',
    assets: [
      {
        description:
          'The native staking and governance token of the Kujira chain.',
        denom_units: [
          {
            denom: 'ukuji',
            exponent: 0
          },
          {
            denom: 'kuji',
            exponent: 6
          }
        ],
        base: 'ukuji',
        name: 'Kuji',
        display: 'kuji',
        symbol: 'KUJI',
        coingecko_id: 'kujira',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'lambda',
    assets: [
      {
        description: 'The native token of Lambda',
        denom_units: [
          {
            denom: 'ulamb',
            exponent: 0
          },
          {
            denom: 'lamb',
            exponent: 18
          }
        ],
        base: 'ulamb',
        name: 'Lambda',
        display: 'lamb',
        symbol: 'LAMB',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png'
        },
        coingecko_id: 'lambda'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'likecoin',
    assets: [
      {
        description:
          'LIKE is the native staking and governance token of LikeCoin chain, a Decentralized Publishing Infrastructure to empower content ownership, authenticity, and provenance.',
        denom_units: [
          {
            denom: 'nanolike',
            exponent: 0
          },
          {
            denom: 'like',
            exponent: 9
          }
        ],
        base: 'nanolike',
        name: 'LikeCoin',
        display: 'like',
        symbol: 'LIKE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg'
        },
        coingecko_id: 'likecoin'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'logos',
    assets: [
      {
        description: 'The native token of Logos',
        denom_units: [
          {
            denom: 'aLYT',
            exponent: 0
          },
          {
            denom: 'LYT',
            exponent: 18
          }
        ],
        base: 'aLYT',
        name: 'LYT',
        display: 'LYT',
        symbol: 'LYT',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.png'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'lumenx',
    assets: [
      {
        description: 'The native token of Lumen Network',
        denom_units: [
          {
            denom: 'ulumen',
            exponent: 0
          },
          {
            denom: 'lumen',
            exponent: 6
          }
        ],
        base: 'ulumen',
        name: 'LUMEN',
        display: 'lumen',
        symbol: 'LUMEN',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'lumnetwork',
    assets: [
      {
        description: 'Native token of the Lum Network',
        denom_units: [
          {
            denom: 'ulum',
            exponent: 0
          },
          {
            denom: 'lum',
            exponent: 6
          }
        ],
        base: 'ulum',
        name: 'Lum',
        display: 'lum',
        symbol: 'LUM',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg'
        },
        coingecko_id: 'lum-network'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'meme',
    assets: [
      {
        description:
          'MEME Token (MEME) is the native staking token of the MEME Chain',
        denom_units: [
          {
            denom: 'umeme',
            exponent: 0
          },
          {
            denom: 'meme',
            exponent: 6
          }
        ],
        base: 'umeme',
        name: 'MEME',
        display: 'meme',
        symbol: 'MEME',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'microtick',
    assets: [
      {
        description:
          'TICK coin is the token for the Microtick Price Discovery & Oracle App',
        denom_units: [
          {
            denom: 'utick',
            exponent: 0
          },
          {
            denom: 'tick',
            exponent: 6
          }
        ],
        base: 'utick',
        display: 'tick',
        name: 'Microtick',
        symbol: 'TICK',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'mythos',
    assets: [
      {
        description: 'The native token of Mythos',
        denom_units: [
          {
            denom: 'aMYT',
            exponent: 0
          },
          {
            denom: 'MYT',
            exponent: 18
          }
        ],
        base: 'aMYT',
        name: 'MYT',
        display: 'MYT',
        symbol: 'MYT',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.png'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'nomic',
    assets: [
      {
        description:
          "Nomic Token (NOM) is the Nomic's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
        denom_units: [
          {
            denom: 'unom',
            exponent: 0
          },
          {
            denom: 'nom',
            exponent: 6
          }
        ],
        base: 'unom',
        name: 'Nomic',
        display: 'nom',
        symbol: 'NOM',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nomic.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nomic.svg'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'octa',
    assets: [
      {
        description: 'The native token of Octa Chain',
        denom_units: [
          {
            denom: 'uocta',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'octa',
            exponent: 6,
            aliases: []
          }
        ],
        base: 'uocta',
        display: 'octa',
        name: 'Octa',
        symbol: 'OCTA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/octa/images/octa.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/octa/images/octa.svg'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'odin',
    assets: [
      {
        description: 'Staking and goverance token for ODIN Protocol',
        denom_units: [
          {
            denom: 'loki',
            exponent: 0
          },
          {
            denom: 'odin',
            exponent: 6
          }
        ],
        base: 'loki',
        name: 'ODIN',
        display: 'odin',
        symbol: 'ODIN',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png'
        },
        coingecko_id: 'odin-protocol'
      },
      {
        description: 'GEO token for ODIN Protocol',
        denom_units: [
          {
            denom: 'mGeo',
            exponent: 0
          },
          {
            denom: 'geo',
            exponent: 6
          }
        ],
        base: 'mGeo',
        name: 'GEO',
        display: 'geo',
        symbol: 'GEO',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png'
        }
      },
      {
        description: 'O9W token for ODIN Protocol',
        denom_units: [
          {
            denom: 'mO9W',
            exponent: 0
          },
          {
            denom: 'O9W',
            exponent: 6
          }
        ],
        base: 'mO9W',
        name: 'O9W',
        display: 'O9W',
        symbol: 'O9W',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'okexchain',
    assets: [
      {
        description: 'The native token of OKExChain',
        denom_units: [
          {
            denom: 'wei',
            exponent: 0
          },
          {
            denom: 'okt',
            exponent: 18
          }
        ],
        base: 'wei',
        name: 'OKExChain',
        display: 'okt',
        symbol: 'OKT',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/okexchain/images/okc.png'
        },
        coingecko_id: 'okc-token'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'omniflixhub',
    assets: [
      {
        description: 'The native staking token of OmniFlix Hub.',
        denom_units: [
          {
            denom: 'uflix',
            exponent: 0
          },
          {
            denom: 'flix',
            exponent: 6
          }
        ],
        base: 'uflix',
        name: 'Flix',
        display: 'flix',
        symbol: 'FLIX',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png'
        },
        coingecko_id: 'omniflix-network'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'oraichain',
    assets: [
      {
        description: 'The native token of Oraichain',
        denom_units: [
          {
            denom: 'orai',
            exponent: 0
          },
          {
            denom: 'ORAI',
            exponent: 6
          }
        ],
        base: 'orai',
        name: 'Oraichain',
        display: 'ORAI',
        symbol: 'ORAI',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.svg'
        },
        coingecko_id: 'oraichain-token'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'osmosis',
    assets: [
      {
        description: 'The native token of Osmosis',
        denom_units: [
          {
            denom: 'uosmo',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'osmo',
            exponent: 6,
            aliases: []
          }
        ],
        base: 'uosmo',
        name: 'Osmosis',
        display: 'osmo',
        symbol: 'OSMO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        },
        coingecko_id: 'osmosis',
        keywords: ['dex', 'staking']
      },
      {
        denom_units: [
          {
            denom: 'uion',
            exponent: 0
          },
          {
            denom: 'ion',
            exponent: 6
          }
        ],
        base: 'uion',
        name: 'Ion',
        display: 'ion',
        symbol: 'ION',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
        },
        coingecko_id: 'ion',
        keywords: ['memecoin']
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'panacea',
    assets: [
      {
        description:
          'Panacea is a public blockchain launched by MediBloc, which is the key infrastructure for reinventing the patient-centered healthcare data ecosystem',
        denom_units: [
          {
            denom: 'umed',
            exponent: 0
          },
          {
            denom: 'med',
            exponent: 6
          }
        ],
        base: 'umed',
        name: 'MediBloc',
        display: 'med',
        symbol: 'MED',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png'
        },
        coingecko_id: 'medibloc'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'passage',
    assets: [
      {
        description:
          'The native staking and governance token of the Passage chain.',
        denom_units: [
          {
            denom: 'upasg',
            exponent: 0
          },
          {
            denom: 'pasg',
            exponent: 6
          }
        ],
        base: 'upasg',
        name: 'Passage',
        display: 'pasg',
        symbol: 'PASG',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'persistence',
    assets: [
      {
        description:
          'The XPRT token is primarily a governance token for the Persistence chain.',
        denom_units: [
          {
            denom: 'uxprt',
            exponent: 0
          },
          {
            denom: 'xprt',
            exponent: 6
          }
        ],
        base: 'uxprt',
        name: 'Persistence',
        display: 'xprt',
        symbol: 'XPRT',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
        },
        coingecko_id: 'persistence'
      },
      {
        description:
          'pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets.',
        denom_units: [
          {
            denom:
              'ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444',
            exponent: 0,
            aliases: [
              'gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
              '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
            ]
          },
          {
            denom: 'pstake',
            exponent: 18
          }
        ],
        base: 'ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444',
        name: 'pSTAKE Finance',
        display: 'pstake',
        symbol: 'PSTAKE',
        traces: [
          {
            type: 'liquid-stake',
            counterparty: {
              chain_name: 'persistence',
              base_denom: 'XPRT'
            },
            provider: 'Persistence'
          },
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
            },
            provider: 'Gravity Bridge'
          },
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'gravitybridge',
              base_denom: 'gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
              channel_id: 'channel-24'
            },
            chain: {
              channel_id: 'channel-38',
              path: 'transfer/channel-38/gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
            }
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
        },
        coingecko_id: 'pstake-finance'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'point',
    assets: [
      {
        description:
          'The native governance and staking token of the Point network',
        denom_units: [
          {
            denom: 'apoint',
            exponent: 0
          },
          {
            denom: 'point',
            exponent: 18
          }
        ],
        base: 'apoint',
        name: 'Point',
        display: 'point',
        symbol: 'POINT',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.png'
        },
        coingecko_id: 'point-network'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'provenance',
    assets: [
      {
        description: 'Hash is the staking token of the Provenance Blockchain',
        denom_units: [
          {
            denom: 'nhash',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'hash',
            exponent: 9,
            aliases: []
          }
        ],
        base: 'nhash',
        name: 'Hash',
        display: 'hash',
        symbol: 'HASH',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/hash.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/hash.svg'
        },
        coingecko_id: 'provenance-blockchain'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'rebus',
    assets: [
      {
        description: 'REBUS, the native coin of the Rebus chain.',
        denom_units: [
          {
            denom: 'arebus',
            exponent: 0
          },
          {
            denom: 'rebus',
            exponent: 18
          }
        ],
        base: 'arebus',
        name: 'Rebus',
        display: 'rebus',
        symbol: 'REBUS',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.svg'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'regen',
    assets: [
      {
        description: 'REGEN coin is the token for the Regen Network Platform',
        denom_units: [
          {
            denom: 'uregen',
            exponent: 0
          },
          {
            denom: 'regen',
            exponent: 6
          }
        ],
        base: 'uregen',
        name: 'Regen Network',
        display: 'regen',
        symbol: 'REGEN',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png'
        },
        coingecko_id: 'regen'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'rizon',
    assets: [
      {
        description: 'Native token of Rizon Chain',
        denom_units: [
          {
            denom: 'uatolo',
            exponent: 0
          },
          {
            denom: 'atolo',
            exponent: 6
          }
        ],
        base: 'uatolo',
        name: 'Rizon Chain',
        display: 'atolo',
        symbol: 'ATOLO',
        coingecko_id: 'rizon',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.svg'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'secretnetwork',
    assets: [
      {
        description: 'The native token of Secret Network',
        denom_units: [
          {
            denom: 'uscrt',
            exponent: 0
          },
          {
            denom: 'scrt',
            exponent: 6
          }
        ],
        base: 'uscrt',
        name: 'Secret Network',
        display: 'scrt',
        symbol: 'SCRT',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
        },
        coingecko_id: 'secret'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'sentinel',
    assets: [
      {
        description: 'DVPN is the native token of the Sentinel Hub.',
        denom_units: [
          {
            denom: 'udvpn',
            exponent: 0
          },
          {
            denom: 'dvpn',
            exponent: 6
          }
        ],
        base: 'udvpn',
        name: 'Sentinel',
        display: 'dvpn',
        symbol: 'DVPN',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png'
        },
        coingecko_id: 'sentinel'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'shentu',
    assets: [
      {
        description: 'The native token of Shentu',
        denom_units: [
          {
            denom: 'uctk',
            exponent: 0
          },
          {
            denom: 'ctk',
            exponent: 6
          }
        ],
        base: 'uctk',
        name: 'Shentu',
        display: 'ctk',
        symbol: 'CTK',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png'
        },
        coingecko_id: 'certik'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'sifchain',
    assets: [
      {
        description:
          "Rowan Token (ROWAN) is the Sifchain Network's native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
        denom_units: [
          {
            denom: 'rowan',
            exponent: 18
          }
        ],
        base: 'rowan',
        name: 'Sifchain Rowan',
        display: 'rowan',
        symbol: 'ROWAN',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png'
        },
        coingecko_id: 'sifchain'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'sommelier',
    assets: [
      {
        description:
          'Somm Token (SOMM) is the native staking token of the Sommelier Chain',
        denom_units: [
          {
            denom: 'usomm',
            exponent: 0,
            aliases: ['microsomm']
          },
          {
            denom: 'msomm',
            exponent: 3,
            aliases: ['millisomm']
          },
          {
            denom: 'somm',
            exponent: 6
          }
        ],
        base: 'usomm',
        name: 'Somm',
        display: 'somm',
        symbol: 'SOMM',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg'
        },
        coingecko_id: 'sommelier'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'stargaze',
    assets: [
      {
        description: 'The native token of Stargaze',
        denom_units: [
          {
            denom: 'ustars',
            exponent: 0
          },
          {
            denom: 'stars',
            exponent: 6
          }
        ],
        base: 'ustars',
        name: 'Stargaze',
        display: 'stars',
        symbol: 'STARS',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png'
        },
        coingecko_id: 'stargaze'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'starname',
    assets: [
      {
        description:
          'IOV coin is the token for the Starname (IOV) Asset Name Service',
        denom_units: [
          {
            denom: 'uiov',
            exponent: 0
          },
          {
            denom: 'iov',
            exponent: 6
          }
        ],
        base: 'uiov',
        name: 'Starname',
        display: 'iov',
        symbol: 'IOV',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg'
        },
        coingecko_id: 'starname'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'stride',
    assets: [
      {
        description: 'The native token of Stride',
        denom_units: [
          {
            denom: 'ustrd',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'strd',
            exponent: 6,
            aliases: []
          }
        ],
        base: 'ustrd',
        name: 'Stride',
        display: 'strd',
        symbol: 'STRD',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
        },
        coingecko_id: 'stride'
      },
      {
        denom_units: [
          {
            denom: 'stuatom',
            exponent: 0
          },
          {
            denom: 'statom',
            exponent: 6
          }
        ],
        base: 'stuatom',
        name: 'stATOM',
        display: 'statom',
        symbol: 'stATOM',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
        },
        coingecko_id: 'stride-staked-atom'
      },
      {
        denom_units: [
          {
            denom: 'stustars',
            exponent: 0
          },
          {
            denom: 'ststars',
            exponent: 6
          }
        ],
        base: 'stustars',
        name: 'stSTARS',
        display: 'ststars',
        symbol: 'stSTARS',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg'
        },
        coingecko_id: ''
      },
      {
        denom_units: [
          {
            denom: 'stuosmo',
            exponent: 0
          },
          {
            denom: 'stosmo',
            exponent: 6
          }
        ],
        base: 'stuosmo',
        name: 'stOSMO',
        display: 'stosmo',
        symbol: 'stOSMO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
        },
        coingecko_id: ''
      },
      {
        denom_units: [
          {
            denom: 'stujuno',
            exponent: 0
          },
          {
            denom: 'stjuno',
            exponent: 6
          }
        ],
        base: 'stujuno',
        name: 'stJUNO',
        display: 'stjuno',
        symbol: 'stJUNO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg'
        },
        coingecko_id: ''
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'terra',
    assets: [
      {
        description: 'The native staking token of Terra Classic.',
        denom_units: [
          {
            denom: 'uluna',
            exponent: 0,
            aliases: ['microluna']
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
        base: 'uluna',
        name: 'Luna Classic',
        display: 'luna',
        symbol: 'LUNC',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png'
        },
        coingecko_id: 'terra-luna'
      },
      {
        description: 'The USD stablecoin of Terra Classic.',
        denom_units: [
          {
            denom: 'uusd',
            exponent: 0,
            aliases: ['microusd']
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
        base: 'uusd',
        name: 'TerraClassicUSD',
        display: 'ust',
        symbol: 'USTC',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png'
        },
        coingecko_id: 'terrausd'
      },
      {
        description: 'The KRW stablecoin of Terra Classic.',
        denom_units: [
          {
            denom: 'ukrw',
            exponent: 0,
            aliases: ['microkrw']
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
        base: 'ukrw',
        name: 'TerraClassicKRW',
        display: 'krt',
        symbol: 'KRTC',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png'
        },
        coingecko_id: 'terrakrw'
      },
      {
        description:
          'The governance token of the White Whale protocol on Terra.',
        type_asset: 'cw20',
        address: 'terra1php5m8a6qd68z02t3zpw4jv2pj4vgw4wz0t8mz',
        denom_units: [
          {
            denom: 'cw20:terra1php5m8a6qd68z02t3zpw4jv2pj4vgw4wz0t8mz',
            exponent: 0
          },
          {
            denom: 'whale',
            exponent: 6
          }
        ],
        base: 'cw20:terra1php5m8a6qd68z02t3zpw4jv2pj4vgw4wz0t8mz',
        name: 'Whale Token',
        display: 'whale',
        symbol: 'WHALE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/whale.png'
        },
        coingecko_id: 'white-whale'
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1kc87mu460fwkqte29rquh4hc20m54fxwtsx7gp',
            exponent: 0
          },
          {
            denom: 'bluna',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1kc87mu460fwkqte29rquh4hc20m54fxwtsx7gp',
        base: 'cw20:terra1kc87mu460fwkqte29rquh4hc20m54fxwtsx7gp',
        name: 'Bonded Luna',
        display: 'bluna',
        symbol: 'bLuna',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bluna.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1dzhzukyezv0etz22ud940z7adyv7xgcjkahuun',
            exponent: 0
          },
          {
            denom: 'beth',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1dzhzukyezv0etz22ud940z7adyv7xgcjkahuun',
        base: 'cw20:terra1dzhzukyezv0etz22ud940z7adyv7xgcjkahuun',
        name: 'Bonded ETH',
        display: 'beth',
        symbol: 'bETH',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/beth.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1hzh9vpxhsk8253se0vv5jj6etdvxu3nv8z07zu',
            exponent: 0
          },
          {
            denom: 'aust',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1hzh9vpxhsk8253se0vv5jj6etdvxu3nv8z07zu',
        base: 'cw20:terra1hzh9vpxhsk8253se0vv5jj6etdvxu3nv8z07zu',
        name: 'Anchor Terra USD',
        display: 'aust',
        symbol: 'aUST',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aust.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra14z56l0fp2lsf86zy3hty2z47ezkhnthtr9yq76',
            exponent: 0
          },
          {
            denom: 'anc',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra14z56l0fp2lsf86zy3hty2z47ezkhnthtr9yq76',
        base: 'cw20:terra14z56l0fp2lsf86zy3hty2z47ezkhnthtr9yq76',
        name: 'Anchor Token',
        display: 'anc',
        symbol: 'ANC',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/anc.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra15gwkyepfc6xgca5t5zefzwy42uts8l2m4g40k6',
            exponent: 0
          },
          {
            denom: 'mir',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra15gwkyepfc6xgca5t5zefzwy42uts8l2m4g40k6',
        base: 'cw20:terra15gwkyepfc6xgca5t5zefzwy42uts8l2m4g40k6',
        name: 'Mirror',
        display: 'mir',
        symbol: 'MIR',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mir.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1vxtwu4ehgzz77mnfwrntyrmgl64qjs75mpwqaz',
            exponent: 0
          },
          {
            denom: 'maapl',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1vxtwu4ehgzz77mnfwrntyrmgl64qjs75mpwqaz',
        base: 'cw20:terra1vxtwu4ehgzz77mnfwrntyrmgl64qjs75mpwqaz',
        name: 'Apple Inc.',
        display: 'maapl',
        symbol: 'mAAPL',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/maapl.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1g4x2pzmkc9z3mseewxf758rllg08z3797xly0n',
            exponent: 0
          },
          {
            denom: 'mabnb',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1g4x2pzmkc9z3mseewxf758rllg08z3797xly0n',
        base: 'cw20:terra1g4x2pzmkc9z3mseewxf758rllg08z3797xly0n',
        name: 'Airbnb Inc.',
        display: 'mabnb',
        symbol: 'mABNB',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mabnb.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1qelfthdanju7wavc5tq0k5r0rhsyzyyrsn09qy',
            exponent: 0
          },
          {
            denom: 'mamc',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1qelfthdanju7wavc5tq0k5r0rhsyzyyrsn09qy',
        base: 'cw20:terra1qelfthdanju7wavc5tq0k5r0rhsyzyyrsn09qy',
        name: 'AMC Entertainment Holdings Inc.',
        display: 'mamc',
        symbol: 'mAMC',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mamc.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra18ej5nsuu867fkx4tuy2aglpvqjrkcrjjslap3z',
            exponent: 0
          },
          {
            denom: 'mamd',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra18ej5nsuu867fkx4tuy2aglpvqjrkcrjjslap3z',
        base: 'cw20:terra18ej5nsuu867fkx4tuy2aglpvqjrkcrjjslap3z',
        name: 'Advanced Micro Devices, Inc.',
        display: 'mamd',
        symbol: 'mAMD',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mamd.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra165nd2qmrtszehcfrntlplzern7zl4ahtlhd5t2',
            exponent: 0
          },
          {
            denom: 'mamzn',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra165nd2qmrtszehcfrntlplzern7zl4ahtlhd5t2',
        base: 'cw20:terra165nd2qmrtszehcfrntlplzern7zl4ahtlhd5t2',
        name: 'Amazon.com, Inc.',
        display: 'mamzn',
        symbol: 'mAMZN',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mamzn.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1qqfx5jph0rsmkur2zgzyqnfucra45rtjae5vh6',
            exponent: 0
          },
          {
            denom: 'markk',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1qqfx5jph0rsmkur2zgzyqnfucra45rtjae5vh6',
        base: 'cw20:terra1qqfx5jph0rsmkur2zgzyqnfucra45rtjae5vh6',
        name: 'ARK Innovation ETF',
        display: 'markk',
        symbol: 'mARKK',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/markk.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1w7zgkcyt7y4zpct9dw8mw362ywvdlydnum2awa',
            exponent: 0
          },
          {
            denom: 'mbaba',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1w7zgkcyt7y4zpct9dw8mw362ywvdlydnum2awa',
        base: 'cw20:terra1w7zgkcyt7y4zpct9dw8mw362ywvdlydnum2awa',
        name: 'Alibaba Group Holding Limited',
        display: 'mbaba',
        symbol: 'mBABA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mbaba.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1rhhvx8nzfrx5fufkuft06q5marfkucdqwq5sjw',
            exponent: 0
          },
          {
            denom: 'mbtc',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1rhhvx8nzfrx5fufkuft06q5marfkucdqwq5sjw',
        base: 'cw20:terra1rhhvx8nzfrx5fufkuft06q5marfkucdqwq5sjw',
        name: 'Bitcoin',
        display: 'mbtc',
        symbol: 'mBTC',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mbtc.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra18wayjpyq28gd970qzgjfmsjj7dmgdk039duhph',
            exponent: 0
          },
          {
            denom: 'mcoin',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra18wayjpyq28gd970qzgjfmsjj7dmgdk039duhph',
        base: 'cw20:terra18wayjpyq28gd970qzgjfmsjj7dmgdk039duhph',
        name: 'Coinbase Global, Inc.',
        display: 'mcoin',
        symbol: 'mCOIN',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mcoin.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra149755r3y0rve30e209awkhn5cxgkn5c8ju9pm5',
            exponent: 0
          },
          {
            denom: 'mdis',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra149755r3y0rve30e209awkhn5cxgkn5c8ju9pm5',
        base: 'cw20:terra149755r3y0rve30e209awkhn5cxgkn5c8ju9pm5',
        name: 'The Walt Disney Company',
        display: 'mdis',
        symbol: 'mDIS',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mdis.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra19ya4jpvjvvtggepvmmj6ftmwly3p7way0tt08r',
            exponent: 0
          },
          {
            denom: 'mdot',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra19ya4jpvjvvtggepvmmj6ftmwly3p7way0tt08r',
        base: 'cw20:terra19ya4jpvjvvtggepvmmj6ftmwly3p7way0tt08r',
        name: 'Polkadot',
        display: 'mdot',
        symbol: 'mDOT',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mdot.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1dk3g53js3034x4v5c3vavhj2738une880yu6kx',
            exponent: 0
          },
          {
            denom: 'meth',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1dk3g53js3034x4v5c3vavhj2738une880yu6kx',
        base: 'cw20:terra1dk3g53js3034x4v5c3vavhj2738une880yu6kx',
        name: 'Ether',
        display: 'meth',
        symbol: 'mETH',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/meth.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1mqsjugsugfprn3cvgxsrr8akkvdxv2pzc74us7',
            exponent: 0
          },
          {
            denom: 'mfb',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1mqsjugsugfprn3cvgxsrr8akkvdxv2pzc74us7',
        base: 'cw20:terra1mqsjugsugfprn3cvgxsrr8akkvdxv2pzc74us7',
        name: 'Facebook Inc.',
        display: 'mfb',
        symbol: 'mFB',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mfb.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1l5lrxtwd98ylfy09fn866au6dp76gu8ywnudls',
            exponent: 0
          },
          {
            denom: 'mglxy',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1l5lrxtwd98ylfy09fn866au6dp76gu8ywnudls',
        base: 'cw20:terra1l5lrxtwd98ylfy09fn866au6dp76gu8ywnudls',
        name: 'Galaxy Digital Holdings Ltd',
        display: 'mglxy',
        symbol: 'mGLXY',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mglxy.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1m6j6j9gw728n82k78s0j9kq8l5p6ne0xcc820p',
            exponent: 0
          },
          {
            denom: 'mgme',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1m6j6j9gw728n82k78s0j9kq8l5p6ne0xcc820p',
        base: 'cw20:terra1m6j6j9gw728n82k78s0j9kq8l5p6ne0xcc820p',
        name: 'GameStop Corp',
        display: 'mgme',
        symbol: 'mGME',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mgme.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1h8arz2k547uvmpxctuwush3jzc8fun4s96qgwt',
            exponent: 0
          },
          {
            denom: 'mgoogl',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1h8arz2k547uvmpxctuwush3jzc8fun4s96qgwt',
        base: 'cw20:terra1h8arz2k547uvmpxctuwush3jzc8fun4s96qgwt',
        name: 'Alphabet Inc.',
        display: 'mgoogl',
        symbol: 'mGOOGL',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mgoogl.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra137drsu8gce5thf6jr5mxlfghw36rpljt3zj73v',
            exponent: 0
          },
          {
            denom: 'mgs',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra137drsu8gce5thf6jr5mxlfghw36rpljt3zj73v',
        base: 'cw20:terra137drsu8gce5thf6jr5mxlfghw36rpljt3zj73v',
        name: 'Goldman Sachs Group Inc.',
        display: 'mgs',
        symbol: 'mGS',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mgs.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra18yqdfzfhnguerz9du5mnvxsh5kxlknqhcxzjfr',
            exponent: 0
          },
          {
            denom: 'mhood',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra18yqdfzfhnguerz9du5mnvxsh5kxlknqhcxzjfr',
        base: 'cw20:terra18yqdfzfhnguerz9du5mnvxsh5kxlknqhcxzjfr',
        name: 'Robinhood Markets, Inc.',
        display: 'mhood',
        symbol: 'mHOOD',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mhood.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra10h7ry7apm55h4ez502dqdv9gr53juu85nkd4aq',
            exponent: 0
          },
          {
            denom: 'miau',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra10h7ry7apm55h4ez502dqdv9gr53juu85nkd4aq',
        base: 'cw20:terra10h7ry7apm55h4ez502dqdv9gr53juu85nkd4aq',
        name: 'iShares Gold Trust',
        display: 'miau',
        symbol: 'mIAU',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/miau.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra15hp9pr8y4qsvqvxf3m4xeptlk7l8h60634gqec',
            exponent: 0
          },
          {
            denom: 'miau',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra15hp9pr8y4qsvqvxf3m4xeptlk7l8h60634gqec',
        base: 'cw20:terra15hp9pr8y4qsvqvxf3m4xeptlk7l8h60634gqec',
        name: 'iShares Gold Trust',
        display: 'miau',
        symbol: 'mIAU',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/miau.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1ptdxmj3xmmljzx02nr4auwfuelmj0cnkh8egs2',
            exponent: 0
          },
          {
            denom: 'mjnj',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1ptdxmj3xmmljzx02nr4auwfuelmj0cnkh8egs2',
        base: 'cw20:terra1ptdxmj3xmmljzx02nr4auwfuelmj0cnkh8egs2',
        name: 'Johnson & Johnson',
        display: 'mjnj',
        symbol: 'mJNJ',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mjnj.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1qsnj5gvq8rgs7yws8x5u02gwd5wvtu4tks0hjm',
            exponent: 0
          },
          {
            denom: 'mko',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1qsnj5gvq8rgs7yws8x5u02gwd5wvtu4tks0hjm',
        base: 'cw20:terra1qsnj5gvq8rgs7yws8x5u02gwd5wvtu4tks0hjm',
        name: 'Coca-Cola',
        display: 'mko',
        symbol: 'mKO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mko.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1227ppwxxj3jxz8cfgq00jgnxqcny7ryenvkwj6',
            exponent: 0
          },
          {
            denom: 'mmsft',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1227ppwxxj3jxz8cfgq00jgnxqcny7ryenvkwj6',
        base: 'cw20:terra1227ppwxxj3jxz8cfgq00jgnxqcny7ryenvkwj6',
        name: 'Microsoft Corporation',
        display: 'mmsft',
        symbol: 'mMSFT',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mmsft.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1jsxngqasf2zynj5kyh0tgq9mj3zksa5gk35j4k',
            exponent: 0
          },
          {
            denom: 'mnflx',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1jsxngqasf2zynj5kyh0tgq9mj3zksa5gk35j4k',
        base: 'cw20:terra1jsxngqasf2zynj5kyh0tgq9mj3zksa5gk35j4k',
        name: 'Netflix, Inc.',
        display: 'mnflx',
        symbol: 'mNFLX',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnflx.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1dj2cj02zak0nvwy3uj9r9dhhxhdwxnw6psse6p',
            exponent: 0
          },
          {
            denom: 'mnio',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1dj2cj02zak0nvwy3uj9r9dhhxhdwxnw6psse6p',
        base: 'cw20:terra1dj2cj02zak0nvwy3uj9r9dhhxhdwxnw6psse6p',
        name: 'NIO Inc.',
        display: 'mnio',
        symbol: 'mNIO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnio.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra17ana8hvzea0q7w367dm0dw48sxwql39qekpt7g',
            exponent: 0
          },
          {
            denom: 'mnke',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra17ana8hvzea0q7w367dm0dw48sxwql39qekpt7g',
        base: 'cw20:terra17ana8hvzea0q7w367dm0dw48sxwql39qekpt7g',
        name: 'NIKE, Inc.',
        display: 'mnke',
        symbol: 'mNKE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnke.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1drsjzvzej4h4qlehcfwclxg4w5l3h5tuvd3jd8',
            exponent: 0
          },
          {
            denom: 'mnvda',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1drsjzvzej4h4qlehcfwclxg4w5l3h5tuvd3jd8',
        base: 'cw20:terra1drsjzvzej4h4qlehcfwclxg4w5l3h5tuvd3jd8',
        name: 'NVIDIA Corporation',
        display: 'mnvda',
        symbol: 'mNVDA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnvda.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1rh2907984nudl7vh56qjdtvv7947z4dujj92sx',
            exponent: 0
          },
          {
            denom: 'mpypl',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1rh2907984nudl7vh56qjdtvv7947z4dujj92sx',
        base: 'cw20:terra1rh2907984nudl7vh56qjdtvv7947z4dujj92sx',
        name: 'PayPal Holdings Inc',
        display: 'mpypl',
        symbol: 'mPYPL',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mpypl.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1csk6tc7pdmpr782w527hwhez6gfv632tyf72cp',
            exponent: 0
          },
          {
            denom: 'mqqq',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1csk6tc7pdmpr782w527hwhez6gfv632tyf72cp',
        base: 'cw20:terra1csk6tc7pdmpr782w527hwhez6gfv632tyf72cp',
        name: 'Invesco QQQ Trust',
        display: 'mqqq',
        symbol: 'mQQQ',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mqqq.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1246zy658dfgtausf0c4a6ly8sc2e285q4kxqga',
            exponent: 0
          },
          {
            denom: 'msbux',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1246zy658dfgtausf0c4a6ly8sc2e285q4kxqga',
        base: 'cw20:terra1246zy658dfgtausf0c4a6ly8sc2e285q4kxqga',
        name: 'Starbucks Corporation',
        display: 'msbux',
        symbol: 'mSBUX',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/msbux.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1kscs6uhrqwy6rx5kuw5lwpuqvm3t6j2d6uf2lp',
            exponent: 0
          },
          {
            denom: 'mslv',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1kscs6uhrqwy6rx5kuw5lwpuqvm3t6j2d6uf2lp',
        base: 'cw20:terra1kscs6uhrqwy6rx5kuw5lwpuqvm3t6j2d6uf2lp',
        name: 'iShares Silver Trust',
        display: 'mslv',
        symbol: 'mSLV',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mslv.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1aa00lpfexyycedfg5k2p60l9djcmw0ue5l8fhc',
            exponent: 0
          },
          {
            denom: 'mspy',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1aa00lpfexyycedfg5k2p60l9djcmw0ue5l8fhc',
        base: 'cw20:terra1aa00lpfexyycedfg5k2p60l9djcmw0ue5l8fhc',
        name: 'SPDR S&P 500',
        display: 'mspy',
        symbol: 'mSPY',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mspy.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1u43zu5amjlsgty5j64445fr9yglhm53m576ugh',
            exponent: 0
          },
          {
            denom: 'msq',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1u43zu5amjlsgty5j64445fr9yglhm53m576ugh',
        base: 'cw20:terra1u43zu5amjlsgty5j64445fr9yglhm53m576ugh',
        name: 'Square, Inc.',
        display: 'msq',
        symbol: 'mSQ',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/msq.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra14y5affaarufk3uscy2vr6pe6w6zqf2wpjzn5sh',
            exponent: 0
          },
          {
            denom: 'mtsla',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra14y5affaarufk3uscy2vr6pe6w6zqf2wpjzn5sh',
        base: 'cw20:terra14y5affaarufk3uscy2vr6pe6w6zqf2wpjzn5sh',
        name: 'Tesla, Inc.',
        display: 'mtsla',
        symbol: 'mTSLA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mtsla.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1cc3enj9qgchlrj34cnzhwuclc4vl2z3jl7tkqg',
            exponent: 0
          },
          {
            denom: 'mtwtr',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1cc3enj9qgchlrj34cnzhwuclc4vl2z3jl7tkqg',
        base: 'cw20:terra1cc3enj9qgchlrj34cnzhwuclc4vl2z3jl7tkqg',
        name: 'Twitter, Inc.',
        display: 'mtwtr',
        symbol: 'mTWTR',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mtwtr.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1lvmx8fsagy70tv0fhmfzdw9h6s3sy4prz38ugf',
            exponent: 0
          },
          {
            denom: 'muso',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1lvmx8fsagy70tv0fhmfzdw9h6s3sy4prz38ugf',
        base: 'cw20:terra1lvmx8fsagy70tv0fhmfzdw9h6s3sy4prz38ugf',
        name: 'United States Oil Fund, LP',
        display: 'muso',
        symbol: 'mUSO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/muso.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra19cmt6vzvhnnnfsmccaaxzy2uaj06zjktu6yzjx',
            exponent: 0
          },
          {
            denom: 'mvixy',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra19cmt6vzvhnnnfsmccaaxzy2uaj06zjktu6yzjx',
        base: 'cw20:terra19cmt6vzvhnnnfsmccaaxzy2uaj06zjktu6yzjx',
        name: 'ProShares VIX Short-Term Futures ETF',
        display: 'mvixy',
        symbol: 'mVIXY',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mvixy.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1zp3a6q6q4953cz376906g5qfmxnlg77hx3te45',
            exponent: 0
          },
          {
            denom: 'mvixy',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1zp3a6q6q4953cz376906g5qfmxnlg77hx3te45',
        base: 'cw20:terra1zp3a6q6q4953cz376906g5qfmxnlg77hx3te45',
        name: 'ProShares VIX Short-Term Futures ETF',
        display: 'mvixy',
        symbol: 'mVIXY',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mvixy.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1ez46kxtulsdv07538fh5ra5xj8l68mu8eg24vr',
            exponent: 0
          },
          {
            denom: 'lota',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1ez46kxtulsdv07538fh5ra5xj8l68mu8eg24vr',
        base: 'cw20:terra1ez46kxtulsdv07538fh5ra5xj8l68mu8eg24vr',
        name: 'loterra',
        display: 'lota',
        symbol: 'LOTA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/lota.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra17jnhankdfl8vyzj6vejt7ag8uz0cjc9crkl2h7',
            exponent: 0
          },
          {
            denom: 'dph',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra17jnhankdfl8vyzj6vejt7ag8uz0cjc9crkl2h7',
        base: 'cw20:terra17jnhankdfl8vyzj6vejt7ag8uz0cjc9crkl2h7',
        name: 'Digipharm',
        display: 'dph',
        symbol: 'DPH',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dph.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1kcthelkax4j9x8d3ny6sdag0qmxxynl3qtcrpy',
            exponent: 0
          },
          {
            denom: 'mine',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1kcthelkax4j9x8d3ny6sdag0qmxxynl3qtcrpy',
        base: 'cw20:terra1kcthelkax4j9x8d3ny6sdag0qmxxynl3qtcrpy',
        name: 'Pylon MINE Token',
        display: 'mine',
        symbol: 'MINE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mine.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1zsaswh926ey8qa5x4vj93kzzlfnef0pstuca0y',
            exponent: 0
          },
          {
            denom: 'bpsidp-24m',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1zsaswh926ey8qa5x4vj93kzzlfnef0pstuca0y',
        base: 'cw20:terra1zsaswh926ey8qa5x4vj93kzzlfnef0pstuca0y',
        name: 'Pylon bDP Token for Gateway Psi 24m Pool',
        display: 'bpsidp-24m',
        symbol: 'bPsiDP-24m',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bpsidp-24m.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1s5eczhe0h0jutf46re52x5z4r03c8hupacxmdr',
            exponent: 0
          },
          {
            denom: 'spec',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1s5eczhe0h0jutf46re52x5z4r03c8hupacxmdr',
        base: 'cw20:terra1s5eczhe0h0jutf46re52x5z4r03c8hupacxmdr',
        name: 'Spectrum Token',
        display: 'spec',
        symbol: 'SPEC',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/spec.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1nef5jf6c7js9x6gkntlehgywvjlpytm7pcgkn4',
            exponent: 0
          },
          {
            denom: 'loop',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1nef5jf6c7js9x6gkntlehgywvjlpytm7pcgkn4',
        base: 'cw20:terra1nef5jf6c7js9x6gkntlehgywvjlpytm7pcgkn4',
        name: 'LOOP token',
        display: 'loop',
        symbol: 'LOOP',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/loop.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1jx4lmmke2srcvpjeereetc9hgegp4g5j0p9r2q',
            exponent: 0
          },
          {
            denom: 'loopr',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1jx4lmmke2srcvpjeereetc9hgegp4g5j0p9r2q',
        base: 'cw20:terra1jx4lmmke2srcvpjeereetc9hgegp4g5j0p9r2q',
        name: 'LOOPR token',
        display: 'loopr',
        symbol: 'LOOPR',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/loopr.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra13xujxcrc9dqft4p9a8ls0w3j0xnzm6y2uvve8n',
            exponent: 0
          },
          {
            denom: 'stt',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra13xujxcrc9dqft4p9a8ls0w3j0xnzm6y2uvve8n',
        base: 'cw20:terra13xujxcrc9dqft4p9a8ls0w3j0xnzm6y2uvve8n',
        name: 'StarTerra Token',
        display: 'stt',
        symbol: 'STT',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/stt.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra19djkaepjjswucys4npd5ltaxgsntl7jf0xz7w6',
            exponent: 0
          },
          {
            denom: 'twd',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra19djkaepjjswucys4npd5ltaxgsntl7jf0xz7w6',
        base: 'cw20:terra19djkaepjjswucys4npd5ltaxgsntl7jf0xz7w6',
        name: 'TWD Token',
        display: 'twd',
        symbol: 'TWD',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twd.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1kvjscdgwuvwc6uzm4rqfjl6nlmuhj28tequlnc',
            exponent: 0
          },
          {
            denom: 'xtra',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1kvjscdgwuvwc6uzm4rqfjl6nlmuhj28tequlnc',
        base: 'cw20:terra1kvjscdgwuvwc6uzm4rqfjl6nlmuhj28tequlnc',
        name: 'xterra Token',
        display: 'xtra',
        symbol: 'XTRA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xtra.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1vtr50tw0pgqpes34zqu60n554p9x4950wk8f63',
            exponent: 0
          },
          {
            denom: 'miaw',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1vtr50tw0pgqpes34zqu60n554p9x4950wk8f63',
        base: 'cw20:terra1vtr50tw0pgqpes34zqu60n554p9x4950wk8f63',
        name: 'MIAW Token',
        display: 'miaw',
        symbol: 'MIAW',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/miaw.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra12897djskt9rge8dtmm86w654g7kzckkd698608',
            exponent: 0
          },
          {
            denom: 'psi',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra12897djskt9rge8dtmm86w654g7kzckkd698608',
        base: 'cw20:terra12897djskt9rge8dtmm86w654g7kzckkd698608',
        name: 'Nexus Governance Token',
        display: 'psi',
        symbol: 'Psi',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/psi.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra10f2mt82kjnkxqj2gepgwl637u2w4ue2z5nhz5j',
            exponent: 0
          },
          {
            denom: 'nluna',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra10f2mt82kjnkxqj2gepgwl637u2w4ue2z5nhz5j',
        base: 'cw20:terra10f2mt82kjnkxqj2gepgwl637u2w4ue2z5nhz5j',
        name: 'Nexus nLuna Token',
        display: 'nluna',
        symbol: 'nLuna',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/nluna.svg'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra178v546c407pdnx5rer3hu8s2c0fc924k74ymnn',
            exponent: 0
          },
          {
            denom: 'neth',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra178v546c407pdnx5rer3hu8s2c0fc924k74ymnn',
        base: 'cw20:terra178v546c407pdnx5rer3hu8s2c0fc924k74ymnn',
        name: 'Nexus nETH Token',
        display: 'neth',
        symbol: 'nETH',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/neth.svg'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1u553zk43jd4rwzc53qrdrq4jc2p8rextyq09dj',
            exponent: 0
          },
          {
            denom: 'cnluna',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1u553zk43jd4rwzc53qrdrq4jc2p8rextyq09dj',
        base: 'cw20:terra1u553zk43jd4rwzc53qrdrq4jc2p8rextyq09dj',
        name: 'nLuna autocompounder share representation',
        display: 'cnluna',
        symbol: 'cnLuna',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnluna.svg'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1nagqpmyw55yjphea4rhntlfv87ugmeaj8ym756',
            exponent: 0
          },
          {
            denom: 'cneth',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1nagqpmyw55yjphea4rhntlfv87ugmeaj8ym756',
        base: 'cw20:terra1nagqpmyw55yjphea4rhntlfv87ugmeaj8ym756',
        name: 'nETH autocompounder share representation',
        display: 'cneth',
        symbol: 'cnETH',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cneth.svg'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra13k62n0285wj8ug0ngcgpf7dgnkzqeu279tz636',
            exponent: 0
          },
          {
            denom: 'navax',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra13k62n0285wj8ug0ngcgpf7dgnkzqeu279tz636',
        base: 'cw20:terra13k62n0285wj8ug0ngcgpf7dgnkzqeu279tz636',
        name: 'Nexus nAVAX Token',
        display: 'navax',
        symbol: 'nAVAX',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/navax.svg'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1jtdc6zpf95tvh9peuaxwp3v0yqszcnwl8j5ade',
            exponent: 0
          },
          {
            denom: 'natom',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1jtdc6zpf95tvh9peuaxwp3v0yqszcnwl8j5ade',
        base: 'cw20:terra1jtdc6zpf95tvh9peuaxwp3v0yqszcnwl8j5ade',
        name: 'Nexus nATOM Token',
        display: 'natom',
        symbol: 'nATOM',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/natom.svg'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1dy9kmlm4anr92e42mrkjwzyvfqwz66un00rwr5',
            exponent: 0
          },
          {
            denom: 'vkr',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1dy9kmlm4anr92e42mrkjwzyvfqwz66un00rwr5',
        base: 'cw20:terra1dy9kmlm4anr92e42mrkjwzyvfqwz66un00rwr5',
        name: 'VKR Token',
        display: 'vkr',
        symbol: 'VKR',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/vkr.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1mddcdx0ujx89f38gu7zspk2r2ffdl5enyz2u03',
            exponent: 0
          },
          {
            denom: 'orion',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra1mddcdx0ujx89f38gu7zspk2r2ffdl5enyz2u03',
        base: 'cw20:terra1mddcdx0ujx89f38gu7zspk2r2ffdl5enyz2u03',
        name: 'Orion Money (Portal)',
        display: 'orion',
        symbol: 'ORION',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/orion.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1r5506ckw5tfr3z52jwlek8vg9sn3yflrqrzfsc',
            exponent: 0
          },
          {
            denom: 'tland',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1r5506ckw5tfr3z52jwlek8vg9sn3yflrqrzfsc',
        base: 'cw20:terra1r5506ckw5tfr3z52jwlek8vg9sn3yflrqrzfsc',
        name: 'TerraLand Token',
        display: 'tland',
        symbol: 'TLAND',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tland.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1w0p5zre38ecdy3ez8efd5h9fvgum5s206xknrg',
            exponent: 0
          },
          {
            denom: 'vust',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1w0p5zre38ecdy3ez8efd5h9fvgum5s206xknrg',
        base: 'cw20:terra1w0p5zre38ecdy3ez8efd5h9fvgum5s206xknrg',
        name: 'Vault UST',
        display: 'vust',
        symbol: 'vUST',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/vust.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra14tl83xcwqjy0ken9peu4pjjuu755lrry2uy25r',
            exponent: 0
          },
          {
            denom: 'eth',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra14tl83xcwqjy0ken9peu4pjjuu755lrry2uy25r',
        base: 'cw20:terra14tl83xcwqjy0ken9peu4pjjuu755lrry2uy25r',
        name: 'Ether (Portal)',
        display: 'eth',
        symbol: 'ETH',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eth.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1aa7upykmmqqc63l924l5qfap8mrmx5rfdm0v55',
            exponent: 0
          },
          {
            denom: 'wbtc',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra1aa7upykmmqqc63l924l5qfap8mrmx5rfdm0v55',
        base: 'cw20:terra1aa7upykmmqqc63l924l5qfap8mrmx5rfdm0v55',
        name: 'Wrapped BTC (Portal)',
        display: 'wbtc',
        symbol: 'WBTC',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wbtc.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra190tqwgqx7s8qrknz6kckct7v607cu068gfujpk',
            exponent: 0
          },
          {
            denom: 'sol',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra190tqwgqx7s8qrknz6kckct7v607cu068gfujpk',
        base: 'cw20:terra190tqwgqx7s8qrknz6kckct7v607cu068gfujpk',
        name: 'SOL (Portal)',
        display: 'sol',
        symbol: 'SOL',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sol.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1dfasranqm4uyaz72r960umxy0w8t6zewqlnkuq',
            exponent: 0
          },
          {
            denom: 'maticet',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra1dfasranqm4uyaz72r960umxy0w8t6zewqlnkuq',
        base: 'cw20:terra1dfasranqm4uyaz72r960umxy0w8t6zewqlnkuq',
        name: 'MATIC (Portal from Ethereum)',
        display: 'maticet',
        symbol: 'MATICet',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/maticet.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1cetg5wruw2wsdjp7j46rj44xdel00z006e9yg8',
            exponent: 0
          },
          {
            denom: 'bnb',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra1cetg5wruw2wsdjp7j46rj44xdel00z006e9yg8',
        base: 'cw20:terra1cetg5wruw2wsdjp7j46rj44xdel00z006e9yg8',
        name: 'Binance Coin (Portal)',
        display: 'bnb',
        symbol: 'BNB',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bnb.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1xvqlpjl2dxyel9qrp6qvtrg04xe3jh9cyxc6av',
            exponent: 0
          },
          {
            denom: 'cake',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra1xvqlpjl2dxyel9qrp6qvtrg04xe3jh9cyxc6av',
        base: 'cw20:terra1xvqlpjl2dxyel9qrp6qvtrg04xe3jh9cyxc6av',
        name: 'PancakeSwap Token (Portal)',
        display: 'cake',
        symbol: 'CAKE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cake.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra12dfv3f0e6m22z6cnhfn3nxk2en3z3zeqy6ctym',
            exponent: 0
          },
          {
            denom: 'link',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra12dfv3f0e6m22z6cnhfn3nxk2en3z3zeqy6ctym',
        base: 'cw20:terra12dfv3f0e6m22z6cnhfn3nxk2en3z3zeqy6ctym',
        name: 'Chainlink (Portal)',
        display: 'link',
        symbol: 'LINK',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/link.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1csvuzlf92nyemu6tv25h0l79etpe8hz3h5vn4a',
            exponent: 0
          },
          {
            denom: 'sushi',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra1csvuzlf92nyemu6tv25h0l79etpe8hz3h5vn4a',
        base: 'cw20:terra1csvuzlf92nyemu6tv25h0l79etpe8hz3h5vn4a',
        name: 'SushiToken (Portal)',
        display: 'sushi',
        symbol: 'SUSHI',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sushi.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1wyxkuy5jq545fn7xfn3enpvs5zg9f9dghf6gxf',
            exponent: 0
          },
          {
            denom: 'uni',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra1wyxkuy5jq545fn7xfn3enpvs5zg9f9dghf6gxf',
        base: 'cw20:terra1wyxkuy5jq545fn7xfn3enpvs5zg9f9dghf6gxf',
        name: 'Uniswap (Portal)',
        display: 'uni',
        symbol: 'UNI',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/uni.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1ce06wkrdm4vl6t0hvc0g86rsy27pu8yadg3dva',
            exponent: 0
          },
          {
            denom: 'usdtet',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1ce06wkrdm4vl6t0hvc0g86rsy27pu8yadg3dva',
        base: 'cw20:terra1ce06wkrdm4vl6t0hvc0g86rsy27pu8yadg3dva',
        name: 'Tether USD (Portal from Ethereum)',
        display: 'usdtet',
        symbol: 'USDTet',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdtet.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1pepwcav40nvj3kh60qqgrk8k07ydmc00xyat06',
            exponent: 0
          },
          {
            denom: 'usdcet',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1pepwcav40nvj3kh60qqgrk8k07ydmc00xyat06',
        base: 'cw20:terra1pepwcav40nvj3kh60qqgrk8k07ydmc00xyat06',
        name: 'USD Coin (Portal from Ethereum)',
        display: 'usdcet',
        symbol: 'USDCet',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcet.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1xfsdgcemqwxp4hhnyk4rle6wr22sseq7j07dnn',
            exponent: 0
          },
          {
            denom: 'kuji',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1xfsdgcemqwxp4hhnyk4rle6wr22sseq7j07dnn',
        base: 'cw20:terra1xfsdgcemqwxp4hhnyk4rle6wr22sseq7j07dnn',
        name: 'Kujira Token',
        display: 'kuji',
        symbol: 'KUJI',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/kuji.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra188w26t95tf4dz77raftme8p75rggatxjxfeknw',
            exponent: 0
          },
          {
            denom: 'skuji',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra188w26t95tf4dz77raftme8p75rggatxjxfeknw',
        base: 'cw20:terra188w26t95tf4dz77raftme8p75rggatxjxfeknw',
        name: 'Staked KUJI',
        display: 'skuji',
        symbol: 'sKUJI',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/skuji.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra133chr09wu8sakfte5v7vd8qzq9vghtkv4tn0ur',
            exponent: 0
          },
          {
            denom: 'wsteth',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra133chr09wu8sakfte5v7vd8qzq9vghtkv4tn0ur',
        base: 'cw20:terra133chr09wu8sakfte5v7vd8qzq9vghtkv4tn0ur',
        name: 'Lido wstETH (Portal)',
        display: 'wsteth',
        symbol: 'wstETH',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wsteth.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1t9ul45l7m6jw6sxgvnp8e5hj8xzkjsg82g84ap',
            exponent: 0
          },
          {
            denom: 'wstsol',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra1t9ul45l7m6jw6sxgvnp8e5hj8xzkjsg82g84ap',
        base: 'cw20:terra1t9ul45l7m6jw6sxgvnp8e5hj8xzkjsg82g84ap',
        name: 'Lido wstSOL (Portal)',
        display: 'wstsol',
        symbol: 'wstSOL',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wstsol.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1c3xd5s2j3ejx2d94tvcjfkrdeu6rmz48ghzznj',
            exponent: 0
          },
          {
            denom: 'wsbsol',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra1c3xd5s2j3ejx2d94tvcjfkrdeu6rmz48ghzznj',
        base: 'cw20:terra1c3xd5s2j3ejx2d94tvcjfkrdeu6rmz48ghzznj',
        name: 'Lido bonded SOL (Portal)',
        display: 'wsbsol',
        symbol: 'wsbSOL',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wsbsol.svg'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1jxypgnfa07j6w92wazzyskhreq2ey2a5crgt6z',
            exponent: 0
          },
          {
            denom: 'ldo',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra1jxypgnfa07j6w92wazzyskhreq2ey2a5crgt6z',
        base: 'cw20:terra1jxypgnfa07j6w92wazzyskhreq2ey2a5crgt6z',
        name: 'Lido DAO (Portal)',
        display: 'ldo',
        symbol: 'LDO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ldo.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1u5szg038ur9kzuular3cae8hq6q5rk5u27tuvz',
            exponent: 0
          },
          {
            denom: 'webeth',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra1u5szg038ur9kzuular3cae8hq6q5rk5u27tuvz',
        base: 'cw20:terra1u5szg038ur9kzuular3cae8hq6q5rk5u27tuvz',
        name: 'Lido Bonded ETH (Wormhole)',
        display: 'webeth',
        symbol: 'webETH',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/webeth.svg'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1yg3j2s986nyp5z7r2lvt0hx3r0lnd7kwvwwtsc',
            exponent: 0
          },
          {
            denom: 'stluna',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1yg3j2s986nyp5z7r2lvt0hx3r0lnd7kwvwwtsc',
        base: 'cw20:terra1yg3j2s986nyp5z7r2lvt0hx3r0lnd7kwvwwtsc',
        name: 'Lido staked Luna',
        display: 'stluna',
        symbol: 'stLuna',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/stluna.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra169edevav3pdrtjcx35j6pvzuv54aevewar4nlh',
            exponent: 0
          },
          {
            denom: 'xdefi',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra169edevav3pdrtjcx35j6pvzuv54aevewar4nlh',
        base: 'cw20:terra169edevav3pdrtjcx35j6pvzuv54aevewar4nlh',
        name: 'XDEFI (Portal)',
        display: 'xdefi',
        symbol: 'XDEFI'
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra193c42lfwmlkasvcw22l9qqzc5q2dx208tkd7wl',
            exponent: 0
          },
          {
            denom: 'btl',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra193c42lfwmlkasvcw22l9qqzc5q2dx208tkd7wl',
        base: 'cw20:terra193c42lfwmlkasvcw22l9qqzc5q2dx208tkd7wl',
        name: 'Bitlocus Token',
        display: 'btl',
        symbol: 'BTL',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/btl.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra17y9qkl8dfkeg4py7n0g5407emqnemc3yqk5rup',
            exponent: 0
          },
          {
            denom: 'lunax',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra17y9qkl8dfkeg4py7n0g5407emqnemc3yqk5rup',
        base: 'cw20:terra17y9qkl8dfkeg4py7n0g5407emqnemc3yqk5rup',
        name: 'LunaX Token',
        display: 'lunax',
        symbol: 'LunaX',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/lunax.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1m3tdguf59xq3pa2twk5fjte5g6szj5y9x5npy7',
            exponent: 0
          },
          {
            denom: 'luni',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1m3tdguf59xq3pa2twk5fjte5g6szj5y9x5npy7',
        base: 'cw20:terra1m3tdguf59xq3pa2twk5fjte5g6szj5y9x5npy7',
        name: 'LUNI',
        display: 'luni',
        symbol: 'LUNI',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luni.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra13awdgcx40tz5uygkgm79dytez3x87rpg4uhnvu',
            exponent: 0
          },
          {
            denom: 'ply',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra13awdgcx40tz5uygkgm79dytez3x87rpg4uhnvu',
        base: 'cw20:terra13awdgcx40tz5uygkgm79dytez3x87rpg4uhnvu',
        name: 'PlayNity Token',
        display: 'ply',
        symbol: 'PLY',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ply.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1u2k0nkenw0p25ljsr4ksh7rxm65y466vkdewwj',
            exponent: 0
          },
          {
            denom: 'tfloki',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1u2k0nkenw0p25ljsr4ksh7rxm65y466vkdewwj',
        base: 'cw20:terra1u2k0nkenw0p25ljsr4ksh7rxm65y466vkdewwj',
        name: 'TFLOKI',
        display: 'tfloki',
        symbol: 'TFLOKI',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tfloki.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1a8k3jyv3wf6k3zngza5h6srrxcckdf7zv90p6u',
            exponent: 0
          },
          {
            denom: 'tftic',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1a8k3jyv3wf6k3zngza5h6srrxcckdf7zv90p6u',
        base: 'cw20:terra1a8k3jyv3wf6k3zngza5h6srrxcckdf7zv90p6u',
        name: 'TFLOKI Genesis Ticket',
        display: 'tftic',
        symbol: 'TFTIC',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tftic.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1xt9fgu7965kgvunnjts9zkprd8986kcc444q86',
            exponent: 0
          },
          {
            denom: 'tfticii',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1xt9fgu7965kgvunnjts9zkprd8986kcc444q86',
        base: 'cw20:terra1xt9fgu7965kgvunnjts9zkprd8986kcc444q86',
        name: 'TFLOKI New World Ticket',
        display: 'tfticii',
        symbol: 'TFTICII',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tfticii.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1vte2xv7dr8sfnrnwdf9arcyprqgr0hty5ads28',
            exponent: 0
          },
          {
            denom: 'tfticiii',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1vte2xv7dr8sfnrnwdf9arcyprqgr0hty5ads28',
        base: 'cw20:terra1vte2xv7dr8sfnrnwdf9arcyprqgr0hty5ads28',
        name: 'TFLOKI Aviator Ticket',
        display: 'tfticiii',
        symbol: 'TFTICIII',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tfticiii.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1hmxxq0y8h79f3228vs0czc4uz5jdgjt0appp26',
            exponent: 0
          },
          {
            denom: 'moon',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1hmxxq0y8h79f3228vs0czc4uz5jdgjt0appp26',
        base: 'cw20:terra1hmxxq0y8h79f3228vs0czc4uz5jdgjt0appp26',
        name: 'Moon Token',
        display: 'moon',
        symbol: 'MOON',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/moon.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1xj49zyqrwpv5k928jwfpfy2ha668nwdgkwlrg3',
            exponent: 0
          },
          {
            denom: 'astro',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1xj49zyqrwpv5k928jwfpfy2ha668nwdgkwlrg3',
        base: 'cw20:terra1xj49zyqrwpv5k928jwfpfy2ha668nwdgkwlrg3',
        name: 'Astroport Token',
        display: 'astro',
        symbol: 'ASTRO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/astro.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra14lpnyzc9z4g3ugr4lhm8s4nle0tq8vcltkhzh7',
            exponent: 0
          },
          {
            denom: 'xastro',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra14lpnyzc9z4g3ugr4lhm8s4nle0tq8vcltkhzh7',
        base: 'cw20:terra14lpnyzc9z4g3ugr4lhm8s4nle0tq8vcltkhzh7',
        name: 'Staked Astroport Token',
        display: 'xastro',
        symbol: 'xASTRO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xastro.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1w8kvd6cqpsthupsk4l0clwnmek4l3zr7c84kwq',
            exponent: 0
          },
          {
            denom: 'halo',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1w8kvd6cqpsthupsk4l0clwnmek4l3zr7c84kwq',
        base: 'cw20:terra1w8kvd6cqpsthupsk4l0clwnmek4l3zr7c84kwq',
        name: 'Angel Protocol Token',
        display: 'halo',
        symbol: 'HALO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/halo.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1kdfsdm3c4reun9j3m4mk3nmyw4a4ns7mj24q3j',
            exponent: 0
          },
          {
            denom: 'pug',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1kdfsdm3c4reun9j3m4mk3nmyw4a4ns7mj24q3j',
        base: 'cw20:terra1kdfsdm3c4reun9j3m4mk3nmyw4a4ns7mj24q3j',
        name: 'AstroPug Token',
        display: 'pug',
        symbol: 'PUG',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pug.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1hnezwjqlhzawcrfysczcxs6xqxu2jawn729kkf',
            exponent: 0
          },
          {
            denom: 'orne',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1hnezwjqlhzawcrfysczcxs6xqxu2jawn729kkf',
        base: 'cw20:terra1hnezwjqlhzawcrfysczcxs6xqxu2jawn729kkf',
        name: 'Orne Token',
        display: 'orne',
        symbol: 'ORNE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/orne.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra14vz4v8adanzph278xyeggll4tfww7teh0xtw2y',
            exponent: 0
          },
          {
            denom: 'tns',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra14vz4v8adanzph278xyeggll4tfww7teh0xtw2y',
        base: 'cw20:terra14vz4v8adanzph278xyeggll4tfww7teh0xtw2y',
        name: 'Terra Name Service',
        display: 'tns',
        symbol: 'TNS',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tns.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1td743l5k5cmfy7tqq202g7vkmdvq35q48u2jfm',
            exponent: 0
          },
          {
            denom: 'xrune',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1td743l5k5cmfy7tqq202g7vkmdvq35q48u2jfm',
        base: 'cw20:terra1td743l5k5cmfy7tqq202g7vkmdvq35q48u2jfm',
        name: 'Thorstarter',
        display: 'xrune',
        symbol: 'XRUNE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xrune.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1366wmr8t8rrkh6mag8fagqxntmf2qe4kyte784',
            exponent: 0
          },
          {
            denom: 'alot',
            exponent: 0
          }
        ],
        type_asset: 'cw20',
        address: 'terra1366wmr8t8rrkh6mag8fagqxntmf2qe4kyte784',
        base: 'cw20:terra1366wmr8t8rrkh6mag8fagqxntmf2qe4kyte784',
        name: 'Alpha Pack Token',
        display: 'alot',
        symbol: 'aLOT',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/alot.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1z09gnzufuflz6ckd9k0u456l9dnpgsynu0yyhe',
            exponent: 0
          },
          {
            denom: 'sity',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1z09gnzufuflz6ckd9k0u456l9dnpgsynu0yyhe',
        base: 'cw20:terra1z09gnzufuflz6ckd9k0u456l9dnpgsynu0yyhe',
        name: 'CurioSITY play to earn token',
        display: 'sity',
        symbol: 'SITY',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sity.svg'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra13zx49nk8wjavedjzu8xkk95r3t0ta43c9ptul7',
            exponent: 0
          },
          {
            denom: 'glow',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra13zx49nk8wjavedjzu8xkk95r3t0ta43c9ptul7',
        base: 'cw20:terra13zx49nk8wjavedjzu8xkk95r3t0ta43c9ptul7',
        name: 'Glow Token',
        display: 'glow',
        symbol: 'GLOW',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/glow.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra100yeqvww74h4yaejj6h733thgcafdaukjtw397',
            exponent: 0
          },
          {
            denom: 'apollo',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra100yeqvww74h4yaejj6h733thgcafdaukjtw397',
        base: 'cw20:terra100yeqvww74h4yaejj6h733thgcafdaukjtw397',
        name: 'Apollo DAO Token',
        display: 'apollo',
        symbol: 'APOLLO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/apollo.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1a7ye2splpfzyenu0yrdu8t83uzgusx2malkc7u',
            exponent: 0
          },
          {
            denom: 'abr',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1a7ye2splpfzyenu0yrdu8t83uzgusx2malkc7u',
        base: 'cw20:terra1a7ye2splpfzyenu0yrdu8t83uzgusx2malkc7u',
        name: 'Allbridge',
        display: 'abr',
        symbol: 'ABR',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/abr.svg'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1y3d5qexmyac0fg53pfglh2pjk0664ymfvcq9mc',
            exponent: 0
          },
          {
            denom: 'whgtps',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra1y3d5qexmyac0fg53pfglh2pjk0664ymfvcq9mc',
        base: 'cw20:terra1y3d5qexmyac0fg53pfglh2pjk0664ymfvcq9mc',
        name: 'Global Transaction Payment Solu',
        display: 'whgtps',
        symbol: 'whGTPS'
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1dh9478k2qvqhqeajhn75a2a7dsnf74y5ukregw',
            exponent: 0
          },
          {
            denom: 'prism',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1dh9478k2qvqhqeajhn75a2a7dsnf74y5ukregw',
        base: 'cw20:terra1dh9478k2qvqhqeajhn75a2a7dsnf74y5ukregw',
        name: 'Prism Protocol Token',
        display: 'prism',
        symbol: 'PRISM',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/prism.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1l0y8yg0s86x299nqw0p6fhh7ngex3r4phtjeuq',
            exponent: 0
          },
          {
            denom: 'sdollar',
            exponent: 2
          }
        ],
        type_asset: 'cw20',
        address: 'terra1l0y8yg0s86x299nqw0p6fhh7ngex3r4phtjeuq',
        base: 'cw20:terra1l0y8yg0s86x299nqw0p6fhh7ngex3r4phtjeuq',
        name: 'Space Dollar',
        display: 'sdollar',
        symbol: 'SDOLLAR'
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1ku5e0dhutxhuxudsmsn5647wwcz6ndr3rsh90k',
            exponent: 0
          },
          {
            denom: 'whsail',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1ku5e0dhutxhuxudsmsn5647wwcz6ndr3rsh90k',
        base: 'cw20:terra1ku5e0dhutxhuxudsmsn5647wwcz6ndr3rsh90k',
        name: 'SAIL',
        display: 'whsail',
        symbol: 'whSAIL',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/whsail.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1rl0cpwgtwl4utnaynugevdje37fnmsea7rv4uu',
            exponent: 0
          },
          {
            denom: 'whgsail',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra1rl0cpwgtwl4utnaynugevdje37fnmsea7rv4uu',
        base: 'cw20:terra1rl0cpwgtwl4utnaynugevdje37fnmsea7rv4uu',
        name: 'SolanaSail Governance Token V2',
        display: 'whgsail',
        symbol: 'whgSAIL',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/whgsail.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1042wzrwg2uk6jqxjm34ysqquyr9esdgm5qyswz',
            exponent: 0
          },
          {
            denom: 'xprism',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1042wzrwg2uk6jqxjm34ysqquyr9esdgm5qyswz',
        base: 'cw20:terra1042wzrwg2uk6jqxjm34ysqquyr9esdgm5qyswz',
        name: 'Prism Governance Token',
        display: 'xprism',
        symbol: 'xPRISM',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xprism.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra13fs83g5atgjwuh7c5ydzh6n7gecel6xyhhy2t5',
            exponent: 0
          },
          {
            denom: 'cde',
            exponent: 9
          }
        ],
        type_asset: 'cw20',
        address: 'terra13fs83g5atgjwuh7c5ydzh6n7gecel6xyhhy2t5',
        base: 'cw20:terra13fs83g5atgjwuh7c5ydzh6n7gecel6xyhhy2t5',
        name: 'CAPITRADE TOKEN',
        display: 'cde',
        symbol: 'CDE'
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1rl20t79ffsrqfa29rke48tj05gj9jxumm92vg8',
            exponent: 0
          },
          {
            denom: 'ctx',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1rl20t79ffsrqfa29rke48tj05gj9jxumm92vg8',
        base: 'cw20:terra1rl20t79ffsrqfa29rke48tj05gj9jxumm92vg8',
        name: 'C2X Token',
        display: 'ctx',
        symbol: 'CTX',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ctx.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra13zaagrrrxj47qjwczsczujlvnnntde7fdt0mau',
            exponent: 0
          },
          {
            denom: 'cluna',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra13zaagrrrxj47qjwczsczujlvnnntde7fdt0mau',
        base: 'cw20:terra13zaagrrrxj47qjwczsczujlvnnntde7fdt0mau',
        name: 'Prism cLuna Token',
        display: 'cluna',
        symbol: 'cLuna',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cluna.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1tlgelulz9pdkhls6uglfn5lmxarx7f2gxtdzh2',
            exponent: 0
          },
          {
            denom: 'pluna',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1tlgelulz9pdkhls6uglfn5lmxarx7f2gxtdzh2',
        base: 'cw20:terra1tlgelulz9pdkhls6uglfn5lmxarx7f2gxtdzh2',
        name: 'Prism pLuna Token',
        display: 'pluna',
        symbol: 'pLuna',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pluna.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra17wkadg0tah554r35x6wvff0y5s7ve8npcjfuhz',
            exponent: 0
          },
          {
            denom: 'yluna',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra17wkadg0tah554r35x6wvff0y5s7ve8npcjfuhz',
        base: 'cw20:terra17wkadg0tah554r35x6wvff0y5s7ve8npcjfuhz',
        name: 'Prism yLuna Token',
        display: 'yluna',
        symbol: 'yLuna',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/yluna.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1cl7whtrqmz5ldr553q69qahck8xvk80fm33qjx',
            exponent: 0
          },
          {
            denom: 'atlo',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1cl7whtrqmz5ldr553q69qahck8xvk80fm33qjx',
        base: 'cw20:terra1cl7whtrqmz5ldr553q69qahck8xvk80fm33qjx',
        name: 'Atlo Token',
        display: 'atlo',
        symbol: 'ATLO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/atlo.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1vchw83qt25j89zqwdpmdzj722sqxthnckqzxxp',
            exponent: 0
          },
          {
            denom: 'local',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1vchw83qt25j89zqwdpmdzj722sqxthnckqzxxp',
        base: 'cw20:terra1vchw83qt25j89zqwdpmdzj722sqxthnckqzxxp',
        name: 'LOCAL Token',
        display: 'local',
        symbol: 'LOCAL',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/local.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra15k5r9r8dl8r7xlr29pry8a9w7sghehcnv5mgp6',
            exponent: 0
          },
          {
            denom: 'luv',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra15k5r9r8dl8r7xlr29pry8a9w7sghehcnv5mgp6',
        base: 'cw20:terra15k5r9r8dl8r7xlr29pry8a9w7sghehcnv5mgp6',
        name: 'Lunaverse',
        display: 'luv',
        symbol: 'LUV',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luv.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1f62tqesptvmhtzr8sudru00gsdtdz24srgm7wp',
            exponent: 0
          },
          {
            denom: 'robo',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1f62tqesptvmhtzr8sudru00gsdtdz24srgm7wp',
        base: 'cw20:terra1f62tqesptvmhtzr8sudru00gsdtdz24srgm7wp',
        name: 'RoboHero',
        display: 'robo',
        symbol: 'ROBO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/robo.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1vwz7t30q76s7xx6qgtxdqnu6vpr3ak3vw62ygk',
            exponent: 0
          },
          {
            denom: 'luart',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1vwz7t30q76s7xx6qgtxdqnu6vpr3ak3vw62ygk',
        base: 'cw20:terra1vwz7t30q76s7xx6qgtxdqnu6vpr3ak3vw62ygk',
        name: 'Luart Token',
        display: 'luart',
        symbol: 'LUART',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luart.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra12hgwnpupflfpuual532wgrxu2gjp0tcagzgx4n',
            exponent: 0
          },
          {
            denom: 'mars',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra12hgwnpupflfpuual532wgrxu2gjp0tcagzgx4n',
        base: 'cw20:terra12hgwnpupflfpuual532wgrxu2gjp0tcagzgx4n',
        name: 'Mars Token',
        display: 'mars',
        symbol: 'MARS',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mars.svg'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1a04v570f9cxp49mk06vjsm8axsswndpwwt67k4',
            exponent: 0
          },
          {
            denom: 'xmars',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1a04v570f9cxp49mk06vjsm8axsswndpwwt67k4',
        base: 'cw20:terra1a04v570f9cxp49mk06vjsm8axsswndpwwt67k4',
        name: 'xMars Token',
        display: 'xmars',
        symbol: 'XMARS',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xmars.svg'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1vpws4hmpmpsqwnz3gljn8zj42rv7rkpc5atgt4',
            exponent: 0
          },
          {
            denom: 'dfiat',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra1vpws4hmpmpsqwnz3gljn8zj42rv7rkpc5atgt4',
        base: 'cw20:terra1vpws4hmpmpsqwnz3gljn8zj42rv7rkpc5atgt4',
        name: 'DeFiato',
        display: 'dfiat',
        symbol: 'DFIAT'
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1hppnw4jppmrzzga4yvd8s87y3dwkhe27xwwl5d',
            exponent: 0
          },
          {
            denom: 'ceres',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1hppnw4jppmrzzga4yvd8s87y3dwkhe27xwwl5d',
        base: 'cw20:terra1hppnw4jppmrzzga4yvd8s87y3dwkhe27xwwl5d',
        name: 'Ceres Governance Token',
        display: 'ceres',
        symbol: 'CERES',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ceres.svg'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1z3e2e4jpk4n0xzzwlkgcfvc95pc5ldq0xcny58',
            exponent: 0
          },
          {
            denom: 'wasavax',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra1z3e2e4jpk4n0xzzwlkgcfvc95pc5ldq0xcny58',
        base: 'cw20:terra1z3e2e4jpk4n0xzzwlkgcfvc95pc5ldq0xcny58',
        name: 'BENQI Staked AVAX (Portal)',
        display: 'wasavax',
        symbol: 'wasAVAX',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wasavax.svg'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1zd6let0zg0xjn2sestagxv4ax24a4ml6j40qdr',
            exponent: 0
          },
          {
            denom: 'mint',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1zd6let0zg0xjn2sestagxv4ax24a4ml6j40qdr',
        base: 'cw20:terra1zd6let0zg0xjn2sestagxv4ax24a4ml6j40qdr',
        name: 'MintDAO',
        display: 'mint',
        symbol: 'MINT',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mint.svg'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1ustvnmngueq0p4jd7gfnutgvdc6ujpsjhsjd02',
            exponent: 0
          },
          {
            denom: 'sd',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra1ustvnmngueq0p4jd7gfnutgvdc6ujpsjhsjd02',
        base: 'cw20:terra1ustvnmngueq0p4jd7gfnutgvdc6ujpsjhsjd02',
        name: 'Stader SD (Portal)',
        display: 'sd',
        symbol: 'SD',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sd.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1ln2z938phz0nc2wepxpzfkwp6ezn9yrz9zv9ep',
            exponent: 0
          },
          {
            denom: 'xsd',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra1ln2z938phz0nc2wepxpzfkwp6ezn9yrz9zv9ep',
        base: 'cw20:terra1ln2z938phz0nc2wepxpzfkwp6ezn9yrz9zv9ep',
        name: 'Stader xSD',
        display: 'xsd',
        symbol: 'xSD',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xsd.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1uux6gwd6pzr0gfzrru5kne55cxex9d0700c72r',
            exponent: 0
          },
          {
            denom: 'paxg',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra1uux6gwd6pzr0gfzrru5kne55cxex9d0700c72r',
        base: 'cw20:terra1uux6gwd6pzr0gfzrru5kne55cxex9d0700c72r',
        name: 'Paxos Gold (Portal)',
        display: 'paxg',
        symbol: 'PAXG',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/paxg.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1efjugpjc50d8sha7lr8s48cr7wmsthz94eevcl',
            exponent: 0
          },
          {
            denom: 'whdao',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra1efjugpjc50d8sha7lr8s48cr7wmsthz94eevcl',
        base: 'cw20:terra1efjugpjc50d8sha7lr8s48cr7wmsthz94eevcl',
        name: 'DAO Maker',
        display: 'whdao',
        symbol: 'whDAO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/whdao.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1su6g4t4vwx7y0uh3ksancyaurj4l6w9pfs40qt',
            exponent: 0
          },
          {
            denom: 'link',
            exponent: 18
          }
        ],
        type_asset: 'cw20',
        address: 'terra1su6g4t4vwx7y0uh3ksancyaurj4l6w9pfs40qt',
        base: 'cw20:terra1su6g4t4vwx7y0uh3ksancyaurj4l6w9pfs40qt',
        name: 'ChainLink Token',
        display: 'link',
        symbol: 'LINK',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/link.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra14v9wrjs55qsn9lkvylsqela3w2ytwxzkycqzcr',
            exponent: 0
          },
          {
            denom: 'sayve',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra14v9wrjs55qsn9lkvylsqela3w2ytwxzkycqzcr',
        base: 'cw20:terra14v9wrjs55qsn9lkvylsqela3w2ytwxzkycqzcr',
        name: 'Sayve Token',
        display: 'sayve',
        symbol: 'SAYVE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sayve.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1z55rhw0ut70jxdmpvge98mvj0rkwcz74q77z0u',
            exponent: 0
          },
          {
            denom: 'guides',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1z55rhw0ut70jxdmpvge98mvj0rkwcz74q77z0u',
        base: 'cw20:terra1z55rhw0ut70jxdmpvge98mvj0rkwcz74q77z0u',
        name: 'Guides Token',
        display: 'guides',
        symbol: 'GUIDES'
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1mt2ytlrxhvd5c4d4fshxxs3zcus3fkdmuv4mk2',
            exponent: 0
          },
          {
            denom: 'bro',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1mt2ytlrxhvd5c4d4fshxxs3zcus3fkdmuv4mk2',
        base: 'cw20:terra1mt2ytlrxhvd5c4d4fshxxs3zcus3fkdmuv4mk2',
        name: 'BRO token',
        display: 'bro',
        symbol: 'BRO',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bro.svg'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1qryq5wreecx2wd3cdtzz94syr4z0a92l60asds',
            exponent: 0
          },
          {
            denom: 'bbro',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1qryq5wreecx2wd3cdtzz94syr4z0a92l60asds',
        base: 'cw20:terra1qryq5wreecx2wd3cdtzz94syr4z0a92l60asds',
        name: 'bBRO token',
        display: 'bbro',
        symbol: 'bBRO',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bbro.svg'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra15zvyhmv6gwddht7kt4q6w5nasn4tcpgzcdfmgr',
            exponent: 0
          },
          {
            denom: 'gtps',
            exponent: 18
          }
        ],
        type_asset: 'cw20',
        address: 'terra15zvyhmv6gwddht7kt4q6w5nasn4tcpgzcdfmgr',
        base: 'cw20:terra15zvyhmv6gwddht7kt4q6w5nasn4tcpgzcdfmgr',
        name: 'Global Transaction Payment Solut',
        display: 'gtps',
        symbol: 'GTPS'
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra15pkdjxv2ewjzn9x665y26pfz2h6ymak4d4e8se',
            exponent: 0
          },
          {
            denom: 'gfi',
            exponent: 18
          }
        ],
        type_asset: 'cw20',
        address: 'terra15pkdjxv2ewjzn9x665y26pfz2h6ymak4d4e8se',
        base: 'cw20:terra15pkdjxv2ewjzn9x665y26pfz2h6ymak4d4e8se',
        name: 'Gtps.Finance',
        display: 'gfi',
        symbol: 'GFI'
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1fyjsxx73jrufw8ufgtuswa773dvdkny92k70wa',
            exponent: 0
          },
          {
            denom: 'ulc',
            exponent: 18
          }
        ],
        type_asset: 'cw20',
        address: 'terra1fyjsxx73jrufw8ufgtuswa773dvdkny92k70wa',
        base: 'cw20:terra1fyjsxx73jrufw8ufgtuswa773dvdkny92k70wa',
        name: 'Ultimatalioniscoin',
        display: 'ulc',
        symbol: 'ULC'
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1689ys6p6gfu0q6xrjqkzfn80sdyhurjqn0jfdl',
            exponent: 0
          },
          {
            denom: 'sst',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1689ys6p6gfu0q6xrjqkzfn80sdyhurjqn0jfdl',
        base: 'cw20:terra1689ys6p6gfu0q6xrjqkzfn80sdyhurjqn0jfdl',
        name: 'Sooah Studio Token',
        display: 'sst',
        symbol: 'SST',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sst.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1rg8f993m9834afwazersesgx7jjxv4p87q9wvc',
            exponent: 0
          },
          {
            denom: 'atlas',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra1rg8f993m9834afwazersesgx7jjxv4p87q9wvc',
        base: 'cw20:terra1rg8f993m9834afwazersesgx7jjxv4p87q9wvc',
        name: 'Star Atlas (Portal)',
        display: 'atlas',
        symbol: 'ATLAS',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/atlas.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1nc6flp57m5hsr6y5y8aexzszy43ksr0drdr8rp',
            exponent: 0
          },
          {
            denom: 'audio',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra1nc6flp57m5hsr6y5y8aexzszy43ksr0drdr8rp',
        base: 'cw20:terra1nc6flp57m5hsr6y5y8aexzszy43ksr0drdr8rp',
        name: 'Audius (Portal)',
        display: 'audio',
        symbol: 'AUDIO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/audio.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1hj8de24c3yqvcsv9r8chr03fzwsak3hgd8gv3m',
            exponent: 0
          },
          {
            denom: 'avax',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra1hj8de24c3yqvcsv9r8chr03fzwsak3hgd8gv3m',
        base: 'cw20:terra1hj8de24c3yqvcsv9r8chr03fzwsak3hgd8gv3m',
        name: 'AVAX (Portal)',
        display: 'avax',
        symbol: 'AVAX',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/avax.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1apxgj5agkkfdm2tprwvykug0qtahxvfmugnhx2',
            exponent: 0
          },
          {
            denom: 'bat',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra1apxgj5agkkfdm2tprwvykug0qtahxvfmugnhx2',
        base: 'cw20:terra1apxgj5agkkfdm2tprwvykug0qtahxvfmugnhx2',
        name: 'Basic Attention Token (Portal)',
        display: 'bat',
        symbol: 'BAT',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bat.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1skjr69exm6v8zellgjpaa2emhwutrk5a6dz7dd',
            exponent: 0
          },
          {
            denom: 'busdbs',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra1skjr69exm6v8zellgjpaa2emhwutrk5a6dz7dd',
        base: 'cw20:terra1skjr69exm6v8zellgjpaa2emhwutrk5a6dz7dd',
        name: 'Binance USD (Portal from BSC)',
        display: 'busdbs',
        symbol: 'BUSDbs',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/busdbs.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1zmclyfepfmqvfqflu8r3lv6f75trmg05z7xq95',
            exponent: 0
          },
          {
            denom: 'dai',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra1zmclyfepfmqvfqflu8r3lv6f75trmg05z7xq95',
        base: 'cw20:terra1zmclyfepfmqvfqflu8r3lv6f75trmg05z7xq95',
        name: 'DAI (Portal)',
        display: 'dai',
        symbol: 'DAI',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dai.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1dtqlfecglk47yplfrtwjzyagkgcqqngd5lgjp8',
            exponent: 0
          },
          {
            denom: 'maticpo',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra1dtqlfecglk47yplfrtwjzyagkgcqqngd5lgjp8',
        base: 'cw20:terra1dtqlfecglk47yplfrtwjzyagkgcqqngd5lgjp8',
        name: 'MATIC (Portal from Polygon)',
        display: 'maticpo',
        symbol: 'MATICpo',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/maticpo.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra15a9dr3a2a2lj5fclrw35xxg9yuxg0d908wpf2y',
            exponent: 0
          },
          {
            denom: 'mimet',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra15a9dr3a2a2lj5fclrw35xxg9yuxg0d908wpf2y',
        base: 'cw20:terra15a9dr3a2a2lj5fclrw35xxg9yuxg0d908wpf2y',
        name: 'Magic Internet Money (Portal from Ethereum)',
        display: 'mimet',
        symbol: 'MIMet',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mimet.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1ht5sepn28z999jx33sdduuxm9acthad507jg9q',
            exponent: 0
          },
          {
            denom: 'ray',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1ht5sepn28z999jx33sdduuxm9acthad507jg9q',
        base: 'cw20:terra1ht5sepn28z999jx33sdduuxm9acthad507jg9q',
        name: 'Raydium (Portal)',
        display: 'ray',
        symbol: 'RAY',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ray.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra17h82zsq6q8x5tsgm5ugcx4gytw3axguvzt4pkc',
            exponent: 0
          },
          {
            denom: 'sbr',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra17h82zsq6q8x5tsgm5ugcx4gytw3axguvzt4pkc',
        base: 'cw20:terra17h82zsq6q8x5tsgm5ugcx4gytw3axguvzt4pkc',
        name: 'Saber (Portal)',
        display: 'sbr',
        symbol: 'SBR',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sbr.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1huku2lecfjhq9d00k5a8dh73gw7dwe6vvuf2dd',
            exponent: 0
          },
          {
            denom: 'shib',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra1huku2lecfjhq9d00k5a8dh73gw7dwe6vvuf2dd',
        base: 'cw20:terra1huku2lecfjhq9d00k5a8dh73gw7dwe6vvuf2dd',
        name: 'Shiba Inu (Portal)',
        display: 'shib',
        symbol: 'SHIB',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/shib.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1dkam9wd5yvaswv4yq3n2aqd4wm5j8n82qc0c7c',
            exponent: 0
          },
          {
            denom: 'srmso',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1dkam9wd5yvaswv4yq3n2aqd4wm5j8n82qc0c7c',
        base: 'cw20:terra1dkam9wd5yvaswv4yq3n2aqd4wm5j8n82qc0c7c',
        name: 'Serum (Portal from Solana)',
        display: 'srmso',
        symbol: 'SRMso',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/srmso.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1pvel56a2hs93yd429pzv9zp5aptcjg5ulhkz7w',
            exponent: 0
          },
          {
            denom: 'usdcav',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1pvel56a2hs93yd429pzv9zp5aptcjg5ulhkz7w',
        base: 'cw20:terra1pvel56a2hs93yd429pzv9zp5aptcjg5ulhkz7w',
        name: 'USD Coin (Portal from Avalanche)',
        display: 'usdcav',
        symbol: 'USDCav',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcav.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1yljlrxvkar0c6ujpvf8g57m5rpcwl7r032zyvu',
            exponent: 0
          },
          {
            denom: 'usdcbs',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra1yljlrxvkar0c6ujpvf8g57m5rpcwl7r032zyvu',
        base: 'cw20:terra1yljlrxvkar0c6ujpvf8g57m5rpcwl7r032zyvu',
        name: 'USD Coin (Portal from BSC)',
        display: 'usdcbs',
        symbol: 'USDCbs',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcbs.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1kkyyh7vganlpkj0gkc2rfmhy858ma4rtwywe3x',
            exponent: 0
          },
          {
            denom: 'usdcpo',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1kkyyh7vganlpkj0gkc2rfmhy858ma4rtwywe3x',
        base: 'cw20:terra1kkyyh7vganlpkj0gkc2rfmhy858ma4rtwywe3x',
        name: 'USD Coin (Portal from Polygon)',
        display: 'usdcpo',
        symbol: 'USDCpo',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcpo.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1e6mq63y64zcxz8xyu5van4tgkhemj3r86yvgu4',
            exponent: 0
          },
          {
            denom: 'usdcso',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1e6mq63y64zcxz8xyu5van4tgkhemj3r86yvgu4',
        base: 'cw20:terra1e6mq63y64zcxz8xyu5van4tgkhemj3r86yvgu4',
        name: 'USD Coin (Portal from Solana)',
        display: 'usdcso',
        symbol: 'USDCso',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcso.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1eqvq3thjhye7anv6f6mhxpjhyvww8zjvqcdgjx',
            exponent: 0
          },
          {
            denom: 'usdtav',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1eqvq3thjhye7anv6f6mhxpjhyvww8zjvqcdgjx',
        base: 'cw20:terra1eqvq3thjhye7anv6f6mhxpjhyvww8zjvqcdgjx',
        name: 'Tether USD (Portal from Avalanche)',
        display: 'usdtav',
        symbol: 'USDTav',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdtav.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1vlqeghv5mt5udh96kt5zxlh2wkh8q4kewkr0dd',
            exponent: 0
          },
          {
            denom: 'usdtbs',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra1vlqeghv5mt5udh96kt5zxlh2wkh8q4kewkr0dd',
        base: 'cw20:terra1vlqeghv5mt5udh96kt5zxlh2wkh8q4kewkr0dd',
        name: 'Tether USD (Portal from BSC)',
        display: 'usdtbs',
        symbol: 'USDTbs',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdtbs.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1hd9n65snaluvf7en0p4hqzse9eqecejz2k8rl5',
            exponent: 0
          },
          {
            denom: 'usdtso',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1hd9n65snaluvf7en0p4hqzse9eqecejz2k8rl5',
        base: 'cw20:terra1hd9n65snaluvf7en0p4hqzse9eqecejz2k8rl5',
        name: 'Tether USD (Portal from Solana)',
        display: 'usdtso',
        symbol: 'USDTso',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdtso.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1fpfn2kkr8mv390wx4dtpfk3vkjx9ch3thvykl3',
            exponent: 0
          },
          {
            denom: 'gohm',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra1fpfn2kkr8mv390wx4dtpfk3vkjx9ch3thvykl3',
        base: 'cw20:terra1fpfn2kkr8mv390wx4dtpfk3vkjx9ch3thvykl3',
        name: 'Governance OHM (Portal)',
        display: 'gohm',
        symbol: 'gOHM',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gohm.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1qvlpf2v0zmru3gtex40sqq02wxp39x3cjh359y',
            exponent: 0
          },
          {
            denom: 'msol',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra1qvlpf2v0zmru3gtex40sqq02wxp39x3cjh359y',
        base: 'cw20:terra1qvlpf2v0zmru3gtex40sqq02wxp39x3cjh359y',
        name: 'Marinade staked SOL (Portal)',
        display: 'msol',
        symbol: 'mSOL',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/msol.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1w7ywr6waxtjuvn5svk5wqydqpjj0q9ps7qct4d',
            exponent: 0
          },
          {
            denom: 'steth',
            exponent: 8
          }
        ],
        type_asset: 'cw20',
        address: 'terra1w7ywr6waxtjuvn5svk5wqydqpjj0q9ps7qct4d',
        base: 'cw20:terra1w7ywr6waxtjuvn5svk5wqydqpjj0q9ps7qct4d',
        name: 'Lido Staked Ether (Portal)',
        display: 'steth',
        symbol: 'stETH',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/steth.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1srp2u95kxps35nvan88gn96nfqhukqya2d0ffc',
            exponent: 0
          },
          {
            denom: 'lct',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1srp2u95kxps35nvan88gn96nfqhukqya2d0ffc',
        base: 'cw20:terra1srp2u95kxps35nvan88gn96nfqhukqya2d0ffc',
        name: 'LCT Token',
        display: 'lct',
        symbol: 'LCT',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/lct.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra18zqcnl83z98tf6lly37gghm7238k7lh79u4z9a',
            exponent: 0
          },
          {
            denom: 'batom',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra18zqcnl83z98tf6lly37gghm7238k7lh79u4z9a',
        base: 'cw20:terra18zqcnl83z98tf6lly37gghm7238k7lh79u4z9a',
        name: 'Bonded ATOM',
        display: 'batom',
        symbol: 'bATOM',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/batom.svg'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra128pe5jpempxu0nws5lw28se9zknhsr78626cpn',
            exponent: 0
          },
          {
            denom: 'webatom',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra128pe5jpempxu0nws5lw28se9zknhsr78626cpn',
        base: 'cw20:terra128pe5jpempxu0nws5lw28se9zknhsr78626cpn',
        name: 'pStake Bonded ATOM (Wormhole)',
        display: 'webatom',
        symbol: 'webATOM',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/webatom.svg'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1laczhlpxlgmrwr9un9ds74qxd2fj4754nf82dn',
            exponent: 0
          },
          {
            denom: 'wcoin',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1laczhlpxlgmrwr9un9ds74qxd2fj4754nf82dn',
        base: 'cw20:terra1laczhlpxlgmrwr9un9ds74qxd2fj4754nf82dn',
        name: 'Willisch Coin',
        display: 'wcoin',
        symbol: 'WCOIN',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wcoin.svg'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1thhm2u93m2stytzynhsxh5h3jrtg540x4punqy',
            exponent: 0
          },
          {
            denom: 'lctfancard',
            exponent: 0
          }
        ],
        type_asset: 'cw20',
        address: 'terra1thhm2u93m2stytzynhsxh5h3jrtg540x4punqy',
        base: 'cw20:terra1thhm2u93m2stytzynhsxh5h3jrtg540x4punqy',
        name: 'LCT Fancard Token',
        display: 'lctfancard',
        symbol: 'LCTfancard',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/lctfancard.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1yeyr6taynkwdl85ppaggr3zr8txhf66cny2ang',
            exponent: 0
          },
          {
            denom: 'kntc',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1yeyr6taynkwdl85ppaggr3zr8txhf66cny2ang',
        base: 'cw20:terra1yeyr6taynkwdl85ppaggr3zr8txhf66cny2ang',
        name: 'Kinetic Token',
        display: 'kntc',
        symbol: 'KNTC',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/kntc.svg'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1g53pyke8jtmt4lwvk4yl0xaqc4u0qlsl8dz3ex',
            exponent: 0
          },
          {
            denom: 'kust',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1g53pyke8jtmt4lwvk4yl0xaqc4u0qlsl8dz3ex',
        base: 'cw20:terra1g53pyke8jtmt4lwvk4yl0xaqc4u0qlsl8dz3ex',
        name: 'Kinetic kUST Token',
        display: 'kust',
        symbol: 'kUST',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/kust.svg'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1rl4zyexjphwgx6v3ytyljkkc4mrje2pyznaclv',
            exponent: 0
          },
          {
            denom: 'steak',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1rl4zyexjphwgx6v3ytyljkkc4mrje2pyznaclv',
        base: 'cw20:terra1rl4zyexjphwgx6v3ytyljkkc4mrje2pyznaclv',
        name: 'Steak Token',
        display: 'steak',
        symbol: 'STEAK',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/steak.svg'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1jkkt5638cd5pur0u5jnr2juw0v6hz5d6z8xu8m',
            exponent: 0
          },
          {
            denom: 'cst',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1jkkt5638cd5pur0u5jnr2juw0v6hz5d6z8xu8m',
        base: 'cw20:terra1jkkt5638cd5pur0u5jnr2juw0v6hz5d6z8xu8m',
        name: 'CST Token',
        display: 'cst',
        symbol: 'CST',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cst.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1kz7qszu7p4dg9lts7m9m7lpuarsnan47jh3fam',
            exponent: 0
          },
          {
            denom: 'cstfancard',
            exponent: 0
          }
        ],
        type_asset: 'cw20',
        address: 'terra1kz7qszu7p4dg9lts7m9m7lpuarsnan47jh3fam',
        base: 'cw20:terra1kz7qszu7p4dg9lts7m9m7lpuarsnan47jh3fam',
        name: 'CST Fancard Token',
        display: 'cstfancard',
        symbol: 'CSTfancard',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cstfancard.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1amz5c45l34n7w8m5a3z7rd7u0k037x4nnsemwj',
            exponent: 0
          },
          {
            denom: 'nwld',
            exponent: 9
          }
        ],
        type_asset: 'cw20',
        address: 'terra1amz5c45l34n7w8m5a3z7rd7u0k037x4nnsemwj',
        base: 'cw20:terra1amz5c45l34n7w8m5a3z7rd7u0k037x4nnsemwj',
        name: 'Neworld Labs Develpper Token',
        display: 'nwld',
        symbol: 'NWLD',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/nwld.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1cdc6nlsx0l6jmt3nnx7gxjggf902wge3n2z76k',
            exponent: 0
          },
          {
            denom: 'fury',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1cdc6nlsx0l6jmt3nnx7gxjggf902wge3n2z76k',
        base: 'cw20:terra1cdc6nlsx0l6jmt3nnx7gxjggf902wge3n2z76k',
        name: 'FURY',
        display: 'fury',
        symbol: 'FURY',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/fury.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra17n223dxpkypc5c48la7aqjvverczg82ga3cr93',
            exponent: 0
          },
          {
            denom: 'rct',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra17n223dxpkypc5c48la7aqjvverczg82ga3cr93',
        base: 'cw20:terra17n223dxpkypc5c48la7aqjvverczg82ga3cr93',
        name: 'Reactor Token',
        display: 'rct',
        symbol: 'RCT',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/rct.svg'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra14vw4sfqwe7jw8ppcc7u44vq7hy9qa2nlstnxmu',
            exponent: 0
          },
          {
            denom: 'vitc',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra14vw4sfqwe7jw8ppcc7u44vq7hy9qa2nlstnxmu',
        base: 'cw20:terra14vw4sfqwe7jw8ppcc7u44vq7hy9qa2nlstnxmu',
        name: 'Vitamin Coin',
        display: 'vitc',
        symbol: 'VITC',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/vitc.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1948uvsah8aw40dhsa9mhl3htq8lraj0smlh77g',
            exponent: 0
          },
          {
            denom: 'sb',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1948uvsah8aw40dhsa9mhl3htq8lraj0smlh77g',
        base: 'cw20:terra1948uvsah8aw40dhsa9mhl3htq8lraj0smlh77g',
        name: 'DragonSB',
        display: 'sb',
        symbol: 'SB',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sb.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1rz964297kvt86rteajhtp4hsffhcum0ye8eljh',
            exponent: 0
          },
          {
            denom: 'toad',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1rz964297kvt86rteajhtp4hsffhcum0ye8eljh',
        base: 'cw20:terra1rz964297kvt86rteajhtp4hsffhcum0ye8eljh',
        name: 'RESToad Token',
        display: 'toad',
        symbol: 'TOAD',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/toad.svg'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1yhlhrea3rgyx2xdnsswsfakn28qa8z7yp5gmhd',
            exponent: 0
          },
          {
            denom: 'orionastro',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1yhlhrea3rgyx2xdnsswsfakn28qa8z7yp5gmhd',
        base: 'cw20:terra1yhlhrea3rgyx2xdnsswsfakn28qa8z7yp5gmhd',
        name: 'Orion Money xASTRO Derivative Token',
        display: 'orionastro',
        symbol: 'orionASTRO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/orionastro.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1j4hwavavmtsafa6zr0npalfz3tk9gf3p4787mp',
            exponent: 0
          },
          {
            denom: 'retro',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1j4hwavavmtsafa6zr0npalfz3tk9gf3p4787mp',
        base: 'cw20:terra1j4hwavavmtsafa6zr0npalfz3tk9gf3p4787mp',
        name: 'Retrograde',
        display: 'retro',
        symbol: 'RETRO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/retro.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra16wggm67a34msdxasg2vergm2pt289y7930wv7d',
            exponent: 0
          },
          {
            denom: 'tnd',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra16wggm67a34msdxasg2vergm2pt289y7930wv7d',
        base: 'cw20:terra16wggm67a34msdxasg2vergm2pt289y7930wv7d',
        name: 'TerrnadoCash',
        display: 'tnd',
        symbol: 'TND',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tnd.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1n9k2he20h5vpyn4mgv7pg4pzvw2n3wc4a86v3g',
            exponent: 0
          },
          {
            denom: 'stnd',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1n9k2he20h5vpyn4mgv7pg4pzvw2n3wc4a86v3g',
        base: 'cw20:terra1n9k2he20h5vpyn4mgv7pg4pzvw2n3wc4a86v3g',
        name: 'TerrnadoCash',
        display: 'stnd',
        symbol: 'sTND',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/stnd.svg'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1ezz5xply2v3xdyv32gy5tcd7zq4k235q4xtzwe',
            exponent: 0
          },
          {
            denom: 'nwt',
            exponent: 9
          }
        ],
        type_asset: 'cw20',
        address: 'terra1ezz5xply2v3xdyv32gy5tcd7zq4k235q4xtzwe',
        base: 'cw20:terra1ezz5xply2v3xdyv32gy5tcd7zq4k235q4xtzwe',
        name: 'Neworld Token',
        display: 'nwt',
        symbol: 'NWT',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/nwt.png'
        }
      },
      {
        description: 'The AUD stablecoin of Terra Classic.',
        denom_units: [
          {
            denom: 'uaud',
            exponent: 0,
            aliases: ['microaud']
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
        base: 'uaud',
        display: 'aut',
        name: 'TerraClassicAUD',
        symbol: 'AUTC',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.png'
        }
      },
      {
        description: 'The CAD stablecoin of Terra Classic.',
        denom_units: [
          {
            denom: 'ucad',
            exponent: 0,
            aliases: ['microcad']
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
        base: 'ucad',
        display: 'cat',
        name: 'TerraClassicCAD',
        symbol: 'CATC',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.png'
        }
      },
      {
        description: 'The CHF stablecoin of Terra Classic.',
        denom_units: [
          {
            denom: 'uchf',
            exponent: 0,
            aliases: ['microchf']
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
        base: 'uchf',
        display: 'cht',
        name: 'TerraClassicCHF',
        symbol: 'CHTC',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.png'
        }
      },
      {
        description: 'The CNY stablecoin of Terra Classic.',
        denom_units: [
          {
            denom: 'ucny',
            exponent: 0,
            aliases: ['microcny']
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
        base: 'ucny',
        display: 'cnt',
        name: 'TerraClassicCNY',
        symbol: 'CNTC',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.png'
        }
      },
      {
        description: 'The DKK stablecoin of Terra Classic.',
        denom_units: [
          {
            denom: 'udkk',
            exponent: 0,
            aliases: ['microdkk']
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
        base: 'udkk',
        display: 'dkt',
        name: 'TerraClassicDKK',
        symbol: 'DKTC',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.png'
        }
      },
      {
        description: 'The EUR stablecoin of Terra Classic.',
        denom_units: [
          {
            denom: 'ueur',
            exponent: 0,
            aliases: ['microeur']
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
        base: 'ueur',
        display: 'eut',
        name: 'TerraClassicEUR',
        symbol: 'EUTC',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.png'
        }
      },
      {
        description: 'The GBP stablecoin of Terra Classic.',
        denom_units: [
          {
            denom: 'ugbp',
            exponent: 0,
            aliases: ['microgbp']
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
        base: 'ugbp',
        display: 'gbt',
        name: 'TerraClassicGBP',
        symbol: 'GBTC',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.png'
        }
      },
      {
        description: 'The HKD stablecoin of Terra Classic.',
        denom_units: [
          {
            denom: 'uhkd',
            exponent: 0,
            aliases: ['microhkd']
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
        base: 'uhkd',
        display: 'hkt',
        name: 'TerraClassicHKD',
        symbol: 'HKTC',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.png'
        }
      },
      {
        description: 'The IDR stablecoin of Terra Classic.',
        denom_units: [
          {
            denom: 'uidr',
            exponent: 0,
            aliases: ['microidr']
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
        base: 'uidr',
        display: 'idt',
        name: 'TerraClassicIDR',
        symbol: 'IDTC',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.png'
        }
      },
      {
        description: 'The INR stablecoin of Terra Classic.',
        denom_units: [
          {
            denom: 'uinr',
            exponent: 0,
            aliases: ['microinr']
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
        base: 'uinr',
        display: 'int',
        name: 'TerraClassicINR',
        symbol: 'INTC',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.png'
        }
      },
      {
        description: 'The JPY stablecoin of Terra Classic.',
        denom_units: [
          {
            denom: 'ujpy',
            exponent: 0,
            aliases: ['microjpy']
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
        base: 'ujpy',
        display: 'jpt',
        name: 'TerraClassicJPY',
        symbol: 'JPTC',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.png'
        }
      },
      {
        description: 'The MNT stablecoin of Terra Classic.',
        denom_units: [
          {
            denom: 'umnt',
            exponent: 0,
            aliases: ['micromnt']
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
        base: 'umnt',
        display: 'mnt',
        name: 'TerraClassicMNT',
        symbol: 'MNTC',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.png'
        }
      },
      {
        description: 'The MYR stablecoin of Terra Classic.',
        denom_units: [
          {
            denom: 'umyr',
            exponent: 0,
            aliases: ['micromyr']
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
        base: 'umyr',
        display: 'myt',
        name: 'TerraClassicMYR',
        symbol: 'MYTC',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.png'
        }
      },
      {
        description: 'The NOK stablecoin of Terra Classic.',
        denom_units: [
          {
            denom: 'unok',
            exponent: 0,
            aliases: ['micronok']
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
        base: 'unok',
        display: 'not',
        name: 'TerraClassicNOK',
        symbol: 'NOTC',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.png'
        }
      },
      {
        description: 'The PHP stablecoin of Terra Classic.',
        denom_units: [
          {
            denom: 'uphp',
            exponent: 0,
            aliases: ['microphp']
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
        base: 'uphp',
        display: 'pht',
        name: 'TerraClassicPHP',
        symbol: 'PHTC',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.png'
        }
      },
      {
        description: 'The SDR stablecoin of Terra Classic.',
        denom_units: [
          {
            denom: 'usdr',
            exponent: 0,
            aliases: ['microsdr']
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
        base: 'usdr',
        display: 'sdt',
        name: 'TerraClassicSDR',
        symbol: 'SDTC',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.png'
        }
      },
      {
        description: 'The SEK stablecoin of Terra Classic.',
        denom_units: [
          {
            denom: 'usek',
            exponent: 0,
            aliases: ['microsek']
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
        base: 'usek',
        display: 'set',
        name: 'TerraClassicSEK',
        symbol: 'SETC',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.png'
        }
      },
      {
        description: 'The SGD stablecoin of Terra Classic.',
        denom_units: [
          {
            denom: 'usgd',
            exponent: 0,
            aliases: ['microsgd']
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
        base: 'usgd',
        display: 'sgt',
        name: 'TerraClassicSGD',
        symbol: 'SGTC',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.png'
        }
      },
      {
        description: 'The THB stablecoin of Terra Classic.',
        denom_units: [
          {
            denom: 'uthb',
            exponent: 0,
            aliases: ['microthb']
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
        base: 'uthb',
        display: 'tht',
        name: 'TerraClassicTHB',
        symbol: 'THTC',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.png'
        }
      },
      {
        description: 'The TWD stablecoin of Terra Classic.',
        denom_units: [
          {
            denom: 'utwd',
            exponent: 0,
            aliases: ['microtwd']
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
        base: 'utwd',
        display: 'twt',
        name: 'TerraClassicTWD',
        symbol: 'TWTC',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'cw20:terra1mpq5zkkm39nmjrjg9raknpfrfmcfwv0nh0whvn',
            exponent: 0
          },
          {
            denom: 'neb',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address: 'terra1mpq5zkkm39nmjrjg9raknpfrfmcfwv0nh0whvn',
        base: 'cw20:terra1mpq5zkkm39nmjrjg9raknpfrfmcfwv0nh0whvn',
        name: 'Nebula Token',
        display: 'neb',
        symbol: 'NEB',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/neb.png'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'terra2',
    assets: [
      {
        description: 'The native staking token of Terra.',
        denom_units: [
          {
            denom: 'uluna',
            exponent: 0
          },
          {
            denom: 'luna',
            exponent: 6
          }
        ],
        base: 'uluna',
        name: 'Luna',
        display: 'luna',
        symbol: 'LUNA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png'
        },
        coingecko_id: 'terra-luna-2'
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'atlantic',
    assets: [
      {
        description:
          'The native staking and governance token of the Atlantic testnet version of Sei.',
        denom_units: [
          {
            denom: 'usei',
            exponent: 0
          },
          {
            denom: 'sei',
            exponent: 6
          }
        ],
        base: 'usei',
        name: 'Sei',
        display: 'sei',
        symbol: 'SEI',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/atlantic/images/sei.png'
        }
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'bitcannadev',
    assets: [
      {
        description:
          'The BCNA coin is the transactional token within the BitCanna network, serving the legal cannabis industry through its payment network, supply chain and trust network.',
        denom_units: [
          {
            denom: 'ubcna',
            exponent: 0
          },
          {
            denom: 'bcna',
            exponent: 6
          }
        ],
        base: 'ubcna',
        display: 'bcna',
        name: 'BitCanna',
        symbol: 'BCNA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/bitcannadev/images/bcna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/bitcannadev/images/bcna.svg'
        },
        coingecko_id: 'bitcanna'
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'cheqdtestnet',
    assets: [
      {
        description: 'Native token for the cheqd network',
        denom_units: [
          {
            denom: 'ncheq',
            exponent: 0
          },
          {
            denom: 'cheq',
            exponent: 9
          }
        ],
        base: 'ncheq',
        display: 'cheq',
        name: 'cheqd',
        symbol: 'CHEQ',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cheqdtestnet/images/cheq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cheqdtestnet/images/cheq.svg'
        },
        coingecko_id: 'cheqd-network'
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'evmostestnet',
    assets: [
      {
        description:
          'The native EVM, governance and staking token of the Evmos Hub',
        denom_units: [
          {
            denom: 'atevmos',
            exponent: 0
          },
          {
            denom: 'tevmos',
            exponent: 18
          }
        ],
        base: 'atevmos',
        name: 'Evnos Testnet',
        display: 'tevmos',
        symbol: 'TEVMOS',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/evmostestnet/images/evmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/evmostestnet/images/evmos.svg'
        }
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'harpoon',
    assets: [
      {
        description:
          'The native staking and governance token of the Harpoon testnet version of Kujira.',
        denom_units: [
          {
            denom: 'ukuji',
            exponent: 0
          },
          {
            denom: 'kuji',
            exponent: 6
          }
        ],
        base: 'ukuji',
        name: 'Kuji',
        display: 'kuji',
        symbol: 'KUJI',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/harpoon/images/kuji.png'
        }
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_id: 'imversed-test-1',
    assets: [
      {
        description:
          'The native staking and governance token of the Imversed testnet.',
        denom_units: [
          {
            denom: 'nimv',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'imv',
            exponent: 6,
            aliases: []
          }
        ],
        base: 'nimv',
        name: 'Imv',
        display: 'imv',
        symbol: 'IMV',
        logo_URIs: {
          png: 'https://s.imversed.com/images/ic_imversed2.png',
          svg: 'https://s.imversed.com/images/ic_imversed2.svg'
        }
      },
      {
        description:
          'The native staking and governance token of the Imversed testnet.',
        denom_units: [
          {
            denom:
              'ibc/C6438A7D613196373D939891C99CA7EEF4F78F4A78DC8590E51E62F8ED16E72B',
            exponent: 0,
            aliases: ['usaage']
          },
          {
            denom: 'imv',
            exponent: 6
          }
        ],
        base: 'ibc/C6438A7D613196373D939891C99CA7EEF4F78F4A78DC8590E51E62F8ED16E72B',
        name: 'Imv',
        display: 'imv',
        symbol: 'IMV',
        ibc: {
          source_channel: 'channel-1',
          dst_channel: 'channel-221',
          source_denom: 'nimv'
        },
        logo_URIs: {
          png: 'https://s.imversed.com/images/ic_imversed2.png',
          svg: 'https://s.imversed.com/images/ic_imversed2.svg'
        }
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'junotestnet',
    assets: [
      {
        description: 'The native token of JUNO Chain',
        denom_units: [
          {
            denom: 'ujunox',
            exponent: 0
          },
          {
            denom: 'junox',
            exponent: 6
          }
        ],
        base: 'ujunox',
        name: 'Juno Testnet',
        display: 'junox',
        symbol: 'JUNO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.svg'
        },
        coingecko_id: 'juno-network'
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'kichaintestnet',
    assets: [
      {
        description: 'The native token of Ki Chain',
        denom_units: [
          {
            denom: 'utki',
            exponent: 0
          },
          {
            denom: 'tki',
            exponent: 6
          }
        ],
        base: 'utki',
        name: 'Ki',
        display: 'tki',
        symbol: 'TKI',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg'
        },
        coingecko_id: 'ki'
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'korellia',
    assets: [
      {
        description:
          'The native staking and governance token of the Korellia testnet version of KYVE.',
        denom_units: [
          {
            denom: 'tkyve',
            exponent: 0
          },
          {
            denom: 'kyve',
            exponent: 9
          }
        ],
        base: 'tkyve',
        name: 'KYVE',
        display: 'kyve',
        symbol: 'KYVE',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/korellia/images/kyve.svg'
        }
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'osmosistestnet',
    assets: [
      {
        description: 'The native token of Osmosis',
        denom_units: [
          {
            denom: 'uosmo',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'osmo',
            exponent: 6,
            aliases: []
          }
        ],
        base: 'uosmo',
        name: 'Osmosis',
        display: 'osmo',
        symbol: 'OSMO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        },
        coingecko_id: 'osmosis',
        keywords: ['dex', 'staking']
      },
      {
        denom_units: [
          {
            denom: 'uion',
            exponent: 0
          },
          {
            denom: 'ion',
            exponent: 6
          }
        ],
        base: 'uion',
        name: 'Ion',
        display: 'ion',
        symbol: 'ION',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
        },
        coingecko_id: 'ion',
        keywords: ['memecoin']
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'pulsar',
    assets: [
      {
        description: 'The native token of Secret Network',
        denom_units: [
          {
            denom: 'uscrt',
            exponent: 0
          },
          {
            denom: 'scrt',
            exponent: 6
          }
        ],
        base: 'uscrt',
        name: 'Secret Network',
        display: 'scrt',
        symbol: 'SCRT',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
        },
        coingecko_id: 'secret'
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_id: 'saage-internal-testnet-1.3',
    assets: [
      {
        description:
          'The SGE token is primarily a governance token for the Saage chain.',
        denom_units: [
          {
            denom: 'usaage',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'saage',
            exponent: 6,
            aliases: []
          }
        ],
        base: 'usaage',
        name: 'Saage',
        display: 'saage',
        symbol: 'SGE',
        logo_URIs: {
          png: 'https://defitech-logo.s3.amazonaws.com/Final+Logo+Saage.png',
          svg: 'https://defitech-logo.s3.amazonaws.com/Logo+Effects+edited.svg'
        }
      },
      {
        description:
          'The SGE token is primarily a governance token for the Saage chain.',
        denom_units: [
          {
            denom:
              'ibc/8B670F5ACD4887208C8FAD58396D39114A8F2C9B57E72EE02F51438069A72AEA',
            exponent: 0,
            aliases: ['usaage']
          },
          {
            denom: 'saage',
            exponent: 6
          }
        ],
        base: 'ibc/8B670F5ACD4887208C8FAD58396D39114A8F2C9B57E72EE02F51438069A72AEA',
        name: 'Saage',
        display: 'saage',
        symbol: 'SGE',
        ibc: {
          source_channel: 'channel-0',
          dst_channel: 'channel-207',
          source_denom: 'usaage'
        },
        logo_URIs: {
          png: 'https://defitech-logo.s3.amazonaws.com/Final+Logo+Saage.png',
          svg: 'https://defitech-logo.s3.amazonaws.com/Logo+Effects+edited.svg'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'stateset-1-testnet',
    assets: [
      {
        description: 'The native token of the Stateset Network',
        denom_units: [
          {
            denom: 'ustate',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'state',
            exponent: 6,
            aliases: []
          }
        ],
        base: 'ustate',
        name: 'Stateset',
        display: 'state',
        symbol: 'STATE',
        logo_URIs: {
          jpeg: 'https://app.stateset.zone/stateset.jpeg'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'theta-testnet-001',
    assets: [
      {
        description:
          'The native staking and governance token of the Theta testnet version of the Cosmos Hub.',
        denom_units: [
          {
            denom: 'uatom',
            exponent: 0
          },
          {
            denom: 'atom',
            exponent: 6
          }
        ],
        base: 'uatom',
        name: 'Cosmos',
        display: 'atom',
        symbol: 'ATOM',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/atom.png',
          svg: 'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/atom.svg'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'ULAS',
    assets: [
      {
        description: 'WEB3 twitter',
        denom_units: [
          {
            denom: 'uulas',
            exponent: 0
          },
          {
            denom: 'ulas',
            exponent: 6
          }
        ],
        base: 'uulas',
        name: 'ULAS Network',
        display: 'ULAS',
        symbol: 'ULAS',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/ulas/images/logo.png'
        },
        coingecko_id: 'ulas'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'tgrade',
    assets: [
      {
        description: 'The native token of Tgrade',
        denom_units: [
          {
            denom: 'utgd',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'tgd',
            exponent: 6,
            aliases: []
          }
        ],
        base: 'utgd',
        name: 'Tgrade',
        display: 'tgd',
        symbol: 'TGD',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg'
        },
        coingecko_id: 'tgrade'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'umee',
    assets: [
      {
        description: 'The native token of Umee',
        denom_units: [
          {
            denom: 'uumee',
            exponent: 0
          },
          {
            denom: 'umee',
            exponent: 6
          }
        ],
        base: 'uumee',
        name: 'Umee',
        display: 'umee',
        symbol: 'UMEE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png'
        },
        coingecko_id: 'umee'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'vidulum',
    assets: [
      {
        description: 'The native token of Vidulum',
        denom_units: [
          {
            denom: 'uvdl',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'vdl',
            exponent: 6,
            aliases: []
          }
        ],
        base: 'uvdl',
        name: 'Vidulum',
        display: 'vdl',
        symbol: 'VDL',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png'
        },
        coingecko_id: 'vidulum'
      }
    ]
  }
];
export default assets;
