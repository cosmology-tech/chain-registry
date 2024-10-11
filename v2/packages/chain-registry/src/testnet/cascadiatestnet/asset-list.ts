import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'cascadiatestnet',
  assets: [{
      description: 'The World\'s First  Neocybernetic  Blockchain',
      denomUnits: [{
          denom: 'aCC',
          exponent: 0
        }, {
          denom: 'tCC',
          exponent: 18
        }],
      base: 'aCC',
      name: 'Сascadia Testnet',
      display: 'tCC',
      symbol: 'TCC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cascadiatestnet/images/cascadia.png'
      },
      keywords: ['cascadia', 'neocybernetic'],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cascadiatestnet/images/cascadia.png'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;