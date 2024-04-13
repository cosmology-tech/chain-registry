import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'empowerchain',
  assets: [{
      description: 'The native staking and governance token of Empower.',
      denom_units: [{
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
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg'
        }]
    }]
};
export default info;