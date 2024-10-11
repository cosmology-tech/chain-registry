import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'litecoin',
  assets: [{
      description: 'The currency of Litecoin.',
      extendedDescription: 'Litecoin (LTC) is a peer-to-peer cryptocurrency created in 2011 by Charlie Lee as a lighter alternative to Bitcoin. It features faster block generation times and a different hashing algorithm (Scrypt), allowing for quicker transaction processing and lower fees. Often referred to as the "silver to Bitcoin\'s gold," Litecoin is designed to provide a more efficient and accessible digital payment option.',
      denomUnits: [{
          denom: 'litoshi',
          exponent: 0
        }, {
          denom: 'ltc',
          exponent: 8
        }],
      typeAsset: 'bitcoin-like',
      base: 'litoshi',
      name: 'Litecoin',
      display: 'ltc',
      symbol: 'LTC',
      coingeckoId: 'litecoin',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/dogecoin/images/ltc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/dogecoin/images/ltc.png',
          theme: {
            primaryColorHex: '#345D9D',
            circle: true
          }
        }]
    }]
};
export default info;