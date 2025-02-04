import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'atomonetestnet',
  assets: [{
      description: 'The native staking and governance token of AtomOne',
      denomUnits: [{
          denom: 'uatone',
          exponent: 0
        }, {
          denom: 'atone',
          exponent: 6
        }],
      base: 'uatone',
      name: 'Atone',
      display: 'atone',
      symbol: 'ATONE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.svg'
        }],
      typeAsset: 'sdk.coin',
      socials: {
        website: 'https://atom.one',
        twitter: 'https://x.com/_atomone'
      }
    }]
};
export default info;