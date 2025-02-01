import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'babylontestnet',
  assets: [{
      description: 'The native staking token of Babylon.',
      denomUnits: [{
          denom: 'ubbn',
          exponent: 0
        }, {
          denom: 'BABY',
          exponent: 6
        }],
      base: 'ubbn',
      name: 'Babylon Testnet',
      display: 'BABY',
      symbol: 'BABY',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;