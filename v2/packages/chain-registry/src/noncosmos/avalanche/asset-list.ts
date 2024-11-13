import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'avalanche',
  assets: [
    {
      description: 'Avalanche is a high-performance blockchain platform known for its fast transaction speeds, low costs, and scalability, ideal for decentralized applications and custom blockchain networks.',
      extendedDescription: 'Avalanche is a blockchain platform developed by Ava Labs that aims to provide a highly scalable and efficient environment for decentralized applications (dApps) and custom blockchain networks. Launched in 2020, Avalanche uses a novel consensus protocol called Avalanche Consensus, which allows it to process thousands of transactions per second with near-instant finality. The platform\'s architecture includes three built-in blockchains: the Exchange Chain (X-Chain), the Contract Chain (C-Chain), and the Platform Chain (P-Chain), each serving different purposes such as asset creation, smart contracts, and coordination of validators and subnets. Avalanche supports interoperability with Ethereum and other blockchains through its Avalanche Bridge and other cross-chain bridges. The native token, AVAX, is used for transaction fees, staking, and governance, making it an integral part of the Avalanche ecosystem.',
      denomUnits: [{
          denom: 'wei',
          exponent: 0
        }, {
          denom: 'avax',
          exponent: 18
        }],
      typeAsset: 'evm-base',
      base: 'wei',
      name: 'Avalanche',
      display: 'avax',
      symbol: 'AVAX',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.svg'
      },
      coingeckoId: 'avalanche-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.svg',
          theme: {
            primaryColorHex: '#eb4444'
          }
        }]
    },
    {
      description: 'The wrapped ERC-20 representation of AVAX, the native token of Avalanche.',
      typeAsset: 'erc20',
      address: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7',
      denomUnits: [{
          denom: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7',
          exponent: 0,
          aliases: ['wavax-wei']
        }, {
          denom: 'wavax',
          exponent: 18
        }],
      base: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7',
      name: 'Wrapped AVAX',
      display: 'wavax',
      symbol: 'WAVAX',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chainName: 'avalanche',
            baseDenom: 'wei'
          },
          provider: 'Avalanche'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
      },
      coingeckoId: 'wrapped-avax',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
        }]
    },
    {
      description: 'USDC issued on Avalanche.',
      typeAsset: 'erc20',
      address: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
      denomUnits: [{
          denom: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      base: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
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
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
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
      description: 'USDC Bridged from Ethereum via Avalanche Bridge.',
      typeAsset: 'erc20',
      address: '0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664',
      denomUnits: [{
          denom: '0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      base: '0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664',
      name: 'Bridged USDC',
      display: 'usdc',
      symbol: 'USDC.e',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Avalanche Bridge'
        }],
      coingeckoId: 'usd-coin-avalanche-bridged-usdc-e',
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
      address: '0xc5fa5669e326da8b2c35540257cd48811f40a36b',
      denomUnits: [{
          denom: '0xc5fa5669e326da8b2c35540257cd48811f40a36b',
          exponent: 0,
          aliases: ['dai-wei']
        }, {
          denom: 'axldai',
          exponent: 18
        }],
      base: '0xc5fa5669e326da8b2c35540257cd48811f40a36b',
      name: 'Axelar Wrapped DAI',
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
      address: '0x4914886dbb8aad7a7456d471eaab10b06d42348d',
      denomUnits: [{
          denom: '0x4914886dbb8aad7a7456d471eaab10b06d42348d',
          exponent: 0,
          aliases: ['frax-wei']
        }, {
          denom: 'axlfrax',
          exponent: 18
        }],
      base: '0x4914886dbb8aad7a7456d471eaab10b06d42348d',
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
      address: '0xfab550568C688d5d8a52c7d794cb93edc26ec0ec',
      denomUnits: [{
          denom: '0xfab550568C688d5d8a52c7d794cb93edc26ec0ec',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'axlusdc',
          exponent: 6
        }],
      base: '0xfab550568C688d5d8a52c7d794cb93edc26ec0ec',
      name: 'Axelar Wrapped USDC',
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
      address: '0xf976ba91b6bb3468c91e4f02e68b37bc64a57e66',
      denomUnits: [{
          denom: '0xf976ba91b6bb3468c91e4f02e68b37bc64a57e66',
          exponent: 0,
          aliases: ['uusdt']
        }, {
          denom: 'axlusdt',
          exponent: 6
        }],
      base: '0xf976ba91b6bb3468c91e4f02e68b37bc64a57e66',
      name: 'Axelar Wrapped USDT',
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
      description: 'USDT issued on Avalanche.',
      typeAsset: 'erc20',
      address: '0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7',
      denomUnits: [{
          denom: '0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      base: '0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Tether'
        }],
      coingeckoId: 'tether',
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