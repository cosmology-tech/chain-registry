import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'cheqd',
  assets: [{
      description: 'Native token for the cheqd network',
      denomUnits: [{
          denom: 'ncheq',
          exponent: 0
        }, {
          denom: 'cheq',
          exponent: 9
        }],
      base: 'ncheq',
      display: 'cheq',
      name: 'cheqd',
      symbol: 'CHEQ',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
      },
      coingeckoId: 'cheqd-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
        }]
    }]
};
export default info;