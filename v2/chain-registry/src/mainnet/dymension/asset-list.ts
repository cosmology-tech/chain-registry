import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'dymension',
  assets: [{
      description: 'The native governance and staking token of the Dymension Hub',
      denomUnits: [{
          denom: 'adym',
          exponent: 0
        }, {
          denom: 'dym',
          exponent: 18
        }],
      base: 'adym',
      name: 'Dymension',
      display: 'dym',
      symbol: 'DYM',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
      },
      coingeckoId: 'dymension',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
        }],
      socials: {
        website: 'https://portal.dymension.xyz',
        twitter: 'https://twitter.com/dymension'
      }
    }]
};
export default info;