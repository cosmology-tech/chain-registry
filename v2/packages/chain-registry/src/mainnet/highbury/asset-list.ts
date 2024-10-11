import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'highbury',
  assets: [
    {
      description: 'The native staking and governance token of the Blackfury ecosystem',
      denomUnits: [{
          denom: 'ufury',
          exponent: 0
        }, {
          denom: 'fury',
          exponent: 6
        }],
      base: 'ufury',
      name: 'Fury',
      display: 'fury',
      symbol: 'FURY',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/fury.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/fury.svg'
      },
      coingeckoId: 'fanfury',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/fury.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/fury.svg',
          theme: {
            primaryColorHex: '#040404'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Governance token of Jinx Wallet and Fury Lend Protocol',
      denomUnits: [{
          denom: 'jinx',
          exponent: 0
        }, {
          denom: 'JINX',
          exponent: 6
        }],
      base: 'jinx',
      name: 'Jinx',
      display: 'JINX',
      symbol: 'JINX',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/jinx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/jinx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/jinx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/jinx.svg',
          theme: {
            primaryColorHex: '#040404'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Governance token of Fury Swap Protocol',
      denomUnits: [{
          denom: 'jinxy',
          exponent: 0
        }, {
          denom: 'JINXY',
          exponent: 6
        }],
      base: 'jinxy',
      name: 'Jinxy',
      display: 'JINXY',
      symbol: 'JINXy',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/jinxy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/jinxy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/jinxy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/jinxy.svg',
          theme: {
            primaryColorHex: '#090909'
          }
        }],
      typeAsset: 'sdk.coin'
    }
  ]
};
export default info;