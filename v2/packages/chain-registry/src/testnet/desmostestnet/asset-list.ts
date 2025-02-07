import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'desmostestnet',
  assets: [{
      description: 'The native token of Desmos',
      denomUnits: [{
          denom: 'udaric',
          exponent: 0
        }, {
          denom: 'daric',
          exponent: 6
        }],
      base: 'udaric',
      name: 'Desmos Testnet',
      display: 'daric',
      symbol: 'DARIC',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'desmos',
            baseDenom: 'udsm'
          },
          provider: 'Desmos'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/desmos/images/dsm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/desmos/images/dsm.svg'
      },
      coingeckoId: 'desmos',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/desmos/images/dsm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/desmos/images/dsm.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;