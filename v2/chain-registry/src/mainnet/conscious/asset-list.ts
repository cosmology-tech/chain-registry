import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'conscious',
  assets: [{
      description: 'Cvn is a Layer-1 blockchain built to deliver on the promise of DeFi',
      denomUnits: [{
          denom: 'acvnt',
          exponent: 0
        }, {
          denom: 'cvnt',
          exponent: 18
        }],
      base: 'acvnt',
      name: 'Cvn',
      display: 'cvnt',
      symbol: 'CVN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.svg'
      },
      coingeckoId: 'consciousdao',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.svg'
        }],
      socials: {
        website: 'https://cvn.io',
        twitter: 'https://twitter.com/conscious_chain'
      }
    }]
};
export default info;