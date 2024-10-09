import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'binancesmartchaintestnet',
  assets: [
    {
      description: 'BNB powers the BNB Chain ecosystem and is the native coin of the BNB Beacon Chain and BNB Smart Chain.',
      denomUnits: [{
          denom: 'wei',
          exponent: 0
        }, {
          denom: 'bnb',
          exponent: 18
        }],
      base: 'wei',
      name: 'Binance Coin',
      display: 'bnb',
      symbol: 'BNB',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg'
      },
      coingeckoId: 'binancecoin',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg'
        }]
    },
    {
      description: 'Wrapped BNB. As the native coin of Binance Chain, BNB has multiple use cases: fueling transactions on the Chain, paying for transaction fees on Binance Exchange, making in-store payments, and many more.',
      denomUnits: [{
          denom: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
          exponent: 0
        }, {
          denom: 'wbnb',
          exponent: 18
        }],
      typeAsset: 'erc20',
      address: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
      base: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
      name: 'Wrapped BNB',
      display: 'wbnb',
      symbol: 'WBNB',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chainName: 'binancesmartchaintestnet',
            baseDenom: 'wei'
          },
          chain: {
            contract: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd'
          },
          provider: 'Binance'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg'
      },
      coingeckoId: 'wbnb',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg'
        }]
    },
    {
      description: 'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      typeAsset: 'erc20',
      address: '0xc2fA98faB811B785b81c64Ac875b31CC9E40F9D2',
      denomUnits: [{
          denom: '0xc2fA98faB811B785b81c64Ac875b31CC9E40F9D2',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'axlusdc',
          exponent: 6
        }],
      base: '0xc2fA98faB811B785b81c64Ac875b31CC9E40F9D2',
      name: 'Axelar Wrapped USDC',
      display: 'axlusdc',
      symbol: 'axlUSDC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'axelartestnet',
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
    }
  ]
};
export default info;