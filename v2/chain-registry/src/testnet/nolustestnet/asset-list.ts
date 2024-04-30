import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'nolustestnet',
  assets: [{
      description: 'The native token of Nolus chain',
      denomUnits: [{
          denom: 'unls',
          exponent: 0
        }, {
          denom: 'nls',
          exponent: 6
        }],
      base: 'unls',
      name: 'Nolus',
      display: 'nls',
      symbol: 'NLS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.svg'
        }]
    }]
};
export default info;