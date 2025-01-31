import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'xion',
  assets: [{
      description: 'XION is the first walletless L1 blockchain purpose built for consumer adoption through chain abstraction.',
      extendedDescription: 'XION is the first walletless L1 blockchain purpose built for consumer adoption through chain abstraction. Utilizing protocol-level implementations related to abstracted accounts, signatures, fees, interoperability, and more, XION empowers developers to build secure, intuitive, and seamless user experiences.',
      denomUnits: [{
          denom: 'uxion',
          exponent: 0,
          aliases: ['microxion']
        }, {
          denom: 'XION',
          exponent: 6,
          aliases: ['xion']
        }],
      base: 'uxion',
      display: 'XION',
      name: 'xion',
      symbol: 'XION',
      coingeckoId: 'xion-2',
      typeAsset: 'sdk.coin',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
        }],
      socials: {
        website: 'https://xion.burnt.com/',
        twitter: 'https://twitter.com/burnt_xion'
      }
    }, {
      denomUnits: [{
          denom: 'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
      name: 'Noble USDC Token',
      display: 'usdc',
      symbol: 'USDC',
      coingeckoId: 'usd-coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'uusdc',
            channelId: 'channel-113'
          },
          chain: {
            channelId: 'channel-2',
            path: 'transfer/channel-2/uusdc'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'noble',
            baseDenom: 'uusdc'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          theme: {
            circle: true,
            primaryColorHex: '#2775CA'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      }
    }]
};
export default info;