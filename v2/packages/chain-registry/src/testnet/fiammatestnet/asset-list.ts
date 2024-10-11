import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'fiammatestnet',
  assets: [{
      description: 'The native staking token of fiamma.',
      denomUnits: [{
          denom: 'ufia',
          exponent: 0
        }, {
          denom: 'fia',
          exponent: 6
        }],
      base: 'ufia',
      name: 'Fiamma',
      display: 'fia',
      symbol: 'FIA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/fiammatestnet/images/fiamma.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/fiammatestnet/images/fiamma.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;