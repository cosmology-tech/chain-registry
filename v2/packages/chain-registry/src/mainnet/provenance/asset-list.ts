import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'provenance',
  assets: [{
      description: 'Hash is the staking token of the Provenance Blockchain',
      denomUnits: [{
          denom: 'nhash',
          exponent: 0
        }, {
          denom: 'hash',
          exponent: 9
        }],
      base: 'nhash',
      name: 'Hash',
      display: 'hash',
      symbol: 'HASH',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
      },
      coingeckoId: 'provenance-blockchain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg',
          theme: {
            primaryColorHex: '#4c7cdc'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;