import { AssetList } from '@chain-registry/types';
const assets: AssetList[] = [
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'aptos',
    assets: [
      {
        description:
          'Aptos token (APT) is the Aptos blockchain native token used for paying network and transaction fees.',
        denom_units: [
          {
            denom: '0x1::aptos_coin::AptosCoin',
            exponent: 0,
            aliases: ['Octa']
          },
          {
            denom: 'APT',
            exponent: 8
          }
        ],
        base: '0x1::aptos_coin::AptosCoin',
        name: 'Aptos Coin',
        display: 'APT',
        symbol: 'APT',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/aptos.svg'
        },
        coingecko_id: 'aptos',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/aptos.svg'
          },
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/apt-dm.svg',
            theme: {
              dark_mode: true
            }
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'arbitrum',
    assets: [
      {
        description: 'Native token of Arbitrum',
        type_asset: 'erc20',
        address: '0x912CE59144191C1204E64559FE8253a0e49E6548',
        denom_units: [
          {
            denom: '0x912CE59144191C1204E64559FE8253a0e49E6548',
            exponent: 0,
            aliases: ['arb-wei']
          },
          {
            denom: 'arb',
            exponent: 18
          }
        ],
        base: '0x912CE59144191C1204E64559FE8253a0e49E6548',
        name: 'Arbitrum',
        display: 'arb',
        symbol: 'ARB',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg'
        },
        coingecko_id: 'arbitrum',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg'
          }
        ]
      }
    ]
  },
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
        coingecko_id: 'avalanche-2',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.svg'
          }
        ]
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
        traces: [
          {
            type: 'wrapped',
            counterparty: {
              chain_name: 'avalanche',
              base_denom: 'wei'
            },
            provider: 'Avalanche'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
        },
        coingecko_id: 'wrapped-avax',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
          }
        ]
      },
      {
        description:
          'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
        type_asset: 'erc20',
        address: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
        denom_units: [
          {
            denom: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
            exponent: 0,
            aliases: ['uusdc']
          },
          {
            denom: 'usdc',
            exponent: 6
          }
        ],
        base: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
        name: 'USD Coin',
        display: 'usdc',
        symbol: 'USDC',
        traces: [
          {
            type: 'additional-mintage',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
            },
            provider: 'Circle'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        },
        coingecko_id: 'usd-coin',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'binancesmartchain',
    assets: [
      {
        description:
          'BNB powers the BNB Chain ecosystem and is the native coin of the BNB Beacon Chain and BNB Smart Chain.',
        denom_units: [
          {
            denom: 'wei',
            exponent: 0
          },
          {
            denom: 'bnb',
            exponent: 18
          }
        ],
        base: 'wei',
        name: 'Binance Coin',
        display: 'bnb',
        symbol: 'BNB',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg'
        },
        coingecko_id: 'binancecoin',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg'
          }
        ]
      },
      {
        description:
          'Wrapped BNB. As the native coin of Binance Chain, BNB has multiple use cases: fueling transactions on the Chain, paying for transaction fees on Binance Exchange, making in-store payments, and many more.',
        type_asset: 'erc20',
        address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
        denom_units: [
          {
            denom: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
            exponent: 0
          },
          {
            denom: 'wbnb',
            exponent: 18
          }
        ],
        base: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
        name: 'Wrapped BNB',
        display: 'wbnb',
        symbol: 'WBNB',
        traces: [
          {
            type: 'wrapped',
            counterparty: {
              chain_name: 'binancesmartchain',
              base_denom: 'wei'
            },
            chain: {
              contract: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
            },
            provider: 'Binance'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg'
        },
        coingecko_id: 'wbnb',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg'
          }
        ]
      },
      {
        description:
          'BUSD is a 1:1 USD-backed stablecoin approved by NYDFS and issued by Paxos on Ethereum. Binance provides Binance-Peg BUSD on other chains by locking an equivalent amount of assets on Ethereum. Note that Binance-Peg BUSD is provided by Binance, which is not issued by Paxos nor regulated by the NYDFS.',
        denom_units: [
          {
            denom: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
            exponent: 0
          },
          {
            denom: 'busd',
            exponent: 18
          }
        ],
        type_asset: 'erc20',
        address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
        base: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
        name: 'Binance-Peg BUSD Token',
        display: 'busd',
        symbol: 'BUSD',
        traces: [
          {
            type: 'synthetic',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
            },
            provider: 'Binance'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png'
          }
        ]
      },
      {
        description:
          'USD Coin (known by its ticker USDC) is a stablecoin that is pegged to the U.S. dollar on a 1:1 basis.',
        denom_units: [
          {
            denom: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
            exponent: 0
          },
          {
            denom: 'usdc',
            exponent: 18
          }
        ],
        type_asset: 'erc20',
        address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
        base: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
        name: 'Binance-Peg USD Coin',
        display: 'usdc',
        symbol: 'USDC',
        traces: [
          {
            type: 'synthetic',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0x4fabb145d64652a948d72533023f6e7a623c7c53'
            },
            provider: 'Binance'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'composablepolkadot',
    assets: [
      {
        denom_units: [
          {
            denom: '79228162514264337593543950342',
            exponent: 0
          },
          {
            denom: 'dot',
            exponent: 10
          }
        ],
        base: '79228162514264337593543950342',
        name: 'Polkadot',
        display: 'dot',
        symbol: 'DOT',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'polkadot',
              base_denom: 'Planck'
            },
            provider: 'Polkadot Relay'
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'polkadot',
              base_denom: 'Planck'
            },
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
        },
        coingecko_id: 'ethereum',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
          }
        ]
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
        coingecko_id: 'aave',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg'
          }
        ]
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
        coingecko_id: 'apecoin',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg'
          }
        ]
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
        coingecko_id: 'axie-infinity',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/axs.svg'
          }
        ]
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
        coingecko_id: 'dai',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
          }
        ]
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
        coingecko_id: 'frax',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
          }
        ]
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
        coingecko_id: 'chainlink',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg'
          }
        ]
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
        coingecko_id: 'maker',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg'
          }
        ]
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
        coingecko_id: 'rai',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg'
          }
        ]
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
        coingecko_id: 'shiba-inu',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg'
          }
        ]
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
        coingecko_id: 'staked-ether',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg'
          }
        ]
      },
      {
        description:
          'wstETH is a wrapped version of stETH. As some DeFi protocols require a constant balance mechanism for tokens, wstETH keeps your balance of stETH fixed and uses an underlying share system to reflect your earned staking rewards.',
        type_asset: 'erc20',
        address: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
        denom_units: [
          {
            denom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
            exponent: 0,
            aliases: ['wsteth-wei']
          },
          {
            denom: 'wsteth',
            exponent: 18
          }
        ],
        base: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
        name: 'Wrapped Lido Staked Ether',
        display: 'wsteth',
        symbol: 'wstETH',
        traces: [
          {
            type: 'wrapped',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84'
            },
            provider: 'Lido'
          }
        ],
        coingecko_id: 'wrapped-steth',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
          }
        ]
      },
      {
        description:
          "Frax Ether is a liquid ETH staking derivative designed to uniquely leverage the Frax Finance ecosystem. frxETH acts as a stablecoin loosely pegged to ETH, leveraging Frax's winning playbook on stablecoins and onboarding ETH into the Frax ecosystem.",
        type_asset: 'erc20',
        address: '0x5e8422345238f34275888049021821e8e08caa1f',
        denom_units: [
          {
            denom: '0x5e8422345238f34275888049021821e8e08caa1f',
            exponent: 0,
            aliases: ['frxeth-wei']
          },
          {
            denom: 'frxeth',
            exponent: 18
          }
        ],
        base: '0x5e8422345238f34275888049021821e8e08caa1f',
        name: 'Frax Ether',
        display: 'frxeth',
        symbol: 'frxETH',
        traces: [
          {
            type: 'liquid-stake',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: 'wei'
            },
            provider: 'Frax'
          }
        ],
        coingecko_id: 'frax-ether',
        images: [
          {
            image_sync: {
              chain_name: 'ethereum',
              base_denom: 'wei'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
        }
      },
      {
        description:
          "sfrxETH is the version of frxETH which accrues staking yield. All profit generated from Frax Ether validators is distributed to sfrxETH holders. By exchanging frxETH for sfrxETH, one become's eligible for staking yield, which is redeemed upon converting sfrxETH back to frxETH.",
        type_asset: 'erc20',
        address: '0xac3e018457b222d93114458476f3e3416abbe38f',
        denom_units: [
          {
            denom: '0xac3e018457b222d93114458476f3e3416abbe38f',
            exponent: 0,
            aliases: ['sfrxeth-wei']
          },
          {
            denom: 'sfrxeth',
            exponent: 18
          }
        ],
        base: '0xac3e018457b222d93114458476f3e3416abbe38f',
        name: 'Staked Frax Ether',
        display: 'sfrxeth',
        symbol: 'sfrxETH',
        traces: [
          {
            type: 'wrapped',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0x5e8422345238f34275888049021821e8e08caa1f'
            },
            provider: 'Frax'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
        },
        coingecko_id: 'staked-frax-ether',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
          }
        ]
      },
      {
        description:
          'Rocket Pool is a decentralised Ethereum Proof of Stake pool.',
        type_asset: 'erc20',
        address: '0xae78736cd615f374d3085123a210448e74fc6393',
        denom_units: [
          {
            denom: '0xae78736cd615f374d3085123a210448e74fc6393',
            exponent: 0,
            aliases: ['reth-wei']
          },
          {
            denom: 'reth',
            exponent: 18
          }
        ],
        base: '0xae78736cd615f374d3085123a210448e74fc6393',
        name: 'Rocket Pool Ether',
        display: 'reth',
        symbol: 'rETH',
        traces: [
          {
            type: 'liquid-stake',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: 'wei'
            },
            provider: 'Rocket Pool'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png'
        },
        coingecko_id: 'rocket-pool-eth',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png'
          }
        ]
      },
      {
        description:
          'Coinbase Wrapped Staked ETH (“cbETH”) is a utility token and liquid representation of ETH staked through Coinbase. cbETH gives customers the option to sell, transfer, or otherwise use their staked ETH in dapps while it remains locked by the Ethereum protocol.',
        type_asset: 'erc20',
        address: '0xbe9895146f7af43049ca1c1ae358b0541ea49704',
        denom_units: [
          {
            denom: '0xbe9895146f7af43049ca1c1ae358b0541ea49704',
            exponent: 0,
            aliases: ['cbeth-wei']
          },
          {
            denom: 'cbeth',
            exponent: 18
          }
        ],
        base: '0xbe9895146f7af43049ca1c1ae358b0541ea49704',
        name: 'Coinbase Wrapped Staked ETH',
        display: 'cbeth',
        symbol: 'cbETH',
        traces: [
          {
            type: 'liquid-stake',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: 'wei'
            },
            provider: 'Coinbase'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png'
        },
        coingecko_id: 'coinbase-wrapped-staked-eth',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png'
          }
        ]
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
        coingecko_id: 'uniswap',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg'
          }
        ]
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
        coingecko_id: 'usd-coin',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
          }
        ]
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
        coingecko_id: 'tether',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
          }
        ]
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
        coingecko_id: 'wrapped-bitcoin',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
          }
        ]
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
        coingecko_id: 'weth',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
          }
        ]
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
        coingecko_id: 'chain-2',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xcn.svg'
          }
        ]
      },
      {
        description:
          'Binance USD (BUSD) is a dollar-backed stablecoin issued and custodied by Paxos Trust Company, and regulated by the New York State Department of Financial Services. BUSD is available directly for sale 1:1 with USD on Paxos.com and will be listed for trading on Binance.',
        type_asset: 'erc20',
        address: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
        denom_units: [
          {
            denom: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
            exponent: 0,
            aliases: ['busd-wei']
          },
          {
            denom: 'busd',
            exponent: 18
          }
        ],
        base: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
        name: 'Binance USD',
        display: 'busd',
        symbol: 'BUSD',
        traces: [
          {
            type: 'synthetic',
            counterparty: {
              chain_name: 'forex',
              base_denom: 'USD'
            },
            provider: 'Binance'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.svg'
        },
        coingecko_id: 'binance-usd',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.svg'
          }
        ]
      },
      {
        description: '',
        type_asset: 'erc20',
        address: '0x6982508145454Ce325dDbE47a25d4ec3d2311933',
        denom_units: [
          {
            denom: '0x6982508145454Ce325dDbE47a25d4ec3d2311933',
            exponent: 0,
            aliases: ['pepe-wei']
          },
          {
            denom: 'pepe',
            exponent: 18
          }
        ],
        base: '0x6982508145454Ce325dDbE47a25d4ec3d2311933',
        name: 'PEPE - Pepe',
        display: 'pepe',
        symbol: 'PEPE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg'
        },
        coingecko_id: 'pepe',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg'
          }
        ]
      },
      {
        description:
          'Maximize ETH yield through leveraged staking across Aave, Compound and Morpho and liquidity provision of ETH liquid staking tokens on Uniswap V3.',
        type_asset: 'erc20',
        address: '0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec',
        denom_units: [
          {
            denom: '0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec',
            exponent: 0
          },
          {
            denom: 'YieldETH',
            exponent: 18
          }
        ],
        base: '0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec',
        name: 'Real Yield ETH',
        display: 'YieldETH',
        symbol: 'YieldETH',
        traces: [
          {
            type: 'liquid-stake',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: 'wei'
            },
            provider: 'Seven Seas & DeFine Logic Labs'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg'
          }
        ]
      },
      {
        description:
          'TBTC replaces centralized intermediaries with a randomly selected group of nodes on the Threshold Network. This group of independent nodes works together to secure your deposited Bitcoin through threshold cryptography. TBTC allows anyone to use Bitcoin in the expanding DeFi and Web3 universe.',
        denom_units: [
          {
            denom: '0x18084fba666a33d37592fa2633fd49a74dd93a88',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'tBTC',
            exponent: 18,
            aliases: []
          }
        ],
        type_asset: 'erc20',
        address: '0x18084fba666a33d37592fa2633fd49a74dd93a88',
        base: '0x18084fba666a33d37592fa2633fd49a74dd93a88',
        display: 'tBTC',
        name: 'tBTC v2',
        symbol: 'tBTC',
        traces: [
          {
            type: 'wrapped',
            counterparty: {
              chain_name: 'bitcoin',
              base_denom: 'sat'
            },
            provider: 'Threshold Network'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/tbtc.svg'
        },
        coingecko_id: 'tbtc',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/tbtc.svg'
          }
        ]
      },
      {
        description:
          'pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets. Stakers of PoS tokens can stake their assets while maintaining the liquidity of these assets. Users earn staking rewards + receive 1:1 pegged staked representative tokens which can be used to generate additional yield.',
        denom_units: [
          {
            denom: '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'pstake',
            exponent: 18,
            aliases: []
          }
        ],
        type_asset: 'erc20',
        address: '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
        base: '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
        display: 'pstake',
        name: 'pSTAKE Finance',
        symbol: 'PSTAKE',
        traces: [
          {
            type: 'liquid-stake',
            counterparty: {
              chain_name: 'persistence',
              base_denom: 'uxprt'
            },
            provider: 'Persistence'
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
    chain_name: 'fantom',
    assets: [
      {
        description:
          "Fantom's native utility token — FTM — powers the entire Fantom blockchain ecosystem. FTM tokens are used for staking, governance, payments, and fees on the network.",
        denom_units: [
          {
            denom: 'wei',
            exponent: 0
          },
          {
            denom: 'ftm',
            exponent: 18
          }
        ],
        base: 'wei',
        name: 'Fantom',
        display: 'ftm',
        symbol: 'FTM',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.svg'
        },
        coingecko_id: 'fantom',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.svg'
          }
        ]
      },
      {
        description: 'ERC20 wrapped version of FTM',
        type_asset: 'erc20',
        address: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
        denom_units: [
          {
            denom: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
            exponent: 0
          },
          {
            denom: 'wftm',
            exponent: 18
          }
        ],
        base: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
        name: 'Wrapped Fantom',
        display: 'wftm',
        symbol: 'WFTM',
        traces: [
          {
            type: 'wrapped',
            counterparty: {
              chain_name: 'fantom',
              base_denom: 'wei'
            },
            chain: {
              contract: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83'
            },
            provider: 'Fantom'
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'fantom',
              base_denom: 'wei'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.svg'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.svg'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'filecoin',
    assets: [
      {
        description: 'Native token of Filecoin',
        denom_units: [
          {
            denom: 'attoFIL',
            exponent: 0,
            aliases: ['fil-wei']
          },
          {
            denom: 'fil',
            exponent: 18
          }
        ],
        base: 'attoFIL',
        name: 'Filecoin',
        display: 'fil',
        symbol: 'FIL',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.svg'
        },
        coingecko_id: 'filecoin',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.svg'
          }
        ]
      },
      {
        description: 'Wrapped Filecoin, ERC20 Wrapper over Filecoin',
        address: '0x60E1773636CF5E4A227d9AC24F20fEca034ee25A',
        denom_units: [
          {
            denom: '0x60E1773636CF5E4A227d9AC24F20fEca034ee25A',
            exponent: 0,
            aliases: ['wfil-wei']
          },
          {
            denom: 'wfil',
            exponent: 18
          }
        ],
        type_asset: 'erc20',
        base: '0x60E1773636CF5E4A227d9AC24F20fEca034ee25A',
        name: 'Wrapped FIL',
        display: 'wfil',
        symbol: 'WFIL',
        traces: [
          {
            type: 'wrapped',
            counterparty: {
              chain_name: 'filecoin',
              base_denom: 'attoFIL'
            },
            provider: 'Filecoin'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'kusama',
    assets: [
      {
        description:
          'The native fee, governance, staking, and bonding token of the Polkadot platform.',
        denom_units: [
          {
            denom: 'Planck',
            exponent: 0
          },
          {
            denom: 'Point',
            exponent: 3
          },
          {
            denom: 'uKSM',
            exponent: 3,
            aliases: ['MicroKSM']
          },
          {
            denom: 'uKSM',
            exponent: 3,
            aliases: ['MilliKSM']
          },
          {
            denom: 'KSM',
            exponent: 12
          }
        ],
        base: 'Planck',
        name: 'Kusama',
        display: 'KSM',
        symbol: 'KSM',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
        },
        coingecko_id: 'kusama',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
          }
        ]
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
        coingecko_id: 'moonbeam',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
          }
        ]
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
        coingecko_id: 'wrapped-moonbeam',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'picasso',
    assets: [
      {
        description: 'The native staking and governance token of Picasso.',
        denom_units: [
          {
            denom: 'ppica',
            exponent: 0
          },
          {
            denom: 'pica',
            exponent: 12
          }
        ],
        base: 'ppica',
        name: 'Pica',
        display: 'pica',
        symbol: 'PICA',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
          }
        ]
      },
      {
        denom_units: [
          {
            denom: '4',
            exponent: 0
          },
          {
            denom: 'ksm',
            exponent: 12
          }
        ],
        base: '4',
        name: 'Kusama',
        display: 'ksm',
        symbol: 'KSM',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'kusama',
              base_denom: 'Planck'
            },
            provider: 'Kusama Parachain'
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'kusama',
              base_denom: 'Planck'
            },
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
        }
      },
      {
        denom_units: [
          {
            denom: '79228162514264337593543950342',
            exponent: 0
          },
          {
            denom: 'dot',
            exponent: 10
          }
        ],
        base: '79228162514264337593543950342',
        name: 'Polkadot',
        display: 'dot',
        symbol: 'DOT',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'composablepolkadot',
              base_denom: '79228162514264337593543950342',
              channel_id: 'channel-15'
            },
            chain: {
              channel_id: 'channel-15',
              path: 'transfer/channel-15/79228162514264337593543950342'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'composablepolkadot',
              base_denom: '79228162514264337593543950342'
            },
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
        }
      },
      {
        denom_units: [
          {
            denom: '130',
            exponent: 0
          },
          {
            denom: 'usdt',
            exponent: 6
          }
        ],
        base: '130',
        name: 'Statemine',
        display: 'usdt',
        symbol: 'USDT',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'statemine',
              base_denom: '130'
            },
            provider: 'Kusama Parachain'
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'statemine',
              base_denom: '130'
            }
          }
        ]
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
        coingecko_id: 'polkadot',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.svg'
        },
        coingecko_id: 'matic-network',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.svg'
          }
        ]
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
        traces: [
          {
            type: 'wrapped',
            counterparty: {
              chain_name: 'polygon',
              base_denom: 'wei'
            },
            provider: 'Polygon'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg'
        },
        coingecko_id: 'wmatic',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg'
          }
        ]
      },
      {
        description:
          'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
        type_asset: 'erc20',
        address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
        denom_units: [
          {
            denom: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
            exponent: 0,
            aliases: ['uusdc']
          },
          {
            denom: 'usdc',
            exponent: 6
          }
        ],
        base: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
        name: 'USD Coin',
        display: 'usdc',
        symbol: 'USDC',
        traces: [
          {
            type: 'additional-mintage',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
            },
            provider: 'Circle'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        },
        coingecko_id: 'usd-coin',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'solana',
    assets: [
      {
        description:
          'Solana (SOL) is the native asset of the Solana blockchain.',
        denom_units: [
          {
            denom: 'Lamport',
            exponent: 0
          },
          {
            denom: 'SOL',
            exponent: 9
          }
        ],
        base: 'Lamport',
        name: 'Solana',
        display: 'SOL',
        symbol: 'SOL',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg'
        },
        coingecko_id: 'solana',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg'
          }
        ]
      },
      {
        description: '',
        type_asset: 'erc20',
        address: 'So11111111111111111111111111111111111111112',
        denom_units: [
          {
            denom: 'So11111111111111111111111111111111111111112',
            exponent: 0
          },
          {
            denom: 'wsol',
            exponent: 9
          }
        ],
        base: 'So11111111111111111111111111111111111111112',
        name: 'Wrapped SOL',
        display: 'wsol',
        symbol: 'WSOL',
        traces: [
          {
            type: 'wrapped',
            counterparty: {
              chain_name: 'solana',
              base_denom: 'Lamport'
            },
            provider: 'Solana'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg'
        },
        coingecko_id: 'wrapped-solana',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg'
          }
        ]
      },
      {
        description: 'The Official Bonk Inu token',
        type_asset: 'erc20',
        address: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
        denom_units: [
          {
            denom: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
            exponent: 0
          },
          {
            denom: 'bonk',
            exponent: 5
          }
        ],
        base: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
        name: 'Bonk',
        display: 'bonk',
        symbol: 'BONK',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bonk.png'
        },
        coingecko_id: 'bonk',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bonk.png'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'statemine',
    assets: [
      {
        denom_units: [
          {
            denom: '130',
            exponent: 0
          },
          {
            denom: 'usdt',
            exponent: 6
          }
        ],
        base: '130',
        name: 'Statemine',
        display: 'usdt',
        symbol: 'USDT',
        coingecko_id: 'tether'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'sui',
    assets: [
      {
        description: 'Sui’s native asset is called SUI.',
        denom_units: [
          {
            denom: '0x2::sui::SUI',
            exponent: 0,
            aliases: ['MIST']
          },
          {
            denom: 'SUI',
            exponent: 9
          }
        ],
        base: '0x2::sui::SUI',
        name: 'Sui',
        display: 'SUI',
        symbol: 'SUI',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/sui/images/sui.svg'
        },
        coingecko_id: 'sui',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/sui/images/sui.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: '',
    assets: [
      {
        description: 'The native staking token of EXAMPLE.',
        denom_units: [
          {
            denom: 'uexp',
            exponent: 0
          },
          {
            denom: 'example',
            exponent: 6
          }
        ],
        base: 'uexample',
        name: 'Example',
        display: 'example',
        symbol: 'EXP',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_template/images/chain_image.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_template/images/chain_image.svg'
        },
        coingecko_id: ''
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: '8ball',
    assets: [
      {
        description: 'The native staking token of 8ball.',
        denom_units: [
          {
            denom: 'uebl',
            exponent: 0
          },
          {
            denom: 'ebl',
            exponent: 6
          }
        ],
        base: 'uebl',
        name: '8ball',
        display: 'ebl',
        symbol: 'EBL',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg'
        },
        coingecko_id: '',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'acrechain',
    assets: [
      {
        description:
          'The native EVM, governance and staking token of the Acrechain',
        denom_units: [
          {
            denom: 'aacre',
            exponent: 0
          },
          {
            denom: 'acre',
            exponent: 18
          }
        ],
        base: 'aacre',
        name: 'Acre',
        display: 'acre',
        symbol: 'ACRE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
        },
        coingecko_id: 'arable-protocol',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
          }
        ]
      },
      {
        description: 'Overcollateralized stable coin for Arable derivatives v1',
        denom_units: [
          {
            denom: 'erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c',
            exponent: 0
          },
          {
            denom: 'arusd',
            exponent: 18
          }
        ],
        base: 'erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c',
        name: 'Arable USD',
        display: 'arusd',
        symbol: 'arUSD',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg'
        },
        coingecko_id: 'arable-usd',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg'
          }
        ]
      },
      {
        description: 'Ciento Exchange Token',
        denom_units: [
          {
            denom: 'erc20/0xAE6D3334989a22A65228732446731438672418F2',
            exponent: 0
          },
          {
            denom: 'cnto',
            exponent: 18
          }
        ],
        base: 'erc20/0xAE6D3334989a22A65228732446731438672418F2',
        name: 'Ciento Token',
        display: 'cnto',
        symbol: 'CNTO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
        },
        coingecko_id: 'agoric',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.svg'
        },
        coingecko_id: 'aioz-network',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.svg'
          }
        ]
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
        coingecko_id: 'akash-network',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
          }
        ]
      },
      {
        description: 'Tether USDt on Akash',
        denom_units: [
          {
            denom:
              'ibc/05DB6975261B805B6F6A157A4386C627F8A70BF8118D411655EFEDCA82BFABA5',
            exponent: 0
          },
          {
            denom: 'usdt',
            exponent: 6
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/05DB6975261B805B6F6A157A4386C627F8A70BF8118D411655EFEDCA82BFABA5',
        name: 'Tether USDt',
        display: 'usdt',
        symbol: 'USDt',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'kava',
              base_denom: 'erc20/tether/usdt',
              channel_id: 'channel-130'
            },
            chain: {
              channel_id: 'channel-2',
              path: 'transfer/channel-2/erc20/tether/usdt'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'kava',
              base_denom: 'erc20/tether/usdt'
            },
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
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
    chain_name: 'archway',
    assets: [
      {
        description: 'The native token of Archway network',
        denom_units: [
          {
            denom: 'aarch',
            exponent: 0
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
        base: 'aarch',
        name: 'Archway',
        display: 'arch',
        symbol: 'ARCH',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
        },
        coingecko_id: 'archway',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
          }
        ]
      },
      {
        description: 'ERIS liquid staked ARCH',
        type_asset: 'cw20',
        address:
          'archway1fwurjg7ah4v7hhs6xsc3wutqpvmahrfhns285s0lt34tgfdhplxq6m8xg5',
        denom_units: [
          {
            denom:
              'cw20:archway1fwurjg7ah4v7hhs6xsc3wutqpvmahrfhns285s0lt34tgfdhplxq6m8xg5',
            exponent: 0
          },
          {
            denom: 'ampARCH',
            exponent: 6
          }
        ],
        base: 'cw20:archway1fwurjg7ah4v7hhs6xsc3wutqpvmahrfhns285s0lt34tgfdhplxq6m8xg5',
        name: 'ERIS Amplified ARCH',
        display: 'ampARCH',
        symbol: 'ampARCH',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/amparch.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/amparch.png'
          }
        ]
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
            denom: 'arkh',
            exponent: 0
          },
          {
            denom: 'ARKH',
            exponent: 6
          }
        ],
        base: 'arkh',
        name: 'Arkh',
        display: 'ARKH',
        symbol: 'ARKH',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.svg'
        },
        coingecko_id: 'assetmantle',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'aura',
    assets: [
      {
        description: 'The native token of Aura Network',
        denom_units: [
          {
            denom: 'uaura',
            exponent: 0
          },
          {
            denom: 'aura',
            exponent: 6
          }
        ],
        base: 'uaura',
        name: 'Aura',
        display: 'aura',
        symbol: 'AURA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg'
        },
        coingecko_id: 'aura-network',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg'
          }
        ]
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
        coingecko_id: 'axelar',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
        },
        coingecko_id: 'axlusdc',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
          }
        ]
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.svg'
          }
        ]
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
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png'
          }
        ]
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
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png'
          }
        ]
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
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg'
          }
        ]
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
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg'
          }
        ]
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
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/axs.svg'
          }
        ]
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
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg'
          }
        ]
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
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg'
          }
        ]
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
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg'
          }
        ]
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
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg'
          }
        ]
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
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg'
          }
        ]
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
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg'
          }
        ]
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
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xcn.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
          }
        ]
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
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg'
          }
        ]
      },
      {
        description: 'Wrapped BNB on Axelar',
        denom_units: [
          {
            denom: 'wbnb-wei',
            exponent: 0
          },
          {
            denom: 'wbnb',
            exponent: 18
          }
        ],
        base: 'wbnb-wei',
        name: 'Wrapped BNB',
        display: 'wbnb',
        symbol: 'WBNB',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'binancesmartchain',
              base_denom: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg'
          }
        ]
      },
      {
        description: 'Binance USD on Axelar.',
        denom_units: [
          {
            denom: 'busd-wei',
            exponent: 0
          },
          {
            denom: 'busd',
            exponent: 18
          }
        ],
        base: 'busd-wei',
        name: 'Binance USD',
        display: 'busd',
        symbol: 'BUSD',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0x4fabb145d64652a948d72533023f6e7a623c7c53'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png'
          }
        ]
      },
      {
        description: 'Wrapped AVAX on Axelar.',
        denom_units: [
          {
            denom: 'wavax-wei',
            exponent: 0
          },
          {
            denom: 'avax',
            exponent: 18
          }
        ],
        base: 'wavax-wei',
        name: 'Wrapped AVAX',
        display: 'avax',
        symbol: 'WAVAX',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'avalanche',
              base_denom: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
          }
        ]
      },
      {
        description: 'Wrapped FTM on Axelar.',
        denom_units: [
          {
            denom: 'wftm-wei',
            exponent: 0
          },
          {
            denom: 'ftm',
            exponent: 18
          }
        ],
        base: 'wftm-wei',
        name: 'Wrapped FTM',
        display: 'ftm',
        symbol: 'WFTM',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'fantom',
              base_denom: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png'
          }
        ]
      },
      {
        description: "Circle's stablecoin from Polygon on Axelar",
        denom_units: [
          {
            denom: 'polygon-uusdc',
            exponent: 0
          },
          {
            denom: 'polygon-usdc',
            exponent: 6
          }
        ],
        base: 'polygon-uusdc',
        name: 'USD Coin from Polygon',
        display: 'polygon-usdc',
        symbol: 'USDC',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'polygon',
              base_denom: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
          }
        ]
      },
      {
        description: "Circle's stablecoin from Avalanche on Axelar",
        denom_units: [
          {
            denom: 'avalanche-uusdc',
            exponent: 0
          },
          {
            denom: 'avalanche-usdc',
            exponent: 6
          }
        ],
        base: 'avalanche-uusdc',
        name: 'USD Coin from Avalanche',
        display: 'avalanche-usdc',
        symbol: 'USDC',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'avalanche',
              base_denom: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
          }
        ]
      },
      {
        description: 'Wrapped FIL on Axelar',
        denom_units: [
          {
            denom: 'wfil-wei',
            exponent: 0
          },
          {
            denom: 'fil',
            exponent: 18
          }
        ],
        base: 'wfil-wei',
        name: 'Wrapped FIL from Filecoin',
        display: 'fil',
        symbol: 'axlFIL',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'filecoin',
              base_denom: '0x60E1773636CF5E4A227d9AC24F20fEca034ee25A'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.svg'
          }
        ]
      },
      {
        description: 'Arbitrum on Axelar',
        denom_units: [
          {
            denom: 'arb-wei',
            exponent: 0
          },
          {
            denom: 'arb',
            exponent: 18
          }
        ],
        base: 'arb-wei',
        name: 'Arbitrum',
        display: 'arb',
        symbol: 'ARB',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'arbitrum',
              base_denom: '0x912CE59144191C1204E64559FE8253a0e49E6548'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg'
          }
        ]
      },
      {
        denom_units: [
          {
            denom: 'pepe-wei',
            exponent: 0,
            aliases: ['0x6982508145454Ce325dDbE47a25d4ec3d2311933']
          },
          {
            denom: 'pepe',
            exponent: 18
          }
        ],
        base: 'pepe-wei',
        name: 'Pepe',
        display: 'pepe',
        symbol: 'PEPE',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0x6982508145454Ce325dDbE47a25d4ec3d2311933'
            },
            provider: 'Axelar'
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'ethereum',
              base_denom: '0x6982508145454Ce325dDbE47a25d4ec3d2311933'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg'
        }
      },
      {
        denom_units: [
          {
            denom: 'cbeth-wei',
            exponent: 0,
            aliases: ['0xbe9895146f7af43049ca1c1ae358b0541ea49704']
          },
          {
            denom: 'cbeth',
            exponent: 18
          }
        ],
        base: 'cbeth-wei',
        name: 'Coinbase Wrapped Staked ETH',
        display: 'cbeth',
        symbol: 'cbETH',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0xbe9895146f7af43049ca1c1ae358b0541ea49704'
            },
            provider: 'Axelar'
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'ethereum',
              base_denom: '0xbe9895146f7af43049ca1c1ae358b0541ea49704'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'reth-wei',
            exponent: 0,
            aliases: ['0xae78736cd615f374d3085123a210448e74fc6393']
          },
          {
            denom: 'reth',
            exponent: 18
          }
        ],
        base: 'reth-wei',
        name: 'Rocket Pool Ether',
        display: 'reth',
        symbol: 'rETH',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0xae78736cd615f374d3085123a210448e74fc6393'
            },
            provider: 'Axelar'
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'ethereum',
              base_denom: '0xae78736cd615f374d3085123a210448e74fc6393'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png'
        }
      },
      {
        denom_units: [
          {
            denom: 'sfrxeth-wei',
            exponent: 0,
            aliases: ['0xac3e018457b222d93114458476f3e3416abbe38f']
          },
          {
            denom: 'sfrxeth',
            exponent: 18
          }
        ],
        base: 'sfrxeth-wei',
        name: 'Staked Frax Ether',
        display: 'sfrxeth',
        symbol: 'sfrxETH',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0xac3e018457b222d93114458476f3e3416abbe38f'
            },
            provider: 'Axelar'
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'ethereum',
              base_denom: '0xac3e018457b222d93114458476f3e3416abbe38f'
            },
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
        }
      },
      {
        denom_units: [
          {
            denom: 'wsteth-wei',
            exponent: 0,
            aliases: ['0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0']
          },
          {
            denom: 'wsteth',
            exponent: 18
          }
        ],
        base: 'wsteth-wei',
        name: 'Wrapped Lido Staked Ether',
        display: 'wsteth',
        symbol: 'wstETH',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'
            },
            provider: 'Axelar'
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'ethereum',
              base_denom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'
            },
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
        }
      },
      {
        denom_units: [
          {
            denom: 'yieldeth-wei',
            exponent: 0,
            aliases: ['0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec']
          },
          {
            denom: 'YieldETH',
            exponent: 18
          }
        ],
        base: 'yieldeth-wei',
        name: 'Real Yield Eth',
        display: 'YieldETH',
        symbol: 'YieldETH',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec'
            },
            provider: 'Axelar'
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'ethereum',
              base_denom: '0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg'
        }
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
        coingecko_id: 'band-protocol',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg'
          }
        ]
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
            exponent: 0
          },
          {
            denom: 'bze',
            exponent: 6
          }
        ],
        base: 'ubze',
        name: 'BeeZee',
        display: 'bze',
        symbol: 'BZE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg'
        },
        coingecko_id: 'bzedge',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg'
          }
        ]
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
        coingecko_id: 'bitcanna',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
          }
        ]
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
        coingecko_id: 'bitsong',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft25B30C386CDDEBD1413D5AE1180956AE9EB3B9F7.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft575B10B0CEE2C164D9ED6A96313496F164A9607C.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft56664FC98A2CF5F4FBAC3566D1A11D891AD88305.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft52EEB0EE509AC546ED92EAC8591F731F213DDD16.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ftE4903ECC861CA45F2C2BC7EAB8255D2E6E87A33A.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft85AE1716C5E39EA6D64BBD7898C3899A7B500626.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft387C1C279D962ED80C09C1D592A92C4275FD7C5D.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft24C9FA4F10B0F235F4A815B15FC774E046A2B2EB.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft7020C2A8E984EEBCBB383E91CD6FBB067BB2272B.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft2DD67F5D99E9A141142B48474FA7B6B3FF00A3FE.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft4B030260D99E3ABE2B604EA2B33BAF3C085CDA12.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ftD4B6290EDEE1EC7B97AB5A1DC6C177EFD08ADCC3.png'
          }
        ]
      },
      {
        description: 'L DON a BitSong Music FanToken',
        denom_units: [
          {
            denom: 'ft347B1612A2B7659913679CF6CD45B8B130C50A00',
            exponent: 0
          },
          {
            denom: 'ldon',
            exponent: 6
          }
        ],
        base: 'ft347B1612A2B7659913679CF6CD45B8B130C50A00',
        name: 'L DON Fantoken',
        display: 'ldon',
        symbol: 'LDON',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft347B1612A2B7659913679CF6CD45B8B130C50A00.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft347B1612A2B7659913679CF6CD45B8B130C50A00.png'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'bluzelle',
    assets: [
      {
        description: 'The native token of Bluzelle',
        denom_units: [
          {
            denom: 'ubnt',
            exponent: 0
          },
          {
            denom: 'bnt',
            exponent: 6,
            aliases: ['blz']
          }
        ],
        base: 'ubnt',
        name: 'Bluzelle',
        display: 'bnt',
        symbol: 'BLZ',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.svg'
        },
        coingecko_id: 'bluzelle',
        keywords: ['bluzelle', 'game'],
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.svg'
          }
        ]
      },
      {
        description: "The ELT token of Bluzelle's Gamma 4 Gaming Ecosystem",
        denom_units: [
          {
            denom: 'uelt',
            exponent: 0
          },
          {
            denom: 'elt',
            exponent: 6
          }
        ],
        base: 'uelt',
        name: 'ELT',
        display: 'elt',
        symbol: 'ELT',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/elt.png'
        },
        coingecko_id: '',
        keywords: ['elt'],
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/elt.png'
          }
        ]
      },
      {
        description: "The game token of Bluzelle's Gamma 4 Gaming Ecosystem",
        denom_units: [
          {
            denom: 'ug4',
            exponent: 0
          },
          {
            denom: 'g4',
            exponent: 6
          }
        ],
        base: 'ug4',
        name: 'G4',
        display: 'g4',
        symbol: 'G4',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/g4.png'
        },
        coingecko_id: '',
        keywords: ['g4'],
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/g4.png'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg'
        },
        coingecko_id: 'bostrom',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg'
          }
        ]
      },
      {
        description: 'The liquid staking token of Bostrom',
        denom_units: [
          {
            denom: 'hydrogen',
            exponent: 0,
            aliases: ['HYDROGEN']
          }
        ],
        base: 'hydrogen',
        name: 'Bostrom Hydrogen',
        display: 'hydrogen',
        symbol: 'HYDROGEN',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg'
        },
        coingecko_id: 'canto',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg'
          }
        ]
      },
      {
        description: 'Tether USDt on Canto',
        denom_units: [
          {
            denom:
              'ibc/FAFF3F7B2FE30447544A27910DF77069763CF25472BFCF63A9E7C81F0AD545AC',
            exponent: 0
          },
          {
            denom: 'usdt',
            exponent: 6
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/FAFF3F7B2FE30447544A27910DF77069763CF25472BFCF63A9E7C81F0AD545AC',
        name: 'Tether USDt',
        display: 'usdt',
        symbol: 'USDt',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'kava',
              base_denom: 'erc20/tether/usdt',
              channel_id: 'channel-87'
            },
            chain: {
              channel_id: 'channel-13',
              path: 'transfer/channel-13/erc20/tether/usdt'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'kava',
              base_denom: 'erc20/tether/usdt'
            },
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
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
    chain_name: 'carbon',
    assets: [
      {
        description: 'The native governance token of Carbon',
        denom_units: [
          {
            denom: 'swth',
            exponent: 0
          },
          {
            denom: 'dswth',
            exponent: 8,
            aliases: ['SWTH']
          }
        ],
        type_asset: 'sdk.coin',
        base: 'swth',
        name: 'Carbon',
        display: 'dswth',
        symbol: 'SWTH',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
        },
        coingecko_id: 'switcheo',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
          }
        ]
      },
      {
        description: 'The native stablecoin of Carbon',
        denom_units: [
          {
            denom: 'usc',
            exponent: 0
          },
          {
            denom: 'dusc',
            exponent: 8,
            aliases: ['USC']
          }
        ],
        type_asset: 'sdk.coin',
        base: 'usc',
        name: 'Carbon USD Coin',
        display: 'dusc',
        symbol: 'USC',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.svg'
        },
        coingecko_id: 'carbon-usd',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.svg'
          }
        ]
      },
      {
        description: 'BNB token on Carbon',
        denom_units: [
          {
            denom: 'bnb.1.6.773edb',
            exponent: 0
          },
          {
            denom: 'bnb',
            exponent: 18,
            aliases: ['BNB']
          }
        ],
        base: 'bnb.1.6.773edb',
        name: 'Binance Coin',
        display: 'bnb',
        symbol: 'BNB',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'binancesmartchain',
              base_denom: 'wei',
              contract: '0xb5D4f343412dC8efb6ff599d790074D0f1e8D430'
            },
            chain: {
              contract: '0xb5D4f343412dC8efb6ff599d790074D0f1e8D430'
            },
            provider: 'PolyNetwork'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg'
          }
        ]
      },
      {
        description: 'bNEO token on Carbon',
        denom_units: [
          {
            denom: 'bneo.1.14.e2e5f6',
            exponent: 0
          },
          {
            denom: 'bneo',
            exponent: 8,
            aliases: ['bNEO']
          }
        ],
        base: 'bneo.1.14.e2e5f6',
        name: 'BurgerNEO',
        display: 'bneo',
        symbol: 'bNEO',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'neo',
              base_denom: '0x48c40d4666f93408be1bef038b6722404d9a4c2a',
              contract: '0x8eb3bdf5ed4ac1516d316c6b1b207a3cf5eb7567'
            },
            chain: {
              contract: '0x8eb3bdf5ed4ac1516d316c6b1b207a3cf5eb7567'
            },
            provider: 'PolyNetwork'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/bneo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/bneo.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/bneo.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/bneo.svg'
          }
        ]
      },
      {
        description: 'BUSD (BEP-20) token on Carbon',
        denom_units: [
          {
            denom: 'busd.1.6.754a80',
            exponent: 0
          },
          {
            denom: 'busd',
            exponent: 18,
            aliases: ['BUSD']
          }
        ],
        base: 'busd.1.6.754a80',
        name: 'BUSD (BEP-20)',
        display: 'busd',
        symbol: 'BUSD',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'binancesmartchain',
              base_denom: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
              contract: '0xb5D4f343412dC8efb6ff599d790074D0f1e8D430'
            },
            chain: {
              contract: '0xb5D4f343412dC8efb6ff599d790074D0f1e8D430'
            },
            provider: 'PolyNetwork'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png'
          }
        ]
      },
      {
        description: 'Carbon Wrapped GLP on Carbon',
        denom_units: [
          {
            denom: 'cglp.1.19.1698d3',
            exponent: 0
          },
          {
            denom: 'cglp',
            exponent: 18,
            aliases: ['CGLP']
          }
        ],
        base: 'cglp.1.19.1698d3',
        name: 'Carbon Wrapped GLP',
        display: 'cglp',
        symbol: 'CGLP',
        traces: [
          {
            type: 'wrapped',
            counterparty: {
              chain_name: 'arbitrum',
              base_denom: '0xab19bdaeb37242fa0f30486195f45b9cf5361b78',
              contract: '0xb1e6f8820826491fcc5519f84ff4e2bdbb6e3cad'
            },
            chain: {
              contract: '0xb1e6f8820826491fcc5519f84ff4e2bdbb6e3cad'
            },
            provider: 'PolyNetwork'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/cglp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/cglp.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/cglp.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/cglp.svg'
          }
        ]
      },
      {
        description: 'Grouped USD on Carbon',
        denom_units: [
          {
            denom: 'cgt/1',
            exponent: 0
          },
          {
            denom: 'usd',
            exponent: 18,
            aliases: ['USD']
          }
        ],
        base: 'cgt/1',
        name: 'Carbon Grouped USD',
        display: 'usd',
        symbol: 'USD',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.svg'
          }
        ]
      },
      {
        description: 'ETH (Arbitrum) token on Carbon',
        denom_units: [
          {
            denom: 'eth.1.19.c3b805',
            exponent: 0
          },
          {
            denom: 'eth',
            exponent: 18,
            aliases: ['ETH']
          }
        ],
        base: 'eth.1.19.c3b805',
        name: 'Ethereum (Arbitrum)',
        display: 'eth',
        symbol: 'ETH',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'arbitrum',
              base_denom: 'wei',
              contract: '0xb1e6f8820826491fcc5519f84ff4e2bdbb6e3cad'
            },
            chain: {
              contract: '0xb1e6f8820826491fcc5519f84ff4e2bdbb6e3cad'
            },
            provider: 'PolyNetwork'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
          }
        ]
      },
      {
        description: 'ETH (ERC20) token on Carbon',
        denom_units: [
          {
            denom: 'eth.1.2.942d87',
            exponent: 0
          },
          {
            denom: 'eth',
            exponent: 18,
            aliases: ['ETH']
          }
        ],
        base: 'eth.1.2.942d87',
        name: 'Ethereum (ERC20)',
        display: 'eth',
        symbol: 'ETH',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: 'wei',
              contract: '0x9a016ce184a22dbf6c17daa59eb7d3140dbd1c54'
            },
            chain: {
              contract: '0x9a016ce184a22dbf6c17daa59eb7d3140dbd1c54'
            },
            provider: 'PolyNetwork'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
          }
        ]
      },
      {
        description: 'STARS token on Carbon',
        denom_units: [
          {
            denom:
              'ibc/07FA7831E1920D0C87C9388F86B0108677F6ED0C9DE7E4063F05ED675192405C',
            exponent: 0
          },
          {
            denom: 'stars',
            exponent: 6,
            aliases: ['STARS']
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/07FA7831E1920D0C87C9388F86B0108677F6ED0C9DE7E4063F05ED675192405C',
        name: 'Stargaze Staking Coin',
        display: 'stars',
        symbol: 'STARS',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'stargaze',
              base_denom: 'ustars',
              channel_id: 'channel-123'
            },
            chain: {
              channel_id: 'channel-15',
              path: 'transfer/channel-15/ustars'
            }
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png'
          }
        ]
      },
      {
        description: 'LUNA token on Carbon',
        denom_units: [
          {
            denom:
              'ibc/2B58B8C147E8718EECCB3713271DF46DEE8A3A00A27242628604E31C2F370EF5',
            exponent: 0
          },
          {
            denom: 'luna',
            exponent: 6,
            aliases: ['LUNA']
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/2B58B8C147E8718EECCB3713271DF46DEE8A3A00A27242628604E31C2F370EF5',
        name: 'Terra Staking Coin',
        display: 'luna',
        symbol: 'LUNA',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'terra2',
              base_denom: 'uluna',
              channel_id: 'channel-36'
            },
            chain: {
              channel_id: 'channel-12',
              path: 'transfer/channel-12/uluna'
            }
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png'
          }
        ]
      },
      {
        description: 'STRD token on Carbon',
        denom_units: [
          {
            denom:
              'ibc/3552CECB7BCE1891DB6070D37EC6E954C972B1400141308FCD85FD148BD06DE5',
            exponent: 0
          },
          {
            denom: 'strd',
            exponent: 6,
            aliases: ['STRD']
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/3552CECB7BCE1891DB6070D37EC6E954C972B1400141308FCD85FD148BD06DE5',
        name: 'Stride',
        display: 'strd',
        symbol: 'STRD',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'stride',
              base_denom: 'ustrd',
              channel_id: 'channel-47'
            },
            chain: {
              channel_id: 'channel-8',
              path: 'transfer/channel-8/ustrd'
            }
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
          }
        ]
      },
      {
        description: 'EVMOS token on Carbon',
        denom_units: [
          {
            denom:
              'ibc/35E771B8682D828173F4B795F6C307780F96DC64D6F914FAE4CC9B4666F66364',
            exponent: 0
          },
          {
            denom: 'evmos',
            exponent: 18,
            aliases: ['EVMOS']
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/35E771B8682D828173F4B795F6C307780F96DC64D6F914FAE4CC9B4666F66364',
        name: 'Evmos',
        display: 'evmos',
        symbol: 'EVMOS',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'evmos',
              base_denom: 'aevmos',
              channel_id: 'channel-23'
            },
            chain: {
              channel_id: 'channel-6',
              path: 'transfer/channel-6/aevmos'
            }
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
          }
        ]
      },
      {
        description: 'IRIS token on Carbon',
        denom_units: [
          {
            denom:
              'ibc/4E06CF24FEBFB3F5AF645377DCC0B70AA6183BAF6B918B8B6243FCDEB7D38118',
            exponent: 0
          },
          {
            denom: 'iris',
            exponent: 6,
            aliases: ['IRIS']
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/4E06CF24FEBFB3F5AF645377DCC0B70AA6183BAF6B918B8B6243FCDEB7D38118',
        name: 'IRIS Hub Staking Coin',
        display: 'iris',
        symbol: 'IRIS',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'irisnet',
              base_denom: 'uiris',
              channel_id: 'channel-68'
            },
            chain: {
              channel_id: 'channel-28',
              path: 'transfer/channel-28/uiris'
            }
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg'
          }
        ]
      },
      {
        description: 'KUJI token on Carbon',
        denom_units: [
          {
            denom:
              'ibc/662914D0C1CEBCB070C68F061D035E8B10A07C79AB286E7342C85F3BE74612C5',
            exponent: 0
          },
          {
            denom: 'kuji',
            exponent: 6,
            aliases: ['KUJI']
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/662914D0C1CEBCB070C68F061D035E8B10A07C79AB286E7342C85F3BE74612C5',
        name: 'Kujira',
        display: 'kuji',
        symbol: 'KUJI',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'kujira',
              base_denom: 'ukuji',
              channel_id: 'channel-46'
            },
            chain: {
              channel_id: 'channel-9',
              path: 'transfer/channel-9/ukuji'
            }
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png'
          }
        ]
      },
      {
        description: 'stOSMO token on Carbon',
        denom_units: [
          {
            denom:
              'ibc/75249A18DEFBEFE55F83B1C70CAD234DF164F174C6BC51682EE92C2C81C18C93',
            exponent: 0
          },
          {
            denom: 'stosmo',
            exponent: 6,
            aliases: ['stOSMO']
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/75249A18DEFBEFE55F83B1C70CAD234DF164F174C6BC51682EE92C2C81C18C93',
        name: 'Stride Staked OSMO',
        display: 'stosmo',
        symbol: 'stOSMO',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'stride',
              base_denom: 'stuosmo',
              channel_id: 'channel-47'
            },
            chain: {
              channel_id: 'channel-8',
              path: 'transfer/channel-8/stuosmo'
            }
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
          }
        ]
      },
      {
        description: 'CANTO token on Carbon',
        denom_units: [
          {
            denom:
              'ibc/92E974290AF9E2BC3AEEEC35305C8FD76AC5A22A74CF8D91270FDF5A1C41E861',
            exponent: 0
          },
          {
            denom: 'canto',
            exponent: 18,
            aliases: ['CANTO']
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/92E974290AF9E2BC3AEEEC35305C8FD76AC5A22A74CF8D91270FDF5A1C41E861',
        name: 'Canto',
        display: 'canto',
        symbol: 'CANTO',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'canto',
              base_denom: 'acanto',
              channel_id: 'channel-6'
            },
            chain: {
              channel_id: 'channel-18',
              path: 'transfer/channel-18/acanto'
            }
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png'
          }
        ]
      },
      {
        description: 'Cosmos governance token on Carbon',
        denom_units: [
          {
            denom:
              'ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701',
            exponent: 0
          },
          {
            denom: 'atom',
            exponent: 6,
            aliases: ['ATOM']
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701',
        name: 'Cosmos',
        display: 'atom',
        symbol: 'ATOM',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'cosmoshub',
              base_denom: 'uatom',
              channel_id: 'channel-342'
            },
            chain: {
              channel_id: 'channel-3',
              path: 'transfer/channel-3/uatom'
            }
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
          }
        ]
      },
      {
        description: 'stATOM token on Carbon',
        denom_units: [
          {
            denom:
              'ibc/B7864B03E1B9FD4F049243E92ABD691586F682137037A9F3FCA5222815620B3C',
            exponent: 0
          },
          {
            denom: 'statom',
            exponent: 6,
            aliases: ['stATOM']
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/B7864B03E1B9FD4F049243E92ABD691586F682137037A9F3FCA5222815620B3C',
        name: 'Stride Staked ATOM',
        display: 'statom',
        symbol: 'stATOM',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'stride',
              base_denom: 'stuatom',
              channel_id: 'channel-47'
            },
            chain: {
              channel_id: 'channel-8',
              path: 'transfer/channel-8/stuatom'
            }
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
          }
        ]
      },
      {
        description: 'OSMO token on Carbon',
        denom_units: [
          {
            denom:
              'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
            exponent: 0
          },
          {
            denom: 'osmo',
            exponent: 6,
            aliases: ['OSMO']
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
        name: 'Osmosis',
        display: 'osmo',
        symbol: 'OSMO',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'osmosis',
              base_denom: 'uosmo',
              channel_id: 'channel-188'
            },
            chain: {
              channel_id: 'channel-0',
              path: 'transfer/channel-0/uosmo'
            }
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
          }
        ]
      },
      {
        description: 'USDC (ERC20) token on Carbon',
        denom_units: [
          {
            denom: 'usdc.1.2.343151',
            exponent: 0
          },
          {
            denom: 'usdc',
            exponent: 6,
            aliases: ['USDC']
          }
        ],
        base: 'usdc.1.2.343151',
        name: 'Circle USD',
        display: 'usdc',
        symbol: 'USDC',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
              contract: '0x9a016ce184a22dbf6c17daa59eb7d3140dbd1c54'
            },
            chain: {
              contract: '0x9a016ce184a22dbf6c17daa59eb7d3140dbd1c54'
            },
            provider: 'PolyNetwork'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
          }
        ]
      },
      {
        description: 'USD Coin (BEP-20) token on Carbon',
        denom_units: [
          {
            denom: 'usdc.1.6.53ff75',
            exponent: 0
          },
          {
            denom: 'usdc',
            exponent: 18,
            aliases: ['USDC']
          }
        ],
        base: 'usdc.1.6.53ff75',
        name: 'USD Coin (BEP-20)',
        display: 'usdc',
        symbol: 'USDC',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'binancesmartchain',
              base_denom: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
              contract: '0xb5D4f343412dC8efb6ff599d790074D0f1e8D430'
            },
            chain: {
              contract: '0xb5D4f343412dC8efb6ff599d790074D0f1e8D430'
            },
            provider: 'PolyNetwork'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
          }
        ]
      },
      {
        description: 'ZIL token on Carbon',
        denom_units: [
          {
            denom: 'zil.1.18.1a4a06',
            exponent: 0
          },
          {
            denom: 'zil',
            exponent: 12,
            aliases: ['ZIL']
          }
        ],
        base: 'zil.1.18.1a4a06',
        name: 'Zilliqa',
        display: 'zil',
        symbol: 'ZIL',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'zilliqa',
              base_denom: 'wei',
              contract: '0xd73c6b871b4d0e130d64581993b745fc938a5be7'
            },
            chain: {
              contract: '0xd73c6b871b4d0e130d64581993b745fc938a5be7'
            },
            provider: 'PolyNetwork'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/zil.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/zil.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/zil.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/zil.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'celestia',
    assets: [
      {
        description: '',
        denom_units: [
          {
            denom: 'utia',
            exponent: 0
          },
          {
            denom: 'tia',
            exponent: 6
          }
        ],
        base: 'utia',
        name: 'Celestia',
        display: 'tia',
        symbol: 'TIA',
        coingecko_id: 'celestia',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.svg'
        },
        coingecko_id: 'cerberus-2',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'chain4energy',
    assets: [
      {
        description: 'The native token of Chain4Energy',
        denom_units: [
          {
            denom: 'uc4e',
            exponent: 0
          },
          {
            denom: 'c4e',
            exponent: 6
          }
        ],
        base: 'uc4e',
        name: 'Chain4Energy',
        display: 'c4e',
        symbol: 'C4E',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chain4energy/images/c4e.png'
        },
        coingecko_id: '',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chain4energy/images/c4e.png'
          }
        ]
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
        coingecko_id: 'cheqd-network',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
        },
        coingecko_id: 'chihuahua-token',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'chimba',
    assets: [
      {
        description: 'The first blokchain in colombia',
        denom_units: [
          {
            denom: 'ucmba',
            exponent: 0
          },
          {
            denom: 'chimba',
            exponent: 6
          }
        ],
        base: 'ucmba',
        name: 'Chimba',
        display: 'chimba',
        symbol: 'CMBA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.svg'
        },
        coingecko_id: '',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.svg'
          }
        ]
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
        coingecko_id: 'cht',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chronicnetwork/images/cht.png'
          }
        ]
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
        coingecko_id: 'cgas',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chronicnetwork/images/cgas.png'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
        },
        coingecko_id: 'comdex',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
          }
        ]
      },
      {
        description: 'Governance Token of Harbor protocol on Comdex network',
        denom_units: [
          {
            denom: 'uharbor',
            exponent: 0
          },
          {
            denom: 'harbor',
            exponent: 6
          }
        ],
        base: 'uharbor',
        name: 'Harbor',
        display: 'harbor',
        symbol: 'HARBOR',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
        },
        coingecko_id: '',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
          }
        ]
      },
      {
        description: 'Stable Token of Harbor protocol on Comdex network',
        denom_units: [
          {
            denom: 'ucmst',
            exponent: 0
          },
          {
            denom: 'cmst',
            exponent: 6
          }
        ],
        base: 'ucmst',
        name: 'CMST',
        display: 'cmst',
        symbol: 'CMST',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
        },
        coingecko_id: 'composite',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.svg'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/ccc.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/ccc.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'composable',
    assets: [
      {
        description: 'The native staking and governance token of Composable.',
        denom_units: [
          {
            denom: 'ppica',
            exponent: 0
          },
          {
            denom: 'pica',
            exponent: 12
          }
        ],
        base: 'ppica',
        name: 'Pica',
        display: 'pica',
        symbol: 'PICA',
        coingecko_id: 'picasso',
        traces: [
          {
            type: 'additional-mintage',
            counterparty: {
              chain_name: 'picasso',
              base_denom: 'ppica'
            },
            provider: 'Composable Finance'
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'picasso',
              base_denom: 'ppica'
            },
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
        }
      },
      {
        description:
          'The native staking and governance token of Kusama Relay Chain.',
        denom_units: [
          {
            denom:
              'ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9',
            exponent: 0,
            aliases: ['4']
          },
          {
            denom: 'ksm',
            exponent: 12
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9',
        name: 'KSM',
        display: 'ksm',
        symbol: 'KSM',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'picasso',
              base_denom: '4',
              channel_id: 'channel-17'
            },
            chain: {
              channel_id: 'channel-2',
              path: 'transfer/channel-2/4'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'picasso',
              base_denom: '4'
            },
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
        }
      },
      {
        description:
          'The native staking and governance token of Polkadot Relay Chain.',
        denom_units: [
          {
            denom:
              'ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366',
            exponent: 0,
            aliases: ['79228162514264337593543950342']
          },
          {
            denom: 'dot',
            exponent: 10
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366',
        name: 'DOT',
        display: 'dot',
        symbol: 'DOT',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'picasso',
              base_denom: '79228162514264337593543950342',
              channel_id: 'channel-17'
            },
            chain: {
              channel_id: 'channel-2',
              path: 'transfer/channel-2/transfer/channel-15/79228162514264337593543950342'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'picasso',
              base_denom: '79228162514264337593543950342'
            },
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
        }
      },
      {
        description:
          'The native staking and governance token of Statemine parachain.',
        denom_units: [
          {
            denom:
              'ibc/F3EC9F834E57DF704FA3AEAF14E8391C2E58397FE56960AD70E67562990D8265',
            exponent: 0,
            aliases: ['130']
          },
          {
            denom: 'usdt',
            exponent: 6
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/F3EC9F834E57DF704FA3AEAF14E8391C2E58397FE56960AD70E67562990D8265',
        name: 'USDT',
        display: 'usdt',
        symbol: 'USDT',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'picasso',
              base_denom: '130',
              channel_id: 'channel-17'
            },
            chain: {
              channel_id: 'channel-2',
              path: 'transfer/channel-2/130'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'picasso',
              base_denom: '130'
            }
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'coreum',
    assets: [
      {
        description: 'The native token of Coreum',
        denom_units: [
          {
            denom: 'ucore',
            exponent: 0
          },
          {
            denom: 'core',
            exponent: 6
          }
        ],
        base: 'ucore',
        name: 'Coreum',
        display: 'core',
        symbol: 'COREUM',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
        },
        coingecko_id: 'coreum',
        keywords: ['dex', 'staking', 'wasm', 'assets', 'nft'],
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
          }
        ]
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
        name: 'Cosmos Hub Atom',
        display: 'atom',
        symbol: 'ATOM',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        },
        coingecko_id: 'cosmos',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
          }
        ]
      },
      {
        description: 'Tether USDt on the Cosmos Hub',
        denom_units: [
          {
            denom:
              'ibc/F04D72CF9B5D9C849BB278B691CDFA2241813327430EC9CDC83F8F4CA4CDC2B0',
            exponent: 0
          },
          {
            denom: 'usdt',
            exponent: 6
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/F04D72CF9B5D9C849BB278B691CDFA2241813327430EC9CDC83F8F4CA4CDC2B0',
        name: 'Tether USDt',
        display: 'usdt',
        symbol: 'USDt',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'kava',
              base_denom: 'erc20/tether/usdt',
              channel_id: 'channel-0'
            },
            chain: {
              channel_id: 'channel-277',
              path: 'transfer/channel-277/erc20/tether/usdt'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'kava',
              base_denom: 'erc20/tether/usdt'
            },
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }
      },
      {
        description: 'FX on Cosmos Hub',
        denom_units: [
          {
            denom:
              'ibc/4925E6ABA571A44D2BE0286D2D29AF42A294D0FF2BB16490149A1B26EAD33729',
            exponent: 0,
            aliases: ['FX']
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/4925E6ABA571A44D2BE0286D2D29AF42A294D0FF2BB16490149A1B26EAD33729',
        name: 'Function X',
        display: 'FX',
        symbol: 'FX',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'fxcore',
              base_denom: 'FX',
              channel_id: 'channel-10'
            },
            chain: {
              channel_id: 'channel-585',
              path: 'transfer/channel-585/FX'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'fxcore',
              base_denom: 'FX'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
        }
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
            exponent: 0
          },
          {
            denom: 'cre',
            exponent: 6
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
        coingecko_id: 'crescent-network',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
          }
        ]
      },
      {
        description: 'The bonded token of Crescent',
        denom_units: [
          {
            denom: 'ubcre',
            exponent: 0
          },
          {
            denom: 'bcre',
            exponent: 6
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
        coingecko_id: 'liquid-staking-crescent',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
        },
        coingecko_id: 'crypto-com-chain',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
          }
        ]
      },
      {
        description: 'Tether USDt on Cronos',
        denom_units: [
          {
            denom:
              'ibc/9106F2626880DF7FAD30621F355423B2A7523D8E2274475F009644D708A90682',
            exponent: 0
          },
          {
            denom: 'usdt',
            exponent: 6
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/9106F2626880DF7FAD30621F355423B2A7523D8E2274475F009644D708A90682',
        name: 'Tether USDt',
        display: 'usdt',
        symbol: 'USDt',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'kava',
              base_denom: 'erc20/tether/usdt',
              channel_id: 'channel-125'
            },
            chain: {
              channel_id: 'channel-11',
              path: 'transfer/channel-11/erc20/tether/usdt'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'kava',
              base_denom: 'erc20/tether/usdt'
            },
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
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
    chain_name: 'cryptoorgchain',
    assets: [
      {
        description:
          'CRO is the native token of the Crypto.org Chain, referred to as Native CRO.',
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
        },
        coingecko_id: 'crypto-com-chain',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
          }
        ]
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
            exponent: 18
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
        coingecko_id: 'cudos',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.svg'
          }
        ]
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
            exponent: 0
          },
          {
            denom: 'dec',
            exponent: 6
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
        coingecko_id: 'decentr',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg'
          }
        ]
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
            exponent: 0
          },
          {
            denom: 'dsm',
            exponent: 6
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
        coingecko_id: 'desmos',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg'
          }
        ]
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
        coingecko_id: 'dig-chain',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'doravota',
    assets: [
      {
        description:
          'The native staking and governance token of the Theta testnet version of the Dora Vota.',
        denom_units: [
          {
            denom: 'peaka',
            exponent: 0
          },
          {
            denom: 'DORA',
            exponent: 18
          }
        ],
        base: 'peaka',
        name: 'Dora Vota',
        display: 'DORA',
        symbol: 'DORA',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg'
          },
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/doravota.png'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'dydx',
    assets: [
      {
        description: 'The native staking token of dYdX Protocol.',
        denom_units: [
          {
            denom: 'adydx',
            exponent: 0
          },
          {
            denom: 'dydx',
            exponent: 18
          }
        ],
        base: 'adydx',
        name: 'dYdX',
        display: 'dydx',
        symbol: 'DYDX',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
        },
        coingecko_id: 'dydx',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
          },
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg',
            theme: {
              circle: true
            }
          }
        ]
      },
      {
        description: 'Noble USDC on dYdX Protocol.',
        denom_units: [
          {
            denom:
              'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
            exponent: 0
          },
          {
            denom: 'usdc',
            exponent: 6
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
        name: 'Noble USDC',
        display: 'usdc',
        symbol: 'USDC',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'noble',
              base_denom: 'uusdc',
              channel_id: 'channel-33'
            },
            chain: {
              channel_id: 'channel-0',
              path: 'transfer/channel-0/uusdc'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'noble',
              base_denom: 'uusdc'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'dyson',
    assets: [
      {
        description:
          'The native staking and governance token of the Dyson Protocol',
        denom_units: [
          {
            denom: 'dys',
            exponent: 0
          }
        ],
        base: 'dys',
        name: 'Dys',
        display: 'dys',
        symbol: 'DYS',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.svg'
        },
        coingecko_id: '',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.svg'
          }
        ]
      },
      {
        denom_units: [
          {
            denom:
              'ibc/13B2C536BB057AC79D5616B8EA1B9540EC1F2170718CAFF6F0083C966FFFED0B',
            exponent: 0,
            aliases: ['uosmo']
          },
          {
            denom: 'osmo',
            exponent: 6
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/13B2C536BB057AC79D5616B8EA1B9540EC1F2170718CAFF6F0083C966FFFED0B',
        name: 'Osmosis',
        display: 'osmo',
        description: 'The native token of Osmosis',
        symbol: 'OSMO',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'osmosis',
              base_denom: 'uosmo',
              channel_id: 'channel-526'
            },
            chain: {
              channel_id: 'channel-2',
              path: 'transfer/channel-2/uosmo'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'osmosis',
              base_denom: 'uosmo'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }
      },
      {
        denom_units: [
          {
            denom:
              'ibc/9BF31153F7E37F687C75A2F310E7A4DB6E0512B065F709B5EB69FE828133AFAC',
            exponent: 0,
            aliases: ['wbtc-satoshi']
          },
          {
            denom: 'wbtc',
            exponent: 8
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/9BF31153F7E37F687C75A2F310E7A4DB6E0512B065F709B5EB69FE828133AFAC',
        name: 'Wrapped Bitcoin',
        display: 'wbtc',
        symbol: 'WBTC',
        description: 'Wrapped Bitcoin on Axelar on Osmosis',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'osmosis',
              base_denom:
                'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F',
              channel_id: 'channel-526'
            },
            chain: {
              channel_id: 'channel-2',
              path: 'transfer/channel-2/transfer/channel-208/wbtc-satoshi'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'osmosis',
              base_denom:
                'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png'
        }
      },
      {
        denom_units: [
          {
            denom:
              'ibc/13DF61376C08483555C6D4C9203612086A1B23218EB5EBDBE609EEC7EFF2D82D',
            exponent: 0,
            aliases: ['uusdc']
          },
          {
            denom: 'usdc',
            exponent: 6
          }
        ],
        type_asset: 'ics20',
        description: "Circle's stablecoin on Axelar on Osmosis",
        base: 'ibc/13DF61376C08483555C6D4C9203612086A1B23218EB5EBDBE609EEC7EFF2D82D',
        name: 'USD Coin',
        display: 'usdc',
        symbol: 'USDC',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'osmosis',
              base_denom:
                'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858',
              channel_id: 'channel-526'
            },
            chain: {
              channel_id: 'channel-2',
              path: 'transfer/channel-2/transfer/channel-208/uusdc'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'osmosis',
              base_denom:
                'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
        }
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/ech.svg'
        },
        coingecko_id: 'echelon',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/ech.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg'
        },
        coingecko_id: 'e-money',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg'
        },
        coingecko_id: 'e-money-eur',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg'
          }
        ]
      },
      {
        description:
          'e-Money CHF stablecoin. Audited and backed by fiat CHF deposits and government bonds.',
        denom_units: [
          {
            denom: 'echf',
            exponent: 0
          },
          {
            denom: 'echf',
            exponent: 6
          }
        ],
        base: 'echf',
        name: 'e-Money CHF',
        display: 'chf',
        symbol: 'ECHF',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.svg'
        },
        coingecko_id: '',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.svg'
          }
        ]
      },
      {
        description:
          'e-Money NOK stablecoin. Audited and backed by fiat NOK deposits and government bonds.',
        denom_units: [
          {
            denom: 'enok',
            exponent: 0
          },
          {
            denom: 'enok',
            exponent: 6
          }
        ],
        base: 'enok',
        name: 'e-Money NOK',
        display: 'nok',
        symbol: 'ENOK',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.svg'
        },
        coingecko_id: '',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.svg'
          }
        ]
      },
      {
        description:
          'e-Money DKK stablecoin. Audited and backed by fiat DKK deposits and government bonds.',
        denom_units: [
          {
            denom: 'edkk',
            exponent: 0
          },
          {
            denom: 'edkk',
            exponent: 6
          }
        ],
        base: 'edkk',
        name: 'e-Money DKK',
        display: 'dkk',
        symbol: 'EDKK',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.svg'
        },
        coingecko_id: '',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.svg'
          }
        ]
      },
      {
        description:
          'e-Money SEK stablecoin. Audited and backed by fiat SEK deposits and government bonds.',
        denom_units: [
          {
            denom: 'esek',
            exponent: 0
          },
          {
            denom: 'esek',
            exponent: 6
          }
        ],
        base: 'esek',
        name: 'e-Money SEK',
        display: 'sek',
        symbol: 'ESEK',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.svg'
        },
        coingecko_id: '',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'empowerchain',
    assets: [
      {
        description: 'The native staking and governance token of Empower.',
        denom_units: [
          {
            denom: 'umpwr',
            exponent: 0
          },
          {
            denom: 'mpwr',
            exponent: 6
          }
        ],
        base: 'umpwr',
        name: 'MPWR',
        display: 'mpwr',
        symbol: 'MPWR',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
        },
        coingecko_id: 'evmos',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
          }
        ]
      },
      {
        description: 'Tether USDt on Evmos',
        denom_units: [
          {
            denom:
              'ibc/95F4898F70B1E3765715808C57E955034419200A7BB6DDECBEAA5FD3AA3DF7D5',
            exponent: 0
          },
          {
            denom: 'usdt',
            exponent: 6
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/95F4898F70B1E3765715808C57E955034419200A7BB6DDECBEAA5FD3AA3DF7D5',
        name: 'Tether USDt',
        display: 'usdt',
        symbol: 'USDt',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'kava',
              base_denom: 'erc20/tether/usdt',
              channel_id: 'channel-117'
            },
            chain: {
              channel_id: 'channel-83',
              path: 'transfer/channel-83/erc20/tether/usdt'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'kava',
              base_denom: 'erc20/tether/usdt'
            },
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }
      },
      {
        description: 'The token of Neokingdom DAO.',
        denom_units: [
          {
            denom: 'erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9',
            exponent: 0
          },
          {
            denom: 'neok',
            exponent: 18
          }
        ],
        base: 'erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9',
        name: 'Neokingdom DAO',
        display: 'neok',
        symbol: 'NEOK',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg'
          }
        ]
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
        coingecko_id: 'fetch-ai',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/mobx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/mobx.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/mobx.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/mobx.svg'
          }
        ]
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
        coingecko_id: 'firmachain',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'furya',
    assets: [
      {
        description: 'The native token of Furya',
        denom_units: [
          {
            denom: 'ufury',
            exponent: 0
          },
          {
            denom: 'fury',
            exponent: 6
          }
        ],
        base: 'ufury',
        name: 'Furya',
        display: 'fury',
        symbol: 'FURY',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'fxcore',
    assets: [
      {
        description: 'The native staking token of the Function X',
        denom_units: [
          {
            denom: 'FX',
            exponent: 0
          },
          {
            denom: 'WFX',
            exponent: 18
          }
        ],
        base: 'FX',
        name: 'Function X',
        display: 'WFX',
        symbol: 'FX',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
        },
        coingecko_id: 'fx-coin',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'gateway',
    assets: [
      {
        description: 'The native fee token of Gateway.',
        denom_units: [
          {
            denom: 'utest',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'test',
            exponent: 6,
            aliases: []
          }
        ],
        type_asset: 'sdk.coin',
        base: 'utest',
        name: 'Test',
        display: 'test',
        symbol: 'TEST'
      },
      {
        description: 'the native staking token of Gateway.',
        denom_units: [
          {
            denom: 'uworm',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'worm',
            exponent: 6,
            aliases: []
          }
        ],
        type_asset: 'sdk.coin',
        base: 'uworm',
        name: 'Worm',
        display: 'worm',
        symbol: 'WORM'
      },
      {
        description:
          'Sui (Wormhole), SUI, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh',
        denom_units: [
          {
            denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'wormhole/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh/8',
            exponent: 8,
            aliases: []
          }
        ],
        address:
          'wormhole19hlynxzedrlqv99v6qscww7d3crhl86qtd0vprpltg5g9xx6jk9q6ya33y',
        base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh',
        display: 'wormhole/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh/8',
        name: 'Sui (Wormhole)',
        symbol: 'SUI',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'sui',
              base_denom: '0x2::sui::SUI'
            },
            provider: 'Wormhole'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/sui/images/sui.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/sui/images/sui.svg'
          }
        ]
      },
      {
        description:
          'Wrapped Ether (Wormhole), WETH, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp',
        denom_units: [
          {
            denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'wormhole/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp/8',
            exponent: 8,
            aliases: []
          }
        ],
        address:
          'wormhole18csycs4vm6varkp00apuqlsm7v4twg8jsljk8wfdd7cghr7g4rtslwqndm',
        base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp',
        display: 'wormhole/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp/8',
        name: 'Wrapped Ether (Wormhole)',
        symbol: 'WETH',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
            },
            provider: 'Wormhole'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
          }
        ]
      },
      {
        description:
          'Wrapped liquid staked Ether 2.0 (Wormhole), wstETH, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5TSQTEhJ5Q6r1YqCmCxTRSPiV2pGx5rZUQf6g2XH4e1b',
        denom_units: [
          {
            denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5TSQTEhJ5Q6r1YqCmCxTRSPiV2pGx5rZUQf6g2XH4e1b',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'wormhole/5TSQTEhJ5Q6r1YqCmCxTRSPiV2pGx5rZUQf6g2XH4e1b/8',
            exponent: 8,
            aliases: []
          }
        ],
        address:
          'wormhole1gg6f95cymcfrfzhpek7cf5wl53t5kng52cd2m0krgdlu8k58vd8qezy8pt',
        base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5TSQTEhJ5Q6r1YqCmCxTRSPiV2pGx5rZUQf6g2XH4e1b',
        display: 'wormhole/5TSQTEhJ5Q6r1YqCmCxTRSPiV2pGx5rZUQf6g2XH4e1b/8',
        name: 'Wrapped liquid staked Ether 2.0 (Wormhole)',
        symbol: 'wstETH',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'
            },
            provider: 'Wormhole'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
          }
        ]
      },
      {
        description:
          'Aptos Coin (Wormhole), APT, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r',
        denom_units: [
          {
            denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'wormhole/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r/8',
            exponent: 8,
            aliases: []
          }
        ],
        address:
          'wormhole1f9sxjn0qu8xylcpzlvnhrefnatndqxnrajfrnr5h97hegnmsdqhsh6juc0',
        base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r',
        display: 'wormhole/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r/8',
        name: 'Aptos Coin (Wormhole)',
        symbol: 'APT',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'aptos',
              base_denom: '0x1::aptos_coin::AptosCoin'
            },
            provider: 'Wormhole'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/aptos.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/aptos.svg'
          }
        ]
      },
      {
        description:
          'Tether USD (Wormhole), USDT, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi',
        denom_units: [
          {
            denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'wormhole/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi/6',
            exponent: 6,
            aliases: []
          }
        ],
        address:
          'wormhole1w27ekqvvtzfanfxnkw4jx2f8gdfeqwd3drkee3e64xat6phwjg0savgmhw',
        base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi',
        display: 'wormhole/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi/6',
        name: 'Tether USD (Wormhole)',
        symbol: 'USDT',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0xdAC17F958D2ee523a2206206994597C13D831ec7'
            },
            provider: 'Wormhole'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
          }
        ]
      },
      {
        description:
          'Wrapped SOL (Wormhole), SOL, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA',
        denom_units: [
          {
            denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'wormhole/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA/8',
            exponent: 8,
            aliases: []
          }
        ],
        address:
          'wormhole1wn625s4jcmvk0szpl85rj5azkfc6suyvf75q6vrddscjdphtve8sca0pvl',
        base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA',
        display: 'wormhole/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA/8',
        name: 'Wrapped SOL (Wormhole)',
        symbol: 'SOL',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'solana',
              base_denom: 'So11111111111111111111111111111111111111112'
            },
            provider: 'Wormhole'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg'
          }
        ]
      },
      {
        description:
          'Bonk (Wormhole), Bonk, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR',
        denom_units: [
          {
            denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'wormhole/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR/5',
            exponent: 5,
            aliases: []
          }
        ],
        address:
          'wormhole10qt8wg0n7z740ssvf3urmvgtjhxpyp74hxqvqt7z226gykuus7eq9mpu8u',
        base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR',
        display: 'wormhole/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR/5',
        name: 'Bonk (Wormhole)',
        symbol: 'Bonk',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'solana',
              base_denom: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263'
            },
            provider: 'Wormhole'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bonk.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bonk.png'
          }
        ]
      },
      {
        description:
          'Wrapped BTC (Wormhole), WBTC, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/BGkuAcga2WArUghF8L6kt6uCAhAzrxmn1QcbQqi5r5bd',
        denom_units: [
          {
            denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/BGkuAcga2WArUghF8L6kt6uCAhAzrxmn1QcbQqi5r5bd',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'wormhole/BGkuAcga2WArUghF8L6kt6uCAhAzrxmn1QcbQqi5r5bd/8',
            exponent: 8,
            aliases: []
          }
        ],
        address:
          'wormhole1nz0r0au8aj6dc00wmm3ufy4g4k86rjzlr8wkf92cktdlps5lgfcqxnx9yk',
        base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/BGkuAcga2WArUghF8L6kt6uCAhAzrxmn1QcbQqi5r5bd',
        display: 'wormhole/BGkuAcga2WArUghF8L6kt6uCAhAzrxmn1QcbQqi5r5bd/8',
        name: 'Wrapped BTC (Wormhole)',
        symbol: 'WBTC',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599'
            },
            provider: 'Wormhole'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
          }
        ]
      },
      {
        description:
          'tBTC v2 (Wormhole), tBTC, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/BhqTYfQogyt7jX7cx7x8uHEQP1x9fdtdBZtK4Swghgpw',
        denom_units: [
          {
            denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/BhqTYfQogyt7jX7cx7x8uHEQP1x9fdtdBZtK4Swghgpw',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'wormhole/BhqTYfQogyt7jX7cx7x8uHEQP1x9fdtdBZtK4Swghgpw/8',
            exponent: 8,
            aliases: []
          }
        ],
        address:
          'wormhole1nu9wf9dw384attnpu0pwfet5fajn05w2ex4r07mghvk3xcwrt2yq5uutp5',
        base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/BhqTYfQogyt7jX7cx7x8uHEQP1x9fdtdBZtK4Swghgpw',
        display: 'wormhole/BhqTYfQogyt7jX7cx7x8uHEQP1x9fdtdBZtK4Swghgpw/8',
        name: 'tBTC v2 (Wormhole)',
        symbol: 'tBTC',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0x18084fbA666a33d37592fA2633fD49a74DD93a88'
            },
            provider: 'Wormhole'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/tbtc.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/tbtc.svg'
          }
        ]
      },
      {
        description:
          'Dai Stablecoin (Wormhole), DAI, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/EKiMEqDnPKokFGcSXDvGMk6Gt1BJ6BC7BDZzTmEpWLH1',
        denom_units: [
          {
            denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/EKiMEqDnPKokFGcSXDvGMk6Gt1BJ6BC7BDZzTmEpWLH1',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'wormhole/EKiMEqDnPKokFGcSXDvGMk6Gt1BJ6BC7BDZzTmEpWLH1/8',
            exponent: 8,
            aliases: []
          }
        ],
        address:
          'wormhole1chejx4qqtvwxy6684yrsmf6pylancxqhk3vsmtleg5ta3zrffljqfscg87',
        base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/EKiMEqDnPKokFGcSXDvGMk6Gt1BJ6BC7BDZzTmEpWLH1',
        display: 'wormhole/EKiMEqDnPKokFGcSXDvGMk6Gt1BJ6BC7BDZzTmEpWLH1/8',
        name: 'Dai Stablecoin (Wormhole)',
        symbol: 'DAI',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0x6B175474E89094C44Da98b954EedeAC495271d0F'
            },
            provider: 'Wormhole'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
          }
        ]
      },
      {
        description:
          'USD Coin (Wormhole), USDC, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt',
        denom_units: [
          {
            denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'wormhole/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt/6',
            exponent: 6,
            aliases: []
          }
        ],
        address:
          'wormhole1utjx3594tlvfw4375esgu72wa4sdgf0q7x4ye27husf5kvuzp5rsr72gdq',
        base: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt',
        display: 'wormhole/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt/6',
        name: 'USD Coin (Wormhole)',
        symbol: 'USDC',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
            },
            provider: 'Wormhole'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'gitopia',
    assets: [
      {
        description: 'The native token of Gitopia',
        denom_units: [
          {
            denom: 'ulore',
            exponent: 0
          },
          {
            denom: 'LORE',
            exponent: 6
          }
        ],
        base: 'ulore',
        name: 'LORE',
        display: 'LORE',
        symbol: 'LORE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.svg'
          },
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/gitopia.png'
          }
        ],
        coingecko_id: 'gitopia'
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
            exponent: 0
          },
          {
            denom: 'graviton',
            exponent: 6
          }
        ],
        base: 'ugraviton',
        name: 'Graviton',
        display: 'graviton',
        symbol: 'GRAV',
        coingecko_id: 'graviton',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg'
          }
        ]
      },
      {
        description:
          'pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets.',
        denom_units: [
          {
            denom: 'gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
            exponent: 0
          },
          {
            denom: 'pstake',
            exponent: 18
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
              base_denom: 'uxprt'
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
        images: [
          {
            image_sync: {
              chain_name: 'ethereum',
              base_denom: '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
          }
        ]
      },
      {
        description: 'Gravity Bridge WETH',
        denom_units: [
          {
            denom: 'gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            exponent: 0
          },
          {
            denom: 'gweth',
            exponent: 18
          }
        ],
        base: 'gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        name: 'Wrapped Ethereum',
        display: 'gweth',
        symbol: 'WETH',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        },
        traces: [
          {
            type: 'wrapped',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: 'wei'
            },
            provider: 'Ethereum'
          },
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
            },
            provider: 'Gravity Bridge'
          }
        ],
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
          }
        ]
      },
      {
        description: 'Gravity Bridge USDC',
        denom_units: [
          {
            denom: 'gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            exponent: 0
          },
          {
            denom: 'gusdc',
            exponent: 6
          }
        ],
        base: 'gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        name: 'USD Coin',
        display: 'gusdc',
        symbol: 'USDC',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        },
        traces: [
          {
            type: 'synthetic',
            counterparty: {
              chain_name: 'forex',
              base_denom: 'USD'
            },
            provider: 'Circle'
          },
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
            },
            provider: 'Gravity Bridge'
          }
        ],
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
          }
        ]
      },
      {
        description: 'Gravity Bridge USDT',
        denom_units: [
          {
            denom: 'gravity0xdAC17F958D2ee523a2206206994597C13D831ec7',
            exponent: 0
          },
          {
            denom: 'gusdt',
            exponent: 6
          }
        ],
        base: 'gravity0xdAC17F958D2ee523a2206206994597C13D831ec7',
        name: 'Tether USD',
        display: 'gusdt',
        symbol: 'USDT',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        },
        traces: [
          {
            type: 'synthetic',
            counterparty: {
              chain_name: 'forex',
              base_denom: 'USD'
            },
            provider: 'Tether'
          },
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
            },
            provider: 'Gravity Bridge'
          }
        ],
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
          }
        ]
      },
      {
        description: 'Gravity Bridge WBTC',
        denom_units: [
          {
            denom: 'gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
            exponent: 0
          },
          {
            denom: 'gwbtc',
            exponent: 8
          }
        ],
        base: 'gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
        name: 'Wrapped Bitcoin',
        display: 'gwbtc',
        symbol: 'WBTC',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
        },
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'bitcoin',
              base_denom: 'sat'
            },
            provider: 'BitGo, Kyber, and Ren'
          },
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
            },
            provider: 'Gravity Bridge'
          }
        ],
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
          }
        ]
      },
      {
        description: 'Gravity Bridge DAI',
        denom_units: [
          {
            denom: 'gravity0x6B175474E89094C44Da98b954EedeAC495271d0F',
            exponent: 0
          },
          {
            denom: 'gdai',
            exponent: 18
          }
        ],
        base: 'gravity0x6B175474E89094C44Da98b954EedeAC495271d0F',
        name: 'Dai Stablecoin',
        display: 'gdai',
        symbol: 'DAI',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
        },
        traces: [
          {
            type: 'synthetic',
            counterparty: {
              chain_name: 'forex',
              base_denom: 'USD'
            },
            provider: 'MakerDAO'
          },
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0x6b175474e89094c44da98b954eedeac495271d0f'
            },
            provider: 'Gravity Bridge'
          }
        ],
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'haqq',
    assets: [
      {
        description:
          'The native EVM, governance and staking token of the Haqq Network',
        denom_units: [
          {
            denom: 'aISLM',
            exponent: 0
          },
          {
            denom: 'ISLM',
            exponent: 18
          }
        ],
        base: 'aISLM',
        name: 'Islamic Coin',
        display: 'ISLM',
        symbol: 'ISLM',
        coingecko_id: '',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'highbury',
    assets: [
      {
        description:
          'The native staking and governance token of the Blackfury ecosystem',
        denom_units: [
          {
            denom: 'ufury',
            exponent: 0
          },
          {
            denom: 'fury',
            exponent: 6
          }
        ],
        base: 'ufury',
        name: 'Fury',
        display: 'fury',
        symbol: 'FURY',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/fury.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/fury.svg'
        },
        coingecko_id: 'fanfury',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/fury.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/fury.svg'
          }
        ]
      },
      {
        description: 'Governance token of Jinx Wallet and Fury Lend Protocol',
        denom_units: [
          {
            denom: 'jinx',
            exponent: 0
          },
          {
            denom: 'JINX',
            exponent: 6
          }
        ],
        base: 'jinx',
        name: 'Jinx',
        display: 'JINX',
        symbol: 'JINX',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/jinx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/jinx.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/jinx.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/jinx.svg'
          }
        ]
      },
      {
        description: 'Governance token of Fury Swap Protocol',
        denom_units: [
          {
            denom: 'jinxy',
            exponent: 0
          },
          {
            denom: 'JINXY',
            exponent: 6
          }
        ],
        base: 'jinxy',
        name: 'Jinxy',
        display: 'JINXy',
        symbol: 'JINXy',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/jinxy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/jinxy.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/jinxy.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/jinxy.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'humans',
    assets: [
      {
        description: 'The native staking and governance token of Humans.ai.',
        denom_units: [
          {
            denom: 'aheart',
            exponent: 0
          },
          {
            denom: 'heart',
            exponent: 18
          }
        ],
        base: 'aheart',
        name: 'HEART',
        display: 'heart',
        symbol: 'HEART',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/humans_small_light.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/humans_small_light.svg'
        },
        coingecko_id: 'humans-ai',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/humans_small_light.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/humans_small_light.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
        },
        coingecko_id: 'ixo',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'imversed',
    assets: [
      {
        description:
          'The native EVM, governance and staking token of the Imversed',
        denom_units: [
          {
            denom: 'aimv',
            exponent: 0
          },
          {
            denom: 'imv',
            exponent: 18
          }
        ],
        base: 'aimv',
        name: 'IMV',
        display: 'imv',
        symbol: 'IMV',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.svg'
        },
        coingecko_id: 'imv',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.svg'
          }
        ]
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
        coingecko_id: 'injective-protocol',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
          }
        ]
      },
      {
        description: 'Tether USDt on Injective',
        denom_units: [
          {
            denom:
              'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB',
            exponent: 0
          },
          {
            denom: 'usdt',
            exponent: 6
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB',
        name: 'Tether USDt',
        display: 'usdt',
        symbol: 'USDt',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'kava',
              base_denom: 'erc20/tether/usdt',
              channel_id: 'channel-122'
            },
            chain: {
              channel_id: 'channel-143',
              path: 'transfer/channel-143/erc20/tether/usdt'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'kava',
              base_denom: 'erc20/tether/usdt'
            },
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }
      },
      {
        description: 'ERIS liquid staked INJ',
        denom_units: [
          {
            denom: 'factory/inj1cdwt8g7nxgtg2k4fn8sj363mh9ahkw2qt0vrnc/ampINJ',
            exponent: 0
          },
          {
            denom: 'ampINJ',
            exponent: 6
          }
        ],
        base: 'factory/inj1cdwt8g7nxgtg2k4fn8sj363mh9ahkw2qt0vrnc/ampINJ',
        name: 'ERIS Amplified INJ',
        display: 'ampINJ',
        symbol: 'ampINJ',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ampinj.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ampinj.png'
          }
        ]
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
        coingecko_id: 'iris-network',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'jackal',
    assets: [
      {
        description: 'The native staking and governance token of Jackal.',
        denom_units: [
          {
            denom: 'ujkl',
            exponent: 0
          },
          {
            denom: 'jkl',
            exponent: 6
          }
        ],
        base: 'ujkl',
        name: 'Jackal',
        display: 'jkl',
        symbol: 'JKL',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg'
        },
        coingecko_id: 'jackal-protocol',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg'
          }
        ]
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
        coingecko_id: 'juno-network',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
          }
        ]
      },
      {
        denom_units: [
          {
            denom:
              'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
            exponent: 0
          },
          {
            denom: 'atom',
            exponent: 6
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
        name: 'ATOM on Juno',
        display: 'atom',
        symbol: 'ATOM',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'cosmoshub',
              base_denom: 'uatom',
              channel_id: 'channel-207'
            },
            chain: {
              channel_id: 'channel-1',
              path: 'transfer/channel-1/uatom'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'cosmoshub',
              base_denom: 'uatom'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
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
        coingecko_id: 'neta',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.svg'
          }
        ]
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
        coingecko_id: 'marble',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg'
          }
        ]
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
        coingecko_id: 'hope-galaxy',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg'
          }
        ]
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
        coingecko_id: 'racoon',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.svg'
        },
        coingecko_id: 'junoswap-raw-dao',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.svg'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png'
          }
        ]
      },
      {
        description:
          'IBC HNS is HNS, coin of Handshake, decentralized root namesystem, but wrapped to cosmos for IBC support by Another.Software through Juno network.',
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hns.svg'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/joe.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.svg'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.svg'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.svg'
          }
        ]
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
        },
        coingecko_id: 'stakeeasy-juno-derivative',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.svg'
          }
        ]
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
        },
        coingecko_id: 'stakeeasy-bjuno',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.svg'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.svg'
          }
        ]
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
        },
        coingecko_id: 'seasy',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.svg'
          }
        ]
      },
      {
        description: 'The native token cw20 for MuseDAO on Juno Chain',
        type_asset: 'cw20',
        address:
          'juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3',
        denom_units: [
          {
            denom:
              'cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3',
            exponent: 0
          },
          {
            denom: 'muse',
            exponent: 6
          }
        ],
        base: 'cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3',
        name: 'MuseDAO',
        display: 'muse',
        symbol: 'MUSE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/muse.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/muse.png'
          }
        ]
      },
      {
        description: 'The native token cw20 for Loop Finance on Juno Chain',
        type_asset: 'cw20',
        address:
          'juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup',
        denom_units: [
          {
            denom:
              'cw20:juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup',
            exponent: 0
          },
          {
            denom: 'loop',
            exponent: 6
          }
        ],
        base: 'cw20:juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup',
        name: 'Loop Finance',
        display: 'loop',
        symbol: 'LOOP',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/loop.png'
        },
        coingecko_id: 'loop',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/loop.png'
          }
        ]
      },
      {
        description: 'The native token cw20 for Fanfury on Juno Chain',
        type_asset: 'cw20',
        address:
          'juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz',
        denom_units: [
          {
            denom:
              'cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz',
            exponent: 0
          },
          {
            denom: 'fury',
            exponent: 6
          }
        ],
        base: 'cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz',
        name: 'Fanfury',
        display: 'fury',
        symbol: 'FURY',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fanfury.png'
        },
        coingecko_id: 'fanfury',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fanfury.png'
          }
        ]
      },
      {
        description: 'The native token cw20 for PHMN on Juno Chain',
        type_asset: 'cw20',
        address:
          'juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l',
        denom_units: [
          {
            denom:
              'cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l',
            exponent: 0
          },
          {
            denom: 'phmn',
            exponent: 6
          }
        ],
        base: 'cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l',
        name: 'POSTHUMAN',
        display: 'phmn',
        symbol: 'PHMN',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.svg'
        },
        coingecko_id: 'posthuman',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.svg'
          }
        ]
      },
      {
        description: 'The native token cw20 for Hopers on Juno Chain',
        type_asset: 'cw20',
        address:
          'juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n',
        denom_units: [
          {
            denom:
              'cw20:juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n',
            exponent: 0
          },
          {
            denom: 'hopers',
            exponent: 6
          }
        ],
        base: 'cw20:juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n',
        name: 'Hopers',
        display: 'hopers',
        symbol: 'HOPERS',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.svg'
        },
        coingecko_id: 'hopers-io ',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.svg'
          }
        ]
      },
      {
        description: 'RED',
        type_asset: 'cw20',
        address:
          'juno1g647t78y2ulqlm3lss8rs3d0spzd0teuwhdvnqn92tr79yltk9dq2h24za',
        denom_units: [
          {
            denom:
              'cw20:juno1g647t78y2ulqlm3lss8rs3d0spzd0teuwhdvnqn92tr79yltk9dq2h24za',
            exponent: 0
          },
          {
            denom: 'red',
            exponent: 6
          }
        ],
        base: 'cw20:juno1g647t78y2ulqlm3lss8rs3d0spzd0teuwhdvnqn92tr79yltk9dq2h24za',
        name: 'Red',
        display: 'red',
        symbol: 'RED',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/red.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/red.png'
          }
        ]
      },
      {
        description: 'BLUE',
        type_asset: 'cw20',
        address:
          'juno14q8kk464fafql2fwmlsgvgcdl6h2csqpzv4hr025fmcvgjahpess32k0j7',
        denom_units: [
          {
            denom:
              'cw20:juno14q8kk464fafql2fwmlsgvgcdl6h2csqpzv4hr025fmcvgjahpess32k0j7',
            exponent: 0
          },
          {
            denom: 'blue',
            exponent: 6
          }
        ],
        base: 'cw20:juno14q8kk464fafql2fwmlsgvgcdl6h2csqpzv4hr025fmcvgjahpess32k0j7',
        name: 'Blue',
        display: 'blue',
        symbol: 'BLUE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/blue.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/blue.png'
          }
        ]
      },
      {
        description: 'WYND DAO Governance Token',
        type_asset: 'cw20',
        address:
          'juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9',
        denom_units: [
          {
            denom:
              'cw20:juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9',
            exponent: 0
          },
          {
            denom: 'wynd',
            exponent: 6
          }
        ],
        base: 'cw20:juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9',
        name: 'Wynd DAO Governance Token',
        display: 'wynd',
        symbol: 'WYND',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.svg'
          }
        ]
      },
      {
        description: 'Bored APE IBC club token',
        type_asset: 'cw20',
        address:
          'juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj',
        denom_units: [
          {
            denom:
              'cw20:juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj',
            exponent: 0
          },
          {
            denom: 'banana',
            exponent: 6
          }
        ],
        base: 'juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj',
        name: 'Banana Token',
        display: 'banana',
        symbol: 'BANANA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/banana.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/banana.png'
          }
        ]
      },
      {
        description: 'nRide Token',
        type_asset: 'cw20',
        address:
          'juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq',
        denom_units: [
          {
            denom:
              'cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq',
            exponent: 0
          },
          {
            denom: 'nride',
            exponent: 6
          }
        ],
        base: 'cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq',
        name: 'nRide Token',
        display: 'nride',
        symbol: 'NRIDE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg'
          }
        ]
      },
      {
        description: 'Signal Art and Gaming on Juno',
        type_asset: 'cw20',
        address:
          'juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k',
        denom_units: [
          {
            denom:
              'cw20:juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k',
            exponent: 0
          },
          {
            denom: 'sgnl',
            exponent: 6
          }
        ],
        base: 'cw20:juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k',
        name: 'Signal',
        display: 'sgnl',
        symbol: 'SGNL',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sgnl.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sgnl.png'
          }
        ]
      },
      {
        description:
          'Governance and utility token for the Junø Apes NFT platform on Juno',
        type_asset: 'cw20',
        address:
          'juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps',
        denom_units: [
          {
            denom:
              'cw20:juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps',
            exponent: 0
          },
          {
            denom: 'jape',
            exponent: 6
          }
        ],
        base: 'cw20:juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps',
        name: 'Junø Apes',
        display: 'jape',
        symbol: 'JAPE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/jape.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/jape.png'
          }
        ]
      },
      {
        description:
          'A community meme token with a fantasy fiction storyline and comic based NFTs on Juno',
        type_asset: 'cw20',
        address:
          'juno12wxyvtqe76x2a5jj6ckp2hfq8v32m6rvyyxwwufl2tksqvkt7whqczv6pa',
        denom_units: [
          {
            denom:
              'cw20:juno12wxyvtqe76x2a5jj6ckp2hfq8v32m6rvyyxwwufl2tksqvkt7whqczv6pa',
            exponent: 0
          },
          {
            denom: 'catom',
            exponent: 6
          }
        ],
        base: 'cw20:juno12wxyvtqe76x2a5jj6ckp2hfq8v32m6rvyyxwwufl2tksqvkt7whqczv6pa',
        name: 'Catom',
        display: 'catom',
        symbol: 'CATOM',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catom.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catom.png'
          }
        ]
      },
      {
        description:
          'Utility token of Howl.social, an on chain micro-blogging platform on Juno',
        type_asset: 'cw20',
        address:
          'juno1g0wuyu2f49ncf94r65278puxzclf5arse9f3kvffxyv4se4vgdmsk4dvqz',
        denom_units: [
          {
            denom:
              'cw20:juno1g0wuyu2f49ncf94r65278puxzclf5arse9f3kvffxyv4se4vgdmsk4dvqz',
            exponent: 0
          },
          {
            denom: 'howl',
            exponent: 6
          }
        ],
        base: 'cw20:juno1g0wuyu2f49ncf94r65278puxzclf5arse9f3kvffxyv4se4vgdmsk4dvqz',
        name: 'Howl',
        display: 'howl',
        symbol: 'HOWL',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/howl.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/howl.png'
          }
        ]
      },
      {
        description:
          'Inspired by Bonk. A community project to celebrate the settlers of JunoNetwork.',
        type_asset: 'cw20',
        address:
          'juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x',
        denom_units: [
          {
            denom:
              'cw20:juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x',
            exponent: 0
          },
          {
            denom: 'fox',
            exponent: 6
          }
        ],
        base: 'cw20:juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x',
        name: 'Juno Fox',
        display: 'fox',
        symbol: 'FOX',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fox.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fox.png'
          }
        ]
      },
      {
        description: 'Evmos Guardians governance token.',
        type_asset: 'cw20',
        address:
          'juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma',
        denom_units: [
          {
            denom:
              'cw20:juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma',
            exponent: 0
          },
          {
            denom: 'grdn',
            exponent: 6
          }
        ],
        base: 'cw20:juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma',
        name: 'Guardian',
        display: 'grdn',
        symbol: 'GRDN',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/guardian.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/guardian.png'
          }
        ]
      },
      {
        description: 'Mini Punks Token',
        type_asset: 'cw20',
        address:
          'juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my',
        denom_units: [
          {
            denom:
              'cw20:juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my',
            exponent: 0
          },
          {
            denom: 'mnpu',
            exponent: 6
          }
        ],
        base: 'cw20:juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my',
        name: 'Mini Punks',
        display: 'mnpu',
        symbol: 'MNPU',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.svg'
          }
        ]
      },
      {
        description: 'Kleomedes Token',
        type_asset: 'cw20',
        address:
          'juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy',
        denom_units: [
          {
            denom:
              'cw20:juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy',
            exponent: 0
          },
          {
            denom: 'kleo',
            exponent: 6
          }
        ],
        base: 'cw20:juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy',
        name: 'Kleomedes',
        display: 'kleo',
        symbol: 'KLEO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/kleomedes.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/kleomedes.png'
          }
        ]
      },
      {
        description: 'Sikoba Governance Token',
        type_asset: 'cw20',
        address:
          'juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp',
        denom_units: [
          {
            denom:
              'cw20:juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp',
            exponent: 0
          },
          {
            denom: 'sikoba',
            exponent: 6
          }
        ],
        base: 'cw20:juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp',
        name: 'Sikoba Token',
        display: 'sikoba',
        symbol: 'SKOJ',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.svg'
          }
        ]
      },
      {
        description: 'Shiba Cosmos',
        type_asset: 'cw20',
        address:
          'juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z',
        denom_units: [
          {
            denom:
              'cw20:juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z',
            exponent: 0
          },
          {
            denom: 'shibac',
            exponent: 6
          }
        ],
        base: 'cw20:juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z',
        name: 'ShibaCosmos',
        display: 'shibac',
        symbol: 'SHIBAC',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/shibacosmos.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/shibacosmos.png'
          }
        ]
      },
      {
        description: 'Celestims',
        type_asset: 'cw20',
        address:
          'juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg',
        denom_units: [
          {
            denom:
              'cw20:juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg',
            exponent: 0
          },
          {
            denom: 'clst',
            exponent: 6
          }
        ],
        base: 'cw20:juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg',
        name: 'Celestims',
        display: 'clst',
        symbol: 'CLST',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/celestims.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/celestims.png'
          }
        ]
      },
      {
        description:
          'A revolutionary DAO created to bring clean drinking water to men, women, and children worldwide. We hope you join us on our journey!',
        type_asset: 'cw20',
        address:
          'juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw',
        denom_units: [
          {
            denom:
              'cw20:juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw',
            exponent: 0
          },
          {
            denom: 'watr',
            exponent: 6
          }
        ],
        base: 'cw20:juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw',
        name: 'WATR',
        display: 'watr',
        symbol: 'WATR',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/watr.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/watr.png'
          }
        ]
      },
      {
        description:
          'An innovative DAO dedicated to housing the most vulnerable',
        type_asset: 'cw20',
        address:
          'juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss',
        denom_units: [
          {
            denom:
              'cw20:juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss',
            exponent: 0
          },
          {
            denom: 'casa',
            exponent: 6
          }
        ],
        base: 'cw20:juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss',
        name: 'Casa',
        display: 'casa',
        symbol: 'CASA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/casa.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/casa.png'
          }
        ]
      },
      {
        description:
          'Social Impact DAO providing showers, meals, and vehicles to the homeless',
        type_asset: 'cw20',
        address:
          'juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm',
        denom_units: [
          {
            denom:
              'cw20:juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm',
            exponent: 0
          },
          {
            denom: 'summit',
            exponent: 6
          }
        ],
        base: 'cw20:juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm',
        name: 'Summit',
        display: 'summit',
        symbol: 'SUMMIT',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/summit.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/summit.png'
          }
        ]
      },
      {
        description:
          'Social Impact DAO dedicated to combatting food insecurity and malnutrition',
        type_asset: 'cw20',
        address:
          'juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq',
        denom_units: [
          {
            denom:
              'cw20:juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq',
            exponent: 0
          },
          {
            denom: 'manna',
            exponent: 6
          }
        ],
        base: 'cw20:juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq',
        name: 'Manna',
        display: 'manna',
        symbol: 'MANNA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/manna.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/manna.png'
          }
        ]
      },
      {
        description: 'Social Impact DAO focused on youth empowerment',
        type_asset: 'cw20',
        address:
          'juno12etxwkxvms0uy9ak8g3pyq6a53myukufdnx82pakzmjmpm77a0ksr9gs5v',
        denom_units: [
          {
            denom:
              'cw20:juno12etxwkxvms0uy9ak8g3pyq6a53myukufdnx82pakzmjmpm77a0ksr9gs5v',
            exponent: 0
          },
          {
            denom: 'empwr',
            exponent: 6
          }
        ],
        base: 'cw20:juno12etxwkxvms0uy9ak8g3pyq6a53myukufdnx82pakzmjmpm77a0ksr9gs5v',
        name: 'EMPWR',
        display: 'empwr',
        symbol: 'EMPWR',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/empwr.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/empwr.png'
          }
        ]
      },
      {
        description: 'Join us in fighting against world hunger',
        type_asset: 'cw20',
        address:
          'juno1525fuspletvzykpgr2atxpymu9le4mghd7qq4a4u23uwqzc2f3fq7fmafd',
        denom_units: [
          {
            denom:
              'cw20:juno1525fuspletvzykpgr2atxpymu9le4mghd7qq4a4u23uwqzc2f3fq7fmafd',
            exponent: 0
          },
          {
            denom: 'middle',
            exponent: 6
          }
        ],
        base: 'cw20:juno1525fuspletvzykpgr2atxpymu9le4mghd7qq4a4u23uwqzc2f3fq7fmafd',
        name: 'Middle',
        display: 'middle',
        symbol: 'MIDDLE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/middle.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/middle.png'
          }
        ]
      },
      {
        description:
          'Social Impact DAO taking a wholistic approach to helping abused and mentally ill women and children',
        type_asset: 'cw20',
        address:
          'juno17703kcxtsg37hryxnestejyyycuv5yyvnghp2e7w0kqvafnnyetsgzq62w',
        denom_units: [
          {
            denom:
              'cw20:juno17703kcxtsg37hryxnestejyyycuv5yyvnghp2e7w0kqvafnnyetsgzq62w',
            exponent: 0
          },
          {
            denom: 'sunset',
            exponent: 6
          }
        ],
        base: 'cw20:juno17703kcxtsg37hryxnestejyyycuv5yyvnghp2e7w0kqvafnnyetsgzq62w',
        name: 'Sunset',
        display: 'sunset',
        symbol: 'SUNSET',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sunset.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sunset.png'
          }
        ]
      },
      {
        description:
          'Social Impact DAO dedicated to helping restore and protect our environment',
        type_asset: 'cw20',
        address:
          'juno1uu3rxu7w7fpfj4sl4xpxppgymk57mzdzn6kg7492jdxh5dwk7d2qq9429e',
        denom_units: [
          {
            denom:
              'cw20:juno1uu3rxu7w7fpfj4sl4xpxppgymk57mzdzn6kg7492jdxh5dwk7d2qq9429e',
            exponent: 0
          },
          {
            denom: 'tree',
            exponent: 6
          }
        ],
        base: 'cw20:juno1uu3rxu7w7fpfj4sl4xpxppgymk57mzdzn6kg7492jdxh5dwk7d2qq9429e',
        name: 'Living Tree',
        display: 'tree',
        symbol: 'TREE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/livingtree.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/livingtree.png'
          }
        ]
      },
      {
        description: "Evmos Guardians' Invaders DAO token.",
        type_asset: 'cw20',
        address:
          'juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8',
        denom_units: [
          {
            denom:
              'cw20:juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8',
            exponent: 0
          },
          {
            denom: 'invdrs',
            exponent: 6
          }
        ],
        base: 'cw20:juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8',
        name: 'Invaders',
        display: 'invdrs',
        symbol: 'INVDRS',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/invdrs.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/invdrs.png'
          }
        ]
      },
      {
        description: 'Apemos',
        type_asset: 'cw20',
        address:
          'juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06',
        denom_units: [
          {
            denom:
              'cw20:juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06',
            exponent: 0
          },
          {
            denom: 'apemos',
            exponent: 6
          }
        ],
        base: 'cw20:juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06',
        name: 'Apemos',
        display: 'apemos',
        symbol: 'APEMOS',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/apemos.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/apemos.png'
          }
        ]
      },
      {
        description: 'The First Doge on Osmosis',
        type_asset: 'cw20',
        address:
          'juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je',
        denom_units: [
          {
            denom:
              'cw20:juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je',
            exponent: 0
          },
          {
            denom: 'osdoge',
            exponent: 6
          }
        ],
        base: 'cw20:juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je',
        name: 'Osmosis Doge',
        display: 'osdoge',
        symbol: 'OSDOGE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/osdoge.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/osdoge.png'
          }
        ]
      },
      {
        description: 'Doge Apr',
        type_asset: 'cw20',
        address:
          'juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d',
        denom_units: [
          {
            denom:
              'cw20:juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d',
            exponent: 0
          },
          {
            denom: 'doga',
            exponent: 6
          }
        ],
        base: 'cw20:juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d',
        name: 'Doge Apr',
        display: 'doga',
        symbol: 'DOGA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/doga.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/doga.png'
          }
        ]
      },
      {
        description: 'Osmo Pepe',
        type_asset: 'cw20',
        address:
          'juno1zqrj3ta4u7ylv0wqzd8t8q3jrr9rdmn43zuzp9zemeunecnhy8fss778g7',
        denom_units: [
          {
            denom:
              'cw20:juno1zqrj3ta4u7ylv0wqzd8t8q3jrr9rdmn43zuzp9zemeunecnhy8fss778g7',
            exponent: 0
          },
          {
            denom: 'pepe',
            exponent: 6
          }
        ],
        base: 'cw20:juno1zqrj3ta4u7ylv0wqzd8t8q3jrr9rdmn43zuzp9zemeunecnhy8fss778g7',
        name: 'Osmo Pepe',
        display: 'pepe',
        symbol: 'PEPE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepe.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepe.png'
          }
        ]
      },
      {
        description: 'Catmos',
        type_asset: 'cw20',
        address:
          'juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488',
        denom_units: [
          {
            denom:
              'cw20:juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488',
            exponent: 0
          },
          {
            denom: 'catmos',
            exponent: 6
          }
        ],
        base: 'cw20:juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488',
        name: 'Catmos',
        display: 'catmos',
        symbol: 'CATMOS',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catmos.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catmos.png'
          }
        ]
      },
      {
        description: 'Spacer',
        type_asset: 'cw20',
        address:
          'juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg',
        denom_units: [
          {
            denom:
              'cw20:juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg',
            exponent: 0
          },
          {
            denom: 'spacer',
            exponent: 6
          }
        ],
        base: 'cw20:juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg',
        name: 'Spacer',
        display: 'spacer',
        symbol: 'SPACER',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/spacer.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/spacer.png'
          }
        ]
      },
      {
        description: 'Light: LumenX community DAO treasury token',
        type_asset: 'cw20',
        address:
          'juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l',
        denom_units: [
          {
            denom:
              'cw20:juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l',
            exponent: 0
          },
          {
            denom: 'light',
            exponent: 9
          }
        ],
        base: 'cw20:juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l',
        name: 'LIGHT',
        display: 'light',
        symbol: 'LIGHT',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/light.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/light.png'
          }
        ]
      },
      {
        description: 'Mille: the 1000th token on osmosis',
        type_asset: 'cw20',
        address:
          'juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d',
        denom_units: [
          {
            denom:
              'cw20:juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d',
            exponent: 0
          },
          {
            denom: 'mile',
            exponent: 6
          }
        ],
        base: 'cw20:juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d',
        name: 'Mille',
        display: 'mile',
        symbol: 'MILE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mille.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mille.png'
          }
        ]
      },
      {
        description: 'Void',
        type_asset: 'cw20',
        address:
          'juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8',
        denom_units: [
          {
            denom:
              'cw20:juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8',
            exponent: 0
          },
          {
            denom: 'void',
            exponent: 6
          }
        ],
        base: 'cw20:juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8',
        name: 'Void',
        display: 'void',
        symbol: 'VOID',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/void.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/void.png'
          }
        ]
      },
      {
        description: 'Silica',
        type_asset: 'cw20',
        address:
          'juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux',
        denom_units: [
          {
            denom:
              'cw20:juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux',
            exponent: 0
          },
          {
            denom: 'silica',
            exponent: 6
          }
        ],
        base: 'cw20:juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux',
        name: 'Silica',
        display: 'silica',
        symbol: 'SLCA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/silica.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/silica.png'
          }
        ]
      },
      {
        description: 'Pepec',
        type_asset: 'cw20',
        address:
          'juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k',
        denom_units: [
          {
            denom:
              'cw20:juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k',
            exponent: 0
          },
          {
            denom: 'pepec',
            exponent: 6
          }
        ],
        base: 'cw20:juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k',
        name: 'Pepec',
        display: 'pepec',
        symbol: 'PEPEC',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepec.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepec.png'
          }
        ]
      },
      {
        description: 'Palantin',
        type_asset: 'cw20',
        address:
          'juno15au4k2jgwd0jnchy0fkg3lm00fpt7jt0j2duuzradn2q7sega2dszyn5pp',
        denom_units: [
          {
            denom:
              'cw20:juno15au4k2jgwd0jnchy0fkg3lm00fpt7jt0j2duuzradn2q7sega2dszyn5pp',
            exponent: 0
          },
          {
            denom: 'pltn',
            exponent: 6
          }
        ],
        base: 'cw20:juno15au4k2jgwd0jnchy0fkg3lm00fpt7jt0j2duuzradn2q7sega2dszyn5pp',
        name: 'Palantin',
        display: 'palantin',
        symbol: 'PLTN',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pltn.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pltn.png'
          }
        ]
      },
      {
        description: 'Propose. Vote. Build.',
        type_asset: 'cw20',
        address:
          'juno12mcwmd6wqhledkjsurlfqtc8j0pedvxlcxw3gs4kh2qf808ehehsen8nmw',
        denom_units: [
          {
            denom:
              'cw20:juno12mcwmd6wqhledkjsurlfqtc8j0pedvxlcxw3gs4kh2qf808ehehsen8nmw',
            exponent: 0
          },
          {
            denom: 'yfd',
            exponent: 6
          }
        ],
        base: 'cw20:juno12mcwmd6wqhledkjsurlfqtc8j0pedvxlcxw3gs4kh2qf808ehehsen8nmw',
        name: 'Y-Foundry DAO',
        display: 'yfd',
        symbol: 'YFD',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/yfd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/yfd.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/yfd.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/yfd.svg'
          }
        ]
      },
      {
        denom_units: [
          {
            denom: 'factory/juno1qly4zcmzr2gyxtze5yt9chv2srczwwunppxjfh/NEXX',
            exponent: 0
          },
          {
            denom: 'nexx',
            exponent: 6
          }
        ],
        address: 'juno1qly4zcmzr2gyxtze5yt9chv2srczwwunppxjfh',
        base: 'factory/juno1qly4zcmzr2gyxtze5yt9chv2srczwwunppxjfh/NEXX',
        name: 'NEXX GEN AI',
        display: 'nexx',
        symbol: 'NEXX',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nexx.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nexx.png'
          }
        ]
      },
      {
        denom_units: [
          {
            denom: 'factory/juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e/DGL',
            exponent: 0
          },
          {
            denom: 'dgl',
            exponent: 6
          }
        ],
        address: 'juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e',
        base: 'factory/juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e/DGL',
        name: 'Licorice',
        display: 'dgl',
        symbol: 'DGL',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dgl.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dgl.png'
          }
        ]
      },
      {
        description: 'ERIS liquid staked JUNO',
        type_asset: 'cw20',
        address:
          'juno1a0khag6cfzu5lrwazmyndjgvlsuk7g4vn9jd8ceym8f4jf6v2l9q6d348a',
        denom_units: [
          {
            denom:
              'cw20:juno1a0khag6cfzu5lrwazmyndjgvlsuk7g4vn9jd8ceym8f4jf6v2l9q6d348a',
            exponent: 0
          },
          {
            denom: 'ampJUNO',
            exponent: 6
          }
        ],
        base: 'cw20:juno1a0khag6cfzu5lrwazmyndjgvlsuk7g4vn9jd8ceym8f4jf6v2l9q6d348a',
        name: 'ERIS Amplified JUNO',
        display: 'ampJUNO',
        symbol: 'ampJUNO',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/ampjuno.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/ampjuno.svg'
          }
        ]
      },
      {
        description: 'BITS - Native token of Bitswift Cash',
        type_asset: 'cw20',
        address:
          'juno14fz92ehqt37e096xr95kmy8nc0kz803uezxtg4fwx7agjjma86sqm8mg3h',
        denom_units: [
          {
            denom:
              'cw20:juno14fz92ehqt37e096xr95kmy8nc0kz803uezxtg4fwx7agjjma86sqm8mg3h',
            exponent: 0
          },
          {
            denom: 'bits',
            exponent: 8
          }
        ],
        base: 'cw20:juno14fz92ehqt37e096xr95kmy8nc0kz803uezxtg4fwx7agjjma86sqm8mg3h',
        name: 'BITS',
        display: 'bits',
        symbol: 'BITS',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bits.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bits.png'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
        },
        coingecko_id: 'kava',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
          }
        ]
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
        coingecko_id: 'kava-lend',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
          }
        ]
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
        coingecko_id: 'kava-swap',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
        },
        coingecko_id: 'usdx',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
          }
        ]
      },
      {
        denom_units: [
          {
            denom: 'erc20/tether/usdt',
            exponent: 0
          },
          {
            denom: 'usdt',
            exponent: 6
          }
        ],
        base: 'erc20/tether/usdt',
        name: 'Tether USD',
        display: 'usdt',
        symbol: 'USDT',
        traces: [
          {
            type: 'additional-mintage',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
            },
            provider: 'Tether'
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'ethereum',
              base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
            },
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
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
        coingecko_id: 'ki',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg'
          }
        ]
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
        coingecko_id: 'lvn',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/lvn.png'
          }
        ]
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
        coingecko_id: 'darcmatter-coin',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
          }
        ]
      },
      {
        description:
          'The native over-collateralized stablecoin from the Kujira chain.',
        denom_units: [
          {
            denom:
              'factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk',
            exponent: 0
          },
          {
            denom: 'usk',
            exponent: 6
          }
        ],
        base: 'factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk',
        name: 'USK',
        display: 'USK',
        symbol: 'USK',
        coingecko_id: 'usk',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.svg'
          }
        ]
      },
      {
        description: "Quark's auto-compounding KUJI derivative",
        denom_units: [
          {
            denom:
              'factory/kujira1m96ucsfpt2yy72w09z2rxjdj38y5qd8lqx5jtggnejmdua2ynpnsxyvjex/urcpt',
            exponent: 0
          },
          {
            denom: 'qcKUJI',
            exponent: 6
          }
        ],
        base: 'factory/kujira1m96ucsfpt2yy72w09z2rxjdj38y5qd8lqx5jtggnejmdua2ynpnsxyvjex/urcpt',
        name: 'qcKUJI',
        display: 'qcKUJI',
        symbol: 'qcKUJI',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qckuji.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qckuji.svg'
          }
        ]
      },
      {
        description: 'ampKUJI',
        denom_units: [
          {
            denom:
              'factory/kujira1n3fr5f56r2ce0s37wdvwrk98yhhq3unnxgcqus8nzsfxvllk0yxquurqty/ampKUJI',
            exponent: 0
          },
          {
            denom: 'ampKUJI',
            exponent: 6
          }
        ],
        base: 'factory/kujira1n3fr5f56r2ce0s37wdvwrk98yhhq3unnxgcqus8nzsfxvllk0yxquurqty/ampKUJI',
        name: 'ampKUJI',
        display: 'ampKUJI',
        symbol: 'ampKUJI',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampkuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampkuji.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampkuji.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampkuji.svg'
          }
        ]
      },
      {
        description: 'MantaDAO Governance Token',
        denom_units: [
          {
            denom:
              'factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta',
            exponent: 0
          },
          {
            denom: 'mnta',
            exponent: 6
          }
        ],
        base: 'factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta',
        name: 'MNTA',
        display: 'MNTA',
        symbol: 'MNTA',
        coingecko_id: 'mantadao',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.svg'
          }
        ]
      },
      {
        description: "Quark's auto-compounding MNTA derivative",
        denom_units: [
          {
            denom:
              'factory/kujira1qzu3up50auxhqyzfq56znuj8n38q2ra7daaf9ef7vg8gu66jh4fqd2wd2y/urcpt',
            exponent: 0
          },
          {
            denom: 'qcKUJI',
            exponent: 6
          }
        ],
        base: 'factory/kujira1qzu3up50auxhqyzfq56znuj8n38q2ra7daaf9ef7vg8gu66jh4fqd2wd2y/urcpt',
        name: 'qcMNTA',
        display: 'qcMNTA',
        symbol: 'qcMNTA',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qcmnta.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qcmnta.svg'
          }
        ]
      },
      {
        description: 'ERIS Liquid Staked MNTA',
        denom_units: [
          {
            denom:
              'factory/kujira175yatpvkpgw07w0chhzuks3zrrae9z9g2y6r7u5pzqesyau4x9eqqyv0rr/ampMNTA',
            exponent: 0
          },
          {
            denom: 'ampMNTA',
            exponent: 6
          }
        ],
        base: 'factory/kujira175yatpvkpgw07w0chhzuks3zrrae9z9g2y6r7u5pzqesyau4x9eqqyv0rr/ampMNTA',
        name: 'ERIS Amplified MNTA',
        display: 'ampMNTA',
        symbol: 'ampMNTA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampmnta.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampmnta.png'
          }
        ]
      },
      {
        description: 'The content house of Kujira',
        denom_units: [
          {
            denom:
              'factory/kujira12cjjeytrqcj25uv349thltcygnp9k0kukpct0e/uwink',
            exponent: 0
          },
          {
            denom: 'wink',
            exponent: 6
          }
        ],
        base: 'factory/kujira12cjjeytrqcj25uv349thltcygnp9k0kukpct0e/uwink',
        name: 'WINK',
        display: 'wink',
        symbol: 'WINK',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/wink.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/wink.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/wink.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/wink.svg'
          }
        ]
      },
      {
        description: 'Blend Token',
        denom_units: [
          {
            denom:
              'factory/kujira1slueerjz7mx9jp45u3y0rjwtvhcf8a68wf2mjt/ublend',
            exponent: 0
          },
          {
            denom: 'blend',
            exponent: 6
          }
        ],
        base: 'factory/kujira1slueerjz7mx9jp45u3y0rjwtvhcf8a68wf2mjt/ublend',
        name: 'BLEND',
        display: 'blend',
        symbol: 'BLEND',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/blend.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/blend.svg'
          }
        ]
      },
      {
        description: 'Tether USDt on Kujira',
        denom_units: [
          {
            denom:
              'ibc/20014F963CC9E6488B299622F87B60C6DE71632864859EC08B4753478DAB2BB8',
            exponent: 0
          },
          {
            denom: 'usdt',
            exponent: 6
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/20014F963CC9E6488B299622F87B60C6DE71632864859EC08B4753478DAB2BB8',
        name: 'Tether USDt',
        display: 'usdt',
        symbol: 'USDt',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'kava',
              base_denom: 'erc20/tether/usdt',
              channel_id: 'channel-116'
            },
            chain: {
              channel_id: 'channel-95',
              path: 'transfer/channel-95/erc20/tether/usdt'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'kava',
              base_denom: 'erc20/tether/usdt'
            },
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }
      },
      {
        description: 'The staking and governance token of Fuzion',
        denom_units: [
          {
            denom:
              'factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/ufuzn',
            exponent: 0
          },
          {
            denom: 'fuzn',
            exponent: 6
          }
        ],
        base: 'factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/ufuzn',
        name: 'Fuzion',
        display: 'fuzn',
        symbol: 'FUZN',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzion.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzion.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzion.svg'
          }
        ]
      },
      {
        description: 'The receipt token of Fuzion',
        denom_units: [
          {
            denom:
              'factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/urfuzn',
            exponent: 0
          },
          {
            denom: 'rfuzn',
            exponent: 6
          }
        ],
        base: 'factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/urfuzn',
        name: 'Fuzion Receipt',
        display: 'rfuzn',
        symbol: 'rFUZN',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzionr.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzionr.png'
          }
        ]
      },
      {
        description: 'The Revenue & Governance token of Unstake.fi',
        denom_units: [
          {
            denom:
              'factory/kujira1aaudpfr9y23lt9d45hrmskphpdfaq9ajxd3ukh/unstk',
            exponent: 0
          },
          {
            denom: 'nstk',
            exponent: 6
          }
        ],
        base: 'factory/kujira1aaudpfr9y23lt9d45hrmskphpdfaq9ajxd3ukh/unstk',
        name: 'NSTK',
        display: 'nstk',
        symbol: 'NSTK',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nstk.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nstk.svg'
          }
        ]
      },
      {
        description: 'Local Money',
        denom_units: [
          {
            denom:
              'factory/kujira1swkuyt08z74n5jl7zr6hx0ru5sa2yev5v896p6/local',
            exponent: 0
          },
          {
            denom: 'local',
            exponent: 6
          }
        ],
        base: 'factory/kujira1swkuyt08z74n5jl7zr6hx0ru5sa2yev5v896p6/local',
        name: 'LOCAL',
        display: 'local',
        symbol: 'LOCAL',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/local.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/local.png'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'kyve',
    assets: [
      {
        description: 'The native utility token of the KYVE network.',
        denom_units: [
          {
            denom: 'ukyve',
            exponent: 0
          },
          {
            denom: 'kyve',
            exponent: 6
          }
        ],
        base: 'ukyve',
        name: 'KYVE',
        display: 'kyve',
        symbol: 'KYVE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg'
        },
        coingecko_id: 'kyve-network',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.svg'
        },
        coingecko_id: 'lambda',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.svg'
          }
        ]
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
        coingecko_id: 'likecoin',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'loyal',
    assets: [
      {
        description: 'The native token of Loyal',
        denom_units: [
          {
            denom: 'ulyl',
            exponent: 0
          },
          {
            denom: 'lyl',
            exponent: 6
          }
        ],
        base: 'ulyl',
        name: 'Loyal',
        display: 'lyl',
        symbol: 'LYL',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'lumenx',
    assets: [
      {
        description: 'The native token of LumenX Network',
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg'
          }
        ]
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
        coingecko_id: 'lum-network',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'mars',
    assets: [
      {
        description: 'Mars protocol token',
        denom_units: [
          {
            denom: 'umars',
            exponent: 0
          },
          {
            denom: 'mars',
            exponent: 6
          }
        ],
        base: 'umars',
        name: 'Mars',
        display: 'mars',
        symbol: 'MARS',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg'
        },
        coingecko_id: 'mars-protocol-a7fcbcfb-fd61-4017-92f0-7ee9f9cc6da3',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'mayachain',
    assets: [
      {
        description: 'The native token of Maya Protocol',
        denom_units: [
          {
            denom: 'cacao',
            exponent: 0
          },
          {
            denom: 'CACAO',
            exponent: 10
          }
        ],
        base: 'cacao',
        name: 'Cacao',
        display: 'CACAO',
        symbol: 'CACAO',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mayachain/images/cacao.svg'
          }
        ],
        coingecko_id: 'cacao',
        keywords: ['dex'],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mayachain/images/cacao.svg'
        }
      },
      {
        description: 'The native revenue sharing token of Maya Protocol',
        denom_units: [
          {
            denom: 'maya',
            exponent: 0
          },
          {
            denom: 'MAYA',
            exponent: 4
          }
        ],
        base: 'maya',
        name: 'Maya',
        display: 'MAYA',
        symbol: 'MAYA',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mayachain/images/maya.svg'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mayachain/images/maya.svg'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'medasdigital',
    assets: [
      {
        description: 'The native token of Medas Digital Network',
        denom_units: [
          {
            denom: 'umedas',
            exponent: 0
          },
          {
            denom: 'medas',
            exponent: 6
          }
        ],
        base: 'umedas',
        name: 'Medas Digital',
        display: 'medas',
        symbol: 'MEDAS',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.svg'
        },
        keywords: ['medas'],
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.svg'
          }
        ]
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
        },
        coingecko_id: 'meme-network',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'migaloo',
    assets: [
      {
        description: 'The native token of Migaloo Chain',
        denom_units: [
          {
            denom: 'uwhale',
            exponent: 0
          },
          {
            denom: 'whale',
            exponent: 6
          }
        ],
        base: 'uwhale',
        name: 'Whale',
        display: 'whale',
        symbol: 'WHALE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
        },
        coingecko_id: 'white-whale',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
          }
        ]
      },
      {
        description: 'ampWHALE',
        denom_units: [
          {
            denom:
              'factory/migaloo1436kxs0w2es6xlqpp9rd35e3d0cjnw4sv8j3a7483sgks29jqwgshqdky4/ampWHALE',
            exponent: 0
          },
          {
            denom: 'ampWHALE',
            exponent: 6
          }
        ],
        base: 'factory/migaloo1436kxs0w2es6xlqpp9rd35e3d0cjnw4sv8j3a7483sgks29jqwgshqdky4/ampWHALE',
        name: 'ampWHALE',
        display: 'ampWHALE',
        symbol: 'ampWHALE',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ampwhale.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ampwhale.svg'
          }
        ]
      },
      {
        description: 'boneWHALE',
        denom_units: [
          {
            denom:
              'factory/migaloo1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gqdhts4u/boneWhale',
            exponent: 0
          },
          {
            denom: 'boneWHALE',
            exponent: 6
          }
        ],
        base: 'factory/migaloo1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gqdhts4u/boneWhale',
        name: 'boneWHALE',
        display: 'boneWHALE',
        symbol: 'bWHALE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/bWHALE.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/bWHALE.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/bWHALE.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/bWHALE.svg'
          }
        ]
      },
      {
        description: 'FABLE',
        denom_units: [
          {
            denom:
              'factory/migaloo18a9m9stu3dyvewwcq9qmp85euxqcvln5mefync/fable',
            exponent: 0
          },
          {
            denom: 'fable',
            exponent: 6
          }
        ],
        base: 'factory/migaloo18a9m9stu3dyvewwcq9qmp85euxqcvln5mefync/fable',
        name: 'FABLE',
        display: 'fable',
        symbol: 'FABLE',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/fable.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/fable.svg'
          }
        ]
      },
      {
        description: 'boneLUNA are autocompounding LUNA tokens',
        denom_units: [
          {
            denom:
              'ibc/40C29143BF4153B365089E40E437B7AA819672646C45BB0A5F1E10915A0B6708',
            exponent: 0
          },
          {
            denom: 'bluna',
            exponent: 6
          }
        ],
        base: 'ibc/40C29143BF4153B365089E40E437B7AA819672646C45BB0A5F1E10915A0B6708',
        address:
          'cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
        type_asset: 'ics20',
        name: 'boneLuna',
        display: 'bluna',
        symbol: 'bLUNA',
        traces: [
          {
            type: 'ibc-cw20',
            counterparty: {
              chain_name: 'terra2',
              base_denom:
                'cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
              port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
              channel_id: 'channel-87'
            },
            chain: {
              port: 'transfer',
              channel_id: 'channel-2',
              path: 'transfer/channel-2/cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml'
            }
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/boneluna.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/boneluna.png'
          }
        ]
      },
      {
        description: 'RAC',
        denom_units: [
          {
            denom:
              'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac',
            exponent: 0
          },
          {
            denom: 'RAC',
            exponent: 6
          }
        ],
        base: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac',
        name: 'RAC',
        display: 'RAC',
        symbol: 'RAC',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg'
          }
        ]
      },
      {
        description: 'ASH',
        denom_units: [
          {
            denom:
              'factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash',
            exponent: 0
          },
          {
            denom: 'ASH',
            exponent: 6
          }
        ],
        base: 'factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash',
        name: 'ASH',
        display: 'ASH',
        symbol: 'ASH',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg'
          }
        ]
      },
      {
        description: 'Tether USDt on Migaloo',
        denom_units: [
          {
            denom:
              'ibc/86A25A8A327164AE7C68A29B6ED745C7EEDC36E260A6666F33A6407BECEC4737',
            exponent: 0
          },
          {
            denom: 'usdt',
            exponent: 6
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/86A25A8A327164AE7C68A29B6ED745C7EEDC36E260A6666F33A6407BECEC4737',
        name: 'Tether USDt',
        display: 'usdt',
        symbol: 'USDt',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'kava',
              base_denom: 'erc20/tether/usdt',
              channel_id: 'channel-120'
            },
            chain: {
              channel_id: 'channel-48',
              path: 'transfer/channel-48/erc20/tether/usdt'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'kava',
              base_denom: 'erc20/tether/usdt'
            },
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }
      },
      {
        description:
          'Auto componded USDC despoited into Ginkou on Migaloo chain',
        denom_units: [
          {
            denom:
              'cw20:migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v',
            exponent: 0
          },
          {
            denom: 'mUSDC',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address:
          'migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v',
        base: 'cw20:migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v',
        name: 'mUSDC',
        display: 'mUSDC',
        symbol: 'mUSDC',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/mUSDC.svg'
        },
        coingecko_id: '',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/mUSDC.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'mises',
    assets: [
      {
        description: 'The native staking and gov token of the Mises Network.',
        denom_units: [
          {
            denom: 'umis',
            exponent: 0,
            aliases: ['micromis']
          },
          {
            denom: 'mmis',
            exponent: 3,
            aliases: ['millimis']
          },
          {
            denom: 'mis',
            exponent: 6,
            aliases: []
          }
        ],
        base: 'umis',
        display: 'mis',
        name: 'mises network MIS',
        symbol: 'MIS',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mises/images/mises.png'
        },
        coingecko_id: '',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mises/images/mises.png'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'mun',
    assets: [
      {
        description: 'The native token of Mun',
        denom_units: [
          {
            denom: 'umun',
            exponent: 0
          },
          {
            denom: 'mun',
            exponent: 6
          }
        ],
        base: 'umun',
        name: 'Mun',
        display: 'mun',
        symbol: 'MUN',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mun/images/mun.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mun/images/mun.svg'
        },
        coingecko_id: '',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mun/images/mun.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mun/images/mun.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'neutron',
    assets: [
      {
        description: 'The native token of Neutron chain.',
        denom_units: [
          {
            denom: 'untrn',
            exponent: 0
          },
          {
            denom: 'ntrn',
            exponent: 6
          }
        ],
        base: 'untrn',
        name: 'Neutron',
        display: 'ntrn',
        symbol: 'NTRN',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
        },
        coingecko_id: 'neutron-3',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
          }
        ]
      },
      {
        description: 'IBC uatom through cosmoshub-4 transfer/channel-1',
        denom_units: [
          {
            denom:
              'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
            exponent: 0,
            aliases: ['uatom']
          },
          {
            denom: 'atom',
            exponent: 6
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
        name: 'IBC atom',
        display: 'atom',
        symbol: 'ATOM',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'cosmoshub',
              base_denom: 'uatom',
              channel_id: 'channel-569'
            },
            chain: {
              channel_id: 'channel-1',
              path: 'transfer/channel-1/uatom'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'cosmoshub',
              base_denom: 'uatom'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }
      },
      {
        description:
          'IBC Axelar uusdc through axelar-dojo-1 transfer/channel-2',
        denom_units: [
          {
            denom:
              'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
            exponent: 0,
            aliases: ['uusdc']
          },
          {
            denom: 'usdc',
            exponent: 6
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
        name: 'IBC usdc',
        display: 'usdc',
        symbol: 'USDC',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'axelar',
              base_denom: 'uusdc',
              channel_id: 'channel-78'
            },
            chain: {
              channel_id: 'channel-2',
              path: 'transfer/channel-2/uusdc'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'axelar',
              base_denom: 'uusdc'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
        }
      },
      {
        description: 'Tia on Neutron',
        denom_units: [
          {
            denom:
              'ibc/773B4D0A3CD667B2275D5A4A7A2F0909C0BA0F4059C0B9181E680DDF4965DCC7',
            exponent: 0,
            aliases: ['utia']
          },
          {
            denom: 'tia',
            exponent: 6
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/773B4D0A3CD667B2275D5A4A7A2F0909C0BA0F4059C0B9181E680DDF4965DCC7',
        name: 'Celestia TIA',
        display: 'tia',
        symbol: 'TIA',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'celestia',
              base_denom: 'utia',
              channel_id: 'channel-8'
            },
            chain: {
              channel_id: 'channel-35',
              path: 'transfer/channel-35'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'celestia',
              base_denom: 'utia'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
        }
      },
      {
        description: 'wstETH on Neutron',
        denom_units: [
          {
            denom:
              'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH',
            exponent: 0
          },
          {
            denom: 'wstETH',
            exponent: 18
          }
        ],
        base: 'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH',
        name: 'wstETH',
        display: 'wstETH',
        symbol: 'wstETH',
        traces: [
          {
            type: 'additional-mintage',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'
            },
            provider: 'Lido'
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'ethereum',
              base_denom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'
            },
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'noble',
    assets: [
      {
        description: 'The permissioned staking asset for Noble Chain',
        denom_units: [
          {
            denom: 'ustake',
            exponent: 0,
            aliases: ['microstake']
          },
          {
            denom: 'stake',
            exponent: 6
          }
        ],
        base: 'ustake',
        name: 'Stake',
        display: 'stake',
        symbol: 'STAKE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
          }
        ]
      },
      {
        description:
          'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
        denom_units: [
          {
            denom: 'ufrienzies',
            exponent: 0,
            aliases: ['microfrienzies']
          },
          {
            denom: 'frienzies',
            exponent: 6
          }
        ],
        base: 'ufrienzies',
        display: 'frienzies',
        name: 'Frienzies',
        symbol: 'FRNZ',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
          }
        ]
      },
      {
        description: 'ATOM token on Noble',
        denom_units: [
          {
            denom:
              'ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0',
            exponent: 0
          },
          {
            denom: 'atom',
            exponent: 6,
            aliases: ['ATOM']
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0',
        name: 'Atom Staking Coin',
        display: 'atom',
        symbol: 'ATOM',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'cosmoshub',
              base_denom: 'uatom',
              channel_id: 'channel-536'
            },
            chain: {
              channel_id: 'channel-4',
              path: 'transfer/channel-4/uatom'
            }
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
          }
        ]
      },
      {
        description: 'USD Coin',
        denom_units: [
          {
            denom: 'uusdc',
            exponent: 0,
            aliases: ['microusdc']
          },
          {
            denom: 'usdc',
            exponent: 6
          }
        ],
        base: 'uusdc',
        display: 'usdc',
        name: 'USD Coin',
        symbol: 'USDC',
        traces: [
          {
            type: 'additional-mintage',
            counterparty: {
              chain_name: 'ethereum',
              base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
            },
            provider: 'Circle'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'nois',
    assets: [
      {
        description: 'The native token of Nois',
        denom_units: [
          {
            denom: 'unois',
            exponent: 0
          },
          {
            denom: 'nois',
            exponent: 6
          }
        ],
        base: 'unois',
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
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'nolus',
    assets: [
      {
        description: 'The native token of Nolus chain',
        denom_units: [
          {
            denom: 'unls',
            exponent: 0
          },
          {
            denom: 'nls',
            exponent: 6
          }
        ],
        base: 'unls',
        name: 'Nolus',
        display: 'nls',
        symbol: 'NLS',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
        },
        coingecko_id: 'nolus',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
          }
        ]
      },
      {
        description:
          'axlUSDC transferred from the Osmosis mainnet that is supported on the Nolus chain',
        denom_units: [
          {
            denom:
              'ibc/7FBDBEEEBA9C50C4BCDF7BF438EAB99E64360833D240B32655C96E319559E911',
            exponent: 0,
            aliases: ['uusdc']
          },
          {
            denom: 'usdc',
            exponent: 6,
            aliases: []
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/7FBDBEEEBA9C50C4BCDF7BF438EAB99E64360833D240B32655C96E319559E911',
        name: 'axlUSDC',
        display: 'usdc',
        symbol: 'axlUSDC',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'osmosis',
              base_denom:
                'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858',
              channel_id: 'channel-783'
            },
            chain: {
              channel_id: 'channel-0',
              path: 'transfer/channel-0/transfer/channel-208/uusdc'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'osmosis',
              base_denom:
                'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
        }
      },
      {
        description:
          'OSMO transferred from the Osmosis mainnet that is supported on the Nolus chain',
        denom_units: [
          {
            denom:
              'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
            exponent: 0,
            aliases: ['uosmo']
          },
          {
            denom: 'osmo',
            exponent: 6,
            aliases: []
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
        name: 'Osmosis',
        display: 'osmo',
        symbol: 'OSMO',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'osmosis',
              base_denom: 'uosmo',
              channel_id: 'channel-783'
            },
            chain: {
              channel_id: 'channel-0',
              path: 'transfer/channel-0/uosmo'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'osmosis',
              base_denom: 'uosmo'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }
      },
      {
        description:
          'stOSMO transferred from the Osmosis mainnet that is supported on the Nolus chain',
        denom_units: [
          {
            denom:
              'ibc/AF5559D128329B6C753F15481BEC26E533B847A471074703FA4903E7E6F61BA1',
            exponent: 0,
            aliases: ['stuosmo']
          },
          {
            denom: 'stosmo',
            exponent: 6,
            aliases: []
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/AF5559D128329B6C753F15481BEC26E533B847A471074703FA4903E7E6F61BA1',
        name: 'Osmosis',
        display: 'stosmo',
        symbol: 'stOSMO',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'osmosis',
              base_denom:
                'ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC',
              channel_id: 'channel-783'
            },
            chain: {
              channel_id: 'channel-0',
              path: 'transfer/channel-0/transfer/channel-326/stuosmo'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'osmosis',
              base_denom:
                'ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
        }
      },
      {
        description:
          'ATOM transferred from the Osmosis mainnet that is supported on the Nolus chain',
        denom_units: [
          {
            denom:
              'ibc/6CDD4663F2F09CD62285E2D45891FC149A3568E316CE3EBBE201A71A78A69388',
            exponent: 0,
            aliases: ['uatom']
          },
          {
            denom: 'atom',
            exponent: 6,
            aliases: []
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/6CDD4663F2F09CD62285E2D45891FC149A3568E316CE3EBBE201A71A78A69388',
        name: 'Atom',
        display: 'atom',
        symbol: 'ATOM',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'osmosis',
              base_denom:
                'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
              channel_id: 'channel-783'
            },
            chain: {
              channel_id: 'channel-0',
              path: 'transfer/channel-0/transfer/channel-0/uatom'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'osmosis',
              base_denom:
                'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }
      },
      {
        description:
          'stATOM transferred from the Osmosis mainnet that is supported on the Nolus chain',
        denom_units: [
          {
            denom:
              'ibc/FCFF8B19C61677F3B78E2A5AE3B4A34A8D23858D16905F253B8438B3AFD07FF8',
            exponent: 0,
            aliases: ['ustatom']
          },
          {
            denom: 'statom',
            exponent: 6,
            aliases: []
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/FCFF8B19C61677F3B78E2A5AE3B4A34A8D23858D16905F253B8438B3AFD07FF8',
        name: 'stATOM',
        display: 'statom',
        symbol: 'stATOM',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'osmosis',
              base_denom:
                'ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901',
              channel_id: 'channel-783'
            },
            chain: {
              channel_id: 'channel-0',
              path: 'transfer/channel-0/transfer/channel-326/stuatom'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'osmosis',
              base_denom:
                'ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
        }
      },
      {
        description:
          'WETH transferred from the Osmosis mainnet that is supported on the Nolus chain',
        denom_units: [
          {
            denom:
              'ibc/A7C4A3FB19E88ABE60416125F9189DA680800F4CDD14E3C10C874E022BEFF04C',
            exponent: 0,
            aliases: ['weth-wei']
          },
          {
            denom: 'weth',
            exponent: 18,
            aliases: []
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/A7C4A3FB19E88ABE60416125F9189DA680800F4CDD14E3C10C874E022BEFF04C',
        name: 'WETH',
        display: 'weth',
        symbol: 'WETH',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'osmosis',
              base_denom:
                'ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5',
              channel_id: 'channel-783'
            },
            chain: {
              channel_id: 'channel-0',
              path: 'transfer/channel-0/transfer/channel-208/weth-wei'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'osmosis',
              base_denom:
                'ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png'
        }
      },
      {
        description:
          'WBTC transferred from the Osmosis mainnet that is supported on the Nolus chain',
        denom_units: [
          {
            denom:
              'ibc/84E70F4A34FB2DE135FD3A04FDDF53B7DA4206080AA785C8BAB7F8B26299A221',
            exponent: 0,
            aliases: ['wbtc-satoshi']
          },
          {
            denom: 'wbtc',
            exponent: 8,
            aliases: []
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/84E70F4A34FB2DE135FD3A04FDDF53B7DA4206080AA785C8BAB7F8B26299A221',
        name: 'WBTC',
        display: 'wbtc',
        symbol: 'WBTC',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'osmosis',
              base_denom:
                'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F',
              channel_id: 'channel-783'
            },
            chain: {
              channel_id: 'channel-0',
              path: 'transfer/channel-0/transfer/channel-208/wbtc-satoshi'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'osmosis',
              base_denom:
                'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png'
        }
      },
      {
        description:
          'AKT transferred from the Osmosis mainnet that is supported on the Nolus chain',
        denom_units: [
          {
            denom:
              'ibc/ADC63C00000CA75F909D2BE3ACB5A9980BED3A73B92746E0FCE6C67414055459',
            exponent: 0,
            aliases: ['uakt']
          },
          {
            denom: 'akt',
            exponent: 6,
            aliases: []
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/ADC63C00000CA75F909D2BE3ACB5A9980BED3A73B92746E0FCE6C67414055459',
        name: 'AKT',
        display: 'akt',
        symbol: 'AKT',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'osmosis',
              base_denom:
                'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4',
              channel_id: 'channel-783'
            },
            chain: {
              channel_id: 'channel-0',
              path: 'transfer/channel-0/transfer/channel-1/uakt'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'osmosis',
              base_denom:
                'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4'
            }
          }
        ]
      },
      {
        description:
          'AXL transferred from the Osmosis mainnet that is supported on the Nolus chain',
        denom_units: [
          {
            denom:
              'ibc/1B03A71B8E6F6EF424411DC9326A8E0D25D096E4D2616425CFAF2AF06F0FE717',
            exponent: 0,
            aliases: ['uaxl']
          },
          {
            denom: 'axl',
            exponent: 6,
            aliases: []
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/1B03A71B8E6F6EF424411DC9326A8E0D25D096E4D2616425CFAF2AF06F0FE717',
        name: 'AXL',
        display: 'axl',
        symbol: 'AXL',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'osmosis',
              base_denom:
                'ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E',
              channel_id: 'channel-783'
            },
            chain: {
              channel_id: 'channel-0',
              path: 'transfer/channel-0/transfer/channel-208/uaxl'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'osmosis',
              base_denom:
                'ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E'
            }
          }
        ]
      },
      {
        description:
          'JUNO transferred from the Osmosis mainnet that is supported on the Nolus chain',
        denom_units: [
          {
            denom:
              'ibc/4F3E83AB35529435E4BFEA001F5D935E7250133347C4E1010A9C77149EF0394C',
            exponent: 0,
            aliases: ['ujuno']
          },
          {
            denom: 'juno',
            exponent: 6,
            aliases: []
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/4F3E83AB35529435E4BFEA001F5D935E7250133347C4E1010A9C77149EF0394C',
        name: 'JUNO',
        display: 'juno',
        symbol: 'JUNO',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'osmosis',
              base_denom:
                'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED',
              channel_id: 'channel-783'
            },
            chain: {
              channel_id: 'channel-0',
              path: 'transfer/channel-0/transfer/channel-42/ujuno'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'osmosis',
              base_denom:
                'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED'
            }
          }
        ]
      },
      {
        description:
          'EVMOS transferred from the Osmosis mainnet that is supported on the Nolus chain',
        denom_units: [
          {
            denom:
              'ibc/A59A9C955F1AB8B76671B00C1A0482C64A6590352944BB5880E5122358F7E1CE',
            exponent: 0,
            aliases: ['aevmos']
          },
          {
            denom: 'evmos',
            exponent: 18,
            aliases: []
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/A59A9C955F1AB8B76671B00C1A0482C64A6590352944BB5880E5122358F7E1CE',
        name: 'EVMOS',
        display: 'evmos',
        symbol: 'EVMOS',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'osmosis',
              base_denom:
                'ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A',
              channel_id: 'channel-783'
            },
            chain: {
              channel_id: 'channel-0',
              path: 'transfer/channel-0/transfer/channel-204/aevmos'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'osmosis',
              base_denom:
                'ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A'
            }
          }
        ]
      },
      {
        description:
          'stkATOM transferred from the Osmosis mainnet that is supported on the Nolus chain',
        denom_units: [
          {
            denom:
              'ibc/DAAD372DB7DD45BBCFA4DDD40CA9793E9D265D1530083AB41A8A0C53C3EBE865',
            exponent: 0,
            aliases: ['stk/uatom']
          },
          {
            denom: 'stk/atom',
            exponent: 6,
            aliases: []
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/DAAD372DB7DD45BBCFA4DDD40CA9793E9D265D1530083AB41A8A0C53C3EBE865',
        name: 'stkATOM',
        display: 'stk/atom',
        symbol: 'stkATOM',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'osmosis',
              base_denom:
                'ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC',
              channel_id: 'channel-783'
            },
            chain: {
              channel_id: 'channel-0',
              path: 'transfer/channel-0/transfer/channel-4/stk/uatom'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'osmosis',
              base_denom:
                'ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC'
            }
          }
        ]
      },
      {
        description:
          'SCRT transferred from the Osmosis mainnet that is supported on the Nolus chain',
        denom_units: [
          {
            denom:
              'ibc/EA00FFF0335B07B5CD1530B7EB3D2C710620AE5B168C71AFF7B50532D690E107',
            exponent: 0,
            aliases: ['uscrt']
          },
          {
            denom: 'scrt',
            exponent: 6,
            aliases: []
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/EA00FFF0335B07B5CD1530B7EB3D2C710620AE5B168C71AFF7B50532D690E107',
        name: 'SCRT',
        display: 'scrt',
        symbol: 'SCRT',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'osmosis',
              base_denom:
                'ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A',
              channel_id: 'channel-783'
            },
            chain: {
              channel_id: 'channel-0',
              path: 'transfer/channel-0/transfer/channel-88/uscrt'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'osmosis',
              base_denom:
                'ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A'
            }
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'nomic',
    assets: [
      {
        description: "Nomic's native token.",
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg'
          }
        ]
      },
      {
        description: 'Bitcoin. On Cosmos.',
        denom_units: [
          {
            denom: 'usat',
            exponent: 0
          },
          {
            denom: 'nbtc',
            exponent: 14
          }
        ],
        base: 'usat',
        name: 'Nomic Bitcoin',
        display: 'nbtc',
        symbol: 'nBTC',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg'
        },
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'bitcoin',
              base_denom: 'sat'
            },
            provider: 'Nomic'
          }
        ],
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'nyx',
    assets: [
      {
        description: "NYX Token (NYX) is the Nym Network's native token.",
        denom_units: [
          {
            denom: 'unyx',
            exponent: 0
          },
          {
            denom: 'nyx',
            exponent: 6
          }
        ],
        base: 'unyx',
        name: 'NYX',
        display: 'nyx',
        symbol: 'NYX',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nyx.png'
        },
        coingecko_id: '',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nyx.png'
          }
        ]
      },
      {
        description:
          "NYM Token (NYM) is the Nym Network's native utility token, used as the primary means to incentivize mixnet node operators.",
        denom_units: [
          {
            denom: 'unym',
            exponent: 0
          },
          {
            denom: 'nym',
            exponent: 6
          }
        ],
        base: 'unym',
        name: 'NYM',
        display: 'nym',
        symbol: 'NYM',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym.png'
        },
        coingecko_id: 'nym',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/octa/images/octa.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/octa/images/octa.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'odin',
    assets: [
      {
        description: 'Staking and governance token for ODIN Protocol',
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
        },
        coingecko_id: 'odin-protocol',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg'
          }
        ]
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
        coingecko_id: 'oec-token',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/okexchain/images/okc.png'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg'
        },
        coingecko_id: 'omniflix-network',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'onomy',
    assets: [
      {
        description: 'The native token of Onomy Protocol',
        denom_units: [
          {
            denom: 'anom',
            exponent: 0
          },
          {
            denom: 'nom',
            exponent: 18
          }
        ],
        base: 'anom',
        name: 'Nom',
        display: 'nom',
        symbol: 'NOM',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.svg'
        },
        keywords: ['dex', 'stablecoin', 'bridge', 'staking'],
        coingecko_id: 'onomy-protocol',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.svg'
          }
        ]
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
        coingecko_id: 'oraichain-token',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.svg'
          }
        ]
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
            exponent: 0
          },
          {
            denom: 'osmo',
            exponent: 6
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
        keywords: ['dex', 'staking'],
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
          }
        ]
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
        keywords: ['memecoin'],
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
          }
        ]
      },
      {
        denom_units: [
          {
            denom:
              'factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx',
            exponent: 0
          },
          {
            denom: 'ibcx',
            exponent: 6
          }
        ],
        address:
          'osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm',
        base: 'factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx',
        name: 'IBCX Core <Product of ION DAO>',
        display: 'ibcx',
        symbol: 'IBCX',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ibcx.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ibcx.svg'
          }
        ]
      },
      {
        denom_units: [
          {
            denom:
              'factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx',
            exponent: 0
          },
          {
            denom: 'stibcx',
            exponent: 6
          }
        ],
        address:
          'osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k',
        base: 'factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx',
        name: 'stIBCX Core <Product of ION DAO>',
        display: 'stibcx',
        symbol: 'stIBCX',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.svg'
          }
        ]
      },
      {
        denom_units: [
          {
            denom:
              'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858',
            exponent: 0,
            aliases: ['uusdc']
          },
          {
            denom: 'usdc',
            exponent: 6
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858',
        name: 'Axelar USD Coin',
        display: 'usdc',
        symbol: 'USDC.axl',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'axelar',
              base_denom: 'uusdc',
              channel_id: 'channel-3'
            },
            chain: {
              channel_id: 'channel-208',
              path: 'transfer/channel-208/uusdc'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'axelar',
              base_denom: 'uusdc'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
        }
      },
      {
        denom_units: [
          {
            denom:
              'ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4',
            exponent: 0,
            aliases: ['uusdc']
          },
          {
            denom: 'usdc',
            exponent: 6
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4',
        name: 'Noble USD Coin',
        display: 'usdc',
        symbol: 'USDC',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'noble',
              base_denom: 'uusdc',
              channel_id: 'channel-1'
            },
            chain: {
              channel_id: 'channel-750',
              path: 'transfer/channel-750/uusdc'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'noble',
              base_denom: 'uusdc'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
        }
      },
      {
        denom_units: [
          {
            denom:
              'ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC',
            exponent: 0,
            aliases: ['stuosmo']
          },
          {
            denom: 'stosmo',
            exponent: 6
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC',
        name: 'stOSMO',
        display: 'stosmo',
        symbol: 'stOSMO',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'stride',
              base_denom: 'stuosmo',
              channel_id: 'channel-5'
            },
            chain: {
              channel_id: 'channel-326',
              path: 'transfer/channel-326/stuosmo'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'stride',
              base_denom: 'stuosmo'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
        }
      },
      {
        denom_units: [
          {
            denom:
              'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
            exponent: 0,
            aliases: ['uatom']
          },
          {
            denom: 'atom',
            exponent: 6
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
        name: 'Cosmos Hub Atom',
        display: 'atom',
        symbol: 'ATOM',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'cosmoshub',
              base_denom: 'uatom',
              channel_id: 'channel-141'
            },
            chain: {
              channel_id: 'channel-0',
              path: 'transfer/channel-0/uatom'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'cosmoshub',
              base_denom: 'uatom'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }
      },
      {
        denom_units: [
          {
            denom:
              'ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901',
            exponent: 0,
            aliases: ['stuatom']
          },
          {
            denom: 'statom',
            exponent: 6
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901',
        name: 'stATOM',
        display: 'statom',
        symbol: 'stATOM',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'stride',
              base_denom: 'stuatom',
              channel_id: 'channel-5'
            },
            chain: {
              channel_id: 'channel-326',
              path: 'transfer/channel-326/stuatom'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'stride',
              base_denom: 'stuatom'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
        }
      },
      {
        denom_units: [
          {
            denom:
              'ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5',
            exponent: 0,
            aliases: ['weth-wei']
          },
          {
            denom: 'weth',
            exponent: 18
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5',
        name: 'Wrapped Ether',
        display: 'weth',
        symbol: 'ETH',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'axelar',
              base_denom: 'weth-wei',
              channel_id: 'channel-3'
            },
            chain: {
              channel_id: 'channel-208',
              path: 'transfer/channel-208/weth-wei'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'axelar',
              base_denom: 'weth-wei'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png'
        }
      },
      {
        denom_units: [
          {
            denom:
              'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F',
            exponent: 0,
            aliases: ['wbtc-satoshi']
          },
          {
            denom: 'wbtc',
            exponent: 8
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F',
        name: 'Wrapped Bitcoin',
        display: 'wbtc',
        symbol: 'WBTC',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'axelar',
              base_denom: 'wbtc-satoshi',
              channel_id: 'channel-3'
            },
            chain: {
              channel_id: 'channel-208',
              path: 'transfer/channel-208/wbtc-satoshi'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'axelar',
              base_denom: 'wbtc-satoshi'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png'
        }
      },
      {
        description: 'ERIS liquid staked OSMO',
        denom_units: [
          {
            denom:
              'factory/osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9/ampOSMO',
            exponent: 0
          },
          {
            denom: 'ampOSMO',
            exponent: 6
          }
        ],
        address:
          'osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9',
        base: 'factory/osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9/ampOSMO',
        name: 'ERIS Amplified OSMO',
        display: 'ampOSMO',
        symbol: 'ampOSMO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/amposmo.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/amposmo.png'
          }
        ]
      },
      {
        description: 'Tether USDT on Osmosis',
        denom_units: [
          {
            denom:
              'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB',
            exponent: 0
          },
          {
            denom: 'usdt',
            exponent: 6
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB',
        name: 'Tether USDT',
        display: 'usdt',
        symbol: 'USDT',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'kava',
              base_denom: 'erc20/tether/usdt',
              channel_id: 'channel-1'
            },
            chain: {
              channel_id: 'channel-143',
              path: 'transfer/channel-143/erc20/tether/usdt'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'kava',
              base_denom: 'erc20/tether/usdt'
            },
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }
      },
      {
        description: "Membrane's CDP-style stablecoin called CDT",
        denom_units: [
          {
            denom:
              'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt',
            exponent: 0
          },
          {
            denom: 'cdt',
            exponent: 6
          }
        ],
        base: 'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt',
        name: 'CDT',
        display: 'cdt',
        symbol: 'CDT',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CDT.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CDT.svg'
          }
        ]
      },
      {
        description: "Membrane's protocol token",
        denom_units: [
          {
            denom:
              'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn',
            exponent: 0
          },
          {
            denom: 'mbrn',
            exponent: 6
          }
        ],
        base: 'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn',
        name: 'MBRN',
        display: 'mbrn',
        symbol: 'MBRN',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/MBRN.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/MBRN.svg'
          }
        ]
      },
      {
        description: 'DYDX on Osmosis',
        denom_units: [
          {
            denom:
              'ibc/831F0B1BBB1D08A2B75311892876D71565478C532967545476DF4C2D7492E48C',
            exponent: 0,
            aliases: ['adydx']
          },
          {
            denom: 'dydx',
            exponent: 18
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/831F0B1BBB1D08A2B75311892876D71565478C532967545476DF4C2D7492E48C',
        name: 'DYDX',
        display: 'dydx',
        symbol: 'DYDX',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'dydx',
              base_denom: 'adydx',
              channel_id: 'channel-3'
            },
            chain: {
              channel_id: 'channel-6787',
              path: 'transfer/channel-6787/adydx'
            }
          }
        ],
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg',
            theme: {
              circle: true
            }
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg'
        }
      },
      {
        description: 'TIA on Osmosis',
        denom_units: [
          {
            denom:
              'ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877',
            exponent: 0,
            aliases: ['utia']
          },
          {
            denom: 'tia',
            exponent: 6
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877',
        name: 'Celestia TIA',
        display: 'tia',
        symbol: 'TIA',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'celestia',
              base_denom: 'utia',
              channel_id: 'channel-2'
            },
            chain: {
              channel_id: 'channel-6994',
              path: 'transfer/channel-6994/utia'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'celestia',
              base_denom: 'utia'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
        }
      },
      {
        description: 'Margined Power Token sqOSMO',
        denom_units: [
          {
            denom:
              'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/squosmo',
            exponent: 0
          },
          {
            denom: 'sqosmo',
            exponent: 6
          }
        ],
        base: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/squosmo',
        name: 'OSMO Squared',
        display: 'sqosmo',
        symbol: 'sqOSMO',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqosmo.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqosmo.svg'
          }
        ]
      },
      {
        description: 'NOIS on Osmosis',
        denom_units: [
          {
            denom:
              'ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273',
            exponent: 0,
            aliases: ['unois']
          },
          {
            denom: 'nois',
            exponent: 6
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273',
        name: 'Nois NOIS',
        display: 'nois',
        symbol: 'NOIS',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'nois',
              base_denom: 'unois',
              channel_id: 'channel-37'
            },
            chain: {
              channel_id: 'channel-8277',
              path: 'transfer/channel-8277'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'nois',
              base_denom: 'unois'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
        }
      },
      {
        description: 'Margined Power Token sqBTC',
        denom_units: [
          {
            denom: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqbtc',
            exponent: 0
          },
          {
            denom: 'sqbtc',
            exponent: 6
          }
        ],
        base: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqbtc',
        name: 'BTC Squared',
        display: 'sqbtc',
        symbol: 'sqBTC',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqbtc.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqbtc.svg'
          }
        ]
      },
      {
        description: 'Margined Power Token sqATOM',
        denom_units: [
          {
            denom: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqatom',
            exponent: 0
          },
          {
            denom: 'sqatom',
            exponent: 6
          }
        ],
        base: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqatom',
        name: 'ATOM Squared',
        display: 'sqatom',
        symbol: 'sqATOM',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqatom.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqatom.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg'
        },
        coingecko_id: 'medibloc',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg'
          }
        ]
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
        coingecko_id: 'passage',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'passage1',
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png'
          }
        ]
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
        coingecko_id: 'persistence',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
          }
        ]
      },
      {
        description: 'PSTAKE Liquid-Staked ATOM',
        denom_units: [
          {
            denom: 'stk/uatom',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'stkatom',
            exponent: 6,
            aliases: ['stk/atom']
          }
        ],
        base: 'stk/uatom',
        name: 'PSTAKE staked ATOM',
        display: 'stkatom',
        symbol: 'stkATOM',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
        },
        coingecko_id: 'stkatom',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
          }
        ]
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
        type_asset: 'ics20',
        base: 'ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444',
        name: 'pSTAKE Finance',
        display: 'pstake',
        symbol: 'PSTAKE',
        traces: [
          {
            type: 'liquid-stake',
            counterparty: {
              chain_name: 'persistence',
              base_denom: 'uxprt'
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
        keywords: ['canon'],
        images: [
          {
            image_sync: {
              chain_name: 'ethereum',
              base_denom: '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
          }
        ]
      },
      {
        denom_units: [
          {
            denom:
              'ibc/C8A74ABBE2AF892E15680D916A7C22130585CE5704F9B17A10F184A90D53BECA',
            exponent: 0,
            aliases: ['uatom']
          },
          {
            denom: 'atom',
            exponent: 6
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/C8A74ABBE2AF892E15680D916A7C22130585CE5704F9B17A10F184A90D53BECA',
        name: 'Cosmos Hub Atom',
        display: 'atom',
        symbol: 'ATOM',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'cosmoshub',
              base_denom: 'uatom',
              channel_id: 'channel-190'
            },
            chain: {
              channel_id: 'channel-24',
              path: 'transfer/channel-24/uatom'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'cosmoshub',
              base_denom: 'uatom'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }
      },
      {
        description: 'Tether USDT on Persistence',
        denom_units: [
          {
            denom:
              'ibc/C559977F5797BDC1D74C0836A10C379C991D664166CB60D776A83029852431B4',
            exponent: 0
          },
          {
            denom: 'usdt',
            exponent: 6
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/C559977F5797BDC1D74C0836A10C379C991D664166CB60D776A83029852431B4',
        name: 'Tether USDT',
        display: 'usdt',
        symbol: 'USDT',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'kava',
              base_denom: 'erc20/tether/usdt',
              channel_id: 'channel-134'
            },
            chain: {
              channel_id: 'channel-129',
              path: 'transfer/channel-129/erc20/tether/usdt'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'kava',
              base_denom: 'erc20/tether/usdt'
            },
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }
      },
      {
        denom_units: [
          {
            denom:
              'ibc/B3792E4A62DF4A934EF2DF5968556DB56F5776ED25BDE11188A4F58A7DD406F0',
            exponent: 0,
            aliases: ['uusdc']
          },
          {
            denom: 'usdc',
            exponent: 6
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/B3792E4A62DF4A934EF2DF5968556DB56F5776ED25BDE11188A4F58A7DD406F0',
        name: 'Noble USD Coin',
        display: 'usdc',
        symbol: 'USDC',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'noble',
              base_denom: 'uusdc',
              channel_id: 'channel-36'
            },
            chain: {
              channel_id: 'channel-132',
              path: 'transfer/channel-132/uusdc'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'noble',
              base_denom: 'uusdc'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'planq',
    assets: [
      {
        description:
          'The native EVM, governance and staking token of the Planq Network',
        denom_units: [
          {
            denom: 'aplanq',
            exponent: 0
          },
          {
            denom: 'planq',
            exponent: 18
          }
        ],
        base: 'aplanq',
        name: 'Planq',
        display: 'planq',
        symbol: 'PLQ',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
        },
        coingecko_id: 'planq',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.svg'
        },
        coingecko_id: 'point-network',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.svg'
          }
        ]
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
            exponent: 0
          },
          {
            denom: 'hash',
            exponent: 9
          }
        ],
        base: 'nhash',
        name: 'Hash',
        display: 'hash',
        symbol: 'HASH',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
        },
        coingecko_id: 'provenance-blockchain',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'quasar',
    assets: [
      {
        description: 'The native token of Quasar',
        denom_units: [
          {
            denom: 'uqsr',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'qsr',
            exponent: 6,
            aliases: []
          }
        ],
        type_asset: 'sdk.coin',
        base: 'uqsr',
        name: 'Quasar',
        display: 'qsr',
        symbol: 'QSR',
        coingecko_id: 'quasar-2',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png'
          }
        ]
      },
      {
        description: 'OSMO from Osmosis',
        denom_units: [
          {
            denom:
              'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B',
            exponent: 0,
            aliases: ['uosmo']
          },
          {
            denom: 'osmo',
            exponent: 6,
            aliases: []
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B',
        name: 'Osmosis',
        display: 'osmo',
        symbol: 'OSMO',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'osmosis',
              base_denom: 'uosmo',
              channel_id: 'channel-668'
            },
            chain: {
              channel_id: 'channel-1',
              path: 'transfer/channel-1/uosmo'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'osmosis',
              base_denom: 'uosmo'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }
      },
      {
        description: 'ATOM from Osmosis',
        denom_units: [
          {
            denom:
              'ibc/FA0006F056DB6719B8C16C551FC392B62F5729978FC0B125AC9A432DBB2AA1A5',
            exponent: 0,
            aliases: ['uatom']
          },
          {
            denom: 'atom',
            exponent: 6,
            aliases: []
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/FA0006F056DB6719B8C16C551FC392B62F5729978FC0B125AC9A432DBB2AA1A5',
        name: 'Atom',
        display: 'atom',
        symbol: 'ATOM',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'osmosis',
              base_denom:
                'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
              channel_id: 'channel-668'
            },
            chain: {
              channel_id: 'channel-1',
              path: 'transfer/channel-1/transfer/channel-0/uatom'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'osmosis',
              base_denom:
                'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }
      },
      {
        description: 'USDC.axl from Osmosis',
        denom_units: [
          {
            denom:
              'ibc/FA7775734CC73176B7425910DE001A1D2AD9B6D9E93129A5D0750EAD13E4E63A',
            exponent: 0,
            aliases: ['uusdc']
          },
          {
            denom: 'usdc',
            exponent: 6,
            aliases: []
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/FA7775734CC73176B7425910DE001A1D2AD9B6D9E93129A5D0750EAD13E4E63A',
        name: 'USD Coin',
        display: 'usdc',
        symbol: 'USDC.axl',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'osmosis',
              base_denom:
                'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858',
              channel_id: 'channel-668'
            },
            chain: {
              channel_id: 'channel-1',
              path: 'transfer/channel-1/transfer/channel-208/uusdc'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'osmosis',
              base_denom:
                'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'quicksilver',
    assets: [
      {
        description: 'QCK - native token of Quicksilver',
        denom_units: [
          {
            denom: 'uqck',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'qck',
            exponent: 6,
            aliases: []
          }
        ],
        base: 'uqck',
        name: 'Quicksilver',
        display: 'qck',
        symbol: 'QCK',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
        },
        coingecko_id: 'quicksilver',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
          }
        ]
      },
      {
        description: 'Quicksilver Liquid Staked STARS',
        denom_units: [
          {
            denom: 'uqstars',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'qstars',
            exponent: 6,
            aliases: []
          }
        ],
        base: 'uqstars',
        name: 'Quicksilver Liquid Staked STARS',
        display: 'qstars',
        symbol: 'qSTARS',
        traces: [
          {
            type: 'liquid-stake',
            counterparty: {
              chain_name: 'stargaze',
              base_denom: 'ustars'
            },
            provider: 'Quicksilver'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.svg'
          }
        ]
      },
      {
        description: 'Quicksilver Liquid Staked ATOM',
        denom_units: [
          {
            denom: 'uqatom',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'qatom',
            exponent: 6,
            aliases: []
          }
        ],
        base: 'uqatom',
        name: 'Quicksilver Liquid Staked ATOM',
        display: 'qatom',
        symbol: 'qATOM',
        traces: [
          {
            type: 'liquid-stake',
            counterparty: {
              chain_name: 'cosmoshub',
              base_denom: 'uatom'
            },
            provider: 'Quicksilver'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.svg'
          }
        ]
      },
      {
        description: 'Quicksilver Liquid Staked REGEN',
        denom_units: [
          {
            denom: 'uqregen',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'qregen',
            exponent: 6,
            aliases: []
          }
        ],
        base: 'uqregen',
        name: 'Quicksilver Liquid Staked Regen',
        display: 'qregen',
        symbol: 'qREGEN',
        traces: [
          {
            type: 'liquid-stake',
            counterparty: {
              chain_name: 'regen',
              base_denom: 'uregen'
            },
            provider: 'Quicksilver'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.svg'
          }
        ]
      },
      {
        description: 'Quicksilver Liquid Staked OSMO',
        denom_units: [
          {
            denom: 'uqosmo',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'qosmo',
            exponent: 6,
            aliases: []
          }
        ],
        base: 'uqosmo',
        name: 'Quicksilver Liquid Staked OSMO',
        display: 'qosmo',
        symbol: 'qOSMO',
        traces: [
          {
            type: 'liquid-stake',
            counterparty: {
              chain_name: 'osmosis',
              base_denom: 'uosmo'
            },
            provider: 'Quicksilver'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.svg'
          }
        ]
      },
      {
        description: 'Quicksilver Liquid Staked SOMM',
        denom_units: [
          {
            denom: 'uqsomm',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'qsomm',
            exponent: 6,
            aliases: []
          }
        ],
        base: 'uqsomm',
        name: 'Quicksilver Liquid Staked SOMM',
        display: 'qsomm',
        symbol: 'qSOMM',
        traces: [
          {
            type: 'liquid-stake',
            counterparty: {
              chain_name: 'sommelier',
              base_denom: 'usomm'
            },
            provider: 'Quicksilver'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'qwoyn',
    assets: [
      {
        description: 'QWOYN is the native governance token for Qwoyn Network',
        denom_units: [
          {
            denom: 'uqwoyn',
            exponent: 0
          },
          {
            denom: 'qwoyn',
            exponent: 6
          }
        ],
        base: 'uqwoyn',
        name: 'Qwoyn Blockchain',
        display: 'qwoyn',
        symbol: 'QWOYN',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'realio',
    assets: [
      {
        description: 'The native currency of the Realio Network.',
        denom_units: [
          {
            denom: 'ario',
            exponent: 0
          },
          {
            denom: 'rio',
            exponent: 18
          }
        ],
        base: 'ario',
        name: 'Realio Network',
        display: 'rio',
        symbol: 'RIO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg'
        },
        coingecko_id: 'realio-network',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg'
          }
        ]
      },
      {
        description:
          'A hybrid equity token that represent ownership of the Realio Ecosystem and provides utility functions on the Network.',
        denom_units: [
          {
            denom: 'arst',
            exponent: 0
          },
          {
            denom: 'rst',
            exponent: 18
          }
        ],
        base: 'arst',
        name: 'Realio Security Token',
        display: 'rst',
        symbol: 'RST',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rst.png'
        },
        coingecko_id: '',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rst.png'
          }
        ]
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
        },
        coingecko_id: 'rebus',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg'
        },
        coingecko_id: 'regen',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg'
          }
        ]
      },
      {
        description:
          'Nature Carbon Ton (NCT) is a carbon token standard backed 1:1 by carbon credits issued by Verra, a global leader in the voluntary carbon market. NCT credits on Regen Network have been tokenized by Toucan.earth.',
        denom_units: [
          {
            denom: 'eco.uC.NCT',
            exponent: 0
          },
          {
            denom: 'nct',
            exponent: 6
          }
        ],
        base: 'eco.uC.NCT',
        name: 'Nature Carbon Ton',
        display: 'nct',
        symbol: 'NCT',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg'
        },
        coingecko_id: 'toucan-protocol-nature-carbon-tonne',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.svg'
          }
        ]
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
        coingecko_id: 'secret',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
          }
        ]
      },
      {
        description: 'The native token cw20 for SIENNA on Secret Network',
        denom_units: [
          {
            denom: 'cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
            exponent: 0
          },
          {
            denom: 'sienna',
            exponent: 18
          }
        ],
        type_asset: 'snip20',
        address: 'secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
        base: 'cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
        name: 'SIENNA',
        display: 'sienna',
        symbol: 'SIENNA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
        },
        coingecko_id: 'sienna',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
          }
        ]
      },
      {
        description: 'The native token cw20 for Shade on Secret Network',
        denom_units: [
          {
            denom: 'cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
            exponent: 0
          },
          {
            denom: 'shd',
            exponent: 8
          }
        ],
        type_asset: 'snip20',
        address: 'secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
        base: 'cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
        name: 'Shade (old)',
        display: 'shd',
        symbol: 'SHD(old)',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
          }
        ]
      },
      {
        description: 'The native token cw20 for Shade on Secret Network',
        denom_units: [
          {
            denom: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
            exponent: 0
          },
          {
            denom: 'shd',
            exponent: 8
          }
        ],
        type_asset: 'snip25',
        address: 'secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
        base: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
        name: 'Shade',
        display: 'shd',
        symbol: 'SHD',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
        },
        coingecko_id: 'shade-protocol',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
          }
        ]
      },
      {
        description: 'The native token cw20 for Silk on Secret Network',
        denom_units: [
          {
            denom: 'cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
            exponent: 0
          },
          {
            denom: 'silk',
            exponent: 6
          }
        ],
        type_asset: 'snip25',
        address: 'secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
        base: 'cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
        name: 'Silk',
        display: 'silk',
        symbol: 'SILK',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
          }
        ]
      },
      {
        description:
          'The native token cw20 for SCRT Staking Derivatives on Secret Network',
        denom_units: [
          {
            denom: 'cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
            exponent: 0
          },
          {
            denom: 'stkd-scrt',
            exponent: 6
          }
        ],
        type_asset: 'snip20',
        address: 'secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
        base: 'cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
        name: 'SCRT Staking Derivatives',
        display: 'stkd-scrt',
        symbol: 'stkd-SCRT',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg'
        },
        coingecko_id: 'stkd-scrt',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg'
          }
        ]
      },
      {
        description: 'The native token cw20 for Button on Secret Network',
        denom_units: [
          {
            denom: 'cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
            exponent: 0
          },
          {
            denom: 'butt',
            exponent: 6
          }
        ],
        type_asset: 'snip20',
        address: 'secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
        base: 'cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
        name: 'Button',
        display: 'butt',
        symbol: 'BUTT',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg'
        },
        coingecko_id: 'buttcoin-2',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg'
          }
        ]
      },
      {
        description: 'The native token cw20 for Alter on Secret Network',
        denom_units: [
          {
            denom: 'cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
            exponent: 0
          },
          {
            denom: 'alter',
            exponent: 6
          }
        ],
        base: 'cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
        name: 'Alter',
        display: 'alter',
        symbol: 'ALTER',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg'
        },
        coingecko_id: 'alter',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg'
          }
        ]
      },
      {
        description: 'The native token cw20 for Amber on Secret Network',
        denom_units: [
          {
            denom: 'cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
            exponent: 0
          },
          {
            denom: 'amber',
            exponent: 6
          }
        ],
        type_asset: 'snip20',
        address: 'secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
        base: 'cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
        name: 'Amber',
        display: 'amber',
        symbol: 'AMBER',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg'
          }
        ]
      },
      {
        description: 'The native token cw20 for Shill on Secret Network',
        denom_units: [
          {
            denom: 'cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
            exponent: 0
          },
          {
            denom: 'shill',
            exponent: 6
          }
        ],
        type_asset: 'snip25',
        address: 'secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
        base: 'cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
        name: 'Shill',
        display: 'shill',
        symbol: 'SHILL',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'sei',
    assets: [
      {
        description: 'The native staking token of Sei.',
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
        },
        coingecko_id: 'sei-network',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
          }
        ]
      },
      {
        description:
          'OIN Token ($OIN) is a groundbreaking digital asset developed on the $SEI Blockchain. It transcends being merely a cryptocurrency; $OIN stands as a robust store of value, symbolizing the future of decentralized finance and its potential to reshape the crypto landscape.',
        denom_units: [
          {
            denom: 'factory/sei1thgp6wamxwqt7rthfkeehktmq0ujh5kspluw6w/OIN',
            exponent: 0
          },
          {
            denom: 'oin',
            exponent: 6
          }
        ],
        address: 'sei1thgp6wamxwqt7rthfkeehktmq0ujh5kspluw6w',
        base: 'factory/sei1thgp6wamxwqt7rthfkeehktmq0ujh5kspluw6w/OIN',
        name: 'OIN STORE OF VALUE',
        display: 'oin',
        symbol: 'OIN',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oin.png'
        },
        coingecko_id: '',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oin.png'
          }
        ]
      },
      {
        description: 'ERIS liquid staked SEI',
        denom_units: [
          {
            denom:
              'factory/sei1x2fgaaqecvk8kwuqkjqcj27clw5p5g99uawdzy9sc4rku8avumcq3cky4k/ampSEI',
            exponent: 0
          },
          {
            denom: 'ampSEI',
            exponent: 6
          }
        ],
        base: 'factory/sei1x2fgaaqecvk8kwuqkjqcj27clw5p5g99uawdzy9sc4rku8avumcq3cky4k/ampSEI',
        name: 'ERIS Amplified SEI',
        display: 'ampSEI',
        symbol: 'ampSEI',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/ampsei.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/ampsei.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg'
        },
        coingecko_id: 'sentinel',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'sge',
    assets: [
      {
        description: 'The native token of SGE Network',
        denom_units: [
          {
            denom: 'usge',
            exponent: 0
          },
          {
            denom: 'sge',
            exponent: 6
          }
        ],
        base: 'usge',
        name: 'SGE',
        display: 'sge',
        symbol: 'SGE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg'
        },
        coingecko_id: 'six-sigma',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'shareledger',
    assets: [
      {
        description: 'The native token of Shareledger',
        denom_units: [
          {
            denom: 'nshr',
            exponent: 0
          },
          {
            denom: 'shr',
            exponent: 9
          }
        ],
        base: 'nshr',
        name: 'Shareledger',
        display: 'shr',
        symbol: 'SHR',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/token.svg'
        },
        coingecko_id: 'shareledger',
        keywords: ['id'],
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/token.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/token.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg'
        },
        coingecko_id: 'certik',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg'
          }
        ]
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
            exponent: 0
          },
          {
            denom: 'ROWAN',
            exponent: 18
          }
        ],
        base: 'rowan',
        name: 'Sifchain Rowan',
        display: 'ROWAN',
        symbol: 'ROWAN',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg'
        },
        coingecko_id: 'sifchain',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg'
          }
        ]
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
        coingecko_id: 'sommelier',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'source',
    assets: [
      {
        description: 'The native token of SOURCE Chain',
        denom_units: [
          {
            denom: 'usource',
            exponent: 0
          },
          {
            denom: 'source',
            exponent: 6
          }
        ],
        base: 'usource',
        name: 'Source',
        display: 'source',
        symbol: 'SOURCE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg'
        },
        coingecko_id: 'source',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'stafihub',
    assets: [
      {
        description:
          'The native staking and governance token of the StaFi Hub.',
        denom_units: [
          {
            denom: 'ufis',
            exponent: 0
          },
          {
            denom: 'fis',
            exponent: 6
          }
        ],
        base: 'ufis',
        name: 'FIS',
        display: 'fis',
        symbol: 'FIS',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
        },
        coingecko_id: 'stafi',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
          }
        ]
      },
      {
        description: 'A liquid staking representation of staked ATOMs',
        denom_units: [
          {
            denom: 'uratom',
            exponent: 0
          },
          {
            denom: 'ratom',
            exponent: 6
          }
        ],
        base: 'uratom',
        name: 'rATOM',
        display: 'ratom',
        symbol: 'rATOM',
        traces: [
          {
            type: 'liquid-stake',
            counterparty: {
              chain_name: 'cosmoshub',
              base_denom: 'uatom'
            },
            provider: 'StaFiHub'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/ratom.svg'
        },
        coingecko_id: '',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/ratom.svg'
          }
        ]
      },
      {
        description: 'A liquid staking representation of staked IRISs',
        denom_units: [
          {
            denom: 'uriris',
            exponent: 0
          },
          {
            denom: 'riris',
            exponent: 6
          }
        ],
        base: 'uriris',
        name: 'rIRIS',
        display: 'riris',
        symbol: 'rIRIS',
        traces: [
          {
            type: 'liquid-stake',
            counterparty: {
              chain_name: 'irisnet',
              base_denom: 'uiris'
            },
            provider: 'StaFiHub'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/riris.svg'
        },
        coingecko_id: '',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/riris.svg'
          }
        ]
      },
      {
        description: 'A liquid staking representation of staked HUAHUAs',
        denom_units: [
          {
            denom: 'urhuahua',
            exponent: 0
          },
          {
            denom: 'rhuahua',
            exponent: 6
          }
        ],
        base: 'urhuahua',
        name: 'rHUAHUA',
        display: 'rhuahua',
        symbol: 'rHUAHUA',
        traces: [
          {
            type: 'liquid-stake',
            counterparty: {
              chain_name: 'chihuahua',
              base_denom: 'uhuahua'
            },
            provider: 'StaFiHub'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/rhuahua.svg'
        },
        coingecko_id: '',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/rhuahua.svg'
          }
        ]
      },
      {
        description: 'A liquid staking representation of staked SWTHs',
        denom_units: [
          {
            denom: 'urswth',
            exponent: 0
          },
          {
            denom: 'rswth',
            exponent: 8
          }
        ],
        base: 'urswth',
        name: 'rSWTH',
        display: 'rswth',
        symbol: 'rSWTH',
        traces: [
          {
            type: 'liquid-stake',
            counterparty: {
              chain_name: 'carbon',
              base_denom: 'uswth'
            },
            provider: 'StaFiHub'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/rswth.svg'
        },
        coingecko_id: '',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/rswth.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
        },
        coingecko_id: 'stargaze',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
          }
        ]
      },
      {
        description: 'The native token of ohhNFT.',
        denom_units: [
          {
            denom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust',
            exponent: 0
          },
          {
            denom: 'strdst',
            exponent: 6
          }
        ],
        base: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust',
        name: 'Stardust STRDST',
        display: 'strdst',
        symbol: 'STRDST',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.svg'
        },
        coingecko_id: '',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.svg'
          }
        ]
      },
      {
        description: 'The native meme token of stargaze.',
        denom_units: [
          {
            denom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/mGAZE',
            exponent: 0
          },
          {
            denom: 'GAZE',
            exponent: 6
          }
        ],
        base: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/mGAZE',
        name: 'Gaze GAZE',
        display: 'GAZE',
        symbol: 'GAZE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.svg'
        },
        coingecko_id: '',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.svg'
          }
        ]
      },
      {
        description: 'ohhNFT LP token.',
        denom_units: [
          {
            denom:
              'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH',
            exponent: 0
          },
          {
            denom: 'BRNCH',
            exponent: 6
          }
        ],
        base: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH',
        name: 'Branch',
        display: 'BRNCH',
        symbol: 'BRNCH',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.svg'
        },
        coingecko_id: '',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.svg'
          }
        ]
      },
      {
        description: 'Social token for the ohhVAULT.',
        denom_units: [
          {
            denom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uOHH',
            exponent: 0
          },
          {
            denom: 'OHH',
            exponent: 6
          }
        ],
        base: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uOHH',
        name: 'ohhVAULT ohh',
        display: 'OHH',
        symbol: 'OHH',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.svg'
        },
        coingecko_id: '',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.svg'
          }
        ]
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
        coingecko_id: 'starname',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'stratos',
    assets: [
      {
        description:
          'STOS coin is the token for the Stratos (STOS) cosmos based blockchain',
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
            denom: 'stos',
            exponent: 18
          }
        ],
        base: 'wei',
        name: 'Stratos',
        display: 'stos',
        symbol: 'STOS',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.svg'
        },
        coingecko_id: 'stratos',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.svg'
          }
        ]
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
            exponent: 0
          },
          {
            denom: 'strd',
            exponent: 6
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
        coingecko_id: 'stride',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
          }
        ]
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
        traces: [
          {
            type: 'liquid-stake',
            counterparty: {
              chain_name: 'cosmoshub',
              base_denom: 'uatom'
            },
            provider: 'Stride'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
        },
        coingecko_id: 'stride-staked-atom',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
          }
        ]
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
        traces: [
          {
            type: 'liquid-stake',
            counterparty: {
              chain_name: 'stargaze',
              base_denom: 'ustars'
            },
            provider: 'Stride'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg'
          }
        ]
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
        traces: [
          {
            type: 'liquid-stake',
            counterparty: {
              chain_name: 'osmosis',
              base_denom: 'uosmo'
            },
            provider: 'Stride'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
          }
        ]
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
        traces: [
          {
            type: 'liquid-stake',
            counterparty: {
              chain_name: 'juno',
              base_denom: 'ujuno'
            },
            provider: 'Stride'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg'
          }
        ]
      },
      {
        denom_units: [
          {
            denom: 'stuluna',
            exponent: 0
          },
          {
            denom: 'stluna',
            exponent: 6
          }
        ],
        base: 'stuluna',
        name: 'stLUNA',
        display: 'stluna',
        symbol: 'stLUNA',
        traces: [
          {
            type: 'liquid-stake',
            counterparty: {
              chain_name: 'terra2',
              base_denom: 'uluna'
            },
            provider: 'Stride'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.svg'
          }
        ]
      },
      {
        denom_units: [
          {
            denom: 'stinj',
            exponent: 0
          },
          {
            denom: 'stINJ',
            exponent: 18
          }
        ],
        base: 'stinj',
        name: 'stINJ',
        display: 'stINJ',
        symbol: 'stINJ',
        traces: [
          {
            type: 'liquid-stake',
            counterparty: {
              chain_name: 'injective',
              base_denom: 'inj'
            },
            provider: 'Stride'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.svg'
          }
        ]
      },
      {
        denom_units: [
          {
            denom: 'staevmos',
            exponent: 0
          },
          {
            denom: 'stevmos',
            exponent: 18
          }
        ],
        base: 'staevmos',
        name: 'stEVMOS',
        display: 'stevmos',
        symbol: 'stEVMOS',
        traces: [
          {
            type: 'liquid-stake',
            counterparty: {
              chain_name: 'evmos',
              base_denom: 'uaevmos'
            },
            provider: 'Stride'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.svg'
          }
        ]
      },
      {
        denom_units: [
          {
            denom: 'stuumee',
            exponent: 0
          },
          {
            denom: 'stumee',
            exponent: 6
          }
        ],
        base: 'stuumee',
        name: 'stUMEE',
        display: 'stumee',
        symbol: 'stUMEE',
        traces: [
          {
            type: 'liquid-stake',
            counterparty: {
              chain_name: 'umee',
              base_denom: 'uumee'
            },
            provider: 'Stride'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.svg'
          }
        ]
      },
      {
        denom_units: [
          {
            denom: 'stucmdx',
            exponent: 0
          },
          {
            denom: 'stcmdx',
            exponent: 6
          }
        ],
        base: 'stucmdx',
        name: 'stCMDX',
        display: 'stcmdx',
        symbol: 'stCMDX',
        traces: [
          {
            type: 'liquid-stake',
            counterparty: {
              chain_name: 'comdex',
              base_denom: 'ucmdx'
            },
            provider: 'Stride'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stcmdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stcmdx.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stcmdx.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stcmdx.svg'
          }
        ]
      },
      {
        denom_units: [
          {
            denom: 'stusomm',
            exponent: 0
          },
          {
            denom: 'stsomm',
            exponent: 6
          }
        ],
        base: 'stusomm',
        name: 'stSOMM',
        display: 'stsomm',
        symbol: 'stSOMM',
        traces: [
          {
            type: 'liquid-stake',
            counterparty: {
              chain_name: 'sommelier',
              base_denom: 'usomm'
            },
            provider: 'Stride'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'tenet',
    assets: [
      {
        description:
          'The native EVM, governance and staking token of the Tenet',
        denom_units: [
          {
            denom: 'atenet',
            exponent: 0
          },
          {
            denom: 'tenet',
            exponent: 18
          }
        ],
        base: 'atenet',
        name: 'Tenet',
        display: 'tenet',
        symbol: 'TENET',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.svg'
        },
        coingecko_id: 'tenet-1b000f7b-59cb-4e06-89ce-d62b32d362b9',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'teritori',
    assets: [
      {
        description: 'The native token of Teritori',
        denom_units: [
          {
            denom: 'utori',
            exponent: 0
          },
          {
            denom: 'tori',
            exponent: 6
          }
        ],
        base: 'utori',
        name: 'Teritori',
        display: 'tori',
        symbol: 'TORI',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg'
        },
        coingecko_id: 'teritori',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'terpnetwork',
    assets: [
      {
        description:
          "Terp Token (TERP) is the Terp Network's native utility token, used as the primary means to govern & secure the blockchain.",
        denom_units: [
          {
            denom: 'uterp',
            exponent: 0
          },
          {
            denom: 'terp',
            exponent: 6
          }
        ],
        base: 'uterp',
        name: 'Terp Network Native Token',
        display: 'terp',
        symbol: 'TERP',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/terp.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/terp.png'
          }
        ]
      },
      {
        description:
          "Thiol Gas Token (Thiols) is the Terp Network's native utility token, used as the primary means to govern, secure the blockchain & incentivize participants.",
        denom_units: [
          {
            denom: 'uthiol',
            exponent: 0
          },
          {
            denom: 'thiol',
            exponent: 6
          }
        ],
        base: 'uthiol',
        name: 'Thiol Terp Gas Token',
        display: 'thiol',
        symbol: 'THIOL',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/thiol.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/thiol.png'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg'
        },
        coingecko_id: 'terra-luna',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg'
        },
        coingecko_id: 'terrausd',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg'
        },
        coingecko_id: 'terrakrw',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg'
          }
        ]
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
        coingecko_id: 'white-whale',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/whale.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bluna.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/beth.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aust.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/anc.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mir.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/maapl.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mabnb.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mamc.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mamd.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mamzn.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/markk.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mbaba.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mbtc.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mcoin.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mdis.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mdot.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/meth.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mfb.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mglxy.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mgme.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mgoogl.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mgs.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mhood.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/miau.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/miau.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mjnj.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mko.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mmsft.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnflx.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnio.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnke.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnvda.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mpypl.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mqqq.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/msbux.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mslv.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mspy.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/msq.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mtsla.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mtwtr.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/muso.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mvixy.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mvixy.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/lota.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dph.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mine.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bpsidp-24m.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/spec.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/loop.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/loopr.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/stt.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twd.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xtra.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/miaw.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/psi.png'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/nluna.svg'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/neth.svg'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnluna.svg'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cneth.svg'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/navax.svg'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/natom.svg'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/vkr.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/orion.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tland.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/vust.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eth.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wbtc.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sol.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/maticet.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bnb.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cake.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/link.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sushi.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/uni.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdtet.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcet.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/kuji.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/skuji.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wsteth.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wstsol.png'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wsbsol.svg'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ldo.png'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/webeth.svg'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/stluna.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/btl.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/lunax.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luni.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ply.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tfloki.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tftic.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tfticii.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tfticiii.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/moon.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/astro.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xastro.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/halo.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pug.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/orne.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tns.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xrune.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/alot.png'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sity.svg'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/glow.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/apollo.png'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/abr.svg'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/prism.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/whsail.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/whgsail.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xprism.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ctx.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cluna.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pluna.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/yluna.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/atlo.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/local.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luv.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/robo.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luart.png'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mars.svg'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xmars.svg'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ceres.svg'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wasavax.svg'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mint.svg'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sd.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xsd.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/paxg.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/whdao.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/link.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sayve.png'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bro.svg'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bbro.svg'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sst.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/atlas.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/audio.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/avax.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bat.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/busdbs.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dai.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/maticpo.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mimet.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ray.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sbr.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/shib.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/srmso.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcav.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcbs.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcpo.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcso.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdtav.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdtbs.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdtso.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gohm.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/msol.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/steth.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/lct.png'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/batom.svg'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/webatom.svg'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wcoin.svg'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/lctfancard.png'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/kntc.svg'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/kust.svg'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/steak.svg'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cst.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cstfancard.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/nwld.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/fury.png'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/rct.svg'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/vitc.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sb.png'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/toad.svg'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/orionastro.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/retro.png'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tnd.png'
          }
        ]
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
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/stnd.svg'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/nwt.png'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.svg'
          }
        ]
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
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/neb.png'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
        },
        coingecko_id: 'terra-luna-2',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
          }
        ]
      },
      {
        description:
          'Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.',
        denom_units: [
          {
            denom:
              'cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
            exponent: 0
          },
          {
            denom: 'astro',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address:
          'terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
        base: 'cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
        name: 'Astroport',
        display: 'astro',
        symbol: 'ASTRO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/astro.png'
        },
        coingecko_id: 'astroport-fi',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/astro.png'
          }
        ]
      },
      {
        description:
          'Dinheiros is the reserve currency of dioalma.protocol, an undivisible and rare token.',
        denom_units: [
          {
            denom:
              'cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
            exponent: 0
          },
          {
            denom: 'Dinheiros',
            exponent: 0
          }
        ],
        type_asset: 'cw20',
        address:
          'terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
        base: 'cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
        name: 'dinheiro',
        display: 'Dinheiros',
        symbol: 'DINHEIROS',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Dinheiros.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Dinheiros.png'
          }
        ]
      },
      {
        description:
          'Reis is the king of trading, high volume high liquidity, sibling of Dinheiros, Reis and Alem, a token of dioalma.protocol.',
        denom_units: [
          {
            denom:
              'cw20:terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8',
            exponent: 0
          },
          {
            denom: 'Reis',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address:
          'terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8',
        base: 'cw20:terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8',
        name: 'real',
        display: 'Reis',
        symbol: 'REIS',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Reis.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Reis.png'
          }
        ]
      },
      {
        description:
          'Escudos is the everyday currency of dioalma.protocol, good to send money back and foward.',
        denom_units: [
          {
            denom:
              'cw20:terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg',
            exponent: 0
          },
          {
            denom: 'Escudos',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address:
          'terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg',
        base: 'cw20:terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg',
        name: 'escudo',
        display: 'Escudos',
        symbol: 'ESCUDOS',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Escudos.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Escudos.png'
          }
        ]
      },
      {
        description:
          'Alem is a local currency for the region of Alentejo in Portugal, sibling of Dinheiros, Reis and Alem, a token of dioalma.protocol.',
        denom_units: [
          {
            denom:
              'cw20:terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q',
            exponent: 0
          },
          {
            denom: 'Alem',
            exponent: 6
          }
        ],
        type_asset: 'cw20',
        address:
          'terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q',
        base: 'cw20:terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q',
        name: 'alentejo.money',
        display: 'Alem',
        symbol: 'ALEM',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Alem.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Alem.png'
          }
        ]
      },
      {
        description: 'ERIS liquid staked LUNA.',
        type_asset: 'cw20',
        address:
          'terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct',
        denom_units: [
          {
            denom:
              'cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct',
            exponent: 0
          },
          {
            denom: 'ampluna',
            exponent: 6
          }
        ],
        base: 'cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct',
        name: 'ERIS Amplified LUNA',
        display: 'ampluna',
        symbol: 'ampLUNA',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampluna.svg'
        },
        coingecko_id: 'eris-amplified-luna',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampluna.svg'
          }
        ]
      },
      {
        description:
          'Lion DAO is a community DAO that lives on the Terra blockchain with the mission to reactivate the LUNAtic community and showcase Terra protocols & tooling',
        type_asset: 'cw20',
        address:
          'terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
        denom_units: [
          {
            denom:
              'cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
            exponent: 0
          },
          {
            denom: 'roar',
            exponent: 6
          }
        ],
        base: 'cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
        name: 'Lion DAO',
        display: 'roar',
        symbol: 'ROAR',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png'
          }
        ]
      },
      {
        description:
          'GEM DAO, building a decentralized, community-owned, low-supply store of value',
        type_asset: 'cw20',
        address:
          'terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv',
        denom_units: [
          {
            denom:
              'cw20:terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv',
            exponent: 0
          },
          {
            denom: 'gem',
            exponent: 6
          }
        ],
        base: 'cw20:terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv',
        name: 'GEM DAO',
        display: 'gem',
        symbol: 'GEM',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gem.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gem.png'
          }
        ]
      },
      {
        description: 'Lion Cub DAO is a useless meme community DAO on Terra',
        type_asset: 'cw20',
        address:
          'terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
        denom_units: [
          {
            denom:
              'cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
            exponent: 0
          },
          {
            denom: 'cub',
            exponent: 6
          }
        ],
        base: 'cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
        name: 'Lion Cub DAO',
        display: 'cub',
        symbol: 'CUB',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png'
          }
        ]
      },
      {
        description: 'BLUE CUB DAO is a community DAO on Terra',
        type_asset: 'cw20',
        address:
          'terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584',
        denom_units: [
          {
            denom:
              'cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584',
            exponent: 0
          },
          {
            denom: 'blue',
            exponent: 6
          }
        ],
        base: 'cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584',
        name: 'BLUE CUB DAO',
        display: 'blue',
        symbol: 'BLUE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png'
          }
        ]
      },
      {
        description: 'Liquidity token, NFT, HARVEST FOR VALUE',
        type_asset: 'cw20',
        address:
          'terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn',
        denom_units: [
          {
            denom:
              'cw20:terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn',
            exponent: 0
          },
          {
            denom: 'xxx',
            exponent: 10
          }
        ],
        base: 'cw20:terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn',
        name: 'TheOnlyOne',
        display: 'xxx',
        symbol: 'xxx',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xxx3.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xxx3.png'
          }
        ]
      },
      {
        description:
          'The GraveDigger is the Liquid Staking Product of BackBone Labs. It will have its own platform. Its liquid staking derivative (LSD) is boneLUNA.',
        type_asset: 'cw20',
        address:
          'terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
        denom_units: [
          {
            denom:
              'cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
            exponent: 0
          },
          {
            denom: 'bluna',
            exponent: 6
          }
        ],
        base: 'cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
        name: 'boneLuna',
        display: 'bluna',
        symbol: 'bLUNA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/boneluna.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/boneluna.png'
          }
        ]
      },
      {
        description:
          'Sayve is a revolutionary language learning app in the Web3 era that combines gamification, blockchain technology, and a Metaverse experience to motivate users to learn languages while earning rewards.',
        type_asset: 'cw20',
        address:
          'terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3',
        denom_units: [
          {
            denom:
              'cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3',
            exponent: 0
          },
          {
            denom: 'sayve',
            exponent: 6
          }
        ],
        base: 'cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3',
        name: 'sayve',
        display: 'sayve',
        symbol: 'SAYVE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.svg'
          }
        ]
      },
      {
        description: 'ERIS Alliance Staked ampWHALE on Terra',
        denom_units: [
          {
            denom:
              'factory/terra1j35ta0llaxcf55auv2cjqau5a7aee6g8fz7md7my7005cvh23jfsaw83dy/ampWHALEt',
            exponent: 0
          },
          {
            denom: 'ampWHALEt',
            exponent: 6
          }
        ],
        base: 'factory/terra1j35ta0llaxcf55auv2cjqau5a7aee6g8fz7md7my7005cvh23jfsaw83dy/ampWHALEt',
        name: 'ERIS Alliance Staked ampWHALE',
        display: 'ampWHALEt',
        symbol: 'ampWHALEt',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampwhalet.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampwhalet.svg'
          }
        ]
      },
      {
        description: 'ERIS Alliance Staked boneWHALE on Terra',
        denom_units: [
          {
            denom:
              'factory/terra10j3zrymfrkta2pxe0gklc79gu06tqyuy8c3kh6tqdsrrprsjqkrqzfl4df/boneWHALEt',
            exponent: 0
          },
          {
            denom: 'boneWHALEt',
            exponent: 6
          }
        ],
        base: 'factory/terra10j3zrymfrkta2pxe0gklc79gu06tqyuy8c3kh6tqdsrrprsjqkrqzfl4df/boneWHALEt',
        name: 'ERIS Alliance Staked boneWHALE',
        display: 'boneWHALEt',
        symbol: 'boneWHALEt',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bonewhalet.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bonewhalet.svg'
          }
        ]
      },
      {
        description: 'ERIS Liquid Enterprise Staked ROAR',
        denom_units: [
          {
            denom:
              'factory/terra1vklefn7n6cchn0u962w3gaszr4vf52wjvd4y95t2sydwpmpdtszsqvk9wy/ampROAR',
            exponent: 0
          },
          {
            denom: 'ampROAR',
            exponent: 6
          }
        ],
        base: 'factory/terra1vklefn7n6cchn0u962w3gaszr4vf52wjvd4y95t2sydwpmpdtszsqvk9wy/ampROAR',
        name: 'ERIS Amplified ROAR',
        display: 'ampROAR',
        symbol: 'ampROAR',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/amproar.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/amproar.png'
          }
        ]
      },
      {
        description: 'Nico Dao Money',
        type_asset: 'cw20',
        address:
          'terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3',
        denom_units: [
          {
            denom:
              'cw20:terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3',
            exponent: 0
          },
          {
            denom: 'nico',
            exponent: 18
          }
        ],
        base: 'cw20:terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3',
        name: 'nico',
        display: 'nico',
        symbol: 'NICO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/nicodao.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/nicodao.png'
          }
        ]
      },
      {
        description:
          'Sailing the Seas DAO is a community DAO built on Enterprise on Terra',
        type_asset: 'cw20',
        address:
          'terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala',
        denom_units: [
          {
            denom:
              'cw20:terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala',
            exponent: 0
          },
          {
            denom: 'seas',
            exponent: 6
          }
        ],
        base: 'cw20:terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala',
        name: 'Sailing The SeaS DAO',
        display: 'seas',
        symbol: 'SEAS',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/SEAS.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/SEAS.png'
          }
        ]
      },
      {
        description: 'A community DAO built on Enterprise',
        type_asset: 'cw20',
        address:
          'terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v',
        denom_units: [
          {
            denom:
              'cw20:terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v',
            exponent: 0
          },
          {
            denom: 'bitz',
            exponent: 6
          }
        ],
        base: 'cw20:terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v',
        name: 'BitzDAO',
        display: 'bitz',
        symbol: 'BITZ',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/BITZ.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/BITZ.png'
          }
        ]
      },
      {
        denom_units: [
          {
            denom:
              'ibc/A356EC90DC3AE43D485514DA7260EDC7ABB5CFAA0654CE2524C739392975AD3C',
            exponent: 0,
            aliases: ['wstETH']
          },
          {
            denom:
              'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH',
            exponent: 18
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/A356EC90DC3AE43D485514DA7260EDC7ABB5CFAA0654CE2524C739392975AD3C',
        name: 'Wrapped Lido Staked Ether',
        display: 'wstETH',
        symbol: 'wstETH',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'neutron',
              base_denom:
                'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH',
              channel_id: 'channel-25'
            },
            chain: {
              channel_id: 'channel-229',
              path: 'transfer/channel-229/factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'neutron',
              base_denom:
                'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH'
            }
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'avalanchetestnet',
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
        coingecko_id: 'avalanche-2',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.svg'
          }
        ]
      },
      {
        description:
          'The wrapped ERC-20 representation of AVAX, the native token of Avalanche.',
        type_asset: 'erc20',
        address: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
        denom_units: [
          {
            denom: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
            exponent: 0,
            aliases: ['wavax-wei']
          },
          {
            denom: 'wavax',
            exponent: 18
          }
        ],
        base: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
        name: 'Wrapped AVAX',
        display: 'wavax',
        symbol: 'WAVAX',
        traces: [
          {
            type: 'wrapped',
            counterparty: {
              chain_name: 'avalanchetestnet',
              base_denom: 'wei'
            },
            provider: 'Avalanche'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
        },
        coingecko_id: 'wrapped-avax',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
          }
        ]
      },
      {
        description:
          'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
        type_asset: 'erc20',
        address: '0x57F1c63497AEe0bE305B8852b354CEc793da43bB',
        denom_units: [
          {
            denom: '0x57F1c63497AEe0bE305B8852b354CEc793da43bB',
            exponent: 0,
            aliases: ['uusdc']
          },
          {
            denom: 'axlusdc',
            exponent: 6
          }
        ],
        base: '0x57F1c63497AEe0bE305B8852b354CEc793da43bB',
        name: 'Axelar Wrapped USDC',
        display: 'axlusdc',
        symbol: 'axlUSDC',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'axelartestnet',
              base_denom: 'uusdc'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'binancesmartchaintestnet',
    assets: [
      {
        description:
          'BNB powers the BNB Chain ecosystem and is the native coin of the BNB Beacon Chain and BNB Smart Chain.',
        denom_units: [
          {
            denom: 'wei',
            exponent: 0
          },
          {
            denom: 'bnb',
            exponent: 18
          }
        ],
        base: 'wei',
        name: 'Binance Coin',
        display: 'bnb',
        symbol: 'BNB',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg'
        },
        coingecko_id: 'binancecoin',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg'
          }
        ]
      },
      {
        description:
          'Wrapped BNB. As the native coin of Binance Chain, BNB has multiple use cases: fueling transactions on the Chain, paying for transaction fees on Binance Exchange, making in-store payments, and many more.',
        denom_units: [
          {
            denom: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
            exponent: 0
          },
          {
            denom: 'wbnb',
            exponent: 18
          }
        ],
        type_asset: 'erc20',
        address: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
        base: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
        name: 'Wrapped BNB',
        display: 'wbnb',
        symbol: 'WBNB',
        traces: [
          {
            type: 'wrapped',
            counterparty: {
              chain_name: 'binancesmartchaintestnet',
              base_denom: 'wei'
            },
            chain: {
              contract: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd'
            },
            provider: 'Binance'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg'
        },
        coingecko_id: 'wbnb',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg'
          }
        ]
      },
      {
        description:
          'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
        type_asset: 'erc20',
        address: '0xc2fA98faB811B785b81c64Ac875b31CC9E40F9D2',
        denom_units: [
          {
            denom: '0xc2fA98faB811B785b81c64Ac875b31CC9E40F9D2',
            exponent: 0,
            aliases: ['uusdc']
          },
          {
            denom: 'axlusdc',
            exponent: 6
          }
        ],
        base: '0xc2fA98faB811B785b81c64Ac875b31CC9E40F9D2',
        name: 'Axelar Wrapped USDC',
        display: 'axlusdc',
        symbol: 'axlUSDC',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'axelartestnet',
              base_denom: 'uusdc'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'ethereumtestnet',
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
        coingecko_id: 'ethereum',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
          }
        ]
      },
      {
        description: "wETH is 'wrapped ETH'",
        type_asset: 'erc20',
        address: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
        denom_units: [
          {
            denom: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
            exponent: 0,
            aliases: ['weth-wei']
          },
          {
            denom: 'weth',
            exponent: 18
          }
        ],
        base: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
        name: 'Wrapped Ether',
        display: 'weth',
        symbol: 'WETH',
        traces: [
          {
            type: 'wrapped',
            counterparty: {
              chain_name: 'ethereumtestnet',
              base_denom: 'wei'
            },
            provider: 'Ethereum'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        },
        coingecko_id: 'weth',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
          }
        ]
      },
      {
        description:
          'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
        type_asset: 'erc20',
        address: '0x254d06f33bDc5b8ee05b2ea472107E300226659A',
        denom_units: [
          {
            denom: '0x254d06f33bDc5b8ee05b2ea472107E300226659A',
            exponent: 0,
            aliases: ['uausdc']
          },
          {
            denom: 'ausdc',
            exponent: 6
          }
        ],
        base: '0x254d06f33bDc5b8ee05b2ea472107E300226659A',
        name: 'USD Coin',
        display: 'ausdc',
        symbol: 'aUSDC',
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
        coingecko_id: 'usd-coin',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'fantomtestnet',
    assets: [
      {
        description:
          "Fantom's native utility token — FTM — powers the entire Fantom blockchain ecosystem. FTM tokens are used for staking, governance, payments, and fees on the network.",
        denom_units: [
          {
            denom: 'wei',
            exponent: 0
          },
          {
            denom: 'ftm',
            exponent: 18
          }
        ],
        base: 'wei',
        name: 'Fantom',
        display: 'ftm',
        symbol: 'FTM',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png'
          }
        ]
      },
      {
        description: 'ERC20 wrapped version of FTM',
        type_asset: 'erc20',
        address: '0x812666209b90344Ec8e528375298ab9045c2Bd08',
        denom_units: [
          {
            denom: '0x812666209b90344Ec8e528375298ab9045c2Bd08',
            exponent: 0
          },
          {
            denom: 'wftm',
            exponent: 18
          }
        ],
        base: '0x812666209b90344Ec8e528375298ab9045c2Bd08',
        name: 'Wrapped Fantom',
        display: 'wftm',
        symbol: 'WFTM',
        traces: [
          {
            type: 'wrapped',
            counterparty: {
              chain_name: 'fantomtestnet',
              base_denom: 'wei'
            },
            chain: {
              contract: '0x812666209b90344Ec8e528375298ab9045c2Bd08'
            },
            provider: 'Fantom'
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'fantomtestnet',
              base_denom: 'wei'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png'
        }
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'moonbeamtestnet',
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
        coingecko_id: 'moonbeam',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
          }
        ]
      },
      {
        description:
          'An ERC-20 representation of GLMR, the native token of Moonbeam.',
        type_asset: 'erc20',
        address: '0x1436aE0dF0A8663F18c0Ec51d7e2E46591730715',
        denom_units: [
          {
            denom: '0x1436aE0dF0A8663F18c0Ec51d7e2E46591730715',
            exponent: 0,
            aliases: ['wglmr-wei']
          },
          {
            denom: 'wglmr',
            exponent: 18
          }
        ],
        base: '0x1436aE0dF0A8663F18c0Ec51d7e2E46591730715',
        name: 'Wrapped Moonbeam',
        display: 'wglmr',
        symbol: 'WGLMR',
        traces: [
          {
            type: 'wrapped',
            counterparty: {
              chain_name: 'moonbeamtestnet',
              base_denom: 'Wei'
            },
            provider: 'Moonbeam'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
        },
        coingecko_id: 'wrapped-moonbeam',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
          }
        ]
      },
      {
        description:
          'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
        type_asset: 'erc20',
        address: '0xD1633F7Fb3d716643125d6415d4177bC36b7186b',
        denom_units: [
          {
            denom: '0xD1633F7Fb3d716643125d6415d4177bC36b7186b',
            exponent: 0,
            aliases: ['uusdc']
          },
          {
            denom: 'axlusdc',
            exponent: 6
          }
        ],
        base: '0xD1633F7Fb3d716643125d6415d4177bC36b7186b',
        name: 'Axelar Wrapped USD Coin',
        display: 'axlusdc',
        symbol: 'axlUSDC',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'axelartestnet',
              base_denom: 'uusdc'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'polkadottestnet',
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
        coingecko_id: 'polkadot',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'polygontestnet',
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
        coingecko_id: 'matic-network',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic.svg'
          }
        ]
      },
      {
        description:
          'Polygon combines the best of Ethereum and sovereign blockchains into a full-fledged multi-chain system.',
        type_asset: 'erc20',
        address: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
        denom_units: [
          {
            denom: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
            exponent: 0,
            aliases: ['wmatic-wei']
          },
          {
            denom: 'wmatic',
            exponent: 18,
            aliases: ['polygon']
          }
        ],
        base: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
        name: 'Wrapped Matic',
        display: 'wmatic',
        symbol: 'WMATIC',
        traces: [
          {
            type: 'wrapped',
            counterparty: {
              chain_name: 'polygontestnet',
              base_denom: 'wei'
            },
            provider: 'Polygon'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg'
        },
        coingecko_id: 'wmatic',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg'
          }
        ]
      },
      {
        description:
          'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
        type_asset: 'erc20',
        address: '0x2c852e740B62308c46DD29B982FBb650D063Bd07',
        denom_units: [
          {
            denom: '0x2c852e740B62308c46DD29B982FBb650D063Bd07',
            exponent: 0,
            aliases: ['uusdc']
          },
          {
            denom: 'axlusdc',
            exponent: 6
          }
        ],
        base: '0x2c852e740B62308c46DD29B982FBb650D063Bd07',
        name: 'Axelar Wrapped USD Coin',
        display: 'axlusdc',
        symbol: 'axlUSDC',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'axelartestnet',
              base_denom: 'uusdc'
            },
            provider: 'Axelar'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'akashtestnet',
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
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'archwaytestnet',
    assets: [
      {
        description: 'The native token of Archway testnetwork',
        denom_units: [
          {
            denom: 'aconst',
            exponent: 0
          },
          {
            denom: 'uconst',
            exponent: 12
          },
          {
            denom: 'const',
            exponent: 18
          }
        ],
        base: 'aconst',
        name: 'Archway',
        display: 'const',
        symbol: 'CONST'
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'arkeonetworktestnet',
    assets: [
      {
        description: '',
        denom_units: [
          {
            denom: 'uarkeo',
            exponent: 6
          }
        ],
        base: 'uarkeo',
        display: 'arkeo',
        name: 'Arkeo',
        symbol: 'ARKEO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/arkeonetworktestnet/images/arkeo.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/arkeonetworktestnet/images/arkeo.png'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'axelartestnet',
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
        coingecko_id: 'axelar',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
          }
        ]
      },
      {
        description: "Circle's stablecoin on Axelar",
        denom_units: [
          {
            denom: 'uausdc',
            exponent: 0
          },
          {
            denom: 'ausdc',
            exponent: 6
          }
        ],
        base: 'uausdc',
        name: 'USD Coin',
        display: 'ausdc',
        symbol: 'aUSDC',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereumtestnet',
              base_denom: '0x254d06f33bDc5b8ee05b2ea472107E300226659A'
            },
            provider: 'Axelar'
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
        description: 'Wrapped Ether on Axelar',
        denom_units: [
          {
            denom: 'eth-wei',
            exponent: 0
          },
          {
            denom: 'weth',
            exponent: 18
          }
        ],
        base: 'eth-wei',
        name: 'Wrapped Ether',
        display: 'weth',
        symbol: 'axlWETH',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'ethereumtestnet',
              base_denom: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6'
            },
            provider: 'Axelar'
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'ethereumtestnet',
              base_denom: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6'
            },
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }
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
        symbol: 'WDEV',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'moonbeamtestnet',
              base_denom: '0x1436aE0dF0A8663F18c0Ec51d7e2E46591730715'
            },
            provider: 'Axelar'
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'moonbeamtestnet',
              base_denom: '0x1436aE0dF0A8663F18c0Ec51d7e2E46591730715'
            },
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
        }
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
              chain_name: 'polygontestnet',
              base_denom: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889'
            },
            provider: 'Axelar'
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'polygontestnet',
              base_denom: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889'
            },
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg'
        }
      },
      {
        description: 'Wrapped BNB on Axelar',
        denom_units: [
          {
            denom: 'wbnb-wei',
            exponent: 0
          },
          {
            denom: 'wbnb',
            exponent: 18
          }
        ],
        base: 'wbnb-wei',
        name: 'Wrapped BNB',
        display: 'wbnb',
        symbol: 'WBNB',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'binancesmartchaintestnet',
              base_denom: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd'
            },
            provider: 'Axelar'
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'binancesmartchaintestnet',
              base_denom: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg'
        }
      },
      {
        description: 'Wrapped AVAX on Axelar.',
        denom_units: [
          {
            denom: 'wavax-wei',
            exponent: 0
          },
          {
            denom: 'avax',
            exponent: 18
          }
        ],
        base: 'wavax-wei',
        name: 'Wrapped AVAX',
        display: 'avax',
        symbol: 'WAVAX',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'avalanchetestnet',
              base_denom: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c'
            },
            provider: 'Axelar'
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'avalanchetestnet',
              base_denom: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c'
            },
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
        }
      },
      {
        description: 'Wrapped FTM on Axelar.',
        denom_units: [
          {
            denom: 'wftm-wei',
            exponent: 0
          },
          {
            denom: 'ftm',
            exponent: 18
          }
        ],
        base: 'wftm-wei',
        name: 'Wrapped FTM',
        display: 'ftm',
        symbol: 'WFTM',
        traces: [
          {
            type: 'bridge',
            counterparty: {
              chain_name: 'fantomtestnet',
              base_denom: '0x812666209b90344Ec8e528375298ab9045c2Bd08'
            },
            provider: 'Axelar'
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'fantomtestnet',
              base_denom: '0x812666209b90344Ec8e528375298ab9045c2Bd08'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png'
        }
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'babylontestnet',
    assets: [
      {
        description: 'The native staking token of Babylon.',
        denom_units: [
          {
            denom: 'ubbn',
            exponent: 0
          },
          {
            denom: 'bbn',
            exponent: 6
          }
        ],
        base: 'uatom',
        name: 'Babylon BBN',
        display: 'bbn',
        symbol: 'BBN',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/logo.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/logo.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'bitcannadevnet',
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/bitcannadevnet/images/bcna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/bitcannadevnet/images/bcna.svg'
        },
        coingecko_id: 'bitcanna',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/bitcannadevnet/images/bcna.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/bitcannadevnet/images/bcna.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'bitcannadevnet2',
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/bitcannadevnet2/images/bcna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/bitcannadevnet2/images/bcna.svg'
        },
        coingecko_id: 'bitcanna',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/bitcannadevnet2/images/bcna.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/bitcannadevnet2/images/bcna.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'cascadiatestnet',
    assets: [
      {
        description: "The World's First  Neocybernetic  Blockchain",
        denom_units: [
          {
            denom: 'aCC',
            exponent: 0
          },
          {
            denom: 'tCC',
            exponent: 18
          }
        ],
        base: 'aCC',
        name: 'Сascadia Testnet',
        display: 'tCC',
        symbol: 'TCC',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cascadiatestnet/images/cascadia.png'
        },
        keywords: ['cascadia', 'neocybernetic'],
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cascadiatestnet/images/cascadia.png'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'celestiatestnet',
    assets: [
      {
        description: '',
        denom_units: [
          {
            denom: 'utia',
            exponent: 0
          },
          {
            denom: 'tia',
            exponent: 6
          }
        ],
        base: 'utia',
        name: 'Celestia',
        display: 'tia',
        symbol: 'TIA',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet/images/celestia.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet/images/celestia.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'celestiatestnet2',
    assets: [
      {
        description: '',
        denom_units: [
          {
            denom: 'utia',
            exponent: 0
          },
          {
            denom: 'tia',
            exponent: 6
          }
        ],
        base: 'utia',
        name: 'Celestia',
        display: 'tia',
        symbol: 'TIA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet2/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet2/images/celestia.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet2/images/celestia.svg',
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet2/images/celestia.png'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'celestiatestnet3',
    assets: [
      {
        description: '',
        denom_units: [
          {
            denom: 'utia',
            exponent: 0
          },
          {
            denom: 'tia',
            exponent: 6
          }
        ],
        base: 'utia',
        name: 'Celestia',
        display: 'tia',
        symbol: 'TIA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.svg',
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.png'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'chain4energytestnet',
    assets: [
      {
        description: 'The native token of Chain4Energy',
        denom_units: [
          {
            denom: 'uc4e',
            exponent: 0
          },
          {
            denom: 'c4e',
            exponent: 6
          }
        ],
        base: 'uc4e',
        name: 'Chain4Energy',
        display: 'c4e',
        symbol: 'C4E',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/chain4energytestnet/images/c4e.png'
        },
        coingecko_id: '',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/chain4energytestnet/images/c4e.png'
          }
        ]
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
        coingecko_id: 'cheqd-network',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cheqdtestnet/images/cheq.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cheqdtestnet/images/cheq.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'chimbatestnet',
    assets: [
      {
        description: 'The first blokchain in colombia',
        denom_units: [
          {
            denom: 'ucmba',
            exponent: 0
          },
          {
            denom: 'chimba',
            exponent: 6
          }
        ],
        base: 'ucmba',
        name: 'Chimba',
        display: 'chimba',
        symbol: 'CMBA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.svg'
        },
        coingecko_id: '',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'composabletestnet',
    assets: [
      {
        description:
          'The native staking and governance token of the Composable testnet.',
        denom_units: [
          {
            denom: 'ppica',
            exponent: 0
          },
          {
            denom: 'pica',
            exponent: 12
          }
        ],
        base: 'ppica',
        name: 'Pica',
        display: 'pica',
        symbol: 'PICA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/composable.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/composable.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/composable.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/composable.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'coolcattestnet',
    assets: [
      {
        description:
          'CoolCat - The Interchain Gaming Hub. $CCAT is the native token for use in the CoolCat Network.',
        denom_units: [
          {
            denom: 'uccat',
            exponent: 0
          },
          {
            denom: 'ccat',
            exponent: 6
          }
        ],
        base: 'uccat',
        name: 'CoolCat',
        display: 'ccat',
        symbol: 'CCAT',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/coolcattestnet/images/coolcat.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/coolcattestnet/images/coolcat.svg'
        },
        keywords: ['nft', 'staking', 'games'],
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/coolcattestnet/images/coolcat.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/coolcattestnet/images/coolcat.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'coreumtestnet',
    assets: [
      {
        description: 'The native token of Coreum',
        denom_units: [
          {
            denom: 'utestcore',
            exponent: 0
          },
          {
            denom: 'testcore',
            exponent: 6
          }
        ],
        base: 'utestcore',
        name: 'Coreum',
        display: 'testcore',
        symbol: 'TESTCORE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
        },
        coingecko_id: 'coreum',
        keywords: ['dex', 'staking', 'wasm', 'assets', 'nft'],
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'cosmoshubtestnet',
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'cosmwasmtestnet',
    assets: [
      {
        description: 'Fee Token',
        denom_units: [
          {
            denom: 'umlg',
            exponent: 0
          },
          {
            denom: 'MLG',
            exponent: 6
          }
        ],
        base: 'umlg',
        name: 'Malaga',
        display: 'umlg',
        symbol: 'MLG',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cosmwasmtestnet/images/cosmwasm.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cosmwasmtestnet/images/cosmwasm.svg'
          }
        ]
      },
      {
        description: 'Staking Token',
        denom_units: [
          {
            denom: 'uand',
            exponent: 0
          },
          {
            denom: 'AND',
            exponent: 6
          }
        ],
        base: 'uand',
        name: 'Malaga Stake',
        display: 'uand',
        symbol: 'AND',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cosmwasmtestnet/images/cosmwasm.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cosmwasmtestnet/images/cosmwasm.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'cudostestnet',
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cudostestnet/images/cudos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cudostestnet/images/cudos.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cudostestnet/images/cudos.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cudostestnet/images/cudos.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'desmostestnet',
    assets: [
      {
        description: 'The native token of Desmos',
        denom_units: [
          {
            denom: 'udaric',
            exponent: 0
          },
          {
            denom: 'daric',
            exponent: 6
          }
        ],
        base: 'udaric',
        name: 'Desmos Testnet',
        display: 'daric',
        symbol: 'DARIC',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/desmos/images/dsm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/desmos/images/dsm.svg'
        },
        coingecko_id: 'desmos',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/desmos/images/dsm.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/desmos/images/dsm.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'doravotatestnet',
    assets: [
      {
        description:
          'The native staking and governance token of the Theta testnet version of the Dora Vota Testnet.',
        denom_units: [
          {
            denom: 'peaka',
            exponent: 0
          },
          {
            denom: 'DORA',
            exponent: 18
          }
        ],
        base: 'peaka',
        name: 'Dora Vota Testnet',
        display: 'DORA',
        symbol: 'DORA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/doravotatestnet/images/doravota.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/doravotatestnet/images/doravota.png'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'elystestnet',
    assets: [
      {
        description: 'The native token of Elys Network',
        denom_units: [
          {
            denom: 'uelys',
            exponent: 0,
            aliases: ['microelys']
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
        base: 'uelys',
        name: 'Elys Network',
        display: 'elys',
        symbol: 'ELYS',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/elys.png'
        },
        coingecko_id: 'elys',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/elys.png'
          }
        ]
      },
      {
        description: 'Eden token definition',
        denom_units: [
          {
            denom: 'ueden',
            exponent: 0,
            aliases: ['microeden']
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
        base: 'ueden',
        name: 'Eden',
        display: 'eden',
        symbol: 'EDEN',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/eden.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/eden.png'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'empowertestnet',
    assets: [
      {
        description:
          'The native staking and governance token of the testnet version of Empower.',
        denom_units: [
          {
            denom: 'umpwr',
            exponent: 0
          },
          {
            denom: 'mpwr',
            exponent: 6
          }
        ],
        base: 'umpwr',
        name: 'MPWR',
        display: 'mpwr',
        symbol: 'MPWR',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/empowertestnet/images/mpwr.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/empowertestnet/images/mpwr.png'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'entrypointtestnet',
    assets: [
      {
        description: 'The native token of EntryPoint',
        denom_units: [
          {
            denom: 'uentry',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'entry',
            exponent: 6,
            aliases: []
          }
        ],
        base: 'uentry',
        name: 'EntryPoint',
        display: 'entry',
        symbol: 'ENTRY',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entry.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entry.svg'
        },
        keywords: ['staking', 'governance', 'vaults'],
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entry.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entry.svg'
          }
        ]
      },
      {
        description:
          'The native staking and governance token of the Theta testnet version of the Cosmos Hub, via Osmosis.',
        denom_units: [
          {
            denom:
              'ibc/8A138BC76D0FB2665F8937EC2BF01B9F6A714F6127221A0E155106A45E09BCC5',
            exponent: 0
          },
          {
            denom: 'atom',
            exponent: 6
          }
        ],
        base: 'ibc/9FF2B7A5F55038A7EE61F4FD6749D9A648B48E89830F2682B67B5DC158E2753C',
        name: 'Cosmos',
        display: 'atom',
        symbol: 'ATOM',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'osmosis',
              base_denom:
                'ibc/B28CFD38D84A480EF2A03AC575DCB05004D934A603A5A642888847BCDA6340C0',
              channel_id: 'channel-4156'
            },
            chain: {
              channel_id: 'channel-0',
              path: 'transfer/channel-0/transfer/channel-4156/uatom'
            }
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
          }
        ]
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
        name: 'Evmos Testnet',
        display: 'tevmos',
        symbol: 'TEVMOS',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/evmostestnet/images/evmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/evmostestnet/images/evmos.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/evmostestnet/images/evmos.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/evmostestnet/images/evmos.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'fetchhubtestnet',
    assets: [
      {
        description:
          'The native staking and governance token of the Fetch Hub.',
        denom_units: [
          {
            denom: 'atestfet',
            exponent: 0
          },
          {
            denom: 'testfet',
            exponent: 18
          }
        ],
        base: 'atestfet',
        name: 'fetch-ai',
        display: 'fet',
        symbol: 'FET',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg'
        },
        coingecko_id: 'fetch-ai',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'gitopiatestnet',
    assets: [
      {
        description:
          'The native staking and governance token of the testnet version of Gitopia.',
        denom_units: [
          {
            denom: 'utlore',
            exponent: 0
          },
          {
            denom: 'tlore',
            exponent: 6
          }
        ],
        base: 'utlore',
        name: 'TLORE',
        display: 'tlore',
        symbol: 'TLORE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/gitopiatestnet/images/gitopia.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/gitopiatestnet/images/gitopia.png'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'humanstestnet',
    assets: [
      {
        description:
          'The native staking and governance token of the testnet version of Humans AI.',
        denom_units: [
          {
            denom: 'uheart',
            exponent: 0
          },
          {
            denom: 'heart',
            exponent: 6
          }
        ],
        base: 'uheart',
        name: 'HEART',
        display: 'heart',
        symbol: 'HEART',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/humanstestnet/images/humans.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/humanstestnet/images/humans.png'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'hypersigntestnet',
    assets: [
      {
        description: 'Native token for Hypersign Identity Network',
        denom_units: [
          {
            denom: 'uhid',
            exponent: 0
          },
          {
            denom: 'hid',
            exponent: 6
          }
        ],
        base: 'uhid',
        display: 'hid',
        name: 'Hypersign',
        symbol: 'HID',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hypersigntestnet/images/hypersign.png'
        },
        coingecko_id: 'hypersign-identity-token',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hypersigntestnet/images/hypersign.png'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'impacthubdevnet',
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/impacthubdevnet/images/ixo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/impacthubdevnet/images/ixo.svg'
        },
        coingecko_id: 'ixo',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/impacthubdevnet/images/ixo.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/impacthubdevnet/images/ixo.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'impacthubtestnet',
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthubtestnet/images/ixo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthubtestnet/images/ixo.svg'
        },
        coingecko_id: 'ixo',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthubtestnet/images/ixo.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthubtestnet/images/ixo.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'imversedtestnet',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/imversedtestnet/images/imversed.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/imversedtestnet/images/imversed.svg'
          }
        ]
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/imversedtestnet/images/imversed.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/imversedtestnet/images/imversed.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'injectivetestnet',
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
        coingecko_id: 'injective-protocol',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'jackaltestnet',
    assets: [
      {
        description: 'The native staking and governance token of Jackal.',
        denom_units: [
          {
            denom: 'ujkl',
            exponent: 0
          },
          {
            denom: 'jkl',
            exponent: 6
          }
        ],
        base: 'ujkl',
        name: 'Jackal',
        display: 'jkl',
        symbol: 'JKL',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/jackaltestnet/images/jkl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/jackaltestnet/images/jkl.svg'
        },
        coingecko_id: 'jackal',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/jackaltestnet/images/jkl.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/jackaltestnet/images/jkl.svg'
          }
        ]
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
        symbol: 'JUNOX',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.svg'
        },
        coingecko_id: 'juno-network',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.svg'
          }
        ]
      },
      {
        description: 'The native token of NEXX GEN AI',
        denom_units: [
          {
            denom: 'factory/juno12klaltyqvg2j6v034jwdxrk5n4242ttse4sdpt/NEXX',
            exponent: 0
          },
          {
            denom: 'nexx',
            exponent: 6
          }
        ],
        base: 'factory/juno12klaltyqvg2j6v034jwdxrk5n4242ttse4sdpt/NEXX',
        name: 'NEXX GEN AI',
        display: 'nexx',
        symbol: 'NEXX',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/nexx.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/nexx.png'
          }
        ]
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
        coingecko_id: 'ki',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'kujiratestnet',
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kujiratestnet/images/kuji.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kujiratestnet/images/kuji.png'
          }
        ]
      },
      {
        description: 'The testnet token of Fuzion',
        denom_units: [
          {
            denom: 'factory/kujira16qpvzhmawvsm8mcj4hdvtz25dadatdhhgw79xa/FUZN',
            exponent: 0
          },
          {
            denom: 'fuzn',
            exponent: 6
          }
        ],
        base: 'factory/kujira16qpvzhmawvsm8mcj4hdvtz25dadatdhhgw79xa/FUZN',
        name: 'Fuzion',
        display: 'fuzn',
        symbol: 'FUZN',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kujiratestnet/images/fuzn.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kujiratestnet/images/fuzn.png'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'kyvedevnet',
    assets: [
      {
        description:
          'The native utility token of the Korellia devnet version of KYVE.',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kyvedevnet/images/kyve.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kyvedevnet/images/kyve.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'kyvetestnet',
    assets: [
      {
        description:
          'The native utility token of the Kaon testnet version of KYVE.',
        denom_units: [
          {
            denom: 'tkyve',
            exponent: 0
          },
          {
            denom: 'kyve',
            exponent: 6
          }
        ],
        base: 'tkyve',
        name: 'KYVE',
        display: 'kyve',
        symbol: 'KYVE',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kyvetestnet/images/kyve.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kyvetestnet/images/kyve.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'lavatestnet',
    assets: [
      {
        description: 'The native token of Lava',
        denom_units: [
          {
            denom: 'ulava',
            exponent: 0
          },
          {
            denom: 'lava',
            exponent: 6
          }
        ],
        base: 'ulava',
        name: 'LAVA',
        display: 'lava',
        symbol: 'LAVA',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.svg'
        },
        keywords: ['rpc', 'api'],
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'lavatestnet2',
    assets: [
      {
        description: 'The native token of Lava',
        denom_units: [
          {
            denom: 'ulava',
            exponent: 0
          },
          {
            denom: 'lava',
            exponent: 6
          }
        ],
        base: 'ulava',
        name: 'LAVA',
        display: 'lava',
        symbol: 'LAVA',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.svg'
        },
        keywords: ['rpc', 'api'],
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'likecointestnet',
    assets: [
      {
        description: 'EKIL is the native token for LikeCoin Testnet',
        denom_units: [
          {
            denom: 'nanoekil',
            exponent: 0
          },
          {
            denom: 'ekil',
            exponent: 9
          }
        ],
        base: 'nanoekil',
        name: 'LikeCoin',
        display: 'ekil',
        symbol: 'EKIL',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'lumenxtestnet',
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lumenxtestnet/images/lumen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lumenxtestnet/images/lumen.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lumenxtestnet/images/lumen.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lumenxtestnet/images/lumen.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'marstestnet',
    assets: [
      {
        description: 'The native token of Mars Protocol',
        denom_units: [
          {
            denom: 'umars',
            exponent: 0
          },
          {
            denom: 'mars',
            exponent: 6
          }
        ],
        base: 'umars',
        name: 'Mars',
        display: 'mars',
        symbol: 'MARS',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'migalootestnet',
    assets: [
      {
        description: 'The native token of Migaloo Chain',
        denom_units: [
          {
            denom: 'uwhale',
            exponent: 0
          },
          {
            denom: 'whale',
            exponent: 6
          }
        ],
        base: 'uwhale',
        name: 'Whale',
        display: 'whale',
        symbol: 'WHALE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'neutrontestnet',
    assets: [
      {
        description: 'The native token of Neutron chain',
        denom_units: [
          {
            denom: 'untrn',
            exponent: 0
          },
          {
            denom: 'ntrn',
            exponent: 6
          }
        ],
        base: 'untrn',
        name: 'Neutron Testnet',
        display: 'ntrn',
        symbol: 'NTRN',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/neutron.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/neutron.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/neutron.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/neutron.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'nobletestnet',
    assets: [
      {
        description: 'The controlled staking asset for Noble Chain',
        denom_units: [
          {
            denom: 'ustake',
            exponent: 0,
            aliases: ['microstake']
          },
          {
            denom: 'stake',
            exponent: 6
          }
        ],
        base: 'ustake',
        name: 'Stake',
        display: 'stake',
        symbol: 'STAKE'
      },
      {
        description:
          'Love is a test tokenfactory asset controlled by the Strangelove Team',
        denom_units: [
          {
            denom: 'ulove',
            exponent: 0,
            aliases: ['microlove']
          },
          {
            denom: 'love',
            exponent: 6
          }
        ],
        base: 'ulove',
        display: 'love',
        name: 'Love',
        symbol: 'LOVE'
      },
      {
        description: 'USD Coin',
        denom_units: [
          {
            denom: 'uusdc',
            exponent: 0,
            aliases: ['microusdc']
          },
          {
            denom: 'usdc',
            exponent: 6
          }
        ],
        base: 'uusdc',
        display: 'usdc',
        name: 'USD Coin',
        symbol: 'USDC',
        traces: [
          {
            type: 'test-mintage',
            counterparty: {
              chain_name: 'noble',
              base_denom: 'uusdc'
            },
            provider: 'Circle'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
          }
        ]
      },
      {
        description:
          'USDLR is a fiat-backed stablecoin issued by Stable. Stable pays DeFi protocols who distribute USDLR.',
        denom_units: [
          {
            denom: 'uusdlr',
            exponent: 0,
            aliases: ['microusdlr']
          },
          {
            denom: 'usdlr',
            exponent: 6
          }
        ],
        base: 'uusdlr',
        display: 'usdlr',
        name: 'USDLR by Stable',
        symbol: 'USDLR',
        traces: [
          {
            type: 'test-mintage',
            counterparty: {
              chain_name: 'noble',
              base_denom: 'uusdlr'
            },
            provider: 'Stable'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdlr.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdlr.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdlr.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdlr.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'noistestnet',
    assets: [
      {
        description: 'The native token of Nois',
        denom_units: [
          {
            denom: 'unois',
            exponent: 0
          },
          {
            denom: 'nois',
            exponent: 6
          }
        ],
        base: 'unois',
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
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'nolustestnet',
    assets: [
      {
        description: 'The native token of Nolus chain',
        denom_units: [
          {
            denom: 'unls',
            exponent: 0
          },
          {
            denom: 'nls',
            exponent: 6
          }
        ],
        base: 'unls',
        name: 'Nolus',
        display: 'nls',
        symbol: 'NLS',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'ojotestnet',
    assets: [
      {
        description: 'The native token of Ojo Network',
        denom_units: [
          {
            denom: 'uojo',
            exponent: 0
          },
          {
            denom: 'ojo',
            exponent: 6
          }
        ],
        base: 'uojo',
        name: 'ojo',
        display: 'ojo',
        symbol: 'OJO',
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/ojotestnet/images/ojo.svg'
        },
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/ojotestnet/images/ojo.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'okp4testnet',
    assets: [
      {
        description: 'The native token of ØKP4.',
        denom_units: [
          {
            denom: 'uknow',
            exponent: 0
          },
          {
            denom: 'know',
            exponent: 6
          }
        ],
        base: 'uknow',
        name: 'OKP4 Network',
        display: 'know',
        symbol: 'KNOW',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/okp4testnet/images/okp4.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/okp4testnet/images/okp4.png'
          }
        ]
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
        keywords: ['dex', 'staking'],
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
          }
        ]
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
        keywords: ['memecoin'],
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'osmosistestnet4',
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
        keywords: ['dex', 'staking'],
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
          }
        ]
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
        keywords: ['memecoin'],
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'permtestnet',
    assets: [
      {
        description: 'Perm A Permissioned Blockchain',
        denom_units: [
          {
            denom: 'uperm',
            exponent: 0
          },
          {
            denom: 'perm',
            exponent: 6
          }
        ],
        base: 'uperm',
        name: 'Perm',
        display: 'perm',
        symbol: 'PERM',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/permtestnet/images/Perm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/permtestnet/images/Perm.svg'
        },
        coingecko_id: '',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/permtestnet/images/Perm.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/permtestnet/images/Perm.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'persistencetestnet',
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
        coingecko_id: 'persistence',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
          }
        ]
      },
      {
        description: 'PSTAKE Liquid-Staked ATOM',
        denom_units: [
          {
            denom: 'stk/uatom',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'stkatom',
            exponent: 6,
            aliases: ['stk/atom']
          }
        ],
        base: 'stk/uatom',
        name: 'PSTAKE staked ATOM',
        display: 'stkatom',
        symbol: 'stkATOM',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'persistencetestnet2',
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
        coingecko_id: 'persistence',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
          }
        ]
      },
      {
        description: 'PSTAKE Liquid-Staked ATOM',
        denom_units: [
          {
            denom: 'stk/uatom',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'stkatom',
            exponent: 6,
            aliases: ['stk/atom']
          }
        ],
        base: 'stk/uatom',
        name: 'PSTAKE staked ATOM',
        display: 'stkatom',
        symbol: 'stkATOM',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
          }
        ]
      },
      {
        description: 'PSTAKE Liquid-Staked OSMO',
        denom_units: [
          {
            denom: 'stk/uosmo',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'stkosmo',
            exponent: 6,
            aliases: ['stk/osmo']
          }
        ],
        base: 'stk/uosmo',
        name: 'PSTAKE staked OSMO',
        display: 'stkosmo',
        symbol: 'stkOSMO',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'quasartestnet',
    assets: [
      {
        description: 'The native token of Quasar',
        denom_units: [
          {
            denom: 'uqsr',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'qsr',
            exponent: 6,
            aliases: []
          }
        ],
        base: 'uqsr',
        name: 'Quasar',
        display: 'qsr',
        symbol: 'QSR'
      },
      {
        denom_units: [
          {
            denom: 'uayy',
            exponent: 0
          },
          {
            denom: 'ayy',
            exponent: 6
          }
        ],
        base: 'uay',
        name: 'AYY',
        display: 'ayy',
        symbol: 'AYY'
      },
      {
        denom_units: [
          {
            denom: 'uoro',
            exponent: 0
          },
          {
            denom: 'oro',
            exponent: 6
          }
        ],
        base: 'oro',
        name: 'oro',
        display: 'oro',
        symbol: 'ORO'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'quicksilvertestnet',
    assets: [
      {
        description: 'QCK - native token of Quicksilver',
        denom_units: [
          {
            denom: 'uqck',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'qck',
            exponent: 6,
            aliases: []
          }
        ],
        base: 'uqck',
        name: 'Quicksilver',
        display: 'qck',
        symbol: 'QCK',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
        },
        coingecko_id: 'quicksilver',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'qwoyntestnet',
    assets: [
      {
        description:
          'QWOYN is the native governance token for the Qwoyn Studios Platform',
        denom_units: [
          {
            denom: 'uqwoyn',
            exponent: 0
          },
          {
            denom: 'qwoyn',
            exponent: 6
          }
        ],
        base: 'uqwoyn',
        name: 'Qwoyn Blockchain',
        display: 'qwoyn',
        symbol: 'QWOYN',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/qwoyntestnet/images/qwoyn.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/qwoyntestnet/images/qwoyn.png'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'rsprovidertestnet',
    assets: [
      {
        description:
          'The native staking and governance token of the Replicated Security Testnet.',
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
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'secretnetworktestnet',
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
        coingecko_id: 'secret',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'secretnetworktestnet2',
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
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'seidevnet3',
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/seidevnet3/images/sei.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/seidevnet3/images/sei.png'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'seitestnet',
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/seitestnet/images/sei.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/seitestnet/images/sei.png'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'seitestnet2',
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/seitestnet2/images/sei.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/seitestnet2/images/sei.png'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'sgetestnet',
    assets: [
      {
        description:
          'The SGE token is primarily a governance token for the SGE Network blockchain.',
        denom_units: [
          {
            denom: 'usge',
            exponent: 0,
            aliases: []
          },
          {
            denom: 'usge',
            exponent: 6,
            aliases: []
          }
        ],
        base: 'usge',
        name: 'SGE Testnet',
        display: 'sge',
        symbol: 'SGE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sgetestnet/images/sge.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sgetestnet/images/sge.png'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'sixtestnet',
    assets: [
      {
        description: 'The native staking token of the SIX Protocol.',
        denom_units: [
          {
            denom: 'usix',
            exponent: 0
          },
          {
            denom: 'six',
            exponent: 6
          }
        ],
        base: 'usix',
        name: 'Six token',
        display: 'six',
        symbol: 'six',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/sixtestnet/images/six.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/sixtestnet/images/six.png'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'sourcetestnet',
    assets: [
      {
        description: 'The native token of SOURCE Chain',
        denom_units: [
          {
            denom: 'usource',
            exponent: 0
          },
          {
            denom: 'source',
            exponent: 6
          }
        ],
        base: 'usource',
        name: 'Source Testnet',
        display: 'source',
        symbol: 'SOURCE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/sourcetestnet/images/source.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/sourcetestnet/images/source.svg'
        },
        coingecko_id: 'source-protocol',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/sourcetestnet/images/source.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/sourcetestnet/images/source.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'stargazetestnet',
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
        coingecko_id: 'stargaze',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'statesettestnet',
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
        symbol: 'STATE'
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'stridetestnet',
    assets: [
      {
        description: 'The native token of Stride',
        denom_units: [
          {
            denom: 'ustrd',
            exponent: 0
          },
          {
            denom: 'strd',
            exponent: 6
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
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'temporaltestnet',
    assets: [
      {
        description:
          'The native staking and governance token of the testnet version of Temporal.',
        denom_units: [
          {
            denom: 'utprl',
            exponent: 0
          },
          {
            denom: 'tprl',
            exponent: 6
          }
        ],
        base: 'utprl',
        name: 'TPRL',
        display: 'tprl',
        symbol: 'TPRL',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/temporaltestnet/images/temporal.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/temporaltestnet/images/temporal.png'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'terpnettestnet',
    assets: [
      {
        description:
          "Terp Token (TERP) is the Terp Network's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
        denom_units: [
          {
            denom: 'uterpx',
            exponent: 0
          },
          {
            denom: 'terpx',
            exponent: 6
          }
        ],
        base: 'uterpx',
        name: 'Terp Testnet Token',
        display: 'terpx',
        symbol: 'TERPX',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/terp.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/terp.png'
          }
        ]
      },
      {
        description:
          "Persy Gas Token (Persy) is the Terp Network's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
        denom_units: [
          {
            denom: 'uthiolx',
            exponent: 0
          },
          {
            denom: 'thiolx',
            exponent: 6
          }
        ],
        base: 'uthiolx',
        name: 'Thiol Testnet Gas Token',
        display: 'thiolx',
        symbol: 'THIOLX',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/thiol.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/thiol.png'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'terra2testnet',
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
        },
        coingecko_id: 'terra-luna-2',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'ulastestnet',
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/ulastestnet/images/logo.png'
        },
        coingecko_id: 'ulas',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/ulastestnet/images/logo.png'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'upticktestnet',
    assets: [
      {
        description: 'The native token of Uptick',
        denom_units: [
          {
            denom: 'auptick',
            exponent: 0
          },
          {
            denom: 'uptick',
            exponent: 18
          }
        ],
        base: 'auptick',
        name: 'Uptick',
        display: 'uptick',
        symbol: 'UPTICK',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/upticktestnet/images/uptick.png'
        },
        coingecko_id: '',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/upticktestnet/images/uptick.png'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'vincechaintestnet',
    assets: [
      {
        description:
          'Vince Chain is an Industry-Grade Blockchain For DeFi, Remote work, Gaming, Web3 and will power the new internet.',
        denom_units: [
          {
            denom: 'avce',
            exponent: 0
          },
          {
            denom: 'vce',
            exponent: 18
          }
        ],
        base: 'avce',
        name: 'VinceChain',
        display: 'vce',
        symbol: 'VCE',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/vincechaintestnet/images/vince.png'
        },
        coingecko_id: '',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/vincechaintestnet/images/vince.png'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'wavehashtestnet',
    assets: [
      {
        description: 'WaveHash A Permissioned Blockchain',
        denom_units: [
          {
            denom: 'uwahax',
            exponent: 0
          },
          {
            denom: 'wahax',
            exponent: 6
          }
        ],
        base: 'uwahax',
        name: 'WaveHash',
        display: 'wahax',
        symbol: 'WAHAX',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/wavehashtestnet/images/WaveHash.png'
        },
        coingecko_id: '',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/wavehashtestnet/images/WaveHash.png'
          }
        ]
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'xiontestnet',
    assets: [
      {
        description: 'The native staking token of the Xion network.',
        denom_units: [
          {
            denom: 'uxion',
            exponent: 0,
            aliases: ['microxion']
          },
          {
            denom: 'mxion',
            exponent: 3,
            aliases: ['millixion']
          },
          {
            denom: 'XION',
            exponent: 6,
            aliases: ['xion']
          }
        ],
        base: 'uxion',
        display: 'XION',
        name: 'xion',
        symbol: 'XION',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
          }
        ]
      },
      {
        denom_units: [
          {
            denom:
              'ibc/D934516FBE457F3A98AFABD87E0EFF7F95A15325C191EA8CDD7763C702FDDEC2',
            exponent: 0,
            aliases: ['uaxl']
          },
          {
            denom: 'axl',
            exponent: 6
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/D934516FBE457F3A98AFABD87E0EFF7F95A15325C191EA8CDD7763C702FDDEC2',
        name: 'Axelar AXL Token',
        display: 'axl',
        symbol: 'AXL',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'axelartestnet',
              base_denom: 'uaxl',
              channel_id: 'channel-283'
            },
            chain: {
              channel_id: 'channel-5',
              path: 'transfer/channel-5/uaxl'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'axelartestnet',
              base_denom: 'uaxl'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
        }
      },
      {
        denom_units: [
          {
            denom:
              'ibc/92E0120F15D037353CFB73C14651FC8930ADC05B93100FD7754D3A689E53B333',
            exponent: 0,
            aliases: ['uosmo']
          },
          {
            denom: 'osmo',
            exponent: 6
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/92E0120F15D037353CFB73C14651FC8930ADC05B93100FD7754D3A689E53B333',
        name: 'Osmosis OSMO Token',
        display: 'osmo',
        symbol: 'OSMO',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'osmosistestnet',
              base_denom: 'uosmo',
              channel_id: 'channel-1299'
            },
            chain: {
              channel_id: 'channel-8',
              path: 'transfer/channel-8/uosmo'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'osmosistestnet',
              base_denom: 'uosmo'
            },
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }
      },
      {
        denom_units: [
          {
            denom:
              'ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F',
            exponent: 0,
            aliases: ['uusdc']
          },
          {
            denom: 'usdc',
            exponent: 6
          }
        ],
        type_asset: 'ics20',
        base: 'ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F',
        name: 'Noble USDC Token',
        display: 'usdc',
        symbol: 'USDC',
        traces: [
          {
            type: 'ibc',
            counterparty: {
              chain_name: 'nobletestnet',
              base_denom: 'uusdc',
              channel_id: 'channel-17'
            },
            chain: {
              channel_id: 'channel-9',
              path: 'transfer/channel-9/uusdc'
            }
          }
        ],
        images: [
          {
            image_sync: {
              chain_name: 'nobletestnet',
              base_denom: 'uusdc'
            },
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
          }
        ],
        logo_URIs: {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }
      }
    ]
  },
  {
    $schema: '../../assetlist.schema.json',
    chain_name: 'zetachaintestnet',
    assets: [
      {
        description: 'The native token of ZetaChain',
        denom_units: [
          {
            denom: 'azeta',
            exponent: 0
          },
          {
            denom: 'tzeta',
            exponent: 18
          }
        ],
        base: 'azeta',
        name: 'ZetaChain Testnet',
        display: 'tzeta',
        symbol: 'tZETA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zetachaintestnet/images/zetachaintestnet.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zetachaintestnet/images/zetachaintestnet.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zetachaintestnet/images/zetachaintestnet.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zetachaintestnet/images/zetachaintestnet.svg'
          }
        ]
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
            exponent: 0
          },
          {
            denom: 'tgd',
            exponent: 6
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
        coingecko_id: 'tgrade',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg'
          }
        ]
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
        },
        coingecko_id: 'umee',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'unification',
    assets: [
      {
        description:
          'Staking and governance coin for the Unification Blockchain',
        denom_units: [
          {
            denom: 'nund',
            exponent: 0
          },
          {
            denom: 'FUND',
            exponent: 9
          }
        ],
        base: 'nund',
        name: 'Unification Network',
        display: 'FUND',
        symbol: 'FUND',
        images: [
          {
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg',
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png'
          }
        ],
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg'
        },
        coingecko_id: 'unification'
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'ununifi',
    assets: [
      {
        description: 'The governance token of UnUniFi protocol.',
        denom_units: [
          {
            denom: 'uguu',
            exponent: 0
          },
          {
            denom: 'guu',
            exponent: 6
          }
        ],
        base: 'uguu',
        name: 'UnUniFi',
        display: 'guu',
        symbol: 'GUU',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.svg'
        },
        keywords: ['staking', 'wasm', 'assets', 'nft'],
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'uptick',
    assets: [
      {
        description: 'The native token of Uptick',
        denom_units: [
          {
            denom: 'auptick',
            exponent: 0
          },
          {
            denom: 'uptick',
            exponent: 18
          }
        ],
        base: 'auptick',
        name: 'Uptick',
        display: 'uptick',
        symbol: 'UPTICK',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.svg'
        },
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.svg'
          }
        ]
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
            exponent: 0
          },
          {
            denom: 'vdl',
            exponent: 6
          }
        ],
        base: 'uvdl',
        name: 'Vidulum',
        display: 'vdl',
        symbol: 'VDL',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg'
        },
        coingecko_id: 'vidulum',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg'
          }
        ]
      }
    ]
  },
  {
    $schema: '../assetlist.schema.json',
    chain_name: 'xpla',
    assets: [
      {
        description: 'The native staking token of XPLA.',
        denom_units: [
          {
            denom: 'axpla',
            exponent: 0
          },
          {
            denom: 'xpla',
            exponent: 18
          }
        ],
        base: 'axpla',
        name: 'Xpla',
        display: 'xpla',
        symbol: 'XPLA',
        logo_URIs: {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg'
        },
        coingecko_id: 'xpla',
        images: [
          {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
            svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg'
          }
        ]
      }
    ]
  }
];
export default assets;
