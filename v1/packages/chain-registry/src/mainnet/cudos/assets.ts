import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'cudos',
  assets: [{
      description: 'The native token of the Cudos blockchain',
      denom_units: [{
          denom: 'acudos',
          exponent: 0,
          aliases: ['attocudos']
        }, {
          denom: 'cudos',
          exponent: 18
        }],
      base: 'acudos',
      name: 'Cudos',
      display: 'cudos',
      symbol: 'CUDOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.svg'
      },
      coingecko_id: 'cudos',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.svg',
          theme: {
            primary_color_hex: '#5d95ec'
          }
        }],
      socials: {
        website: 'http://www.cudos.org',
        twitter: 'https://twitter.com/CUDOS_'
      },
      type_asset: 'sdk.coin'
    }]
};
export default info;