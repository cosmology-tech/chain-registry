import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'provenance',
  assets: [{
      description: 'Hash is the staking token of the Provenance Blockchain',
      denom_units: [{
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
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg',
          theme: {
            primary_color_hex: '#4c7cdc'
          }
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;