import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'sge',
  assets: [{
      description: 'The native token of SGE Network',
      denomUnits: [{
          denom: 'usge',
          exponent: 0
        }, {
          denom: 'sge',
          exponent: 6
        }],
      base: 'usge',
      name: 'SGE',
      display: 'sge',
      symbol: 'SGE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg'
      },
      coingeckoId: 'six-sigma',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg'
        }]
    }]
};
export default info;