import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'dhealth',
  assets: [{
      description: 'The native token of dHealth',
      extendedDescription: 'dHealth Network is an Operating System for Web3 Healthcare. It provides Web3 components such as Decentralised Digital Identity, Digital Payment, and user-controlled data access to support dApps and business models at the intersection of healthcare and blockchain technology.',
      denomUnits: [{
          denom: 'udhp',
          exponent: 0
        }, {
          denom: 'dhp',
          exponent: 6
        }],
      base: 'udhp',
      name: 'Digital Health Point',
      display: 'dhp',
      symbol: 'DHP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.svg'
      },
      coingeckoId: 'dhealth',
      socials: {
        website: 'https://dhealth.com',
        twitter: 'https://twitter.com/dhealth_network'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.svg',
          theme: {
            primaryColorHex: '#140c7c'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;