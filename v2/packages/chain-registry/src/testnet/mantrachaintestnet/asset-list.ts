import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'mantrachaintestnet',
  assets: [{
      description: 'The native token of MANTRA',
      denomUnits: [{
          denom: 'uom',
          exponent: 0
        }, {
          denom: 'om',
          exponent: 6
        }],
      base: 'uom',
      name: 'MANTRA Chain',
      display: 'om',
      symbol: 'OM',
      keywords: [
        'mantra',
        'staking',
        'delegating',
        'governance',
        'regulation',
        'defi'
      ],
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'mantrachain',
            baseDenom: 'uom'
          },
          provider: 'MANTRA Chain'
        }],
      images: [{
          imageSync: {
            chainName: 'mantrachain',
            baseDenom: 'uom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg',
          theme: {
            circle: true,
            primaryColorHex: '#fba0c1'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;