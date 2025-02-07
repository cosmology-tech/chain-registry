import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../../assetlist.schema.json',
  chainName: 'ethereumtestnet',
  assets: [
    {
      description: 'Ether is the native fee token of the Ethereum network.',
      denomUnits: [
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
      typeAsset: 'evm-base',
      base: 'wei',
      name: 'Ether',
      display: 'eth',
      symbol: 'ETH',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
      },
      coingeckoId: 'ethereum',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
        }]
    },
    {
      description: 'wETH is \'wrapped ETH\'',
      typeAsset: 'erc20',
      address: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
      denomUnits: [{
          denom: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
          exponent: 0,
          aliases: ['weth-wei']
        }, {
          denom: 'weth',
          exponent: 18
        }],
      base: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
      name: 'Wrapped Ether',
      display: 'weth',
      symbol: 'WETH',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chainName: 'ethereumtestnet',
            baseDenom: 'wei'
          },
          provider: 'Ethereum'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
      },
      coingeckoId: 'weth',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }]
    },
    {
      description: 'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      typeAsset: 'erc20',
      address: '0x254d06f33bDc5b8ee05b2ea472107E300226659A',
      denomUnits: [{
          denom: '0x254d06f33bDc5b8ee05b2ea472107E300226659A',
          exponent: 0,
          aliases: ['uausdc']
        }, {
          denom: 'ausdc',
          exponent: 6
        }],
      base: '0x254d06f33bDc5b8ee05b2ea472107E300226659A',
      name: 'USD Coin',
      display: 'ausdc',
      symbol: 'aUSDC',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Ethereum'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      coingeckoId: 'usd-coin',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }]
    }
  ]
};
export default info;