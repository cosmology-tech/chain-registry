import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'idep',
  assets: [{
      description: 'The native token of IDEP chain',
      denomUnits: [{
          denom: 'IDEP',
          exponent: 6,
          aliases: []
        }, {
          denom: 'idep',
          exponent: 0,
          aliases: []
        }],
      base: 'idep',
      name: 'IDEP',
      display: 'IDEP',
      symbol: 'IDEP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.svg'
        }]
    }]
};
export default info;