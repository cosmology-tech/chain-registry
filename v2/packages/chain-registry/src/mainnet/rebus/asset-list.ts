import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'rebus',
  assets: [{
      description: 'REBUS, the native coin of the Rebus chain.',
      denomUnits: [{
          denom: 'arebus',
          exponent: 0
        }, {
          denom: 'rebus',
          exponent: 18
        }],
      base: 'arebus',
      name: 'Rebus',
      display: 'rebus',
      symbol: 'REBUS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.svg'
      },
      coingeckoId: 'rebus',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.svg'
        }]
    }]
};
export default info;