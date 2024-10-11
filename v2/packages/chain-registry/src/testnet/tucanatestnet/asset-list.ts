import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'tucanatestnet',
  assets: [{
      description: 'The native EVM, governance and staking token of the Tucana',
      denomUnits: [{
          denom: 'atuc',
          exponent: 0
        }, {
          denom: 'tuc',
          exponent: 18
        }],
      base: 'atuc',
      name: 'Tucana',
      display: 'tuc',
      symbol: 'TUC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/tucanatestnet/images/tucana.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/tucanatestnet/images/tucana.png'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;