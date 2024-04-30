import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'sagatestnet',
  assets: [{
      description: 'The native token of Saga Testnet',
      denomUnits: [{
          denom: 'utsaga',
          exponent: 0,
          aliases: []
        }, {
          denom: 'tsaga',
          exponent: 6,
          aliases: []
        }],
      base: 'utsaga',
      name: 'Saga',
      display: 'tsaga',
      symbol: 'TSAGA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg'
        }]
    }]
};
export default info;