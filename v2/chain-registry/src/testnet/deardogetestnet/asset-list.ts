import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'deardogetestnet',
  assets: [{
      description: 'The native staking and governance token of the Theta testnet version of the Dear Doge Testnet.',
      denomUnits: [{
          denom: 'udear',
          exponent: 0
        }, {
          denom: 'dear',
          exponent: 6
        }],
      base: 'udear',
      name: 'Dear Doge Testnet',
      display: 'dear',
      symbol: 'DEAR',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/deardogetestnet/images/deardoge.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/deardogetestnet/images/deardoge.png'
        }]
    }]
};
export default info;