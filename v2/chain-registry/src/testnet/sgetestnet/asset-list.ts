import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'sgetestnet',
  assets: [{
      description: 'The SGE token is primarily a governance token for the SGE Network blockchain.',
      denomUnits: [{
          denom: 'usge',
          exponent: 0,
          aliases: []
        }, {
          denom: 'sge',
          exponent: 6,
          aliases: []
        }],
      base: 'usge',
      name: 'SGE Testnet',
      display: 'sge',
      symbol: 'SGE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sgetestnet/images/sge.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sgetestnet/images/sge.png'
        }]
    }]
};
export default info;