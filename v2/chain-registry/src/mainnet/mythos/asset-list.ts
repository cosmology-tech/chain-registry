import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'mythos',
  assets: [{
      description: 'The native token of Mythos',
      denomUnits: [{
          denom: 'aMYT',
          exponent: 0
        }, {
          denom: 'MYT',
          exponent: 18
        }],
      base: 'aMYT',
      name: 'MYT',
      display: 'MYT',
      symbol: 'MYT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.svg'
        }]
    }]
};
export default info;