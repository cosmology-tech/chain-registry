import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'okp4testnet',
  assets: [{
      description: 'The native token of ØKP4.',
      denomUnits: [{
          denom: 'uknow',
          exponent: 0
        }, {
          denom: 'know',
          exponent: 6
        }],
      base: 'uknow',
      name: 'OKP4 Network',
      display: 'know',
      symbol: 'KNOW',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/okp4testnet/images/okp4.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/okp4testnet/images/okp4.png'
        }]
    }]
};
export default info;