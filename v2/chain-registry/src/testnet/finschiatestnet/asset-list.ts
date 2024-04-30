import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'finschiatestnet',
  assets: [{
      description: 'The native token of Ebony',
      denomUnits: [{
          denom: 'tcony',
          exponent: 0
        }, {
          denom: 'tfnsa',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'tcony',
      name: 'Test FINSCHIA',
      display: 'tfnsa',
      symbol: 'TFNSA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.svg'
        }],
      keywords: ['staking']
    }]
};
export default info;