import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'cerberus',
  assets: [{
      description: 'The native token of Cerberus Chain',
      denomUnits: [{
          denom: 'ucrbrus',
          exponent: 0
        }, {
          denom: 'crbrus',
          exponent: 6
        }],
      base: 'ucrbrus',
      name: 'Cerberus',
      display: 'crbrus',
      symbol: 'CRBRUS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.svg'
      },
      coingeckoId: 'cerberus-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.svg',
          theme: {
            primaryColorHex: '#c6c6c9'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;