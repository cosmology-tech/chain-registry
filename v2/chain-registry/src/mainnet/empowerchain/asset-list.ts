import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'empowerchain',
  assets: [{
      description: 'The native staking and governance token of Empower.',
      denomUnits: [{
          denom: 'umpwr',
          exponent: 0
        }, {
          denom: 'mpwr',
          exponent: 6
        }],
      base: 'umpwr',
      name: 'MPWR',
      display: 'mpwr',
      symbol: 'MPWR',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg'
        }]
    }]
};
export default info;