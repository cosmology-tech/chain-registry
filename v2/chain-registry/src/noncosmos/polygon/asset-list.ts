import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'polygon',
  assets: [
    {
      description: 'Polygon (formerly Matic) Network brings massive scale to Ethereum using an adapted version of Plasma with PoS based side chains. Polygon is a well-structured, easy-to-use platform for Ethereum scaling and infrastructure development.',
      denomUnits: [{
          denom: 'wei',
          exponent: 0
        }, {
          denom: 'matic',
          exponent: 18,
          aliases: ['polygon']
        }],
      typeAsset: 'evm-base',
      base: 'wei',
      name: 'Matic',
      display: 'matic',
      symbol: 'MATIC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.svg'
      },
      coingeckoId: 'matic-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.svg'
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
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg'
      },
      coingeckoId: 'wmatic',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg'
        }]
    },
    {
      description: 'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
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
      name: 'USD Coin',
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
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      coingeckoId: 'usd-coin',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
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
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg'
        }]
    }
  ]
};
export default info;