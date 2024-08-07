import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'routerchain',
  assets: [{
      description: 'The native token of Router Chain',
      extended_description: 'Router Chain is a PoS L1 that allows stateful bridging–enabling truly omnichain dapps that can abstract chains from the users and aggregate liquidity across multiple chains.',
      denom_units: [{
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
      coingecko_id: 'route',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/routerchain/images/router.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/routerchain/images/router.png'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/routerchain/images/router.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/routerchain/images/router.png',
          theme: {
            primary_color_hex: '#cb0766'
          }
        }]
    }]
};
export default info;