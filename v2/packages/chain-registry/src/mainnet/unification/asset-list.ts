import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'unification',
  assets: [{
      description: 'Staking and governance coin for the Unification Blockchain',
      extendedDescription: 'Fundamentally, the Unification Blockchain Toolkit comprises two core branches: Blockchain Business products, to welcome traditional enterprises into the Web3 economy; and Permissionless Products, an open-access toolkit to power and enrich Dapps on Ethereum/EVM networks',
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
      images: [{
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
      socials: {
        website: 'https://unification.com',
        twitter: 'https://twitter.com/UnificationUND'
      },
      coingeckoId: 'unification',
      typeAsset: 'sdk.coin'
    }]
};
export default info;