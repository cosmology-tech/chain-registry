import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'dhealthtestnet',
  assets: [{
      description: 'The native token of dHealth testnet.',
      denomUnits: [{
          denom: 'utdhp',
          exponent: 0
        }, {
          denom: 'tdhp',
          exponent: 6
        }],
      base: 'utdhp',
      name: 'Digital Health Point Testnet',
      display: 'tdhp',
      symbol: 'tDHP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/dhealthtestnet/images/dhp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/dhealthtestnet/images/dhp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/dhealthtestnet/images/dhp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/dhealthtestnet/images/dhp.svg',
          theme: {
            primaryColorHex: '#140c7c'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;