import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'konstellation',
  assets: [{
      description: 'The native token of Konstellation Network',
      denomUnits: [{
          denom: 'udarc',
          exponent: 0
        }, {
          denom: 'darc',
          exponent: 6
        }],
      base: 'udarc',
      name: 'DARC',
      display: 'darc',
      symbol: 'DARC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.svg'
      },
      coingeckoId: 'darcmatter-coin',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.svg'
        }]
    }]
};
export default info;