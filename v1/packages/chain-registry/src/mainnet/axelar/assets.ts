import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'axelar',
  assets: [
    {
      description: 'Axelar is a decentralized interoperability network connecting multiple blockchain ecosystems, enabling seamless cross-chain communication and value transfer.',
      extended_description: 'Axelar is a decentralized interoperability network connecting diverse blockchain ecosystems, facilitating seamless cross-chain communication and value transfer. By providing a unified platform for different blockchains to interact, Axelar enhances the connectivity and functionality of the blockchain space. The network employs advanced cryptographic protocols and consensus mechanisms to ensure the security and reliability of cross-chain transactions.\n\nThe Axelar Network\'s native token, AXL, is used for transaction fees, incentivizing network validators, and governance. By staking AXL, users can secure the network and earn rewards while influencing key decisions regarding the platform\'s development. Axelar\'s focus on interoperability extends to supporting various blockchain protocols, enabling developers to build applications operating across multiple chains. This capability is crucial for the growth of decentralized finance (DeFi) and other blockchain-based solutions, making Axelar vital to the evolving blockchain ecosystem.',
      denom_units: [{
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
      type_asset: 'sdk.coin'
    },
    {
      description: 'Circle\'s stablecoin on Axelar',
      denom_units: [{
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
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Axelar'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
      },
      coingecko_id: 'axlusdc',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg',
          theme: {
            primary_color_hex: '#2474cc'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Frax\'s fractional-algorithmic stablecoin on Axelar',
      denom_units: [{
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
            chain_name: 'ethereum',
            base_denom: '0x853d955acef822db058eb8505911ed77f175b99e'
          },
          provider: 'Axelar'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x853d955acef822db058eb8505911ed77f175b99e'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Dai stablecoin on Axelar',
      denom_units: [{
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
            chain_name: 'ethereum',
            base_denom: '0x6b175474e89094c44da98b954eedeac495271d0f'
          },
          provider: 'Axelar'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.svg',
          theme: {
            primary_color_hex: '#f4ac34'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Tether\'s USD stablecoin on Axelar',
      denom_units: [{
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
      coingecko_id: 'axelar-usdt',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Axelar'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.svg',
          theme: {
            primary_color_hex: '#54ac94'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Wrapped Ether on Axelar',
      denom_units: [{
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
            chain_name: 'ethereum',
            base_denom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          provider: 'Axelar'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png',
          theme: {
            primary_color_hex: '#3a3444'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Wrapped Bitcoin on Axelar',
      denom_units: [{
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
      coingecko_id: 'axlwbtc',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          provider: 'Axelar'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png',
          theme: {
            primary_color_hex: '#41394d'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Aave on Axelar',
      denom_units: [{
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
            chain_name: 'ethereum',
            base_denom: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9'
          },
          provider: 'Axelar'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'ApeCoin on Axelar',
      denom_units: [{
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
            chain_name: 'ethereum',
            base_denom: '0x4d224452801aced8b2f0aebe155379bb5d594381'
          },
          provider: 'Axelar'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x4d224452801aced8b2f0aebe155379bb5d594381'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Axie Infinity Shard on Axelar',
      denom_units: [{
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
            chain_name: 'ethereum',
            base_denom: '0xbb0e17ef65f82ab018d8edd776e8dd940327b28b'
          },
          provider: 'Axelar'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/axs.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xbb0e17ef65f82ab018d8edd776e8dd940327b28b'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/axs.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Chainlink on Axelar',
      denom_units: [{
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
            chain_name: 'ethereum',
            base_denom: '0x514910771af9ca656af840dff83e8264ecf986ca'
          },
          provider: 'Axelar'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x514910771af9ca656af840dff83e8264ecf986ca'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg',
          theme: {
            primary_color_hex: '#2c5cdc'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Maker on Axelar',
      denom_units: [{
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
            chain_name: 'ethereum',
            base_denom: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2'
          },
          provider: 'Axelar'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Rai Reflex Index on Axelar',
      denom_units: [{
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
            chain_name: 'ethereum',
            base_denom: '0x03ab458634910aad20ef5f1c8ee96f1d6ac54919'
          },
          provider: 'Axelar'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x03ab458634910aad20ef5f1c8ee96f1d6ac54919'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Shiba Inu on Axelar',
      denom_units: [{
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
            chain_name: 'ethereum',
            base_denom: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce'
          },
          provider: 'Axelar'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg',
          theme: {
            primary_color_hex: '#FFA409',
            background_color_hex: '#00000000'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Lido Staked Ether on Axelar',
      denom_units: [{
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
            chain_name: 'ethereum',
            base_denom: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84'
          },
          provider: 'Axelar'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Uniswap on Axelar',
      denom_units: [{
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
            chain_name: 'ethereum',
            base_denom: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'
          },
          provider: 'Axelar'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Chain on Axelar',
      denom_units: [{
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
            chain_name: 'ethereum',
            base_denom: '0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18'
          },
          provider: 'Axelar'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xcn.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xcn.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Wrapped Polkadot on Axelar',
      denom_units: [{
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
            chain_name: 'moonbeam',
            base_denom: '0xffffffff1fcacbd218edc0eba20fc2308c778080'
          },
          provider: 'Axelar'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'moonbeam',
            base_denom: '0xffffffff1fcacbd218edc0eba20fc2308c778080'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg',
          theme: {
            primary_color_hex: '#e4047c'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Wrapped Moonbeam on Axelar',
      denom_units: [{
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
            chain_name: 'moonbeam',
            base_denom: '0xacc15dc74880c9944775448304b263d191c6077f'
          },
          provider: 'Axelar'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'moonbeam',
            base_denom: '0xacc15dc74880c9944775448304b263d191c6077f'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg',
          theme: {
            primary_color_hex: '#e4147c'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Wrapped Matic on Axelar',
      denom_units: [{
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
            chain_name: 'polygon',
            base_denom: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'
          },
          provider: 'Axelar'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'polygon',
            base_denom: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg',
          theme: {
            primary_color_hex: '#2b93fb'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Wrapped BNB on Axelar',
      denom_units: [{
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
            chain_name: 'binancesmartchain',
            base_denom: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
          },
          provider: 'Axelar'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'binancesmartchain',
            base_denom: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg',
          theme: {
            primary_color_hex: '#f3bb0c'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Binance USD on Axelar.',
      denom_units: [{
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
            chain_name: 'ethereum',
            base_denom: '0x4fabb145d64652a948d72533023f6e7a623c7c53'
          },
          provider: 'Axelar'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x4fabb145d64652a948d72533023f6e7a623c7c53'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.svg',
          theme: {
            primary_color_hex: '#f3bb0c'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Wrapped AVAX on Axelar.',
      denom_units: [{
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
            chain_name: 'avalanche',
            base_denom: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7'
          },
          provider: 'Axelar'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'avalanche',
            base_denom: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Wrapped FTM on Axelar.',
      denom_units: [{
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
            chain_name: 'fantom',
            base_denom: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83'
          },
          provider: 'Axelar'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'fantom',
            base_denom: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.svg',
          theme: {
            primary_color_hex: '#1c6cfc'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Circle\'s stablecoin from Polygon on Axelar',
      denom_units: [{
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
            chain_name: 'polygon',
            base_denom: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
          },
          provider: 'Axelar'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg',
          theme: {
            primary_color_hex: '#2474cc'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Circle\'s stablecoin from Avalanche on Axelar',
      denom_units: [{
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
            chain_name: 'avalanche',
            base_denom: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E'
          },
          provider: 'Axelar'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg',
          theme: {
            primary_color_hex: '#2474cc'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Wrapped FIL on Axelar',
      denom_units: [{
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
            chain_name: 'filecoin',
            base_denom: '0x60E1773636CF5E4A227d9AC24F20fEca034ee25A'
          },
          provider: 'Axelar'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'filecoin',
            base_denom: '0x60E1773636CF5E4A227d9AC24F20fEca034ee25A'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.svg',
          theme: {
            primary_color_hex: '#0694fc'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Arbitrum on Axelar',
      denom_units: [{
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
            chain_name: 'arbitrum',
            base_denom: '0x912CE59144191C1204E64559FE8253a0e49E6548'
          },
          provider: 'Axelar'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'arbitrum',
            base_denom: '0x912CE59144191C1204E64559FE8253a0e49E6548'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg',
          theme: {
            primary_color_hex: '#253545'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      denom_units: [{
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
            chain_name: 'ethereum',
            base_denom: '0x6982508145454Ce325dDbE47a25d4ec3d2311933'
          },
          provider: 'Axelar'
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x6982508145454Ce325dDbE47a25d4ec3d2311933'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg',
          theme: {
            primary_color_hex: '#cc3233'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg'
      },
      type_asset: 'sdk.coin'
    },
    {
      denom_units: [{
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
            chain_name: 'ethereum',
            base_denom: '0xbe9895146f7af43049ca1c1ae358b0541ea49704'
          },
          provider: 'Axelar'
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xbe9895146f7af43049ca1c1ae358b0541ea49704'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png',
          theme: {
            primary_color_hex: '#c9dbfc'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png'
      },
      type_asset: 'sdk.coin'
    },
    {
      denom_units: [{
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
            chain_name: 'ethereum',
            base_denom: '0xae78736cd615f374d3085123a210448e74fc6393'
          },
          provider: 'Axelar'
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xae78736cd615f374d3085123a210448e74fc6393'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png',
          theme: {
            primary_color_hex: '#fba487'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png'
      },
      type_asset: 'sdk.coin'
    },
    {
      denom_units: [{
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
            chain_name: 'ethereum',
            base_denom: '0xac3e018457b222d93114458476f3e3416abbe38f'
          },
          provider: 'Axelar'
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xac3e018457b222d93114458476f3e3416abbe38f'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
      },
      type_asset: 'sdk.coin'
    },
    {
      denom_units: [{
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
            chain_name: 'ethereum',
            base_denom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'
          },
          provider: 'Axelar'
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
      },
      type_asset: 'sdk.coin'
    },
    {
      denom_units: [{
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
            chain_name: 'ethereum',
            base_denom: '0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec'
          },
          provider: 'Axelar'
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg',
          theme: {
            primary_color_hex: '#14448c'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg'
      },
      type_asset: 'sdk.coin'
    },
    {
      denom_units: [{
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
            chain_name: 'ethereum',
            base_denom: '0x78a0A62Fba6Fb21A83FE8a3433d44C73a4017A6f'
          },
          provider: 'Axelar'
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x78a0A62Fba6Fb21A83FE8a3433d44C73a4017A6f'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ox.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ox.svg'
      },
      type_asset: 'sdk.coin'
    },
    {
      type_asset: 'sdk.coin',
      denom_units: [{
          denom: 'yum-wei',
          exponent: 0,
          aliases: ['0xcE682c89C63d2850Cb2ca898E44D6c7c30d897a6']
        }, {
          denom: 'yum',
          exponent: 18
        }],
      base: 'yum-wei',
      name: 'Axelar Wrapped YUM',
      display: 'yum',
      symbol: 'YUM.axl',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xcE682c89C63d2850Cb2ca898E44D6c7c30d897a6'
          },
          provider: 'Axelar'
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xcE682c89C63d2850Cb2ca898E44D6c7c30d897a6'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yum.png',
          theme: {
            primary_color_hex: '#33a6e7'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yum.png'
      }
    },
    {
      type_asset: 'sdk.coin',
      denom_units: [{
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
            chain_name: 'arbitrum',
            base_denom: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1'
          },
          provider: 'Axelar'
        }],
      images: [{
          image_sync: {
            chain_name: 'arbitrum',
            base_denom: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }]
    },
    {
      type_asset: 'sdk.coin',
      denom_units: [{
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
            chain_name: 'base',
            base_denom: '0x4200000000000000000000000000000000000006'
          },
          provider: 'Axelar'
        }],
      images: [{
          image_sync: {
            chain_name: 'base',
            base_denom: '0x4200000000000000000000000000000000000006'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }]
    },
    {
      type_asset: 'sdk.coin',
      denom_units: [{
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
            chain_name: 'polygon',
            base_denom: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619'
          },
          provider: 'Axelar'
        }],
      images: [{
          image_sync: {
            chain_name: 'polygon',
            base_denom: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }]
    },
    {
      type_asset: 'sdk.coin',
      denom_units: [{
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
            chain_name: 'optimism',
            base_denom: '0x4200000000000000000000000000000000000042'
          },
          provider: 'Axelar'
        }],
      images: [{
          image_sync: {
            chain_name: 'optimism',
            base_denom: '0x4200000000000000000000000000000000000042'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/optimism/images/op.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/optimism/images/op.png',
          theme: {
            primary_color_hex: '#fc0424'
          }
        }]
    }
  ]
};
export default info;