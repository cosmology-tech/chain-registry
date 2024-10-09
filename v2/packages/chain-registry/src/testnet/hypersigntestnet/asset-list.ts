import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'hypersigntestnet',
  assets: [{
      description: 'Native token for Hypersign Identity Network',
      denomUnits: [{
          denom: 'uhid',
          exponent: 0
        }, {
          denom: 'hid',
          exponent: 6
        }],
      base: 'uhid',
      display: 'hid',
      name: 'Hypersign',
      symbol: 'HID',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hypersigntestnet/images/hypersign.png'
      },
      coingeckoId: 'hypersign-identity-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hypersigntestnet/images/hypersign.png'
        }]
    }]
};
export default info;