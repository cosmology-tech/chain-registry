import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'onomy',
  assets: [{
      description: 'The native token of Onomy Protocol',
      denomUnits: [{
          denom: 'anom',
          exponent: 0
        }, {
          denom: 'nom',
          exponent: 18
        }],
      base: 'anom',
      name: 'Nom',
      display: 'nom',
      symbol: 'NOM',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.svg'
      },
      keywords: [
        'dex',
        'stablecoin',
        'bridge',
        'staking'
      ],
      coingeckoId: 'onomy-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.svg'
        }]
    }]
};
export default info;