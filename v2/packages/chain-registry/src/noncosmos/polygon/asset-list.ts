import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'polygon',
  assets: [
    {
      description: 'Polygon, previously known as Matic Network, is a Layer 2 scaling solution for Ethereum that aims to provide faster and cheaper transactions.',
      extendedDescription: 'Polygon is a Layer 2 scaling solution for Ethereum, designed to improve the scalability and usability of the Ethereum blockchain. It achieves this by using sidechains for off-chain computation while ensuring asset security using the Plasma framework and a decentralized network of Proof-of-Stake (PoS) validators. Polygon supports various DeFi and NFT projects by providing a faster, more efficient, and low-cost environment for transactions. Its native token, MATIC, is used for staking, governance, and paying transaction fees on the network. The platform aims to transform Ethereum into a multi-chain system, similar to Polkadot, but with the benefits of Ethereum\'s security and vibrant ecosystem.',
      denomUnits: [{
          denom: 'wei',
          exponent: 0
        }, {
          denom: 'pol',
          exponent: 18,
          aliases: ['polygon', 'matic']
        }],
      typeAsset: 'evm-base',
      base: 'wei',
      name: 'Polygon',
      display: 'pol',
      symbol: 'POL',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.svg'
      },
      coingeckoId: 'matic-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.svg',
          theme: {
            primaryColorHex: '#8444e4'
          }
        }]
    },
    {
      description: 'Polygon combines the best of Ethereum and sovereign blockchains into a full-fledged multi-chain system.',
      typeAsset: 'erc20',
      address: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      denomUnits: [{
          denom: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
          exponent: 0,
          aliases: ['wmatic-wei']
        }, {
          denom: 'wmatic',
          exponent: 18,
          aliases: ['polygon']
        }],
      base: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      name: 'Wrapped Matic',
      display: 'wmatic',
      symbol: 'WMATIC',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chainName: 'polygon',
            baseDenom: 'wei'
          },
          provider: 'Polygon'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg'
      },
      coingeckoId: 'wmatic',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg',
          theme: {
            primaryColorHex: '#2b93fb'
          }
        }]
    },
    {
      description: 'USDC issued on Polygon.',
      typeAsset: 'erc20',
      address: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
      denomUnits: [{
          denom: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      base: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
      name: 'USDC',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Circle'
        }],
      coingeckoId: 'usd-coin',
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          theme: {
            circle: true,
            primaryColorHex: '#2775CA'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png'
        }]
    },
    {
      description: 'USDC Bridged from Ethereum via Polygon PoS Bridge.',
      typeAsset: 'erc20',
      address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
      denomUnits: [{
          denom: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      base: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
      name: 'Bridged USDC',
      display: 'usdc',
      symbol: 'USDC.e',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Polygon PoS Bridge'
        }],
      coingeckoId: 'bridged-usdc-polygon-pos-bridge',
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          theme: {
            circle: true,
            primaryColorHex: '#2775CA'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png'
        }]
    },
    {
      description: 'Multi-Collateral Dai, brings a lot of new and exciting features, such as support for new CDP collateral types and Dai Savings Rate.',
      typeAsset: 'erc20',
      address: '0xddc9e2891fa11a4cc5c223145e8d14b44f3077c9',
      denomUnits: [{
          denom: '0xddc9e2891fa11a4cc5c223145e8d14b44f3077c9',
          exponent: 0,
          aliases: ['dai-wei']
        }, {
          denom: 'axldai',
          exponent: 18
        }],
      base: '0xddc9e2891fa11a4cc5c223145e8d14b44f3077c9',
      name: 'Axelar Wrapped Dai Stablecoin',
      display: 'axldai',
      symbol: 'axlDAI',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'dai-wei'
          },
          provider: 'Axelar'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
        }]
    },
    {
      description: 'Frax is a fractional-algorithmic stablecoin protocol. It aims to provide a highly scalable, decentralized, algorithmic money in place of fixed-supply assets like BTC. Additionally, FXS is the value accrual and governance token of the entire Frax ecosystem.',
      typeAsset: 'erc20',
      address: '0x53adc464b488be8c5d7269b9abbce8ba74195c3a',
      denomUnits: [{
          denom: '0x53adc464b488be8c5d7269b9abbce8ba74195c3a',
          exponent: 0,
          aliases: ['frax-wei']
        }, {
          denom: 'axlfrax',
          exponent: 18
        }],
      base: '0x53adc464b488be8c5d7269b9abbce8ba74195c3a',
      name: 'Axelar Wrapped Frax',
      display: 'axlfrax',
      symbol: 'axlFRAX',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'frax-wei'
          },
          provider: 'Axelar'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
      },
      images: [{
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'frax-wei'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
        }]
    },
    {
      description: 'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      typeAsset: 'erc20',
      address: '0x750e4c4984a9e0f12978ea6742bc1c5d248f40ed',
      denomUnits: [{
          denom: '0x750e4c4984a9e0f12978ea6742bc1c5d248f40ed',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'axlusdc',
          exponent: 6
        }],
      base: '0x750e4c4984a9e0f12978ea6742bc1c5d248f40ed',
      name: 'Axelar Wrapped USD Coin',
      display: 'axlusdc',
      symbol: 'axlUSDC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'uusdc'
          },
          provider: 'Axelar'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }]
    },
    {
      description: 'Tether gives you the joint benefits of open blockchain technology and traditional currency by converting your cash into a stable digital currency equivalent.',
      typeAsset: 'erc20',
      address: '0xceed2671d8634e3ee65000edbbee66139b132fbf',
      denomUnits: [{
          denom: '0xceed2671d8634e3ee65000edbbee66139b132fbf',
          exponent: 0,
          aliases: ['uusdt']
        }, {
          denom: 'axlusdt',
          exponent: 6
        }],
      base: '0xceed2671d8634e3ee65000edbbee66139b132fbf',
      name: 'Axelar Wrapped Tether USD',
      display: 'axlusdt',
      symbol: 'axlUSDT',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'uusdt'
          },
          provider: 'Axelar'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      images: [{
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
      description: 'The PAGE token is used for actions in the PageDAO NFT literary ecosystem and for DAO governance.',
      typeAsset: 'erc20',
      address: '0x9ceE70895726B0ea14E6019C961dAf32222a7C2f',
      denomUnits: [{
          denom: '0x9ceE70895726B0ea14E6019C961dAf32222a7C2f',
          exponent: 0,
          aliases: []
        }, {
          denom: 'page',
          exponent: 8
        }],
      base: '0x9ceE70895726B0ea14E6019C961dAf32222a7C2f',
      name: 'Page',
      display: 'page',
      symbol: 'PAGE',
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e'
          },
          provider: 'PageDAO'
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
      description: 'wETH is \'wrapped ETH\'',
      typeAsset: 'erc20',
      denomUnits: [{
          denom: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
          exponent: 0
        }, {
          denom: 'weth',
          exponent: 18
        }],
      address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
      base: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
      display: 'weth',
      name: 'Wrapped Ether',
      symbol: 'WETH',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          provider: 'Polygon PoS Bridge'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }]
    },
    {
      description: 'USDT from Ethereum bridged to Polygon via Polygon PoS Bridge.',
      typeAsset: 'erc20',
      address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
      denomUnits: [{
          denom: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      base: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
      name: 'Polygon Bridged USDT',
      display: 'usdt',
      symbol: 'USDT',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Polygon PoS Bridge'
        }],
      coingeckoId: 'polygon-bridged-usdt-polygon',
      images: [{
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
    }
  ]
};
export default info;