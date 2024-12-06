import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'aaronetwork',
  assets: [{
      description: 'Aaron Network is an innovative platform for secure and private messaging, integrated into the blockchain ecosystem. We also offer a unique address reputation scoring system, ensuring that every user can interact with others confidently.',
      extendedDescription: 'Aaron Network is an innovative platform for secure and private messaging, integrated into the blockchain ecosystem. We also offer a unique address reputation scoring system, ensuring that every user can interact with others confidently. One of our key tools is address scoring. This blockchain-based solution helps users assess the reliability of those they interact with. You’ll be able to better understand who is on the other end of your communication, making interactions on Aaron Network safer and more trustworthy.',
      denomUnits: [{
          denom: 'uaaron',
          exponent: 0
        }, {
          denom: 'AARON',
          exponent: 6
        }],
      base: 'uaaron',
      name: 'Aaron Network',
      display: 'AARON',
      symbol: 'AARON',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aaronetwork/images/aaron.png'
      },
      socials: {
        website: 'https://aaronetwork.xyz',
        twitter: 'https://x.com/aaronetwork'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aaronetwork/images/aaron.png',
          theme: {
            circle: false
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;