import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'lumnetwork',
  assets: [{
      description: 'Native token of the Lum Network',
      denomUnits: [{
          denom: 'ulum',
          exponent: 0
        }, {
          denom: 'lum',
          exponent: 6
        }],
      base: 'ulum',
      name: 'Lum',
      display: 'lum',
      symbol: 'LUM',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg'
      },
      coingeckoId: 'lum-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg'
        }]
    }]
};
export default info;