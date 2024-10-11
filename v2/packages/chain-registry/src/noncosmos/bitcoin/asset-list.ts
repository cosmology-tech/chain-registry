import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'bitcoin',
  assets: [{
      description: 'Bitcoin, the first and most well-known cryptocurrency, allows decentralized peer-to-peer transactions on a secure blockchain network, serving as "digital gold."',
      extendedDescription: 'Bitcoin, often referred to as BTC, is the first and most well-known cryptocurrency, introduced in 2009 by an anonymous entity known as Satoshi Nakamoto. It was designed as a decentralized digital currency, allowing peer-to-peer transactions without the need for a central authority or intermediary. Bitcoin operates on a technology called blockchain, a distributed ledger that records all transactions across a network of computers. The security and integrity of the blockchain are maintained through a process called mining, where participants solve complex mathematical problems to validate and add new transactions to the blockchain. Bitcoin\'s decentralized nature and limited supply, capped at 21 million coins, have contributed to its status as "digital gold" and a store of value.\n\nBitcoin has significantly influenced the financial world, inspiring the development of thousands of other cryptocurrencies and blockchain technologies. Its adoption has grown over the years, with numerous merchants and service providers accepting it as a payment method. Additionally, Bitcoin has become a popular investment asset, attracting both individual and institutional investors. Despite its volatility and regulatory challenges, Bitcoin remains a dominant force in the crypto space, symbolizing the potential for a more open and inclusive financial system. Its impact extends beyond finance, as it continues to drive innovation in areas such as decentralized finance (DeFi), supply chain management, and digital identity verification.',
      denomUnits: [{
          denom: 'sat',
          exponent: 0
        }, {
          denom: 'btc',
          exponent: 8
        }],
      typeAsset: 'bitcoin-like',
      base: 'sat',
      name: 'Bitcoin',
      display: 'btc',
      symbol: 'BTC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.svg'
      },
      coingeckoId: 'bitcoin',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.png',
          theme: {
            primaryColorHex: '#f4941c',
            backgroundColorHex: '#f4941c',
            circle: true
          }
        }]
    }]
};
export default info;