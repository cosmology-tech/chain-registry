import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'bitcoin',
  assets: [{
      description: 'Bitcoin',
      denomUnits: [{
          denom: 'sat',
          exponent: 0
        }, {
          denom: 'btc',
          exponent: 8
        }],
      typeAsset: 'bitcoin-like',
      base: 'sat',
      name: 'Bitcoin',
      display: 'btc',
      symbol: 'BTC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.png'
      },
      coingeckoId: 'bitcoin',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.png'
        }]
    }]
};
export default info;