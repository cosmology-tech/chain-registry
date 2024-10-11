import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'echelon',
  assets: [{
      description: 'Echelon - a scalable EVM on Cosmos, built on Proof-of-Stake with fast-finality that prioritizes interoperability and novel economics',
      denomUnits: [{
          denom: 'aechelon',
          exponent: 0
        }, {
          denom: 'echelon',
          exponent: 18
        }],
      base: 'aechelon',
      name: 'Echelon',
      display: 'echelon',
      symbol: 'ECH',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/ech.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/ech.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;