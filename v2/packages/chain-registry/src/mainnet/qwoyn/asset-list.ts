import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'qwoyn',
  assets: [{
      description: 'The native governance token for Qwoyn Network',
      extendedDescription: 'The Qwoyn Network stands as a cutting-edge gaming hub that embeds Web3 technologies into the core of interactive entertainment. It revolutionizes the gaming industry by ensuring true ownership of in-game assets for players, facilitated through blockchain. This approach not only enhances gameplay but also fosters a unique ecosystem of interoperability and innovation. As a beacon in the gaming world, Qwoyn Network is dedicated to merging the excitement of traditional gaming with the transformative potential of Web3, creating a seamless and enriched gaming experience.',
      denomUnits: [{
          denom: 'uqwoyn',
          exponent: 0
        }, {
          denom: 'qwoyn',
          exponent: 6
        }],
      base: 'uqwoyn',
      name: 'Qwoyn Network',
      display: 'qwoyn',
      symbol: 'QWOYN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png',
          theme: {
            primaryColorHex: '#04e4fc'
          }
        }],
      keywords: ['gaming'],
      socials: {
        website: 'https://qwoyn.studio',
        twitter: 'https://twitter.com/Qwoyn_Studios'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;