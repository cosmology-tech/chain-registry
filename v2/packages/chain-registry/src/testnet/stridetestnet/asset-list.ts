import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'stridetestnet',
  assets: [{
      description: 'The native token of Stride',
      denomUnits: [{
          denom: 'ustrd',
          exponent: 0
        }, {
          denom: 'strd',
          exponent: 6
        }],
      base: 'ustrd',
      name: 'Stride',
      display: 'strd',
      symbol: 'STRD',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
        }]
    }]
};
export default info;