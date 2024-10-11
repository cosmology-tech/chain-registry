import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'synternettestnet',
  assets: [{
      description: 'The native staking and governance token of the testnet version of Synternet chain.',
      denomUnits: [{
          denom: 'uamber',
          exponent: 0
        }, {
          denom: 'AMBER',
          exponent: 6
        }],
      base: 'uamber',
      name: 'Synternet',
      display: 'AMBER',
      symbol: 'AMBER',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/synternet/images/synt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/synternet/images/synt.svg'
      },
      images: [{
          imageSync: {
            chainName: 'synternet',
            baseDenom: 'usynt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/synternet/images/synt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/synternet/images/synt.svg',
          theme: {
            primaryColorHex: '#272d45'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;