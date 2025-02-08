import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'elystestnet',
  assets: [{
      description: 'The native token of Elys Network',
      denomUnits: [
        {
          denom: 'uelys',
          exponent: 0,
          aliases: ['microelys']
        },
        {
          denom: 'melys',
          exponent: 3,
          aliases: ['millielys']
        },
        {
          denom: 'elys',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'uelys',
      name: 'Elys Network',
      display: 'elys',
      symbol: 'ELYS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/elys.png'
      },
      coingeckoId: 'elys',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/elys.png'
        }],
      typeAsset: 'sdk.coin'
    }, {
      description: 'Eden token definition',
      denomUnits: [
        {
          denom: 'ueden',
          exponent: 0,
          aliases: ['microeden']
        },
        {
          denom: 'meden',
          exponent: 3,
          aliases: ['millieden']
        },
        {
          denom: 'eden',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ueden',
      name: 'Eden',
      display: 'eden',
      symbol: 'EDEN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/eden.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/eden.png'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;