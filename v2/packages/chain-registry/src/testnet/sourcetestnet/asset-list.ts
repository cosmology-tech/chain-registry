import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'sourcetestnet',
  assets: [{
      description: 'The native token of SOURCE Chain',
      denomUnits: [{
          denom: 'usource',
          exponent: 0
        }, {
          denom: 'source',
          exponent: 6
        }],
      base: 'usource',
      name: 'Source Testnet',
      display: 'source',
      symbol: 'SOURCE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/sourcetestnet/images/source.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/sourcetestnet/images/source.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/sourcetestnet/images/source.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/sourcetestnet/images/source.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;