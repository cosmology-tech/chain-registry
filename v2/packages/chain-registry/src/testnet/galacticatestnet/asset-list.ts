import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'galacticatestnet',
  assets: [{
      description: 'The native token of Galactica Protocol Testnet',
      denomUnits: [{
          denom: 'agnet',
          exponent: 0
        }, {
          denom: 'gnet',
          exponent: 18
        }],
      base: 'agnet',
      name: 'Gnet',
      display: 'gnet',
      symbol: 'GNET',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galactica/images/galactica.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galactica/images/galactica.png'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galactica/images/galactica.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;