import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'pockettestnet',
  assets: [{
      description: 'The native token of Pocket Network',
      denomUnits: [{
          denom: 'upokt',
          exponent: 0
        }, {
          denom: 'pokt',
          exponent: 6
        }],
      base: 'upokt',
      name: 'POKT',
      display: 'pokt',
      symbol: 'POKT',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pocket/images/pokt-icon.svg'
      },
      keywords: ['rpc', 'api'],
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pocket/images/pokt-icon.svg',
          theme: {
            circle: true
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pocket/images/pokt-icon.png',
          theme: {
            circle: true
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;