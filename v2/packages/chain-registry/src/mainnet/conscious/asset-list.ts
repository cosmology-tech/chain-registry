import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'conscious',
  assets: [{
      description: 'Cvn is a Layer-1 blockchain built to deliver on the promise of DeFi',
      extendedDescription: 'Conscious Network is a public chain infrastructure that deeply integrates AI. It is based on a multi-layer blockchain network architecture consisting of Layer 1 and L2 Rollup, and introduces decentralized storage protocols to build a scalable Web3 AI infrastructure.',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.svg',
          theme: {
            primaryColorHex: '#047e04'
          }
        }],
      socials: {
        website: 'https://cvn.io',
        twitter: 'https://twitter.com/conscious_chain'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;