import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'opct',
  assets: [{
      typeAsset: 'sdk.coin',
      description: 'The native token of OPCT Chain for Web3 Fitness GRIT Protocol',
      denomUnits: [{
          denom: 'opct',
          exponent: 0
        }, {
          denom: 'OPCT',
          exponent: 6
        }],
      base: 'opct',
      name: 'OPCT',
      display: 'OPCT',
      symbol: 'OPCT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/opct/images/opct.png'
      }
    }]
};
export default info;