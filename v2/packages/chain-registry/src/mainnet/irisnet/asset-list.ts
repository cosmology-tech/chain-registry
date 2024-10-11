import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'irisnet',
  assets: [{
      description: 'The IRIS token is the native governance token for the IrisNet chain.',
      denomUnits: [{
          denom: 'uiris',
          exponent: 0
        }, {
          denom: 'iris',
          exponent: 6
        }],
      base: 'uiris',
      name: 'IRISnet',
      display: 'iris',
      symbol: 'IRIS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg'
      },
      coingeckoId: 'iris-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg',
          theme: {
            primaryColorHex: '#5664ad'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;