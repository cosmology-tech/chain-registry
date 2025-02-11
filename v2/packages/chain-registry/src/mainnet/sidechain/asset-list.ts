import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'sidechain',
  assets: [
    {
      description: 'The native token of Side Chain.',
      denomUnits: [{
          denom: 'uside',
          exponent: 0
        }, {
          denom: 'side',
          exponent: 6
        }],
      base: 'uside',
      name: 'Side Chain native token',
      display: 'side',
      symbol: 'SIDE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/side.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/side.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/side.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/side.svg',
          theme: {
            primaryColorHex: '#f7771a'
          }
        }],
      socials: {
        website: 'https://side.one',
        twitter: 'https://x.com/SideProtocol'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'BTC-pegged token on Side Chain.',
      extendedDescription: 'sBTC is the native token of the Side Chain, fully pegged 1:1 to BTC held in a vault secured by 21 TSS signers on the Bitcoin mainnet. As a synthetic asset, sBTC enables Bitcoin liquidity to seamlessly flow into the Side Chain and the broader Cosmos ecosystem.',
      denomUnits: [{
          denom: 'sat',
          exponent: 0
        }, {
          denom: 'sBTC',
          exponent: 8
        }],
      base: 'sat',
      name: 'Side Bitcoin',
      display: 'sBTC',
      symbol: 'sBTC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'Side Chain'
        }],
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/sBTC.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/sBTC.png',
          theme: {
            primaryColorHex: '#f7771a'
          }
        }],
      socials: {
        website: 'https://side.one',
        twitter: 'https://x.com/SideProtocol'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Noble USDC on Side Chain.',
      denomUnits: [{
          denom: 'ibc/65D0BEC6DAD96C7F5043D1E54E54B6BB5D5B3AEC3FF6CEBB75B9E059F3580EA3',
          exponent: 0
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/65D0BEC6DAD96C7F5043D1E54E54B6BB5D5B3AEC3FF6CEBB75B9E059F3580EA3',
      name: 'Noble USDC',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'uusdc',
            channelId: 'channel-123'
          },
          chain: {
            channelId: 'channel-1',
            path: 'transfer/channel-1/uusdc'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'noble',
            baseDenom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          theme: {
            circle: true,
            primaryColorHex: '#2775CA'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      }
    }
  ]
};
export default info;