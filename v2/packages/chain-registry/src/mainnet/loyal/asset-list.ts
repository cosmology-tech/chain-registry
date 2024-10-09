import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'loyal',
  assets: [{
      description: 'The native token of Loyal',
      denomUnits: [{
          denom: 'ulyl',
          exponent: 0
        }, {
          denom: 'lyl',
          exponent: 6
        }],
      base: 'ulyl',
      name: 'Loyal',
      display: 'lyl',
      symbol: 'LYL',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.svg'
        }]
    }]
};
export default info;