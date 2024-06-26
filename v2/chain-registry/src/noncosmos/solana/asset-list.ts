import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'solana',
  assets: [
    {
      description: 'Solana (SOL) is the native asset of the Solana blockchain.',
      denomUnits: [{
          denom: 'Lamport',
          exponent: 0
        }, {
          denom: 'SOL',
          exponent: 9
        }],
      typeAsset: 'svm-base',
      base: 'Lamport',
      name: 'Solana',
      display: 'SOL',
      symbol: 'SOL',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg'
      },
      coingeckoId: 'solana',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg'
        }]
    },
    {
      description: '',
      typeAsset: 'erc20',
      address: 'So11111111111111111111111111111111111111112',
      denomUnits: [{
          denom: 'So11111111111111111111111111111111111111112',
          exponent: 0
        }, {
          denom: 'wsol',
          exponent: 9
        }],
      base: 'So11111111111111111111111111111111111111112',
      name: 'Wrapped SOL',
      display: 'wsol',
      symbol: 'WSOL',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'Lamport'
          },
          provider: 'Solana'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg'
      },
      coingeckoId: 'wrapped-solana',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg'
        }]
    },
    {
      description: 'The Official Bonk Inu token',
      typeAsset: 'erc20',
      address: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
      denomUnits: [{
          denom: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
          exponent: 0
        }, {
          denom: 'bonk',
          exponent: 5
        }],
      base: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
      name: 'Bonk',
      display: 'bonk',
      symbol: 'BONK',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bonk.png'
      },
      coingeckoId: 'bonk',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bonk.png'
        }]
    },
    {
      description: 'Pyth is a protocol that allows market participants to publish pricing information on-chain for others to use. The protocol is an interaction between three parties:\n-Publishers submit pricing information to Pyth\'s oracle program. Pyth has multiple data publishers for every product to improve the accuracy and robustness of the system.\n-Pyth\'s oracle program combines publishers\' data to produce a single aggregate price and confidence interval.\nConsumers read the price information produced by the oracle program.\n\nPyth\'s oracle program runs simultaneously on both Solana mainnet and Pythnet. Each instance of the program is responsible for its own set of price feeds. Solana Price Feeds are available for use by Solana protocols. In this case, since the oracle program itself runs on Solana, the resulting prices are immediately available to consumers without requiring any additional work. Pythnet Price Feeds are available on 12+ blockchains. The prices constructed on Pythnet are transferred cross-chain to reach consumers on these blockchains.\n\nIn both cases, the critical component of the system is the oracle program that combines the data from each individual publisher. This program maintains a number of different Solana accounts that list the products on Pyth and their current price data. Publishers publish their price and confidence by interacting with the oracle program on every slot. The program stores this information in its accounts. The first price update in a slot additionally triggers price aggregation, which combines the price data from the previous slot into a single aggregate price and confidence interval. This aggregate price is written to the Solana account where it is readable by other on-chain programs and available for transmission to other blockchains.',
      typeAsset: 'erc20',
      address: 'HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3',
      denomUnits: [{
          denom: 'HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3',
          exponent: 0
        }, {
          denom: 'pyth',
          exponent: 6
        }],
      base: 'HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3',
      name: 'Pyth Network',
      display: 'pyth',
      symbol: 'PYTH',
      coingeckoId: 'pyth-network',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pyth.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pyth.svg'
      }
    },
    {
      description: 'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      typeAsset: 'erc20',
      address: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
      denomUnits: [{
          denom: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
          exponent: 0
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      base: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
      name: 'USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      coingeckoId: 'usd-coin',
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
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }]
    },
    {
      description: 'BSKT tracks the top assets across the crypto ecosystem',
      typeAsset: 'erc20',
      address: '6gnCPhXtLnUD76HjQuSYPENLSZdG8RvDB1pTLM5aLSJA',
      denomUnits: [{
          denom: '6gnCPhXtLnUD76HjQuSYPENLSZdG8RvDB1pTLM5aLSJA',
          exponent: 0
        }, {
          denom: 'bskt',
          exponent: 5
        }],
      base: '6gnCPhXtLnUD76HjQuSYPENLSZdG8RvDB1pTLM5aLSJA',
      name: 'Basket',
      display: 'bskt',
      symbol: 'BSKT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bskt.png'
      },
      coingeckoId: 'basket',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bskt.png'
        }],
      socials: {
        website: 'https://www.bskt.fi/',
        twitter: 'https://twitter.com/bsktfi'
      }
    },
    {
      description: 'W is the native token powering the Wormhole interoperability platform.',
      extendedDescription: 'Wormhole token (W) serves as the governance token of the Wormhole protocol, empowering token holders to steer the protocol\'s direction through on-chain governance via a dedicated decentralized autonomous organization (DAO).\n\nWormhole was founded by Jump Crypto, the building arm of Jump Trading Group. Initially launched in 2021, the protocol first debuted as a token bridge, allowing the transfer of tokens between blockchains, most notably between Solana and Ethereum. Wormhole later evolved, with Wormhole V2, to take on a more general approach, turning into an interoperability layer on which chains and decentralized applications could easily build on.\n\nWormhole V2 is a general messaging protocol, enabling different blockchains to communicate with one another. This technology could be used for a variety of use cases, including transfer of tokens between chains, enabling cross-chain governance for protocols that operated across chains as well as transfers of NFTs across chains, which could be utilized for multi-chain games. Wormhole V2 also saw the protocol expand its services to include Osmosis.\n\nTo date, the protocol has processed over $40 billion worth of value transfer across the blockchains supported, and over 1 billion messages sent. It supports over 30 blockchains, including most of the leading networks, and has a thriving ecosystem of over 200 applications built using Wormhole\'s technology.\n\nIn November 2023, Jump and Wormhole announced their intention to split ways. Following the separation, Wormhole announced that it raised $225 million, valuing the company at $2.5 billion. Investors include Brevan Howard, Coinbase Ventures, Multicoin Capital, Jump Crypto and more.',
      typeAsset: 'erc20',
      address: '85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ',
      denomUnits: [{
          denom: '85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ',
          exponent: 0
        }, {
          denom: 'w',
          exponent: 6
        }],
      base: '85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ',
      name: 'Wormhole Token',
      display: 'w',
      symbol: 'W',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/w.png'
      },
      coingeckoId: 'wormhole',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/w.png'
        }],
      socials: {
        website: 'https://wormhole.com/',
        twitter: 'https://twitter.com/wormhole'
      }
    }
  ]
};
export default info;