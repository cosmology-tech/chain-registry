import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'manifestdevnet',
  assets: [{
      description: 'Manifest devnet native token',
      denom_units: [{
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
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    }, {
      description: 'Proof of Authority token for the Manifest devnet',
      denom_units: [{
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
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;