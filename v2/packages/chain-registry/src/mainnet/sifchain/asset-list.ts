import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'sifchain',
  assets: [{
      description: 'Rowan Token (ROWAN) is the Sifchain Network\'s native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.',
      denomUnits: [{
          denom: 'rowan',
          exponent: 0
        }, {
          denom: 'ROWAN',
          exponent: 18
        }],
      base: 'rowan',
      name: 'Sifchain',
      display: 'ROWAN',
      symbol: 'ROWAN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg'
      },
      coingeckoId: 'sifchain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg',
          theme: {
            primaryColorHex: '#be9926'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;