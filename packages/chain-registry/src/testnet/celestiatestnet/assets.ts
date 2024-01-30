import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'celestiatestnet',
  assets: [
    {
      description: '',
      denom_units: [
        {
          denom: 'utia',
          exponent: 0
        },
        {
          denom: 'tia',
          exponent: 6
        }
      ],
      base: 'utia',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet/images/celestia.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet/images/celestia.svg'
        }
      ]
    }
  ]
};
export default info;
