import { AssetList } from '@chain-registry/types';
const info = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'wardenprotocoltestnet',
  assets: [{
      description: 'The native token of Warden Protocol Testnet',
      denom_units: [{
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
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.svg'
        }]
    }]
} as const satisfies AssetList;
export default info;