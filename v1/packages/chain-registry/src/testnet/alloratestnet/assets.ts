import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'alloratestnet',
  assets: [{
      description: 'Allora Token (ALLO) is the Allora Network\'s native utility token, used as the primary means to govern, secure the blockchain, and incentivize network participants.',
      denom_units: [{
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
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/allora/images/allora.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/allora/images/allora.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/allora/images/allora.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/allora/images/allora.svg'
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;