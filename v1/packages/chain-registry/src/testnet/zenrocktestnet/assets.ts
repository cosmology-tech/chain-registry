import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'zenrocktestnet',
  assets: [{
      description: 'The native token of zenrock',
      denom_units: [{
          denom: 'urock',
          exponent: 0,
          aliases: []
        }, {
          denom: 'rock',
          exponent: 6,
          aliases: []
        }],
      base: 'urock',
      name: 'Zenrock',
      display: 'rock',
      symbol: 'ROCK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zenrocktestnet/images/zenrock.png'
      },
      keywords: ['mpc'],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zenrocktestnet/images/zenrock.png'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zenrocktestnet/images/zenrock.svg'
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;