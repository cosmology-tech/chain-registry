import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'secretnetworktestnet2',
  assets: [{
      description: 'The native token of Secret Network',
      denomUnits: [{
          denom: 'uscrt',
          exponent: 0
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'uscrt',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;