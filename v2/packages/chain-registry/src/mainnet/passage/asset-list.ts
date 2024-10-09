import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'passage',
  assets: [{
      description: 'The native staking and governance token of the Passage chain.',
      denomUnits: [{
          denom: 'upasg',
          exponent: 0
        }, {
          denom: 'pasg',
          exponent: 6
        }],
      base: 'upasg',
      name: 'Passage',
      display: 'pasg',
      symbol: 'PASG',
      coingeckoId: 'passage',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png'
        }]
    }]
};
export default info;