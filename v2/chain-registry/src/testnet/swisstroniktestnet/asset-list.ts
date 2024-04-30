import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'swisstroniktestnet',
  assets: [{
      description: 'The native currency of Swisstronik.',
      denomUnits: [{
          denom: 'uswtr',
          exponent: 0
        }, {
          denom: 'swtr',
          exponent: 18
        }],
      base: 'uswtr',
      name: 'Swisstronik Testnet',
      display: 'swtr',
      symbol: 'SWTR',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/swisstroniktestnet/images/swisstronik.png'
      },
      coingeckoId: '',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/swisstroniktestnet/images/swisstronik.png'
        }]
    }]
};
export default info;