import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'zetachaintestnet',
  assets: [{
      description: 'The native token of ZetaChain',
      denomUnits: [{
          denom: 'azeta',
          exponent: 0
        }, {
          denom: 'tzeta',
          exponent: 18
        }],
      base: 'azeta',
      name: 'ZetaChain Testnet',
      display: 'tzeta',
      symbol: 'tZETA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zetachaintestnet/images/zetachaintestnet.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zetachaintestnet/images/zetachaintestnet.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zetachaintestnet/images/zetachaintestnet.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zetachaintestnet/images/zetachaintestnet.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;