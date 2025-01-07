import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'alloratestnet',
  assets: [{
      description: 'Allora Token (ALLO) is the Allora Network\'s native utility token, used as the primary means to govern, secure the blockchain, and incentivize network participants.',
      denomUnits: [{
          denom: 'uallo',
          exponent: 0
        }, {
          denom: 'allo',
          exponent: 18
        }],
      base: 'uallo',
      name: 'Allora Network',
      display: 'allo',
      symbol: 'ALLO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/images/allora-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/images/allora-token.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/images/allora-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/images/allora-token.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;