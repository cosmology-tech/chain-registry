import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'imversedtestnet',
  assets: [{
      description: 'The native staking and governance token of the Imversed testnet.',
      denomUnits: [{
          denom: 'nimv',
          exponent: 0,
          aliases: []
        }, {
          denom: 'imv',
          exponent: 6,
          aliases: []
        }],
      base: 'nimv',
      name: 'Imv',
      display: 'imv',
      symbol: 'IMV',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/imversedtestnet/images/imversed.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/imversedtestnet/images/imversed.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;