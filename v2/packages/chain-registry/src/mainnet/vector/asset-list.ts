import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'vector',
  assets: [{
      description: 'The native staking token of the Vector Network.',
      denomUnits: [{
          denom: 'uvctr',
          exponent: 0
        }, {
          denom: 'vctr',
          exponent: 6
        }],
      base: 'uvctr',
      name: 'Vector Token',
      display: 'vctr',
      symbol: 'VCTR',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vector/images/vector-light-logo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vector/images/vector-light-logo.svg',
          theme: {
            primaryColorHex: '#885737'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;