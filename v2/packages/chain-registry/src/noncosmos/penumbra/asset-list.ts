import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'penumbra',
  assets: [{
      description: 'The native token of Penumbra.',
      extendedDescription: 'A fully private, cross-chain proof-of-stake network and decentralized exchange for the Cosmos and beyond.',
      denomUnits: [{
          denom: 'upenumbra',
          exponent: 0
        }, {
          denom: 'penumbra',
          exponent: 6
        }],
      typeAsset: 'unknown',
      base: 'upenumbra',
      display: 'penumbra',
      symbol: 'UM',
      name: 'Penumbra',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/penumbra/images/um.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/penumbra/images/um.svg',
          theme: {
            circle: true,
            primaryColorHex: '#c7b07f'
          }
        }],
      socials: {
        website: 'https://penumbra.zone/',
        twitter: 'https://twitter.com/penumbrazone'
      }
    }]
};
export default info;