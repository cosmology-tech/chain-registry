import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'thorchain',
  assets: [{
      description: 'The native token of THORChain',
      denomUnits: [{
          denom: 'rune',
          exponent: 0
        }, {
          denom: 'RUNE',
          exponent: 8
        }],
      base: 'rune',
      name: 'THORChain RUNE',
      display: 'RUNE',
      symbol: 'RUNE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/thorchain/images/rune.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/thorchain/images/rune.svg'
      },
      coingeckoId: 'thorchain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/thorchain/images/rune.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/thorchain/images/rune.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;