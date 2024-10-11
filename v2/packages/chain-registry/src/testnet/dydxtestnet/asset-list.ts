import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'dydxtestnet',
  assets: [{
      description: 'The native staking token of dYdX Protocol.',
      denomUnits: [{
          denom: 'adv4tnt',
          exponent: 0
        }, {
          denom: 'dv4tnt',
          exponent: 18
        }],
      base: 'adv4tnt',
      name: 'dYdX',
      display: 'dv4tnt',
      symbol: 'DV4TNT',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'dydx',
            baseDenom: 'adydx'
          },
          provider: 'Dydx'
        }],
      images: [{
          imageSync: {
            chainName: 'dydx',
            baseDenom: 'adydx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg',
          theme: {
            primaryColorHex: '#21212f'
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg',
          theme: {
            circle: true
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;