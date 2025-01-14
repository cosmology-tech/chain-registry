import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'osmosis',
  assets: [
    {
      description: 'The native token of Osmosis',
      extendedDescription: 'Osmosis (OSMO) is the premier DEX and cross-chain DeFi hub within the Cosmos ecosystem, a network of over 50 sovereign, interoperable blockchains seamlessly connected through the Inter-Blockchain Communication Protocol (IBC). Pioneering in its approach, Osmosis offers a dynamic trading and liquidity provision experience, integrating non-IBC assets from other ecosystems, including Ethereum, Solana, Avalanche, and Polkadot. Initially adopting Balancer-style pools, Osmosis now also features a concentrated liquidity model that is orders of magnitude more capital efficient, meaning that significantly less liquidity is required to handle the same amount of trading volume with minimal slippage.\n\nAs a true appchain, Osmosis has greater control over the full blockchain stack than traditional smart contract DEXs, which must follow the code of the parent chain that it is built on. This fine-grained control has enabled, for example, the development of Superfluid Staking, an extension of Proof of Stake that allows assets at the application layer to be staked to secure the chain. The customizability of appchains also allows implementing features like the Protocol Revenue module, which enables Osmosis to conduct on-chain arbitrage on behalf of OSMO stakers, balancing prices across pools while generating real yield revenue from this volume. Additionally, as a sovereign appchain, Osmosis governance can vote on upgrades to the protocol. One example of this was the introduction of a Taker Fee, which switched on the collection of exchange fees to generate diverse yield from Osmosis volume and distribute it to OSMO stakers.\n\nOsmosis is bringing the full centralized exchange experience to the decentralized world by building a cross-chain native DEX and trading suite that connects all chains over IBC, including Ethereum and Bitcoin. To reach this goal, Osmosis hosts an ever-expanding suite of DeFi applications aimed at providing a one-stop experience that includes lending, credit, margin, DeFi strategy vaults, power perps, fiat on-ramps, NFTs, stablecoins, and more — all of the functionalities that centralized exchange offer and more, in the trust-minimized environment of decentralized finance.',
      denomUnits: [{
          denom: 'uosmo',
          exponent: 0
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'uosmo',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
          theme: {
            primaryColorHex: '#760dbb'
          }
        }],
      coingeckoId: 'osmosis',
      keywords: ['dex', 'staking'],
      socials: {
        website: 'https://osmosis.zone',
        twitter: 'https://twitter.com/osmosiszone'
      }
    },
    {
      description: 'ION is the second native token of Osmosis.',
      extendedDescription: 'ION DAO is governed by ION holders. ION is the second native token of Osmosis, the biggest DEX in Cosmos. The origin of ION was a meme coin, but ION DAO has been trying to find ways to add values on ION.',
      denomUnits: [{
          denom: 'uion',
          exponent: 0
        }, {
          denom: 'ion',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'uion',
      name: 'Ion DAO',
      display: 'ion',
      symbol: 'ION',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg',
          theme: {
            primaryColorHex: '#4453c7'
          }
        }],
      coingeckoId: 'ion',
      keywords: ['memecoin', 'defi'],
      socials: {
        website: 'https://ion.wtf',
        twitter: 'https://twitter.com/_IONDAO'
      }
    },
    {
      description: 'Circle\'s stablecoin on Axelar',
      denomUnits: [{
          denom: 'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858',
      name: 'USDC (Ethereum via Axelar)',
      display: 'usdc',
      symbol: 'USDC.eth.axl',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'uusdc',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/uusdc'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.svg',
          theme: {
            primaryColorHex: '#2474cb'
          }
        }, {
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg',
          theme: {
            primaryColorHex: '#2474cc'
          }
        }]
    },
    {
      description: 'Ethereum (ETH) is a decentralized, open-source blockchain system featuring smart contract functionality. It\'s the native cryptocurrency of the Ethereum platform, often regarded as the second most popular digital currency after Bitcoin. Ethereum was proposed in late 2013 and development was crowdfunded in 2014, leading to its network going live on 30 July 2015.\n\nETH, as a digital currency, is used for a variety of purposes within the Ethereum ecosystem, including the execution of decentralized smart contracts and as a mode of payment. Unlike Bitcoin, Ethereum was designed to be a platform for applications that can operate without the need for intermediaries, using blockchain technology. This has made Ethereum a leading platform for various applications, including decentralized finance (DeFi), non-fungible tokens (NFTs), and more. Ethereum is constantly evolving, with a significant upgrade termed Ethereum 2.0, which aims to improve its scalability, security, and sustainability.',
      denomUnits: [{
          denom: 'ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5',
          exponent: 0,
          aliases: ['weth-wei']
        }, {
          denom: 'weth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5',
      name: 'Ethereum (Axelar)',
      display: 'weth',
      symbol: 'ETH.axl',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Ethereum'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'weth-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/weth-wei'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/eth.axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/eth.axl.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/eth.axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/eth.axl.svg'
        },
        {
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'weth-wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png',
          theme: {
            primaryColorHex: '#3a3444'
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg',
          theme: {
            primaryColorHex: '#303030'
          }
        }
      ]
    },
    {
      description: 'Wrapped Bitcoin on Axelar',
      denomUnits: [{
          denom: 'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F',
          exponent: 0,
          aliases: ['wbtc-satoshi']
        }, {
          denom: 'wbtc',
          exponent: 8
        }],
      typeAsset: 'ics20',
      base: 'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F',
      name: 'Wrapped Bitcoin (Ethereum via Axelar)',
      display: 'wbtc',
      symbol: 'WBTC.eth.axl',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'BitGo, Kyber, and Ren'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'wbtc-satoshi',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/wbtc-satoshi'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.svg',
          theme: {
            primaryColorHex: '#312b3a'
          }
        }, {
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'wbtc-satoshi'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png',
          theme: {
            primaryColorHex: '#41394d'
          }
        }]
    },
    {
      description: 'Tether\'s USD stablecoin on Axelar',
      denomUnits: [{
          denom: 'ibc/8242AD24008032E457D2E12D46588FD39FB54FB29680C6C7663D296B383C37C4',
          exponent: 0,
          aliases: ['uusdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/8242AD24008032E457D2E12D46588FD39FB54FB29680C6C7663D296B383C37C4',
      name: 'Tether USD (Ethereum via Axelar)',
      display: 'usdt',
      symbol: 'USDT.eth.axl',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Tether'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'uusdt',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/uusdt'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.axl.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.axl.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.axl.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.axl.png',
          theme: {
            primaryColorHex: '#049393'
          }
        }, {
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'uusdt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          theme: {
            circle: true,
            primaryColorHex: '#009393',
            backgroundColorHex: '#009393'
          }
        }]
    },
    {
      description: 'Multi-Collateral Dai, brings a lot of new and exciting features, such as support for new CDP collateral types and Dai Savings Rate.',
      denomUnits: [{
          denom: 'ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7',
          exponent: 0,
          aliases: ['dai-wei']
        }, {
          denom: 'dai',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7',
      name: 'Dai Stablecoin',
      display: 'dai',
      symbol: 'DAI',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'MakerDAO'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x6b175474e89094c44da98b954eedeac495271d0f'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'dai-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/dai-wei'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x6b175474e89094c44da98b954eedeac495271d0f'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
        }]
    },
    {
      description: 'Binance USD (BUSD) is a dollar-backed stablecoin issued and custodied by Paxos Trust Company, and regulated by the New York State Department of Financial Services. BUSD is available directly for sale 1:1 with USD on Paxos.com and will be listed for trading on Binance.',
      denomUnits: [{
          denom: 'ibc/6329DD8CF31A334DD5BE3F68C846C9FE313281362B37686A62343BAC1EB1546D',
          exponent: 0,
          aliases: ['busd-wei']
        }, {
          denom: 'busd',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/6329DD8CF31A334DD5BE3F68C846C9FE313281362B37686A62343BAC1EB1546D',
      name: 'Binance USD',
      display: 'busd',
      symbol: 'BUSD',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Binance'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x4fabb145d64652a948d72533023f6e7a623c7c53'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'busd-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/busd-wei'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x4fabb145d64652a948d72533023f6e7a623c7c53'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.svg',
          theme: {
            primaryColorHex: '#f3bb0c'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Cosmos Hub.',
      denomUnits: [{
          denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
      name: 'Cosmos Hub',
      display: 'atom',
      symbol: 'ATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom',
            channelId: 'channel-141'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/uatom'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      images: [{
          imageSync: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
          theme: {
            primaryColorHex: '#272d45'
          }
        }]
    },
    {
      description: 'CRO is the native token of the Crypto.org Chain, referred to as Native CRO.',
      denomUnits: [{
          denom: 'ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1',
          exponent: 0,
          aliases: ['basecro']
        }, {
          denom: 'cro',
          exponent: 8
        }],
      typeAsset: 'ics20',
      base: 'ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1',
      name: 'Cronos POS Chain',
      display: 'cro',
      symbol: 'CRO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cryptoorgchain',
            baseDenom: 'basecro',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-5',
            path: 'transfer/channel-5/basecro'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
      },
      images: [{
          imageSync: {
            chainName: 'cryptoorgchain',
            baseDenom: 'basecro'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png',
          theme: {
            primaryColorHex: '#0c2c71'
          }
        }]
    },
    {
      description: 'BNB powers the BNB Chain ecosystem and is the native coin of the BNB Beacon Chain and BNB Smart Chain.',
      denomUnits: [{
          denom: 'ibc/F4A070A6D78496D53127EA85C094A9EC87DFC1F36071B8CCDDBD020F933D213D',
          exponent: 0,
          aliases: ['wbnb-wei']
        }, {
          denom: 'wbnb',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/F4A070A6D78496D53127EA85C094A9EC87DFC1F36071B8CCDDBD020F933D213D',
      name: 'Binance Coin',
      display: 'wbnb',
      symbol: 'BNB',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chainName: 'binancesmartchain',
            baseDenom: 'wei'
          },
          chain: {
            contract: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
          },
          provider: 'Binance'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'binancesmartchain',
            baseDenom: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'wbnb-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/wbnb-wei'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg'
      },
      images: [{
          imageSync: {
            chainName: 'binancesmartchain',
            baseDenom: 'wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg',
          theme: {
            primaryColorHex: '#f3bb0c'
          }
        }]
    },
    {
      description: 'Polygon (formerly Matic) Network brings massive scale to Ethereum using an adapted version of Plasma with PoS based side chains. Polygon is a well-structured, easy-to-use platform for Ethereum scaling and infrastructure development.',
      denomUnits: [{
          denom: 'ibc/AB589511ED0DD5FA56171A39978AFBF1371DB986EC1C3526CE138A16377E39BB',
          exponent: 0,
          aliases: ['wmatic-wei']
        }, {
          denom: 'wmatic',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/AB589511ED0DD5FA56171A39978AFBF1371DB986EC1C3526CE138A16377E39BB',
      name: 'Polygon',
      display: 'wmatic',
      symbol: 'POL',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chainName: 'polygon',
            baseDenom: 'wei'
          },
          provider: 'Polygon'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'polygon',
            baseDenom: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'wmatic-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/wmatic-wei'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.svg'
      },
      images: [{
          imageSync: {
            chainName: 'polygon',
            baseDenom: 'wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.svg',
          theme: {
            primaryColorHex: '#8444e4'
          }
        }]
    },
    {
      description: 'AVAX is the native token of Avalanche. It is a hard-capped, scarce asset that is used to pay for fees, secure the platform through staking, and provide a basic unit of account between the multiple subnets created on Avalanche.',
      denomUnits: [{
          denom: 'ibc/6F62F01D913E3FFE472A38C78235B8F021B511BC6596ADFF02615C8F83D3B373',
          exponent: 0,
          aliases: ['wavax-wei']
        }, {
          denom: 'avax',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/6F62F01D913E3FFE472A38C78235B8F021B511BC6596ADFF02615C8F83D3B373',
      name: 'Avalanche',
      display: 'avax',
      symbol: 'AVAX',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chainName: 'avalanche',
            baseDenom: 'wei'
          },
          provider: 'Avalanche'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'avalanche',
            baseDenom: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'wavax-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/wavax-wei'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.svg'
      },
      images: [{
          imageSync: {
            chainName: 'avalanche',
            baseDenom: 'wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.svg',
          theme: {
            primaryColorHex: '#eb4444'
          }
        }]
    },
    {
      description: 'The native staking token of Terra Classic.',
      denomUnits: [
        {
          denom: 'ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0',
          exponent: 0,
          aliases: ['microluna', 'uluna']
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
      typeAsset: 'ics20',
      base: 'ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0',
      name: 'Luna Classic',
      display: 'luna',
      symbol: 'LUNC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'terra',
            baseDenom: 'uluna',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-72',
            path: 'transfer/channel-72/uluna'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg'
      },
      images: [{
          imageSync: {
            chainName: 'terra',
            baseDenom: 'uluna'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg',
          theme: {
            primaryColorHex: '#fcdb5b'
          }
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denomUnits: [{
          denom: 'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED',
      name: 'Juno',
      display: 'juno',
      symbol: 'JUNO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'ujuno',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-42',
            path: 'transfer/channel-42/ujuno'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'ujuno'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg',
          theme: {
            primaryColorHex: '#fa7b7b'
          }
        }]
    },
    {
      description: 'Wrapped Polkadot on Axelar',
      denomUnits: [{
          denom: 'ibc/3FF92D26B407FD61AE95D975712A7C319CDE28DE4D80BDC9978D935932B991D7',
          exponent: 0,
          aliases: ['dot-planck']
        }, {
          denom: 'dot',
          exponent: 10
        }],
      typeAsset: 'ics20',
      base: 'ibc/3FF92D26B407FD61AE95D975712A7C319CDE28DE4D80BDC9978D935932B991D7',
      name: 'Polkadot (Moonbeam via Axelar)',
      display: 'dot',
      symbol: 'DOT.glmr.axl',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chainName: 'polkadot',
            baseDenom: 'Planck'
          },
          provider: 'Polkadot Parachain'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'moonbeam',
            baseDenom: '0xffffffff1fcacbd218edc0eba20fc2308c778080'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'dot-planck',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/dot-planck'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dot.axl.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dot.axl.svg'
        }, {
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'dot-planck'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg',
          theme: {
            primaryColorHex: '#e4047c'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Evmos Hub',
      denomUnits: [{
          denom: 'ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A',
          exponent: 0,
          aliases: ['aevmos']
        }, {
          denom: 'evmos',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A',
      name: 'Evmos',
      display: 'evmos',
      symbol: 'EVMOS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'evmos',
            baseDenom: 'aevmos',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-204',
            path: 'transfer/channel-204/aevmos'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
      },
      images: [{
          imageSync: {
            chainName: 'evmos',
            baseDenom: 'aevmos'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg',
          theme: {
            primaryColorHex: '#ec4c34'
          }
        }]
    },
    {
      description: 'The native staking and governance token of Kava',
      denomUnits: [{
          denom: 'ibc/57AA1A70A4BC9769C525EBF6386F7A21536E04A79D62E1981EFCEF9428EBB205',
          exponent: 0,
          aliases: ['ukava']
        }, {
          denom: 'kava',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/57AA1A70A4BC9769C525EBF6386F7A21536E04A79D62E1981EFCEF9428EBB205',
      name: 'Kava',
      display: 'kava',
      symbol: 'KAVA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kava',
            baseDenom: 'ukava',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-143',
            path: 'transfer/channel-143/ukava'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
      },
      images: [{
          imageSync: {
            chainName: 'kava',
            baseDenom: 'ukava'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg',
          theme: {
            primaryColorHex: '#e64942'
          }
        }]
    },
    {
      description: 'The native token of Secret Network',
      denomUnits: [{
          denom: 'ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'secretnetwork',
            baseDenom: 'uscrt',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-88',
            path: 'transfer/channel-88/uscrt'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
      },
      images: [{
          imageSync: {
            chainName: 'secretnetwork',
            baseDenom: 'uscrt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg',
          theme: {
            primaryColorHex: '#040404'
          }
        }]
    },
    {
      description: 'The USD stablecoin of Terra Classic.',
      denomUnits: [
        {
          denom: 'ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC',
          exponent: 0,
          aliases: ['microusd', 'uusd']
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
      typeAsset: 'ics20',
      base: 'ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC',
      name: 'TerraClassicUSD',
      display: 'ust',
      symbol: 'USTC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'terra',
            baseDenom: 'uusd',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-72',
            path: 'transfer/channel-72/uusd'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg'
      },
      images: [{
          imageSync: {
            chainName: 'terra',
            baseDenom: 'uusd'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg',
          theme: {
            primaryColorHex: '#5493f2'
          }
        }]
    },
    {
      description: 'The native token of Stargaze',
      denomUnits: [{
          denom: 'ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4',
          exponent: 0,
          aliases: ['ustars']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'stargaze',
            baseDenom: 'ustars',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-75',
            path: 'transfer/channel-75/ustars'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stargaze',
            baseDenom: 'ustars'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg',
          theme: {
            primaryColorHex: '#db2777'
          }
        }]
    },
    {
      description: 'The native token of Chihuahua Chain',
      denomUnits: [{
          denom: 'ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228',
          exponent: 0,
          aliases: ['uhuahua']
        }, {
          denom: 'huahua',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228',
      name: 'Chihuahua',
      display: 'huahua',
      symbol: 'HUAHUA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'chihuahua',
            baseDenom: 'uhuahua',
            channelId: 'channel-7'
          },
          chain: {
            channelId: 'channel-113',
            path: 'transfer/channel-113/uhuahua'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
      },
      images: [{
          imageSync: {
            chainName: 'chihuahua',
            baseDenom: 'uhuahua'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg',
          theme: {
            primaryColorHex: '#343434'
          }
        }]
    },
    {
      description: 'The XPRT token is primarily a governance token for the Persistence chain.',
      denomUnits: [{
          denom: 'ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293',
          exponent: 0,
          aliases: ['uxprt']
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293',
      name: 'Persistence',
      display: 'xprt',
      symbol: 'XPRT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'persistence',
            baseDenom: 'uxprt',
            channelId: 'channel-6'
          },
          chain: {
            channelId: 'channel-4',
            path: 'transfer/channel-4/uxprt'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
      },
      images: [{
          imageSync: {
            chainName: 'persistence',
            baseDenom: 'uxprt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg',
          theme: {
            circle: true,
            primaryColorHex: '#E59636',
            backgroundColorHex: '#000000'
          }
        }]
    },
    {
      description: 'pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets. Stakers of PoS tokens can stake their assets while maintaining the liquidity of these assets. Users earn staking rewards + receive 1:1 pegged staked representative tokens which can be used to generate additional yield.',
      denomUnits: [{
          denom: 'ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961',
          exponent: 0,
          aliases: [
            'gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
            '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
            'ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444'
          ]
        }, {
          denom: 'pstake',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961',
      name: 'pSTAKE Finance',
      display: 'pstake',
      symbol: 'PSTAKE',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chainName: 'persistence',
            baseDenom: 'uxprt'
          },
          provider: 'Persistence'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
          },
          provider: 'Gravity Bridge'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'gravitybridge',
            baseDenom: 'gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
            channelId: 'channel-24'
          },
          chain: {
            channelId: 'channel-38',
            path: 'transfer/channel-38/gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
          }
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'persistence',
            baseDenom: 'ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444',
            channelId: 'channel-6'
          },
          chain: {
            channelId: 'channel-4',
            path: 'transfer/channel-4/transfer/channel-38/gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg',
          theme: {
            primaryColorHex: '#050505'
          }
        }]
    },
    {
      description: 'Akash Token (AKT) is the Akash Network\'s native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.',
      denomUnits: [{
          denom: 'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4',
          exponent: 0,
          aliases: ['uakt']
        }, {
          denom: 'akt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4',
      name: 'Akash',
      display: 'akt',
      symbol: 'AKT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'akash',
            baseDenom: 'uakt',
            channelId: 'channel-9'
          },
          chain: {
            channelId: 'channel-1',
            path: 'transfer/channel-1/uakt'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
      },
      images: [{
          imageSync: {
            chainName: 'akash',
            baseDenom: 'uakt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg',
          theme: {
            primaryColorHex: '#bc342c'
          }
        }]
    },
    {
      description: 'REGEN coin is the token for the Regen Network Platform',
      denomUnits: [{
          denom: 'ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076',
          exponent: 0,
          aliases: ['uregen']
        }, {
          denom: 'regen',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076',
      name: 'Regen',
      display: 'regen',
      symbol: 'REGEN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'regen',
            baseDenom: 'uregen',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-8',
            path: 'transfer/channel-8/uregen'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg'
      },
      images: [{
          imageSync: {
            chainName: 'regen',
            baseDenom: 'uregen'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg',
          theme: {
            primaryColorHex: '#56b790'
          }
        }]
    },
    {
      description: 'DVPN is the native token of the Sentinel Hub.',
      denomUnits: [{
          denom: 'ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84',
          exponent: 0,
          aliases: ['udvpn']
        }, {
          denom: 'dvpn',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84',
      name: 'Sentinel',
      display: 'dvpn',
      symbol: 'DVPN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'sentinel',
            baseDenom: 'udvpn',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-2',
            path: 'transfer/channel-2/udvpn'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg'
      },
      images: [{
          imageSync: {
            chainName: 'sentinel',
            baseDenom: 'udvpn'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg',
          theme: {
            primaryColorHex: '#10a7ef'
          }
        }]
    },
    {
      description: 'The IRIS token is the native governance token for the IrisNet chain.',
      denomUnits: [{
          denom: 'ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0',
          exponent: 0,
          aliases: ['uiris']
        }, {
          denom: 'iris',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0',
      name: 'IRISnet',
      display: 'iris',
      symbol: 'IRIS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'irisnet',
            baseDenom: 'uiris',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-6',
            path: 'transfer/channel-6/uiris'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg'
      },
      images: [{
          imageSync: {
            chainName: 'irisnet',
            baseDenom: 'uiris'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg',
          theme: {
            primaryColorHex: '#5664ad'
          }
        }]
    },
    {
      description: 'IOV coin is the token for the Starname (IOV) Asset Name Service',
      denomUnits: [{
          denom: 'ibc/52B1AA623B34EB78FD767CEA69E8D7FA6C9CFE1FBF49C5406268FD325E2CC2AC',
          exponent: 0,
          aliases: ['uiov']
        }, {
          denom: 'iov',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/52B1AA623B34EB78FD767CEA69E8D7FA6C9CFE1FBF49C5406268FD325E2CC2AC',
      name: 'Starname',
      display: 'iov',
      symbol: 'IOV',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'starname',
            baseDenom: 'uiov',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-15',
            path: 'transfer/channel-15/uiov'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg'
      },
      images: [{
          imageSync: {
            chainName: 'starname',
            baseDenom: 'uiov'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg',
          theme: {
            primaryColorHex: '#5c64b4'
          }
        }]
    },
    {
      description: 'e-Money NGM staking token. In addition to earning staking rewards the token is bought back and burned based on e-Money stablecoin inflation.',
      denomUnits: [{
          denom: 'ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59',
          exponent: 0,
          aliases: ['ungm']
        }, {
          denom: 'ngm',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59',
      name: 'e-Money',
      display: 'ngm',
      symbol: 'NGM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'emoney',
            baseDenom: 'ungm',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-37',
            path: 'transfer/channel-37/ungm'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg'
      },
      images: [{
          imageSync: {
            chainName: 'emoney',
            baseDenom: 'ungm'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg',
          theme: {
            primaryColorHex: '#caf2ea'
          }
        }]
    },
    {
      description: 'e-Money EUR stablecoin. Audited and backed by fiat EUR deposits and government bonds.',
      denomUnits: [{
          denom: 'ibc/5973C068568365FFF40DEDCF1A1CB7582B6116B731CD31A12231AE25E20B871F',
          exponent: 0,
          aliases: ['eeur']
        }, {
          denom: 'eur',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/5973C068568365FFF40DEDCF1A1CB7582B6116B731CD31A12231AE25E20B871F',
      name: 'e-Money EUR',
      display: 'eur',
      symbol: 'EEUR',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'emoney',
            baseDenom: 'eeur',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-37',
            path: 'transfer/channel-37/eeur'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg'
      },
      images: [{
          imageSync: {
            chainName: 'emoney',
            baseDenom: 'eeur'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg',
          theme: {
            primaryColorHex: '#f4c808'
          }
        }]
    },
    {
      description: 'LIKE is the native staking and governance token of LikeCoin chain, a Decentralized Publishing Infrastructure to empower content ownership, authenticity, and provenance.',
      denomUnits: [{
          denom: 'ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525',
          exponent: 0,
          aliases: ['nanolike']
        }, {
          denom: 'like',
          exponent: 9
        }],
      typeAsset: 'ics20',
      base: 'ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525',
      name: 'LikeCoin',
      display: 'like',
      symbol: 'LIKE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'likecoin',
            baseDenom: 'nanolike',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-53',
            path: 'transfer/channel-53/nanolike'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg'
      },
      images: [{
          imageSync: {
            chainName: 'likecoin',
            baseDenom: 'nanolike'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg',
          theme: {
            primaryColorHex: '#2d656c'
          }
        }]
    },
    {
      description: 'The native token of IXO Chain',
      denomUnits: [{
          denom: 'ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B',
          exponent: 0,
          aliases: ['uixo']
        }, {
          denom: 'ixo',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B',
      name: 'Impact Hub',
      display: 'ixo',
      symbol: 'IXO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'impacthub',
            baseDenom: 'uixo',
            channelId: 'channel-4'
          },
          chain: {
            channelId: 'channel-38',
            path: 'transfer/channel-38/uixo'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
      },
      images: [{
          imageSync: {
            chainName: 'impacthub',
            baseDenom: 'uixo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg',
          theme: {
            primaryColorHex: '#2c4484'
          }
        }]
    },
    {
      description: 'The BCNA coin is the transactional token within the BitCanna network, serving the legal cannabis industry through its payment network, supply chain and trust network.',
      denomUnits: [{
          denom: 'ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5',
          exponent: 0,
          aliases: ['ubcna']
        }, {
          denom: 'bcna',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5',
      name: 'BitCanna',
      display: 'bcna',
      symbol: 'BCNA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'bitcanna',
            baseDenom: 'ubcna',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-51',
            path: 'transfer/channel-51/ubcna'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
      },
      images: [{
          imageSync: {
            chainName: 'bitcanna',
            baseDenom: 'ubcna'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg',
          theme: {
            primaryColorHex: '#3cc494'
          }
        }]
    },
    {
      description: 'BitSong Native Token',
      denomUnits: [{
          denom: 'ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452',
          exponent: 0,
          aliases: ['ubtsg']
        }, {
          denom: 'btsg',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452',
      name: 'BitSong',
      display: 'btsg',
      symbol: 'BTSG',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'bitsong',
            baseDenom: 'ubtsg',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-73',
            path: 'transfer/channel-73/ubtsg'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg'
      },
      images: [{
          imageSync: {
            chainName: 'bitsong',
            baseDenom: 'ubtsg'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg',
          theme: {
            primaryColorHex: '#c8307f'
          }
        }]
    },
    {
      description: 'The native token of Ki Chain',
      denomUnits: [{
          denom: 'ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E',
          exponent: 0,
          aliases: ['uxki']
        }, {
          denom: 'xki',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E',
      name: 'Ki',
      display: 'xki',
      symbol: 'XKI',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kichain',
            baseDenom: 'uxki',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-77',
            path: 'transfer/channel-77/uxki'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg'
      },
      images: [{
          imageSync: {
            chainName: 'kichain',
            baseDenom: 'uxki'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg',
          theme: {
            primaryColorHex: '#1c04fc'
          }
        }]
    },
    {
      description: 'Panacea is a public blockchain launched by MediBloc, which is the key infrastructure for reinventing the patient-centered healthcare data ecosystem',
      denomUnits: [{
          denom: 'ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB',
          exponent: 0,
          aliases: ['umed']
        }, {
          denom: 'med',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB',
      name: 'Medibloc',
      display: 'med',
      symbol: 'MED',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'panacea',
            baseDenom: 'umed',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-82',
            path: 'transfer/channel-82/umed'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg'
      },
      images: [{
          imageSync: {
            chainName: 'panacea',
            baseDenom: 'umed'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg',
          theme: {
            primaryColorHex: '#2474ec'
          }
        }]
    },
    {
      description: 'The staking token of Bostrom',
      denomUnits: [{
          denom: 'ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4',
          exponent: 0,
          aliases: ['boot']
        }],
      typeAsset: 'ics20',
      base: 'ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4',
      name: 'bostrom',
      display: 'ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4',
      symbol: 'BOOT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'bostrom',
            baseDenom: 'boot',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-95',
            path: 'transfer/channel-95/boot'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg'
      },
      images: [{
          imageSync: {
            chainName: 'bostrom',
            baseDenom: 'boot'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg',
          theme: {
            primaryColorHex: '#4cea4e'
          }
        }]
    },
    {
      description: 'Native Token of Comdex Protocol',
      denomUnits: [{
          denom: 'ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0',
          exponent: 0,
          aliases: ['ucmdx']
        }, {
          denom: 'cmdx',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0',
      name: 'Comdex',
      display: 'cmdx',
      symbol: 'CMDX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'comdex',
            baseDenom: 'ucmdx',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-87',
            path: 'transfer/channel-87/ucmdx'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
      },
      images: [{
          imageSync: {
            chainName: 'comdex',
            baseDenom: 'ucmdx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg',
          theme: {
            primaryColorHex: '#fc4454'
          }
        }]
    },
    {
      description: 'Native token for the cheqd network',
      denomUnits: [{
          denom: 'ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA',
          exponent: 0,
          aliases: ['ncheq']
        }, {
          denom: 'cheq',
          exponent: 9
        }],
      typeAsset: 'ics20',
      base: 'ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA',
      name: 'Cheqd',
      display: 'cheq',
      symbol: 'CHEQ',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cheqd',
            baseDenom: 'ncheq',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-108',
            path: 'transfer/channel-108/ncheq'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
      },
      images: [{
          imageSync: {
            chainName: 'cheqd',
            baseDenom: 'ncheq'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg',
          theme: {
            primaryColorHex: '#fc5f04'
          }
        }]
    },
    {
      description: 'Native token of the Lum Network',
      denomUnits: [{
          denom: 'ibc/8A34AF0C1943FD0DFCDE9ADBF0B2C9959C45E87E6088EA2FC6ADACD59261B8A2',
          exponent: 0,
          aliases: ['ulum']
        }, {
          denom: 'lum',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/8A34AF0C1943FD0DFCDE9ADBF0B2C9959C45E87E6088EA2FC6ADACD59261B8A2',
      name: 'Lum Network',
      display: 'lum',
      symbol: 'LUM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'lumnetwork',
            baseDenom: 'ulum',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-115',
            path: 'transfer/channel-115/ulum'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg'
      },
      images: [{
          imageSync: {
            chainName: 'lumnetwork',
            baseDenom: 'ulum'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg',
          theme: {
            primaryColorHex: '#080808'
          }
        }]
    },
    {
      description: 'The native token of Vidulum',
      denomUnits: [{
          denom: 'ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD',
          exponent: 0,
          aliases: ['uvdl']
        }, {
          denom: 'vdl',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD',
      name: 'Vidulum (Vidulum)',
      display: 'vdl',
      symbol: 'VDL.vdl',
      traces: [{
          type: 'legacy-mintage',
          counterparty: {
            chainName: 'beezee',
            baseDenom: 'factory/bze13gzq40che93tgfm9kzmkpjamah5nj0j73pyhqk/uvdl'
          },
          provider: 'Vidulum'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'vidulum',
            baseDenom: 'uvdl',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-124',
            path: 'transfer/channel-124/uvdl'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/vdl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/vdl.svg'
      },
      images: [{
          imageSync: {
            chainName: 'vidulum',
            baseDenom: 'uvdl'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/vdl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/vdl.svg',
          theme: {
            primaryColorHex: '#3454bc'
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg'
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'The native token of Desmos',
      denomUnits: [{
          denom: 'ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C',
          exponent: 0,
          aliases: ['udsm']
        }, {
          denom: 'dsm',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C',
      name: 'Desmos',
      display: 'dsm',
      symbol: 'DSM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'desmos',
            baseDenom: 'udsm',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-135',
            path: 'transfer/channel-135/udsm'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg'
      },
      images: [{
          imageSync: {
            chainName: 'desmos',
            baseDenom: 'udsm'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg',
          theme: {
            primaryColorHex: '#fb804e'
          }
        }]
    },
    {
      description: 'Native token of Dig Chain',
      denomUnits: [{
          denom: 'ibc/307E5C96C8F60D1CBEE269A9A86C0834E1DB06F2B3788AE4F716EDB97A48B97D',
          exponent: 0,
          aliases: ['udig']
        }, {
          denom: 'dig',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/307E5C96C8F60D1CBEE269A9A86C0834E1DB06F2B3788AE4F716EDB97A48B97D',
      name: 'Dig Chain',
      display: 'dig',
      symbol: 'DIG',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'dig',
            baseDenom: 'udig',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-128',
            path: 'transfer/channel-128/udig'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png'
      },
      images: [{
          imageSync: {
            chainName: 'dig',
            baseDenom: 'udig'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png',
          theme: {
            primaryColorHex: '#1b1433'
          }
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'Somm Token (SOMM) is the native staking token of the Sommelier Chain',
      denomUnits: [
        {
          denom: 'ibc/9BBA9A1C257E971E38C1422780CE6F0B0686F0A3085E2D61118D904BFE0F5F5E',
          exponent: 0,
          aliases: ['microsomm', 'usomm']
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
      typeAsset: 'ics20',
      base: 'ibc/9BBA9A1C257E971E38C1422780CE6F0B0686F0A3085E2D61118D904BFE0F5F5E',
      name: 'Sommelier',
      display: 'somm',
      symbol: 'SOMM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'sommelier',
            baseDenom: 'usomm',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-165',
            path: 'transfer/channel-165/usomm'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg'
      },
      images: [{
          imageSync: {
            chainName: 'sommelier',
            baseDenom: 'usomm'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg',
          theme: {
            primaryColorHex: '#f36353'
          }
        }]
    },
    {
      description: 'The native token of BandChain',
      denomUnits: [{
          denom: 'ibc/F867AE2112EFE646EC71A25CD2DFABB8927126AC1E19F1BBF0FF693A4ECA05DE',
          exponent: 0,
          aliases: ['uband']
        }, {
          denom: 'band',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/F867AE2112EFE646EC71A25CD2DFABB8927126AC1E19F1BBF0FF693A4ECA05DE',
      name: 'Band Protocol',
      display: 'band',
      symbol: 'BAND',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'bandchain',
            baseDenom: 'uband',
            channelId: 'channel-83'
          },
          chain: {
            channelId: 'channel-148',
            path: 'transfer/channel-148/uband'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg'
      },
      images: [{
          imageSync: {
            chainName: 'bandchain',
            baseDenom: 'uband'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg',
          theme: {
            primaryColorHex: '#4424e4'
          }
        }]
    },
    {
      description: 'The native token of Konstellation Network',
      denomUnits: [{
          denom: 'ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593',
          exponent: 0,
          aliases: ['udarc']
        }, {
          denom: 'darc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593',
      name: 'Konstellation',
      display: 'darc',
      symbol: 'DARC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'konstellation',
            baseDenom: 'udarc',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-171',
            path: 'transfer/channel-171/udarc'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'konstellation',
            baseDenom: 'udarc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.svg',
          theme: {
            primaryColorHex: '#042a61'
          }
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'The native token of Umee',
      denomUnits: [{
          denom: 'ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C',
          exponent: 0,
          aliases: ['uumee']
        }, {
          denom: 'umee',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C',
      name: 'UX Chain',
      display: 'umee',
      symbol: 'UMEE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'umee',
            baseDenom: 'uumee',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-184',
            path: 'transfer/channel-184/uumee'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
      },
      images: [{
          imageSync: {
            chainName: 'umee',
            baseDenom: 'uumee'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg',
          theme: {
            primaryColorHex: '#22f2e9'
          }
        }]
    },
    {
      description: 'The native token of Gravity Bridge',
      denomUnits: [{
          denom: 'ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44',
          exponent: 0,
          aliases: ['ugraviton']
        }, {
          denom: 'graviton',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44',
      name: 'Gravity Bridge',
      display: 'graviton',
      symbol: 'GRAV',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'gravitybridge',
            baseDenom: 'ugraviton',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-144',
            path: 'transfer/channel-144/ugraviton'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg'
      },
      images: [{
          imageSync: {
            chainName: 'gravitybridge',
            baseDenom: 'ugraviton'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg',
          theme: {
            primaryColorHex: '#042ca4'
          }
        }]
    },
    {
      description: 'The native token of Decentr',
      denomUnits: [{
          denom: 'ibc/9BCB27203424535B6230D594553F1659C77EC173E36D9CF4759E7186EE747E84',
          exponent: 0,
          aliases: ['udec']
        }, {
          denom: 'dec',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/9BCB27203424535B6230D594553F1659C77EC173E36D9CF4759E7186EE747E84',
      name: 'Decentr',
      display: 'dec',
      symbol: 'DEC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'decentr',
            baseDenom: 'udec',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-181',
            path: 'transfer/channel-181/udec'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg'
      },
      images: [{
          imageSync: {
            chainName: 'decentr',
            baseDenom: 'udec'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg',
          theme: {
            primaryColorHex: '#4678e9'
          }
        }]
    },
    {
      description: 'The native token cw20 for Marble DAO on Juno Chain',
      denomUnits: [{
          denom: 'ibc/F6B691D5F7126579DDC87357B09D653B47FDCE0A3383FF33C8D8B544FE29A8A6',
          exponent: 0,
          aliases: ['cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl']
        }, {
          denom: 'marble',
          exponent: 3
        }],
      typeAsset: 'ics20',
      base: 'ibc/F6B691D5F7126579DDC87357B09D653B47FDCE0A3383FF33C8D8B544FE29A8A6',
      name: 'Marble',
      display: 'marble',
      symbol: 'MARBLE',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg',
          theme: {
            primaryColorHex: '#040404'
          }
        }]
    },
    {
      description: 'The native governance token of Carbon',
      denomUnits: [{
          denom: 'ibc/8FEFAE6AECF6E2A255585617F781F35A8D5709A545A804482A261C0C9548A9D3',
          exponent: 0,
          aliases: ['swth']
        }, {
          denom: 'dswth',
          exponent: 8,
          aliases: ['SWTH']
        }],
      typeAsset: 'ics20',
      base: 'ibc/8FEFAE6AECF6E2A255585617F781F35A8D5709A545A804482A261C0C9548A9D3',
      name: 'Carbon',
      display: 'dswth',
      symbol: 'SWTH',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'carbon',
            baseDenom: 'swth',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-188',
            path: 'transfer/channel-188/swth'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
      },
      images: [{
          imageSync: {
            chainName: 'carbon',
            baseDenom: 'swth'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg',
          theme: {
            primaryColorHex: '#a5edf2'
          }
        }]
    },
    {
      description: 'The native token of Cerberus Chain',
      denomUnits: [{
          denom: 'ibc/41999DF04D9441DAC0DF5D8291DF4333FBCBA810FFD63FDCE34FDF41EF37B6F7',
          exponent: 0,
          aliases: ['ucrbrus']
        }, {
          denom: 'crbrus',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/41999DF04D9441DAC0DF5D8291DF4333FBCBA810FFD63FDCE34FDF41EF37B6F7',
      name: 'Cerberus',
      display: 'crbrus',
      symbol: 'CRBRUS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cerberus',
            baseDenom: 'ucrbrus',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-212',
            path: 'transfer/channel-212/ucrbrus'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.svg'
      },
      images: [{
          imageSync: {
            chainName: 'cerberus',
            baseDenom: 'ucrbrus'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.svg',
          theme: {
            primaryColorHex: '#c6c6c9'
          }
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'The native staking and governance token of the Fetch Hub.',
      denomUnits: [{
          denom: 'ibc/5D1F516200EE8C6B2354102143B78A2DEDA25EDE771AC0F8DC3C1837C8FD4447',
          exponent: 0,
          aliases: ['afet']
        }, {
          denom: 'fet',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/5D1F516200EE8C6B2354102143B78A2DEDA25EDE771AC0F8DC3C1837C8FD4447',
      name: 'Fetch.ai',
      display: 'fet',
      symbol: 'FET',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'fetchhub',
            baseDenom: 'afet',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-229',
            path: 'transfer/channel-229/afet'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg'
      },
      images: [{
          imageSync: {
            chainName: 'fetchhub',
            baseDenom: 'afet'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg',
          theme: {
            primaryColorHex: '#1c2444'
          }
        }]
    },
    {
      description: 'The native token of Asset Mantle',
      denomUnits: [{
          denom: 'ibc/CBA34207E969623D95D057D9B11B0C8B32B89A71F170577D982FDDE623813FFC',
          exponent: 0,
          aliases: ['umntl']
        }, {
          denom: 'mntl',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/CBA34207E969623D95D057D9B11B0C8B32B89A71F170577D982FDDE623813FFC',
      name: 'AssetMantle',
      display: 'mntl',
      symbol: 'MNTL',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'assetmantle',
            baseDenom: 'umntl',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-232',
            path: 'transfer/channel-232/umntl'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.svg'
      },
      images: [{
          imageSync: {
            chainName: 'assetmantle',
            baseDenom: 'umntl'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.svg',
          theme: {
            primaryColorHex: '#edb548'
          }
        }]
    },
    {
      description: 'The native token cw20 for Neta on Juno Chain',
      denomUnits: [{
          denom: 'ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A',
          exponent: 0,
          aliases: ['cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr']
        }, {
          denom: 'neta',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A',
      name: 'Neta',
      display: 'neta',
      symbol: 'NETA',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.svg'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.svg',
          theme: {
            primaryColorHex: '#f87b7b'
          }
        }]
    },
    {
      description: 'The INJ token is the native governance token for the Injective chain.',
      denomUnits: [{
          denom: 'ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273',
      name: 'Injective',
      display: 'INJ',
      symbol: 'INJ',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'inj',
            channelId: 'channel-8'
          },
          chain: {
            channelId: 'channel-122',
            path: 'transfer/channel-122/inj'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
      },
      images: [{
          imageSync: {
            chainName: 'injective',
            baseDenom: 'inj'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg',
          theme: {
            primaryColorHex: '#04a2fc'
          }
        }]
    },
    {
      description: 'The KRW stablecoin of Terra Classic.',
      denomUnits: [
        {
          denom: 'ibc/204A582244FC241613DBB50B04D1D454116C58C4AF7866C186AA0D6EEAD42780',
          exponent: 0,
          aliases: ['microkrw', 'ukrw']
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
      typeAsset: 'ics20',
      base: 'ibc/204A582244FC241613DBB50B04D1D454116C58C4AF7866C186AA0D6EEAD42780',
      name: 'TerraClassicKRW',
      display: 'krt',
      symbol: 'KRTC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'terra',
            baseDenom: 'ukrw',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-72',
            path: 'transfer/channel-72/ukrw'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg'
      },
      images: [{
          imageSync: {
            chainName: 'terra',
            baseDenom: 'ukrw'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg',
          theme: {
            primaryColorHex: '#4b83e0'
          }
        }]
    },
    {
      description: 'TICK coin is the token for the Microtick Price Discovery & Oracle App',
      denomUnits: [{
          denom: 'ibc/655BCEF3CDEBE32863FF281DBBE3B06160339E9897DC9C9C9821932A5F8BA6F8',
          exponent: 0,
          aliases: ['utick']
        }, {
          denom: 'tick',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/655BCEF3CDEBE32863FF281DBBE3B06160339E9897DC9C9C9821932A5F8BA6F8',
      name: 'Microtick',
      display: 'tick',
      symbol: 'TICK',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'microtick',
            baseDenom: 'utick',
            channelId: 'channel-16'
          },
          chain: {
            channelId: 'channel-39',
            path: 'transfer/channel-39/utick'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg'
      },
      images: [{
          imageSync: {
            chainName: 'microtick',
            baseDenom: 'utick'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg',
          theme: {
            primaryColorHex: '#6bab14'
          }
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'Rowan Token (ROWAN) is the Sifchain Network\'s native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.',
      denomUnits: [{
          denom: 'ibc/8318FD63C42203D16DDCAF49FE10E8590669B3219A3E87676AC9DA50722687FB',
          exponent: 0,
          aliases: ['rowan']
        }, {
          denom: 'ROWAN',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/8318FD63C42203D16DDCAF49FE10E8590669B3219A3E87676AC9DA50722687FB',
      name: 'Sifchain',
      display: 'ROWAN',
      symbol: 'ROWAN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'sifchain',
            baseDenom: 'rowan',
            channelId: 'channel-17'
          },
          chain: {
            channelId: 'channel-47',
            path: 'transfer/channel-47/rowan'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg'
      },
      images: [{
          imageSync: {
            chainName: 'sifchain',
            baseDenom: 'rowan'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg',
          theme: {
            primaryColorHex: '#be9926'
          }
        }]
    },
    {
      description: 'The native token of Shentu',
      denomUnits: [{
          denom: 'ibc/7ED954CFFFC06EE8419387F3FC688837FF64EF264DE14219935F724EEEDBF8D3',
          exponent: 0,
          aliases: ['uctk']
        }, {
          denom: 'ctk',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/7ED954CFFFC06EE8419387F3FC688837FF64EF264DE14219935F724EEEDBF8D3',
      name: 'Shentu',
      display: 'ctk',
      symbol: 'CTK',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'shentu',
            baseDenom: 'uctk',
            channelId: 'channel-8'
          },
          chain: {
            channelId: 'channel-146',
            path: 'transfer/channel-146/uctk'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg'
      },
      images: [{
          imageSync: {
            chainName: 'shentu',
            baseDenom: 'uctk'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg',
          theme: {
            primaryColorHex: '#e4ac4c'
          }
        }]
    },
    {
      description: 'Hope Galaxy is an NFT collection based on its own native Token $HOPE, a cw20 token on Juno chain.',
      denomUnits: [{
          denom: 'ibc/C2A2E9CA95DDD4828B75124B5E27B8401C7D8493BC48353D418CBFC04565899B',
          exponent: 0,
          aliases: ['cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z']
        }, {
          denom: 'hope',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/C2A2E9CA95DDD4828B75124B5E27B8401C7D8493BC48353D418CBFC04565899B',
      name: 'Hope Galaxy',
      display: 'hope',
      symbol: 'HOPE',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg',
          theme: {
            primaryColorHex: '#e2877e'
          }
        }]
    },
    {
      description: 'Racoon aims to simplify accessibility to AI, NFTs and Gambling on the Cosmos Ecosystem',
      denomUnits: [{
          denom: 'ibc/6BDB4C8CCD45033F9604E4B93ED395008A753E01EECD6992E7D1EA23D9D3B788',
          exponent: 0,
          aliases: ['cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa']
        }, {
          denom: 'rac',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/6BDB4C8CCD45033F9604E4B93ED395008A753E01EECD6992E7D1EA23D9D3B788',
      name: 'Racoon (Juno)',
      display: 'rac',
      symbol: 'RAC.juno',
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chainName: 'migaloo',
            baseDenom: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac'
          },
          provider: 'Racoon'
        }, {
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg',
          theme: {
            primaryColorHex: '#070f0e'
          }
        }]
    },
    {
      description: 'Frax is a fractional-algorithmic stablecoin protocol. It aims to provide a highly scalable, decentralized, algorithmic money in place of fixed-supply assets like BTC. Additionally, FXS is the value accrual and governance token of the entire Frax ecosystem.',
      denomUnits: [{
          denom: 'ibc/0E43EDE2E2A3AFA36D0CD38BDDC0B49FECA64FA426A82E102F304E430ECF46EE',
          exponent: 0,
          aliases: ['frax-wei']
        }, {
          denom: 'frax',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/0E43EDE2E2A3AFA36D0CD38BDDC0B49FECA64FA426A82E102F304E430ECF46EE',
      name: 'Frax',
      display: 'frax',
      symbol: 'FRAX',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Frax Protocol'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x853d955acef822db058eb8505911ed77f175b99e'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'frax-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/frax-wei'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x853d955acef822db058eb8505911ed77f175b99e'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
        }]
    },
    {
      description: 'Gravity Bridge WBTC',
      denomUnits: [{
          denom: 'ibc/C9B0D48FD2C5B91135F118FF2484551888966590D7BDC20F6A87308DBA670796',
          exponent: 0,
          aliases: ['gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599']
        }, {
          denom: 'gwbtc',
          exponent: 8
        }],
      typeAsset: 'ics20',
      base: 'ibc/C9B0D48FD2C5B91135F118FF2484551888966590D7BDC20F6A87308DBA670796',
      name: 'Wrapped Bitcoin (Gravity Bridge)',
      display: 'gwbtc',
      symbol: 'WBTC.eth.grv',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'BitGo, Kyber, and Ren'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          provider: 'Gravity Bridge'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'gravitybridge',
            baseDenom: 'gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-144',
            path: 'transfer/channel-144/gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.grv.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.grv.svg'
        }, {
          imageSync: {
            chainName: 'gravitybridge',
            baseDenom: 'gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg',
          theme: {
            primaryColorHex: '#f39444'
          }
        }]
    },
    {
      description: 'Gravity Bridge WETH',
      denomUnits: [{
          denom: 'ibc/65381C5F3FD21442283D56925E62EA524DED8B6927F0FF94E21E0020954C40B5',
          exponent: 0,
          aliases: ['gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2']
        }, {
          denom: 'gweth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/65381C5F3FD21442283D56925E62EA524DED8B6927F0FF94E21E0020954C40B5',
      name: 'Ether (Gravity Bridge)',
      display: 'gweth',
      symbol: 'ETH.grv',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Ethereum'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          provider: 'Gravity Bridge'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'gravitybridge',
            baseDenom: 'gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-144',
            path: 'transfer/channel-144/gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/weth.grv.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/weth.grv.svg'
        }, {
          imageSync: {
            chainName: 'gravitybridge',
            baseDenom: 'gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }]
    },
    {
      description: 'Gravity Bridge USDC',
      denomUnits: [{
          denom: 'ibc/9F9B07EF9AD291167CF5700628145DE1DEB777C2CFC7907553B24446515F6D0E',
          exponent: 0,
          aliases: ['gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48']
        }, {
          denom: 'gusdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/9F9B07EF9AD291167CF5700628145DE1DEB777C2CFC7907553B24446515F6D0E',
      name: 'USDC (Gravity Bridge)',
      display: 'gusdc',
      symbol: 'USDC.eth.grv',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Gravity Bridge'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'gravitybridge',
            baseDenom: 'gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-144',
            path: 'transfer/channel-144/gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.grv.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.grv.svg'
        }, {
          imageSync: {
            chainName: 'gravitybridge',
            baseDenom: 'gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          theme: {
            circle: true,
            primaryColorHex: '#2775CA'
          }
        }]
    },
    {
      description: 'Gravity Bridge DAI',
      denomUnits: [{
          denom: 'ibc/F292A17CF920E3462C816CBE6B042E779F676CAB59096904C4C1C966413E3DF5',
          exponent: 0,
          aliases: ['gravity0x6B175474E89094C44Da98b954EedeAC495271d0F']
        }, {
          denom: 'gdai',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/F292A17CF920E3462C816CBE6B042E779F676CAB59096904C4C1C966413E3DF5',
      name: 'DAI Stablecoin (Gravity Bridge)',
      display: 'gdai',
      symbol: 'DAI.grv',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'MakerDAO'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x6b175474e89094c44da98b954eedeac495271d0f'
          },
          provider: 'Gravity Bridge'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'gravitybridge',
            baseDenom: 'gravity0x6B175474E89094C44Da98b954EedeAC495271d0F',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-144',
            path: 'transfer/channel-144/gravity0x6B175474E89094C44Da98b954EedeAC495271d0F'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dai.grv.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dai.grv.svg'
        }, {
          imageSync: {
            chainName: 'gravitybridge',
            baseDenom: 'gravity0x6B175474E89094C44Da98b954EedeAC495271d0F'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
        }]
    },
    {
      description: 'Gravity Bridge USDT',
      denomUnits: [{
          denom: 'ibc/71B441E27F1BBB44DD0891BCD370C2794D404D60A4FFE5AECCD9B1E28BC89805',
          exponent: 0,
          aliases: ['gravity0xdAC17F958D2ee523a2206206994597C13D831ec7']
        }, {
          denom: 'gusdt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/71B441E27F1BBB44DD0891BCD370C2794D404D60A4FFE5AECCD9B1E28BC89805',
      name: 'Tether USD (Gravity Bridge)',
      display: 'gusdt',
      symbol: 'USDT.eth.grv',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Tether'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Gravity Bridge'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'gravitybridge',
            baseDenom: 'gravity0xdAC17F958D2ee523a2206206994597C13D831ec7',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-144',
            path: 'transfer/channel-144/gravity0xdAC17F958D2ee523a2206206994597C13D831ec7'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.grv.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.grv.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.grv.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.grv.png',
          theme: {
            primaryColorHex: '#059394'
          }
        }, {
          imageSync: {
            chainName: 'gravitybridge',
            baseDenom: 'gravity0xdAC17F958D2ee523a2206206994597C13D831ec7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true,
            primaryColorHex: '#009393',
            backgroundColorHex: '#009393'
          }
        }]
    },
    {
      description: 'The native token of Marble DEX on Juno Chain',
      denomUnits: [{
          denom: 'ibc/DB9755CB6FE55192948AE074D18FA815E1429D3D374D5BDA8D89623C6CF235C3',
          exponent: 0,
          aliases: ['cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq']
        }, {
          denom: 'block',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/DB9755CB6FE55192948AE074D18FA815E1429D3D374D5BDA8D89623C6CF235C3',
      name: 'Block',
      display: 'block',
      symbol: 'BLOCK',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg',
          theme: {
            primaryColorHex: '#040404'
          }
        }]
    },
    {
      description: 'Hash is the staking token of the Provenance Blockchain',
      denomUnits: [{
          denom: 'ibc/CE5BFF1D9BADA03BB5CCA5F56939392A761B53A10FBD03B37506669C3218D3B2',
          exponent: 0,
          aliases: ['nhash']
        }, {
          denom: 'hash',
          exponent: 9
        }],
      typeAsset: 'ics20',
      base: 'ibc/CE5BFF1D9BADA03BB5CCA5F56939392A761B53A10FBD03B37506669C3218D3B2',
      name: 'Provenance',
      display: 'hash',
      symbol: 'HASH',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'provenance',
            baseDenom: 'nhash',
            channelId: 'channel-7'
          },
          chain: {
            channelId: 'channel-222',
            path: 'transfer/channel-222/nhash'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
      },
      images: [{
          imageSync: {
            chainName: 'provenance',
            baseDenom: 'nhash'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg',
          theme: {
            primaryColorHex: '#4c7cdc'
          }
        }]
    },
    {
      description: 'GLX is the staking token of the Galaxy Chain',
      denomUnits: [{
          denom: 'ibc/F49DE040EBA5AB2FAD5F660C2A1DDF98A68470FAE82229818BE775EBF3EE79F2',
          exponent: 0,
          aliases: ['uglx']
        }, {
          denom: 'glx',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/F49DE040EBA5AB2FAD5F660C2A1DDF98A68470FAE82229818BE775EBF3EE79F2',
      name: 'Galaxy',
      display: 'glx',
      symbol: 'GLX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'galaxy',
            baseDenom: 'uglx',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-236',
            path: 'transfer/channel-236/uglx'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg'
      },
      images: [{
          imageSync: {
            chainName: 'galaxy',
            baseDenom: 'uglx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg',
          theme: {
            primaryColorHex: '#5e3be6'
          }
        }]
    },
    {
      description: 'The DAO token to build consensus among Hong Kong People',
      denomUnits: [{
          denom: 'ibc/52E12CF5CA2BB903D84F5298B4BFD725D66CAB95E09AA4FC75B2904CA5485FEB',
          exponent: 0,
          aliases: ['dhk', 'cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49']
        }],
      typeAsset: 'ics20',
      base: 'ibc/52E12CF5CA2BB903D84F5298B4BFD725D66CAB95E09AA4FC75B2904CA5485FEB',
      name: 'DHK',
      display: 'dhk',
      symbol: 'DHK',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg',
          theme: {
            primaryColorHex: '#fae204'
          }
        }]
    },
    {
      description: 'Token governance for Junoswap',
      denomUnits: [{
          denom: 'ibc/00B6E60AD3D65CBEF5579AC8AF609527C0B57535B6E32D96C80A735344FD9DCC',
          exponent: 0,
          aliases: ['cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g']
        }, {
          denom: 'raw',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/00B6E60AD3D65CBEF5579AC8AF609527C0B57535B6E32D96C80A735344FD9DCC',
      name: 'JunoSwap',
      display: 'raw',
      symbol: 'RAW',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.svg'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.svg',
          theme: {
            primaryColorHex: '#f07c92'
          }
        }]
    },
    {
      description: 'MEME Token (MEME) is the native staking token of the MEME Chain',
      denomUnits: [{
          denom: 'ibc/67C89B8B0A70C08F093C909A4DD996DD10E0494C87E28FD9A551697BF173D4CA',
          exponent: 0,
          aliases: ['umeme']
        }, {
          denom: 'meme',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/67C89B8B0A70C08F093C909A4DD996DD10E0494C87E28FD9A551697BF173D4CA',
      name: 'MEME',
      display: 'meme',
      symbol: 'MEME',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'meme',
            baseDenom: 'umeme',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-238',
            path: 'transfer/channel-238/umeme'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg'
      },
      images: [{
          imageSync: {
            chainName: 'meme',
            baseDenom: 'umeme'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg',
          theme: {
            primaryColorHex: '#b7dcd8'
          }
        }]
    },
    {
      description: 'Profit sharing token for Another.Software validator. Hold and receive dividends from Another.Software validator commissions!',
      denomUnits: [{
          denom: 'ibc/AA1C80225BCA7B32ED1FC6ABF8B8E899BEB48ECDB4B417FD69873C6D715F97E7',
          exponent: 0,
          aliases: ['cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w']
        }, {
          denom: 'asvt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/AA1C80225BCA7B32ED1FC6ABF8B8E899BEB48ECDB4B417FD69873C6D715F97E7',
      name: 'Another.Software Validator Token',
      display: 'asvt',
      symbol: 'ASVT',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png',
          theme: {
            primaryColorHex: '#402e5d'
          }
        }]
    },
    {
      description: 'DAO dedicated to building tools on the Juno Network',
      denomUnits: [{
          denom: 'ibc/0CB9DB3441D0D50F35699DEE22B9C965487E83FB2D9F483D1CC5CA34E856C484',
          exponent: 0,
          aliases: ['cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3']
        }, {
          denom: 'joe',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/0CB9DB3441D0D50F35699DEE22B9C965487E83FB2D9F483D1CC5CA34E856C484',
      name: 'JoeDAO',
      display: 'joe',
      symbol: 'JOE',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/joe.png'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/joe.png',
          theme: {
            primaryColorHex: '#f3baaf'
          }
        }]
    },
    {
      description: 'The native staking token of Terra.',
      denomUnits: [{
          denom: 'ibc/785AFEC6B3741100D15E7AF01374E3C4C36F24888E96479B1C33F5C71F364EF9',
          exponent: 0,
          aliases: ['uluna']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/785AFEC6B3741100D15E7AF01374E3C4C36F24888E96479B1C33F5C71F364EF9',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'terra2',
            baseDenom: 'uluna',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-251',
            path: 'transfer/channel-251/uluna'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
      },
      images: [{
          imageSync: {
            chainName: 'terra2',
            baseDenom: 'uluna'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg',
          theme: {
            primaryColorHex: '#f4de6f'
          }
        }]
    },
    {
      description: 'Native token of Rizon Chain',
      denomUnits: [{
          denom: 'ibc/2716E3F2E146664BEFA9217F1A03BFCEDBCD5178B3C71CACB1A0D7584451D219',
          exponent: 0,
          aliases: ['uatolo']
        }, {
          denom: 'atolo',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/2716E3F2E146664BEFA9217F1A03BFCEDBCD5178B3C71CACB1A0D7584451D219',
      name: 'Rizon',
      display: 'atolo',
      symbol: 'ATOLO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'rizon',
            baseDenom: 'uatolo',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-221',
            path: 'transfer/channel-221/uatolo'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.svg'
      },
      images: [{
          imageSync: {
            chainName: 'rizon',
            baseDenom: 'uatolo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.svg',
          theme: {
            primaryColorHex: '#2b1c54'
          }
        }]
    },
    {
      description: 'Governance token of Kava Lend Protocol',
      denomUnits: [{
          denom: 'ibc/D6C28E07F7343360AC41E15DDD44D79701DDCA2E0C2C41279739C8D4AE5264BC',
          exponent: 0,
          aliases: ['hard']
        }, {
          denom: 'HARD',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/D6C28E07F7343360AC41E15DDD44D79701DDCA2E0C2C41279739C8D4AE5264BC',
      name: 'Kava Hard',
      display: 'HARD',
      symbol: 'HARD',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kava',
            baseDenom: 'hard',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-143',
            path: 'transfer/channel-143/hard'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
      },
      images: [{
          imageSync: {
            chainName: 'kava',
            baseDenom: 'hard'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg',
          theme: {
            primaryColorHex: '#7b34ac'
          }
        }]
    },
    {
      description: 'Governance token of Kava Swap Protocol',
      denomUnits: [{
          denom: 'ibc/70CF1A54E23EA4E480DEDA9E12082D3FD5684C3483CBDCE190C5C807227688C5',
          exponent: 0,
          aliases: ['swp']
        }, {
          denom: 'SWP',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/70CF1A54E23EA4E480DEDA9E12082D3FD5684C3483CBDCE190C5C807227688C5',
      name: 'Kava Swap',
      display: 'SWP',
      symbol: 'SWP',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kava',
            baseDenom: 'swp',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-143',
            path: 'transfer/channel-143/swp'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
      },
      images: [{
          imageSync: {
            chainName: 'kava',
            baseDenom: 'swp'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg',
          theme: {
            primaryColorHex: '#544cfc'
          }
        }]
    },
    {
      description: 'A blockchain-based middleware, acting as a bridge between cryptocurrency smart contracts, data feeds, APIs and traditional bank account payments.',
      denomUnits: [{
          denom: 'ibc/D3327A763C23F01EC43D1F0DB3CEFEC390C362569B6FD191F40A5192F8960049',
          exponent: 0,
          aliases: ['link-wei']
        }, {
          denom: 'link',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/D3327A763C23F01EC43D1F0DB3CEFEC390C362569B6FD191F40A5192F8960049',
      name: 'Chainlink (Axelar)',
      display: 'link',
      symbol: 'LINK.axl',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x514910771af9ca656af840dff83e8264ecf986ca'
          },
          provider: 'Axelar'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'link-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/link-wei'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/link.axl.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/link.axl.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/link.axl.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/link.axl.png'
        }, {
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'link-wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg',
          theme: {
            primaryColorHex: '#2c5cdc'
          }
        }]
    },
    {
      description: 'L1 coin is the GenesisL1 blockchain utility, governance and EVM token',
      denomUnits: [{
          denom: 'ibc/F16FDC11A7662B86BC0B9CE61871CBACF7C20606F95E86260FD38915184B75B4',
          exponent: 0,
          aliases: ['el1']
        }, {
          denom: 'l1',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/F16FDC11A7662B86BC0B9CE61871CBACF7C20606F95E86260FD38915184B75B4',
      name: 'GenesisL1',
      display: 'l1',
      symbol: 'L1',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'genesisl1',
            baseDenom: 'el1',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-253',
            path: 'transfer/channel-253/el1'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg'
      },
      images: [{
          imageSync: {
            chainName: 'genesisl1',
            baseDenom: 'el1'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg',
          theme: {
            primaryColorHex: '#040404'
          }
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'Aave is an Open Source and Non-Custodial protocol to earn interest on deposits & borrow assets. It also features access to highly innovative flash loans, which let developers borrow instantly and easily; no collateral needed. With 16 different assets, 5 of which are stablecoins.',
      denomUnits: [{
          denom: 'ibc/384E5DD50BDE042E1AAF51F312B55F08F95BC985C503880189258B4D9374CBBE',
          exponent: 0,
          aliases: ['aave-wei']
        }, {
          denom: 'aave',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/384E5DD50BDE042E1AAF51F312B55F08F95BC985C503880189258B4D9374CBBE',
      name: 'Aave',
      display: 'aave',
      symbol: 'AAVE',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9'
          },
          provider: 'Axelar'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'aave-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/aave-wei'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg'
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'ApeCoin found new expression in web3 through art, gaming, entertainment, and events. APE is a token made to support what’s next, controlled, and built on by the community. It will serve as a decentralized protocol layer for community-led initiatives that drive culture forward into the metaverse.',
      denomUnits: [{
          denom: 'ibc/F83CC6471DA4D4B508F437244F10B9E4C68975344E551A2DEB6B8617AB08F0D4',
          exponent: 0,
          aliases: ['ape-wei']
        }, {
          denom: 'ape',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/F83CC6471DA4D4B508F437244F10B9E4C68975344E551A2DEB6B8617AB08F0D4',
      name: 'ApeCoin',
      display: 'ape',
      symbol: 'APE',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x4d224452801aced8b2f0aebe155379bb5d594381'
          },
          provider: 'Axelar'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'ape-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/ape-wei'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x4d224452801aced8b2f0aebe155379bb5d594381'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg'
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'Maker is a Decentralized Autonomous Organization that creates and insures the dai stablecoin on the Ethereum blockchain',
      denomUnits: [{
          denom: 'ibc/D27DDDF34BB47E5D5A570742CC667DE53277867116CCCA341F27785E899A70F3',
          exponent: 0,
          aliases: ['mkr-wei']
        }, {
          denom: 'mkr',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/D27DDDF34BB47E5D5A570742CC667DE53277867116CCCA341F27785E899A70F3',
      name: 'Maker',
      display: 'mkr',
      symbol: 'MKR',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2'
          },
          provider: 'Axelar'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'mkr-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/mkr-wei'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg'
        }]
    },
    {
      description: 'RAI is a non-pegged, ETH-backed stable asset. It is useful as more \'stable\' collateral for other DeFi protocols (compared to ETH or BTC) or as a stable asset with an embedded interest rate.',
      denomUnits: [{
          denom: 'ibc/BD796662F8825327D41C96355DF62045A5BA225BAE31C0A86289B9D88ED3F44E',
          exponent: 0,
          aliases: ['rai-wei']
        }, {
          denom: 'rai',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/BD796662F8825327D41C96355DF62045A5BA225BAE31C0A86289B9D88ED3F44E',
      name: 'Rai Reflex Index',
      display: 'rai',
      symbol: 'RAI',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'RAI Finance'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x03ab458634910aad20ef5f1c8ee96f1d6ac54919'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'rai-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/rai-wei'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x03ab458634910aad20ef5f1c8ee96f1d6ac54919'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg'
        }]
    },
    {
      description: 'SHIBA INU is a 100% decentralized community experiment with it claims that 1/2 the tokens have been sent to Vitalik and the other half were locked to a Uniswap pool and the keys burned.',
      denomUnits: [{
          denom: 'ibc/19305E20681911F14D1FB275E538CDE524C3BF88CF9AE5D5F78F4D4DA05E85B2',
          exponent: 0,
          aliases: ['shib-wei']
        }, {
          denom: 'shib',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/19305E20681911F14D1FB275E538CDE524C3BF88CF9AE5D5F78F4D4DA05E85B2',
      name: 'Shiba Inu (Axelar)',
      display: 'shib',
      symbol: 'SHIB.axl',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce'
          },
          provider: 'Axelar'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'shib-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/shib-wei'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/shib.axl.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/shib.axl.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/shib.axl.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/shib.axl.png'
        }, {
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'shib-wei'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg',
          theme: {
            primaryColorHex: '#FFA409',
            backgroundColorHex: '#00000000'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'The native staking and governance token of the Kujira chain.',
      denomUnits: [{
          denom: 'ibc/BB6BCDB515050BAE97516111873CCD7BCF1FD0CCB723CC12F3C4F704D6C646CE',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/BB6BCDB515050BAE97516111873CCD7BCF1FD0CCB723CC12F3C4F704D6C646CE',
      name: 'Kujira',
      display: 'kuji',
      symbol: 'KUJI',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kujira',
            baseDenom: 'ukuji',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-259',
            path: 'transfer/channel-259/ukuji'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
      },
      images: [{
          imageSync: {
            chainName: 'kujira',
            baseDenom: 'ukuji'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg',
          theme: {
            primaryColorHex: '#e33b34'
          }
        }]
    },
    {
      description: 'The native token of Tgrade',
      denomUnits: [{
          denom: 'ibc/1E09CB0F506ACF12FDE4683FB6B34DA62FB4BE122641E0D93AAF98A87675676C',
          exponent: 0,
          aliases: ['utgd']
        }, {
          denom: 'tgd',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/1E09CB0F506ACF12FDE4683FB6B34DA62FB4BE122641E0D93AAF98A87675676C',
      name: 'Tgrade',
      display: 'tgd',
      symbol: 'TGD',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'tgrade',
            baseDenom: 'utgd',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-263',
            path: 'transfer/channel-263/utgd'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg'
      },
      images: [{
          imageSync: {
            chainName: 'tgrade',
            baseDenom: 'utgd'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg',
          theme: {
            primaryColorHex: '#a7248a'
          }
        }]
    },
    {
      description: 'Echelon - a scalable EVM on Cosmos, built on Proof-of-Stake with fast-finality that prioritizes interoperability and novel economics',
      denomUnits: [{
          denom: 'ibc/47EE224A9B33CF0ABEAC82106E52F0F6E8D8CEC5BA80B9D9A6F55172CBB0177D',
          exponent: 0,
          aliases: ['aechelon']
        }, {
          denom: 'echelon',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/47EE224A9B33CF0ABEAC82106E52F0F6E8D8CEC5BA80B9D9A6F55172CBB0177D',
      name: 'Echelon',
      display: 'echelon',
      symbol: 'ECH',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'echelon',
            baseDenom: 'aechelon',
            channelId: 'channel-11'
          },
          chain: {
            channelId: 'channel-403',
            path: 'transfer/channel-403/aechelon'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/ech.svg'
      },
      images: [{
          imageSync: {
            chainName: 'echelon',
            baseDenom: 'aechelon'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/ech.svg'
        }]
    },
    {
      description: 'Staking and governance token for ODIN Protocol',
      denomUnits: [{
          denom: 'ibc/C360EF34A86D334F625E4CBB7DA3223AEA97174B61F35BB3758081A8160F7D9B',
          exponent: 0,
          aliases: ['loki']
        }, {
          denom: 'odin',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/C360EF34A86D334F625E4CBB7DA3223AEA97174B61F35BB3758081A8160F7D9B',
      name: 'Odin Protocol',
      display: 'odin',
      symbol: 'ODIN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'odin',
            baseDenom: 'loki',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-258',
            path: 'transfer/channel-258/loki'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
      },
      images: [{
          imageSync: {
            chainName: 'odin',
            baseDenom: 'loki'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
        }]
    },
    {
      description: 'GEO token for ODIN Protocol',
      denomUnits: [{
          denom: 'ibc/9B6FBABA36BB4A3BF127AE5E96B572A5197FD9F3111D895D8919B07BC290764A',
          exponent: 0,
          aliases: ['mGeo']
        }, {
          denom: 'geo',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/9B6FBABA36BB4A3BF127AE5E96B572A5197FD9F3111D895D8919B07BC290764A',
      name: 'GEO',
      display: 'geo',
      symbol: 'GEO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'odin',
            baseDenom: 'mGeo',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-258',
            path: 'transfer/channel-258/mGeo'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg'
      },
      images: [{
          imageSync: {
            chainName: 'odin',
            baseDenom: 'mGeo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg',
          theme: {
            primaryColorHex: '#c3ebf3'
          }
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'O9W token for ODIN Protocol',
      denomUnits: [{
          denom: 'ibc/0CD46223FEABD2AEAAAF1F057D01E63BCA79B7D4BD6B68F1EB973A987344695D',
          exponent: 0,
          aliases: ['mO9W']
        }, {
          denom: 'O9W',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/0CD46223FEABD2AEAAAF1F057D01E63BCA79B7D4BD6B68F1EB973A987344695D',
      name: 'O9W',
      display: 'O9W',
      symbol: 'O9W',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'odin',
            baseDenom: 'mO9W',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-258',
            path: 'transfer/channel-258/mO9W'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg'
      },
      images: [{
          imageSync: {
            chainName: 'odin',
            baseDenom: 'mO9W'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg',
          theme: {
            primaryColorHex: '#040404'
          }
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'ELEVENPARIS loyalty token on KiChain',
      denomUnits: [{
          denom: 'ibc/AD185F62399F770CCCE8A36A180A77879FF6C26A0398BD3D2A74E087B0BFA121',
          exponent: 0,
          aliases: ['cw20:ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy']
        }, {
          denom: 'lvn',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/AD185F62399F770CCCE8A36A180A77879FF6C26A0398BD3D2A74E087B0BFA121',
      name: 'LVN',
      display: 'lvn',
      symbol: 'LVN.ki',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'kichain',
            baseDenom: 'cw20:ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy',
            port: 'wasm.ki1hzz0s0ucrhdp6tue2lxk3c03nj6f60qy463we7lgx0wudd72ctmsd9kgha',
            channelId: 'channel-18'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-261',
            path: 'transfer/channel-261/cw20:ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/lvn.png'
      },
      images: [{
          imageSync: {
            chainName: 'kichain',
            baseDenom: 'cw20:ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/lvn.png',
          theme: {
            primaryColorHex: '#683480'
          }
        }]
    },
    {
      description: 'Glimmer (GLMR) is the utility token of the Moonbeam Network, Moonbeam’s primary deployment on the Polkadot network that serves as a developer-friendly parachain.',
      denomUnits: [{
          denom: 'ibc/1E26DB0E5122AED464D98462BD384FCCB595732A66B3970AE6CE0B58BAE0FC49',
          exponent: 0,
          aliases: ['wglmr-wei']
        }, {
          denom: 'wglmr',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/1E26DB0E5122AED464D98462BD384FCCB595732A66B3970AE6CE0B58BAE0FC49',
      name: 'Moonbeam',
      display: 'wglmr',
      symbol: 'GLMR',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chainName: 'moonbeam',
            baseDenom: 'Wei'
          },
          provider: 'Moonbeam'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'moonbeam',
            baseDenom: '0xacc15dc74880c9944775448304b263d191c6077f'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'wglmr-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/wglmr-wei'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
      },
      images: [{
          imageSync: {
            chainName: 'moonbeam',
            baseDenom: 'Wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg',
          theme: {
            primaryColorHex: '#e4147c'
          }
        }]
    },
    {
      description: 'DeFi gaming platform built on Juno',
      denomUnits: [{
          denom: 'ibc/52C57FCA7D6854AA178E7A183DDBE4EF322B904B1D719FC485F6FFBC1F72A19E',
          exponent: 0,
          aliases: ['cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se']
        }, {
          denom: 'glto',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/52C57FCA7D6854AA178E7A183DDBE4EF322B904B1D719FC485F6FFBC1F72A19E',
      name: 'Gelotto (Juno)',
      display: 'glto',
      symbol: 'GLTO.juno',
      traces: [{
          type: 'legacy-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2'
          },
          provider: 'Gelotto'
        }, {
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.svg'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.svg',
          theme: {
            primaryColorHex: '#501cad'
          }
        }]
    },
    {
      description: 'Gelotto Year 1 Grand Prize Token',
      denomUnits: [{
          denom: 'ibc/7C781B4C2082CD62129A972D47486D78EC17155C299270E3C89348EA026BEAF8',
          exponent: 0,
          aliases: ['cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh']
        }, {
          denom: 'gkey',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/7C781B4C2082CD62129A972D47486D78EC17155C299270E3C89348EA026BEAF8',
      name: 'GKey',
      display: 'gkey',
      symbol: 'GKEY',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.svg'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.svg',
          theme: {
            primaryColorHex: '#521caf'
          }
        }]
    },
    {
      description: 'The native token of Crescent',
      denomUnits: [{
          denom: 'ibc/5A7C219BA5F7582B99629BA3B2A01A61BFDA0F6FD1FE95B5366F7334C4BC0580',
          exponent: 0,
          aliases: ['ucre']
        }, {
          denom: 'cre',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/5A7C219BA5F7582B99629BA3B2A01A61BFDA0F6FD1FE95B5366F7334C4BC0580',
      name: 'Crescent',
      display: 'cre',
      symbol: 'CRE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'crescent',
            baseDenom: 'ucre',
            channelId: 'channel-9'
          },
          chain: {
            channelId: 'channel-297',
            path: 'transfer/channel-297/ucre'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
      },
      images: [{
          imageSync: {
            chainName: 'crescent',
            baseDenom: 'ucre'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg',
          theme: {
            primaryColorHex: '#3c2832'
          }
        }]
    },
    {
      description: 'The native token of LumenX Network',
      denomUnits: [{
          denom: 'ibc/FFA652599C77E853F017193E36B5AB2D4D9AFC4B54721A74904F80C9236BF3B7',
          exponent: 0,
          aliases: ['ulumen']
        }, {
          denom: 'lumen',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/FFA652599C77E853F017193E36B5AB2D4D9AFC4B54721A74904F80C9236BF3B7',
      name: 'LumenX',
      display: 'lumen',
      symbol: 'LUMEN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'lumenx',
            baseDenom: 'ulumen',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-286',
            path: 'transfer/channel-286/ulumen'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg'
      },
      images: [{
          imageSync: {
            chainName: 'lumenx',
            baseDenom: 'ulumen'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg',
          theme: {
            primaryColorHex: '#cb8b40'
          }
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'The native token of Oraichain',
      denomUnits: [{
          denom: 'ibc/161D7D62BAB3B9C39003334F1671208F43C06B643CC9EDBBE82B64793C857F1D',
          exponent: 0,
          aliases: ['orai']
        }, {
          denom: 'ORAI',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/161D7D62BAB3B9C39003334F1671208F43C06B643CC9EDBBE82B64793C857F1D',
      name: 'Oraichain',
      display: 'ORAI',
      symbol: 'ORAI',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'oraichain',
            baseDenom: 'orai',
            channelId: 'channel-13'
          },
          chain: {
            channelId: 'channel-216',
            path: 'transfer/channel-216/orai'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-token.svg'
      },
      images: [
        {
          imageSync: {
            chainName: 'oraichain',
            baseDenom: 'orai'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-token.svg',
          theme: {
            circle: true,
            primaryColorHex: '#000000',
            backgroundColorHex: '#FFFFFF'
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.svg',
          theme: {
            circle: false,
            darkMode: true,
            primaryColorHex: '#FFFFFF'
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.svg',
          theme: {
            circle: false,
            darkMode: false,
            primaryColorHex: '#000000'
          }
        }
      ]
    },
    {
      description: 'The native token of the Cudos blockchain',
      denomUnits: [{
          denom: 'ibc/E09ED39F390EC51FA9F3F69BEA08B5BBE6A48B3057B2B1C3467FAAE9E58B021B',
          exponent: 0,
          aliases: ['attocudos', 'acudos']
        }, {
          denom: 'cudos',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/E09ED39F390EC51FA9F3F69BEA08B5BBE6A48B3057B2B1C3467FAAE9E58B021B',
      name: 'Cudos',
      display: 'cudos',
      symbol: 'CUDOS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cudos',
            baseDenom: 'acudos',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-298',
            path: 'transfer/channel-298/acudos'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.svg'
      },
      images: [{
          imageSync: {
            chainName: 'cudos',
            baseDenom: 'acudos'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.svg',
          theme: {
            primaryColorHex: '#5d95ec'
          }
        }]
    },
    {
      description: 'The native stablecoin of Kava',
      denomUnits: [{
          denom: 'ibc/C78F65E1648A3DFE0BAEB6C4CDA69CC2A75437F1793C0E6386DFDA26393790AE',
          exponent: 0,
          aliases: ['usdx']
        }, {
          denom: 'USDX',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/C78F65E1648A3DFE0BAEB6C4CDA69CC2A75437F1793C0E6386DFDA26393790AE',
      name: 'Kava USDX',
      display: 'USDX',
      symbol: 'USDX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kava',
            baseDenom: 'usdx',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-143',
            path: 'transfer/channel-143/usdx'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
      },
      images: [{
          imageSync: {
            chainName: 'kava',
            baseDenom: 'usdx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg',
          theme: {
            primaryColorHex: '#04d4a3'
          }
        }]
    },
    {
      description: 'BLD is the token used to secure the Agoric chain through staking and to backstop Inter Protocol.',
      denomUnits: [{
          denom: 'ibc/2DA9C149E9AD2BD27FEFA635458FB37093C256C1A940392634A16BEA45262604',
          exponent: 0,
          aliases: ['ubld']
        }, {
          denom: 'bld',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/2DA9C149E9AD2BD27FEFA635458FB37093C256C1A940392634A16BEA45262604',
      name: 'Agoric',
      display: 'bld',
      symbol: 'BLD',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'agoric',
            baseDenom: 'ubld',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-320',
            path: 'transfer/channel-320/ubld'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
      },
      images: [{
          imageSync: {
            chainName: 'agoric',
            baseDenom: 'ubld'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg',
          theme: {
            primaryColorHex: '#c42b44'
          }
        }]
    },
    {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denomUnits: [{
          denom: 'ibc/92BE0717F4678905E53F4E45B2DED18BC0CB97BF1F8B6A25AFEDF3D5A879B4D5',
          exponent: 0,
          aliases: ['uist']
        }, {
          denom: 'ist',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/92BE0717F4678905E53F4E45B2DED18BC0CB97BF1F8B6A25AFEDF3D5A879B4D5',
      name: 'Inter Stable Token',
      display: 'ist',
      symbol: 'IST',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'agoric',
            baseDenom: 'uist',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-320',
            path: 'transfer/channel-320/uist'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
      },
      images: [{
          imageSync: {
            chainName: 'agoric',
            baseDenom: 'uist'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg',
          theme: {
            primaryColorHex: '#d485e2'
          }
        }]
    },
    {
      description: 'Staking derivative seJUNO for staked JUNO',
      denomUnits: [{
          denom: 'ibc/C6B6BFCB6EE49A7CAB1A7E7B021DE35B99D525AC660844952F0F6C78DCB2A57B',
          exponent: 0,
          aliases: ['cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv']
        }, {
          denom: 'sejuno',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/C6B6BFCB6EE49A7CAB1A7E7B021DE35B99D525AC660844952F0F6C78DCB2A57B',
      name: 'StakeEasy seJUNO',
      display: 'sejuno',
      symbol: 'SEJUNO',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.svg'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.svg',
          theme: {
            primaryColorHex: '#26363f'
          }
        }]
    },
    {
      description: 'Staking derivative bJUNO for staked JUNO',
      denomUnits: [{
          denom: 'ibc/C2DF5C3949CA835B221C575625991F09BAB4E48FB9C11A4EE357194F736111E3',
          exponent: 0,
          aliases: ['cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3']
        }, {
          denom: 'bjuno',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/C2DF5C3949CA835B221C575625991F09BAB4E48FB9C11A4EE357194F736111E3',
      name: 'StakeEasy bJUNO',
      display: 'bjuno',
      symbol: 'BJUNO',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.svg'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.svg',
          theme: {
            primaryColorHex: '#254454'
          }
        }]
    },
    {
      description: 'The native token of Stride',
      denomUnits: [{
          denom: 'ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4',
          exponent: 0,
          aliases: ['ustrd']
        }, {
          denom: 'strd',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4',
      name: 'Stride',
      display: 'strd',
      symbol: 'STRD',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'ustrd',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-326',
            path: 'transfer/channel-326/ustrd'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stride',
            baseDenom: 'ustrd'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg',
          theme: {
            primaryColorHex: '#e4047c'
          }
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901',
          exponent: 0,
          aliases: ['stuatom']
        }, {
          denom: 'statom',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901',
      name: 'Stride Staked ATOM',
      display: 'statom',
      symbol: 'stATOM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stuatom',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-326',
            path: 'transfer/channel-326/stuatom'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stride',
            baseDenom: 'stuatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/5DD1F95ED336014D00CE2520977EC71566D282F9749170ADC83A392E0EA7426A',
          exponent: 0,
          aliases: ['stustars']
        }, {
          denom: 'ststars',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/5DD1F95ED336014D00CE2520977EC71566D282F9749170ADC83A392E0EA7426A',
      name: 'Stride Staked STARS',
      display: 'ststars',
      symbol: 'stSTARS',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'stargaze',
            baseDenom: 'ustars'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stustars',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-326',
            path: 'transfer/channel-326/stustars'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stride',
            baseDenom: 'stustars'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }]
    },
    {
      description: 'Solarbank DAO Governance Token for speeding up the shift to renewable and green energy',
      denomUnits: [{
          denom: 'ibc/C3FC4DED273E7D1DD2E7BAA3317EC9A53CD3252B577AA33DC00D9DF2BDF3ED5C',
          exponent: 0,
          aliases: ['cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse']
        }, {
          denom: 'solar',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/C3FC4DED273E7D1DD2E7BAA3317EC9A53CD3252B577AA33DC00D9DF2BDF3ED5C',
      name: 'Solarbank DAO',
      display: 'solar',
      symbol: 'SOLAR',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.svg'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.svg',
          theme: {
            primaryColorHex: '#1c1c1b'
          }
        }]
    },
    {
      description: 'StakeEasy governance token',
      denomUnits: [{
          denom: 'ibc/18A676A074F73B9B42DA4F9DFC8E5AEF334C9A6636DDEC8D34682F52F1DECDF6',
          exponent: 0,
          aliases: ['cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf']
        }, {
          denom: 'seasy',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/18A676A074F73B9B42DA4F9DFC8E5AEF334C9A6636DDEC8D34682F52F1DECDF6',
      name: 'StakeEasy SEASY',
      display: 'seasy',
      symbol: 'SEASY',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.svg'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.svg',
          theme: {
            primaryColorHex: '#2d2c2d'
          }
        }]
    },
    {
      description: 'The native token of Axelar',
      denomUnits: [{
          denom: 'ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'uaxl',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/uaxl'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      },
      images: [{
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'uaxl'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg',
          theme: {
            primaryColorHex: '#040404'
          }
        }]
    },
    {
      description: 'REBUS, the native coin of the Rebus chain.',
      denomUnits: [{
          denom: 'ibc/A1AC7F9EE2F643A68E3A35BCEB22040120BEA4059773BB56985C76BDFEBC71D9',
          exponent: 0,
          aliases: ['arebus']
        }, {
          denom: 'rebus',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/A1AC7F9EE2F643A68E3A35BCEB22040120BEA4059773BB56985C76BDFEBC71D9',
      name: 'Rebus',
      display: 'rebus',
      symbol: 'REBUS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'rebus',
            baseDenom: 'arebus',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-355',
            path: 'transfer/channel-355/arebus'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.svg'
      },
      images: [{
          imageSync: {
            chainName: 'rebus',
            baseDenom: 'arebus'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.svg',
          theme: {
            primaryColorHex: '#e75486'
          }
        }]
    },
    {
      description: 'The native token of Teritori',
      denomUnits: [{
          denom: 'ibc/EB7FB9C8B425F289B63703413327C2051030E848CE4EAAEA2E51199D6D39D3EC',
          exponent: 0,
          aliases: ['utori']
        }, {
          denom: 'tori',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/EB7FB9C8B425F289B63703413327C2051030E848CE4EAAEA2E51199D6D39D3EC',
      name: 'Teritori',
      display: 'tori',
      symbol: 'TORI',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'teritori',
            baseDenom: 'utori',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-362',
            path: 'transfer/channel-362/utori'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg'
      },
      images: [{
          imageSync: {
            chainName: 'teritori',
            baseDenom: 'utori'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg',
          theme: {
            primaryColorHex: '#040404'
          }
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/84502A75BCA4A5F68D464C00B3F610CE2585847D59B52E5FFB7C3C9D2DDCD3FE',
          exponent: 0,
          aliases: ['stujuno']
        }, {
          denom: 'stjuno',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/84502A75BCA4A5F68D464C00B3F610CE2585847D59B52E5FFB7C3C9D2DDCD3FE',
      name: 'Stride Staked JUNO',
      display: 'stjuno',
      symbol: 'stJUNO',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'ujuno'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stujuno',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-326',
            path: 'transfer/channel-326/stujuno'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stride',
            baseDenom: 'stujuno'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC',
          exponent: 0,
          aliases: ['stuosmo']
        }, {
          denom: 'stosmo',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC',
      name: 'Stride Staked OSMO',
      display: 'stosmo',
      symbol: 'stOSMO',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'uosmo'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stuosmo',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-326',
            path: 'transfer/channel-326/stuosmo'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stride',
            baseDenom: 'stuosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }]
    },
    {
      description: 'The native token cw20 for MuseDAO on Juno Chain',
      denomUnits: [{
          denom: 'ibc/6B982170CE024689E8DD0E7555B129B488005130D4EDA426733D552D10B36D8F',
          exponent: 0,
          aliases: ['cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3']
        }, {
          denom: 'muse',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/6B982170CE024689E8DD0E7555B129B488005130D4EDA426733D552D10B36D8F',
      name: 'MuseDAO',
      display: 'muse',
      symbol: 'MUSE',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/muse.png'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/muse.png',
          theme: {
            primaryColorHex: '#32255f'
          }
        }]
    },
    {
      description: 'The native token of Lambda',
      denomUnits: [{
          denom: 'ibc/80825E8F04B12D914ABEADB1F4D39C04755B12C8402F6876EE3168450C0A90BB',
          exponent: 0,
          aliases: ['ulamb']
        }, {
          denom: 'lamb',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/80825E8F04B12D914ABEADB1F4D39C04755B12C8402F6876EE3168450C0A90BB',
      name: 'Lambda',
      display: 'lamb',
      symbol: 'LAMB',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'lambda',
            baseDenom: 'ulamb',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-378',
            path: 'transfer/channel-378/ulamb'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.svg'
      },
      images: [{
          imageSync: {
            chainName: 'lambda',
            baseDenom: 'ulamb'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.svg',
          theme: {
            primaryColorHex: '#e41c54'
          }
        }]
    },
    {
      description: 'The native over-collateralized stablecoin from the Kujira chain.',
      denomUnits: [{
          denom: 'ibc/44492EAB24B72E3FB59B9FA619A22337FB74F95D8808FE6BC78CC0E6C18DC2EC',
          exponent: 0,
          aliases: ['factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk']
        }, {
          denom: 'usk',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/44492EAB24B72E3FB59B9FA619A22337FB74F95D8808FE6BC78CC0E6C18DC2EC',
      name: 'USK',
      display: 'usk',
      symbol: 'USK',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kujira',
            baseDenom: 'factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-259',
            path: 'transfer/channel-259/factory:kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7:uusk'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.svg'
      },
      images: [{
          imageSync: {
            chainName: 'kujira',
            baseDenom: 'factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.svg',
          theme: {
            primaryColorHex: '#2e363f'
          }
        }]
    },
    {
      description: 'Staking and governance coin for the Unification Blockchain',
      denomUnits: [{
          denom: 'ibc/608EF5C0CE64FEA097500DB39657BDD36CA708CC5DCC2E250A024B6981DD36BC',
          exponent: 0,
          aliases: ['nund']
        }, {
          denom: 'FUND',
          exponent: 9
        }],
      typeAsset: 'ics20',
      base: 'ibc/608EF5C0CE64FEA097500DB39657BDD36CA708CC5DCC2E250A024B6981DD36BC',
      name: 'Unification',
      display: 'FUND',
      symbol: 'FUND',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'unification',
            baseDenom: 'nund',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-382',
            path: 'transfer/channel-382/nund'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png'
      },
      images: [{
          imageSync: {
            chainName: 'unification',
            baseDenom: 'nund'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png',
          theme: {
            primaryColorHex: '#2279c0'
          }
        }]
    },
    {
      description: 'The native staking and governance token of Jackal.',
      denomUnits: [{
          denom: 'ibc/8E697BDABE97ACE8773C6DF7402B2D1D5104DD1EEABE12608E3469B7F64C15BA',
          exponent: 0,
          aliases: ['ujkl']
        }, {
          denom: 'jkl',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/8E697BDABE97ACE8773C6DF7402B2D1D5104DD1EEABE12608E3469B7F64C15BA',
      name: 'Jackal',
      display: 'jkl',
      symbol: 'JKL',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'jackal',
            baseDenom: 'ujkl',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-412',
            path: 'transfer/channel-412/ujkl'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg'
      },
      images: [{
          imageSync: {
            chainName: 'jackal',
            baseDenom: 'ujkl'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg',
          theme: {
            primaryColorHex: '#dbdbcb'
          }
        }]
    },
    {
      description: 'The native token cw20 for Alter on Secret Network',
      denomUnits: [{
          denom: 'ibc/A6383B6CF5EA23E067666C06BC34E2A96869927BD9744DC0C1643E589C710AA3',
          exponent: 0,
          aliases: ['cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej']
        }, {
          denom: 'alter',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/A6383B6CF5EA23E067666C06BC34E2A96869927BD9744DC0C1643E589C710AA3',
      name: 'Alter',
      display: 'alter',
      symbol: 'ALTER',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'secretnetwork',
            baseDenom: 'cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channelId: 'channel-44'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-476',
            path: 'transfer/channel-476/cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg'
      },
      images: [{
          imageSync: {
            chainName: 'secretnetwork',
            baseDenom: 'cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg',
          theme: {
            primaryColorHex: '#694c90'
          }
        }]
    },
    {
      description: 'The native token cw20 for Button on Secret Network',
      denomUnits: [{
          denom: 'ibc/1FBA9E763B8679BEF7BAAAF2D16BCA78C3B297D226C3F31312C769D7B8F992D8',
          exponent: 0,
          aliases: ['cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt']
        }, {
          denom: 'butt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/1FBA9E763B8679BEF7BAAAF2D16BCA78C3B297D226C3F31312C769D7B8F992D8',
      name: 'Button',
      display: 'butt',
      symbol: 'BUTT',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'secretnetwork',
            baseDenom: 'cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channelId: 'channel-44'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-476',
            path: 'transfer/channel-476/cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg'
      },
      images: [{
          imageSync: {
            chainName: 'secretnetwork',
            baseDenom: 'cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg',
          theme: {
            primaryColorHex: '#7b04eb'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denomUnits: [{
          denom: 'ibc/71055835C7639739EAE03AACD1324FE162DBA41D09F197CB72D966D014225B1C',
          exponent: 0,
          aliases: ['cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      typeAsset: 'ics20',
      base: 'ibc/71055835C7639739EAE03AACD1324FE162DBA41D09F197CB72D966D014225B1C',
      name: 'Shade (old)',
      display: 'shd',
      symbol: 'SHD(old)',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'secretnetwork',
            baseDenom: 'cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channelId: 'channel-44'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-476',
            path: 'transfer/channel-476/cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
      },
      images: [{
          imageSync: {
            chainName: 'secretnetwork',
            baseDenom: 'cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'The native token cw20 for SIENNA on Secret Network',
      denomUnits: [{
          denom: 'ibc/9A8A93D04917A149C8AC7C16D3DA8F470D59E8D867499C4DA97450E1D7363213',
          exponent: 0,
          aliases: ['cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4']
        }, {
          denom: 'sienna',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/9A8A93D04917A149C8AC7C16D3DA8F470D59E8D867499C4DA97450E1D7363213',
      name: 'SIENNA',
      display: 'sienna',
      symbol: 'SIENNA',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'secretnetwork',
            baseDenom: 'cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channelId: 'channel-44'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-476',
            path: 'transfer/channel-476/cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
      },
      images: [{
          imageSync: {
            chainName: 'secretnetwork',
            baseDenom: 'cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg',
          theme: {
            primaryColorHex: '#2c2c2c'
          }
        }]
    },
    {
      description: 'The native token cw20 for SCRT Staking Derivatives on Secret Network',
      denomUnits: [{
          denom: 'ibc/D0E5BF2940FB58D9B283A339032DE88111407AAD7D94A7F1F3EB78874F8616D4',
          exponent: 0,
          aliases: ['cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4']
        }, {
          denom: 'stkd-scrt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/D0E5BF2940FB58D9B283A339032DE88111407AAD7D94A7F1F3EB78874F8616D4',
      name: 'SCRT Staking Derivatives',
      display: 'stkd-scrt',
      symbol: 'stkd-SCRT',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'secretnetwork',
            baseDenom: 'cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channelId: 'channel-44'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-476',
            path: 'transfer/channel-476/cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg'
      },
      images: [{
          imageSync: {
            chainName: 'secretnetwork',
            baseDenom: 'cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg',
          theme: {
            primaryColorHex: '#b8a2dc'
          }
        }]
    },
    {
      description: 'BeeZee native blockchain',
      denomUnits: [{
          denom: 'ibc/C822645522FC3EECF817609AA38C24B64D04F5C267A23BCCF8F2E3BC5755FA88',
          exponent: 0,
          aliases: ['ubze']
        }, {
          denom: 'bze',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/C822645522FC3EECF817609AA38C24B64D04F5C267A23BCCF8F2E3BC5755FA88',
      name: 'BeeZee',
      display: 'bze',
      symbol: 'BZE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'beezee',
            baseDenom: 'ubze',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-340',
            path: 'transfer/channel-340/ubze'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg'
      },
      images: [{
          imageSync: {
            chainName: 'beezee',
            baseDenom: 'ubze'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg',
          theme: {
            primaryColorHex: '#079fd7'
          }
        }]
    },
    {
      description: 'The native token cw20 for Fanfury on Juno Chain',
      denomUnits: [{
          denom: 'ibc/7CE5F388D661D82A0774E47B5129DA51CC7129BD1A70B5FA6BCEBB5B0A2FAEAF',
          exponent: 0,
          aliases: ['cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz']
        }, {
          denom: 'fury',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/7CE5F388D661D82A0774E47B5129DA51CC7129BD1A70B5FA6BCEBB5B0A2FAEAF',
      name: 'FURY.legacy',
      display: 'fury',
      symbol: 'FURY.juno',
      traces: [{
          type: 'legacy-mintage',
          counterparty: {
            chainName: 'furya',
            baseDenom: 'ufury'
          },
          provider: 'Fanfury'
        }, {
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fanfury.png'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fanfury.png',
          theme: {
            primaryColorHex: '#14045c'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Acrechain',
      denomUnits: [{
          denom: 'ibc/BB936517F7E5D77A63E0ADB05217A6608B0C4CF8FBA7EA2F4BAE4107A7238F06',
          exponent: 0,
          aliases: ['aacre']
        }, {
          denom: 'acre',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/BB936517F7E5D77A63E0ADB05217A6608B0C4CF8FBA7EA2F4BAE4107A7238F06',
      name: 'Acrechain',
      display: 'acre',
      symbol: 'ACRE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'acrechain',
            baseDenom: 'aacre',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-490',
            path: 'transfer/channel-490/aacre'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
      },
      images: [{
          imageSync: {
            chainName: 'acrechain',
            baseDenom: 'aacre'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg',
          theme: {
            primaryColorHex: '#4aa29e'
          }
        }]
    },
    {
      description: 'Stable Token of Harbor protocol on Comdex network',
      denomUnits: [{
          denom: 'ibc/23CA6C8D1AB2145DD13EB1E089A2E3F960DC298B468CCE034E19E5A78B61136E',
          exponent: 0,
          aliases: ['ucmst']
        }, {
          denom: 'cmst',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/23CA6C8D1AB2145DD13EB1E089A2E3F960DC298B468CCE034E19E5A78B61136E',
      name: 'CMST',
      display: 'cmst',
      symbol: 'CMST',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'comdex',
            baseDenom: 'ucmst',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-87',
            path: 'transfer/channel-87/ucmst'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
      },
      images: [{
          imageSync: {
            chainName: 'comdex',
            baseDenom: 'ucmst'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg',
          theme: {
            primaryColorHex: '#040404'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Imversed',
      denomUnits: [{
          denom: 'ibc/92B223EBFA74DB99BEA92B23DEAA6050734FEEAABB84689CB8E1AE8F9C9F9AF4',
          exponent: 0,
          aliases: ['aimv']
        }, {
          denom: 'imv',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/92B223EBFA74DB99BEA92B23DEAA6050734FEEAABB84689CB8E1AE8F9C9F9AF4',
      name: 'Imversed',
      display: 'imv',
      symbol: 'IMV',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'imversed',
            baseDenom: 'aimv',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-517',
            path: 'transfer/channel-517/aimv'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.svg'
      },
      images: [{
          imageSync: {
            chainName: 'imversed',
            baseDenom: 'aimv'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.svg',
          theme: {
            primaryColorHex: '#4c54e4'
          }
        }]
    },
    {
      description: 'The native token of Medas Digital Network',
      denomUnits: [{
          denom: 'ibc/FBBC35295AA037DC0A77796B08DC3003EC918E18E75D61D675A0EEAC0643F36C',
          exponent: 0,
          aliases: ['umedas']
        }, {
          denom: 'medas',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/FBBC35295AA037DC0A77796B08DC3003EC918E18E75D61D675A0EEAC0643F36C',
      name: 'Medas Digital Network',
      display: 'medas',
      symbol: 'MEDAS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'medasdigital',
            baseDenom: 'umedas',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-87042',
            path: 'transfer/channel-87042/umedas'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.svg'
      },
      images: [{
          imageSync: {
            chainName: 'medasdigital',
            baseDenom: 'umedas'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.svg',
          theme: {
            primaryColorHex: '#147ccc'
          }
        }]
    },
    {
      description: 'The native token cw20 for PHMN on Juno Chain',
      extendedDescription: '$PHMN is the governance token of a distributed validator. Similar to PoS chains, each holder possesses voting rights proportionate to the number of locked tokens. PHMN holders can govern the POSTHUMAN validator via DAODAO. For instance, decisions such as diversifying the treasury, updating the validator\'s commission rate, or exiting the network are determined by the PHMN community.',
      denomUnits: [{
          denom: 'ibc/D3B574938631B0A1BA704879020C696E514CFADAA7643CDE4BD5EB010BDE327B',
          exponent: 0,
          aliases: ['cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l']
        }, {
          denom: 'phmn',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/D3B574938631B0A1BA704879020C696E514CFADAA7643CDE4BD5EB010BDE327B',
      name: 'POSTHUMAN',
      display: 'phmn',
      symbol: 'PHMN',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.svg'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.svg',
          theme: {
            primaryColorHex: '#bbc2c6'
          }
        }],
      socials: {
        website: 'https://posthuman.digital/',
        twitter: 'https://twitter.com/POSTHUMAN_DVS'
      }
    },
    {
      description: 'The native token cw20 for Amber on Secret Network',
      denomUnits: [{
          denom: 'ibc/18A1B70E3205A48DE8590C0D11030E7146CDBF1048789261D53FFFD7527F8B55',
          exponent: 0,
          aliases: ['cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852']
        }, {
          denom: 'amber',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/18A1B70E3205A48DE8590C0D11030E7146CDBF1048789261D53FFFD7527F8B55',
      name: 'Amber',
      display: 'amber',
      symbol: 'AMBER',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'secretnetwork',
            baseDenom: 'cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channelId: 'channel-44'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-476',
            path: 'transfer/channel-476/cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg'
      },
      images: [{
          imageSync: {
            chainName: 'secretnetwork',
            baseDenom: 'cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg',
          theme: {
            primaryColorHex: '#f2b854'
          }
        }]
    },
    {
      description: 'The native token of Onomy Protocol',
      denomUnits: [{
          denom: 'ibc/B9606D347599F0F2FDF82BA3EE339000673B7D274EA50F59494DC51EFCD42163',
          exponent: 0,
          aliases: ['anom']
        }, {
          denom: 'nom',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/B9606D347599F0F2FDF82BA3EE339000673B7D274EA50F59494DC51EFCD42163',
      name: 'Onomy',
      display: 'nom',
      symbol: 'NOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'onomy',
            baseDenom: 'anom',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-525',
            path: 'transfer/channel-525/anom'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.svg'
      },
      images: [{
          imageSync: {
            chainName: 'onomy',
            baseDenom: 'anom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.svg',
          theme: {
            primaryColorHex: '#1c1c28'
          }
        }],
      keywords: [
        'dex',
        'stablecoin',
        'bridge',
        'staking'
      ]
    },
    {
      description: 'PSTAKE Liquid-Staked ATOM',
      denomUnits: [{
          denom: 'ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC',
          exponent: 0,
          aliases: ['stk/uatom']
        }, {
          denom: 'stkatom',
          exponent: 6,
          aliases: ['stk/atom']
        }],
      typeAsset: 'ics20',
      base: 'ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC',
      name: 'PSTAKE staked ATOM',
      display: 'stkatom',
      symbol: 'stkATOM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom'
          },
          provider: 'pSTAKE'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'persistence',
            baseDenom: 'stk/uatom',
            channelId: 'channel-6'
          },
          chain: {
            channelId: 'channel-4',
            path: 'transfer/channel-4/stk/uatom'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
      },
      images: [{
          imageSync: {
            chainName: 'persistence',
            baseDenom: 'stk/uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg',
          theme: {
            primaryColorHex: '#c4444c'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Dyson Protocol',
      denomUnits: [{
          denom: 'ibc/E27CD305D33F150369AB526AEB6646A76EC3FFB1A6CA58A663B5DE657A89D55D',
          exponent: 0,
          aliases: ['dys']
        }],
      typeAsset: 'ics20',
      base: 'ibc/E27CD305D33F150369AB526AEB6646A76EC3FFB1A6CA58A663B5DE657A89D55D',
      name: 'Dyson Protocol',
      display: 'ibc/E27CD305D33F150369AB526AEB6646A76EC3FFB1A6CA58A663B5DE657A89D55D',
      symbol: 'DYS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'dyson',
            baseDenom: 'dys',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-526',
            path: 'transfer/channel-526/dys'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.svg'
      },
      images: [{
          imageSync: {
            chainName: 'dyson',
            baseDenom: 'dys'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.svg',
          theme: {
            primaryColorHex: '#040404'
          }
        }]
    },
    {
      description: 'The native token cw20 for Hopers on Juno Chain',
      denomUnits: [{
          denom: 'ibc/D3ADAF73F84CDF205BCB72C142FDAEEA2C612AB853CEE6D6C06F184FA38B1099',
          exponent: 0,
          aliases: ['cw20:juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n']
        }, {
          denom: 'hopers',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/D3ADAF73F84CDF205BCB72C142FDAEEA2C612AB853CEE6D6C06F184FA38B1099',
      name: 'Hopers',
      display: 'hopers',
      symbol: 'HOPERS',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.svg'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.svg',
          theme: {
            primaryColorHex: '#08d890'
          }
        }]
    },
    {
      description: 'Overcollateralized stable coin for Arable derivatives v1',
      denomUnits: [{
          denom: 'ibc/5D270A584B1078FBE07D14570ED5E88EC1FEDA8518B76C322606291E6FD8286F',
          exponent: 0,
          aliases: ['erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c']
        }, {
          denom: 'arusd',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/5D270A584B1078FBE07D14570ED5E88EC1FEDA8518B76C322606291E6FD8286F',
      name: 'Arable USD',
      display: 'arusd',
      symbol: 'arUSD',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'acrechain',
            baseDenom: 'erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-490',
            path: 'transfer/channel-490/erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg'
      },
      images: [{
          imageSync: {
            chainName: 'acrechain',
            baseDenom: 'erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg',
          theme: {
            primaryColorHex: '#77b64f'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Planq Network',
      denomUnits: [{
          denom: 'ibc/B1E0166EA0D759FDF4B207D1F5F12210D8BFE36F2345CEFC76948CE2B36DFBAF',
          exponent: 0,
          aliases: ['aplanq']
        }, {
          denom: 'planq',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/B1E0166EA0D759FDF4B207D1F5F12210D8BFE36F2345CEFC76948CE2B36DFBAF',
      name: 'Planq',
      display: 'planq',
      symbol: 'PLQ',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'planq',
            baseDenom: 'aplanq',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-492',
            path: 'transfer/channel-492/aplanq'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
      },
      images: [{
          imageSync: {
            chainName: 'planq',
            baseDenom: 'aplanq'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg',
          theme: {
            primaryColorHex: '#d4f3fb'
          }
        }]
    },
    {
      description: 'Fantom\'s native utility token — FTM — powers the entire Fantom blockchain ecosystem. FTM tokens are used for staking, governance, payments, and fees on the network.',
      denomUnits: [{
          denom: 'ibc/5E2DFDF1734137302129EA1C1BA21A580F96F778D4F021815EA4F6DB378DA1A4',
          exponent: 0,
          aliases: ['wftm-wei']
        }, {
          denom: 'ftm',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/5E2DFDF1734137302129EA1C1BA21A580F96F778D4F021815EA4F6DB378DA1A4',
      name: 'Fantom',
      display: 'ftm',
      symbol: 'FTM',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chainName: 'fantom',
            baseDenom: 'wei'
          },
          chain: {
            contract: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83'
          },
          provider: 'Fantom'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'fantom',
            baseDenom: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'wftm-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/wftm-wei'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.svg'
      },
      images: [{
          imageSync: {
            chainName: 'fantom',
            baseDenom: 'wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.svg',
          theme: {
            primaryColorHex: '#1c6cfc'
          }
        }]
    },
    {
      description: 'Canto is a Layer-1 blockchain built to deliver on the promise of DeFi',
      denomUnits: [{
          denom: 'ibc/47CAF2DB8C016FAC960F33BC492FD8E454593B65CC59D70FA9D9F30424F9C32F',
          exponent: 0,
          aliases: ['acanto']
        }, {
          denom: 'canto',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/47CAF2DB8C016FAC960F33BC492FD8E454593B65CC59D70FA9D9F30424F9C32F',
      name: 'Canto',
      display: 'canto',
      symbol: 'CANTO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'canto',
            baseDenom: 'acanto',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-550',
            path: 'transfer/channel-550/acanto'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg'
      },
      images: [{
          imageSync: {
            chainName: 'canto',
            baseDenom: 'acanto'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg',
          theme: {
            primaryColorHex: '#1c1f1f'
          }
        }]
    },
    {
      description: 'Quicksilver Liquid Staked STARS',
      denomUnits: [{
          denom: 'ibc/46C83BB054E12E189882B5284542DB605D94C99827E367C9192CF0579CD5BC83',
          exponent: 0,
          aliases: ['uqstars']
        }, {
          denom: 'qstars',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/46C83BB054E12E189882B5284542DB605D94C99827E367C9192CF0579CD5BC83',
      name: 'Quicksilver Liquid Staked STARS',
      display: 'qstars',
      symbol: 'qSTARS',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'stargaze',
            baseDenom: 'ustars'
          },
          provider: 'Quicksilver'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'quicksilver',
            baseDenom: 'uqstars',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-522',
            path: 'transfer/channel-522/uqstars'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.svg'
      },
      images: [{
          imageSync: {
            chainName: 'quicksilver',
            baseDenom: 'uqstars'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.svg',
          theme: {
            primaryColorHex: '#fc944c'
          }
        }]
    },
    {
      description: 'WYND DAO Governance Token',
      denomUnits: [{
          denom: 'ibc/2FBAC4BF296D7844796844B35978E5899984BA5A6314B2DD8F83C215550010B3',
          exponent: 0,
          aliases: ['cw20:juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9']
        }, {
          denom: 'wynd',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/2FBAC4BF296D7844796844B35978E5899984BA5A6314B2DD8F83C215550010B3',
      name: 'Wynd DAO Governance Token',
      display: 'wynd',
      symbol: 'WYND',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.svg'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.svg',
          theme: {
            primaryColorHex: '#6bcc95'
          }
        }]
    },
    {
      description: 'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      denomUnits: [{
          denom: 'ibc/231FD77ECCB2DB916D314019DA30FE013202833386B1908A191D16989AD80B5A',
          exponent: 0,
          aliases: ['polygon-uusdc']
        }, {
          denom: 'polygon-usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/231FD77ECCB2DB916D314019DA30FE013202833386B1908A191D16989AD80B5A',
      name: 'USDC (Ethereum) (Polygon via Axelar)',
      display: 'polygon-usdc',
      symbol: 'USDC.e.matic.axl',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Polygon PoS Bridge'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'polygon',
            baseDenom: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'polygon-uusdc',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/polygon-uusdc'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/polygon.usdc.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/polygon.usdc.svg'
        },
        {
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'polygon-uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg',
          theme: {
            primaryColorHex: '#2474cc'
          }
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }
      ]
    },
    {
      description: 'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      denomUnits: [{
          denom: 'ibc/F17C9CA112815613C5B6771047A093054F837C3020CBA59DFFD9D780A8B2984C',
          exponent: 0,
          aliases: ['avalanche-uusdc']
        }, {
          denom: 'avalanche-usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/F17C9CA112815613C5B6771047A093054F837C3020CBA59DFFD9D780A8B2984C',
      name: 'USD Coin (Avalanche)',
      display: 'avalanche-usdc',
      symbol: 'USDC.avax.axl',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'additional-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Circle'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'avalanche',
            baseDenom: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'avalanche-uusdc',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/avalanche-uusdc'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/avalanche.usdc.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/avalanche.usdc.svg'
        },
        {
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'avalanche-uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg',
          theme: {
            primaryColorHex: '#2474cc'
          }
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }
      ]
    },
    {
      description: 'Mars Protocol token (pre-migration)',
      denomUnits: [{
          denom: 'ibc/573FCD90FACEE750F55A8864EF7D38265F07E5A9273FA0E8DAFD39951332B580',
          exponent: 0,
          aliases: ['umars']
        }, {
          denom: 'MARS.old',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/573FCD90FACEE750F55A8864EF7D38265F07E5A9273FA0E8DAFD39951332B580',
      name: 'Mars Protocol token (Mars Hub)',
      display: 'MARS.old',
      symbol: 'MARS.mars',
      traces: [{
          type: 'legacy-mintage',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1ndu2wvkrxtane8se2tr48gv7nsm46y5gcqjhux/MARS'
          },
          provider: 'Mars Hub'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'mars',
            baseDenom: 'umars',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-557',
            path: 'transfer/channel-557/umars'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token-ibc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token-ibc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'mars',
            baseDenom: 'umars'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token-ibc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token-ibc.svg',
          theme: {
            primaryColorHex: '#000000'
          }
        }]
    },
    {
      description: 'Ciento Exchange Token',
      denomUnits: [{
          denom: 'ibc/D38BB3DD46864694F009AF01DA5A815B3A875F8CC52FF5679BFFCC35DC7451D5',
          exponent: 0,
          aliases: ['erc20/0xAE6D3334989a22A65228732446731438672418F2']
        }, {
          denom: 'cnto',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/D38BB3DD46864694F009AF01DA5A815B3A875F8CC52FF5679BFFCC35DC7451D5',
      name: 'Ciento Token',
      display: 'cnto',
      symbol: 'CNTO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'acrechain',
            baseDenom: 'erc20/0xAE6D3334989a22A65228732446731438672418F2',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-490',
            path: 'transfer/channel-490/erc20/0xAE6D3334989a22A65228732446731438672418F2'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg'
      },
      images: [{
          imageSync: {
            chainName: 'acrechain',
            baseDenom: 'erc20/0xAE6D3334989a22A65228732446731438672418F2'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg',
          theme: {
            primaryColorHex: '#ecc53b'
          }
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/C491E7582E94AE921F6A029790083CDE1106C28F3F6C4AD7F1340544C13EC372',
          exponent: 0,
          aliases: ['stuluna']
        }, {
          denom: 'stluna',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/C491E7582E94AE921F6A029790083CDE1106C28F3F6C4AD7F1340544C13EC372',
      name: 'Stride Staked LUNA',
      display: 'stluna',
      symbol: 'stLUNA',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'terra2',
            baseDenom: 'uluna'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stuluna',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-326',
            path: 'transfer/channel-326/stuluna'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stride',
            baseDenom: 'stuluna'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/C5579A9595790017C600DD726276D978B9BF314CF82406CE342720A9C7911A01',
          exponent: 0,
          aliases: ['staevmos']
        }, {
          denom: 'stevmos',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/C5579A9595790017C600DD726276D978B9BF314CF82406CE342720A9C7911A01',
      name: 'Stride Staked EVMOS',
      display: 'stevmos',
      symbol: 'stEVMOS',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'evmos',
            baseDenom: 'aevmos'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'staevmos',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-326',
            path: 'transfer/channel-326/staevmos'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stride',
            baseDenom: 'staevmos'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }]
    },
    {
      description: 'nRide Token',
      extendedDescription: 'nRide is developing a uber-like ride-hailing protocol, leveraging cosmwasm smart-contracts for payment, driver registration and text-messaging between the rider and the driver, to create a trustless public transportation environment for any cab or taxi company to use.',
      denomUnits: [{
          denom: 'ibc/E750D31033DC1CF4A044C3AA0A8117401316DC918FBEBC4E3D34F91B09D5F54C',
          exponent: 0,
          aliases: ['cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq']
        }, {
          denom: 'nride',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/E750D31033DC1CF4A044C3AA0A8117401316DC918FBEBC4E3D34F91B09D5F54C',
      name: 'nRide Token',
      display: 'nride',
      symbol: 'NRIDE',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg',
          theme: {
            primaryColorHex: '#050505'
          }
        }]
    },
    {
      description: 'The native staking token of 8ball.',
      denomUnits: [{
          denom: 'ibc/8BE73A810E22F80E5E850531A688600D63AE7392E7C2770AE758CAA4FD921B7F',
          exponent: 0,
          aliases: ['uebl']
        }, {
          denom: 'ebl',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/8BE73A810E22F80E5E850531A688600D63AE7392E7C2770AE758CAA4FD921B7F',
      name: '8ball',
      display: 'ebl',
      symbol: 'EBL',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: '8ball',
            baseDenom: 'uebl',
            channelId: 'channel-16'
          },
          chain: {
            channelId: 'channel-641',
            path: 'transfer/channel-641/uebl'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg'
      },
      images: [{
          imageSync: {
            chainName: '8ball',
            baseDenom: 'uebl'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg',
          theme: {
            primaryColorHex: '#dbdbdb'
          }
        }]
    },
    {
      description: 'Quicksilver Liquid Staked ATOM',
      denomUnits: [{
          denom: 'ibc/FA602364BEC305A696CBDF987058E99D8B479F0318E47314C49173E8838C5BAC',
          exponent: 0,
          aliases: ['uqatom']
        }, {
          denom: 'qatom',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/FA602364BEC305A696CBDF987058E99D8B479F0318E47314C49173E8838C5BAC',
      name: 'Quicksilver Liquid Staked ATOM',
      display: 'qatom',
      symbol: 'qATOM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom'
          },
          provider: 'Quicksilver'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'quicksilver',
            baseDenom: 'uqatom',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-522',
            path: 'transfer/channel-522/uqatom'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.svg'
      },
      images: [{
          imageSync: {
            chainName: 'quicksilver',
            baseDenom: 'uqatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.svg',
          theme: {
            primaryColorHex: '#fc944c'
          }
        }]
    },
    {
      description: 'Governance Token of Harbor protocol on Comdex network',
      denomUnits: [{
          denom: 'ibc/AD4DEA52408EA07C0C9E19444EC8DA84A274A70AD2687A710EFDDEB28BB2986A',
          exponent: 0,
          aliases: ['uharbor']
        }, {
          denom: 'harbor',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/AD4DEA52408EA07C0C9E19444EC8DA84A274A70AD2687A710EFDDEB28BB2986A',
      name: 'Harbor',
      display: 'harbor',
      symbol: 'HARBOR',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'comdex',
            baseDenom: 'uharbor',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-87',
            path: 'transfer/channel-87/uharbor'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
      },
      images: [{
          imageSync: {
            chainName: 'comdex',
            baseDenom: 'uharbor'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg',
          theme: {
            primaryColorHex: '#645ca4'
          }
        }]
    },
    {
      description: 'Quicksilver Liquid Staked REGEN',
      denomUnits: [{
          denom: 'ibc/79A676508A2ECA1021EDDC7BB9CF70CEEC9514C478DA526A5A8B3E78506C2206',
          exponent: 0,
          aliases: ['uqregen']
        }, {
          denom: 'qregen',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/79A676508A2ECA1021EDDC7BB9CF70CEEC9514C478DA526A5A8B3E78506C2206',
      name: 'Quicksilver Liquid Staked Regen',
      display: 'qregen',
      symbol: 'qREGEN',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'regen',
            baseDenom: 'uregen'
          },
          provider: 'Quicksilver'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'quicksilver',
            baseDenom: 'uqregen',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-522',
            path: 'transfer/channel-522/uqregen'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.svg'
      },
      images: [{
          imageSync: {
            chainName: 'quicksilver',
            baseDenom: 'uqregen'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.svg',
          theme: {
            primaryColorHex: '#fc944c'
          }
        }]
    },
    {
      description: 'Inspired by Bonk. A community project to celebrate the settlers of JunoNetwork.',
      denomUnits: [{
          denom: 'ibc/4F24D904BAB5FFBD3524F2DE3EC3C7A9E687A2408D9A985E57B356D9FA9201C6',
          exponent: 0,
          aliases: ['cw20:juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x']
        }, {
          denom: 'fox',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/4F24D904BAB5FFBD3524F2DE3EC3C7A9E687A2408D9A985E57B356D9FA9201C6',
      name: 'Juno Fox',
      display: 'fox',
      symbol: 'FOX',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fox.png'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fox.png',
          theme: {
            primaryColorHex: '#ee5f06'
          }
        }]
    },
    {
      description: 'QCK - native token of Quicksilver',
      denomUnits: [{
          denom: 'ibc/635CB83EF1DFE598B10A3E90485306FD0D47D34217A4BE5FD9977FA010A5367D',
          exponent: 0,
          aliases: ['uqck']
        }, {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/635CB83EF1DFE598B10A3E90485306FD0D47D34217A4BE5FD9977FA010A5367D',
      name: 'Quicksilver',
      display: 'qck',
      symbol: 'QCK',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'quicksilver',
            baseDenom: 'uqck',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-522',
            path: 'transfer/channel-522/uqck'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
      },
      images: [{
          imageSync: {
            chainName: 'quicksilver',
            baseDenom: 'uqck'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png',
          theme: {
            primaryColorHex: '#b2b2b2'
          }
        }]
    },
    {
      description: 'The native token of Arkhadian',
      denomUnits: [{
          denom: 'ibc/0F91EE8B98AAE3CF393D94CD7F89A10F8D7758C5EC707E721899DFE65C164C28',
          exponent: 0,
          aliases: ['arkh']
        }, {
          denom: 'ARKH',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/0F91EE8B98AAE3CF393D94CD7F89A10F8D7758C5EC707E721899DFE65C164C28',
      name: 'Arkhadian',
      display: 'ARKH',
      symbol: 'ARKH',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'arkh',
            baseDenom: 'arkh',
            channelId: 'channel-12'
          },
          chain: {
            channelId: 'channel-648',
            path: 'transfer/channel-648/arkh'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.svg'
      },
      images: [{
          imageSync: {
            chainName: 'arkh',
            baseDenom: 'arkh'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.svg',
          theme: {
            primaryColorHex: '#bdbb82'
          }
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'Quicksilver Liquid Staked OSMO',
      denomUnits: [{
          denom: 'ibc/42D24879D4569CE6477B7E88206ADBFE47C222C6CAD51A54083E4A72594269FC',
          exponent: 0,
          aliases: ['uqosmo']
        }, {
          denom: 'qosmo',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/42D24879D4569CE6477B7E88206ADBFE47C222C6CAD51A54083E4A72594269FC',
      name: 'Quicksilver Liquid Staked OSMO',
      display: 'qosmo',
      symbol: 'qOSMO',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'uosmo'
          },
          provider: 'Quicksilver'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'quicksilver',
            baseDenom: 'uqosmo',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-522',
            path: 'transfer/channel-522/uqosmo'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.svg'
      },
      images: [{
          imageSync: {
            chainName: 'quicksilver',
            baseDenom: 'uqosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.svg',
          theme: {
            primaryColorHex: '#fc944c'
          }
        }]
    },
    {
      description: 'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denomUnits: [{
          denom: 'ibc/7FA7EC64490E3BDE5A1A28CBE73CC0AD22522794957BC891C46321E3A6074DB9',
          exponent: 0,
          aliases: ['microfrienzies', 'ufrienzies']
        }, {
          denom: 'frienzies',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/7FA7EC64490E3BDE5A1A28CBE73CC0AD22522794957BC891C46321E3A6074DB9',
      name: 'Frienzies',
      display: 'frienzies',
      symbol: 'FRNZ',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'ufrienzies',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-750',
            path: 'transfer/channel-750/ufrienzies'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
      },
      images: [{
          imageSync: {
            chainName: 'noble',
            baseDenom: 'ufrienzies'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg',
          theme: {
            primaryColorHex: '#04041c'
          }
        }]
    },
    {
      description: 'The native token of Migaloo Chain',
      denomUnits: [{
          denom: 'ibc/EDD6F0D66BCD49C1084FB2C35353B4ACD7B9191117CE63671B61320548F7C89D',
          exponent: 0,
          aliases: ['uwhale']
        }, {
          denom: 'whale',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/EDD6F0D66BCD49C1084FB2C35353B4ACD7B9191117CE63671B61320548F7C89D',
      name: 'Migaloo',
      display: 'whale',
      symbol: 'WHALE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'migaloo',
            baseDenom: 'uwhale',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-642',
            path: 'transfer/channel-642/uwhale'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
      },
      images: [{
          imageSync: {
            chainName: 'migaloo',
            baseDenom: 'uwhale'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg',
          theme: {
            primaryColorHex: '#1c1c1c'
          }
        }]
    },
    {
      description: 'Evmos Guardians governance token.',
      denomUnits: [{
          denom: 'ibc/BAC9C6998F1F5C316D3353622EAEDAF8BD00FAABEB374FECDF8C9BC475172CFA',
          exponent: 0,
          aliases: ['cw20:juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma']
        }, {
          denom: 'grdn',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/BAC9C6998F1F5C316D3353622EAEDAF8BD00FAABEB374FECDF8C9BC475172CFA',
      name: 'Guardian',
      display: 'grdn',
      symbol: 'GRDN',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/guardian.png'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/guardian.png',
          theme: {
            primaryColorHex: '#07d7ac'
          }
        }]
    },
    {
      description: 'Mini Punks Token',
      denomUnits: [{
          denom: 'ibc/DC0D3303BBE739E073224D0314385B88B247F56D71D726A91414CCA244FFFE7E',
          exponent: 0,
          aliases: ['cw20:juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my']
        }, {
          denom: 'mnpu',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/DC0D3303BBE739E073224D0314385B88B247F56D71D726A91414CCA244FFFE7E',
      name: 'Mini Punks',
      display: 'mnpu',
      symbol: 'MNPU',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.svg'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.svg',
          theme: {
            primaryColorHex: '#dadbce'
          }
        }]
    },
    {
      description: 'Shiba Cosmos',
      denomUnits: [{
          denom: 'ibc/447A0DCE83691056289503DDAB8EB08E52E167A73629F2ACC59F056B92F51CE8',
          exponent: 0,
          aliases: ['cw20:juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z']
        }, {
          denom: 'shibac',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/447A0DCE83691056289503DDAB8EB08E52E167A73629F2ACC59F056B92F51CE8',
      name: 'ShibaCosmos',
      display: 'shibac',
      symbol: 'SHIBAC',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/shibacosmos.png'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/shibacosmos.png',
          theme: {
            primaryColorHex: '#eea95d'
          }
        }]
    },
    {
      description: 'Sikoba Governance Token',
      denomUnits: [{
          denom: 'ibc/71066B030D8FC6479E638580E1BA9C44925E8C1F6E45036669D22017CFDC8C5E',
          exponent: 0,
          aliases: ['cw20:juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp']
        }, {
          denom: 'sikoba',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/71066B030D8FC6479E638580E1BA9C44925E8C1F6E45036669D22017CFDC8C5E',
      name: 'Sikoba Token',
      display: 'sikoba',
      symbol: 'SKOJ',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.svg'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.svg',
          theme: {
            primaryColorHex: '#fbfbfb'
          }
        }]
    },
    {
      description: 'Nature Carbon Ton (NCT) is a carbon token standard backed 1:1 by carbon credits issued by Verra, a global leader in the voluntary carbon market. NCT credits on Regen Network have been tokenized by Toucan.earth.',
      denomUnits: [{
          denom: 'ibc/A76EB6ECF4E3E2D4A23C526FD1B48FDD42F171B206C9D2758EF778A7826ADD68',
          exponent: 0,
          aliases: ['eco.uC.NCT']
        }, {
          denom: 'nct',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/A76EB6ECF4E3E2D4A23C526FD1B48FDD42F171B206C9D2758EF778A7826ADD68',
      name: 'Nature Carbon Ton',
      display: 'nct',
      symbol: 'NCT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'regen',
            baseDenom: 'eco.uC.NCT',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-8',
            path: 'transfer/channel-8/eco.uC.NCT'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg'
      },
      images: [{
          imageSync: {
            chainName: 'regen',
            baseDenom: 'eco.uC.NCT'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg',
          theme: {
            primaryColorHex: '#171c25'
          }
        }]
    },
    {
      description: 'Celestims',
      denomUnits: [{
          denom: 'ibc/0E4FA664327BD40B32803EE84A77F145834C0281B7F82B65521333B3669FA0BA',
          exponent: 0,
          aliases: ['cw20:juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg']
        }, {
          denom: 'clst',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/0E4FA664327BD40B32803EE84A77F145834C0281B7F82B65521333B3669FA0BA',
      name: 'Celestims',
      display: 'clst',
      symbol: 'CLST',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/celestims.png'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/celestims.png',
          theme: {
            primaryColorHex: '#0b1d33'
          }
        }]
    },
    {
      description: 'The First Doge on Osmosis',
      denomUnits: [{
          denom: 'ibc/8AEEA9B9304392070F72611076C0E328CE3F2DECA1E18557E36F9DB4F09C0156',
          exponent: 0,
          aliases: ['cw20:juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je']
        }, {
          denom: 'osdoge',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/8AEEA9B9304392070F72611076C0E328CE3F2DECA1E18557E36F9DB4F09C0156',
      name: 'Osmosis Doge',
      display: 'osdoge',
      symbol: 'OSDOGE',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/osdoge.png'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/osdoge.png',
          theme: {
            primaryColorHex: '#f49c4c'
          }
        }]
    },
    {
      description: 'Apemos',
      denomUnits: [{
          denom: 'ibc/1EB03F13F29FEA73444586FC4E88A8C14ACE9291501E9658E3BEF951EA4AC85D',
          exponent: 0,
          aliases: ['cw20:juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06']
        }, {
          denom: 'apemos',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/1EB03F13F29FEA73444586FC4E88A8C14ACE9291501E9658E3BEF951EA4AC85D',
      name: 'Apemos',
      display: 'apemos',
      symbol: 'APEMOS',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/apemos.png'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/apemos.png',
          theme: {
            primaryColorHex: '#4d5264'
          }
        }]
    },
    {
      description: 'Evmos Guardians\' Invaders DAO token.',
      denomUnits: [{
          denom: 'ibc/3DB1721541C94AD19D7735FECED74C227E13F925BDB814392980B40A19C1ED54',
          exponent: 0,
          aliases: ['cw20:juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8']
        }, {
          denom: 'invdrs',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/3DB1721541C94AD19D7735FECED74C227E13F925BDB814392980B40A19C1ED54',
      name: 'Invaders',
      display: 'invdrs',
      symbol: 'INVDRS',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/invdrs.png'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/invdrs.png',
          theme: {
            primaryColorHex: '#04ccab'
          }
        }]
    },
    {
      description: 'Doge Apr',
      denomUnits: [{
          denom: 'ibc/04BE4E9C825ED781F9684A1226114BB49607500CAD855F1E3FEEC18532297250',
          exponent: 0,
          aliases: ['cw20:juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d']
        }, {
          denom: 'doga',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/04BE4E9C825ED781F9684A1226114BB49607500CAD855F1E3FEEC18532297250',
      name: 'Doge Apr',
      display: 'doga',
      symbol: 'DOGA',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/doga.png'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/doga.png',
          theme: {
            primaryColorHex: '#d6a84f'
          }
        }]
    },
    {
      description: 'Catmos',
      denomUnits: [{
          denom: 'ibc/F4A07138CAEF0BFB4889E03C44C57956A48631061F1C8AB80421C1F229C1B835',
          exponent: 0,
          aliases: ['cw20:juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488']
        }, {
          denom: 'catmos',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/F4A07138CAEF0BFB4889E03C44C57956A48631061F1C8AB80421C1F229C1B835',
      name: 'Catmos',
      display: 'catmos',
      symbol: 'CATMOS',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catmos.png'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catmos.png',
          theme: {
            primaryColorHex: '#140c44'
          }
        }]
    },
    {
      description: 'Social Impact DAO providing showers, meals, and vehicles to the homeless',
      denomUnits: [{
          denom: 'ibc/56B988C4D934FB7503F5EA9B440C75D489C8AD5D193715B477BEC4F84B8BBA2A',
          exponent: 0,
          aliases: ['cw20:juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm']
        }, {
          denom: 'summit',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/56B988C4D934FB7503F5EA9B440C75D489C8AD5D193715B477BEC4F84B8BBA2A',
      name: 'Summit',
      display: 'summit',
      symbol: 'SUMMIT',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/summit.png'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/summit.png',
          theme: {
            primaryColorHex: '#cbdb44'
          }
        }]
    },
    {
      description: 'The native staking token of OmniFlix Hub.',
      denomUnits: [{
          denom: 'ibc/CEE970BB3D26F4B907097B6B660489F13F3B0DA765B83CC7D9A0BC0CE220FA6F',
          exponent: 0,
          aliases: ['uflix']
        }, {
          denom: 'flix',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/CEE970BB3D26F4B907097B6B660489F13F3B0DA765B83CC7D9A0BC0CE220FA6F',
      name: 'OmniFlix',
      display: 'flix',
      symbol: 'FLIX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'omniflixhub',
            baseDenom: 'uflix',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-199',
            path: 'transfer/channel-199/uflix'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg'
      },
      images: [{
          imageSync: {
            chainName: 'omniflixhub',
            baseDenom: 'uflix'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg',
          theme: {
            primaryColorHex: '#c33635'
          }
        }]
    },
    {
      description: 'Spacer',
      denomUnits: [{
          denom: 'ibc/7A496DB7C2277D4B74EC4428DDB5AC8A62816FBD0DEBE1CFE094935D746BE19C',
          exponent: 0,
          aliases: ['cw20:juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg']
        }, {
          denom: 'spacer',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/7A496DB7C2277D4B74EC4428DDB5AC8A62816FBD0DEBE1CFE094935D746BE19C',
      name: 'Spacer',
      display: 'spacer',
      symbol: 'SPACER',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/spacer.png'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/spacer.png',
          theme: {
            primaryColorHex: '#695335'
          }
        }]
    },
    {
      description: 'Light: LumenX community DAO treasury token',
      denomUnits: [{
          denom: 'ibc/3DC08BDF2689978DBCEE28C7ADC2932AA658B2F64B372760FBC5A0058669AD29',
          exponent: 0,
          aliases: ['cw20:juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l']
        }, {
          denom: 'light',
          exponent: 9
        }],
      typeAsset: 'ics20',
      base: 'ibc/3DC08BDF2689978DBCEE28C7ADC2932AA658B2F64B372760FBC5A0058669AD29',
      name: 'LIGHT',
      display: 'light',
      symbol: 'LIGHT',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/light.png'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/light.png',
          theme: {
            primaryColorHex: '#e5e5e5'
          }
        }]
    },
    {
      description: 'The native token cw20 for Silk on Secret Network',
      denomUnits: [{
          denom: 'ibc/8A025A1E70101E39DE0C0F153E582A30806D3DA16795F6D868A3AA247D2DEDF7',
          exponent: 0,
          aliases: ['cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd']
        }, {
          denom: 'silk',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/8A025A1E70101E39DE0C0F153E582A30806D3DA16795F6D868A3AA247D2DEDF7',
      name: 'Silk',
      display: 'silk',
      symbol: 'SILK',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'secretnetwork',
            baseDenom: 'cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channelId: 'channel-44'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-476',
            path: 'transfer/channel-476/cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
      },
      images: [{
          imageSync: {
            chainName: 'secretnetwork',
            baseDenom: 'cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg',
          theme: {
            primaryColorHex: '#3142fc'
          }
        }]
    },
    {
      description: 'Mille: the 1000th token on osmosis',
      denomUnits: [{
          denom: 'ibc/912275A63A565BFD80734AEDFFB540132C51E446EAC41483B26EDE8A557C71CF',
          exponent: 0,
          aliases: ['cw20:juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d']
        }, {
          denom: 'mile',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/912275A63A565BFD80734AEDFFB540132C51E446EAC41483B26EDE8A557C71CF',
      name: 'Mille',
      display: 'mile',
      symbol: 'MILE',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mille.png'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mille.png',
          theme: {
            primaryColorHex: '#040404'
          }
        }]
    },
    {
      description: 'Social Impact DAO dedicated to combatting food insecurity and malnutrition',
      denomUnits: [{
          denom: 'ibc/980A2748F37C938AD129B92A51E2ABA8CFFC6862ADD61EC1B291125535DBE30B',
          exponent: 0,
          aliases: ['cw20:juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq']
        }, {
          denom: 'manna',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/980A2748F37C938AD129B92A51E2ABA8CFFC6862ADD61EC1B291125535DBE30B',
      name: 'Manna',
      display: 'manna',
      symbol: 'MANNA',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/manna.png'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/manna.png',
          theme: {
            primaryColorHex: '#299544'
          }
        }]
    },
    {
      description: 'Filecoin is a decentralized storage network designed to turn cloud storage into an algorithmic market. The network facilitates open markets for storing and retrieving data, where users pay to store their files on storage miners. Filecoin is built on top of the InterPlanetary File System (IPFS), a peer-to-peer storage network. Filecoin aims to store data in a decentralized manner, unlike traditional cloud storage providers.\n\nParticipants in the Filecoin network are incentivized to act honestly and store as much data as possible because they earn the Filecoin cryptocurrency (FIL) in exchange for their storage services. This setup ensures the integrity and accessibility of data stored. Filecoin\'s model allows for a variety of storage options, including long-term archival storage and more rapid retrieval services, making it a versatile solution for decentralized data storage. The project, developed by Protocol Labs, also focuses on ensuring that data is stored reliably and efficiently.',
      denomUnits: [{
          denom: 'ibc/18FB5C09D9D2371F659D4846A956FA56225E377EE3C3652A2BF3542BF809159D',
          exponent: 0,
          aliases: ['wfil-wei']
        }, {
          denom: 'fil',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/18FB5C09D9D2371F659D4846A956FA56225E377EE3C3652A2BF3542BF809159D',
      name: 'Filecoin (Axelar)',
      display: 'fil',
      symbol: 'FIL.axl',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chainName: 'filecoin',
            baseDenom: 'attoFIL'
          },
          provider: 'Filecoin'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'filecoin',
            baseDenom: '0x60E1773636CF5E4A227d9AC24F20fEca034ee25A'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'wfil-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/wfil-wei'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fil.axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fil.axl.svg'
      },
      images: [{
          imageSync: {
            chainName: 'filecoin',
            baseDenom: 'attoFIL'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fil.axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fil.axl.svg',
          theme: {
            primaryColorHex: '#0493fc'
          }
        }]
    },
    {
      description: 'Void',
      denomUnits: [{
          denom: 'ibc/593F820ECE676A3E0890C734EC4F3A8DE16EC10A54EEDFA8BDFEB40EEA903960',
          exponent: 0,
          aliases: ['cw20:juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8']
        }, {
          denom: 'void',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/593F820ECE676A3E0890C734EC4F3A8DE16EC10A54EEDFA8BDFEB40EEA903960',
      name: 'Void',
      display: 'void',
      symbol: 'VOID',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/void.png'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/void.png',
          theme: {
            primaryColorHex: '#5b2e96'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denomUnits: [{
          denom: 'ibc/0B3D528E74E3DEAADF8A68F393887AC7E06028904D02173561B0D27F6E751D0A',
          exponent: 0,
          aliases: ['cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      typeAsset: 'ics20',
      base: 'ibc/0B3D528E74E3DEAADF8A68F393887AC7E06028904D02173561B0D27F6E751D0A',
      name: 'Shade',
      display: 'shd',
      symbol: 'SHD',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'secretnetwork',
            baseDenom: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channelId: 'channel-44'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-476',
            path: 'transfer/channel-476/cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
      },
      images: [{
          imageSync: {
            chainName: 'secretnetwork',
            baseDenom: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg',
          theme: {
            primaryColorHex: '#342c52'
          }
        }]
    },
    {
      description: 'The native token of Bluzelle',
      denomUnits: [{
          denom: 'ibc/63CDD51098FD99E04E5F5610A3882CBE7614C441607BA6FCD7F3A3C1CD5325F8',
          exponent: 0,
          aliases: ['ubnt']
        }, {
          denom: 'bnt',
          exponent: 6,
          aliases: ['blz']
        }],
      typeAsset: 'ics20',
      base: 'ibc/63CDD51098FD99E04E5F5610A3882CBE7614C441607BA6FCD7F3A3C1CD5325F8',
      name: 'Bluzelle',
      display: 'bnt',
      symbol: 'BLZ',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'bluzelle',
            baseDenom: 'ubnt',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-763',
            path: 'transfer/channel-763/ubnt'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.svg'
      },
      images: [{
          imageSync: {
            chainName: 'bluzelle',
            baseDenom: 'ubnt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.svg',
          theme: {
            primaryColorHex: '#708ffc'
          }
        }],
      keywords: ['bluzelle', 'game']
    },
    {
      description: 'Native token of Arbitrum',
      denomUnits: [{
          denom: 'ibc/10E5E5B06D78FFBB61FD9F89209DEE5FD4446ED0550CBB8E3747DA79E10D9DC6',
          exponent: 0,
          aliases: ['arb-wei']
        }, {
          denom: 'arb',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/10E5E5B06D78FFBB61FD9F89209DEE5FD4446ED0550CBB8E3747DA79E10D9DC6',
      name: 'Arbitrum (Axelar)',
      display: 'arb',
      symbol: 'ARB.axl',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'arbitrum',
            baseDenom: '0x912CE59144191C1204E64559FE8253a0e49E6548'
          },
          provider: 'Axelar'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'arb-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/arb-wei'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/arb.axl.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/arb.axl.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/arb.axl.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/arb.axl.png'
        }, {
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'arb-wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg',
          theme: {
            primaryColorHex: '#253545'
          }
        }]
    },
    {
      description: 'Silica',
      denomUnits: [{
          denom: 'ibc/5164ECF584AD7DC27DA9E6A89E75DAB0F7C4FCB0A624B69215B8BC6A2C40CD07',
          exponent: 0,
          aliases: ['cw20:juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux']
        }, {
          denom: 'silica',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/5164ECF584AD7DC27DA9E6A89E75DAB0F7C4FCB0A624B69215B8BC6A2C40CD07',
      name: 'Silica',
      display: 'silica',
      symbol: 'SLCA',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/silica.png'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/silica.png',
          theme: {
            primaryColorHex: '#21538f'
          }
        }]
    },
    {
      description: 'Pepec',
      denomUnits: [{
          denom: 'ibc/C00B17F74C94449A62935B4C886E6F0F643249A270DEF269D53CE6741ECCDB93',
          exponent: 0,
          aliases: ['cw20:juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k']
        }, {
          denom: 'pepec',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/C00B17F74C94449A62935B4C886E6F0F643249A270DEF269D53CE6741ECCDB93',
      name: 'Pepec',
      display: 'pepec',
      symbol: 'PEPEC',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepec.png'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepec.png',
          theme: {
            primaryColorHex: '#e9bc37'
          }
        }]
    },
    {
      description: 'Pepe is a community based memecoin with one mission: to make memecoins great again. Made to honor the iconic meme we all know and love, Pepe is here to take reign as the most memeable memecoin in existence, fueled purely by memetic power. Pepe is for the people.',
      denomUnits: [{
          denom: 'ibc/E47F4E97C534C95B942729E1B25DBDE111EA791411CFF100515050BEA0AC0C6B',
          exponent: 0,
          aliases: ['0x6982508145454Ce325dDbE47a25d4ec3d2311933', 'pepe-wei']
        }, {
          denom: 'pepe',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/E47F4E97C534C95B942729E1B25DBDE111EA791411CFF100515050BEA0AC0C6B',
      name: 'Pepe (Axelar)',
      display: 'pepe',
      symbol: 'PEPE.axl',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x6982508145454Ce325dDbE47a25d4ec3d2311933'
          },
          provider: 'Axelar'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'pepe-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/pepe-wei'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/pepe.axl.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/pepe.axl.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/pepe.axl.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/pepe.axl.png'
        }, {
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'pepe-wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg',
          theme: {
            primaryColorHex: '#cc3233'
          }
        }],
      keywords: ['meme']
    },
    {
      denomUnits: [{
          denom: 'factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx',
          exponent: 0
        }, {
          denom: 'ibcx',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm',
      base: 'factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx',
      name: 'IBC Index',
      display: 'ibcx',
      symbol: 'IBCX',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ibcx.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ibcx.svg'
        }],
      coingeckoId: 'ibc-index'
    },
    {
      description: 'Coinbase Wrapped Staked ETH (“cbETH”) is a utility token and liquid representation of ETH staked through Coinbase. cbETH gives customers the option to sell, transfer, or otherwise use their staked ETH in dapps while it remains locked by the Ethereum protocol.',
      denomUnits: [{
          denom: 'ibc/4D7A6F2A7744B1534C984A21F9EDFFF8809FC71A9E9243FFB702073E7FCA513A',
          exponent: 0,
          aliases: ['0xbe9895146f7af43049ca1c1ae358b0541ea49704', 'cbeth-wei']
        }, {
          denom: 'cbeth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/4D7A6F2A7744B1534C984A21F9EDFFF8809FC71A9E9243FFB702073E7FCA513A',
      name: 'Coinbase Wrapped Staked ETH',
      display: 'cbeth',
      symbol: 'cbETH',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Coinbase'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xbe9895146f7af43049ca1c1ae358b0541ea49704'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'cbeth-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/cbeth-wei'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xbe9895146f7af43049ca1c1ae358b0541ea49704'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png',
          theme: {
            primaryColorHex: '#c9dbfc'
          }
        }]
    },
    {
      description: 'Rocket Pool is a decentralised Ethereum Proof of Stake pool.',
      denomUnits: [{
          denom: 'ibc/E610B83FD5544E00A8A1967A2EB3BEF25F1A8CFE8650FE247A8BD4ECA9DC9222',
          exponent: 0,
          aliases: ['0xae78736cd615f374d3085123a210448e74fc6393', 'reth-wei']
        }, {
          denom: 'reth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/E610B83FD5544E00A8A1967A2EB3BEF25F1A8CFE8650FE247A8BD4ECA9DC9222',
      name: 'Rocket Pool Ether',
      display: 'reth',
      symbol: 'rETH',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Rocket Pool'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xae78736cd615f374d3085123a210448e74fc6393'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'reth-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/reth-wei'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xae78736cd615f374d3085123a210448e74fc6393'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png',
          theme: {
            primaryColorHex: '#fba487'
          }
        }]
    },
    {
      description: 'sfrxETH is the version of frxETH which accrues staking yield. All profit generated from Frax Ether validators is distributed to sfrxETH holders. By exchanging frxETH for sfrxETH, one become\'s eligible for staking yield, which is redeemed upon converting sfrxETH back to frxETH.',
      denomUnits: [{
          denom: 'ibc/81F578C39006EB4B27FFFA9460954527910D73390991B379C03B18934D272F46',
          exponent: 0,
          aliases: ['0xac3e018457b222d93114458476f3e3416abbe38f', 'sfrxeth-wei']
        }, {
          denom: 'sfrxeth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/81F578C39006EB4B27FFFA9460954527910D73390991B379C03B18934D272F46',
      name: 'Staked Frax Ether',
      display: 'sfrxeth',
      symbol: 'sfrxETH',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Frax'
        },
        {
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x5e8422345238f34275888049021821e8e08caa1f'
          },
          provider: 'Frax'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xac3e018457b222d93114458476f3e3416abbe38f'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'sfrxeth-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/sfrxeth-wei'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xac3e018457b222d93114458476f3e3416abbe38f'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/B2BD584CD2A0A9CE53D4449667E26160C7D44A9C41AF50F602C201E5B3CCA46C',
          exponent: 0,
          aliases: ['0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0', 'wsteth-wei']
        }, {
          denom: 'wsteth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/B2BD584CD2A0A9CE53D4449667E26160C7D44A9C41AF50F602C201E5B3CCA46C',
      name: 'Wrapped Lido Staked Ether (Axelar)',
      display: 'wsteth',
      symbol: 'wstETH.eth.axl',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Lido'
        },
        {
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84'
          },
          provider: 'Lido'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'wsteth-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/wsteth-wei'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wstETH.axl.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wstETH.axl.svg'
        }, {
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'wsteth-wei'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
        }]
    },
    {
      description: 'The native token of Gitopia',
      denomUnits: [{
          denom: 'ibc/B1C1806A540B3E165A2D42222C59946FB85BA325596FC85662D7047649F419F3',
          exponent: 0,
          aliases: ['ulore']
        }, {
          denom: 'LORE',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/B1C1806A540B3E165A2D42222C59946FB85BA325596FC85662D7047649F419F3',
      name: 'Gitopia',
      display: 'LORE',
      symbol: 'LORE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'gitopia',
            baseDenom: 'ulore',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-781',
            path: 'transfer/channel-781/ulore'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.svg'
      },
      images: [{
          imageSync: {
            chainName: 'gitopia',
            baseDenom: 'ulore'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.svg',
          theme: {
            primaryColorHex: '#2c173c'
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/gitopia.png',
          theme: {
            primaryColorHex: '#2e154d'
          }
        }]
    },
    {
      description: 'Lion DAO is a community DAO that lives on the Terra blockchain with the mission to reactivate the LUNAtic community and showcase Terra protocols & tooling',
      denomUnits: [{
          denom: 'ibc/98BCD43F190C6960D0005BC46BB765C827403A361C9C03C2FF694150A30284B0',
          exponent: 0,
          aliases: ['cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv']
        }, {
          denom: 'roar',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/98BCD43F190C6960D0005BC46BB765C827403A361C9C03C2FF694150A30284B0',
      name: 'Lion DAO',
      display: 'roar',
      symbol: 'ROAR',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'terra2',
            baseDenom: 'cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channelId: 'channel-26'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-341',
            path: 'transfer/channel-341/cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png'
      },
      images: [{
          imageSync: {
            chainName: 'terra2',
            baseDenom: 'cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png',
          theme: {
            primaryColorHex: '#f3f313'
          }
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/02F196DA6FD0917DD5FEA249EE61880F4D941EE9059E7964C5C9B50AF103800F',
          exponent: 0,
          aliases: ['stuumee']
        }, {
          denom: 'stumee',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/02F196DA6FD0917DD5FEA249EE61880F4D941EE9059E7964C5C9B50AF103800F',
      name: 'Stride Staked UMEE',
      display: 'stumee',
      symbol: 'stUMEE',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'umee',
            baseDenom: 'uumee'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stuumee',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-326',
            path: 'transfer/channel-326/stuumee'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stride',
            baseDenom: 'stuumee'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.svg',
          theme: {
            primaryColorHex: '#fbd9e9'
          }
        }]
    },
    {
      denomUnits: [{
          denom: 'factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx',
          exponent: 0
        }, {
          denom: 'stibcx',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k',
      base: 'factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx',
      name: 'Staked IBCX',
      display: 'stibcx',
      symbol: 'stIBCX',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }]
    },
    {
      description: 'The native token of Nolus chain',
      denomUnits: [{
          denom: 'ibc/D9AFCECDD361D38302AA66EB3BAC23B95234832C51D12489DC451FA2B7C72782',
          exponent: 0,
          aliases: ['unls']
        }, {
          denom: 'nls',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/D9AFCECDD361D38302AA66EB3BAC23B95234832C51D12489DC451FA2B7C72782',
      name: 'Nolus',
      display: 'nls',
      symbol: 'NLS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'nolus',
            baseDenom: 'unls',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-783',
            path: 'transfer/channel-783/unls'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
      },
      images: [{
          imageSync: {
            chainName: 'nolus',
            baseDenom: 'unls'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg',
          theme: {
            primaryColorHex: '#fc542c'
          }
        }]
    },
    {
      description: 'Lion Cub DAO is a useless meme community DAO on Terra',
      denomUnits: [{
          denom: 'ibc/6F18EFEBF1688AA77F7EAC17065609494DC1BA12AFC78E9AEC832AF70A11BEF3',
          exponent: 0,
          aliases: ['cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t']
        }, {
          denom: 'cub',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/6F18EFEBF1688AA77F7EAC17065609494DC1BA12AFC78E9AEC832AF70A11BEF3',
      name: 'Lion Cub DAO',
      display: 'cub',
      symbol: 'CUB',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'terra2',
            baseDenom: 'cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channelId: 'channel-26'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-341',
            path: 'transfer/channel-341/cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png'
      },
      images: [{
          imageSync: {
            chainName: 'terra2',
            baseDenom: 'cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png',
          theme: {
            primaryColorHex: '#f3d343'
          }
        }]
    },
    {
      description: 'BLUE CUB DAO is a community DAO on Terra',
      denomUnits: [{
          denom: 'ibc/DA961FE314B009C38595FFE3AF41225D8894D663B8C3F6650DCB5B6F8435592E',
          exponent: 0,
          aliases: ['cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584']
        }, {
          denom: 'blue',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/DA961FE314B009C38595FFE3AF41225D8894D663B8C3F6650DCB5B6F8435592E',
      name: 'BLUE CUB DAO',
      display: 'blue',
      symbol: 'BLUE',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'terra2',
            baseDenom: 'cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584',
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channelId: 'channel-26'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-341',
            path: 'transfer/channel-341/cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png'
      },
      images: [{
          imageSync: {
            chainName: 'terra2',
            baseDenom: 'cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png',
          theme: {
            primaryColorHex: '#040404'
          }
        }]
    },
    {
      description: 'The native token of Neutron chain.',
      denomUnits: [{
          denom: 'ibc/126DA09104B71B164883842B769C0E9EC1486C0887D27A9999E395C2C8FB5682',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/126DA09104B71B164883842B769C0E9EC1486C0887D27A9999E395C2C8FB5682',
      name: 'Neutron',
      display: 'ntrn',
      symbol: 'NTRN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'untrn',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-874',
            path: 'transfer/channel-874/untrn'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
      },
      images: [{
          imageSync: {
            chainName: 'neutron',
            baseDenom: 'untrn'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg',
          theme: {
            primaryColorHex: '#040404',
            backgroundColorHex: '#000000',
            circle: true
          }
        }]
    },
    {
      description: 'An innovative DAO dedicated to housing the most vulnerable',
      denomUnits: [{
          denom: 'ibc/2F5C084037D951B24D100F15CC013A131DF786DCE1B1DBDC48F018A9B9A138DE',
          exponent: 0,
          aliases: ['cw20:juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss']
        }, {
          denom: 'casa',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/2F5C084037D951B24D100F15CC013A131DF786DCE1B1DBDC48F018A9B9A138DE',
      name: 'Casa',
      display: 'casa',
      symbol: 'CASA',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/casa.png'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/casa.png',
          theme: {
            primaryColorHex: '#04040c'
          }
        }]
    },
    {
      description: 'The native staking and governance token of Composable.',
      denomUnits: [{
          denom: 'ibc/56D7C03B8F6A07AD322EEE1BEF3AE996E09D1C1E34C27CF37E0D4A0AC5972516',
          exponent: 0,
          aliases: ['ppica']
        }, {
          denom: 'pica',
          exponent: 12
        }],
      typeAsset: 'ics20',
      base: 'ibc/56D7C03B8F6A07AD322EEE1BEF3AE996E09D1C1E34C27CF37E0D4A0AC5972516',
      name: 'Picasso',
      display: 'pica',
      symbol: 'PICA',
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chainName: 'picasso',
            baseDenom: 'ppica'
          },
          provider: 'Picasso'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'composable',
            baseDenom: 'ppica',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-1279',
            path: 'transfer/channel-1279/ppica'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
      },
      images: [{
          imageSync: {
            chainName: 'picasso',
            baseDenom: 'ppica'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
        }]
    },
    {
      description: 'The native fee, governance, staking, and bonding token of the Polkadot platform.',
      denomUnits: [{
          denom: 'ibc/6727B2F071643B3841BD535ECDD4ED9CAE52ABDD0DCD07C3630811A7A37B215C',
          exponent: 0,
          aliases: ['4', 'ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9']
        }, {
          denom: 'ksm',
          exponent: 12
        }],
      typeAsset: 'ics20',
      base: 'ibc/6727B2F071643B3841BD535ECDD4ED9CAE52ABDD0DCD07C3630811A7A37B215C',
      name: 'Kusama',
      display: 'ksm',
      symbol: 'KSM',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chainName: 'kusama',
            baseDenom: 'Planck'
          },
          provider: 'Kusama Parachain'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'picasso',
            baseDenom: '4',
            channelId: 'channel-17'
          },
          chain: {
            channelId: 'channel-2',
            path: 'transfer/channel-2/4'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'composable',
            baseDenom: 'ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-2/4'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
      },
      images: [{
          imageSync: {
            chainName: 'kusama',
            baseDenom: 'Planck'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
        }]
    },
    {
      description: 'The native fee, governance, staking, and bonding token of the Polkadot platform.',
      denomUnits: [{
          denom: 'ibc/6B2B19D874851F631FF0AF82C38A20D4B82F438C7A22F41EDA33568345397244',
          exponent: 0,
          aliases: ['79228162514264337593543950342', 'ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366']
        }, {
          denom: 'dot',
          exponent: 10
        }],
      typeAsset: 'ics20',
      base: 'ibc/6B2B19D874851F631FF0AF82C38A20D4B82F438C7A22F41EDA33568345397244',
      name: 'Polkadot (Picasso)',
      display: 'dot',
      symbol: 'DOT.pica',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chainName: 'polkadot',
            baseDenom: 'Planck'
          },
          provider: 'Polkadot Parachain'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'composablepolkadot',
            baseDenom: '79228162514264337593543950342',
            channelId: 'channel-15'
          },
          chain: {
            channelId: 'channel-15',
            path: 'transfer/channel-15/79228162514264337593543950342'
          }
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'picasso',
            baseDenom: '79228162514264337593543950342',
            channelId: 'channel-17'
          },
          chain: {
            channelId: 'channel-2',
            path: 'transfer/channel-2/transfer/channel-15/79228162514264337593543950342'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'composable',
            baseDenom: 'ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-2/transfer/channel-15/79228162514264337593543950342'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dot.pica.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dot.pica.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dot.pica.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dot.pica.png'
        }, {
          imageSync: {
            chainName: 'composable',
            baseDenom: 'ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
          theme: {
            primaryColorHex: '#e4047c'
          }
        }]
    },
    {
      description: 'The native token of Quasar',
      denomUnits: [{
          denom: 'ibc/1B708808D372E959CD4839C594960309283424C775F4A038AAEBE7F83A988477',
          exponent: 0,
          aliases: ['uqsr']
        }, {
          denom: 'qsr',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/1B708808D372E959CD4839C594960309283424C775F4A038AAEBE7F83A988477',
      name: 'Quasar',
      display: 'qsr',
      symbol: 'QSR.legacy',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'quasar',
            baseDenom: 'uqsr',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-688',
            path: 'transfer/channel-688/uqsr'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png'
      },
      images: [{
          imageSync: {
            chainName: 'quasar',
            baseDenom: 'uqsr'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png',
          theme: {
            primaryColorHex: '#a493e4'
          }
        }]
    },
    {
      description: 'The native token of Archway network',
      denomUnits: [
        {
          denom: 'ibc/23AB778D694C1ECFC59B91D8C399C115CC53B0BD1C61020D8E19519F002BDD85',
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
      typeAsset: 'ics20',
      base: 'ibc/23AB778D694C1ECFC59B91D8C399C115CC53B0BD1C61020D8E19519F002BDD85',
      name: 'Archway',
      display: 'arch',
      symbol: 'ARCH',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'archway',
            baseDenom: 'aarch',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-1429',
            path: 'transfer/channel-1429/aarch'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.svg'
      },
      images: [{
          imageSync: {
            chainName: 'archway',
            baseDenom: 'aarch'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.svg',
          theme: {
            primaryColorHex: '#fc4c04'
          }
        }]
    },
    {
      description: 'The native staking and governance token of Empower.',
      denomUnits: [{
          denom: 'ibc/DD3938D8131F41994C1F01F4EB5233DEE9A0A5B787545B9A07A321925655BF38',
          exponent: 0,
          aliases: ['umpwr']
        }, {
          denom: 'mpwr',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/DD3938D8131F41994C1F01F4EB5233DEE9A0A5B787545B9A07A321925655BF38',
      name: 'EmpowerChain',
      display: 'mpwr',
      symbol: 'MPWR',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'empowerchain',
            baseDenom: 'umpwr',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-1411',
            path: 'transfer/channel-1411/umpwr'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg'
      },
      images: [{
          imageSync: {
            chainName: 'empowerchain',
            baseDenom: 'umpwr'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg',
          theme: {
            primaryColorHex: '#00e33a',
            backgroundColorHex: '#00e33a',
            circle: true
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.png',
          theme: {
            primaryColorHex: '#00e33a',
            backgroundColorHex: '#00e33a',
            circle: false
          }
        }]
    },
    {
      description: 'A revolutionary DAO created to bring clean drinking water to men, women, and children worldwide. We hope you join us on our journey!',
      denomUnits: [{
          denom: 'ibc/AABCB14ACAFD53A5C455BAC01EA0CA5AE18714895846681A52BFF1E3B960B44E',
          exponent: 0,
          aliases: ['cw20:juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw']
        }, {
          denom: 'watr',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/AABCB14ACAFD53A5C455BAC01EA0CA5AE18714895846681A52BFF1E3B960B44E',
      name: 'WATR',
      display: 'watr',
      symbol: 'WATR',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/watr.png'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/watr.png',
          theme: {
            primaryColorHex: '#38b5c5'
          }
        }]
    },
    {
      description: 'The native utility token of the KYVE network.',
      denomUnits: [{
          denom: 'ibc/613BF0BF2F2146AE9941E923725745E931676B2C14E9768CD609FA0849B2AE13',
          exponent: 0,
          aliases: ['ukyve']
        }, {
          denom: 'kyve',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/613BF0BF2F2146AE9941E923725745E931676B2C14E9768CD609FA0849B2AE13',
      name: 'KYVE',
      display: 'kyve',
      symbol: 'KYVE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kyve',
            baseDenom: 'ukyve',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-767',
            path: 'transfer/channel-767/ukyve'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg'
      },
      images: [{
          imageSync: {
            chainName: 'kyve',
            baseDenom: 'ukyve'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg',
          theme: {
            primaryColorHex: '#335350'
          }
        }]
    },
    {
      description: 'Tether gives you the joint benefits of open blockchain technology and traditional currency by converting your cash into a stable digital currency equivalent.',
      denomUnits: [{
          denom: 'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB',
          exponent: 0,
          aliases: ['erc20/tether/usdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB',
      name: 'Tether USD (Kava)',
      display: 'usdt',
      symbol: 'USDT.kava',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Tether'
        },
        {
          type: 'additional-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Tether'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'kava',
            baseDenom: 'erc20/tether/usdt',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-143',
            path: 'transfer/channel-143/erc20/tether/usdt'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.kava.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.kava.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.kava.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.kava.png',
          theme: {
            primaryColorHex: '#049494'
          }
        }, {
          imageSync: {
            chainName: 'kava',
            baseDenom: 'erc20/tether/usdt'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true,
            primaryColorHex: '#009393',
            backgroundColorHex: '#009393'
          }
        }]
    },
    {
      description: 'ERIS liquid staked OSMO',
      denomUnits: [{
          denom: 'factory/osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9/ampOSMO',
          exponent: 0
        }, {
          denom: 'ampOSMO',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9',
      base: 'factory/osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9/ampOSMO',
      name: 'ERIS Amplified OSMO',
      display: 'ampOSMO',
      symbol: 'ampOSMO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/amposmo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/amposmo.png',
          theme: {
            primaryColorHex: '#cfdbf1'
          }
        }],
      socials: {
        website: 'https://www.erisprotocol.com/',
        twitter: 'https://twitter.com/eris_protocol'
      }
    },
    {
      description: 'The native staking token of Sei.',
      denomUnits: [{
          denom: 'ibc/71F11BC0AF8E526B80E44172EBA9D3F0A8E03950BB882325435691EBC9450B1D',
          exponent: 0,
          aliases: ['usei']
        }, {
          denom: 'sei',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/71F11BC0AF8E526B80E44172EBA9D3F0A8E03950BB882325435691EBC9450B1D',
      name: 'Sei',
      display: 'sei',
      symbol: 'SEI',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'sei',
            baseDenom: 'usei',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-782',
            path: 'transfer/channel-782/usei'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
      },
      images: [{
          imageSync: {
            chainName: 'sei',
            baseDenom: 'usei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg',
          theme: {
            primaryColorHex: '#9c1c1c'
          }
        }]
    },
    {
      description: 'Quicksilver Liquid Staked SOMM',
      denomUnits: [{
          denom: 'ibc/EAF76AD1EEF7B16D167D87711FB26ABE881AC7D9F7E6D0CF313D5FA530417208',
          exponent: 0,
          aliases: ['uqsomm']
        }, {
          denom: 'qsomm',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/EAF76AD1EEF7B16D167D87711FB26ABE881AC7D9F7E6D0CF313D5FA530417208',
      name: 'Quicksilver Liquid Staked SOMM',
      display: 'qsomm',
      symbol: 'qSOMM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'sommelier',
            baseDenom: 'usomm'
          },
          provider: 'Quicksilver'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'quicksilver',
            baseDenom: 'uqsomm',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-522',
            path: 'transfer/channel-522/uqsomm'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.svg'
      },
      images: [{
          imageSync: {
            chainName: 'quicksilver',
            baseDenom: 'uqsomm'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.svg',
          theme: {
            primaryColorHex: '#fc944c'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Passage chain.',
      denomUnits: [{
          denom: 'ibc/208B2F137CDE510B44C41947C045CFDC27F996A9D990EA64460BDD5B3DBEB2ED',
          exponent: 0,
          aliases: ['upasg']
        }, {
          denom: 'pasg',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/208B2F137CDE510B44C41947C045CFDC27F996A9D990EA64460BDD5B3DBEB2ED',
      name: 'Passage',
      display: 'pasg',
      symbol: 'PASG',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'passage',
            baseDenom: 'upasg',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-2494',
            path: 'transfer/channel-2494/upasg'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png'
      },
      images: [{
          imageSync: {
            chainName: 'passage',
            baseDenom: 'upasg'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png',
          theme: {
            primaryColorHex: '#05050c'
          }
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/5A0060579D24FBE5268BEA74C3281E7FE533D361C41A99307B4998FEC611E46B',
          exponent: 0,
          aliases: ['stusomm']
        }, {
          denom: 'stsomm',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/5A0060579D24FBE5268BEA74C3281E7FE533D361C41A99307B4998FEC611E46B',
      name: 'Stride Staked SOMM',
      display: 'stsomm',
      symbol: 'stSOMM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'sommelier',
            baseDenom: 'usomm'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stusomm',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-326',
            path: 'transfer/channel-326/stusomm'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stride',
            baseDenom: 'stusomm'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }]
    },
    {
      description: 'Solana (SOL) is the native asset of the Solana blockchain.',
      denomUnits: [{
          denom: 'ibc/1E43D59E565D41FB4E54CA639B838FFD5BCFC20003D330A56CB1396231AA1CBA',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA']
        }, {
          denom: 'wormhole/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA/8',
          exponent: 8,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/1E43D59E565D41FB4E54CA639B838FFD5BCFC20003D330A56CB1396231AA1CBA',
      name: 'Solana (Wormhole)',
      display: 'wormhole/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA/8',
      symbol: 'SOL.wh',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'Lamport'
          },
          provider: 'Solana'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'So11111111111111111111111111111111111111112'
          },
          provider: 'Wormhole'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'gateway',
            baseDenom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sol.wh.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sol.wh.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sol.wh.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sol.wh.png'
        }, {
          imageSync: {
            chainName: 'gateway',
            baseDenom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.png',
          theme: {
            circle: true,
            backgroundColorHex: '#000000'
          }
        }]
    },
    {
      description: 'The Official Bonk Inu token',
      denomUnits: [{
          denom: 'ibc/CA3733CB0071F480FAE8EF0D9C3D47A49C6589144620A642BBE0D59A293D110E',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR']
        }, {
          denom: 'wormhole/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR/5',
          exponent: 5,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/CA3733CB0071F480FAE8EF0D9C3D47A49C6589144620A642BBE0D59A293D110E',
      name: 'Bonk',
      display: 'wormhole/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR/5',
      symbol: 'BONK',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263'
          },
          provider: 'Wormhole'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'gateway',
            baseDenom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bonk.png'
      },
      images: [{
          imageSync: {
            chainName: 'solana',
            baseDenom: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bonk.png',
          theme: {
            primaryColorHex: '#ee950a'
          }
        }]
    },
    {
      description: 'Tether USD (Wormhole), USDT, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi',
      denomUnits: [{
          denom: 'ibc/2108F2D81CBE328F371AD0CEF56691B18A86E08C3651504E42487D9EE92DDE9C',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi']
        }, {
          denom: 'wormhole/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi/6',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/2108F2D81CBE328F371AD0CEF56691B18A86E08C3651504E42487D9EE92DDE9C',
      name: 'Tether USD (Ethereum via Wormhole)',
      display: 'wormhole/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi/6',
      symbol: 'USDT.eth.wh',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Tether'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Wormhole'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'gateway',
            baseDenom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.wh.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.wh.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.wh.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.wh.png',
          theme: {
            primaryColorHex: '#049393'
          }
        }, {
          imageSync: {
            chainName: 'gateway',
            baseDenom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true,
            primaryColorHex: '#009393',
            backgroundColorHex: '#009393'
          }
        }]
    },
    {
      description: 'Sui’s native asset is called SUI.',
      denomUnits: [{
          denom: 'ibc/B1C287C2701774522570010EEBCD864BCB7AB714711B3AA218699FDD75E832F5',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh']
        }, {
          denom: 'wormhole/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh/8',
          exponent: 8,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/B1C287C2701774522570010EEBCD864BCB7AB714711B3AA218699FDD75E832F5',
      name: 'Sui',
      display: 'wormhole/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh/8',
      symbol: 'SUI',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'sui',
            baseDenom: '0x2::sui::SUI'
          },
          provider: 'Wormhole'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'gateway',
            baseDenom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/sui/images/sui.svg'
      },
      images: [{
          imageSync: {
            chainName: 'sui',
            baseDenom: '0x2::sui::SUI'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/sui/images/sui.svg'
        }]
    },
    {
      description: 'Aptos token (APT) is the Aptos blockchain native token used for paying network and transaction fees.',
      denomUnits: [{
          denom: 'ibc/A4D176906C1646949574B48C1928D475F2DF56DE0AC04E1C99B08F90BC21ABDE',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r']
        }, {
          denom: 'wormhole/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r/8',
          exponent: 8,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/A4D176906C1646949574B48C1928D475F2DF56DE0AC04E1C99B08F90BC21ABDE',
      name: 'Aptos Coin',
      display: 'wormhole/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r/8',
      symbol: 'APT',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'aptos',
            baseDenom: '0x1::aptos_coin::AptosCoin'
          },
          provider: 'Wormhole'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'gateway',
            baseDenom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/apt-dm.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/apt-dm.svg',
          theme: {
            darkMode: true
          }
        }, {
          imageSync: {
            chainName: 'aptos',
            baseDenom: '0x1::aptos_coin::AptosCoin'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/aptos.svg'
        }]
    },
    {
      description: 'MantaDAO Governance Token',
      denomUnits: [{
          denom: 'ibc/51D893F870B7675E507E91DA8DB0B22EA66333207E4F5C0708757F08EE059B0B',
          exponent: 0,
          aliases: ['factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta']
        }, {
          denom: 'mnta',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/51D893F870B7675E507E91DA8DB0B22EA66333207E4F5C0708757F08EE059B0B',
      name: 'MantaDAO',
      display: 'mnta',
      symbol: 'MNTA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kujira',
            baseDenom: 'factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-259',
            path: 'transfer/channel-259/factory:kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7:umnta'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.svg'
      },
      images: [{
          imageSync: {
            chainName: 'kujira',
            baseDenom: 'factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.svg',
          theme: {
            primaryColorHex: '#0c141c'
          }
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/D69F6D787EC649F4E998161A9F0646F4C2DCC64748A2AB982F14CAFBA7CC0EC9',
          exponent: 0,
          aliases: ['factory/juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e/DGL']
        }, {
          denom: 'dgl',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/D69F6D787EC649F4E998161A9F0646F4C2DCC64748A2AB982F14CAFBA7CC0EC9',
      name: 'Licorice',
      display: 'dgl',
      symbol: 'DGL',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'factory/juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e/DGL',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-42',
            path: 'transfer/channel-42/factory/juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e/DGL'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dgl.png'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'factory/juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e/DGL'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dgl.png',
          theme: {
            primaryColorHex: '#dfe0e0'
          }
        }]
    },
    {
      description: 'USD Coin (Wormhole), USDC, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt',
      denomUnits: [{
          denom: 'ibc/6B99DB46AA9FF47162148C1726866919E44A6A5E0274B90912FD17E19A337695',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt']
        }, {
          denom: 'wormhole/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt/6',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/6B99DB46AA9FF47162148C1726866919E44A6A5E0274B90912FD17E19A337695',
      name: 'USDC (Ethereum via Wormhole)',
      display: 'wormhole/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt/6',
      symbol: 'USDC.eth.wh',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Wormhole'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'gateway',
            baseDenom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.svg'
        }, {
          imageSync: {
            chainName: 'gateway',
            baseDenom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          theme: {
            circle: true,
            primaryColorHex: '#2775CA'
          }
        }]
    },
    {
      description: 'Wrapped Ether (Wormhole), WETH, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp',
      denomUnits: [{
          denom: 'ibc/62F82550D0B96522361C89B0DA1119DE262FBDFB25E5502BC5101B5C0D0DBAAC',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp']
        }, {
          denom: 'wormhole/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp/8',
          exponent: 8,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/62F82550D0B96522361C89B0DA1119DE262FBDFB25E5502BC5101B5C0D0DBAAC',
      name: 'Ethereum (Wormhole)',
      display: 'wormhole/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp/8',
      symbol: 'ETH.wh',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Ethereum'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          provider: 'Wormhole'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'gateway',
            baseDenom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/weth.hole.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/weth.hole.svg'
        }, {
          imageSync: {
            chainName: 'gateway',
            baseDenom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg',
          theme: {
            primaryColorHex: '#303030'
          }
        }]
    },
    {
      description: 'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      denomUnits: [{
          denom: 'ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4',
          exponent: 0,
          aliases: ['microusdc', 'uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4',
      name: 'USDC',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'additional-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Circle'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'uusdc',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-750',
            path: 'transfer/channel-750/uusdc'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          theme: {
            circle: true,
            primaryColorHex: '#2775CA'
          }
        }]
    },
    {
      description: 'Maximize ETH yield through leveraged staking across Aave, Compound and Morpho and liquidity provision of ETH liquid staking tokens on Uniswap V3.',
      denomUnits: [{
          denom: 'ibc/FBB3FEF80ED2344D821D4F95C31DBFD33E4E31D5324CAD94EF756E67B749F668',
          exponent: 0,
          aliases: ['0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec', 'yieldeth-wei']
        }, {
          denom: 'YieldETH',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/FBB3FEF80ED2344D821D4F95C31DBFD33E4E31D5324CAD94EF756E67B749F668',
      name: 'Real Yield ETH',
      display: 'YieldETH',
      symbol: 'YieldETH',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Seven Seas & DeFine Logic Labs'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'yieldeth-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/yieldeth-wei'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg',
          theme: {
            primaryColorHex: '#14448c'
          }
        }]
    },
    {
      description: 'The native staking token of XPLA.',
      denomUnits: [{
          denom: 'ibc/95C9B5870F95E21A242E6AF9ADCB1F212EE4A8855087226C36FBE43FC41A77B8',
          exponent: 0,
          aliases: ['axpla']
        }, {
          denom: 'xpla',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/95C9B5870F95E21A242E6AF9ADCB1F212EE4A8855087226C36FBE43FC41A77B8',
      name: 'XPLA',
      display: 'xpla',
      symbol: 'XPLA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'xpla',
            baseDenom: 'axpla',
            channelId: 'channel-9'
          },
          chain: {
            channelId: 'channel-1634',
            path: 'transfer/channel-1634/axpla'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg'
      },
      images: [{
          imageSync: {
            chainName: 'xpla',
            baseDenom: 'axpla'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg',
          theme: {
            primaryColorHex: '#04b4fc'
          }
        }]
    },
    {
      description: 'OIN Token ($OIN) is a groundbreaking digital asset developed on the $SEI Blockchain. It transcends being merely a cryptocurrency; $OIN stands as a robust store of value, symbolizing the future of decentralized finance and its potential to reshape the crypto landscape.',
      denomUnits: [{
          denom: 'ibc/98B3DBF1FA79C4C14CC5F08F62ACD5498560FCB515F677526FD200D54EA048B6',
          exponent: 0,
          aliases: ['factory/sei1thgp6wamxwqt7rthfkeehktmq0ujh5kspluw6w/OIN']
        }, {
          denom: 'oin',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/98B3DBF1FA79C4C14CC5F08F62ACD5498560FCB515F677526FD200D54EA048B6',
      name: 'OIN STORE OF VALUE',
      display: 'oin',
      symbol: 'OIN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'sei',
            baseDenom: 'factory/sei1thgp6wamxwqt7rthfkeehktmq0ujh5kspluw6w/OIN',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-782',
            path: 'transfer/channel-782/factory/sei1thgp6wamxwqt7rthfkeehktmq0ujh5kspluw6w/OIN'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oin.png'
      },
      images: [{
          imageSync: {
            chainName: 'sei',
            baseDenom: 'factory/sei1thgp6wamxwqt7rthfkeehktmq0ujh5kspluw6w/OIN'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oin.png',
          theme: {
            primaryColorHex: '#6cdbac'
          }
        }]
    },
    {
      description: 'The token of Neokingdom DAO.',
      denomUnits: [{
          denom: 'ibc/DEE262653B9DE39BCEF0493D47E0DFC4FE62F7F046CF38B9FDEFEBE98D149A71',
          exponent: 0,
          aliases: ['erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9']
        }, {
          denom: 'neok',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/DEE262653B9DE39BCEF0493D47E0DFC4FE62F7F046CF38B9FDEFEBE98D149A71',
      name: 'Neokingdom DAO',
      display: 'neok',
      symbol: 'NEOK',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'evmos',
            baseDenom: 'erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-204',
            path: 'transfer/channel-204/erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg'
      },
      images: [{
          imageSync: {
            chainName: 'evmos',
            baseDenom: 'erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg',
          theme: {
            primaryColorHex: '#7f0f70'
          }
        }]
    },
    {
      description: 'The native currency of the Realio Network.',
      denomUnits: [{
          denom: 'ibc/1CDF9C7D073DD59ED06F15DB08CC0901F2A24759BE70463570E8896F9A444ADF',
          exponent: 0,
          aliases: ['ario']
        }, {
          denom: 'rio',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/1CDF9C7D073DD59ED06F15DB08CC0901F2A24759BE70463570E8896F9A444ADF',
      name: 'Realio Network',
      display: 'rio',
      symbol: 'RIO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'realio',
            baseDenom: 'ario',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-1424',
            path: 'transfer/channel-1424/ario'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg'
      },
      images: [{
          imageSync: {
            chainName: 'realio',
            baseDenom: 'ario'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg',
          theme: {
            primaryColorHex: '#000000',
            backgroundColorHex: '#000000',
            circle: true
          }
        }]
    },
    {
      description: 'Membrane\'s CDP-style stablecoin called CDT',
      denomUnits: [{
          denom: 'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt',
          exponent: 0
        }, {
          denom: 'cdt',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt',
      name: 'CDT Stablecoin',
      display: 'cdt',
      symbol: 'CDT',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CDT.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CDT.svg'
        }],
      coingeckoId: 'collateralized-debt-token'
    },
    {
      description: 'Membrane\'s protocol token',
      denomUnits: [{
          denom: 'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn',
          exponent: 0
        }, {
          denom: 'mbrn',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn',
      name: 'Membrane',
      display: 'mbrn',
      symbol: 'MBRN',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/MBRN.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/MBRN.svg'
        }],
      coingeckoId: 'membrane'
    },
    {
      description: 'The native token of SGE Network',
      denomUnits: [{
          denom: 'ibc/A1830DECC0B742F0B2044FF74BE727B5CF92C9A28A9235C3BACE4D24A23504FA',
          exponent: 0,
          aliases: ['usge']
        }, {
          denom: 'sge',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/A1830DECC0B742F0B2044FF74BE727B5CF92C9A28A9235C3BACE4D24A23504FA',
      name: 'SGE',
      display: 'sge',
      symbol: 'SGE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'sge',
            baseDenom: 'usge',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-5485',
            path: 'transfer/channel-5485/usge'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg'
      },
      images: [{
          imageSync: {
            chainName: 'sge',
            baseDenom: 'usge'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg',
          theme: {
            primaryColorHex: '#C0A15B',
            backgroundColorHex: '#00000000',
            circle: false
          }
        }]
    },
    {
      description: 'The native staking and governance token of the StaFi Hub.',
      denomUnits: [{
          denom: 'ibc/01D2F0C4739C871BFBEE7E786709E6904A55559DC1483DD92ED392EF12247862',
          exponent: 0,
          aliases: ['ufis']
        }, {
          denom: 'fis',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/01D2F0C4739C871BFBEE7E786709E6904A55559DC1483DD92ED392EF12247862',
      name: 'StaFi Hub',
      display: 'fis',
      symbol: 'FIS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'stafihub',
            baseDenom: 'ufis',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-5413',
            path: 'transfer/channel-5413/ufis'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stafihub',
            baseDenom: 'ufis'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
        }]
    },
    {
      description: 'A liquid staking representation of staked ATOMs',
      denomUnits: [{
          denom: 'ibc/B66CE615C600ED0A8B5AF425ECFE0D57BE2377587F66C45934A76886F34DC9B7',
          exponent: 0,
          aliases: ['uratom']
        }, {
          denom: 'ratom',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/B66CE615C600ED0A8B5AF425ECFE0D57BE2377587F66C45934A76886F34DC9B7',
      name: 'rATOM',
      display: 'ratom',
      symbol: 'rATOM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom'
          },
          provider: 'StaFiHub'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'stafihub',
            baseDenom: 'uratom',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-5413',
            path: 'transfer/channel-5413/uratom'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/ratom.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stafihub',
            baseDenom: 'uratom'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/ratom.svg'
        }]
    },
    {
      description: 'The native token of ohhNFT.',
      denomUnits: [{
          denom: 'ibc/CFF40564FDA3E958D9904B8B479124987901168494655D9CC6B7C0EC0416020B',
          exponent: 0,
          aliases: ['factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust']
        }, {
          denom: 'strdst',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/CFF40564FDA3E958D9904B8B479124987901168494655D9CC6B7C0EC0416020B',
      name: 'Stardust STRDST',
      display: 'strdst',
      symbol: 'STRDST',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'stargaze',
            baseDenom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-75',
            path: 'transfer/channel-75/factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stargaze',
            baseDenom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.svg',
          theme: {
            primaryColorHex: '#c9720c'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Theta testnet version of the Dora Vota.',
      denomUnits: [{
          denom: 'ibc/672406ADE4EDFD8C5EA7A0D0DD0C37E431DA7BD8393A15CD2CFDE3364917EB2A',
          exponent: 0,
          aliases: ['peaka']
        }, {
          denom: 'DORA',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/672406ADE4EDFD8C5EA7A0D0DD0C37E431DA7BD8393A15CD2CFDE3364917EB2A',
      name: 'Dora Vota',
      display: 'DORA',
      symbol: 'DORA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'doravota',
            baseDenom: 'peaka',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-2694',
            path: 'transfer/channel-2694/peaka'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg'
      },
      images: [{
          imageSync: {
            chainName: 'doravota',
            baseDenom: 'peaka'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg'
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/doravota.png',
          theme: {
            primaryColorHex: '#fba214'
          }
        }]
    },
    {
      description: 'The native token of Coreum',
      denomUnits: [{
          denom: 'ibc/F3166F4D31D6BA1EC6C9F5536F5DDDD4CC93DBA430F7419E7CDC41C497944A65',
          exponent: 0,
          aliases: ['ucore']
        }, {
          denom: 'core',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/F3166F4D31D6BA1EC6C9F5536F5DDDD4CC93DBA430F7419E7CDC41C497944A65',
      name: 'Coreum',
      display: 'core',
      symbol: 'COREUM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'coreum',
            baseDenom: 'ucore',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-2188',
            path: 'transfer/channel-2188/ucore'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
      },
      images: [{
          imageSync: {
            chainName: 'coreum',
            baseDenom: 'ucore'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg',
          theme: {
            primaryColorHex: '#24d494'
          }
        }],
      keywords: [
        'dex',
        'staking',
        'wasm',
        'assets',
        'nft',
        'XRPL'
      ]
    },
    {
      description: 'The native token of the Celestia blockchain.',
      denomUnits: [{
          denom: 'ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'celestia',
            baseDenom: 'utia',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-6994',
            path: 'transfer/channel-6994/utia'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      },
      images: [{
          imageSync: {
            chainName: 'celestia',
            baseDenom: 'utia'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
          theme: {
            primaryColorHex: '#7c2cfb'
          }
        }]
    },
    {
      description: 'DYDX is a decentralized trading platform focused on derivatives and perpetual contracts, offering a secure and efficient trading experience without intermediaries.',
      extendedDescription: 'DYDX is a leading decentralized trading platform specializing in derivatives and perpetual contracts. It enables users to trade with leverage, providing a sophisticated and efficient trading environment without intermediaries. Built on the Ethereum blockchain, DYDX uses smart contracts to ensure transaction security and transparency, giving users full control over their funds and trades.\n\nThe DYDX platform\'s native token, DYDX, is integral to its ecosystem, used for governance, staking, and fee discounts, incentivizing active participation. DYDX offers a wide range of trading pairs and supports advanced trading features like margin trading and lending. Combining the benefits of decentralized finance with traditional trading platform functionality, DYDX is paving the way for a more open and inclusive financial system.',
      denomUnits: [{
          denom: 'ibc/831F0B1BBB1D08A2B75311892876D71565478C532967545476DF4C2D7492E48C',
          exponent: 0,
          aliases: ['adydx']
        }, {
          denom: 'dydx',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/831F0B1BBB1D08A2B75311892876D71565478C532967545476DF4C2D7492E48C',
      name: 'dYdX Protocol',
      display: 'dydx',
      symbol: 'DYDX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'dydx',
            baseDenom: 'adydx',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-6787',
            path: 'transfer/channel-6787/adydx'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg',
          theme: {
            circle: true
          }
        }, {
          imageSync: {
            chainName: 'dydx',
            baseDenom: 'adydx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg',
          theme: {
            primaryColorHex: '#21212f'
          }
        }]
    },
    {
      description: 'The native staking token of the Function X',
      denomUnits: [{
          denom: 'ibc/2B30802A0B03F91E4E16D6175C9B70F2911377C1CAE9E50FF011C821465463F9',
          exponent: 0,
          aliases: ['FX']
        }, {
          denom: 'WFX',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/2B30802A0B03F91E4E16D6175C9B70F2911377C1CAE9E50FF011C821465463F9',
      name: 'f(x)Core',
      display: 'WFX',
      symbol: 'FX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'fxcore',
            baseDenom: 'FX',
            channelId: 'channel-19'
          },
          chain: {
            channelId: 'channel-2716',
            path: 'transfer/channel-2716/FX'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
      },
      images: [{
          imageSync: {
            chainName: 'fxcore',
            baseDenom: 'FX'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg',
          theme: {
            primaryColorHex: '#1c1c1c'
          }
        }]
    },
    {
      description: 'Bitcoin. On Cosmos.',
      denomUnits: [{
          denom: 'ibc/75345531D87BD90BF108BE7240BD721CB2CB0A1F16D4EBA71B09EC3C43E15C8F',
          exponent: 0,
          aliases: ['usat']
        }, {
          denom: 'nbtc',
          exponent: 14
        }],
      typeAsset: 'ics20',
      base: 'ibc/75345531D87BD90BF108BE7240BD721CB2CB0A1F16D4EBA71B09EC3C43E15C8F',
      name: 'Nomic Bitcoin',
      display: 'nbtc',
      symbol: 'nBTC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'Nomic'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'nomic',
            baseDenom: 'usat',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-6897',
            path: 'transfer/channel-6897/usat'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'nomic',
            baseDenom: 'usat'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg',
          theme: {
            primaryColorHex: '#8436e6'
          }
        }]
    },
    {
      description: 'The native token of Nois',
      denomUnits: [{
          denom: 'ibc/6928AFA9EA721938FED13B051F9DBF1272B16393D20C49EA5E4901BB76D94A90',
          exponent: 0,
          aliases: ['unois']
        }, {
          denom: 'nois',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/6928AFA9EA721938FED13B051F9DBF1272B16393D20C49EA5E4901BB76D94A90',
      name: 'Nois',
      display: 'nois',
      symbol: 'NOIS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'nois',
            baseDenom: 'unois',
            channelId: 'channel-37'
          },
          chain: {
            channelId: 'channel-8277',
            path: 'transfer/channel-8277/unois'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
      },
      images: [{
          imageSync: {
            chainName: 'nois',
            baseDenom: 'unois'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg',
          theme: {
            primaryColorHex: '#0c0c14'
          }
        }],
      keywords: [
        'nois',
        'randomness',
        'drand',
        'wasm'
      ]
    },
    {
      description: 'Margined Power Token sqOSMO',
      denomUnits: [{
          denom: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/squosmo',
          exponent: 0
        }, {
          denom: 'sqosmo',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/squosmo',
      name: 'OSMO Squared',
      display: 'sqosmo',
      symbol: 'sqOSMO',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqosmo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqosmo.svg'
        }]
    },
    {
      description: 'The Revenue & Governance token of Unstake.fi',
      denomUnits: [{
          denom: 'ibc/F74225B0AFD2F675AF56E9BE3F235486BCDE5C5E09AA88A97AFD2E052ABFE04C',
          exponent: 0,
          aliases: ['factory/kujira1aaudpfr9y23lt9d45hrmskphpdfaq9ajxd3ukh/unstk']
        }, {
          denom: 'nstk',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/F74225B0AFD2F675AF56E9BE3F235486BCDE5C5E09AA88A97AFD2E052ABFE04C',
      name: 'Unstake Fi',
      display: 'nstk',
      symbol: 'NSTK',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kujira',
            baseDenom: 'factory/kujira1aaudpfr9y23lt9d45hrmskphpdfaq9ajxd3ukh/unstk',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-259',
            path: 'transfer/channel-259/factory:kujira1aaudpfr9y23lt9d45hrmskphpdfaq9ajxd3ukh:unstk'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nstk.svg'
      },
      images: [{
          imageSync: {
            chainName: 'kujira',
            baseDenom: 'factory/kujira1aaudpfr9y23lt9d45hrmskphpdfaq9ajxd3ukh/unstk'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nstk.svg'
        }]
    },
    {
      description: 'ohhNFT LP token.',
      denomUnits: [{
          denom: 'ibc/71DAA4CAFA4FE2F9803ABA0696BA5FC0EFC14305A2EA8B4E01880DB851B1EC02',
          exponent: 0,
          aliases: ['factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH']
        }, {
          denom: 'BRNCH',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/71DAA4CAFA4FE2F9803ABA0696BA5FC0EFC14305A2EA8B4E01880DB851B1EC02',
      name: 'Branch',
      display: 'BRNCH',
      symbol: 'BRNCH',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'stargaze',
            baseDenom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-75',
            path: 'transfer/channel-75/factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stargaze',
            baseDenom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.svg',
          theme: {
            primaryColorHex: '#70372a'
          }
        }]
    },
    {
      description: 'wstETH is a wrapped version of stETH. As some DeFi protocols require a constant balance mechanism for tokens, wstETH keeps your balance of stETH fixed and uses an underlying share system to reflect your earned staking rewards.',
      denomUnits: [{
          denom: 'ibc/2F21E6D4271DE3F561F20A02CD541DAF7405B1E9CB3B9B07E3C2AC7D8A4338A5',
          exponent: 0,
          aliases: ['factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH']
        }, {
          denom: 'wstETH',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/2F21E6D4271DE3F561F20A02CD541DAF7405B1E9CB3B9B07E3C2AC7D8A4338A5',
      name: 'Wrapped Lido Staked Ether',
      display: 'wstETH',
      symbol: 'wstETH',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Lido'
        },
        {
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84'
          },
          provider: 'Lido'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'
          },
          provider: 'Lido wstETH Cosmos Bridge'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-874',
            path: 'transfer/channel-874/factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
        }]
    },
    {
      description: 'Margined Power Token sqATOM',
      denomUnits: [{
          denom: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqatom',
          exponent: 0
        }, {
          denom: 'sqatom',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqatom',
      name: 'ATOM Squared',
      display: 'sqatom',
      symbol: 'sqATOM',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqatom.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqatom.svg'
        }]
    },
    {
      description: 'Margined Power Token sqBTC',
      denomUnits: [{
          denom: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqbtc',
          exponent: 0
        }, {
          denom: 'sqbtc',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqbtc',
      name: 'BTC Squared',
      display: 'sqbtc',
      symbol: 'sqBTC',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqbtc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqbtc.svg'
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'QWOYN is the native governance token for Qwoyn Network',
      denomUnits: [{
          denom: 'ibc/09FAF1E04435E14C68DE7AB0D03C521C92975C792DB12B2EA390BAA2E06B3F3D',
          exponent: 0,
          aliases: ['uqwoyn']
        }, {
          denom: 'qwoyn',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/09FAF1E04435E14C68DE7AB0D03C521C92975C792DB12B2EA390BAA2E06B3F3D',
      name: 'Qwoyn',
      display: 'qwoyn',
      symbol: 'QWOYN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'qwoyn',
            baseDenom: 'uqwoyn',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-880',
            path: 'transfer/channel-880/uqwoyn'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png'
      },
      images: [{
          imageSync: {
            chainName: 'qwoyn',
            baseDenom: 'uqwoyn'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png',
          theme: {
            primaryColorHex: '#04e4fc'
          }
        }],
      keywords: ['gaming']
    },
    {
      description: 'The liquid staking token of Bostrom',
      denomUnits: [{
          denom: 'ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20',
          exponent: 0,
          aliases: ['hydrogen']
        }],
      typeAsset: 'ics20',
      base: 'ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20',
      name: 'Bostrom Hydrogen',
      display: 'ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20',
      symbol: 'HYDROGEN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'bostrom',
            baseDenom: 'hydrogen',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-95',
            path: 'transfer/channel-95/hydrogen'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.svg'
      },
      images: [{
          imageSync: {
            chainName: 'bostrom',
            baseDenom: 'hydrogen'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.svg',
          theme: {
            primaryColorHex: '#ffffff'
          }
        }]
    },
    {
      description: 'The staking token of Cyber',
      denomUnits: [{
          denom: 'ibc/BCDB35B7390806F35E716D275E1E017999F8281A81B6F128F087EF34D1DFA761',
          exponent: 0,
          aliases: ['tocyb']
        }],
      typeAsset: 'ics20',
      base: 'ibc/BCDB35B7390806F35E716D275E1E017999F8281A81B6F128F087EF34D1DFA761',
      name: 'Bostrom Tocyb',
      display: 'ibc/BCDB35B7390806F35E716D275E1E017999F8281A81B6F128F087EF34D1DFA761',
      symbol: 'TOCYB',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'bostrom',
            baseDenom: 'tocyb',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-95',
            path: 'transfer/channel-95/tocyb'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.svg'
      },
      images: [{
          imageSync: {
            chainName: 'bostrom',
            baseDenom: 'tocyb'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.svg',
          theme: {
            primaryColorHex: '#1e8fa9'
          }
        }]
    },
    {
      description: 'The resource token of Bostrom',
      denomUnits: [{
          denom: 'ibc/D3A1900B2B520E45608B5671ADA461E1109628E89B4289099557C6D3996F7DAA',
          exponent: 0,
          aliases: ['millivolt']
        }, {
          denom: 'volt',
          exponent: 3,
          aliases: ['volt']
        }],
      typeAsset: 'ics20',
      base: 'ibc/D3A1900B2B520E45608B5671ADA461E1109628E89B4289099557C6D3996F7DAA',
      name: 'Bostrom Volt',
      display: 'volt',
      symbol: 'V',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'bostrom',
            baseDenom: 'millivolt',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-95',
            path: 'transfer/channel-95/millivolt'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.svg'
      },
      images: [{
          imageSync: {
            chainName: 'bostrom',
            baseDenom: 'millivolt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.svg',
          theme: {
            primaryColorHex: '#fba809'
          }
        }]
    },
    {
      description: 'The resource token of Bostrom',
      denomUnits: [{
          denom: 'ibc/020F5162B7BC40656FC5432622647091F00D53E82EE8D21757B43D3282F25424',
          exponent: 0,
          aliases: ['milliampere']
        }, {
          denom: 'ampere',
          exponent: 3,
          aliases: ['ampere']
        }],
      typeAsset: 'ics20',
      base: 'ibc/020F5162B7BC40656FC5432622647091F00D53E82EE8D21757B43D3282F25424',
      name: 'Bostrom Ampere',
      display: 'ampere',
      symbol: 'A',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'bostrom',
            baseDenom: 'milliampere',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-95',
            path: 'transfer/channel-95/milliampere'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.svg'
      },
      images: [{
          imageSync: {
            chainName: 'bostrom',
            baseDenom: 'milliampere'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.svg',
          theme: {
            primaryColorHex: '#f4ecce'
          }
        }]
    },
    {
      description: 'The native token of SOURCE Chain',
      denomUnits: [{
          denom: 'ibc/E7905742CE2EA4EA5D592527DC89220C59B617DE803939FE7293805A64B484D7',
          exponent: 0,
          aliases: ['usource']
        }, {
          denom: 'source',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/E7905742CE2EA4EA5D592527DC89220C59B617DE803939FE7293805A64B484D7',
      name: 'Source',
      display: 'source',
      symbol: 'SOURCE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'source',
            baseDenom: 'usource',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-8945',
            path: 'transfer/channel-8945/usource'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg'
      },
      images: [{
          imageSync: {
            chainName: 'source',
            baseDenom: 'usource'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg',
          theme: {
            primaryColorHex: '#39a5fc'
          }
        }]
    },
    {
      description: 'Pyth is a protocol that allows market participants to publish pricing information on-chain for others to use. The protocol is an interaction between three parties:\n-Publishers submit pricing information to Pyth\'s oracle program. Pyth has multiple data publishers for every product to improve the accuracy and robustness of the system.\n-Pyth\'s oracle program combines publishers\' data to produce a single aggregate price and confidence interval.\nConsumers read the price information produced by the oracle program.\n\nPyth\'s oracle program runs simultaneously on both Solana mainnet and Pythnet. Each instance of the program is responsible for its own set of price feeds. Solana Price Feeds are available for use by Solana protocols. In this case, since the oracle program itself runs on Solana, the resulting prices are immediately available to consumers without requiring any additional work. Pythnet Price Feeds are available on 12+ blockchains. The prices constructed on Pythnet are transferred cross-chain to reach consumers on these blockchains.\n\nIn both cases, the critical component of the system is the oracle program that combines the data from each individual publisher. This program maintains a number of different Solana accounts that list the products on Pyth and their current price data. Publishers publish their price and confidence by interacting with the oracle program on every slot. The program stores this information in its accounts. The first price update in a slot additionally triggers price aggregation, which combines the price data from the previous slot into a single aggregate price and confidence interval. This aggregate price is written to the Solana account where it is readable by other on-chain programs and available for transmission to other blockchains.',
      denomUnits: [{
          denom: 'ibc/E42006ED917C769EDE1B474650EEA6BFE3F97958912B9206DD7010A28D01D9D5',
          exponent: 0,
          aliases: ['HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3', 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy']
        }, {
          denom: 'wormhole/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy/6',
          exponent: 6,
          aliases: ['pyth']
        }],
      typeAsset: 'ics20',
      base: 'ibc/E42006ED917C769EDE1B474650EEA6BFE3F97958912B9206DD7010A28D01D9D5',
      name: 'Pyth Network',
      display: 'wormhole/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy/6',
      symbol: 'PYTH',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3'
          },
          provider: 'Wormhole'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'gateway',
            baseDenom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pyth.svg'
      },
      images: [{
          imageSync: {
            chainName: 'solana',
            baseDenom: 'HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pyth.svg'
        }]
    },
    {
      description: 'PSTAKE Liquid-Staked OSMO',
      denomUnits: [{
          denom: 'ibc/ECBE78BF7677320A93E7BA1761D144BCBF0CBC247C290C049655E106FE5DC68E',
          exponent: 0,
          aliases: ['stk/uosmo']
        }, {
          denom: 'stkosmo',
          exponent: 6,
          aliases: ['stk/osmo']
        }],
      typeAsset: 'ics20',
      base: 'ibc/ECBE78BF7677320A93E7BA1761D144BCBF0CBC247C290C049655E106FE5DC68E',
      name: 'PSTAKE staked OSMO',
      display: 'stkosmo',
      symbol: 'stkOSMO',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'uosmo'
          },
          provider: 'pSTAKE'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'persistence',
            baseDenom: 'stk/uosmo',
            channelId: 'channel-6'
          },
          chain: {
            channelId: 'channel-4',
            path: 'transfer/channel-4/stk/uosmo'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
      },
      images: [{
          imageSync: {
            chainName: 'persistence',
            baseDenom: 'stk/uosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg',
          theme: {
            primaryColorHex: '#c3343d'
          }
        }]
    },
    {
      description: 'Levana Well-funded Perps is a protocol for perpetual swaps, which are leveraged trading contracts.',
      extendedDescription: 'Levana Well-funded Perps is a protocol for perpetual swaps, which are leveraged trading contracts. It aims to manage risk and provide benefits to both traders and liquidity providers.\n\nFor traders, Levana\'s solution is to make all positions "well-funded," meaning that the maximum profit for each position is locked in advance. This eliminates the possibility of bad debt and insolvency, providing greater security.\n\nLiquidity providers, on the other hand, receive a yield for taking on the risk of market instability. They supply funds that act as collateral, and in return, they earn a fee with a risk premium.\n\nThe protocol addresses the issues with existing perpetual swap models, such as the virtual AMM. These models rely on complex mechanisms to maintain price stability, but they have limitations and can be risky in volatile markets.\n\nBy separating different trading pairs and creating a decentralized market for liquidity, Levana reduces the risk of contagion between different markets. This also makes it easier to expand to other blockchain networks.\n\nOverall, Levana\'s perpetual swaps protocol offers a reliable and secure platform for traders and liquidity providers. It ensures fair settlement, minimizes risks, and allows for the development of additional financial protocols on top of tokenized positions.',
      denomUnits: [{
          denom: 'factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn',
          exponent: 0
        }, {
          denom: 'lvn',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn',
      name: 'Levana',
      display: 'lvn',
      symbol: 'LVN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.svg',
          theme: {
            primaryColorHex: '#4c146c'
          }
        }],
      coingeckoId: 'levana-protocol'
    },
    {
      description: 'Puppy',
      denomUnits: [{
          denom: 'ibc/46AC07DBFF1352EC94AF5BD4D23740D92D9803A6B41F6E213E77F3A1143FB963',
          exponent: 0,
          aliases: ['cw20:chihuahua1yl8z39ugle8s02fpwkhh293509q5xcpalmdzc4amvchz8nkexrmsy95gef']
        }, {
          denom: 'puppy',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/46AC07DBFF1352EC94AF5BD4D23740D92D9803A6B41F6E213E77F3A1143FB963',
      name: 'Puppy',
      display: 'puppy',
      symbol: 'PUPPY',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'chihuahua',
            baseDenom: 'cw20:chihuahua1yl8z39ugle8s02fpwkhh293509q5xcpalmdzc4amvchz8nkexrmsy95gef',
            port: 'wasm.chihuahua1jwkag4yvhyj9fuddtkygvavya8hmdjuzmgxwg9vp3lw9twv6lrcq9mgl52',
            channelId: 'channel-73'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-11348',
            path: 'transfer/channel-11348/cw20:chihuahua1yl8z39ugle8s02fpwkhh293509q5xcpalmdzc4amvchz8nkexrmsy95gef'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/puppyhuahua_logo.png'
      },
      images: [{
          imageSync: {
            chainName: 'chihuahua',
            baseDenom: 'cw20:chihuahua1yl8z39ugle8s02fpwkhh293509q5xcpalmdzc4amvchz8nkexrmsy95gef'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/puppyhuahua_logo.png',
          theme: {
            primaryColorHex: '#100e0d'
          }
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'The cutest NEWT token on Neutron chain.',
      denomUnits: [{
          denom: 'ibc/BF685448E564B5A4AC8F6E0493A0B979D0E0BF5EC11F7E15D25A0A2160C944DD',
          exponent: 0,
          aliases: ['unewt', 'factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt']
        }, {
          denom: 'newt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/BF685448E564B5A4AC8F6E0493A0B979D0E0BF5EC11F7E15D25A0A2160C944DD',
      name: 'Newt',
      display: 'newt',
      symbol: 'NEWT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-874',
            path: 'transfer/channel-874/factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newt.png'
      },
      images: [{
          imageSync: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newt.png',
          theme: {
            primaryColorHex: '#16233d'
          }
        }]
    },
    {
      description: 'MilkyWay\'s liquid staked TIA',
      denomUnits: [{
          denom: 'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA',
          exponent: 0
        }, {
          denom: 'milkTIA',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA',
      name: 'milkTIA',
      display: 'milkTIA',
      symbol: 'milkTIA',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'celestia',
            baseDenom: 'utia'
          },
          provider: 'MilkyWay'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.svg',
          theme: {
            primaryColorHex: '#d18dfc'
          }
        }],
      coingeckoId: 'milkyway-staked-tia'
    },
    {
      description: 'ASH',
      denomUnits: [{
          denom: 'ibc/4976049456D261659D0EC499CC9C2391D3C7D1128A0B9FB0BBF2842D1B2BC7BC',
          exponent: 0,
          aliases: ['factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash']
        }, {
          denom: 'ASH',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/4976049456D261659D0EC499CC9C2391D3C7D1128A0B9FB0BBF2842D1B2BC7BC',
      name: 'ASH',
      display: 'ASH',
      symbol: 'ASH',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'migaloo',
            baseDenom: 'factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-642',
            path: 'transfer/channel-642/factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg'
      },
      images: [{
          imageSync: {
            chainName: 'migaloo',
            baseDenom: 'factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg'
        }]
    },
    {
      description: 'RAC',
      denomUnits: [{
          denom: 'ibc/DDF1CD4CDC14AE2D6A3060193624605FF12DEE71CF1F8C19EEF35E9447653493',
          exponent: 0,
          aliases: ['factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac']
        }, {
          denom: 'RAC',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/DDF1CD4CDC14AE2D6A3060193624605FF12DEE71CF1F8C19EEF35E9447653493',
      name: 'Racoon',
      display: 'RAC',
      symbol: 'RAC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'migaloo',
            baseDenom: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-642',
            path: 'transfer/channel-642/factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg'
      },
      images: [{
          imageSync: {
            chainName: 'migaloo',
            baseDenom: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg',
          theme: {
            primaryColorHex: '#2b2434'
          }
        }]
    },
    {
      description: 'GUPPY',
      denomUnits: [{
          denom: 'ibc/42A9553A7770F3D7B62F3A82AF04E7719B4FD6EAF31BE5645092AAC4A6C2201D',
          exponent: 0,
          aliases: ['factory/migaloo1etlu2h30tjvv8rfa4fwdc43c92f6ul5w9acxzk/uguppy']
        }, {
          denom: 'GUPPY',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/42A9553A7770F3D7B62F3A82AF04E7719B4FD6EAF31BE5645092AAC4A6C2201D',
      name: 'GUPPY',
      display: 'GUPPY',
      symbol: 'GUPPY',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'migaloo',
            baseDenom: 'factory/migaloo1etlu2h30tjvv8rfa4fwdc43c92f6ul5w9acxzk/uguppy',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-642',
            path: 'transfer/channel-642/factory/migaloo1etlu2h30tjvv8rfa4fwdc43c92f6ul5w9acxzk/uguppy'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/guppy.png'
      },
      images: [{
          imageSync: {
            chainName: 'migaloo',
            baseDenom: 'factory/migaloo1etlu2h30tjvv8rfa4fwdc43c92f6ul5w9acxzk/uguppy'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/guppy.png',
          theme: {
            primaryColorHex: '#d9966e'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Haqq Network',
      denomUnits: [{
          denom: 'ibc/69110FF673D70B39904FF056CFDFD58A90BEC3194303F45C32CB91B8B0A738EA',
          exponent: 0,
          aliases: ['aISLM']
        }, {
          denom: 'ISLM',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/69110FF673D70B39904FF056CFDFD58A90BEC3194303F45C32CB91B8B0A738EA',
      name: 'Haqq Network',
      display: 'ISLM',
      symbol: 'ISLM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'haqq',
            baseDenom: 'aISLM',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-1575',
            path: 'transfer/channel-1575/aISLM'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg'
      },
      images: [{
          imageSync: {
            chainName: 'haqq',
            baseDenom: 'aISLM'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg',
          theme: {
            primaryColorHex: '#04cd80'
          }
        }]
    },
    {
      description: '$AUTISM exists to celebrate autism as a superior biological tech stack for a changing world',
      denomUnits: [{
          denom: 'ibc/9DDF52A334F92BC57A9E0D59DFF9984EAC61D2A14E5162605DF601AA58FDFC6D',
          exponent: 0,
          aliases: ['factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism']
        }, {
          denom: 'autism',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/9DDF52A334F92BC57A9E0D59DFF9984EAC61D2A14E5162605DF601AA58FDFC6D',
      name: 'Autism',
      display: 'autism',
      symbol: 'AUTISM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism',
            channelId: 'channel-8'
          },
          chain: {
            channelId: 'channel-122',
            path: 'transfer/channel-122/factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png'
      },
      images: [{
          imageSync: {
            chainName: 'injective',
            baseDenom: 'factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png',
          theme: {
            primaryColorHex: '#040404'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'The PAGE token is used for actions in the PageDAO NFT literary ecosystem and for DAO governance.',
      denomUnits: [{
          denom: 'ibc/23A62409E4AD8133116C249B1FA38EED30E500A115D7B153109462CD82C1CD99',
          exponent: 0,
          aliases: ['gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e']
        }, {
          denom: 'page',
          exponent: 8
        }],
      typeAsset: 'ics20',
      base: 'ibc/23A62409E4AD8133116C249B1FA38EED30E500A115D7B153109462CD82C1CD99',
      name: 'Page',
      display: 'page',
      symbol: 'PAGE',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e'
          },
          provider: 'Gravity Bridge'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'gravitybridge',
            baseDenom: 'gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-144',
            path: 'transfer/channel-144/gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg',
          theme: {
            primaryColorHex: '#ebb324'
          }
        }]
    },
    {
      description: 'PURSE Token',
      denomUnits: [{
          denom: 'ibc/6FD2938076A4C1BB3A324A676E76B0150A4443DAE0E002FB62AC0E6B604B1519',
          exponent: 0,
          aliases: ['bsc0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C']
        }, {
          denom: 'PURSE',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/6FD2938076A4C1BB3A324A676E76B0150A4443DAE0E002FB62AC0E6B604B1519',
      name: 'PURSE Token',
      display: 'PURSE',
      symbol: 'PURSE',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'binancesmartchain',
            baseDenom: '0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C',
            contract: '0x84238c00c8313920826D798e3cF6793Ef4F610ad'
          },
          provider: 'Function X'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'pundix',
            baseDenom: 'bsc0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-12618',
            path: 'transfer/channel-12618/bsc0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.svg'
      },
      images: [{
          imageSync: {
            chainName: 'binancesmartchain',
            baseDenom: '0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.svg',
          theme: {
            primaryColorHex: '#1c1c1b'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'The first meme coin on Injective. It’s a dog, but he has nunchucks',
      denomUnits: [{
          denom: 'ibc/183C0BB962D2F57C957E0B134CFA0AC9D6F755C02DE9DC2A59089BA23009DEC3',
          exponent: 0,
          aliases: ['factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja']
        }, {
          denom: 'NINJA',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/183C0BB962D2F57C957E0B134CFA0AC9D6F755C02DE9DC2A59089BA23009DEC3',
      name: 'Dog wif nunchucks',
      display: 'NINJA',
      symbol: 'NINJA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja',
            channelId: 'channel-8'
          },
          chain: {
            channelId: 'channel-122',
            path: 'transfer/channel-122/factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninja.png'
      },
      images: [{
          imageSync: {
            chainName: 'injective',
            baseDenom: 'factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninja.png',
          theme: {
            primaryColorHex: '#00468E',
            backgroundColorHex: '#00468E',
            circle: true
          }
        }]
    },
    {
      description: 'Kleomedes Token',
      denomUnits: [{
          denom: 'ibc/5F5B7DA5ECC80F6C7A8702D525BB0B74279B1F7B8EFAE36E423D68788F7F39FF',
          exponent: 0,
          aliases: ['cw20:juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy']
        }, {
          denom: 'kleo',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/5F5B7DA5ECC80F6C7A8702D525BB0B74279B1F7B8EFAE36E423D68788F7F39FF',
      name: 'Kleomedes',
      display: 'kleo',
      symbol: 'KLEO',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/kleomedes.png'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/kleomedes.png',
          theme: {
            primaryColorHex: '#240454'
          }
        }]
    },
    {
      description: 'NYX Token (NYX) is the Nym Network\'s native token.',
      denomUnits: [{
          denom: 'ibc/1A611E8A3E4248106A1A5A80A64BFA812739435E8B9888EB3F652A21F029F317',
          exponent: 0,
          aliases: ['unyx']
        }, {
          denom: 'nyx',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/1A611E8A3E4248106A1A5A80A64BFA812739435E8B9888EB3F652A21F029F317',
      name: 'Nym',
      display: 'nyx',
      symbol: 'NYX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'nyx',
            baseDenom: 'unyx',
            channelId: 'channel-8'
          },
          chain: {
            channelId: 'channel-15464',
            path: 'transfer/channel-15464/unyx'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nyx.png'
      },
      images: [{
          imageSync: {
            chainName: 'nyx',
            baseDenom: 'unyx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nyx.png',
          theme: {
            primaryColorHex: '#f45135'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'NYM Token (NYM) is the Nym Network\'s native utility token, used as the primary means to incentivize mixnet node operators.',
      denomUnits: [{
          denom: 'ibc/37CB3078432510EE57B9AFA8DBE028B33AE3280A144826FEAC5F2334CF2C5539',
          exponent: 0,
          aliases: ['unym']
        }, {
          denom: 'nym',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/37CB3078432510EE57B9AFA8DBE028B33AE3280A144826FEAC5F2334CF2C5539',
      name: 'NYM',
      display: 'nym',
      symbol: 'NYM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'nyx',
            baseDenom: 'unym',
            channelId: 'channel-8'
          },
          chain: {
            channelId: 'channel-15464',
            path: 'transfer/channel-15464/unym'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.svg'
      },
      images: [
        {
          imageSync: {
            chainName: 'nyx',
            baseDenom: 'unym'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.svg',
          theme: {
            darkMode: false,
            circle: true,
            primaryColorHex: '#151525'
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_dark.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_dark.svg',
          theme: {
            darkMode: true,
            circle: true,
            primaryColorHex: '#141424'
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym.png',
          theme: {
            primaryColorHex: '#293a5d'
          }
        }
      ]
    },
    {
      description: 'has a hat',
      denomUnits: [{
          denom: 'ibc/2FFE07C4B4EFC0DDA099A16C6AF3C9CCA653CC56077E87217A585D48794B0BC7',
          exponent: 0,
          aliases: ['factory/chihuahua1x4q2vkrz4dfgd9hcw0p5m2f2nuv2uqmt9xr8k2/achihuahuawifhat']
        }, {
          denom: 'achihuahuawifhat',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/2FFE07C4B4EFC0DDA099A16C6AF3C9CCA653CC56077E87217A585D48794B0BC7',
      name: 'Chihuahuawifhat',
      display: 'achihuahuawifhat',
      symbol: 'BADDOG',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'chihuahua',
            baseDenom: 'factory/chihuahua1x4q2vkrz4dfgd9hcw0p5m2f2nuv2uqmt9xr8k2/achihuahuawifhat',
            channelId: 'channel-7'
          },
          chain: {
            channelId: 'channel-113',
            path: 'transfer/channel-113/factory/chihuahua1x4q2vkrz4dfgd9hcw0p5m2f2nuv2uqmt9xr8k2/achihuahuawifhat'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.png'
      },
      images: [{
          imageSync: {
            chainName: 'chihuahua',
            baseDenom: 'factory/chihuahua1x4q2vkrz4dfgd9hcw0p5m2f2nuv2uqmt9xr8k2/achihuahuawifhat'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.png',
          theme: {
            primaryColorHex: '#F7E3C0',
            backgroundColorHex: '#F7E3C0',
            circle: true
          }
        }]
    },
    {
      description: 'clownmaxxed store of value',
      denomUnits: [{
          denom: 'ibc/8C8F6349F656C943543C6B040377BE44123D01F712277815C3C13098BB98818C',
          exponent: 0,
          aliases: ['ucircus', 'factory/neutron170v88vrtnedesyfytuku257cggxc79rd7lwt7q/ucircus']
        }, {
          denom: 'circus',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/8C8F6349F656C943543C6B040377BE44123D01F712277815C3C13098BB98818C',
      name: 'AtomEconomicZone69JaeKwonInu',
      display: 'circus',
      symbol: 'CIRCUS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron170v88vrtnedesyfytuku257cggxc79rd7lwt7q/ucircus',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-874',
            path: 'transfer/channel-874/factory/neutron170v88vrtnedesyfytuku257cggxc79rd7lwt7q/ucircus'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/circus.png'
      },
      images: [{
          imageSync: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron170v88vrtnedesyfytuku257cggxc79rd7lwt7q/ucircus'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/circus.png',
          theme: {
            primaryColorHex: '#242033'
          }
        }]
    },
    {
      description: 'Governance and utility token for the Junø Apes NFT platform on Juno',
      denomUnits: [{
          denom: 'ibc/176DD560277BB0BD676260BE02EBAB697725CA85144D8A2BF286C6B5323DB5FE',
          exponent: 0,
          aliases: ['cw20:juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps']
        }, {
          denom: 'jape',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/176DD560277BB0BD676260BE02EBAB697725CA85144D8A2BF286C6B5323DB5FE',
      name: 'Junø Apes',
      display: 'jape',
      symbol: 'JAPE',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/jape.png'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/jape.png',
          theme: {
            primaryColorHex: '#ee8179'
          }
        }]
    },
    {
      description: 'Woof',
      denomUnits: [{
          denom: 'ibc/9B8EC667B6DF55387DC0F3ACC4F187DA6921B0806ED35DE6B04DE96F5AB81F53',
          exponent: 0,
          aliases: ['factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uwoof']
        }, {
          denom: 'WOOF',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/9B8EC667B6DF55387DC0F3ACC4F187DA6921B0806ED35DE6B04DE96F5AB81F53',
      name: 'WOOF',
      display: 'WOOF',
      symbol: 'WOOF',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'chihuahua',
            baseDenom: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uwoof',
            channelId: 'channel-7'
          },
          chain: {
            channelId: 'channel-113',
            path: 'transfer/channel-113/factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uwoof'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/woof.png'
      },
      images: [{
          imageSync: {
            chainName: 'chihuahua',
            baseDenom: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uwoof'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/woof.png',
          theme: {
            primaryColorHex: '#d9905f'
          }
        }]
    },
    {
      description: 'The native coin of Sneaky Productions.',
      denomUnits: [{
          denom: 'ibc/94ED1F172BC633DFC56D7E26551D8B101ADCCC69052AC44FED89F97FF658138F',
          exponent: 0,
          aliases: ['factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky']
        }, {
          denom: 'sneaky',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/94ED1F172BC633DFC56D7E26551D8B101ADCCC69052AC44FED89F97FF658138F',
      name: 'Sneaky Productions',
      display: 'sneaky',
      symbol: 'SNEAKY',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'stargaze',
            baseDenom: 'factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-75',
            path: 'transfer/channel-75/factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stargaze',
            baseDenom: 'factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.svg',
          theme: {
            primaryColorHex: '#fbcaca'
          }
        }]
    },
    {
      description: 'Wrapped Bitcoin (WBTC) is an ERC20 token backed 1:1 with Bitcoin. Completely transparent. 100% verifiable. Community led.',
      denomUnits: [{
          denom: 'factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc',
          exponent: 0,
          aliases: ['wbtc-satoshi']
        }, {
          denom: 'wbtc',
          exponent: 8
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743',
      base: 'factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc',
      name: 'Wrapped Bitcoin',
      display: 'wbtc',
      symbol: 'WBTC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'BitGo, Kyber, and Ren'
        }, {
          type: 'additional-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          provider: 'BitGo, Kyber, and Ren'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg',
          theme: {
            primaryColorHex: '#f39444'
          }
        }],
      coingeckoId: 'wrapped-bitcoin'
    },
    {
      description: 'Baddest coin on Cosmos',
      denomUnits: [{
          denom: 'ibc/442A08C33AE9875DF90792FFA73B5728E1CAECE87AB4F26AE9B422F1E682ED23',
          exponent: 0,
          aliases: ['ubad', 'factory/neutron143wp6g8paqasnuuey6zyapucknwy9rhnld8hkr/bad']
        }, {
          denom: 'bad',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/442A08C33AE9875DF90792FFA73B5728E1CAECE87AB4F26AE9B422F1E682ED23',
      name: 'Badcoin',
      display: 'bad',
      symbol: 'BAD',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron143wp6g8paqasnuuey6zyapucknwy9rhnld8hkr/bad',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-874',
            path: 'transfer/channel-874/factory/neutron143wp6g8paqasnuuey6zyapucknwy9rhnld8hkr/bad'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bad.png'
      },
      images: [{
          imageSync: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron143wp6g8paqasnuuey6zyapucknwy9rhnld8hkr/bad'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bad.png',
          theme: {
            primaryColorHex: '#211a0d'
          }
        }]
    },
    {
      description: 'Signal Art and Gaming on Juno',
      denomUnits: [{
          denom: 'ibc/4BDADBEDA31899036AB286E9901116496A9D85FB87B35A408C9D67C0DCAC660A',
          exponent: 0,
          aliases: ['cw20:juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k']
        }, {
          denom: 'sgnl',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/4BDADBEDA31899036AB286E9901116496A9D85FB87B35A408C9D67C0DCAC660A',
      name: 'Signal',
      display: 'sgnl',
      symbol: 'SGNL',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sgnl.png'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sgnl.png',
          theme: {
            primaryColorHex: '#c5c2c2'
          }
        }]
    },
    {
      description: 'The first native memecoin on Osmosis. Crafted by the deftest of hands in the lab of lunacy. It\'s scientifically anarchic, professionally foolish, and your ticket to the madhouse.',
      denomUnits: [{
          denom: 'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
          exponent: 0
        }, {
          denom: 'WOSMO',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3',
      base: 'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
      name: 'WOSMO',
      display: 'WOSMO',
      symbol: 'WOSMO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png',
          theme: {
            primaryColorHex: '#edd5ee'
          }
        }]
    },
    {
      description: 'Margined Power Token sqTIA',
      denomUnits: [{
          denom: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqtia',
          exponent: 0
        }, {
          denom: 'sqtia',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqtia',
      name: 'TIA Squared',
      display: 'sqtia',
      symbol: 'sqTIA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqtia.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqtia.svg'
        }]
    },
    {
      description: 'The deflationary utility token of the Apollo DAO project',
      denomUnits: [{
          denom: 'ibc/73BB20AF857D1FE6E061D01CA13870872AD0C979497CAF71BEA25B1CBF6879F1',
          exponent: 0,
          aliases: ['uapollo', 'factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO']
        }, {
          denom: 'apollo',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/73BB20AF857D1FE6E061D01CA13870872AD0C979497CAF71BEA25B1CBF6879F1',
      name: 'Apollo DAO',
      display: 'apollo',
      symbol: 'APOLLO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-874',
            path: 'transfer/channel-874/factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/apollo.svg'
      },
      images: [{
          imageSync: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/apollo.svg'
        }]
    },
    {
      description: 'Stride\'s liquid staked DYDX',
      denomUnits: [{
          denom: 'ibc/980E82A9F8E7CA8CD480F4577E73682A6D3855A267D1831485D7EBEF0E7A6C2C',
          exponent: 0,
          aliases: ['stadydx']
        }, {
          denom: 'stDYDX',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/980E82A9F8E7CA8CD480F4577E73682A6D3855A267D1831485D7EBEF0E7A6C2C',
      name: 'Stride Staked DYDX',
      display: 'stDYDX',
      symbol: 'stDYDX',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'dydx',
            baseDenom: 'adydx'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stadydx',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-326',
            path: 'transfer/channel-326/stadydx'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stride',
            baseDenom: 'stadydx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }]
    },
    {
      description: 'Stride\'s liquid staked TIA',
      denomUnits: [{
          denom: 'ibc/698350B8A61D575025F3ED13E9AC9C0F45C89DEFE92F76D5838F1D3C1A7FF7C9',
          exponent: 0,
          aliases: ['stutia']
        }, {
          denom: 'stTIA',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/698350B8A61D575025F3ED13E9AC9C0F45C89DEFE92F76D5838F1D3C1A7FF7C9',
      name: 'Stride Staked TIA',
      display: 'stTIA',
      symbol: 'stTIA',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'celestia',
            baseDenom: 'utia'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stutia',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-326',
            path: 'transfer/channel-326/stutia'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stride',
            baseDenom: 'stutia'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }]
    },
    {
      description: 'Stride\'s liquid staked SAGA',
      denomUnits: [{
          denom: 'ibc/2CD9F8161C3FC332E78EF0C25F6E684D09379FB2F56EF9267E7EC139642EC57B',
          exponent: 0,
          aliases: ['stusaga']
        }, {
          denom: 'stSAGA',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/2CD9F8161C3FC332E78EF0C25F6E684D09379FB2F56EF9267E7EC139642EC57B',
      name: 'Stride Staked SAGA',
      display: 'stSAGA',
      symbol: 'stSAGA',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'saga',
            baseDenom: 'usaga'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stusaga',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-326',
            path: 'transfer/channel-326/stusaga'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsaga.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsaga.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stride',
            baseDenom: 'stusaga'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsaga.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsaga.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/C04DFC9BCD893E57F2BEFE40F63EFD18D2768514DBD5F63ABD2FF7F48FC01D36',
          exponent: 0,
          aliases: ['stinj']
        }, {
          denom: 'stINJ',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/C04DFC9BCD893E57F2BEFE40F63EFD18D2768514DBD5F63ABD2FF7F48FC01D36',
      name: 'Stride Staked INJ',
      display: 'stINJ',
      symbol: 'stINJ',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'inj'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stinj',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-326',
            path: 'transfer/channel-326/stinj'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stride',
            baseDenom: 'stinj'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }]
    },
    {
      description: 'GLTO-ERC20 on injective',
      denomUnits: [{
          denom: 'ibc/072E5B3D6F278B3E6A9C51D7EAD1A737148609512C5EBE8CBCB5663264A0DDB7',
          exponent: 0,
          aliases: ['peggy0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2']
        }, {
          denom: 'glto',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/072E5B3D6F278B3E6A9C51D7EAD1A737148609512C5EBE8CBCB5663264A0DDB7',
      name: 'Gelotto (Injective)',
      display: 'glto',
      symbol: 'GLTO',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2'
          },
          provider: 'Peggy'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'peggy0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2',
            channelId: 'channel-8'
          },
          chain: {
            channelId: 'channel-122',
            path: 'transfer/channel-122/peggy0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.svg',
          theme: {
            primaryColorHex: '#501cad'
          }
        }]
    },
    {
      description: 'The native governance and staking token of the Dymension Hub',
      denomUnits: [{
          denom: 'ibc/9A76CDF0CBCEF37923F32518FA15E5DC92B9F56128292BC4D63C4AEA76CBB110',
          exponent: 0,
          aliases: ['adym']
        }, {
          denom: 'dym',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/9A76CDF0CBCEF37923F32518FA15E5DC92B9F56128292BC4D63C4AEA76CBB110',
      name: 'Dymension Hub',
      display: 'dym',
      symbol: 'DYM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'dymension',
            baseDenom: 'adym',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-19774',
            path: 'transfer/channel-19774/adym'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
      },
      images: [{
          imageSync: {
            chainName: 'dymension',
            baseDenom: 'adym'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg',
          theme: {
            primaryColorHex: '#f4e4d4'
          }
        }]
    },
    {
      description: 'Rapture insurance is the first ever P2P insurance platform on $OSMO. Get rewarded to take care of peoples loved ones after the Rapture.',
      denomUnits: [{
          denom: 'factory/osmo1279xudevmf5cw83vkhglct7jededp86k90k2le/RAPTR',
          exponent: 0
        }, {
          denom: 'RAPTR',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1279xudevmf5cw83vkhglct7jededp86k90k2le',
      base: 'factory/osmo1279xudevmf5cw83vkhglct7jededp86k90k2le/RAPTR',
      name: 'RAPTR',
      display: 'RAPTR',
      symbol: 'RAPTR',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/RAPTR.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/RAPTR.png',
          theme: {
            primaryColorHex: '#e2b67d'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.',
      denomUnits: [{
          denom: 'ibc/C25A2303FE24B922DAFFDCE377AC5A42E5EF746806D32E2ED4B610DE85C203F7',
          exponent: 0,
          aliases: ['cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26']
        }, {
          denom: 'astro.cw20',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/C25A2303FE24B922DAFFDCE377AC5A42E5EF746806D32E2ED4B610DE85C203F7',
      name: 'Astroport token (Terra)',
      display: 'astro.cw20',
      symbol: 'ASTRO.terra',
      traces: [{
          type: 'legacy-mintage',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro'
          },
          provider: 'Astroport'
        }, {
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'terra2',
            baseDenom: 'cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channelId: 'channel-392'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-21671',
            path: 'transfer/channel-21671/cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro-cw20.svg'
      },
      images: [{
          imageSync: {
            chainName: 'terra2',
            baseDenom: 'cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro-cw20.svg'
        }, {
          imageSync: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.svg',
          theme: {
            primaryColorHex: '#4056e9'
          }
        }]
    },
    {
      description: 'A clan of 11y bad kids crafting chaos on the Cosmos eco. One bad memecoin to rule them all  $BADKID. Airdropped to Badkids NFT holders and $STARS stakers. It\'s so bad, your wallet\'s throwing a tantrum for it.',
      denomUnits: [{
          denom: 'factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID',
          exponent: 0
        }, {
          denom: 'BADKID',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8',
      base: 'factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID',
      name: 'BADKID',
      display: 'BADKID',
      symbol: 'BADKID',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/badkid.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/badkid.png',
          theme: {
            primaryColorHex: '#57443f'
          }
        }]
    },
    {
      description: 'Solana USD Coin (Wormhole), Solana USDC, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3',
      denomUnits: [{
          denom: 'ibc/F08DE332018E8070CC4C68FE06E04E254F527556A614F5F8F9A68AF38D367E45',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3']
        }, {
          denom: 'wormhole/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3/6',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/F08DE332018E8070CC4C68FE06E04E254F527556A614F5F8F9A68AF38D367E45',
      name: 'USDC (Solana via Wormhole)',
      display: 'wormhole/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3/6',
      symbol: 'USDC.sol.wh',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'additional-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Circle'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'
          },
          provider: 'Wormhole'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'gateway',
            baseDenom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/solana.USDC.wh.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/solana.USDC.wh.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/solana.USDC.wh.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/solana.USDC.wh.svg',
          theme: {
            primaryColorHex: '#2775cb'
          }
        }, {
          imageSync: {
            chainName: 'gateway',
            baseDenom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          theme: {
            circle: true,
            primaryColorHex: '#2775CA'
          }
        }]
    },
    {
      description: 'The native staking and governance token of Humans.ai.',
      denomUnits: [{
          denom: 'ibc/35CECC330D11DD00FACB555D07687631E0BC7D226260CC5F015F6D7980819533',
          exponent: 0,
          aliases: ['aheart']
        }, {
          denom: 'heart',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/35CECC330D11DD00FACB555D07687631E0BC7D226260CC5F015F6D7980819533',
      name: 'Humans.ai',
      display: 'heart',
      symbol: 'HEART',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'humans',
            baseDenom: 'aheart',
            channelId: 'channel-4'
          },
          chain: {
            channelId: 'channel-20082',
            path: 'transfer/channel-20082/aheart'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/heart-dark-mode.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/heart-dark-mode.svg'
      },
      images: [{
          imageSync: {
            chainName: 'humans',
            baseDenom: 'aheart'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/heart-dark-mode.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/heart-dark-mode.svg',
          theme: {
            darkMode: true,
            primaryColorHex: '#f3f3f3'
          }
        }]
    },
    {
      description: 'The token of Teledisko DAO.',
      denomUnits: [{
          denom: 'ibc/2BF9656CAB0384A31167DB9B0254F0FB1CB4346A229BD7E5CBDCBB911C3740F7',
          exponent: 0,
          aliases: ['erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280']
        }, {
          denom: 'berlin',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/2BF9656CAB0384A31167DB9B0254F0FB1CB4346A229BD7E5CBDCBB911C3740F7',
      name: 'Teledisko DAO - Legacy',
      display: 'berlin',
      symbol: 'BERLIN-legacy',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'evmos',
            baseDenom: 'erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-204',
            path: 'transfer/channel-204/erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.svg'
      },
      images: [{
          imageSync: {
            chainName: 'evmos',
            baseDenom: 'erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.svg',
          theme: {
            primaryColorHex: '#bbce1a'
          }
        }]
    },
    {
      description: 'The native token of Scorum',
      denomUnits: [{
          denom: 'ibc/178248C262DE2E141EE6287EE7AB0854F05F25B0A3F40C4B912FA1C7E51F466E',
          exponent: 0,
          aliases: ['nscr']
        }, {
          denom: 'scr',
          exponent: 9
        }],
      typeAsset: 'ics20',
      base: 'ibc/178248C262DE2E141EE6287EE7AB0854F05F25B0A3F40C4B912FA1C7E51F466E',
      name: 'Scorum Network',
      display: 'scr',
      symbol: 'SCR',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'scorum',
            baseDenom: 'nscr',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-20100',
            path: 'transfer/channel-20100/nscr'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scr.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scr.svg'
      },
      images: [{
          imageSync: {
            chainName: 'scorum',
            baseDenom: 'nscr'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scr.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scr.svg',
          theme: {
            primaryColorHex: '#0bc47e'
          }
        }]
    },
    {
      description: 'The native token of Chain4Energy',
      denomUnits: [{
          denom: 'ibc/62118FB4D5FEDD5D2B18DC93648A745CD5E5B01D420E9B7A5FED5381CB13A7E8',
          exponent: 0,
          aliases: ['uc4e']
        }, {
          denom: 'c4e',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/62118FB4D5FEDD5D2B18DC93648A745CD5E5B01D420E9B7A5FED5381CB13A7E8',
      name: 'C4E',
      display: 'c4e',
      symbol: 'C4E',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'chain4energy',
            baseDenom: 'uc4e',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-22172',
            path: 'transfer/channel-22172/uc4e'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chain4energy/images/c4e.png'
      },
      images: [{
          imageSync: {
            chainName: 'chain4energy',
            baseDenom: 'uc4e'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chain4energy/images/c4e.png',
          theme: {
            primaryColorHex: '#24344c'
          }
        }]
    },
    {
      description: 'Bitmos opens doors for BRC20 tokens to thrive alongside established players in the Cosmos Network, revolutionizing decentralized finance (DeFi) for all.',
      denomUnits: [{
          denom: 'ibc/7D389F0ABF1E4D45BE6D7BBE36A2C50EA0559C01E076B02F8E381E685EC1F942',
          exponent: 0,
          aliases: ['cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq']
        }, {
          denom: 'bitmos',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/7D389F0ABF1E4D45BE6D7BBE36A2C50EA0559C01E076B02F8E381E685EC1F942',
      name: 'Bitmos',
      display: 'bitmos',
      symbol: 'BMOS',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'terra2',
            baseDenom: 'cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq',
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channelId: 'channel-26'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-341',
            path: 'transfer/channel-341/cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bitmos.png'
      },
      images: [{
          imageSync: {
            chainName: 'terra2',
            baseDenom: 'cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bitmos.png',
          theme: {
            primaryColorHex: '#0c0704'
          }
        }]
    },
    {
      description: 'The SRCX token of Source Protocol.',
      denomUnits: [{
          denom: 'ibc/C97473CD237EBA2F94FDFA6ABA5EC0E22FA140655D73D2A2754F03A347BBA40B',
          exponent: 0,
          aliases: ['nsrcx', 'ibc/FC5A7360EEED0713AE3E83E9D55A69AF873056A172AC495890ACE4582FF9685A']
        }, {
          denom: 'srcx',
          exponent: 9
        }],
      typeAsset: 'ics20',
      base: 'ibc/C97473CD237EBA2F94FDFA6ABA5EC0E22FA140655D73D2A2754F03A347BBA40B',
      name: 'Source Token',
      display: 'srcx',
      symbol: 'SRCX',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chainName: 'binancesmartchain',
            baseDenom: '0x454b90716a9435e7161a9aea5cf00e0acbe565ae',
            contract: '0xC891aBa0b42818fb4c975Bf6461033c62BCE75ff'
          },
          chain: {
            contract: '0xC891aBa0b42818fb4c975Bf6461033c62BCE75ff'
          },
          provider: 'DeltaSwap.io'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'planq',
            baseDenom: 'erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09',
            channelId: 'channel-61'
          },
          chain: {
            channelId: 'channel-1',
            path: 'transfer/channel-1/erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09'
          }
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'source',
            baseDenom: 'ibc/FC5A7360EEED0713AE3E83E9D55A69AF873056A172AC495890ACE4582FF9685A',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-8945',
            path: 'transfer/channel-8945/transfer/channel-1/erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png'
      },
      images: [{
          imageSync: {
            chainName: 'binancesmartchain',
            baseDenom: '0x454b90716a9435e7161a9aea5cf00e0acbe565ae'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png',
          theme: {
            primaryColorHex: '#7f22bc'
          }
        }]
    },
    {
      description: 'The revenue token for Pylons',
      denomUnits: [{
          denom: 'ibc/0835781EF3F3ADD053874323AB660C75B50B18B16733CAB783CA6BBD78244EDF',
          exponent: 0,
          aliases: ['ubedrock']
        }, {
          denom: 'rock',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/0835781EF3F3ADD053874323AB660C75B50B18B16733CAB783CA6BBD78244EDF',
      name: 'Pylons',
      display: 'rock',
      symbol: 'ROCK',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'pylons',
            baseDenom: 'ubedrock',
            channelId: 'channel-29'
          },
          chain: {
            channelId: 'channel-17683',
            path: 'transfer/channel-17683/ubedrock'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pylons/images/pylons.png'
      },
      images: [{
          imageSync: {
            chainName: 'pylons',
            baseDenom: 'ubedrock'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pylons/images/pylons.png',
          theme: {
            primaryColorHex: '#ec4424'
          }
        }]
    },
    {
      description: 'BSKT tracks the top assets across the crypto ecosystem',
      denomUnits: [{
          denom: 'ibc/CDD1E59BD5034C1B2597DD199782204EB397DB93200AA2E99C0AF3A66B2915FA',
          exponent: 0,
          aliases: [
            '6gnCPhXtLnUD76HjQuSYPENLSZdG8RvDB1pTLM5aLSJA',
            'wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/bqqqpqsxzelp2hdfd4cgmxr6ekpatlj8yt2eghk52vst',
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/bqqqpqsxzelp2hdfd4cgmxr6ekpatlj8yt2eghk52vst'
          ]
        }, {
          denom: 'wormhole/bqqqpqsxzelp2hdfd4cgmxr6ekpatlj8yt2eghk52vst/5',
          exponent: 5,
          aliases: ['bskt']
        }],
      typeAsset: 'ics20',
      base: 'ibc/CDD1E59BD5034C1B2597DD199782204EB397DB93200AA2E99C0AF3A66B2915FA',
      name: 'Basket',
      display: 'wormhole/bqqqpqsxzelp2hdfd4cgmxr6ekpatlj8yt2eghk52vst/5',
      symbol: 'BSKT',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: '6gnCPhXtLnUD76HjQuSYPENLSZdG8RvDB1pTLM5aLSJA'
          },
          provider: 'Wormhole'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'gateway',
            baseDenom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/bqqqpqsxzelp2hdfd4cgmxr6ekpatlj8yt2eghk52vst',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/bqqqpqsxzelp2hdfd4cgmxr6ekpatlj8yt2eghk52vst'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bskt.png'
      },
      images: [{
          imageSync: {
            chainName: 'solana',
            baseDenom: '6gnCPhXtLnUD76HjQuSYPENLSZdG8RvDB1pTLM5aLSJA'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bskt.png',
          theme: {
            primaryColorHex: '#485573'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the AIOZ Network.',
      denomUnits: [
        {
          denom: 'ibc/BB0AFE2AFBD6E883690DAE4B9168EAC2B306BCC9C9292DACBB4152BBB08DB25F',
          exponent: 0,
          aliases: ['attoaioz']
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
      typeAsset: 'ics20',
      base: 'ibc/BB0AFE2AFBD6E883690DAE4B9168EAC2B306BCC9C9292DACBB4152BBB08DB25F',
      name: 'AIOZ Network',
      display: 'aioz',
      symbol: 'AIOZ',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'aioz',
            baseDenom: 'attoaioz',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-779',
            path: 'transfer/channel-779/attoaioz'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.svg'
      },
      images: [{
          imageSync: {
            chainName: 'aioz',
            baseDenom: 'attoaioz'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.svg',
          theme: {
            primaryColorHex: '#24241c'
          }
        }]
    },
    {
      description: 'Stride\'s liquid staked DYM',
      denomUnits: [{
          denom: 'ibc/D53E785DC9C5C2CA50CADB1EFE4DE5D0C30418BE0E9C6F2AF9F092A247E8BC22',
          exponent: 0,
          aliases: ['stadym']
        }, {
          denom: 'stDYM',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/D53E785DC9C5C2CA50CADB1EFE4DE5D0C30418BE0E9C6F2AF9F092A247E8BC22',
      name: 'Stride Staked DYM',
      display: 'stDYM',
      symbol: 'stDYM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'dymension',
            baseDenom: 'adym'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stadym',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-326',
            path: 'transfer/channel-326/stadym'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdym.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdym.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stride',
            baseDenom: 'stadym'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdym.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdym.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }]
    },
    {
      description: 'DOKI the last Dragon',
      denomUnits: [{
          denom: 'ibc/C12C353A83CD1005FC38943410B894DBEC5F2ABC97FC12908F0FB03B970E8E1B',
          exponent: 0,
          aliases: ['udoki']
        }, {
          denom: 'doki',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/C12C353A83CD1005FC38943410B894DBEC5F2ABC97FC12908F0FB03B970E8E1B',
      name: 'DOKI',
      display: 'doki',
      symbol: 'DOKI',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'odin',
            baseDenom: 'udoki',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-258',
            path: 'transfer/channel-258/udoki'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/doki_Logo.png'
      },
      images: [{
          imageSync: {
            chainName: 'odin',
            baseDenom: 'udoki'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/doki_Logo.png',
          theme: {
            primaryColorHex: '#2e2d2a'
          }
        }]
    },
    {
      description: 'Sail DAO is a liquidity deployment and management DAO built as a collaboration between the Osmosis and Migaloo Blockchains.',
      extendedDescription: 'Sail DAO is a liquidity deployment and management DAO built as a collaboration between the Osmosis and Migaloo Blockchains. Seeded by both the Osmosis Community Pool and the Migaloo Foundation, Sail DAO is open to hear offers from cosmos based projects that hope to seed liquidity for their token on the Osmosis blockchain. Along with the creation of this DAO the White Whale DEX is deployed on Osmosis, being the first DEX apart from Osmosis to deploy on the chain, it is a great step towards Osmosis becoming an ecosystem from an appchain. Migaloo incubated projects are encouraged to participate in OTC deals with Sail DAO in order to seed or enhance liquidity on WW\'s Osmosis DEX. However, offers are not limited to Migaloo projects and liquidity is not limited to being deployed on WW DEX. The treasury of this DAO can be deployed however it wishes at the discretion of the Sail DAO voters. The Osmosis CP has been given veto authorization over any props introduced in this DAO and has also been given clawback rights if this venture ever gets off track.',
      denomUnits: [{
          denom: 'factory/osmo1rckme96ptawr4zwexxj5g5gej9s2dmud8r2t9j0k0prn5mch5g4snzzwjv/sail',
          exponent: 0
        }, {
          denom: 'sail',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/osmo1rckme96ptawr4zwexxj5g5gej9s2dmud8r2t9j0k0prn5mch5g4snzzwjv/sail',
      name: 'Sail',
      display: 'sail',
      symbol: 'SAIL',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sail.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sail.png',
          theme: {
            primaryColorHex: '#1e264f'
          }
        }],
      socials: {
        website: 'https://daodao.zone/dao/osmo106tvcj58rvdn9k36m9m3xcmcwk2c3fgft3ldcst9lgy05gcmjanqexru3h/home',
        twitter: 'https://twitter.com/Sail_DAO_'
      }
    },
    {
      description: 'SHARK is the apex price prediction market within Cosmos.',
      denomUnits: [{
          denom: 'ibc/64D56DF9EC69BE554F49EBCE0199611062FF1137EF105E2F645C1997344F3834',
          exponent: 0,
          aliases: ['factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/shark']
        }, {
          denom: 'SHARK',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/64D56DF9EC69BE554F49EBCE0199611062FF1137EF105E2F645C1997344F3834',
      name: 'SHARK',
      display: 'SHARK',
      symbol: 'SHARK',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'migaloo',
            baseDenom: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/shark',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-642',
            path: 'transfer/channel-642/factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/shark'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/shark.png'
      },
      images: [{
          imageSync: {
            chainName: 'migaloo',
            baseDenom: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/shark'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/shark.png',
          theme: {
            primaryColorHex: '#062d54'
          }
        }]
    },
    {
      description: 'XRP bridged from XRPL',
      denomUnits: [{
          denom: 'ibc/63A7CA0B6838AD8CAD6B5103998FF9B9B6A6F06FBB9638BFF51E63E0142339F3',
          exponent: 0,
          aliases: ['drop', 'drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz']
        }, {
          denom: 'xrp',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/63A7CA0B6838AD8CAD6B5103998FF9B9B6A6F06FBB9638BFF51E63E0142339F3',
      name: 'Ripple (Coreum)',
      display: 'xrp',
      symbol: 'XRP.core',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'xrpl',
            baseDenom: 'drop'
          },
          provider: 'Coreum'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'coreum',
            baseDenom: 'drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-2188',
            path: 'transfer/channel-2188/drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/xrp.core.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/xrp.core.png',
          theme: {
            primaryColorHex: '#040404'
          }
        }, {
          imageSync: {
            chainName: 'coreum',
            baseDenom: 'drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.svg',
          theme: {
            primaryColorHex: '#040404'
          }
        }]
    },
    {
      description: 'An alloy of XRP asset variants on Osmosis.',
      extendedDescription: 'Multiple Ripple variants on Osmosis comprise the liquidity backing of a tokenized transmuter pool to create an alloy of XRP.',
      denomUnits: [{
          denom: 'factory/osmo1qnglc04tmhg32uc4kxlxh55a5cmhj88cpa3rmtly484xqu82t79sfv94w0/alloyed/allXRP',
          exponent: 0
        }, {
          denom: 'allXRP',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1qnglc04tmhg32uc4kxlxh55a5cmhj88cpa3rmtly484xqu82t79sfv94w0',
      base: 'factory/osmo1qnglc04tmhg32uc4kxlxh55a5cmhj88cpa3rmtly484xqu82t79sfv94w0/alloyed/allXRP',
      name: 'Ripple',
      display: 'allXRP',
      symbol: 'XRP',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'xrpl',
            baseDenom: 'drop'
          },
          provider: 'Osmosis'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.png'
      },
      images: [{
          imageSync: {
            chainName: 'xrpl',
            baseDenom: 'drop'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.png',
          theme: {
            primaryColorHex: '#040404'
          }
        }]
    },
    {
      description: 'The Original Meme Coin of SEI Network',
      denomUnits: [{
          denom: 'ibc/86074B8DF625A75C25D52FA6112E3FD5446BA41FE418880C168CA99D10E22F05',
          exponent: 0,
          aliases: ['cw20:sei1hrndqntlvtmx2kepr0zsfgr7nzjptcc72cr4ppk4yav58vvy7v3s4er8ed']
        }, {
          denom: 'SEIYAN',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/86074B8DF625A75C25D52FA6112E3FD5446BA41FE418880C168CA99D10E22F05',
      name: 'SEIYAN',
      display: 'SEIYAN',
      symbol: 'SEIYAN',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'sei',
            baseDenom: 'cw20:sei1hrndqntlvtmx2kepr0zsfgr7nzjptcc72cr4ppk4yav58vvy7v3s4er8ed',
            port: 'transfer',
            channelId: 'channel-0'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-782',
            path: 'transfer/channel-782/cw20:sei1hrndqntlvtmx2kepr0zsfgr7nzjptcc72cr4ppk4yav58vvy7v3s4er8ed'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/SEIYAN.png'
      },
      images: [{
          imageSync: {
            chainName: 'sei',
            baseDenom: 'cw20:sei1hrndqntlvtmx2kepr0zsfgr7nzjptcc72cr4ppk4yav58vvy7v3s4er8ed'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/SEIYAN.png',
          theme: {
            primaryColorHex: '#db1f22'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'The native token of Nibiru network',
      denomUnits: [{
          denom: 'ibc/4017C65CEA338196ECCEC3FE3FE8258F23D1DE88F1D95750CC912C7A1C1016FF',
          exponent: 0,
          aliases: ['unibi']
        }, {
          denom: 'nibi',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/4017C65CEA338196ECCEC3FE3FE8258F23D1DE88F1D95750CC912C7A1C1016FF',
      name: 'Nibiru',
      display: 'nibi',
      symbol: 'NIBI',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'nibiru',
            baseDenom: 'unibi',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-21113',
            path: 'transfer/channel-21113/unibi'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg'
      },
      images: [{
          imageSync: {
            chainName: 'nibiru',
            baseDenom: 'unibi'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg',
          theme: {
            primaryColorHex: '#14c0ce'
          }
        }]
    },
    {
      description: 'BEAST-ERC20 on injective',
      denomUnits: [{
          denom: 'ibc/B84F8CC583A54DA8173711C0B66B22FDC1954FEB1CA8DBC66C89919DAFE02000',
          exponent: 0,
          aliases: ['peggy0xA4426666addBE8c4985377d36683D17FB40c31Be']
        }, {
          denom: 'beast',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/B84F8CC583A54DA8173711C0B66B22FDC1954FEB1CA8DBC66C89919DAFE02000',
      name: 'Gelotto BEAST',
      display: 'beast',
      symbol: 'BEAST',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xA4426666addBE8c4985377d36683D17FB40c31Be'
          },
          provider: 'Peggy'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'peggy0xA4426666addBE8c4985377d36683D17FB40c31Be',
            channelId: 'channel-8'
          },
          chain: {
            channelId: 'channel-122',
            path: 'transfer/channel-122/peggy0xA4426666addBE8c4985377d36683D17FB40c31Be'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/beast.png'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xA4426666addBE8c4985377d36683D17FB40c31Be'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/beast.png',
          theme: {
            primaryColorHex: '#21172b'
          }
        }]
    },
    {
      description: 'Cvn is a Layer-1 blockchain built to deliver on the promise of DeFi',
      denomUnits: [{
          denom: 'ibc/044B7B28AFE93CEC769CF529ADC626DA09EA0EFA3E0E3284D540E9E00E01E24A',
          exponent: 0,
          aliases: ['acvnt']
        }, {
          denom: 'cvnt',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/044B7B28AFE93CEC769CF529ADC626DA09EA0EFA3E0E3284D540E9E00E01E24A',
      name: 'ConsciousDAO',
      display: 'cvnt',
      symbol: 'CVN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'conscious',
            baseDenom: 'acvnt',
            channelId: 'channel-6'
          },
          chain: {
            channelId: 'channel-73971',
            path: 'transfer/channel-73971/acvnt'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.svg'
      },
      images: [{
          imageSync: {
            chainName: 'conscious',
            baseDenom: 'acvnt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.svg',
          theme: {
            primaryColorHex: '#047e04'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'The memecoin built for the Celestia community',
      denomUnits: [{
          denom: 'factory/osmo1nr8zfakf6jauye3uqa9lrmr5xumee5n42lv92z/toro',
          exponent: 0
        }, {
          denom: 'toro',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1nr8zfakf6jauye3uqa9lrmr5xumee5n42lv92z',
      base: 'factory/osmo1nr8zfakf6jauye3uqa9lrmr5xumee5n42lv92z/toro',
      name: 'TORO',
      display: 'toro',
      symbol: 'TORO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/toro.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/toro.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/toro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/toro.svg',
          theme: {
            primaryColorHex: '#c39ccc'
          }
        }]
    },
    {
      description: 'Sayve is a revolutionary language learning app in the Web3 era that combines gamification, blockchain technology, and a Metaverse experience to motivate users to learn languages while earning rewards.',
      denomUnits: [{
          denom: 'ibc/06EF575844982382F4D1BC3830D294557A30EDB3CD223153AFC8DFEF06349C56',
          exponent: 0,
          aliases: ['cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3']
        }, {
          denom: 'sayve',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/06EF575844982382F4D1BC3830D294557A30EDB3CD223153AFC8DFEF06349C56',
      name: 'sayve',
      display: 'sayve',
      symbol: 'SAYVE',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'terra2',
            baseDenom: 'cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3',
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channelId: 'channel-26'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-341',
            path: 'transfer/channel-341/cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.svg'
      },
      images: [{
          imageSync: {
            chainName: 'terra2',
            baseDenom: 'cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.svg',
          theme: {
            primaryColorHex: '#f3ebdb'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'LAB - Everything is an Experiment',
      extendedDescription: 'LAB - Everything is an Experiment\n\nUse 10 $LAB tokens to mint 1 Mad Scientist NFT on Backbone Labs Osmosis Launchpad. You will then be able to trade your NFTs on the marketplace. You can also choose to hold onto your $LAB tokens as unrevealed NFTs and trade it.\n\n Fair Launch: The event was marked by the absence of whitelists (WLs), no bots and no lock, ensuring an equitable opportunity for all interested parties.\n\nPreparation for the Launch: Participants were given a 52.91-hour window to deposit $OSMO into a pool on Streamswap.\n\nThe Swap Process: After the initial deposit period, $OSMO was converted into $LAB tokens over an additional hour, allowing for a smooth transition and fair distribution.',
      denomUnits: [{
          denom: 'factory/osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n/LAB',
          exponent: 0
        }, {
          denom: 'LAB',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n',
      base: 'factory/osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n/LAB',
      name: 'LAB',
      display: 'LAB',
      symbol: 'LAB',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/LAB.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/LAB.png',
          theme: {
            primaryColorHex: '#bcdd76'
          }
        }],
      coingeckoId: 'mad-scientists'
    },
    {
      description: 'BackBone Labs Liquid Staked OSMO',
      extendedDescription: 'bOSMO - solving capital inefficiencies in the NFT market space',
      denomUnits: [{
          denom: 'factory/osmo1s3l0lcqc7tu0vpj6wdjz9wqpxv8nk6eraevje4fuwkyjnwuy82qsx3lduv/boneOsmo',
          exponent: 0
        }, {
          denom: 'bOSMO',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1s3l0lcqc7tu0vpj6wdjz9wqpxv8nk6eraevje4fuwkyjnwuy82qsx3lduv',
      base: 'factory/osmo1s3l0lcqc7tu0vpj6wdjz9wqpxv8nk6eraevje4fuwkyjnwuy82qsx3lduv/boneOsmo',
      name: 'BackBone Labs Liquid Staked OSMO',
      display: 'bOSMO',
      symbol: 'bOSMO',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'uosmo'
          },
          provider: 'BackBoneLabs'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/bOSMO.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/bOSMO.png',
          theme: {
            primaryColorHex: '#c68db5'
          }
        }],
      socials: {
        website: 'https://app.backbonelabs.io/',
        twitter: 'https://twitter.com/BackBone_Labs'
      }
    },
    {
      description: 'PUNDIX token is the native token that functions within the Pundi X ecosystem, including PundiX Chain and XPOS.',
      denomUnits: [{
          denom: 'ibc/46D8D1A6E2A80ECCB7CA6663086A2E749C508B68DA56A077CD26E6F4F9691EEE',
          exponent: 0,
          aliases: ['eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38']
        }, {
          denom: 'PUNDIX',
          exponent: 18,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/46D8D1A6E2A80ECCB7CA6663086A2E749C508B68DA56A077CD26E6F4F9691EEE',
      name: 'Pundi X Token',
      display: 'PUNDIX',
      symbol: 'PUNDIX',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38',
            contract: '0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38'
          },
          provider: 'Function X'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'fxcore',
            baseDenom: 'eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38',
            channelId: 'channel-19'
          },
          chain: {
            channelId: 'channel-2716',
            path: 'transfer/channel-2716/eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.svg',
          theme: {
            primaryColorHex: '#f1d20c'
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pundix.png',
          theme: {
            primaryColorHex: '#f1d20c'
          }
        }]
    },
    {
      description: 'The native fee, governance and staking token of the Tinkernet Parachain.',
      denomUnits: [{
          denom: 'ibc/3A0A392E610A8D477851ABFEA74F3D828F36C015AB8E93B0FBB7566A6D13C4D6',
          exponent: 0,
          aliases: ['2125', 'ibc/C58E5D2571042137CB68B1B9851C4E7211C05F7C2C79E21E0966AF0F063961F8']
        }, {
          denom: 'tnkr',
          exponent: 12
        }],
      typeAsset: 'ics20',
      base: 'ibc/3A0A392E610A8D477851ABFEA74F3D828F36C015AB8E93B0FBB7566A6D13C4D6',
      name: 'Tinkernet',
      display: 'tnkr',
      symbol: 'TNKR',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chainName: 'tinkernet',
            baseDenom: 'Planck'
          },
          provider: 'Tinkernet Parachain'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'picasso',
            baseDenom: '2125',
            channelId: 'channel-17'
          },
          chain: {
            channelId: 'channel-2',
            path: 'transfer/channel-2/2125'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'composable',
            baseDenom: 'ibc/C58E5D2571042137CB68B1B9851C4E7211C05F7C2C79E21E0966AF0F063961F8',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-2/2125'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tinkernet/images/tnkr.svg'
      },
      images: [{
          imageSync: {
            chainName: 'tinkernet',
            baseDenom: 'Planck'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tinkernet/images/tnkr.svg'
        }]
    },
    {
      description: 'W is the native token powering the Wormhole interoperability platform.',
      denomUnits: [{
          denom: 'ibc/AC6EE43E608B5A7EEE460C960480BC1C3708010E32B2071C429DA259836E10C3',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/2Wb6ueMFc9WLc2eyYVha6qnwHKbwzUXdooXsg6XXVvos']
        }, {
          denom: 'w',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/AC6EE43E608B5A7EEE460C960480BC1C3708010E32B2071C429DA259836E10C3',
      name: 'Wormhole Token',
      display: 'w',
      symbol: 'W',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: '85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ'
          },
          provider: 'Wormhole'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'gateway',
            baseDenom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/2Wb6ueMFc9WLc2eyYVha6qnwHKbwzUXdooXsg6XXVvos',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/2Wb6ueMFc9WLc2eyYVha6qnwHKbwzUXdooXsg6XXVvos'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/w.png'
      },
      images: [{
          imageSync: {
            chainName: 'solana',
            baseDenom: '85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/w.png',
          theme: {
            primaryColorHex: '#040404'
          }
        }]
    },
    {
      description: 'The native token of dHealth',
      denomUnits: [{
          denom: 'ibc/FD506CCA1FC574F2A8175FB574C981E9F6351E194AA48AC219BD67FF934E2F33',
          exponent: 0,
          aliases: ['udhp']
        }, {
          denom: 'dhp',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/FD506CCA1FC574F2A8175FB574C981E9F6351E194AA48AC219BD67FF934E2F33',
      name: 'dHealth',
      display: 'dhp',
      symbol: 'DHP',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'dhealth',
            baseDenom: 'udhp',
            channelId: 'channel-4'
          },
          chain: {
            channelId: 'channel-75030',
            path: 'transfer/channel-75030/udhp'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.svg'
      },
      images: [{
          imageSync: {
            chainName: 'dhealth',
            baseDenom: 'udhp'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.svg',
          theme: {
            primaryColorHex: '#140c7c'
          }
        }]
    },
    {
      description: 'The native token of Furya',
      denomUnits: [{
          denom: 'ibc/E4C60B9F95BF54CC085A5E39F6057ABD4DF92793D330EB884A36530F7E6804DE',
          exponent: 0,
          aliases: ['ufury']
        }, {
          denom: 'fury',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/E4C60B9F95BF54CC085A5E39F6057ABD4DF92793D330EB884A36530F7E6804DE',
      name: 'furya',
      display: 'fury',
      symbol: 'FURY',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'furya',
            baseDenom: 'ufury',
            channelId: 'channel-8'
          },
          chain: {
            channelId: 'channel-74222',
            path: 'transfer/channel-74222/ufury'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.svg'
      },
      images: [{
          imageSync: {
            chainName: 'furya',
            baseDenom: 'ufury'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.svg',
          theme: {
            primaryColorHex: '#040404'
          }
        }],
      keywords: ['gaming', 'staking']
    },
    {
      description: 'The native staking and governance token of Saga.',
      denomUnits: [{
          denom: 'ibc/094FB70C3006906F67F5D674073D2DAFAFB41537E7033098F5C752F211E7B6C2',
          exponent: 0,
          aliases: ['usaga']
        }, {
          denom: 'saga',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/094FB70C3006906F67F5D674073D2DAFAFB41537E7033098F5C752F211E7B6C2',
      name: 'Saga',
      display: 'saga',
      symbol: 'SAGA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'saga',
            baseDenom: 'usaga',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-38946',
            path: 'transfer/channel-38946/usaga'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga_white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga_white.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga_white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga_white.svg',
          theme: {
            primaryColorHex: '#FFFFFF',
            darkMode: true
          }
        }, {
          imageSync: {
            chainName: 'saga',
            baseDenom: 'usaga'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg',
          theme: {
            primaryColorHex: '#000000',
            darkMode: false
          }
        }]
    },
    {
      description: '$ATOM to $1,000 LFG!!',
      denomUnits: [{
          denom: 'ibc/0E77E090EC04C476DE2BC0A7056580AC47660DAEB7B0D4701C085E3A046AC7B7',
          exponent: 0,
          aliases: ['uatom1klfg', 'factory/neutron13lkh47msw28yynspc5rnmty3yktk43wc3dsv0l/ATOM1KLFG']
        }, {
          denom: 'ATOM1KLFG',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/0E77E090EC04C476DE2BC0A7056580AC47660DAEB7B0D4701C085E3A046AC7B7',
      name: 'ATOM1KLFG',
      display: 'ATOM1KLFG',
      symbol: 'ATOM1KLFG',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron13lkh47msw28yynspc5rnmty3yktk43wc3dsv0l/ATOM1KLFG',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-874',
            path: 'transfer/channel-874/factory/neutron13lkh47msw28yynspc5rnmty3yktk43wc3dsv0l/ATOM1KLFG'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ATOM1KLFGc.png'
      },
      images: [{
          imageSync: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron13lkh47msw28yynspc5rnmty3yktk43wc3dsv0l/ATOM1KLFG'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ATOM1KLFGc.png',
          theme: {
            primaryColorHex: '#040404'
          }
        }]
    },
    {
      description: 'The native EVM and Wasm, governance and staking token of the Shido Chain',
      denomUnits: [{
          denom: 'ibc/62B50BB1DAEAD2A92D6C6ACAC118F4ED8CBE54265DCF5688E8D0A0A978AA46E7',
          exponent: 0,
          aliases: ['shido']
        }, {
          denom: 'SHIDO',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/62B50BB1DAEAD2A92D6C6ACAC118F4ED8CBE54265DCF5688E8D0A0A978AA46E7',
      name: 'Shido',
      display: 'SHIDO',
      symbol: 'SHIDO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'shido',
            baseDenom: 'shido',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-73755',
            path: 'transfer/channel-73755/shido'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.svg'
      },
      images: [{
          imageSync: {
            chainName: 'shido',
            baseDenom: 'shido'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.svg',
          theme: {
            primaryColorHex: '#046ffc'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'Decentralized Machine Learning',
      denomUnits: [{
          denom: 'ibc/EFC1776BEFB7842F2DC7BABD9A3050E188145C99007ECC5F3526FED45A68D5F5',
          exponent: 0,
          aliases: ['ucif']
        }, {
          denom: 'cif',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/EFC1776BEFB7842F2DC7BABD9A3050E188145C99007ECC5F3526FED45A68D5F5',
      name: 'Cifer',
      display: 'cif',
      symbol: 'CIF',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cifer',
            baseDenom: 'ucif',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-39205',
            path: 'transfer/channel-39205/ucif'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.svg'
      },
      images: [{
          imageSync: {
            chainName: 'cifer',
            baseDenom: 'ucif'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.svg',
          theme: {
            primaryColorHex: '#af49b7'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'Hava Coin is the lifeblood of the Cosmos & Injective networks, rewarding builders and welcoming supporters. https://havacoin.xyz/',
      denomUnits: [{
          denom: 'ibc/884EBC228DFCE8F1304D917A712AA9611427A6C1ECC3179B2E91D7468FB091A2',
          exponent: 0,
          aliases: ['factory/inj1h0ypsdtjfcjynqu3m75z2zwwz5mmrj8rtk2g52/uhava']
        }, {
          denom: 'hava',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/884EBC228DFCE8F1304D917A712AA9611427A6C1ECC3179B2E91D7468FB091A2',
      name: 'Hava Coin',
      display: 'hava',
      symbol: 'HAVA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'factory/inj1h0ypsdtjfcjynqu3m75z2zwwz5mmrj8rtk2g52/uhava',
            channelId: 'channel-8'
          },
          chain: {
            channelId: 'channel-122',
            path: 'transfer/channel-122/factory/inj1h0ypsdtjfcjynqu3m75z2zwwz5mmrj8rtk2g52/uhava'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/hava.png'
      },
      images: [{
          imageSync: {
            chainName: 'injective',
            baseDenom: 'factory/inj1h0ypsdtjfcjynqu3m75z2zwwz5mmrj8rtk2g52/uhava'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/hava.png',
          theme: {
            primaryColorHex: '#eacea5'
          }
        }]
    },
    {
      description: 'OnE mEmEcOiN tO cOnNeCt oL ImBeCiles - aNd in Da Cosmos BiNd DeM',
      denomUnits: [{
          denom: 'factory/osmo1kqdw6pvn0xww6tyfv2sqvkkencdz0qw406x54r/IBC',
          exponent: 0
        }, {
          denom: 'IBC',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/osmo1kqdw6pvn0xww6tyfv2sqvkkencdz0qw406x54r/IBC',
      name: 'IBC',
      display: 'IBC',
      symbol: 'IBC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ibc.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ibc.png',
          theme: {
            primaryColorHex: '#040404'
          }
        }],
      keywords: ['memecoin', 'osmosis_unlisted'],
      socials: {
        website: 'https://www.ibcmeme.wtf',
        twitter: 'https://twitter.com/IBCmemecoin'
      }
    },
    {
      description: 'The token of Crowdpunk DAO',
      denomUnits: [{
          denom: 'ibc/5EC896BED3EBCB2CB6F1C167582E4EFA3F6FA3385F28BA5EA92D4A489DA010C5',
          exponent: 0,
          aliases: ['erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F']
        }, {
          denom: 'crowdp',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/5EC896BED3EBCB2CB6F1C167582E4EFA3F6FA3385F28BA5EA92D4A489DA010C5',
      name: 'Crowdpunk DAO',
      display: 'crowdp',
      symbol: 'CROWDP',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'evmos',
            baseDenom: 'erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-204',
            path: 'transfer/channel-204/erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.svg'
      },
      images: [{
          imageSync: {
            chainName: 'evmos',
            baseDenom: 'erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.svg',
          theme: {
            primaryColorHex: '#04fbfb'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.',
      denomUnits: [{
          denom: 'ibc/B8C608CEE08C4F30A15A7955306F2EDAF4A02BB191CABC4185C1A57FD978DA1B',
          exponent: 0,
          aliases: ['uastro']
        }, {
          denom: 'astro',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/B8C608CEE08C4F30A15A7955306F2EDAF4A02BB191CABC4185C1A57FD978DA1B',
      name: 'Astroport token',
      display: 'astro',
      symbol: 'ASTRO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-874',
            path: 'transfer/channel-874/factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.svg'
      },
      images: [{
          imageSync: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.svg',
          theme: {
            primaryColorHex: '#4056e9'
          }
        }]
    },
    {
      description: 'Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.',
      denomUnits: [{
          denom: 'ibc/2ED09B03AA396BC2F35B741F4CA4A82D33A24A1007BFC1973299842DD626F564',
          exponent: 0,
          aliases: ['uxastro', 'factory/neutron1zlf3hutsa4qnmue53lz2tfxrutp8y2e3rj4nkghg3rupgl4mqy8s5jgxsn/xASTRO']
        }, {
          denom: 'xASTRO',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/2ED09B03AA396BC2F35B741F4CA4A82D33A24A1007BFC1973299842DD626F564',
      name: 'Staked Astroport Token',
      display: 'xASTRO',
      symbol: 'xASTRO',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro'
          },
          provider: 'Astroport'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1zlf3hutsa4qnmue53lz2tfxrutp8y2e3rj4nkghg3rupgl4mqy8s5jgxsn/xASTRO',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-874',
            path: 'transfer/channel-874/factory/neutron1zlf3hutsa4qnmue53lz2tfxrutp8y2e3rj4nkghg3rupgl4mqy8s5jgxsn/xASTRO'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/xAstro.svg'
      },
      images: [{
          imageSync: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1zlf3hutsa4qnmue53lz2tfxrutp8y2e3rj4nkghg3rupgl4mqy8s5jgxsn/xASTRO'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/xAstro.svg'
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'Gravity Bridge Paxos Gold',
      denomUnits: [{
          denom: 'ibc/A5CCD24BA902843B1003A7EEE5F937C632808B9CF4925601241B15C5A0A51A53',
          exponent: 0,
          aliases: ['gravity0x45804880De22913dAFE09f4980848ECE6EcbAf78']
        }, {
          denom: 'gpaxg',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/A5CCD24BA902843B1003A7EEE5F937C632808B9CF4925601241B15C5A0A51A53',
      name: 'Paxos Gold (Gravity Bridge)',
      display: 'gpaxg',
      symbol: 'PAXG.grv',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'comex',
            baseDenom: 'XAU'
          },
          provider: 'Paxos'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x45804880De22913dAFE09f4980848ECE6EcbAf78'
          },
          provider: 'Gravity Bridge'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'gravitybridge',
            baseDenom: 'gravity0x45804880De22913dAFE09f4980848ECE6EcbAf78',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-144',
            path: 'transfer/channel-144/gravity0x45804880De22913dAFE09f4980848ECE6EcbAf78'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/paxg.grv.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/paxg.grv.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/paxg.grv.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/paxg.grv.svg',
          theme: {
            primaryColorHex: '#ddc81a'
          }
        }, {
          imageSync: {
            chainName: 'gravitybridge',
            baseDenom: 'gravity0x45804880De22913dAFE09f4980848ECE6EcbAf78'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/paxg.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/paxg.svg',
          theme: {
            primaryColorHex: '#ebe60e'
          }
        }]
    },
    {
      description: 'Restake DAO Token',
      denomUnits: [{
          denom: 'ibc/04FAC73DFF7F1DD59395948F2F043B0BBF978AD4533EE37E811340F501A08FFB',
          exponent: 0,
          aliases: ['factory/migaloo1d0uma9qzcts4fzt7ml39xp44aut5k6qyjfzz4asalnecppppr3rsl52vvv/rstk']
        }, {
          denom: 'rstk',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/04FAC73DFF7F1DD59395948F2F043B0BBF978AD4533EE37E811340F501A08FFB',
      name: 'RESTAKE',
      display: 'rstk',
      symbol: 'RSTK',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'migaloo',
            baseDenom: 'factory/migaloo1d0uma9qzcts4fzt7ml39xp44aut5k6qyjfzz4asalnecppppr3rsl52vvv/rstk',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-642',
            path: 'transfer/channel-642/factory/migaloo1d0uma9qzcts4fzt7ml39xp44aut5k6qyjfzz4asalnecppppr3rsl52vvv/rstk'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rstk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rstk.svg'
      },
      images: [{
          imageSync: {
            chainName: 'migaloo',
            baseDenom: 'factory/migaloo1d0uma9qzcts4fzt7ml39xp44aut5k6qyjfzz4asalnecppppr3rsl52vvv/rstk'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rstk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rstk.svg',
          theme: {
            primaryColorHex: '#3ccc64'
          }
        }]
    },
    {
      description: 'Bernese Mountain Dog. Thematic dog token to have fun and be friends with all other dog tokens. Fixed supply 132M',
      denomUnits: [{
          denom: 'factory/osmo1s6ht8qrm8x0eg8xag5x3ckx9mse9g4se248yss/BERNESE',
          exponent: 0
        }, {
          denom: 'BERNESE',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1s6ht8qrm8x0eg8xag5x3ckx9mse9g4se248yss',
      base: 'factory/osmo1s6ht8qrm8x0eg8xag5x3ckx9mse9g4se248yss/BERNESE',
      name: 'BERNESE',
      display: 'BERNESE',
      symbol: 'BERNESE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/bernese.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/bernese.png',
          theme: {
            primaryColorHex: '#e7754f'
          }
        }],
      keywords: ['memecoin'],
      socials: {
        website: 'https://bernesechain.github.io',
        twitter: 'https://twitter.com/bernesechain'
      }
    },
    {
      description: 'The native token of Ethereum, bridged via IBC.',
      denomUnits: [{
          denom: 'ibc/A23E590BA7E0D808706FB5085A449B3B9D6864AE4DDE7DAF936243CEBB2A3D43',
          exponent: 0,
          aliases: ['wei', 'ibc/F9D075D4079FC56A9C49B601E54A45292C319D8B0E8CC0F8439041130AA7166C']
        }, {
          denom: 'eth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/A23E590BA7E0D808706FB5085A449B3B9D6864AE4DDE7DAF936243CEBB2A3D43',
      name: 'Ethereum (Picasso)',
      display: 'eth',
      symbol: 'ETH.pica',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/wei'
          },
          provider: 'Picasso'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'composable',
            baseDenom: 'ibc/F9D075D4079FC56A9C49B601E54A45292C319D8B0E8CC0F8439041130AA7166C',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-52/wei'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/eth.pica.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/eth.pica.svg'
        }, {
          imageSync: {
            chainName: 'composable',
            baseDenom: 'ibc/F9D075D4079FC56A9C49B601E54A45292C319D8B0E8CC0F8439041130AA7166C'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          theme: {
            primaryColorHex: '#303030'
          }
        }]
    },
    {
      description: 'A stablecoin issued by Maker Protocol.',
      denomUnits: [{
          denom: 'ibc/37DFAFDA529FF7D513B0DB23E9728DF9BF73122D38D46824C78BB7F91E6A736B',
          exponent: 0,
          aliases: ['dai-wei', 'ibc/A342F6F8D1CDE1D934C50E8EAFF91E813D971E1BFEED7E557F1674E01004A533']
        }, {
          denom: 'dai',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/37DFAFDA529FF7D513B0DB23E9728DF9BF73122D38D46824C78BB7F91E6A736B',
      name: 'Dai Stablecoin (Picasso)',
      display: 'dai',
      symbol: 'DAI.pica',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'MakerDAO'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x6b175474e89094c44da98b954eedeac495271d0f',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/0x6b175474e89094c44da98b954eedeac495271d0f'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'composable',
            baseDenom: 'ibc/A342F6F8D1CDE1D934C50E8EAFF91E813D971E1BFEED7E557F1674E01004A533',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-52/0x6b175474e89094c44da98b954eedeac495271d0f'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dai.pica.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dai.pica.svg'
        }, {
          imageSync: {
            chainName: 'composable',
            baseDenom: 'ibc/A342F6F8D1CDE1D934C50E8EAFF91E813D971E1BFEED7E557F1674E01004A533'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
        }]
    },
    {
      description: 'The governance token of the Frax ecosystem.',
      denomUnits: [{
          denom: 'ibc/5435437A8C9416B650DDA49C338B63CCFC6465123B715F6BAA9B1B2071E27913',
          exponent: 0,
          aliases: ['fxs-wei', 'ibc/5F9BE030FC355733EC79307409FA98398BBFC747C9430B326C144A74F6808B29']
        }, {
          denom: 'fxs',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/5435437A8C9416B650DDA49C338B63CCFC6465123B715F6BAA9B1B2071E27913',
      name: 'Frax Share (Picasso)',
      display: 'fxs',
      symbol: 'FXS.pica',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0'
          },
          provider: 'Picasso'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'composable',
            baseDenom: 'ibc/5F9BE030FC355733EC79307409FA98398BBFC747C9430B326C144A74F6808B29',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-52/0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fxs.pica.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fxs.pica.svg'
        }, {
          imageSync: {
            chainName: 'composable',
            baseDenom: 'ibc/5F9BE030FC355733EC79307409FA98398BBFC747C9430B326C144A74F6808B29'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.png',
          theme: {
            primaryColorHex: '#040404'
          }
        }]
    },
    {
      description: 'The first fractional-algorithmic stablecoin by Frax Finance.',
      denomUnits: [{
          denom: 'ibc/9A8CBC029002DC5170E715F93FBF35011FFC9796371F59B1F3C3094AE1B453A9',
          exponent: 0,
          aliases: ['frax-wei', 'ibc/4F20D68B51ED559F99C3CD658383E91F45486D884BF546E7B25337A058562CDB']
        }, {
          denom: 'frax',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/9A8CBC029002DC5170E715F93FBF35011FFC9796371F59B1F3C3094AE1B453A9',
      name: 'Frax (Picasso)',
      display: 'frax',
      symbol: 'FRAX.pica',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Frax Protocol'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x853d955acef822db058eb8505911ed77f175b99e',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/0x853d955acef822db058eb8505911ed77f175b99e'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'composable',
            baseDenom: 'ibc/4F20D68B51ED559F99C3CD658383E91F45486D884BF546E7B25337A058562CDB',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-52/0x853d955acef822db058eb8505911ed77f175b99e'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/frax.pica.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/frax.pica.svg'
        }, {
          imageSync: {
            chainName: 'composable',
            baseDenom: 'ibc/4F20D68B51ED559F99C3CD658383E91F45486D884BF546E7B25337A058562CDB'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
        }]
    },
    {
      description: 'A stablecoin issued by Tether that is pegged 1:1 to the USD.',
      denomUnits: [{
          denom: 'ibc/078AD6F581E8115CDFBD8FFA29D8C71AFE250CE952AFF80040CBC64868D44AD3',
          exponent: 0,
          aliases: ['uusdt', 'ibc/37CC704EA53E96AB09A9C31D79142DE7DB252420F3AB18015F9870AE219947BD']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/078AD6F581E8115CDFBD8FFA29D8C71AFE250CE952AFF80040CBC64868D44AD3',
      name: 'Tether USD (Ethereum via Picasso)',
      display: 'usdt',
      symbol: 'USDT.eth.pica',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Tether'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'composable',
            baseDenom: 'ibc/37CC704EA53E96AB09A9C31D79142DE7DB252420F3AB18015F9870AE219947BD',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-52/0xdac17f958d2ee523a2206206994597c13d831ec7'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.pica.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.pica.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.pica.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.pica.png',
          theme: {
            primaryColorHex: '#049494'
          }
        }, {
          imageSync: {
            chainName: 'composable',
            baseDenom: 'ibc/37CC704EA53E96AB09A9C31D79142DE7DB252420F3AB18015F9870AE219947BD'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true,
            primaryColorHex: '#009393',
            backgroundColorHex: '#009393'
          }
        }]
    },
    {
      description: 'An ERC4626 staking vault that distributes part of the Frax Protocol yield weekly to stakers denominated in FRAX stablecoins. ',
      denomUnits: [{
          denom: 'ibc/0EFA07F312E05258A56AE1DD600E39B9151CF7A91C8A94EEBCF4F03ECFE5DD98',
          exponent: 0,
          aliases: ['sfrax-wei', 'ibc/5BD7F23FE150D9CF3BCC944DB829380BCC51A4022A131151C4D13B3AFAC2D1D9']
        }, {
          denom: 'sfrax',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/0EFA07F312E05258A56AE1DD600E39B9151CF7A91C8A94EEBCF4F03ECFE5DD98',
      name: 'Staked FRAX (Picasso)',
      display: 'sfrax',
      symbol: 'sFRAX.pica',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Frax Protocol'
        },
        {
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x853d955acef822db058eb8505911ed77f175b99e'
          },
          provider: 'Frax'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'composable',
            baseDenom: 'ibc/5BD7F23FE150D9CF3BCC944DB829380BCC51A4022A131151C4D13B3AFAC2D1D9',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-52/0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sfrax.pica.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sfrax.pica.svg'
        }, {
          imageSync: {
            chainName: 'composable',
            baseDenom: 'ibc/5BD7F23FE150D9CF3BCC944DB829380BCC51A4022A131151C4D13B3AFAC2D1D9'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.png',
          theme: {
            primaryColorHex: '#040404'
          }
        }]
    },
    {
      description: 'A liquid ETH staking derivative designed to leverage the Frax ecosystem.',
      denomUnits: [{
          denom: 'ibc/688E70EF567E5D4BA1CF4C54BAD758C288BC1A6C8B0B12979F911A2AE95E27EC',
          exponent: 0,
          aliases: ['frxeth-wei', 'ibc/458032E654E41DB91EF98F13E2CE4F9E0FE86BA3E0CDBEC074A854E9F5229A90']
        }, {
          denom: 'frxeth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/688E70EF567E5D4BA1CF4C54BAD758C288BC1A6C8B0B12979F911A2AE95E27EC',
      name: 'Frax Ether (Picasso)',
      display: 'frxeth',
      symbol: 'frxETH.pica',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Frax'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x5e8422345238f34275888049021821e8e08caa1f',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/0x5e8422345238f34275888049021821e8e08caa1f'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'composable',
            baseDenom: 'ibc/458032E654E41DB91EF98F13E2CE4F9E0FE86BA3E0CDBEC074A854E9F5229A90',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-52/0x5e8422345238f34275888049021821e8e08caa1f'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/frxeth.pica.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/frxeth.pica.svg'
        }, {
          imageSync: {
            chainName: 'composable',
            baseDenom: 'ibc/458032E654E41DB91EF98F13E2CE4F9E0FE86BA3E0CDBEC074A854E9F5229A90'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.png',
          theme: {
            primaryColorHex: '#040404'
          }
        }]
    },
    {
      description: 'A Liquid Staking Derivative designed to accrue the staking yield of the Frax ETH validators.',
      denomUnits: [{
          denom: 'ibc/F17CCB4F07948CC2D8B72952C2D0A84F2B763962F698774BB121B872AE4611B5',
          exponent: 0,
          aliases: ['sfrxeth-wei', 'ibc/4E0ECE7819D77B0F2B49F5C34B5E594A02D2BA8B1B0F103208F847B53EBFB69A']
        }, {
          denom: 'sfrxeth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/F17CCB4F07948CC2D8B72952C2D0A84F2B763962F698774BB121B872AE4611B5',
      name: 'Staked Frax Ether (Picasso)',
      display: 'sfrxeth',
      symbol: 'sfrxETH.pica',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Frax'
        },
        {
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x5e8422345238f34275888049021821e8e08caa1f'
          },
          provider: 'Frax'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xac3e018457b222d93114458476f3e3416abbe38f',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/0xac3e018457b222d93114458476f3e3416abbe38f'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'composable',
            baseDenom: 'ibc/4E0ECE7819D77B0F2B49F5C34B5E594A02D2BA8B1B0F103208F847B53EBFB69A',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-52/0xac3e018457b222d93114458476f3e3416abbe38f'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sfrxeth.pica.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sfrxeth.pica.svg'
        }, {
          imageSync: {
            chainName: 'composable',
            baseDenom: 'ibc/4E0ECE7819D77B0F2B49F5C34B5E594A02D2BA8B1B0F103208F847B53EBFB69A'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
        }]
    },
    {
      description: 'Adam Clay a BitSong Music FanToken',
      denomUnits: [{
          denom: 'ibc/7ABF696369EFB3387DF22B6A24204459FE5EFD010220E8E5618DC49DB877047B',
          exponent: 0,
          aliases: ['ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09']
        }, {
          denom: 'clay',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/7ABF696369EFB3387DF22B6A24204459FE5EFD010220E8E5618DC49DB877047B',
      name: 'Adam Clay FanToken',
      display: 'clay',
      symbol: 'CLAY',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'bitsong',
            baseDenom: 'ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-73',
            path: 'transfer/channel-73/ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09.png'
      },
      images: [{
          imageSync: {
            chainName: 'bitsong',
            baseDenom: 'ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09.png',
          theme: {
            primaryColorHex: '#e8e5e7'
          }
        }]
    },
    {
      description: '404Deep Records a BitSong Music FanToken',
      denomUnits: [{
          denom: 'ibc/B797E4F42CD33C50511B341E50C5CC0E8EF0D93B1E1247ABAA071583B8619202',
          exponent: 0,
          aliases: ['ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A']
        }, {
          denom: '404dr',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/B797E4F42CD33C50511B341E50C5CC0E8EF0D93B1E1247ABAA071583B8619202',
      name: '404Deep Records Fantoken',
      display: '404dr',
      symbol: '404DR',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'bitsong',
            baseDenom: 'ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-73',
            path: 'transfer/channel-73/ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A.png'
      },
      images: [{
          imageSync: {
            chainName: 'bitsong',
            baseDenom: 'ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A.png',
          theme: {
            primaryColorHex: '#cfb1b3'
          }
        }]
    },
    {
      description: 'wLibra is a bridged version of Libra Coin from 0L Network via LibraBridge.',
      extendedDescription: 'Libra Coin is a fork from Facebook\'s Diem (Libra) blockchain that was announced in 2019. Libra Coin operates on its own high-performance Layer 1 blockchain, known as the 0L Network. In October 2021, Libra Coin began mining.\n\n Like Bitcoin, there were no pre-mined coins or dedicated token allocation to any parties; all coins were minted through a mining process. Unlike Bitcoin, which undergoes continuous issuance, Libra Coin has a fixed supply. By December 2023, all the Libra Coin had been issued, establishing a capped supply and making the coin permanently deflationary.\n\n Fiercely independent, the project has a long-term view because it is unburdened by venture capital funding, labs entities, a foundation, and the influence of other blockchain ecosystems. Carpe diem.',
      denomUnits: [{
          denom: 'factory/osmo19hdqma2mj0vnmgcxag6ytswjnr8a3y07q7e70p/wLIBRA',
          exponent: 0
        }, {
          denom: 'wLIBRA',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo19hdqma2mj0vnmgcxag6ytswjnr8a3y07q7e70p',
      base: 'factory/osmo19hdqma2mj0vnmgcxag6ytswjnr8a3y07q7e70p/wLIBRA',
      name: 'Wrapped Libra Coin (LibraBridge)',
      display: 'wLIBRA',
      symbol: 'wLIBRA',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: '0l',
            baseDenom: 'microlibra'
          },
          provider: 'LibraBridge'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/0l/images/libra.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/0l/images/libra.png'
      },
      images: [{
          imageSync: {
            chainName: '0l',
            baseDenom: 'microlibra'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/0l/images/libra.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/0l/images/libra.png',
          theme: {
            primaryColorHex: '#e45c5c'
          }
        }],
      socials: {
        website: 'https://0l.network/',
        twitter: 'https://twitter.com/0LNetwork'
      }
    },
    {
      description: 'The native token of Nim Network.',
      extendedDescription: 'Nim Network is a highly-adoptable AI Gaming chain that will provide the ultimate ecosystem for exploration and development of games at the intersection of Web3 and AI.',
      denomUnits: [{
          denom: 'ibc/279D69A6EF8E37456C8D2DC7A7C1C50F7A566EC4758F6DE17472A9FDE36C4426',
          exponent: 0,
          aliases: ['anim', 'ibc/FB53D1684F155CBB86D9CE917807E42B59209EBE3AD3A92E15EF66586C073942']
        }, {
          denom: 'nim',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/279D69A6EF8E37456C8D2DC7A7C1C50F7A566EC4758F6DE17472A9FDE36C4426',
      name: 'Nim Network',
      display: 'nim',
      symbol: 'NIM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'nim',
            baseDenom: 'anim',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-49',
            path: 'transfer/channel-49/anim'
          }
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'dymension',
            baseDenom: 'ibc/FB53D1684F155CBB86D9CE917807E42B59209EBE3AD3A92E15EF66586C073942',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-19774',
            path: 'transfer/channel-19774/transfer/channel-49/anim'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.svg'
      },
      images: [{
          imageSync: {
            chainName: 'nim',
            baseDenom: 'anim'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.svg',
          theme: {
            primaryColorHex: '#519cea'
          }
        }],
      keywords: [
        'gaming',
        'AI',
        'osmosis_unstable'
      ],
      socials: {
        website: 'https://ai.nim.network/',
        twitter: 'https://twitter.com/nim_network'
      }
    },
    {
      description: 'The native token of SEDA Chain.',
      denomUnits: [{
          denom: 'ibc/956AEF1DA92F70584266E87978C3F30A43B91EE6ABC62F03D097E79F6B99C4D8',
          exponent: 0,
          aliases: ['aseda']
        }, {
          denom: 'seda',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/956AEF1DA92F70584266E87978C3F30A43B91EE6ABC62F03D097E79F6B99C4D8',
      name: 'SEDA',
      display: 'seda',
      symbol: 'SEDA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'seda',
            baseDenom: 'aseda',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-75016',
            path: 'transfer/channel-75016/aseda'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.svg'
      },
      images: [{
          imageSync: {
            chainName: 'seda',
            baseDenom: 'aseda'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.svg',
          theme: {
            primaryColorHex: '#8178d1'
          }
        }]
    },
    {
      description: 'Cosmos Airdrop Chat',
      extendedDescription: 'Official Token of the Cosmos Airdrop community',
      denomUnits: [{
          denom: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/cac',
          exponent: 0
        }, {
          denom: 'CAC',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8',
      base: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/cac',
      name: 'Cosmos Airdrop Chat',
      display: 'CAC',
      symbol: 'CAC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CAC.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CAC.png',
          theme: {
            primaryColorHex: '#160542'
          }
        }]
    },
    {
      description: 'WEIRD token for WEIRD friends collection',
      denomUnits: [{
          denom: 'ibc/38ADC6FFDDDB7D70B72AD0322CEA8844CB18FAA0A23400DBA8A99D43E18B3748',
          exponent: 0,
          aliases: ['uWEIRD']
        }, {
          denom: 'WEIRD',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/38ADC6FFDDDB7D70B72AD0322CEA8844CB18FAA0A23400DBA8A99D43E18B3748',
      name: 'WEIRD',
      display: 'WEIRD',
      symbol: 'WEIRD',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/WEIRD',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-874',
            path: 'transfer/channel-874/factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/WEIRD'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WEIRD.png'
      },
      images: [{
          imageSync: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/WEIRD'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WEIRD.png',
          theme: {
            primaryColorHex: '#ebf0f4'
          }
        }]
    },
    {
      description: 'Uhm, Power Bottom',
      denomUnits: [{
          denom: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/pbb',
          exponent: 0
        }, {
          denom: 'PBB',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8',
      base: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/pbb',
      name: 'Power Bottom',
      display: 'PBB',
      symbol: 'PBB',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/PBB.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/PBB.png',
          theme: {
            primaryColorHex: '#f21313'
          }
        }]
    },
    {
      description: 'Beer Is Good for You!',
      denomUnits: [{
          denom: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/bwh',
          exponent: 0
        }, {
          denom: 'bwh',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8',
      base: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/bwh',
      name: 'BeerWifHat',
      display: 'bwh',
      symbol: 'BWH',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/BWH.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/BWH.png',
          theme: {
            primaryColorHex: '#775038'
          }
        }]
    },
    {
      description: 'Airdrop For All [AFA - New Name on Cosmos Ecosystem, A4A - Old Name on TurtleNetwork] is a token from turtleNetwork towards cosmos ecosystem.',
      denomUnits: [{
          denom: 'ibc/0D62E47FDEBBC199D4E1853C0708F0F9337AC62D95B719585C9700E466060995',
          exponent: 0,
          aliases: ['cw20:juno1spjes0smg5yp40dl7gqyw0h8rn03tnmve06dd2m5acwgh6tlx86swha3xg']
        }],
      typeAsset: 'ics20',
      base: 'ibc/0D62E47FDEBBC199D4E1853C0708F0F9337AC62D95B719585C9700E466060995',
      name: 'Airdrop For All',
      display: 'cw20:juno1spjes0smg5yp40dl7gqyw0h8rn03tnmve06dd2m5acwgh6tlx86swha3xg',
      symbol: 'AFA',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1spjes0smg5yp40dl7gqyw0h8rn03tnmve06dd2m5acwgh6tlx86swha3xg',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1spjes0smg5yp40dl7gqyw0h8rn03tnmve06dd2m5acwgh6tlx86swha3xg'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/afa.png'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1spjes0smg5yp40dl7gqyw0h8rn03tnmve06dd2m5acwgh6tlx86swha3xg'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/afa.png',
          theme: {
            primaryColorHex: '#f3cb0c'
          }
        }]
    },
    {
      description: 'The Cosmos Network\'s premier self-hatred memecoin.',
      extendedDescription: 'Shitmos is a fair launched token deployed via the start.cooking liquidity bootstrapping protocol (LBP) on the Osmosis blockchain. It is powered by the Shitmos Economic Zone (SEZ), and it has been designed with the goal of uniting the Cosmos Network and interchain-at-large ecosystems by making crypto fun. The SEZ is a federation of nft collections on Stargaze that supports Shitmos by providing at least 2% of royalties towards open market purchases of Shitmos.',
      denomUnits: [{
          denom: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/shitmos',
          exponent: 0
        }, {
          denom: 'SHITMOS',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8',
      base: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/shitmos',
      name: 'Shitmos',
      display: 'SHITMOS',
      symbol: 'SHITMOS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/shitmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/shitmos.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/shitmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/shitmos.svg',
          theme: {
            primaryColorHex: '#639BFF',
            circle: true
          }
        }],
      keywords: ['memecoin'],
      socials: {
        website: 'https://shitmos.wtf',
        twitter: 'https://twitter.com/shitoncosmos'
      }
    },
    {
      description: 'Quicksilver Liquid Staked JUNO',
      denomUnits: [{
          denom: 'ibc/B4E18E61E1505C2F371B621E49B09E983F6A138F251A7B5286A6BDF739FD0D54',
          exponent: 0,
          aliases: ['uqjuno']
        }, {
          denom: 'qjuno',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/B4E18E61E1505C2F371B621E49B09E983F6A138F251A7B5286A6BDF739FD0D54',
      name: 'Quicksilver Liquid Staked JUNO',
      display: 'qjuno',
      symbol: 'qJUNO',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'ujuno'
          },
          provider: 'Quicksilver'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'quicksilver',
            baseDenom: 'uqjuno',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-522',
            path: 'transfer/channel-522/uqjuno'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qjuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qjuno.svg'
      },
      images: [{
          imageSync: {
            chainName: 'quicksilver',
            baseDenom: 'uqjuno'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qjuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qjuno.svg',
          theme: {
            primaryColorHex: '#fc944c'
          }
        }]
    },
    {
      description: 'Quicksilver Liquid Staked SAGA',
      denomUnits: [{
          denom: 'ibc/F2D400F2728E9DA06EAE2AFAB289931A69EDDA5A661578C66A3177EDFE3C0D13',
          exponent: 0,
          aliases: ['uqsaga']
        }, {
          denom: 'qsaga',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/F2D400F2728E9DA06EAE2AFAB289931A69EDDA5A661578C66A3177EDFE3C0D13',
      name: 'Quicksilver Liquid Staked SAGA',
      display: 'qsaga',
      symbol: 'qSAGA',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'saga',
            baseDenom: 'usaga'
          },
          provider: 'Quicksilver'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'quicksilver',
            baseDenom: 'uqsaga',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-522',
            path: 'transfer/channel-522/uqsaga'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsaga.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsaga.svg'
      },
      images: [{
          imageSync: {
            chainName: 'quicksilver',
            baseDenom: 'uqsaga'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsaga.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsaga.svg',
          theme: {
            primaryColorHex: '#f9924b'
          }
        }]
    },
    {
      description: 'Quicksilver Liquid Staked DYDX',
      denomUnits: [{
          denom: 'ibc/273C593E51ACE56F1F2BDB3E03A5CB81BB208B894BCAA642676A32C3454E8C27',
          exponent: 0,
          aliases: ['aqdydx']
        }, {
          denom: 'qdydx',
          exponent: 18,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/273C593E51ACE56F1F2BDB3E03A5CB81BB208B894BCAA642676A32C3454E8C27',
      name: 'Quicksilver Liquid Staked DYDX',
      display: 'qdydx',
      symbol: 'qDYDX',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'dydx',
            baseDenom: 'adydx'
          },
          provider: 'Quicksilver'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'quicksilver',
            baseDenom: 'aqdydx',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-522',
            path: 'transfer/channel-522/aqdydx'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qdydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qdydx.svg'
      },
      images: [{
          imageSync: {
            chainName: 'quicksilver',
            baseDenom: 'aqdydx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qdydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qdydx.svg',
          theme: {
            primaryColorHex: '#fc944c'
          }
        }]
    },
    {
      description: 'Quicksilver Liquid Staked BLD',
      denomUnits: [{
          denom: 'ibc/C1C106D915C8E8C59E5DC69BF30FEF64729A6F788060B184C86A315DBB762EF7',
          exponent: 0,
          aliases: ['uqbld']
        }, {
          denom: 'qbld',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/C1C106D915C8E8C59E5DC69BF30FEF64729A6F788060B184C86A315DBB762EF7',
      name: 'Quicksilver Liquid Staked BLD',
      display: 'qbld',
      symbol: 'qBLD',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'agoric',
            baseDenom: 'ubld'
          },
          provider: 'Quicksilver'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'quicksilver',
            baseDenom: 'uqbld',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-522',
            path: 'transfer/channel-522/uqbld'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qbld.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qbld.svg'
      },
      images: [{
          imageSync: {
            chainName: 'quicksilver',
            baseDenom: 'uqbld'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qbld.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qbld.svg',
          theme: {
            primaryColorHex: '#fc944c'
          }
        }]
    },
    {
      description: 'PEPE is a deflationary memecoin launched on Ethereum. ',
      denomUnits: [{
          denom: 'ibc/5B5BFCC8A9F0D554A4245117F7798E85BE25B6C73DBFA2D6F369BD9DD6CACC6D',
          exponent: 0,
          aliases: ['pepe-wei', 'ibc/6367C5AF2E2477FB13DD0C8CB0027FEDDF5AE947EE84C69FB75003E604E29D05']
        }, {
          denom: 'pepe',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/5B5BFCC8A9F0D554A4245117F7798E85BE25B6C73DBFA2D6F369BD9DD6CACC6D',
      name: 'Pepe (Picasso)',
      display: 'pepe',
      symbol: 'PEPE.pica',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x6982508145454Ce325dDbE47a25d4ec3d2311933',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/0x6982508145454ce325ddbe47a25d4ec3d2311933'
          },
          provider: 'Picasso'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'composable',
            baseDenom: 'ibc/6367C5AF2E2477FB13DD0C8CB0027FEDDF5AE947EE84C69FB75003E604E29D05',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-52/0x6982508145454ce325ddbe47a25d4ec3d2311933'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/pepe.pica.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/pepe.pica.png'
        }, {
          imageSync: {
            chainName: 'composable',
            baseDenom: 'ibc/6367C5AF2E2477FB13DD0C8CB0027FEDDF5AE947EE84C69FB75003E604E29D05'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
          theme: {
            primaryColorHex: '#cc3233'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'CRV is the governance token for Curve Finance.',
      denomUnits: [{
          denom: 'ibc/080CE38C1E49595F2199E88BE7281F93FAEEF3FE354EECED0640625E8311C9CF',
          exponent: 0,
          aliases: ['crv-wei', 'ibc/52C8C6197989684F891076F228F20CD1659AB6E1776E3B85E65CBBEC67DA5DED']
        }, {
          denom: 'crv',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/080CE38C1E49595F2199E88BE7281F93FAEEF3FE354EECED0640625E8311C9CF',
      name: 'Curve DAO (Picasso)',
      display: 'crv',
      symbol: 'CRV.pica',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xd533a949740bb3306d119cc777fa900ba034cd52',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/0xd533a949740bb3306d119cc777fa900ba034cd52'
          },
          provider: 'Picasso'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'composable',
            baseDenom: 'ibc/52C8C6197989684F891076F228F20CD1659AB6E1776E3B85E65CBBEC67DA5DED',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-52/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/crv.pica.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/crv.pica.png'
        }, {
          imageSync: {
            chainName: 'composable',
            baseDenom: 'ibc/52C8C6197989684F891076F228F20CD1659AB6E1776E3B85E65CBBEC67DA5DED'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/crv.png',
          theme: {
            primaryColorHex: '#1fcbdb'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'A Liquid Restaking Token (LRT) and Strategy Manager for EigenLayer.',
      denomUnits: [{
          denom: 'ibc/39AAE0F5F918B731BEF1E02E9BAED33C242805F668B0A941AC509FB569FE51CB',
          exponent: 0,
          aliases: ['ezeth-wei', 'ibc/0247E0E2C174135AADF4EA172D97FF5C15A64689A403E83603EAE4F0616DD365']
        }, {
          denom: 'ezeth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/39AAE0F5F918B731BEF1E02E9BAED33C242805F668B0A941AC509FB569FE51CB',
      name: 'Renzo Restaked ETH (Picasso)',
      display: 'ezeth',
      symbol: 'ezETH.pica',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Renzo'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xbf5495efe5db9ce00f80364c8b423567e58d2110',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/0xbf5495efe5db9ce00f80364c8b423567e58d2110'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'composable',
            baseDenom: 'ibc/E317539F148285AAC77E7614101CBE94E20EDF169B233A5E0C867112972F9041',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-52/0xbf5495efe5db9ce00f80364c8b423567e58d2110'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ezeth.pica.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ezeth.pica.png'
        }, {
          imageSync: {
            chainName: 'composable',
            baseDenom: 'ibc/E317539F148285AAC77E7614101CBE94E20EDF169B233A5E0C867112972F9041'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ezeth.png',
          theme: {
            primaryColorHex: '#9bcf2c'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'Ethena USDe is a synthetic dollar protocol built on Ethereum.',
      denomUnits: [{
          denom: 'ibc/BFFE212A23384C4EB055CF6F95A1F5EC1BE0F9BD286FAA66C3748F0444E67D63',
          exponent: 0,
          aliases: ['usde-wei', 'ibc/FFD9EB71B4480ED4D73F7370A2AEBDB48447A0AAE27265F8060A957F0FF71983']
        }, {
          denom: 'usde',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/BFFE212A23384C4EB055CF6F95A1F5EC1BE0F9BD286FAA66C3748F0444E67D63',
      name: 'Ethena USDe (Picasso)',
      display: 'usde',
      symbol: 'USDe.pica',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Ethena'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x4c9edd5852cd905f086c759e8383e09bff1e68b3',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/0x4c9edd5852cd905f086c759e8383e09bff1e68b3'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'composable',
            baseDenom: 'ibc/FFD9EB71B4480ED4D73F7370A2AEBDB48447A0AAE27265F8060A957F0FF71983',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-52/0x4c9edd5852cd905f086c759e8383e09bff1e68b3'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usde.pica.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usde.pica.png'
        }, {
          imageSync: {
            chainName: 'composable',
            baseDenom: 'ibc/FFD9EB71B4480ED4D73F7370A2AEBDB48447A0AAE27265F8060A957F0FF71983'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usde.png',
          theme: {
            primaryColorHex: '#040404'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'The native governance token of Ethena.',
      denomUnits: [{
          denom: 'ibc/257FF64F160106F6EE43CEE7C761DA64C1346221895373CC810FFA1BFAC5A7CD',
          exponent: 0,
          aliases: ['ena-wei', 'ibc/B089810D5A6316AD5E9C7808733DC4AB11C7BA3033221D28711FC7206BACB929']
        }, {
          denom: 'ena',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/257FF64F160106F6EE43CEE7C761DA64C1346221895373CC810FFA1BFAC5A7CD',
      name: 'Ethena (Picasso)',
      display: 'ena',
      symbol: 'ENA.pica',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x57e114b691db790c35207b2e685d4a43181e6061',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/0x57e114b691db790c35207b2e685d4a43181e6061'
          },
          provider: 'Picasso'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'composable',
            baseDenom: 'ibc/B089810D5A6316AD5E9C7808733DC4AB11C7BA3033221D28711FC7206BACB929',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-52/0x57e114b691db790c35207b2e685d4a43181e6061'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ena.pica.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ena.pica.png'
        }, {
          imageSync: {
            chainName: 'composable',
            baseDenom: 'ibc/B089810D5A6316AD5E9C7808733DC4AB11C7BA3033221D28711FC7206BACB929'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ena.png',
          theme: {
            primaryColorHex: '#1c1c1c'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'eETH is a natively restaked liquid staking token on Ethereum.',
      denomUnits: [{
          denom: 'ibc/8D0FFEA4EDB04E3C1738C9599B66AE49683E0540FC4C1214AC84534C200D818B',
          exponent: 0,
          aliases: ['eeth-wei', 'ibc/34C23BA6BAA2EAE0199D85AD1E2E214F76B0BFAD42BF75542D15F71264EEB05B']
        }, {
          denom: 'eeth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/8D0FFEA4EDB04E3C1738C9599B66AE49683E0540FC4C1214AC84534C200D818B',
      name: 'ether.fi Staked ETH (Picasso)',
      display: 'eeth',
      symbol: 'eETH.pica',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'EtherFi'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x35fa164735182de50811e8e2e824cfb9b6118ac2',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/0x35fa164735182de50811e8e2e824cfb9b6118ac2'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'composable',
            baseDenom: 'ibc/34C23BA6BAA2EAE0199D85AD1E2E214F76B0BFAD42BF75542D15F71264EEB05B',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-52/0x35fa164735182de50811e8e2e824cfb9b6118ac2'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/eeth.pica.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/eeth.pica.png'
        }, {
          imageSync: {
            chainName: 'composable',
            baseDenom: 'ibc/34C23BA6BAA2EAE0199D85AD1E2E214F76B0BFAD42BF75542D15F71264EEB05B'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eeth.png',
          theme: {
            primaryColorHex: '#5045b7'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'pxETH is built on top of the Pirex platform and forms the foundation of the Dinero protocol.',
      denomUnits: [{
          denom: 'ibc/D09BB89B2187EF13EF006B44510749B0F02FD0B34F8BB55C70D812A1FF6148C7',
          exponent: 0,
          aliases: ['pxeth-wei', 'ibc/36EF1EA47A09689C81D848B08E5240FA9FF13B17DB7DCF48B77D4D0D9B152821']
        }, {
          denom: 'pxeth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/D09BB89B2187EF13EF006B44510749B0F02FD0B34F8BB55C70D812A1FF6148C7',
      name: 'Dinero Staked ETH (Picasso)',
      display: 'pxeth',
      symbol: 'pxETH.pica',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Dinero'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x04c154b66cb340f3ae24111cc767e0184ed00cc6',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/0x04c154b66cb340f3ae24111cc767e0184ed00cc6'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'composable',
            baseDenom: 'ibc/36EF1EA47A09689C81D848B08E5240FA9FF13B17DB7DCF48B77D4D0D9B152821',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-52/0x04c154b66cb340f3ae24111cc767e0184ed00cc6'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/pxeth.pica.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/pxeth.pica.png'
        }, {
          imageSync: {
            chainName: 'composable',
            baseDenom: 'ibc/36EF1EA47A09689C81D848B08E5240FA9FF13B17DB7DCF48B77D4D0D9B152821'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pxeth.png',
          theme: {
            primaryColorHex: '#c3cbd2'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'A collateralized-debt-position (CDP) stablecoin by Curve DAO.',
      denomUnits: [{
          denom: 'ibc/63551E7BB24008F0AFC1CB051A423A5104F781F035F8B1A191264B7086A0A0F6',
          exponent: 0,
          aliases: ['crvusd-wei', 'ibc/C9D79BE8E3E75CA2DFDC722C77D7B179C39A4802D59019C790A825FDE34B724A']
        }, {
          denom: 'crvusd',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/63551E7BB24008F0AFC1CB051A423A5104F781F035F8B1A191264B7086A0A0F6',
      name: 'crvUSD (Picasso)',
      display: 'crvusd',
      symbol: 'crvUSD.pica',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Curve Finance'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xf939e0a03fb07f59a73314e73794be0e57ac1b4e',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/0xf939e0a03fb07f59a73314e73794be0e57ac1b4e'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'composable',
            baseDenom: 'ibc/C9D79BE8E3E75CA2DFDC722C77D7B179C39A4802D59019C790A825FDE34B724A',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-52/0xf939e0a03fb07f59a73314e73794be0e57ac1b4e'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/crvUSD.pica.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/crvUSD.pica.png'
        }, {
          imageSync: {
            chainName: 'composable',
            baseDenom: 'ibc/C9D79BE8E3E75CA2DFDC722C77D7B179C39A4802D59019C790A825FDE34B724A'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/crvusd.png',
          theme: {
            primaryColorHex: '#d6e3d9'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'Coin to support the real world in Wilhelmshall im Huy',
      denomUnits: [{
          denom: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/wiha',
          exponent: 0
        }, {
          denom: 'WIHA',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8',
      base: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/wiha',
      name: 'WiliHall',
      display: 'WIHA',
      symbol: 'WIHA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/WIHA.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/WIHA.png',
          theme: {
            primaryColorHex: '#f2f2ec'
          }
        }]
    },
    {
      description: 'For th',
      denomUnits: [{
          denom: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/crazyhorse',
          exponent: 0
        }, {
          denom: 'CRAZYHORSE',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8',
      base: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/crazyhorse',
      name: 'HorseShoeBar',
      display: 'CRAZYHORSE',
      symbol: 'CRAZYHORSE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CrazyHorse.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CrazyHorse.png',
          theme: {
            primaryColorHex: '#040404'
          }
        }]
    },
    {
      description: 'Cosmus Cartol always get rich',
      denomUnits: [{
          denom: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/coca',
          exponent: 0
        }, {
          denom: 'COCA',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8',
      base: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/coca',
      name: 'CosmusCartol',
      display: 'COCA',
      symbol: 'COCA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/COCA.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/COCA.png',
          theme: {
            primaryColorHex: '#1e2029'
          }
        }]
    },
    {
      description: 'Tether, issued natively on Solana.',
      denomUnits: [{
          denom: 'ibc/0233A3F2541FD43DBCA569B27AF886E97F5C03FC0305E4A8A3FAC6AC26249C7A',
          exponent: 0,
          aliases: ['ibc/D105950618E47CA2AEC314282BC401625025F80A4F812808DEEBB1941C685575']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/0233A3F2541FD43DBCA569B27AF886E97F5C03FC0305E4A8A3FAC6AC26249C7A',
      name: 'Tether USD (Solana via Picasso)',
      display: 'usdt',
      symbol: 'USDT.sol.pica',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Tether'
        },
        {
          type: 'additional-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Tether'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-71',
            path: 'transfer/channel-71/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'composable',
            baseDenom: 'ibc/D105950618E47CA2AEC314282BC401625025F80A4F812808DEEBB1941C685575',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-71/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.solana.pica.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.solana.pica.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.solana.pica.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.solana.pica.png',
          theme: {
            primaryColorHex: '#089496'
          }
        }, {
          imageSync: {
            chainName: 'composable',
            baseDenom: 'ibc/D105950618E47CA2AEC314282BC401625025F80A4F812808DEEBB1941C685575'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true,
            primaryColorHex: '#009393',
            backgroundColorHex: '#009393'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'A representative token for staked SOL, derived through the process of liquid staking SOL using the Edgevana protocol.',
      denomUnits: [{
          denom: 'ibc/B83F9E20B4A07FA8846880000BD9D8985D89567A090F5E9390C64E81C39B4607',
          exponent: 0,
          aliases: ['ibc/BADB5950C4A81AC201696EBCB33CD295137FA86F0AA620CDDE946D3700E0208C']
        }, {
          denom: 'edgesol',
          exponent: 9
        }],
      typeAsset: 'ics20',
      base: 'ibc/B83F9E20B4A07FA8846880000BD9D8985D89567A090F5E9390C64E81C39B4607',
      name: 'Edgevana Staked SOL (Picasso)',
      display: 'edgesol',
      symbol: 'edgeSOL.pica',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'Lamport'
          },
          provider: 'Edgevana'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-71',
            path: 'transfer/channel-71/edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'composable',
            baseDenom: 'ibc/BADB5950C4A81AC201696EBCB33CD295137FA86F0AA620CDDE946D3700E0208C',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-71/edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/edgesol.pica.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/edgesol.pica.png'
        }, {
          imageSync: {
            chainName: 'composable',
            baseDenom: 'ibc/BADB5950C4A81AC201696EBCB33CD295137FA86F0AA620CDDE946D3700E0208C'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/edgesol.png',
          theme: {
            primaryColorHex: '#146cfc'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'A representative token for staked SOL, derived through the process of liquid staking SOL using the MarginFi protocol.',
      denomUnits: [{
          denom: 'ibc/F618D130A2B8203D169811658BD0361F18DC2453085965FA0E5AEB8018DD54EE',
          exponent: 0,
          aliases: ['ibc/55F5B582483FEFA5422794292B079B4D49A5BAB9881E7C801F9F271F1D234F1D']
        }, {
          denom: 'lst',
          exponent: 9
        }],
      typeAsset: 'ics20',
      base: 'ibc/F618D130A2B8203D169811658BD0361F18DC2453085965FA0E5AEB8018DD54EE',
      name: 'Liquid Staking Token (Picasso)',
      display: 'lst',
      symbol: 'LST.pica',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'Lamport'
          },
          provider: 'MarginFi'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-71',
            path: 'transfer/channel-71/LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'composable',
            baseDenom: 'ibc/55F5B582483FEFA5422794292B079B4D49A5BAB9881E7C801F9F271F1D234F1D',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-71/LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/lst.pica.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/lst.pica.png'
        }, {
          imageSync: {
            chainName: 'composable',
            baseDenom: 'ibc/55F5B582483FEFA5422794292B079B4D49A5BAB9881E7C801F9F271F1D234F1D'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/msol.png',
          theme: {
            primaryColorHex: '#cbebe3'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'A representative token for staked SOL, derived through the process of liquid staking SOL using Jito.',
      denomUnits: [{
          denom: 'ibc/9A83BDF4C8C5FFDDE735533BC8CD4363714A6474AED1C2C492FB003BB77C7982',
          exponent: 0,
          aliases: ['ibc/91A2FE07F8BDFC0552B1C9972FCCBF2CFD067DDE5F496D81E5132CE57762B0F2']
        }, {
          denom: 'jitosol',
          exponent: 9
        }],
      typeAsset: 'ics20',
      base: 'ibc/9A83BDF4C8C5FFDDE735533BC8CD4363714A6474AED1C2C492FB003BB77C7982',
      name: 'Jito Staked SOL (Picasso)',
      display: 'jitosol',
      symbol: 'jitoSOL.pica',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'Lamport'
          },
          provider: 'Jito'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-71',
            path: 'transfer/channel-71/J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'composable',
            baseDenom: 'ibc/91A2FE07F8BDFC0552B1C9972FCCBF2CFD067DDE5F496D81E5132CE57762B0F2',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-71/J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/jitosol.pica.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/jitosol.pica.png'
        }, {
          imageSync: {
            chainName: 'composable',
            baseDenom: 'ibc/91A2FE07F8BDFC0552B1C9972FCCBF2CFD067DDE5F496D81E5132CE57762B0F2'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/jitosol.png',
          theme: {
            primaryColorHex: '#5bb384'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'SOL is the native cryptocurrency of the Solana blockchain.',
      denomUnits: [{
          denom: 'ibc/0F9E9277B61A78CB31014D541ACA5BF6AB06DFC4524C4C836490B131DAAECD78',
          exponent: 0,
          aliases: ['Lamport', 'ibc/2CC39C8141F257EBBA250F65B9D0F31DC8D153C225E51EC192DE6E3F65D43F0C']
        }, {
          denom: 'wsol',
          exponent: 9
        }],
      typeAsset: 'ics20',
      base: 'ibc/0F9E9277B61A78CB31014D541ACA5BF6AB06DFC4524C4C836490B131DAAECD78',
      name: 'Solana (Picasso)',
      display: 'wsol',
      symbol: 'SOL.pica',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'Lamport'
          },
          provider: 'Solana'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'So11111111111111111111111111111111111111112',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-71',
            path: 'transfer/channel-71/So11111111111111111111111111111111111111112'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'composable',
            baseDenom: 'ibc/2CC39C8141F257EBBA250F65B9D0F31DC8D153C225E51EC192DE6E3F65D43F0C',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-71/So11111111111111111111111111111111111111112'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wsol.pica.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wsol.pica.png'
        }, {
          imageSync: {
            chainName: 'composable',
            baseDenom: 'ibc/2CC39C8141F257EBBA250F65B9D0F31DC8D153C225E51EC192DE6E3F65D43F0C'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.png',
          theme: {
            circle: true,
            backgroundColorHex: '#000000'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'An alloy of USDT asset variants on Osmosis.',
      extendedDescription: 'Multiple Tether USD variants on Osmosis comprise the liquidity backing of a tokenized transmuter pool to create an alloy of USDT.',
      denomUnits: [{
          denom: 'factory/osmo1em6xs47hd82806f5cxgyufguxrrc7l0aqx7nzzptjuqgswczk8csavdxek/alloyed/allUSDT',
          exponent: 0
        }, {
          denom: 'allUSDT',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1em6xs47hd82806f5cxgyufguxrrc7l0aqx7nzzptjuqgswczk8csavdxek',
      base: 'factory/osmo1em6xs47hd82806f5cxgyufguxrrc7l0aqx7nzzptjuqgswczk8csavdxek/alloyed/allUSDT',
      name: 'Tether USD',
      display: 'allUSDT',
      symbol: 'USDT',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Tether'
        }, {
          type: 'synthetic',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Osmosis'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png'
      },
      images: [
        {
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true,
            primaryColorHex: '#009393',
            backgroundColorHex: '#009393'
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt_logomark.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt_logomark.svg',
          theme: {
            circle: false,
            primaryColorHex: '#50AF95',
            backgroundColorHex: '#00000000'
          }
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allUSDT.svg'
        }
      ],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'Whinecoin is an experimental memecoin by the Sommelier Finance team.',
      denomUnits: [{
          denom: 'ibc/A8C568580D613F16F7E9075EA9FAD69FEBE0CC1F4AF46C60255FEC4459C166F1',
          exponent: 0,
          aliases: ['ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump', 'ibc/9D5DA3720001F91DD76B8F609A93F96688EC8185B54BF9A1A1450EB34FF2D912']
        }, {
          denom: 'whine',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/A8C568580D613F16F7E9075EA9FAD69FEBE0CC1F4AF46C60255FEC4459C166F1',
      name: 'WHINEcoin',
      display: 'whine',
      symbol: 'WHINE',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-71',
            path: 'transfer/channel-71/ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump'
          },
          provider: 'Picasso'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'composable',
            baseDenom: 'ibc/9D5DA3720001F91DD76B8F609A93F96688EC8185B54BF9A1A1450EB34FF2D912',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-71/ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/whine.png'
      },
      images: [{
          imageSync: {
            chainName: 'solana',
            baseDenom: 'ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/whine.png',
          theme: {
            primaryColorHex: '#FFFFFF',
            backgroundColorHex: '#FFFFFF',
            circle: false
          }
        }]
    },
    {
      description: 'A group of french boulanger who wanna bring fun and baguette on cosmos',
      denomUnits: [{
          denom: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/bag',
          exponent: 0
        }, {
          denom: 'BAG',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8',
      base: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/bag',
      name: 'Baguette',
      display: 'BAG',
      symbol: 'BAG',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/BAG.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/BAG.png',
          theme: {
            primaryColorHex: '#a07042'
          }
        }]
    },
    {
      description: 'An alloy of BTC asset variants on Osmosis.',
      extendedDescription: 'Multiple Bitcoin variants on Osmosis comprise the liquidity backing of a tokenized transmuter pool to create an alloy of BTC.',
      denomUnits: [{
          denom: 'factory/osmo1z6r6qdknhgsc0zeracktgpcxf43j6sekq07nw8sxduc9lg0qjjlqfu25e3/alloyed/allBTC',
          exponent: 0
        }, {
          denom: 'allBTC',
          exponent: 8
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1z6r6qdknhgsc0zeracktgpcxf43j6sekq07nw8sxduc9lg0qjjlqfu25e3',
      base: 'factory/osmo1z6r6qdknhgsc0zeracktgpcxf43j6sekq07nw8sxduc9lg0qjjlqfu25e3/alloyed/allBTC',
      name: 'Bitcoin',
      display: 'allBTC',
      symbol: 'BTC',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'Osmosis'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.png'
      },
      images: [{
          imageSync: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.png',
          theme: {
            primaryColorHex: '#f4941c',
            backgroundColorHex: '#f4941c',
            circle: true
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allBTC.svg'
        }]
    },
    {
      description: 'N43 a BitSong Music FanToken',
      denomUnits: [{
          denom: 'ibc/E4FFAACCDB7D55CE2D257DF637C00158CB841F11D0013B2D03E31FF7800A2C58',
          exponent: 0,
          aliases: ['ft387C1C279D962ED80C09C1D592A92C4275FD7C5D']
        }, {
          denom: 'n43',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/E4FFAACCDB7D55CE2D257DF637C00158CB841F11D0013B2D03E31FF7800A2C58',
      name: 'N43 Fantoken',
      display: 'n43',
      symbol: 'N43',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'bitsong',
            baseDenom: 'ft387C1C279D962ED80C09C1D592A92C4275FD7C5D',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-73',
            path: 'transfer/channel-73/ft387C1C279D962ED80C09C1D592A92C4275FD7C5D'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft387C1C279D962ED80C09C1D592A92C4275FD7C5D.png'
      },
      images: [{
          imageSync: {
            chainName: 'bitsong',
            baseDenom: 'ft387C1C279D962ED80C09C1D592A92C4275FD7C5D'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft387C1C279D962ED80C09C1D592A92C4275FD7C5D.png',
          theme: {
            primaryColorHex: '#0a0a0a'
          }
        }]
    },
    {
      description: 'Rakoff Token is the Meme Token for Terra Classic',
      denomUnits: [{
          denom: 'ibc/46579C587A0B8CF8B0A1FF6B0EFA2082F11876578E47FC81A9CAAD31F424AF98',
          exponent: 0,
          aliases: ['cw20:terra1vhgq25vwuhdhn9xjll0rhl2s67jzw78a4g2t78y5kz89q9lsdskq2pxcj2']
        }, {
          denom: 'rakoff',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/46579C587A0B8CF8B0A1FF6B0EFA2082F11876578E47FC81A9CAAD31F424AF98',
      name: 'Juris Protocol',
      display: 'rakoff',
      symbol: 'JURIS',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'terra',
            baseDenom: 'cw20:terra1vhgq25vwuhdhn9xjll0rhl2s67jzw78a4g2t78y5kz89q9lsdskq2pxcj2',
            port: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc',
            channelId: 'channel-108'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-78488',
            path: 'transfer/channel-78488/cw20:terra1vhgq25vwuhdhn9xjll0rhl2s67jzw78a4g2t78y5kz89q9lsdskq2pxcj2'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/juris.png'
      },
      images: [{
          imageSync: {
            chainName: 'terra',
            baseDenom: 'cw20:terra1vhgq25vwuhdhn9xjll0rhl2s67jzw78a4g2t78y5kz89q9lsdskq2pxcj2'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/juris.png'
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/64E62451C9A5682FF3047429C6E4714A02CDC0C35DE35CAB01E18D1188004CEB',
          exponent: 0,
          aliases: ['arbitrum-weth-wei']
        }, {
          denom: 'arbitrum-weth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/64E62451C9A5682FF3047429C6E4714A02CDC0C35DE35CAB01E18D1188004CEB',
      name: 'Wrapped Ether (Arbitrum via Axelar)',
      display: 'arbitrum-weth',
      symbol: 'ETH.arb.axl',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Ethereum'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          provider: 'Arbitrum Bridge'
        },
        {
          type: 'wrapped',
          counterparty: {
            chainName: 'arbitrum',
            baseDenom: 'wei'
          },
          provider: 'Arbitrum'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'arbitrum',
            baseDenom: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'arbitrum-weth-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/arbitrum-weth-wei'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/eth.arb.axl.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/eth.arb.axl.svg'
        }, {
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'arbitrum-weth-wei'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/D7D6DEF2A4F7ED0A6F5F0E266C1B2C9726E82F67EBBE49BBB47B3DEC289F8D7B',
          exponent: 0,
          aliases: ['base-weth-wei']
        }, {
          denom: 'base-weth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/D7D6DEF2A4F7ED0A6F5F0E266C1B2C9726E82F67EBBE49BBB47B3DEC289F8D7B',
      name: 'Wrapped Ether (Base via Axelar)',
      display: 'base-weth',
      symbol: 'ETH.base.axl',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Base Bridge'
        },
        {
          type: 'wrapped',
          counterparty: {
            chainName: 'base',
            baseDenom: 'wei'
          },
          provider: 'Base'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'base',
            baseDenom: '0x4200000000000000000000000000000000000006'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'base-weth-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/base-weth-wei'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/eth.base.axl.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/eth.base.axl.svg'
        }, {
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'base-weth-wei'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/F9EB60AC212DBF05F4C5ED0FDE03BB9F08309B0EE9899A406AD4B904CF84968E',
          exponent: 0,
          aliases: ['polygon-weth-wei']
        }, {
          denom: 'polygon-weth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/F9EB60AC212DBF05F4C5ED0FDE03BB9F08309B0EE9899A406AD4B904CF84968E',
      name: 'Wrapped Ether (Polygon via Axelar)',
      display: 'polygon-weth',
      symbol: 'ETH.matic.axl',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Ethereum'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          provider: 'Polygon PoS Bridge'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'polygon',
            baseDenom: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'polygon-weth-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/polygon-weth-wei'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/eth.matic.axl.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/eth.matic.axl.svg'
        }, {
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'polygon-weth-wei'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/245C3CA604AAB4BB9EEA5E86F23F52D59253D8722C8FC9C4E3E69F77C5CD3D2F',
          exponent: 0,
          aliases: ['staISLM']
        }, {
          denom: 'stISLM',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/245C3CA604AAB4BB9EEA5E86F23F52D59253D8722C8FC9C4E3E69F77C5CD3D2F',
      name: 'Stride Staked ISLM',
      display: 'stISLM',
      symbol: 'stISLM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'haqq',
            baseDenom: 'aISLM'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'staISLM',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-326',
            path: 'transfer/channel-326/staISLM'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stislm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stislm.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stride',
            baseDenom: 'staISLM'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stislm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stislm.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }]
    },
    {
      description: 'The native token of Mande Network.',
      extendedDescription: 'Mande network is an open on-chain reputation layer on Web3',
      denomUnits: [{
          denom: 'ibc/739D70CB432FE1C6D94AF306B68C14F4CFB0B9EDD1238D3A8718B1B0E84E8547',
          exponent: 0,
          aliases: ['amand', 'ibc/5A26C8DC8DA66F4DD94326E67F94510188F5F7AFE2DB3933A0C823670E56EABF']
        }, {
          denom: 'mand',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/739D70CB432FE1C6D94AF306B68C14F4CFB0B9EDD1238D3A8718B1B0E84E8547',
      name: 'Mande Network',
      display: 'mand',
      symbol: 'MAND',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'mande',
            baseDenom: 'amand',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-51',
            path: 'transfer/channel-51/amand'
          }
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'dymension',
            baseDenom: 'ibc/5A26C8DC8DA66F4DD94326E67F94510188F5F7AFE2DB3933A0C823670E56EABF',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-19774',
            path: 'transfer/channel-19774/transfer/channel-51/amand'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mande/images/mande.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mande/images/mande.svg'
      },
      images: [{
          imageSync: {
            chainName: 'mande',
            baseDenom: 'amand'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mande/images/mande.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mande/images/mande.svg',
          theme: {
            primaryColorHex: '#274cbf'
          }
        }],
      keywords: [
        'credibility',
        'identity',
        'osmosis_unstable'
      ],
      socials: {
        website: 'https://mande.network/',
        twitter: 'https://twitter.com/MandeNetwork'
      }
    },
    {
      description: 'The native token of Neutaro',
      denomUnits: [{
          denom: 'ibc/DAED51CBD967A3BE0C467687970AFD97B202AFE4A1718B36936F49178AFE0133',
          exponent: 0,
          aliases: ['uneutaro']
        }, {
          denom: 'neutaro',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/DAED51CBD967A3BE0C467687970AFD97B202AFE4A1718B36936F49178AFE0133',
      name: 'Neutaro',
      display: 'neutaro',
      symbol: 'NTMPI',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutaro',
            baseDenom: 'uneutaro',
            channelId: 'channel-4'
          },
          chain: {
            channelId: 'channel-79092',
            path: 'transfer/channel-79092/uneutaro'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.svg'
      },
      images: [{
          imageSync: {
            chainName: 'neutaro',
            baseDenom: 'uneutaro'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.svg',
          theme: {
            primaryColorHex: '#cbfb06'
          }
        }]
    },
    {
      description: 'Pepe Bruce Jenner',
      denomUnits: [{
          denom: 'ibc/E0D6A7FFAE26FA90C8F1AA3461A5A21E74DB154F183EAE56C96769F48F81FCA2',
          exponent: 0,
          aliases: [
            'ANu4Wuq86WzRU8tykszQUJ66eQzFNfkwap2HcQ5UaFaU',
            'wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/AbYYFgqSQEhe7NyXfo6w75GT7fCanVd9wNg4E9Df2puP',
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/AbYYFgqSQEhe7NyXfo6w75GT7fCanVd9wNg4E9Df2puP'
          ]
        }, {
          denom: 'wormhole/AbYYFgqSQEhe7NyXfo6w75GT7fCanVd9wNg4E9Df2puP/6',
          exponent: 6,
          aliases: ['pbj', 'PBJ']
        }],
      typeAsset: 'ics20',
      base: 'ibc/E0D6A7FFAE26FA90C8F1AA3461A5A21E74DB154F183EAE56C96769F48F81FCA2',
      name: 'Pepe Bruce Jenner',
      display: 'wormhole/AbYYFgqSQEhe7NyXfo6w75GT7fCanVd9wNg4E9Df2puP/6',
      symbol: 'PBJ',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'ANu4Wuq86WzRU8tykszQUJ66eQzFNfkwap2HcQ5UaFaU'
          },
          provider: 'Wormhole'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'gateway',
            baseDenom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/AbYYFgqSQEhe7NyXfo6w75GT7fCanVd9wNg4E9Df2puP',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/AbYYFgqSQEhe7NyXfo6w75GT7fCanVd9wNg4E9Df2puP'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pbj.png'
      },
      images: [{
          imageSync: {
            chainName: 'solana',
            baseDenom: 'ANu4Wuq86WzRU8tykszQUJ66eQzFNfkwap2HcQ5UaFaU'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pbj.png',
          theme: {
            primaryColorHex: '#488000',
            backgroundColorHex: '#ee0000'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denomUnits: [{
          denom: 'ibc/23104D411A6EB6031FA92FB75F227422B84989969E91DCAD56A535DD7FF0A373',
          exponent: 0,
          aliases: ['attousdy', 'ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/23104D411A6EB6031FA92FB75F227422B84989969E91DCAD56A535DD7FF0A373',
      name: 'Ondo US Dollar Yield',
      display: 'usdy',
      symbol: 'USDY',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'ausdy',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-750',
            path: 'transfer/channel-750/ausdy'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.svg'
      },
      images: [{
          imageSync: {
            chainName: 'noble',
            baseDenom: 'ausdy'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.svg',
          theme: {
            primaryColorHex: '#142c5c'
          }
        }]
    },
    {
      description: 'Jacob Haertnellez Turtle. Launched by Jake\'s Personally appointed TURD Cult Leader..."NotSeanO\'Riley." TURD is going to lead the shitcoins of Cosmos! Or Rug You. It will be Jake\'s Fault. ',
      denomUnits: [{
          denom: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/turd',
          exponent: 0
        }, {
          denom: 'TURD',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8',
      base: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/turd',
      name: 'TURDLE',
      display: 'TURD',
      symbol: 'TURD',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/TURD.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/TURD.png'
        }]
    },
    {
      description: 'FIRMACHAIN adds a signing and verifying e-contract function to the blockchain. Unlocking new limits of electronic contracts with blockchain technology, FIRMACHAIN seeks to resolve all the social and legal issues (contracts, notarial, etc.) with written contracts through the use of electronic contracts based on FIRMACHAIN’s data blockchain.',
      denomUnits: [{
          denom: 'ibc/E43ABCC7E80E99E4E6E1226AE5695DDE0F83CB5C257CD04D47C36B8B90C1C839',
          exponent: 0,
          aliases: ['ufct']
        }, {
          denom: 'fct',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/E43ABCC7E80E99E4E6E1226AE5695DDE0F83CB5C257CD04D47C36B8B90C1C839',
      name: 'FIRMACHAIN',
      display: 'fct',
      symbol: 'FCT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'firmachain',
            baseDenom: 'ufct',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-79241',
            path: 'transfer/channel-79241/ufct'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.svg'
      },
      images: [{
          imageSync: {
            chainName: 'firmachain',
            baseDenom: 'ufct'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.svg',
          theme: {
            primaryColorHex: '#1c1c1c'
          }
        }]
    },
    {
      description: 'An alloy of ETH asset variants on Osmosis.',
      extendedDescription: 'Multiple Ethereum variants on Osmosis comprise the liquidity backing of a tokenized transmuter pool to create an alloy of ETH.',
      denomUnits: [{
          denom: 'factory/osmo1k6c8jln7ejuqwtqmay3yvzrg3kueaczl96pk067ldg8u835w0yhsw27twm/alloyed/allETH',
          exponent: 0
        }, {
          denom: 'allETH',
          exponent: 18
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1k6c8jln7ejuqwtqmay3yvzrg3kueaczl96pk067ldg8u835w0yhsw27twm',
      base: 'factory/osmo1k6c8jln7ejuqwtqmay3yvzrg3kueaczl96pk067ldg8u835w0yhsw27twm/alloyed/allETH',
      name: 'Ethereum',
      display: 'allETH',
      symbol: 'ETH',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Osmosis'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg',
          theme: {
            primaryColorHex: '#303030'
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allETH.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allETH.png'
        }]
    },
    {
      description: 'An alloy of SOL asset variants on Osmosis.',
      extendedDescription: 'Multiple Solana variants on Osmosis comprise the liquidity backing of a tokenized transmuter pool to create an alloy of SOL.',
      denomUnits: [{
          denom: 'factory/osmo1n3n75av8awcnw4jl62n3l48e6e4sxqmaf97w5ua6ddu4s475q5qq9udvx4/alloyed/allSOL',
          exponent: 0
        }, {
          denom: 'allSOL',
          exponent: 9
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1n3n75av8awcnw4jl62n3l48e6e4sxqmaf97w5ua6ddu4s475q5qq9udvx4',
      base: 'factory/osmo1n3n75av8awcnw4jl62n3l48e6e4sxqmaf97w5ua6ddu4s475q5qq9udvx4/alloyed/allSOL',
      name: 'Solana',
      display: 'allSOL',
      symbol: 'SOL',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'Lamport'
          },
          provider: 'Osmosis'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.png'
      },
      images: [
        {
          imageSync: {
            chainName: 'solana',
            baseDenom: 'Lamport'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.png',
          theme: {
            circle: true,
            backgroundColorHex: '#000000'
          }
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg',
          theme: {
            circle: false,
            backgroundColorHex: '#00000000'
          }
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allSOL_circle.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allSOL_circle.png',
          theme: {
            circle: false,
            backgroundColorHex: '#00000000'
          }
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allSOL.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allSOL.png',
          theme: {
            circle: false,
            backgroundColorHex: '#00000000'
          }
        }
      ]
    },
    {
      description: 'Lava Network is a modular data network designed to provide fast, reliable, and scalable access to blockchain data for developers and users.',
      denomUnits: [{
          denom: 'ibc/1AEF145C549D4F9847C79E49710B198C294C7F4A107F4610DEE8E725FFC4B378',
          exponent: 0,
          aliases: ['ulava']
        }, {
          denom: 'lava',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/1AEF145C549D4F9847C79E49710B198C294C7F4A107F4610DEE8E725FFC4B378',
      name: 'Lava',
      display: 'lava',
      symbol: 'LAVA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'lava',
            baseDenom: 'ulava',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-76971',
            path: 'transfer/channel-76971/ulava'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava.png'
      },
      images: [{
          imageSync: {
            chainName: 'lava',
            baseDenom: 'ulava'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava.png',
          theme: {
            primaryColorHex: '#6f043e'
          }
        }]
    },
    {
      description: 'The native token of Penumbra.',
      denomUnits: [{
          denom: 'ibc/0FA9232B262B89E77D1335D54FB1E1F506A92A7E4B51524B400DC69C68D28372',
          exponent: 0,
          aliases: ['upenumbra']
        }, {
          denom: 'penumbra',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/0FA9232B262B89E77D1335D54FB1E1F506A92A7E4B51524B400DC69C68D28372',
      name: 'Penumbra',
      display: 'penumbra',
      symbol: 'UM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'penumbra',
            baseDenom: 'upenumbra',
            channelId: 'channel-4'
          },
          chain: {
            channelId: 'channel-79703',
            path: 'transfer/channel-79703/upenumbra'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/penumbra/images/um.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/penumbra/images/um.svg'
      },
      images: [{
          imageSync: {
            chainName: 'penumbra',
            baseDenom: 'upenumbra'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/penumbra/images/um.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/penumbra/images/um.svg',
          theme: {
            circle: true,
            primaryColorHex: '#c7b07f'
          }
        }]
    },
    {
      description: 'TRONIX is the mainnet native token of the TRON Protocol issued by TRON DAO, known as TRX.',
      denomUnits: [{
          denom: 'factory/osmo1myv2g72h8dan7n4hx7stt3mmust6ws03zh6gxc7vz4hpmgp5z3lq9aunm9/TRX.rt',
          exponent: 0
        }, {
          denom: 'trx',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1myv2g72h8dan7n4hx7stt3mmust6ws03zh6gxc7vz4hpmgp5z3lq9aunm9',
      base: 'factory/osmo1myv2g72h8dan7n4hx7stt3mmust6ws03zh6gxc7vz4hpmgp5z3lq9aunm9/TRX.rt',
      name: 'Tron (Router)',
      display: 'trx',
      symbol: 'TRX.rt',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'tron',
            baseDenom: 'sun'
          },
          provider: 'Router'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/trx.rt.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/trx.rt.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/trx.rt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/trx.rt.png'
        }, {
          imageSync: {
            chainName: 'tron',
            baseDenom: 'sun'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.png',
          theme: {
            circle: true,
            primaryColorHex: '#FF060A',
            backgroundColorHex: '#FF060A'
          }
        }]
    },
    {
      description: 'A synthetic version of USDT issued by Router, which can be unwrapped to USDT on several chains.',
      denomUnits: [{
          denom: 'factory/osmo1myv2g72h8dan7n4hx7stt3mmust6ws03zh6gxc7vz4hpmgp5z3lq9aunm9/USDT.rt',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1myv2g72h8dan7n4hx7stt3mmust6ws03zh6gxc7vz4hpmgp5z3lq9aunm9',
      base: 'factory/osmo1myv2g72h8dan7n4hx7stt3mmust6ws03zh6gxc7vz4hpmgp5z3lq9aunm9/USDT.rt',
      name: 'Tether USD (Ethereum via Router)',
      display: 'usdt',
      symbol: 'USDT.eth.rt',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Tether'
        }, {
          type: 'synthetic',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Router'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.rt.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.rt.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.rt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.rt.png',
          theme: {
            circle: true,
            primaryColorHex: '#009393',
            backgroundColorHex: '#009393'
          }
        }, {
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true,
            primaryColorHex: '#009393',
            backgroundColorHex: '#009393'
          }
        }]
    },
    {
      description: 'Cosmo is the best currency in the universe.',
      denomUnits: [{
          denom: 'ibc/4925733868E7999F5822C961ADE9470A7FC5FA4A560BAE1DE102783C3F64C201',
          exponent: 0,
          aliases: ['factory/inj1je6n5sr4qtx2lhpldfxndntmgls9hf38ncmcez/COSMO']
        }, {
          denom: 'COSMO',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/4925733868E7999F5822C961ADE9470A7FC5FA4A560BAE1DE102783C3F64C201',
      name: 'Cosmo',
      display: 'COSMO',
      symbol: 'COSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'factory/inj1je6n5sr4qtx2lhpldfxndntmgls9hf38ncmcez/COSMO',
            channelId: 'channel-8'
          },
          chain: {
            channelId: 'channel-122',
            path: 'transfer/channel-122/factory/inj1je6n5sr4qtx2lhpldfxndntmgls9hf38ncmcez/COSMO'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/cosmo.png'
      },
      images: [{
          imageSync: {
            chainName: 'injective',
            baseDenom: 'factory/inj1je6n5sr4qtx2lhpldfxndntmgls9hf38ncmcez/COSMO'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/cosmo.png',
          theme: {
            primaryColorHex: '#343169'
          }
        }],
      socials: {
        website: 'https://github.com/raphaellafar/Cosmo',
        twitter: 'https://x.com/CosmoClub84'
      }
    },
    {
      denomUnits: [{
          denom: 'ibc/603140E681973C7A3A33B06B1D377AAD0F6AC376119735CECC04C9184A1AB080',
          exponent: 0,
          aliases: ['stuband']
        }, {
          denom: 'stBAND',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/603140E681973C7A3A33B06B1D377AAD0F6AC376119735CECC04C9184A1AB080',
      name: 'Stride Staked BAND',
      display: 'stBAND',
      symbol: 'stBAND',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'bandchain',
            baseDenom: 'uband'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stuband',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-326',
            path: 'transfer/channel-326/stuband'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stband.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stband.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stride',
            baseDenom: 'stuband'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stband.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stband.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }]
    },
    {
      description: 'COOK is the governance token for Start.Cooking, the premier token factory on Cosmos.',
      denomUnits: [{
          denom: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/COOK',
          exponent: 0
        }, {
          denom: 'COOK',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8',
      base: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/COOK',
      name: 'COOK',
      display: 'COOK',
      symbol: 'COOK',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/COOK.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/COOK.png'
        }]
    },
    {
      description: 'TRONIX is the mainnet native token of the TRON Protocol issued by TRON DAO, known as TRX.',
      denomUnits: [{
          denom: 'factory/osmo14mafhhp337yjj2aujplawz0tks6jd2lel4hkwz4agyzhvvztzaqsqzjq8x/alloyed/allTRX',
          exponent: 0,
          aliases: ['sun']
        }, {
          denom: 'trx',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo14mafhhp337yjj2aujplawz0tks6jd2lel4hkwz4agyzhvvztzaqsqzjq8x',
      base: 'factory/osmo14mafhhp337yjj2aujplawz0tks6jd2lel4hkwz4agyzhvvztzaqsqzjq8x/alloyed/allTRX',
      name: 'Tron',
      display: 'trx',
      symbol: 'TRX',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'tron',
            baseDenom: 'sun'
          },
          provider: 'Osmosis'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.png'
      },
      images: [{
          imageSync: {
            chainName: 'tron',
            baseDenom: 'sun'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.png',
          theme: {
            circle: true,
            primaryColorHex: '#FF060A',
            backgroundColorHex: '#FF060A'
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allTRX.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allTRX.png',
          theme: {
            circle: true,
            primaryColorHex: '#FF060A',
            backgroundColorHex: '#FF060A'
          }
        }]
    },
    {
      description: 'The native token of Router Chain',
      denomUnits: [{
          denom: 'ibc/3F8F00094F0F79D17750FF69C5F09B078084018570AAF4F1C92C86D3F73E6488',
          exponent: 0,
          aliases: ['route']
        }, {
          denom: 'ROUTE',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/3F8F00094F0F79D17750FF69C5F09B078084018570AAF4F1C92C86D3F73E6488',
      name: 'Router Protocol',
      display: 'ROUTE',
      symbol: 'ROUTE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'routerchain',
            baseDenom: 'route',
            channelId: 'channel-7'
          },
          chain: {
            channelId: 'channel-79180',
            path: 'transfer/channel-79180/route'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/routerchain/images/router.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/routerchain/images/router.png'
      },
      images: [{
          imageSync: {
            chainName: 'routerchain',
            baseDenom: 'route'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/routerchain/images/router.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/routerchain/images/router.png',
          theme: {
            primaryColorHex: '#cb0766'
          }
        }]
    },
    {
      description: 'An alloy of OP asset variants on Osmosis.',
      denomUnits: [{
          denom: 'factory/osmo1nufyzqlm8qhu2w7lm0l4rrax0ec8rsk69mga4tel8eare7c7ljaqpk2lyg/alloyed/allOP',
          exponent: 0
        }, {
          denom: 'op',
          exponent: 12
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1nufyzqlm8qhu2w7lm0l4rrax0ec8rsk69mga4tel8eare7c7ljaqpk2lyg',
      base: 'factory/osmo1nufyzqlm8qhu2w7lm0l4rrax0ec8rsk69mga4tel8eare7c7ljaqpk2lyg/alloyed/allOP',
      name: 'Optimism',
      display: 'op',
      symbol: 'OP',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'optimism',
            baseDenom: '0x4200000000000000000000000000000000000042'
          },
          provider: 'Osmosis'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/optimism/images/op.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/optimism/images/op.png'
      },
      images: [{
          imageSync: {
            chainName: 'optimism',
            baseDenom: '0x4200000000000000000000000000000000000042'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/optimism/images/op.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/optimism/images/op.png',
          theme: {
            primaryColorHex: '#fc0424'
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allOP.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allOP.png',
          theme: {
            primaryColorHex: '#fc0424'
          }
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/14A291DD362798D6805B7ABCB8D09AEEE02176108F89FA09AA43EA2EE096A2A9',
          exponent: 0,
          aliases: ['0x4200000000000000000000000000000000000042', 'op-wei']
        }, {
          denom: 'op',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/14A291DD362798D6805B7ABCB8D09AEEE02176108F89FA09AA43EA2EE096A2A9',
      name: 'Optimism (Axelar)',
      display: 'op',
      symbol: 'OP.axl',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'optimism',
            baseDenom: '0x4200000000000000000000000000000000000042'
          },
          provider: 'Axelar'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'op-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/op-wei'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/op.axl.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/op.axl.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/op.axl.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/op.axl.png'
        }, {
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'op-wei'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/optimism/images/op.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/optimism/images/op.png',
          theme: {
            primaryColorHex: '#fc0424'
          }
        }]
    },
    {
      description: 'An alloy of SHIB asset variants on Osmosis.',
      denomUnits: [{
          denom: 'factory/osmo1f588gk9dazpsueevdl2w6wfkmfmhg5gdvg2uerdlzl0atkasqhsq59qc6a/alloyed/allSHIB',
          exponent: 0
        }, {
          denom: 'shib',
          exponent: 12
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1f588gk9dazpsueevdl2w6wfkmfmhg5gdvg2uerdlzl0atkasqhsq59qc6a',
      base: 'factory/osmo1f588gk9dazpsueevdl2w6wfkmfmhg5gdvg2uerdlzl0atkasqhsq59qc6a/alloyed/allSHIB',
      name: 'Shiba Inu',
      display: 'shib',
      symbol: 'SHIB',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce'
          },
          provider: 'Osmosis'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg',
          theme: {
            primaryColorHex: '#FFA409',
            backgroundColorHex: '#00000000'
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allSHIB.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allSHIB.png',
          theme: {
            circle: true,
            primaryColorHex: '#FFA409'
          }
        }]
    },
    {
      description: 'An alloy of ARB asset variants on Osmosis.',
      denomUnits: [{
          denom: 'factory/osmo1p7x454ex08s4f9ztmm7wfv7lvtgdkfztj2u7v7fezfcauy85q35qmqrdpk/alloyed/allARB',
          exponent: 0
        }, {
          denom: 'arb',
          exponent: 12
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1p7x454ex08s4f9ztmm7wfv7lvtgdkfztj2u7v7fezfcauy85q35qmqrdpk',
      base: 'factory/osmo1p7x454ex08s4f9ztmm7wfv7lvtgdkfztj2u7v7fezfcauy85q35qmqrdpk/alloyed/allARB',
      name: 'Arbitrum',
      display: 'arb',
      symbol: 'ARB',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'arbitrum',
            baseDenom: '0x912CE59144191C1204E64559FE8253a0e49E6548'
          },
          provider: 'Osmosis'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg'
      },
      images: [{
          imageSync: {
            chainName: 'arbitrum',
            baseDenom: '0x912CE59144191C1204E64559FE8253a0e49E6548'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg',
          theme: {
            primaryColorHex: '#253545'
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allARB.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allARB.png',
          theme: {
            primaryColorHex: '#9DCCED'
          }
        }]
    },
    {
      description: 'An alloy of LINK asset variants on Osmosis.',
      denomUnits: [{
          denom: 'factory/osmo18zdw5yvs6gfp95rp74qqwug9yduw2fyr8kplk2xgs726s9axc5usa2vpgw/alloyed/allLINK',
          exponent: 0
        }, {
          denom: 'link',
          exponent: 12
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo18zdw5yvs6gfp95rp74qqwug9yduw2fyr8kplk2xgs726s9axc5usa2vpgw',
      base: 'factory/osmo18zdw5yvs6gfp95rp74qqwug9yduw2fyr8kplk2xgs726s9axc5usa2vpgw/alloyed/allLINK',
      name: 'Chainlink',
      display: 'link',
      symbol: 'LINK',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x514910771af9ca656af840dff83e8264ecf986ca'
          },
          provider: 'Osmosis'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x514910771af9ca656af840dff83e8264ecf986ca'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg',
          theme: {
            primaryColorHex: '#2c5cdc'
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allLINK.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allLINK.png',
          theme: {
            circle: true,
            primaryColorHex: '#2A5ADA'
          }
        }]
    },
    {
      description: 'An alloy of PEPE asset variants on Osmosis.',
      denomUnits: [{
          denom: 'factory/osmo1nnlxegt0scm9qkzys9c874t0ntapv4epfjy2w49c0xdrp3dr0v4ssmelzx/alloyed/allPEPE',
          exponent: 0
        }, {
          denom: 'pepe',
          exponent: 12
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1nnlxegt0scm9qkzys9c874t0ntapv4epfjy2w49c0xdrp3dr0v4ssmelzx',
      base: 'factory/osmo1nnlxegt0scm9qkzys9c874t0ntapv4epfjy2w49c0xdrp3dr0v4ssmelzx/alloyed/allPEPE',
      name: 'Pepe',
      display: 'pepe',
      symbol: 'PEPE',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x6982508145454Ce325dDbE47a25d4ec3d2311933'
          },
          provider: 'Osmosis'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x6982508145454Ce325dDbE47a25d4ec3d2311933'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg',
          theme: {
            primaryColorHex: '#cc3233'
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allPEPE.png',
          theme: {
            circle: true,
            primaryColorHex: '#549C44'
          }
        }]
    },
    {
      description: 'An alloy of DOT asset variants on Osmosis.',
      denomUnits: [{
          denom: 'factory/osmo1r53fx9fvcdzncrs7zkn4gw5vfelx5gk8k5wc6wqha2jpkh992rusr5tk02/alloyed/allDOT',
          exponent: 0
        }, {
          denom: 'dot',
          exponent: 10
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1r53fx9fvcdzncrs7zkn4gw5vfelx5gk8k5wc6wqha2jpkh992rusr5tk02',
      base: 'factory/osmo1r53fx9fvcdzncrs7zkn4gw5vfelx5gk8k5wc6wqha2jpkh992rusr5tk02/alloyed/allDOT',
      name: 'Polkadot',
      display: 'dot',
      symbol: 'DOT',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'polkadot',
            baseDenom: 'Planck'
          },
          provider: 'Osmosis'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
      },
      images: [{
          imageSync: {
            chainName: 'polkadot',
            baseDenom: 'Planck'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg',
          theme: {
            primaryColorHex: '#e4047c'
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allDOT.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allDOT.png',
          theme: {
            circle: true,
            primaryColorHex: '#E6007A'
          }
        }]
    },
    {
      description: 'Unicorn from Solana via Picasso IBC',
      denomUnits: [{
          denom: 'ibc/C91210281CEB708DC6E41A47FC9EC298F45712273DD58C682BEBAD00DCB59DC2',
          exponent: 0,
          aliases: ['UwU8RVXB69Y6Dcju6cN2Qef6fykkq6UUNpB15rZku6Z', 'ibc/586C150919550F6106711C7557DAAAEAB765DDF05648BAC0D96487AE90394BA1']
        }, {
          denom: 'unicorn',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/C91210281CEB708DC6E41A47FC9EC298F45712273DD58C682BEBAD00DCB59DC2',
      name: 'Unicorn (Picasso)',
      display: 'unicorn',
      symbol: 'UWU.pica',
      traces: [
        {
          type: 'additional-mintage',
          counterparty: {
            chainName: 'unicorn',
            baseDenom: 'uwunicorn'
          },
          provider: 'Unicorn'
        },
        {
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'UwU8RVXB69Y6Dcju6cN2Qef6fykkq6UUNpB15rZku6Z',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-71',
            path: 'transfer/channel-71/UwU8RVXB69Y6Dcju6cN2Qef6fykkq6UUNpB15rZku6Z'
          },
          provider: 'Picasso'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'composable',
            baseDenom: 'ibc/586C150919550F6106711C7557DAAAEAB765DDF05648BAC0D96487AE90394BA1',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-71/UwU8RVXB69Y6Dcju6cN2Qef6fykkq6UUNpB15rZku6Z'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/UWU.pica.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/UWU.pica.png'
        }, {
          imageSync: {
            chainName: 'composable',
            baseDenom: 'ibc/586C150919550F6106711C7557DAAAEAB765DDF05648BAC0D96487AE90394BA1'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unicorn/images/uwu.png',
          theme: {
            primaryColorHex: '#D44CE6'
          }
        }]
    },
    {
      description: 'Deenar gold-backed stablecoin',
      denomUnits: [{
          denom: 'ibc/108604FDBE97DAEF128FD4ECFEB2A8AFC2D04A7162C97EAA2FD5BCB0869D0BBC',
          exponent: 0,
          aliases: ['erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE']
        }, {
          denom: 'DEEN',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/108604FDBE97DAEF128FD4ECFEB2A8AFC2D04A7162C97EAA2FD5BCB0869D0BBC',
      name: 'Deenar',
      display: 'DEEN',
      symbol: 'DEEN',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'comex',
            baseDenom: 'XAU'
          },
          provider: 'Deenar'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'haqq',
            baseDenom: 'erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-1575',
            path: 'transfer/channel-1575/erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.svg'
      },
      images: [{
          imageSync: {
            chainName: 'haqq',
            baseDenom: 'erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.svg',
          theme: {
            primaryColorHex: '#ffbc05',
            circle: true
          }
        }]
    },
    {
      description: 'CosmoUSD',
      extendedDescription: 'Community loyalty points.',
      denomUnits: [{
          denom: 'factory/osmo104jtrwcljnxfljhml8mxrw7qetcsdmqvy3sprw/ucosmousd',
          exponent: 0,
          aliases: ['ucosmousd']
        }, {
          denom: 'CosmoUSD',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/osmo104jtrwcljnxfljhml8mxrw7qetcsdmqvy3sprw/ucosmousd',
      name: 'CosmoUSD',
      display: 'CosmoUSD',
      symbol: 'COSMOUSD',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CosmoUSD.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CosmoUSD.png',
          theme: {
            primaryColorHex: '#343169'
          }
        }],
      socials: {
        website: 'https://github.com/raphaellafar/Cosmo',
        twitter: 'https://x.com/CosmoClub84'
      }
    },
    {
      description: 'The Representative factory token for Trump Kemistry',
      denomUnits: [{
          denom: 'factory/osmo1hg0zf0c9can4tvtulh5gmmxe4jpflre3yewxjl/XTRUMP',
          exponent: 0
        }, {
          denom: 'XTRUMP',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1hg0zf0c9can4tvtulh5gmmxe4jpflre3yewxjl',
      base: 'factory/osmo1hg0zf0c9can4tvtulh5gmmxe4jpflre3yewxjl/XTRUMP',
      name: 'XTRUMP',
      display: 'XTRUMP',
      symbol: 'XTRUMP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/XTRUMP.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/XTRUMP.png',
          theme: {
            primaryColorHex: '#b02b27'
          }
        }]
    },
    {
      description: 'Tether USDt from Ethereum via Peggy bridge.',
      denomUnits: [{
          denom: 'ibc/2AD3C64D19ADFBB522CD738B58F421102143F827C1CAFF574A8BF0B81017D53D',
          exponent: 0,
          aliases: ['peggy0xdAC17F958D2ee523a2206206994597C13D831ec7']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/2AD3C64D19ADFBB522CD738B58F421102143F827C1CAFF574A8BF0B81017D53D',
      name: 'Tether USD (Injective)',
      display: 'usdt',
      symbol: 'USDT.inj',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Tether'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Peggy'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'peggy0xdAC17F958D2ee523a2206206994597C13D831ec7',
            channelId: 'channel-8'
          },
          chain: {
            channelId: 'channel-122',
            path: 'transfer/channel-122/peggy0xdAC17F958D2ee523a2206206994597C13D831ec7'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.inj.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.inj.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.inj.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.inj.png'
        }, {
          imageSync: {
            chainName: 'injective',
            baseDenom: 'peggy0xdAC17F958D2ee523a2206206994597C13D831ec7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true,
            primaryColorHex: '#009393',
            backgroundColorHex: '#009393'
          }
        }]
    },
    {
      description: 'Fractionalized Bad Kids',
      extendedDescription: 'Fractionalized Bad Kids NFT Via Fractal.fun',
      denomUnits: [{
          denom: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fBAD',
          exponent: 0
        }, {
          denom: 'fBAD',
          exponent: 9
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv',
      base: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fBAD',
      name: 'fBAD',
      display: 'fBAD',
      symbol: 'fBAD',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fBAD.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fBAD.png',
          theme: {
            primaryColorHex: '#639BFF'
          }
        }],
      keywords: ['nft'],
      socials: {
        website: 'https://fractal.fun',
        twitter: 'https://twitter.com/fractaldotfun'
      }
    },
    {
      description: 'Fractionalized Mad Scientists',
      extendedDescription: 'Fractionalized Mad Scientists NFT Via Fractal.fun',
      denomUnits: [{
          denom: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fMAD',
          exponent: 0
        }, {
          denom: 'fMAD',
          exponent: 9
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv',
      base: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fMAD',
      name: 'fMAD',
      display: 'fMAD',
      symbol: 'fMAD',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fMAD.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fMAD.png',
          theme: {
            primaryColorHex: '#639BFF'
          }
        }],
      keywords: ['nft'],
      socials: {
        website: 'https://fractal.fun',
        twitter: 'https://twitter.com/fractaldotfun'
      }
    },
    {
      description: 'Fractionalized Celestine Sloth Society',
      extendedDescription: 'Fractionalized Celestine Sloth Society NFT Via Fractal.fun',
      denomUnits: [{
          denom: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fSLOTH',
          exponent: 0
        }, {
          denom: 'fSLOTH',
          exponent: 9
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv',
      base: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fSLOTH',
      name: 'fSLOTH',
      display: 'fSLOTH',
      symbol: 'fSLOTH',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fSLOTH.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fSLOTH.png',
          theme: {
            primaryColorHex: '#639BFF'
          }
        }],
      keywords: ['nft'],
      socials: {
        website: 'https://fractal.fun',
        twitter: 'https://twitter.com/fractaldotfun'
      }
    },
    {
      description: 'Fractionalized DAONuts',
      extendedDescription: 'Fractionalized DAONuts NFT Via Fractal.fun',
      denomUnits: [{
          denom: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fNUT',
          exponent: 0
        }, {
          denom: 'fNUT',
          exponent: 9
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv',
      base: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fNUT',
      name: 'fNUT',
      display: 'fNUT',
      symbol: 'fNUT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fNUT.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fNUT.png',
          theme: {
            primaryColorHex: '#639BFF'
          }
        }],
      keywords: ['nft'],
      socials: {
        website: 'https://fractal.fun',
        twitter: 'https://twitter.com/fractaldotfun'
      }
    },
    {
      description: 'Mars Protocol is a cross-collateralized Money Market Protocol on Neutron and Osmosis',
      denomUnits: [{
          denom: 'ibc/B67DF59507B3755EEDE0866C449445BD54B4DA82CCEBA89D775E53DC35664255',
          exponent: 0,
          aliases: ['umars']
        }, {
          denom: 'MARS',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/B67DF59507B3755EEDE0866C449445BD54B4DA82CCEBA89D775E53DC35664255',
      name: 'Mars Protocol token',
      display: 'MARS',
      symbol: 'MARS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1ndu2wvkrxtane8se2tr48gv7nsm46y5gcqjhux/MARS',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-874',
            path: 'transfer/channel-874/factory/neutron1ndu2wvkrxtane8se2tr48gv7nsm46y5gcqjhux/MARS'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.svg'
      },
      images: [{
          imageSync: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1ndu2wvkrxtane8se2tr48gv7nsm46y5gcqjhux/MARS'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.svg',
          theme: {
            primaryColorHex: '#ef4136'
          }
        }]
    },
    {
      description: 'The native token of TON',
      denomUnits: [{
          denom: 'ibc/905889A7F0B94F1CE1506D9BADF13AE9141E4CBDBCD565E1DFC7AE418B3E3E98',
          exponent: 0,
          aliases: ['nanoTon']
        }, {
          denom: 'ton',
          exponent: 9
        }],
      typeAsset: 'ics20',
      base: 'ibc/905889A7F0B94F1CE1506D9BADF13AE9141E4CBDBCD565E1DFC7AE418B3E3E98',
      name: 'Toncoin (Oraichain Labs TON Bridge)',
      display: 'ton',
      symbol: 'TON.orai',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ton',
            baseDenom: 'nanoton'
          },
          provider: 'Oraichain Labs TON Bridge'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'oraichain',
            baseDenom: 'factory/orai1wuvhex9xqs3r539mvc6mtm7n20fcj3qr2m0y9khx6n5vtlngfzes3k0rq9/ton',
            channelId: 'channel-13'
          },
          chain: {
            channelId: 'channel-216',
            path: 'transfer/channel-216/factory/orai1wuvhex9xqs3r539mvc6mtm7n20fcj3qr2m0y9khx6n5vtlngfzes3k0rq9/ton'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ton.orai.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ton.orai.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ton.orai.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ton.orai.png'
        }, {
          imageSync: {
            chainName: 'oraichain',
            baseDenom: 'factory/orai1wuvhex9xqs3r539mvc6mtm7n20fcj3qr2m0y9khx6n5vtlngfzes3k0rq9/ton'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/ton.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/ton.svg',
          theme: {
            circle: true,
            primaryColorHex: '#0088CC',
            backgroundColorHex: '#0088CC'
          }
        }]
    },
    {
      description: 'An alloy of TON asset variants on Osmosis.',
      extendedDescription: 'Multiple Toncoin variants on Osmosis comprise the liquidity backing of a tokenized transmuter pool to create an alloy of TON.',
      denomUnits: [{
          denom: 'factory/osmo12lnwf54yd30p6amzaged2atln8k0l32n7ncxf04ctg7u7ymnsy7qkqgsw4/alloyed/allTON',
          exponent: 0
        }, {
          denom: 'ton',
          exponent: 9
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo12lnwf54yd30p6amzaged2atln8k0l32n7ncxf04ctg7u7ymnsy7qkqgsw4',
      base: 'factory/osmo12lnwf54yd30p6amzaged2atln8k0l32n7ncxf04ctg7u7ymnsy7qkqgsw4/alloyed/allTON',
      name: 'Toncoin',
      display: 'ton',
      symbol: 'TON',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'ton',
            baseDenom: 'nanoton'
          },
          provider: 'Osmosis'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/ton.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/ton.png'
      },
      images: [{
          imageSync: {
            chainName: 'ton',
            baseDenom: 'nanoton'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/ton.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/ton.png',
          theme: {
            circle: true,
            primaryColorHex: '#0088CC',
            backgroundColorHex: '#0088CC'
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allTON.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allTON.png',
          theme: {
            primaryColorHex: '#0088CC'
          }
        }]
    },
    {
      description: 'stBTC is the liquid principal token of the Lorenzo protocol, designed to represent staked Bitcoin within the Babylon ecosystem.\n\n',
      denomUnits: [{
          denom: 'ibc/453B5B25834A5D4B8FE1E894E69D73F46424F28E8ED3D8E8CA654AEFF1EC5D3B',
          exponent: 0,
          aliases: ['stBTC']
        }, {
          denom: 'display_stBTC',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/453B5B25834A5D4B8FE1E894E69D73F46424F28E8ED3D8E8CA654AEFF1EC5D3B',
      name: 'Lorenzo stBTC',
      display: 'display_stBTC',
      symbol: 'stBTC',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'Lorenzo'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'lorenzo',
            baseDenom: 'stBTC',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-79840',
            path: 'transfer/channel-79840/stBTC'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lorenzo/images/stBTC.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lorenzo/images/stBTC.svg'
      },
      images: [{
          imageSync: {
            chainName: 'lorenzo',
            baseDenom: 'stBTC'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lorenzo/images/stBTC.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lorenzo/images/stBTC.svg',
          theme: {
            primaryColorHex: '#133348'
          }
        }]
    },
    {
      description: 'Banana Vault Token - Peelworks Factory II',
      denomUnits: [{
          denom: 'factory/osmo1xu0gk9aggv79597xwazyfzaggv2pze9z7cq3p9p72tkkux9a7xaqufa792/BVT',
          exponent: 0
        }, {
          denom: 'BVT0',
          exponent: 18
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/osmo1xu0gk9aggv79597xwazyfzaggv2pze9z7cq3p9p72tkkux9a7xaqufa792/BVT',
      name: 'Peelworks Factory',
      display: 'BVT0',
      symbol: 'BVT0',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/BVT0.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/BVT0.png',
          theme: {
            primaryColorHex: '#203135'
          }
        }]
    },
    {
      description: 'Banana Vault Token - Banana Beach (🍹,🌴) II',
      denomUnits: [{
          denom: 'factory/osmo16nxtnrnl7lctvnhhpcxqmmpv63n93zgg0ukaveyc0jl4dtad79cs53c3an/BVT',
          exponent: 0
        }, {
          denom: 'BVT1',
          exponent: 18
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/osmo16nxtnrnl7lctvnhhpcxqmmpv63n93zgg0ukaveyc0jl4dtad79cs53c3an/BVT',
      name: 'Banana Beach',
      display: 'BVT1',
      symbol: 'BVT1',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/BVT1.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/BVT1.png',
          theme: {
            primaryColorHex: '#00bdc3'
          }
        }]
    },
    {
      description: 'Avail is a web3 infrastructure layer that allows modular execution layers to scale and interoperate in a trust minimized way.',
      denomUnits: [{
          denom: 'factory/osmo1myv2g72h8dan7n4hx7stt3mmust6ws03zh6gxc7vz4hpmgp5z3lq9aunm9/AVAIL.rt',
          exponent: 0,
          aliases: [
            '0xEeB4d8400AEefafC1B2953e0094134A887C76Bd8',
            'avail-wei',
            'avail'
          ]
        }, {
          denom: 'AVAIL',
          exponent: 18
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1myv2g72h8dan7n4hx7stt3mmust6ws03zh6gxc7vz4hpmgp5z3lq9aunm9',
      base: 'factory/osmo1myv2g72h8dan7n4hx7stt3mmust6ws03zh6gxc7vz4hpmgp5z3lq9aunm9/AVAIL.rt',
      name: 'Avail (Ethereum via Router)',
      display: 'AVAIL',
      symbol: 'AVAIL.eth.rt',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'avail',
            baseDenom: 'avail'
          },
          provider: 'Avail Bridge'
        }, {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xEeB4d8400AEefafC1B2953e0094134A887C76Bd8'
          },
          provider: 'Router'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/avail.eth.rt.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/avail.eth.rt.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/avail.eth.rt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/avail.eth.rt.png',
          theme: {
            circle: false,
            primaryColorHex: '#2B80D7'
          }
        }, {
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xEeB4d8400AEefafC1B2953e0094134A887C76Bd8'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avail/images/avail.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avail/images/avail.png',
          theme: {
            circle: false,
            primaryColorHex: '#2B80D7'
          }
        }]
    },
    {
      description: 'EURe is a Euro-backed stablecoin issued by Monerium.',
      denomUnits: [{
          denom: 'ibc/92AE2F53284505223A1BB80D132F859A00E190C6A738772F0B3EF65E20BA484F',
          exponent: 0,
          aliases: ['ueure']
        }, {
          denom: 'eure',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/92AE2F53284505223A1BB80D132F859A00E190C6A738772F0B3EF65E20BA484F',
      name: 'Monerium EUR emoney',
      display: 'eure',
      symbol: 'EURe',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'EUR'
          },
          provider: 'Monerium'
        },
        {
          type: 'additional-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x3231Cb76718CDeF2155FC47b5286d82e6eDA273f'
          },
          provider: 'Monerium'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'ueure',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-750',
            path: 'transfer/channel-750/ueure'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eure.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eure.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x3231Cb76718CDeF2155FC47b5286d82e6eDA273f'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eure.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eure.svg',
          theme: {
            circle: true,
            primaryColorHex: '#0095D7',
            backgroundColorHex: '#FFFFFF'
          }
        }]
    },
    {
      description: 'The native staking and governance token of Andromeda',
      denomUnits: [{
          denom: 'ibc/631DB9935E8523BDCF76B55129F5238A14C809CCB3B43AECC157DC19702F3F9E',
          exponent: 0,
          aliases: ['uandr']
        }, {
          denom: 'andr',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/631DB9935E8523BDCF76B55129F5238A14C809CCB3B43AECC157DC19702F3F9E',
      name: 'Andromeda',
      display: 'andr',
      symbol: 'ANDR',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'andromeda',
            baseDenom: 'uandr',
            channelId: 'channel-17'
          },
          chain: {
            channelId: 'channel-81924',
            path: 'transfer/channel-81924/uandr'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/andromeda/images/andromeda-logo.png'
      },
      images: [{
          imageSync: {
            chainName: 'andromeda',
            baseDenom: 'uandr'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/andromeda/images/andromeda-logo.png',
          theme: {
            primaryColorHex: '#040404'
          }
        }]
    },
    {
      description: 'Chain-key Bitcoin bridged via Omnity Network.',
      denomUnits: [{
          denom: 'factory/osmo10c4y9csfs8q7mtvfg4p9gd8d0acx0hpc2mte9xqzthd7rd3348tsfhaesm/sICP-icrc-ckBTC',
          exponent: 0,
          aliases: ['uckBTC']
        }, {
          denom: 'ckBTC',
          exponent: 8
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo10c4y9csfs8q7mtvfg4p9gd8d0acx0hpc2mte9xqzthd7rd3348tsfhaesm',
      base: 'factory/osmo10c4y9csfs8q7mtvfg4p9gd8d0acx0hpc2mte9xqzthd7rd3348tsfhaesm/sICP-icrc-ckBTC',
      name: 'Chain-key Bitcoin',
      display: 'ckBTC',
      symbol: 'ckBTC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'Omnity Network'
        }, {
          type: 'bridge',
          counterparty: {
            chainName: 'internetcomputer',
            baseDenom: 'uckBTC'
          },
          provider: 'Omnity Network'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/internetcomputer/images/ckbtc.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/internetcomputer/images/ckbtc.png'
      },
      images: [{
          imageSync: {
            chainName: 'internetcomputer',
            baseDenom: 'uckBTC'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/internetcomputer/images/ckbtc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/internetcomputer/images/ckbtc.png',
          theme: {
            circle: true,
            primaryColorHex: '#3B00B9',
            backgroundColorHex: '#3B00B9'
          }
        }]
    },
    {
      description: 'Fractionalized Pixel Wizards',
      extendedDescription: 'Fractionalized Pixel Wizards NFT Via Fractal.fun',
      denomUnits: [{
          denom: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fWIZ',
          exponent: 0
        }, {
          denom: 'fWIZ',
          exponent: 9
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv',
      base: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fWIZ',
      name: 'fWIZ',
      display: 'fWIZ',
      symbol: 'fWIZ',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fWIZ.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fWIZ.png',
          theme: {
            primaryColorHex: '#639BFF'
          }
        }],
      keywords: ['nft'],
      socials: {
        website: 'https://fractal.fun',
        twitter: 'https://twitter.com/fractaldotfun'
      }
    },
    {
      description: 'Fractionalized Pixel Witches',
      extendedDescription: 'Fractionalized Pixel Witches NFT Via Fractal.fun',
      denomUnits: [{
          denom: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fWITCH',
          exponent: 0
        }, {
          denom: 'fWITCH',
          exponent: 9
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv',
      base: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fWITCH',
      name: 'fWITCH',
      display: 'fWITCH',
      symbol: 'fWITCH',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fWITCH.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fWITCH.png',
          theme: {
            primaryColorHex: '#639BFF'
          }
        }],
      keywords: ['nft'],
      socials: {
        website: 'https://fractal.fun',
        twitter: 'https://twitter.com/fractaldotfun'
      }
    },
    {
      description: 'Fractionalized Cryptonium Maker',
      extendedDescription: 'Fractionalized Cryptonium Maker NFT Via Fractal.fun',
      denomUnits: [{
          denom: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fCRYPTONIUM',
          exponent: 0
        }, {
          denom: 'fCRYPTONIUM',
          exponent: 9
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv',
      base: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fCRYPTONIUM',
      name: 'fCRYPTONIUM',
      display: 'fCRYPTONIUM',
      symbol: 'fCRYPTONIUM',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fCRYPTONIUM.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fCRYPTONIUM.png',
          theme: {
            primaryColorHex: '#639BFF'
          }
        }],
      keywords: ['nft'],
      socials: {
        website: 'https://fractal.fun',
        twitter: 'https://twitter.com/fractaldotfun'
      }
    },
    {
      description: 'Fractionalized Atlas DAO',
      extendedDescription: 'Fractionalized Atlas DAO NFT Via Fractal.fun',
      denomUnits: [{
          denom: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fATLAS',
          exponent: 0
        }, {
          denom: 'fATLAS',
          exponent: 9
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv',
      base: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fATLAS',
      name: 'fATLAS',
      display: 'fATLAS',
      symbol: 'fATLAS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fATLAS.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fATLAS.png',
          theme: {
            primaryColorHex: '#639BFF'
          }
        }],
      keywords: ['nft'],
      socials: {
        website: 'https://fractal.fun',
        twitter: 'https://twitter.com/fractaldotfun'
      }
    },
    {
      description: 'Fractionalized Geckies',
      extendedDescription: 'Fractionalized Geckies NFT Via Fractal.fun',
      denomUnits: [{
          denom: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fGECK',
          exponent: 0
        }, {
          denom: 'fGECK',
          exponent: 9
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv',
      base: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fGECK',
      name: 'fGECK',
      display: 'fGECK',
      symbol: 'fGECK',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fGECK.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fGECK.png',
          theme: {
            primaryColorHex: '#639BFF'
          }
        }],
      keywords: ['nft'],
      socials: {
        website: 'https://fractal.fun',
        twitter: 'https://twitter.com/fractaldotfun'
      }
    },
    {
      description: 'Fractionalized Rekt Bulls',
      extendedDescription: 'Fractionalized Rekt Bulls NFT Via Fractal.fun',
      denomUnits: [{
          denom: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fBULLS',
          exponent: 0
        }, {
          denom: 'fBULLS',
          exponent: 9
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv',
      base: 'factory/osmo1dywfmhyc8y0wga7qpzej0x0mgwqg25fj4eccp494w8yafzdpgamsx9ryyv/fBULLS',
      name: 'fBULLS',
      display: 'fBULLS',
      symbol: 'fBULLS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fBULLS.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fBULLS.png',
          theme: {
            primaryColorHex: '#639BFF'
          }
        }],
      keywords: ['nft'],
      socials: {
        website: 'https://fractal.fun',
        twitter: 'https://twitter.com/fractaldotfun'
      }
    },
    {
      description: 'SinGarden token',
      denomUnits: [{
          denom: 'ibc/2BF7FB3908B469FA9672767DC74AF8A18E2F47F8B623B0685DE290B828FCBD23',
          exponent: 0,
          aliases: ['uSIN', 'factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/sin']
        }, {
          denom: 'SIN',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/2BF7FB3908B469FA9672767DC74AF8A18E2F47F8B623B0685DE290B828FCBD23',
      name: 'SIN',
      display: 'SIN',
      symbol: 'SIN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/sin',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-874',
            path: 'transfer/channel-874/factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/sin'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/sin.png'
      },
      images: [{
          imageSync: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/sin'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/sin.png',
          theme: {
            primaryColorHex: '#ebf0f4'
          }
        }]
    },
    {
      description: 'Kima is an asset-agnostic interoperability infrastructure that connects blockchain networks and legacy financial systems, enabling secure, scalable cross-chain transactions and seamless communication across ecosystems.',
      denomUnits: [{
          denom: 'ibc/629B5691DE993DCD07AA1B0587AD52A7FA4E8F28B77DE15BCBDF936CA6F76E6C',
          exponent: 0,
          aliases: ['uKIMA']
        }, {
          denom: 'KIMA',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/629B5691DE993DCD07AA1B0587AD52A7FA4E8F28B77DE15BCBDF936CA6F76E6C',
      name: 'Kima Network',
      display: 'KIMA',
      symbol: 'KIMA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kimanetwork',
            baseDenom: 'uKIMA',
            channelId: 'channel-4'
          },
          chain: {
            channelId: 'channel-86496',
            path: 'transfer/channel-86496/uKIMA'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kimanetwork/images/kima.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kimanetwork/images/kima.svg'
      },
      images: [{
          imageSync: {
            chainName: 'kimanetwork',
            baseDenom: 'uKIMA'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kimanetwork/images/kima.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kimanetwork/images/kima.svg'
        }]
    },
    {
      description: 'STOS coin is the native token for the Stratos Blockchain. Stratos is a pioneering decentralized infrastructure service provider, revolutionizing AI and DePIN with advanced decentralized solutions in storage, computing, databases, and blockchain services. We empower Web 3.0 developpers and dApps through our scalable, reliable, and high-performance networks.',
      denomUnits: [
        {
          denom: 'ibc/ABD49F44559CB3E557CC458459CB6A67CEBD66E23C7674A0B2B445230BDA1F6C',
          exponent: 0,
          aliases: ['wei']
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
      typeAsset: 'ics20',
      base: 'ibc/ABD49F44559CB3E557CC458459CB6A67CEBD66E23C7674A0B2B445230BDA1F6C',
      name: 'Stratos',
      display: 'stos',
      symbol: 'STOS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'stratos',
            baseDenom: 'wei',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-81016',
            path: 'transfer/channel-81016/wei'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stratos',
            baseDenom: 'wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.svg',
          theme: {
            primaryColorHex: '#04847c'
          }
        }]
    },
    {
      description: 'Uniswap UNI on Osmosis via Axelar',
      denomUnits: [{
          denom: 'ibc/AE2719773D6FCDD05AC17B1ED63F672F5F9D84144A61965F348C86C2A83AD161',
          exponent: 0,
          aliases: ['uni-wei']
        }, {
          denom: 'uni',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/AE2719773D6FCDD05AC17B1ED63F672F5F9D84144A61965F348C86C2A83AD161',
      name: 'Uniswap (Axelar)',
      display: 'uni',
      symbol: 'UNI.axl',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'
          },
          provider: 'Axelar'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'uni-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/uni-wei'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/uni.axl.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/uni.axl.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/uni.axl.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/uni.axl.png',
          theme: {
            primaryColorHex: '#FF007A'
          }
        }, {
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'uni-wei'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg'
        }]
    },
    {
      description: 'An alloy of UNI asset variants on Osmosis.',
      denomUnits: [{
          denom: 'factory/osmo1eqjda4pc6e09jtxzxggf6jl3jye2yn453ja58we5gxwzmf5ah28qvlnaz8/alloyed/allUNI',
          exponent: 0
        }, {
          denom: 'allUNI',
          exponent: 12
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1eqjda4pc6e09jtxzxggf6jl3jye2yn453ja58we5gxwzmf5ah28qvlnaz8',
      base: 'factory/osmo1eqjda4pc6e09jtxzxggf6jl3jye2yn453ja58we5gxwzmf5ah28qvlnaz8/alloyed/allUNI',
      name: 'Uniswap',
      display: 'allUNI',
      symbol: 'UNI',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'
          },
          provider: 'Osmosis'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg'
        }]
    },
    {
      description: 'Pryzm\'s LP token for OSMO Yield pool',
      denomUnits: [{
          denom: 'ibc/54B2D9DC9602A1CE2A0329D51C6A1C7C4ADE71477186AEAAA549318C4513A453',
          exponent: 0,
          aliases: ['lp:8:uosmo']
        }, {
          denom: 'lp:8:osmo',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/54B2D9DC9602A1CE2A0329D51C6A1C7C4ADE71477186AEAAA549318C4513A453',
      name: 'OSMO Yield LP',
      display: 'lp:8:osmo',
      symbol: 'OSMO-YIELD-LP',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'pryzm',
            baseDenom: 'lp:8:uosmo',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-75755',
            path: 'transfer/channel-75755/lp:8:uosmo'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          imageSync: {
            chainName: 'pryzm',
            baseDenom: 'lp:8:uosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }]
    },
    {
      description: 'Int3face blockchain native token',
      denomUnits: [{
          denom: 'ibc/7D29C888219883C47C623578ACACFC89CC29AA70FBF09C895A1EED911BF90F32',
          exponent: 0,
          aliases: ['uint3']
        }, {
          denom: 'int3',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/7D29C888219883C47C623578ACACFC89CC29AA70FBF09C895A1EED911BF90F32',
      name: 'Int3face',
      display: 'int3',
      symbol: 'INT3',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'int3face',
            baseDenom: 'uint3',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-82819',
            path: 'transfer/channel-82819/uint3'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3.png'
      },
      images: [{
          imageSync: {
            chainName: 'int3face',
            baseDenom: 'uint3'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3.png',
          theme: {
            primaryColorHex: '#3d3d3d'
          }
        }]
    },
    {
      description: 'Dogecoin on Int3face',
      denomUnits: [{
          denom: 'ibc/B3DFDC2958A2BE482532DA3B6B5729B469BE7475598F7487D98B1B3E085245DE',
          exponent: 0,
          aliases: ['factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/dogecoin-doge']
        }, {
          denom: 'doge',
          exponent: 8
        }],
      typeAsset: 'ics20',
      base: 'ibc/B3DFDC2958A2BE482532DA3B6B5729B469BE7475598F7487D98B1B3E085245DE',
      name: 'Dogecoin (Int3)',
      display: 'doge',
      symbol: 'DOGE.int3',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'dogecoin',
            baseDenom: 'shibe'
          },
          provider: 'Int3face'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'int3face',
            baseDenom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/dogecoin-doge',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-82819',
            path: 'transfer/channel-82819/factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/dogecoin-doge'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/doge.int3.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/doge.int3.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/doge.int3.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/doge.int3.png'
        }, {
          imageSync: {
            chainName: 'int3face',
            baseDenom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/dogecoin-doge'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3doge.png',
          theme: {
            primaryColorHex: '#3d3d3d'
          }
        }]
    },
    {
      description: 'Bitcoin on Int3face',
      denomUnits: [{
          denom: 'ibc/2F4258D6E1E01B203D6CA83F2C7E4959615053A21EC2C2FC196F7911CAC832EF',
          exponent: 0,
          aliases: ['factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/bitcoin-btc']
        }, {
          denom: 'btc',
          exponent: 8
        }],
      typeAsset: 'ics20',
      base: 'ibc/2F4258D6E1E01B203D6CA83F2C7E4959615053A21EC2C2FC196F7911CAC832EF',
      name: 'Bitcoin (Int3)',
      display: 'btc',
      symbol: 'BTC.int3',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'Int3face'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'int3face',
            baseDenom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/bitcoin-btc',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-82819',
            path: 'transfer/channel-82819/factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/bitcoin-btc'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/btc.int3.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/btc.int3.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/btc.int3.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/btc.int3.png'
        }, {
          imageSync: {
            chainName: 'int3face',
            baseDenom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/bitcoin-btc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3btc.png',
          theme: {
            primaryColorHex: '#3d3d3d'
          }
        }]
    },
    {
      description: 'Bitcoin-Cash on Int3face',
      denomUnits: [{
          denom: 'ibc/869E01805EBBDDCAEA588666CD5149728B7DC7D69F30D92F77AD67F77CEB3FDA',
          exponent: 0,
          aliases: ['factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/bitcoin-cash-bch']
        }, {
          denom: 'bch',
          exponent: 8
        }],
      typeAsset: 'ics20',
      base: 'ibc/869E01805EBBDDCAEA588666CD5149728B7DC7D69F30D92F77AD67F77CEB3FDA',
      name: 'Bitcoin Cash (Int3)',
      display: 'bch',
      symbol: 'BCH.int3',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'bitcoincash',
            baseDenom: 'sat'
          },
          provider: 'Int3face'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'int3face',
            baseDenom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/bitcoin-cash-bch',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-82819',
            path: 'transfer/channel-82819/factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/bitcoin-cash-bch'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/bch.int3.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/bch.int3.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/bch.int3.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/bch.int3.png'
        }, {
          imageSync: {
            chainName: 'int3face',
            baseDenom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/bitcoin-cash-bch'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3bch.png',
          theme: {
            primaryColorHex: '#3d3d3d'
          }
        }]
    },
    {
      description: 'Litecoin on Int3face',
      denomUnits: [{
          denom: 'ibc/905326586AE1C86AC8B1CDB20BE957DE5FB23963EDD2C9ADD3E835CC22115A46',
          exponent: 0,
          aliases: ['factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/litecoin-ltc']
        }, {
          denom: 'ltc',
          exponent: 8
        }],
      typeAsset: 'ics20',
      base: 'ibc/905326586AE1C86AC8B1CDB20BE957DE5FB23963EDD2C9ADD3E835CC22115A46',
      name: 'Litecoin (Int3)',
      display: 'ltc',
      symbol: 'LTC.int3',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'litecoin',
            baseDenom: 'litoshi'
          },
          provider: 'Int3face'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'int3face',
            baseDenom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/litecoin-ltc',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-82819',
            path: 'transfer/channel-82819/factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/litecoin-ltc'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ltc.int3.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ltc.int3.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ltc.int3.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ltc.int3.png'
        }, {
          imageSync: {
            chainName: 'int3face',
            baseDenom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/litecoin-ltc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3ltc.png',
          theme: {
            primaryColorHex: '#3d3d3d'
          }
        }]
    },
    {
      description: 'TON on Int3face',
      denomUnits: [{
          denom: 'ibc/DDE1238DCBC338C0FD0700A72CBD64C017B7A646C4A46789ADFB5D47F1E52E38',
          exponent: 0,
          aliases: ['factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/ton-ton']
        }, {
          denom: 'ton',
          exponent: 9
        }],
      typeAsset: 'ics20',
      base: 'ibc/DDE1238DCBC338C0FD0700A72CBD64C017B7A646C4A46789ADFB5D47F1E52E38',
      name: 'TON (Int3)',
      display: 'ton',
      symbol: 'TON.int3',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ton',
            baseDenom: 'nanoton'
          },
          provider: 'Int3face'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'int3face',
            baseDenom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/ton-ton',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-82819',
            path: 'transfer/channel-82819/factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/ton-ton'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ton.int3.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ton.int3.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ton.int3.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ton.int3.png'
        }, {
          imageSync: {
            chainName: 'int3face',
            baseDenom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/ton-ton'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3ton.png',
          theme: {
            primaryColorHex: '#3d3d3d'
          }
        }]
    },
    {
      description: 'Tether\'s USD stablecoin from Arbitrum on Axelar',
      denomUnits: [{
          denom: 'ibc/57B63A0795B6BC0AC4EFD0D4DEE9FE71FCC1D0FFA87F6280C9CDEF4F6727A173',
          exponent: 0,
          aliases: ['arbitrum-uusdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/57B63A0795B6BC0AC4EFD0D4DEE9FE71FCC1D0FFA87F6280C9CDEF4F6727A173',
      name: 'Tether USD (Ethereum) (Arbitrum via Axelar)',
      display: 'usdt',
      symbol: 'USDT.e.arb.axl',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Tether'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Arbitrum Bridge'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'arbitrum',
            baseDenom: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'arbitrum-uusdt',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/arbitrum-uusdt'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.arb.axl.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.arb.axl.svg'
        }, {
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'arbitrum-uusdt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          theme: {
            circle: true,
            primaryColorHex: '#009393',
            backgroundColorHex: '#009393'
          }
        }]
    },
    {
      description: 'Tether\'s USD stablecoin from Optimism on Axelar',
      denomUnits: [{
          denom: 'ibc/EEA21E12A250B7FBBCBBBD1F7AA78984F5C12D684B32EBEEFC585FF596A7BCDA',
          exponent: 0,
          aliases: ['optimism-uusdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/EEA21E12A250B7FBBCBBBD1F7AA78984F5C12D684B32EBEEFC585FF596A7BCDA',
      name: 'Tether USD (Ethereum) (optimism via Axelar)',
      display: 'usdt',
      symbol: 'USDT.e.op.axl',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Tether'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Optimism Bridge'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'optimism',
            baseDenom: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'optimism-uusdt',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/optimism-uusdt'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.op.axl.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.op.axl.svg'
        }, {
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'optimism-uusdt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          theme: {
            circle: true,
            primaryColorHex: '#009393',
            backgroundColorHex: '#009393'
          }
        }]
    },
    {
      description: 'Tether\'s USD stablecoin from Polygon on Axelar',
      denomUnits: [{
          denom: 'ibc/2F6003A92088B989A159C593C551DF7B04FA0A0419CA3ED087E45E0006ECFF6E',
          exponent: 0,
          aliases: ['polygon-uusdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/2F6003A92088B989A159C593C551DF7B04FA0A0419CA3ED087E45E0006ECFF6E',
      name: 'Tether USD (Ethereum) (Polygon via Axelar)',
      display: 'usdt',
      symbol: 'USDT.e.matic.axl',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Tether'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Polygon PoS Bridge'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'polygon',
            baseDenom: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'polygon-uusdt',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/polygon-uusdt'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.pol.axl.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.pol.axl.svg'
        }, {
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'polygon-uusdt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          theme: {
            circle: true,
            primaryColorHex: '#009393',
            backgroundColorHex: '#009393'
          }
        }]
    },
    {
      description: 'Coinbase Wrapped Bitcoin on Axelar',
      denomUnits: [{
          denom: 'ibc/616C2EA69BC328F245CE449785CB0B526B462C48F19DCF9B3D30699579B4308A',
          exponent: 0,
          aliases: ['cbbtc-satoshi']
        }, {
          denom: 'cbbtc',
          exponent: 8
        }],
      typeAsset: 'ics20',
      base: 'ibc/616C2EA69BC328F245CE449785CB0B526B462C48F19DCF9B3D30699579B4308A',
      name: 'Coinbase Wrapped BTC (Axelar)',
      display: 'cbbtc',
      symbol: 'cbBTC.axl',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'Coinbase'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'base',
            baseDenom: '0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'cbbtc-satoshi',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/cbbtc-satoshi'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/cbbtc.axl.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/cbbtc.axl.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/cbbtc.axl.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/cbbtc.axl.png'
        }, {
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'cbbtc-satoshi'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/base/images/cbbtc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/base/images/cbbtc.png',
          theme: {
            circle: true,
            primaryColorHex: '#0052FF'
          }
        }]
    },
    {
      description: 'Fire Bitcoin on Axelar',
      denomUnits: [{
          denom: 'ibc/22C342A34DD0189AC2B2697EE76C360A9FBA53748ABA76E12C3A9E9F5F1E130F',
          exponent: 0,
          aliases: ['fbtc-satoshi']
        }, {
          denom: 'fbtc',
          exponent: 8
        }],
      typeAsset: 'ics20',
      base: 'ibc/22C342A34DD0189AC2B2697EE76C360A9FBA53748ABA76E12C3A9E9F5F1E130F',
      name: 'Fire Bitcoin (Axelar)',
      display: 'fbtc',
      symbol: 'FBTC.axl',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'Ignition'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'mantle',
            baseDenom: '0xC96dE26018A54D51c097160568752c4E3BD6C364'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'fbtc-satoshi',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/fbtc-satoshi'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fbtc.axl.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fbtc.axl.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fbtc.axl.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/fbtc.axl.png'
        }, {
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'fbtc-satoshi'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/mantle/images/fbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/mantle/images/fbtc.svg',
          theme: {
            circle: false,
            primaryColorHex: '#8F00FF',
            backgroundColorHex: '#00000000'
          }
        }]
    },
    {
      description: 'Lombard Staked Bitcoin on Axelar',
      denomUnits: [{
          denom: 'ibc/4AC81C97BBB5482536F6401328E0E10BCCD98F0F471DCF64319A811E25E53CAB',
          exponent: 0,
          aliases: ['lbtc-satoshi']
        }, {
          denom: 'lbtc',
          exponent: 8
        }],
      typeAsset: 'ics20',
      base: 'ibc/4AC81C97BBB5482536F6401328E0E10BCCD98F0F471DCF64319A811E25E53CAB',
      name: 'Lombard Staked Bitcoin (Axelar)',
      display: 'lbtc',
      symbol: 'LBTC.axl',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'Lombard'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x8236a87084f8B84306f72007F36F2618A5634494'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'lbtc-satoshi',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/lbtc-satoshi'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/lbtc.axl.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/lbtc.axl.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/lbtc.axl.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/lbtc.axl.png'
        }, {
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'lbtc-satoshi'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/lbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/lbtc.svg',
          theme: {
            circle: true,
            primaryColorHex: '#162E2F'
          }
        }]
    },
    {
      description: 'Roostock BTC bridged via Router.',
      denomUnits: [{
          denom: 'factory/osmo1myv2g72h8dan7n4hx7stt3mmust6ws03zh6gxc7vz4hpmgp5z3lq9aunm9/BTC.rt',
          exponent: 0,
          aliases: ['0x542FDA317318eBf1d3DeAF76E0B632741a7e677d', 'sat']
        }, {
          denom: 'rbtc',
          exponent: 18
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1myv2g72h8dan7n4hx7stt3mmust6ws03zh6gxc7vz4hpmgp5z3lq9aunm9',
      base: 'factory/osmo1myv2g72h8dan7n4hx7stt3mmust6ws03zh6gxc7vz4hpmgp5z3lq9aunm9/BTC.rt',
      name: 'Rootstock (Router)',
      display: 'rbtc',
      symbol: 'RBTC.rt',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'Rootstock'
        },
        {
          type: 'wrapped',
          counterparty: {
            chainName: 'rootstock',
            baseDenom: 'sat'
          },
          provider: 'Rootstock'
        },
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'rootstock',
            baseDenom: '0x542FDA317318eBf1d3DeAF76E0B632741a7e677d'
          },
          provider: 'Router'
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/rbtc.rt.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/rbtc.rt.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/rbtc.rt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/rbtc.rt.png'
        }, {
          imageSync: {
            chainName: 'rootstock',
            baseDenom: 'sat'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/rootstock/images/rbtc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/rootstock/images/rbtc.png',
          theme: {
            circle: false,
            primaryColorHex: '#FF9931',
            backgroundColorHex: '#00000000'
          }
        }]
    },
    {
      description: 'An alloy of DOGE asset variants on Osmosis.',
      denomUnits: [{
          denom: 'factory/osmo10pk4crey8fpdyqd62rsau0y02e3rk055w5u005ah6ly7k849k5tsf72x40/alloyed/allDOGE',
          exponent: 0
        }, {
          denom: 'allDOGE',
          exponent: 8
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo10pk4crey8fpdyqd62rsau0y02e3rk055w5u005ah6ly7k849k5tsf72x40',
      base: 'factory/osmo10pk4crey8fpdyqd62rsau0y02e3rk055w5u005ah6ly7k849k5tsf72x40/alloyed/allDOGE',
      name: 'Dogecoin',
      display: 'allDOGE',
      symbol: 'DOGE',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'dogecoin',
            baseDenom: 'shibe'
          },
          provider: 'Osmosis'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/dogecoin/images/doge.png'
      },
      images: [{
          imageSync: {
            chainName: 'dogecoin',
            baseDenom: 'shibe'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/dogecoin/images/doge.png',
          theme: {
            primaryColorHex: '#bda148'
          }
        }]
    },
    {
      description: 'An alloy of LTC asset variants on Osmosis.',
      denomUnits: [{
          denom: 'factory/osmo1csp8fk353hnq2tmulklecxpex43qmjvrkxjcsh4c3eqcw2vjcslq5jls9v/alloyed/allLTC',
          exponent: 0
        }, {
          denom: 'allLTC',
          exponent: 8
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1csp8fk353hnq2tmulklecxpex43qmjvrkxjcsh4c3eqcw2vjcslq5jls9v',
      base: 'factory/osmo1csp8fk353hnq2tmulklecxpex43qmjvrkxjcsh4c3eqcw2vjcslq5jls9v/alloyed/allLTC',
      name: 'Litecoin',
      display: 'allLTC',
      symbol: 'LTC',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'litecoin',
            baseDenom: 'litoshi'
          },
          provider: 'Osmosis'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/litecoin/images/ltc.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/litecoin/images/ltc.png'
      },
      images: [{
          imageSync: {
            chainName: 'litecoin',
            baseDenom: 'litoshi'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/litecoin/images/ltc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/litecoin/images/ltc.png',
          theme: {
            primaryColorHex: '#345D9D',
            circle: true
          }
        }]
    },
    {
      description: 'An alloy of BCH asset variants on Osmosis.',
      denomUnits: [{
          denom: 'factory/osmo1cranx3twqxfrgeqvgsu262gy54vafpc9xap6scye99v244zl970s7kw2sz/alloyed/allBCH',
          exponent: 0
        }, {
          denom: 'allBCH',
          exponent: 8
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1cranx3twqxfrgeqvgsu262gy54vafpc9xap6scye99v244zl970s7kw2sz',
      base: 'factory/osmo1cranx3twqxfrgeqvgsu262gy54vafpc9xap6scye99v244zl970s7kw2sz/alloyed/allBCH',
      name: 'Bitcoin Cash',
      display: 'allBCH',
      symbol: 'BCH',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'bitcoincash',
            baseDenom: 'sat'
          },
          provider: 'Osmosis'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoincash/images/bch.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoincash/images/bch.png'
      },
      images: [{
          imageSync: {
            chainName: 'bitcoincash',
            baseDenom: 'sat'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoincash/images/bch.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoincash/images/bch.png',
          theme: {
            primaryColorHex: '#0AC18E',
            circle: true
          }
        }]
    },
    {
      description: 'The native token of MANTRA',
      denomUnits: [{
          denom: 'ibc/164807F6226F91990F358C6467EEE8B162E437BDCD3DADEC3F0CE20693720795',
          exponent: 0,
          aliases: ['uom']
        }, {
          denom: 'om',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/164807F6226F91990F358C6467EEE8B162E437BDCD3DADEC3F0CE20693720795',
      name: 'MANTRA',
      display: 'om',
      symbol: 'OM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'mantrachain',
            baseDenom: 'uom',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-85077',
            path: 'transfer/channel-85077/uom'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg'
      },
      images: [
        {
          imageSync: {
            chainName: 'mantrachain',
            baseDenom: 'uom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg',
          theme: {
            circle: true,
            primaryColorHex: '#fba0c1'
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Darkmatt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Darkmatt.svg',
          theme: {
            darkMode: true,
            circle: true,
            primaryColorHex: '#342c2c'
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-WHT.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-WHT.svg',
          theme: {
            darkMode: false,
            circle: true,
            primaryColorHex: '#342c2c'
          }
        }
      ]
    },
    {
      description: 'The native staking and governance token of AtomOne',
      denomUnits: [{
          denom: 'ibc/715283E4A955EB803AB1DD30B488587A4D63BF0B51BADA537053DEE479BA10D6',
          exponent: 0,
          aliases: ['uatone']
        }, {
          denom: 'atone',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/715283E4A955EB803AB1DD30B488587A4D63BF0B51BADA537053DEE479BA10D6',
      name: 'AtomOne',
      display: 'atone',
      symbol: 'ATONE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'atomone',
            baseDenom: 'uatone',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-85309',
            path: 'transfer/channel-85309/uatone'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.svg'
      },
      images: [{
          imageSync: {
            chainName: 'atomone',
            baseDenom: 'uatone'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.svg'
        }]
    },
    {
      description: 'The Spice memecoin',
      denomUnits: [{
          denom: 'factory/osmo1n6asrjy9754q8y9jsxqf557zmsv3s3xa5m9eg5/uspice',
          exponent: 0
        }, {
          denom: 'Spice',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/osmo1n6asrjy9754q8y9jsxqf557zmsv3s3xa5m9eg5/uspice',
      name: 'Spice',
      display: 'Spice',
      symbol: 'SPICE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/spice.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/spice.png',
          theme: {
            primaryColorHex: '#e5ba44'
          }
        }],
      coingeckoId: 'spice-2',
      keywords: ['meme'],
      socials: {
        twitter: 'https://x.com/spiceoncosmos'
      }
    },
    {
      description: 'YUM is the Cacao Swap token, powering decentralised rails.',
      denomUnits: [{
          denom: 'ibc/21D8071EF5B02A86D945430D859A594CBF28287D38104A264BB9FD3B22BBF5DE',
          exponent: 0,
          aliases: ['yum-wei']
        }, {
          denom: 'yum',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/21D8071EF5B02A86D945430D859A594CBF28287D38104A264BB9FD3B22BBF5DE',
      name: 'Yum',
      display: 'yum',
      symbol: 'YUM',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xcE682c89C63d2850Cb2ca898E44D6c7c30d897a6'
          },
          provider: 'Axelar'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'yum-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/yum-wei'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yum.png'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xcE682c89C63d2850Cb2ca898E44D6c7c30d897a6'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yum.png',
          theme: {
            primaryColorHex: '#33a6e7'
          }
        }],
      socials: {
        website: 'https://cacaoswap.app',
        twitter: 'https://x.com/CacaoSwap'
      }
    },
    {
      description: 'GATA Yield DAO Governance Token powered by OmniFlixHub',
      denomUnits: [{
          denom: 'ibc/50F886EFA15E1FF3D9226B177083A1EFF944176181C70B6131D74FE5AFB1F2C0',
          exponent: 0,
          aliases: ['factory/omniflix1fwphj5p6qd8gtkehkzfgac38eur4uqzgz97uwvf6hsc0vjl004gqfj0xnv/ygata']
        }, {
          denom: 'ygata',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/50F886EFA15E1FF3D9226B177083A1EFF944176181C70B6131D74FE5AFB1F2C0',
      name: 'Yield GATA',
      display: 'ygata',
      symbol: 'YGATA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'omniflixhub',
            baseDenom: 'factory/omniflix1fwphj5p6qd8gtkehkzfgac38eur4uqzgz97uwvf6hsc0vjl004gqfj0xnv/ygata',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-199',
            path: 'transfer/channel-199/factory/omniflix1fwphj5p6qd8gtkehkzfgac38eur4uqzgz97uwvf6hsc0vjl004gqfj0xnv/ygata'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/ygata.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/ygata.svg'
      },
      images: [{
          imageSync: {
            chainName: 'omniflixhub',
            baseDenom: 'factory/omniflix1fwphj5p6qd8gtkehkzfgac38eur4uqzgz97uwvf6hsc0vjl004gqfj0xnv/ygata'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/ygata.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/ygata.svg',
          theme: {
            primaryColorHex: '#7b5aff'
          }
        }]
    },
    {
      description: 'Dragon Token is the native staking and governance token of Dungeon Chain, serving as the backbone of the ecosystem. Its primary roles include staking, where users stake Dragon Tokens to secure the network, enhance its functionality, and earn rewards in return; governance, granting token holders voting rights to influence key decisions such as game onboarding, protocol updates, and community-driven initiatives; and ecosystem growth, facilitating transactions, incentivizing developers, and promoting the creation of new interchain games. Dragon Token ensures a decentralized, fair, and community-driven ecosystem, fostering the evolution of blockchain-based gaming. It plays a crucial role in driving the growth of Dungeon Chain by empowering both developers and players to participate actively in the ecosystem\'s governance and success.',
      denomUnits: [{
          denom: 'ibc/3B95D63B520C283BCA86F8CD426D57584039463FD684A5CBA31D2780B86A1995',
          exponent: 0,
          aliases: ['udgn']
        }, {
          denom: 'DGN',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/3B95D63B520C283BCA86F8CD426D57584039463FD684A5CBA31D2780B86A1995',
      name: 'Dragon',
      display: 'DGN',
      symbol: 'DGN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'dungeon',
            baseDenom: 'udgn',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-85791',
            path: 'transfer/channel-85791/udgn'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dungeon/images/DGN.png'
      },
      images: [{
          imageSync: {
            chainName: 'dungeon',
            baseDenom: 'udgn'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dungeon/images/DGN.png',
          theme: {
            circle: true
          }
        }]
    },
    {
      description: 'Synternet is a blockchain that powers modular, interoperable data infrastructure across all major chains.',
      denomUnits: [{
          denom: 'ibc/1B454982D3746951510D3845145B83628D4ED380D95722C8077776C4689F973A',
          exponent: 0,
          aliases: ['usynt']
        }, {
          denom: 'SYNT',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/1B454982D3746951510D3845145B83628D4ED380D95722C8077776C4689F973A',
      name: 'Synternet',
      display: 'SYNT',
      symbol: 'SYNT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'synternet',
            baseDenom: 'usynt',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-85186',
            path: 'transfer/channel-85186/usynt'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/synternet/images/synt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/synternet/images/synt.svg'
      },
      images: [{
          imageSync: {
            chainName: 'synternet',
            baseDenom: 'usynt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/synternet/images/synt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/synternet/images/synt.svg',
          theme: {
            primaryColorHex: '#272d45'
          }
        }]
    },
    {
      description: 'Sssshhh…',
      denomUnits: [{
          denom: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/bomu',
          exponent: 0
        }, {
          denom: 'BOMU',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8',
      base: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/bomu',
      name: '$bomu',
      display: 'BOMU',
      symbol: 'BOMU',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/bomu.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/bomu.png'
        }]
    },
    {
      description: 'Drop staked ATOM',
      denomUnits: [{
          denom: 'ibc/C1B4D4804EB8F95FFB75E6395A301F0AD6D7DDE5C3A45571B70E46A368DD353E',
          exponent: 0,
          aliases: ['factory/neutron1k6hr0f83e7un2wjf29cspk7j69jrnskk65k3ek2nj9dztrlzpj6q00rtsa/udatom']
        }, {
          denom: 'dATOM',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/C1B4D4804EB8F95FFB75E6395A301F0AD6D7DDE5C3A45571B70E46A368DD353E',
      name: 'dATOM',
      display: 'dATOM',
      symbol: 'dATOM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom'
          },
          provider: 'Drop Protocol'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1k6hr0f83e7un2wjf29cspk7j69jrnskk65k3ek2nj9dztrlzpj6q00rtsa/udatom',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-874',
            path: 'transfer/channel-874/factory/neutron1k6hr0f83e7un2wjf29cspk7j69jrnskk65k3ek2nj9dztrlzpj6q00rtsa/udatom'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/dATOM.svg'
      },
      images: [{
          imageSync: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1k6hr0f83e7un2wjf29cspk7j69jrnskk65k3ek2nj9dztrlzpj6q00rtsa/udatom'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/dATOM.svg'
        }]
    },
    {
      description: 'Kima is an asset-agnostic interoperability infrastructure that connects blockchain networks and legacy financial systems, enabling secure, scalable cross-chain transactions and seamless communication across ecosystems.',
      denomUnits: [{
          denom: 'ibc/A6712952E566B8A9F29D0A533F043C3CE3CF9870B01A2180E390133119C14A71',
          exponent: 0,
          aliases: ['uKIMA']
        }, {
          denom: 'KIMA',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/A6712952E566B8A9F29D0A533F043C3CE3CF9870B01A2180E390133119C14A71',
      name: 'Kima Network',
      display: 'KIMA',
      symbol: 'KIMA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kimanetwork',
            baseDenom: 'uKIMA',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-83350',
            path: 'transfer/channel-83350/uKIMA'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kimanetwork/images/kima.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kimanetwork/images/kima.svg'
      },
      images: [{
          imageSync: {
            chainName: 'kimanetwork',
            baseDenom: 'uKIMA'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kimanetwork/images/kima.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kimanetwork/images/kima.svg'
        }]
    },
    {
      description: 'The native token of Furya',
      denomUnits: [{
          denom: 'ibc/42D0FBF9DDC72D7359D309A93A6DF9F6FDEE3987EA1C5B3CDE95C06FCE183F12',
          exponent: 0,
          aliases: ['ufury']
        }, {
          denom: 'fury',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/42D0FBF9DDC72D7359D309A93A6DF9F6FDEE3987EA1C5B3CDE95C06FCE183F12',
      name: 'furya',
      display: 'fury',
      symbol: 'FURY',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'furya',
            baseDenom: 'ufury',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-8690',
            path: 'transfer/channel-8690/ufury'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.svg'
      },
      images: [{
          imageSync: {
            chainName: 'furya',
            baseDenom: 'ufury'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.svg',
          theme: {
            primaryColorHex: '#040404'
          }
        }],
      keywords: ['gaming', 'staking']
    },
    {
      description: 'PUNDIX token is the native token that functions within the Pundi X ecosystem, including PundiX Chain and XPOS.',
      denomUnits: [{
          denom: 'ibc/2EB516F83C9FF44AB6826F269CA98A5622608C6C955E12112E58F23A324FEE07',
          exponent: 0,
          aliases: ['ibc/55367B7B6572631B78A93C66EF9FDFCE87CDE372CC4ED7848DA78C1EB1DCDD78']
        }, {
          denom: 'PUNDIX',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/2EB516F83C9FF44AB6826F269CA98A5622608C6C955E12112E58F23A324FEE07',
      name: 'Pundi X Token',
      display: 'PUNDIX',
      symbol: 'PUNDIX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'fxcore',
            baseDenom: 'eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38'
          }
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'pundix',
            baseDenom: 'ibc/55367B7B6572631B78A93C66EF9FDFCE87CDE372CC4ED7848DA78C1EB1DCDD78',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-12618',
            path: 'transfer/channel-12618/transfer/channel-0/eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pundix.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pundix.png',
          theme: {
            primaryColorHex: '#f1d20c'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'The native token of dHealth',
      denomUnits: [{
          denom: 'ibc/320F8D6EC17E14436D19C6D844BB9A5AE9B9A209F6D18364A2191FF08E8732A9',
          exponent: 0,
          aliases: ['udhp']
        }, {
          denom: 'dhp',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/320F8D6EC17E14436D19C6D844BB9A5AE9B9A209F6D18364A2191FF08E8732A9',
      name: 'dHealth',
      display: 'dhp',
      symbol: 'DHP',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'dhealth',
            baseDenom: 'udhp',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-38776',
            path: 'transfer/channel-38776/udhp'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.svg'
      },
      images: [{
          imageSync: {
            chainName: 'dhealth',
            baseDenom: 'udhp'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.svg',
          theme: {
            primaryColorHex: '#140c7c'
          }
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      denomUnits: [{
          denom: 'ibc/0B3C3D06228578334B66B57FBFBA4033216CEB8119B27ACDEE18D92DA5B28D43',
          exponent: 0,
          aliases: ['avalanche-uusdc']
        }, {
          denom: 'avalanche-usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/0B3C3D06228578334B66B57FBFBA4033216CEB8119B27ACDEE18D92DA5B28D43',
      name: 'Wormhole USDC(Avalanche)',
      display: 'avalanche-usdc',
      symbol: 'avalanche.USDC.wh',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'gateway',
            baseDenom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5ZLmAZpcbaP4EGyihSmpfwryzDr84h51tboV392BCjW4',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5ZLmAZpcbaP4EGyihSmpfwryzDr84h51tboV392BCjW4'
          }
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.svg',
          theme: {
            primaryColorHex: '#2474cb'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.svg'
      }
    },
    {
      description: 'Nomic\'s native token.',
      denomUnits: [{
          denom: 'ibc/F49DFB3BC8105C57EE7F17EC2402438825B31212CFDD81681EB87911E934F32C',
          exponent: 0,
          aliases: ['unom']
        }, {
          denom: 'nom',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/F49DFB3BC8105C57EE7F17EC2402438825B31212CFDD81681EB87911E934F32C',
      name: 'Nomic',
      display: 'nom',
      symbol: 'nomic.NOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'nomic',
            baseDenom: 'unom',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-6897',
            path: 'transfer/channel-6897/unom'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'nomic',
            baseDenom: 'unom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg',
          theme: {
            primaryColorHex: '#6404fc'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg'
      }
    },
    {
      description: 'The governance and utility token of Yieldmos, the Interchain Automation Protocol',
      denomUnits: [{
          denom: 'factory/osmo1vdvnznwg597qngrq9mnfcfk0am9jdc9y446jewhcqdreqz4r75xq5j5zvy/ymos',
          exponent: 0
        }, {
          denom: 'ymos',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1vdvnznwg597qngrq9mnfcfk0am9jdc9y446jewhcqdreqz4r75xq5j5zvy',
      base: 'factory/osmo1vdvnznwg597qngrq9mnfcfk0am9jdc9y446jewhcqdreqz4r75xq5j5zvy/ymos',
      name: 'Yieldmos Coin',
      display: 'ymos',
      symbol: 'YMOS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ymos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ymos.png',
          theme: {
            primaryColorHex: '#2c3554'
          }
        }]
    },
    {
      description: 'Memecoin for The International Brane Wave',
      denomUnits: [{
          denom: 'factory/osmo13gu58hzw3e9aqpj25h67m7snwcjuccd7v4p55w/brnz',
          exponent: 0,
          aliases: ['brnz']
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/osmo13gu58hzw3e9aqpj25h67m7snwcjuccd7v4p55w/brnz',
      name: 'Branez',
      display: 'factory/osmo13gu58hzw3e9aqpj25h67m7snwcjuccd7v4p55w/brnz',
      symbol: 'BRNZ',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/BRNZ.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/BRNZ.svg'
        }]
    },
    {
      description: 'ashLAB - Burned LAB',
      extendedDescription: 'ashLAB - receipt token recieved when burning LAB via ASH DAOs Furnace',
      denomUnits: [{
          denom: 'factory/osmo1svj5kd8kzj7xxtrd6ftjk0856ffpyj4egz7f9pd9dge5wr4kwansmefq07/lab.ash',
          exponent: 0
        }, {
          denom: 'ashLAB',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1svj5kd8kzj7xxtrd6ftjk0856ffpyj4egz7f9pd9dge5wr4kwansmefq07',
      base: 'factory/osmo1svj5kd8kzj7xxtrd6ftjk0856ffpyj4egz7f9pd9dge5wr4kwansmefq07/lab.ash',
      name: 'Burned LAB',
      display: 'ashLAB',
      symbol: 'ashLAB',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ashLAB.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ashLAB.png',
          theme: {
            primaryColorHex: '#ebb093'
          }
        }]
    },
    {
      description: 'GRAC is the official token of Racoon.Bet\'s gaming platform.',
      denomUnits: [{
          denom: 'ibc/58E4261D2E21FE3A459C290A9F97F3DCD257B28F48AAE828298B38E048804829',
          exponent: 0,
          aliases: ['factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/ugrac']
        }, {
          denom: 'grac',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/58E4261D2E21FE3A459C290A9F97F3DCD257B28F48AAE828298B38E048804829',
      name: 'Gaming RAC Token',
      display: 'grac',
      symbol: 'GRAC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'migaloo',
            baseDenom: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/ugrac',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-642',
            path: 'transfer/channel-642/factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/ugrac'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/grac.png'
      },
      images: [{
          imageSync: {
            chainName: 'migaloo',
            baseDenom: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/ugrac'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/grac.png',
          theme: {
            primaryColorHex: '#f5bf09'
          }
        }]
    },
    {
      description: 'USDC supplied on Mars looped using Membrane by a vault that also has an entry fee',
      denomUnits: [{
          denom: 'factory/osmo1vf6e300hv2qe7r5rln8deft45ewgyytjnwfrdfcv5rgzrfy0s6cswjqf9r/mars-usdc-looped',
          exponent: 0
        }, {
          denom: 'earnUSDC',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/osmo1vf6e300hv2qe7r5rln8deft45ewgyytjnwfrdfcv5rgzrfy0s6cswjqf9r/mars-usdc-looped',
      name: 'Mars Looped USDC Vault',
      display: 'earnUSDC',
      symbol: 'earnUSDC'
    },
    {
      description: 'Auto-compounding vault for Membrane\'s Stability Pool used to ease the UX of compounding CDT',
      denomUnits: [{
          denom: 'factory/osmo1jw6r68y0uhfmqagc7uhtdddctc7wq95pncvrqnvtd47w4hx46p7se9nju5/earn-cdt',
          exponent: 0
        }, {
          denom: 'earnCDT',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/osmo1jw6r68y0uhfmqagc7uhtdddctc7wq95pncvrqnvtd47w4hx46p7se9nju5/earn-cdt',
      name: 'Earn CDT Vault',
      display: 'earnCDT',
      symbol: 'earnCDT'
    },
    {
      description: 'The Sherpa memecoin',
      denomUnits: [{
          denom: 'factory/osmo1n6asrjy9754q8y9jsxqf557zmsv3s3xa5m9eg5/usherpa',
          exponent: 0
        }, {
          denom: 'Sherpa',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/osmo1n6asrjy9754q8y9jsxqf557zmsv3s3xa5m9eg5/usherpa',
      name: 'Sherpa',
      display: 'Sherpa',
      symbol: 'SHERPA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sherpa.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sherpa.png',
          theme: {
            primaryColorHex: '#fe9cdf'
          }
        }],
      keywords: ['meme']
    },
    {
      description: 'An alloy of FIL asset variants on Osmosis.',
      extendedDescription: 'Multiple Filecoin variants on Osmosis comprise the liquidity backing of a tokenized transmuter pool to create an alloy of FIL.',
      denomUnits: [{
          denom: 'factory/osmo1ss0n3ghv5rr4z4y54fnkprc69tegmdm3ejlkgr2z4utnyg7eljgs9pztvs/alloyed/allFIL',
          exponent: 0
        }, {
          denom: 'allFIL',
          exponent: 12
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1ss0n3ghv5rr4z4y54fnkprc69tegmdm3ejlkgr2z4utnyg7eljgs9pztvs',
      base: 'factory/osmo1ss0n3ghv5rr4z4y54fnkprc69tegmdm3ejlkgr2z4utnyg7eljgs9pztvs/alloyed/allFIL',
      name: 'Filecoin',
      display: 'allFIL',
      symbol: 'FIL',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'filecoin',
            baseDenom: 'attoFIL'
          },
          provider: 'Osmosis'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.png'
      },
      images: [{
          imageSync: {
            chainName: 'filecoin',
            baseDenom: 'attoFIL'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.png',
          theme: {
            primaryColorHex: '#0493fc'
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allFIL.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/allFIL.png'
        }]
    },
    {
      description: 'Internet Computer bridged via Omnity Network.',
      denomUnits: [{
          denom: 'factory/osmo10c4y9csfs8q7mtvfg4p9gd8d0acx0hpc2mte9xqzthd7rd3348tsfhaesm/sICP-native-ICP',
          exponent: 0,
          aliases: ['e8s']
        }, {
          denom: 'icp',
          exponent: 8
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo10c4y9csfs8q7mtvfg4p9gd8d0acx0hpc2mte9xqzthd7rd3348tsfhaesm',
      base: 'factory/osmo10c4y9csfs8q7mtvfg4p9gd8d0acx0hpc2mte9xqzthd7rd3348tsfhaesm/sICP-native-ICP',
      name: 'Internet Computer',
      display: 'icp',
      symbol: 'ICP',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'internetcomputer',
            baseDenom: 'e8s'
          },
          provider: 'Omnity Network'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/internetcomputer/images/icp.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/internetcomputer/images/icp.png'
      },
      images: [{
          imageSync: {
            chainName: 'internetcomputer',
            baseDenom: 'e8s'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/internetcomputer/images/icp.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/internetcomputer/images/icp.png'
        }]
    },
    {
      description: 'Aaron Network is an innovative platform for secure and private messaging, integrated into the blockchain ecosystem. We also offer a unique address reputation scoring system, ensuring that every user can interact with others confidently.',
      denomUnits: [{
          denom: 'ibc/D28B585D6B67E2F1479BBA3E949C687289C94D33FFA0720E3A8CB0B244AD8BC6',
          exponent: 0,
          aliases: ['uaaron']
        }, {
          denom: 'AARON',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/D28B585D6B67E2F1479BBA3E949C687289C94D33FFA0720E3A8CB0B244AD8BC6',
      name: 'Aaron Network',
      display: 'AARON',
      symbol: 'AARON',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'aaronetwork',
            baseDenom: 'uaaron',
            channelId: 'channel-7'
          },
          chain: {
            channelId: 'channel-91942',
            path: 'transfer/channel-91942/uaaron'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aaronetwork/images/aaron.png'
      },
      images: [{
          imageSync: {
            chainName: 'aaronetwork',
            baseDenom: 'uaaron'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aaronetwork/images/aaron.png',
          theme: {
            circle: false
          }
        }]
    },
    {
      description: 'Chihuahua coin',
      denomUnits: [{
          denom: 'ibc/794CF0A448ECA518B9FEAB3356BD283E8762460F8FE87A013E6F9DBA6C53601C',
          exponent: 0,
          aliases: ['factory/chihuahua1mzcfzh4ufk2cta59pm9a6wdyvv8c4v5epqzj46/Chihuahua']
        }, {
          denom: 'Chihuahua',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/794CF0A448ECA518B9FEAB3356BD283E8762460F8FE87A013E6F9DBA6C53601C',
      name: 'Chihuahua',
      display: 'Chihuahua',
      symbol: 'CHIHUAHUA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'chihuahua',
            baseDenom: 'factory/chihuahua1mzcfzh4ufk2cta59pm9a6wdyvv8c4v5epqzj46/Chihuahua',
            channelId: 'channel-7'
          },
          chain: {
            channelId: 'channel-113',
            path: 'transfer/channel-113/factory/chihuahua1mzcfzh4ufk2cta59pm9a6wdyvv8c4v5epqzj46/Chihuahua'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/chihuahua.png'
      },
      images: [{
          imageSync: {
            chainName: 'chihuahua',
            baseDenom: 'factory/chihuahua1mzcfzh4ufk2cta59pm9a6wdyvv8c4v5epqzj46/Chihuahua'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/chihuahua.png',
          theme: {
            primaryColorHex: '#444444',
            backgroundColorHex: '#FFBF38',
            circle: true
          }
        }]
    },
    {
      description: 'ashION - Burned ION',
      extendedDescription: 'ashION - receipt token recieved when burning ION via ASH DAOs Furnace',
      denomUnits: [{
          denom: 'factory/osmo1svj5kd8kzj7xxtrd6ftjk0856ffpyj4egz7f9pd9dge5wr4kwansmefq07/ion.ash',
          exponent: 0
        }, {
          denom: 'ashION',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1svj5kd8kzj7xxtrd6ftjk0856ffpyj4egz7f9pd9dge5wr4kwansmefq07',
      base: 'factory/osmo1svj5kd8kzj7xxtrd6ftjk0856ffpyj4egz7f9pd9dge5wr4kwansmefq07/ion.ash',
      name: 'Burned ION',
      display: 'ashION',
      symbol: 'ashION',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ashion.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ashion.png',
          theme: {
            primaryColorHex: '#ebb093'
          }
        }]
    },
    {
      description: 'WLF coin',
      denomUnits: [{
          denom: 'ibc/3D00ACF371FC6B7BC871399B1909DDE18749FA19DE6B7A4F74E1D96BC073B3BC',
          exponent: 0,
          aliases: ['factory/chihuahua1mzcfzh4ufk2cta59pm9a6wdyvv8c4v5epqzj46/wirelibertyfence']
        }, {
          denom: 'wirelibertyfence',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/3D00ACF371FC6B7BC871399B1909DDE18749FA19DE6B7A4F74E1D96BC073B3BC',
      name: 'wirelibertyfence',
      display: 'wirelibertyfence',
      symbol: 'WLF',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'chihuahua',
            baseDenom: 'factory/chihuahua1mzcfzh4ufk2cta59pm9a6wdyvv8c4v5epqzj46/wirelibertyfence',
            channelId: 'channel-7'
          },
          chain: {
            channelId: 'channel-113',
            path: 'transfer/channel-113/factory/chihuahua1mzcfzh4ufk2cta59pm9a6wdyvv8c4v5epqzj46/wirelibertyfence'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/wirelibertyfence.png'
      },
      images: [{
          imageSync: {
            chainName: 'chihuahua',
            baseDenom: 'factory/chihuahua1mzcfzh4ufk2cta59pm9a6wdyvv8c4v5epqzj46/wirelibertyfence'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/wirelibertyfence.png',
          theme: {
            primaryColorHex: '#BD963D',
            backgroundColorHex: '#6C165E',
            circle: true
          }
        }]
    },
    {
      description: 'Ninja Blaze is a decentralized multi-chain gaming platform powered by Injective Blockchain.',
      extendedDescription: 'The only truly decentralized gaming platform. Shape the future of gaming by owning Ninja Blaze tokens.',
      denomUnits: [{
          denom: 'ibc/DC1DF96AB7F5109433C3D5FDADE83F8EC2D522B80FAB0593BC1A2781F36AD633',
          exponent: 0,
          aliases: ['uNBZ']
        }, {
          denom: 'NBZ',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/DC1DF96AB7F5109433C3D5FDADE83F8EC2D522B80FAB0593BC1A2781F36AD633',
      name: 'Ninja Blaze Token',
      display: 'NBZ',
      symbol: 'NBZ',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'factory/inj1llr45x92t7jrqtxvc02gpkcqhqr82dvyzkr4mz/NBZ',
            channelId: 'channel-8'
          },
          chain: {
            channelId: 'channel-122',
            path: 'transfer/channel-122/factory/inj1llr45x92t7jrqtxvc02gpkcqhqr82dvyzkr4mz/NBZ'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'injective',
            baseDenom: 'factory/inj1llr45x92t7jrqtxvc02gpkcqhqr82dvyzkr4mz/NBZ'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/NBZ.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/NBZ.svg',
          theme: {
            primaryColorHex: '#9890f9'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/NBZ.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/NBZ.svg'
      },
      socials: {
        website: 'https://blaze.ninja',
        twitter: 'https://x.com/NinjaBlazeApp'
      }
    },
    {
      description: 'CULT - Less Brainwashing, More Utility',
      extendedDescription: 'CULT - Less Brainwashing, More Utility\n\n$CULT is more than a token; it\'s your key to ascend within the Order of Architects. Each token empowers you to mint and upgrade Architect NFTs, navigating through rites that elevate their mystical powers. Engage directly in our unique Streamswap process, beginning with a USDC deposit, transitioning smoothly into $CULT.\n\nFair Launch: Our token launch excludes whitelists and bots, ensuring a transparent and equitable distribution for all. Streamswap Mechanics: Deposit $USDC during the 72-hour Bootstrapping Phase, followed by a 1-hour Streaming Phase to convert into $CULT, ensuring a smooth and fair token distribution.',
      denomUnits: [{
          denom: 'factory/osmo1qdvwftqd8ml6t9w6dmj97m03ck5ghqqmd8y7cm/cult',
          exponent: 0,
          aliases: ['ucult']
        }, {
          denom: 'CULT',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1qdvwftqd8ml6t9w6dmj97m03ck5ghqqmd8y7cm',
      base: 'factory/osmo1qdvwftqd8ml6t9w6dmj97m03ck5ghqqmd8y7cm/cult',
      name: 'CULT',
      display: 'CULT',
      symbol: 'CULT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/cult.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/cult.png'
        }]
    }
  ]
};
export default info;