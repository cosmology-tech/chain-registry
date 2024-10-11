import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'marstestnet',
  assets: [{
      description: 'The native token of Mars Protocol',
      denomUnits: [{
          denom: 'umars',
          exponent: 0
        }, {
          denom: 'mars',
          exponent: 6
        }],
      base: 'umars',
      name: 'Mars',
      display: 'mars',
      symbol: 'MARS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;