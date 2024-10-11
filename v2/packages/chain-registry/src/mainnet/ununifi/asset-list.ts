import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'ununifi',
  assets: [{
      description: 'The governance token of UnUniFi protocol.',
      denomUnits: [{
          denom: 'uguu',
          exponent: 0
        }, {
          denom: 'guu',
          exponent: 6
        }],
      base: 'uguu',
      name: 'UnUniFi',
      display: 'guu',
      symbol: 'GUU',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.svg'
      },
      keywords: [
        'staking',
        'wasm',
        'assets',
        'nft'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.svg',
          theme: {
            primaryColorHex: '#546c8c'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;