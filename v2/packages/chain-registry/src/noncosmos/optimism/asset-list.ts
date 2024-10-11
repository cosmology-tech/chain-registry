import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'optimism',
  assets: [
    {
      description: 'The governance token of Optimism',
      typeAsset: 'erc20',
      address: '0x4200000000000000000000000000000000000042',
      denomUnits: [{
          denom: '0x4200000000000000000000000000000000000042',
          exponent: 0
        }, {
          denom: 'op',
          exponent: 18
        }],
      base: '0x4200000000000000000000000000000000000042',
      name: 'Optimism',
      display: 'op',
      symbol: 'OP',
      coingeckoId: 'optimism',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/optimism/images/op.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/optimism/images/op.png',
          theme: {
            primaryColorHex: '#fc0424'
          }
        }]
    },
    {
      description: 'Ether (ETH) is the native currency of Optimism.',
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
            baseDenom: 'wei'
          },
          provider: 'Optimism Bridge'
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
          denom: '0x4200000000000000000000000000000000000006',
          exponent: 0
        }, {
          denom: 'weth',
          exponent: 18
        }],
      address: '0x4200000000000000000000000000000000000006',
      base: '0x4200000000000000000000000000000000000006',
      display: 'weth',
      name: 'Wrapped Ether',
      symbol: 'WETH',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chainName: 'optimism',
            baseDenom: 'wei'
          },
          provider: 'Optimism'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }, {
          imageSync: {
            chainName: 'optimism',
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
      description: 'USDC issued on Optimism.',
      typeAsset: 'erc20',
      address: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
      denomUnits: [{
          denom: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      base: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
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
      description: 'USDC Bridged from Ethereum via Optimism Bridge.',
      typeAsset: 'erc20',
      address: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
      denomUnits: [{
          denom: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      base: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
      name: 'Bridged USDC',
      display: 'usdc',
      symbol: 'USDC.e',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Optimism Bridge'
        }],
      coingeckoId: 'bridged-usd-coin-optimism',
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
      description: 'USDT Bridged from Ethereum via Optimism Bridge.',
      typeAsset: 'erc20',
      address: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
      denomUnits: [{
          denom: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
          exponent: 0,
          aliases: ['uusdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      base: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Optimism Bridge'
        }],
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
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt_logomark.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt_logomark.svg',
          theme: {
            circle: false,
            primaryColorHex: '#50AF95',
            backgroundColorHex: '#00000000'
          }
        }]
    }
  ]
};
export default info;