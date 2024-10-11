import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'arbitrum',
  assets: [
    {
      description: 'The governance token of Arbitrum',
      extendedDescription: 'Arbitrum is a Layer 2 scaling solution for Ethereum, enhancing transaction speed and reducing costs. Built to support smart contracts and decentralized applications (dApps), Arbitrum aims to improve scalability while maintaining compatibility with Ethereum\'s ecosystem.',
      typeAsset: 'erc20',
      address: '0x912CE59144191C1204E64559FE8253a0e49E6548',
      denomUnits: [{
          denom: '0x912CE59144191C1204E64559FE8253a0e49E6548',
          exponent: 0,
          aliases: ['arb-wei']
        }, {
          denom: 'arb',
          exponent: 18
        }],
      base: '0x912CE59144191C1204E64559FE8253a0e49E6548',
      name: 'Arbitrum',
      display: 'arb',
      symbol: 'ARB',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg'
      },
      coingeckoId: 'arbitrum',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg',
          theme: {
            primaryColorHex: '#253545'
          }
        }]
    },
    {
      description: 'Ether (ETH) is the native currency of Arbitrum.',
      typeAsset: 'evm-base',
      denomUnits: [{
          denom: 'wei',
          exponent: 0
        }, {
          denom: 'eth',
          exponent: 18
        }],
      base: 'wei',
      display: 'eth',
      name: 'Ether',
      symbol: 'ETH',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          provider: 'Arbitrum Bridge'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          theme: {
            primaryColorHex: '#303030'
          }
        }]
    },
    {
      description: 'wETH is \'wrapped ETH\'',
      typeAsset: 'erc20',
      denomUnits: [{
          denom: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
          exponent: 0
        }, {
          denom: 'weth',
          exponent: 18
        }],
      address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
      base: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
      display: 'weth',
      name: 'Wrapped Ether',
      symbol: 'WETH',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chainName: 'arbitrum',
            baseDenom: 'wei'
          },
          provider: 'Arbitrum'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }, {
          imageSync: {
            chainName: 'arbitrum',
            baseDenom: 'wei'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          theme: {
            primaryColorHex: '#303030'
          }
        }]
    },
    {
      typeAsset: 'erc20',
      denomUnits: [{
          denom: '0xab19bdaeb37242fa0f30486195f45b9cf5361b78',
          exponent: 0
        }],
      address: '0xab19bdaeb37242fa0f30486195f45b9cf5361b78',
      base: '0xab19bdaeb37242fa0f30486195f45b9cf5361b78',
      display: '0xab19bdaeb37242fa0f30486195f45b9cf5361b78',
      name: 'cGLP',
      symbol: 'cGLP'
    },
    {
      description: 'USDC issued on Arbitrum.',
      typeAsset: 'erc20',
      address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
      denomUnits: [{
          denom: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      base: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
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
      description: 'This is a bridged USDC token deployed by Arbitrum Foundation.',
      typeAsset: 'erc20',
      address: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
      denomUnits: [{
          denom: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      base: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
      name: 'Bridged USDC',
      display: 'usdc',
      symbol: 'USDC.e',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Arbitrum Bridge'
        }],
      coingeckoId: 'usd-coin-ethereum-bridged',
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
      description: 'USDT from Ethereum bridged to Arbitrum via Arbitrum Bridge.',
      typeAsset: 'erc20',
      address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
      denomUnits: [{
          denom: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      base: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
      name: 'Arbitrum Bridged USDT',
      display: 'usdt',
      symbol: 'USDT',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Arbitrum Bridge'
        }],
      coingeckoId: 'arbitrum-bridged-usdt-arbitrum',
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