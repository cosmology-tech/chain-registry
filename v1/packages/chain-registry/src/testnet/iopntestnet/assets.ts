import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'iopntestnet',
  assets: [{
      description: 'Native token of Iopn Chain',
      denom_units: [{
          denom: 'gwei',
          exponent: 0
        }, {
          denom: 'opn',
          exponent: 9
        }],
      base: 'gwei',
      name: 'Iopn Chain',
      display: 'opn',
      symbol: 'OPN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/iopntestnet/images/iopn_Dark.png'
      },
      socials: {
        website: 'https://iopn.tech'
      },
      type_asset: 'sdk.coin'
    }]
};
export default info;