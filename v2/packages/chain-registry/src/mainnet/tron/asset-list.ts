import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'tron',
  assets: [{
      description: 'TRONIX is the mainnet native token of the TRON Protocol issued by TRON DAO, known as TRX.',
      extendedDescription: 'Tron is a blockchain-based decentralized operating system much like Ethereum that aims to advance the decentralization of the Internet and its infrastructure. At its core, Tron is a smart contract platform that offers high throughput, high scalability, and high availability for all Decentralized Applications (DApps) in the TRON ecosystem. The Tron blockchain is built around the usability of its native token, Tronix (TRX).',
      denomUnits: [{
          denom: 'sun',
          exponent: 0
        }, {
          denom: 'trx',
          exponent: 6
        }],
      typeAsset: 'unknown',
      base: 'sun',
      name: 'Tronix',
      display: 'trx',
      symbol: 'TRX',
      coingeckoId: 'tron',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.png',
          theme: {
            circle: true,
            primaryColorHex: '#FF060A',
            backgroundColorHex: '#FF060A'
          }
        }],
      socials: {
        website: 'https://tron.network/',
        twitter: 'https://x.com/trondao'
      }
    }, {
      description: 'USDT is the official stablecoin issued by Tether on the TRON network.',
      address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
      denomUnits: [{
          denom: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'erc20',
      base: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      coingeckoId: 'tether',
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Tether'
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
        }],
      socials: {
        website: 'https://tether.to/',
        twitter: 'https://x.com/Tether_to'
      }
    }]
};
export default info;