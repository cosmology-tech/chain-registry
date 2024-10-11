import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'blockxtestnet',
  assets: [{
      description: 'BlockX Native Token',
      denomUnits: [{
          denom: 'abcx',
          exponent: 0
        }, {
          denom: 'bcx',
          exponent: 18
        }],
      base: 'abcx',
      name: 'BCX',
      display: 'bcx',
      symbol: 'BCX',
      typeAsset: 'sdk.coin',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/blockx/images/blockx.png'
        }],
      socials: {
        website: 'https://www.blockxnet.com/'
      }
    }]
};
export default info;