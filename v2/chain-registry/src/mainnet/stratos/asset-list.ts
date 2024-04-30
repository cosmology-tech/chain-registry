import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'stratos',
  assets: [{
      description: 'STOS coin is the token for the Stratos (STOS) cosmos based blockchain',
      denomUnits: [
        {
          denom: 'wei',
          exponent: 0
        },
        {
          denom: 'gwei',
          exponent: 9
        },
        {
          denom: 'stos',
          exponent: 18
        }
      ],
      base: 'wei',
      name: 'Stratos',
      display: 'stos',
      symbol: 'STOS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.svg'
      },
      coingeckoId: 'stratos',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.svg'
        }]
    }]
};
export default info;