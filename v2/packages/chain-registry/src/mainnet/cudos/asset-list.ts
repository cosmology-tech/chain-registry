import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'cudos',
  assets: [{
      description: 'The native token of the Cudos blockchain',
      denomUnits: [{
          denom: 'acudos',
          exponent: 0,
          aliases: ['attocudos']
        }, {
          denom: 'cudos',
          exponent: 18
        }],
      base: 'acudos',
      name: 'Cudos',
      display: 'cudos',
      symbol: 'CUDOS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.svg'
      },
      coingeckoId: 'cudos',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.svg'
        }],
      socials: {
        website: 'http://www.cudos.org',
        twitter: 'https://twitter.com/CUDOS_'
      }
    }]
};
export default info;