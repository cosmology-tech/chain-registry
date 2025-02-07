import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'kichaintestnet',
  assets: [{
      description: 'The native token of Ki Chain',
      denomUnits: [{
          denom: 'utki',
          exponent: 0
        }, {
          denom: 'tki',
          exponent: 6
        }],
      base: 'utki',
      name: 'Ki',
      display: 'tki',
      symbol: 'TKI',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'kichain',
            baseDenom: 'uxki'
          },
          provider: 'Ki Chain'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg'
      },
      coingeckoId: 'ki',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;