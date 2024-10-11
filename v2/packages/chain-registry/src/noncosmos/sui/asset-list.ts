import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'sui',
  assets: [{
      description: 'Sui’s native asset is called SUI.',
      denomUnits: [{
          denom: '0x2::sui::SUI',
          exponent: 0,
          aliases: ['MIST']
        }, {
          denom: 'SUI',
          exponent: 9
        }],
      typeAsset: 'unknown',
      base: '0x2::sui::SUI',
      name: 'Sui',
      display: 'SUI',
      symbol: 'SUI',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/sui/images/sui.svg'
      },
      coingeckoId: 'sui',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/sui/images/sui.svg'
        }]
    }]
};
export default info;