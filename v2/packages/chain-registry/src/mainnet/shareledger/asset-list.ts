import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'shareledger',
  assets: [{
      description: 'The native token of Shareledger',
      denomUnits: [{
          denom: 'nshr',
          exponent: 0
        }, {
          denom: 'shr',
          exponent: 9
        }],
      base: 'nshr',
      name: 'Shareledger',
      display: 'shr',
      symbol: 'SHR',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/token.svg'
      },
      keywords: ['id'],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/token.svg',
          theme: {
            primaryColorHex: '#1c2474'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;