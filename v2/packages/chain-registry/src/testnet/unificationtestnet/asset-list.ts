import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'unificationtestnet',
  assets: [{
      description: 'Staking and governance coin for the Unification Testnet',
      denomUnits: [{
          denom: 'nund',
          exponent: 0
        }, {
          denom: 'FUND',
          exponent: 9
        }],
      base: 'nund',
      name: 'Unification Network',
      display: 'FUND',
      symbol: 'FUND',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'unification',
            baseDenom: 'nund'
          },
          provider: 'Unification'
        }],
      images: [{
          imageSync: {
            chainName: 'unification',
            baseDenom: 'nund'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png',
          theme: {
            primaryColorHex: '#2279c0'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;