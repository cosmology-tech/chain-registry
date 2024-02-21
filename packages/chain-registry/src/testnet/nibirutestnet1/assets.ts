import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'nibiru',
  assets: [
    {
      description: 'The native token of the Nibiru Ecosystem',
      denom_units: [
        {
          denom: 'unibi',
          exponent: 0
        },
        {
          denom: 'nibi',
          exponent: 6
        }
      ],
      base: 'unibi',
      name: 'Nibiru',
      display: 'nibi',
      symbol: 'NIBI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg'
        }
      ],
      coingecko_id: 'nibi',
      keywords: []
    }
  ]
};
export default info;
