import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'archwaytestnet',
  assets: [{
      description: 'The native token of Archway testnetwork',
      denomUnits: [
        {
          denom: 'aconst',
          exponent: 0
        },
        {
          denom: 'uconst',
          exponent: 12
        },
        {
          denom: 'const',
          exponent: 18
        }
      ],
      base: 'aconst',
      name: 'Archway',
      display: 'const',
      symbol: 'CONST'
    }]
};
export default info;