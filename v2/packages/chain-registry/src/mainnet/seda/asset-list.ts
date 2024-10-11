import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'seda',
  assets: [{
      description: 'The native token of SEDA Chain.',
      extendedDescription: 'SEDA is a standard for modular data transport and querying. Any data type, for all networks.',
      denomUnits: [{
          denom: 'aseda',
          exponent: 0
        }, {
          denom: 'seda',
          exponent: 18
        }],
      base: 'aseda',
      name: 'Seda',
      display: 'seda',
      symbol: 'SEDA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.svg'
      },
      coingeckoId: 'seda-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.svg',
          theme: {
            primaryColorHex: '#8178d1'
          }
        }],
      socials: {
        website: 'https://www.seda.xyz/',
        twitter: 'https://twitter.com/sedaprotocol'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;