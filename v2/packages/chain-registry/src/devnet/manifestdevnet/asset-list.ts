import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'manifestdevnet',
  assets: [{
      description: 'Manifest devnet native token',
      denomUnits: [{
          denom: 'umfx',
          exponent: 0
        }, {
          denom: 'mfx',
          exponent: 6
        }],
      base: 'umfx',
      name: 'Manifest Devnet Token',
      display: 'mfx',
      symbol: 'MFX',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      typeAsset: 'sdk.coin'
    }, {
      description: 'Proof of Authority token for the Manifest devnet',
      denomUnits: [{
          denom: 'upoa',
          exponent: 0
        }, {
          denom: 'poa',
          exponent: 6
        }],
      base: 'upoa',
      name: 'Manifest Devnet Authority Token',
      display: 'poa',
      symbol: 'POA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;