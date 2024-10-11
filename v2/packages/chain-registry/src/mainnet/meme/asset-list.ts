import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'meme',
  assets: [{
      description: 'MEME Token (MEME) is the native staking token of the MEME Chain',
      denomUnits: [{
          denom: 'umeme',
          exponent: 0
        }, {
          denom: 'meme',
          exponent: 6
        }],
      base: 'umeme',
      name: 'MEME',
      display: 'meme',
      symbol: 'MEME',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg'
      },
      coingeckoId: 'meme-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg',
          theme: {
            primaryColorHex: '#b7dcd8'
          }
        }],
      typeAsset: 'sdk.coin'
    }, {
      description: 'The native EVM, governance and staking token of the Planq Network',
      extendedDescription: 'Planq is the very first cryptocurrency project to keep mobile platform usability at heart, taking a step away from dependency on desktop services. By focusing on easy accessibility and close integration of other blockchains via easy to use bridges, Planq will push Web 3 adoption in the mobile space to the next level.',
      denomUnits: [{
          denom: 'ibc/FACC1CE598366EA01D86CF1CBE05F1A6C7511F673E91DEFF04342ED8DEFE3A60',
          exponent: 0
        }, {
          denom: 'planq',
          exponent: 18
        }],
      name: 'Planq',
      display: 'planq',
      symbol: 'PLQ',
      typeAsset: 'ics20',
      base: 'ibc/FACC1CE598366EA01D86CF1CBE05F1A6C7511F673E91DEFF04342ED8DEFE3A60',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'planq',
            baseDenom: 'aplanq',
            channelId: 'channel-64'
          },
          chain: {
            channelId: 'channel-11',
            path: 'transfer/channel-11/aplanq'
          }
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg',
          imageSync: {
            chainName: 'planq',
            baseDenom: 'aplanq'
          },
          theme: {
            primaryColorHex: '#d4f3fb'
          }
        }]
    }]
};
export default info;