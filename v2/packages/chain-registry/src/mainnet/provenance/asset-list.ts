import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'provenance',
  assets: [{
      description: 'Hash is the staking token of the Provenance Blockchain',
      denomUnits: [{
          denom: 'nhash',
          exponent: 0
        }, {
          denom: 'hash',
          exponent: 9
        }],
      base: 'nhash',
      name: 'Hash',
      display: 'hash',
      symbol: 'HASH',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg',
          theme: {
            primaryColorHex: '#4c7cdc'
          }
        }],
      typeAsset: 'sdk.coin'
    }, {
      description: 'USD Coin',
      denomUnits: [{
          denom: 'ibc/616E26A85AD20A3DDEAEBDDE7262E3BA9356C557BC15CACEA86768D7D51FA703',
          exponent: 0,
          aliases: ['microusdc', 'uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/616E26A85AD20A3DDEAEBDDE7262E3BA9356C557BC15CACEA86768D7D51FA703',
      name: 'USDC',
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
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'uusdc',
            channelId: 'channel-20'
          },
          chain: {
            channelId: 'channel-10',
            path: 'transfer/channel-10/uusdc'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          theme: {
            circle: true,
            primaryColorHex: '#2775CA'
          }
        }]
    }]
};
export default info;