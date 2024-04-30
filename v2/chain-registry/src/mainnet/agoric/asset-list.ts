import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'agoric',
  assets: [{
      description: 'BLD is the token used to secure the Agoric chain through staking and to backstop Inter Protocol.',
      denomUnits: [{
          denom: 'ubld',
          exponent: 0
        }, {
          denom: 'bld',
          exponent: 6
        }],
      base: 'ubld',
      name: 'Agoric',
      display: 'bld',
      symbol: 'BLD',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
      },
      coingeckoId: 'agoric',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
        }],
      socials: {
        website: 'https://agoric.com/',
        twitter: 'https://twitter.com/agoric'
      }
    }, {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denomUnits: [{
          denom: 'uist',
          exponent: 0
        }, {
          denom: 'ist',
          exponent: 6
        }],
      base: 'uist',
      name: 'Inter Stable Token',
      display: 'ist',
      symbol: 'IST',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
      },
      coingeckoId: 'inter-stable-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
        }]
    }]
};
export default info;