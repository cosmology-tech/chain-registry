import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'medasdigital',
  assets: [
    {
      description: 'The native token of Medas Digital Network',
      denom_units: [
        {
          denom: 'umedas',
          exponent: 0
        },
        {
          denom: 'medas',
          exponent: 6
        }
      ],
      base: 'umedas',
      name: 'Medas Digital',
      display: 'medas',
      symbol: 'MEDAS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.svg'
      },
      keywords: ['medas'],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.svg'
        }
      ]
    }
  ]
};
export default info;
