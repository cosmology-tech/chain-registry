import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'cudostestnet',
  assets: [{
      description: 'The native token of the Cudos blockchain',
      denomUnits: [{
          denom: 'acudos',
          exponent: 0,
          aliases: ['attocudos']
        }, {
          denom: 'cudos',
          exponent: 18,
          aliases: []
        }],
      base: 'acudos',
      name: 'Cudos',
      display: 'cudos',
      symbol: 'CUDOS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cudostestnet/images/cudos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cudostestnet/images/cudos.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cudostestnet/images/cudos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cudostestnet/images/cudos.svg'
        }]
    }]
};
export default info;