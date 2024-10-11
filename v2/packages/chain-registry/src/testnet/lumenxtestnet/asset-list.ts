import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'lumenxtestnet',
  assets: [{
      description: 'The native token of Lumen Network',
      denomUnits: [{
          denom: 'ulumen',
          exponent: 0
        }, {
          denom: 'lumen',
          exponent: 6
        }],
      base: 'ulumen',
      name: 'LUMEN',
      display: 'lumen',
      symbol: 'LUMEN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lumenxtestnet/images/lumen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lumenxtestnet/images/lumen.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lumenxtestnet/images/lumen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lumenxtestnet/images/lumen.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;