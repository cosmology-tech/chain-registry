import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'okexchain',
  assets: [{
      description: 'The native token of OKExChain',
      denomUnits: [{
          denom: 'wei',
          exponent: 0
        }, {
          denom: 'okt',
          exponent: 18
        }],
      base: 'wei',
      name: 'OKExChain',
      display: 'okt',
      symbol: 'OKT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/okexchain/images/okc.png'
      },
      coingeckoId: 'oec-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/okexchain/images/okc.png'
        }]
    }]
};
export default info;