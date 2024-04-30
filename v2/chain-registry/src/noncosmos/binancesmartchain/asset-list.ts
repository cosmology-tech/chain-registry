import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'binancesmartchain',
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
      typeAsset: 'evm-base',
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
      typeAsset: 'erc20',
      address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      denomUnits: [{
          denom: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
          exponent: 0
        }, {
          denom: 'wbnb',
          exponent: 18
        }],
      base: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      name: 'Wrapped BNB',
      display: 'wbnb',
      symbol: 'WBNB',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chainName: 'binancesmartchain',
            baseDenom: 'wei'
          },
          chain: {
            contract: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
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
      description: 'BUSD is a 1:1 USD-backed stablecoin approved by NYDFS and issued by Paxos on Ethereum. Binance provides Binance-Peg BUSD on other chains by locking an equivalent amount of assets on Ethereum. Note that Binance-Peg BUSD is provided by Binance, which is not issued by Paxos nor regulated by the NYDFS.',
      denomUnits: [{
          denom: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
          exponent: 0
        }, {
          denom: 'busd',
          exponent: 18
        }],
      typeAsset: 'erc20',
      address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      base: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      name: 'Binance-Peg BUSD Token',
      display: 'busd',
      symbol: 'BUSD',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Binance'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png'
        }]
    },
    {
      description: 'USD Coin (known by its ticker USDC) is a stablecoin that is pegged to the U.S. dollar on a 1:1 basis.',
      denomUnits: [{
          denom: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
          exponent: 0
        }, {
          denom: 'usdc',
          exponent: 18
        }],
      typeAsset: 'erc20',
      address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
      base: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
      name: 'Binance-Peg USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x4fabb145d64652a948d72533023f6e7a623c7c53'
          },
          provider: 'Binance'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }]
    },
    {
      description: 'PURSE Token',
      denomUnits: [{
          denom: '0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C',
          exponent: 0
        }, {
          denom: 'PURSE',
          exponent: 18
        }],
      typeAsset: 'erc20',
      address: '0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C',
      base: '0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C',
      name: 'PURSE Token',
      display: 'PURSE',
      symbol: 'PURSE',
      coingeckoId: 'pundi-x-purse',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.svg'
        }]
    },
    {
      description: 'The SRCX token of Source Protocol.',
      denomUnits: [{
          denom: '0x454b90716a9435e7161a9aea5cf00e0acbe565ae',
          exponent: 0
        }, {
          denom: 'srcx',
          exponent: 9
        }],
      typeAsset: 'erc20',
      address: '0x454b90716a9435e7161a9aea5cf00e0acbe565ae',
      base: '0x454b90716a9435e7161a9aea5cf00e0acbe565ae',
      name: 'Source Token',
      display: 'srcx',
      symbol: 'SRCX',
      coingeckoId: 'source-protocol',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png'
        }]
    }
  ]
};
export default info;