import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'neutrontestnet',
  assets: [
    {
      description: 'The native token of Neutron chain',
      denomUnits: [{
          denom: 'untrn',
          exponent: 0
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'untrn',
      name: 'Neutron Testnet',
      display: 'ntrn',
      symbol: 'NTRN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The yield token for ATOM denominated vaults on Amulet Protocol',
      denomUnits: [{
          denom: 'factory/neutron15lku24mqhvy4v4gryrqs4662n9v9q4ux9tayn89cmdzldjcgawushxvm76/amatom',
          exponent: 0
        }, {
          denom: 'amATOM',
          exponent: 6
        }],
      base: 'factory/neutron15lku24mqhvy4v4gryrqs4662n9v9q4ux9tayn89cmdzldjcgawushxvm76/amatom',
      name: 'amATOM (Testnet)',
      display: 'amATOM',
      symbol: 'amATOM',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/amATOM.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/amATOM.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/amATOM.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/amATOM.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      typeAsset: 'sdk.coin',
      denomUnits: [{
          denom: 'factory/neutron1r3slyjlf7g76mz3na6gh7c8ek62rhssrzf60uh0emyw3x94rppyqfcs0pk/uarena',
          exponent: 0,
          aliases: ['uarena']
        }, {
          denom: 'arena',
          exponent: 6
        }],
      base: 'factory/neutron1r3slyjlf7g76mz3na6gh7c8ek62rhssrzf60uh0emyw3x94rppyqfcs0pk/uarena',
      name: 'Arena Token',
      display: 'arena',
      symbol: 'ARENA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/arena_dao.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/arena_dao.svg'
      },
      images: [{
          imageSync: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron129ukd5cwahcjkccujz87rjemjukff7jf6sau72qrhva677xgz9gs4m4jeq/uarena'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/arena_dao.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/arena_dao.svg',
          theme: {
            circle: true,
            primaryColorHex: '#FF8000'
          }
        }],
      description: 'The governance token of the Arena DAO on Neutron testnet',
      socials: {
        twitter: 'https://x.com/ArenaDAO',
        website: 'https://testnet.arenadao.org/'
      }
    }
  ]
};
export default info;