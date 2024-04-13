import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'seidevnet3',
  assets: [{
      description: 'The native staking and governance token of the Atlantic testnet version of Sei.',
      denom_units: [{
          denom: 'usei',
          exponent: 0
        }, {
          denom: 'sei',
          exponent: 6
        }],
      base: 'usei',
      name: 'Sei',
      display: 'sei',
      symbol: 'SEI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/seidevnet3/images/sei.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/seidevnet3/images/sei.png'
        }]
    }]
};
export default info;