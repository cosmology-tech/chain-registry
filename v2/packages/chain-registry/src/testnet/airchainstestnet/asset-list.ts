import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'airchainstestnet',
  assets: [{
      description: 'The native staking token of Airchains Testnet.',
      denomUnits: [{
          denom: 'amf',
          exponent: 0
        }, {
          denom: 'AMF',
          exponent: 6
        }],
      base: 'amf',
      name: 'Airchains',
      display: 'AMF',
      symbol: 'AMF',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/airchainstestnet/images/airchains-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/airchainstestnet/images/airchains-logo.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;