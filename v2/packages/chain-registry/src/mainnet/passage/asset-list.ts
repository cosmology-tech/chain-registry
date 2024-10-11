import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'passage',
  assets: [{
      description: 'Passage.io is a decentralized platform that enables users to create, distribute, and monetize immersive virtual experiences and content using blockchain technology.',
      extendedDescription: 'Passage.io provides a decentralized environment for creating, distributing, and monetizing virtual experiences and content. By leveraging blockchain technology, Passage.io ensures secure ownership and transparent transactions for digital assets. The platform supports a wide range of virtual content, including virtual reality (VR), augmented reality (AR), and other immersive experiences. Users can create and share their content, interact with others, and earn rewards through the platform\'s native token, PASS. Passage.io aims to revolutionize the virtual content industry by offering a decentralized alternative to traditional content distribution models.',
      denomUnits: [{
          denom: 'upasg',
          exponent: 0
        }, {
          denom: 'pasg',
          exponent: 6
        }],
      base: 'upasg',
      name: 'Passage',
      display: 'pasg',
      symbol: 'PASG',
      coingeckoId: 'passage',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png',
          theme: {
            primaryColorHex: '#05050c'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;