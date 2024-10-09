import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'lavatestnet1',
  assets: [{
      description: 'The native token of Lava',
      denomUnits: [{
          denom: 'ulava',
          exponent: 0
        }, {
          denom: 'lava',
          exponent: 6
        }],
      base: 'ulava',
      name: 'LAVA',
      display: 'lava',
      symbol: 'LAVA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.svg'
      },
      keywords: ['rpc', 'api'],
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.svg'
        }]
    }]
};
export default info;