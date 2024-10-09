import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'sixtestnet',
  assets: [{
      description: 'The native staking token of the SIX Protocol.',
      denomUnits: [{
          denom: 'usix',
          exponent: 0
        }, {
          denom: 'six',
          exponent: 6
        }],
      base: 'usix',
      name: 'Six token',
      display: 'six',
      symbol: 'six',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/sixtestnet/images/six.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/sixtestnet/images/six.png'
        }]
    }]
};
export default info;