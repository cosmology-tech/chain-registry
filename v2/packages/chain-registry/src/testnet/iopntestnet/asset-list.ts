import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'iopntestnet',
  assets: [{
      description: 'Native token of Iopn Chain',
      denomUnits: [{
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
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/iopntestnet/images/iopn_Dark.png'
      },
      socials: {
        website: 'https://iopn.tech'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;