import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'axelar',
  assets: [
    {
      description: 'Axelar is a decentralized interoperability network connecting multiple blockchain ecosystems, enabling seamless cross-chain communication and value transfer.',
      extendedDescription: 'Axelar is a decentralized interoperability network connecting diverse blockchain ecosystems, facilitating seamless cross-chain communication and value transfer. By providing a unified platform for different blockchains to interact, Axelar enhances the connectivity and functionality of the blockchain space. The network employs advanced cryptographic protocols and consensus mechanisms to ensure the security and reliability of cross-chain transactions.\n\nThe Axelar Network\'s native token, AXL, is used for transaction fees, incentivizing network validators, and governance. By staking AXL, users can secure the network and earn rewards while influencing key decisions regarding the platform\'s development. Axelar\'s focus on interoperability extends to supporting various blockchain protocols, enabling developers to build applications operating across multiple chains. This capability is crucial for the growth of decentralized finance (DeFi) and other blockchain-based solutions, making Axelar vital to the evolving blockchain ecosystem.',
      denomUnits: [{
          denom: 'uaxl',
          exponent: 0
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'uaxl',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      },
      coingeckoId: 'axelar',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg',
          theme: {
            primaryColorHex: '#040404'
          }
        }],
      socials: {
        website: 'https://axelar.network/',
        twitter: 'https://twitter.com/axelarnetwork'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Circle\'s stablecoin on Axelar',
      denomUnits: [{
          denom: 'uusdc',
          exponent: 0
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      base: 'uusdc',
      name: 'USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Axelar'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
      },
      coingeckoId: 'axlusdc',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg',
          theme: {
            primaryColorHex: '#2474cc'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Frax\'s fractional-algorithmic stablecoin on Axelar',
      denomUnits: [{
          denom: 'frax-wei',
          exponent: 0
        }, {
          denom: 'frax',
          exponent: 18
        }],
      base: 'frax-wei',
      name: 'Frax',
      display: 'frax',
      symbol: 'FRAX',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x853d955acef822db058eb8505911ed77f175b99e'
          },
          provider: 'Axelar'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x853d955acef822db058eb8505911ed77f175b99e'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Dai stablecoin on Axelar',
      denomUnits: [{
          denom: 'dai-wei',
          exponent: 0
        }, {
          denom: 'dai',
          exponent: 18
        }],
      base: 'dai-wei',
      name: 'Dai Stablecoin',
      display: 'dai',
      symbol: 'DAI',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x6b175474e89094c44da98b954eedeac495271d0f'
          },
          provider: 'Axelar'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.svg',
          theme: {
            primaryColorHex: '#f4ac34'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Tether\'s USD stablecoin on Axelar',
      denomUnits: [{
          denom: 'uusdt',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      base: 'uusdt',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      coingeckoId: 'axelar-usdt',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Axelar'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          theme: {
            circle: true,
            primaryColorHex: '#009393',
            backgroundColorHex: '#009393'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Wrapped Ether on Axelar',
      denomUnits: [{
          denom: 'weth-wei',
          exponent: 0
        }, {
          denom: 'weth',
          exponent: 18
        }],
      base: 'weth-wei',
      name: 'Wrapped Ether',
      display: 'weth',
      symbol: 'WETH',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          provider: 'Axelar'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png',
          theme: {
            primaryColorHex: '#3a3444'
          }
        }],
      coingeckoId: 'axlweth',
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Wrapped Bitcoin on Axelar',
      denomUnits: [{
          denom: 'wbtc-satoshi',
          exponent: 0
        }, {
          denom: 'wbtc',
          exponent: 8
        }],
      base: 'wbtc-satoshi',
      name: 'Wrapped Bitcoin',
      display: 'wbtc',
      symbol: 'WBTC',
      coingeckoId: 'axlwbtc',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          provider: 'Axelar'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png',
          theme: {
            primaryColorHex: '#41394d'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Aave on Axelar',
      denomUnits: [{
          denom: 'aave-wei',
          exponent: 0
        }, {
          denom: 'aave',
          exponent: 18
        }],
      base: 'aave-wei',
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
      typeAsset: 'sdk.coin'
    },
    {
      description: 'ApeCoin on Axelar',
      denomUnits: [{
          denom: 'ape-wei',
          exponent: 0
        }, {
          denom: 'ape',
          exponent: 18
        }],
      base: 'ape-wei',
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
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Axie Infinity Shard on Axelar',
      denomUnits: [{
          denom: 'axs-wei',
          exponent: 0
        }, {
          denom: 'axs',
          exponent: 18
        }],
      base: 'axs-wei',
      name: 'Axie Infinity Shard',
      display: 'axs',
      symbol: 'AXS',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xbb0e17ef65f82ab018d8edd776e8dd940327b28b'
          },
          provider: 'Axelar'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/axs.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xbb0e17ef65f82ab018d8edd776e8dd940327b28b'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/axs.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Chainlink on Axelar',
      denomUnits: [{
          denom: 'link-wei',
          exponent: 0
        }, {
          denom: 'link',
          exponent: 18
        }],
      base: 'link-wei',
      name: 'Chainlink',
      display: 'link',
      symbol: 'LINK',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x514910771af9ca656af840dff83e8264ecf986ca'
          },
          provider: 'Axelar'
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
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Maker on Axelar',
      denomUnits: [{
          denom: 'mkr-wei',
          exponent: 0
        }, {
          denom: 'mkr',
          exponent: 18
        }],
      base: 'mkr-wei',
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
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Rai Reflex Index on Axelar',
      denomUnits: [{
          denom: 'rai-wei',
          exponent: 0
        }, {
          denom: 'rai',
          exponent: 18
        }],
      base: 'rai-wei',
      name: 'Rai Reflex Index',
      display: 'rai',
      symbol: 'RAI',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x03ab458634910aad20ef5f1c8ee96f1d6ac54919'
          },
          provider: 'Axelar'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x03ab458634910aad20ef5f1c8ee96f1d6ac54919'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Shiba Inu on Axelar',
      denomUnits: [{
          denom: 'shib-wei',
          exponent: 0
        }, {
          denom: 'shib',
          exponent: 18
        }],
      base: 'shib-wei',
      name: 'Shiba Inu',
      display: 'shib',
      symbol: 'SHIB',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce'
          },
          provider: 'Axelar'
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
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Lido Staked Ether on Axelar',
      denomUnits: [{
          denom: 'steth-wei',
          exponent: 0
        }, {
          denom: 'steth',
          exponent: 18
        }],
      base: 'steth-wei',
      name: 'Lido Staked Ether',
      display: 'steth',
      symbol: 'stETH',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84'
          },
          provider: 'Axelar'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Uniswap on Axelar',
      denomUnits: [{
          denom: 'uni-wei',
          exponent: 0
        }, {
          denom: 'uni',
          exponent: 18
        }],
      base: 'uni-wei',
      name: 'Uniswap',
      display: 'uni',
      symbol: 'UNI',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'
          },
          provider: 'Axelar'
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
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Chain on Axelar',
      denomUnits: [{
          denom: 'xcn-wei',
          exponent: 0
        }, {
          denom: 'xcn',
          exponent: 18
        }],
      base: 'xcn-wei',
      name: 'Chain',
      display: 'xcn',
      symbol: 'XCN',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18'
          },
          provider: 'Axelar'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xcn.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xcn.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Wrapped Polkadot on Axelar',
      denomUnits: [{
          denom: 'dot-planck',
          exponent: 0
        }, {
          denom: 'dot',
          exponent: 10
        }],
      base: 'dot-planck',
      name: 'Wrapped Polkadot',
      display: 'dot',
      symbol: 'DOT',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'moonbeam',
            baseDenom: '0xffffffff1fcacbd218edc0eba20fc2308c778080'
          },
          provider: 'Axelar'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
      },
      images: [{
          imageSync: {
            chainName: 'moonbeam',
            baseDenom: '0xffffffff1fcacbd218edc0eba20fc2308c778080'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg',
          theme: {
            primaryColorHex: '#e4047c'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Wrapped Moonbeam on Axelar',
      denomUnits: [{
          denom: 'wglmr-wei',
          exponent: 0
        }, {
          denom: 'wglmr',
          exponent: 18
        }],
      base: 'wglmr-wei',
      name: 'Wrapped Moonbeam',
      display: 'wglmr',
      symbol: 'WGLMR',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'moonbeam',
            baseDenom: '0xacc15dc74880c9944775448304b263d191c6077f'
          },
          provider: 'Axelar'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
      },
      images: [{
          imageSync: {
            chainName: 'moonbeam',
            baseDenom: '0xacc15dc74880c9944775448304b263d191c6077f'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg',
          theme: {
            primaryColorHex: '#e4147c'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Wrapped Matic on Axelar',
      denomUnits: [{
          denom: 'wmatic-wei',
          exponent: 0
        }, {
          denom: 'wmatic',
          exponent: 18
        }],
      base: 'wmatic-wei',
      name: 'Wrapped Matic',
      display: 'wmatic',
      symbol: 'WMATIC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'polygon',
            baseDenom: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'
          },
          provider: 'Axelar'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg'
      },
      images: [{
          imageSync: {
            chainName: 'polygon',
            baseDenom: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg',
          theme: {
            primaryColorHex: '#2b93fb'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Wrapped BNB on Axelar',
      denomUnits: [{
          denom: 'wbnb-wei',
          exponent: 0
        }, {
          denom: 'wbnb',
          exponent: 18
        }],
      base: 'wbnb-wei',
      name: 'Wrapped BNB',
      display: 'wbnb',
      symbol: 'WBNB',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'binancesmartchain',
            baseDenom: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
          },
          provider: 'Axelar'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg'
      },
      images: [{
          imageSync: {
            chainName: 'binancesmartchain',
            baseDenom: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg',
          theme: {
            primaryColorHex: '#f3bb0c'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Binance USD on Axelar.',
      denomUnits: [{
          denom: 'busd-wei',
          exponent: 0
        }, {
          denom: 'busd',
          exponent: 18
        }],
      base: 'busd-wei',
      name: 'Binance USD',
      display: 'busd',
      symbol: 'BUSD',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x4fabb145d64652a948d72533023f6e7a623c7c53'
          },
          provider: 'Axelar'
        }],
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
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Wrapped AVAX on Axelar.',
      denomUnits: [{
          denom: 'wavax-wei',
          exponent: 0
        }, {
          denom: 'avax',
          exponent: 18
        }],
      base: 'wavax-wei',
      name: 'Wrapped AVAX',
      display: 'avax',
      symbol: 'WAVAX',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'avalanche',
            baseDenom: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7'
          },
          provider: 'Axelar'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
      },
      images: [{
          imageSync: {
            chainName: 'avalanche',
            baseDenom: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Wrapped FTM on Axelar.',
      denomUnits: [{
          denom: 'wftm-wei',
          exponent: 0
        }, {
          denom: 'ftm',
          exponent: 18
        }],
      base: 'wftm-wei',
      name: 'Wrapped FTM',
      display: 'ftm',
      symbol: 'WFTM',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'fantom',
            baseDenom: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83'
          },
          provider: 'Axelar'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.svg'
      },
      images: [{
          imageSync: {
            chainName: 'fantom',
            baseDenom: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.svg',
          theme: {
            primaryColorHex: '#1c6cfc'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Circle\'s stablecoin from Polygon on Axelar',
      denomUnits: [{
          denom: 'polygon-uusdc',
          exponent: 0
        }, {
          denom: 'polygon-usdc',
          exponent: 6
        }],
      base: 'polygon-uusdc',
      name: 'USD Coin from Polygon',
      display: 'polygon-usdc',
      symbol: 'USDC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'polygon',
            baseDenom: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
          },
          provider: 'Axelar'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg',
          theme: {
            primaryColorHex: '#2474cc'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Circle\'s stablecoin from Avalanche on Axelar',
      denomUnits: [{
          denom: 'avalanche-uusdc',
          exponent: 0
        }, {
          denom: 'avalanche-usdc',
          exponent: 6
        }],
      base: 'avalanche-uusdc',
      name: 'USD Coin from Avalanche',
      display: 'avalanche-usdc',
      symbol: 'USDC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'avalanche',
            baseDenom: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E'
          },
          provider: 'Axelar'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg',
          theme: {
            primaryColorHex: '#2474cc'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Wrapped FIL on Axelar',
      denomUnits: [{
          denom: 'wfil-wei',
          exponent: 0
        }, {
          denom: 'fil',
          exponent: 18
        }],
      base: 'wfil-wei',
      name: 'Wrapped FIL from Filecoin',
      display: 'fil',
      symbol: 'axlFIL',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'filecoin',
            baseDenom: '0x60E1773636CF5E4A227d9AC24F20fEca034ee25A'
          },
          provider: 'Axelar'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.svg'
      },
      images: [{
          imageSync: {
            chainName: 'filecoin',
            baseDenom: '0x60E1773636CF5E4A227d9AC24F20fEca034ee25A'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.svg',
          theme: {
            primaryColorHex: '#0694fc'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Arbitrum on Axelar',
      denomUnits: [{
          denom: 'arb-wei',
          exponent: 0
        }, {
          denom: 'arb',
          exponent: 18
        }],
      base: 'arb-wei',
      name: 'Arbitrum',
      display: 'arb',
      symbol: 'ARB',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'arbitrum',
            baseDenom: '0x912CE59144191C1204E64559FE8253a0e49E6548'
          },
          provider: 'Axelar'
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
        }],
      typeAsset: 'sdk.coin'
    },
    {
      denomUnits: [{
          denom: 'pepe-wei',
          exponent: 0,
          aliases: ['0x6982508145454Ce325dDbE47a25d4ec3d2311933']
        }, {
          denom: 'pepe',
          exponent: 18
        }],
      base: 'pepe-wei',
      name: 'Pepe',
      display: 'pepe',
      symbol: 'PEPE',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x6982508145454Ce325dDbE47a25d4ec3d2311933'
          },
          provider: 'Axelar'
        }],
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
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg'
      },
      typeAsset: 'sdk.coin'
    },
    {
      denomUnits: [{
          denom: 'cbeth-wei',
          exponent: 0,
          aliases: ['0xbe9895146f7af43049ca1c1ae358b0541ea49704']
        }, {
          denom: 'cbeth',
          exponent: 18
        }],
      base: 'cbeth-wei',
      name: 'Coinbase Wrapped Staked ETH',
      display: 'cbeth',
      symbol: 'cbETH',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xbe9895146f7af43049ca1c1ae358b0541ea49704'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xbe9895146f7af43049ca1c1ae358b0541ea49704'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png',
          theme: {
            primaryColorHex: '#c9dbfc'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png'
      },
      typeAsset: 'sdk.coin'
    },
    {
      denomUnits: [{
          denom: 'reth-wei',
          exponent: 0,
          aliases: ['0xae78736cd615f374d3085123a210448e74fc6393']
        }, {
          denom: 'reth',
          exponent: 18
        }],
      base: 'reth-wei',
      name: 'Rocket Pool Ether',
      display: 'reth',
      symbol: 'rETH',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xae78736cd615f374d3085123a210448e74fc6393'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xae78736cd615f374d3085123a210448e74fc6393'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png',
          theme: {
            primaryColorHex: '#fba487'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png'
      },
      typeAsset: 'sdk.coin'
    },
    {
      denomUnits: [{
          denom: 'sfrxeth-wei',
          exponent: 0,
          aliases: ['0xac3e018457b222d93114458476f3e3416abbe38f']
        }, {
          denom: 'sfrxeth',
          exponent: 18
        }],
      base: 'sfrxeth-wei',
      name: 'Staked Frax Ether',
      display: 'sfrxeth',
      symbol: 'sfrxETH',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xac3e018457b222d93114458476f3e3416abbe38f'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xac3e018457b222d93114458476f3e3416abbe38f'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
      },
      typeAsset: 'sdk.coin'
    },
    {
      denomUnits: [{
          denom: 'wsteth-wei',
          exponent: 0,
          aliases: ['0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0']
        }, {
          denom: 'wsteth',
          exponent: 18
        }],
      base: 'wsteth-wei',
      name: 'Wrapped Lido Staked Ether',
      display: 'wsteth',
      symbol: 'wstETH',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
      },
      typeAsset: 'sdk.coin'
    },
    {
      denomUnits: [{
          denom: 'yieldeth-wei',
          exponent: 0,
          aliases: ['0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec']
        }, {
          denom: 'YieldETH',
          exponent: 18
        }],
      base: 'yieldeth-wei',
      name: 'Real Yield Eth',
      display: 'YieldETH',
      symbol: 'YieldETH',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec'
          },
          provider: 'Axelar'
        }],
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
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg'
      },
      typeAsset: 'sdk.coin'
    },
    {
      denomUnits: [{
          denom: 'ox-wei',
          exponent: 0,
          aliases: ['0x78a0A62Fba6Fb21A83FE8a3433d44C73a4017A6f']
        }, {
          denom: 'ox',
          exponent: 18
        }],
      base: 'ox-wei',
      name: 'Open Exchange Token',
      display: 'ox',
      symbol: 'OX',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x78a0A62Fba6Fb21A83FE8a3433d44C73a4017A6f'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x78a0A62Fba6Fb21A83FE8a3433d44C73a4017A6f'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ox.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ox.svg'
      },
      typeAsset: 'sdk.coin'
    },
    {
      typeAsset: 'sdk.coin',
      denomUnits: [{
          denom: 'yum-wei',
          exponent: 0,
          aliases: ['0xcE682c89C63d2850Cb2ca898E44D6c7c30d897a6']
        }, {
          denom: 'yum',
          exponent: 18
        }],
      base: 'yum-wei',
      name: 'Axelar Wrapped YUM',
      socials: {
        website: 'https://cacaoswap.app',
        twitter: 'https://x.com/CacaoSwap'
      },
      display: 'yum',
      symbol: 'YUM.axl',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xcE682c89C63d2850Cb2ca898E44D6c7c30d897a6'
          },
          provider: 'Axelar'
        }],
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
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yum.png'
      }
    },
    {
      typeAsset: 'sdk.coin',
      denomUnits: [{
          denom: 'arbitrum-weth-wei',
          exponent: 0
        }, {
          denom: 'arbitrum-weth',
          exponent: 18
        }],
      base: 'arbitrum-weth-wei',
      name: 'Arbitrum axlETH',
      display: 'arbitrum-weth',
      symbol: 'axlETH',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'arbitrum',
            baseDenom: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'arbitrum',
            baseDenom: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }]
    },
    {
      typeAsset: 'sdk.coin',
      denomUnits: [{
          denom: 'base-weth-wei',
          exponent: 0
        }, {
          denom: 'base-weth',
          exponent: 18
        }],
      base: 'base-weth-wei',
      name: 'Base axlETH',
      display: 'base-weth',
      symbol: 'axlETH',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'base',
            baseDenom: '0x4200000000000000000000000000000000000006'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'base',
            baseDenom: '0x4200000000000000000000000000000000000006'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }]
    },
    {
      typeAsset: 'sdk.coin',
      denomUnits: [{
          denom: 'polygon-weth-wei',
          exponent: 0
        }, {
          denom: 'polygon-weth',
          exponent: 18
        }],
      base: 'polygon-weth-wei',
      name: 'Polygon axlETH',
      display: 'polygon-weth',
      symbol: 'axlETH',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'polygon',
            baseDenom: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'polygon',
            baseDenom: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }]
    },
    {
      typeAsset: 'sdk.coin',
      denomUnits: [{
          denom: 'op-wei',
          exponent: 0,
          aliases: ['0x4200000000000000000000000000000000000042']
        }, {
          denom: 'op',
          exponent: 18
        }],
      base: 'op-wei',
      name: 'Optimism',
      display: 'op',
      symbol: 'OP',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'optimism',
            baseDenom: '0x4200000000000000000000000000000000000042'
          },
          provider: 'Axelar'
        }],
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
        }]
    },
    {
      description: 'Tether\'s USD stablecoin from Arbitrum on Axelar',
      denomUnits: [{
          denom: 'arbitrum-uusdt',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'arbitrum-uusdt',
      name: 'Tether USD (Arbitrum)',
      display: 'usdt',
      symbol: 'axlUSDT',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'arbitrum',
            baseDenom: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'arbitrum',
            baseDenom: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9'
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
          denom: 'optimism-uusdt',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'optimism-uusdt',
      name: 'Tether USD (Optimism)',
      display: 'usdt',
      symbol: 'axlUSDT',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'optimism',
            baseDenom: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'optimism',
            baseDenom: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58'
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
          denom: 'polygon-uusdt',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'polygon-uusdt',
      name: 'Tether USD (Polygon)',
      display: 'usdt',
      symbol: 'axlUSDT',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'polygon',
            baseDenom: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'polygon',
            baseDenom: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F'
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
          denom: 'cbbtc-satoshi',
          exponent: 0
        }, {
          denom: 'cbbtc',
          exponent: 8
        }],
      typeAsset: 'sdk.coin',
      base: 'cbbtc-satoshi',
      name: 'Coinbase Warpped Bitcoin',
      display: 'cbbtc',
      symbol: 'axl-cbBTC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'base',
            baseDenom: '0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'base',
            baseDenom: '0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf'
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
          denom: 'fbtc-satoshi',
          exponent: 0
        }, {
          denom: 'fbtc',
          exponent: 8
        }],
      typeAsset: 'sdk.coin',
      base: 'fbtc-satoshi',
      name: 'Fire Bitcoin',
      display: 'fbtc',
      symbol: 'axlFBTC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'mantle',
            baseDenom: '0xC96dE26018A54D51c097160568752c4E3BD6C364'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'mantle',
            baseDenom: '0xC96dE26018A54D51c097160568752c4E3BD6C364'
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
          denom: 'lbtc-satoshi',
          exponent: 0
        }, {
          denom: 'lbtc',
          exponent: 8
        }],
      typeAsset: 'sdk.coin',
      base: 'lbtc-satoshi',
      name: 'Lombard Staked Bitcoin',
      display: 'lbtc',
      symbol: 'axlLBTC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x8236a87084f8B84306f72007F36F2618A5634494'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x8236a87084f8B84306f72007F36F2618A5634494'
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
      description: 'The token of Crowdpunk DAO',
      denomUnits: [{
          denom: 'ibc/53046FFF6CAD109D8F9B2C7C9913853AD241928CD05CDDE419343D176025DA74',
          exponent: 0,
          aliases: ['erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F']
        }, {
          denom: 'crowdp',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/53046FFF6CAD109D8F9B2C7C9913853AD241928CD05CDDE419343D176025DA74',
      name: 'Crowdpunk DAO',
      display: 'crowdp',
      symbol: 'CROWDP',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'evmos',
            baseDenom: 'erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F',
            channelId: 'channel-21'
          },
          chain: {
            channelId: 'channel-22',
            path: 'transfer/channel-22/erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F'
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
        }]
    }
  ]
};
export default info;