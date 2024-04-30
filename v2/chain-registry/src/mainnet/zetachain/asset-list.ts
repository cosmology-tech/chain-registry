import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'zetachain',
  assets: [{
      description: 'The native token of ZetaChain',
      denomUnits: [{
          denom: 'azeta',
          exponent: 0
        }, {
          denom: 'zeta',
          exponent: 18
        }],
      base: 'azeta',
      name: 'ZetaChain',
      display: 'zeta',
      symbol: 'ZETA',
      coingeckoId: 'zetachain',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zetachain/images/zetachain.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zetachain/images/zetachain.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zetachain/images/zetachain.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zetachain/images/zetachain.svg'
        }]
    }]
};
export default info;