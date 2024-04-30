import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'tenet',
  assets: [{
      description: 'The native EVM, governance and staking token of the Tenet',
      denomUnits: [{
          denom: 'atenet',
          exponent: 0
        }, {
          denom: 'tenet',
          exponent: 18
        }],
      base: 'atenet',
      name: 'Tenet',
      display: 'tenet',
      symbol: 'TENET',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.svg'
      },
      coingeckoId: 'tenet-1b000f7b-59cb-4e06-89ce-d62b32d362b9',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.svg'
        }]
    }]
};
export default info;