import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'wardenprotocoltestnet',
  assets: [{
      description: 'The native token of Warden Protocol Testnet',
      denomUnits: [{
          denom: 'uward',
          exponent: 0
        }, {
          denom: 'ward',
          exponent: 6
        }],
      base: 'uward',
      name: 'Ward',
      display: 'ward',
      symbol: 'WARD',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;