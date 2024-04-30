import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'firmachain',
  assets: [{
      description: 'The native token of FirmaChain',
      denomUnits: [{
          denom: 'ufct',
          exponent: 0
        }, {
          denom: 'fct',
          exponent: 6
        }],
      base: 'ufct',
      name: 'FirmaChain',
      display: 'fct',
      symbol: 'FCT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.svg'
      },
      coingeckoId: 'firmachain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.svg'
        }]
    }]
};
export default info;