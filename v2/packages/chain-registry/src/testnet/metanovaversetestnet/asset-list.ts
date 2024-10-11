import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'metanovaversetestnet',
  assets: [{
      description: 'MetaNova Verse Native Token',
      denomUnits: [{
          denom: 'amnv',
          exponent: 0
        }, {
          denom: 'mnv',
          exponent: 18
        }],
      base: 'amnv',
      name: 'MNV',
      display: 'mnv',
      symbol: 'MNV',
      typeAsset: 'sdk.coin',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/metanovaversetestnet/images/mnova.png'
        }],
      socials: {
        website: 'https://metanovaverse.com/'
      }
    }]
};
export default info;