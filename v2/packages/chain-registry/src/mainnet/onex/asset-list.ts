import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'onex',
  assets: [{
      description: 'The native token of ONEX',
      denomUnits: [{
          denom: 'aonex',
          exponent: 0
        }, {
          denom: 'onex',
          exponent: 18
        }],
      base: 'aonex',
      name: 'ONEX',
      display: 'onex',
      symbol: 'ONEX',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onex/images/onex.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onex/images/onex.svg'
      },
      keywords: ['dex'],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onex/images/onex.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onex/images/onex.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;