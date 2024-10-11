import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'humanstestnet',
  assets: [{
      description: 'The native staking and governance token of the testnet version of Humans AI.',
      denomUnits: [{
          denom: 'uheart',
          exponent: 0
        }, {
          denom: 'heart',
          exponent: 6
        }],
      base: 'uheart',
      name: 'HEART',
      display: 'heart',
      symbol: 'HEART',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/humanstestnet/images/humans.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/humanstestnet/images/humans.png'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;