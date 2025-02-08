import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'dymensiontestnet1',
  assets: [{
      description: 'The native governance and staking token of the Dymension Hub',
      denomUnits: [{
          denom: 'adym',
          exponent: 0
        }, {
          denom: 'dym',
          exponent: 18
        }],
      typeAsset: 'sdk.coin',
      base: 'adym',
      name: 'Dymension',
      display: 'dym',
      symbol: 'DYM',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg',
          theme: {
            primaryColorHex: '#f4e4d4'
          }
        }]
    }]
};
export default info;