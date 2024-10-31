import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'mantrachaintestnet2',
  assets: [{
      description: 'The native token of MANTRA',
      extendedDescription: 'The first RWA Layer 1 Blockchain, capable of adherence and enforcement of real world regulatory requirements.',
      denomUnits: [{
          denom: 'uom',
          exponent: 0
        }, {
          denom: 'om',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'uom',
      name: 'MANTRA Chain Dukong',
      display: 'om',
      symbol: 'OM',
      keywords: [
        'rwa',
        'wasm',
        'staking',
        'testnet'
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg',
          theme: {
            circle: true,
            primaryColorHex: '#fba0c1'
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Darkmatt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Darkmatt.svg',
          theme: {
            darkMode: true,
            circle: true,
            primaryColorHex: '#342c2c'
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-WHT.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-WHT.svg',
          theme: {
            darkMode: false,
            circle: true,
            primaryColorHex: '#342c2c'
          }
        }
      ],
      socials: {
        website: 'https://www.mantrachain.io/',
        twitter: 'https://x.com/MANTRA_Chain'
      }
    }]
};
export default info;