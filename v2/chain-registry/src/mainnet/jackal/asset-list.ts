import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'jackal',
  assets: [{
      description: 'The native staking and governance token of Jackal.',
      denomUnits: [{
          denom: 'ujkl',
          exponent: 0
        }, {
          denom: 'jkl',
          exponent: 6
        }],
      base: 'ujkl',
      name: 'Jackal',
      display: 'jkl',
      symbol: 'JKL',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg'
      },
      coingeckoId: 'jackal-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg'
        }]
    }]
};
export default info;