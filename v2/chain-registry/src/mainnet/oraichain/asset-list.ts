import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'oraichain',
  assets: [{
      description: 'The native token of Oraichain',
      denomUnits: [{
          denom: 'orai',
          exponent: 0
        }, {
          denom: 'ORAI',
          exponent: 6
        }],
      base: 'orai',
      name: 'Oraichain',
      display: 'ORAI',
      symbol: 'ORAI',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.svg'
      },
      coingeckoId: 'oraichain-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.svg'
        }]
    }]
};
export default info;