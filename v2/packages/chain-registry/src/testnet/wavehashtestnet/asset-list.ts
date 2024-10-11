import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'wavehashtestnet',
  assets: [{
      description: 'WaveHash A Permissioned Blockchain',
      denomUnits: [{
          denom: 'uwahax',
          exponent: 0
        }, {
          denom: 'wahax',
          exponent: 6
        }],
      base: 'uwahax',
      name: 'WaveHash',
      display: 'wahax',
      symbol: 'WAHAX',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/wavehashtestnet/images/WaveHash.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/wavehashtestnet/images/WaveHash.png'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;