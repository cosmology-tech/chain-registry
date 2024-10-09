import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'chain4energytestnet',
  assets: [{
      description: 'The native token of Chain4Energy',
      denomUnits: [{
          denom: 'uc4e',
          exponent: 0
        }, {
          denom: 'c4e',
          exponent: 6
        }],
      base: 'uc4e',
      name: 'Chain4Energy',
      display: 'c4e',
      symbol: 'C4E',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/chain4energytestnet/images/c4e.png'
      },
      coingeckoId: '',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/chain4energytestnet/images/c4e.png'
        }]
    }]
};
export default info;