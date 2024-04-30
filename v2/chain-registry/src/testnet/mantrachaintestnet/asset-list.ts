import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'mantrachaintestnet',
  assets: [{
      description: 'The native token of MANTRA',
      denomUnits: [{
          denom: 'uom',
          exponent: 0,
          aliases: []
        }, {
          denom: 'om',
          exponent: 6,
          aliases: []
        }],
      base: 'uom',
      name: 'MANTRA Chain',
      display: 'om',
      symbol: 'OM',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.svg'
      },
      coingeckoId: '',
      keywords: [
        'mantra',
        'staking',
        'delegating',
        'governance',
        'regulation',
        'defi'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.svg'
        }]
    }]
};
export default info;