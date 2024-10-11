import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'gitopiatestnet',
  assets: [{
      description: 'The native staking and governance token of the testnet version of Gitopia.',
      denomUnits: [{
          denom: 'utlore',
          exponent: 0
        }, {
          denom: 'tlore',
          exponent: 6
        }],
      base: 'utlore',
      name: 'TLORE',
      display: 'tlore',
      symbol: 'TLORE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/gitopiatestnet/images/gitopia.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/gitopiatestnet/images/gitopia.png'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;