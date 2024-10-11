import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'base',
  assets: [
    {
      description: 'Ether (ETH) is the native currency of Base.',
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
          provider: 'Base Bridge'
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
            chainName: 'base',
            baseDenom: 'wei'
          },
          provider: 'Base'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }, {
          imageSync: {
            chainName: 'base',
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
      description: 'USDC issued on Base.',
      typeAsset: 'erc20',
      address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
      denomUnits: [{
          denom: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      base: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
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
      description: 'USDC Bridged from Ethereum via Base Bridge.',
      typeAsset: 'erc20',
      address: '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA',
      denomUnits: [{
          denom: '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      base: '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA',
      name: 'USD Base Coin',
      display: 'usdc',
      symbol: 'USDbC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Base Bridge'
        }],
      coingeckoId: 'bridged-usd-coin-base',
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
      description: 'Coinbase Wrapped BTC (\'cbBTC\') is an ERC20 token that is backed 1:1 by Bitcoin (BTC) held by Coinbase. cbBTC is built to be seamlessly compatible with DeFi applications, giving customers the option to tap into DeFi and unlock financial utility.',
      typeAsset: 'erc20',
      address: '0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf',
      denomUnits: [{
          denom: '0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf',
          exponent: 0
        }, {
          denom: 'cbbtc',
          exponent: 8
        }],
      base: '0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf',
      name: 'Coinbase Wrapped BTC',
      display: 'cbbtc',
      symbol: 'cbBTC',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'Base Bridge'
        }],
      coingeckoId: 'coinbase-wrapped-btc',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/base/images/cbbtc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/base/images/cbbtc.png',
          theme: {
            circle: true,
            primaryColorHex: '#0052FF'
          }
        }]
    }
  ]
};
export default info;