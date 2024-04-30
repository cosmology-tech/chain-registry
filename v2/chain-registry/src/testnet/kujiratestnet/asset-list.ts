import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'kujiratestnet',
  assets: [{
      description: 'The native staking and governance token of the Harpoon testnet version of Kujira.',
      denomUnits: [{
          denom: 'ukuji',
          exponent: 0
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ukuji',
      name: 'Kuji',
      display: 'kuji',
      symbol: 'KUJI',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kujiratestnet/images/kuji.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kujiratestnet/images/kuji.png'
        }]
    }, {
      description: 'The testnet token of Fuzion',
      denomUnits: [{
          denom: 'factory/kujira16qpvzhmawvsm8mcj4hdvtz25dadatdhhgw79xa/FUZN',
          exponent: 0
        }, {
          denom: 'fuzn',
          exponent: 6
        }],
      base: 'factory/kujira16qpvzhmawvsm8mcj4hdvtz25dadatdhhgw79xa/FUZN',
      name: 'Fuzion',
      display: 'fuzn',
      symbol: 'FUZN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kujiratestnet/images/fuzn.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kujiratestnet/images/fuzn.png'
        }]
    }]
};
export default info;