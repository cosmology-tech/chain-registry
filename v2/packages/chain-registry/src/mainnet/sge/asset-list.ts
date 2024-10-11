import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'sge',
  assets: [{
      description: 'The native token of SGE Network',
      extendedDescription: 'The Sports, Gaming, and Entertainment Network (SGE Network) is a Cosmos SDK-based layer-1 blockchain that uses its own native utility token (SGE Token). The SGE Network leverages the modular components, blockchain interoperability and minimal gas fees of the Cosmos-based design to support applications at the intersection of blockchain, sports, gaming and entertainment that are pioneering novel ways of engaging users with a UX, value proposition and utility never before seen in the space.',
      denomUnits: [{
          denom: 'usge',
          exponent: 0
        }, {
          denom: 'sge',
          exponent: 6
        }],
      base: 'usge',
      name: 'SGE',
      display: 'sge',
      symbol: 'SGE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg'
      },
      coingeckoId: 'six-sigma',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg',
          theme: {
            primaryColorHex: '#C0A15B',
            backgroundColorHex: '#00000000',
            circle: false
          }
        }],
      socials: {
        website: 'https://sgenetwork.io/',
        twitter: 'https://x.com/sge_network'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;