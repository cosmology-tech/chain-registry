import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'nomic',
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
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg'
        }]
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
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'Nomic'
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg'
        }]
    }]
};
export default info;