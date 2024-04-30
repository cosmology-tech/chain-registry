import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'artelatestnet',
  assets: [{
      description: 'The native EVM, governance and staking token of the Artela Network',
      denomUnits: [{
          denom: 'uart',
          exponent: 0
        }, {
          denom: 'art',
          exponent: 18
        }],
      base: 'uart',
      name: 'Artela Testnet',
      display: 'art',
      symbol: 'ART',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/artelatestnet/images/artela.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/artelatestnet/images/artela.png'
        }]
    }]
};
export default info;