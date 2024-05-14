import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'penumbra',
  assets: [{
      description: 'The native token of Penumbra.',
      extended_description: 'A fully private, cross-chain proof-of-stake network and decentralized exchange for the Cosmos and beyond.',
      denom_units: [
        {
          denom: 'penumbra',
          exponent: 6
        },
        {
          denom: 'mpenumbra',
          exponent: 3
        },
        {
          denom: 'upenumbra',
          exponent: 0
        }
      ],
      type_asset: 'unknown',
      base: 'upenumbra',
      display: 'penumbra',
      symbol: 'UM',
      name: 'Penumbra',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/penumbra/images/um.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/penumbra/images/um.svg'
        }],
      socials: {
        website: 'https://penumbra.zone/',
        twitter: 'https://twitter.com/penumbrazone'
      }
    }]
};
export default info;