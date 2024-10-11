import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'empetestnet',
  assets: [{
      description: 'Empe End-to-End Verifiable Data Infrastructure',
      extendedDescription: 'Empeiria is the first End-to-End Verifiable Data Infrastructure (EVDI). It enables seamless web3 adoption through one-click deployment, empowering organizations with the data of the future',
      denomUnits: [{
          denom: 'uempe',
          exponent: 0
        }, {
          denom: 'empe',
          exponent: 6
        }],
      base: 'uempe',
      display: 'empe',
      name: 'EMPE',
      symbol: 'EMPE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/empetestnet/images/empe.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/empetestnet/images/empe.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/empetestnet/images/empe.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/empetestnet/images/empe.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;