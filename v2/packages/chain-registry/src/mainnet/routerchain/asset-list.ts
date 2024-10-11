import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'routerchain',
  assets: [{
      description: 'The native token of Router Chain',
      extendedDescription: 'Router Chain is a PoS L1 that allows stateful bridging–enabling truly omnichain dapps that can abstract chains from the users and aggregate liquidity across multiple chains.',
      denomUnits: [{
          denom: 'route',
          exponent: 0
        }, {
          denom: 'ROUTE',
          exponent: 18
        }],
      base: 'route',
      name: 'Router Chain',
      display: 'ROUTE',
      symbol: 'ROUTE',
      coingeckoId: 'router-protocol-2',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/routerchain/images/router.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/routerchain/images/router.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/routerchain/images/router.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/routerchain/images/router.png',
          theme: {
            primaryColorHex: '#cb0766'
          }
        }],
      socials: {
        website: 'https://www.routerprotocol.com/',
        twitter: 'https://x.com/routerprotocol'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;