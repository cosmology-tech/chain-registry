import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'dymensiontestnet1',
  assets: [{
      description: 'The native governance and staking token of the Dymension Hub',
      denomUnits: [{
          denom: 'adym',
          exponent: 0
        }, {
          denom: 'dym',
          exponent: 18
        }],
      typeAsset: 'sdk.coin',
      base: 'adym',
      name: 'Dymension',
      display: 'dym',
      symbol: 'DYM'
    }, {
      description: 'USDC from Noble',
      denomUnits: [{
          denom: 'ibc/E1E753928DE8EF6034F987F9E9C5F71ACF6AE7F5E221933D477BF745995B338B',
          exponent: 0
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/E1E753928DE8EF6034F987F9E9C5F71ACF6AE7F5E221933D477BF745995B338B',
      name: 'Noble USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'nobletestnet',
            baseDenom: 'uusdc',
            channelId: 'channel-295'
          },
          chain: {
            channelId: 'channel-292',
            path: 'transfer/channel-292/uusdc'
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
    }]
};
export default info;