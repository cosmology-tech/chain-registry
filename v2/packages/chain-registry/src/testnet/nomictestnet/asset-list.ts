import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'nomictestnet',
  assets: [{
      description: 'Nomic\'s native token.',
      denomUnits: [{
          denom: 'unom',
          exponent: 0
        }, {
          denom: 'nom',
          exponent: 6
        }],
      base: 'unom',
      name: 'Nomic',
      display: 'nom',
      symbol: 'NOM',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg'
      },
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'nomic',
            baseDenom: 'unom'
          },
          provider: 'Nomic'
        }],
      images: [{
          imageSync: {
            chainName: 'nomic',
            baseDenom: 'unom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg',
          theme: {
            primaryColorHex: '#6404fc'
          }
        }],
      typeAsset: 'sdk.coin'
    }, {
      description: 'Bitcoin. On Cosmos.',
      denomUnits: [{
          denom: 'usat',
          exponent: 0
        }, {
          denom: 'nbtc',
          exponent: 14
        }],
      base: 'usat',
      name: 'Nomic Bitcoin',
      display: 'nbtc',
      symbol: 'nBTC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg'
      },
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'bitcointestnet',
            baseDenom: 'sat'
          },
          provider: 'Nomic'
        }],
      images: [{
          imageSync: {
            chainName: 'nomic',
            baseDenom: 'usat'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg',
          theme: {
            primaryColorHex: '#8436e6'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;