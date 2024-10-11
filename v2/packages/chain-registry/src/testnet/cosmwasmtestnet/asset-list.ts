import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'cosmwasmtestnet',
  assets: [{
      description: 'Fee Token',
      denomUnits: [{
          denom: 'umlg',
          exponent: 0
        }, {
          denom: 'MLG',
          exponent: 6
        }],
      base: 'umlg',
      name: 'Malaga',
      display: 'umlg',
      symbol: 'MLG',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cosmwasmtestnet/images/cosmwasm.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cosmwasmtestnet/images/cosmwasm.svg'
        }],
      typeAsset: 'sdk.coin'
    }, {
      description: 'Staking Token',
      denomUnits: [{
          denom: 'uand',
          exponent: 0
        }, {
          denom: 'AND',
          exponent: 6
        }],
      base: 'uand',
      name: 'Malaga Stake',
      display: 'uand',
      symbol: 'AND',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cosmwasmtestnet/images/cosmwasm.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cosmwasmtestnet/images/cosmwasm.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;