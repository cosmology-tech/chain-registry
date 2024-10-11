import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../../assetlist.schema.json',
  chainName: 'polygontestnet',
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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic.svg'
      },
      coingeckoId: 'matic-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic.svg'
        }]
    },
    {
      description: 'Polygon combines the best of Ethereum and sovereign blockchains into a full-fledged multi-chain system.',
      typeAsset: 'erc20',
      address: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
      denomUnits: [{
          denom: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
          exponent: 0,
          aliases: ['wmatic-wei']
        }, {
          denom: 'wmatic',
          exponent: 18,
          aliases: ['polygon']
        }],
      base: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
      name: 'Wrapped Matic',
      display: 'wmatic',
      symbol: 'WMATIC',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chainName: 'polygontestnet',
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
      address: '0x2c852e740B62308c46DD29B982FBb650D063Bd07',
      denomUnits: [{
          denom: '0x2c852e740B62308c46DD29B982FBb650D063Bd07',
          exponent: 0,
          aliases: ['uausdc']
        }, {
          denom: 'axlusdc',
          exponent: 6
        }],
      base: '0x2c852e740B62308c46DD29B982FBb650D063Bd07',
      name: 'Axelar Wrapped USD Coin',
      display: 'axlusdc',
      symbol: 'axlUSDC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'axelartestnet',
            baseDenom: 'uausdc'
          },
          provider: 'Axelar'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'axelartestnet',
            baseDenom: 'uausdc'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }]
    }
  ]
};
export default info;